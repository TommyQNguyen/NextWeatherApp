import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useState } from "react";
import { dedupExchange, cacheExchange, fetchExchange } from "@urql/core";

import { withUrqlClient } from "next-urql";
import styled from "styled-components";

import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";

import { CgWebsite } from "react-icons/cg";

import { InputCityForm } from "../components/InputCityForm";

const Home = () => {
  return (
    <Wrapper>
      <MobileScreen>
        <TitleContainer>
          <TitleTopFragment>Weather 🌨️ </TitleTopFragment>
          <TitleBottomFragment> 🌪️ Reader</TitleBottomFragment>
        </TitleContainer>
        <InputCityForm />
        <Footer>
          <Github />
          <Portfolio />
        </Footer>
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

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  color: snow;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px #353636;
`;

const TitleTopFragment = styled.h1`
  /* padding: 0; */
  padding-left: 4rem;
  margin: 0;
  text-align: left;
`;

const TitleBottomFragment = styled.h1`
  /* padding: 0; */
  padding-right: 4rem;
  margin: 0;
  text-align: right;
`;

const Footer = styled.div`
  width: 100%;
  /* background-color: steelblue; */
  display: flex;
  justify-content: space-around;
`;

const Github = styled(AiFillGithub)`
  width: 30px;
  height: auto;

  &:hover {
    color: snow;
  }
`;

const Portfolio = styled(CgWebsite)`
  width: 30px;
  height: auto;

  &:hover {
    color: snow;
  }
`;
