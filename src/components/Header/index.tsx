
import { HeaderContainer } from './Header.styles';
import logoPref from '../../assets/logoPref.svg'
import lupa from '../../assets/icons/lupa.svg';
import clock from '../../assets/icons/clock.svg';
import bell from '../../assets/icons/bell.svg';
import imgProfile from '../../assets/imgProfile.svg';
import moreOptionsDisableBlack from '../../assets/icons/moreOptionsDisableBlack.svg'

export function Header() {

  return (
    <HeaderContainer>
      <div className='itensNav'>
        <h1><img id='logo' src={logoPref} alt="" /></h1>
        <hr />
        <h2>PREFEITURA DE MONTEZUMA</h2>
      </div>
      <form >
        <input type="text" placeholder='Pesquisar' />
        <button type="submit"><img src={lupa} alt="" /></button>
      </form>

      <div className='itensNav'>
        <img src={clock} alt="" />
        <img src={bell} alt="" />
        <hr />

        <h3>Rafael Lucas</h3>

        {/* componente imgProfile */}
        <div className='profile'>
          <img id='imgProfile' src={imgProfile} alt="" />
          <img id='moreOptionsProfile' src={moreOptionsDisableBlack} alt="" />
        </div>


      </div>

    </HeaderContainer>
  )
}