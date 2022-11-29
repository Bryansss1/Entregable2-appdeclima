import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Clima from '../componentes/Climapp'
import { useEffect } from 'react'
import axios from 'axios'
import Load from '../componentes/Load'
function App() {
  

  return (
    <div className="App">
    <Clima/>
    </div>
  )
}

export default App
