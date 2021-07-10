import { withUrqlClient } from "next-urql";
import { dedupExchange, cacheExchange, fetchExchange } from "urql";
import styled from "styled-components";

import { client } from "../../server/helpers";
import { CityWeather } from "../../types";

import { CurrentWeather } from "../../components/CurrentWeather";

import { Forecast } from "../../components/Forecast";
import { HomeButton } from "../../components/HomeButton";
import { NextPage } from "next";

type CityPageProps = {
  weather: CityWeather;
};

const City: NextPage<CityPageProps> = (props) => {
  console.log(props.weather);

  return (
    <Wrapper>
      <MobileScreen>
        <CurrentWeather
          cityName={props.weather.cityName}
          currentWeather={props.weather.currentWeather}
        />
        <Forecast forecast={props.weather.forecast} />
        <HomeButton />
      </MobileScreen>
    </Wrapper>
  );
};

export async function getServerSideProps(context: { params: { city: any } }) {
  // console.log("params", context.params);

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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("/backgroundClouds.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MobileScreen = styled.div`
  width: 375px;
  height: 667px;
  background-color: black;
  border-radius: 20px;
`;
