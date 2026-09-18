"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

// Comprehensive geographic landmass polygons [lat, lon]
const WORLD_LANDMASSES: [number, number][][] = [
  // Africa & Madagascar
  [
    [37.1, 10.0], [36.8, 3.0], [35.8, -5.6], [32.0, -9.5], [28.0, -12.5], [21.0, -17.0],
    [14.7, -17.5], [11.5, -16.0], [8.0, -13.0], [4.5, -7.5], [5.0, -2.5], [6.0, 2.5],
    [4.5, 8.5], [2.0, 9.5], [-5.0, 12.0], [-12.5, 13.5], [-17.0, 11.8], [-22.5, 14.5],
    [-28.5, 16.5], [-33.0, 18.0], [-34.8, 20.0], [-34.0, 26.0], [-30.0, 31.0], [-25.0, 33.0],
    [-17.0, 39.0], [-11.0, 40.5], [-4.0, 39.5], [-0.5, 42.5], [5.0, 48.0], [10.4, 51.2],
    [11.8, 43.5], [15.5, 41.5], [22.0, 36.8], [27.5, 34.0], [31.2, 32.3], [32.0, 24.0],
    [32.8, 20.0], [31.0, 14.0], [34.0, 11.0], [37.1, 10.0]
  ],
  // Madagascar
  [
    [-12.2, 49.3], [-16.0, 49.8], [-25.0, 47.0], [-25.5, 45.0], [-20.0, 43.5], [-13.5, 48.0], [-12.2, 49.3]
  ],
  // Europe & Mediterranean
  [
    [36.0, -5.5], [37.0, -9.0], [43.0, -9.5], [43.5, -1.5], [47.5, -3.0], [49.5, -1.5],
    [51.0, 2.0], [53.5, 7.0], [55.0, 8.5], [57.5, 10.5], [56.0, 13.0], [56.0, 16.0],
    [60.0, 19.0], [65.0, 22.0], [70.0, 28.0], [71.0, 26.0], [68.0, 14.0], [62.0, 5.0],
    [58.0, 6.0], [54.0, 9.0], [51.5, 3.5], [48.0, 0.0], [44.0, -1.0], [42.0, 3.0],
    [43.5, 7.0], [44.0, 10.0], [41.0, 9.0], [38.0, 15.5], [37.0, 15.0], [40.5, 18.0],
    [45.5, 13.5], [44.0, 15.0], [41.0, 19.5], [38.0, 24.0], [40.0, 24.0], [41.0, 29.0],
    [45.0, 36.0], [47.0, 38.0], [46.5, 30.0], [44.0, 28.5], [42.0, 28.0], [36.5, 23.0],
    [37.0, 22.0], [36.0, -5.5]
  ],
  // UK & Ireland
  [
    [50.0, -5.0], [52.0, -5.5], [55.0, -6.0], [58.5, -5.0], [58.0, -2.0], [55.5, -1.5],
    [52.5, 1.8], [51.0, 1.4], [50.5, -1.0], [50.0, -5.0]
  ],
  [
    [51.5, -9.5], [54.0, -10.0], [55.3, -7.5], [54.0, -6.0], [52.0, -6.5], [51.5, -9.5]
  ],
  // Asia & Middle East
  [
    [41.0, 29.0], [37.0, 36.0], [33.5, 35.5], [31.0, 34.5], [28.0, 34.5], [22.0, 39.0],
    [13.0, 43.0], [12.5, 45.0], [14.5, 53.5], [22.5, 59.5], [25.0, 56.5], [27.0, 50.0],
    [30.0, 48.0], [29.0, 50.5], [26.0, 56.5], [25.0, 61.5], [24.0, 67.5], [19.0, 72.8],
    [10.0, 76.0], [8.0, 77.5], [13.0, 80.0], [17.0, 82.5], [21.5, 87.0], [22.0, 91.5],
    [16.0, 96.0], [10.0, 98.5], [4.0, 101.0], [1.5, 104.0], [6.0, 102.0], [10.0, 104.0],
    [11.0, 108.5], [16.0, 108.0], [21.0, 108.0], [22.5, 114.0], [25.0, 119.0], [30.0, 122.0],
    [37.0, 122.5], [39.0, 127.5], [34.5, 128.5], [38.0, 129.0], [42.0, 131.0], [48.0, 140.5],
    [53.0, 141.0], [58.0, 162.0], [65.0, 170.0], [69.0, 180.0], [72.0, 140.0], [77.0, 105.0],
    [73.0, 80.0], [70.0, 60.0], [55.0, 60.0], [45.0, 50.0], [40.0, 48.0], [42.0, 42.0],
    [41.0, 29.0]
  ],
  // India Subcontinent
  [
    [24.0, 68.0], [21.0, 70.0], [19.0, 73.0], [15.0, 74.0], [10.0, 76.0], [8.0, 77.5],
    [10.0, 79.5], [13.0, 80.2], [16.0, 82.0], [21.0, 87.0], [22.5, 89.0], [24.0, 68.0]
  ],
  // Japan
  [
    [31.0, 130.5], [33.5, 133.5], [35.5, 139.5], [41.5, 141.0], [45.5, 142.0], [43.0, 145.5],
    [38.0, 141.5], [35.0, 136.0], [33.5, 130.5], [31.0, 130.5]
  ],
  // North America
  [
    [7.5, -77.5], [9.0, -83.0], [14.0, -88.0], [18.5, -92.5], [21.5, -97.5], [26.0, -97.0],
    [29.0, -95.0], [29.5, -89.0], [25.0, -80.5], [30.5, -81.5], [35.0, -75.5], [41.0, -72.0],
    [45.0, -66.0], [47.0, -60.0], [52.0, -56.0], [58.0, -62.0], [62.0, -75.0], [65.0, -85.0],
    [70.0, -115.0], [71.0, -135.0], [71.0, -155.0], [65.0, -168.0], [60.0, -165.0],
    [55.0, -160.0], [58.0, -137.0], [54.0, -130.0], [48.0, -125.0], [38.0, -123.0],
    [32.0, -117.0], [23.0, -110.0], [19.0, -104.0], [15.0, -93.0], [7.5, -77.5]
  ],
  // South America
  [
    [12.0, -72.0], [10.5, -62.0], [6.0, -52.0], [-2.0, -44.0], [-5.0, -35.0], [-13.0, -38.5],
    [-23.0, -42.0], [-32.0, -52.0], [-38.0, -57.5], [-46.0, -65.5], [-55.0, -66.0],
    [-52.0, -75.0], [-40.0, -74.0], [-30.0, -71.5], [-18.0, -70.5], [-5.0, -81.0],
    [2.0, -78.0], [8.5, -77.0], [12.0, -72.0]
  ],
  // Australia
  [
    [-11.5, 142.5], [-15.0, 145.5], [-24.0, 153.0], [-32.0, 152.5], [-37.5, 150.0],
    [-38.5, 145.0], [-35.5, 137.0], [-32.0, 132.0], [-34.0, 122.0], [-34.5, 115.0],
    [-28.0, 114.0], [-22.0, 114.0], [-16.5, 123.0], [-14.0, 129.0], [-12.0, 136.0],
    [-11.5, 142.5]
  ],
  // New Zealand
  [
    [-35.0, 173.0], [-38.0, 178.0], [-41.5, 175.0], [-41.0, 172.0], [-35.0, 173.0]
  ]
];

