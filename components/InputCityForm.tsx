import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { Separator } from "../components/Separator";

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

  const [favoriteCity, setFavoriteCity] = useState<string | null>(null);

  useEffect(() => {
    setFavoriteCity(localStorage.getItem("favoriteCity"));
    console.log(favoriteCity);
  }, []);

  // TODO: Cut TSX in components

  // useEffect(() => {
  //   console.log(favoriteCity);
  // }, [favoriteCity]);

  return (
    <InputContainer onSubmit={handleSubmit}>
      <CityInput required onChange={handleInput} placeholder="Ho Chi Minh" />
      <SubmitButton>Get Weather</SubmitButton>

      {favoriteCity ? (
        <>
          <Separator text="Or" />
          <Link href={`/city/${favoriteCity}`}>
            <FavoriteCityButton>⭐ {favoriteCity} ➝</FavoriteCityButton>
          </Link>
        </>
      ) : (
        ""
      )}
    </InputContainer>
  );
};

const InputContainer = styled.form`
  padding: 25px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  background: #e2f6f6;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
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
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;

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

  &:hover {
    font-weight: bold;
    color: snow;
    background-color: rgba(0, 177, 176);
    transition: 0.25s;
  }
`;

const FavoriteCityButton = styled.button`
  padding: 10px;
  color: snow;
  background-color: #2c2c2c;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    font-weight: bolder;
    color: snow;
    background-color: #504d4df7;
    transition: 0.25s;
  }
`;
