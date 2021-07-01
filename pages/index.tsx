import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery } from "urql";

import { MobileScreen } from "../components/MobileScreen";

const WeatherQuery = `
{
  weather(city: "Berlin"){
    cityName
    currentWeather
    forecast {
      minTemp
      maxTemp
      dayTemp
      date
      main
      description
    }
  }
}
`;

export default function Home() {
  const [result, reExecuteQuery] = useQuery({ query: WeatherQuery });

  const { data } = result;
  console.log(data);

  return (
    <div>
      <MobileScreen />
    </div>
  );
}
