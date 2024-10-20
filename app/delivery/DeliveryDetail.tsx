import DeliveryType from "@/types/delivery";
import Header from "./(detail)/Header";
import Body from "./(detail)/Body";

export default function DeliveryDetail({
  delivery,
}: {
  delivery: DeliveryType;
}) {
  return (
    <div className="w-full h-full flex-1 flex flex-col bg-gray-100">
      <div className="w-full px-8 py-4 gap-4 flex flex-row border-b border-b-gray-300">
        <h2 className="font-extrabold text-3xl">Livraison</h2>
      </div>

      <div className="w-full h-full gap-2 flex-1 flex flex-col">
        {/* Header */}
        <Header delivery={delivery} />

        {/* Body */}
        <Body delivery={delivery} />
      </div>
    </div>
  );
}
