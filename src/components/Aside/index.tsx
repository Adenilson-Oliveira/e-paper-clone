import { AsideContainer } from "./Aside.styles";
import logo from '../../assets/logo-e-paper.svg'
import dashboardIcon from '../../assets/icons/icon-dashboard.svg';
import fileIcon from '../../assets/icons/files.svg'
import iconTasks from '../../assets/icons/icon-tasks.svg';
import iconSearch from '../../assets/icons/search.svg';
import iconUser from '../../assets/icons/user.svg';
import iconConfig from '../../assets/icons/config.svg';
import moreOptionsActive from '../../assets/icons/moreOptionsActive.svg'
import moreOptionsDisable from '../../assets/icons/moreOptionsDisable.svg'
import { useState } from "react";

export function Aside() {

  const [configState, setConfigState] = useState<boolean>(false);

  return (
    <AsideContainer>
      <img src={logo} alt="e-paper" />
      <nav>
        <ul>
          <li><img src={dashboardIcon} /> Dashboard</li>
          <li><img src={fileIcon} /> Documentos</li>
          <li><img src={iconTasks} />Tarefas</li>
          <li><img src={iconSearch} />Pesquisar Documento</li>
        </ul>

        <ul>

          <li><img src={iconUser} />Usuário</li>
          <li onClick={() => setConfigState(!configState)}>
            <img src={iconConfig} />
            Configurações
            <img id="moreOptionsConfig" src={configState ? moreOptionsActive : moreOptionsDisable} />
          </li>
          {configState && (<>
            <ul className="moreOptions">
              <li>Departamentos</li>
              <li className="destaque">Tipos de Documentos</li>
              <li>Índices de Documentos</li>
              <li>Fluxos de Processo</li>
            </ul>
          </>)}
        </ul>

      </nav>
    </AsideContainer>
  )
}