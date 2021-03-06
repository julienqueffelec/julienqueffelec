import React from 'react'
import styled from 'styled-components'

const NavHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;
  left: 0px;
  top: 0px;
  background: #7b42f6;
  color: #fff;
  line-height: 50px;
  @media (max-width: 720px) {
    height: 180px;
  }
`
const Desc = styled.div`
  font-size: 25px;
  animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  line-height: 35px;
  @media (max-width: 720px) {
    font-size: 20px;
    line-height: 25px;
  }
`

const NavHeaderContent = styled.div`
  padding: 0 50px;
`

const Name = styled.h1`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 45px;
  opacity: 0;
  margin-bottom: 20px;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media (max-width: 720px) {
    font-size: 50px;
    line-height: 20px;
  }
`

const Header = ({ img, name }) => {
  return (
    <NavHeader>
      <NavHeaderContent>
        <Name>Julien Queffelec</Name>
        <Desc>
          Développeur full-stack. Je m'intérese aux technos web récentes comme
          React, GraphQL et Gatsby.
        </Desc>
      </NavHeaderContent>
    </NavHeader>
  )
}

export default Header
