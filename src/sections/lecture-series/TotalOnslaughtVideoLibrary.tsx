"use client";

import { useState } from "react";

const videos = [
  ["LETvVezBXio", "Testimony"],
  ["LTSKfXzdiuE", "Jesus Christ: Just Another Man or Son of God?"],
  ["a0Pu9T1UrGI", "The Real-Life History of Messiah"],
  ["_qObLoRXFsg", "Hidden Secrets of the Sanctuary Revealed"],
  ["xPQjYqk_mI8", "Ancient Prophecy Correctly Predicts the Future"],
  ["uKcXTYWh2F0", "Antichrist Revealed"],
  ["A1sAOKF9rOI", "Is Revelation Meant to Be Understood?"],
  ["drGT_ieTw78", "The True Meaning of the Seven Churches"],
  ["r0muBYQCrfk", "The Truth Behind the Seven Seals of Revelation"],
  ["JGiXc9ydhqw", "The Beast from the Bottomless Pit"],
  ["eDrscByKEUQ", "Who Really Runs the World?"],
  ["0Q18iSz6mus", "Do Freemasons Worship Lucifer?"],
  ["tNv-zzpIwBs", "Why So Many Bible Versions?"],
  ["RqBEuxGY7DI", "What Is the Difference Between Bible Versions?"],
  ["TrZ617fTHzc", "The Real Forces Behind the New World Order"],
  ["Nkhcc-spRgo", "The Mark of the Beast"],
  ["olsYpD0OJKU", "America in Bible Prophecy"],
  ["l-VrL3ZBb48", "Are Catholic Teachings Biblical or Pagan?"],
  ["zASWUqMm_JM", "The Woman Who Rides the Beast"],
  ["Hct9S4cLYQY", "The Goals of the New World Order"],
  ["r4GtU_rqFww", "What Happens When You Die?"],
  ["P-8-teAlZsE", "Immortal Soul or Satan's Lie?"],
  ["sijboIS1UP8", "Does God Desire Global Unity?"],
  ["2hzBIIuZx9Q", "False Christianity Exposed"],
  ["fSNU-jlHkDs", "Pagan Practices Exposed"],
  ["m3iz0x2mhz4", "Christ vs Satan: The Battle for Souls"],
  ["le4_D8uMfVo", "Where Is God's Church Now?"],
  ["X77Z6OcQ6PE", "Does God Still Talk to Modern Man?"],
  ["bEJ_zJVQafU", "Earth's Final Warning"],
  ["BI1anaTw680", "Modern-Day Babylon"],
  ["9dqczX3qYF4", "What Really Happened in 1844?"],
  ["ntLT2Sk2dmE", "False Miracles and End-Time Deceptions"],
  ["vjcEZ7J5g5U", "The Second Coming of Christ"],
  ["QW0R9BmjWZo", "What Happens After the World Ends?"],
  ["hQfbMtNIAjs", "How Do I Give My Life to Christ?"],
] as const;

export function TotalOnslaughtVideoLibrary() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {videos.map(([videoId, title], index) => {
        const isActive = activeVideo === videoId;
        return (
          <article key={videoId} className={`overflow-hidden border border-accent/25 bg-[#0a1926] ${isActive ? "md:col-span-2" : ""}`}>
            <div className="relative aspect-video bg-black">
              {isActive ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&list=PLObqf2HqCXyP3HBkxrSsupHweJ5mBIw6q&index=${index + 1}`}
                  title={`${index + 1}. ${title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveVideo(videoId)}
                  className="group absolute inset-0 w-full overflow-hidden text-left"
                  aria-label={`Play ${title}`}
                >
                  {/* YouTube thumbnails avoid loading 35 full video players at once. */}
                  <span className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]" style={{ backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)` }} />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#d4a653] text-[#06101a] shadow-2xl transition-transform group-hover:scale-110" aria-hidden="true">
                    <span className="ml-1 text-2xl">▶</span>
                  </span>
                </button>
              )}
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4 border-t border-accent/20 px-5 py-5 sm:px-6">
              <span className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-xl font-light leading-tight text-foreground sm:text-2xl">{title}</h3>
            </div>
          </article>
        );
      })}
    </div>
  );
}
