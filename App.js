
import { Provider } from "react-redux";

import Home from "./Redux-Thunk/Home";
import { store } from "./Redux-Thunk/Store";



const App =()=>{
 

  return (
    <>
   
    <Provider store={store}>
    <Home/>
    </Provider>
   



    </>
    
  )
}

export default App;
