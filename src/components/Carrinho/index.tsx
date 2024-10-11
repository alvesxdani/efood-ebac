import { useFormik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
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
  const [orderId, setOrderId] = useState('')

  const msgRequired = 'Esse campo é obrigatório'

  const validationSchema = Yup.object().shape({
    products: Yup.array().of(
      Yup.object().shape({
        price: Yup.number().required(),
        id: Yup.number().required(),
      }),
    ),
    delivery: Yup.object().shape({
      receiver: Yup.string().required(msgRequired),
      address: Yup.object().shape({
        description: Yup.string().required(msgRequired),
        city: Yup.string().required(msgRequired),
        zipCode: Yup.string()
          .required(msgRequired)
          .matches(/^\d{5}-\d{3}$/, 'O formato de CEP está incorreto.'),
        complement: Yup.string(),
        number: Yup.number().required(msgRequired),
      }),
    }),
    payment: Yup.object().shape({
      card: Yup.object().shape({
        name: Yup.string().required(msgRequired),
        number: Yup.string()
          .required(msgRequired)
          .matches(
            /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11})$/,
            'Número de cartão de crédito inválido.',
          ),
        code: Yup.string().matches(
          /^\d{3}$/,
          'Esse campo deve ter apenas 3 caracteres.',
        ),
        expires: Yup.object().shape({
          month: Yup.string().matches(
            /^\d{2}$/,
            'Esse campo deve ter apenas 2 caracteres.',
          ),
          year: Yup.string().matches(
            /^\d{4}$/,
            'Esse campo deve ter apenas 4 caracteres.',
          ),
        }),
      }),
    }),
  })

  const form = useFormik({
    initialValues: {
      products: [],
      delivery: {
        receiver: '',
        address: {
          city: '',
          complement: '',
          description: '',
          number: undefined,
          zipCode: '',
        },
      },
      payment: {
        card: {
          name: '',
          number: '',
          code: undefined,
          expires: {
            month: undefined,
            year: undefined,
          },
        },
      },
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        if (values) {
          await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then((resp) => resp.json())
            .then((json) => setOrderId(json?.orderId))
          resetForm()
        }
      } catch (e) {
        console.error(e)
      }
    },
    validationSchema,
  })

  function handleRemoveItem(name: string) {
    dispatch(removeItemFromCart(name))
  }

  async function handleToStep3() {
    await form.validateForm()

    if (
      !form.errors.delivery?.receiver &&
      !form.errors.delivery?.address?.city &&
      !form.errors.delivery?.address?.description &&
      !form.errors.delivery?.address?.number &&
      !form.errors.delivery?.address?.zipCode
    ) {
      setStep(3)
    }
  }

  async function handleToStep4() {
    await form.validateForm()

    if (
      !form.errors.payment?.card?.code &&
      !form.errors.payment?.card?.name &&
      !form.errors.payment?.card?.number &&
      !form.errors.payment?.card?.expires?.month &&
      !form.errors.payment?.card?.expires?.year
    ) {
      setStep(4)
      form.handleSubmit()
    }
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
                  name="delivery.receiver"
                  value={form.values.delivery.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.delivery?.receiver}
              </div>
              <div className="form-item">
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  name="delivery.address.description"
                  value={form.values.delivery.address.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.delivery?.address?.description}
              </div>
              <div className="form-item">
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="delivery.address.city"
                  value={form.values.delivery.address.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.delivery?.address?.city}
              </div>
              <div className="form-item-column">
                <div className="form-item">
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="delivery.address.zipCode"
                    value={form.values.delivery.address.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="99999-999"
                  />
                  {form.errors.delivery?.address?.zipCode}
                </div>
                <div className="form-item">
                  <label htmlFor="number">Número</label>
                  <input
                    type="number"
                    id="number"
                    name="delivery.address.number"
                    value={form.values.delivery.address.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  {form.errors.delivery?.address?.number}
                </div>
              </div>
              <div className="form-item">
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="delivery.address.complement"
                  value={form.values.delivery.address.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
            </form>
            <div className="buttons">
              <Button onClick={handleToStep3}>Continuar com o pagamento</Button>
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
                  name="payment.card.name"
                  value={form.values.payment.card.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.payment?.card?.name}
              </div>
              <div className="form-item-column">
                <div className="form-item" style={{ width: '70%' }}>
                  <label htmlFor="number">Número do cartão</label>
                  <input
                    type="text"
                    id="number"
                    name="payment.card.number"
                    value={form.values.payment.card.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  {form.errors.payment?.card?.number}
                </div>
                <div className="form-item" style={{ width: '30%' }}>
                  <label htmlFor="code">CVV</label>
                  <input
                    type="number"
                    id="code"
                    name="payment.card.code"
                    value={form.values.payment.card.code}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="000"
                  />
                </div>
              </div>
              <div className="form-item-column">
                <div className="form-item">
                  <label htmlFor="month">Mês do vencimento</label>
                  <input
                    type="number"
                    id="month"
                    name="payment.card.expires.month"
                    value={form.values.payment.card.expires.month}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="00"
                  />
                  {form.errors.payment?.card?.expires?.month}
                </div>
                <div className="form-item">
                  <label htmlFor="year">Ano do vencimento</label>
                  <input
                    type="number"
                    id="year"
                    name="payment.card.expires.year"
                    value={form.values.payment.card.expires.year}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="0000"
                  />
                  {form.errors.payment?.card?.expires?.year}
                </div>
              </div>
            </form>
            <div className="buttons">
              <Button onClick={handleToStep4} type="submit">
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
