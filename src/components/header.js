import React from 'react'
import styled from 'styled-components'

const Logo = styled.h3`
  font-family: "Fira Code";
  font-weight: 400;
  font-size: 42px;
`

const Header = () => (
  <div>
    <Logo>{"<if>"}</Logo>
  </div>
)

export default Header
