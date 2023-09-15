import React from 'react'
import 'aframe';


const Cubos = () => {
  
  return (
    <div>
    <a-scene >
    <assets>
    <img src={require('../assets/Foto .jpg')} alt="" id='foto' />
    <img src={require('../assets/contacta.jpg')} alt="" id='contacta' />
    <img src={require('../assets/Trabajo.jpg')}alt="" id='trabajo' />
    <img src={require('../assets/Sky.jpg')} alt="" id='sky' />
    
    </assets>
    <a-sky width="400" height="200" material="shader: flat; src: #sky" radius="3000" theta-length="90"></a-sky>
    <a-light type="point" intensity="1" position="-10 20 30"></a-light>
    <a-gltf-model
                src="https://cdn.glitch.global/ee1bc677-f80f-4fcb-aaa3-9ed9c5d79436/Carmen.glb?v=1689264299618"
                position="2 0 -6"
                scale=" 3 3 3  ">
      </a-gltf-model>
      <a-entity movement-controls="fly: true" position="20 5 20">
        <a-entity camera position="-18 0 -18" look-controls></a-entity>
        <a-entity cursor="rayOrigin:mouse"></a-entity>
        <a-entity laser-controls="hand: right"></a-entity>
      </a-entity>
      
      
      
      
      <a-box
        position="4.43669 5.30455 -5.82318" rotation="35.073 114.489 35.073" color="white" src="#foto" animation="property: rotation; to: 0 360 0; dur: 4000; easing: linear; loop: true" material="" geometry="">
      </a-box>
      <a-box
        position="-1 5 -5" 
        rotation="45 45 45" 
        color="white"
        src="#contacta"
        animation="property: rotation; to: 0 360 0; dur: 4000; easing: linear; loop: true">
      </a-box> 
      <a-box position="2.00045 8.39682 -5.80646" rotation="14.212601100096347 260.5117922993256 14.212601100096347" color="white" src="#trabajo" animation="property: rotation; to: 0 360 0; dur: 4000; easing: linear; loop: true" material="" geometry="">
      </a-box>
      <h1>  </h1> 
     
    </a-scene>
    </div>
  )
}

export default Cubos;
