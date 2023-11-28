import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
margin-bottom: 2rem;
  padding: 10px 0;
  background-color: #fff;

`

export const ContainerHeader = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  border-bottom: 1px solid #000;
  width: 75%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

export const ButtonHeader = styled.button`
  appearance: button;
 background-color: #1899D6;
 border: solid transparent;
 border-radius: 16px;
 border-width: 0 0 4px;
 box-sizing: border-box;
 color: #FFFFFF;
 cursor: pointer;
 display: inline-block;
 font-size: 15px;
 font-weight: 700;
 letter-spacing: .8px;
 line-height: 20px;
 margin: 0;
 outline: none;
 overflow: visible;
 padding: 13px 19px;
 text-align: center;
 text-transform: uppercase;
 touch-action: manipulation;
 transform: translateZ(0);
 transition: filter .2s;
 user-select: none;
 -webkit-user-select: none;
 vertical-align: middle;
 white-space: nowrap;

 &:after {
 background-clip: padding-box;
 background-color: #1CB0F6;
 border: solid transparent;
 border-radius: 16px;
 border-width: 0 0 4px;
 bottom: -4px;
 content: "";
 left: 0;
 position: absolute;
 right: 0;
 top: 0;
 z-index: -1;
}

&:main, &:focus {
 user-select: auto;
}

&:hover:not(:disabled) {
 filter: brightness(1.1);
}

&:disabled {
 cursor: auto;
}

&:active:after {
 border-width: 0 0 0px;
}

&:active {
 padding-bottom: 10px;
}


`