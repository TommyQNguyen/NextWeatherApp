import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    weather(city: String!): Weather
  }

  type Weather {
    cityName: String
    currentWeather: Float
    forecast: [Forecast]
  }

  type Forecast {
    minTemp: Float
    maxTemp: Float
    dayTemp: Float
    date: String
    main: String
    description: String
  }
`;
