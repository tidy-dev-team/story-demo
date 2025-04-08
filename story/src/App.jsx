import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tag from "./components/Tag"
import './App.css'

function App() {

  return (
    <div className='flex gap-4'>
      <div className='flex flex-col gap-4'>
        <Tag label="Small Outline" shape="outline" size="small" />
        <Tag label="Small Solid" shape="solid" size="small" />

        <Tag label="Medium Outline" shape="outline" size="medium" />
        <Tag label="Medium Solid" shape="solid" size="medium" />
      </div>
      <div className='flex flex-col gap-4'>
      <Tag label="Small Outline RO" shape="outline" size="small" ro="readonly" />
      <Tag label="Small Solid RO" shape="solid" size="small" ro="readonly" />

      <Tag label="Medium Outline RO" shape="outline" size="medium" ro="readonly" />
      <Tag label="Medium Solid RO" shape="solid" size="medium" ro="readonly" />
    </div>
    </div >
  )
}

export default App
