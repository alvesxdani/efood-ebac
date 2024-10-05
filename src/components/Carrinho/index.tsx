import { useEffect, useRef, useState } from 'react'
import wasteBasketIcon from '../../assets/wastebasket.png'
import {
  removeItemFromCart,
  setIsOpenCart,
} from '../../store/carrinho/carrinho.store'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Button from '../Button'
import { StyledContainerCarrinho } from './styles'

const Carrinho = () => {
  const { items, totalAmount } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(true)

  function handleRemoveItem(name: string) {
    dispatch(removeItemFromCart(name))
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false)
        dispatch(setIsOpenCart(false))
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [dispatch])

  useEffect(() => {
    document.addEventListener('keydown', () => dispatch(setIsOpenCart(false)))
  }, [dispatch])

  if (!isModalOpen) return null

  return (
    <StyledContainerCarrinho>
      <div className="modal" ref={modalRef}>
        <div className="container-order">
          {items?.map((produto, index) => (
            <div className="order" key={index}>
              <img
                src={produto.image}
                alt={produto.name}
                className="image-product"
              />
              <div className="info-product">
                <h3>{produto.name}</h3>
                R$ {produto.price.toFixed(2)} x{produto.quantity}
                <div
                  className="wastebasket"
                  onClick={() => handleRemoveItem(produto.name)}
                >
                  <img src={wasteBasketIcon} alt="Ícone de lixeira" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-order">
          <span>Valor total</span>
          <span>R$ {totalAmount.toFixed(2)}</span>
        </div>
        <Button>Continuar com a entrega</Button>
      </div>
    </StyledContainerCarrinho>
  )
}

export default Carrinho
