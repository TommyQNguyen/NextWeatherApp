import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";
import { dedupExchange, cacheExchange, fetchExchange } from "@urql/core";

import { withUrqlClient } from "next-urql";
import styled from "styled-components";

import { AppTitle } from "../components/AppTitle";
import { InputCityForm } from "../components/InputCityForm";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <Wrapper>
      <MobileScreen>
        <AppTitle />
        <InputCityForm />
        <Footer />
      </MobileScreen>
    </Wrapper>
  );
};

export default withUrqlClient((ssrExchange) => ({
  url: "/api/graphql",
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

const MobileScreen = styled.div`
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: rgba(0, 177, 176, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
`;
