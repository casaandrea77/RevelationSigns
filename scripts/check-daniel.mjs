import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const studies = JSON.parse(read('src/app/daniel/studies.json'));
const scripture = JSON.parse(read('src/app/daniel/scripture.json'));
const art = JSON.parse(read('src/app/daniel/illustrations.json'));
const counts = [21,49,30,37,31,28,28,27,27,21,45,13];
assert.deepEqual(scripture.map(chapter => chapter.length), counts, 'All 357 Daniel verses must be present');
for (const study of studies) {
  const n = study.number;
  assert.ok(n !== 2, 'Daniel 2 is covered by its own lesson');
  const covered = study.scenes.flatMap(scene => {
    assert.ok(scene.end >= scene.start && scene.title && scene.text);
    return Array.from({length:scene.end-scene.start+1}, (_, i) => scene.start+i);
  });
  assert.deepEqual(covered, Array.from({length:counts[n-1]}, (_, i) => i+1), `Daniel ${n}: every verse must be covered exactly once`);
  assert.equal(study.symbols.length, 3);
  assert.ok(study.connections.length >= 2);
  assert.equal(study.questions.length, 3);
  assert.ok(study.time && study.interpretation.text && study.reflection && study.prayer);
  for (const item of art[String(n)] ?? []) assert.ok(existsSync(new URL(`../public${item.src}`, import.meta.url)), `Missing image ${item.src}`);
  const html = read(`.next/server/app/daniel/chapter-${n}.html`);
  for (let verse=1; verse<=counts[n-1]; verse++) assert.ok(html.includes(`id="verse-${verse}"`), `Missing verse ${n}:${verse}`);
  assert.ok(!html.includes('Revelation ' + n + ' <span>'), `Wrong book label ${n}`);
}
const overview = read('.next/server/app/daniel.html');
for (const { number } of studies) assert.ok(overview.includes(`href="/daniel/chapter-${number}"`));
assert.ok(overview.includes('href="/bible-studies/prophecy/daniel-2"'));
assert.ok(read('.next/server/app/daniel-revelation.html').includes('href="/daniel"'));
console.log(`Passed: ${studies.length} Daniel chapter studies, ${counts.reduce((a,b)=>a+b)} verses, complete scene coverage and links.`);
