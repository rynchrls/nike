import React from "react";
import { useRef, useCallback, useForwardRef, useState, useEffect } from "react";

import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger)

function Viewer() {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(null)

  const memoizedScrollAnimation = useCallback((position, target, isMobile, onUpdate) => {
    if (position && target && onUpdate) {
      scrollAnimation(position, target, isMobile, onUpdate);
    }
  }, []);



  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });
    const isMobileOrTablet = mobileAndTabletCheck()
    setIsMobile(isMobileOrTablet)
    const manager = await viewer.addPlugin(AssetManagerPlugin);

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    viewer.renderer.refreshPipeline();

    await manager.addFromPath("last.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({
      controlsEnabled: false,
    });

    if (isMobileOrTablet) {
      position.set(11.60, 3.86,9.50);
      target.set(-0.53, -0.66, 1.25);
    }

    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    memoizedScrollAnimation(position, target, isMobileOrTablet, onUpdate)

  });

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} id="canvas" />
    </div>
  );
}

export default Viewer;
