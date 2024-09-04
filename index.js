import * as THREE from "three";
import Camera from "./modules/Camera";
import Renderer from "./modules/Render";
import Scene from "./modules/Scence";
import Subscribe from "./modules/Subscribe";
import OrbitControls from "./modules/OrbitControls";
import Main from "./main";

// 执行主函数
Main();

// 设置循环动画
Renderer.setAnimationLoop((time) => {
  OrbitControls.update();
  Subscribe.notice(time);
  Renderer.render(Scene, Camera);
});

// 初始化canvas
Renderer.render(Scene, Camera);
document.body.appendChild(Renderer.domElement);
