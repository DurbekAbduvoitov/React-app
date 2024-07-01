import { useState } from 'react';
import './Counter.css'

export default function Counter () {
    
    let [data , setData] = useState([])

    
    function showUsers () {
        setData([
            {
                id : 1 ,
                img : "./aa/images.png" ,
                name : "Sevdiyor",
                surname : "Usmonov" ,
                age : 16 ,
                job : 'Student'
            },
            {
                id : 2,
                img : "./aa/images.png" ,
                name : "Shaxjahon",
                surname : "Ravshanov" ,
                age : 14 ,
                job : 'Developer'
            },
            {
                id : 3 ,
                img : "./aa/images.png" ,
                name : "Sevinch",
                surname : "Karimova" ,
                age : 16 ,
                job : 'Dezayner'
            }
        ])
        
}
    function handleDelete(id) {
        setData(() => {
            return data.filter((item) => {
                return item.id !== id
            })
        })
    }


   return (
    <>
        <div className="cards">
            {
                data.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <div className="imgs">
                                <img src={item.img} alt="" />
                            </div>
                            <h1>name : {item.name}</h1> 
                            <h2>Surname : {item.surname}</h2>
                            <h4>Age : {item.age}</h4>
                            <p>Job : {item.job}</p>
                            <button onClick={() => handleDelete(item.id)}>Delete Card</button>
                        </div>
                    )
                })
            }
        
        </div>
        <button onClick={showUsers}>Show users</button>
    </>
   )
}