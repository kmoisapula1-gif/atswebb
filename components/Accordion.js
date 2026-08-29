"use client";

import { useState } from "react";

/**
 * Single-open accordion. `items` is [{ title, body }]. Real <button>s with
 * aria-expanded/aria-controls for keyboard + screen-reader operability
 * (the prototype only provided click-to-toggle).
 */
export default function Accordion({ items, idPrefix }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const triggerId = `${idPrefix}-trigger-${i}`;
        return (
          <div className="accordion-item" key={item.title}>
            <button
              type="button"
              id={triggerId}
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              {item.number ? <span className="accordion-number">{item.number}</span> : null}
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-sign" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={item.number ? "accordion-panel" : "accordion-panel accordion-panel--flush"}
              >
                {item.body}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
