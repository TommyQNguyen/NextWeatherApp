import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useState } from "react";
import { dedupExchange, cacheExchange, fetchExchange } from "@urql/core";

import { withUrqlClient } from "next-urql";
import styled from "styled-components";

const Home = () => {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/city/${city}`);
  };

  return (
    <Wrapper>
      <InputContainer onSubmit={handleSubmit}>
        <CityInput onChange={handleInput} required />
        <SubmitButton>Get Weather</SubmitButton>
      </InputContainer>
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

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: cyan;
  border: 2px solid pink;
`;

const Title = styled.div`
  text-align: center;
`;

const CityInput = styled.input`
  border: none;
  background-image: none;
  background-color: turquoise;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button``;
