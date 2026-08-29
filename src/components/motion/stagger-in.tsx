"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { animate, useInView, useReducedMotion, type AnimationPlaybackControls } from "motion/react";

export type StaggerVariant = "workflow" | "cards";

type ItemRegistration = {
  index: number;
  element: HTMLElement;
  connector: HTMLElement | null;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DESKTOP_QUERY = "(min-width: 1024px)";

function isApproachingView(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 1.15 && rect.bottom > 0;
}

function collectItems(container: HTMLElement): ItemRegistration[] {
  return [...container.querySelectorAll<HTMLElement>("[data-stagger-item]")]
    .map((element) => ({
      index: Number(element.dataset.staggerIndex),
      element,
      connector: element.querySelector<HTMLElement>("[data-stagger-connector]"),
    }))
    .sort((a, b) => a.index - b.index);
}

function applyPreparedState(
  variant: StaggerVariant,
  items: ItemRegistration[],
  desktop: boolean,
  controls: AnimationPlaybackControls[],
) {
  const stepFrom =
    variant === "workflow"
      ? desktop
        ? { y: 10, opacity: 0.92 }
        : { y: 8, opacity: 0.94 }
      : desktop
        ? { y: 12, opacity: 0.9 }
        : { y: 8, opacity: 0.94 };

  for (const { element, connector } of items) {
    controls.push(animate(element, stepFrom, { duration: 0 }));
    if (variant === "workflow" && desktop && connector) {
      connector.style.transformOrigin = "left center";
      controls.push(animate(connector, { scaleX: 0 }, { duration: 0 }));
    }
  }
}

function playSequence(
  variant: StaggerVariant,
  items: ItemRegistration[],
  desktop: boolean,
  controls: AnimationPlaybackControls[],
) {
  if (variant === "workflow") {
    const stepDuration = desktop ? 0.36 : 0.32;
    const stepInterval = desktop ? 0.18 : 0.07;
    const stepFrom = desktop
      ? { y: [10, 0], opacity: [0.92, 1] }
      : { y: [8, 0], opacity: [0.94, 1] };

    items.forEach(({ element, connector, index }) => {
      const delay = index * stepInterval;
      controls.push(
        animate(element, stepFrom, {
          delay,
          duration: stepDuration,
          ease: EASE,
        }),
      );

      if (desktop && connector) {
        connector.style.transformOrigin = "left center";
        controls.push(
          animate(connector, { scaleX: [0, 1] }, {
            delay: delay + 0.12,
            duration: 0.28,
            ease: EASE,
          }),
        );
      }
    });
    return;
  }

  const stepDuration = desktop ? 0.38 : 0.32;
  const stepInterval = desktop ? 0.075 : 0.055;
  const stepFrom = desktop
    ? { y: [12, 0], opacity: [0.9, 1] }
    : { y: [8, 0], opacity: [0.94, 1] };

  items.forEach(({ element, index }) => {
    controls.push(
      animate(element, stepFrom, {
        delay: index * stepInterval,
        duration: stepDuration,
        ease: EASE,
      }),
    );
  });
}

type StaggerInProps = {
  variant: StaggerVariant;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function StaggerIn({ variant, as: Component = "div", className, children }: StaggerInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const playedRef = useRef(false);
  const preparedRef = useRef(false);
  const controlsRef = useRef<AnimationPlaybackControls[]>([]);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, {
    once: false,
    initial: false,
    amount: 0.12,
    margin: "0px 0px 12% 0px",
  });

  useLayoutEffect(() => {
    const container = ref.current;
    if (!container || reduceMotion !== false || playedRef.current) {
      return;
    }

    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      if (cancelled) {
        return;
      }

      const items = collectItems(container);
      if (items.length === 0) {
        return;
      }

      const desktop = window.matchMedia(DESKTOP_QUERY).matches;
      const shouldPlay = inView || isApproachingView(container);
      const controls: AnimationPlaybackControls[] = [];

      if (!shouldPlay) {
        if (!preparedRef.current) {
          applyPreparedState(variant, items, desktop, controls);
          preparedRef.current = true;
          controlsRef.current.push(...controls);
        }
        return;
      }

      playedRef.current = true;
      applyPreparedState(variant, items, desktop, controls);
      playSequence(variant, items, desktop, controls);
      controlsRef.current.push(...controls);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [inView, reduceMotion, variant]);

  useLayoutEffect(() => {
    return () => {
      controlsRef.current.forEach((control) => control.stop());
      controlsRef.current = [];
    };
  }, []);

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}

type StaggerInItemProps = {
  index: number;
  as?: ElementType;
  className?: string;
  connectorClassName?: string;
  children: ReactNode;
};

export function StaggerInItem({
  index,
  as: Component = "div",
  className,
  connectorClassName,
  children,
}: StaggerInItemProps) {
  return (
    <Component data-stagger-item data-stagger-index={index} className={className}>
      {connectorClassName ? (
        <span data-stagger-connector className={connectorClassName} aria-hidden />
      ) : null}
      {children}
    </Component>
  );
}

StaggerIn.Item = StaggerInItem;
