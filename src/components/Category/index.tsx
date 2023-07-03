import Card from 'react-bootstrap/Card'
import CategoryItems from './categoryItems'

export default function Category() {
  return (
    <div>
      <h3 className="text-center my-4 my-xl-5" style={{ fontWeight: '500' }}>
        Busque por categoria:
      </h3>

      <div className="container row mx-auto g-4">
        {CategoryItems.map((category, index) => (
          <Card
            key={index}
            className="col-6 col-md-4 col-xl-2 rounded-0 border-0"
          >
            <Card.Img variant="top" src={category.image} />
            <Card.Body className="bg-black text-bg-dark">
              <Card.Title className="text-center fs-6 card-text">
                {category.name}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}
