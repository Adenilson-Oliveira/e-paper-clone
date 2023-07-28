import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  /* align-content: center; */

  /* background-color: #198347; */
  width: 100%;

  border-bottom: 1px solid ${(props) => props.theme.gray400};

  .itensNav {
    display: flex;
    height: 3rem;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    padding: 2rem 0;
    gap: 2rem;
  }

  img {
    width: 25px;
    height: 25px;
    /* height: 20px; */
    color: #198347;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  #imgProfile {
    width: 35px;
    height: 35px;
  }

  #moreOptionsProfile {
    width: 20px;
    height: 20px;
  }

  #logo {
    width: 2.5rem;
    height: 2.5rem;
  }

  hr {
    height: 2rem;
    color: ${(props) => props.theme.gray400};
  }

  form {
    background-color: ${(props) => props.theme.gray400};
    border-radius: 6px;
    position: relative;
    height: 2rem;
    width: 20rem;
  }

  input {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 6px;
    font-size: 1.2rem;
    border: none;

    /* border: 1px solid ${(props) => props.theme.gray400}; */
    padding-left: 3rem;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
  }

  button:focus {
    border: none;
    outline: none;
  }
`
