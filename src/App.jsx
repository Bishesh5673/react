import "./App.css";

function App() {
  return (
    <div className="parent">
      <div className="first">

      </div>
      <div className="second">
        <div className="photo"></div>
        <div className="content">
          <p className="line">Music Composer and Producer</p>
          <h1>EREN JAEGER</h1>
          <i className="fab fa-facebook-f fa-1x"></i>
          <i className="fab fa-youtube fa-1x"></i>
          <i className="fab fa-instagram fa-1x"></i>
          <h2>PROFILE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quae modi tempora maiores, suscipit ducimus error inventore quo
            labore voluptate. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Qui, reiciendis. Quaerat accusamus culpa quis
            maxime vel laboriosam in. Aspernatur, aperiam!
          </p>
          <div className="content2">
            <div className="partners">
              <h2>PARTNERS</h2>
              <p>Partner 01</p>
              <p>Partner 02</p>
              <p>Partner 03</p>
              <p>Partner 04</p>
            </div>
            <div className="sponsors">
              <h2>SPONSORS</h2>
              <p>Sponsor 01</p>
              <p>Sponsor 02</p>
              <p>Sponsor 03</p>
              <p>Sponsor 04</p>
            </div>
          </div>
          <h2>MEDIA REACH</h2>
          <div className="media">
            <div className="box">
              <h3>530 K+</h3>
              Combined Social Followers
            </div>
            <div className="box">
              <h3>100 K+</h3>
              Email Subscribers
            </div>
            <div className="box">
              <h3>1 M</h3>
              Monthly Page Viewers
            </div>
          </div>
          <h2>CONTACT</h2>
          <div className="icons">
            <i className="fas fa-phone-flip"></i>123 456 789
            <i className="fas fa-location-dot"></i>Main Street
          </div>
          <div className="icons">
            <i className="fas fa-arrow-pointer"></i>WWW.WEBSITE.COM
            <i className="fas fa-envelope"></i> MAIL@WEBSITE.COM
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// framework->library->package->module->function
// React is a Library
// SPA + Component based arc
// SPA->single html page/index.html
// SPA passes JSon instead of html file which is much faster, no reload
// multi page passes html file on each new request

// npm create vite@latest .
// npm-> node pacckage manager / registryfor JS
// vite-> installs npm fast / npx is slow
