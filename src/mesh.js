import * as THREE from "three";
import createGeometry from "../utils/createGeometry";
import Scene from "../modules/Scence";

const mesh = () => {
  const vertices = [
    // 底前面
    { pos: [-6, 0, 0], norm: [0, -1, 0] },
    { pos: [6, 0, 0], norm: [0, -1, 0] },
    { pos: [0, 0, 6], norm: [0, -1, 0] },
    // 左前面
    { pos: [-6, 0, 0], norm: [-1, 1, 1] },
    { pos: [0, 0, 6], norm: [-1, 1, 1] },
    { pos: [0, 6, 0], norm: [-1, 1, 1] },
    // 右前面
    { pos: [6, 0, 0], norm: [1, 1, 1] },
    { pos: [0, 6, 0], norm: [1, 1, 1] },
    { pos: [0, 0, 6], norm: [1, 1, 1] },

    // 底后面
    { pos: [-6, 0, 0], norm: [0, -1, 0] },
    { pos: [0, 0, -6], norm: [0, -1, 0] },
    { pos: [6, 0, 0], norm: [0, -1, 0] },
    // 左后面
    { pos: [-6, 0, 0], norm: [-1, 1, 1] },
    { pos: [0, 6, 0], norm: [-1, 1, 1] },
    { pos: [0, 0, -6], norm: [-1, 1, 1] },
    // 右后面
    { pos: [6, 0, 0], norm: [1, 1, 1] },
    { pos: [0, 0, -6], norm: [1, 1, 1] },
    { pos: [0, 6, 0], norm: [1, 1, 1] },
  ];

  const geometry = createGeometry(vertices);

  const meterial = new THREE.MeshPhongMaterial();
  const mesh = new THREE.Mesh(geometry, meterial);
  Scene.add(mesh);
};
export default mesh;
