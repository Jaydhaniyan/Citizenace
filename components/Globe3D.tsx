"use client";

import React, { useEffect, useRef } from "react";

interface GlobePoint {
  x: number;
  y: number;
  z: number;
  baseLat: number;
  baseLon: number;
  isUSA: boolean;
  city?: string;
}

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Globe parameters
    let rotationY = 0.8;
    let rotationX = 0.25;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    const autoRotateSpeed = 0.0035;

    // US landmark points (Latitude & Longitude in radians)
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const usCities = [
      { name: "Washington D.C.", lat: 38.9, lon: -77.0 },
      { name: "New York", lat: 40.7, lon: -74.0 },
      { name: "Chicago", lat: 41.8, lon: -87.6 },
      { name: "Dallas", lat: 32.7, lon: -96.8 },
      { name: "Los Angeles", lat: 34.0, lon: -118.2 },
      { name: "Miami", lat: 25.7, lon: -80.2 },
      { name: "Seattle", lat: 47.6, lon: -122.3 },
    ];

    // Generate points on sphere using Fibonacci spiral for uniform coverage
    const totalPoints = 650;
    const points: GlobePoint[] = [];

    for (let i = 0; i < totalPoints; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / totalPoints);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const lat = 90 - (phi * 180) / Math.PI;
      const lon = ((theta * 180) / Math.PI) % 360 - 180;

      // Check if point falls roughly within the continental US bounding box
      const isUSA = lat >= 24 && lat <= 50 && lon >= -126 && lon <= -66;

      points.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
        baseLat: lat,
        baseLon: lon,
        isUSA,
      });
    }

    // Add US City specific points
    const cityPoints: GlobePoint[] = usCities.map((city) => {
      const phi = toRad(90 - city.lat);
      const theta = toRad(city.lon + 180);
      return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
        baseLat: city.lat,
        baseLon: city.lon,
        isUSA: true,
        city: city.name,
      };
    });

    // Mouse drag handlers
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      rotationY += deltaX * 0.006;
      rotationX = Math.max(-0.8, Math.min(0.8, rotationX + deltaY * 0.006));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Touch handlers for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      rotationY += deltaX * 0.007;
      rotationX = Math.max(-0.8, Math.min(0.8, rotationX + deltaY * 0.007));
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    // Render loop
    let tick = 0;

    const render = () => {
      tick += 1;
      if (!isDragging) {
        rotationY += autoRotateSpeed;
      }

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.4;

      // 1. Atmosphere Glow & Outer Ring
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.7,
        centerX,
        centerY,
        radius * 1.3
      );
      glowGrad.addColorStop(0, "rgba(37, 99, 235, 0.08)");
      glowGrad.addColorStop(0.6, "rgba(59, 130, 246, 0.12)");
      glowGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // 2. Globe Sphere Backdrop (Navy / Deep Blue gradient)
      const sphereGrad = ctx.createRadialGradient(
        centerX - radius * 0.35,
        centerY - radius * 0.35,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );
      sphereGrad.addColorStop(0, "#ffffff");
      sphereGrad.addColorStop(0.5, "#eff6ff");
      sphereGrad.addColorStop(0.85, "#dbeafe");
      sphereGrad.addColorStop(1, "#bfdbfe");

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(147, 197, 253, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // 3. Orbiting latitude rings (US themed 3D grid lines)
      ctx.save();
      ctx.strokeStyle = "rgba(37, 99, 235, 0.12)";
      ctx.lineWidth = 1;
      for (const latDeg of [-30, 0, 30, 60]) {
        ctx.beginPath();
        const rLat = radius * Math.cos(toRad(latDeg));
        const yLat = centerY - radius * Math.sin(toRad(latDeg)) * Math.cos(rotationX);
        const ry = rLat * Math.sin(rotationX);
        ctx.ellipse(centerX, yLat, rLat, Math.abs(ry) + 0.1, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // 4. Project & Sort Points
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      const project = (p: GlobePoint) => {
        // Rotate around Y axis
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate around X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective scale
        const scale = (z2 + 2) / 3;
        const projX = centerX + x1 * radius;
        const projY = centerY - y2 * radius;

        return { projX, projY, z2, scale, point: p };
      };

      const projectedPoints = [...points, ...cityPoints].map(project);
      projectedPoints.sort((a, b) => a.z2 - b.z2);

      // 5. Draw Points
      projectedPoints.forEach((p) => {
        if (p.z2 < -0.15) return;

        const isUSA = p.point.isUSA;
        const isCity = !!p.point.city;

        ctx.beginPath();

        if (isCity) {
          // US City Marker (Glow & Red/Blue Beacon)
          const pulse = Math.sin(tick * 0.08) * 2;
          ctx.arc(p.projX, p.projY, 4.5 + pulse, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(220, 38, 38, 0.35)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.projX, p.projY, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#1E40AF";
          ctx.fill();
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else if (isUSA) {
          // Highlighted Continental US Dots
          ctx.arc(p.projX, p.projY, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(30, 64, 175, 0.85)";
          ctx.fill();
        } else {
          // Regular Globe Grid Dots
          const alpha = Math.max(0.1, (p.z2 + 0.3) / 1.3);
          ctx.arc(p.projX, p.projY, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.35})`;
          ctx.fill();
        }
      });

      // 6. 3D Elliptical Orbit Ring with moving satellite particle
      ctx.save();
      ctx.strokeStyle = "rgba(37, 99, 235, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radius * 1.25, radius * 0.45, -0.28, 0, Math.PI * 2);
      ctx.stroke();

      // Moving glowing beacon along the orbit
      const orbitAngle = tick * 0.02;
      const orbitRadiusX = radius * 1.25;
      const orbitRadiusY = radius * 0.45;
      const rot = -0.28;
      const unrotatedX = Math.cos(orbitAngle) * orbitRadiusX;
      const unrotatedY = Math.sin(orbitAngle) * orbitRadiusY;
      const orbX = centerX + unrotatedX * Math.cos(rot) - unrotatedY * Math.sin(rot);
      const orbY = centerY + unrotatedX * Math.sin(rot) + unrotatedY * Math.cos(rot);

      // Glow beacon
      const orbGrad = ctx.createRadialGradient(orbX, orbY, 1, orbX, orbY, 9);
      orbGrad.addColorStop(0, "#2563EB");
      orbGrad.addColorStop(0.5, "rgba(37, 99, 235, 0.4)");
      orbGrad.addColorStop(1, "rgba(37, 99, 235, 0)");
      ctx.fillStyle = orbGrad;
      ctx.beginPath();
      ctx.arc(orbX, orbY, 9, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(orbX, orbY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[560px] max-h-[560px] object-contain drop-shadow-2xl"
      />
    </div>
  );
}
