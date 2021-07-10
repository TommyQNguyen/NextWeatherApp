import styled from "styled-components";

export const CurrentWeather = ({ cityName, currentWeather }) => {
  return (
    <Wrapper>
      <City>{cityName}</City>
      <TemperatureContainer>
        <Temperature>{Math.round(currentWeather)}°C</Temperature>
      </TemperatureContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: green; */
  margin: 20px 15px;
  background-image: url("/horizon.jpg");
  /* background-color: #cccccc; */
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

// const Date = styled.div`
//   padding: 10px;
//   color: snow;
// `;

const City = styled.div`
  padding: 10px;
  font-size: 25px;
  text-transform: capitalize;
  color: snow;
`;

const TemperatureContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Temperature = styled.span`
  font-size: 80px;
  color: snow;
`;
