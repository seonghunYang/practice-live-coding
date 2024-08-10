import { Ref, RefObject, useEffect, useRef } from "react";

interface UseResizeObserverProps {
  onResize: (entry: ResizeObserverEntry) => void;
}

// RefObject, RefCallback, Ref  타입 차이
export function useResizeObserver<T extends Element>({
  onResize,
}: UseResizeObserverProps): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        onResize(entries[0]);
      }
    });
    observer.observe(ref.current);

    return () => {
      if (!ref.current) return;
      observer.unobserve(ref.current);
    };
  }, []);

  return ref;
}
