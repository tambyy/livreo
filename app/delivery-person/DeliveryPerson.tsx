import vehicleTypes from "@/constants/vehicle-types";
import UserType from "@/types/user";
import Image from "next/image";

export default function DeliveryPerson({
  deliveryPerson,
  onClick,
}: {
  deliveryPerson: UserType;
  onClick: (deliveryPerson: UserType) => void;
}) {
  const vehicleType = vehicleTypes.find(
    (vehicleTypes) => vehicleTypes.key == deliveryPerson.vehicle?.type
  );

  return (
    <a
      className="w-full gap-2 px-2 py-2 flex flex-row items-center rounded cursor-pointer hover:bg-light-purple"
      onClick={() => onClick(deliveryPerson)}
    >
      <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"></span>

      <span className="flex-1 flex flex-col gap-0.5 overflow-hidden">
        <span className="w-full text-xs font-semibold text-nowrap text-ellipsis overflow-hidden">
          {deliveryPerson.name}
        </span>
        <span className="w-full text-xs text-foreground-2 text-nowrap text-ellipsis overflow-hidden">
          {deliveryPerson.vehicle?.name}
        </span>
        <span className="w-full text-xs text-foreground-2 text-nowrap text-ellipsis overflow-hidden">
          {deliveryPerson.phone_number}
        </span>
      </span>
    </a>
  );
}
