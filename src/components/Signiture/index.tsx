import { SignitureContainer, SignitureSpaceBetween } from "./style";

export function Signiture(){
  return(
    <SignitureContainer>
      <SignitureSpaceBetween> <div>______________________________________<br />
                <h5>(Assinatura do Cliente)</h5>
        </div> <div>Dia ____ de _______________ de 20________</div> </SignitureSpaceBetween> 
    </SignitureContainer>
  )
}