import './App.css'
import imageLuana from './images/header.png'
import servicos from './images/servicos.jpg'



import { RightOutlined } from '@ant-design/icons'
import { LeftOutlined } from '@ant-design/icons/lib/icons'
import { createElement } from 'react'
import { Slider } from './components/Slider'




export function App() {
 


 
  return (
    <div className="container">
      <div className='top'>

      <img src={imageLuana} alt="empreendamais" srcset="" id='luana'/>
    <div className='video'>

      <iframe width="320" height="180" src="https://www.youtube.com/embed/M9blMqfJJ0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id='video'></iframe>
    </div>
      </div>

      <div>
          

              

      <Slider/>
             

         

        
      </div>
    <div className='txt'>
      <h1></h1>
      <p>Uma equipe preparada para orientar você empreendedor&#40;a&#41; no seu comércio/serviço</p>
<br />
      <section>
        <p>Nossa missão é orientar você empreendedor &#40;a&#41; a progredir e até mesmo criar do zero o seu negócio, através de: Cursos, mentorias, visitas, palestras, eventos, entre outros...</p>
        <br />
        <p>Semanelmente temos atendimento com a contadora para abertura e baixa de MEI, emissão de boleto DAS, parcelamento e muito mais!</p>
      </section>


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

