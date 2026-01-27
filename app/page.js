// pages/index.js or app/page.js
export default function Home() {
  return (
    <div>
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

      <div className="about-me-box">
        <h2>About Me</h2>
        <p>pop</p>
      </div>

    </div>
  );
}
