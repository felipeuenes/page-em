import './App.css'
import imageLuana from './images/header.png'


export function App() {
 

  return (
    <div className="container">
      <img src={imageLuana} alt="" srcset="" />

      <div className='servicos'>
        <ul>
          <li>Orientações personalizadas.</li>
          <li>Visitas de acompanhamento in loco.</li>
          <li>Capacitações estratégicas.</li>
          <li>Orientações para o crédito responsável.</li>
          <li>Orientação para abertura e baixa de MEI.</li>
          <li>Eventos de oportunidade de negócio.</li>
          <li>Intercâmbio e network.</li>
          <li>Parcerias.</li>
          <li>Atendimento semanal de serviços contábeis
para MEI e orientações.</li>
          <li>Oportunizamos acesso a vagas no mercado
de trabalho.</li>
        </ul>
      </div>


    </div>
  )
}

