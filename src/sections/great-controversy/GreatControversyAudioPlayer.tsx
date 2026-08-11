"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay, FiRotateCcw, FiRotateCw, FiVolume2, FiX } from "react-icons/fi";

const chapters = [
  ["Preface", "GC-00a%20-%20Preface.mp3", "4:55"], ["Introduction", "GC-00b%20-%20Introduction.mp3", "19:01"],
  ["The Destruction of Jerusalem", "GC-01%20-%20The%20Destruction%20of%20Jerusalem.mp3", "50:33"], ["Persecution in the First Centuries", "GC-02%20-%20Persecution%20in%20the%20First%20Centuries.mp3", "23:09"],
  ["An Era of Spiritual Darkness", "GC-03%20-%20An%20Era%20of%20Spiritual%20Darkness.mp3", "27:37"], ["The Waldenses", "GC-04%20-%20The%20Waldenses.mp3", "38:48"],
  ["John Wycliffe", "GC-05%20-%20John%20Wycliffe.mp3", "39:12"], ["Huss and Jerome", "GC-06%20-%20Huss%20and%20Jerome.mp3", "53:55"],
  ["Luther’s Separation From Rome", "GC-07%20-%20Luther's%20Separation%20From%20Rome.mp3", "58:17"], ["Luther Before the Diet", "GC-08%20-%20Luther%20Before%20the%20Diet.mp3", "59:51"],
  ["The Swiss Reformer", "GC-09%20-%20The%20Swiss%20Reformer.mp3", "32:30"], ["Progress of Reform in Germany", "GC-10%20-%20Progress%20of%20Reform%20in%20Germany.mp3", "28:54"],
  ["Protest of the Princes", "GC-11%20-%20Protest%20of%20the%20Princes.mp3", "35:45"], ["The French Reformation", "GC-12%20-%20The%20French%20Reformation.mp3", "1:07:34"],
  ["The Netherlands and Scandinavia", "GC-13%20-%20The%20Netherlands%20and%20Scandinavia.mp3", "20:03"], ["Later English Reformers", "GC-14%20-%20Later%20English%20Reformers.mp3", "51:04"],
  ["The Bible and the French Revolution", "GC-15%20-%20The%20Bible%20and%20the%20French%20Revolution.mp3", "1:01:51"], ["The Pilgrim Fathers", "GC-16%20-%20The%20Pilgrim%20Fathers.mp3", "25:19"],
  ["Heralds of the Morning", "GC-17%20-%20Heralds%20of%20the%20Morning.mp3", "46:28"], ["An American Reformer", "GC-18%20-%20An%20American%20Reformer.mp3", "1:04:43"],
  ["Light Through Darkness", "GC-19%20-%20Light%20Through%20Darkness.mp3", "28:30"], ["A Great Religious Awakening", "GC-20%20-%20A%20Great%20Religious%20Awakening.mp3", "48:42"],
  ["A Warning Rejected", "GC-21%20-%20A%20Warning%20Rejected.mp3", "40:26"], ["Prophecies Fulfilled", "GC-22%20-%20Prophecies%20Fulfilled.mp3", "43:29"],
  ["What Is the Sanctuary?", "GC-23%20-%20What%20is%20the%20Sanctuary.mp3", "33:23"], ["In the Holy of Holies", "GC-24%20-%20In%20the%20Holy%20of%20Holies.mp3", "21:09"],
  ["God’s Law Immutable", "GC-25%20-%20God's%20Law%20Immutable.mp3", "42:36"], ["A Work of Reform", "GC-26%20-%20A%20Work%20of%20Reform.mp3", "23:52"],
  ["Modern Revivals", "GC-27%20-%20Modern%20Revivals.mp3", "45:50"], ["Facing Life’s Record", "GC-28%20-%20Facing%20Life's%20Record.mp3", "30:58"],
  ["The Origin of Evil", "GC-29%20-%20The%20Origin%20of%20Evil.mp3", "30:46"], ["Enmity Between Man and Satan", "GC-30%20-%20Enmity%20Between%20Man%20and%20Satan.mp3", "14:15"],
  ["Agency of Evil Spirits", "GC-31%20-%20Agency%20of%20Evil%20Spirits.mp3", "16:01"], ["Snares of Satan", "GC-32%20-%20Snares%20of%20Satan.mp3", "31:04"],
  ["The First Great Deception", "GC-33%20-%20The%20First%20Great%20Deception.mp3", "50:29"], ["Can Our Dead Speak to Us?", "GC-34%20-%20Can%20Our%20Dead%20Speak%20to%20Us.mp3", "28:28"],
  ["Liberty of Conscience Threatened", "GC-35%20-%20Liberty%20of%20Conscience%20Threatened.mp3", "47:25"], ["The Impending Conflict", "GC-36%20-%20The%20Impending%20Conflict.mp3", "27:27"],
  ["The Scriptures a Safeguard", "GC-37%20-%20The%20Scriptures%20a%20Safeguard.mp3", "24:11"], ["The Final Warning", "GC-38%20-%20The%20Final%20Warning.mp3", "23:52"],
  ["The Time of Trouble", "GC-39%20-%20The%20Time%20of%20Trouble.mp3", "54:39"], ["God’s People Delivered", "GC-40%20-%20God's%20People%20Delivered.mp3", "44:46"],
  ["Desolation of the Earth", "GC-41%20-%20Desolation%20of%20the%20Earth.mp3", "21:50"], ["The Controversy Ended", "GC-42%20-%20The%20Controversy%20Ended.mp3", "42:34"],
] as const;

