import { HeaderDiv, ButtonHeader, ContainerHeader} from "./style";

export function Header() {
  return(
    <HeaderDiv>
      <ContainerHeader>
      <div><ButtonHeader>NOVO</ButtonHeader></div>
      <div><ButtonHeader>IMPRIMIR</ButtonHeader><ButtonHeader>BAIXAR</ButtonHeader></div>
      </ContainerHeader>
    </HeaderDiv>
  )
}