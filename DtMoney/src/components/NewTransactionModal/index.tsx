import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'

export function NewTransactionModal() {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const { createTransaction } = useTransactions();
  
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ type, title, amount, category });

    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder='Descrição' required 
          value={title}
          onChange={({ target }) => setTitle(target.value)}/>
          <input type="number" placeholder='Preço' required 
          value={amount}
          onChange={({ target }) => setAmount(Number(target.value))}/>
          <input type="text" placeholder='Categoria' required 
          value={category}
          onChange={({ target }) => setCategory(target.value)}/>
           {/* parou no 1:14 do video */}

          <TransactionType>
            <TransactionTypeButton
            isActive={type ==='deposit'}
            onClick={()=>setType('deposit')}
            activeColor='green'>
              <ArrowCircleUp size={24} style={{color:"#00B37E"}}/>
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton 
             isActive={type ==='withdraw'}
             onClick={()=>setType('withdraw')}
             activeColor='red'>
              <ArrowCircleDown size={24} style={{color:"#F75A68"}}/>
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type='submit' onSubmit={handleCreateNewTransaction}>
            Cadastrar
          </button>
        </form>
      </Content>

    </Dialog.Portal>
  )
}