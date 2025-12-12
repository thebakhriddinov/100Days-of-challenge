import {react} from 'react';
import Clock from "./Clock"

export default function App() {
  return (
    <div className='w-full h-screen ml-auto mr-auto flex flex-col bg-black items-center'>
      <Clock/>
    </div>
  )
}