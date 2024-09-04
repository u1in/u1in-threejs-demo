import * as THREE from "three";

const Renderer = new THREE.WebGLRenderer({
  antialias: true,
});
Renderer.setSize(window.innerWidth, window.innerHeight);

export default Renderer;
