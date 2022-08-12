import { Formulario, Container} from "./style-form";
import { useState } from "react";
import pet from "../../assets/pet.svg"



function Form(){

    const [name, setName, email, setEmail, contact, setContact, city, setCity] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Formulário Enviado!`)
      }

    return(
    <Container>
     <Formulario onSubmit={handleSubmit}>
        <fieldset>
            <legend>FORMUÁRIO DE ADOÇÃO</legend>
        <div className="data">
            <label htmlFor="nome">Nome</label>
            <input type='text' id="nome" name="nome" placeholder="Nome" value={name} 
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="data">
            <label htmlFor="email">E-mail</label>
            <input type='email' id="email" placeholder="E-mail" value={email} 
            onChange={(i) => setEmail(i.target.value)}
            />
        </div>
        <div className="data">
            <label htmlFor="contato">Contato</label>
            <input type='number' id="contato" placeholder="Contato" value={contact} 
            onChange={(e) => setContact(e.target.value)}
            />
        </div>
        <div className="data">
            <label htmlFor="cidade">Cidade</label>
            <input type='text' id="cidade" placeholder="Cidade"  value={city} 
            onChange={(e) => setCity(e.target.value)}
            />
        </div>
        <input type='submit' className="submit" value="ENVIAR"/>
        </fieldset>
       </Formulario>
       <img className="dogform" src={pet} alt=""/>
    </Container>
    )
}

export default Form;