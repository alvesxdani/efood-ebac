import { useEffect, useRef, useState } from 'react'
import wasteBasketIcon from '../../assets/wastebasket.png'
import {
  removeItemFromCart,
  resetOrder,
  setIsOpenCart,
} from '../../store/carrinho/carrinho.store'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Order } from '../../utils/order'
import Button from '../Button'
import { StyledContainerCarrinho } from './styles'

const Carrinho = () => {
  const { items, totalAmount } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [step, setStep] = useState<number>(1)
  const [order, setOrder] = useState<Order>()
  const [orderId, setOrderId] = useState('')

  function handleRemoveItem(name: string) {
    dispatch(removeItemFromCart(name))
  }

  const data = async () => {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/efood/checkout',
    )
      .then((resp) => resp.json())
      .then((json) => setOrder(json))
    return response
  }

  const handleSubmit = async () => {
    if (order) {
      await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      })
        .then((resp) => resp.json())
        .then((json) => setOrderId(json?.orderId))
    }
  }

  useEffect(() => {
    data()
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
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        dispatch(setIsOpenCart(false))
      }
    })
  }, [dispatch])

  if (!isModalOpen) return null

  return (
    <StyledContainerCarrinho>
      <div className="modal" ref={modalRef}>
        {step === 1 && (
          <>
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
            <Button onClick={() => setStep(2)}>Continuar com a entrega</Button>
          </>
        )}

        {step === 2 && (
          <div className="container-info">
            <span className="title">Entregas</span>
            <form className="form">
              <div className="form-item">
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  value={order?.delivery.receiver}
                  readOnly
                />
              </div>
              <div className="form-item">
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  value={order?.delivery.address.description}
                  readOnly
                />
              </div>
              <div className="form-item">
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  value={order?.delivery.address.city}
                  readOnly
                />
              </div>
              <div className="form-item-column">
                <div className="form-item">
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    type="text"
                    id="zipCode"
                    value={order?.delivery.address.zipCode}
                    readOnly
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="number">Número</label>
                  <input
                    type="number"
                    id="number"
                    value={order?.delivery.address.number}
                    readOnly
                  />
                </div>
              </div>
              <div className="form-item">
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  value={order?.delivery.address.complement}
                  readOnly
                />
              </div>
            </form>
            <div className="buttons">
              <Button onClick={() => setStep(3)}>
                Continuar com o pagamento
              </Button>
              <Button onClick={() => setStep(1)}>Voltar para o carrinho</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="container-payment">
            <span className="title">
              Pagamento - Valor a pagar R$ {totalAmount.toFixed(2)}
            </span>
            <form className="form">
              <div className="form-item">
                <label htmlFor="name">Nome no cartão</label>
                <input
                  type="text"
                  id="name"
                  value={order?.payment.card.name}
                  readOnly
                />
              </div>
              <div className="form-item-column">
                <div className="form-item" style={{ width: '70%' }}>
                  <label htmlFor="number">Número do cartão</label>
                  <input
                    type="text"
                    id="number"
                    value={order?.payment.card.number}
                    readOnly
                  />
                </div>
                <div className="form-item" style={{ width: '30%' }}>
                  <label htmlFor="code">CVV</label>
                  <input
                    type="text"
                    id="code"
                    value={order?.payment.card.code}
                    readOnly
                  />
                </div>
              </div>
              <div className="form-item-column">
                <div className="form-item">
                  <label htmlFor="month">Mês do vencimento</label>
                  <input
                    type="text"
                    id="month"
                    value={order?.payment.card.expires.month}
                    readOnly
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="year">Ano do vencimento</label>
                  <input
                    type="text"
                    id="year"
                    value={order?.payment.card.expires.year}
                    readOnly
                  />
                </div>
              </div>
            </form>
            <div className="buttons">
              <Button
                onClick={() => {
                  setStep(4)
                  handleSubmit()
                }}
                type="submit"
              >
                Finalizar o pagamento
              </Button>
              <Button onClick={() => setStep(2)}>
                Voltar para a edição de endereço
              </Button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="container-finish">
            <span className="title">PEDIDO FINALIZADO - {orderId}</span>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <div className="buttons">
              <Button
                onClick={() => {
                  dispatch(setIsOpenCart(false))
                  dispatch(resetOrder())
                }}
              >
                Concluir
              </Button>
            </div>
          </div>
        )}
      </div>
    </StyledContainerCarrinho>
  )
}

export default Carrinho
