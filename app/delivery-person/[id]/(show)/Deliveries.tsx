import deliveries from "@/constants/deliveries";
import UserType from "@/types/user";
import Delivery from "./Delivery";

export default function Deliveries({
  deliveryPerson,
}: {
  deliveryPerson: UserType;
}) {
  return (
    <div className="w-72 bg-white flex flex-col">
      <div className="w-full bg-white flex flex-row pl-3 pr-2 py-2">
        <span className="text-sm font-bold flex-1">Livraisons</span>
        <div className="w-6 h-full flex flex-col justify-center items-center text-xl text-purple font-bold">
          +
        </div>
      </div>
      <div className="w-full flex flex-col flex-1 overflow-auto">
        {deliveries.map((delivery) => (
          <Delivery key={delivery.id} onClick={() => {}} delivery={delivery} />
        ))}
      </div>
    </div>
  );
}
