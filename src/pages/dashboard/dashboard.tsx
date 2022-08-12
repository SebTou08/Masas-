import React from "react";
import { Badge, Card } from "react-bootstrap";
import Categories from "./components/categories/categories";
import OffersCarrousel from "./components/offersCarrousel";
import SingleCard from "./components/singleCard";
import "./dashboard.css";
import { IMasa } from "./interfaces";

export default function Dashboard() {
  //NOTE: Link to integrate Boostrap to an existing react proyect
  // LINK: https://www.geeksforgeeks.org/how-to-install-bootstrap-in-react-js/

  const data: Array<IMasa> = [
    {
      name: "Masa ",
      price: 1.2,
      urlImage:
        "https://static3.abc.es/media/bienestar/2021/02/09/pizza-base-verduras-kBFE--1200x630@abc.jpg",
      destacado: true,
      size: 16,
      unitSize: "cm",
      category: 0,
    },
    {
      name: "Masa",
      price: 1.6,
      urlImage:
        "https://static3.abc.es/media/bienestar/2021/02/09/pizza-base-verduras-kBFE--1200x630@abc.jpg ",
      destacado: false,
      size: 22,
      unitSize: "cm",
      category: 0,
    },
    {
      name: "Masa",
      price: 2.4,
      urlImage:
        "https://static3.abc.es/media/bienestar/2021/02/09/pizza-base-verduras-kBFE--1200x630@abc.jpg ",
      destacado: false,
      size: 30,
      unitSize: "cm",
      category: 0,
    },
    {
      name: "Masa",
      price: 2.6,
      urlImage:
        "https://static3.abc.es/media/bienestar/2021/02/09/pizza-base-verduras-kBFE--1200x630@abc.jpg ",
      destacado: false,
      size: 32,
      unitSize: "cm",
      category: 0,
    },
    {
      name: "Masa",
      price: 3.0,
      urlImage:
        "https://static3.abc.es/media/bienestar/2021/02/09/pizza-base-verduras-kBFE--1200x630@abc.jpg ",
      destacado: false,
      size: 34,
      unitSize: "cm",
      category: 0,
    },
    {
      name: "Masa",
      price: 3.6,
      urlImage:
        "https://static3.abc.es/media/bienestar/2021/02/09/pizza-base-verduras-kBFE--1200x630@abc.jpg ",
      destacado: false,
      size: 36,
      unitSize: "cm",
      category: 0,
    },
    {
      name: "Masa",
      price: 4.2,
      urlImage:
        "https://static3.abc.es/media/bienestar/2021/02/09/pizza-base-verduras-kBFE--1200x630@abc.jpg ",
      destacado: true,
      size: 40,
      unitSize: "cm",
      category: 0,
    },
    {
      name: "Lasagña",
      price: 15,
      urlImage:
        "https://image.shutterstock.com/image-photo/close-beef-lasagna-foil-tray-600w-273096782.jpg ",
      destacado: false,
      size: 0.25,
      unitSize: "kg",
      category: 1,
    },
    {
      name: "Lasagña",
      price: 20,
      urlImage:
        "https://image.shutterstock.com/image-photo/close-beef-lasagna-foil-tray-600w-273096782.jpg ",
      destacado: true,
      size: 0.5,
      unitSize: "kg",
      category: 1,
    },
    {
      name: " Lasagña",
      price: 28,
      urlImage:
        "https://almacarone.com.gt/wp-content/uploads/2018/11/lasagna-al-forno-familiar-al-macarone.jpg ",
      destacado: false,
      size: 0.75,
      unitSize: "kg",
      category: 1,
    },
    {
      name: " Lasagña",
      price: 38,
      urlImage:
        "https://almacarone.com.gt/wp-content/uploads/2018/11/lasagna-al-forno-familiar-al-macarone.jpg",
      destacado: true,
      size: 1.0,
      unitSize: "kg",
      category: 1,
    },
    {
      name: "Queso Dambo",
      price: 24,
      urlImage:
        "https://speedy.uenicdn.com/6b13a3f1-278d-4328-9e2b-115a32742b6b/c584_a/image/upload/v1581320060/category/shutterstock_603614174.jpg",
      destacado: false,
      size: 2,
      unitSize: "kg",
      category: 2,
    },
    {
      name: "Queso mozarella",
      price: 24,
      urlImage:
        "https://portalechero.com/wp-content/uploads/2022/05/mozarell.jpg",
      destacado: false,
      size: 1,
      unitSize: "kg",
      category: 2,
    },
    {
      name: "Queso Parmesano",
      price: 30,
      urlImage:
        "https://dam.ngenespanol.com/wp-content/uploads/2019/08/queso-parmesano-2.png",
      destacado: true,
      size: 1,
      unitSize: "kg",
      category: 2,
    },
    {
      name: "Salsa pizzera",
      price: 16,
      urlImage:
        "https://www.65ymas.com/uploads/s1/43/72/63/bigstock-spread-the-tomato-sauce-on-the-363413632_1_621x621.jpeg",
      destacado: false,
      size: 1,
      unitSize: "kg",
      category: 2,
    },
  ];

  return (
    <div>
      <MasaContext.Provider value={data}>
        <div className="carrousel">
          <OffersCarrousel />
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <div className="">
          <h3>
            Productos <Badge bg="success ">Destacados</Badge>
          </h3>
          <SingleCard destacado={true} />
        </div>
        <br />
        <hr />
        <br />

        <div>
          <Categories />
        </div>
        <div className="">
          <h3>
            Todos los <Badge bg="info">Productos</Badge>
          </h3>
          <SingleCard destacado={false} />
        </div>
        <div className="div-proms">
        <Card>
        <Card.Body>
          <Card.Text>
          Por compra de lasagñas te damos 2 masas personales gratis
          </Card.Text>
          <Card.Text>
          Por la compra de masas la salsa sale a 15 soles
          </Card.Text>
        </Card.Body>
        <Card.Img className="proms" src="https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/243311227_192214896355836_6638965621272657078_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=19026a&_nc_ohc=K9gbPkd9NJYAX8_YxUc&_nc_ht=scontent.flim17-1.fna&oh=00_AT9PiZ6o7t_wfEIecA_SHtwQGJGhhNAddRfJzrQolGIMEg&oe=62FC5EBE" alt="Card image" />
      </Card>
        </div>
      </MasaContext.Provider>
    </div>
  );
}

export const MasaContext = React.createContext({});
