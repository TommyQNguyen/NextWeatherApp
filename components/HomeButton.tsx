import Link from "next/link";
import styled from "styled-components";

export const HomeButton = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 20px 75px;
  margin: 20px;
  background-color: #002eff;
  color: snow;
  border: none;
  font: inherit;
  cursor: pointer;
  border-radius: 10px;
  text-transform: uppercase;
`;
