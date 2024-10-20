"use client";

import { useState } from "react";

export default function Calendar({ svents }) {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 5);

  const toDate = new Date();
  toDate.setDate(toDate.getDate() + 5);

  const [from, setFrom] = useState<Date>(fromDate);
  const [to, setTo] = useState<Date>(toDate);

  const dates = (() => {
    const dates = [];
    const currentDate = new Date(from);

    while (currentDate <= to) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  })();

  return (
    <div className="w-full h-full flex flex-row flex-1 overflow-auto">
      <div className="flex flex-row p-2 gap-2">
        {dates.map((date) => (
          <div
            key={status.key}
            className="flex flex-col p-1 gap-1 bg-gray-200 w-64 rounded"
          >
            {/* Header */}
            <div className="w-full h-9 flex flex-row items-center px-2 py-1.5 gap-2 bg-white rounded"></div>

            {/* Body */}
            <div className="flex flex-col gap-1 overflow-hidden hover:overflow-auto">
              {svents
                .filter(
                  (svent) =>
                    svent.date.toISOString().substring(0, 10) ==
                    date.toISOString().substring(0, 10)
                )
                .map((event) => (
                  <div key={event.id}></div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
