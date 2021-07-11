import Head from "next/head";
import Image from "next/image";

import { useState } from "react";
import { dedupExchange, cacheExchange, fetchExchange } from "@urql/core";

import { withUrqlClient } from "next-urql";
import styled from "styled-components";

const Home = () => {
  // const { data } = result;
  // console.log(data);
  const [city, setCity] = useState("");

  const handleInput = (event) => {
    setCity(event.target.value);
    // console.log(city);
  };
  // console.log(city);

  return (
    <Wrapper>
      <InputContainer>
        <CityInput onChange={handleInput} />
        <SubmitButton>Get Weather</SubmitButton>
      </InputContainer>
    </Wrapper>
  );
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

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: cyan;
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
