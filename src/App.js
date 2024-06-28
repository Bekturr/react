import { useState } from "react";
import Modal from "./COMPONENTS/Modal";
import Header from "./COMPONENTS/Header";



function App() {
  
  const [text, setText] = useState([])
  const [modal, setModal] = useState(false)

  const Obj = (data) =>{
    setText([...text, data])
  }

  const Delete = () =>{

    setModal(true)    
  }

const clouseHandler = ()=>{
   setModal(false)
} 

  return (
    <div className="App">
      <Header onObj={Obj}/>
      {
        text.map((el)=>(
          <div>
           <h1>{el.text}</h1>
             <button onClick={Delete}>Delete</button>
          </div>
        ))
      }
      {modal && <Modal onClouse={clouseHandler}/>}
    </div>
  );
}

export default App;

