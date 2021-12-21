import './header.css'
import logo from '../../images/logo_new.png'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
function Header(){
    const [token] = useAuth()
    
    return(
       <div id='container'>
       <header id='header'>
               <Link id='logo-link' to='/'>
           <div id="logo-section">
           <img alt='img' src={logo} width={60}/>
           <p id="logo-text" >O'ZBEKISTON RESPUBLIKASI OLIY TA'LIM VA O'RTA MAXSUS TA'LIM VAZIRLIGI </p>

           </div>
               </Link>
           <ul id='header-list'>
           <li id='header-list-item'>
                   <Link id='header-link' to='/yoriqnoma'>Yo'riqnoma</Link>
               </li>
               <li id='header-list-item'>
                   <Link id='header-link' to='/register'>Ro'yxatdan o'tish</Link>
               </li>
               <li id='header-list-item '>
                   <Link id='kirish'  to='/login' >Kirish</Link>
               </li>
               {
                   token && (
                    <li id='header-list-item '>
                    <Link id='kirish'  to='/transfer' >Online ariza topshirish</Link>
                </li>
                   )
               }
           </ul>
       </header>
      
       </div>
    )
}
export default Header