// Expanded Network Destinations Across Africa and Worldwide
interface HubLocation {
  name: string;
  lat: number;
  lon: number;
  region: "HQ" | "Africa" | "Global";
  isHQ?: boolean;
}

const NETWORK_HUBS: HubLocation[] = [
  // --- HQ Anchor ---
  { name: "DSL HQ (Entebbe / Kampala)", lat: 0.05, lon: 32.46, region: "HQ", isHQ: true },

  // --- East, Central & Southern Africa ---
  { name: "Nairobi (Kenya)", lat: -1.29, lon: 36.82, region: "Africa" },
  { name: "Kigali (Rwanda)", lat: -1.94, lon: 30.06, region: "Africa" },
  { name: "Dar es Salaam (Tanzania)", lat: -6.79, lon: 39.28, region: "Africa" },
  { name: "Addis Ababa (Ethiopia)", lat: 9.03, lon: 38.74, region: "Africa" },
  { name: "Johannesburg (South Africa)", lat: -26.2, lon: 28.04, region: "Africa" },
  { name: "Cape Town (South Africa)", lat: -33.92, lon: 18.42, region: "Africa" },
  { name: "Lusaka (Zambia)", lat: -15.39, lon: 28.32, region: "Africa" },
  { name: "Harare (Zimbabwe)", lat: -17.82, lon: 31.05, region: "Africa" },
  { name: "Maputo (Mozambique)", lat: -25.97, lon: 32.58, region: "Africa" },
  { name: "Kinshasa (DRC)", lat: -4.44, lon: 15.26, region: "Africa" },
  { name: "Luanda (Angola)", lat: -8.84, lon: 13.23, region: "Africa" },

  // --- West & North Africa ---
  { name: "Lagos (Nigeria)", lat: 6.52, lon: 3.37, region: "Africa" },
  { name: "Accra (Ghana)", lat: 5.60, lon: -0.18, region: "Africa" },
  { name: "Abidjan (Ivory Coast)", lat: 5.36, lon: -4.01, region: "Africa" },
  { name: "Dakar (Senegal)", lat: 14.71, lon: -17.47, region: "Africa" },
  { name: "Cairo (Egypt)", lat: 30.04, lon: 31.23, region: "Africa" },
  { name: "Casablanca (Morocco)", lat: 33.57, lon: -7.58, region: "Africa" },
  { name: "Algiers (Algeria)", lat: 36.75, lon: 3.05, region: "Africa" },
  { name: "Port Louis (Mauritius)", lat: -20.16, lon: 57.50, region: "Africa" },

  // --- Europe ---
  { name: "London (UK)", lat: 51.5, lon: -0.12, region: "Global" },
  { name: "Frankfurt (Germany)", lat: 50.11, lon: 8.68, region: "Global" },
  { name: "Paris (France)", lat: 48.85, lon: 2.35, region: "Global" },
  { name: "Amsterdam (Netherlands)", lat: 52.37, lon: 4.89, region: "Global" },
  { name: "Stockholm (Sweden)", lat: 59.32, lon: 18.06, region: "Global" },
  { name: "Madrid (Spain)", lat: 40.41, lon: -3.70, region: "Global" },
  { name: "Rome (Italy)", lat: 41.90, lon: 12.49, region: "Global" },

  // --- Middle East & Asia ---
  { name: "Dubai (UAE)", lat: 25.2, lon: 55.27, region: "Global" },
  { name: "Riyadh (Saudi Arabia)", lat: 24.71, lon: 46.67, region: "Global" },
  { name: "Mumbai (India)", lat: 19.07, lon: 72.87, region: "Global" },
  { name: "New Delhi (India)", lat: 28.61, lon: 77.20, region: "Global" },
  { name: "Singapore", lat: 1.35, lon: 103.82, region: "Global" },
  { name: "Tokyo (Japan)", lat: 35.67, lon: 139.65, region: "Global" },
  { name: "Hong Kong", lat: 22.31, lon: 114.16, region: "Global" },
  { name: "Shanghai (China)", lat: 31.23, lon: 121.47, region: "Global" },
  { name: "Seoul (South Korea)", lat: 37.56, lon: 126.97, region: "Global" },
  { name: "Jakarta (Indonesia)", lat: -6.20, lon: 106.84, region: "Global" },
  { name: "Sydney (Australia)", lat: -33.86, lon: 151.2, region: "Global" },
  { name: "Auckland (New Zealand)", lat: -36.84, lon: 174.76, region: "Global" },

  // --- Americas ---
  { name: "New York (USA)", lat: 40.71, lon: -74.0, region: "Global" },
  { name: "San Francisco (USA)", lat: 37.77, lon: -122.41, region: "Global" },
  { name: "Chicago (USA)", lat: 41.87, lon: -87.62, region: "Global" },
  { name: "Toronto (Canada)", lat: 43.65, lon: -79.38, region: "Global" },
  { name: "São Paulo (Brazil)", lat: -23.55, lon: -46.63, region: "Global" },
  { name: "Buenos Aires (Argentina)", lat: -34.60, lon: -58.38, region: "Global" },
  { name: "Mexico City (Mexico)", lat: 19.43, lon: -99.13, region: "Global" },
];

