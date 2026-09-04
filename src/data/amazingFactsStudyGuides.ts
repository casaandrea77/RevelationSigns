export type AmazingFactsStudyGuide = {
  number: number;
  slug: string;
  title: string;
};

export const amazingFactsStudyGuides: AmazingFactsStudyGuide[] = [
  { number: 1, slug: "is-there-anything-left-you-can-trust", title: "Is There Anything Left You Can Trust?" },
  { number: 2, slug: "did-god-create-the-devil", title: "Did God Create the Devil?" },
  { number: 3, slug: "saved-from-certain-death", title: "Saved from Certain Death" },
  { number: 4, slug: "a-colossal-city-in-space", title: "A Colossal City in Space" },
  { number: 5, slug: "keys-for-a-happy-marriage", title: "Keys for a Happy Marriage" },
  { number: 6, slug: "written-in-stone", title: "Written in Stone!" },
  { number: 7, slug: "the-lost-day-of-history", title: "The Lost Day of History" },
  { number: 8, slug: "ultimate-deliverance", title: "Ultimate Deliverance" },
  { number: 9, slug: "purity-and-power", title: "Purity & Power!" },
  { number: 10, slug: "are-the-dead-really-dead", title: "Are the Dead Really Dead?" },
  { number: 11, slug: "is-the-devil-in-charge-of-hell", title: "Is the Devil in Charge of Hell?" },
  { number: 12, slug: "one-thousand-years-of-peace", title: "1,000 Years of Peace" },
  { number: 13, slug: "gods-free-health-plan", title: "God’s Free Health Plan" },
  { number: 14, slug: "is-obedience-legalism", title: "Is Obedience Legalism?" },
  { number: 15, slug: "who-is-the-antichrist", title: "Who Is the Antichrist?" },
  { number: 16, slug: "angel-messages-from-space", title: "Angel Messages from Space" },
  { number: 17, slug: "god-drew-the-plans", title: "God Drew the Plans" },
  { number: 18, slug: "right-on-time", title: "Right on Time!" },
  { number: 19, slug: "the-final-judgment", title: "The Final Judgment" },
  { number: 20, slug: "the-mark-of-the-beast", title: "The Mark of the Beast" },
  { number: 21, slug: "the-usa-in-bible-prophecy", title: "The USA in Bible Prophecy" },
  { number: 22, slug: "the-other-woman", title: "The “Other” Woman" },
  { number: 23, slug: "the-bride-of-christ", title: "The Bride of Christ" },
  { number: 24, slug: "does-god-inspire-astrologists-and-psychics", title: "Does God Inspire Astrologists and Psychics?" },
  { number: 25, slug: "in-god-we-trust", title: "In God We Trust?" },
  { number: 26, slug: "a-love-that-transforms", title: "A Love that Transforms" },
  { number: 27, slug: "no-turning-back", title: "No Turning Back" },
];

export function amazingFactsGuideHref(guide: AmazingFactsStudyGuide) {
  return guide.number === 1
    ? "/bible-studies/gods-amazing-book"
    : `/bible-studies/amazing-facts/${guide.slug}`;
}

const italianGuideSlugs = [
  "ce-ancora-qualcosa-di-cui-fidarsi",
  "dio-ha-creato-il-diavolo",
  "salvati-da-morte-certa",
  "una-citta-colossale-nello-spazio",
  "chiavi-per-un-matrimonio-felice",
  "scritto-nella-pietra",
  "il-giorno-perduto-della-storia",
  "la-liberazione-definitiva",
  "purezza-e-potere",
  "i-morti-sono-davvero-morti",
  "il-diavolo-e-a-capo-dellinferno",
  "1-000-anni-di-pace",
  "il-piano-sanitario-gratuito-di-dio",
  "lobbedienza-e-legalismo",
  "chi-e-lanticristo",
  "messaggi-degli-angeli-dallo-spazio",
  "dio-ha-disegnato-i-piani",
  "in-perfetto-orario-appuntamenti-profetici-rivelati",
  "il-giudizio-finale",
  "il-marchio-della-bestia",
  "gli-stati-uniti-nella-profezia-biblica",
  "laltra-donna",
  "la-sposa-di-cristo",
  "dio-ispira-gli-astrologi-e-i-sensitivi",
  "in-dio-confidiamo",
  "un-amore-che-trasforma",
  "non-si-torna-indietro",
] as const;

export function amazingFactsItalianHref(guide: AmazingFactsStudyGuide) {
  return `https://www.amazingfacts.org/it/studio/guide-allo-studio-della-bibbia/${italianGuideSlugs[guide.number - 1]}/`;
}

export function getAmazingFactsGuideBySlug(slug: string) {
  return amazingFactsStudyGuides.find((guide) => guide.slug === slug);
}
