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
  
  &:focus{
      outline-width: 0;
    }

    &::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}



`

export const InputStyleService = styled.input`
  border: none;
  width: 90%;
  
  font-size: large;
  
  background: #FFF; 
  
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
 

  }
  
  }

  @media (max-width:500px){
    width: 30%;
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
display: flex;
align-items: center;
justify-content: center;

textarea{
  height: 26px;
  width: 570px;
  font-weight: 600;
  font-size: 15.5px;
}

  @media (max-width: 505px) {
    
    flex-direction: column;
    textarea{
      width: 25rem;
    }
  }
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