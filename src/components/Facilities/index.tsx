import { BsXDiamond, BsArrowRepeat, BsFlower1 } from 'react-icons/bs'
import './style.css'

export default function Facilities() {
  return (
    <div className="bg-black text-bg-dark py-5">
      <h1 className="text-center fw-medium px-2 pb-4">
        Conheça todas as nossas facilidades
      </h1>

      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5">
        <div className="d-flex align-items-center gap-3 cardFacilities">
          <BsXDiamond className="icon" />
          <div>
            <h5 className="fw-bold textHighlight">PAGUE PELO PIX</h5>
            <p>Ganhe 5% OFF em pagamentos via PIX</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 cardFacilities">
          <BsArrowRepeat className="icon" />
          <div>
            <h5 className="fw-bold textHighlight">TROCA GRÁTIS</h5>
            <p>Fique livre para trocar em até 30 dias.</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 cardFacilities">
          <BsFlower1 className="icon" />
          <div>
            <h5 className="fw-bold textHighlight">SUSTENTABILIDADE</h5>
            <p>Moda responsável, que respeita o meio ambiente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
