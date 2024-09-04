import * as THREE from "three";
import createLight from "../utils/createLight";

const Lights = [
  // 左上前方
  createLight(0xff0040, [-10, 10, 10]),
  // 右上前方
  createLight(0xffaa00, [10, 10, 10]),
  // 右下前方
  createLight(0x0040ff, [10, -10, 10]),
  // 左下前方
  createLight(0x80ff80, [-10, -10, 10]),
  // 左上后方
  createLight(0x80ff80, [-10, 10, -10]),
  // 右上后方
  createLight(0x0040ff, [10, 10, -10]),
  // 右下后方
  createLight(0xffaa00, [10, -10, -10]),
  // 左下后方
  createLight(0xff0040, [-10, -10, -10]),
];

export default Lights;
