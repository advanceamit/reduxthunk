import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { apidata } from './Action'

const Home = () => {
  const data=useSelector((store=>store))
  console.log(data);
 
  
  const dispatch=useDispatch()
  
  return (
    <>
    <div><button onClick={()=>dispatch(apidata())} >get data</button></div>
   <div>{data.map((elem)=>{
      console.log(elem.name)
      return(
        
      
          <li>{elem.name}</li>
        
      )
    })}</div> 
    
</>
  )
}

export default Home