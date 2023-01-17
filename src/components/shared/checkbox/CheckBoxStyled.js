import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 gap: .5rem;
 margin-right: 4rem;

 > input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor pointer;
 }

 > label {
    position: relative;
    cursor: pointer;
 }

 > label:before {
    content: '';
    -webkit-appreance:none;
    background-color: transparent;
    border: 2px solid #1BD97B;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 6px;
 }

 >input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid #1BD97B;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
 }
`