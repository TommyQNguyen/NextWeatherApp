import type { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/next-server/server/api-utils";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Here, we make a first API call to get the longitude, latitude, and date values
  const currentResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Funchal&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );
  const currentData = await currentResponse.json();

  const {
    coord: { lon, lat },
    dt,
  } = currentData;
  // console.log(lat, lon, dt);

  // After, we use those values to get the forecast for the next 7 days

  const nextDayResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&dt=${dt}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );

  const nextDayData = await nextDayResponse.json();

  console.log(nextDayData.daily[0].weather);

  res.status(200).json({ name: "John Doe" });
}
