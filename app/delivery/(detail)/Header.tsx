import DeliveryType from "@/types/delivery";
import statuses from "@/constants/statuses";
import dayjs from "dayjs";

export default function Header({ delivery }: { delivery: DeliveryType }) {
  const status = statuses.find((s) => s.key == delivery.status);

  return (
    <div className="w-full px-8 py-3 gap-4 flex flex-row border-b border-b-gray-300">
      <div className="flex flex-row items-center bg-purple text-white rounded px-3 py-1.5 text-sm font-semibold">
        {dayjs(delivery.deliver_at).format("dddd, MMMM D YYYY")}
      </div>
      <div className="flex flex-row items-center bg-white border border-gray-500 rounded px-3 py-1.5 text-sm font-semibold">
        16:00
      </div>
      <div className="flex flex-row items-center flex-1 justify-end text-xl font-bold">
        {delivery.price}
      </div>
      <div className="flex flex-row items-center bg-white border border-gray-500 rounded px-3 py-1.5 text-xs font-semibold">
        {status?.name}
      </div>
    </div>
  );
}
