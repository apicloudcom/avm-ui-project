var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var button = "";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$2 = freeGlobal || freeSelf || Function("return this")();
var _root = root$2;
var root$1 = _root;
var Symbol$3 = root$1.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
var nativeObjectToString$1 = objectProto$8.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$6.call(value, symToStringTag$1), tag2 = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result2 = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag2;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result2;
}
var _getRawTag = getRawTag$1;
var objectProto$7 = Object.prototype;
var nativeObjectToString = objectProto$7.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$3(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$3;
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$3;
var baseGetTag$2 = _baseGetTag, isObject$2 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag2 = baseGetTag$2(value);
  return tag2 == funcTag$1 || tag2 == genTag || tag2 == asyncTag || tag2 == proxyTag;
}
var isFunction_1 = isFunction$2;
var root = _root;
var coreJsData$1 = root["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$1 = isObject_1, toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$6 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$5).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$1;
var getNative = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$2(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$2(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$2;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$1;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
var isFunction = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$3(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$3;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var eq = eq_1, isArrayLike$2 = isArrayLike_1, isIndex$1 = _isIndex, isObject = isObject_1;
function isIterateeCall$1(value, index2, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike$2(object) && isIndex$1(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
var baseRest = _baseRest, isIterateeCall = _isIterateeCall;
function createAssigner$2(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$2;
var objectProto$4 = Object.prototype;
function isPrototype$2(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
var _isPrototype = isPrototype$2;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result2 = Array(n);
  while (++index2 < n) {
    result2[index2] = iteratee(index2);
  }
  return result2;
}
var _baseTimes = baseTimes$1;
function isObjectLike$3(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$3;
var baseGetTag$1 = _baseGetTag, isObjectLike$2 = isObjectLike_1;
var argsTag$1 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$2(value) && baseGetTag$1(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$1 = isObjectLike_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$1(value) && hasOwnProperty$3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$1;
var isArray$1 = Array.isArray;
var isArray_1 = isArray$1;
var isBuffer$1 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$1, isBuffer$1.exports);
var baseGetTag = _baseGetTag, isLength = isLength_1, isObjectLike = isObjectLike_1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray = isArray_1, isBuffer = isBuffer$1.exports, isIndex = _isIndex, isTypedArray = isTypedArray_1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result2.push(key);
    }
  }
  return result2;
}
var _arrayLikeKeys = arrayLikeKeys$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$1 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$1(object)) {
    return nativeKeys(object);
  }
  var result2 = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result2.push(key);
    }
  }
  return result2;
}
var _baseKeys = baseKeys$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$1 = isArrayLike_1;
function keys$2(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$2;
var assignValue = _assignValue, copyObject$1 = _copyObject, createAssigner$1 = _createAssigner, isArrayLike = isArrayLike_1, isPrototype = _isPrototype, keys$1 = keys_1;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var assign = createAssigner$1(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject$1(source, keys$1(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});
var assign_1 = assign;
var copyObject = _copyObject, createAssigner = _createAssigner, keys = keys_1;
var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keys(source), object, customizer);
});
var assignWith_1 = assignWith;
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_1 = isUndefined;
function mergeProps(...items) {
  function customizer(objValue, srcValue) {
    return isUndefined_1(srcValue) ? objValue : srcValue;
  }
  let ret = assign_1({}, items[0]);
  for (let i = 1; i < items.length; i++) {
    ret = assignWith_1(ret, items[i], customizer);
  }
  return ret;
}
const classPrefix$y = `adm-button`;
const defaultProps$p = {
  color: "default",
  fill: "solid",
  size: "middle",
  block: false,
  disabled: false,
  loading: false,
  type: "button",
  shape: "default",
  style: {}
};
const colorAttr = {
  default: {
    textColor: "#333",
    bgColor: "#fff"
  },
  primary: {
    textColor: "#fff",
    bgColor: "#1677ff"
  },
  success: {
    textColor: "#fff",
    bgColor: "#00b578"
  },
  warning: {
    textColor: "#fff",
    bgColor: "#ff8f1f"
  },
  danger: {
    textColor: "#fff",
    bgColor: "#ff3141"
  }
};
const shapeAttr = {
  default: "4px",
  rounded: "1000px",
  rectangular: 0
};
class Button extends Component {
  install = () => {
    console.log("Button !");
  };
  render = (props) => {
    props = mergeProps(defaultProps$p, props);
    const disabled = props.disabled || props.loading;
    const { textColor, color, bgColor, borderRadius, shape, borderWidth, borderStyle, borderColor } = props;
    const btnStyles = {
      height: "auto",
      lineHeight: 1.4,
      opacity: disabled ? 0.4 : 1,
      color: textColor || colorAttr[color].textColor,
      backgroundColor: bgColor || colorAttr[color].bgColor,
      borderRadius: borderRadius || shapeAttr[shape],
      borderWidth,
      borderStyle,
      borderColor: borderColor || colorAttr[color].bgColor
    };
    const btnCls = classNames(classPrefix$y, props.className, props.color ? `${classPrefix$y}-${props.color}` : null, {
      [`${classPrefix$y}-block`]: props.block,
      [`${classPrefix$y}-disabled`]: disabled,
      [`${classPrefix$y}-${props.color}-fill-outline`]: props.fill === "outline",
      [`${classPrefix$y}-${props.color}-fill-none`]: props.fill === "none",
      [`${classPrefix$y}-mini`]: props.size === "mini",
      [`${classPrefix$y}-mini-shape-${props.shape}`]: props.size === "mini",
      [`${classPrefix$y}-small`]: props.size === "small",
      [`${classPrefix$y}-large`]: props.size === "large",
      [`${classPrefix$y}-loading`]: props.loading
    }, `${classPrefix$y}-shape-${props.shape}`);
    return /* @__PURE__ */ avm.h("button", {
      type: props.type,
      onClick: props.onClick,
      className: btnCls,
      disabled,
      style: __spreadValues(__spreadValues({}, btnStyles), props.style)
    }, props.loading ? props.loadingText : props.children);
  };
  test() {
    api.alert({
      msg: "Button"
    });
  }
}
var badge = "";
const checkLabelType = (ele) => {
  return Object.prototype.toString.call(ele);
};
const formatLabel = (ele, cls, style = {}) => {
  if (checkLabelType(ele) === "[object Array]") {
    return ele.map((el) => {
      return formatLabel(el, cls, style);
    });
  }
  return checkLabelType(ele) === "[object String]" ? /* @__PURE__ */ avm.h("span", {
    className: cls,
    style
  }, ele) : /* @__PURE__ */ avm.h("div", {
    className: cls,
    style
  }, ele);
};
const classPrefix$x = `adm-badge`;
const defaultProps$o = {
  color: "#FF411C"
};
class Badge extends Component {
  install = () => {
    console.log("Badge!");
  };
  render = (props) => {
    props = mergeProps(defaultProps$o, props);
    const { content, color, children, isDot, right, top } = props;
    const badgeCls = classNames(classPrefix$x, {
      [`${classPrefix$x}--fixed`]: !!children,
      [`${classPrefix$x}--dot`]: isDot
    });
    const styleRight = !!right && !!children ? right : 0;
    const styleTop = !!top && !!children ? top : 0;
    const contentEle = formatLabel(content, badgeCls, { backgroundColor: color, right: styleRight, top: styleTop });
    return /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$x}-wrap`
    }, children, contentEle);
  };
}
var loading = "";
const fontName = "avm-ui-icon";
const classPrefix$w = `adm-icon`;
class Icon extends Component {
  code = 59913;
  css() {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/avm-ui/${fontName}.ttf') format('truetype');}
        .${classPrefix$w} {font-family: ${fontName};}`;
  }
  render = (props) => {
    return /* @__PURE__ */ avm.h("text", {
      _code: this.code,
      _name: this.constructor.name,
      style: __spreadValues({}, props),
      class: `${classPrefix$w} ${classPrefix$w}-font-icon-text`
    }, String.fromCharCode(this.code));
  };
}
class AaOutline extends Icon {
  code = 59905;
}
class AddCircleOutline extends Icon {
  code = 59906;
}
class AddOutline extends Icon {
  code = 59907;
}
class AddressBookFill extends Icon {
  code = 59908;
}
class AddSquareOutline extends Icon {
  code = 59909;
}
class AlipayCircleFill extends Icon {
  code = 59910;
}
class AlipaySquareFill extends Icon {
  code = 59911;
}
class AntOutline extends Icon {
  code = 59912;
}
class ApiCloudLogo extends Icon {
  code = 59913;
}
class AppOutline extends Icon {
  code = 59914;
}
class AppstoreOutline extends Icon {
  code = 59915;
}
class ArrowDownCircleOutline extends Icon {
  code = 59916;
}
class ArrowsAltOutline extends Icon {
  code = 59917;
}
class AudioFill extends Icon {
  code = 59918;
}
class AudioMutedOutline extends Icon {
  code = 59919;
}
class AudioOutline extends Icon {
  code = 59920;
}
class BankcardOutline extends Icon {
  code = 59921;
}
class BellMuteOutline extends Icon {
  code = 59922;
}
class BellOutline extends Icon {
  code = 59923;
}
class BillOutline extends Icon {
  code = 59924;
}
class CalculatorOutline extends Icon {
  code = 59925;
}
class CalendarOutline extends Icon {
  code = 59926;
}
class CameraOutline extends Icon {
  code = 59927;
}
class ChatAddOutline extends Icon {
  code = 59928;
}
class ChatCheckOutline extends Icon {
  code = 59929;
}
class ChatWrongOutline extends Icon {
  code = 59930;
}
class CheckCircleFill extends Icon {
  code = 59931;
}
class CheckCircleOutline extends Icon {
  code = 59932;
}
class CheckOutline extends Icon {
  code = 59933;
}
class CheckShieldFill extends Icon {
  code = 59934;
}
class CheckShieldOutline extends Icon {
  code = 59935;
}
class ClockCircleFill extends Icon {
  code = 59936;
}
class ClockCircleOutline extends Icon {
  code = 59937;
}
class CloseCircleFill extends Icon {
  code = 59938;
}
class CloseCircleOutline extends Icon {
  code = 59939;
}
class CloseOutline extends Icon {
  code = 59940;
}
class CloseShieldOutline extends Icon {
  code = 59941;
}
class CollectMoneyOutline extends Icon {
  code = 59942;
}
class CompassOutline extends Icon {
  code = 59943;
}
class ContentOutline extends Icon {
  code = 59944;
}
class CouponOutline extends Icon {
  code = 59945;
}
class DeleteOutline extends Icon {
  code = 59946;
}
class DownCircleOutline extends Icon {
  code = 59947;
}
class DownFill extends Icon {
  code = 59948;
}
class DownlandOutline extends Icon {
  code = 59949;
}
class DownOutline extends Icon {
  code = 59950;
}
class EditFill extends Icon {
  code = 59951;
}
class EditSFill extends Icon {
  code = 59952;
}
class EditSOutline extends Icon {
  code = 59953;
}
class EnvironmentOutline extends Icon {
  code = 59954;
}
class ExclamationCircleFill extends Icon {
  code = 59955;
}
class ExclamationCircleOutline extends Icon {
  code = 59956;
}
class ExclamationOutline extends Icon {
  code = 59957;
}
class ExclamationShieldFill extends Icon {
  code = 59958;
}
class ExclamationShieldOutline extends Icon {
  code = 59959;
}
class ExclamationTriangleOutline extends Icon {
  code = 59960;
}
class EyeFill extends Icon {
  code = 59961;
}
class EyeInvisibleFill extends Icon {
  code = 59962;
}
class EyeInvisibleOutline extends Icon {
  code = 59963;
}
class EyeOutline extends Icon {
  code = 59964;
}
class FaceRecognitionOutline extends Icon {
  code = 59965;
}
class FileOutline extends Icon {
  code = 59966;
}
class FileWrongOutline extends Icon {
  code = 59967;
}
class FillinOutline extends Icon {
  code = 59968;
}
class FilterOutline extends Icon {
  code = 59969;
}
class FingerdownOutline extends Icon {
  code = 59970;
}
class FireFill extends Icon {
  code = 59971;
}
class FlagOutline extends Icon {
  code = 59972;
}
class FolderOutline extends Icon {
  code = 59973;
}
class ForbidFill extends Icon {
  code = 59974;
}
class FrownFill extends Icon {
  code = 59975;
}
class FrownOutline extends Icon {
  code = 59976;
}
class GiftOutline extends Icon {
  code = 59977;
}
class GlobalOutline extends Icon {
  code = 59978;
}
class HandPayCircleOutline extends Icon {
  code = 59979;
}
class HeartFill extends Icon {
  code = 59980;
}
class HeartOutline extends Icon {
  code = 59981;
}
class HistogramOutline extends Icon {
  code = 59982;
}
class InformationCircleFill extends Icon {
  code = 59983;
}
class InformationCircleOutline extends Icon {
  code = 59984;
}
class KeyOutline extends Icon {
  code = 59985;
}
class KoubeiFill extends Icon {
  code = 59986;
}
class KoubeiOutline extends Icon {
  code = 59987;
}
class LeftOutline extends Icon {
  code = 59988;
}
class LikeOutline extends Icon {
  code = 59989;
}
class LinkOutline extends Icon {
  code = 59990;
}
class LocationFill extends Icon {
  code = 59991;
}
class LocationOutline extends Icon {
  code = 59992;
}
class LockFill extends Icon {
  code = 59993;
}
class LockOutline extends Icon {
  code = 59994;
}
class LoopOutline extends Icon {
  code = 59995;
}
class MailFill extends Icon {
  code = 59996;
}
class MailOpenOutline extends Icon {
  code = 59997;
}
class MailOutline extends Icon {
  code = 59998;
}
class MessageFill extends Icon {
  code = 59999;
}
class MessageOutline extends Icon {
  code = 6e4;
}
class MinusCircleOutline extends Icon {
  code = 60001;
}
class MinusOutline extends Icon {
  code = 60002;
}
class MoreOutline extends Icon {
  code = 60003;
}
class MovieOutline extends Icon {
  code = 60004;
}
class PayCircleOutline extends Icon {
  code = 60005;
}
class PhonebookFill extends Icon {
  code = 60006;
}
class PhonebookOutline extends Icon {
  code = 60007;
}
class PhoneFill extends Icon {
  code = 60008;
}
class PictureOutline extends Icon {
  code = 60009;
}
class PicturesOutline extends Icon {
  code = 60010;
}
class PictureWrongOutline extends Icon {
  code = 60011;
}
class PieOutline extends Icon {
  code = 60012;
}
class PlayOutline extends Icon {
  code = 60013;
}
class QuestionCircleFill extends Icon {
  code = 60014;
}
class QuestionCircleOutline extends Icon {
  code = 60015;
}
class ReceiptOutline extends Icon {
  code = 60016;
}
class ReceivePaymentOutline extends Icon {
  code = 60017;
}
class RedoOutline extends Icon {
  code = 60018;
}
class RightOutline extends Icon {
  code = 60019;
}
class ScanCodeOutline extends Icon {
  code = 60020;
}
class ScanningFaceOutline extends Icon {
  code = 60021;
}
class ScanningOutline extends Icon {
  code = 60022;
}
class SearchOutline extends Icon {
  code = 60023;
}
class SendOutline extends Icon {
  code = 60024;
}
class SetOutline extends Icon {
  code = 60025;
}
class ShopbagOutline extends Icon {
  code = 60026;
}
class ShrinkOutline extends Icon {
  code = 60027;
}
class SmileFill extends Icon {
  code = 60028;
}
class SmileOutline extends Icon {
  code = 60029;
}
class SoundMuteFill extends Icon {
  code = 60030;
}
class SoundMuteOutline extends Icon {
  code = 60031;
}
class SoundOutline extends Icon {
  code = 60032;
}
class StarFill extends Icon {
  code = 60033;
}
class StarOutline extends Icon {
  code = 60034;
}
class StopOutline extends Icon {
  code = 60035;
}
class SystemQRcodeOutline extends Icon {
  code = 60036;
}
class TagOutline extends Icon {
  code = 60037;
}
class TeamFill extends Icon {
  code = 60038;
}
class TeamOutline extends Icon {
  code = 60039;
}
class TextDeletionOutline extends Icon {
  code = 60040;
}
class TextOutline extends Icon {
  code = 60041;
}
class TransportQRcodeOutline extends Icon {
  code = 60042;
}
class TravelOutline extends Icon {
  code = 60043;
}
class TruckOutline extends Icon {
  code = 60044;
}
class UiwAdobe extends Icon {
  code = 60045;
}
class UiwAlipay extends Icon {
  code = 60046;
}
class UiwAliwangwang extends Icon {
  code = 60047;
}
class UiwAndroidO extends Icon {
  code = 60048;
}
class UiwAndroid extends Icon {
  code = 60049;
}
class UiwApple extends Icon {
  code = 60050;
}
class UiwAppstoreO extends Icon {
  code = 60051;
}
class UiwAppstore extends Icon {
  code = 60052;
}
class UiwAreaChart extends Icon {
  code = 60053;
}
class UiwArrowDown extends Icon {
  code = 60054;
}
class UiwArrowLeft extends Icon {
  code = 60055;
}
class UiwArrowRight extends Icon {
  code = 60056;
}
class UiwArrowUp extends Icon {
  code = 60057;
}
class UiwArrowsAlt extends Icon {
  code = 60058;
}
class UiwAsterisk extends Icon {
  code = 60059;
}
class UiwBackward extends Icon {
  code = 60060;
}
class UiwBaidu extends Icon {
  code = 60061;
}
class UiwBarChart extends Icon {
  code = 60062;
}
class UiwBarcode extends Icon {
  code = 60063;
}
class UiwBell extends Icon {
  code = 60064;
}
class UiwCameraO extends Icon {
  code = 60065;
}
class UiwCaretDown extends Icon {
  code = 60066;
}
class UiwCaretLeft extends Icon {
  code = 60067;
}
class UiwCaretRight extends Icon {
  code = 60068;
}
class UiwCaretUp extends Icon {
  code = 60069;
}
class UiwCheckSquareO extends Icon {
  code = 60070;
}
class UiwCheckSquare extends Icon {
  code = 60071;
}
class UiwCheck extends Icon {
  code = 60072;
}
class UiwChrome extends Icon {
  code = 60073;
}
class UiwCircleCheckO extends Icon {
  code = 60074;
}
class UiwCircleCheck extends Icon {
  code = 60075;
}
class UiwCircleCloseO extends Icon {
  code = 60076;
}
class UiwCircleClose extends Icon {
  code = 60077;
}
class UiwCircleO extends Icon {
  code = 60078;
}
class UiwCloseSquareO extends Icon {
  code = 60079;
}
class UiwCloseSquare extends Icon {
  code = 60080;
}
class UiwClose extends Icon {
  code = 60081;
}
class UiwCloudDownloadO extends Icon {
  code = 60082;
}
class UiwCloudDownload extends Icon {
  code = 60083;
}
class UiwCloudUploadO extends Icon {
  code = 60084;
}
class UiwCloudUpload extends Icon {
  code = 60085;
}
class UiwCoffee extends Icon {
  code = 60086;
}
class UiwComponent extends Icon {
  code = 60087;
}
class UiwCopy extends Icon {
  code = 60088;
}
class UiwCopyright extends Icon {
  code = 60089;
}
class UiwCss3 extends Icon {
  code = 60090;
}
class UiwCut extends Icon {
  code = 60091;
}
class UiwDArrowLeft extends Icon {
  code = 60092;
}
class UiwDArrowRight extends Icon {
  code = 60093;
}
class UiwDCaret extends Icon {
  code = 60094;
}
class UiwDashboard extends Icon {
  code = 60095;
}
class UiwDate extends Icon {
  code = 60096;
}
class UiwDelete extends Icon {
  code = 60097;
}
class UiwDingding extends Icon {
  code = 60098;
}
class UiwDislikeO extends Icon {
  code = 60099;
}
class UiwDocument extends Icon {
  code = 60100;
}
class UiwDotChart extends Icon {
  code = 60101;
}
class UiwDownCircleO extends Icon {
  code = 60102;
}
class UiwDownCircle extends Icon {
  code = 60103;
}
class UiwDownSquareO extends Icon {
  code = 60104;
}
class UiwDownSquare extends Icon {
  code = 60105;
}
class UiwDown extends Icon {
  code = 60106;
}
class UiwDownload extends Icon {
  code = 60107;
}
class UiwEdit extends Icon {
  code = 60108;
}
class UiwEnter extends Icon {
  code = 60109;
}
class UiwEnvironmentO extends Icon {
  code = 60110;
}
class UiwEnvironment extends Icon {
  code = 60111;
}
class UiwEyeO extends Icon {
  code = 60112;
}
class UiwEye extends Icon {
  code = 60113;
}
class UiwFacebook extends Icon {
  code = 60114;
}
class UiwFileAdd extends Icon {
  code = 60115;
}
class UiwFileExcel extends Icon {
  code = 60116;
}
class UiwFileJpg extends Icon {
  code = 60117;
}
class UiwFilePdf extends Icon {
  code = 60118;
}
class UiwFileText extends Icon {
  code = 60119;
}
class UiwFileUnknown extends Icon {
  code = 60120;
}
class UiwFilter extends Icon {
  code = 60121;
}
class UiwFirefox extends Icon {
  code = 60122;
}
class UiwFolderAdd extends Icon {
  code = 60123;
}
class UiwFolderOpen extends Icon {
  code = 60124;
}
class UiwFolder extends Icon {
  code = 60125;
}
class UiwForward extends Icon {
  code = 60126;
}
class UiwFoursquare extends Icon {
  code = 60127;
}
class UiwFrownO extends Icon {
  code = 60128;
}
class UiwFrown extends Icon {
  code = 60129;
}
class UiwGithubO extends Icon {
  code = 60130;
}
class UiwGithub extends Icon {
  code = 60131;
}
class UiwGlobal extends Icon {
  code = 60132;
}
class UiwHeartOff extends Icon {
  code = 60133;
}
class UiwHeartOn extends Icon {
  code = 60134;
}
class UiwHome extends Icon {
  code = 60135;
}
class UiwHtml5 extends Icon {
  code = 60136;
}
class UiwIe extends Icon {
  code = 60137;
}
class UiwInbox extends Icon {
  code = 60138;
}
class UiwInformationO extends Icon {
  code = 60139;
}
class UiwInformation extends Icon {
  code = 60140;
}
class UiwLaptop extends Icon {
  code = 60141;
}
class UiwLeftCircleO extends Icon {
  code = 60142;
}
class UiwLeftCircle extends Icon {
  code = 60143;
}
class UiwLeftSquareO extends Icon {
  code = 60144;
}
class UiwLeftSquare extends Icon {
  code = 60145;
}
class UiwLeft extends Icon {
  code = 60146;
}
class UiwLikeO extends Icon {
  code = 60147;
}
class UiwLink extends Icon {
  code = 60148;
}
class UiwLinkedin extends Icon {
  code = 60149;
}
class UiwLinux extends Icon {
  code = 60150;
}
class UiwLoading extends Icon {
  code = 60151;
}
class UiwLock extends Icon {
  code = 60152;
}
class UiwLogin extends Icon {
  code = 60153;
}
class UiwLogout extends Icon {
  code = 60154;
}
class UiwMailO extends Icon {
  code = 60155;
}
class UiwMail extends Icon {
  code = 60156;
}
class UiwMan extends Icon {
  code = 60157;
}
class UiwMap extends Icon {
  code = 60158;
}
class UiwMehO extends Icon {
  code = 60159;
}
class UiwMeh extends Icon {
  code = 60160;
}
class UiwMenuFold extends Icon {
  code = 60161;
}
class UiwMenuUnfold extends Icon {
  code = 60162;
}
class UiwMenu extends Icon {
  code = 60163;
}
class UiwMessage extends Icon {
  code = 60164;
}
class UiwMinusCircleO extends Icon {
  code = 60165;
}
class UiwMinusCircle extends Icon {
  code = 60166;
}
class UiwMinusSquareO extends Icon {
  code = 60167;
}
class UiwMinusSquare extends Icon {
  code = 60168;
}
class UiwMinus extends Icon {
  code = 60169;
}
class UiwMobile extends Icon {
  code = 60170;
}
class UiwMore extends Icon {
  code = 60171;
}
class UiwNotification extends Icon {
  code = 60172;
}
class UiwOpera extends Icon {
  code = 60173;
}
class UiwPaperClip extends Icon {
  code = 60174;
}
class UiwPauseCircleO extends Icon {
  code = 60175;
}
class UiwPauseCircle extends Icon {
  code = 60176;
}
class UiwPause extends Icon {
  code = 60177;
}
class UiwPayCircleO extends Icon {
  code = 60178;
}
class UiwPay extends Icon {
  code = 60179;
}
class UiwPicasa extends Icon {
  code = 60180;
}
class UiwPicture extends Icon {
  code = 60181;
}
class UiwPieChart extends Icon {
  code = 60182;
}
class UiwPinterest extends Icon {
  code = 60183;
}
class UiwPlayCircleO extends Icon {
  code = 60184;
}
class UiwPlayCircle extends Icon {
  code = 60185;
}
class UiwPlusCircleO extends Icon {
  code = 60186;
}
class UiwPlusCircle extends Icon {
  code = 60187;
}
class UiwPlusSquareO extends Icon {
  code = 60188;
}
class UiwPlusSquare extends Icon {
  code = 60189;
}
class UiwPlus extends Icon {
  code = 60190;
}
class UiwPoweroff extends Icon {
  code = 60191;
}
class UiwPrinter extends Icon {
  code = 60192;
}
class UiwQq extends Icon {
  code = 60193;
}
class UiwQrcode extends Icon {
  code = 60194;
}
class UiwQuestionCircleO extends Icon {
  code = 60195;
}
class UiwQuestionCircle extends Icon {
  code = 60196;
}
class UiwReddit extends Icon {
  code = 60197;
}
class UiwReload extends Icon {
  code = 60198;
}
class UiwRightCircleO extends Icon {
  code = 60199;
}
class UiwRightCircle extends Icon {
  code = 60200;
}
class UiwRightSquareO extends Icon {
  code = 60201;
}
class UiwRightSquare extends Icon {
  code = 60202;
}
class UiwRight extends Icon {
  code = 60203;
}
class UiwRollback extends Icon {
  code = 60204;
}
class UiwSafari extends Icon {
  code = 60205;
}
class UiwSafety extends Icon {
  code = 60206;
}
class UiwSave extends Icon {
  code = 60207;
}
class UiwSearch extends Icon {
  code = 60208;
}
class UiwSettingO extends Icon {
  code = 60209;
}
class UiwSetting extends Icon {
  code = 60210;
}
class UiwShare extends Icon {
  code = 60211;
}
class UiwShoppingCart extends Icon {
  code = 60212;
}
class UiwShrink extends Icon {
  code = 60213;
}
class UiwSmileO extends Icon {
  code = 60214;
}
class UiwSmile extends Icon {
  code = 60215;
}
class UiwSquareO extends Icon {
  code = 60216;
}
class UiwStarOff extends Icon {
  code = 60217;
}
class UiwStarOn extends Icon {
  code = 60218;
}
class UiwStopO extends Icon {
  code = 60219;
}
class UiwStop extends Icon {
  code = 60220;
}
class UiwSwapLeft extends Icon {
  code = 60221;
}
class UiwSwapRight extends Icon {
  code = 60222;
}
class UiwSwap extends Icon {
  code = 60223;
}
class UiwTable extends Icon {
  code = 60224;
}
class UiwTagO extends Icon {
  code = 60225;
}
class UiwTag extends Icon {
  code = 60226;
}
class UiwTagsO extends Icon {
  code = 60227;
}
class UiwTags extends Icon {
  code = 60228;
}
class UiwTaobao extends Icon {
  code = 60229;
}
class UiwTimeO extends Icon {
  code = 60230;
}
class UiwTime extends Icon {
  code = 60231;
}
class UiwTwitter extends Icon {
  code = 60232;
}
class UiwUiw extends Icon {
  code = 60233;
}
class UiwUnlock extends Icon {
  code = 60234;
}
class UiwUpCircleO extends Icon {
  code = 60235;
}
class UiwUpCircle extends Icon {
  code = 60236;
}
class UiwUpSquareO extends Icon {
  code = 60237;
}
class UiwUpSquare extends Icon {
  code = 60238;
}
class UiwUp extends Icon {
  code = 60239;
}
class UiwUpload extends Icon {
  code = 60240;
}
class UiwUserAdd extends Icon {
  code = 60241;
}
class UiwUserDelete extends Icon {
  code = 60242;
}
class UiwUser extends Icon {
  code = 60243;
}
class UiwUsergroupAdd extends Icon {
  code = 60244;
}
class UiwUsergroupDelete extends Icon {
  code = 60245;
}
class UiwVerification extends Icon {
  code = 60246;
}
class UiwVerticleLeft extends Icon {
  code = 60247;
}
class UiwVerticleRight extends Icon {
  code = 60248;
}
class UiwVideoCamera extends Icon {
  code = 60249;
}
class UiwWarningO extends Icon {
  code = 60250;
}
class UiwWarning extends Icon {
  code = 60251;
}
class UiwWeibo extends Icon {
  code = 60252;
}
class UiwWeixin extends Icon {
  code = 60253;
}
class UiwWifi extends Icon {
  code = 60254;
}
class UiwWindows extends Icon {
  code = 60255;
}
class UiwWoman extends Icon {
  code = 60256;
}
class UiwZoomIn extends Icon {
  code = 60257;
}
class UiwZoomOut extends Icon {
  code = 60258;
}
class UndoOutline extends Icon {
  code = 60259;
}
class UnlockOutline extends Icon {
  code = 60260;
}
class UnorderedListOutline extends Icon {
  code = 60261;
}
class UpCircleOutline extends Icon {
  code = 60262;
}
class UploadOutline extends Icon {
  code = 60263;
}
class UpOutline extends Icon {
  code = 60264;
}
class UserAddOutline extends Icon {
  code = 60265;
}
class UserCircleOutline extends Icon {
  code = 60266;
}
class UserContactOutline extends Icon {
  code = 60267;
}
class UserOutline extends Icon {
  code = 60268;
}
class UserSetOutline extends Icon {
  code = 60269;
}
class VideoOutline extends Icon {
  code = 60270;
}
const classPrefix$v = `adm-loading`;
class Loading extends Component {
  render = (props) => {
    const { color = "default" } = props;
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$v
    }, /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix$v}-${color}`
    }, /* @__PURE__ */ avm.h(Icon, null)));
  };
}
var space = "";
const classPrefix$u = `adm-space`;
const defaultProps$n = {
  direction: "horizontal",
  gap: "8px"
};
class Space extends Component {
  render = (props) => {
    props = mergeProps(defaultProps$n, props);
    const { direction, gap, gapHorizontal, gapVertical } = props;
    const itemStyles = {};
    const gaps = direction === "horizontal" ? gapHorizontal || gap : gapVertical || gap;
    itemStyles[direction === "horizontal" ? "marginRight" : "marginBottom"] = gaps;
    const wrapStyles = {};
    if (props.wrap && direction === "horizontal") {
      const vGap = gapVertical || gap;
      wrapStyles["marginBottom"] = `-${vGap}`;
      itemStyles["paddingBottom"] = vGap;
    }
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$u, {
        [`${classPrefix$u}-wrap`]: props.wrap,
        [`${classPrefix$u}-${direction}-wrap`]: props.wrap,
        [`${classPrefix$u}-block`]: props.block,
        [`${classPrefix$u}-${direction}`]: true,
        [`${classPrefix$u}-align-${props.align}`]: !!props.align,
        [`${classPrefix$u}-justify-${props.justify}`]: !!props.justify
      }),
      style: wrapStyles
    }, props.children.map((child, index2) => {
      return child !== null && child !== void 0 && /* @__PURE__ */ avm.h("div", {
        className: classNames(`${classPrefix$u}-item`, `${classPrefix$u}-${direction}-item`, {
          [`${classPrefix$u}-${direction}-item-last`]: index2 === props.children.length - 1,
          [`${classPrefix$u}-${direction}-wrap-item`]: props.wrap
        }),
        style: itemStyles
      }, child);
    }));
  };
}
var list = "";
const classPrefix$t = `adm-list`;
const defaultProps$m = {
  mode: "default"
};
class List$1 extends Component {
  install = () => {
    console.log("List!");
  };
  render = (props) => {
    props = mergeProps(defaultProps$m, props);
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$t, `${classPrefix$t}--${props.mode}`)
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$t}--inner`
    }, props.children));
  };
}
const classPrefix$s = `adm-list-item`;
class ListItem extends Component {
  install = () => {
    console.log("ListItem!");
  };
  render = (props) => {
    const clickable = props.clickable ?? !!props.onClick;
    const arrow = props.arrow === void 0 ? clickable : props.arrow;
    const prefixWidth = !!props.prefixWidth ? props.prefixWidth : "auto";
    const disabledClass = props.disabled && "list-disabled";
    const childCls = `${classPrefix$s}-children`;
    const prefixCls = classNames(`${classPrefix$s}-content-prefix`, disabledClass);
    const prefixStyles = { width: prefixWidth };
    const extraCls = classNames(`${classPrefix$s}-content-extra`, disabledClass);
    const childEles = formatLabel(props.children, childCls);
    const prefixEles = formatLabel(props.prefix, prefixCls, prefixStyles);
    const extraEles = formatLabel(props.extra, extraCls);
    const content = /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$s}-content`
    }, props.prefix && prefixEles, /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$s}-content-main`, disabledClass)
    }, props.title && /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix$s}-title`
    }, props.title), childEles, props.description && /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix$s}-description`
    }, props.description)), props.extra && extraEles, arrow && /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$s}-content-arrow`, disabledClass)
    }, arrow === true ? /* @__PURE__ */ avm.h("span", null, ">") : arrow));
    const listItemCls = classNames(`${classPrefix$s}`, clickable ? ["adm-plain-anchor"] : [], props.disabled && `${classPrefix$s}-disabled`);
    const listItemEvent = props.disabled ? void 0 : props.onClick;
    return /* @__PURE__ */ avm.h("div", {
      className: listItemCls,
      onClick: listItemEvent
    }, content);
  };
}
function attachPropertiesToComponent(component, properties2) {
  const ret = component;
  for (const key in properties2) {
    if (properties2.hasOwnProperty(key)) {
      ret[key] = properties2[key];
    }
  }
  return ret;
}
const properties = {
  Item: ListItem
};
var List = attachPropertiesToComponent(List$1, properties);
var card = "";
const classPrefix$r = `adm-card`;
class Card extends Component {
  render = (props) => {
    const renderHeader = () => {
      if (!(props.title || props.extra)) {
        return null;
      }
      return /* @__PURE__ */ avm.h("div", {
        className: classNames(`${classPrefix$r}-header`, props.headerClassName),
        style: props.headerStyle,
        onClick: props.onHeaderClick
      }, props.title.children ? props.title : /* @__PURE__ */ avm.h("text", {
        className: `${classPrefix$r}-header-title`
      }, props.title), props.extra ? props.extra : /* @__PURE__ */ avm.h("text", null, props.extra));
    };
    const renderBody = () => {
      if (!props.children) {
        return null;
      }
      console.log(props.children);
      return /* @__PURE__ */ avm.h("div", {
        className: classNames(`${classPrefix$r}-body`, props.bodyClassName),
        style: props.bodyStyle,
        onClick: props.onBodyClick
      }, props.children);
    };
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$r,
      onClick: props.onClick
    }, renderHeader(), renderBody());
  };
}
var image = "";
function toCSSLength(val) {
  return typeof val === "number" ? `${val}px` : val;
}
var outlineUrl = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM4MDAxOTkwOTczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5NjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1MS41NTIgMTUxLjU1MnY3MjAuODk2aDcyMC44OTZWMTUxLjU1MkgxNTEuNTUyeiBtLTMyLjc2OC02NS41MzZoNzg2LjQzMmM5LjU1Njk5MiAwIDE3LjQwOCAzLjA3MiAyMy41NTIgOS4yMTZzOS4yMTYgMTMuOTk1MDA4IDkuMjE2IDIzLjU1MnY3ODYuNDMyYzAgOS41NTY5OTItMy4wNzIgMTcuNDA4LTkuMjE2IDIzLjU1MnMtMTMuOTk1MDA4IDkuMjE2LTIzLjU1MiA5LjIxNkgxMTguNzg0Yy05LjU1Njk5MiAwLTE3LjQwOC0zLjA3Mi0yMy41NTItOS4yMTZzLTkuMjE2LTEzLjk5NTAwOC05LjIxNi0yMy41NTJWMTE4Ljc4NGMwLTkuNTU2OTkyIDMuMDcyLTE3LjQwOCA5LjIxNi0yMy41NTJzMTMuOTk1MDA4LTkuMjE2IDIzLjU1Mi05LjIxNnogbTI2Mi4xNDQgMTk2LjYwOGM0My42OTEwMDggMCA2NS41MzYgMjEuODQ0OTkyIDY1LjUzNiA2NS41MzZzLTIxLjg0NDk5MiA2NS41MzYtNjUuNTM2IDY1LjUzNi02NS41MzYtMjEuODQ0OTkyLTY1LjUzNi02NS41MzYgMjEuODQ0OTkyLTY1LjUzNiA2NS41MzYtNjUuNTM2ek0xNzcuMTUyIDg4NS43NmwtNTEuMi0zOS45MzYgMjIxLjE4NC0yODguNzY4YzE2LjM4NC0yMS4xNjMwMDggMzguMDU5MDA4LTMzLjQ1MTAwOCA2NS4wMjQtMzYuODY0IDI2Ljk2NDk5Mi0zLjQxMjk5MiA1MS4wMjg5OTIgMi43MzEwMDggNzIuMTkyIDE4LjQzMmwxMjggMTAzLjQyNGM3LjUwODk5MiA1LjQ2MDk5MiAxNS41MzEwMDggNy42OCAyNC4wNjQgNi42NTZTNjUyLjI4OCA2NDMuNzU1MDA4IDY1OC40MzIgNjM2LjkyOGwyMjEuMTg0LTI3Ni40OCA1MS4yIDQwLjk2LTIyMS4xODQgMjc2LjQ4Yy0xNy4wNjcwMDggMjEuMTYzMDA4LTM5LjA4MzAwOCAzMy4xMDg5OTItNjYuMDQ4IDM1Ljg0LTI2Ljk2NDk5MiAyLjczMTAwOC01MS4wMjg5OTItNC4wOTYtNzIuMTkyLTIwLjQ4TDQ0NC40MTYgNTkwLjg0OGMtNy41MDg5OTItNS40NjA5OTItMTUuNTMxMDA4LTcuNjgtMjQuMDY0LTYuNjU2cy0xNS41MzEwMDggNS4yOTEwMDgtMjAuOTkyIDEyLjhMMTc3LjE1MiA4ODUuNzZ6IiBwLWlkPSIyOTYxIiBmaWxsPSIjYmZiZmJmIj48L3BhdGg+PC9zdmc+";
var warnUrl = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM4MDAyMDMxMzYzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEzNiA2NTkuMzQ0bDI1OS42NjctMjYwLjIxOWMzLjEtMy4xIDguMi0zLjEgMTEuMyAwbDg2LjEgODYuMiAzNy43NS0zNy43OWE3Ljg4OCA3Ljg4OCAwIDAgMSAxLjUwOC0yLjExbDE0NC4zLTE0NC4zYzIuOTU4LTIuOTU4IDcuNzM3LTMuMDkzIDEwLjg2Mi0wLjQwNyAwLjIzNSAwLjE4NyAwLjQ2MyAwLjM5IDAuNjggMC42MDdsMzYuOCAzNi44YzAuMjc0IDAuMjY1IDAuNTI0IDAuNTQ1IDAuNzUxIDAuODM3bDQyLjY0NyA0Mi42OTYgMC4wMDYgMC4wMDdhOCA4IDAgMCAxLTAuMDIgMTEuMzE0bC0zNi44NzYgMzYuNzQ3YTggOCAwIDAgMS0xMS4zMDctMC4wMTRsLTM3LjcwMy0zNy43NDctMTgzLjc5OCAxODMuOTZjLTMuMSAzLjEtOC4yIDMuMS0xMS4zIDBsLTg2LjEtODYuMkwxMzYgNzU1LjUxMlY3OTJoMzM0YTggOCAwIDAgMSA4IDh2NTZhOCA4IDAgMCAxLTggOEg5NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMTkyYzAtMTcuNyAxNC4zLTMyIDMyLTMyaDc4NGMxNy43IDAgMzIgMTQuMyAzMiAzMnYyMzJhOCA4IDAgMCAxLTggOGgtNTZhOCA4IDAgMCAxLTgtOFYyMzJIMTM2djQyNy4zNDR6TTI3NCA0MzJjLTM1LjM0NSAwLTY0LTI4LjY1NS02NC02NHMyOC42NTUtNjQgNjQtNjQgNjQgMjguNjU1IDY0IDY0LTI4LjY1NSA2NC02NCA2NHogbTQ3MCA0OGMxMTkuMyAwIDIxNiA5Ni43IDIxNiAyMTZzLTk2LjcgMjE2LTIxNiAyMTYtMjE2LTk2LjctMjE2LTIxNiA5Ni43LTIxNiAyMTYtMjE2eiBtMTA3LjUgMzIzLjVDODgwLjIgNzc0LjggODk2IDczNi42IDg5NiA2OTZjMC00MC42LTE1LjgtNzguOC00NC41LTEwNy41QzgyMi44IDU1OS44IDc4NC42IDU0NCA3NDQgNTQ0Yy00MC42IDAtNzguOCAxNS44LTEwNy41IDQ0LjVDNjA3LjggNjE3LjIgNTkyIDY1NS40IDU5MiA2OTZjMCA0MC42IDE1LjggNzguOCA0NC41IDEwNy41QzY2NS4yIDgzMi4yIDcwMy40IDg0OCA3NDQgODQ4YzQwLjYgMCA3OC44LTE1LjggMTA3LjUtNDQuNXpNNzEyIDc3NmMwLTE3LjY3MyAxNC4zMjctMzIgMzItMzIgMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMyIDAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMi0xNy42NzMgMC0zMi0xNC4zMjctMzItMzJ6IG0xMi02NGMtNC40IDAtOC0zLjYtOC04VjU5MmMwLTQuNCAzLjYtOCA4LThoNDBjNC40IDAgOCAzLjYgOCA4djExMmMwIDQuNC0zLjYgOC04IDhoLTQweiIgcC1pZD0iMzIwNCIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjwvc3ZnPg==";
const classPrefix$q = `adm-image`;
const defaultProps$l = {
  fit: "fill",
  placeholder: /* @__PURE__ */ avm.h("div", {
    className: `${classPrefix$q}-tip`
  }, /* @__PURE__ */ avm.h("text", null, "\u52A0\u8F09\u4E2D..."), /* @__PURE__ */ avm.h("img", {
    src: outlineUrl
  })),
  fallback: /* @__PURE__ */ avm.h("div", {
    className: `${classPrefix$q}-tip`
  }, /* @__PURE__ */ avm.h("text", null, "\u52A0\u8F09\u5931\u6557"), /* @__PURE__ */ avm.h("img", {
    src: warnUrl
  }))
};
class Image extends Component {
  install = () => {
    console.log("Image!");
    this.setLoaded(false);
    this.setFailed(false);
  };
  data = {
    loaded: false,
    failed: false
  };
  setLoaded = (status) => {
    this.data.loaded = status;
  };
  setFailed = (status) => {
    this.data.failed = status;
  };
  render = (props) => {
    props = mergeProps(defaultProps$l, props);
    let src = props.src;
    let srcSet = props.srcSet;
    const renderInner = () => {
      if (this.data.failed) {
        return formatLabel(props.fallback);
      }
      const img = /* @__PURE__ */ avm.h("img", {
        className: `${classPrefix$q}-img`,
        src,
        alt: props.alt,
        onClick: props.onClick,
        onLoad: () => {
          this.setLoaded(true);
        },
        onError: (e) => {
          this.setFailed(true);
          props.onError?.(e);
        },
        style: __spreadValues({
          objectFit: props.fit
        }, props.style),
        crossOrigin: props.crossOrigin,
        decoding: props.decoding,
        loading: props.loading,
        referrerPolicy: props.referrerPolicy,
        sizes: props.sizes,
        srcSet,
        useMap: props.useMap
      });
      return /* @__PURE__ */ avm.h("view", null, /* @__PURE__ */ avm.h("div", null, !this.data.loaded && props.placeholder), img);
    };
    const style = {};
    if (props.width) {
      style["width"] = toCSSLength(props.width);
    }
    if (props.height) {
      style["height"] = toCSSLength(props.height);
    }
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$q,
      style
    }, renderInner());
  };
}
var mask = "";
function useShouldRender(active, forceRender, destroyOnClose) {
  const initialized = active;
  if (forceRender)
    return true;
  if (active)
    return true;
  if (!initialized)
    return false;
  return !destroyOnClose;
}
const classPrefix$p = `adm-mask`;
const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75
};
const defaultProps$k = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: "black",
  opacity: "default",
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ["click"]
};
class Mask extends Component {
  render = (p) => {
    const props = mergeProps(defaultProps$k, p);
    const opacity = opacityRecord[props.opacity] ?? props.opacity;
    const rgb = props.color === "white" ? "255, 255, 255" : "0, 0, 0";
    const background = `rgba(${rgb}, ${opacity})`;
    const shouldRender = useShouldRender(props.visible, props.forceRender, props.destroyOnClose);
    console.log(props.onMaskClick);
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$p,
      style: __spreadProps(__spreadValues({}, props.style), {
        background,
        display: props.visible ? "flex" : "none"
      })
    }, props.onMaskClick && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$p}-aria-button`,
      role: "button",
      "aria-label": "Mask",
      onClick: props.onMaskClick
    }), /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$p}-content`,
      onClick: props.onMaskClick
    }, shouldRender && props.children));
  };
}
var noticeBar = "";
const classPrefix$o = `adm-notice-bar`;
const defaultProps$j = {
  color: "default",
  delay: 2e3,
  speed: 50
};
class NoticeBar extends Component {
  install = () => {
    console.log("notice-bar!");
  };
  data = {
    visible: true
  };
  setVisible = (status) => {
    this.data.visible = status;
  };
  render = (props) => {
    props = mergeProps(defaultProps$j, props);
    if (!this.data.visible)
      return null;
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$o, `${classPrefix$o}-${props.color}`)
    }, formatLabel("icon" in props ? props.icon : "\u9ED8\u8BA4icon", classNames(`${classPrefix$o}-left`, `${classPrefix$o}-left-${props.color}`)), /* @__PURE__ */ avm.h("view", {
      className: `${classPrefix$o}-content`
    }, formatLabel(props.content, classNames(`${classPrefix$o}-content-inner`, `${classPrefix$o}-content-inner-${props.color}`))), (props.closeable || props.extra) && /* @__PURE__ */ avm.h("view", {
      className: `${classPrefix$o}-right`
    }, props.extra && formatLabel(props.extra, `${classPrefix$o}-right-${props.color}`), props.closeable && /* @__PURE__ */ avm.h("text", {
      onClick: () => {
        this.setVisible(false);
        props.onClose?.();
      }
    }, "X")));
  };
}
var pageIndicator = "";
const classPrefix$n = `adm-page-indicator`;
const defaultProps$i = {
  color: "primary",
  direction: "horizontal"
};
class PageIndicator extends Component {
  install = () => {
    console.log("PageIndicator!");
  };
  render = (props) => {
    props = mergeProps(defaultProps$i, props);
    const {
      direction,
      dotColor = "rgba(0, 0, 0, 0.2)",
      activeDotColor = "#1677ff",
      dotSize = "3px",
      activeDotSize = "13px",
      dotBorderRadius = "1px",
      activeDotBorderRadius = "1px",
      dotSpacing = "3px"
    } = props;
    const isHorizontal = direction === "horizontal";
    const dots = [];
    for (let i = 0; i < props.total; i++) {
      dots.push(/* @__PURE__ */ avm.h("div", {
        key: i,
        className: classNames(`${classPrefix$n}-dot`, {
          [`${classPrefix$n}-dot-active`]: props.current === i
        }),
        style: {
          background: props.current === i ? activeDotColor : dotColor,
          width: props.current === i ? isHorizontal ? activeDotSize : dotSize : dotSize,
          height: props.current === i ? !isHorizontal ? activeDotSize : dotSize : dotSize,
          borderRadius: props.current === i ? activeDotBorderRadius : dotBorderRadius,
          marginRight: isHorizontal ? dotSpacing : 0,
          marginBottom: !isHorizontal ? dotSpacing : 0
        }
      }));
    }
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$n, `${classPrefix$n}-${props.direction}`, `${classPrefix$n}-color-${props.color}`)
    }, dots);
  };
}
var steps = "";
const classPrefix$m = `adm-step`;
class Step extends Component {
  install = () => {
    console.log("Step");
  };
  render = (props) => {
    const { title, description, status = "wait", direction, curIndex, totalLen } = props;
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$m}`, `${classPrefix$m}-${direction}`, `${classPrefix$m}-status-${status}`)
    }, /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$m}-indicator`, `${classPrefix$m}-${direction}-indicator`)
    }, /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$m}-icon-container`)
    }, /* @__PURE__ */ avm.h("span", {
      className: classNames(`${classPrefix$m}-icon-dot`, `${classPrefix$m}-icon-dot-${status}`)
    })), curIndex !== totalLen - 1 && /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$m}-line`, `${classPrefix$m}-${direction}-line`, `${classPrefix$m}-line-${status}`)
    })), /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$m}-content`, `${classPrefix$m}-${direction}-content`)
    }, /* @__PURE__ */ avm.h("span", {
      className: classNames(`${classPrefix$m}-title`, `${classPrefix$m}-title-${status}`)
    }, title), !!description && /* @__PURE__ */ avm.h("span", {
      className: classNames(`${classPrefix$m}-description`, `${classPrefix$m}-${direction}-content-description`)
    }, description)));
  };
}
const classPrefix$l = `adm-steps`;
const defaultProps$h = {
  current: 0,
  direction: "horizontal"
};
class Steps extends Component {
  install = () => {
    console.log("Steps!");
  };
  render = (props) => {
    props = mergeProps(defaultProps$h, props);
    const { direction, current, list: list2 = [] } = props;
    const stemItem = list2.map((item, index2) => {
      let { status, title, description } = item;
      if (index2 < current) {
        status = status || "finish";
      } else if (index2 === current) {
        status = status || "process";
      } else {
        status = status || "wait";
      }
      return /* @__PURE__ */ avm.h(Step, {
        status,
        title,
        description,
        direction,
        totalLen: list2.length,
        curIndex: index2
      });
    });
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$l, `${classPrefix$l}-${direction}`)
    }, stemItem);
  };
}
var checkList = "";
var checkedIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAARVJREFUOE/l1KFOw1AYxfH/12AQCJKtJQgEggQxg8AgMAgEhgcYBMcLdCtqnYONd0AxXgCNRWB4ASzJikCi6CFr6dYtK1vK3O4D/PKde757jQUfW7DHEoBeUzXBA/AS3djFvyJXfO05ToLtINpRx8LS4EZD+7El2HaGDQouBbq+DnDoAVt5rBRY8XXopNjmJDYE3abugF3FXH507bVoN71AR1KCVadhI7ChEKMFvPFNPbq150m0GujYET3BehE2Ftkdoe9m1PvX9pSh3pVOFCeTrSHCqGPtohRjpWSowScxZ/2uPbqBThH3wOosbGopuUm/ZJxbemcr82CFLefQNNmMmPn4hXs4RH9fwLy/UqnF/gtfQvAHBvFvFZsqVOUAAAAASUVORK5CYII=";
const classPrefix$k = `adm-check-list-item`;
class CheckListItem extends Component {
  install = () => {
    console.log("CheckListItem!");
  };
  render = (props) => {
    const active = props.checked ? props.checked.includes(props.value) : false;
    const readOnly = props.readOnly;
    const extra = /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$k}-extra`
    }, active ? /* @__PURE__ */ avm.h("img", {
      src: checkedIcon,
      alt: "checked"
    }) : "");
    return /* @__PURE__ */ avm.h(ListItem, {
      title: props.title,
      className: classNames({
        [`${classPrefix$k}-readonly`]: readOnly
      }),
      description: props.description,
      prefix: props.prefix,
      onClick: () => {
        if (readOnly)
          return;
        if (active) {
          props.uncheck(props.value);
        } else {
          props.check(props.value);
        }
        props.onClick?.(props.value, active);
      },
      arrow: false,
      clickable: !readOnly,
      extra,
      disabled: props.disabled
    }, props.label);
  };
}
const defaultProps$g = {
  multiple: false,
  defaultValue: [],
  disabled: false,
  readOnly: false
};
class CheckList extends Component {
  install = () => {
    console.log("CheckList!");
  };
  data = {
    checked: this.props.defaultValue || []
  };
  setChecked = (val) => {
    this.data.checked = val;
  };
  check = (val, props) => {
    if (props.multiple) {
      this.setChecked([...this.data.checked, val]);
    } else {
      this.setChecked([val]);
    }
    props.onChange && props.onChange(this.data.checked);
  };
  uncheck = (val, props) => {
    this.setChecked(this.data.checked.filter((item) => item !== val));
    props.onChange && props.onChange(this.data.checked);
  };
  render = (props) => {
    props = mergeProps(defaultProps$g, props);
    const { list: list2 = [] } = props;
    const childEle = list2.map((item) => {
      const disabled = item.disabled ?? props.disabled;
      const readOnly = item.readOnly ?? props.readOnly;
      return /* @__PURE__ */ avm.h(CheckListItem, __spreadProps(__spreadValues({}, item), {
        disabled,
        readOnly,
        checked: this.data.checked,
        check: () => this.check(item.value, props),
        uncheck: () => this.uncheck(item.value, props)
      }));
    });
    return /* @__PURE__ */ avm.h(List, {
      mode: props.mode
    }, childEle);
  };
}
var checkbox = "";
const classPrefix$j = `adm-checkbox`;
class Checkbox extends Component {
  install = () => {
    console.log("Checkbox!");
  };
  data = {
    checked: !!(this.props.defaultChecked || this.props.checked || this.props.defaultValue && this.props.defaultValue.includes(this.props.value))
  };
  setChecked = (props) => {
    if (!props.indeterminate && !props.disabled) {
      this.data.checked = !this.data.checked;
      if (this.data.checked) {
        props.check?.(props.value);
      } else {
        props.uncheck?.(props.value);
      }
    }
    props.onChange?.(this.data.checked);
  };
  render = (props) => {
    const usageWarning = () => {
      if (props.checked !== void 0) {
        const message = "When used with `CheckboxGroup`, the `checked` prop of `Checkbox` will not work if `value` prop of `Checkbox` is not undefined.";
        console.warn(`[antd-mobile: Checkbox] ${message}`);
      }
      if (props.defaultChecked !== void 0) {
        const message = "When used with `CheckboxGroup`, the `defaultChecked` prop of `Checkbox` will not work if `value` prop of `Checkbox` is not undefined.";
        console.warn(`[antd-mobile: Checkbox] ${message}`);
      }
    };
    if (props.checkedList !== void 0 && props.value === void 0) {
      usageWarning();
    }
    const boxClsObj = {
      [`${classPrefix$j}-checked`]: this.data.checked && !props.disabled,
      [`${classPrefix$j}-indeterminate`]: props.indeterminate,
      [`${classPrefix$j}-disabled`]: props.disabled,
      [`${classPrefix$j}-block`]: props.block
    };
    const iconClsObj = Object.keys(boxClsObj).map((key) => ({ [`${key}-icon`]: boxClsObj[key] }));
    const iconTextClsObj = Object.keys(boxClsObj).map((key) => ({ [`${key}-icon-text`]: boxClsObj[key] }));
    const boxClassStr = classNames(classPrefix$j, boxClsObj);
    const iconClassStr = classNames(`${classPrefix$j}-icon`, iconClsObj);
    const iconTextClassStr = classNames(`${classPrefix$j}-icon-text`, iconTextClsObj);
    const contentClassStr = classNames(`${classPrefix$j}-content`, {
      [`${classPrefix$j}-disabled-content`]: props.disabled
    });
    const iconSize = props.iconSize || "22px";
    const iconSizeStyle = {};
    iconSizeStyle["width"] = iconSize;
    iconSizeStyle["height"] = iconSize;
    iconSizeStyle["lineHeight"] = iconSize;
    return /* @__PURE__ */ avm.h("label", {
      className: boxClassStr
    }, /* @__PURE__ */ avm.h("div", {
      className: iconClassStr,
      onClick: () => this.setChecked(props),
      style: iconSizeStyle
    }, /* @__PURE__ */ avm.h("span", {
      className: iconTextClassStr,
      style: { fontSize: `${Number(iconSize.replace("px", "")) - 6}px`, lineHeight: iconSize }
    }, !!this.data.checked && "\u221A")), props.children && /* @__PURE__ */ avm.h("span", {
      className: contentClassStr,
      style: { fontSize: props.fontSize || "17px", paddingLeft: props.gap || "8px" }
    }, props.children));
  };
}
const defaultProps$f = {
  disabled: false,
  list: []
};
class CheckboxGroup extends Component {
  install = () => {
    console.log("Group!");
  };
  data = {
    checkList: [],
    hasChecked: false
  };
  setCheckList = (val, props) => {
    this.data.checkList = val;
    this.data.hasChecked = true;
    props.onChange?.(val);
  };
  render = (props) => {
    props = mergeProps(defaultProps$f, props);
    const { defaultValue, list: list2, disabled } = props;
    if (defaultValue && !this.data.hasChecked) {
      this.data.checkList = defaultValue;
    }
    const listEle = list2.map((item) => {
      return /* @__PURE__ */ avm.h(Checkbox, __spreadProps(__spreadValues({}, item), {
        defaultValue,
        checkedList: this.data.checkList,
        disabled: item.disabled || disabled,
        check: (val) => {
          this.setCheckList([...this.data.checkList, val], props);
        },
        uncheck: (val) => {
          this.setCheckList(this.data.checkList.filter((v) => v !== val), props);
        }
      }), item.label);
    });
    return /* @__PURE__ */ avm.h("div", null, listEle);
  };
}
var index$1 = attachPropertiesToComponent(Checkbox, {
  Group: CheckboxGroup
});
var input = "";
var closeIcon$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAe5JREFUSEutlT9rFFEUxc/ZXbZUEK3Ewj8QFYyycx8Kotj4AWy01DQiCdqIYiEkaRUsDJI2EBuxsLcRVJYN7800ohjUYGGlfoY5MsvOsLuZ2VnMDkwz79zfu+++e88QNU+v19vXarVOkTwrqSHpE8ltM/s7KZRViyGER5JukDxXodkG8NbM7pWt7wInSXI6TdNNAJ260wzWd0jeiqLow7B+BOy9XyG5PCVwRCZp1Tm3kn8swN77OZJf/weax0g66ZzLSoQCHELoATg/JFqty17SKwBXSR4YxG2Z2YUC7L1/QvLBULavzex6TWk2zGxhXCPpqXPuYT/jEMI3ACfGyjAJvm5mi2UbS/rlnDvCJEkOpWn6u6K2ZfBnZna/5jQRvfdXSL6bcGkFvNFotKIoejxF9ywxhLAI4EVNN/ThmWYKKCS9zMB3AKzPEkxyIyvFRZIfZ1mKNE0XsowPAvgz48ubz9stm7i5snaL43hZUjGqA01luwH4aWZHc/BzAHdnMSAA1jLHGx7pHwCO7XGkd8zs+IhXxHF8SdL7vZgQycu5fY7YZkU9p9qr0jbz6G63e7jdbq8BuDYVEdiSdDO3y11+PA6J43hJ0m0A8xUbfJf0JnOysvXKf14uDiHsB3Bm8FLSl2az+bnT6VT1fj/0H9kXDeO4/QD9AAAAAElFTkSuQmCC";
const classPrefix$i = `adm-input`;
const defaultProps$e = {
  defaultValue: "",
  maxLength: 500,
  minLength: 0,
  fontSize: "17px",
  color: "#333",
  placeholderColor: "#ccc",
  disabledColor: "#999",
  textAlign: "left"
};
class Input extends Component {
  install = () => {
    console.log("Input!");
  };
  data = {
    value: this.props.value || this.props.defaultValue,
    hasFocus: false
  };
  setValue = (val) => {
    this.data.value = val;
    this.props.onChange && this.props.onChange(this.data.value);
  };
  setHasFocus = (state) => {
    this.data.hasFocus = state;
  };
  render = (props) => {
    this.props = mergeProps(defaultProps$e, props);
    const {
      id,
      color,
      fontSize,
      disabledColor,
      textAlign,
      placeholderColor,
      placeholderClass,
      disabled,
      readOnly,
      placeholder,
      maxLength,
      minLength,
      max,
      min,
      clearable,
      onEnterPress,
      onKeyDown,
      onInput,
      onFocus,
      onBlur,
      onKeyUp,
      onClear,
      autoComplete = "on",
      enterKeyHint,
      pattern,
      type,
      autoCapitalize,
      autoCorrect
    } = this.props;
    const handleKeydown = (e) => {
      if (onEnterPress && (e.code === "Enter" || e.keyCode === 13)) {
        onEnterPress(e);
      }
      onKeyDown?.(e);
    };
    const iptStyles = {
      fontSize,
      color: disabled ? disabledColor : color,
      textAlign
    };
    return /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$i}-wrapper`
    }, /* @__PURE__ */ avm.h("input", {
      id,
      value: this.data.value,
      className: classNames(classPrefix$i, {
        [`${classPrefix$i}-disabled`]: disabled,
        [`${classPrefix$i}-readOnly`]: readOnly
      }),
      style: iptStyles,
      "placeholder-style": `color: ${placeholderColor}`,
      "placeholder-class": placeholderClass,
      placeholder,
      disabled: disabled || readOnly,
      maxLength,
      minLength,
      max,
      min,
      autoComplete,
      enterKeyHint,
      pattern,
      type,
      autoCapitalize,
      autoCorrect,
      onKeyDown: handleKeydown,
      onKeyUp,
      onInput: (e) => {
        this.setValue(e.detail.value);
        onInput?.(e);
      },
      onChange: (e) => {
        this.setValue(e.detail.value);
      },
      onFocus: (e) => {
        this.setHasFocus(true);
        onFocus?.(e);
      },
      onBlur: (e) => {
        !clearable ? this.setHasFocus(false) : setTimeout(() => {
          this.setHasFocus(false);
        }, 300);
        onBlur?.(e);
      }
    }), clearable && !!this.data.value && this.data.hasFocus && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$i}-clear`,
      onClick: () => {
        this.setValue("");
        onClear?.();
      }
    }, /* @__PURE__ */ avm.h("img", {
      src: closeIcon$1,
      alt: "close",
      className: `${classPrefix$i}-clear-icon`
    })));
  };
}
var tag = "";
const classPrefix$h = `adm-tag`;
const colorRecord = {
  default: "#666666",
  primary: "#1677ff",
  success: "#00b578",
  warning: "#ff8f1f",
  danger: "#ff3141"
};
const defaultProps$d = {
  color: "default",
  fill: "solid",
  round: false
};
class Tag extends Component {
  install = () => {
    console.log("Tag!");
  };
  render = (props) => {
    props = mergeProps(defaultProps$d, props);
    const color = colorRecord[props.color] ?? props.color;
    const styles = {};
    styles["border"] = `1px solid ${props.borderColor ?? color}`;
    if (props.fill === "outline") {
      styles["color"] = props.textColor ?? color;
    } else {
      styles["background"] = props.bgColor ?? color;
      styles["color"] = props.textColor ?? "#fff";
    }
    if (props.borderRadius && !props.round) {
      styles["borderRadius"] = props.borderRadius;
    }
    return /* @__PURE__ */ avm.h("span", {
      style: styles,
      onClick: props.onClick,
      className: classNames(classPrefix$h, {
        [`${classPrefix$h}-round`]: props.round
      })
    }, props.children);
  };
}
var radio = "";
const classPrefix$g = `adm-radio`;
const defaultProps$c = {
  defaultChecked: false
};
class Radio extends Component {
  install = () => {
    console.log("Radio!");
  };
  data = {
    checked: this.props.checked || this.props.defaultChecked
  };
  setChecked = (check) => {
    this.data.checked = check;
    this.props.onChange && this.props.onChange(this.props.value);
  };
  render = (props) => {
    props = mergeProps(defaultProps$c, props);
    const groupContext = props.RadioGroupContext;
    let disabled = props.disabled;
    const { value } = props;
    if (groupContext && value !== void 0) {
      this.data.checked = groupContext.value.includes(value);
      this.setChecked = (checked) => {
        if (checked) {
          groupContext.check(value);
        } else {
          groupContext.uncheck(value);
        }
        props.onChange?.(checked);
      };
      disabled = disabled || groupContext.disabled;
    }
    const renderIcon = () => {
      const iconCls = classNames(`${classPrefix$g}-icon`, {
        [`${classPrefix$g}-checked-icon`]: this.data.checked,
        [`${classPrefix$g}-disabled-icon`]: disabled
      });
      const radioSizeStyle = {};
      const iconSize = props.iconSize || "22px";
      radioSizeStyle["width"] = iconSize;
      radioSizeStyle["height"] = iconSize;
      radioSizeStyle["borderRadius"] = iconSize;
      if (props.icon) {
        return /* @__PURE__ */ avm.h("div", {
          style: { fontSize: iconSize }
        }, props.icon(this.data.checked));
      }
      return /* @__PURE__ */ avm.h("div", {
        className: iconCls,
        style: radioSizeStyle
      }, this.data.checked && /* @__PURE__ */ avm.h("text", {
        className: classNames(`${classPrefix$g}-icon-checked`, {
          [`${classPrefix$g}-icon-checked-disabled`]: disabled
        })
      }, "\u221A"));
    };
    const contentCls = classNames(`${classPrefix$g}-content`, {
      [`${classPrefix$g}-disabled-content`]: disabled
    });
    const contentStyles = {};
    contentStyles["fontSize"] = props.fontSize || "17px";
    contentStyles["paddingLeft"] = props.gap || "8px";
    return /* @__PURE__ */ avm.h("label", {
      className: classNames(classPrefix$g, props.className, {
        [`${classPrefix$g}-checked`]: this.data.checked,
        [`${classPrefix$g}-disabled`]: disabled,
        [`${classPrefix$g}-block`]: props.block
      }),
      style: props.style
    }, /* @__PURE__ */ avm.h("radio", {
      className: `${classPrefix$g}-input`,
      type: "radio",
      checked: this.data.checked,
      onChange: (e) => {
        !disabled && this.setChecked(e.detail.value);
      },
      disabled,
      id: props.id
    }), renderIcon(), props.children && formatLabel(props.children, contentCls, contentStyles));
  };
}
const defaultProps$b = {
  disabled: false,
  defaultValue: null
};
class Group extends Component {
  install = () => {
    console.log("RadioGroup!");
  };
  data = {
    value: this.props.value || this.props.defaultValue
  };
  setValue = (val) => {
    this.data.value = val;
    this.props.onChange && this.props.onChange(val);
  };
  render = (props) => {
    props = mergeProps(defaultProps$b, props);
    const RadioGroupContext = {
      value: this.data.value === null ? [] : [this.data.value],
      check: (v) => {
        this.setValue(v);
      },
      uncheck: () => {
      },
      disabled: props.disabled
    };
    const eles = props.children.map((ele) => /* @__PURE__ */ avm.h(Radio, __spreadProps(__spreadValues({}, ele.attributes), {
      RadioGroupContext
    }), ele.children));
    return /* @__PURE__ */ avm.h("div", null, eles);
  };
}
var index = attachPropertiesToComponent(Radio, {
  Group
});
var rate = "";
const classPrefix$f = `adm-rate`;
const defaultProps$a = {
  count: 5,
  allowHalf: false,
  character: "\u2605",
  defaultValue: 0,
  readOnly: false,
  allowClear: true
};
class Rate extends Component {
  install = () => {
    console.log("Rate!");
  };
  data = {
    value: 0
  };
  setValue = (val, props) => {
    this.data.value = val;
    props.onChange?.(this.data.value);
  };
  render = (props) => {
    props = mergeProps(defaultProps$a, props);
    const starList = Array(props.count).fill(null);
    let styles = {};
    const { starSize = "24px", activeColor = "#ffd21e" } = props;
    styles["padding"] = `${Number(starSize.replace("px", "")) / 8}px`;
    styles["line-height"] = starSize;
    styles["font-size"] = starSize;
    const renderStar = (v, half) => {
      return /* @__PURE__ */ avm.h("div", {
        className: classNames(`${classPrefix$f}-star`, {
          [`${classPrefix$f}-star-active`]: this.data.value >= v,
          [`${classPrefix$f}-star-half`]: half,
          [`${classPrefix$f}-star-readonly`]: props.readOnly
        }),
        style: __spreadProps(__spreadValues({}, styles), { color: this.data.value >= v ? activeColor : "#ccc" }),
        onClick: () => {
          if (props.readOnly)
            return;
          if (props.allowClear && this.data.value === v) {
            this.setValue(0, props);
          } else {
            this.setValue(v, props);
          }
        }
      }, formatLabel(props.character, "", { color: this.data.value >= v ? activeColor : "#ccc", fontSize: starSize }));
    };
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$f
    }, starList.map((_, i) => /* @__PURE__ */ avm.h("div", {
      key: i,
      className: classNames(`${classPrefix$f}-box`)
    }, props.allowHalf && renderStar(i + 0.5, true), renderStar(i + 1, false))));
  };
}
var search = "";
var searchIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAZJJREFUOE+l0zFoFUEQBuB/ltdaiK02lhaChSCIWEm6gEXQUjhuZ/dFUBvrCBZpxCLBu9njgWBhWtMoGJJIumBpIUHSRdFgEWzfzcgFL+Quz0TilXOz387M7hL+86P+ehHxAC4DuAhgD8BOXddvhsPhxqS9OoCIfATwFcCqc27LzM6a2QUAj4nogff+VR85AEREVPVbjHFu0k4ppU91Xd+PMa4f/r8PFEUx5Zx7ysxX/zaSsiwvEdHyYDC4kmXZrzavBeaI6GcIYeG4mYrIkqqWh6vYB0Rk2cxehBDeHQeUZTlPRLvM/KxTQdM/Ea1575dOqKB0zn3I8/x1B6iqKlPV88z85ATgPRHNeu+3OsBoNDozHo+3VXWmP+U2UUQeArjNzDePnEITSClNm9lzVc36SEopN7MEYIWZb00EmmBVVTdUddHMHBG9BXAOQANvOuceNfM2s+/MfLfTQr/voiiuO+eumdkuEW0y8+c2J6W0ZmZfmDlvYkfewr+8rQZR1R8hhDunAv7c3nsxxpenBtpKfwNXwLQR3X6r9QAAAABJRU5ErkJggg==";
var closeIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAe5JREFUSEutlT9rFFEUxc/ZXbZUEK3Ewj8QFYyycx8Kotj4AWy01DQiCdqIYiEkaRUsDJI2EBuxsLcRVJYN7800ohjUYGGlfoY5MsvOsLuZ2VnMDkwz79zfu+++e88QNU+v19vXarVOkTwrqSHpE8ltM/s7KZRViyGER5JukDxXodkG8NbM7pWt7wInSXI6TdNNAJ260wzWd0jeiqLow7B+BOy9XyG5PCVwRCZp1Tm3kn8swN77OZJf/weax0g66ZzLSoQCHELoATg/JFqty17SKwBXSR4YxG2Z2YUC7L1/QvLBULavzex6TWk2zGxhXCPpqXPuYT/jEMI3ACfGyjAJvm5mi2UbS/rlnDvCJEkOpWn6u6K2ZfBnZna/5jQRvfdXSL6bcGkFvNFotKIoejxF9ywxhLAI4EVNN/ThmWYKKCS9zMB3AKzPEkxyIyvFRZIfZ1mKNE0XsowPAvgz48ubz9stm7i5snaL43hZUjGqA01luwH4aWZHc/BzAHdnMSAA1jLHGx7pHwCO7XGkd8zs+IhXxHF8SdL7vZgQycu5fY7YZkU9p9qr0jbz6G63e7jdbq8BuDYVEdiSdDO3y11+PA6J43hJ0m0A8xUbfJf0JnOysvXKf14uDiHsB3Bm8FLSl2az+bnT6VT1fj/0H9kXDeO4/QD9AAAAAElFTkSuQmCC";
const classPrefix$e = `adm-search`;
const defaultProps$9 = {
  clearable: true,
  showCancelButton: false,
  defaultValue: "",
  clearOnCancel: true,
  cancelText: "\u53D6\u6D88",
  bgColor: "#f5f5f5",
  borderRadius: "6px",
  maxLength: 500,
  minLength: 0
};
class Search extends Component {
  install = () => {
    console.log("Search!");
  };
  data = {
    searchVal: this.props.value,
    hasFocus: false
  };
  setSearchValue = (val) => {
    this.data.searchVal = val;
    this.props.onChange && this.props.onChange(this.data.searchVal);
  };
  setHasFocus = (focus) => {
    this.data.hasFocus = focus;
  };
  render = (props) => {
    this.props = mergeProps(defaultProps$9, props);
    const {
      showCancelButton,
      clearOnCancel,
      clearable,
      bgColor,
      borderRadius,
      placeholderColor,
      onClear,
      onCancel,
      onFocus,
      onBlur,
      onSearch,
      onEnterPress,
      onKeyDown,
      maxLength,
      placeholder,
      cancelText
    } = this.props;
    const handleKeydown = (e) => {
      if (onEnterPress && (e.code === "Enter" || e.keyCode === 13)) {
        onSearch && onSearch(this.data.searchVal);
      }
      onKeyDown && onKeyDown(e);
    };
    const renderCancelButton = () => {
      let isShowCancel = false;
      if (typeof showCancelButton === "function") {
        isShowCancel = showCancelButton(this.data.hasFocus, this.data.searchVal);
      } else {
        isShowCancel = showCancelButton && !!this.data.searchVal;
      }
      return isShowCancel && /* @__PURE__ */ avm.h("span", {
        className: `${classPrefix$e}-suffix`,
        onClick: () => {
          if (clearOnCancel) {
            this.setSearchValue("");
            onClear?.();
          }
          onCancel?.();
        }
      }, cancelText);
    };
    const boxStyles = {
      background: bgColor,
      borderRadius
    };
    const boxCls = classNames(`${classPrefix$e}-input-box`, {
      [`${classPrefix$e}-active-input-box`]: this.data.hasFocus
    });
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$e, {
        [`${classPrefix$e}-active`]: this.data.hasFocus
      })
    }, /* @__PURE__ */ avm.h("div", {
      className: boxCls,
      style: boxStyles
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$e}-input-box-icon`
    }, /* @__PURE__ */ avm.h("img", {
      src: searchIcon,
      alt: "search"
    })), /* @__PURE__ */ avm.h("input", {
      className: `${classPrefix$e}-input`,
      value: this.data.searchVal,
      onInput: (e) => {
        this.setSearchValue(e.detail.value);
      },
      maxLength,
      placeholder,
      "placeholder-style": `color: ${placeholderColor}`,
      clearable,
      onFocus: (e) => {
        this.setHasFocus(true);
        onFocus?.(e);
      },
      onBlur: (e) => {
        setTimeout(() => {
          this.setHasFocus(false);
        }, 300);
        onBlur?.(e);
      },
      onClear,
      onKeyDown: handleKeydown
    }), !!this.data.searchVal && this.data.hasFocus && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$e}-clear`,
      onClick: () => {
        this.setSearchValue("");
        onClear?.();
      }
    }, /* @__PURE__ */ avm.h("img", {
      src: closeIcon,
      alt: "close",
      className: `${classPrefix$e}-clear-icon`
    }))), renderCancelButton());
  };
}
var grid = "";
const classPrefix$d = `adm-grid`;
class Grid$1 extends Component {
  install = () => {
    console.log("Grid!");
  };
  render = (props) => {
    const { gap = 0, columns } = props;
    const styles = {};
    styles["grid-template-columns"] = `repeat(${columns.toString()}, minmax(0, 1fr))`;
    if (Array.isArray(gap)) {
      styles["column-gap"] = toCSSLength(gap[0]);
      styles["row-gap"] = toCSSLength(gap[1]);
    } else {
      styles["column-gap"] = toCSSLength(gap);
      styles["row-gap"] = toCSSLength(gap);
    }
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$d,
      style: styles
    }, props.children);
  };
}
class GridItem extends Component {
  install = () => {
    console.log("GridItem!");
  };
  render = (props) => {
    props = mergeProps({ span: 1 }, props);
    const itemStyle = {};
    itemStyle["grid-column-end"] = `span ${props.span}`;
    return /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$d}-item`,
      style: itemStyle,
      onClick: props.onClick
    }, props.children);
  };
}
var Grid = attachPropertiesToComponent(Grid$1, {
  Item: GridItem
});
var selector = "";
var checkIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAIxJREFUOE/Vk7ENg0AQBGfbcSdIFpmphwJIiMgd2gk5ASkNUM8ipLdk4MF+EVj+fEa3e/fi5NNJnj8U2L4AhaRyjp8UIcBjEDyTBDF4IbDdA7Wkdr2ZPXgtuAF3IJfUvSRH8CaC7VnSAFdJwyc42kGQVEAGLAqLHV10C0HyeG9772KT1vj1BCn/4/cTTKW4NxE23iIWAAAAAElFTkSuQmCC";
const classPrefix$c = `adm-selector`;
const defaultProps$8 = {
  multiple: false,
  defaultValue: [],
  color: "#333",
  checkedColor: "#e7f1ff"
};
class Selector extends Component {
  install = () => {
    console.log("Selector!");
  };
  data = {
    value: this.props.value || this.props.defaultValue
  };
  setValue = (val) => {
    this.data.value = val;
    const extend = this.props.options.filter((option) => val.includes(option.value));
    this.props.onChange && this.props.onChange(val, extend);
  };
  render = (props) => {
    props = mergeProps(defaultProps$8, props);
    const activeStyles = {};
    activeStyles["color"] = props.color;
    activeStyles["background"] = props.checkedColor;
    const items = props.options.map((option) => {
      const active = (this.data.value || []).includes(option.value);
      const disabled = option.disabled || props.disabled;
      const itemCls = classNames(`${classPrefix$c}-item`, {
        [`${classPrefix$c}-item-active`]: active && !props.multiple,
        [`${classPrefix$c}-item-multiple-active`]: active && props.multiple,
        [`${classPrefix$c}-item-disabled`]: disabled
      });
      return /* @__PURE__ */ avm.h("div", {
        key: option.value,
        className: itemCls,
        style: active ? activeStyles : { background: "#f5f5f5" },
        onClick: () => {
          if (disabled) {
            return;
          }
          if (props.multiple) {
            const val = active ? this.data.value.filter((v) => v !== option.value) : [...this.data.value, option.value];
            this.setValue(val);
          } else {
            const val = active ? [] : [option.value];
            this.setValue(val);
          }
        }
      }, /* @__PURE__ */ avm.h("span", {
        className: `${classPrefix$c}-label`,
        style: { color: active ? props.color : "#333" }
      }, option.label), active && props.multiple && /* @__PURE__ */ avm.h("div", {
        className: `${classPrefix$c}-check-mark-wrapper`
      }, /* @__PURE__ */ avm.h("img", {
        src: checkIcon,
        className: `${classPrefix$c}-check-mark-wrapper-img`
      })));
    });
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$c
    }, !props.columns && /* @__PURE__ */ avm.h(Space, {
      wrap: true
    }, items), props.columns && /* @__PURE__ */ avm.h(Grid, {
      columns: props.columns,
      gap: 8
    }, items));
  };
}
var infiniteScroll = "";
const classPrefix$b = `adm-infinite-scroll`;
class InfiniteScrollContent extends Component {
  render = (props) => {
    return /* @__PURE__ */ avm.h("view", {
      className: `${classPrefix$b}-tip`
    }, props.hasMore ? /* @__PURE__ */ avm.h("view", null, /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix$b}-tip-text`
    }, props.hasMoreText || "\u52A0\u8F7D\u4E2D")) : /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix$b}-tip-text`
    }, props.notHasMoreText || "\u6CA1\u6709\u66F4\u591A\u4E86"));
  };
}
class InfiniteScroll extends Component {
  install = () => {
    console.log("InfiniteScroll!");
  };
  render = (props) => {
    props = mergeProps({ threshold: 250 }, props);
    const doLoadMore = () => {
      props.hasMore && props.loadMore();
    };
    return /* @__PURE__ */ avm.h("scroll-view", {
      "scroll-y": true,
      "show-scrollbar": false,
      bounces: true,
      className: classPrefix$b,
      "lower-threshold": props.threshold,
      onscrolltolower: doLoadMore
    }, props.children, /* @__PURE__ */ avm.h(InfiniteScrollContent, __spreadValues({
      hasMore: props.hasMore
    }, props)));
  };
}
var stepper = "";
function bound(position, min, max) {
  let ret = position;
  if (min !== void 0) {
    ret = Math.max(position, min);
  }
  if (max !== void 0) {
    ret = Math.min(ret, max);
  }
  return ret;
}
const classPrefix$a = `adm-stepper`;
const defaultProps$7 = {
  defaultValue: 0,
  step: 1,
  disabled: false
};
const toStringVal = (val) => {
  return val ? val.toString() : val === 0 ? "0" : "";
};
class Stepper extends Component {
  install = () => {
    console.log("Stepper!");
  };
  data = {
    value: 0,
    inputValue: 0,
    hasFocus: false,
    isInit: true
  };
  setValue = (val) => {
    this.data.isInit = false;
    this.data.value = val;
    this.setInputValue(toStringVal(val));
    this.props.onChange && this.props.onChange(Number(val));
  };
  setInputValue = (val) => {
    this.data.inputValue = val;
  };
  setHasFocus = (focus) => {
    this.data.hasFocus = focus;
    if (!this.data.hasFocus) {
      this.setInputValue(toStringVal(this.data.value));
    }
  };
  setValueWithCheck = (v) => {
    if (isNaN(v))
      return;
    let target = bound(v, this.props.min, this.props.max);
    if (this.props.digits || this.props.digits === 0) {
      target = parseFloat(target.toFixed(this.props.digits));
    }
    this.setValue(target);
  };
  handleInputChange = (v) => {
    this.setInputValue(v);
    this.setValueWithCheck(parseFloat(v));
  };
  handleMinus = () => {
    this.setValueWithCheck(this.data.value - this.props.step);
  };
  handlePlus = () => {
    this.setValueWithCheck(this.data.value + this.props.step);
  };
  minusDisabled = () => {
    if (this.props.min === void 0) {
      return this.props.disabled;
    } else {
      return this.props.disabled || this.data.value <= this.props.min;
    }
  };
  plusDisabled = () => {
    if (this.props.max === void 0) {
      return this.props.disabled;
    } else {
      return this.props.disabled || this.data.value >= this.props.max;
    }
  };
  render = (props) => {
    this.props = mergeProps(defaultProps$7, props);
    if (this.data.isInit) {
      this.data.value = props.value || props.defaultValue;
      this.data.inputValue = props.value !== void 0 ? toStringVal(props.value) : toStringVal(props.defaultValue);
    }
    const borderStyle = "1px solid #e5e5e5";
    const {
      disabled,
      height = "22px",
      inputWidth = "40px",
      inputFontSize = "13px",
      inputFontColor = "#333",
      borderRaduis = "2px",
      border = borderStyle,
      activeBorder = borderStyle,
      borderInner = borderStyle,
      btnFontSize = "10px",
      btnBgColor = "transparent",
      btnWidth = "22px",
      btnTextColor = "#1677ff"
    } = props;
    const btnWidthStyle = {};
    btnWidthStyle["width"] = btnWidth;
    const boxStyle = {
      height,
      width: `${Number(inputWidth.replace("px", "")) + Number(btnWidth.replace("px", "")) * 2}px`,
      borderRadius: borderRaduis,
      border: this.data.hasFocus ? activeBorder : border
    };
    const btnStyle = __spreadProps(__spreadValues({}, btnWidthStyle), {
      height,
      lineHeight: height,
      backgroundColor: btnBgColor,
      fontSize: `${Number(btnFontSize.replace("px", "")) + 5}px`,
      opacity: 1
    });
    const inputStyle = {
      height,
      width: inputWidth,
      fontSize: inputFontSize,
      color: disabled ? "#999" : inputFontColor,
      border: "none",
      borderLeft: borderInner,
      borderRight: borderInner,
      background: "transparent"
    };
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$a, {
        [`${classPrefix$a}-disabled`]: disabled,
        [`${classPrefix$a}-active`]: this.data.hasFocus
      }),
      style: boxStyle
    }, /* @__PURE__ */ avm.h(Button, {
      className: `${classPrefix$a}-minus`,
      onClick: this.handleMinus,
      disabled: this.minusDisabled(),
      fill: "none",
      style: __spreadProps(__spreadValues({}, btnStyle), {
        color: !this.minusDisabled() ? btnTextColor : "#999",
        borderRadius: `${borderRaduis} 0 0 ${borderRaduis}`
      })
    }, "-"), /* @__PURE__ */ avm.h("input", {
      className: `${classPrefix$a}-input`,
      style: inputStyle,
      onFocus: (e) => {
        this.setHasFocus(true);
        props.onFocus?.(e);
      },
      value: this.data.inputValue,
      disabled,
      onBlur: (e) => {
        disabled || this.handleInputChange(e.detail.value);
        this.setHasFocus(false);
        props.onBlur?.(e);
      }
    }), /* @__PURE__ */ avm.h(Button, {
      className: `${classPrefix$a}-plus`,
      onClick: this.handlePlus,
      disabled: this.plusDisabled(),
      fill: "none",
      style: __spreadProps(__spreadValues({}, btnStyle), {
        color: !this.plusDisabled() ? btnTextColor : "#999",
        borderRadius: `0 ${borderRaduis} ${borderRaduis} 0`
      })
    }, "+"));
  };
}
var progressBar = "";
const classPrefix$9 = `adm-progress-bar`;
class ProgressBar extends Component {
  install = () => {
    console.log("progress-bar!");
  };
  render = (props) => {
    const back = {};
    back["height"] = toCSSLength(props.strokeWidth) || "3px";
    back["borderRadius"] = toCSSLength(props.strokeWidth) || "3px";
    const styles = {};
    styles["width"] = `${props.percent}%`;
    styles["width"] = props.percent ? `${props.percent}%` : "0%";
    styles["background"] = props.strokeColor || "#1677ff";
    styles["borderRadius"] = toCSSLength(props.strokeWidth) || "3px";
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$9
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$9}-trail`,
      style: back
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$9}-fill`,
      style: styles
    })));
  };
}
var imageViewer = "";
function resolveContainer(getContainer) {
  const container = typeof getContainer === "function" ? getContainer() : getContainer;
  return container || document.body;
}
const canUseDom = !!(typeof window !== "undefined" && typeof document !== "undefined" && window.document && window.document.createElement);
function renderToContainer(getContainer, node) {
  console.log(getContainer);
  if (canUseDom && getContainer) {
    const container = resolveContainer(getContainer);
    avm.render(node, container);
    return;
  }
  return node;
}
const classPrefix$8 = `adm-image-viewer`;
class Slide extends Component {
  data = {
    zoom: this.props.zoom || 1
  };
  render = (props) => {
    const { zoom } = this.data;
    return /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$8}-slide`,
      onTouchMove: (e) => {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
      }
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$8}-control`
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$8}-image-wrapper`,
      style: `transform: scale(${zoom});`,
      onclick: () => props.onTap()
    }, /* @__PURE__ */ avm.h("img", {
      src: props.image,
      draggable: false
    }))));
  };
}
const classPrefix$7 = `adm-image-viewer`;
const defaultProps$6 = {
  maxZoom: 3,
  getContainer: null,
  visible: false
};
class ImageViewer extends Component {
  data = {
    visible: this.props.visible || defaultProps$6.visible
  };
  render = (p) => {
    const props = mergeProps(defaultProps$6, p);
    const node = /* @__PURE__ */ avm.h(Mask, {
      visible: props.visible,
      disableBodyScroll: false,
      opacity: "thick"
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$7}-content`
    }, props.image && /* @__PURE__ */ avm.h(Slide, {
      image: props.image,
      onTap: () => {
        console.log("onTab");
        props.onClose?.();
      },
      maxZoom: props.maxZoom
    })));
    return renderToContainer(props.getContainer, node);
  };
}
var divider = "";
const classPrefix$6 = `adm-divider`;
const defaultProps$5 = {
  contentPosition: "center",
  color: "#999999",
  borderColor: "#eeeeee",
  borderStyle: "solid",
  borderTopWidth: "1px"
};
class Divider extends Component {
  install = () => {
    console.log("Empty!");
  };
  render = (props) => {
    props = mergeProps(defaultProps$5, props);
    const { color } = props;
    const fontContentSty = {
      "color": (props.style && props.style["color"]) ?? color
    };
    const dividerLineSty = {
      "border-style": (props.style && props.style["borderStyle"]) ?? "solid",
      "border-color": (props.style && props.style["borderColor"]) ?? "#eeeeee"
    };
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$6, `${classPrefix$6}-${props.contentPosition}`)
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$6}-${props.contentPosition}-before ${classPrefix$6}-before`,
      style: dividerLineSty
    }), props.children.length > 0 && /* @__PURE__ */ avm.h("text", {
      className: `${classPrefix$6}-content`,
      style: fontContentSty
    }, props.children), /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$6}-after ${classPrefix$6}-${props.contentPosition}-after`,
      style: dividerLineSty
    }));
  };
}
var _switch = "";
var SpinIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAVRJREFUOE+dkj8sA3EYhp+3RBCJRLhbDEIsGE1iMHSRmJoymsTA3rsK0UnvLBYSiY2NpAtjd0aDWZpYeiUxWCS4T1ppU6XS+I3v9z3fv98rWp7j2RwwjzEheCZBMQpUbM1TszDiW1bGHnCCuCXGQaQFXTEcPoY6quc3QNe3PTOGK6HWW6u7WVuymEvEWSXQajVeA52M7SLcSqiNVqgW/xp/G1gUBFGobB287+9nqpTT629gXXM8O8ZY7nljUsO+LXSJgSivq7+gBpyxFND37TidgNWckZwN/Ascy1mvXN/WiLmL9nXTSUfXsy2gJGfLXD4oS+Q/YvJP+3ppV2AoY6Pd4uG9l8HaqK5neQMfcW1w8Bjoos23FATvUaiVxo6Ob6cYqYSYKQcq/TCBZ+fAeBRqtmGAplPvIDaBCkaBBGCkgWnBRbXTD8s1d3B9SxKTrGltTP4J2zx1X+NjPXUAAAAASUVORK5CYII=";
const classPrefix$5 = `adm-switch`;
const formatPx = (str) => {
  return Number(str.replace("px", ""));
};
const defaultProps$4 = {
  defaultChecked: false,
  checkedColor: "#1677ff",
  width: "50px",
  height: "30px",
  borderWidth: "2px"
};
class Switch extends Component {
  install = () => {
    console.log("Switch!");
    this.props = mergeProps(defaultProps$4, this.props);
  };
  data = {
    changing: false,
    checked: this.props.checked || this.props.defaultChecked
  };
  setChanging = (state) => {
    this.data.changing = state;
  };
  setChecked = (check) => {
    this.data.checked = check;
    this.props.onChange && this.props.onChange(this.data.checked);
  };
  render = (props) => {
    props = mergeProps(defaultProps$4, props);
    const { checkedColor, width, height, borderWidth } = props;
    const disabled = props.disabled || props.loading || false;
    const onClick = () => {
      if (disabled || props.loading || this.data.changing) {
        return;
      }
      this.setChanging(true);
      if (props.beforeChange) {
        try {
          const nextChecked = !this.data.checked;
          props.beforeChange(nextChecked);
          setTimeout(() => {
            this.setChecked(nextChecked);
            this.setChanging(false);
          }, 500);
        } catch (e) {
          this.setChanging(false);
          throw e;
        }
      } else {
        this.setChecked(!this.data.checked);
        this.setChanging(false);
      }
    };
    const checkboxStyle = {
      width,
      height,
      lineHeight: height,
      background: this.data.checked ? checkedColor : "#e5e5e5"
    };
    const handleSize = `${formatPx(props.height) - 2 * formatPx(borderWidth)}px`;
    const handleStyle = {
      width: handleSize,
      height: handleSize,
      borderRadius: handleSize,
      top: borderWidth,
      left: this.data.checked ? `${formatPx(width) - formatPx(handleSize)}px` : borderWidth
    };
    const marginSize = `${formatPx(height) - formatPx(borderWidth) + 5}px`;
    const innerStyle = {
      lineHeight: height,
      margin: this.data.checked ? `0 ${marginSize} 0 10px` : `0 10px 0 ${marginSize}`
    };
    const innerCls = classNames(`${classPrefix$5}-inner`, {
      [`${classPrefix$5}-checked-inner`]: this.data.checked
    });
    return /* @__PURE__ */ avm.h("div", {
      onClick,
      className: classNames(classPrefix$5, {
        [`${classPrefix$5}-checked`]: this.data.checked,
        [`${classPrefix$5}-disabled`]: disabled || this.data.changing
      })
    }, /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$5}-checkbox`, {
        [`${classPrefix$5}-checked-checkbox`]: this.data.checked
      }),
      style: checkboxStyle
    }, /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$5}-handle`, {
        [`${classPrefix$5}-checked-handle`]: this.data.checked
      }),
      style: handleStyle
    }, (props.loading || this.data.changing) && /* @__PURE__ */ avm.h("img", {
      src: SpinIcon,
      className: `${classPrefix$5}-icon`,
      alt: "switch-handle"
    })), formatLabel(this.data.checked ? props.checkedText : props.uncheckedText, innerCls, innerStyle)));
  };
}
var textArea = "";
const classPrefix$4 = "adm-text-area";
const defaultProps$3 = {
  rows: 2,
  showCount: false,
  autoSize: false,
  defaultValue: "",
  fontSize: "17px",
  color: "#333",
  placeholderColor: "#ccc",
  disabledColor: "#999"
};
class TextArea extends Component {
  install = () => {
    console.log("TextArea!");
  };
  data = {
    value: this.props.value || this.props.defaultValue
  };
  setValue = (val) => {
    this.data.value = val;
  };
  render = (props) => {
    this.props = mergeProps(defaultProps$3, props);
    const {
      className,
      style,
      rows,
      autoSize,
      showCount,
      disabled,
      readOnly,
      fontSize,
      color,
      placeholder,
      autoComplete = "on",
      placeholderColor,
      disabledColor,
      maxLength
    } = this.props;
    let count;
    if (typeof showCount === "function") {
      count = showCount(this.data.value.length, maxLength);
    } else if (showCount) {
      count = /* @__PURE__ */ avm.h("span", {
        className: `${classPrefix$4}-count`
      }, maxLength === void 0 ? this.data.value.length : this.data.value.length + "/" + maxLength);
    }
    const textareaStyle = {
      fontSize,
      color: !disabled ? color : disabledColor,
      height: autoSize ? "auto" : `${26 * rows}px`,
      lineHeight: "26px"
    };
    const textareaCls = classNames(classPrefix$4, {
      [`${classPrefix$4}-disabled`]: disabled,
      [`${classPrefix$4}-readonly`]: readOnly
    });
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$4}-wrapper`, className),
      style
    }, /* @__PURE__ */ avm.h("textarea", {
      placeholder,
      autoComplete,
      disabled: disabled || readOnly,
      className: textareaCls,
      style: textareaStyle,
      maxlength: maxLength,
      value: this.data.value,
      "placeholder-style": `color: ${placeholderColor}`,
      "auto-height": autoSize,
      onInput: (e) => {
        this.setValue(e.detail.value);
      },
      onFocus: (e) => {
        props.onFocus?.(e);
      },
      onBlur: (e) => {
        props.onChange && props.onChange(e.detail.value);
        props.onBlur?.(e);
      }
    }), count);
  };
}
var result = "";
const classPrefix$3 = `adm-result`;
const iconDefalutProps = {
  success: {
    fontSize: 52,
    color: "#1677ff"
  },
  error: {
    fontSize: 52,
    color: "#ff3141"
  },
  info: {
    fontSize: 52,
    color: "#1677ff"
  },
  waiting: {
    fontSize: 52,
    color: "#00b578"
  },
  warning: {
    fontSize: 52,
    color: "#ff8f1f"
  }
};
const iconRecord$1 = {
  "success": /* @__PURE__ */ avm.h(CheckCircleFill, __spreadValues({}, iconDefalutProps["success"])),
  "error": /* @__PURE__ */ avm.h(CloseCircleFill, __spreadValues({}, iconDefalutProps["error"])),
  "info": /* @__PURE__ */ avm.h(InformationCircleOutline, __spreadValues({}, iconDefalutProps["info"])),
  "waiting": /* @__PURE__ */ avm.h(ClockCircleOutline, __spreadValues({}, iconDefalutProps["waiting"])),
  "warning": /* @__PURE__ */ avm.h(ExclamationCircleFill, __spreadValues({}, iconDefalutProps["warning"]))
};
class Result extends Component {
  render = (props) => {
    const { status, title, description, children } = props;
    if (!status)
      return null;
    const resultIcon = children && Boolean(children.length) ? children : iconRecord$1[status];
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$3, `${classPrefix$3}-${status}`)
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$3}-icon`
    }, resultIcon), /* @__PURE__ */ avm.h("text", {
      className: `${classPrefix$3}-title`
    }, title), description ? /* @__PURE__ */ avm.h("text", {
      className: `${classPrefix$3}-description`
    }, description) : null);
  };
}
var navBar = "";
const classPrefix$2 = `adm-nav-bar`;
const defaultProps$2 = {
  back: "",
  backArrow: true
};
class NavBar extends Component {
  install() {
    console.log("NavBar");
  }
  render = (props) => {
    props = mergeProps(defaultProps$2, props);
    const { back, backArrow, right, style } = props;
    const rightNode = right && right.children.map((item) => {
      return item;
    });
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$2),
      style
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$2}-left`,
      role: "button"
    }, back !== null && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$2}-back`,
      onClick: props.onBack
    }, backArrow && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$2}-back-arrow`
    }, backArrow === true ? /* @__PURE__ */ avm.h(LeftOutline, {
      fontSize: "18"
    }) : backArrow), /* @__PURE__ */ avm.h("text", {
      "aria-hidden": "true"
    }, back)), /* @__PURE__ */ avm.h("text", {
      className: `${classPrefix$2}-left-text`
    }, props.left)), props.children && Boolean(props.children) && typeof props.children[0] === "string" ? /* @__PURE__ */ avm.h("text", {
      className: `${classPrefix$2}-title`
    }, props.children) : /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$2}-title`
    }, props.children), /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$2}-right`
    }, rightNode));
  };
}
var empty = "";
const classPrefix$1 = `adm-empty`;
const defaultProps$1 = {
  fontSize: 64,
  color: "#999999"
};
class Empty extends Component {
  install = () => {
    console.log("Empty!");
  };
  render = (props) => {
    props = mergeProps(defaultProps$1, props);
    const { children, imageStyle, fontSize, color } = props;
    const imageWidth = (imageStyle && imageStyle.width) ?? fontSize;
    const imageColor = (imageStyle && imageStyle.color) ?? color;
    console.log(imageWidth, "imagewidth");
    const imageNode = () => {
      if (children && Boolean(children.length)) {
        return children;
      } else {
        return /* @__PURE__ */ avm.h(UiwInbox, {
          fontSize: imageWidth,
          color: imageColor
        });
      }
    };
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$1
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$1}-image-container`
    }, imageNode()), props.description && /* @__PURE__ */ avm.h("text", {
      className: classNames(`${classPrefix$1}-description`)
    }, props.description));
  };
}
var errorBlock = "";
var DefaultErrorIcon = "data:image/png;base64,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";
var Busy = "data:image/png;base64,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";
var DisconnectedIcon = "data:image/png;base64,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";
var EmptyErrorIcon = "data:image/png;base64,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";
const iconRecord = {
  default: DefaultErrorIcon,
  busy: Busy,
  disconnected: DisconnectedIcon,
  empty: EmptyErrorIcon
};
const classPrefix = `adm-error-block`;
const ErrorBlockText = {
  default: {
    title: "\u9875\u9762\u9047\u5230\u4E00\u4E9B\u5C0F\u95EE\u9898",
    description: "\u5F85\u4F1A\u6765\u8BD5\u8BD5"
  },
  busy: {
    title: "\u524D\u65B9\u62E5\u5835",
    description: "\u5237\u65B0\u8BD5\u8BD5"
  },
  disconnected: {
    title: "\u7F51\u7EDC\u6709\u70B9\u5FD9",
    description: "\u52A8\u52A8\u624B\u6307\u5E2E\u5FD9\u4FEE\u590D"
  },
  empty: {
    title: "\u6CA1\u6709\u627E\u5230\u4F60\u9700\u8981\u7684\u4E1C\u897F",
    description: "\u627E\u627E\u5176\u4ED6\u7684\u5427"
  }
};
const defaultProps = {
  status: "default",
  imageWidth: "auto",
  imageHeight: "100px",
  imageWidthFullPage: "auto",
  imageHeightFullPage: "200px"
};
class ErrorBlock extends Component {
  install = () => {
    console.log("ErrorBlock!");
  };
  render = (props) => {
    this.props = mergeProps(defaultProps, props);
    const {
      status,
      description,
      title,
      image: image2,
      fullPage,
      children,
      imageWidth,
      imageHeight,
      imageHeightFullPage,
      imageWidthFullPage
    } = this.props;
    const icon = iconRecord[status];
    const contentPack = ErrorBlockText[status];
    const des = "description" in this.props ? description : contentPack.description;
    const errTitle = "title" in props ? title : contentPack.title;
    let imageNode = /* @__PURE__ */ avm.h("img", {
      src: icon,
      className: `${classPrefix}-image-img`
    });
    if (image2) {
      if (typeof image2 === "string") {
        imageNode = /* @__PURE__ */ avm.h("img", {
          src: image2,
          className: `${classPrefix}-image-img`
        });
      } else {
        imageNode = image2;
      }
    }
    const imageStyles = {
      width: fullPage ? imageWidthFullPage : imageWidth,
      height: fullPage ? imageHeightFullPage : imageHeight
    };
    const errTitleCls = classNames(`${classPrefix}-description-title`, {
      [`${classPrefix}-full-page-description-title`]: fullPage
    });
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix, {
        [`${classPrefix}-full-page`]: fullPage
      }),
      style: {}
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-image`,
      style: imageStyles
    }, imageNode), /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix}-description`, {
        [`${classPrefix}-full-page-description`]: fullPage
      })
    }, formatLabel(errTitle, errTitleCls), formatLabel(des, `${classPrefix}-description-subtitle`)), children && formatLabel(children, `${classPrefix}-content`));
  };
}
export { AaOutline, AddCircleOutline, AddOutline, AddSquareOutline, AddressBookFill, AlipayCircleFill, AlipaySquareFill, AntOutline, ApiCloudLogo, AppOutline, AppstoreOutline, ArrowDownCircleOutline, ArrowsAltOutline, AudioFill, AudioMutedOutline, AudioOutline, Badge, BankcardOutline, BellMuteOutline, BellOutline, BillOutline, Button, CalculatorOutline, CalendarOutline, CameraOutline, Card, ChatAddOutline, ChatCheckOutline, ChatWrongOutline, CheckCircleFill, CheckCircleOutline, CheckList, CheckOutline, CheckShieldFill, CheckShieldOutline, index$1 as Checkbox, ClockCircleFill, ClockCircleOutline, CloseCircleFill, CloseCircleOutline, CloseOutline, CloseShieldOutline, CollectMoneyOutline, CompassOutline, ContentOutline, CouponOutline, DeleteOutline, Divider, DownCircleOutline, DownFill, DownOutline, DownlandOutline, EditFill, EditSFill, EditSOutline, Empty, EnvironmentOutline, ErrorBlock, ExclamationCircleFill, ExclamationCircleOutline, ExclamationOutline, ExclamationShieldFill, ExclamationShieldOutline, ExclamationTriangleOutline, EyeFill, EyeInvisibleFill, EyeInvisibleOutline, EyeOutline, FaceRecognitionOutline, FileOutline, FileWrongOutline, FillinOutline, FilterOutline, FingerdownOutline, FireFill, FlagOutline, FolderOutline, ForbidFill, FrownFill, FrownOutline, GiftOutline, GlobalOutline, Grid, HandPayCircleOutline, HeartFill, HeartOutline, HistogramOutline, Icon, Image, ImageViewer, InfiniteScroll, InformationCircleFill, InformationCircleOutline, Input, KeyOutline, KoubeiFill, KoubeiOutline, LeftOutline, LikeOutline, LinkOutline, List, Loading, LocationFill, LocationOutline, LockFill, LockOutline, LoopOutline, MailFill, MailOpenOutline, MailOutline, Mask, MessageFill, MessageOutline, MinusCircleOutline, MinusOutline, MoreOutline, MovieOutline, NavBar, NoticeBar, PageIndicator, PayCircleOutline, PhoneFill, PhonebookFill, PhonebookOutline, PictureOutline, PictureWrongOutline, PicturesOutline, PieOutline, PlayOutline, ProgressBar, QuestionCircleFill, QuestionCircleOutline, index as Radio, Rate, ReceiptOutline, ReceivePaymentOutline, RedoOutline, Result, RightOutline, ScanCodeOutline, ScanningFaceOutline, ScanningOutline, Search, SearchOutline, Selector, SendOutline, SetOutline, ShopbagOutline, ShrinkOutline, SmileFill, SmileOutline, SoundMuteFill, SoundMuteOutline, SoundOutline, Space, StarFill, StarOutline, Stepper, Steps, StopOutline, Switch, SystemQRcodeOutline, Tag, TagOutline, TeamFill, TeamOutline, TextArea, TextDeletionOutline, TextOutline, TransportQRcodeOutline, TravelOutline, TruckOutline, UiwAdobe, UiwAlipay, UiwAliwangwang, UiwAndroid, UiwAndroidO, UiwApple, UiwAppstore, UiwAppstoreO, UiwAreaChart, UiwArrowDown, UiwArrowLeft, UiwArrowRight, UiwArrowUp, UiwArrowsAlt, UiwAsterisk, UiwBackward, UiwBaidu, UiwBarChart, UiwBarcode, UiwBell, UiwCameraO, UiwCaretDown, UiwCaretLeft, UiwCaretRight, UiwCaretUp, UiwCheck, UiwCheckSquare, UiwCheckSquareO, UiwChrome, UiwCircleCheck, UiwCircleCheckO, UiwCircleClose, UiwCircleCloseO, UiwCircleO, UiwClose, UiwCloseSquare, UiwCloseSquareO, UiwCloudDownload, UiwCloudDownloadO, UiwCloudUpload, UiwCloudUploadO, UiwCoffee, UiwComponent, UiwCopy, UiwCopyright, UiwCss3, UiwCut, UiwDArrowLeft, UiwDArrowRight, UiwDCaret, UiwDashboard, UiwDate, UiwDelete, UiwDingding, UiwDislikeO, UiwDocument, UiwDotChart, UiwDown, UiwDownCircle, UiwDownCircleO, UiwDownSquare, UiwDownSquareO, UiwDownload, UiwEdit, UiwEnter, UiwEnvironment, UiwEnvironmentO, UiwEye, UiwEyeO, UiwFacebook, UiwFileAdd, UiwFileExcel, UiwFileJpg, UiwFilePdf, UiwFileText, UiwFileUnknown, UiwFilter, UiwFirefox, UiwFolder, UiwFolderAdd, UiwFolderOpen, UiwForward, UiwFoursquare, UiwFrown, UiwFrownO, UiwGithub, UiwGithubO, UiwGlobal, UiwHeartOff, UiwHeartOn, UiwHome, UiwHtml5, UiwIe, UiwInbox, UiwInformation, UiwInformationO, UiwLaptop, UiwLeft, UiwLeftCircle, UiwLeftCircleO, UiwLeftSquare, UiwLeftSquareO, UiwLikeO, UiwLink, UiwLinkedin, UiwLinux, UiwLoading, UiwLock, UiwLogin, UiwLogout, UiwMail, UiwMailO, UiwMan, UiwMap, UiwMeh, UiwMehO, UiwMenu, UiwMenuFold, UiwMenuUnfold, UiwMessage, UiwMinus, UiwMinusCircle, UiwMinusCircleO, UiwMinusSquare, UiwMinusSquareO, UiwMobile, UiwMore, UiwNotification, UiwOpera, UiwPaperClip, UiwPause, UiwPauseCircle, UiwPauseCircleO, UiwPay, UiwPayCircleO, UiwPicasa, UiwPicture, UiwPieChart, UiwPinterest, UiwPlayCircle, UiwPlayCircleO, UiwPlus, UiwPlusCircle, UiwPlusCircleO, UiwPlusSquare, UiwPlusSquareO, UiwPoweroff, UiwPrinter, UiwQq, UiwQrcode, UiwQuestionCircle, UiwQuestionCircleO, UiwReddit, UiwReload, UiwRight, UiwRightCircle, UiwRightCircleO, UiwRightSquare, UiwRightSquareO, UiwRollback, UiwSafari, UiwSafety, UiwSave, UiwSearch, UiwSetting, UiwSettingO, UiwShare, UiwShoppingCart, UiwShrink, UiwSmile, UiwSmileO, UiwSquareO, UiwStarOff, UiwStarOn, UiwStop, UiwStopO, UiwSwap, UiwSwapLeft, UiwSwapRight, UiwTable, UiwTag, UiwTagO, UiwTags, UiwTagsO, UiwTaobao, UiwTime, UiwTimeO, UiwTwitter, UiwUiw, UiwUnlock, UiwUp, UiwUpCircle, UiwUpCircleO, UiwUpSquare, UiwUpSquareO, UiwUpload, UiwUser, UiwUserAdd, UiwUserDelete, UiwUsergroupAdd, UiwUsergroupDelete, UiwVerification, UiwVerticleLeft, UiwVerticleRight, UiwVideoCamera, UiwWarning, UiwWarningO, UiwWeibo, UiwWeixin, UiwWifi, UiwWindows, UiwWoman, UiwZoomIn, UiwZoomOut, UndoOutline, UnlockOutline, UnorderedListOutline, UpCircleOutline, UpOutline, UploadOutline, UserAddOutline, UserCircleOutline, UserContactOutline, UserOutline, UserSetOutline, VideoOutline };
