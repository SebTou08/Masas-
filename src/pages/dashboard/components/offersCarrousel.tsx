import { Badge, Carousel } from "react-bootstrap";
import './../dashboard.css'


export default function OffersCarrousel() {
  return (
    <div className="offersCarrousel">
      <br />
      <h3> <Badge bg="primary"> Promociones & Ofertas</Badge>
      </h3>
      
    <Carousel >
    <Carousel.Item>
      <img
        className="d-block w-100 carrousel offer-carrousel-image"
        src="https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/258965130_223859736524685_5068401062842937980_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=3rTPl1cgpfIAX_7ejKb&_nc_ht=scontent.flim17-1.fna&oh=00_AT-rGjxOZw3MHKr-b2jurc5W1eeUMO8iMIeVlNgpq6k4NA&oe=62FB4801"
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carrousel offer-carrousel-image"
        src="https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/243311227_192214896355836_6638965621272657078_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=19026a&_nc_ohc=K9gbPkd9NJYAX8_YxUc&_nc_ht=scontent.flim17-1.fna&oh=00_AT9PiZ6o7t_wfEIecA_SHtwQGJGhhNAddRfJzrQolGIMEg&oe=62FC5EBE"
        alt="Second slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carrousel offer-carrousel-image"
        src="https://pizzeria.laopera.pe/wp-content/uploads/2022/02/2X1-PIZZAS-CHINCHA-ALTA.png"
        alt="Third slide"
      />
      
    </Carousel.Item>
  </Carousel>
  </div>
  )
}