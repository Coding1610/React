import './App.css'
import Function_Comp from './Components/Function_Comp.jsx'
import Class_Comp from './Components/Class_Comp.jsx'

function App() {

  return (
    <>
    <div className='w-screen h-screen flex flex-col'>
      <div className='flex justify-center items-center w-screen h-screen'>
        <Function_Comp number="404" title="Error" about="Contact Us " msg="A 404 error is a HTTP status code that indicates that the webserver cannot find the requested page or resource" btn="Go to Home Page"/>
        <Function_Comp number={199+1} title="Success" about="About Us " msg="An HTTP response status code 200 means success. The client has requested documents from the server." btn="Go to Next Page"/>
      </div>
      <div className='flex justify-center items-center w-screen h-screen'>
        <Class_Comp number="404" title="Error" about="Contact Us " msg="A 404 error is a HTTP status code that indicates that the webserver cannot find the requested page or resource" btn="Go to Home Page"/>
        <Class_Comp number="200" title="Success" about="About Us " msg="An HTTP response status code 200 means success. The client has requested documents from the server." btn="Go to Next Page"/>
      </div>
    </div>
    </>
  )
}

export default App