import { Link } from 'react-router-dom';
import {Container} from './style-details'
import close from '../../assets/close.svg'
import { Dog } from '../Home/styles';
import pet from '../../assets/pet.svg'

function Details(){
    return(
     <Container>
        <img src={pet} alt='' className='pet'/>
        <main>
            <div>
              <img src={Dog.message}  alt=""/>
            </div>
            <div className='content'>
               <h2>Nome</h2>
               <div className='info'>
                  <p>Peso <span>6kg</span></p>
                  <p>Idade <span>1 ano</span></p>
                  <p>Raça <span>nome da raça</span></p>
               </div>
            </div>
            <div className='buttons'>
                <Link to={`../form`} style={{textDecoration: 'none' }} className="button">ADOTE!</Link>
                <Link to={`../adoption`} style={{textDecoration: 'none' }} className="close"><img src={close} /></Link>
            </div>
        </main>
        <img src={pet} alt='' className='pet'/>
     </Container>
    )
}

export default Details;