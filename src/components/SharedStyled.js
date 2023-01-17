import styled from "styled-components";

export const BackButton = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 gap: 1rem;
 margin-bottom: 1rem;
 cursor: pointer;
 margin-left: .5rem;
`

export const GridContainer = styled.div`
 display: grid;
 grid-template-areas: "form summary";
 grid-template-rows: 1fr;
 grid-template-columns: 1fr 30rem;
 grid-column-gap: 1rem;

 @media screen and (max-width: 1300px) {
    grid-template-areas: "form" "summary";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 18rem;
    grid-row-gap: 1rem
 }
`
// left section
export const FormSection = styled.div`
 grid-area: form;
 border-right: none;
 margin-left: .5rem;
 margin-right: .5rem;

 @media (max-width: 1200px) {
    border-right: none;
 }
`
export const HeadLeftSection = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 margin-bottom: 2rem;
 @media screen and (max-width: 790px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
 }
`
export const HeadLeftTitle = styled.p`
 font-size: 40px;
 font-weight: bolder;
 color: #FF8A00;
 margin: 0;

 @media screen and (max-width: 400px) {
    font-size: 24px;
 }

 @media screen and (min-width: 400px) and (max-width: 790px) {
    font-size: 30px;
 }

 @media screen and (min-width: 790px) and (max-width: 900px) {
    font-size: 30px;
 }

 @media screen and (min-width: 900px) and (max-width: 1300px) {
    font-size: 35px;
 }
`
export const TitleBorder = styled.div`
 width: 100%;
 min-width: 400px;
 height: 10px;
 background-color: #DDDDDD;
 margin-top: -20px;

 @media screen and (max-width: 400px) {
    min-width: 250px;
    margin-top: -12px;
    height: 7px;
 }

 @media screen and (min-width: 400px) and (max-width: 790px) {
    min-width: 300px;
    margin-top: -15px;
 }

 @media screen and (min-width: 790px) and (max-width: 900px) {
    min-width: 300px;
    margin-top: -18px;
 }

 @media screen and (min-width: 900px) and (max-width: 1300px) {
    min-width: 350px;
 }
`

export const FormContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-items: flex-start;
 justify-content: space-between;
 gap: 2rem;
 margin-right: 1rem;

 @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start
 }
`
// end left section

// right section
export const SummarySection = styled.div`
 grid-area: summary;
`
// end right section

export const FinishLeftSection = styled.div`
 grid-area: form;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100%;
 height: 400px;
`

export const ContentFinishWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 gap: 1rem;
`

export const PaymentLeftSection = styled.div`
 grid-area: form;
 display: flex;
 flex-direction: column;
 gap: 2rem;
`

export const PaymentContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 2rem;
`
export const ShipmentWrapper = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 gap: 1rem;
 padding-right: 1rem;

 @media (max-width: 700px) {
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   margin-bottom: 1rem;
 }
`

export const PaymentWrapper = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 gap: 1rem;
 padding-right: 1rem;

 @media (max-width: 700px) {
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
 }
`
