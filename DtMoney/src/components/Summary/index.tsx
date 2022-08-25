import { Container } from "./styles";
import IconEntrada from '../../assets/IconEntrada.svg';
import IconSaida from '../../assets/IconSaida.svg';
import IconTotal from '../../assets/IconTotal.png'


export function Summary() {
  return (
    <Container>
        <div>
            <header>
                Entradas
            <img src={IconEntrada} alt="Icon Entrada"/>
            </header>
            <strong>R$ 1.000.00</strong>
        </div>
        <div>
            <header>
                Saídas
            <img src={IconSaida} alt="Icon Saida"/>
            </header>
            <strong>- R$ 500.00</strong>
        </div>
        <div className="highlight-background">
            <header>
                Total
            <img src={IconTotal} alt="Icon Total"/>
            </header>
            <strong>R$ 500.00</strong>
        </div>
    </Container>
  );
}

export default Summary;