import Lights from "../modules/Lights";
import Subscribe from "../modules/Subscribe";

const light = () => {
  // 旋转角度，弧度制
  let degrees = Math.PI;
  // 步数，一帧转1°
  const step = Math.PI / 180;
  // 半径
  const r = 10;

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

  Subscribe.add((time) => {
    degrees = degrees + step;
    Lights.map((Light) => {
      // 获取最初坐标
      const [x, y, z] = Light.position.raw;
      // 算初始角度
      const rawDegrees = Math.atan2(z, x);
      // 计算偏移后角度
      const rawDegreesFix =
        rawDegrees < 0 ? rawDegrees + 2 * Math.PI : rawDegrees;
      // 添加初始角度偏移
      const newX = calcCosDeg(degrees + rawDegreesFix);
      const newZ = calcSinDeg(degrees + rawDegreesFix);
      Light.position.x = newX;
      Light.position.z = newZ;
    });
  });
};

export default light;