function isPointInPolygon(lat: number, lon: number, polygon: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][1], yi = polygon[i][0];
    const xj = polygon[j][1], yj = polygon[j][0];

    const intersect = ((yi > lat) !== (yj > lat)) &&
      (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

export default function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse drag controls
    let mouse = {
      isDown: false,
      lastX: 0,
      lastY: 0,
    };

    // ================= GLOBE POSITION & TILT CONTROLS =================
    // rotY: Horizontal starting rotation angle (longitude center)
    // rotX: Vertical tilt angle (0.0 = equator in exact vertical center, positive tilts north down, negative tilts north up)
    // autoRotSpeed: Speed of continuous rotation
    let rotY = -0.55; 
    let rotX = 0.04;  // Perfectly balanced center tilt (Africa at equator center)
    let autoRotSpeed = 0.003;

    const getGlobeMetrics = (w: number, h: number) => {
      const dynamicRadius = Math.min(w, h) * (w < 768 ? 0.38 : 0.33);
      const center = {
        x: w > 1024 ? w * 0.68 : w * 0.5,
        y: h * 0.50,
      };
      return { dynamicRadius, center };
    };

    const isPointerOnGlobe = (clientX: number, clientY: number) => {
      if (!canvas) return false;
      const rect = canvas.getBoundingClientRect();
      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        return false;
      }
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const { dynamicRadius, center } = getGlobeMetrics(width, height);
      const dx = x - center.x;
      const dy = y - center.y;
      return dx * dx + dy * dy <= (dynamicRadius * 1.05) * (dynamicRadius * 1.05);
    };

    const updateCursor = (clientX: number, clientY: number) => {
      if (!canvas) return;
      if (mouse.isDown) {
        canvas.style.cursor = "grabbing";
      } else if (isPointerOnGlobe(clientX, clientY)) {
        canvas.style.cursor = "grab";
      } else {
        canvas.style.cursor = "default";
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (mouse.isDown) {
        const deltaX = x - mouse.lastX;
        const deltaY = y - mouse.lastY;
        rotY += deltaX * 0.005;
        rotX -= deltaY * 0.005;
        rotX = Math.max(-0.85, Math.min(0.85, rotX));
      }

      mouse.lastX = x;
      mouse.lastY = y;
      updateCursor(e.clientX, e.clientY);
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (isPointerOnGlobe(e.clientX, e.clientY)) {
        mouse.isDown = true;
        const rect = canvas.getBoundingClientRect();
        mouse.lastX = e.clientX - rect.left;
        mouse.lastY = e.clientY - rect.top;
        if (canvas) canvas.style.cursor = "grabbing";
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (mouse.isDown) {
        mouse.isDown = false;
        updateCursor(e.clientX, e.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        if (isPointerOnGlobe(touch.clientX, touch.clientY)) {
          mouse.isDown = true;
          const rect = canvas.getBoundingClientRect();
          mouse.lastX = touch.clientX - rect.left;
          mouse.lastY = touch.clientY - rect.top;
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (mouse.isDown && e.touches.length === 1) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        const deltaX = x - mouse.lastX;
        const deltaY = y - mouse.lastY;
        rotY += deltaX * 0.005;
        rotX -= deltaY * 0.005;
        rotX = Math.max(-0.85, Math.min(0.85, rotX));
        mouse.lastX = x;
        mouse.lastY = y;
      }
    };

    const handleTouchEnd = () => {
      mouse.isDown = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    // Massive Dense Geographic Nodes Collection (~1,800+ Nodes)
    interface GeoNode {
      lat: number;
      lon: number;
      baseRadius: number;
      isCoastline?: boolean;
      isHub?: boolean;
      isHQ?: boolean;
      region?: string;
      name?: string;
    }

    const landNodes: GeoNode[] = [];

    // 1. High-Density Coastlines
    WORLD_LANDMASSES.forEach((polygon) => {
      for (let i = 0; i < polygon.length - 1; i++) {
        const [lat1, lon1] = polygon[i];
        const [lat2, lon2] = polygon[i + 1];
        const segSteps = 8;
        for (let s = 0; s <= segSteps; s++) {
          const lat = lat1 + ((lat2 - lat1) * s) / segSteps;
          const lon = lon1 + ((lon2 - lon1) * s) / segSteps;
          landNodes.push({
            lat,
            lon,
            baseRadius: 1.6,
            isCoastline: true,
          });
        }
      }
    });

    // 2. High-Density Interior Grid (step size 2.5 x 3.0 degrees for rich coverage)
    for (let lat = -55; lat <= 70; lat += 2.5) {
      for (let lon = -180; lon <= 180; lon += 3.0) {
        let inContinent = false;
        for (const polygon of WORLD_LANDMASSES) {
          if (isPointInPolygon(lat, lon, polygon)) {
            inContinent = true;
            break;
          }
        }
        if (inContinent) {
          landNodes.push({
            lat: lat + (Math.random() - 0.5) * 1.0,
            lon: lon + (Math.random() - 0.5) * 1.0,
            baseRadius: Math.random() * 1.3 + 1.0,
          });
        }
      }
    }

    // 3. Add All Network Hubs
    NETWORK_HUBS.forEach((hub) => {
      landNodes.push({
        lat: hub.lat,
        lon: hub.lon,
        baseRadius: hub.isHQ ? 5.8 : 3.6,
        isHub: true,
        isHQ: hub.isHQ,
        region: hub.region,
        name: hub.name,
      });
    });

    // Active Beams: Dual routes (From HQ to Africa and Global gateways, and Inter-Regional links)
    interface BeamPacket {
      fromLat: number;
      fromLon: number;
      toLat: number;
      toLon: number;
      progress: number;
      speed: number;
      color: string;
      isAfricanLink?: boolean;
    }

    const beams: BeamPacket[] = [];

    // Hub-and-Spoke from DSL HQ to all hubs
    NETWORK_HUBS.filter((h) => !h.isHQ).forEach((h) => {
      beams.push({
        fromLat: 0.05,
        fromLon: 32.46,
        toLat: h.lat,
        toLon: h.lon,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.007,
        color: h.region === "Africa" ? "#ea1d05" : "#eb1c04",
        isAfricanLink: h.region === "Africa",
      });
    });

    // Cross-continental major trunk routes (London <-> New York, Nairobi <-> Johannesburg, Dubai <-> Singapore, etc.)
    const crossRoutes = [
      { from: "London (UK)", to: "New York (USA)" },
      { from: "Nairobi (Kenya)", to: "Johannesburg (South Africa)" },
      { from: "Lagos (Nigeria)", to: "Accra (Ghana)" },
      { from: "Cairo (Egypt)", to: "Dubai (UAE)" },
      { from: "Frankfurt (Germany)", to: "Singapore" },
      { from: "Tokyo (Japan)", to: "San Francisco (USA)" },
      { from: "São Paulo (Brazil)", to: "Johannesburg (South Africa)" },
      { from: "Singapore", to: "Sydney (Australia)" },
      { from: "Nairobi (Kenya)", to: "Dar es Salaam (Tanzania)" },
      { from: "Kigali (Rwanda)", to: "DSL HQ (Entebbe / Kampala)" },
    ];

    crossRoutes.forEach((route) => {
      const src = NETWORK_HUBS.find((h) => h.name.includes(route.from.split(" ")[0]));
      const dst = NETWORK_HUBS.find((h) => h.name.includes(route.to.split(" ")[0]));
      if (src && dst) {
        beams.push({
          fromLat: src.lat,
          fromLon: src.lon,
          toLat: dst.lat,
          toLon: dst.lon,
          progress: Math.random(),
          speed: 0.006 + Math.random() * 0.006,
          color: "#ff3b2b",
        });
      }
    });

    // Math: Lat/Lon to 3D Sphere (North is UP)
    const latLonTo3D = (lat: number, lon: number, radius: number) => {
      const latRad = (lat * Math.PI) / 180;
      const lonRad = (lon * Math.PI) / 180;

      const x = radius * Math.cos(latRad) * Math.sin(lonRad);
      const y = -radius * Math.sin(latRad);
      const z = radius * Math.cos(latRad) * Math.cos(lonRad);

      return { x, y, z };
    };

    // Math: 3D Matrix Rotation (Yaw & Pitch)
    const rotate3D = (x: number, y: number, z: number, angleX: number, angleY: number) => {
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      return { x: x1, y: y2, z: z2 };
    };

    let pulseTimer = 0;

    const render = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");

      if (!mouse.isDown) {
        rotY += autoRotSpeed;
      }
      pulseTimer += 0.04;

      ctx.clearRect(0, 0, width, height);

      // ================= GLOBE SCREEN SIZING & POSITIONING =================
      const { dynamicRadius, center } = getGlobeMetrics(width, height);

      // 1. Shaded Planet Body
      const planetShade = ctx.createRadialGradient(
        center.x - dynamicRadius * 0.35,
        center.y - dynamicRadius * 0.35,
        dynamicRadius * 0.1,
        center.x,
        center.y,
        dynamicRadius
      );
      if (isDarkMode) {
        planetShade.addColorStop(0, "rgba(28, 8, 12, 0.95)");
        planetShade.addColorStop(0.65, "rgba(14, 5, 8, 0.98)");
        planetShade.addColorStop(1, "rgba(0, 0, 0, 1)");
      } else {
        planetShade.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        planetShade.addColorStop(0.7, "rgba(240, 242, 245, 0.9)");
        planetShade.addColorStop(1, "rgba(215, 220, 228, 0.6)");
      }

      ctx.fillStyle = planetShade;
      ctx.beginPath();
      ctx.arc(center.x, center.y, dynamicRadius, 0, Math.PI * 2);
      ctx.fill();

      // Atmospheric Outer Glow Halo
      const haloGrad = ctx.createRadialGradient(
        center.x,
        center.y,
        dynamicRadius * 0.92,
        center.x,
        center.y,
        dynamicRadius * 1.32
      );
      if (isDarkMode) {
        haloGrad.addColorStop(0, "rgba(234, 29, 5, 0.48)");
        haloGrad.addColorStop(0.35, "rgba(234, 29, 5, 0.16)");
        haloGrad.addColorStop(1, "transparent");
      } else {
        haloGrad.addColorStop(0, "rgba(234, 29, 5, 0.30)");
        haloGrad.addColorStop(0.35, "rgba(234, 29, 5, 0.08)");
        haloGrad.addColorStop(1, "transparent");
      }
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(center.x, center.y, dynamicRadius * 1.32, 0, Math.PI * 2);
      ctx.fill();

      // 2. Latitude & Longitude Graticule Lines
      const drawGraticuleParallel = (lat: number) => {
        ctx.beginPath();
        const steps = 72;
        let first = true;
        for (let i = 0; i <= steps; i++) {
          const lon = -180 + (i * 360) / steps;
          const pos3D = latLonTo3D(lat, lon, dynamicRadius);
          const rot = rotate3D(pos3D.x, pos3D.y, pos3D.z, rotX, rotY);

          if (rot.z > -dynamicRadius * 0.1) {
            const sx = center.x + rot.x;
            const sy = center.y + rot.y;
            if (first) {
              ctx.moveTo(sx, sy);
              first = false;
            } else {
              ctx.lineTo(sx, sy);
            }
          } else {
            first = true;
          }
        }
        ctx.strokeStyle = isDarkMode ? (lat === 0 ? "rgba(234, 29, 5, 0.35)" : "rgba(255, 255, 255, 0.09)") : (lat === 0 ? "rgba(234, 29, 5, 0.25)" : "rgba(0, 0, 0, 0.08)");
        ctx.lineWidth = lat === 0 ? 1.4 : 0.8;
        ctx.stroke();
      };

      const drawGraticuleMeridian = (lon: number) => {
        ctx.beginPath();
        const steps = 50;
        let first = true;
        for (let i = 0; i <= steps; i++) {
          const lat = -80 + (i * 160) / steps;
          const pos3D = latLonTo3D(lat, lon, dynamicRadius);
          const rot = rotate3D(pos3D.x, pos3D.y, pos3D.z, rotX, rotY);

          if (rot.z > -dynamicRadius * 0.1) {
            const sx = center.x + rot.x;
            const sy = center.y + rot.y;
            if (first) {
              ctx.moveTo(sx, sy);
              first = false;
            } else {
              ctx.lineTo(sx, sy);
            }
          } else {
            first = true;
          }
        }
        ctx.strokeStyle = isDarkMode ? (lon === 0 ? "rgba(234, 29, 5, 0.35)" : "rgba(255, 255, 255, 0.09)") : (lon === 0 ? "rgba(234, 29, 5, 0.25)" : "rgba(0, 0, 0, 0.08)");
        ctx.lineWidth = lon === 0 ? 1.4 : 0.8;
        ctx.stroke();
      };

      [-60, -30, 0, 30, 60].forEach(drawGraticuleParallel);
      [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180].forEach(drawGraticuleMeridian);

      // 3. Project and Render Landmass Nodes
      const projectedNodes: {
        sx: number;
        sy: number;
        z: number;
        radius: number;
        alpha: number;
        isCoastline?: boolean;
        isHub?: boolean;
        isHQ?: boolean;
        name?: string;
      }[] = [];

      for (let i = 0; i < landNodes.length; i++) {
        const node = landNodes[i];
        const pos3D = latLonTo3D(node.lat, node.lon, dynamicRadius);
        const rot = rotate3D(pos3D.x, pos3D.y, pos3D.z, rotX, rotY);

        if (rot.z > -dynamicRadius * 0.12) {
          const depthAlpha = Math.min(1, Math.max(0.12, (rot.z + dynamicRadius * 0.2) / (dynamicRadius * 1.2)));
          const sx = center.x + rot.x;
          const sy = center.y + rot.y;

          projectedNodes.push({
            sx,
            sy,
            z: rot.z,
            radius: node.baseRadius * (0.85 + depthAlpha * 0.35),
            alpha: depthAlpha,
            isCoastline: node.isCoastline,
            isHub: node.isHub,
            isHQ: node.isHQ,
            name: node.name,
          });
        }
      }

      projectedNodes.sort((a, b) => a.z - b.z);

      // Connect adjacent coastline nodes for sharp continent outlines
      ctx.lineWidth = isDarkMode ? 1.1 : 0.9;
      for (let i = 0; i < projectedNodes.length; i++) {
        const p1 = projectedNodes[i];
        if (!p1.isCoastline) continue;

        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p2 = projectedNodes[j];
          if (!p2.isCoastline) continue;

          const dx = p1.sx - p2.sx;
          const dy = p1.sy - p2.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 16) {
            ctx.strokeStyle = isDarkMode ? "rgba(234, 29, 5, 0.55)" : "rgba(234, 29, 5, 0.4)";
            ctx.globalAlpha = Math.min(p1.alpha, p2.alpha) * 0.9;
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();
          }
        }
      }

      // Draw Land Points
      for (let i = 0; i < projectedNodes.length; i++) {
        const p = projectedNodes[i];

        if (p.isHub) {
          // Hub Point
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.isHQ ? (isDarkMode ? "#ffffff" : "#ea1d05") : (isDarkMode ? "#ea1d05" : "#09090b");
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, p.radius * (p.isHQ ? 1.6 : 1.3), 0, Math.PI * 2);
          ctx.fill();

          // Hub Glow
          ctx.fillStyle = "rgba(234, 29, 5, 0.55)";
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, p.radius * (p.isHQ ? 3.6 : 2.5), 0, Math.PI * 2);
          ctx.fill();

          if (p.isHQ) {
            // DSL HQ Pulsing Radar Ring
            const beaconRadius = p.radius * 2.2 + (Math.sin(pulseTimer * 2.8) + 1) * 8;
            ctx.strokeStyle = isDarkMode ? "#ffffff" : "#ea1d05";
            ctx.lineWidth = 1.8;
            ctx.globalAlpha = 0.95;
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, beaconRadius, 0, Math.PI * 2);
            ctx.stroke();

            // Label
            ctx.font = "bold 11px Montserrat, sans-serif";
            ctx.fillStyle = isDarkMode ? "#ffffff" : "#09090b";
            ctx.fillText("DSL HQ (Uganda)", p.sx + 15, p.sy + 4);
          }
        } else {
          // Normal continent node
          ctx.globalAlpha = p.alpha * (isDarkMode ? 0.92 : 0.82);
          ctx.fillStyle = isDarkMode
            ? (p.isCoastline ? "#ff3b2b" : "#ea1d05")
            : (p.isCoastline ? "#ea1d05" : "#ce1705");
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Draw Multiple Telecom Beams & Traveling Energy Packets
      for (let b = 0; b < beams.length; b++) {
        const beam = beams[b];
        beam.progress = (beam.progress + beam.speed) % 1;

        const src3D = latLonTo3D(beam.fromLat, beam.fromLon, dynamicRadius);
        const srcRot = rotate3D(src3D.x, src3D.y, src3D.z, rotX, rotY);

        const dst3D = latLonTo3D(beam.toLat, beam.toLon, dynamicRadius);
        const dstRot = rotate3D(dst3D.x, dst3D.y, dst3D.z, rotX, rotY);

        // Draw if at least one hub is on the visible front hemisphere
        if (srcRot.z > -dynamicRadius * 0.25 || dstRot.z > -dynamicRadius * 0.25) {
          const srcScreen = {
            x: center.x + srcRot.x,
            y: center.y + srcRot.y,
            alpha: Math.min(1, Math.max(0.1, (srcRot.z + dynamicRadius * 0.2) / (dynamicRadius * 1.2))),
          };
          const dstScreen = {
            x: center.x + dstRot.x,
            y: center.y + dstRot.y,
            alpha: Math.min(1, Math.max(0.1, (dstRot.z + dynamicRadius * 0.2) / (dynamicRadius * 1.2))),
          };

          const midX = (srcScreen.x + dstScreen.x) / 2;
          const midY = (srcScreen.y + dstScreen.y) / 2;
          const dx = dstScreen.x - srcScreen.x;
          const dy = dstScreen.y - srcScreen.y;
          const chord = Math.sqrt(dx * dx + dy * dy);

          const elevation = chord * (beam.isAfricanLink ? 0.20 : 0.28);
          const ctrlX = midX;
          const ctrlY = midY - elevation;

          const beamAlpha = Math.min(srcScreen.alpha, dstScreen.alpha) * (isDarkMode ? 0.85 : 0.6);

          // Arc Stroke
          ctx.strokeStyle = beam.color;
          ctx.globalAlpha = beamAlpha;
          ctx.lineWidth = isDarkMode ? (beam.isAfricanLink ? 1.8 : 1.4) : 1.2;
          ctx.beginPath();
          ctx.moveTo(srcScreen.x, srcScreen.y);
          ctx.quadraticCurveTo(ctrlX, ctrlY, dstScreen.x, dstScreen.y);
          ctx.stroke();

          // Animated Traveling Packet
          const t = beam.progress;
          const px = (1 - t) * (1 - t) * srcScreen.x + 2 * (1 - t) * t * ctrlX + t * t * dstScreen.x;
          const py = (1 - t) * (1 - t) * srcScreen.y + 2 * (1 - t) * t * ctrlY + t * t * dstScreen.y;

          ctx.globalAlpha = beamAlpha * 1.3;
          ctx.fillStyle = isDarkMode ? "#ffffff" : "#ea1d05";
          ctx.beginPath();
          ctx.arc(px, py, 3.2, 0, Math.PI * 2);
          ctx.fill();

          // Packet Halo
          ctx.fillStyle = "rgba(234, 29, 5, 0.45)";
          ctx.beginPath();
          ctx.arc(px, py, 6.5, 0, Math.PI * 2);
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
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
      style={{ opacity: 1 }}
    />
  );
}
