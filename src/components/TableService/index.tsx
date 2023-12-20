import { NumberId } from "../Budget/style";
import React, { useState } from 'react';
import { ContainerDivTotal, ContainerTable, DivTotal, InputService, InputStyle, InputStyleService, TdHours, TdService, TdTotal } from "./style";

export function TableService() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const [inputValue2, setInputValue2] = useState<string>('');

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const [inputValue3, setInputValue3] = useState<string>('');

  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue3(event.target.value);
  };
  
  const [inputValue4, setInputValue4] = useState<string>('');

  const handleInputChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue4(event.target.value);
  };


  const [valorInput1, setValorInput1] = useState<number>(0);
  const [valorInput2, setValorInput2] = useState<number>(0);
  const [valorInput3, setValorInput3] = useState<number>(0);
  const [valorInput4, setValorInput4] = useState<number>(0);
  const [valorInput5, setValorInput5] = useState<number>(0);
  const [valorInput6, setValorInput6] = useState<number>(0);
  const [valorInput7, setValorInput7] = useState<number>(0);
  const [valorInput8, setValorInput8] = useState<number>(0);
  const [valorInput9, setValorInput9] = useState<number>(0);
  const [valorInput10, setValorInput10] = useState<number>(0);
  const [valorInput11, setValorInput11] = useState<number>(0);
  const [valorInput12, setValorInput12] = useState<number>(0);
  const [valorInput13, setValorInput13] = useState<number>(0);


  const handleInputValorChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput1(Number(event.target.value));
  };

  const handleInputValorChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput2(Number(event.target.value));
  };

  
  const handleInputValorChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput3(Number(event.target.value));
  };

  
  const handleInputValorChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput4(Number(event.target.value));
  };

  
  const handleInputValorChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput5(Number(event.target.value));
  };

  const handleInputValorChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput6(Number(event.target.value));
  };

  
  const handleInputValorChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput7(Number(event.target.value));
  };

  
  const handleInputValorChange8 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput8(Number(event.target.value));
  };

  const handleInputValorChange9 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput9(Number(event.target.value));
  };

  const handleInputValorChange10 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput10(Number(event.target.value));
  };

  
  const handleInputValorChange11 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput11(Number(event.target.value));
  };

  
  const handleInputValorChange12 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput12(Number(event.target.value));
  };

  const handleInputValorChange13 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput13(Number(event.target.value));
  };



  
    const soma = valorInput1 + valorInput2 + valorInput3 + valorInput4 + valorInput5 + valorInput6 + valorInput7 + valorInput8 + valorInput9 + valorInput10 + valorInput11 + valorInput12 + valorInput13;
   
  return(
    <ContainerTable>
      <table>
<tbody>
  <tr>
<NumberId><label>1</label></NumberId>
<TdService><label><InputStyleService  type="text" list="Service"  /> 
<datalist id="Service">
  <option value="Escavadeira">Escavadeira</option>
  <option value="Pá Carregadeira "></option>
  <option value="Retroescavadeira "></option>
  <option value="Mini Escavadeira"></option>
  <option value="Mini Carregadeira"></option>
  <option value="Perfuração"></option>
  <option value="Carga de Terra "></option>
  <option value="Carga de Entulho "></option>
  <option value="Deslocamento "></option>
  </datalist>
   <div> <input type="checkbox"/></div> </label> </TdService>
<TdHours><label> <InputStyle type="text" list="list" /> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$<InputStyle type="number" value={valorInput1} onChange={handleInputValorChange1}/></label> </TdTotal>
</tr>
<tr>
<NumberId><label>2</label></NumberId>
<TdService><label><InputStyleService  type="text" list="Service" /> 
<datalist id="Service">
  <option value="Escavadeira"></option>
  <option value="Pá Carregadeira "></option>
  <option value="Retroescavadeira "></option>
  <option value="Mini Escavadeira"></option>
  <option value="Mini Carregadeira"></option>
  <option value="Perfuração"></option>
  <option value="Carga de Terra "></option>
  <option value="Carga de Entulho "></option>
  <option value="Deslocamento "></option>
  </datalist>
   <div> <input type="checkbox"/></div> </label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$<InputStyle type="number" value={valorInput2} onChange={handleInputValorChange2} /></label> </TdTotal>
</tr>
<tr>
<NumberId><label>3</label></NumberId>
<TdService><label><InputStyleService  type="text" list="Service"/> 
<datalist id="Service">
  <option value="Escavadeira">Escavadeira</option>
  <option value="Pá Carregadeira "></option>
  <option value="Retroescavadeira "></option>
  <option value="Mini Escavadeira"></option>
  <option value="Mini Carregadeira"></option>
  <option value="Perfuração"></option>
  <option value="Carga de Terra "></option>
  <option value="Carga de Entulho "></option>
  <option value="Deslocamento "></option>
  </datalist>
   <div> <input type="checkbox"/></div> </label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput3} onChange={handleInputValorChange3}/></label> </TdTotal>
</tr>
<tr>
<NumberId><label>4</label></NumberId>
<TdService><label><InputStyleService  type="text" list="Service"/> 
<datalist id="Service">
  <option value="Escavadeira">Escavadeira</option>
  <option value="Pá Carregadeira "></option>
  <option value="Retroescavadeira "></option>
  <option value="Mini Escavadeira"></option>
  <option value="Mini Carregadeira"></option>
  <option value="Perfuração"></option>
  <option value="Carga de Terra "></option>
  <option value="Carga de Entulho "></option>
  <option value="Deslocamento "></option>
  </datalist>
   <div> <input type="checkbox"/></div> </label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput4} onChange={handleInputValorChange4} /></label> </TdTotal>
