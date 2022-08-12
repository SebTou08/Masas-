import { useContext } from "react";
import {  Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MasaContext } from "../../dashboard";
import "../../dashboard.css";
import { IMasa } from "../../interfaces";

export default function Categories() {
  const masas: any = useContext(MasaContext);
  const listMasa: Array<IMasa | any> | any = [];
  const listLasagnas: Array<IMasa | any> | any = [];
  const listQuesos: Array<IMasa | any> | any = [];

  for (const [i, masa] of masas.entries()) {
    const basicText: string = 'Hola buen dia, deseo comprar un(a): '+ masa.name + ' de ' + masa.size + masa.unitSize;
    const link: string = 'https://wa.me/51902186650?text='+ basicText;
    if (masa.category == 0) {
      listMasa.push(
        <div className="cardContainerForCategories">
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
              <Button href={link} target="_blank"  variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
    else if(masa.category == 1){
      listLasagnas.push(
        <div className="cardContainerForCategories">
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
              <Button href={link} target="_blank"  variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
    else if(masa.category == 2){
      listQuesos.push(
        <div className="cardContainerForCategories">
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
              <Button href={link} target="_blank"  variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }

  return (
    <div>
      <br />
      <br />
      <Tabs defaultActiveKey="masa" id="justify-tab-example" className="mb-12 lg-12 tabs-spacer" >
        <Tab eventKey="masa" title="Masas">
          <div className="gallery-all-productss">{listMasa}</div>
          
        </Tab>
        <Tab eventKey="lasagnas" title="Lasagñas">
        <div className="gallery-all-productss">{listLasagnas}</div>
        </Tab>
        <Tab eventKey="queso" title="Quesos">
        <div className="gallery-all-productss">{listQuesos}</div>
        </Tab>
      </Tabs>
    </div>
  );
}
