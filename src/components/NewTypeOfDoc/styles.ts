import styled from 'styled-components'

export const NewTypeOfDocContainer = styled.div`
  width: 100%;

  .destaque {
    color: ${(props) => props.theme.green500};
  }

  main {
    padding: 2rem;
  }

  .miniHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    ul {
      display: flex;
      list-style: none;
      li,
      img {
        padding-right: 1rem;
        font-size: 1.2rem;
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  .location {
    li {
      width: 15rem;
    }
  }

  .finalizarAction {
    a {
      text-decoration: none;
      padding: 0 1rem;
      font-size: 1.2rem;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      border-radius: 6px;
      margin-right: 1rem;
    }

    button {
      padding: 0 1rem;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.green500};
      height: 40px;
      border: none;
      border-radius: 6px;
    }
  }

  .optionPages {
    margin-top: 4rem;

    a {
      text-decoration: none;
      padding: 0 1rem;
      font-size: 1.2rem;
      display: inline-block;
      height: 50px;
      line-height: 50px;
    }
  }

  .data {
    background-color: ${(props) => props.theme.green500};
    border-top-left-radius: 6px;
    color: ${(props) => props.theme.white};
  }

  .permitions {
    color: #000;
    border-top-right-radius: 6px;
    background-color: ${(props) => props.theme.gray300};
  }

  .section {
    background-color: ${(props) => props.theme.white};

    height: 600px;
    border-radius: 6px;

    display: grid;
    grid-template-columns: 48% 48%;
    align-items: center;
    justify-content: space-around;

    input[type='text'],
    select {
      padding-left: 0.5rem;
      font-size: 1.1rem;
      max-width: 30rem;
      margin-bottom: 2rem;
      height: 2.5rem;
      border-radius: 6px;
      border-color: ${(props) => props.theme.gray400};
      outline: none;
    }

    /* input[name="editNumberProcess"] {
      max-width: 25rem;
      margin-left: 2rem;
    } */

    .checkboxKeep {
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: center;
    }

    div {
      display: flex;
      flex-direction: column;

      padding-left: 15%;
      padding-right: 2rem;
    }
  }

  .checkboxKeep {
    display: inline-block;
    flex-direction: column;
    padding-bottom: 2rem;
    input {
      height: 1rem;
      width: 1rem;
      margin-right: 1rem;
    }
  }

  .validationError {
    color: ${(props) => props.theme.red500};
    font-size: 0.9rem;
  }
`
