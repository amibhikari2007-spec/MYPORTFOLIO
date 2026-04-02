declare module 'gsap/SplitText' {
  class SplitText {
    constructor(
      target: string | Element | Element[] | NodeList,
      vars?: {
        type?: string;
        charsClass?: string;
        wordsClass?: string;
        linesClass?: string;
        position?: string;
        tag?: string;
        span?: boolean;
        lineThreshold?: number;
        autoSplit?: boolean;
      }
    );
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    split(vars?: object): SplitText;
  }
  export default SplitText;
}

declare module 'gsap-trial/ScrollSmoother' {
  import { Plugin } from 'gsap';
  const ScrollSmoother: Plugin & {
    create(vars?: object): ScrollSmootherInstance;
    get(): ScrollSmootherInstance | undefined;
  };
  interface ScrollSmootherInstance {
    paused(value?: boolean): boolean | ScrollSmootherInstance;
    kill(): void;
    scrollTo(target: string | number | Element, smooth?: boolean, position?: string): void;
    refresh(): void;
  }
  export { ScrollSmoother };
}