import { OPEN_WEATHER_URL } from "../helpers";

type CityWeather = {
  currentWeather: number;
  cityName: string;
  forecast: {
    minTemp: number;
    maxTemp: number;
    dayTemp: number;
    date: number;
    main: string;
    description: string;
  }[];
};

export const openweatherDatasource = {
  getCityWeather: async (city: string): Promise<CityWeather> => {
    const currentResponse = await fetch(
      `${OPEN_WEATHER_URL}weather?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );
    const currentData = await currentResponse.json();

    const {
      coord: { lon, lat },
      dt,
    } = currentData;

    const nextDayResponse = await fetch(
      `${OPEN_WEATHER_URL}onecall?lat=${lat}&lon=${lon}&dt=${dt}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );

    const nextDayData = await nextDayResponse.json();

    const forecast = nextDayData.daily.map((element: any) => {
      return {
        minTemp: element.temp.min,
        maxTemp: element.temp.max,
        dayTemp: element.temp.day,
        date: element.dt,
        main: element.weather[0].main,
        description: element.weather[0].description,
      };
    });

    return {
      currentWeather: currentData.main.temp,
      cityName: city,
      forecast: forecast,
    };
  },
};
