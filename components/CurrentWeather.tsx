import styled from "styled-components";
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const CurrentWeather = ({ cityName, currentWeather }) => {
  // To set something in local storage with a key and its value
  localStorage.setItem("myCat", "Tom");

  // Get something from local storage by the key and storing it in a value
  const cat = localStorage.getItem("myCat");

  // Remove a specific item from local storage using a key
  localStorage.removeItem("myCat");

  // Clear every key in local storage
  localStorage.clear();

  console.log(cat);
  console.log(cityName);

  const [favoriteCity, setFavoriteCity] = useState("");

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <Wrapper>
      <ContainerCityAndFavorites>
        <City>{cityName}</City>
        <EmptyStar onClick={handleClick} />
      </ContainerCityAndFavorites>
      <TemperatureContainer>
        <Temperature>{Math.round(currentWeather)}°C</Temperature>
      </TemperatureContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 15px;
  background-image: url("/horizon.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

// const Date = styled.div`
//   padding: 10px;
//   color: snow;
// `;

const ContainerCityAndFavorites = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const City = styled.div`
  padding: 10px;
  font-size: 25px;
  text-transform: capitalize;
  color: snow;
`;

const EmptyStar = styled(AiOutlineStar)`
  width: 35px;
  height: auto;
  color: white;
`;

const TemperatureContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Temperature = styled.span`
  font-size: 80px;
  color: snow;
`;
