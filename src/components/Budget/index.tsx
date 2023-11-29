import { BudgetContainer, FormBudget, InputName } from "./style";

export function BudgetSheet() {
  const InputCPF = document.getElementById("#CPF")

  InputCPF?.addEventListener('keypress', () => {
    const inputlength = InputCPF.value.length

    console.log(inputlength)
  })
  return(
    <BudgetContainer> <h1>Ficha de orçamento</h1>
      <FormBudget>
        <form>
        <table>
<tbody>
<tr>
<InputName><label >Client: <input type="text" /></label></InputName>
<td><label>Tel: <input type="number" /></label> </td>
<td><label>Data: <input type="date" /></label> </td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr>
<td><label >Endereço: <input type="text" /></label></td>
<td><label>CPF: <input id="#CPF" type="text" maxLength={14}/></label> </td>
</tr>
</tbody>
</table>
<table>
<tbody>
  <tr>
<td><label>Serviços: <input type="text" /></label></td>
<td><label>Horas: <input type="text" /></label> </td>
<td><label>Valor: <input type="text" /></label> </td>
</tr>
</tbody>
</table>


           
        </form>
      </FormBudget>
      
    </BudgetContainer>
  )
}