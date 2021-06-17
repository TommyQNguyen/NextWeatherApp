import { openweatherDatasource } from "./dataSources/openweather.datasource";

export const resolvers = {
  Query: {
    weather(_: any, args: { city: string }) {
      return openweatherDatasource.getCityWeather(args.city);
    },
  },
};
