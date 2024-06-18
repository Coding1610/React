import './App.css'
import Class_Comp from './Components/Class_Comp'
import Function_Comp from './Components/Function_Comp'
import Argument_Comp from './Components/Argument_Comp'

function App() {
  return (
    <>
      <div className='flex gap-5'>
        <Function_Comp name="Function-Comp" Number="16"/>
        <Class_Comp name="Class-Comp" Number="13"/>
        <Argument_Comp/>
      </div>
    </>
  )
}

export default App