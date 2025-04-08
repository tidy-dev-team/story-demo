import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tag from "./components/Tag"
import './App.css'

function App() {

  return (
    <div className='flex flex-col gap-4'>
      <Tag label="Small Outline" shape="outline" size="small" />
      <Tag label="Small Solid" shape="solid" size="small" />
      
      <Tag label="Medium Outline" shape="outline" size="medium" />
      <Tag label="Medium Solid" shape="solid" size="medium" />
    </div>
  )
}

export default App
