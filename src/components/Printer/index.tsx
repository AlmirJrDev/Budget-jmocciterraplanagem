import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { ButtonHeader, ContainerHeader, HeaderDiv } from '../Header/style';
import { Budget } from '../HeaderBudget';
import { BudgetSheet } from '../Budget';
import { TableService } from '../TableService';
import { Signiture } from '../Signiture';

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
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div>
      <HeaderDiv>
          <ContainerHeader>
          <div><ButtonHeader onClick={handleReload}>NOVO</ButtonHeader></div>
          <ReactToPrint
      
      trigger={() =>   <div><ButtonHeader>IMPRIMIR/Baixar</ButtonHeader></div>}
      content={() => componenteRef.current}
    />
          </ContainerHeader>
        </HeaderDiv>
    

      {/* Componente que será impresso */}
      <ComponenteParaImprimir
        ref={componenteRef}
        content={<div><Budget />
        <BudgetSheet /> 
        <TableService/>
        <Signiture /></div>}
      />
    </div>
  );
};

export default ExemploReactToPrint;
