'use client';

import { useSyncExternalStore } from 'react';

function subscribeMotion(callback: () => void) {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getMotionServerSnapshot() {
  return false;
}

/**
 * Returns true if reduced motion should be active based on OS preference.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribeMotion, getMotionSnapshot, getMotionServerSnapshot);
}
