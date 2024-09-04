import * as THREE from "three";
import createLight from "../utils/createLight";
import Subscribe from "./Subscribe";

// 太阳光
const SunLight = () => {
  const sphere = new THREE.SphereGeometry(50, 64, 32);
  const Light = new THREE.PointLight(0xfee400, 20000);
  Light.add(
    new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xfee400 }))
  );
  Light.position.set(0, 0, 300);
  // 初始角度
  const rawDegrees =
    Math.atan2(0, 0) < 0 ? Math.atan2(0, 0) + 2 * Math.PI : Math.atan2(0, 0);
  // 旋转角度
  let degrees = 0;
  Subscribe.add(() => {
    // 半径
    const r = 300;
    // 计算x坐标变化
    const calcCosDeg = (degrees) => {
      // 三角形短边
      return r * Math.cos(degrees);
    };
    // 计算z坐标变化
    const calcSinDeg = (degrees) => {
      // 三角形长边
      return r * Math.sin(degrees);
    };
    // 步长，一帧转1°
    const step = 0.5 * (Math.PI / 180);
    // 下一个角度
    degrees = degrees + step;
    const newX = calcCosDeg(degrees + rawDegrees);
    const newZ = calcSinDeg(degrees + rawDegrees);
    Light.position.x = newX;
    Light.position.z = newZ;
  });
  return Light;
};

// 月光
const MoonLight = () => {
  const sphere = new THREE.SphereGeometry(1, 32, 16);
  const Light = new THREE.PointLight(0xe7e8e7, 50);
  Light.add(
    new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x686868 }))
  );
  Light.position.set(0, 0, 16);
  // 初始角度
  let rawDegrees =
    Math.atan2(0, 0) < 0 ? Math.atan2(0, 0) + 2 * Math.PI : Math.atan2(0, 0);
  rawDegrees += Math.PI;
  // 旋转角度
  let degrees = 0;
  Subscribe.add(() => {
    // 半径
    const r = 16;
    // 计算x坐标变化
    const calcCosDeg = (degrees) => {
      // 三角形短边
      return r * Math.cos(degrees);
    };
    // 计算z坐标变化
    const calcSinDeg = (degrees) => {
      // 三角形长边
      return r * Math.sin(degrees);
    };
    // 步长，一帧转3°
    const step = 1 * (Math.PI / 180);
    // 下一个角度
    degrees = degrees + step;
    const newX = calcCosDeg(degrees + rawDegrees);
    const newZ = calcSinDeg(degrees + rawDegrees);
    Light.position.x = newX;
    Light.position.z = newZ;
  });
  return Light;
};

const Lights = [SunLight(), MoonLight()];

export default Lights;