const AUDIO_ROOT = "https://ellenwhiteaudio.org/audio/en/gc/";
const STORAGE_KEY = "revelation-signs-gc-audio-progress-v1";

function clock(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const value = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const secs = value % 60;
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}` : `${minutes}:${String(secs).padStart(2, "0")}`;
}

export function GreatControversyAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const restoreTimeRef = useRef(0);
  const [track, setTrack] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [rate, setRate] = useState(1);
  const [ready, setReady] = useState(false);
  const [miniVisible, setMiniVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") as { track?: number; time?: number; rate?: number; volume?: number } | null;
      if (saved) {
        if (typeof saved.track === "number" && saved.track >= 0 && saved.track < chapters.length) setTrack(saved.track);
        if (typeof saved.time === "number") restoreTimeRef.current = saved.time;
        if (typeof saved.rate === "number") setRate(saved.rate);
        if (typeof saved.volume === "number") setVolume(saved.volume);
      }
    } catch { /* Ignore malformed local progress. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !ready) return;
    audio.volume = volume;
    audio.playbackRate = rate;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ track, time: currentTime, rate, volume }));
  }, [track, currentTime, rate, volume, ready]);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try { await audio.play(); setPlaying(true); setMiniVisible(true); } catch { setPlaying(false); }
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) void play(); else { audio.pause(); setPlaying(false); }
  }, [play]);

  const selectTrack = useCallback((index: number, autoplay = true) => {
    setTrack(index);
    restoreTimeRef.current = 0;
    setCurrentTime(0);
    setMiniVisible(true);
    setTimeout(() => { if (autoplay) void play(); }, 0);
  }, [play]);

  const moveTrack = useCallback((delta: number) => selectTrack(Math.min(chapters.length - 1, Math.max(0, track + delta))), [selectTrack, track]);
  const seekBy = (delta: number) => { const audio = audioRef.current; if (audio) audio.currentTime = Math.min(audio.duration || Infinity, Math.max(0, audio.currentTime + delta)); };

  const controlButton = "grid h-11 w-11 place-items-center rounded-full border border-[#d4a64f]/50 text-[#f4dfb6] transition hover:bg-[#d4a64f]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e1b65e]";
  const title = chapters[track][0];

  return <>
    <section id="listen" className="scroll-mt-24 bg-[#061a2b] px-5 py-16 text-[#f6ead1] sm:px-8 lg:px-12 lg:py-20" aria-labelledby="listen-heading">
      <audio ref={audioRef} src={`${AUDIO_ROOT}${chapters[track][1]}`} preload="metadata" onLoadedMetadata={(event) => { const audio = event.currentTarget; setDuration(audio.duration); if (restoreTimeRef.current > 0) { audio.currentTime = Math.min(restoreTimeRef.current, Math.max(0, audio.duration - 1)); restoreTimeRef.current = 0; } audio.volume = volume; audio.playbackRate = rate; }} onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)} onPlay={() => { setPlaying(true); setMiniVisible(true); }} onPause={() => setPlaying(false)} onEnded={() => { if (track < chapters.length - 1) selectTrack(track + 1); else setPlaying(false); }} />
      <div className="mx-auto max-w-[1280px]">
        <p className="font-serif text-2xl italic text-[#ead5af] sm:text-3xl">Listen to <em>The Great Controversy</em></p>
        <div className="mt-9 grid items-start gap-9 lg:grid-cols-[230px_minmax(0,1fr)_390px]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[230px] overflow-hidden rounded-sm shadow-2xl"><Image src="/assets/media/images/great-controversy-book-mockup.png" alt="The Great Controversy audiobook cover" fill sizes="230px" className="object-cover" /></div>
          <div className="min-w-0 py-2">
            <p className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-[#d5a245] uppercase">{currentTime > 0 ? "Continue Listening" : "Now Playing"}</p>
            <p className="mt-3 font-sans text-xs tracking-[0.14em] text-[#d5a245] uppercase">{track < 2 ? chapters[track][0] : `Chapter ${track - 1}`}</p>
            <h2 id="listen-heading" className="mt-2 min-h-[4.5rem] font-serif text-[clamp(2rem,3.4vw,3.45rem)] leading-[1.02]">{title}</h2>
            <div className="mt-7 flex items-center gap-3 font-sans text-xs text-[#c7c0b2]"><span>{clock(currentTime)}</span><input aria-label="Audiobook position" type="range" min={0} max={duration || 1} step={1} value={Math.min(currentTime, duration || 1)} onChange={(e) => { const audio = audioRef.current; if (audio) audio.currentTime = Number(e.target.value); }} className="h-1 flex-1 accent-[#d6a344]" /><span>{duration ? clock(duration) : chapters[track][2]}</span></div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:justify-start"><button type="button" aria-label="Skip back 15 seconds" onClick={() => seekBy(-15)} className={controlButton}><FiRotateCcw /></button><button type="button" aria-label="Previous chapter" onClick={() => moveTrack(-1)} className={controlButton}><FiChevronLeft className="text-xl" /></button><button type="button" aria-label={playing ? "Pause audiobook" : "Play audiobook"} onClick={toggle} className="grid h-16 w-16 place-items-center rounded-full bg-[#d2a13d] text-2xl text-[#061a2b] shadow-lg">{playing ? <FiPause /> : <FiPlay className="translate-x-0.5" />}</button><button type="button" aria-label="Next chapter" onClick={() => moveTrack(1)} className={controlButton}><FiChevronRight className="text-xl" /></button><button type="button" aria-label="Skip forward 15 seconds" onClick={() => seekBy(15)} className={controlButton}><FiRotateCw /></button></div>
            <div className="mt-7 grid gap-5 border-t border-[#cda45b]/25 pt-5 sm:grid-cols-2"><label className="flex items-center gap-3 text-xs text-[#c7c0b2]"><FiVolume2 className="shrink-0" /><span className="sr-only">Volume</span><input type="range" min={0} max={1} step={0.05} value={volume} onChange={(e) => { const value = Number(e.target.value); setVolume(value); if (audioRef.current) audioRef.current.volume = value; }} className="w-full accent-[#d6a344]" /></label><label className="flex items-center justify-end gap-3 text-xs text-[#c7c0b2]">Speed<select aria-label="Playback speed" value={rate} onChange={(e) => { const value = Number(e.target.value); setRate(value); if (audioRef.current) audioRef.current.playbackRate = value; }} className="rounded border border-[#cda45b]/35 bg-[#071525] px-3 py-2 text-[#f4dfb6]"><option value={0.75}>0.75×</option><option value={1}>1×</option><option value={1.25}>1.25×</option><option value={1.5}>1.5×</option><option value={2}>2×</option></select></label></div>
            <p className="mt-5 text-center font-sans text-[0.66rem] text-[#aaa79f] sm:text-left">Your chapter and listening position are saved on this device.</p>
          </div>
          <div className="overflow-hidden rounded border border-[#d4a64f]/25 bg-[#041421]"><div className="border-b border-[#d4a64f]/25 px-5 py-4 font-sans text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#e2bc70]">All Chapters</div><ol className="max-h-[500px] overflow-y-auto overscroll-contain">{chapters.map((chapter, index) => <li key={chapter[1]}><button type="button" onClick={() => selectTrack(index)} aria-current={index === track ? "true" : undefined} className={`grid w-full grid-cols-[2.2rem_1fr_auto_1.5rem] items-center gap-2 border-b border-white/8 px-4 py-3 text-left transition ${index === track ? "bg-[#bd8530] text-[#071525]" : "text-[#e5dccd] hover:bg-white/5"}`}><span className="font-sans text-[0.65rem] tabular-nums">{index < 2 ? "—" : String(index - 1).padStart(2, "0")}</span><span className="font-serif text-sm leading-tight">{chapter[0]}</span><span className="font-sans text-[0.62rem] tabular-nums opacity-75">{chapter[2]}</span><span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[0.55rem]">{index === track && playing ? <FiPause /> : <FiPlay />}</span></button></li>)}</ol></div>
        </div>
      </div>
    </section>
    {ready && miniVisible ? <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-[#cfa248]/45 bg-[#03111d]/95 px-3 py-2 text-[#f5e7ca] shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-6"><div className="mx-auto flex max-w-[1360px] items-center gap-3"><div className="relative hidden h-12 w-10 overflow-hidden sm:block"><Image src="/assets/media/images/great-controversy-book-mockup.png" alt="" fill sizes="40px" className="object-cover" /></div><button type="button" onClick={toggle} aria-label={playing ? "Pause audiobook" : "Resume audiobook"} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d2a13d] text-[#061a2b]">{playing ? <FiPause /> : <FiPlay />}</button><div className="min-w-0 flex-1"><p className="truncate font-serif text-sm sm:text-base">{track < 2 ? title : `Chapter ${track - 1} · ${title}`}</p><div className="mt-1 flex items-center gap-2 text-[0.6rem] text-[#bdb6a8]"><span>{clock(currentTime)}</span><input aria-label="Mini player position" type="range" min={0} max={duration || 1} value={Math.min(currentTime, duration || 1)} onChange={(e) => { if (audioRef.current) audioRef.current.currentTime = Number(e.target.value); }} className="h-1 min-w-0 flex-1 accent-[#d2a13d]" /><span>{duration ? clock(duration) : chapters[track][2]}</span></div></div><button type="button" aria-label="Skip back 15 seconds" onClick={() => seekBy(-15)} className="hidden p-2 sm:block"><FiRotateCcw /></button><button type="button" aria-label="Skip forward 15 seconds" onClick={() => seekBy(15)} className="hidden p-2 sm:block"><FiRotateCw /></button><button type="button" aria-label="Close mini player" onClick={() => setMiniVisible(false)} className="p-2"><FiX /></button></div></div> : null}
  </>;
}
