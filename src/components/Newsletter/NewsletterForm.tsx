import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import NewsletterSucess from './NewsletterSucess'

interface FormData {
  email: string
}

export default function NewsletterForm() {
  const [show, setShow] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <>
      <Form
        className="d-flex align-items-start"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Form.Group className="w-100" controlId="email">
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            className="rounded-0 shadow-none"
            {...register('email', {
              required: 'O campo de email é obrigatório',
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
                message: 'Insira um email válido',
              },
            })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message as string}
            </Form.Text>
          )}
        </Form.Group>
        <Button
          className=" rounded-0"
          style={{
            backgroundColor: '#9353FF',
            borderColor: '#9353FF',
          }}
          type="submit"
          onClick={() => setShow(true)}
        >
          Enviar
        </Button>
      </Form>
      {isSubmitSuccessful && (
        <NewsletterSucess show={show} onClose={() => setShow(false)} />
      )}
    </>
  )
}
