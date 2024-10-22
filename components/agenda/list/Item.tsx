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
  renderItem: (item: any, zIndex: number) => React.ReactNode;
  onDragItem: (item: any) => void;
}) {
  const onDrag = (e) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
    onDragItem(item);
  };

  return (
    <div
      className="w-full group-[.drop]:pointer-events-none left-0 group-[.calendar]:absolute"
      style={{
        top: `${(start * cellHeight) / 15}px`,
        height: `${(duration * cellHeight) / 15}px`,
      }}
      draggable
      onDragStart={onDrag}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {renderItem(item, zIndex)}
    </div>
  );
}
