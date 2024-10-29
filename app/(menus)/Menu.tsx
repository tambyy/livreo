import MenuType from "@/types/menu";
import Image from "next/image";
import Link from "next/link";

export default function Menu({ menu }: { menu: MenuType }) {
  return (
    <Link
      href={menu.route}
      className="w-full gap-1 px-1 py-0.5 flex flex-row items-center rounded text-foreground-2 cursor-pointer hover:bg-light-purple hover:text-purple"
    >
      <span className="w-7 h-7 flex items-center justify-center">
        <Image
          src={menu.icon}
          alt="Next.js logo"
          width={16}
          height={16}
          priority
        />
      </span>
      <span className="text-xs font-medium flex-1">{menu.name}</span>
      {menu.count && menu.count > 0 && (
        <span className="text-xs text-purple rounded-lg bg-violet-50 px-1.5 py-0.5">
          {menu.count}
        </span>
      )}
    </Link>
  );
}
