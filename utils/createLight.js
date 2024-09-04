import * as THREE from "three";

const createLight = (color, position) => {
  const sphere = new THREE.SphereGeometry(0.5, 16, 8);
  const Light = new THREE.PointLight(color, 100);
  Light.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color })));
  Light.position.set(...position);
  Light.position.raw = position;
  return Light;
};

export default createLight;
