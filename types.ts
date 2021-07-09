export type CityWeather = {
  __typename: string;
  cityName: string;
  currentWeather: number;
  forecast: WeatherForecast[];
};

export type WeatherForecast = {
  __typename: string;
  date: string;
  dayTemp: number;
  description: string;
  main: string;
  maxTemp: number;
  minTemp: number;
};
