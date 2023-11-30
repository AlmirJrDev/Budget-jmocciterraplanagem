import { BudgetContainer, FormBudget, InputName } from "./style";
import  { useState } from 'react';
import InputMask from 'react-input-mask';


export function BudgetSheet() {
  const [documentType, setDocumentType] = useState<string>('CPF');
  

  return(
    <BudgetContainer> <h1>Ficha de orçamento</h1>
      <FormBudget>
        <form>
        <table>
<tbody>
<tr>
<InputName><label >Client: <input type="text" /></label></InputName>
<td><label>Tel: <InputMask mask="(99) 99999-9999"  maskChar=""
                      type="text" /></label> </td>
<td><label>Data: <input type="date"/></label> </td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr>
<td><label >Endereço: <input type="text" /></label></td>
<td><label>  <select
                      value={documentType}
                      onChange={(e) => setDocumentType(e.target.value)}
                    >
                      <option value="CPF">CPF</option>
                      <option value="CNPJ">CNPJ</option>
                    </select>
                    <InputMask
                      mask={documentType === 'CPF' ? '999.999.999-99' : '99.999.999/9999-99'}
                      maskChar=""
                      type="text"
                      placeholder={documentType === 'CPF' ? 'CPF' : 'CNPJ'}
                   
                    /></label> </td>
</tr>
</tbody>
</table>
<table>
<tbody>
  <tr>
<td><label>Serviços: <input type="text" /></label></td>
<td><label>Horas: <input type="number" /></label> </td>
<td><label>Valor: <input type="text" /></label> </td>
</tr>
</tbody>
</table>


           
        </form>
      </FormBudget>
      
    </BudgetContainer>
  )
}