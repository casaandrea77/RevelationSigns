const playlistUrl = 'https://www.youtube.com/watch?v=uKcXTYWh2F0&list=PLyE90DWMj-PkRT5bpSPyov8g4UjJYNZHo';

export default function RevelationLectureSeries() {
  return <section className="rv-shell rv-lecture-series" id="lecture-series" aria-labelledby="lecture-series-title">
    <p className="rv-eyebrow">Continue exploring · Video lectures</p>
    <h2 id="lecture-series-title">Revelation lectures with Walter Veith</h2>
    <p className="rv-lecture-intro">Watch the lecture series alongside your Bible study. Use the playlist menu in the player to choose another talk.</p>
    <div className="rv-lecture-player">
      <iframe
        src="https://www.youtube-nocookie.com/embed/uKcXTYWh2F0?list=PLyE90DWMj-PkRT5bpSPyov8g4UjJYNZHo&rel=0"
        title="Walter Veith — Revelation Lectures playlist"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
    <div className="rv-lecture-credit"><p>Lectures by Walter Veith · Selected video from Amazing Discoveries · Hosted on YouTube</p><a href={playlistUrl} target="_blank" rel="noreferrer">Watch the full playlist on YouTube ↗<span className="rv-sr-only"> (opens in a new tab)</span></a></div>
  </section>;
}
