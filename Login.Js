
import React from "react";
import "./Style.css"; 

function Login() {
  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="logo">
          <span>
            <a href="Home.html">
              <img src="pictures/LogoNav.png" alt="Logo ODC" className="logo-img" />
            </a>
          </span>
        </div>
        <div
          className="menu-toggle"
          onClick={() => {/* toggleMenu logic ici si besoin */}}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === "Enter") {/* toggleMenu logic ici */} }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="menu">
          <li><a href="Home.html">Accueil</a></li>
          <li><a href="Learn.html">Apprendre</a></li>
          <li><a href="Hire.html">Postuler</a></li>
          <li><a href="Login.html" className="signup">S'inscrire</a></li>
        </ul>
      </nav>

      <main>
        <div className="login-container">
          <h2 className="LoginTitle">Connexion</h2>
          <form className="login-form">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn-confirm">
              Se connecter
            </button>
          </form>
          <div className="login-link">
            Pas encore de compte ?{" "}
            <a href="/register" className="connect-link">
              S'inscrire
            </a>
          </div>
        </div>
      </main>

      <footer className="custom-footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="pictures/LogoNav.png" alt="Logo ODC" />
          </div>
          <div className="footer-contact">
            <p>+225 27 34 56 78 34</p>
            <p>Orangedigital@Centers.com</p>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <span>© Copyright By Cohorte 7 ODA</span>
        </div>
      </footer>
    </div>
  );
}

export default Login;