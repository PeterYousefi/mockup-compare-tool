import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Renders a real <img> from /images/*.jpg and falls back to a neutral
 * placeholder block (same aspect box) until the user drops their own file in.
 */
export function PlaceholderImage({
  src,
  alt,
  label,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(45deg,var(--color-secondary)_0_10px,var(--color-muted)_10px_20px)] px-4 text-center"
        >
          <span className="eyebrow">{label}</span>
          <span className="font-mono text-[0.65rem] text-muted-foreground/80">{src}</span>
        </div>
      )}
    </div>
  );
}
