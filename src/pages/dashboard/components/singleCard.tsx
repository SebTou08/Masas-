  import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
import { MasaContext } from '../dashboard';
import './../dashboard.css'
  

  export default function SingleCard(){

    const masas: any = useContext(MasaContext)
    const list = [];

    for(const [i, masa] of masas.entries()){
      list.push(<Card key={i} border="success" style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{masa.name}</Card.Title>
        <Card.Text>
          $ {masa.price}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>)
    }

    console.log(masas)

    return (
      <div className='masa-card'>
        {list}
      </div>
    );
  
}