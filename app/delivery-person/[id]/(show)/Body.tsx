import UserType from "@/types/user";
import Deliveries from "./Deliveries";
import Vehicle from "./Vehicle";
import Map from "./Map";

export default function Body({ deliveryPerson }: { deliveryPerson: UserType }) {
  return (
    <div className="w-full px-8 py-4 gap-4 h-full flex-1 flex flex-row">
      {/* Deliveries */}
      <Deliveries deliveryPerson={deliveryPerson} />

      <div className="flex-1 flex flex-col gap-4">
        {/* Vehicle */}
        {deliveryPerson.vehicle && <Vehicle vehicle={deliveryPerson.vehicle} />}

        {/* Map */}
        <Map deliveryPerson={deliveryPerson} />
      </div>
    </div>
  );
}
