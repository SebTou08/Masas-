import { useContext } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MasaContext } from "../dashboard";
import "./../dashboard.css";
import { IMasa } from "../interfaces";

export default function SingleCard(props: boolean | any) {
  const masas: any = useContext(MasaContext);
  const list: Array<IMasa | any> | any = [];



  for (const [i, masa] of masas.entries()) {
    const basicText: string = 'Hola buen dia, deseo comprar un(a): '+ masa.name + ' de ' + masa.size + masa.unitSize;
    const link: string = 'https://wa.me/51902186650?text='+ basicText;
    if (props.destacado) {
      if (masa.destacado) {
        list.push(
          <div className="cardContainer">
            <Card key={i}>
              <Card.Img
                variant="top"
                src={masa.urlImage}
                className="imageProduct"
              />
              <Card.Body>
                <Card.Title>
                  {masa.name} {masa.size} {masa.unitSize}
                </Card.Title>
                <Card.Text>S/. {masa.price}</Card.Text>
                <Button href={link} target="_blank" variant="primary"  >Comprar</Button>
              </Card.Body>
            </Card>
          </div>
        );
      }
    } else {
      list.push(
        <div className="cardContainer">
          <Card key={i}>
            <Card.Img
              variant="top"
              src={masa.urlImage}
              className="imageProduct"
            />
            <Card.Body>
              <Card.Title>
                {masa.name} {masa.size} {masa.unitSize}
              </Card.Title>
              <Card.Text>S/. {masa.price}</Card.Text>
              <Button href={link} target="_blank" variant="primary"  >Comprar</Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }

  return (
    <div>
    
      <br />
      <div className="masa-card gallery-all-productss">{list}</div>
    </div>
  );
}
