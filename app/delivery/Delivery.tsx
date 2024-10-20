import statuses from "@/constants/statuses";
import DeliveryType from "@/types/delivery";
import Image from "next/image";

export default function Delivery({
  delivery,
  onClick,
}: {
  delivery: DeliveryType;
  onClick: (delivery: DeliveryType) => void;
}) {
  const status = statuses.find((s) => s.key == delivery.status);
  return (
    <a
      className="w-full gap-2 px-2 py-2 flex flex-row items-center rounded cursor-pointer hover:bg-light-purple"
      onClick={() => onClick(delivery)}
    >
      <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"></span>

      <span className="flex-1 flex flex-row gap-2 overflow-hidden">
        <span className="flex-1 flex flex-col gap-0.5 overflow-hidden">
          <span className="w-full text-xs font-semibold text-nowrap text-ellipsis overflow-hidden">
            {delivery.product?.name}
          </span>
          <span className="w-full text-xs text-foreground-2 text-nowrap text-ellipsis overflow-hidden">
            {delivery.location}
          </span>
        </span>
        {status && (
          <span
            className={
              "flex flex-row gap-2 items-center delivery-status-" + status.key
            }
          >
            <span className="text-xs font-semibold">+2h</span>
            <Image
              src={status.icon}
              alt={status.name}
              width={16}
              height={16}
              priority
            />
          </span>
        )}
      </span>
    </a>
  );
}
