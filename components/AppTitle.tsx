import styled from "styled-components";

export const AppTitle = () => {
  return (
    <Wrapper>
      <TitleTopFragment>Weather 🌨️ </TitleTopFragment>
      <TitleBottomFragment> 🌪️ Reader</TitleBottomFragment>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: snow;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px #353636;
`;

const TitleTopFragment = styled.h1`
  padding-left: 4rem;
  margin: 0;
  text-align: left;
`;

const TitleBottomFragment = styled.h1`
  padding-right: 4rem;
  margin: 0;
  text-align: right;
`;
