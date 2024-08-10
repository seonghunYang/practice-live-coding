import { useRef } from "react";

interface UseDebounceProps<P> {
  fn: (props: P) => void;
  timeout: number;
}

// ref의 초기값이 null이면 읽기 전용이 된다, dom은 null 일반 값이면 지정 x하자
export function useDebounce<P>({ fn, timeout }: UseDebounceProps<P>) {
  // 동작이 끝난지 timeout이 지날 때 fn이 호출이 되어야 한다.
  const ref = useRef<number>();

  const debounceFn = (props: P) => {
    // 호출되면 이전 timer를 삭제한다.
    if (ref.current) {
      clearTimeout(ref.current);
    }

    ref.current = setTimeout(() => {
      console.log(props);
      fn(props);
    }, timeout);
  };

  return debounceFn;
}
