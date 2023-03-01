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



      <div className='servicos'>
       

      </div>
      
      <ul class="slider">
    <li>
          <input type="radio" id='slide1' name='slide' checked/>
          <label htmlFor="slide1"></label>
          <img src={image1} />
    </li>
    <li>
          <input type="radio" id='slide2' name='slide' checked/>
          <label htmlFor="slide2"></label>
          <img src={image2} />
    </li>
    <li>
          <input type="radio" id='slide3' name='slide' checked/>
          <label htmlFor="slide3"></label>
          <img src={image3} />
    </li>
    <li>
          <input type="radio" id='slide4' name='slide' checked/>
          <label htmlFor="slide4"></label>
          <img src={image4} />
    </li>
    <li>
          <input type="radio" id='slide5' name='slide' checked/>
          <label htmlFor="slide5"></label>
          <img src={image5} />
    </li>
</ul>

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

