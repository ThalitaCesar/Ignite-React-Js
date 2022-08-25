import React from 'react';
import logo from '../../assets/LogoTitle.svg'
import { NewTransactionModal } from '../NewTransactionModal';
import { Container, Content } from './styles';
import * as Dialog from '@radix-ui/react-dialog'


export function Header() {
  return (
    <Container>
        <Content>
        <img src={logo}/>

        <Dialog.Root>
          <Dialog.Trigger asChild>
          <button>
            <strong>
                Nova transação
            </strong>
            </button>
          </Dialog.Trigger>

          <NewTransactionModal/>
        </Dialog.Root>
        
        </Content>
    </Container>
     
  );
}

export default Header;