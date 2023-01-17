import styled from "styled-components"

export const TextAreaWrapper = styled.div`
 overflow: hidden;
 position: relative;
 display: inline-block;
 border-radius: 6px;
 font-size: 18px;
 font-family: 'montserrat';
 padding-top: 3px;
 width: 100%;
 min-width: 500px;
 border: 1px solid #CCCCCC;

 @media (max-width: 360px) {
    min-width: 280px;
 }

 @media screen and (min-width: 361px) and (max-width: 550px) {
    min-width: 300px;
 }

 @media screen and (min-width: 550px) and (max-width: 700px) {
    min-width: 300px;
 }

 @media screen and (min-width: 1000px) and (max-width: 1300px) {
    min-width: 400px;
 }
 &:focus-within {
    border-color: #CCCCCC;
 }

 &.error {
    border: 1px solid #FF8A00 !important;

    &:focus {
        border-color: #FF8A00;
    }
 }

 &.valid {
    border: 1px solid #1BD97B !important;

    &:focus {
        border-color: #1BD97B !important;
    }
 }

 > textarea {
    display: block;
    box-sizing: border-box;
    margin: 0;
    border: none;
    padding: 0px 12px 0px 12px;
    width: 100%;
    height: inherit;
    color: #000;
    margin-top 20px;
    margin-bottom: 25px;
    height: 100px;
    background-color: transparent;
    box-shadow: none;
    font-size: inherit;
    font-family: inherit;
 }

 > textarea + span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    box-sizing: border-box;
    padding: 4px 12px 0;
    font-size: 75%;
    line-height: 18px;
    pointer-events: none;
    transition: font-size 0.2s, line-height 0.2s;

    &.error {
      color: #FF8A00;
    }
 }
 > textarea + span::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    margin-bottom: 3px;
    background-color: transparent;
    transform-origin: bottom center;
    transform: scaleX(0);
    transition: transform 0.3s;
 }

 > textarea:not(:focus):placeholder-shown + span {
    font-size: inherit;
    line-height: 48px;
    margin
 }
 > textarea:focus {
    outline: none;
 }

 textarea:focus + span::before {
    opacity: 0.12;
    padding: 7px 7[x];
 }

 textarea:focus + span::after {
    transform: scale(1);
 }
 `