import './yoriqnoma.css'
import Header from '../../components/header/header'

function Yoriqnoma(){
    return(
       <div id='container'>
           <Header/>
       <main id='yoriqnoma-main'>
           <p id='yoriqnoma-title'>Yo'riqnoma</p>
           <div id='iframe'>

            <iframe src="https://youtu.be/4jDDsMRoOlc" width="560" height="320"  title="This is a unique title"  ></iframe>
           </div>
            
       </main>
       </div>
    )
}
export default Yoriqnoma