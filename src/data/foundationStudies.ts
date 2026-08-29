export type StudyQuestion = { ref: string; q: string; verse: string; answer: string };

export type FoundationStudy = {
  slug: string;
  number: string;
  title: [string, string];
  photoClass: string;
  introLead: string;
  intro: string[];
  asideTitle: string;
  asideText: string;
  questionsEyebrow: string;
  questionsTitle: [string, string];
  questions: StudyQuestion[];
  calloutEyebrow: string;
  calloutTitle: [string, string];
  calloutText: string;
  summaryTitle: [string, string];
  summaryText: string;
  reflectionPrompt: string;
  previous: { number: string; title: string; href: string };
  next?: { title: string; href: string };
};

export const foundationStudies: Record<string, FoundationStudy> = {
  "sin-and-its-cure": {
    slug: "sin-and-its-cure", number: "06", title: ["Sin and", "Its Cure"], photoClass: "study-6-photo",
    introLead: "If sin is the disease, what is God’s cure?",
    intro: ["The Bible never minimises the seriousness of sin, yet its central message is not condemnation—it is rescue. God Himself has acted in Jesus Christ to bear our guilt and restore the relationship we could not repair.", "This study follows the path from the wages of sin to the gift of eternal life, showing how grace, repentance, confession and faith bring Christ’s saving work into a human life."],
    asideTitle: "The remedy is a Person", asideText: "Salvation is not earned by performing religious duties. It is received by trusting the crucified and risen Christ.",
    questionsEyebrow: "From guilt to grace", questionsTitle: ["The cross.", "The open door."],
    questions: [
      { ref: "Romans 6:23", q: "What are the opposing outcomes of sin and God’s gift?", verse: "The wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.", answer: "Sin earns death, but eternal life is not a wage we earn. It is God’s gift, given through Jesus Christ." },
      { ref: "John 3:16", q: "What moved God to give His Son?", verse: "God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish.", answer: "The plan of salvation begins in God’s love. Christ was given for the whole world, and its promise is personally received through faith." },
      { ref: "1 Peter 2:24", q: "What did Christ bear at the cross?", verse: "Who his own self bare our sins in his own body on the tree... by whose stripes ye were healed.", answer: "Jesus did not merely teach a better way; He bore our sins and their consequence so that we might be healed and live differently." },
      { ref: "Ephesians 2:8–9", q: "Can salvation be earned by good works?", verse: "By grace are ye saved through faith... it is the gift of God: not of works.", answer: "Grace rules out boasting. We are saved by receiving what God has done, not by presenting our achievements as payment." },
      { ref: "Acts 2:38", q: "What response did Peter call for?", verse: "Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins.", answer: "Repentance is a genuine turning of heart and direction toward God. Baptism publicly expresses that new allegiance." },
      { ref: "1 John 1:9", q: "What does God promise when we confess our sins?", verse: "He is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.", answer: "Confession agrees honestly with God about our sin. His response is both forgiveness for guilt and cleansing from unrighteousness." },
      { ref: "Isaiah 1:18", q: "How complete can God’s cleansing be?", verse: "Though your sins be as scarlet, they shall be as white as snow.", answer: "No stain is too deep for God’s grace. His invitation offers a cleansing beyond what human effort can produce." },
      { ref: "Hebrews 7:25", q: "How fully is Christ able to save?", verse: "He is able also to save them to the uttermost that come unto God by him.", answer: "Christ’s saving ministry is sufficient and ongoing. Everyone who comes to God through Him may have confidence in His intercession." },
      { ref: "Romans 8:1", q: "What is true of those who are in Christ?", verse: "There is therefore now no condemnation to them which are in Christ Jesus.", answer: "Union with Christ changes our standing before God. The verdict of condemnation gives way to acceptance and a new life in the Spirit." },
      { ref: "Ezekiel 36:26", q: "Does God only forgive, or does He also change the heart?", verse: "A new heart also will I give you, and a new spirit will I put within you.", answer: "The cure reaches deeper than a legal pardon. God promises inward renewal—a new heart capable of responding to Him." },
    ],
    calloutEyebrow: "Grace that transforms", calloutTitle: ["Forgiven fully.", "Changed deeply."], calloutText: "The gospel does not choose between pardon and transformation. In Christ, God removes condemnation and begins remaking the heart.",
    summaryTitle: ["The debt is paid.", "The gift is offered."], summaryText: "Christ bore our sins, opened the way back to God and offers eternal life as a gift. We receive His cure through faith, repentance and confession—and He begins a work of genuine renewal within us.", reflectionPrompt: "What makes it difficult—or freeing—to receive salvation as God’s gift?",
    previous: { number: "05", title: "The Problem of Sin", href: "/bible-studies/problem-of-sin" }, next: { title: "A New Person", href: "/bible-studies/a-new-person" },
  },
  "a-new-person": {
    slug: "a-new-person", number: "07", title: ["A New", "Person"], photoClass: "study-7-photo",
    introLead: "Can a life truly begin again?", intro: ["Jesus described conversion as a new birth. The gospel is not simply an improved set of habits placed over an unchanged heart; it is the beginning of a new identity and a new direction.", "This study explores how the Holy Spirit creates that life, how baptism portrays it, and how daily surrender allows Christ’s character to grow in us."],
    asideTitle: "A beginning, then a journey", asideText: "New birth begins the Christian life. Growth continues as we trust, learn, surrender and walk with Christ each day.",
    questionsEyebrow: "The life made new", questionsTitle: ["Born of God.", "Growing in grace."],
    questions: [
      { ref: "John 3:3", q: "What did Jesus say is necessary to see God’s kingdom?", verse: "Except a man be born again, he cannot see the kingdom of God.", answer: "Christianity begins with more than information or family tradition. Jesus says we need a spiritual new birth." },
      { ref: "John 3:5–6", q: "Who brings about the new birth?", verse: "Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.", answer: "The Holy Spirit produces spiritual life. Water points to cleansing and baptism; the change itself is God’s work within us." },
      { ref: "2 Corinthians 5:17", q: "How does Scripture describe a person who is in Christ?", verse: "If any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.", answer: "Christ gives a new identity. Past history no longer has the final word, because a new life and direction have begun." },
      { ref: "John 1:12–13", q: "How do we become children of God?", verse: "As many as received him, to them gave he power to become the sons of God, even to them that believe on his name.", answer: "We receive Christ by faith. This new family identity is born of God, not inherited through human ancestry." },
      { ref: "Ephesians 4:22–24", q: "What daily change accompanies the new life?", verse: "Put off... the old man... and put on the new man, which after God is created in righteousness and true holiness.", answer: "God’s gift calls for continuing choices: old patterns are laid aside while a Christlike character is deliberately embraced." },
      { ref: "Galatians 2:20", q: "Who becomes the centre of the believer’s life?", verse: "I live; yet not I, but Christ liveth in me... I live by the faith of the Son of God.", answer: "The new life is not self-improvement powered by pride. It is Christ living in us as we depend upon Him by faith." },
      { ref: "Romans 12:2", q: "Where does transformation take place?", verse: "Be ye transformed by the renewing of your mind.", answer: "God reshapes our thinking, values and desires. A renewed mind learns to recognise and choose His will." },
      { ref: "Galatians 5:22–23", q: "What fruit does the Spirit produce?", verse: "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance.", answer: "The evidence of the Spirit is Christlike character. This fruit grows through His presence rather than mere external conformity." },
      { ref: "Romans 6:4", q: "What does baptism portray?", verse: "We are buried with him by baptism into death... even so we also should walk in newness of life.", answer: "Baptism symbolises burial of the old life and resurrection with Christ into a new way of living." },
      { ref: "Philippians 1:6", q: "Who promises to continue the work He begins?", verse: "He which hath begun a good work in you will perform it until the day of Jesus Christ.", answer: "Growth can include struggle, but our confidence rests in God’s faithfulness to continue what He has begun." },
    ],
    calloutEyebrow: "More than reform", calloutTitle: ["A new heart.", "A new direction."], calloutText: "God does not merely polish the old life. Through His Spirit, He creates new desires, a new identity and the power to walk with Christ.",
    summaryTitle: ["The old life is buried.", "A new life begins."], summaryText: "To receive Christ is to be born into God’s family. The Spirit renews the mind, baptism declares our union with Christ, and His fruit becomes visible as God faithfully continues His work in us.", reflectionPrompt: "Where do you most want Christ to make His new life visible in you?",
    previous: { number: "06", title: "Sin and Its Cure", href: "/bible-studies/sin-and-its-cure" }, next: { title: "Law & Gospel", href: "/bible-studies/law-and-gospel" },
  },
  "law-and-gospel": {
    slug: "law-and-gospel", number: "08", title: ["Law &", "Gospel"], photoClass: "study-8-photo",
    introLead: "Do God’s law and His grace oppose each other?", intro: ["The law reveals God’s character and shows what sin is; the gospel reveals His saving action in Christ. Confusing their roles produces either self-righteousness or a grace that leaves the heart unchanged.", "This study shows their harmony: the law cannot save us, grace does not excuse sin, and the new covenant writes God’s principles of love within the heart."],
    asideTitle: "Different roles, one purpose", asideText: "The law diagnoses sin. The gospel provides the Saviour. Grace then creates a life that delights to follow God.",
    questionsEyebrow: "Truth and grace together", questionsTitle: ["The perfect standard.", "The sufficient Saviour."],
    questions: [
      { ref: "Romans 3:20", q: "What knowledge comes through the law?", verse: "By the law is the knowledge of sin.", answer: "The law identifies sin and makes our need visible. It functions as a standard and mirror, not as the power that saves." },
      { ref: "Romans 7:12", q: "How does Paul describe God’s law?", verse: "The law is holy, and the commandment holy, and just, and good.", answer: "The problem is not the law. It reflects the goodness and justice of the Lawgiver; the problem lies in human sin." },
      { ref: "Matthew 5:17", q: "Did Jesus come to destroy the law?", verse: "Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil.", answer: "Jesus fulfilled Scripture and perfectly embodied its intent. His life magnified rather than dismissed God’s moral will." },
      { ref: "Psalm 19:7", q: "What does God’s law reveal about its Author?", verse: "The law of the Lord is perfect, converting the soul: the testimony of the Lord is sure.", answer: "Because God is trustworthy, His instruction is dependable. It points toward wholeness and wisdom." },
      { ref: "Ephesians 2:8–10", q: "What is the relationship between grace and good works?", verse: "By grace are ye saved through faith... not of works... created in Christ Jesus unto good works.", answer: "Works never purchase salvation, yet salvation creates a life prepared for good works. They are fruit, not the price." },
      { ref: "Romans 3:31", q: "Does faith make the law meaningless?", verse: "Do we then make void the law through faith? God forbid: yea, we establish the law.", answer: "Faith upholds the law by acknowledging our guilt, trusting Christ’s righteousness and restoring willing obedience." },
      { ref: "John 14:15", q: "What motive did Jesus give for obedience?", verse: "If ye love me, keep my commandments.", answer: "Christian obedience is relational. It is the response of love to Christ, not an attempt to force God to love us." },
      { ref: "Hebrews 8:10", q: "Where does God write His law in the new covenant?", verse: "I will put my laws into their mind, and write them in their hearts.", answer: "The new covenant moves God’s will from an external demand to an internal delight through His transforming presence." },
      { ref: "Galatians 3:24", q: "To whom does the law direct us?", verse: "The law was our schoolmaster to bring us unto Christ, that we might be justified by faith.", answer: "By exposing our inability to justify ourselves, the law leads us to the only One who can save." },
      { ref: "Revelation 14:12", q: "What qualities mark God’s faithful people?", verse: "Here are they that keep the commandments of God, and the faith of Jesus.", answer: "Revelation joins faith and faithfulness. God’s people trust Jesus and, through that relationship, keep His commandments." },
    ],
    calloutEyebrow: "The new covenant", calloutTitle: ["Grace saves us.", "Love reshapes us."], calloutText: "The gospel never turns obedience into a payment. It forgives the lawbreaker and writes God’s loving principles upon a willing heart.",
    summaryTitle: ["The law points to Christ.", "Christ restores the heart."], summaryText: "God’s holy law reveals sin but cannot justify the sinner. We are saved entirely by grace through faith, then recreated for a life in which obedience flows from love and God’s law is written within.", reflectionPrompt: "How does seeing obedience as a response to love change your picture of God’s law?",
    previous: { number: "07", title: "A New Person", href: "/bible-studies/a-new-person" }, next: { title: "The World’s Only Hope", href: "/bible-studies/worlds-only-hope" },
  },
  "worlds-only-hope": {
    slug: "worlds-only-hope", number: "09", title: ["The World’s", "Only Hope"], photoClass: "study-9-photo",
    introLead: "Will history continue forever as it is?", intro: ["Jesus promised to return. Scripture presents His second coming not as a private metaphor but as the visible, glorious event that ends the present age, raises the faithful dead and gathers God’s people.", "This study examines the manner of Christ’s return, the resurrection hope and the readiness that grows from watching, trusting and living faithfully."],
    asideTitle: "The blessed hope", asideText: "Christian hope is anchored in a Person who promised to return—not in humanity’s ability to perfect a broken world.",
    questionsEyebrow: "The King returns", questionsTitle: ["Visible glory.", "Living hope."],
    questions: [
      { ref: "John 14:1–3", q: "What personal promise did Jesus give His disciples?", verse: "I will come again, and receive you unto myself; that where I am, there ye may be also.", answer: "Jesus anchors troubled hearts in His return. He is preparing a place and will personally gather His people to Himself." },
      { ref: "Acts 1:9–11", q: "How will Jesus return?", verse: "This same Jesus... shall so come in like manner as ye have seen him go into heaven.", answer: "The same Jesus who visibly ascended will return. His coming is personal and real, not merely an invisible influence." },
      { ref: "Revelation 1:7", q: "How widely will His coming be witnessed?", verse: "Behold, he cometh with clouds; and every eye shall see him.", answer: "Christ’s return will not be a secret event limited to a select group. Scripture describes worldwide visibility." },
      { ref: "Matthew 24:27", q: "What picture did Jesus use for His coming?", verse: "As the lightning cometh out of the east, and shineth even unto the west; so shall also the coming of the Son of man be.", answer: "Like lightning across the sky, the return of Christ will be unmistakable and glorious." },
      { ref: "1 Thessalonians 4:16–17", q: "What happens to believers when the Lord descends?", verse: "The dead in Christ shall rise first... then we which are alive... shall be caught up together with them... to meet the Lord.", answer: "The second coming includes resurrection and reunion. Living and resurrected believers meet Christ together." },
      { ref: "1 Corinthians 15:51–53", q: "What change takes place at the last trumpet?", verse: "The dead shall be raised incorruptible, and we shall be changed.", answer: "Mortality does not inherit eternity unchanged. God clothes His people with incorruption and immortality." },
      { ref: "Matthew 24:36", q: "Can anyone calculate the exact date?", verse: "Of that day and hour knoweth no man, no, not the angels of heaven, but my Father only.", answer: "Jesus rules out date-setting. Biblical readiness is faithful relationship, not confident prediction of a hidden date." },
      { ref: "Matthew 24:42", q: "What response does Jesus ask from us?", verse: "Watch therefore: for ye know not what hour your Lord doth come.", answer: "Watching means spiritual alertness—living today in a way that welcomes Christ’s appearing." },
      { ref: "Titus 2:13", q: "How does Paul describe Christ’s return?", verse: "Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ.", answer: "The second coming is the church’s blessed hope: the open appearing of the Saviour who brings deliverance." },
      { ref: "Revelation 22:20", q: "What final prayer does Scripture teach us to pray?", verse: "Surely I come quickly. Amen. Even so, come, Lord Jesus.", answer: "The Bible closes with promise and response. Those who love Christ can long for His presence and pray for His return." },
    ],
    calloutEyebrow: "Not a secret", calloutTitle: ["The heavens declare it.", "Every eye beholds it."], calloutText: "Christ’s coming is personal, visible, audible and glorious. It raises the dead in Christ and gathers the whole redeemed family to their King.",
    summaryTitle: ["The promise remains.", "The King is coming."], summaryText: "Jesus will return visibly and personally. At His appearing, the faithful dead are raised, God’s people are transformed and reunited, and the long hope of the gospel becomes sight.", reflectionPrompt: "What would it look like for Christ’s return to shape the way you live today?",
    previous: { number: "08", title: "Law & Gospel", href: "/bible-studies/law-and-gospel" }, next: { title: "God’s Tomorrow", href: "/bible-studies/gods-tomorrow" },
  },
  "gods-tomorrow": {
    slug: "gods-tomorrow", number: "10", title: ["God’s", "Tomorrow"], photoClass: "study-10-photo",
    introLead: "What future is God preparing for His people?", intro: ["The Bible’s final vision is not of souls escaping creation forever, but of God making all things new. Evil, death, grief and pain are removed; God dwells with humanity; and the earth is restored.", "This study gathers the promises of the new heavens and new earth—a real home, a healed creation and an unbroken relationship with God that will never end."],
    asideTitle: "Restoration, not abandonment", asideText: "The Creator does not surrender His world to evil. He removes the curse and makes creation new, beautiful and secure.",
    questionsEyebrow: "All things made new", questionsTitle: ["A restored earth.", "God with us."],
    questions: [
      { ref: "2 Peter 3:13", q: "What future do believers look for?", verse: "We, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.", answer: "Christian hope includes a renewed creation where righteousness is at home and evil no longer has a place." },
      { ref: "Revelation 21:1–3", q: "Where will God dwell?", verse: "The tabernacle of God is with men, and he will dwell with them, and they shall be his people.", answer: "The heart of eternity is God’s presence. Separation ends and He makes His home with redeemed humanity." },
      { ref: "Revelation 21:4", q: "Which features of the present world will disappear?", verse: "There shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.", answer: "God does not merely help us endure suffering forever. He brings death, grief, tears and pain to a final end." },
      { ref: "Isaiah 65:21–22", q: "Does the restored earth include meaningful life and work?", verse: "They shall build houses, and inhabit them; and they shall plant vineyards, and eat the fruit of them.", answer: "The biblical picture is active and embodied. People build, cultivate, enjoy and securely inhabit what their hands produce." },
      { ref: "Isaiah 65:25", q: "How completely will creation’s violence be healed?", verse: "The wolf and the lamb shall feed together... They shall not hurt nor destroy in all my holy mountain.", answer: "Peace reaches beyond human society into creation itself. Predation and destruction no longer define God’s world." },
      { ref: "Revelation 21:22–23", q: "What gives the holy city its light?", verse: "The glory of God did lighten it, and the Lamb is the light thereof.", answer: "God’s immediate presence is the city’s glory. Worship is not confined to one building because the Lord and the Lamb dwell there." },
      { ref: "Revelation 22:1–2", q: "What life-giving features appear in the restored city?", verse: "A pure river of water of life... and on either side of the river, was there the tree of life.", answer: "The river and tree of life picture God’s abundant, continual provision and the complete healing of the nations." },
      { ref: "Revelation 22:3–4", q: "How close will God’s people be to Him?", verse: "There shall be no more curse... and they shall see his face.", answer: "The curse is removed and fellowship is direct. Seeing God’s face expresses unhindered relationship, belonging and joy." },
      { ref: "Matthew 5:5", q: "What inheritance did Jesus promise the meek?", verse: "Blessed are the meek: for they shall inherit the earth.", answer: "Jesus points to the earth as the inheritance of His people—restored under God’s gentle and righteous reign." },
      { ref: "1 Corinthians 2:9", q: "Can we fully imagine what God has prepared?", verse: "Eye hath not seen, nor ear heard... the things which God hath prepared for them that love him.", answer: "Scripture gives genuine glimpses, yet God’s future exceeds the limits of present experience and imagination." },
      { ref: "Revelation 21:27", q: "Will anything that defiles enter God’s restored world?", verse: "There shall in no wise enter into it any thing that defileth... but they which are written in the Lamb’s book of life.", answer: "Evil will never invade again. The safety of eternity rests in the Lamb’s completed victory and a redeemed people." },
      { ref: "Revelation 22:17", q: "Who is invited to receive the water of life?", verse: "Let him that is athirst come. And whosoever will, let him take the water of life freely.", answer: "The Bible’s final invitation is open and free. Everyone who recognises their thirst may come to Christ and receive life." },
    ],
    calloutEyebrow: "The end of the curse", calloutTitle: ["No more death.", "No more goodbyes."], calloutText: "God’s tomorrow is not an endless extension of today. It is creation healed, evil excluded forever and the face-to-face presence of God.",
    summaryTitle: ["All things are made new.", "And God is with us."], summaryText: "God will restore the earth as the secure home of His people. The curse, death and sorrow disappear; creation flourishes in peace; and redeemed humanity lives forever in the light and presence of God.", reflectionPrompt: "Which promise about God’s restored world brings you the greatest hope—and why?",
    previous: { number: "09", title: "The World’s Only Hope", href: "/bible-studies/worlds-only-hope" },
  },
};
