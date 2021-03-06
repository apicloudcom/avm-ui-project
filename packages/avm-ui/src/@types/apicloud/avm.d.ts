declare class Component {
  public props: Record<string, any>;
  public fire: (eventName: string, payload?: any) => void;
  css?: (() => string) | string;
}

declare namespace avm {
  function render(Component, dom);

  function define(name: string, Component);
}

interface clientRectProps {
  width: number,
  left: number
}

declare class AVMElement {
  public getBoundingClientRect?: () => clientRectProps
  scrollWidth: number;
}

interface nodeName {
  name: string
}

declare class AVMChild {
  public nodeName: nodeName
  public key: string
}

declare function classNames(...p: (string | {} | null)[]): string;
