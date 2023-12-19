import { styled } from "styled-components";

export const BudgetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const FormBudget = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #fff;

 
  input{
    font-size: small;
    border: none;
  

    background: #fff;
    
    &:focus{
      outline-width: 0;
    }

    &::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  }
  table{
    
  }
  td{
    height: 40px;
 margin: 0 auto;
    border: 1px solid #000;
    label{
    text-align: center;
    input{
    width: 72%;
    
  }
   
  }
  }


 
`
export const InputName = styled.td`
  width:337.5px;
  input{
    width: 79%;
    
  }

  @media(max-width: 500px){
  width: 33%;
  input{
    width: 80%;
    
  }
  label{
    display: none;
  }
 }
  
`

export const InputCell = styled.td`

 @media(max-width: 500px){
  width: 33%;

  input{
    width: 80%;
  }

  label{
    display: none;
  }
 }

`
export const Address = styled.td`

width: 440px;
`

export const Mask = styled.td`
width: 245px;
`

export const NumberId = styled.td`
border: 1px solid #000;
 width: 20px;
 height: 10px;
 text-align: center;
  label{
    text-align: center;
  }
  input{
    width: 75%;
    
  }
  
`

export const TdTime = styled.td`
  width: 175px;
  text-align: center;
`
export const TdInformation = styled.td`
  width: 380px;
 
  input{
    
  }
`
export const TdValor = styled.td`
  width: 123px;
  text-align: center;
`