import react from 'react'
import {
  DeliveryContainer,
  PaymentContainer,
  FinishContainer
} from './containers'
import { Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
 html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  font-family: montserrat
 }

 #root {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
 }

 .text-center {
  text-align: center;
 }

 .fs-bold-20 {
  font-size: 20px;
  font-weight: bolder;
  &.primary {
    color: #FF8A00;
  }
 }

 .mt-1/2 {
  margin-top: .5rem;
 }

 .ma-0 {
  margin: 0;
 }

 .fs-12 {
  font-size: 12px;

  &.black {
    color: #000;
  }
 }

 .fs-14 {
  font-size: 14px;

  &.black {
    color: #000;
  }
  &.green {
    color: #1BD97B;
  }
  &.bold {
    font-weight: bolder;
  }
  &.gray {
    color: #606060;
  }
  &.primary {
    color: #FF8A00;
  }
 }

 .pt-2 {
  padding-top: 2rem;
}
`

function App () {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path='/'
          element={
            <DeliveryContainer />
          }
        />
        <Route
          path='/payment'
          element={
            <PaymentContainer />
          }
        />
        <Route
          path='/finish'
          element={
            <FinishContainer />
          }
        />
      </Routes>
    </>
  )
}

export default App
