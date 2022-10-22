import { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Buttons from "./Buttons";

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])
  
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}

  return (
    <div>
  <Gallery artist={data.artistDisplayName} 
  objectImg={data.primaryImageSmall}></Gallery>
  <Buttons handleIterate={handleIterate}></Buttons>
  </div>
  )
  
}


export default App;
