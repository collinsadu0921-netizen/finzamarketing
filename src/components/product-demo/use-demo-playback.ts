"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useInView, useReducedMotion } from "motion/react";
import {
  JOBS_DEMO_SCENE_MS,
  JOBS_DEMO_SCENE_ORDER,
  JOBS_DEMO_TABLET_SCENE_ORDER,
  type JobsMaterialsDemoScene,
} from "@/components/product-demo/demo-fixtures";

const DESKTOP_QUERY = "(min-width: 1024px)";
const MOBILE_QUERY = "(max-width: 767px)";
const TABLET_QUERY = "(min-width: 768px) and (max-width: 1023px)";
const MAX_PLAYS = 2;

const SERVER_VIEWPORT = { isDesktop: true, isMobile: false, isTablet: false } as const;

type ViewportLayout = {
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
};

let cachedViewport: ViewportLayout = SERVER_VIEWPORT;

function subscribeMedia(onStoreChange: () => void) {
  const desktopMq = window.matchMedia(DESKTOP_QUERY);
  const mobileMq = window.matchMedia(MOBILE_QUERY);
  const tabletMq = window.matchMedia(TABLET_QUERY);
  desktopMq.addEventListener("change", onStoreChange);
  mobileMq.addEventListener("change", onStoreChange);
  tabletMq.addEventListener("change", onStoreChange);
  return () => {
    desktopMq.removeEventListener("change", onStoreChange);
    mobileMq.removeEventListener("change", onStoreChange);
    tabletMq.removeEventListener("change", onStoreChange);
  };
}

function readViewportLayout(): ViewportLayout {
  const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
  const isMobile = window.matchMedia(MOBILE_QUERY).matches;
  const isTablet = window.matchMedia(TABLET_QUERY).matches;
  if (
    cachedViewport.isDesktop !== isDesktop ||
    cachedViewport.isMobile !== isMobile ||
    cachedViewport.isTablet !== isTablet
  ) {
    cachedViewport = { isDesktop, isMobile, isTablet };
  }
  return cachedViewport;
}

function getSceneOrder(layout: ViewportLayout): JobsMaterialsDemoScene[] {
  if (layout.isMobile) return [];
  if (layout.isTablet) return JOBS_DEMO_TABLET_SCENE_ORDER;
  return JOBS_DEMO_SCENE_ORDER;
}

type UseDemoPlaybackOptions = {
  holdScene?: JobsMaterialsDemoScene;
};

export function useDemoPlayback(
  ref: React.RefObject<HTMLElement | null>,
  { holdScene = "hold" }: UseDemoPlaybackOptions = {},
) {
  const reduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const viewport = useSyncExternalStore(
    subscribeMedia,
    readViewportLayout,
    () => SERVER_VIEWPORT,
  );

  const inView = useInView(ref, {
    once: false,
    initial: false,
    amount: 0.18,
    margin: "0px 0px 10% 0px",
  });

  const [scene, setScene] = useState<JobsMaterialsDemoScene>("static");

  const playCountRef = useRef(0);
  const finishedRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const sceneIndexRef = useRef(0);
  const inViewRef = useRef(inView);
  const viewportRef = useRef<ViewportLayout>(SERVER_VIEWPORT);

  useEffect(() => {
    inViewRef.current = inView;
  }, [inView]);

  useEffect(() => {
    viewportRef.current = viewport;
  }, [viewport]);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const onVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const showMockup =
    mounted && reduceMotion === false && !viewport.isMobile;

  const playbackEnabled = showMockup;

  useEffect(() => {
    if (!playbackEnabled) {
      clearTimer();
      return;
    }

    const advance = () => {
      if (finishedRef.current) {
        clearTimer();
        return;
      }

      if (pausedRef.current || !inViewRef.current || !ref.current) {
        timeoutRef.current = window.setTimeout(advance, 160);
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const visible = rect.bottom > 0 && rect.top < window.innerHeight;
      if (!visible) {
        timeoutRef.current = window.setTimeout(advance, 180);
        return;
      }

      const order = getSceneOrder(viewportRef.current);
      const current = order[sceneIndexRef.current];
      if (!current) {
        playCountRef.current += 1;
        if (playCountRef.current < MAX_PLAYS) {
          sceneIndexRef.current = 0;
          setScene("static");
          timeoutRef.current = window.setTimeout(advance, 2800);
          return;
        }
        finishedRef.current = true;
        setScene(holdScene);
        clearTimer();
        return;
      }

      setScene(current);
      sceneIndexRef.current += 1;
      timeoutRef.current = window.setTimeout(advance, JOBS_DEMO_SCENE_MS[current]);
    };

    timeoutRef.current = window.setTimeout(advance, 480);

    return clearTimer;
  }, [clearTimer, holdScene, playbackEnabled, ref]);

  const showCursor =
    playbackEnabled &&
    viewport.isDesktop &&
    (scene === "cursor-confirm" ||
      scene === "confirm-press" ||
      scene === "cursor-invoice");

  return {
    scene,
    showMockup,
    playbackEnabled,
    reduceMotion: reduceMotion !== false,
    showCursor,
    isDesktop: viewport.isDesktop,
    isMobile: viewport.isMobile,
    isTablet: viewport.isTablet,
  };
}
