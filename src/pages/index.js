import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
// import image from '../images/Myself.jpg'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`

// const Myself = styled.div`
//   width: 190px;
//   height: 440px;
//   border-radius: 4px;
//   background-size: contain;
//   opacity: 0.8;
//   background: url(${image});
//   background-position: -80px;
// `

const IndexPage = () => (
  <Layout>
    <Wrapper>
      {/* <Myself /> */}
    </Wrapper>
  </Layout>
)

export default IndexPage
