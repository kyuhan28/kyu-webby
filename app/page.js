export default function Home() {
  return (
    <div>
      <nav className="top-nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link2">About</a>
        <a href="#portfolio" className="nav-link3">Portfolio</a>
        <a href="#experience" className="nav-link4">Experience</a>
        <a href="#hobbies" className="nav-link5">Hobbies</a>
        <a href="#contact" className="nav-link6">Contact</a>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
        <img
          className="profile-icon"
          src="/charmander.png"
          alt="Profile Icon"
        />

        <div className="name-box">Kyu Han</div>
        <div className="subtitle-box">University of Pittsburgh</div>
        <div className="description-box">Class of 2028</div>

        <a
          className="social-tab"
          href="https://www.instagram.com/kyuhannnnn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
          />
        </a>

        <a
          className="social-tab social-tab-second"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="/charmander.png"
            alt="Twitter"
          />
        </a>

        <a
          className="social-tab social-tab-third"
          href="https://github.com/kyuhan28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub"
          />
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" className="section">
        <div className="about-me-box">
          <h2>About Me</h2>
          <p> more here</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="content-box">
          <h2>Portfolio</h2>
          <p>description here</p>
          <div className="project-item">
            <h3>Deployed a Website with Vercel</h3>
            <p>more here</p>
          </div>
          <div className="project-item">
            <h3>Project 2</h3>
            <p>none yet</p>
          </div>
          <div className="project-item">
            <h3>Project 3</h3>
            <p>none yet</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="content-box">
          <h2>Experience</h2>
          <p>fun stuff</p>
          <div className="experience-item">
            <h3>non</h3>
            <p>none yet</p>
          </div>
          <div className="experience-item">
            <h3>none</h3>
            <p>none yet</p>
          </div>
        </div>
      </section>

      {/* Personal Hobbies Section */}
      <section id="hobbies" className="section">
        <div className="content-box">
          <h2>Personal Hobbies</h2>
          <p>desc here</p>
          <div className="experience-item">
            <h3>none</h3>
            <p>none yet</p>
          </div>
          <div className="experience-item">
            <h3>none</h3>
            <p>none yet</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="content-box">
          <h2>Contact</h2>
          <p>Feel free to reach out to me!</p>
          <p>Email: hankyumin05@gmail.com</p>
          <p>Phone: (856) 379-5682</p>
        </div>
      </section>

    </div>
  );
}
