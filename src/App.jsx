import './App.css'
import imageLuana from './images/header.png'
import servicos from './images/servicos.jpg'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'


export function App() {
 

  return (
    <div className="container">
      <div className='top'>

      <img src={imageLuana} alt="empreendamais" srcset="" id='luana'/>
    <div className='video'>

      <iframe width="320" height="180" src="https://www.youtube.com/embed/M9blMqfJJ0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id='video'></iframe>
    </div>
      </div>

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
      
      <div className='content'>
          <div className='slides'>
            <input type="radio" name='slide' id='slide1' checked/>
            <input type="radio" name='slide' id='slide2'/>
            <input type="radio" name='slide' id='slide3'/>
            <input type="radio" name='slide' id='slide4'/>
            <input type="radio" name='slide' id='slide5'/>
          </div>

          <div className="slide s1">
            <img src={image1} alt="e+" srcset="" />
          </div>
          <div className="slide">
            <img src={image2} alt="e+" srcset="" />

          </div>
          <div className="slide">
            <img src={image3} alt="e+" srcset="" />

          </div>
          <div className="slide">
            <img src={image4} alt="e+" srcset="" />

          </div>
          <div className="slide">
            <img src={image5} alt="e+" srcset="" />

          </div>
        
          <div className='navegation'>
              <label className='bar' htmlFor="slide1"></label>
              <label className='bar' htmlFor="slide2"></label>
              <label className='bar' htmlFor="slide3"></label>
              <label className='bar' htmlFor="slide4"></label>
              <label className='bar' htmlFor="slide5"></label>
          </div>
      </div>

      <h1 id='onde'>ONDE ESTAMOS?</h1>
      <div>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.0004561209611!2d-39.52280767559664!3d-6.521450077744051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a2f71cca748c23%3A0x7e5168671208db6!2sPolo%20Artesanal%20de%20Juc%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1677598889575!5m2!1spt-BR!2sbr" ></iframe>

      </div>

      <h1>SAIBA MAIS</h1>

      <div className='contato'>
          <a href="https://contate.me/empreenda-mais"><button>WhatsApp</button></a>
      </div>


      <footer>
        <p>Desenvolvido por Felipe Uenes</p>
       </footer>

    </div>
  )
}

