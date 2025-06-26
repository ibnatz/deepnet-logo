// comments by Ibnat

import * as THREE from 'three';

const scene = new THREE.Scene(); // personal note: base object in Three.js, this is the thing that holds all of our 3D objects

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(); // adding object to our scene so we get something solid to look at

const loader =  new THREE.TextureLoader();
const texture = loader.load('/deepnet_lab_logo.jpeg');
texture.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.MeshBasicMaterial({color: 0x6495ED, map: texture }) // creating a material to tell Three.js how to render the object

const cube = new THREE.Mesh(geometry, material); //combining the geometry and material previously defined

scene.add(cube); //adding the cube to the scene

camera.position.z = 2; // to see the cube

function animate(){ // render loop that gets called at every frame

    requestAnimationFrame(animate); // passed in animate as the callback

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera); // telling the renderer to render the scene

}

//calling the animate method to kickstart the render loop
animate();