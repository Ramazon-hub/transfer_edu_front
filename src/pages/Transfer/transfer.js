import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import useAuth from '../../hooks/useAuth';
import './transfer.css'
 const  Transfer = ()=>{
    const [token] = useAuth()
     let [Universities,setUniversities]=useState([]),
     [Faculties,setFaculties]=useState([])
     let univerFrom = useRef()
     let univerTo = useRef()
     let facFrom = useRef()
     let facTo = useRef()
     let history = useHistory()
     useEffect(()=>{
         (async()=>{
             const DATA = await fetch(`http://localhost:8000/allData`,{
                 method:"GET",
                 headers: {
                     "Content-Type": "Application/json",
                    },
                    
                })
                const allData = await DATA.json()
                setUniversities( allData.allUniversities)
                
                setFaculties(allData.allFaculties)
                
            })()
            
        },[]);

        const transferSubit= async(e)=>{
            e.preventDefault()
            const formData = {
                userToken:token,
                universityFrom:univerFrom.current.value,
                facultyFrom:facFrom.current.value,
                universityTo:univerTo.current.value,
                facultyTo:facTo.current.value
            };
            console.log(formData);
            const DATA = await fetch(`http://localhost:8000/newapplication`,{
                method:"POST",
                headers: {
                  "Content-Type": "Application/json",
                },
                body: JSON.stringify(formData),
            })
            const result = await DATA.json()
            if(result){
                history.push('/')
            }else{
                alert(result.message)
            }
            
        }

       return(
        <div id='container'>
        <Header/>
        <form id='transferFrom'  onSubmit={transferSubit} >

            <div id='from' >
            <p id='transfer-text' >Qaysi oliy o'quv yurti talabasisiz ?</p>
            {
                Universities && (
                    <select ref={univerFrom}  id='section'>
                        {
                            Universities.map(u=>(
                                <option value={u.university_id} key={u.university_id}>{u.university_name}</option>
                            ))
                        }
                    </select>
                )
            }
            <p id='transfer-text' >Fakultetingizni tanlang.</p>
              {
                Faculties && (
                    <select ref={facFrom}  id='section'>
                        {
                            Faculties.map(f=>(
                                <option value={f.faculty_id} key={f.faculty_id}>{f.faculty_name}</option>
                            ))
                        }
                    </select>
                )
            }

            </div>
            <div id='to'>
            <p id='transfer-text' >Qaysi oliy o'quv yurtiga o'tmoqchisiz ?</p>

            {
                Universities && (
                    <select ref={univerTo} id='section' >
                        {
                            Universities.map(u=>(
                                <option value={u.university_id} key={u.university_id}>{u.university_name}</option>
                            ))
                        }
                    </select>
                )
            }
            <p id='transfer-text' >Ko'chirmoqchi bo'lgan fakultetingizni tanlang.</p>

            {
                Faculties && (
                    <select ref={facTo}  id='section'>
                        {
                            Faculties.map(f=>(
                                <option value={f.faculty_id} key={f.faculty_id}>{f.faculty_name}</option>
                            ))
                        }
                    </select>
                )
            }
            </div>
             
            <button id='btn' >submit</button>
        </form>

            <Footer/>
        </div>
    )
}
export default Transfer