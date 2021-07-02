import styled from "styled-components";

import { CurrentWeather } from "../components/CurrentWeather";

export const MobileScreen = () => {
  return (
    <Wrapper>
      <CurrentWeather />
      <div>Mobile Screen</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: plum;
  width: 375px;
  height: 667px;
`;
