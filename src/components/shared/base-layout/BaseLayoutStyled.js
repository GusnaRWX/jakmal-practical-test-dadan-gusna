import styled from "styled-components";

export const BaseContainer = styled.div`
 height: 100vh;
 background: #FFFAE6;
 padding: 4rem;
 margin: 0px;

 @media (max-width: 600px) {
    padding: 1rem;
 }
`

export const CardContainer = styled.main`
 height: 65%;
 background: #FFFFFF;
 padding: 2.5rem 2rem;
 border-radius: 6px;

 @media screen and (min-width: 360px) and (max-width: 700px) {
    overflow-y: auto;
    height: 90%;
    padding: 3rem 1rem;
 }

 @media screen and (min-width: 700px) and (max-width: 1300px) {
    height: 80%;
    overflow-y: auto;
 }
`

export const HeaderContainer = styled.div`
 position: absolute;
 top: 0;
 left: 50%;
 transform: translate(-50%, 0);
 background: #FFFAE6;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 width: 100%;
 z-index: 1;
 max-width: 500px;
 padding: 1.5rem 2rem;
 border-bottom-right-radius: 50px;
 border-bottom-left-radius: 50px;

 @media (max-width: 600px) {
    max-width: 300px;
    padding: .5rem;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
 }

 @media (max-width: 360px){
    max-width: 270px;
    padding: .4rem;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
 }
`

export const StepContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 gap: .5rem;
 color: #FFFBA00;
`

export const StepItem = styled.div.attrs(props => ({
    isLocation: props.isLocation
}))`
 padding: 1rem 1.4rem;
 background: ${props => props.isLocation ? '#FF8A00' : '#FFE4B8'};
 color: ${props => props.isLocation ? '#FFFFFF' : '#FF8A00'};
 border-radius: 50px;
 @media (max-width: 600px) {
    padding: .5rem .75rem;
    font-size: 12px;
 }

 @media (max-width: 360px){
    padding: .2rem .4rem;
    font-size: 10px;
 }
`

export const BreadCrumbTitle = styled.div`
 color: #FF8A00;
 @media (max-width: 600px) {
    font-size: 12px;
 }

 @media (max-width: 360px){
    font-size: 10px;
 }
`