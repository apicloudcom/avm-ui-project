declare class Component {
  public render: (props) => void;
  public props: Record<string, any>;
}

declare namespace avm {
  function render(Component, dom);
}

interface clientRectProps  {
  width:number,
  left:number
} 

declare class AVMElement{
  public getBoundingClientRect?: () => clientRectProps
  scrollWidth: number;
}

interface nodeName {
  name: string
}
declare class AVMChild{
  public nodeName: nodeName
  public key: string
}
