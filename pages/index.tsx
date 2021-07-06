import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

// import { useQuery } from "urql";

import { dedupExchange, cacheExchange, fetchExchange } from "@urql/core";

import { withUrqlClient } from "next-urql";
import styled from "styled-components";

// import { MobileScreen } from "../components/MobileScreen";

const Home = () => {
  // const [result, reExecuteQuery] = useQuery({ query: WeatherQuery });

  // const { data } = result;
  // console.log(data);

  return <Wrapper>Hello</Wrapper>;
};

export default withUrqlClient((ssrExchange) => ({
  url: "http://localhost:3000/api/graphql",
  exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
}))(Home);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("backgroundImage.jpg");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
