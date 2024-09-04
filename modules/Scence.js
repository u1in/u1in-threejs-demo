import * as THREE from "three";
import Lights from "./Lights";

const Scene = new THREE.Scene();
const gridHelper = new THREE.GridHelper(10, 10);

// Scene.add(gridHelper);
Lights.map((Light) => Scene.add(Light));

export default Scene;
