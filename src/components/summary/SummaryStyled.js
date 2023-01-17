import styled from "styled-components";

export const SummaryContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: space-between;
 height: 140%;
 border-left: 1px solid #FF8A00;
 padding-left: 2rem;

 @media screen and (min-width: 700px) and (max-width: 1300px) {
    border-left: none;
    padding-left: .5rem;
    flex-direction: row;
    border-top: 1px solid #FF8A00;
    padding-top: .5rem;
    height: auto;
 }

 @media (max-width: 700px) {
    border-left: none;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: .5rem;
 }
`

export const SummaryTitle = styled.p`
 font-size: 30px;
 font-weight: bolder;
 color: #FF8A00;
 margin: 0
`

export const SummaryDescription = styled.p`
 font-size: 14px;
 color: #606060;
 margin: 0;
`

export const SummaryHeaderWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`

export const SummaryTotalWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;
 width: 100%;
 padding-bottom: 1rem;

 @media (max-width: 1300px) {
    max-width: 300px;
    height: auto;
 }
`

export const DeliveryWrapper = styled.div`
 display: flex;
 flex-direction: column;
 margin-bottom: 1rem;
 padding-top: 1rem;
 border-top: 1px solid #000;
`