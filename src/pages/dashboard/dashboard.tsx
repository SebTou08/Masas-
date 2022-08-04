import OffersCarrousel from "./components/offersCarrousel";


export default function Dashboard(){
//NOTE: Link to integrate Boostrap to an existing react proyect
// LINK: https://www.geeksforgeeks.org/how-to-install-bootstrap-in-react-js/

  return (
    <div>
      <OffersCarrousel />
    <a className="btn btn-primary"
             data-bs-toggle="collapse"
             href="#collapseExample"
             role="button"
             aria-expanded="false"
             aria-controls="collapseExample">
        lalla
        </a>

      </div>
  )
}