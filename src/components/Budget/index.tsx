import { Address, BudgetContainer, FormBudget, InputName, Mask, TdInformation, TdTime, TdValor, } from "./style";
import  {  useState } from 'react';
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
<InputName><label >Cliente: <input type="text" maxLength={29}/></label></InputName>
<td><label>Tel: <InputMask mask="(99) 99999-9999"  maskChar=""
                      type="text" /></label> </td>
<td><label>Data: <input type="date" /></label> </td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr>
<Address><label >Endereço: <input type="text" maxLength={53}/></label></Address>
<Mask><label>  <select
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
                   
                    /></label> </Mask>
</tr>
</tbody>
</table>
<table>
<tbody>
  <tr>
<TdInformation><label>Projeto: <input type="text" maxLength={35}/></label></TdInformation>
<TdTime><label>Horas</label> </TdTime>
<TdValor>Valor</TdValor>
</tr>
</tbody>
</table>





           
        </form>
      </FormBudget>
      
    </BudgetContainer>
  )
}