import { Formulario, Container} from "./style-form";
import dogform from "../../assets/dogform.png"
import pet from "../../assets/pet.svg"


function Form(){
    return(
    <Container>
         <Formulario>
        <fieldset>
            <legend>FORMUÁRIO DE ADOÇÃO</legend>
        <div className="data">
            <label htmlFor="nome">Nome</label>
            <input type='text' id="nome" name="nome" placeholder="Nome"/>
        </div>
        <div className="data">
            <label htmlFor="email">E-mail</label>
            <input type='email' id="email" placeholder="E-mail"/>
        </div>
        <div className="data">
            <label htmlFor="contato">Contato</label>
            <input type='number' id="contato" placeholder="Contato"/>
        </div>
        <div className="data">
            <label htmlFor="cidade">Cidade</label>
            <input type='text' id="cidade" placeholder="Cidade"/>
        </div>
        <input type='submit' className="submit" value="ENVIAR"/>
        </fieldset>
       </Formulario>
       <img className="dogform" src={pet} alt=""/>
    </Container>
    )
}

export default Form;