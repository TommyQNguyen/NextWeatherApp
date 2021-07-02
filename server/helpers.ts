import { initUrqlClient } from "next-urql";
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange } from "urql";

export const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/";

const ssrCache = ssrExchange({ isClient: false });

export const client = initUrqlClient(
  {
    url: "http://localhost:3000/api/graphql",
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  },
  false
);
