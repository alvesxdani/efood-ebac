import { MouseEventHandler } from 'react'
import {
  addItemToCart,
  setIsOpenCart,
} from '../../store/carrinho/carrinho.store'
import { useAppDispatch } from '../../store/hooks'
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
  const dispatch = useAppDispatch()

  function handleAddProductOnCart() {
    dispatch(
      addItemToCart({
        name: nome,
        price: preco,
        quantity: 1,
        image: foto,
      }),
      dispatch(setIsOpenCart(true)),
    )
  }

  return (
    <StyledModal>
      <div className="modal">
        <div className="close">
          <button onClick={onclick}>X</button>
        </div>
        <div className="produto">
          <div className="image">
            <img src={foto} alt={nome} />
          </div>
          <div className="info">
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <button onClick={handleAddProductOnCart}>
              Adicionar ao carrinho - R$ {preco.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </StyledModal>
  )
}

export default Modal
