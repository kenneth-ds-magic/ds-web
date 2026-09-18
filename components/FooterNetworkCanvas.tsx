"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  isHub?: boolean;
  vx: number;
  vy: number;
  vz: number;
  pulsePhase: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export default function FooterNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 450;
    };

    window.addEventListener("resize", handleResize);

    // Mouse Parallax with Smooth Damping
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        mouse.targetX = (e.clientX - rect.left - width / 2) * 0.0004;
        mouse.targetY = (e.clientY - rect.top - height / 2) * 0.0004;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Expansive, Edge-to-Edge Spatial Field
    const NODE_COUNT = width < 768 ? 50 : 90;
    const nodes: Node3D[] = [];
    const spreadX = width * 1.5;
    const spreadY = height * 1.2;
    const spreadZ = 280;

    for (let i = 0; i < NODE_COUNT; i++) {
      const isHub = i % 7 === 0;
      // Distribute nodes evenly across horizontal buckets with gentle jitter
      const bucket = i / NODE_COUNT - 0.5;
      const x = bucket * spreadX + (Math.random() - 0.5) * (spreadX / NODE_COUNT) * 1.8;
      const y = (Math.random() - 0.5) * spreadY;
      const z = (Math.random() - 0.5) * spreadZ;

      nodes.push({
        x,
        y,
        z,
        baseRadius: isHub ? Math.random() * 1.8 + 2.4 : Math.random() * 1.2 + 1.2,
        isHub,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.25,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Traveling Data Packets
    const packets: DataPacket[] = [];
    const MAX_PACKETS = width < 768 ? 14 : 26;

    const spawnPacket = (fromIdx: number, toIdx: number) => {
      if (packets.length >= MAX_PACKETS) return;
      packets.push({
        fromNode: fromIdx,
        toNode: toIdx,
        progress: 0,
        speed: 0.01 + Math.random() * 0.015,
        color: Math.random() > 0.4 ? "#ffffff" : "#ff3b2b",
      });
    };

    let time = 0;

    const render = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      time += 0.015;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Gentle 3D perspective sway (avoids 90-degree sideways compaction)
      const curRotY = Math.sin(time * 0.25) * 0.12 + mouse.x;
      const curRotX = 0.04 + Math.cos(time * 0.2) * 0.06 + mouse.y;

      ctx.clearRect(0, 0, width, height);

      const fov = 450;
      const cx = width / 2;
      const cy = height / 2;

      // Continuous Fluid Floating & Seamless Boundary Wrapping
      const halfW = spreadX / 2;
      const halfH = spreadY / 2;
      const halfZ = spreadZ / 2;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz + Math.sin(time + node.x * 0.004) * 0.2;

        // Wrap around boundaries seamlessly to maintain continuous wide distribution
        if (node.x > halfW) node.x = -halfW;
        if (node.x < -halfW) node.x = halfW;
        if (node.y > halfH) node.y = -halfH;
        if (node.y < -halfH) node.y = halfH;
        if (node.z > halfZ) node.z = -halfZ;
        if (node.z < -halfZ) node.z = halfZ;
      }

      // Rotate & Project 3D Nodes to 2D Screen
      const cosY = Math.cos(curRotY);
      const sinY = Math.sin(curRotY);
      const cosX = Math.cos(curRotX);
      const sinX = Math.sin(curRotX);

      const projected = nodes.map((node) => {
        // Yaw
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;

        // Pitch
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        const scale = fov / (fov + z2 + 200);
        const sx = cx + x1 * scale;
        const sy = cy + y2 * scale;
        const alpha = Math.max(0.12, Math.min(0.95, (z2 + 200) / 400));

        return {
          sx,
          sy,
          z: z2,
          scale,
          alpha,
          radius: Math.max(0.9, node.baseRadius * scale),
          isHub: node.isHub,
          pulsePhase: node.pulsePhase,
        };
      });

      // 1. Draw Optical Links with balanced max-degree per node
      const maxConnectDist = width < 768 ? 140 : 185;
      const connectionCounts = new Uint8Array(projected.length);

      for (let i = 0; i < projected.length; i++) {
        if (connectionCounts[i] >= 4) continue;
        const p1 = projected[i];

        for (let j = i + 1; j < projected.length; j++) {
          if (connectionCounts[j] >= 4) continue;
          const p2 = projected[j];

          const dx = p1.sx - p2.sx;
          const dy = p1.sy - p2.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            connectionCounts[i]++;
            connectionCounts[j]++;

            const edgeAlpha = (1 - dist / maxConnectDist) * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = isDarkMode ? "rgba(234, 29, 5, 0.4)" : "rgba(234, 29, 5, 0.28)";
            ctx.lineWidth = isDarkMode ? 0.9 : 0.75;
            ctx.globalAlpha = edgeAlpha * (isDarkMode ? 0.65 : 0.45);
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();

            // Randomly spawn data packet along valid link
            if (Math.random() < 0.008) {
              spawnPacket(i, j);
            }
          }
        }
      }

      // 2. Render Active Traveling Data Packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const p1 = projected[pkt.fromNode];
        const p2 = projected[pkt.toNode];
        if (!p1 || !p2) continue;

        const px = p1.sx + (p2.sx - p1.sx) * pkt.progress;
        const py = p1.sy + (p2.sy - p1.sy) * pkt.progress;
        const pAlpha = (p1.alpha + p2.alpha) * 0.5 * Math.sin(pkt.progress * Math.PI);

        ctx.globalAlpha = pAlpha * (isDarkMode ? 0.95 : 0.75);
        ctx.fillStyle = pkt.color;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Packet Glow Halo
        ctx.fillStyle = "rgba(234, 29, 5, 0.45)";
        ctx.beginPath();
        ctx.arc(px, py, 5.0, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Draw 3D Network Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        if (p.isHub) {
          // Hub/Server Node
          const pulse = (Math.sin(time * 3 + p.pulsePhase) + 1) * 0.5;
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = isDarkMode ? "#ffffff" : "#ea1d05";
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, p.radius * 1.3, 0, Math.PI * 2);
          ctx.fill();

          // Hub Pulse Ring
          ctx.strokeStyle = isDarkMode ? "rgba(234, 29, 5, 0.7)" : "rgba(234, 29, 5, 0.4)";
          ctx.lineWidth = 1.2;
          ctx.globalAlpha = p.alpha * (1 - pulse * 0.6);
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, p.radius * (1.6 + pulse * 1.8), 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Standard Network Node
          ctx.globalAlpha = p.alpha * (isDarkMode ? 0.85 : 0.65);
          ctx.fillStyle = isDarkMode ? "#ea1d05" : "#ce1705";
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}
