import { useRef } from "react";

interface UseThrottleProps<P> {
  callbackFn: (props: P) => void;
  timeout: number;
}

export function useThrottle<P>({ callbackFn, timeout }: UseThrottleProps<P>) {
  // callbackFn이 timeout 마다 실행이 되어야 함
  const ignore = useRef<boolean>(false);

  const trottleFn = (props: P) => {
    // timeout이 지났는지 확인
    if (ignore.current) return;

    // callback을 호출하면 다른 callback이 호출하지 못하게 막는다
    ignore.current = true;
    // time이 지나면 callback을 호출할 수 있게끔 한다
    callbackFn(props);

    setTimeout(() => {
      ignore.current = false;
    }, timeout);
  };

  return trottleFn;
}
