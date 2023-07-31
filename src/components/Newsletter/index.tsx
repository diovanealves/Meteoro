import NewsletterForm from './NewsletterForm'

export default function Newsletter() {
  return (
    <div
      className="container row mx-auto border border-dark my-5 py-5 px-4"
      style={{ maxWidth: '650px', width: '95%' }}
    >
      <h5 className="text-center pb-3">
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na
        primeira compra? <strong>Cadastre-se!</strong>
      </h5>
      <NewsletterForm />
    </div>
  )
}
