// AnnouncementsTicker.jsx

import React from "react";
import newgif from '../../assets/new.gif';

export default function AnnouncementsTicker() {
  const data = [
    { id: 1, text: "Global Dezire Pallavaram" },
    { id: 2, text: "Global Twins Anakaputhur" },
    { id: 1, text: "Global Dezire Pallavaram" },
    { id: 2, text: "Global Twins Anakaputhur" },
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
              <img src={newgif} alt="new-image" className="img-fluid me-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
