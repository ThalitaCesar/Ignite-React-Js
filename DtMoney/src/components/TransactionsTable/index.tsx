import { useEffect } from "react";
import { api } from "../../services/api";
import { SearchForm } from "../SearchForm";
import { Container } from "./styles";


export function TransactionsTable() {
  useEffect(()=>{
    api.get('transactions')
    .then(response=> console.log(response.data))
  },[])
  return (
    <Container>
      <SearchForm/>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">
              R$ 12.000,00
              </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="withdraw"> - R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsTable;