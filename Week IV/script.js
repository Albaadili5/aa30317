import * as THREE from "three";

const scene = new THREE.Scene();

// Add directional light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5); // Corrected light positioning
scene.add(light);

// Create a cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff, shininess: 100, specular: 0x555555 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Create a sphere
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, shininess: 100, specular: 0x555555 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// Create a cylinder
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 100, specular: 0x555555 });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);

// Set object positions
cube.position.x = -4; // Corrected cube reference from 'box' to 'cube'
sphere.position.x = 4;
cylinder.position.x = -10;

// Add objects to the scene
scene.add(cylinder);
scene.add(sphere);
scene.add(cube); // Corrected reference from 'box' to 'cube'

// Camera and renderer settings
const sizes = {
  width: 800,
  height: 600
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // Corrected aspect ratio calculation
camera.position.set(2, 0, 10); // Corrected camera positioning
scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
document.getElementById("scene").appendChild(renderer.domElement);
camera.lookAt(sphere.position);

// Window resize event listener
window.addEventListener("resize", (event) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Keydown event listener for switching camera focus
window.addEventListener('keydown', (event) => { // Corrected 'keyword' to 'keydown' and 'event,key' to 'event.key'
  switch(event.key) {
    case 'b':
      camera.lookAt(cube.position); // Corrected reference from 'box' to 'cube'
      break;
    case 'c':
      camera.lookAt(cylinder.position);
      break;
    case 's':
      camera.lookAt(sphere.position);
      break;
  }
  camera.updateProjectionMatrix();
});

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);
  camera.fov += 1; // Adjust camera field of view
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
};

animate();