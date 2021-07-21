import styled from "styled-components";
import { useState, useEffect } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const CurrentWeather = ({ cityName, currentWeather }) => {
  // Let's say the user has not set their favorite city yet.
  const [isFavoriteCity, setIsFavoriteCity] = useState(false);

  // Checks if the user's favorite city is the current city.
  useEffect(() => {
    setIsFavoriteCity(localStorage.getItem("favoriteCity") === cityName);
  }, []);

  // A toggle to set the user's favorite city.
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

const ContainerCityAndFavorites = styled.div`
  width: 90%;
  padding-top: 10px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const City = styled.div`
  padding: 10px;
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  color: snow;
`;

const EmptyStar = styled(AiOutlineStar)`
  width: 35px;
  height: auto;
  color: white;
  cursor: pointer;

  &:hover {
    color: yellow;
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Safari 3-8 */
    transform: scale(1.5);
    transition: transform 0.5s;
  }
`;

const FullStar = styled(AiFillStar)`
  width: 35px;
  height: auto;
  color: yellow;
  cursor: pointer;

  &:hover {
    color: gray;
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: transform 0.5s;
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
