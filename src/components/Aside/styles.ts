import styled from 'styled-components'

export const AsideContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundcolor_aside_theme};

  width: 20%;
  max-width: 260px;
  height: 100vh;
  padding: 1rem;
  font-size: 1.1rem;

  color: ${(props) => props.theme.white};

  .destaque {
    color: ${(props) => props.theme.yellow900};
  }

  img {
    padding-top: 1rem;
  }

  nav {
    height: calc(100vh - 20%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 50px;
  }

  ul {
    list-style: none;
    font-size: 1rem;
  }

  li {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;

    /* padding: 10px; */

    gap: 0.5rem;

    img {
      padding-bottom: 1rem;
    }

    #moreOptionsConfig {
      margin-left: 70px;
    }
  }

  .moreOptions li {
    margin: 1rem 1rem;
  }
`
