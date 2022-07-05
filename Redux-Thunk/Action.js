import axios from 'axios'
export const apidata=()=>{
    return async function(dispatch){

        const data= await axios('https://jsonplaceholder.typicode.com/users')
        dispatch(sendd(data.data))


    }

}
const sendd =(data)=>{
    if(data){
        return{
            type:'data',
            payload:data
        }

    }

}