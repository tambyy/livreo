import statuses from "@/constants/statuses";
import menus from "../../constants/menus";
import Menu from "./Menu";
import Statuses from "./Statuses";

export default function Menus() {
  return (
    <div className="w-56 h-full min-h-screen flex flex-col border-r border-r-slate-200">
      <div className="w-full h-20 flex flex-row border-b border-b-slate-200">
        <h1 className="flex-1 flex flex-row items-center pl-4 text-3xl font-extrabold text-purple">
          Livreo
        </h1>
      </div>

      <div className="w-full flex-1 flex flex-col px-2 overflow-auto">
        {menus.map((bloc, i) => (
          <div
            key={i}
            className="w-full p-2 flex flex-col border-b border-b-slate-200"
          >
            {bloc.map((menu) => (
              <Menu key={menu.key} menu={menu} />
            ))}
          </div>
        ))}
        <Statuses />
      </div>

      <div className="w-full px-4 py-3 flex flex-row border-t border-t-slate-200 items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-slate-400"></div>
        <div className="flex-1 flex flex-row items-start text-xs font-semibold leading-5">
          Tamby RAKOTONDRABE
        </div>
      </div>
    </div>
  );
}
