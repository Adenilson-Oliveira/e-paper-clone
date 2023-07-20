import { Header } from "../Header";
import { NewTypeOfDocContainer } from "./NewTypeOfDoc.styled";
import moreOptionsDisableBlack from '../../assets/icons/moreOptionsDisableBlack.svg'


export function NewTypeOfDoc() {

  return (
    <NewTypeOfDocContainer>
      <Header />


      <main>
        <form >
          <div className="miniHeader">
            <ul className="location">
              <li>Configurações</li>
              <img src={moreOptionsDisableBlack} alt="" />

              <li>Tipos de Documentos</li>
              <img src={moreOptionsDisableBlack} alt="" />

              <li className="destaque">Novo Tipo de Documento</li>
            </ul>

            <div className="finalizarAction">
              <a href="#" className="destaque">Voltar</a>
              <button type="submit">Salvar Documento</button>
            </div>
          </div>


          <div className="optionPages">
            <a className="data" href="#">Dados</a>
            <a className="permitions" href="#">Permissões</a>
          </div>
          <section className="section">

            <div>

              <label htmlFor="name">Nome do Tipo de Documento*</label>
              <input type="text" name="name" />



              <label htmlFor="numberProcess"></label>
              <input type="text" name="numberProcess" value='00036/2022' />

              <section className="checkboxKeep">
                <input type="checkbox" name="keep" id="" />
                <label htmlFor="keep">Dar continuidade a número de processo?</label>
              </section>


              <input type="text" name="EditNumberProcess" />

              <label htmlFor="tramitacao">Tramitação</label>
              <select name="tramitacao" id="">
                <option value="ambas">Ambas</option>
              </select>

              <label htmlFor="metodoInsercao">Método de Inserção do Documento*</label>
              <select name="metodoInsercao" id="">
                <option value=""></option>
                <option value="scan">Scaner</option>
              </select>
            </div>



            <div>
              <label htmlFor="vincularIndices">Vincular Índices ao Documento?*</label>
              <select name="vincularIndices" id="">
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>

              <label htmlFor="sign">Assinatura</label>
              <select name="sign" id="">
                <option value="eletronica">Eletrônica</option>
              </select>

              <label htmlFor="state">Status</label>
              <select name="state" id="" >
                <option value="1">Selecione o item</option>
              </select>

              <label htmlFor="visibility">Disponível para Todos os Departamentos?*</label>
              <select name="visibility" id="">
                <option value="yes">Sim</option>
                <option value="false">Sim</option>
              </select>
            </div>


          </section>
        </form>
      </main>
    </NewTypeOfDocContainer >
  )
}