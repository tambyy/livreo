import deliveryPersons from "@/constants/delivery-persons";
import DeliveryPerson from "./DeliveryPerson";
import UserType from "@/types/user";

export default function DeliveryPersons({
  onDeliveryClick,
}: {
  onDeliveryClick: (deliveryPerson: UserType) => void;
}) {
  return (
    <div className="w-72 h-full min-h-screen flex flex-col border-r border-r-slate-200">
      <div className="w-full h-12 flex flex-row border-b border-b-slate-200"></div>

      <div className="w-full flex-1 flex flex-col px-2 overflow-auto">
        {deliveryPersons.map((deliveryPerson) => (
          <DeliveryPerson
            key={deliveryPerson.id}
            onClick={onDeliveryClick}
            deliveryPerson={deliveryPerson}
          />
        ))}
      </div>
    </div>
  );
}
