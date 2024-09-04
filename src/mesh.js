import * as THREE from "three";
import createGeometry from "../utils/createGeometry";
import Scene from "../modules/Scence";
import Subscribe from "../modules/Subscribe";

const mesh = () => {
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(6, 64, 32),
    new THREE.MeshPhongMaterial({ color: 0x01aeed })
  );
  sphere.position.set(0, 0, 0);
  Scene.add(sphere);
};
export default mesh;
