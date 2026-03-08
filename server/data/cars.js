import { client } from "../config/database.js";

export const carData = [
  {
    name: "Ferrari",
    model: "488 GTB",
    engine: "3.9L Twin-Turbo V8",
    image:
      "https://static.cargurus.com/images/forsale/2026/01/28/19/24/2018_ferrari_488-pic-9129056990424375633-1024x768.jpeg",
    price: "330000",
    description:
      "A stunning Italian supercar combining aggressive styling with explosive twin-turbo V8 performance. Built for speed, precision, and pure driving excitement.",
  },
  {
    name: "Lamborghini",
    model: "Huracán EVO",
    engine: "5.2L V10",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Huracan-EVO/10643/1769680298561/front-left-side-47.jpg?imwidth=420&impolicy=resize",
    price: "261000",
    description:
      "A sharp and futuristic sports car powered by a naturally aspirated V10. Delivers extreme acceleration, razor-sharp handling, and unmistakable Lamborghini attitude.",
  },
  {
    name: "Porsche",
    model: "911 GT3",
    engine: "3.8L Twin-Turbo Flat-6",
    image:
      "https://cdn-fastly.autoguide.com/media/2023/06/08/12503167/2015-porsche-911-gt3-rs-will-be-automatic-only.jpg?size=720x845&nocrop=1",
    price: "204000",
    description:
      "An iconic German performance machine blending everyday usability with supercar-level speed. Known for its legendary balance, control, and engineering precision.",
  },
  {
    name: "McLaren",
    model: "720S",
    engine: "4.0L Twin-Turbo V8",
    image:
      "https://marketplace.louwmanexclusive.com/files/uploads/777fffe7-424c-4ec2-8f8b-bc2b92b7430e/resizes/w568-44293771-1.webp?v=1771601999",
    price: "299000",
    description:
      "A lightweight British supercar engineered for aerodynamic excellence and track dominance. Delivers breathtaking acceleration and advanced performance technology.",
  },
  {
    name: "Aston Martin",
    model: "Vantage",
    engine: "4.0L Twin-Turbo V8",
    image:
      "https://www.astonmartinwashingtondc.com/imagetag/4170/36/l/New-2025-Aston-Martin-Vantage-1734714578.jpg",
    price: "152000",
    description:
      "A luxury performance coupe that blends elegance with muscular power. Offers refined styling, thrilling performance, and a distinctive British character.",
  },
  {
    name: "Chevrolet",
    model: "Corvette Z06",
    engine: "5.5L Naturally Aspirated V8",
    image:
      "https://p.turbosquid.com/ts-thumb/Af/dYNLyK/Sm/whitechevycorvettez062023cabrioletc4dmodel002/jpg/1690237530/600x600/fit_q87/0f4ffa7a39ed6d512f95e5244a0e76e0d2d3d415/whitechevycorvettez062023cabrioletc4dmodel002.jpg",
    price: "106000",
    description:
      "An American high-performance icon featuring a screaming naturally aspirated V8. Delivers track-ready capability at an aggressive and competitive price point.",
  },
];

const seedCarsTable = async () => {
  carData.forEach((car) => {
    const insertQuery = {
      text: `
      INSERT INTO cars (name, model, engine, image, price, description)
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
    };

    const values = [
      car.name,
      car.model,
      car.engine,
      car.image,
      car.price,
      car.description,
    ];

    client.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("Error inserting car", err);
      }
    });
  });
};
