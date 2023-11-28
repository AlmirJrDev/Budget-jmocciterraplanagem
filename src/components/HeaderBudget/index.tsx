import Logo from "../../assets/logo.svg"
import { Container, ContainerBudGet, DivImage, HeaderContent, Information } from "./style"

export function Budget() {
  return (
    <ContainerBudGet>

      <DivImage>
        <img src={Logo} alt="" />
      </DivImage>
      <HeaderContent>
        <Information>
         <h2>João Nicolau Mocci <br />
            (44) 99990-5756</h2> 
          <h2>João Lucas Mocci  <br />
            (44) 99840-3340</h2>
        </Information>
        <Container>
          <p>R. Itatiba, 110 - Jardim Sumaré, Paranavaí - PR, 87706-620<br />
          email: jmocciterraplanagem@gmail.com</p>
        </Container>
      </HeaderContent>

    </ContainerBudGet>
  )
}