import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  padding: 0px 50px 50px 50px;
  bottom: 0;
  left: 0;
`

const Intro = styled.div`
  width: 100%;
  max-width: 285px;
  p {
    margin: 0;
  }

  .name {
    margin-bottom: 30px;
  }
`

const Footer = () => (
  <Wrapper>
    <Intro>
      <p className="name">Isak Fagerlund</p>
      <p>The Swedish developer that’s here
      to make your ideas come alive.</p>
    </Intro>
  </Wrapper>
)

export default Footer
