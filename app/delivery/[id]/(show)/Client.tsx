import ClientType from "@/types/client";

export default function Client({
  client,
  location,
}: {
  client: ClientType;
  location: string | undefined;
}) {
  return (
    <div className="flex flex-col flex-1 justify-center p-5 gap-7 bg-background rounded-lg">
      <span className="w-full text-foreground-2">Client</span>
      <div className="flex flex-col gap-2">
        <span className="w-full text-purple font-bold text-base">
          {client.phone_number}
        </span>
        <span className="w-full text-foreground-2 text-xs">{client.name}</span>
        <span className="w-full text-foreground-2 text-xs font-bold">
          {location}
        </span>
      </div>
    </div>
  );
}
