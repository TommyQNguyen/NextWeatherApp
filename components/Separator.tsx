import styled from "styled-components";

export const Separator = ({ text }) => {
  return (
    <Wrapper>
      <SeparatorLine>
        <SeparatorText>{text}</SeparatorText>
      </SeparatorLine>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px;
`;

const SeparatorLine = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 20px 0 20px;
`;

const SeparatorText = styled.span`
  background: #e2f6f6;
  padding: 0 10px;
  text-transform: uppercase;
`;
