import * as THREE from "three";
import Subscribe from "./Subscribe";

const Camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);

Camera.position.set(80, 30, 80);
Camera.lookAt(0, 0, 0);
Camera.position.degrees = Math.PI / 2;

Subscribe.add(() => {
  // 按椭圆形轨道旋转

  // 步长，一帧转0.4°
  const step = 0.4 * (Math.PI / 180);
  // 更新当前旋转角
  Camera.position.degrees = Camera.position.degrees + step;
  // 计算当前旋转角的三角形短边,为x坐标
  const fixCos = Math.cos(Camera.position.degrees);
  // 计算当前旋转角的三角形长边,为y坐标
  const fixSin = Math.sin(Camera.position.degrees);
  // 更新摄像机z位置
  Camera.position.z = 80 * 2 * fixSin;
  // 更新摄像机x位置
  Camera.position.x = 80 * 0.5 * fixCos;
  // 调整摄像机方向
  Camera.lookAt(0, 0, 0);
});

export default Camera;
