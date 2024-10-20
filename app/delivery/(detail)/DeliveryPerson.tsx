import UserType from "@/types/user";

export default function DeliveryPerson({
  deliveryPerson,
  commission,
}: {
  deliveryPerson: UserType;
  commission: number | undefined;
}) {
  return (
    <div className="w-full flex flex-row p-5 gap-3 bg-background rounded-lg items-center">
      {/* Image */}
      <div className="w-24 h-24 bg-slate-100 rounded-lg"></div>

      {/* Deliver person detail */}
      <div className="flex flex-col flex-1 gap-7">
        <span className="w-full text-foreground-2">Livreur</span>
        <div className="flex flex-col flex-1 gap-2">
          <span className="w-full font-bold text-base">
            {deliveryPerson.phone_number}
          </span>
          <span className="w-full text-foreground-2 text-sm">
            {deliveryPerson.name}
          </span>
          <span className="w-full text-sm font-bold">{commission}</span>
        </div>
      </div>
    </div>
  );
}
