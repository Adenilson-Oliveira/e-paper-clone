import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Header } from '../Header'
import { NewTypeOfDocContainer } from './styles'
import moreOptionsDisableBlack from '../../assets/icons/moreOptionsDisableBlack.svg'

const newTypeOfDocValidationSchema = zod.object({
  name: zod.string().min(2, 'Nome muito curto ou inválido'),
  keep: zod.boolean(),
  editNumberProcess: zod
    .number({ invalid_type_error: 'Digite o número de sequência' })
    .min(1, 'Digite o número de sequência'),
  tramitacao: zod.string().min(1, 'Selecione a tramitação'),
  modoInsercao: zod.string().min(1, 'Selecione o modo de inserção'),
  vincularIndices: zod.string().min(1, 'Selecione Sim ou não'),
  sign: zod.string().min(1, 'selecione o tipo de assinatura'),
  state: zod.string().min(1, 'selecione o estado'),
  visibility: zod.string().min(1, 'selecione a visibilidade'),
  numberProcess: zod.string().optional(),
})

type NewTypeOfDocFormData = zod.infer<typeof newTypeOfDocValidationSchema>

export function NewTypeOfDoc() {
  const { register, handleSubmit, formState, watch, reset, setValue } =
    useForm<NewTypeOfDocFormData>({
      resolver: zodResolver(newTypeOfDocValidationSchema),
      defaultValues: {},
    })

  const { errors } = formState

  const darContinuedadeNaSequenciaAtual = watch('keep')

  if (darContinuedadeNaSequenciaAtual) {
    setValue('editNumberProcess', 7364)
  }

  // if (!!errors) {
  //   console.log(errors)
  // }

  function createNewTypeOfDoc(data: any) {
    alert(JSON.stringify(data))
    console.log(data)

    // enviar dados para api
  }

  function resetForm() {
    reset()
  }

  return (
    <NewTypeOfDocContainer>
      <Header />

      <main>
        <form onSubmit={handleSubmit(createNewTypeOfDoc)}>
          <div className="miniHeader">
            <ul className="location">
              <li>Configurações</li>
              <img src={moreOptionsDisableBlack} alt="" />

              <li>Tipos de Documentos</li>
              <img src={moreOptionsDisableBlack} alt="" />

              <li className="destaque">Novo Tipo de Documento</li>
            </ul>

            <div className="finalizarAction">
              <a
                href="#"
                className="destaque"
                onClick={() => {
                  resetForm()
                }}
              >
                Voltar
              </a>
              <button type="submit">Salvar Documento</button>
            </div>
          </div>

          <div className="optionPages">
            <a className="data" href="#">
              Dados
            </a>
            <a className="permitions" href="#">
              Permissões
            </a>
          </div>
          <section className="section">
            <div>
              <label htmlFor="name">Nome do Tipo de Documento</label>
              {errors.name && (
                <p className="validationError">{`${errors.name.message}`}</p>
              )}
              <input type="text" {...register('name')} />

              <label htmlFor="numberProcess">Número de processo atual</label>
              <input
                type="text"
                value="7364/2022"
                {...register('numberProcess')}
              />

              <section className="checkboxKeep">
                <input type="checkbox" id="" {...register('keep')} />
                <label htmlFor="keep">
                  Dar continuidade a número de processo?
                </label>
              </section>

              {!darContinuedadeNaSequenciaAtual && (
                <>
                  {errors.editNumberProcess && (
                    <span className="validationError">{`${errors.editNumberProcess.message}`}</span>
                  )}
                  <input
                    type="text"
                    {...register('editNumberProcess', { valueAsNumber: true })}
                  />
                </>
              )}

              <label htmlFor="tramitacao">Tramitação</label>
              {errors.tramitacao && (
                <span className="validationError">{`${errors.tramitacao.message}`}</span>
              )}
              <select id="" {...register('tramitacao')}>
                <option value=""></option>
                <option value="ambas">Ambas</option>
                <option value="atual">Atual</option>
              </select>

              <label htmlFor="metodoInsercao">
                Método de Inserção do Documento*
              </label>
              {errors.modoInsercao && (
                <span className="validationError">{`${errors.modoInsercao.message}`}</span>
              )}
              <select {...register('modoInsercao')} id="">
                <option value=""></option>
                <option value="scan">Scaner</option>
              </select>
            </div>
            <div>
              <label htmlFor="vincularIndices">
                Vincular Índices ao Documento?
              </label>
              <select {...register('vincularIndices')} id="">
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>

              <label htmlFor="sign">Assinatura</label>
              <select {...register('sign')} id="">
                <option value="eletronica">Eletrônica</option>
              </select>

              <label htmlFor="state">Status</label>
              {errors.state && (
                <span className="validationError">{`${errors.state.message}`}</span>
              )}
              <select {...register('state')} id="">
                <option value=""></option>
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>

              <label htmlFor="visibility">
                Disponível para Todos os Departamentos?
              </label>
              <select {...register('visibility')} id="">
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </div>
          </section>
        </form>
      </main>
    </NewTypeOfDocContainer>
  )
}
