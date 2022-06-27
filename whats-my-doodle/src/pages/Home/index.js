import React from 'react'
import Canvas from '../../components/Canvas/Canvas';

const Home = () => {
  return (
    <h1>
        Home Page
    </h1>
    
  )
}

function canvasApp() {
  return (
    <div className="canvasApp">
      <Canvas
        width={500}
        height={300}
      />
    </div>
  );
}


export default canvasApp;
