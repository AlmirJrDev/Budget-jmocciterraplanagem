import { styled } from "styled-components";

export const InputStyle = styled.input`
  border: none;
  width: 90%;
  font-size: large;
  text-align: center;
  background: #c7c7c7;
  &:focus{
      outline-width: 0;
    }

    &::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}



`

export const TdHours = styled.td`

  border: 1px solid;
  background: #c7c7c7;
  width: 175px;

  label{
    display: flex ;
  align-items: center;
  justify-content: center;
  }
`

export const TdService = styled.td`
    border: 1px solid;
    width: 334px;
    background: #c7c7c7;
    label{
    display: flex ;
  align-items: center;
  justify-content: center;
  }
`
export const TdTotal = styled.td`
    border: 1px solid;
    width: 123px;
    height: 30px;
    background: #c7c7c7;
    label{
    display: flex ;
  align-items: center;
  justify-content: center;
  }
`