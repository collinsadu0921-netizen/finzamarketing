"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type FeaturesScreenshotDialogProps = {
  src: string;
  alt: string;
  title: string;
};

export function FeaturesScreenshotDialog({ src, alt, title }: FeaturesScreenshotDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 shadow-sm transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        >
          <Expand className="h-3.5 w-3.5" aria-hidden />
          View larger
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-[min(96vw,1100px)] overflow-y-auto sm:max-w-[1100px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{alt}</DialogDescription>
        </DialogHeader>
        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
          <Image
            src={src}
            alt={alt}
            width={2400}
            height={1350}
            sizes="96vw"
            className="block h-auto w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
