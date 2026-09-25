import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const studies = JSON.parse(read('src/app/revelation/studies.json'));
const scripture = JSON.parse(read('src/app/revelation/scripture.json'));
const counts = [20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21];
assert.deepEqual(scripture.map(chapter => chapter.length), counts, 'All 404 Revelation verses must be present');
assert.deepEqual(studies.map(study => study.number), Array.from({length:21}, (_, i) => i + 2));
for (const study of studies) {
  const covered = study.scenes.flatMap(scene => {
    assert.ok(scene.end >= scene.start);
    assert.ok(scene.title && scene.text);
    return Array.from({length:scene.end-scene.start+1}, (_, i) => scene.start+i);
  });
  assert.deepEqual(covered, Array.from({length:counts[study.number-1]}, (_, i) => i+1), `Chapter ${study.number}: every verse must be covered exactly once`);
  assert.equal(study.symbols.length, 3);
  assert.equal(study.connections.length, 2);
  assert.equal(study.questions.length, 3);
  assert.ok(study.time && study.interpretation.text && study.reflection && study.prayer);
}
// Check generated pages as well as source data: routing, full scripture, navigation and playlist.
for (let n=1;n<=22;n++) {
  const file = `.next/server/app/revelation/chapter-${n}.html`;
  assert.ok(existsSync(new URL(`../${file}`, import.meta.url)), `Missing built chapter ${n}`);
  const html = read(file);
  for (let verse=1;verse<=counts[n-1];verse++) assert.ok(html.includes(`id="verse-${verse}"`), `Missing verse ${n}:${verse}`);
  assert.ok(html.includes('youtube-nocookie.com/embed/uKcXTYWh2F0?list='), `Missing playlist ${n}`);
  assert.ok(html.includes('href="/revelation/symbols#'), `Missing symbol shortcuts ${n}`);
  if(n<22) assert.ok(html.includes(`href="/revelation/chapter-${n+1}"`), `Missing next chapter ${n}`);
  if(n>1) assert.ok(html.includes(`href="/revelation/chapter-${n-1}"`), `Missing previous chapter ${n}`);
  assert.ok(!html.includes('being prepared'), `Unfinished copy ${n}`);
}
const overview = read('.next/server/app/revelation.html');
const sitemap = read('.next/server/app/sitemap.xml.body');
for(let n=1;n<=22;n++) {
  assert.ok(overview.includes(`href="/revelation/chapter-${n}"`));
  assert.ok(sitemap.includes(`/revelation/chapter-${n}</loc>`));
}
console.log('Passed: 22 built chapters, 404 verses, complete scene coverage, symbol links, playlist, navigation and sitemap.');
