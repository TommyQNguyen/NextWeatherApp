import styled from "styled-components";

export const Forecast = (props) => {
  return (
    <Wrapper>
      <Title>Next week</Title>

      <DailyContainer>
        <Weekday>Monday</Weekday>
        <TemperatureContainer>
          <HighestTemperature>25°</HighestTemperature>/
          <LowestTemperature>15°</LowestTemperature>
        </TemperatureContainer>
        <WeatherIconContainer>Icon</WeatherIconContainer>
      </DailyContainer>

      <DailyContainer>
        <Weekday>Monday</Weekday>
        <TemperatureContainer>
          <HighestTemperature>25°</HighestTemperature>/
          <LowestTemperature>15°</LowestTemperature>
        </TemperatureContainer>
        <WeatherIconContainer>Icon</WeatherIconContainer>
      </DailyContainer>

      <DailyContainer>
        <Weekday>Monday</Weekday>
        <TemperatureContainer>
          <HighestTemperature>25°</HighestTemperature>/
          <LowestTemperature>15°</LowestTemperature>
        </TemperatureContainer>
        <WeatherIconContainer>Icon</WeatherIconContainer>
      </DailyContainer>

      <DailyContainer>
        <Weekday>Monday</Weekday>
        <TemperatureContainer>
          <HighestTemperature>25°</HighestTemperature>/
          <LowestTemperature>15°</LowestTemperature>
        </TemperatureContainer>
        <WeatherIconContainer>Icon</WeatherIconContainer>
      </DailyContainer>

      <DailyContainer>
        <Weekday>Monday</Weekday>
        <TemperatureContainer>
          <HighestTemperature>25°</HighestTemperature>/
          <LowestTemperature>15°</LowestTemperature>
        </TemperatureContainer>
        <WeatherIconContainer>Icon</WeatherIconContainer>
      </DailyContainer>

      <DailyContainer>
        <Weekday>Monday</Weekday>
        <TemperatureContainer>
          <HighestTemperature>25°</HighestTemperature>/
          <LowestTemperature>15°</LowestTemperature>
        </TemperatureContainer>
        <WeatherIconContainer>Icon</WeatherIconContainer>
      </DailyContainer>

      <DailyContainer>
        <Weekday>Monday</Weekday>
        <TemperatureContainer>
          <HighestTemperature>25°</HighestTemperature>/
          <LowestTemperature>15°</LowestTemperature>
        </TemperatureContainer>
        <WeatherIconContainer>Icon</WeatherIconContainer>
      </DailyContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: transparent; */
`;

const Title = styled.h2`
  margin-left: 35px;
  color: snow;
`;

const DailyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
`;

const Weekday = styled.span`
  color: snow;
`;

const TemperatureContainer = styled.div``;

const HighestTemperature = styled.span`
  margin-right: 10px;
  color: snow;
`;

const LowestTemperature = styled.span`
  margin-left: 10px;
  color: darkslategray;
`;

const WeatherIconContainer = styled.div`
  color: snow;
`;
