import {BrowserRouter ,Route ,Routes} from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"
import Time from "./components/Time"

const App=()=>{
  return(
    <BrowserRouter>
      <div>
        <Header/>
        <div>
        <Routes>
          
          
        <Route path='/' element={
         <Home/>
        }/>
        <Route path='/time' element={
          <Time/>
        }/>
        
        </Routes>
        </div>
        
      </div>
      </BrowserRouter>
  )
}

export default App