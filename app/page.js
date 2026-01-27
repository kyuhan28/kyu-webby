// pages/index.js or app/page.js
export default function Home() {
  return (
    <div>
      <h1>kyu han website</h1>

      <a
        className="social-tab"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="social-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
        />
        <span>Instagram</span>
      </a>
    </div>
  );
}
