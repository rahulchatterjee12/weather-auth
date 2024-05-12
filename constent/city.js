const cities = [
  {
    name: "Tokyo",
    coords: {
      lat: "35.6895",
      lon: "139.6917",
    },
  },
  {
    name: "New York",
    coords: {
      lat: "40.7128",
      lon: "-74.0060",
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
    name: "Paris",
    coords: {
      lat: "48.8566",
      lon: "2.3522",
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
    name: "Sydney",
    coords: {
      lat: "-33.8688",
      lon: "151.2093",
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
    name: "Moscow",
    coords: {
      lat: "55.7558",
      lon: "37.6176",
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
    name: "Rome",
    coords: {
      lat: "41.9028",
      lon: "12.4964",
    },
  },
  {
    name: "Mexico City",
    coords: {
      lat: "19.4326",
      lon: "-99.1332",
    },
  },
  {
    name: "Tokyo",
    coords: {
      lat: "35.6895",
      lon: "139.6917",
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
    name: "Toronto",
    coords: {
      lat: "43.6511",
      lon: "-79.3470",
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
    name: "São Paulo",
    coords: {
      lat: "-23.5505",
      lon: "-46.6333",
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
    name: "Seoul",
    coords: {
      lat: "37.5665",
      lon: "126.9780",
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
    name: "Madrid",
    coords: {
      lat: "40.4168",
      lon: "-3.7038",
    },
  },
  {
    name: "Miami",
    coords: {
      lat: "25.7617",
      lon: "-80.1918",
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
    name: "Singapore",
    coords: {
      lat: "1.3521",
      lon: "103.8198",
    },
  },
  {
    name: "Dubai",
    coords: {
      lat: "25.2769",
      lon: "55.2962",
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
    name: "San Francisco",
    coords: {
      lat: "37.7749",
      lon: "-122.4194",
    },
  },
  {
    name: "Rio de Janeiro",
    coords: {
      lat: "-22.9068",
      lon: "-43.1729",
    },
  },
  {
    name: "Amsterdam",
    coords: {
      lat: "52.3676",
      lon: "4.9041",
    },
  },
  {
    name: "Vienna",
    coords: {
      lat: "48.2082",
      lon: "16.3738",
    },
  },
  {
    name: "Washington D.C.",
    coords: {
      lat: "38.9072",
      lon: "-77.0369",
    },
  },
  {
    name: "Boston",
    coords: {
      lat: "42.3601",
      lon: "-71.0589",
    },
  },
  {
    name: "Dublin",
    coords: {
      lat: "53.3498",
      lon: "-6.2603",
    },
  },
  {
    name: "Prague",
    coords: {
      lat: "50.0755",
      lon: "14.4378",
    },
  },
  {
    name: "Stockholm",
    coords: {
      lat: "59.3293",
      lon: "18.0686",
    },
  },
  {
    name: "Athens",
    coords: {
      lat: "37.9838",
      lon: "23.7275",
    },
  },
  {
    name: "Oslo",
    coords: {
      lat: "59.9139",
      lon: "10.7522",
    },
  },
  {
    name: "Edinburgh",
    coords: {
      lat: "55.9533",
      lon: "-3.1883",
    },
  },
  {
    name: "Zurich",
    coords: {
      lat: "47.3769",
      lon: "8.5417",
    },
  },
  {
    name: "Copenhagen",
    coords: {
      lat: "55.6761",
      lon: "12.5683",
    },
  },
  {
    name: "Lisbon",
    coords: {
      lat: "38.7223",
      lon: "-9.1393",
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
    name: "Vancouver",
    coords: {
      lat: "49.2827",
      lon: "-123.1207",
    },
  },
  {
    name: "Helsinki",
    coords: {
      lat: "60.1695",
      lon: "24.9354",
    },
  },
  {
    name: "Brussels",
    coords: {
      lat: "50.8503",
      lon: "4.3517",
    },
  },
  {
    name: "Mexico City",
    coords: {
      lat: "19.4326",
      lon: "-99.1332",
    },
  },
  {
    name: "Barcelona",
    coords: {
      lat: "41.3851",
      lon: "2.1734",
    },
  },
  {
    name: "Dublin",
    coords: {
      lat: "53.3498",
      lon: "-6.2603",
    },
  },
  {
    name: "Warsaw",
    coords: {
      lat: "52.2297",
      lon: "21.0122",
    },
  },
  {
    name: "Munich",
    coords: {
      lat: "48.1351",
      lon: "11.5820",
    },
  },
  {
    name: "Toronto",
    coords: {
      lat: "43.6511",
      lon: "-79.3470",
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
    name: "Milan",
    coords: {
      lat: "45.4642",
      lon: "9.1900",
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
    name: "Cairo",
    coords: {
      lat: "30.0444",
      lon: "31.2357",
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
    name: "Delhi",
    coords: {
      lat: "28.7041",
      lon: "77.1025",
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
    name: "Hyderabad",
    coords: {
      lat: "17.3850",
      lon: "78.4867",
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
    name: "Kolkata",
    coords: {
      lat: "22.5726",
      lon: "88.3639",
    },
  },
  {
    name: "Ahmedabad",
    coords: {
      lat: "23.0225",
      lon: "72.5714",
    },
  },
  {
    name: "Pune",
    coords: {
      lat: "18.5204",
      lon: "73.8567",
    },
  },
  {
    name: "Jaipur",
    coords: {
      lat: "26.9124",
      lon: "75.7873",
    },
  },
  {
    name: "Surat",
    coords: {
      lat: "21.1702",
      lon: "72.8311",
    },
  },
  {
    name: "Lucknow",
    coords: {
      lat: "26.8467",
      lon: "80.9462",
    },
  },
  {
    name: "Kanpur",
    coords: {
      lat: "26.4499",
      lon: "80.3319",
    },
  },
  {
    name: "Nagpur",
    coords: {
      lat: "21.1458",
      lon: "79.0882",
    },
  },
  {
    name: "Patna",
    coords: {
      lat: "25.5941",
      lon: "85.1376",
    },
  },
  {
    name: "Indore",
    coords: {
      lat: "22.7196",
      lon: "75.8577",
    },
  },
  {
    name: "Bhopal",
    coords: {
      lat: "23.2599",
      lon: "77.4126",
    },
  },
  {
    name: "Ludhiana",
    coords: {
      lat: "30.9010",
      lon: "75.8573",
    },
  },
  {
    name: "Agra",
    coords: {
      lat: "27.1767",
      lon: "78.0081",
    },
  },
  {
    name: "Vadodara",
    coords: {
      lat: "22.3072",
      lon: "73.1812",
    },
  },
  {
    name: "Varanasi",
    coords: {
      lat: "25.3176",
      lon: "82.9739",
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
    name: "Siliguri",
    coords: {
      lat: "26.7271",
      lon: "88.3953",
    },
  },
  {
    name: "Asansol",
    coords: {
      lat: "23.6739",
      lon: "86.9524",
    },
  },
  {
    name: "Durgapur",
    coords: {
      lat: "23.5204",
      lon: "87.3119",
    },
  },
  {
    name: "Howrah",
    coords: {
      lat: "22.5958",
      lon: "88.2636",
    },
  },
];

export { cities };
