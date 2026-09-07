"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface ConstellationProps {
  opacity?: number;
  className?: string;
}

interface DeviceNode {
  id: string;
  name: string;
  type: "server" | "desktop" | "laptop" | "smartphone" | "tablet" | "iot";
  relX: number;
  relY: number;
  iconType: string;
  ip: string;
  status: string;
  color: string;
}

interface PacketStream {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  direction: "to_server" | "from_server";
  type: string;
  size: number;
  color: string;
}

export default function NetworkConstellationBackground({
  opacity = 0.9,
  className = "",
}: ConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 300);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 400;
      height = canvas.height = canvas.parentElement?.clientHeight || 300;
    };

    window.addEventListener("resize", handleResize);

    // Compact, sleek, and well-spaced device coordinates
    const devices: DeviceNode[] = [
      {
        id: "server",
        name: "DSL Cloud Core",
        type: "server",
        relX: 0,
        relY: 0,
        iconType: "server",
        ip: "10.0.1.254",
        status: "CARRIER CLOUD // 99.99%",
        color: "#ffffff",
      },
      {
        id: "desktop",
        name: "Workstation",
        type: "desktop",
        relX: -0.32,
        relY: -0.28,
        iconType: "desktop",
        ip: "192.168.1.101",
        status: "SYNCED",
        color: "#ea1d05",
      },
      {
        id: "laptop",
        name: "Dev Laptop",
        type: "laptop",
        relX: 0.33,
        relY: -0.24,
        iconType: "laptop",
        ip: "192.168.1.102",
        status: "LIVE STREAM",
        color: "#eb1c04",
      },
      {
        id: "smartphone",
        name: "5G Phone",
        type: "smartphone",
        relX: -0.30,
        relY: 0.28,
        iconType: "smartphone",
        ip: "10.4.12.89",
        status: "eSIM OTA",
        color: "#ec4936",
      },
      {
        id: "tablet",
        name: "Field Tablet",
        type: "tablet",
        relX: 0.32,
        relY: 0.26,
        iconType: "tablet",
        ip: "192.168.1.104",
        status: "ACTIVE",
        color: "#ce1705",
      },
      {
        id: "iot",
        name: "Carrier Tower",
        type: "iot",
        relX: 0.0,
        relY: -0.38,
        iconType: "tower",
        ip: "10.0.0.1",
        status: "TRUNK",
        color: "#ffffff",
      },
    ];

    // Static ambient particles
    const ambientParticles: { x: number; y: number; radius: number; alpha: number }[] = [];
    for (let i = 0; i < 18; i++) {
      ambientParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    // Packet streams
    const packets: PacketStream[] = [];
    const packetTypes = ["JSON_API", "GSMA_eSIM", "MMS_DATA", "TLS_SYNC", "200_OK", "STREAM"];

    for (let i = 1; i < devices.length; i++) {
      packets.push({
        fromIndex: 0,
        toIndex: i,
        progress: Math.random(),
        speed: 0.007 + Math.random() * 0.008,
        direction: "from_server",
        type: packetTypes[i % packetTypes.length],
        size: 3.0,
        color: "#ffffff",
      });
      packets.push({
        fromIndex: i,
        toIndex: 0,
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.007,
        direction: "to_server",
        type: packetTypes[(i + 1) % packetTypes.length],
        size: 2.6,
        color: "#ea1d05",
      });
    }

    let serverPulseWave = 0;
    let dashOffset = 0;

    // Compact Vector Icon Renderers
    const drawCompactDeviceIcon = (
      ctx: CanvasRenderingContext2D,
      type: string,
      x: number,
      y: number,
      isDark: boolean
    ) => {
      ctx.save();
      ctx.translate(x, y);

      const strokeColor = isDark ? "#ffffff" : "#09090b";
      const accentRed = "#ea1d05";

      if (type === "server") {
        const w = 62;
        const h = 16;
        const gap = 20;

        [-gap, 0, gap].forEach((offsetY, idx) => {
          ctx.fillStyle = isDark ? "#0e0e11" : "#ffffff";
          ctx.strokeStyle = accentRed;
          ctx.lineWidth = 1.6;

          ctx.beginPath();
          ctx.roundRect(-w / 2, offsetY - h / 2, w, h, 4);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = idx === 0 ? "#22c55e" : "#ea1d05";
          ctx.beginPath();
          ctx.arc(-w / 2 + 10, offsetY, 2.4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(-w / 2 + 17, offsetY, 1.8, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)";
          ctx.lineWidth = 1.2;
          for (let g = 0; g < 3; g++) {
            ctx.beginPath();
            ctx.moveTo(-3 + g * 6, offsetY - 3);
            ctx.lineTo(-3 + g * 6, offsetY + 3);
            ctx.stroke();
          }

          ctx.fillStyle = isDark ? "#27272a" : "#e4e4e7";
          ctx.fillRect(w / 2 - 12, offsetY - 3, 6, 6);
        });
      } else if (type === "desktop") {
        const mw = 48;
        const mh = 32;

        ctx.fillStyle = isDark ? "#121215" : "#ffffff";
        ctx.strokeStyle = isDark ? "#ffffff" : "#09090b";
        ctx.lineWidth = 1.6;

        ctx.beginPath();
        ctx.roundRect(-mw / 2, -mh / 2 - 5, mw, mh, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "rgba(234, 29, 5, 0.28)";
        ctx.fillRect(-mw / 2 + 3, -mh / 2 - 2, mw - 6, mh - 6);

        ctx.strokeStyle = isDark ? "#ffffff" : "#09090b";
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(-mw / 2 + 8, -mh / 2 + 4);
        ctx.lineTo(-mw / 2 + 28, -mh / 2 + 4);
        ctx.moveTo(-mw / 2 + 8, -mh / 2 + 10);
        ctx.lineTo(-mw / 2 + 36, -mh / 2 + 10);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, mh / 2 - 5);
        ctx.lineTo(0, mh / 2 + 5);
        ctx.moveTo(-12, mh / 2 + 5);
        ctx.lineTo(12, mh / 2 + 5);
        ctx.stroke();
      } else if (type === "laptop") {
        const lw = 46;
        const lh = 28;

        ctx.fillStyle = isDark ? "#121215" : "#ffffff";
        ctx.strokeStyle = isDark ? "#ffffff" : "#09090b";
        ctx.lineWidth = 1.6;

        ctx.beginPath();
        ctx.roundRect(-lw / 2 + 4, -lh / 2 - 5, lw - 8, lh, 3);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "rgba(234, 29, 5, 0.28)";
        ctx.fillRect(-lw / 2 + 7, -lh / 2 - 2, lw - 14, lh - 6);

        ctx.beginPath();
        ctx.moveTo(-lw / 2, lh / 2 - 5);
        ctx.lineTo(lw / 2, lh / 2 - 5);
        ctx.lineTo(lw / 2 + 5, lh / 2 + 5);
        ctx.lineTo(-lw / 2 - 5, lh / 2 + 5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (type === "smartphone") {
        const pw = 24;
        const ph = 44;

        ctx.fillStyle = isDark ? "#121215" : "#ffffff";
        ctx.strokeStyle = isDark ? "#ffffff" : "#09090b";
        ctx.lineWidth = 1.6;

        ctx.beginPath();
        ctx.roundRect(-pw / 2, -ph / 2, pw, ph, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "rgba(234, 29, 5, 0.28)";
        ctx.fillRect(-pw / 2 + 3, -ph / 2 + 5, pw - 6, ph - 10);

        ctx.fillStyle = accentRed;
        ctx.fillRect(-5, -ph / 2 + 2, 10, 2);
      } else if (type === "tablet") {
        const tw = 40;
        const th = 28;

        ctx.fillStyle = isDark ? "#121215" : "#ffffff";
        ctx.strokeStyle = isDark ? "#ffffff" : "#09090b";
        ctx.lineWidth = 1.6;

        ctx.beginPath();
        ctx.roundRect(-tw / 2, -th / 2, tw, th, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "rgba(234, 29, 5, 0.28)";
        ctx.fillRect(-tw / 2 + 3, -th / 2 + 3, tw - 6, th - 6);
      } else {
        ctx.strokeStyle = accentRed;
        ctx.lineWidth = 1.8;

        ctx.beginPath();
        ctx.moveTo(0, -24);
        ctx.lineTo(-16, 18);
        ctx.moveTo(0, -24);
        ctx.lineTo(16, 18);
        ctx.moveTo(-11, 2);
        ctx.lineTo(11, 2);
        ctx.moveTo(-13, 10);
        ctx.lineTo(13, 10);
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(0, -24, 3.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const render = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");

      serverPulseWave += 0.45;
      if (serverPulseWave > 140) serverPulseWave = 0;
      dashOffset += 0.5;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.5;

      // 1. Ambient Particles
      for (let i = 0; i < ambientParticles.length; i++) {
        const pt = ambientParticles[i];
        ctx.globalAlpha = pt.alpha * (isDarkMode ? 0.6 : 0.35);
        ctx.fillStyle = isDarkMode ? "#ffffff" : "#ea1d05";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Compute Positions
      const computedPositions: { x: number; y: number; dev: DeviceNode }[] = devices.map((dev) => ({
        x: centerX + dev.relX * width,
        y: centerY + dev.relY * height,
        dev,
      }));

      const serverPos = computedPositions[0];

      // 3. Central Server Wavefronts
      for (let w = 0; w < 3; w++) {
        const waveR = (serverPulseWave + w * 45) % 140;
        const waveAlpha = (1 - waveR / 140) * (isDarkMode ? 0.35 : 0.2);

        ctx.strokeStyle = isDarkMode ? "#ea1d05" : "#cf3828";
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = waveAlpha;
        ctx.beginPath();
        ctx.arc(serverPos.x, serverPos.y, waveR + 32, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 4. Optical Laser Channels
      for (let i = 1; i < computedPositions.length; i++) {
        const target = computedPositions[i];

        const grad = ctx.createLinearGradient(serverPos.x, serverPos.y, target.x, target.y);
        grad.addColorStop(0, "rgba(234, 29, 5, 0.8)");
        grad.addColorStop(0.5, "rgba(255, 255, 255, 0.65)");
        grad.addColorStop(1, "rgba(234, 29, 5, 0.8)");

        ctx.strokeStyle = isDarkMode ? "rgba(234, 29, 5, 0.35)" : "rgba(234, 29, 5, 0.2)";
        ctx.lineWidth = 1.4;
        ctx.globalAlpha = isDarkMode ? 0.6 : 0.4;
        ctx.beginPath();
        ctx.moveTo(serverPos.x, serverPos.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.globalAlpha = isDarkMode ? 0.85 : 0.65;
        ctx.setLineDash([6, 10]);
        ctx.lineDashOffset = -dashOffset;
        ctx.beginPath();
        ctx.moveTo(serverPos.x, serverPos.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Inter-device mesh links
      const meshLinks = [
        [1, 2],
        [2, 4],
        [3, 4],
        [1, 3],
        [5, 1],
        [5, 2],
      ];

      for (const [srcIdx, dstIdx] of meshLinks) {
        const src = computedPositions[srcIdx];
        const dst = computedPositions[dstIdx];

        ctx.strokeStyle = isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)";
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = isDarkMode ? 0.45 : 0.25;
        ctx.setLineDash([3, 6]);
        ctx.beginPath();
        ctx.moveTo(src.x, src.y);
        ctx.lineTo(dst.x, dst.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 5. Data Packets
      for (let p = 0; p < packets.length; p++) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          pkt.progress = 0;
          pkt.speed = 0.006 + Math.random() * 0.007;
        }

        const src = computedPositions[pkt.fromIndex];
        const dst = computedPositions[pkt.toIndex];
        if (!src || !dst) continue;

        const px = src.x + (dst.x - src.x) * pkt.progress;
        const py = src.y + (dst.y - src.y) * pkt.progress;

        ctx.globalAlpha = isDarkMode ? 0.95 : 0.85;
        ctx.fillStyle = pkt.color;
        ctx.beginPath();
        ctx.arc(px, py, pkt.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(234, 29, 5, 0.5)";
        ctx.beginPath();
        ctx.arc(px, py, pkt.size * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 6. Draw Device Nodes
      for (let i = 0; i < computedPositions.length; i++) {
        const item = computedPositions[i];
        const dev = item.dev;

        ctx.globalAlpha = isDarkMode ? 0.24 : 0.15;
        ctx.fillStyle = "rgba(234, 29, 5, 0.4)";
        ctx.beginPath();
        ctx.arc(item.x, item.y, dev.type === "server" ? 45 : 34, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 1;
        drawCompactDeviceIcon(ctx, dev.iconType, item.x, item.y, isDarkMode);

        ctx.font = dev.type === "server" ? "bold 10px Montserrat, sans-serif" : "bold 8px Montserrat, sans-serif";
        ctx.fillStyle = isDarkMode ? "#ffffff" : "#09090b";
        ctx.globalAlpha = isDarkMode ? 0.9 : 0.8;
        ctx.textAlign = "center";
        ctx.fillText(dev.name, item.x, item.y + (dev.type === "server" ? 38 : 30));

        ctx.font = "bold 7.5px monospace";
        ctx.fillStyle = "#ea1d05";
        ctx.fillText(dev.status, item.x, item.y + (dev.type === "server" ? 48 : 39));
        ctx.textAlign = "left";
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
    />
  );
}
