import { withUrqlClient } from "next-urql";
import { dedupExchange, cacheExchange, fetchExchange } from "urql";
import styled from "styled-components";

import { client } from "../../server/helpers";

import { CurrentWeather } from "../../components/CurrentWeather";
import { Separator } from "../../components/Separator";
import { Forecast } from "../../components/Forecast";

const City = (props) => {
  console.log(props.weather);

  return (
    <Wrapper>
      <MobileScreen>
        <CurrentWeather />
        <Separator />
        <Forecast props={props.weather} />
      </MobileScreen>
    </Wrapper>
  );
};

export async function getServerSideProps(context: { params: { city: any } }) {
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

  return {
    props: { ...data },
  };
}

export default withUrqlClient((ssrExchange) => ({
  url: "http://localhost:3000/api/graphql",
  exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
}))(City);

const Wrapper = styled.div`
  background-color: powderblue;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileScreen = styled.div`
  width: 375px;
  height: 667px;
  background-color: black;
  border-radius: 20px;
`;
