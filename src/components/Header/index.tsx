import iconTasks from '../../assets/icons/icon-tasks.svg';
import { HeaderContainer } from './Header.styles';
import logoPref from '../../assets/logoPref.svg'
import lupa from '../../assets/icons/lupa.svg';
import clock from '../../assets/icons/clock.svg';
import bell from '../../assets/icons/bell.svg';

export function Header() {

  return (
    <HeaderContainer>
      <h1><img id='logo' src={logoPref} alt="" /></h1>

      <hr />

      <h2>PREFEITURA DE MONTEZUMA</h2>
      <form>
        <input type="text" placeholder='Pesquisar' />
        <button type="submit"><img src={lupa} alt="" /></button>
      </form>
      <img src={clock} alt="" />
      <img src={bell} alt="" />
      <hr />

      <h3>Rafael Lucas</h3>

      {/* componente imgProfile */}
      <img src={iconTasks} alt="" />

    </HeaderContainer>
  )
}