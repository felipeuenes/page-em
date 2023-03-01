import './App.css'
import imageLuana from './images/header.png'
import servicos from './images/servicos.jpg'

export function App() {
 

  return (
    <div className="container">
      <img src={imageLuana} alt="empreendamais" srcset=""/>

      <iframe width="320" height="180" src="https://www.youtube.com/embed/M9blMqfJJ0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      {/* <h1>NOSSOS SERVIÇOS</h1> */}

      <div className='servicos'>
        {/* <img src={servicos}/> */}
        {/* <ul>
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
        </ul> */}

      </div>

      <h1>ONDE ESTAMOS?</h1>
      <div>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.0004561209611!2d-39.52280767559664!3d-6.521450077744051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a2f71cca748c23%3A0x7e5168671208db6!2sPolo%20Artesanal%20de%20Juc%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1677598889575!5m2!1spt-BR!2sbr"></iframe>

      </div>

      <h1>CONTATO</h1>

      <div className='contato'>
          <button>WhatsApp</button>
      </div>

    </div>
  )
}

