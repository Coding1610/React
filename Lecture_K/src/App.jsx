import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const unmountComponent = () => {
    const container = document.getElementById('my-component');
    ReactDOM.unmountComponentAtNode(container);
  };

  return (
    <div className='m-10 text-2xl font-bold'>
      <div id="my-component">
        <MyComponent />
      </div>
      <button className='p-3 bg-green-400 mt-3 rounded-full' onClick={unmountComponent}>Unmount Component</button>
    </div>
  );
}

function MyComponent() {
  return <div>My Component</div>;
}

export default App;