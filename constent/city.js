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
    name: "Ho Chi Minh ",
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
    name: "Ho Chi Minh ",
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
  {
    name: "Pune",
    coords: {
      lat: "18.5204",
      lon: "73.8567",
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
    name: "Surat",
    coords: {
      lat: "21.1702",
      lon: "72.8311",
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
    name: "Visakhapatnam",
    coords: {
      lat: "17.6868",
      lon: "83.2185",
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
    name: "Patna",
    coords: {
      lat: "25.5941",
      lon: "85.1376",
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
    name: "Nashik",
    coords: {
      lat: "20.0113",
      lon: "73.7909",
    },
  },
  {
    name: "Ranchi",
    coords: {
      lat: "23.3441",
      lon: "85.3096",
    },
  },
  {
    name: "Meerut",
    coords: {
      lat: "28.9845",
      lon: "77.7064",
    },
  },
  {
    name: "Rajkot",
    coords: {
      lat: "22.3039",
      lon: "70.8022",
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
    name: "Srinagar",
    coords: {
      lat: "34.0837",
      lon: "74.7973",
    },
  },
  {
    name: "Amritsar",
    coords: {
      lat: "31.6340",
      lon: "74.8723",
    },
  },
  {
    name: "Allahabad",
    coords: {
      lat: "25.4358",
      lon: "81.8463",
    },
  },
  {
    name: "Howrah",
    coords: {
      lat: "22.5958",
      lon: "88.2636",
    },
  },
  {
    name: "Jabalpur",
    coords: {
      lat: "23.1815",
      lon: "79.9864",
    },
  },
  {
    name: "Gwalior",
    coords: {
      lat: "26.2183",
      lon: "78.1828",
    },
  },
  {
    name: "Vijayawada",
    coords: {
      lat: "16.5062",
      lon: "80.6480",
    },
  },
  {
    name: "Jodhpur",
    coords: {
      lat: "26.2389",
      lon: "73.0243",
    },
  },
  {
    name: "Madurai",
    coords: {
      lat: "9.9252",
      lon: "78.1198",
    },
  },
  {
    name: "Raipur",
    coords: {
      lat: "21.2514",
      lon: "81.6296",
    },
  },
  {
    name: "Kota",
    coords: {
      lat: "25.2138",
      lon: "75.8648",
    },
  },
  {
    name: "Chandigarh",
    coords: {
      lat: "30.7333",
      lon: "76.7794",
    },
  },
  {
    name: "Guwahati",
    coords: {
      lat: "26.1445",
      lon: "91.7362",
    },
  },
  {
    name: "Hubli",
    coords: {
      lat: "15.3647",
      lon: "75.1240",
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
    name: "Dehradun",
    coords: {
      lat: "30.3165",
      lon: "78.0322",
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
    name: "Siliguri",
    coords: {
      lat: "26.7271",
      lon: "88.3953",
    },
  },
  {
    name: "Jamshedpur",
    coords: {
      lat: "22.8046",
      lon: "86.2029",
    },
  },
  {
    name: "Jalandhar",
    coords: {
      lat: "31.3260",
      lon: "75.5762",
    },
  },
  {
    name: "Bhilai",
    coords: {
      lat: "21.1938",
      lon: "81.3509",
    },
  },
  {
    name: "Cuttack",
    coords: {
      lat: "20.4625",
      lon: "85.8828",
    },
  },
  {
    name: "Kochi",
    coords: {
      lat: "9.9312",
      lon: "76.2673",
    },
  },
  {
    name: "Udaipur",
    coords: {
      lat: "24.5854",
      lon: "73.7125",
    },
  },
  {
    name: "Bhubaneswar",
    coords: {
      lat: "20.2961",
      lon: "85.8245",
    },
  },
  {
    name: "Salem",
    coords: {
      lat: "11.6643",
      lon: "78.1460",
    },
  },
  {
    name: "Warangal",
    coords: {
      lat: "17.9784",
      lon: "79.6006",
    },
  },
  {
    name: "Tiruchirappalli",
    coords: {
      lat: "10.7905",
      lon: "78.7047",
    },
  },
  {
    name: "Jhansi",
    coords: {
      lat: "25.4484",
      lon: "78.5685",
    },
  },
  {
    name: "Guntur",
    coords: {
      lat: "16.3067",
      lon: "80.4365",
    },
  },
  {
    name: "Saharanpur",
    coords: {
      lat: "29.9640",
      lon: "77.5467",
    },
  },
  {
    name: "Mathura",
    coords: {
      lat: "27.4924",
      lon: "77.6737",
    },
  },
  {
    name: "Mangalore",
    coords: {
      lat: "12.9141",
      lon: "74.8560",
    },
  },
  {
    name: "Rourkela",
    coords: {
      lat: "22.2567",
      lon: "84.8140",
    },
  },
  {
    name: "Aligarh",
    coords: {
      lat: "27.8974",
      lon: "78.0880",
    },
  },
  {
    name: "Bareilly",
    coords: {
      lat: "28.3670",
      lon: "79.4304",
    },
  },
  {
    name: "Moradabad",
    coords: {
      lat: "28.8389",
      lon: "78.7768",
    },
  },
  {
    name: "Gorakhpur",
    coords: {
      lat: "26.7606",
      lon: "83.3732",
    },
  },
  {
    name: "New York ",
    coords: {
      lat: "40.7128",
      lon: "-74.0060",
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
    name: "Tokyo",
    coords: {
      lat: "35.6895",
      lon: "139.6917",
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
    name: "Toronto",
    coords: {
      lat: "43.6511",
      lon: "-79.3470",
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
    name: "Dubai",
    coords: {
      lat: "25.2769",
      lon: "55.2962",
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
    name: "Hong Kong",
    coords: {
      lat: "22.3193",
      lon: "114.1694",
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
    name: "Moscow",
    coords: {
      lat: "55.7558",
      lon: "37.6176",
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
    name: "Madrid",
    coords: {
      lat: "40.4168",
      lon: "-3.7038",
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
    name: "Istanbul",
    coords: {
      lat: "41.0082",
      lon: "28.9784",
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
    name: "Rome",
    coords: {
      lat: "41.9028",
      lon: "12.4964",
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
    name: "Amsterdam",
    coords: {
      lat: "52.3676",
      lon: "4.9041",
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
    name: "Mexico ",
    coords: {
      lat: "19.4326",
      lon: "-99.1332",
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
    name: "Vienna",
    coords: {
      lat: "48.2082",
      lon: "16.3738",
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
    name: "São Paulo",
    coords: {
      lat: "-23.5505",
      lon: "-46.6333",
    },
  },
  {
    name: "Cape Town",
    coords: {
      lat: "-33.9249",
      lon: "18.4241",
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
    name: "Oslo",
    coords: {
      lat: "59.9139",
      lon: "10.7522",
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
    name: "Kuala Lumpur",
    coords: {
      lat: "3.1390",
      lon: "101.6869",
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
    name: "Vienna",
    coords: {
      lat: "48.2082",
      lon: "16.3738",
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
    name: "Warsaw",
    coords: {
      lat: "52.2297",
      lon: "21.0122",
    },
  },
  {
    name: "Budapest",
    coords: {
      lat: "47.4979",
      lon: "19.0402",
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
    name: "Prague",
    coords: {
      lat: "50.0755",
      lon: "14.4378",
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
    name: "Ljubljana",
    coords: {
      lat: "46.0569",
      lon: "14.5058",
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
    name: "Geneva",
    coords: {
      lat: "46.2044",
      lon: "6.1432",
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
    name: "Montreal",
    coords: {
      lat: "45.5017",
      lon: "-73.5673",
    },
  },
  {
    name: "Calgary",
    coords: {
      lat: "51.0486",
      lon: "-114.0708",
    },
  },
  {
    name: "Brisbane",
    coords: {
      lat: "-27.4698",
      lon: "153.0251",
    },
  },
  {
    name: "Perth",
    coords: {
      lat: "-31.9505",
      lon: "115.8605",
    },
  },
  {
    name: "Auckland",
    coords: {
      lat: "-36.8485",
      lon: "174.7633",
    },
  },
  {
    name: "Wellington",
    coords: {
      lat: "-41.2865",
      lon: "174.7762",
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
    name: "Barcelona",
    coords: {
      lat: "41.3851",
      lon: "2.1734",
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
    name: "Munich",
    coords: {
      lat: "48.1351",
      lon: "11.5820",
    },
  },
  {
    name: "Frankfurt",
    coords: {
      lat: "50.1109",
      lon: "8.6821",
    },
  },
  {
    name: "Hamburg",
    coords: {
      lat: "53.5511",
      lon: "9.9937",
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
    name: "Stockholm",
    coords: {
      lat: "59.3293",
      lon: "18.0686",
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
    name: "Copenhagen",
    coords: {
      lat: "55.6761",
      lon: "12.5683",
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
    name: "Dublin",
    coords: {
      lat: "53.3498",
      lon: "-6.2603",
    },
  },
  {
    name: "Ljubljana",
    coords: {
      lat: "46.0569",
      lon: "14.5058",
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
    name: "Geneva",
    coords: {
      lat: "46.2044",
      lon: "6.1432",
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
    name: "Melbourne",
    coords: {
      lat: "-37.8136",
      lon: "144.9631",
    },
  },
  {
    name: "Brisbane",
    coords: {
      lat: "-27.4698",
      lon: "153.0251",
    },
  },
  {
    name: "Perth",
    coords: {
      lat: "-31.9505",
      lon: "115.8605",
    },
  },
  {
    name: "Adelaide",
    coords: {
      lat: "-34.9285",
      lon: "138.6007",
    },
  },
  {
    name: "Gold Coast",
    coords: {
      lat: "-28.0167",
      lon: "153.4000",
    },
  },
  {
    name: "Canberra",
    coords: {
      lat: "-35.2809",
      lon: "149.1300",
    },
  },
  {
    name: "Newcastle",
    coords: {
      lat: "-32.9267",
      lon: "151.7817",
    },
  },
  {
    name: "Geelong",
    coords: {
      lat: "-38.1499",
      lon: "144.3617",
    },
  },
  {
    name: "Hobart",
    coords: {
      lat: "-42.8821",
      lon: "147.3272",
    },
  },
];

export { cities };
