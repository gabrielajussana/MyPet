import {Container, DogList, Dog} from '../Home/styles';
import {useState, useEffect, setState} from 'react';
import {Link} from 'react-router-dom'
import Header from '../Parts/Header';


function Adoption(){

const[dogs, setDogs] = useState([])
  

 useEffect(() => {
   fetch(`https://dog.ceo/api/breeds/image/random/6`)
   .then(response => response.json())
   .then(data => setDogs(data.message))
 }, [])

  return(
   <Container>
    <Header /> 
    <DogList>    
         {dogs.map(dog => {
            return(
             <Dog key={dog.message}>
             <Link to={`../Details/${dog.message}`}><img src={`${dog.message}`} alt="foto do cachorro"/></Link>
             <h2>Nome</h2>
             <span>Raça</span>
             <div className='buttons'>
             <Link to={`../details/:message`} style={{ textDecoration: 'none' }} className='button'>DETALHES</Link>
             <Link to={`../form`} style={{ textDecoration: 'none' }} className='button'>ADOTE!</Link>
             </div>  
             </Dog>
            )
         })}
    </DogList>
   </Container>
  );
}

export default Adoption;
