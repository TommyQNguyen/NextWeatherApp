import styled from "styled-components";
import {
  TiWeatherSunny,
  TiWeatherCloudy,
  TiWeatherDownpour,
} from "react-icons/ti";

import { WeatherForecast } from "../types";

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
  console.log(forecast);
  //   console.log(secondsToWeekday(1625886000));

  return (
    <Wrapper>
      <Title>Next week</Title>

      {forecast.map((day) => {
        return (
          <DailyContainer>
            <Weekday>{secondsToWeekday(Number(day.date))}</Weekday>
            <TemperatureContainer>
              <HighestTemperature>
                {Math.round(day.maxTemp)}°C
              </HighestTemperature>
              /
              <LowestTemperature>{Math.round(day.minTemp)}°C</LowestTemperature>
            </TemperatureContainer>
            <WeatherIconContainer>{day.main}</WeatherIconContainer>
          </DailyContainer>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: transparent; */
  width: 90%;
  margin: auto;
`;

const Title = styled.h2`
  margin-left: 35px;
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