</tr>
<tr>
<NumberId><label>5</label></NumberId>
<TdService><label><InputStyleService  type="text" list="Service"/> 
<datalist id="Service">
  <option value="Escavadeira">Escavadeira</option>
  <option value="Pá Carregadeira "></option>
  <option value="Retroescavadeira "></option>
  <option value="Mini Escavadeira"></option>
  <option value="Mini Carregadeira"></option>
  <option value="Perfuração"></option>
  <option value="Carga de Terra "></option>
  <option value="Carga de Entulho "></option>
  <option value="Deslocamento "></option>
  </datalist>
   <div> <input type="checkbox"/></div> </label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput5} onChange={handleInputValorChange5} /></label> </TdTotal>
</tr>
<tr>
<NumberId><label>6</label></NumberId>
<TdService><label><InputStyleService  type="text" list="Service"/> 
<datalist id="Service">
  <option value="Escavadeira">Escavadeira</option>
  <option value="Pá Carregadeira "></option>
  <option value="Retroescavadeira "></option>
  <option value="Mini Escavadeira"></option>
  <option value="Mini Carregadeira"></option>
  <option value="Perfuração"></option>
  <option value="Carga de Terra "></option>
  <option value="Carga de Entulho "></option>
  <option value="Deslocamento "></option>
  </datalist>
   <div> <input type="checkbox"/></div> </label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput6} onChange={handleInputValorChange6} /></label> </TdTotal>
</tr>
<tr>
<NumberId><label>7</label></NumberId>
<TdService><label><InputStyleService  type="text" list="Service"/> 
<datalist id="Service">
  <option value="Escavadeira">Escavadeira</option>
  <option value="Pá Carregadeira "></option>
  <option value="Retroescavadeira "></option>
  <option value="Mini Escavadeira"></option>
  <option value="Mini Carregadeira"></option>
  <option value="Perfuração"></option>
  <option value="Carga de Terra "></option>
  <option value="Carga de Entulho "></option>
  <option value="Deslocamento "></option>
  </datalist>
   <div> <input type="checkbox"/></div> </label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput7} onChange={handleInputValorChange7}/></label> </TdTotal>
</tr>
<tr>
<NumberId><label>8</label></NumberId>
<TdService><label><InputStyleService  type="text" list="Service"/> 
<datalist id="Service">
  <option value="Escavadeira">Escavadeira</option>
  <option value="Pá Carregadeira "></option>
  <option value="Retroescavadeira "></option>
  <option value="Mini Escavadeira"></option>
  <option value="Mini Carregadeira"></option>
  <option value="Perfuração"></option>
  <option value="Carga de Terra "></option>
  <option value="Carga de Entulho "></option>
  <option value="Deslocamento "></option>
  </datalist>
   <div> <input type="checkbox"/></div> </label> </TdService>
<TdHours><label>  <InputStyle type="text" /></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput8} onChange={handleInputValorChange8}/></label> </TdTotal>
</tr>
<tr>
<NumberId><label>9</label></NumberId>
<TdService><label><InputStyleService  type="text" list="Service"/> 
<datalist id="Service">
  <option value="Escavadeira">Escavadeira</option>
  <option value="Pá Carregadeira "></option>
  <option value="Retroescavadeira "></option>
  <option value="Mini Escavadeira"></option>
  <option value="Mini Carregadeira"></option>
  <option value="Perfuração"></option>
  <option value="Carga de Terra "></option>
  <option value="Carga de Entulho "></option>
  <option value="Deslocamento "></option>
  </datalist>
   <div> <input type="checkbox"/></div> </label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput9} onChange={handleInputValorChange9}/></label> </TdTotal>
</tr>
<tr>
<NumberId><label>10</label></NumberId>
<TdService><label>   <InputService type="text" value={inputValue} onChange={handleInputChange} />{inputValue && (
        
        <input type="checkbox" />
      
    )}</label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput10} onChange={handleInputValorChange10}/></label> </TdTotal>
</tr>
<tr>
<NumberId><label>11</label></NumberId>
<TdService><label>  <InputService type="text" value={inputValue2} onChange={handleInputChange2} />{inputValue2 && (
        
        <input type="checkbox" />
      
    )}</label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput11} onChange={handleInputValorChange11}/></label> </TdTotal>
</tr>
<tr>
<NumberId><label>12</label></NumberId>
<TdService><label>  <InputService type="text" value={ inputValue3} onChange={handleInputChange3} />{inputValue3 && (
        
        <input type="checkbox" />
      
    )}</label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput12} onChange={handleInputValorChange12} /></label> </TdTotal>
</tr>
<tr>
<NumberId><label>13</label></NumberId>
<TdService><label>   <InputService type="text" value={inputValue4} onChange={handleInputChange4} />{inputValue4 && (
        
        <input type="checkbox" />
      
    )}  </label> </TdService>
<TdHours><label> <InputStyle type="text" list="list"/> <datalist id="list">
  <option value="Diria">Diria</option>
  </datalist></label> </TdHours>
<TdTotal><label>R$ <InputStyle type="number" value={valorInput13} onChange={handleInputValorChange13} /></label> </TdTotal>
</tr>



</tbody>
</table>
<ContainerDivTotal>
  <textarea>OBS:</textarea>
<DivTotal><label htmlFor=""> {soma !== null && (
        <div>
          <strong>R$ </strong> {soma}
        </div>
      )}</label></DivTotal>
</ContainerDivTotal>
    </ ContainerTable>
  )
}