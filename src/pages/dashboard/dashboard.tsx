import React from "react";
import OffersCarrousel from "./components/offersCarrousel";
import SingleCard from "./components/singleCard";
import "./dashboard.css";
import { IMasa } from "./interfaces";

export default function Dashboard() {
  //NOTE: Link to integrate Boostrap to an existing react proyect
  // LINK: https://www.geeksforgeeks.org/how-to-install-bootstrap-in-react-js/

  const data: Array<IMasa> = [
    { name: "Familiar", price: 40, urlImage: 'https://doncucharon.com/fotos/recetas/156/masa-de-pizza.jpg' },
    { name: "Pequeña", price: 15 },
    { name: "Regular", price: 25 },
    { name: "Grande", price: 35 },
  ];

  return (
    <div>
      <MasaContext.Provider value={data}>
        <div className="carrousel">
          <OffersCarrousel />
        </div>
        <div>
          <SingleCard />
        </div>
      </MasaContext.Provider>

      <a
        className="btn btn-primary"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        lalla
      </a>
    </div>
  );
}

export const MasaContext = React.createContext({});
