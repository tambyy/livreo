import vehicleTypes from "@/constants/vehicle-types";
import DeliveryType from "@/types/delivery";
import dayjs from "dayjs";
import Image from "next/image";

const currentDeliveryDate = dayjs().format("YYYY-MM-DD");

export default function Delivery({ delivery }: { delivery: DeliveryType }) {
  const vehicleType = vehicleTypes.find(
    (vehicleTypes) => vehicleTypes.key == delivery.vehicle?.type
  );

  const date = delivery.deliver_at?.substring(0, 10);
  const time =
    !date || currentDeliveryDate == date
      ? "present"
      : currentDeliveryDate < date
      ? "coming"
      : "past";

  const warning =
    (time == "coming" && delivery.status == "delivered") ||
    (time != "coming" &&
      (delivery.status == "to_deliver" ||
        delivery.status == "waiting" ||
        delivery.status == "received_by_delivery_person")) ||
    (time != "present" && delivery.status == "processing");

  return (
    <div className="w-full flex flex-col text-xs rounded cursor-pointer bg-white">
      {/* Header */}
      <div className="w-full flex flex-row p-2 gap-2 items-center border-b border-dashed border-b-gray-400">
        {/* Image */}
        <div className="w-10 h-10 rounded bg-gray-100">
          <Image
            src="/images/deliveries/cartable.jpg"
            alt=""
            width={40}
            height={40}
          />
        </div>
        {/* Detail */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <span className="w-full font-bold overflow-hidden text-nowrap text-ellipsis">
            {delivery.product?.name}
          </span>
          <span className="w-full text-sm text-foreground-2">
            {delivery.price}
          </span>
        </div>
        {warning && (
          <Image
            src="/images/warning.svg"
            alt=""
            width={20}
            height={20}
            priority
          />
        )}
        {vehicleType && (
          <Image
            src={vehicleType.icon}
            alt={vehicleType.name}
            width={20}
            height={20}
            priority
          />
        )}
      </div>

      {/* Details */}
      <div className="w-full flex flex-col gap-1 p-2">
        {/* Client */}
        <div className="w-full flex flex-row gap-1">
          <div className="w-6 h-4 flex flex-col justify-center items-center">
            <Image
              src="/images/phone.svg"
              alt=""
              width={16}
              height={16}
              priority
            />
          </div>
          <span className="flex-1 font-semibold">
            {delivery.client?.phone_number}
          </span>
        </div>
        {/* Location */}
        <div className="w-full flex flex-row gap-1">
          <div className="w-6 h-4 flex flex-col justify-center items-center">
            <Image
              src="/images/map.svg"
              alt=""
              width={16}
              height={16}
              priority
            />
          </div>
          <span className="flex-1 text-foreground-2 font-semibold">
            {delivery.location}
          </span>
        </div>
        {/* Delivery person */}
        <div className="w-full flex flex-row gap-1">
          <div className="w-6 h-4 flex flex-col justify-center items-center">
            {vehicleType && (
              <Image
                src={vehicleType.icon}
                alt={vehicleType.name}
                width={16}
                height={16}
                priority
              />
            )}
          </div>
          <span className="flex-1 text-foreground-2">
            {delivery.delivery_person?.name}
          </span>
        </div>
      </div>
    </div>
  );
}
