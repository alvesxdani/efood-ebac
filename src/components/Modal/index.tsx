import { MouseEventHandler } from 'react'
import { StyledModal } from './styles'

type Props = {
  onclick: MouseEventHandler<HTMLButtonElement>
  descricao: string
  foto: string
  nome: string
  porcao: string
  preco: number
}

const Modal = ({ onclick, descricao, foto, nome, porcao, preco }: Props) => {
  return (
    <StyledModal>
      <div className="modal">
        <div className="close">
          <button onClick={onclick}>X</button>
        </div>
        <div className="produto">
          <img src={foto} alt={nome} />
          <div className="info">
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <p>R$ {preco.toFixed(2)}</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </StyledModal>
  )
}

export default Modal
