import logo from './logo.png';
import './style.css';
import vid1 from './1.mp4';
import vid2 from './2.mp4';
import vid3 from './3.mp4';
import vid4 from './4.mp4';
import vid5 from './5.mp4';
import adi1 from './onepiece.mp3';

function App() {
  return (
    <div className="App">
      <header>
        <a href="#" className="brand"><img className="logo" src={logo} /></a>
        <div className="menu-btn" />
        <div className="navigation">
          <div className="navigation-items">
            <a href="#">..........</a>
            {/* <a href="#">About</a>
            <a href="#">Explore</a>
            <a href="#">Gallery</a>
            <a href="#">Link</a> */}
          </div>
        </div>
      </header>
      <div className="css-typing" />

      
      <section className="home">
        

        <video className="video-slide active" src={vid1} autoPlay muted loop />
        <video className="video-slide" src={vid2} autoPlay muted loop />
        <video className="video-slide" src={vid3} autoPlay muted loop />
        <video className="video-slide" src={vid4} autoPlay muted loop />
        <video className="video-slide" src={vid5} autoPlay muted loop />
        <div className="content active luffy">
          <h1>Monkey D. Luffy</h1>
          <p id="luffy" />
        </div>
        
        <div className="content zoro">
          <h1>Roronoa Zoro</h1>
          <p id="zoro" />
        </div>

        <div className="content nami">
          <h1>Nami</h1>
          <p id="nami" />
        </div>

        <div className="content usopp">
          <h1>Usopp</h1>
          <p id="usopp" />
        </div>

        <div className="content sanji">
          <h1>Sanji</h1>
          <p id="sanji" />
        </div>

        
      

        <div className="media-icons">
          <a href="https://www.instagram.com/annandl__/?hl=en"><i className="fab fa-instagram" /></a>
          <a href="https://twitter.com/annandl_"><i className="fab fa-twitter" /></a>
        </div>
        <div className="slider-navigation">
          <div className="nav-btn active" />
          <div className="nav-btn" />
          <div className="nav-btn" />
          <div className="nav-btn" />
          <div className="nav-btn" />
        </div>
        <footer><p>© Anandela 2021</p></footer>
      </section>

      <audio id="audio" autoPlay loop>
        <source src={adi1} type="audio/mpeg"/>
      </audio>
    </div>
  );
}

export default App;
