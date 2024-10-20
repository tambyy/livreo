import DeliveryType from "@/types/delivery";
import deliveries from "../../constants/deliveries";
import Delivery from "./Delivery";

export default function Deliveries({
  onDeliveryClick,
}: {
  onDeliveryClick: (delivery: DeliveryType) => void;
}) {
  return (
    <div className="w-72 h-full min-h-screen flex flex-col border-r border-r-slate-200">
      <div className="w-full h-12 flex flex-row border-b border-b-slate-200"></div>

      <div className="w-full flex-1 flex flex-col px-2 overflow-auto">
        {deliveries.map((delivery) => (
          <Delivery
            key={delivery.id}
            onClick={onDeliveryClick}
            delivery={delivery}
          />
        ))}
      </div>
    </div>
  );
}
