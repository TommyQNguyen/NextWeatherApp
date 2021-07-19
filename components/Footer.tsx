import Link from "next/link";
import styled from "styled-components";

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

export const Footer = () => {
  return (
    <Wrapper>
      <AnchorTag href="https://github.com/qtommyn" target="_blank">
        <Github />
      </AnchorTag>

      <AnchorTag href="https://tommynguyen.vercel.app/" target="_blank">
        <Portfolio />
      </AnchorTag>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  /* background-color: steelblue; */
  display: flex;
  justify-content: space-around;
`;

const Github = styled(AiFillGithub)`
  width: 30px;
  height: auto;
  cursor: pointer;

  &:hover {
    color: snow;
  }
`;

const Portfolio = styled(CgWebsite)`
  width: 30px;
  height: auto;
  cursor: pointer;

  &:hover {
    color: snow;
  }
`;

const AnchorTag = styled.a``;
