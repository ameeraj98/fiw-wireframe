import { useEffect, useRef } from "react";
import "pannellum/build/pannellum.css";

export default function PanoramaViewer({ image }) {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    // IMPORTANT: use window.pannellum
    const viewer = window.pannellum.viewer(viewerRef.current, {
      type: "equirectangular",
      panorama: image,
      autoLoad: true,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      hfov: 110,
      pitch: 10,
      yaw: 180,
    });

    return () => {
      if (viewer) viewer.destroy();
    };
  }, [image]);

  return (
    <div
      ref={viewerRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
}