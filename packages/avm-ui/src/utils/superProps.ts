export function superProps(targetOrProps: Object, keyOrNode: 'render' | AVMChild, descriptor?: PropertyDescriptor) {

  if (descriptor) {
    let preRender = descriptor.value;
    descriptor.value = function (props) {
      const node = preRender(props);
      return _super(node, props)
    }
  } else {
    return _super(keyOrNode, targetOrProps)
  }


  function _super(node, props) {
    superClass(node, props);
    superStyle(node, props);
    superEvent(node, props);
    return node;
  }

}


function superClass(node, props) {
  const cls: string[] = [];
  if (props.className) {
    cls.push(props.className);
  }
  if (props.class) {
    cls.push(props.class);
  }
  if (node.attributes) {
    if (node.attributes.className) {
      cls.unshift(node.attributes.className);
    }
    if (node.attributes.class) {
      cls.unshift(node.attributes.className);
    }
    node.attributes.class = cls.join(' ');
    delete node.attributes.className;
  } else {
    node.attributes = {
      class: cls.join(' ')
    }
  }
}

function superStyle(node, props) {
  const style: string[] = [];
  if (props.style) {
    style.push(props.style);
  }

  if (node.attributes) {
    if (node.attributes.style) {
      style.unshift(node.attributes.style);
    }
    node.attributes.style = mergeStyle(...style);
  } else {
    node.attributes = {
      style: mergeStyle(...style)
    }
  }
}

function superEvent(node, props) {
  for (let propsKey in props) {
    if (propsKey.indexOf('on') === 0) {
      if (node.attributes) {
        node.attributes[propsKey] = props[propsKey];
      }
    }
  }
}

export function mergeStyle(...args) {
  let style: string[] = [];
  args.forEach(arg => {
    if (typeof arg === 'string') {
      style.push(arg.replace(/;$/gm, ''))
    } else if (Object.prototype.toString.call(arg) === '[object Object]') {
      for (let key in arg) {
        arg[key] && style.push(key.replace(/([A-Z])/, str => '-' + str.toLowerCase()) + ':' + arg[key])
      }
    }
  })
  return style.join(';') + ';'
}