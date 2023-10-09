/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-part-A">
        <a href="#">About</a>
        <a href="#">Press</a>
        <a href="#">Copyright</a>
        <a href="#">Contact us</a>
        <a href="#">Creators</a>
        <a href="#">Advertise</a>
        <a href="#">Developers</a>
      </div>
      <div className="footer-part-B">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Policy & Safety</a>
        <a href="#">How YouTube works</a>
        <a href="#">Test new features</a>
      </div>
      <p className="copyright">&copy; 2023 Google LLC</p>
    </div>
  );
};

export default Footer;
