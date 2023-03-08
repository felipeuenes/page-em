import './style.css'
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'
import next from '../../images/next1.png'
import next2 from '../../images/next2.png'


export function Slider() {
    
    const $carouselImages = document.querySelector(".carouselImages")
    const $nextButton = document.querySelector(".nextButton img")
    const $previousButton = document.querySelector(".previousButton img")
    
    
    function nextImage() {
        let firstCarouselImage = document.querySelectorAll(".carouselImages img")[0]
    
        $carouselImages.style.marginLeft = "-200%"
        $carouselImages.style.transition = "margin-left 1s"
    
        setTimeout(() => {
            $carouselImages.style.transition = "none"
            $carouselImages.insertAdjacentElement("beforeend", firstCarouselImage)
            $carouselImages.style.marginLeft = "-100%"
        }, 1000);
    }
    
    function previousImage() {
        let arrayCarouselImages = document.querySelectorAll(".carouselImages img")
        let lastCarouselImage = arrayCarouselImages[arrayCarouselImages.length - 1]
    
        $carouselImages.style.marginLeft = "0%"
        $carouselImages.style.transition = "margin-left 1s"
    
        setTimeout(() => {
            $carouselImages.style.transition = "none"
            $carouselImages.insertAdjacentElement("afterbegin", lastCarouselImage)
            $carouselImages.style.marginLeft = "-100%"
        }, 1000);
    }
    
    
    let intervalNextImage = setInterval(nextImage, 2000)
    
    $nextButton.addEventListener("click", () => {
        clearInterval(intervalNextImage)
        nextImage()
    })
    $previousButton.addEventListener("click", () => {
        clearInterval(intervalNextImage)
        previousImage()
    })
    
    
    $nextButton.addEventListener("mouseover", () => {
        clearInterval(intervalNextImage)
    })
    $previousButton.addEventListener("mouseover", () => {
        clearInterval(intervalNextImage)
    })
    
    
    $carouselImages.addEventListener("mouseover", () => {
        clearInterval(intervalNextImage)
    })
    $carouselImages.addEventListener("mouseleave", () => {
        intervalNextImage = setInterval(nextImage, 2000)
    })



    return(

        <>
        
        <section className="carouselContainer">
        <div className="carouselImages">
            <img src={image1} alt=""/>
            <img src={image2} alt=""/>
            <img src={image3} alt=""/>
        </div>
        
        <button className="previousButton">
            <img src={next2} alt=""/>
        </button>

        <button className="nextButton">
            <img src={next2} alt=""/>
        </button>
    </section>    
        
        
        
        </>
    )
}