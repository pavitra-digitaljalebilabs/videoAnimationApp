import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const defaultModification={
    "Background": "https://creatomate.com/files/assets/06d0457b-94b4-4a63-b950-c942fc1a9be0",
    "Text 1": "text.name",
    "Text 5": "welcome to new slide",
    "Text 2": "This is just an example template",
    "Text 6": "this is third text",
    "Text 3": "Used in the quick start guide",
    "Text 4": "creatomate.com/docs",
    "Image":"https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg"
  }
  const [inputs,setInputs] =useState(defaultModification)
  const [video,setVideo]=useState('')
  const makeVideo=async()=>{
    const {data}=await axios.post('http://localhost:3000/video',{...inputs})
    setVideo(data)

  }
  const handleModificationValue=(e)=>{
    const {name,value} = e.target
    setInputs(prevValue=>({...prevValue,[name]:value}))
  }
  return (
    <div className="App">
      {Object.keys(inputs).map(key=><div>
        <label for="input">{key}</label>
        <input name={key} value={inputs[key]} onChange={handleModificationValue}/>
      </div>)}
      <button onClick={makeVideo}>Make Video</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
        <h3>{video?'output':'sample'} Video</h3>
     {video&&<video id="bg-video" autoPlay  loop muted>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>}
    </div>
  );
}

export default App;
