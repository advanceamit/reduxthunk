

const Reducer =(state=[],action)=>{
    var c=[]
    
    switch (action.type) {
        case 'data':
            console.log(action.payload);

            
            c.push(...action.payload)
            console.log(c);
            return c
            
            default:return state

    }
   


}
export default Reducer