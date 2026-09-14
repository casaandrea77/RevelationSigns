"use client";

import { useRef, useState } from "react";
import { events } from "./data";

export function Timeline() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const event = events[selected];
  function choose(index: number, focus = false) {
    setSelected(index);
    if (focus) buttons.current[index]?.focus({ preventScroll: true });
    buttons.current[index]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
  }
  return <section id="prophetic-timeline" className="ms-timeline" aria-labelledby="timeline-title">
    <div className="ms-timeline-heading"><div><p className="ms-eyebrow">See the whole story</p><h2 id="timeline-title">From judgment<br />to <em>everlasting life.</em></h2></div><p>Select a moment to explore its passages and place in the study.</p></div>
    <p className="ms-timeline-note"><strong>Adventist synthesis · not a dated chart.</strong> This is a reading guide across several visions, not a verse-by-verse chronology. Messages, persecution, and decisions overlap. Deliverance and resurrection connect with Christ’s return; the final stage includes the later millennium and new earth.</p>
    <div className="ms-timeline-body"><div className="ms-event-list" role="tablist" aria-label="Final events timeline" aria-orientation="vertical" onKeyDown={(e) => {
      let next = selected;
      if (e.key === "ArrowDown") next = (selected + 1) % events.length;
      else if (e.key === "ArrowUp") next = (selected - 1 + events.length) % events.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = events.length - 1;
      else return;
      e.preventDefault(); choose(next, true);
    }}>
      {events.map((item, index) => <button type="button" role="tab" id={`event-${index}`} aria-controls="event-panel" aria-selected={index === selected} tabIndex={index === selected ? 0 : -1} ref={el => { buttons.current[index] = el; }} key={item.title} onClick={() => choose(index)}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.title}</b><span aria-hidden="true">{index === selected ? "↗" : ""}</span></button>)}
    </div><div className="ms-event-panel" id="event-panel" role="tabpanel" aria-labelledby={`event-${selected}`} tabIndex={0}>
      <div className="ms-event-top"><span className="ms-eyebrow">{event.phase}</span><span className="ms-event-count">{String(selected + 1).padStart(2, "0")} / 14</span></div>
      <span className="ms-event-numeral" aria-hidden="true">{String(selected + 1).padStart(2, "0")}</span><h3>{event.title}</h3><p className="ms-event-ref">{event.ref}</p><p>{event.text}</p><a className="ms-link" href={`#${event.target}`}>Read this part of the study <span aria-hidden="true">↓</span></a>
      <div className="ms-event-controls"><button type="button" disabled={selected === 0} onClick={() => choose(selected - 1)}>← Previous</button><button type="button" disabled={selected === events.length - 1} onClick={() => choose(selected + 1)}>Next →</button></div>
    </div></div>
  </section>;
}
