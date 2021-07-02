import { useRouter } from "next/router";

import { withUrqlClient } from "next-urql";
import { dedupExchange, cacheExchange, fetchExchange } from "urql";

import { client } from "../../server/helpers";

const City = (props) => {
  return <div>{JSON.stringify(props.weather)}</div>;
};

export async function getServerSideProps(context) {
  console.log("params", context.params);

  // Trust me, it's not null.
  const { data } = await client!
    .query(
      `
  {
    weather(city: "${context.params.city}"){
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
  `
    )
    .toPromise();

  //   console.log("hello", data);

  return {
    props: { ...data },
  };
}

export default withUrqlClient((ssrExchange) => ({
  url: "http://localhost:3000/api/graphql",
  exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
}))(City);
