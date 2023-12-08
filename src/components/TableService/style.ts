import { styled } from "styled-components";

export const ContainerTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4rem;
`
export const InputStyle = styled.input`
  border: none;
  width: 90%;
  
  font-size: large;
  text-align: center;
  background: #FFF; 
  selec
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
  background: #fff;
  width: 175px;

  label{
    display: flex ;
  align-items: center;
  justify-content: center;
  }
`

export const TdService = styled.td`
    border: 1px solid;
    width: 351px;
    background: #fff;
    label{
    display: flex ;
  align-items: center;
  justify-content: space-between;

  input{
    display: flex ;
  align-items: center;
  justify-content: space-between;

  }
  
  }
`

export const InputService = styled.input`
 border: none;
  font-weight: 600;
  font-size: 15.5px;

  background: #fff;
  &:focus{
      outline-width: 0;
    }

    &::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

`
export const TdTotal = styled.td`
    border: 1px solid;
    width: 123px;
    height: 30px;
    background: #fff;
    label{
    display: flex ;
  align-items: center;
  justify-content: center;
  }
`
export const ContainerDivTotal = styled.div`
  margin-left: 35.2rem;
`
export const DivTotal = styled.div`
display: flex;
align-items: center;
justify-content: center;

   border: 1px solid;
    width: 123px;
    height: 30px;
    background: #fff;

`