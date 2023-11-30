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
background: #d9d9d7;

 width: 50vw;
  input{
    
    border: none;
    width: 120px;

    background: #d9d9d7;
    
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
    width: 50vw;
  }
  td{
    height: 25px;
    border: 1px solid #000;
    label{
    text-align: center;
  }
  }


 
`
export const InputName = styled.td`
  width:300px;
  input{
    width: 75%;
    
  }
  
`