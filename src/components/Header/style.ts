import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 10px 0;
  background-color: #fff;

`

export const ContainerHeader = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 4rem;
  padding-top: 2rem;
  
  
  border-bottom: 1px solid #9b9b9b;
  width: 75%;
  
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

 &:last-child{
  margin-left: 1rem;
 }

 &:after {
 background-clip: padding-box;
 background-color: #1CB0F6;
 border: solid transparent;
 border-radius: 16px;
 border-width: 0 0 4px;
 bottom: -4px;
 content: "";
 

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