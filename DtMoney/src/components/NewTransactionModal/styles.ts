import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import { darken, transparentize } from 'polished';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: var(--background);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      border-radius: 6px;
      border: 0;
      background: var(--grey);
      color: var(--text-body);
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      padding: 1rem;
      &::placeholder {
        color: var(--text-body);
      }
    }
    button {
      height: 58px;
      border: 0;
      background-color: var(--green-light);
      color: var(--text-title);
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: filter 0.2;
        &:hover{
        filter: brightness(0.9)
        }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: var(--text-title);
;
`

export const TransactionType = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  isActive: Boolean;
  activeColor: 'green' | 'red',
}
const colors ={
  green:'#00875F',
  red:'#F75A68'
}
export const TransactionTypeButton = styled.div<TransactionTypeButtonProps>`

  background: ${({ isActive, activeColor }) => isActive
  ? transparentize(0.2, colors[activeColor])
  : 'var(--grey-light)'};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border:none;
  color: var(--text-title);
        &:hover{
          border-color: ${darken(0.1, '#d7d7d7')};
        }
  svg {
  }
`
