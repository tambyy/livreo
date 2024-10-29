import DeliveryType from "@/types/delivery";
import statuses from "@/constants/statuses";
import Image from "next/image";

export default function Comment({ delivery }: { delivery: DeliveryType }) {
  const status = statuses.find((s) => s.key == delivery.status);

  return (
    <div
      className={
        "w-60 p-4 gap-3 flex flex-col items-center rounded-lg delivery-comment-status-" +
        status?.key
      }
    >
      {status && (
        <div className="w-10 h-10 flex items-center justify-center">
          <Image
            src={status.icon}
            alt={status.name}
            width={24}
            height={24}
            priority
          />
        </div>
      )}
      <span className="text-sm">{delivery.comment}</span>
    </div>
  );
}
