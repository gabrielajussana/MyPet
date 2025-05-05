import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .dogform {
    opacity: 0.5;
    margin-left: 10rem;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    height: auto;

    .dogform {
      display: none;
    }
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f3f6;
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  margin-left: 20%;
  box-shadow: -2px 8px 20px 5px rgba(0, 0, 0, 0.5);

  fieldset {
    padding: 1rem;
    border-radius: 1rem;
    border-color: #62929e;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    font-weight: 700;
    font-size: 1.8rem;
  }

  .data {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .data input {
    width: 100%;
    max-width: 30rem;
    height: 3rem;
    border: 2px solid #62929e;
    border-radius: 1rem;
    margin-top: 5px;
    background: none;
    padding: 0 1rem;
  }

  .data label {
    font-size: 1.2rem;
  }

  .submit {
    width: 80%;
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
    background-color: #62929e;
    font-weight: 700;
    letter-spacing: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }

  .submit:hover {
    background-color: #d68c45;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    box-shadow: none;
    padding: 1rem;

    fieldset {
      font-size: 1.4rem;
      width: 100%;
    }

    .submit {
      width: 100%;
    }
  }
`;
