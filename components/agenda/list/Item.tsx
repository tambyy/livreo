"use client";

export default function Item({
  item,
  renderItem,
}: {
  item: any;
  renderItem: (item: any) => React.ReactNode;
}) {
  const onDrag = (e) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  return (
    <div
      className="w-full group-[.drop]:pointer-events-none"
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
