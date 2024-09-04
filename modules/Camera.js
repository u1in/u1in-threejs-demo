import * as THREE from "three";

const Camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);

Camera.position.set(0, 50, 50);
Camera.lookAt(0, 0, 0);

export default Camera;
