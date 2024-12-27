import React from "react";
import "./footer.css";
import { LiaHomeSolid } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";

const Footer = () => {
  const author = "Melissa Quintana";
  const handleScrollToTop = () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
  };

  

  return (
    <footer id="products-footer" className="footer">
      <div className="footer-content">
        <button
          onClick={handleScrollToTop}
          className="footer-scroll-button"
          aria-label="Scroll to top"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <LiaHomeSolid style={{ fontSize: "2rem", color: "#fff" }} />
        </button>
        <p>Desarrollo de aplicaciones front-end con React IBM - Coursera.</p>

        <ul className="social-icons">
          <li>
            <a
              href="https://github.com/meliqc90/shoppingreact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <LiaGithub style={{ fontSize: "1.5rem", color: "#fff" }} />
          {author} &copy; {new Date().getFullYear()}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
