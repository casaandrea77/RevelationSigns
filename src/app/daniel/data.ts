import studies from './studies.json';

export { bibleUrl } from '../revelation/data';

// [title, short description, theme artwork in /media/images/daniel-revelation]
export const chapters = [
  ['Faithful in Babylon', 'Daniel and his friends stay loyal to God in a foreign king’s court.', 'babylon'],
  ['The king’s dream', 'A great statue of metals, and a stone kingdom that fills the earth.', 'kingdom-stone'],
  ['The fiery furnace', 'Three friends refuse to bow to a golden image, and God is with them in the fire.', 'babylon'],
  ['The proud king is humbled', 'Nebuchadnezzar learns that the most High rules in the kingdom of men.', 'babylon'],
  ['The writing on the wall', 'Belshazzar’s feast ends with a message from God and the fall of Babylon.', 'persia'],
  ['The lions’ den', 'Daniel keeps praying, and God shuts the lions’ mouths.', 'persia'],
  ['Four beasts and the judgment', 'Four kingdoms rise from the sea, the court in heaven sits, and the Son of man receives the kingdom.', 'symbol-fourth-beast'],
  ['The ram, the goat and the sanctuary', 'Media-Persia and Greece are named, and the sanctuary will be cleansed after 2,300 days.', 'symbol-horns'],
  ['A prayer and seventy weeks', 'Daniel prays for Jerusalem, and Gabriel brings a time prophecy about the Messiah.', 'gabriel'],
  ['A messenger by the river', 'Daniel sees a glorious man and learns of a conflict behind the scenes.', 'daniel-strengthened'],
  ['Kings of the north and south', 'A long prophecy of rival kings, reaching to the time of the end.', 'final-globe'],
  ['Michael stands up', 'A time of trouble, deliverance for God’s people and the resurrection.', 'resurrection'],
] as const;

export const verseCounts = [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13];

// Daniel 2 already has its own in-depth lesson; it is linked rather than duplicated.
export const danielTwoLesson = '/bible-studies/prophecy/daniel-2';

export function chapterHref(n: number): string | null {
  if (n === 2) return danielTwoLesson;
  return studies.some(study => study.number === n) ? `/daniel/chapter-${n}` : null;
}

export const danielParts = [
  { title: 'Stories of faithfulness', chapters: 'Chapters 1–6', first: 1, last: 6, art: 'babylon', time: 'Babylon and Persia · about 605–536 BC', text: 'Daniel and his friends live as exiles. God shows kings that He rules, and He stands by those who stay loyal to Him.' },
  { title: 'Visions of the future', chapters: 'Chapters 7–12', first: 7, last: 12, art: 'daniel-vision', time: 'From Daniel’s day to the end', text: 'Daniel’s own visions follow history to the time of the end, the judgment and God’s everlasting kingdom.' },
];
