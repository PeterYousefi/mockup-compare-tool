import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Shows the real /images/*.jpg once it exists, otherwise a neutral placeholder
 * block of the same size, so the layout never breaks on a missing file.
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
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let active = true;
    const probe = new Image();
    probe.onload = () => {
      if (active) setOk(true);
    };
    probe.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
      {ok ? (
        <img src={src} alt={alt} className={cn("h-full w-full object-cover", imgClassName)} />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(45deg,var(--color-secondary)_0_12px,var(--color-muted)_12px_24px)] px-4 text-center"
        >
          <span className="eyebrow">{label}</span>
          <span className="font-mono text-[0.65rem] text-muted-foreground/80">{src}</span>
        </div>
      )}
    </div>
  );
}
