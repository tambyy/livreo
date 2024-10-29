"use client";

import { useState } from "react";
import Item from "./Item";

export default function Column({
  pipeline,
  pipelineItems,
  itemKey,
  renderHeader,
  renderItem,
  onDropItem,
}: {
  pipeline: any;
  pipelineItems: (pipeline: any) => any[];
  itemKey: (item: any) => number | string;
  renderHeader: (pipeline: any) => React.ReactNode;
  renderItem: (item: any) => React.ReactNode;
  onDropItem: (pipeline: any, item: any) => void;
}) {
  const [dragStart, setDragStart] = useState(false);

  const startDrop = (e) => {
    e.preventDefault();
    setDragStart(true);
  };

  const endDrop = (e) => {
    setDragStart(false);
  };

  const onDrop = (e) => {
    endDrop(e);
    const item = e.dataTransfer.getData("item");

    if (item) {
      onDropItem(pipeline, JSON.parse(item));
    }
  };

  return (
    <div
      className={`group pipeline flex flex-col p-1 gap-1 w-64 rounded ${
        dragStart ? "bg-slate-200 drop" : "bg-slate-100"
      }`}
      onDrop={onDrop}
      onDragOver={startDrop}
      onDragLeave={endDrop}
    >
      {/* Header */}
      <div className="w-full">{renderHeader(pipeline)}</div>

      {/* Body */}
      <div className="flex flex-col gap-1 overflow-hidden hover:overflow-auto">
        {pipelineItems(pipeline).map((item) => (
          <Item key={itemKey(item)} item={item} renderItem={renderItem} />
        ))}
      </div>
    </div>
  );
}
