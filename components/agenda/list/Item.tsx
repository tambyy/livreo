"use client";

export default function Item({
  item,
  duration,
  start,
  cellHeight,
  zIndex,
  renderItem,
  onDragItem,
}: {
  item: any;
  duration: number;
  start: number;
  cellHeight: number;
  zIndex: number;
  renderItem: (item: any) => React.ReactNode;
  onDragItem: (item: any) => void;
}) {
  const onDrag = (e) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
    onDragItem(item);
  };

  return (
    <div
      className="group-[.drop]:pointer-events-none left-0 group-[.calendar]:absolute"
      style={{
        top: `${(start * cellHeight) / 15}px`,
        left: `${zIndex * 3}%`,
        width: `${100 - zIndex * 5}%`,
        height: `${(duration * cellHeight) / 15}px`,
      }}
      draggable
      onDragStart={onDrag}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {renderItem(item)}
    </div>
  );
}
