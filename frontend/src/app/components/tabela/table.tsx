import { Header } from "./header";
import { Row } from "./row";

export function Table() {
  return (
    <table className="table-auto w-full mx-auto border border-gray-300">
      <thead>
        <tr className="bg-gray-400">
          <Header titulo="Nome" />
          <Header titulo="Tipo" />
          <Header titulo="Entrada" />
          <Header titulo="Saida" />
          <Header titulo="Quantidade" />
          <Header titulo="Status" />
          <Header titulo="Ações" />
        </tr>
      </thead>
      <tbody>
        <Row 
          nome="Empilhadeira"
          tipo="Máquinas"
          dtEntrada="26/07/21"
          dtSaida="02/12/23"
          qtd="20"
          status="Inativo"
        />
        <Row 
          nome="Motor de Corrente Alternada (CA)"
          tipo="Peças"
          dtEntrada="04/01/24"
          dtSaida="22/06/24"
          qtd="5"
          status="Ativo"
        />
        <Row 
          nome="Chave de Rodas"
          tipo="Materiais"
          dtEntrada="31/05/23"
          dtSaida="19/11/23"
          qtd="4"
          status="Inativos"
        />
        <Row 
          nome="Garra Robótica de Três Dedos"
          tipo="Peças"
          dtEntrada="17/11/22"
          dtSaida="11/03/23"
          qtd="34"
          status="Ativo"
        />
        <Row 
          nome="Encaixotadora Automática"
          tipo="Máquinas"
          dtEntrada="31/05/23"
          dtSaida="19/11/23"
          qtd="4"
          status="Inativos"
        />
        <Row 
          nome="Chave Inglesa"
          tipo="Materiais"
          dtEntrada="13/09/21"
          dtSaida="09/10/21"
          qtd="12"
          status="Ativos"
        />
      </tbody>
    </table>
  );
}
