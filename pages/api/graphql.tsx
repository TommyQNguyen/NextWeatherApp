import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    users: [User!]!
    weather(city: String!): Weather
  }
  type User {
    name: String
    age: Int
  }
  type Weather {
    cityName: String
    currentWeather: Float
  }
`;

const resolvers = {
  Query: {
    users() {
      return [{ name: "Nextjs", age: 30 }];
    },
    async weather(parent, args) {
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${args.city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
      );
      const currentData = await currentResponse.json();

      const {
        coord: { lon, lat },
        dt,
      } = currentData;

      const nextDayResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}.44&lon=${lon}&dt=${dt}&appid=${process.env.OPEN_WEATHER_API_KEY}`
      );

      const nextDayData = await nextDayResponse.json();

      return { currentWeather: currentData.main.temp, cityName: args.city };
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
