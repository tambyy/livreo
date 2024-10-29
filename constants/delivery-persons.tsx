const deliveryPersons = [
  {
    id: 1,
    name: "Patrick Rabe",
    phone_number: "0331234567",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.91368, longitude: 47.53613 },
          { latitude: -18.9141, longitude: 47.5375 },
          { latitude: -18.915, longitude: 47.5368 },
          { latitude: -18.9146, longitude: 47.5356 },
          { latitude: -18.91368, longitude: 47.53613 },
        ],
      },
      {
        id: 2,
        type: "polygon",
        area: [
          { latitude: -18.9111, longitude: 47.5278 },
          { latitude: -18.9118, longitude: 47.5289 },
          { latitude: -18.9125, longitude: 47.5275 },
          { latitude: -18.9111, longitude: 47.5269 },
        ],
      },
      {
        id: 3,
        type: "polygon",
        area: [
          { latitude: -18.9171, longitude: 47.5406 },
          { latitude: -18.9179, longitude: 47.5412 },
          { latitude: -18.9186, longitude: 47.5405 },
          { latitude: -18.9178, longitude: 47.5399 },
        ],
      },
    ],
    availabilities: [1, 2, 3, 4, 5, 6],
    vehicle: {
      id: 30,
      name: "van Renault 6789 STU",
      type: "car",
    },
  },
  {
    id: 2,
    name: "Ravaka Andrianjafy",
    phone_number: "0339876543",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9208, longitude: 47.5259 },
          { latitude: -18.9216, longitude: 47.5271 },
          { latitude: -18.9223, longitude: 47.5265 },
          { latitude: -18.9215, longitude: 47.5252 },
        ],
      },
      {
        id: 2,
        type: "polygon",
        area: [
          { latitude: -18.913, longitude: 47.5417 },
          { latitude: -18.9138, longitude: 47.5423 },
          { latitude: -18.9146, longitude: 47.5416 },
          { latitude: -18.9138, longitude: 47.5409 },
        ],
      },
    ],
    availabilities: [1, 3, 5, 6],
    vehicle: {
      id: 8,
      name: "Vélo Électrique City Ride",
      type: "vélo",
    },
  },
  {
    id: 3,
    name: "Tina Rakotonirina",
    phone_number: "0331122334",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9156, longitude: 47.5324 },
          { latitude: -18.9164, longitude: 47.5335 },
          { latitude: -18.9171, longitude: 47.5329 },
          { latitude: -18.9163, longitude: 47.5317 },
        ],
      },
      {
        id: 2,
        type: "polygon",
        area: [
          { latitude: -18.9184, longitude: 47.5362 },
          { latitude: -18.9192, longitude: 47.5371 },
          { latitude: -18.92, longitude: 47.5365 },
          { latitude: -18.9191, longitude: 47.5356 },
        ],
      },
    ],
    availabilities: [2, 4, 5, 7],
    vehicle: {
      id: 10,
      name: "Voiture Peugeot 208",
      type: "voiture",
    },
  },
  {
    id: 4,
    name: "Solange Rafanomezantsoa",
    phone_number: "0335556677",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9201, longitude: 47.5304 },
          { latitude: -18.9209, longitude: 47.5311 },
          { latitude: -18.9217, longitude: 47.5304 },
          { latitude: -18.9208, longitude: 47.5297 },
        ],
      },
      {
        id: 2,
        type: "polygon",
        area: [
          { latitude: -18.9195, longitude: 47.5333 },
          { latitude: -18.9203, longitude: 47.5341 },
          { latitude: -18.9211, longitude: 47.5334 },
          { latitude: -18.9202, longitude: 47.5326 },
        ],
      },
    ],
    availabilities: [1, 3, 4, 5],
    vehicle: {
      id: 6,
      name: "Moto Honda 450 CRF",
      type: "moto",
    },
  },
  {
    id: 5,
    name: "Jean-Pierre Razafy",
    phone_number: "0338765432",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9121, longitude: 47.526 },
          { latitude: -18.9128, longitude: 47.527 },
          { latitude: -18.9135, longitude: 47.5263 },
          { latitude: -18.9126, longitude: 47.5255 },
        ],
      },
      {
        id: 2,
        type: "polygon",
        area: [
          { latitude: -18.918, longitude: 47.5314 },
          { latitude: -18.9188, longitude: 47.532 },
          { latitude: -18.9196, longitude: 47.5312 },
          { latitude: -18.9187, longitude: 47.5305 },
        ],
      },
    ],
    availabilities: [1, 2, 5, 6, 7],
    vehicle: {
      id: 7,
      name: "Vélo Giant MTB",
      type: "vélo",
    },
  },
  {
    id: 6,
    name: "Miora Rakotondrasoa",
    phone_number: "0334455667",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9176, longitude: 47.5282 },
          { latitude: -18.9184, longitude: 47.5291 },
          { latitude: -18.9191, longitude: 47.5283 },
          { latitude: -18.9182, longitude: 47.5275 },
        ],
      },
      {
        id: 2,
        type: "polygon",
        area: [
          { latitude: -18.9162, longitude: 47.5336 },
          { latitude: -18.917, longitude: 47.5344 },
          { latitude: -18.9178, longitude: 47.5336 },
          { latitude: -18.9168, longitude: 47.5328 },
        ],
      },
    ],
    availabilities: [2, 4, 6],
    vehicle: {
      id: 6,
      name: "Moto Honda 450 CRF",
      type: "moto",
    },
  },
  {
    id: 7,
    name: "Faneva Rakotonindrina",
    phone_number: "0339988776",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9115, longitude: 47.5351 },
          { latitude: -18.9123, longitude: 47.536 },
          { latitude: -18.913, longitude: 47.5352 },
          { latitude: -18.9121, longitude: 47.5343 },
        ],
      },
    ],
    availabilities: [1, 3, 4, 7],
    vehicle: {
      id: 10,
      name: "Voiture Peugeot 208",
      type: "voiture",
    },
  },
  {
    id: 8,
    name: "Lanto Andrianarivelo",
    phone_number: "0335544332",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9104, longitude: 47.5315 },
          { latitude: -18.9112, longitude: 47.5324 },
          { latitude: -18.912, longitude: 47.5316 },
          { latitude: -18.9111, longitude: 47.5308 },
        ],
      },
    ],
    availabilities: [1, 5, 6],
    vehicle: {
      id: 9,
      name: "Voiture Renault Clio",
      type: "voiture",
    },
  },
  {
    id: 9,
    name: "Fanja Rajoelina",
    phone_number: "0332233445",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9153, longitude: 47.5271 },
          { latitude: -18.9161, longitude: 47.528 },
          { latitude: -18.9169, longitude: 47.5272 },
          { latitude: -18.916, longitude: 47.5264 },
        ],
      },
      {
        id: 2,
        type: "polygon",
        area: [
          { latitude: -18.9175, longitude: 47.5307 },
          { latitude: -18.9183, longitude: 47.5316 },
          { latitude: -18.9191, longitude: 47.5308 },
          { latitude: -18.9182, longitude: 47.53 },
        ],
      },
    ],
    availabilities: [1, 3, 5, 6],
    vehicle: {
      id: 6,
      name: "Moto Honda 450 CRF",
      type: "moto",
    },
  },
  {
    id: 10,
    name: "Sammy Andrianjafy",
    phone_number: "0336677889",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.914, longitude: 47.5241 },
          { latitude: -18.9148, longitude: 47.525 },
          { latitude: -18.9156, longitude: 47.5242 },
          { latitude: -18.9147, longitude: 47.5235 },
        ],
      },
    ],
    availabilities: [2, 4, 5],
    vehicle: {
      id: 8,
      name: "Vélo Électrique City Ride",
      type: "vélo",
    },
  },
  {
    id: 11,
    name: "Mirana Ralison",
    phone_number: "0332233555",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9102, longitude: 47.5281 },
          { latitude: -18.911, longitude: 47.5289 },
          { latitude: -18.9118, longitude: 47.5281 },
          { latitude: -18.9109, longitude: 47.5273 },
        ],
      },
      {
        id: 2,
        type: "polygon",
        area: [
          { latitude: -18.9124, longitude: 47.53 },
          { latitude: -18.9132, longitude: 47.5309 },
          { latitude: -18.914, longitude: 47.5301 },
          { latitude: -18.9131, longitude: 47.5292 },
        ],
      },
    ],
    availabilities: [1, 4, 6, 7],
    vehicle: {
      id: 5,
      name: "Moto Honda 1234 TBD",
      type: "moto",
    },
  },
  {
    id: 12,
    name: "Ando Rafanomezantsoa",
    phone_number: "0333322111",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9139, longitude: 47.5385 },
          { latitude: -18.9147, longitude: 47.5394 },
          { latitude: -18.9155, longitude: 47.5386 },
          { latitude: -18.9146, longitude: 47.5378 },
        ],
      },
    ],
    availabilities: [1, 2, 3, 6],
    vehicle: {
      id: 7,
      name: "Vélo Giant MTB",
      type: "vélo",
    },
  },
  {
    id: 13,
    name: "Bako Ravelomanana",
    phone_number: "0331122443",
    areas: [
      {
        id: 1,
        type: "polygon",
        area: [
          { latitude: -18.9166, longitude: 47.5236 },
          { latitude: -18.9174, longitude: 47.5245 },
          { latitude: -18.9182, longitude: 47.5237 },
          { latitude: -18.9173, longitude: 47.5229 },
        ],
      },
    ],
    availabilities: [2, 4, 5, 7],
    vehicle: {
      id: 6,
      name: "Moto Honda 450 CRF",
      type: "moto",
    },
  },
];

export default deliveryPersons;
