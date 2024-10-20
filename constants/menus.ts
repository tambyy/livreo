import MenuType from "@/types/menu";
import statuses from "./statuses";

const menus: MenuType[][] = [
  [
    {
      key: "delivery",
      name: "Livraison",
      icon: "/images/menus/delivery.svg",
      route: "/delivery",
    },
    {
      key: "delivery-person",
      name: "Livreur",
      icon: "/images/menus/delivery-person.svg",
      route: "/delivery-person",
    },
    {
      key: "vehicle",
      name: "Véhicule",
      icon: "/images/menus/vehicle.svg",
      route: "/vehicle",
    },
  ],
  [
    {
      key: "map",
      name: "MAP",
      icon: "/images/menus/map.svg",
      route: "/map",
    },
    {
      key: "agenda",
      name: "Agenda",
      icon: "/images/menus/agenda.svg",
      route: "/agenda",
    },
    {
      key: "pipeline",
      name: "Pipeline",
      icon: "/images/menus/pipeline.svg",
      route: "/pipeline",
    },
  ],
  [
    {
      key: "stats",
      name: "Stats",
      icon: "/images/menus/stats.svg",
      route: "/stats",
    },
    {
      key: "settings",
      name: "Paramètres",
      icon: "/images/menus/settings.svg",
      route: "/settings",
    },
  ],
  statuses.map((status) => ({
    ...status,
    route: "/",
  })),
];

export default menus;
