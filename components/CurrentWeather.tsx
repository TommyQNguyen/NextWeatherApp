import styled from "styled-components";
import { useState, useEffect } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const CurrentWeather = ({ cityName, currentWeather }) => {
  const [isFavoriteCity, setIsFavoriteCity] = useState(false);

  useEffect(() => {
    setIsFavoriteCity(localStorage.getItem("favoriteCity") === cityName);
  }, []);

  const handleClick = () => {
    if (isFavoriteCity) {
      localStorage.removeItem("favoriteCity");
    } else {
      localStorage.setItem("favoriteCity", cityName);
    }
    setIsFavoriteCity(!isFavoriteCity);
  };

  return (
    <Wrapper>
      <ContainerCityAndFavorites>
        <City>{cityName}</City>

        {isFavoriteCity ? (
          <FullStar onClick={handleClick} />
        ) : (
          <EmptyStar onClick={handleClick} />
        )}
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
  cursor: pointer;

  &:hover {
    color: yellow;
  }
`;

const FullStar = styled(AiFillStar)`
  width: 35px;
  height: auto;
  color: yellow;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const TemperatureContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Temperature = styled.span`
  font-size: 80px;
  color: snow;
`;
