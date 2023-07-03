import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import ProductsItems from './productsItems'

export default function Products() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 mb-xl-5 fw-medium">
        Produtos que estão bombando!
      </h2>

      <div className="mx-auto row justify-content-center gap-3">
        {ProductsItems.map((product, index) => (
          <Card key={index} className="col-12 col-md-5 col-xl-3 p-0">
            <Card.Img className="rounded-0 w-100" src={product.image} />
            <Card.Body className="d-flex flex-column px-3 py-3">
              <Card.Title className="fs-5 fw-bold">{product.title}</Card.Title>
              <Card.Text className="my-auto h-100">
                {product.description}
              </Card.Text>
              <Card.Text className="fs-5 fw-bold my-2">
                R$ {product.price}
              </Card.Text>
              <Button
                type="submit"
                className="btn btn-primary rounded-1 border-0 mt-auto"
                style={{ backgroundColor: '#9353FF', maxWidth: '45%' }}
              >
                Ver mais
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}
