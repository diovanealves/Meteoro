import Modal from 'react-bootstrap/Modal'
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai'

interface NewsletterSucessProps {
  show: boolean
  onClose: () => void
}

export default function NewsletterSucess({
  show,
  onClose,
}: NewsletterSucessProps) {
  return (
    <Modal show={show} onHide={onClose} backdrop="static" centered>
      <Modal.Header className="d-flex align-items-center bg-black text-white">
        <Modal.Title>
          <AiOutlineCheckCircle
            size={30}
            style={{ color: '#DAFF01', margin: '0 10px 0 0' }}
          />
          <span>E-mail cadastrado com sucesso!</span>
        </Modal.Title>
        <button
          type="button"
          className="bg-black text-white border-0"
          aria-label="Close"
          onClick={onClose}
        >
          <AiOutlineClose size={23} />
        </button>
      </Modal.Header>
      <Modal.Body className="">
        Em breve você receberá novidades exclusivas da Meteora.
      </Modal.Body>
    </Modal>
  )
}
