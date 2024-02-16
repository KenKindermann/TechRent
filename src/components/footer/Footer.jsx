const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div className="px-16 py-8 flex flex-col gap-8 sm:flex-row justify-between text-center text-slate-400 max-w-screen-2xl m-auto">
        <ul>
          <li className="mb-2 text-white">Legal notices</li>
          <li>Data protection</li>
          <li>Disclaimer</li>
          <li>Imprint</li>
        </ul>
        <ul>
          <li className="mb-2 text-white">Contact</li>
          <li>tech-rent@sample.com</li>
          <li>12345 Sample City</li>
          <li>Sample Street 1</li>

          <li>+491234567</li>
        </ul>
        <ul>
          <li className="mb-2 text-white">Social media</li>
          <li>
            <a href="https://instagram.com" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank">
              Facebook
            </a>
          </li>

          <li>
            <a href="https://tiktok.com" target="_blank">
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
