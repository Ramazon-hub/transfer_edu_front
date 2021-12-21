import './home.css'
import { Link } from 'react-router-dom'
import Header from '../../components/header/header'
import heroImg from '../../images/hero-img.png'
import Footer from '../../components/footer/footer'
function Home(){

    return(
       <div id='container'>
           <Header/>
       <main id='main'>
           <div id='main-left'>
                <p id='main-title'>O'qishni ko'chirish va tiklash uchun onlayn ariza topshirish axborot tizimi</p>
                <p id='main-tizim'>Tizim haqida batafsil </p>
                <Link id='main-yoriqnoma' to='/yoriqnoma' >yo'riqnoma</Link> <br/>
                <Link id='main-kirish' to='/login'>Kirish</Link>
           </div>
           <div id='main-right'>
                <img alt='img' id='hero-img' src={heroImg} />
           </div>
       </main>
       <Footer/>
       </div>
    )
}
export default Home