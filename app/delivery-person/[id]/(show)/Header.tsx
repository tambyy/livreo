import UserType from "@/types/user";

export default function Header({
  deliveryPerson,
}: {
  deliveryPerson: UserType;
}) {
  return (
    <div className="w-full px-8 py-4 gap-4 flex flex-row border-b border-b-gray-300 items-center">
      <h2 className="font-extrabold text-3xl flex-1">{deliveryPerson.name}</h2>
      <div className="h-full gap-4 flex flex-row items-center">
        <span className="font-bold text-2xl">{deliveryPerson.commission}</span>
        <span className="font-bold text-2xl">
          {deliveryPerson.phone_number}
        </span>
        <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"></span>
      </div>
    </div>
  );
}
