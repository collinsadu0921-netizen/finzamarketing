"use client";

import { useRef } from "react";
import { ProductDemoFrame } from "@/components/product-demo/product-demo-frame";
import { JobsMaterialsShell } from "@/components/product-demo/jobs-materials-shell";
import { SCREENSHOT } from "@/components/product-demo/demo-fixtures";
import { useDemoPlayback } from "@/components/product-demo/use-demo-playback";

export function JobsMaterialsDemo() {
  const frameRef = useRef<HTMLDivElement>(null);
  const { scene, showMockup, showCursor, isTablet } = useDemoPlayback(frameRef);

  return (
    <div ref={frameRef} className="relative block w-full min-w-0 max-w-full">
      <ProductDemoFrame
        {...SCREENSHOT}
        className="relative"
        showMockup={showMockup}
        mockup={
          <JobsMaterialsShell scene={scene} showCursor={showCursor} compact={isTablet} />
        }
      />
    </div>
  );
}
