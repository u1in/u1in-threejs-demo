import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Renderer from "./Render";
import Camera from "./Camera";

const Controls = new OrbitControls(Camera, Renderer.domElement);

export default Controls;
