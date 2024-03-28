import './GreetSection.css';
import pictureOfMe from "../../Images/picture-of-me-asd.png"

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var greetSection = document.querySelector('.greet-section');
  var windowHeight = window.innerHeight;
  var startFadePosition = windowHeight * 0.3;

  if (scrollTop > startFadePosition) {
    var opacity = 1 - ((scrollTop - startFadePosition) / (windowHeight * 0.3));
    opacity = Math.min(1, Math.max(0, opacity));
    greetSection.style.opacity = opacity.toFixed(2);
    var scaleFactor = 1 - ((scrollTop - startFadePosition) / (windowHeight * 1.5));
    scaleFactor = Math.min(1, Math.max(0.5, scaleFactor));
    greetSection.style.transform = 'scale(' + scaleFactor.toFixed(2) + ')';
  } else {
    greetSection.style.opacity = 1;
  }
});

function GreetSection() {
    return (
        <div className="greet-section">
            <div className='greet-text'>
               <h1>My name is <span>Ducza Szabolcs</span> and this is my portfolio page</h1>
               <p>Scroll down to learn more about me! &darr;</p>
            </div>
            <div className='greet-image-container'>
                <div></div>
                <img src={pictureOfMe} alt='' className='greet-image' draggable={false}/>
            </div>
        </div>
    )
}

export default GreetSection
