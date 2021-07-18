import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

export const InputCityForm = () => {
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
    <InputContainer onSubmit={handleSubmit}>
      <CityInput required onChange={handleInput} placeholder="Taipei" />
      <SubmitButton>Get Weather</SubmitButton>
    </InputContainer>
  );
};

const InputContainer = styled.form`
  padding: 25px;
  margin: 10px;
  display: flex;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Title = styled.div`
  text-align: center;
`;

const CityInput = styled.input`
  padding: 10px;
  background-image: none;
  border: none;
  color: #008281;
  border-radius: 10px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  color: snow;
  background-color: #008281;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
