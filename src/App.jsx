import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Movies from './Header/Movies'
import Data from './data.json'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
      <Header/>
      </div>
      <div className='main'>
        {
          Data.map((item , index) => {
            return  (
              <Movies 
            key={index}
            title= {item.Title}
            year= {item.Year}
            img = {item.Poster}
            
             />
            )
            
          })
        }
        
      </div>
    </>
  )
}

export default App
