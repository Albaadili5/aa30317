import * as THREE from "three";

const scene = new THREE.Scene();


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5); 
scene.add(light);


const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100, specular: 0x555555 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100, specular: 0x555555 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100, specular: 0x555555 });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);


cube.position.x = -4; 
sphere.position.x = 4;
cylinder.position.x = -10;


scene.add(cylinder);
scene.add(sphere);
scene.add(cube); 


const sizes = {
  width: 800,
  height: 600
};

const camera = new THREE.OrthographicCamera(-10,10,10,-10,0,120); 
camera.position.set(2, 0, 10); 
scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);

document.getElementById("scene").appendChild(renderer.domElement);


const animate = () => {
  requestAnimationFrame(animate);
  cylinder.position.x +=0.03;
  console.log(cylinder.position);
  renderer.render(scene, camera);
};

animate();