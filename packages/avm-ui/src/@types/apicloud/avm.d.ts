declare class Component {
  public render: (props) => void;
  public props: Record<string, any>;
}

declare namespace avm {
  function render(Component, dom);
}

