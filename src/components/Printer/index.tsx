import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { ButtonHeader, ContainerHeader, HeaderDiv } from '../Header/style';
import { Budget } from '../HeaderBudget';
import { BudgetSheet } from '../Budget';
import { TableService } from '../TableService';

type ComponenteParaImprimirProps = {
  content: React.ReactNode; // Conteúdo que será impresso
};

class ComponenteParaImprimir extends React.Component<ComponenteParaImprimirProps> {
  render() {
    return (
      <div>
        {/* Conteúdo que você deseja imprimir */}
        {this.props.content}
      </div>
    );
  }
}

const ExemploReactToPrint: React.FC = () => {
  const componenteRef = useRef<ComponenteParaImprimir>(null);

  return (
    <div>
      <HeaderDiv>
          <ContainerHeader>
          <div><ButtonHeader>NOVO</ButtonHeader></div>
          <ReactToPrint
      
      trigger={() =>   <div><ButtonHeader>IMPRIMIR</ButtonHeader><ButtonHeader>BAIXAR</ButtonHeader></div>}
      content={() => componenteRef.current}
    />
          </ContainerHeader>
        </HeaderDiv>
    

      {/* Componente que será impresso */}
      <ComponenteParaImprimir
        ref={componenteRef}
        content={<div><Budget />
        <BudgetSheet /> 
        <TableService/></div>}
      />
    </div>
  );
};

export default ExemploReactToPrint;
