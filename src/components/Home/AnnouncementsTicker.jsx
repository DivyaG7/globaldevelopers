// AnnouncementsTicker.jsx

import React from "react";

export default function AnnouncementsTicker() {
  const data = [
    { id: 1, text: "Global Dezire Pallavaram", isNew: true },
    { id: 2, text: "Global Twins Anakaputhur", isNew: true },
    { id: 1, text: "Global Dezire Pallavaram", isNew: true },
    { id: 2, text: "Global Twins Anakaputhur", isNew: true },
  ];

  // Duplicate list for infinite scroll
  const scrollingList = [...data, ...data];

  return (
    <div className="announce-wrapper">
      <div className="announce-title">
        <span className="icon">⚡</span> Announcements
      </div>

      <div className="ticker-container">
        <div className="ticker">
          {scrollingList.map((item, i) => (
            <div key={i} className="ticker-item">
              <span className="number">{item.id}.</span>
              <span className="text">{item.text}</span>

              {item.isNew && (
                <span className="new-badge">NEW</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
