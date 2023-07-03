import Carousel from 'react-bootstrap/Carousel'
import carouselItems from './carouselItems'

export default function Carousels() {
  return (
    <Carousel interval={2500}>
      {carouselItems.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="w-100 d-block d-md-none d-xl-none"
            src={image.mobile}
            alt={image.alt}
          />
          <img
            className="w-100 d-none d-md-block d-xl-none"
            src={image.tablet}
            alt={image.alt}
          />
          <img
            className="w-100 d-none d-xl-block"
            src={image.desktop}
            alt={image.alt}
          />
          {image.caption && (
            <Carousel.Caption
              className={`h-100 d-flex flex-column  justify-content-end justify-content-md-center  ${
                index === 1 ? 'text-md-end' : 'text-md-start'
              }`}
            >
              <h3 className="fs-1">{image.caption.title}</h3>
              <p className="f-5">{image.caption.subtitle}</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
