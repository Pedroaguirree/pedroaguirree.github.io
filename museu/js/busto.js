// Loads the sculpted bust (busto.bin) and builds a bronze mesh.
import * as THREE from '../lib/three.module.min.js';
export async function loadBust(url){
  const buf = await (await fetch(url)).arrayBuffer(); const dv = new DataView(buf);
  const nV = dv.getUint32(4, true), nI = dv.getUint32(8, true), isz = dv.getUint32(12, true);
  const lo = [0, 1, 2].map(i => dv.getFloat32(16 + i * 4, true)), hi = [0, 1, 2].map(i => dv.getFloat32(28 + i * 4, true));
  let o = 40;
  const qP = new Uint16Array(buf, o, nV * 3); o += nV * 6;
  const qN = new Int8Array(buf, o, nV * 3); o += nV * 3;
  const qA = new Uint8Array(buf, o, nV); o += nV; o += (4 - (o % 4)) % 4;
  const idx = isz === 4 ? new Uint32Array(buf, o, nI * 3) : new Uint16Array(buf, o, nI * 3);
  const pos = new Float32Array(nV * 3), nor = new Float32Array(nV * 3), col = new Float32Array(nV * 3);
  const dark = [0.03, 0.03, 0.02], mid = [0.17, 0.1, 0.05], hi2 = [0.5, 0.32, 0.15];
  for (let i = 0; i < nV; i++) {
    for (let k = 0; k < 3; k++) { pos[i * 3 + k] = lo[k] + qP[i * 3 + k] / 65535 * (hi[k] - lo[k]); nor[i * 3 + k] = qN[i * 3 + k] / 127; }
    const a = qA[i] / 255;                     // 0 = deep cavity, 1 = exposed
    const t = Math.pow(a, 1.4), up = Math.max(0, nor[i * 3 + 1]) * 0.25;
    for (let k = 0; k < 3; k++) col[i * 3 + k] = t < .7 ? dark[k] + (mid[k] - dark[k]) * (t / .7) : mid[k] + (hi2[k] - mid[k]) * ((t - .7) / .3 + up);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setIndex(new THREE.BufferAttribute(idx, 1));
  return g;
}
export function bronzeMaterial(envMap){
  return new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.65, roughness: 0.36, envMap, envMapIntensity: 0.45 });
}
