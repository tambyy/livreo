const statuses = [
  {
    key: "pending",
    name: "A livrer",
    icon: "/images/statuses/pending.svg",
  },
  {
    key: "waiting",
    name: "En attente d livreur",
    icon: "/images/statuses/waiting.svg",
    count: 21,
  },
  {
    key: "received_by_delivery_person",
    name: "Reçu par le livreur",
    icon: "/images/statuses/received_by_delivery_person.svg",
    count: 21,
  },
  {
    key: "processing",
    name: "En cours de livraison",
    icon: "/images/statuses/processing.svg",
    count: 12,
  },
  {
    key: "delivered",
    name: "Livré",
    icon: "/images/statuses/delivered.svg",
  },
  {
    key: "canceled",
    name: "Annulé",
    icon: "/images/statuses/canceled.svg",
    count: 5,
  },
];

export default statuses;
