const cities = [
  {
    name: "Tokyo",
    coords: {
      lat: "35.6895",
      lon: "139.6917",
    },
  },
  {
    name: "Delhi",
    coords: {
      lat: "28.7041",
      lon: "77.1025",
    },
  },
  {
    name: "Shanghai",
    coords: {
      lat: "31.2304",
      lon: "121.4737",
    },
  },
  {
    name: "São Paulo",
    coords: {
      lat: "-23.5505",
      lon: "-46.6333",
    },
  },
  {
    name: "Mumbai",
    coords: {
      lat: "19.0760",
      lon: "72.8777",
    },
  },
  {
    name: "Beijing",
    coords: {
      lat: "39.9042",
      lon: "116.4074",
    },
  },
  {
    name: "Karachi",
    coords: {
      lat: "24.8607",
      lon: "67.0011",
    },
  },
  {
    name: "Istanbul",
    coords: {
      lat: "41.0082",
      lon: "28.9784",
    },
  },
  {
    name: "Dhaka",
    coords: {
      lat: "23.8103",
      lon: "90.4125",
    },
  },
  {
    name: "Moscow",
    coords: {
      lat: "55.7558",
      lon: "37.6176",
    },
  },
  {
    name: "Cairo",
    coords: {
      lat: "30.0444",
      lon: "31.2357",
    },
  },
  {
    name: "Bangkok",
    coords: {
      lat: "13.7563",
      lon: "100.5018",
    },
  },
  {
    name: "Kolkata",
    coords: {
      lat: "22.5726",
      lon: "88.3639",
    },
  },
  {
    name: "Buenos Aires",
    coords: {
      lat: "-34.6037",
      lon: "-58.3816",
    },
  },
  {
    name: "Shenzhen",
    coords: {
      lat: "22.5431",
      lon: "114.0579",
    },
  },
  {
    name: "Lagos",
    coords: {
      lat: "6.5244",
      lon: "3.3792",
    },
  },
  {
    name: "Jakarta",
    coords: {
      lat: "-6.2088",
      lon: "106.8456",
    },
  },
  {
    name: "Lima",
    coords: {
      lat: "-12.0464",
      lon: "-77.0428",
    },
  },
  {
    name: "Lahore",
    coords: {
      lat: "31.5497",
      lon: "74.3436",
    },
  },
  {
    name: "London",
    coords: {
      lat: "51.5074",
      lon: "-0.1278",
    },
  },
  {
    name: "Bangalore",
    coords: {
      lat: "12.9716",
      lon: "77.5946",
    },
  },
  {
    name: "Chennai",
    coords: {
      lat: "13.0827",
      lon: "80.2707",
    },
  },
  {
    name: "New York City",
    coords: {
      lat: "40.7128",
      lon: "-74.0060",
    },
  },
  {
    name: "Ho Chi Minh City",
    coords: {
      lat: "10.8231",
      lon: "106.6297",
    },
  },
  {
    name: "Hyderabad",
    coords: {
      lat: "17.3850",
      lon: "78.4867",
    },
  },
  {
    name: "Bangkok",
    coords: {
      lat: "13.7563",
      lon: "100.5018",
    },
  },
  {
    name: "Teheran",
    coords: {
      lat: "35.6892",
      lon: "51.3890",
    },
  },
  {
    name: "Lahore",
    coords: {
      lat: "31.5497",
      lon: "74.3436",
    },
  },
  {
    name: "Chengdu",
    coords: {
      lat: "30.5728",
      lon: "104.0668",
    },
  },
  {
    name: "Dhaka",
    coords: {
      lat: "23.8103",
      lon: "90.4125",
    },
  },
  {
    name: "Lahore",
    coords: {
      lat: "31.5497",
      lon: "74.3436",
    },
  },
  {
    name: "Cairo",
    coords: {
      lat: "30.0444",
      lon: "31.2357",
    },
  },
  {
    name: "Bangkok",
    coords: {
      lat: "13.7563",
      lon: "100.5018",
    },
  },
  {
    name: "Berlin",
    coords: {
      lat: "52.5200",
      lon: "13.4050",
    },
  },
  {
    name: "Madrid",
    coords: {
      lat: "40.4168",
      lon: "-3.7038",
    },
  },
  {
    name: "Singapore",
    coords: {
      lat: "1.3521",
      lon: "103.8198",
    },
  },
  {
    name: "Santiago",
    coords: {
      lat: "-33.4489",
      lon: "-70.6693",
    },
  },
  {
    name: "Nairobi",
    coords: {
      lat: "-1.2864",
      lon: "36.8172",
    },
  },
  {
    name: "Baghdad",
    coords: {
      lat: "33.3152",
      lon: "44.3661",
    },
  },
  {
    name: "Bangkok",
    coords: {
      lat: "13.7563",
      lon: "100.5018",
    },
  },
  {
    name: "Hyderabad",
    coords: {
      lat: "17.3850",
      lon: "78.4867",
    },
  },
  {
    name: "Shenzhen",
    coords: {
      lat: "22.5431",
      lon: "114.0579",
    },
  },
  {
    name: "Paris",
    coords: {
      lat: "48.8566",
      lon: "2.3522",
    },
  },
  {
    name: "Sao Paulo",
    coords: {
      lat: "-23.5505",
      lon: "-46.6333",
    },
  },
  {
    name: "Seoul",
    coords: {
      lat: "37.5665",
      lon: "126.9780",
    },
  },
  {
    name: "Los Angeles",
    coords: {
      lat: "34.0522",
      lon: "-118.2437",
    },
  },
  {
    name: "Tehran",
    coords: {
      lat: "35.6892",
      lon: "51.3890",
    },
  },
  {
    name: "Bangalore",
    coords: {
      lat: "12.9716",
      lon: "77.5946",
    },
  },
  {
    name: "Tianjin",
    coords: {
      lat: "39.0842",
      lon: "117.2007",
    },
  },
  {
    name: "Chicago",
    coords: {
      lat: "41.8781",
      lon: "-87.6298",
    },
  },
  {
    name: "Kolkata",
    coords: {
      lat: "22.5726",
      lon: "88.3639",
    },
  },
  {
    name: "London",
    coords: {
      lat: "51.5074",
      lon: "-0.1278",
    },
  },
  {
    name: "Nanjing",
    coords: {
      lat: "32.0603",
      lon: "118.7969",
    },
  },
  {
    name: "Bangkok",
    coords: {
      lat: "13.7563",
      lon: "100.5018",
    },
  },
  {
    name: "Tianjin",
    coords: {
      lat: "39.0842",
      lon: "117.2007",
    },
  },
  {
    name: "Baghdad",
    coords: {
      lat: "33.3152",
      lon: "44.3661",
    },
  },
  {
    name: "Hong Kong",
    coords: {
      lat: "22.3193",
      lon: "114.1694",
    },
  },
  {
    name: "Taipei",
    coords: {
      lat: "25.0330",
      lon: "121.5654",
    },
  },
  {
    name: "Ho Chi Minh City",
    coords: {
      lat: "10.8231",
      lon: "106.6297",
    },
  },
  {
    name: "Singapore",
    coords: {
      lat: "1.3521",
      lon: "103.8198",
    },
  },
];

export { cities };
