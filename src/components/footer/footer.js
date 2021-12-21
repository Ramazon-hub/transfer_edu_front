import "./footer.css";
import facebook from "../../images/facebook.svg";
import telegram from "../../images/telegram.svg";
import youtube from "../../images/youtube.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="container">
        <div id="footer">
      <div id="footer-content">
        <p>© O‘ZBEKISTON RESPUBLIKASI OLIY VA O‘RTA MAXSUS TA'LIM VAZIRLIGI</p>
        <div id="footer-right">
          <Link id="footer-icon" to='www.facebook.com' >
            <img alt="img" src={facebook} width={18} />
          </Link>
          <Link id="footer-icon" to='t.me/joinchat/AAAAAFLFypj1KkaGQU14Dg' >
            <img  alt="img"src={telegram} width={30} />
          </Link>
          <Link id="footer-icon" to='www.youtube.com/channel/UC62RfVrE7-JfA8JFBMO3WUA' > 
            <img alt="img" src={youtube} width={35} />
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Footer;
