import styled from "styled-components";
import {
  TiWeatherSunny,
  TiWeatherCloudy,
  TiWeatherDownpour,
} from "react-icons/ti";

import { WeatherForecast } from "../types";

const weatherIcons = {
  Clear: <TiWeatherSunny />,
  Clouds: <TiWeatherCloudy />,
  Rain: <TiWeatherDownpour />,
};

const secondsToWeekday = (seconds: number) => {
  const daysOfTheWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const time = new Date(1970, 0, 1); // Epoch
  time.setSeconds(seconds);
  return daysOfTheWeek[time.getDay()];
};

export const Forecast: React.FC<{ forecast: WeatherForecast[] }> = ({
  forecast,
}) => {
  return (
    <Wrapper>
      <Title>Forecast</Title>

      {forecast.map((day) => {
        return (
          <DailyContainer key={day.date}>
            <Weekday>{secondsToWeekday(Number(day.date))}</Weekday>
            <TemperatureContainer>
              <HighestTemperature>
                {Math.round(day.maxTemp)}°C
              </HighestTemperature>
              /
              <LowestTemperature>{Math.round(day.minTemp)}°C</LowestTemperature>
            </TemperatureContainer>
            {/* <WeatherIconContainer>{day.main}</WeatherIconContainer> */}
            <WeatherIconContainer>
              {weatherIcons[day.main]}
            </WeatherIconContainer>
          </DailyContainer>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const Title = styled.h2`
  color: snow;
`;

const DailyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
`;

const Weekday = styled.span`
  min-width: 85px;
  text-align: left;
  color: snow;
`;

const TemperatureContainer = styled.div``;

const HighestTemperature = styled.span`
  margin-right: 10px;
  color: snow;
`;

const LowestTemperature = styled.span`
  margin-left: 10px;
  color: gray;
`;

const WeatherIconContainer = styled.div`
  width: 55px;
  text-align: right;
  color: snow;
`;
