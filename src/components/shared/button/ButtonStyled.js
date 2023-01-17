import { css } from 'styled-components'
import styled from 'styled-components'

const basicStyles = css`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 outline: 0;
 box-sizing: border-box;
 position: relative;
 height: auto;
 width: 100%;
 cursor: pointer;
 padding: 1rem;
 text-decoration: none;
 border: 0px;
 border-radius: 6px;
`

export const ButtonStyled = styled.button`
 ${basicStyles}

 &>span {
    width: 100%;
 }

 &.primary {
    background-color: #FF8A00;
    color: #FFF;
 }

 &.disabled {
    background: #DFDFDF;
    cursor: not-allowed;
 }
`

export const ButtonItemStyled = styled.div`
 padding: .5rem;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 width: 20%;
 cursor: pointer;

 @media (max-width: 700px) {
   width: 100%;
 }

 &.checked {
    border: 1px solid #1BD97B;
    background-color: #E8FBF2;
    border-radius: 6px;
 }

 &.unchecked {
    border: 1px solid #CCCCCC;
    border-radius: 6px;
 }
`

export const LabelWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: .5rem;
`