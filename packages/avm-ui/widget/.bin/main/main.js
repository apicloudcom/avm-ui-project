(function() {
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;

		_setPrototypeOf(subClass, superClass);
	}

	function _setPrototypeOf(o, p) {
		_setPrototypeOf =
			Object.setPrototypeOf ||
			function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
			};

		return _setPrototypeOf(o, p);
	}

	function _assertThisInitialized(self) {
		if (self === void 0) {
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		}

		return self;
	}

	function _unsupportedIterableToArray(o, minLen) {
		if (!o) return;
		if (typeof o === "string") return _arrayLikeToArray(o, minLen);
		var n = Object.prototype.toString.call(o).slice(8, -1);
		if (n === "Object" && o.constructor) n = o.constructor.name;
		if (n === "Map" || n === "Set") return Array.from(o);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
			return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
		if (len == null || len > arr.length) len = arr.length;

		for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

		return arr2;
	}

	function _createForOfIteratorHelperLoose(o, allowArrayLike) {
		var it =
			(typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
		if (it) return (it = it.call(o)).next.bind(it);

		if (
			Array.isArray(o) ||
			(it = _unsupportedIterableToArray(o)) ||
			(allowArrayLike && o && typeof o.length === "number")
		) {
			if (it) o = it;
			var i = 0;
			return function() {
				if (i >= o.length)
					return {
						done: true
					};
				return {
					done: false,
					value: o[i++]
				};
			};
		}

		throw new TypeError(
			"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
		);
	}

	var __defProp = Object.defineProperty;
	var __defProps = Object.defineProperties;
	var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = function __defNormalProp(obj, key, value) {
		return key in obj
			? __defProp(obj, key, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
			  })
			: (obj[key] = value);
	};
	var __spreadValues = function __spreadValues(a, b) {
		for (var prop in b || (b = {})) {
			if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		}
		if (__getOwnPropSymbols) {
			for (
				var _iterator = _createForOfIteratorHelperLoose(__getOwnPropSymbols(b)),
					_step;
				!(_step = _iterator()).done;

			) {
				var prop = _step.value;
				if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
			}
		}
		return a;
	};
	var __spreadProps = function __spreadProps(a, b) {
		return __defProps(a, __getOwnPropDescs(b));
	};
	var commonjsGlobal =
		typeof globalThis !== "undefined"
			? globalThis
			: typeof window !== "undefined"
			? window
			: typeof global !== "undefined"
			? global
			: typeof self !== "undefined"
			? self
			: {};
	var _classnames_2_3_1_classnames = {exports: {}};
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
					if (!arg) continue;
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
	})(_classnames_2_3_1_classnames);
	var classNames = _classnames_2_3_1_classnames.exports;
	var freeGlobal$1 =
		typeof commonjsGlobal == "object" &&
		commonjsGlobal &&
		commonjsGlobal.Object === Object &&
		commonjsGlobal;
	var _freeGlobal = freeGlobal$1;
	var freeGlobal = _freeGlobal;
	var freeSelf =
		typeof self == "object" && self && self.Object === Object && self;
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
		var isOwn = hasOwnProperty$6.call(value, symToStringTag$1),
			tag2 = value[symToStringTag$1];
		try {
			value[symToStringTag$1] = void 0;
			var unmasked = true;
		} catch (e) {}
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
	var Symbol$1 = _Symbol,
		getRawTag = _getRawTag,
		objectToString = _objectToString;
	var nullTag = "[object Null]",
		undefinedTag = "[object Undefined]";
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
	function baseGetTag$3(value) {
		if (value == null) {
			return value === void 0 ? undefinedTag : nullTag;
		}
		return symToStringTag && symToStringTag in Object(value)
			? getRawTag(value)
			: objectToString(value);
	}
	var _baseGetTag = baseGetTag$3;
	function isObject$3(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	var isObject_1 = isObject$3;
	var baseGetTag$2 = _baseGetTag,
		isObject$2 = isObject_1;
	var asyncTag = "[object AsyncFunction]",
		funcTag$1 = "[object Function]",
		genTag = "[object GeneratorFunction]",
		proxyTag = "[object Proxy]";
	function isFunction$2(value) {
		if (!isObject$2(value)) {
			return false;
		}
		var tag2 = baseGetTag$2(value);
		return (
			tag2 == funcTag$1 || tag2 == genTag || tag2 == asyncTag || tag2 == proxyTag
		);
	}
	var isFunction_1 = isFunction$2;
	var root = _root;
	var coreJsData$1 = root["__core-js_shared__"];
	var _coreJsData = coreJsData$1;
	var coreJsData = _coreJsData;
	var maskSrcKey = (function() {
		var uid = /[^.]+$/.exec(
			(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ""
		);
		return uid ? "Symbol(src)_1." + uid : "";
	})();
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
			} catch (e) {}
			try {
				return func + "";
			} catch (e) {}
		}
		return "";
	}
	var _toSource = toSource$1;
	var isFunction$1 = isFunction_1,
		isMasked = _isMasked,
		isObject$1 = isObject_1,
		toSource = _toSource;
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	var funcProto = Function.prototype,
		objectProto$6 = Object.prototype;
	var funcToString = funcProto.toString;
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
	var reIsNative = RegExp(
		"^" +
			funcToString
				.call(hasOwnProperty$5)
				.replace(reRegExpChar, "\\$&")
				.replace(
					/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
					"$1.*?"
				) +
			"$"
	);
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
	var baseIsNative = _baseIsNative,
		getValue = _getValue;
	function getNative$1(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	var _getNative = getNative$1;
	var getNative = _getNative;
	var defineProperty$2 = (function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e) {}
	})();
	var _defineProperty$1 = defineProperty$2;
	var defineProperty$1 = _defineProperty$1;
	function baseAssignValue$2(object, key, value) {
		if (key == "__proto__" && defineProperty$1) {
			defineProperty$1(object, key, {
				configurable: true,
				enumerable: true,
				value: value,
				writable: true
			});
		} else {
			object[key] = value;
		}
	}
	var _baseAssignValue = baseAssignValue$2;
	function eq$2(value, other) {
		return value === other || (value !== value && other !== other);
	}
	var eq_1 = eq$2;
	var baseAssignValue$1 = _baseAssignValue,
		eq$1 = eq_1;
	var objectProto$5 = Object.prototype;
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
	function assignValue$2(object, key, value) {
		var objValue = object[key];
		if (
			!(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) ||
			(value === void 0 && !(key in object))
		) {
			baseAssignValue$1(object, key, value);
		}
	}
	var _assignValue = assignValue$2;
	var assignValue$1 = _assignValue,
		baseAssignValue = _baseAssignValue;
	function copyObject$2(source, props, object, customizer) {
		var isNew = !object;
		object || (object = {});
		var index2 = -1,
			length = props.length;
		while (++index2 < length) {
			var key = props[index2];
			var newValue = customizer
				? customizer(object[key], source[key], key, object, source)
				: void 0;
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
			var args = arguments,
				index2 = -1,
				length = nativeMax(args.length - start, 0),
				array = Array(length);
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
	var constant = constant_1,
		defineProperty = _defineProperty$1,
		identity$1 = identity_1;
	var baseSetToString$1 = !defineProperty
		? identity$1
		: function(func, string) {
				return defineProperty(func, "toString", {
					configurable: true,
					enumerable: false,
					value: constant(string),
					writable: true
				});
		  };
	var _baseSetToString = baseSetToString$1;
	var HOT_COUNT = 800,
		HOT_SPAN = 16;
	var nativeNow = Date.now;
	function shortOut$1(func) {
		var count = 0,
			lastCalled = 0;
		return function() {
			var stamp = nativeNow(),
				remaining = HOT_SPAN - (stamp - lastCalled);
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
	var baseSetToString = _baseSetToString,
		shortOut = _shortOut;
	var setToString$1 = shortOut(baseSetToString);
	var _setToString = setToString$1;
	var identity = identity_1,
		overRest = _overRest,
		setToString = _setToString;
	function baseRest$1(func, start) {
		return setToString(overRest(func, start, identity), func + "");
	}
	var _baseRest = baseRest$1;
	var MAX_SAFE_INTEGER$1 = 9007199254740991;
	function isLength$2(value) {
		return (
			typeof value == "number" &&
			value > -1 &&
			value % 1 == 0 &&
			value <= MAX_SAFE_INTEGER$1
		);
	}
	var isLength_1 = isLength$2;
	var isFunction = isFunction_1,
		isLength$1 = isLength_1;
	function isArrayLike$3(value) {
		return value != null && isLength$1(value.length) && !isFunction(value);
	}
	var isArrayLike_1 = isArrayLike$3;
	var MAX_SAFE_INTEGER = 9007199254740991;
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	function isIndex$2(value, length) {
		var type = typeof value;
		length = length == null ? MAX_SAFE_INTEGER : length;
		return (
			!!length &&
			(type == "number" || (type != "symbol" && reIsUint.test(value))) &&
			value > -1 &&
			value % 1 == 0 &&
			value < length
		);
	}
	var _isIndex = isIndex$2;
	var eq = eq_1,
		isArrayLike$2 = isArrayLike_1,
		isIndex$1 = _isIndex,
		isObject = isObject_1;
	function isIterateeCall$1(value, index2, object) {
		if (!isObject(object)) {
			return false;
		}
		var type = typeof index2;
		if (
			type == "number"
				? isArrayLike$2(object) && isIndex$1(index2, object.length)
				: type == "string" && index2 in object
		) {
			return eq(object[index2], value);
		}
		return false;
	}
	var _isIterateeCall = isIterateeCall$1;
	var baseRest = _baseRest,
		isIterateeCall = _isIterateeCall;
	function createAssigner$2(assigner) {
		return baseRest(function(object, sources) {
			var index2 = -1,
				length = sources.length,
				customizer = length > 1 ? sources[length - 1] : void 0,
				guard = length > 2 ? sources[2] : void 0;
			customizer =
				assigner.length > 3 && typeof customizer == "function"
					? (length--, customizer)
					: void 0;
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
		var Ctor = value && value.constructor,
			proto = (typeof Ctor == "function" && Ctor.prototype) || objectProto$4;
		return value === proto;
	}
	var _isPrototype = isPrototype$2;
	function baseTimes$1(n, iteratee) {
		var index2 = -1,
			result2 = Array(n);
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
	var baseGetTag$1 = _baseGetTag,
		isObjectLike$2 = isObjectLike_1;
	var argsTag$1 = "[object Arguments]";
	function baseIsArguments$1(value) {
		return isObjectLike$2(value) && baseGetTag$1(value) == argsTag$1;
	}
	var _baseIsArguments = baseIsArguments$1;
	var baseIsArguments = _baseIsArguments,
		isObjectLike$1 = isObjectLike_1;
	var objectProto$3 = Object.prototype;
	var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
	var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
	var isArguments$1 = baseIsArguments(
		(function() {
			return arguments;
		})()
	)
		? baseIsArguments
		: function(value) {
				return (
					isObjectLike$1(value) &&
					hasOwnProperty$3.call(value, "callee") &&
					!propertyIsEnumerable.call(value, "callee")
				);
		  };
	var isArguments_1 = isArguments$1;
	var isArray$1 = Array.isArray;
	var isArray_1 = isArray$1;
	var isBuffer$1 = {exports: {}};
	function stubFalse() {
		return false;
	}
	var stubFalse_1 = stubFalse;
	(function(module, exports) {
		var root2 = _root,
			stubFalse2 = stubFalse_1;
		var freeExports = exports && !exports.nodeType && exports;
		var freeModule = freeExports && true && module && !module.nodeType && module;
		var moduleExports = freeModule && freeModule.exports === freeExports;
		var Buffer2 = moduleExports ? root2.Buffer : void 0;
		var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
		var isBuffer2 = nativeIsBuffer || stubFalse2;
		module.exports = isBuffer2;
	})(isBuffer$1, isBuffer$1.exports);
	var baseGetTag = _baseGetTag,
		isLength = isLength_1,
		isObjectLike = isObjectLike_1;
	var argsTag = "[object Arguments]",
		arrayTag = "[object Array]",
		boolTag = "[object Boolean]",
		dateTag = "[object Date]",
		errorTag = "[object Error]",
		funcTag = "[object Function]",
		mapTag = "[object Map]",
		numberTag = "[object Number]",
		objectTag = "[object Object]",
		regexpTag = "[object RegExp]",
		setTag = "[object Set]",
		stringTag = "[object String]",
		weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]",
		dataViewTag = "[object DataView]",
		float32Tag = "[object Float32Array]",
		float64Tag = "[object Float64Array]",
		int8Tag = "[object Int8Array]",
		int16Tag = "[object Int16Array]",
		int32Tag = "[object Int32Array]",
		uint8Tag = "[object Uint8Array]",
		uint8ClampedTag = "[object Uint8ClampedArray]",
		uint16Tag = "[object Uint16Array]",
		uint32Tag = "[object Uint32Array]";
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[
		int8Tag
	] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[
		uint8Tag
	] = typedArrayTags[uint8ClampedTag] = typedArrayTags[
		uint16Tag
	] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[
		arrayBufferTag
	] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[
		dateTag
	] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[
		mapTag
	] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[
		regexpTag
	] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[
		weakMapTag
	] = false;
	function baseIsTypedArray$1(value) {
		return (
			isObjectLike(value) &&
			isLength(value.length) &&
			!!typedArrayTags[baseGetTag(value)]
		);
	}
	var _baseIsTypedArray = baseIsTypedArray$1;
	function baseUnary$1(func) {
		return function(value) {
			return func(value);
		};
	}
	var _baseUnary = baseUnary$1;
	var _nodeUtil = {exports: {}};
	(function(module, exports) {
		var freeGlobal2 = _freeGlobal;
		var freeExports = exports && !exports.nodeType && exports;
		var freeModule = freeExports && true && module && !module.nodeType && module;
		var moduleExports = freeModule && freeModule.exports === freeExports;
		var freeProcess = moduleExports && freeGlobal2.process;
		var nodeUtil2 = (function() {
			try {
				var types =
					freeModule && freeModule.require && freeModule.require("util").types;
				if (types) {
					return types;
				}
				return freeProcess && freeProcess.binding && freeProcess.binding("util");
			} catch (e) {}
		})();
		module.exports = nodeUtil2;
	})(_nodeUtil, _nodeUtil.exports);
	var baseIsTypedArray = _baseIsTypedArray,
		baseUnary = _baseUnary,
		nodeUtil = _nodeUtil.exports;
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	var isTypedArray$1 = nodeIsTypedArray
		? baseUnary(nodeIsTypedArray)
		: baseIsTypedArray;
	var isTypedArray_1 = isTypedArray$1;
	var baseTimes = _baseTimes,
		isArguments = isArguments_1,
		isArray = isArray_1,
		isBuffer = isBuffer$1.exports,
		isIndex = _isIndex,
		isTypedArray = isTypedArray_1;
	var objectProto$2 = Object.prototype;
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
	function arrayLikeKeys$1(value, inherited) {
		var isArr = isArray(value),
			isArg = !isArr && isArguments(value),
			isBuff = !isArr && !isArg && isBuffer(value),
			isType = !isArr && !isArg && !isBuff && isTypedArray(value),
			skipIndexes = isArr || isArg || isBuff || isType,
			result2 = skipIndexes ? baseTimes(value.length, String) : [],
			length = result2.length;
		for (var key in value) {
			if (
				(inherited || hasOwnProperty$2.call(value, key)) &&
				!(
					skipIndexes &&
					(key == "length" ||
						(isBuff && (key == "offset" || key == "parent")) ||
						(isType &&
							(key == "buffer" || key == "byteLength" || key == "byteOffset")) ||
						isIndex(key, length))
				)
			) {
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
	var isPrototype$1 = _isPrototype,
		nativeKeys = _nativeKeys;
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
	var arrayLikeKeys = _arrayLikeKeys,
		baseKeys = _baseKeys,
		isArrayLike$1 = isArrayLike_1;
	function keys$2(object) {
		return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	var keys_1 = keys$2;
	var assignValue = _assignValue,
		copyObject$1 = _copyObject,
		createAssigner$1 = _createAssigner,
		isArrayLike = isArrayLike_1,
		isPrototype = _isPrototype,
		keys$1 = keys_1;
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
	var copyObject = _copyObject,
		createAssigner = _createAssigner,
		keys = keys_1;
	var assignWith = createAssigner(function(
		object,
		source,
		srcIndex,
		customizer
	) {
		copyObject(source, keys(source), object, customizer);
	});
	var assignWith_1 = assignWith;
	function isUndefined(value) {
		return value === void 0;
	}
	var isUndefined_1 = isUndefined;
	function mergeProps() {
		function customizer(objValue, srcValue) {
			return isUndefined_1(srcValue) ? objValue : srcValue;
		}
		var ret = assign_1({}, arguments.length <= 0 ? undefined : arguments[0]);
		for (var i = 1; i < arguments.length; i++) {
			ret = assignWith_1(
				ret,
				i < 0 || arguments.length <= i ? undefined : arguments[i],
				customizer
			);
		}
		return ret;
	}
	var classPrefix$q = "adm-button";
	var defaultProps$j = {
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

	var colorAttr = {
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

	var shapeAttr = {
		default: "4px",
		rounded: "1000px",
		rectangular: 0
	};
	var Button = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Button, _Component);
		function Button() {
			var _this;
			for (
				var _len = arguments.length, args = new Array(_len), _key = 0;
				_key < _len;
				_key++
			) {
				args[_key] = arguments[_key];
			}
			_this = _Component.call.apply(_Component, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this), "install", function() {
				console.log("Button !");
			});
			_defineProperty(_assertThisInitialized(_this), "render", function(props) {
				var _classNames;
				props = mergeProps(defaultProps$j, props);
				var disabled = props.disabled || props.loading;
				var btnStyles = {height: "auto", lineHeight: 1.4};
				btnStyles["opacity"] = disabled ? 0.4 : 1;
				btnStyles["color"] = props.textColor || colorAttr[props.color].textColor;
				btnStyles["backgroundColor"] =
					props.bgColor || colorAttr[props.color].bgColor;
				btnStyles["borderRadius"] = props.borderRadius || shapeAttr[props.shape];
				btnStyles["borderWidth"] = props.borderWidth;
				btnStyles["borderStyle"] = props.borderStyle;
				btnStyles["borderColor"] =
					props.borderColor || colorAttr[props.color].bgColor;
				var btnCls = classNames(
					classPrefix$q,
					props.className,
					props.color ? classPrefix$q + "-" + props.color : null,
					((_classNames = {}),
					(_classNames[classPrefix$q + "-block"] = props.block),
					(_classNames[classPrefix$q + "-disabled"] = disabled),
					(_classNames[classPrefix$q + "-" + props.color + "-fill-outline"] =
						props.fill === "outline"),
					(_classNames[classPrefix$q + "-" + props.color + "-fill-none"] =
						props.fill === "none"),
					(_classNames[classPrefix$q + "-mini"] = props.size === "mini"),
					(_classNames[classPrefix$q + "-mini-shape-" + props.shape] =
						props.size === "mini"),
					(_classNames[classPrefix$q + "-small"] = props.size === "small"),
					(_classNames[classPrefix$q + "-large"] = props.size === "large"),
					(_classNames[classPrefix$q + "-loading"] = props.loading),
					_classNames),
					classPrefix$q + "-shape-" + props.shape
				);
				return /* @__PURE__ */ avm.h(
					"button",
					{
						type: props.type,
						onClick: props.onClick,
						className: btnCls,
						disabled: disabled,
						style: __spreadValues(__spreadValues({}, btnStyles), props.style)
					},
					props.loading ? props.loadingText : props.children
				);
			});
			return _this;
		}
		var _proto = Button.prototype;
		_proto.test = function test() {
			api.alert({
				msg: "Button"
			});
		};
		return Button;
	})(Component);
	var checkLabelType = function checkLabelType(ele) {
		return Object.prototype.toString.call(ele);
	};
	var formatLabel = function formatLabel(ele, cls, style) {
		if (style === void 0) {
			style = {};
		}
		if (checkLabelType(ele) === "[object Array]") {
			return ele.map(function(el) {
				return formatLabel(el, cls, style);
			});
		}
		return checkLabelType(ele) === "[object String]"
			? /* @__PURE__ */ avm.h(
					"span",
					{
						className: cls,
						style: style
					},
					ele
			  )
			: /* @__PURE__ */ avm.h(
					"div",
					{
						className: cls,
						style: style
					},
					ele
			  );
	};
	var classPrefix$p = "adm-badge";
	var defaultProps$i = {
		color: "#FF411C"
	};
	var Badge = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(Badge, _Component2);
		function Badge() {
			var _this2;
			for (
				var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
				_key2 < _len2;
				_key2++
			) {
				args[_key2] = arguments[_key2];
			}
			_this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this2), "install", function() {
				console.log("Badge!");
			});
			_defineProperty(_assertThisInitialized(_this2), "render", function(props) {
				var _classNames2;
				props = mergeProps(defaultProps$i, props);
				var _props = props,
					content = _props.content,
					color = _props.color,
					children = _props.children,
					isDot = _props.isDot,
					right = _props.right,
					top = _props.top;
				var badgeCls = classNames(
					classPrefix$p,
					((_classNames2 = {}),
					(_classNames2[classPrefix$p + "--fixed"] = !!children),
					(_classNames2[classPrefix$p + "--dot"] = isDot),
					_classNames2)
				);

				var styleRight = !!right && !!children ? right : 0;
				var styleTop = !!top && !!children ? top : 0;
				var contentEle = formatLabel(content, badgeCls, {
					backgroundColor: color,
					right: styleRight,
					top: styleTop
				});
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$p + "-wrap"
					},
					children,
					contentEle
				);
			});
			return _this2;
		}
		return Badge;
	})(Component);
	var classPrefix$o = "adm-loading";
	var Loading = /*#__PURE__*/ (function(_Component3) {
		_inheritsLoose(Loading, _Component3);
		function Loading() {
			var _this3;
			for (
				var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
				_key3 < _len3;
				_key3++
			) {
				args[_key3] = arguments[_key3];
			}
			_this3 = _Component3.call.apply(_Component3, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this3), "render", function(props) {
				var _props$color = props.color,
					color = _props$color === void 0 ? "default" : _props$color;
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$o
					},
					/* @__PURE__ */ avm.h(
						"span",
						{
							className: classPrefix$o + "-" + color
						},
						"svg\u56FE\u5360\u4F4D"
					)
				);
			});
			return _this3;
		}
		return Loading;
	})(Component);
	var classPrefix$n = "adm-space";
	var defaultProps$h = {
		direction: "horizontal",
		gap: "8px"
	};
	var Space = /*#__PURE__*/ (function(_Component4) {
		_inheritsLoose(Space, _Component4);
		function Space() {
			var _this4;
			for (
				var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
				_key4 < _len4;
				_key4++
			) {
				args[_key4] = arguments[_key4];
			}
			_this4 = _Component4.call.apply(_Component4, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this4), "render", function(props) {
				var _classNames3;
				props = mergeProps(defaultProps$h, props);
				var _props2 = props,
					direction = _props2.direction,
					gap = _props2.gap,
					gapHorizontal = _props2.gapHorizontal,
					gapVertical = _props2.gapVertical;
				var itemStyles = {};
				var gaps =
					direction === "horizontal" ? gapHorizontal || gap : gapVertical || gap;
				itemStyles[
					direction === "horizontal" ? "marginRight" : "marginBottom"
				] = gaps;
				var wrapStyles = {};
				if (props.wrap && direction === "horizontal") {
					var vGap = gapVertical || gap;
					wrapStyles["marginBottom"] = "-" + vGap;
					itemStyles["paddingBottom"] = vGap;
				}
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classNames(
							classPrefix$n,
							((_classNames3 = {}),
							(_classNames3[classPrefix$n + "-wrap"] = props.wrap),
							(_classNames3[classPrefix$n + "-" + direction + "-wrap"] = props.wrap),
							(_classNames3[classPrefix$n + "-block"] = props.block),
							(_classNames3[classPrefix$n + "-" + direction] = true),
							(_classNames3[classPrefix$n + "-align-" + props.align] = !!props.align),
							(_classNames3[
								classPrefix$n + "-justify-" + props.justify
							] = !!props.justify),
							_classNames3)
						),

						style: wrapStyles
					},
					props.children.map(function(child, index2) {
						var _classNames4;
						return (
							child !== null &&
							child !== void 0 &&
							/* @__PURE__ */ avm.h(
								"div",
								{
									className: classNames(
										classPrefix$n + "-item",
										classPrefix$n + "-" + direction + "-item",
										((_classNames4 = {}),
										(_classNames4[classPrefix$n + "-" + direction + "-item-last"] =
											index2 === props.children.length - 1),
										(_classNames4[classPrefix$n + "-" + direction + "-wrap-item"] =
											props.wrap),
										_classNames4)
									),

									style: itemStyles
								},
								child
							)
						);
					})
				);
			});
			return _this4;
		}
		return Space;
	})(Component);
	var classPrefix$m = "adm-list";
	var defaultProps$g = {
		mode: "default"
	};
	var List$1 = /*#__PURE__*/ (function(_Component5) {
		_inheritsLoose(List$1, _Component5);
		function List$1() {
			var _this5;
			for (
				var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
				_key5 < _len5;
				_key5++
			) {
				args[_key5] = arguments[_key5];
			}
			_this5 = _Component5.call.apply(_Component5, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this5), "install", function() {
				console.log("List!");
			});
			_defineProperty(_assertThisInitialized(_this5), "render", function(props) {
				props = mergeProps(defaultProps$g, props);
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classNames(classPrefix$m, classPrefix$m + "--" + props.mode)
					},
					/* @__PURE__ */ avm.h(
						"div",
						{
							className: classPrefix$m + "--inner"
						},
						props.children
					)
				);
			});
			return _this5;
		}
		return List$1;
	})(Component);

	var classPrefix$l = "adm-list-item";
	var ListItem = /*#__PURE__*/ (function(_Component6) {
		_inheritsLoose(ListItem, _Component6);
		function ListItem() {
			var _this6;
			for (
				var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
				_key6 < _len6;
				_key6++
			) {
				args[_key6] = arguments[_key6];
			}
			_this6 = _Component6.call.apply(_Component6, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this6), "install", function() {
				console.log("ListItem!");
			});
			_defineProperty(_assertThisInitialized(_this6), "render", function(props) {
				var _props$clickable;
				var clickable =
					(_props$clickable = props.clickable) != null
						? _props$clickable
						: !!props.onClick;
				var arrow = props.arrow === void 0 ? clickable : props.arrow;
				var prefixWidth = !!props.prefixWidth ? props.prefixWidth : "auto";
				var disabledClass = props.disabled && "list-disabled";
				var childCls = classPrefix$l + "-children";
				var prefixCls = classNames(
					classPrefix$l + "-content-prefix",
					disabledClass
				);
				var prefixStyles = {width: prefixWidth};
				var extraCls = classNames(classPrefix$l + "-content-extra", disabledClass);
				var childEles = formatLabel(props.children, childCls);
				var prefixEles = formatLabel(props.prefix, prefixCls, prefixStyles);
				var extraEles = formatLabel(props.extra, extraCls);
				var content = /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$l + "-content"
					},
					props.prefix && prefixEles,
					/* @__PURE__ */ avm.h(
						"div",
						{
							className: classNames(classPrefix$l + "-content-main", disabledClass)
						},
						props.title &&
							/* @__PURE__ */ avm.h(
								"span",
								{
									className: classPrefix$l + "-title"
								},
								props.title
							),
						childEles,
						props.description &&
							/* @__PURE__ */ avm.h(
								"span",
								{
									className: classPrefix$l + "-description"
								},
								props.description
							)
					),
					props.extra && extraEles,
					arrow &&
						/* @__PURE__ */ avm.h(
							"div",
							{
								className: classNames(classPrefix$l + "-content-arrow", disabledClass)
							},
							arrow === true ? /* @__PURE__ */ avm.h("span", null, ">") : arrow
						)
				);
				var listItemCls = classNames(
					"" + classPrefix$l,
					clickable ? ["adm-plain-anchor"] : [],
					props.disabled && classPrefix$l + "-disabled"
				);
				var listItemEvent = props.disabled ? void 0 : props.onClick;
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: listItemCls,
						onClick: listItemEvent
					},
					content
				);
			});
			return _this6;
		}
		return ListItem;
	})(Component);

	function attachPropertiesToComponent(component, properties2) {
		var ret = component;
		for (var key in properties2) {
			if (properties2.hasOwnProperty(key)) {
				ret[key] = properties2[key];
			}
		}
		return ret;
	}
	var properties = {
		Item: ListItem
	};

	var List = attachPropertiesToComponent(List$1, properties);
	var classPrefix$k = "adm-card";
	var Card = /*#__PURE__*/ (function(_Component7) {
		_inheritsLoose(Card, _Component7);
		function Card() {
			var _this7;
			for (
				var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
				_key7 < _len7;
				_key7++
			) {
				args[_key7] = arguments[_key7];
			}
			_this7 = _Component7.call.apply(_Component7, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this7), "render", function(props) {
				var renderHeader = function renderHeader() {
					if (!(props.title || props.extra)) {
						return null;
					}
					return /* @__PURE__ */ avm.h(
						"div",
						{
							className: classNames(classPrefix$k + "-header", props.headerClassName),
							style: props.headerStyle,
							onClick: props.onHeaderClick
						},
						props.title.children
							? props.title
							: /* @__PURE__ */ avm.h(
									"text",
									{
										className: classPrefix$k + "-header-title"
									},
									props.title
							  ),
						props.extra
							? props.extra
							: /* @__PURE__ */ avm.h("text", null, props.extra)
					);
				};
				var renderBody = function renderBody() {
					if (!props.children) {
						return null;
					}
					console.log(props.children);
					return /* @__PURE__ */ avm.h(
						"div",
						{
							className: classNames(classPrefix$k + "-body", props.bodyClassName),
							style: props.bodyStyle,
							onClick: props.onBodyClick
						},
						props.children
					);
				};
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$k,
						onClick: props.onClick
					},
					renderHeader(),
					renderBody()
				);
			});
			return _this7;
		}
		return Card;
	})(Component);
	function toCSSLength(val) {
		return typeof val === "number" ? val + "px" : val;
	}
	var outlineUrl =
		"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM4MDAxOTkwOTczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5NjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1MS41NTIgMTUxLjU1MnY3MjAuODk2aDcyMC44OTZWMTUxLjU1MkgxNTEuNTUyeiBtLTMyLjc2OC02NS41MzZoNzg2LjQzMmM5LjU1Njk5MiAwIDE3LjQwOCAzLjA3MiAyMy41NTIgOS4yMTZzOS4yMTYgMTMuOTk1MDA4IDkuMjE2IDIzLjU1MnY3ODYuNDMyYzAgOS41NTY5OTItMy4wNzIgMTcuNDA4LTkuMjE2IDIzLjU1MnMtMTMuOTk1MDA4IDkuMjE2LTIzLjU1MiA5LjIxNkgxMTguNzg0Yy05LjU1Njk5MiAwLTE3LjQwOC0zLjA3Mi0yMy41NTItOS4yMTZzLTkuMjE2LTEzLjk5NTAwOC05LjIxNi0yMy41NTJWMTE4Ljc4NGMwLTkuNTU2OTkyIDMuMDcyLTE3LjQwOCA5LjIxNi0yMy41NTJzMTMuOTk1MDA4LTkuMjE2IDIzLjU1Mi05LjIxNnogbTI2Mi4xNDQgMTk2LjYwOGM0My42OTEwMDggMCA2NS41MzYgMjEuODQ0OTkyIDY1LjUzNiA2NS41MzZzLTIxLjg0NDk5MiA2NS41MzYtNjUuNTM2IDY1LjUzNi02NS41MzYtMjEuODQ0OTkyLTY1LjUzNi02NS41MzYgMjEuODQ0OTkyLTY1LjUzNiA2NS41MzYtNjUuNTM2ek0xNzcuMTUyIDg4NS43NmwtNTEuMi0zOS45MzYgMjIxLjE4NC0yODguNzY4YzE2LjM4NC0yMS4xNjMwMDggMzguMDU5MDA4LTMzLjQ1MTAwOCA2NS4wMjQtMzYuODY0IDI2Ljk2NDk5Mi0zLjQxMjk5MiA1MS4wMjg5OTIgMi43MzEwMDggNzIuMTkyIDE4LjQzMmwxMjggMTAzLjQyNGM3LjUwODk5MiA1LjQ2MDk5MiAxNS41MzEwMDggNy42OCAyNC4wNjQgNi42NTZTNjUyLjI4OCA2NDMuNzU1MDA4IDY1OC40MzIgNjM2LjkyOGwyMjEuMTg0LTI3Ni40OCA1MS4yIDQwLjk2LTIyMS4xODQgMjc2LjQ4Yy0xNy4wNjcwMDggMjEuMTYzMDA4LTM5LjA4MzAwOCAzMy4xMDg5OTItNjYuMDQ4IDM1Ljg0LTI2Ljk2NDk5MiAyLjczMTAwOC01MS4wMjg5OTItNC4wOTYtNzIuMTkyLTIwLjQ4TDQ0NC40MTYgNTkwLjg0OGMtNy41MDg5OTItNS40NjA5OTItMTUuNTMxMDA4LTcuNjgtMjQuMDY0LTYuNjU2cy0xNS41MzEwMDggNS4yOTEwMDgtMjAuOTkyIDEyLjhMMTc3LjE1MiA4ODUuNzZ6IiBwLWlkPSIyOTYxIiBmaWxsPSIjYmZiZmJmIj48L3BhdGg+PC9zdmc+";
	var warnUrl =
		"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM4MDAyMDMxMzYzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEzNiA2NTkuMzQ0bDI1OS42NjctMjYwLjIxOWMzLjEtMy4xIDguMi0zLjEgMTEuMyAwbDg2LjEgODYuMiAzNy43NS0zNy43OWE3Ljg4OCA3Ljg4OCAwIDAgMSAxLjUwOC0yLjExbDE0NC4zLTE0NC4zYzIuOTU4LTIuOTU4IDcuNzM3LTMuMDkzIDEwLjg2Mi0wLjQwNyAwLjIzNSAwLjE4NyAwLjQ2MyAwLjM5IDAuNjggMC42MDdsMzYuOCAzNi44YzAuMjc0IDAuMjY1IDAuNTI0IDAuNTQ1IDAuNzUxIDAuODM3bDQyLjY0NyA0Mi42OTYgMC4wMDYgMC4wMDdhOCA4IDAgMCAxLTAuMDIgMTEuMzE0bC0zNi44NzYgMzYuNzQ3YTggOCAwIDAgMS0xMS4zMDctMC4wMTRsLTM3LjcwMy0zNy43NDctMTgzLjc5OCAxODMuOTZjLTMuMSAzLjEtOC4yIDMuMS0xMS4zIDBsLTg2LjEtODYuMkwxMzYgNzU1LjUxMlY3OTJoMzM0YTggOCAwIDAgMSA4IDh2NTZhOCA4IDAgMCAxLTggOEg5NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMTkyYzAtMTcuNyAxNC4zLTMyIDMyLTMyaDc4NGMxNy43IDAgMzIgMTQuMyAzMiAzMnYyMzJhOCA4IDAgMCAxLTggOGgtNTZhOCA4IDAgMCAxLTgtOFYyMzJIMTM2djQyNy4zNDR6TTI3NCA0MzJjLTM1LjM0NSAwLTY0LTI4LjY1NS02NC02NHMyOC42NTUtNjQgNjQtNjQgNjQgMjguNjU1IDY0IDY0LTI4LjY1NSA2NC02NCA2NHogbTQ3MCA0OGMxMTkuMyAwIDIxNiA5Ni43IDIxNiAyMTZzLTk2LjcgMjE2LTIxNiAyMTYtMjE2LTk2LjctMjE2LTIxNiA5Ni43LTIxNiAyMTYtMjE2eiBtMTA3LjUgMzIzLjVDODgwLjIgNzc0LjggODk2IDczNi42IDg5NiA2OTZjMC00MC42LTE1LjgtNzguOC00NC41LTEwNy41QzgyMi44IDU1OS44IDc4NC42IDU0NCA3NDQgNTQ0Yy00MC42IDAtNzguOCAxNS44LTEwNy41IDQ0LjVDNjA3LjggNjE3LjIgNTkyIDY1NS40IDU5MiA2OTZjMCA0MC42IDE1LjggNzguOCA0NC41IDEwNy41QzY2NS4yIDgzMi4yIDcwMy40IDg0OCA3NDQgODQ4YzQwLjYgMCA3OC44LTE1LjggMTA3LjUtNDQuNXpNNzEyIDc3NmMwLTE3LjY3MyAxNC4zMjctMzIgMzItMzIgMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMyIDAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMi0xNy42NzMgMC0zMi0xNC4zMjctMzItMzJ6IG0xMi02NGMtNC40IDAtOC0zLjYtOC04VjU5MmMwLTQuNCAzLjYtOCA4LThoNDBjNC40IDAgOCAzLjYgOCA4djExMmMwIDQuNC0zLjYgOC04IDhoLTQweiIgcC1pZD0iMzIwNCIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjwvc3ZnPg==";
	var classPrefix$j = "adm-image";
	var defaultProps$f = {
		fit: "fill",
		placeholder: /* @__PURE__ */ avm.h(
			"div",
			{
				className: classPrefix$j + "-tip"
			},
			/* @__PURE__ */ avm.h("text", null, "\u52A0\u8F09\u4E2D..."),
			/* @__PURE__ */ avm.h("img", {
				src: outlineUrl
			})
		),

		fallback: /* @__PURE__ */ avm.h(
			"div",
			{
				className: classPrefix$j + "-tip"
			},
			/* @__PURE__ */ avm.h("text", null, "\u52A0\u8F09\u5931\u6557"),
			/* @__PURE__ */ avm.h("img", {
				src: warnUrl
			})
		)
	};
	var Image = /*#__PURE__*/ (function(_Component8) {
		_inheritsLoose(Image, _Component8);
		function Image() {
			var _this8;
			for (
				var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
				_key8 < _len8;
				_key8++
			) {
				args[_key8] = arguments[_key8];
			}
			_this8 = _Component8.call.apply(_Component8, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this8), "install", function() {
				console.log("Image!");
				_this8.setLoaded(false);
				_this8.setFailed(false);
			});
			_defineProperty(_assertThisInitialized(_this8), "data", {
				loaded: false,
				failed: false
			});
			_defineProperty(
				_assertThisInitialized(_this8),
				"setLoaded",

				function(status) {
					_this8.data.loaded = status;
				}
			);
			_defineProperty(_assertThisInitialized(_this8), "setFailed", function(
				status
			) {
				_this8.data.failed = status;
			});
			_defineProperty(_assertThisInitialized(_this8), "render", function(props) {
				props = mergeProps(defaultProps$f, props);
				var src = props.src;
				var srcSet = props.srcSet;
				var renderInner = function renderInner() {
					if (_this8.data.failed) {
						return /* @__PURE__ */ avm.h("view", null, props.fallback);
					}
					var img = /* @__PURE__ */ avm.h("img", {
						className: classPrefix$j + "-img",
						src: src,
						alt: props.alt,
						onClick: props.onClick,
						onLoad: function onLoad() {
							_this8.setLoaded(true);
						},
						onError: function onError(e) {
							_this8.setFailed(true);
							props.onError == null ? void 0 : props.onError(e);
						},
						style: __spreadValues(
							{
								objectFit: props.fit
							},
							props.style
						),
						crossOrigin: props.crossOrigin,
						decoding: props.decoding,
						loading: props.loading,
						referrerPolicy: props.referrerPolicy,
						sizes: props.sizes,
						srcSet: srcSet,
						useMap: props.useMap
					});

					return /* @__PURE__ */ avm.h(
						"view",
						null,
						/* @__PURE__ */ avm.h(
							"div",
							null,
							!_this8.data.loaded && props.placeholder
						),
						img
					);
				};
				var style = {};
				if (props.width) {
					style["width"] = toCSSLength(props.width);
				}
				if (props.height) {
					style["height"] = toCSSLength(props.height);
				}
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$j,
						style: style
					},
					renderInner()
				);
			});
			return _this8;
		}
		return Image;
	})(Component);

	var fontName = "avm-ui-icon";
	var classPrefix$i = "adm-icon";
	var Icon = /*#__PURE__*/ (function(_Component9) {
		_inheritsLoose(Icon, _Component9);
		function Icon() {
			var _this9;
			for (
				var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
				_key9 < _len9;
				_key9++
			) {
				args[_key9] = arguments[_key9];
			}
			_this9 = _Component9.call.apply(_Component9, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this9), "code", 59913);
			_defineProperty(
				_assertThisInitialized(_this9),
				"render",

				function(props) {
					return /* @__PURE__ */ avm.h(
						"text",
						{
							_code: _this9.code,
							_name: _this9.constructor.name,
							style: __spreadValues({}, props),
							class: classPrefix$i + " " + classPrefix$i + "-font-icon-text"
						},
						String.fromCharCode(_this9.code)
					);
				}
			);
			return _this9;
		}
		var _proto2 = Icon.prototype;
		_proto2.css = function css() {
			return (
				'@font-face {font-family: "' +
				fontName +
				"\"; src: url('../../components/avm-ui/" +
				fontName +
				".ttf') format('truetype');}\n        ." +
				classPrefix$i +
				" {font-family: " +
				fontName +
				";}"
			);
		};
		return Icon;
	})(Component);
	var CheckCircleFill = /*#__PURE__*/ (function(_Icon27) {
		_inheritsLoose(CheckCircleFill, _Icon27);
		function CheckCircleFill() {
			var _this36;
			for (
				var _len36 = arguments.length, args = new Array(_len36), _key36 = 0;
				_key36 < _len36;
				_key36++
			) {
				args[_key36] = arguments[_key36];
			}
			_this36 = _Icon27.call.apply(_Icon27, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this36), "code", 59931);
			return _this36;
		}
		return CheckCircleFill;
	})(Icon);
	var ClockCircleOutline = /*#__PURE__*/ (function(_Icon33) {
		_inheritsLoose(ClockCircleOutline, _Icon33);
		function ClockCircleOutline() {
			var _this42;
			for (
				var _len42 = arguments.length, args = new Array(_len42), _key42 = 0;
				_key42 < _len42;
				_key42++
			) {
				args[_key42] = arguments[_key42];
			}
			_this42 = _Icon33.call.apply(_Icon33, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this42), "code", 59937);
			return _this42;
		}
		return ClockCircleOutline;
	})(Icon);
	var CloseCircleFill = /*#__PURE__*/ (function(_Icon34) {
		_inheritsLoose(CloseCircleFill, _Icon34);
		function CloseCircleFill() {
			var _this43;
			for (
				var _len43 = arguments.length, args = new Array(_len43), _key43 = 0;
				_key43 < _len43;
				_key43++
			) {
				args[_key43] = arguments[_key43];
			}
			_this43 = _Icon34.call.apply(_Icon34, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this43), "code", 59938);
			return _this43;
		}
		return CloseCircleFill;
	})(Icon);
	var InformationCircleOutline = /*#__PURE__*/ (function(_Icon80) {
		_inheritsLoose(InformationCircleOutline, _Icon80);
		function InformationCircleOutline() {
			var _this89;
			for (
				var _len89 = arguments.length, args = new Array(_len89), _key89 = 0;
				_key89 < _len89;
				_key89++
			) {
				args[_key89] = arguments[_key89];
			}
			_this89 = _Icon80.call.apply(_Icon80, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this89), "code", 59984);
			return _this89;
		}
		return InformationCircleOutline;
	})(Icon);
	var SmileOutline = /*#__PURE__*/ (function(_Icon125) {
		_inheritsLoose(SmileOutline, _Icon125);
		function SmileOutline() {
			var _this134;
			for (
				var _len134 = arguments.length, args = new Array(_len134), _key134 = 0;
				_key134 < _len134;
				_key134++
			) {
				args[_key134] = arguments[_key134];
			}
			_this134 = _Icon125.call.apply(_Icon125, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this134), "code", 60029);
			return _this134;
		}
		return SmileOutline;
	})(Icon);
	function useShouldRender(active, forceRender, destroyOnClose) {
		var initialized = active;
		if (forceRender) return true;
		if (active) return true;
		if (!initialized) return false;
		return !destroyOnClose;
	}
	var classPrefix$h = "adm-mask";
	var opacityRecord = {
		default: 0.55,
		thin: 0.35,
		thick: 0.75
	};

	var defaultProps$e = {
		visible: true,
		destroyOnClose: false,
		forceRender: false,
		color: "black",
		opacity: "default",
		disableBodyScroll: true,
		getContainer: null,
		stopPropagation: ["click"]
	};
	var Mask = /*#__PURE__*/ (function(_Component10) {
		_inheritsLoose(Mask, _Component10);
		function Mask() {
			var _this376;
			for (
				var _len376 = arguments.length, args = new Array(_len376), _key376 = 0;
				_key376 < _len376;
				_key376++
			) {
				args[_key376] = arguments[_key376];
			}
			_this376 =
				_Component10.call.apply(_Component10, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this376), "render", function(p) {
				var _opacityRecord$props$;
				var props = mergeProps(defaultProps$e, p);
				var opacity =
					(_opacityRecord$props$ = opacityRecord[props.opacity]) != null
						? _opacityRecord$props$
						: props.opacity;
				var rgb = props.color === "white" ? "255, 255, 255" : "0, 0, 0";
				var background = "rgba(" + rgb + ", " + opacity + ")";
				var shouldRender = useShouldRender(
					props.visible,
					props.forceRender,
					props.destroyOnClose
				);
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$h,
						style: __spreadProps(__spreadValues({}, props.style), {
							background: background,
							display: props.visible ? "flex" : "none"
						})
					},

					props.onMaskClick &&
						/* @__PURE__ */ avm.h("div", {
							className: classPrefix$h + "-aria-button",
							role: "button",
							"aria-label": "Mask",
							onClick: props.onMaskClick
						}),
					/* @__PURE__ */ avm.h(
						"div",
						{
							className: classPrefix$h + "-content",
							onClick: props.onMaskClick
						},
						shouldRender && props.children
					)
				);
			});
			return _this376;
		}
		return Mask;
	})(Component);
	var classPrefix$g = "adm-notice-bar";
	var defaultProps$d = {
		color: "default",
		delay: 2e3,
		speed: 50
	};
	var NoticeBar = /*#__PURE__*/ (function(_Component11) {
		_inheritsLoose(NoticeBar, _Component11);
		function NoticeBar() {
			var _this377;
			for (
				var _len377 = arguments.length, args = new Array(_len377), _key377 = 0;
				_key377 < _len377;
				_key377++
			) {
				args[_key377] = arguments[_key377];
			}
			_this377 =
				_Component11.call.apply(_Component11, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this377), "install", function() {
				console.log("notice-bar!");
			});
			_defineProperty(_assertThisInitialized(_this377), "data", {
				visible: true
			});
			_defineProperty(
				_assertThisInitialized(_this377),
				"setVisible",

				function(status) {
					_this377.data.visible = status;
				}
			);
			_defineProperty(_assertThisInitialized(_this377), "render", function(props) {
				props = mergeProps(defaultProps$d, props);
				if (!_this377.data.visible) return null;
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classNames(classPrefix$g, classPrefix$g + "-" + props.color)
					},
					/* @__PURE__ */ avm.h(
						"text",
						{
							className: classNames(
								classPrefix$g + "-left",
								classPrefix$g + "-left-" + props.color
							)
						},
						"icon" in props ? props.icon : "\u9ED8\u8BA4icon"
					),
					/* @__PURE__ */ avm.h(
						"view",
						{
							className: classPrefix$g + "-content"
						},
						/* @__PURE__ */ avm.h(
							"text",
							{
								className: classNames(
									classPrefix$g + "-content-inner",
									classPrefix$g + "-content-inner-" + props.color
								)
							},
							props.content
						)
					),
					props.closeable &&
						/* @__PURE__ */ avm.h(
							"view",
							{
								className: classPrefix$g + "-right"
							},
							props.closeable &&
								/* @__PURE__ */ avm.h(
									"text",
									{
										onClick: function onClick() {
											_this377.setVisible(false);
											props.onClose == null ? void 0 : props.onClose();
										}
									},
									"X"
								)
						)
				);
			});
			return _this377;
		}
		return NoticeBar;
	})(Component);
	var classPrefix$f = "adm-page-indicator";
	var defaultProps$c = {
		color: "primary",
		direction: "horizontal"
	};
	var PageIndicator = /*#__PURE__*/ (function(_Component12) {
		_inheritsLoose(PageIndicator, _Component12);
		function PageIndicator() {
			var _this378;
			for (
				var _len378 = arguments.length, args = new Array(_len378), _key378 = 0;
				_key378 < _len378;
				_key378++
			) {
				args[_key378] = arguments[_key378];
			}
			_this378 =
				_Component12.call.apply(_Component12, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this378), "install", function() {
				console.log("PageIndicator!");
			});
			_defineProperty(_assertThisInitialized(_this378), "render", function(props) {
				props = mergeProps(defaultProps$c, props);
				var _props3 = props,
					direction = _props3.direction,
					_props3$dotColor = _props3.dotColor,
					dotColor =
						_props3$dotColor === void 0 ? "rgba(0, 0, 0, 0.2)" : _props3$dotColor,
					_props3$activeDotColo = _props3.activeDotColor,
					activeDotColor =
						_props3$activeDotColo === void 0 ? "#1677ff" : _props3$activeDotColo,
					_props3$dotSize = _props3.dotSize,
					dotSize = _props3$dotSize === void 0 ? "3px" : _props3$dotSize,
					_props3$activeDotSize = _props3.activeDotSize,
					activeDotSize =
						_props3$activeDotSize === void 0 ? "13px" : _props3$activeDotSize,
					_props3$dotBorderRadi = _props3.dotBorderRadius,
					dotBorderRadius =
						_props3$dotBorderRadi === void 0 ? "1px" : _props3$dotBorderRadi,
					_props3$activeDotBord = _props3.activeDotBorderRadius,
					activeDotBorderRadius =
						_props3$activeDotBord === void 0 ? "1px" : _props3$activeDotBord,
					_props3$dotSpacing = _props3.dotSpacing,
					dotSpacing = _props3$dotSpacing === void 0 ? "3px" : _props3$dotSpacing;
				var isHorizontal = direction === "horizontal";
				var dots = [];
				for (var i = 0; i < props.total; i++) {
					var _classNames5;
					dots.push(
						/* @__PURE__ */ avm.h("div", {
							key: i,
							className: classNames(
								classPrefix$f + "-dot",
								((_classNames5 = {}),
								(_classNames5[classPrefix$f + "-dot-active"] = props.current === i),
								_classNames5)
							),

							style: {
								background: props.current === i ? activeDotColor : dotColor,
								width:
									props.current === i
										? isHorizontal
											? activeDotSize
											: dotSize
										: dotSize,
								height:
									props.current === i
										? !isHorizontal
											? activeDotSize
											: dotSize
										: dotSize,
								borderRadius:
									props.current === i ? activeDotBorderRadius : dotBorderRadius,
								marginRight: isHorizontal ? dotSpacing : 0,
								marginBottom: !isHorizontal ? dotSpacing : 0
							}
						})
					);
				}
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classNames(
							classPrefix$f,
							classPrefix$f + "-" + props.direction,
							classPrefix$f + "-color-" + props.color
						)
					},
					dots
				);
			});
			return _this378;
		}
		return PageIndicator;
	})(Component);
	var classPrefix$e = "adm-step";
	var Step = /*#__PURE__*/ (function(_Component13) {
		_inheritsLoose(Step, _Component13);
		function Step() {
			var _this379;
			for (
				var _len379 = arguments.length, args = new Array(_len379), _key379 = 0;
				_key379 < _len379;
				_key379++
			) {
				args[_key379] = arguments[_key379];
			}
			_this379 =
				_Component13.call.apply(_Component13, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this379), "install", function() {
				console.log("Step");
			});
			_defineProperty(_assertThisInitialized(_this379), "render", function(props) {
				var title = props.title,
					description = props.description,
					_props$status = props.status,
					status = _props$status === void 0 ? "wait" : _props$status,
					direction = props.direction,
					curIndex = props.curIndex,
					totalLen = props.totalLen;
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classNames(
							"" + classPrefix$e,
							classPrefix$e + "-" + direction,
							classPrefix$e + "-status-" + status
						)
					},
					/* @__PURE__ */ avm.h(
						"div",
						{
							className: classNames(
								classPrefix$e + "-indicator",
								classPrefix$e + "-" + direction + "-indicator"
							)
						},
						/* @__PURE__ */ avm.h(
							"div",
							{
								className: classNames(classPrefix$e + "-icon-container")
							},
							/* @__PURE__ */ avm.h("span", {
								className: classNames(
									classPrefix$e + "-icon-dot",
									classPrefix$e + "-icon-dot-" + status
								)
							})
						),
						curIndex !== totalLen - 1 &&
							/* @__PURE__ */ avm.h("div", {
								className: classNames(
									classPrefix$e + "-line",
									classPrefix$e + "-" + direction + "-line",
									classPrefix$e + "-line-" + status
								)
							})
					),
					/* @__PURE__ */ avm.h(
						"div",
						{
							className: classNames(
								classPrefix$e + "-content",
								classPrefix$e + "-" + direction + "-content"
							)
						},
						/* @__PURE__ */ avm.h(
							"span",
							{
								className: classNames(
									classPrefix$e + "-title",
									classPrefix$e + "-title-" + status
								)
							},
							title
						),
						!!description &&
							/* @__PURE__ */ avm.h(
								"span",
								{
									className: classNames(
										classPrefix$e + "-description",
										classPrefix$e + "-" + direction + "-content-description"
									)
								},
								description
							)
					)
				);
			});
			return _this379;
		}
		return Step;
	})(Component);

	var classPrefix$d = "adm-steps";
	var defaultProps$b = {
		current: 0,
		direction: "horizontal"
	};
	var Steps = /*#__PURE__*/ (function(_Component14) {
		_inheritsLoose(Steps, _Component14);
		function Steps() {
			var _this380;
			for (
				var _len380 = arguments.length, args = new Array(_len380), _key380 = 0;
				_key380 < _len380;
				_key380++
			) {
				args[_key380] = arguments[_key380];
			}
			_this380 =
				_Component14.call.apply(_Component14, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this380), "install", function() {
				console.log("Steps!");
			});
			_defineProperty(_assertThisInitialized(_this380), "render", function(props) {
				props = mergeProps(defaultProps$b, props);
				var _props4 = props,
					direction = _props4.direction,
					current = _props4.current,
					_props4$list = _props4.list,
					list2 = _props4$list === void 0 ? [] : _props4$list;
				var stemItem = list2.map(function(item, index2) {
					var status = item.status,
						title = item.title,
						description = item.description;
					if (index2 < current) {
						status = status || "finish";
					} else if (index2 === current) {
						status = status || "process";
					} else {
						status = status || "wait";
					}
					return /* @__PURE__ */ avm.h(Step, {
						status: status,
						title: title,
						description: description,
						direction: direction,
						totalLen: list2.length,
						curIndex: index2
					});
				});
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classNames(classPrefix$d, classPrefix$d + "-" + direction)
					},
					stemItem
				);
			});
			return _this380;
		}
		return Steps;
	})(Component);
	var checkedIcon =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAARVJREFUOE/l1KFOw1AYxfH/12AQCJKtJQgEggQxg8AgMAgEhgcYBMcLdCtqnYONd0AxXgCNRWB4ASzJikCi6CFr6dYtK1vK3O4D/PKde757jQUfW7DHEoBeUzXBA/AS3djFvyJXfO05ToLtINpRx8LS4EZD+7El2HaGDQouBbq+DnDoAVt5rBRY8XXopNjmJDYE3abugF3FXH507bVoN71AR1KCVadhI7ChEKMFvPFNPbq150m0GujYET3BehE2Ftkdoe9m1PvX9pSh3pVOFCeTrSHCqGPtohRjpWSowScxZ/2uPbqBThH3wOosbGopuUm/ZJxbemcr82CFLefQNNmMmPn4hXs4RH9fwLy/UqnF/gtfQvAHBvFvFZsqVOUAAAAASUVORK5CYII=";
	var classPrefix$c = "adm-check-list-item";
	var CheckListItem = /*#__PURE__*/ (function(_Component15) {
		_inheritsLoose(CheckListItem, _Component15);
		function CheckListItem() {
			var _this381;
			for (
				var _len381 = arguments.length, args = new Array(_len381), _key381 = 0;
				_key381 < _len381;
				_key381++
			) {
				args[_key381] = arguments[_key381];
			}
			_this381 =
				_Component15.call.apply(_Component15, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this381), "install", function() {
				console.log("CheckListItem!");
			});
			_defineProperty(_assertThisInitialized(_this381), "render", function(props) {
				var _classNames6;
				var active = props.checked ? props.checked.includes(props.value) : false;
				var readOnly = props.readOnly;
				var extra = /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$c + "-extra"
					},
					active
						? /* @__PURE__ */ avm.h("img", {
								src: checkedIcon,
								alt: "checked"
						  })
						: ""
				);
				return /* @__PURE__ */ avm.h(
					ListItem,
					{
						title: props.title,
						className: classNames(
							((_classNames6 = {}),
							(_classNames6[classPrefix$c + "-readonly"] = readOnly),
							_classNames6)
						),

						description: props.description,
						prefix: props.prefix,
						onClick: function onClick() {
							if (readOnly) return;
							if (active) {
								props.uncheck(props.value);
							} else {
								props.check(props.value);
							}
							props.onClick == null ? void 0 : props.onClick(props.value, active);
						},
						arrow: false,
						clickable: !readOnly,
						extra: extra,
						disabled: props.disabled
					},
					props.label
				);
			});
			return _this381;
		}
		return CheckListItem;
	})(Component);

	var defaultProps$a = {
		multiple: false,
		defaultValue: [],
		disabled: false,
		readOnly: false
	};
	var CheckList = /*#__PURE__*/ (function(_Component16) {
		_inheritsLoose(CheckList, _Component16);
		function CheckList() {
			var _this382;
			for (
				var _len382 = arguments.length, args = new Array(_len382), _key382 = 0;
				_key382 < _len382;
				_key382++
			) {
				args[_key382] = arguments[_key382];
			}
			_this382 =
				_Component16.call.apply(_Component16, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this382), "install", function() {
				console.log("CheckList!");
			});
			_defineProperty(_assertThisInitialized(_this382), "data", {
				checked: _this382.props.defaultValue || []
			});
			_defineProperty(
				_assertThisInitialized(_this382),
				"setChecked",

				function(val) {
					_this382.data.checked = val;
				}
			);
			_defineProperty(_assertThisInitialized(_this382), "check", function(
				val,
				props
			) {
				if (props.multiple) {
					_this382.setChecked([].concat(_this382.data.checked, [val]));
				} else {
					_this382.setChecked([val]);
				}
				props.onChange && props.onChange(_this382.data.checked);
			});
			_defineProperty(_assertThisInitialized(_this382), "uncheck", function(
				val,
				props
			) {
				_this382.setChecked(
					_this382.data.checked.filter(function(item) {
						return item !== val;
					})
				);
				props.onChange && props.onChange(_this382.data.checked);
			});
			_defineProperty(_assertThisInitialized(_this382), "render", function(props) {
				props = mergeProps(defaultProps$a, props);
				var _props5 = props,
					_props5$list = _props5.list,
					list2 = _props5$list === void 0 ? [] : _props5$list;
				var childEle = list2.map(function(item) {
					var _item$disabled, _item$readOnly;
					var disabled =
						(_item$disabled = item.disabled) != null
							? _item$disabled
							: props.disabled;
					var readOnly =
						(_item$readOnly = item.readOnly) != null
							? _item$readOnly
							: props.readOnly;
					return /* @__PURE__ */ avm.h(
						CheckListItem,
						__spreadProps(__spreadValues({}, item), {
							disabled: disabled,
							readOnly: readOnly,
							checked: _this382.data.checked,
							check: function check() {
								return _this382.check(item.value, props);
							},
							uncheck: function uncheck() {
								return _this382.uncheck(item.value, props);
							}
						})
					);
				});
				return /* @__PURE__ */ avm.h(
					List,
					{
						mode: props.mode
					},
					childEle
				);
			});
			return _this382;
		}
		return CheckList;
	})(Component);
	var classPrefix$b = "adm-checkbox";
	var Checkbox = /*#__PURE__*/ (function(_Component17) {
		_inheritsLoose(Checkbox, _Component17);
		function Checkbox() {
			var _this383;
			for (
				var _len383 = arguments.length, args = new Array(_len383), _key383 = 0;
				_key383 < _len383;
				_key383++
			) {
				args[_key383] = arguments[_key383];
			}
			_this383 =
				_Component17.call.apply(_Component17, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this383), "install", function() {
				console.log("Checkbox!");
			});
			_defineProperty(_assertThisInitialized(_this383), "data", {
				checked: !!(
					_this383.props.defaultChecked ||
					_this383.props.checked ||
					(_this383.props.defaultValue &&
						_this383.props.defaultValue.includes(_this383.props.value))
				)
			});
			_defineProperty(
				_assertThisInitialized(_this383),
				"setChecked",

				function(props) {
					if (!props.indeterminate && !props.disabled) {
						_this383.data.checked = !_this383.data.checked;
						if (_this383.data.checked) {
							props.check == null ? void 0 : props.check(props.value);
						} else {
							props.uncheck == null ? void 0 : props.uncheck(props.value);
						}
					}
					props.onChange == null ? void 0 : props.onChange(_this383.data.checked);
				}
			);
			_defineProperty(_assertThisInitialized(_this383), "render", function(props) {
				var _boxClsObj, _classNames7;
				var usageWarning = function usageWarning() {
					if (props.checked !== void 0) {
						var message =
							"When used with `CheckboxGroup`, the `checked` prop of `Checkbox` will not work if `value` prop of `Checkbox` is not undefined.";
						console.warn("[antd-mobile: Checkbox] " + message);
					}
					if (props.defaultChecked !== void 0) {
						var _message =
							"When used with `CheckboxGroup`, the `defaultChecked` prop of `Checkbox` will not work if `value` prop of `Checkbox` is not undefined.";
						console.warn("[antd-mobile: Checkbox] " + _message);
					}
				};
				if (props.checkedList !== void 0 && props.value === void 0) {
					usageWarning();
				}
				var boxClsObj =
					((_boxClsObj = {}),
					(_boxClsObj[classPrefix$b + "-checked"] =
						_this383.data.checked && !props.disabled),
					(_boxClsObj[classPrefix$b + "-indeterminate"] = props.indeterminate),
					(_boxClsObj[classPrefix$b + "-disabled"] = props.disabled),
					(_boxClsObj[classPrefix$b + "-block"] = props.block),
					_boxClsObj);

				var iconClsObj = Object.keys(boxClsObj).map(function(key) {
					var _ref;
					return (_ref = {}), (_ref[key + "-icon"] = boxClsObj[key]), _ref;
				});
				var iconTextClsObj = Object.keys(boxClsObj).map(function(key) {
					var _ref2;
					return (_ref2 = {}), (_ref2[key + "-icon-text"] = boxClsObj[key]), _ref2;
				});
				var boxClassStr = classNames(classPrefix$b, boxClsObj);
				var iconClassStr = classNames(classPrefix$b + "-icon", iconClsObj);
				var iconTextClassStr = classNames(
					classPrefix$b + "-icon-text",
					iconTextClsObj
				);
				var contentClassStr = classNames(
					classPrefix$b + "-content",
					((_classNames7 = {}),
					(_classNames7[classPrefix$b + "-disabled-content"] = props.disabled),
					_classNames7)
				);

				var iconSize = props.iconSize || "22px";
				var iconSizeStyle = {};
				iconSizeStyle["width"] = iconSize;
				iconSizeStyle["height"] = iconSize;
				iconSizeStyle["lineHeight"] = iconSize;
				return /* @__PURE__ */ avm.h(
					"label",
					{
						className: boxClassStr
					},
					/* @__PURE__ */ avm.h(
						"div",
						{
							className: iconClassStr,
							onClick: function onClick() {
								return _this383.setChecked(props);
							},
							style: iconSizeStyle
						},
						/* @__PURE__ */ avm.h(
							"span",
							{
								className: iconTextClassStr,
								style: {
									fontSize: Number(iconSize.replace("px", "")) - 6 + "px",
									lineHeight: iconSize
								}
							},
							!!_this383.data.checked && "\u221A"
						)
					),
					props.children &&
						/* @__PURE__ */ avm.h(
							"span",
							{
								className: contentClassStr,
								style: {
									fontSize: props.fontSize || "17px",
									paddingLeft: props.gap || "8px"
								}
							},
							props.children
						)
				);
			});
			return _this383;
		}
		return Checkbox;
	})(Component);

	var defaultProps$9 = {
		disabled: false,
		list: []
	};
	var CheckboxGroup = /*#__PURE__*/ (function(_Component18) {
		_inheritsLoose(CheckboxGroup, _Component18);
		function CheckboxGroup() {
			var _this384;
			for (
				var _len384 = arguments.length, args = new Array(_len384), _key384 = 0;
				_key384 < _len384;
				_key384++
			) {
				args[_key384] = arguments[_key384];
			}
			_this384 =
				_Component18.call.apply(_Component18, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this384), "install", function() {
				console.log("Group!");
			});
			_defineProperty(_assertThisInitialized(_this384), "data", {
				checkList: [],
				hasChecked: false
			});
			_defineProperty(
				_assertThisInitialized(_this384),
				"setCheckList",

				function(val, props) {
					_this384.data.checkList = val;
					_this384.data.hasChecked = true;
					props.onChange == null ? void 0 : props.onChange(val);
				}
			);
			_defineProperty(_assertThisInitialized(_this384), "render", function(props) {
				props = mergeProps(defaultProps$9, props);
				var _props6 = props,
					defaultValue = _props6.defaultValue,
					list2 = _props6.list,
					disabled = _props6.disabled;
				if (defaultValue && !_this384.data.hasChecked) {
					_this384.data.checkList = defaultValue;
				}
				var listEle = list2.map(function(item) {
					return /* @__PURE__ */ avm.h(
						Checkbox,
						__spreadProps(__spreadValues({}, item), {
							defaultValue: defaultValue,
							checkedList: _this384.data.checkList,
							disabled: item.disabled || disabled,
							check: function check(val) {
								_this384.setCheckList([].concat(_this384.data.checkList, [val]), props);
							},
							uncheck: function uncheck(val) {
								_this384.setCheckList(
									_this384.data.checkList.filter(function(v) {
										return v !== val;
									}),
									props
								);
							}
						}),
						item.label
					);
				});
				return /* @__PURE__ */ avm.h("div", null, listEle);
			});
			return _this384;
		}
		return CheckboxGroup;
	})(Component);

	var index$1 = attachPropertiesToComponent(Checkbox, {
		Group: CheckboxGroup
	});
	var closeIcon =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAe5JREFUSEutlT9rFFEUxc/ZXbZUEK3Ewj8QFYyycx8Kotj4AWy01DQiCdqIYiEkaRUsDJI2EBuxsLcRVJYN7800ohjUYGGlfoY5MsvOsLuZ2VnMDkwz79zfu+++e88QNU+v19vXarVOkTwrqSHpE8ltM/s7KZRViyGER5JukDxXodkG8NbM7pWt7wInSXI6TdNNAJ260wzWd0jeiqLow7B+BOy9XyG5PCVwRCZp1Tm3kn8swN77OZJf/weax0g66ZzLSoQCHELoATg/JFqty17SKwBXSR4YxG2Z2YUC7L1/QvLBULavzex6TWk2zGxhXCPpqXPuYT/jEMI3ACfGyjAJvm5mi2UbS/rlnDvCJEkOpWn6u6K2ZfBnZna/5jQRvfdXSL6bcGkFvNFotKIoejxF9ywxhLAI4EVNN/ThmWYKKCS9zMB3AKzPEkxyIyvFRZIfZ1mKNE0XsowPAvgz48ubz9stm7i5snaL43hZUjGqA01luwH4aWZHc/BzAHdnMSAA1jLHGx7pHwCO7XGkd8zs+IhXxHF8SdL7vZgQycu5fY7YZkU9p9qr0jbz6G63e7jdbq8BuDYVEdiSdDO3y11+PA6J43hJ0m0A8xUbfJf0JnOysvXKf14uDiHsB3Bm8FLSl2az+bnT6VT1fj/0H9kXDeO4/QD9AAAAAElFTkSuQmCC";
	var classPrefix$a = "adm-input";
	var defaultProps$8 = {
		defaultValue: "",
		maxLength: 500,
		minLength: 0,
		fontSize: "17px",
		color: "#333",
		placeholderColor: "#ccc",
		disabledColor: "#999",
		textAlign: "left"
	};
	var Input = /*#__PURE__*/ (function(_Component19) {
		_inheritsLoose(Input, _Component19);
		function Input() {
			var _this385;
			for (
				var _len385 = arguments.length, args = new Array(_len385), _key385 = 0;
				_key385 < _len385;
				_key385++
			) {
				args[_key385] = arguments[_key385];
			}
			_this385 =
				_Component19.call.apply(_Component19, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this385), "install", function() {
				console.log("Input!");
			});
			_defineProperty(_assertThisInitialized(_this385), "data", {
				value: _this385.props.value || _this385.props.defaultValue,
				hasFocus: false
			});
			_defineProperty(
				_assertThisInitialized(_this385),
				"setValue",

				function(val, props) {
					_this385.data.value = val;
					props.onChange && props.onChange(val);
				}
			);
			_defineProperty(_assertThisInitialized(_this385), "setHasFocus", function(
				state
			) {
				_this385.data.hasFocus = state;
			});
			_defineProperty(_assertThisInitialized(_this385), "render", function(props) {
				var _classNames8;
				props = mergeProps(defaultProps$8, props);
				var handleKeydown = function handleKeydown(e) {
					if (props.onEnterPress && (e.code === "Enter" || e.keyCode === 13)) {
						props.onEnterPress(e);
					}
					props.onKeyDown == null ? void 0 : props.onKeyDown(e);
				};
				var inputStyles = {};
				props.fontSize && (inputStyles["fontSize"] = props.fontSize);
				props.color && (inputStyles["color"] = props.color);
				props.disabledColor &&
					props.disabled &&
					(inputStyles["color"] = props.disabledColor);
				props.textAlign && (inputStyles["textAlign"] = props.textAlign);
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$a + "-wrapper"
					},
					/* @__PURE__ */ avm.h("input", {
						id: props.id,
						className: classNames(
							classPrefix$a,
							((_classNames8 = {}),
							(_classNames8[classPrefix$a + "-disabled"] = props.disabled),
							(_classNames8[classPrefix$a + "-readOnly"] = props.readOnly),
							_classNames8)
						),

						"placeholder-class": props.placeholderClass,
						style: inputStyles,
						value: _this385.data.value,
						onInput: function onInput(e) {
							_this385.setValue(e.target.value, props);
							props.onInput == null ? void 0 : props.onInput(e);
						},
						onChange: function onChange(e) {
							_this385.setValue(e.target.value, props);
						},
						onFocus: function onFocus(e) {
							_this385.setHasFocus(true);
							props.onFocus == null ? void 0 : props.onFocus(e);
						},
						onBlur: function onBlur(e) {
							_this385.setHasFocus(false);
							props.onBlur == null ? void 0 : props.onBlur(e);
						},
						placeholder: props.placeholder,
						disabled: props.disabled,
						readOnly: props.readOnly,
						maxLength: props.maxLength,
						minLength: props.minLength,
						max: props.max,
						min: props.min,
						autoComplete: props.autoComplete,
						enterKeyHint: props.enterKeyHint,
						pattern: props.pattern,
						type: props.type,
						autoCapitalize: props.autoCapitalize,
						autoCorrect: props.autoCorrect,
						onKeyDown: handleKeydown,
						onKeyUp: props.onKeyUp
					}),
					props.clearable &&
						!!_this385.data.value &&
						_this385.data.hasFocus &&
						/* @__PURE__ */ avm.h(
							"div",
							{
								className: classPrefix$a + "-clear",
								onClick: function onClick() {
									_this385.setValue("", props);
									props.onClear == null ? void 0 : props.onClear();
								}
							},
							/* @__PURE__ */ avm.h("img", {
								src: closeIcon,
								alt: "close",
								className: classPrefix$a + "-clear-icon"
							})
						)
				);
			});
			return _this385;
		}
		return Input;
	})(Component);
	var classPrefix$9 = "adm-tag";
	var colorRecord = {
		default: "#666666",
		primary: "#1677ff",
		success: "#00b578",
		warning: "#ff8f1f",
		danger: "#ff3141"
	};

	var defaultProps$7 = {
		color: "default",
		fill: "solid",
		round: false
	};
	var Tag = /*#__PURE__*/ (function(_Component20) {
		_inheritsLoose(Tag, _Component20);
		function Tag() {
			var _this386;
			for (
				var _len386 = arguments.length, args = new Array(_len386), _key386 = 0;
				_key386 < _len386;
				_key386++
			) {
				args[_key386] = arguments[_key386];
			}
			_this386 =
				_Component20.call.apply(_Component20, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this386), "install", function() {
				console.log("Tag!");
			});
			_defineProperty(_assertThisInitialized(_this386), "render", function(props) {
				var _colorRecord$props$co, _props$borderColor, _classNames9;
				props = mergeProps(defaultProps$7, props);
				var color =
					(_colorRecord$props$co = colorRecord[props.color]) != null
						? _colorRecord$props$co
						: props.color;
				var styles = {};
				styles["border"] =
					"1px solid " +
					((_props$borderColor = props.borderColor) != null
						? _props$borderColor
						: color);
				if (props.fill === "outline") {
					var _props$textColor;
					styles["color"] =
						(_props$textColor = props.textColor) != null ? _props$textColor : color;
				} else {
					var _props$bgColor, _props$textColor2;
					styles["background"] =
						(_props$bgColor = props.bgColor) != null ? _props$bgColor : color;
					styles["color"] =
						(_props$textColor2 = props.textColor) != null
							? _props$textColor2
							: "#fff";
				}
				if (props.borderRadius && !props.round) {
					styles["borderRadius"] = props.borderRadius;
				}
				return /* @__PURE__ */ avm.h(
					"span",
					{
						style: styles,
						onClick: props.onClick,
						className: classNames(
							classPrefix$9,
							((_classNames9 = {}),
							(_classNames9[classPrefix$9 + "-round"] = props.round),
							_classNames9)
						)
					},

					props.children
				);
			});
			return _this386;
		}
		return Tag;
	})(Component);
	var classPrefix$8 = "adm-radio";
	var defaultProps$6 = {
		defaultChecked: false
	};
	var Radio = /*#__PURE__*/ (function(_Component21) {
		_inheritsLoose(Radio, _Component21);
		function Radio() {
			var _this387;
			for (
				var _len387 = arguments.length, args = new Array(_len387), _key387 = 0;
				_key387 < _len387;
				_key387++
			) {
				args[_key387] = arguments[_key387];
			}
			_this387 =
				_Component21.call.apply(_Component21, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this387), "install", function() {
				console.log("Radio!");
			});
			_defineProperty(_assertThisInitialized(_this387), "data", {
				checked: _this387.props.checked || _this387.props.defaultChecked
			});
			_defineProperty(
				_assertThisInitialized(_this387),
				"setChecked",

				function(check) {
					_this387.data.checked = check;
					_this387.props.onChange && _this387.props.onChange(_this387.props.value);
				}
			);
			_defineProperty(_assertThisInitialized(_this387), "render", function(props) {
				var _classNames12, _classNames13;
				props = mergeProps(defaultProps$6, props);
				var groupContext = props.RadioGroupContext;
				var disabled = props.disabled;
				var _props7 = props,
					value = _props7.value;
				if (groupContext && value !== void 0) {
					_this387.data.checked = groupContext.value.includes(value);
					_this387.setChecked = function(checked) {
						if (checked) {
							groupContext.check(value);
						} else {
							groupContext.uncheck(value);
						}
						props.onChange == null ? void 0 : props.onChange(checked);
					};
					disabled = disabled || groupContext.disabled;
				}
				var renderIcon = function renderIcon() {
					var _classNames10, _classNames11;
					var iconCls = classNames(
						classPrefix$8 + "-icon",
						((_classNames10 = {}),
						(_classNames10[classPrefix$8 + "-checked-icon"] = _this387.data.checked),
						(_classNames10[classPrefix$8 + "-disabled-icon"] = disabled),
						_classNames10)
					);

					var radioSizeStyle = {};
					var iconSize = props.iconSize || "22px";
					radioSizeStyle["width"] = iconSize;
					radioSizeStyle["height"] = iconSize;
					radioSizeStyle["borderRadius"] = iconSize;
					if (props.icon) {
						return /* @__PURE__ */ avm.h(
							"div",
							{
								style: {fontSize: iconSize}
							},
							props.icon(_this387.data.checked)
						);
					}
					return /* @__PURE__ */ avm.h(
						"div",
						{
							className: iconCls,
							style: radioSizeStyle
						},
						_this387.data.checked &&
							/* @__PURE__ */ avm.h(
								"text",
								{
									className: classNames(
										classPrefix$8 + "-icon-checked",
										((_classNames11 = {}),
										(_classNames11[classPrefix$8 + "-icon-checked-disabled"] = disabled),
										_classNames11)
									)
								},

								"\u221A"
							)
					);
				};
				var contentCls = classNames(
					classPrefix$8 + "-content",
					((_classNames12 = {}),
					(_classNames12[classPrefix$8 + "-disabled-content"] = disabled),
					_classNames12)
				);

				var contentStyles = {};
				contentStyles["fontSize"] = props.fontSize || "17px";
				contentStyles["paddingLeft"] = props.gap || "8px";
				return /* @__PURE__ */ avm.h(
					"label",
					{
						className: classNames(
							classPrefix$8,
							props.className,
							((_classNames13 = {}),
							(_classNames13[classPrefix$8 + "-checked"] = _this387.data.checked),
							(_classNames13[classPrefix$8 + "-disabled"] = disabled),
							(_classNames13[classPrefix$8 + "-block"] = props.block),
							_classNames13)
						),

						style: props.style
					},
					/* @__PURE__ */ avm.h("radio", {
						className: classPrefix$8 + "-input",
						type: "radio",
						checked: _this387.data.checked,
						onChange: function onChange(e) {
							!disabled && _this387.setChecked(e.detail.value);
						},
						disabled: disabled,
						id: props.id
					}),
					renderIcon(),
					props.children && formatLabel(props.children, contentCls, contentStyles)
				);
			});
			return _this387;
		}
		return Radio;
	})(Component);

	var defaultProps$5 = {
		disabled: false,
		defaultValue: null
	};
	var Group = /*#__PURE__*/ (function(_Component22) {
		_inheritsLoose(Group, _Component22);
		function Group() {
			var _this388;
			for (
				var _len388 = arguments.length, args = new Array(_len388), _key388 = 0;
				_key388 < _len388;
				_key388++
			) {
				args[_key388] = arguments[_key388];
			}
			_this388 =
				_Component22.call.apply(_Component22, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this388), "install", function() {
				console.log("RadioGroup!");
			});
			_defineProperty(_assertThisInitialized(_this388), "data", {
				value: _this388.props.value || _this388.props.defaultValue
			});
			_defineProperty(
				_assertThisInitialized(_this388),
				"setValue",

				function(val) {
					_this388.data.value = val;
					_this388.props.onChange && _this388.props.onChange(val);
				}
			);
			_defineProperty(_assertThisInitialized(_this388), "render", function(props) {
				props = mergeProps(defaultProps$5, props);
				var RadioGroupContext = {
					value: _this388.data.value === null ? [] : [_this388.data.value],
					check: function check(v) {
						_this388.setValue(v);
					},
					uncheck: function uncheck() {},
					disabled: props.disabled
				};

				var eles = props.children.map(function(ele) {
					return /* @__PURE__ */ avm.h(
						Radio,
						__spreadProps(__spreadValues({}, ele.attributes), {
							RadioGroupContext: RadioGroupContext
						}),
						ele.children
					);
				});
				return /* @__PURE__ */ avm.h("div", null, eles);
			});
			return _this388;
		}
		return Group;
	})(Component);

	var index = attachPropertiesToComponent(Radio, {
		Group: Group
	});
	var classPrefix$7 = "adm-rate";
	var defaultProps$4 = {
		count: 5,
		allowHalf: false,
		character: "\u2605",
		defaultValue: 0,
		readOnly: false,
		allowClear: true
	};
	var Rate = /*#__PURE__*/ (function(_Component23) {
		_inheritsLoose(Rate, _Component23);
		function Rate() {
			var _this389;
			for (
				var _len389 = arguments.length, args = new Array(_len389), _key389 = 0;
				_key389 < _len389;
				_key389++
			) {
				args[_key389] = arguments[_key389];
			}
			_this389 =
				_Component23.call.apply(_Component23, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this389), "install", function() {
				console.log("Rate!");
			});
			_defineProperty(_assertThisInitialized(_this389), "data", {
				value: 0
			});
			_defineProperty(
				_assertThisInitialized(_this389),
				"setValue",

				function(val, props) {
					_this389.data.value = val;
					props.onChange == null ? void 0 : props.onChange(_this389.data.value);
				}
			);
			_defineProperty(_assertThisInitialized(_this389), "render", function(props) {
				props = mergeProps(defaultProps$4, props);
				var starList = Array(props.count).fill(null);
				var styles = {};
				var _props8 = props,
					_props8$starSize = _props8.starSize,
					starSize = _props8$starSize === void 0 ? "24px" : _props8$starSize,
					_props8$activeColor = _props8.activeColor,
					activeColor =
						_props8$activeColor === void 0 ? "#ffd21e" : _props8$activeColor;
				styles["padding"] = Number(starSize.replace("px", "")) / 8 + "px";
				styles["line-height"] = starSize;
				styles["font-size"] = starSize;
				var renderStar = function renderStar(v, half) {
					var _classNames14;
					return /* @__PURE__ */ avm.h(
						"div",
						{
							className: classNames(
								classPrefix$7 + "-star",
								((_classNames14 = {}),
								(_classNames14[classPrefix$7 + "-star-active"] =
									_this389.data.value >= v),
								(_classNames14[classPrefix$7 + "-star-half"] = half),
								(_classNames14[classPrefix$7 + "-star-readonly"] = props.readOnly),
								_classNames14)
							),

							style: __spreadProps(__spreadValues({}, styles), {
								color: _this389.data.value >= v ? activeColor : "#ccc"
							}),
							onClick: function onClick() {
								if (props.readOnly) return;
								if (props.allowClear && _this389.data.value === v) {
									_this389.setValue(0, props);
								} else {
									_this389.setValue(v, props);
								}
							}
						},
						/* @__PURE__ */ avm.h(
							"text",
							{
								style: {
									color: _this389.data.value >= v ? activeColor : "#ccc",
									fontSize: starSize
								}
							},
							props.character
						)
					);
				};
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$7
					},
					starList.map(function(_, i) {
						return /* @__PURE__ */ avm.h(
							"div",
							{
								key: i,
								className: classNames(classPrefix$7 + "-box")
							},
							props.allowHalf && renderStar(i + 0.5, true),
							renderStar(i + 1, false)
						);
					})
				);
			});
			return _this389;
		}
		return Rate;
	})(Component);
	var searchIcon =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAZJJREFUOE+l0zFoFUEQBuB/ltdaiK02lhaChSCIWEm6gEXQUjhuZ/dFUBvrCBZpxCLBu9njgWBhWtMoGJJIumBpIUHSRdFgEWzfzcgFL+Quz0TilXOz387M7hL+86P+ehHxAC4DuAhgD8BOXddvhsPhxqS9OoCIfATwFcCqc27LzM6a2QUAj4nogff+VR85AEREVPVbjHFu0k4ppU91Xd+PMa4f/r8PFEUx5Zx7ysxX/zaSsiwvEdHyYDC4kmXZrzavBeaI6GcIYeG4mYrIkqqWh6vYB0Rk2cxehBDeHQeUZTlPRLvM/KxTQdM/Ea1575dOqKB0zn3I8/x1B6iqKlPV88z85ATgPRHNeu+3OsBoNDozHo+3VXWmP+U2UUQeArjNzDePnEITSClNm9lzVc36SEopN7MEYIWZb00EmmBVVTdUddHMHBG9BXAOQANvOuceNfM2s+/MfLfTQr/voiiuO+eumdkuEW0y8+c2J6W0ZmZfmDlvYkfewr+8rQZR1R8hhDunAv7c3nsxxpenBtpKfwNXwLQR3X6r9QAAAABJRU5ErkJggg==";
	var classPrefix$6 = "adm-search";
	var defaultProps$3 = {
		clearable: true,
		showCancelButton: false,
		defaultValue: "",
		clearOnCancel: true,
		cancelText: "\u53D6\u6D88",
		bgColor: "#f5f5f5",
		borderRadius: "6px"
	};
	var Search = /*#__PURE__*/ (function(_Component24) {
		_inheritsLoose(Search, _Component24);
		function Search() {
			var _this390;
			for (
				var _len390 = arguments.length, args = new Array(_len390), _key390 = 0;
				_key390 < _len390;
				_key390++
			) {
				args[_key390] = arguments[_key390];
			}
			_this390 =
				_Component24.call.apply(_Component24, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this390), "install", function() {
				console.log("Search!");
			});
			_defineProperty(_assertThisInitialized(_this390), "data", {
				searchVal: "",
				hasFocus: false
			});
			_defineProperty(
				_assertThisInitialized(_this390),
				"setSearchValue",

				function(val, props) {
					_this390.data.searchVal = val;
					props.onChange == null ? void 0 : props.onChange(_this390.data.searchVal);
				}
			);
			_defineProperty(_assertThisInitialized(_this390), "setHasFocus", function(
				focus
			) {
				_this390.data.hasFocus = focus;
			});
			_defineProperty(_assertThisInitialized(_this390), "render", function(props) {
				var _classNames15;
				props = mergeProps(defaultProps$3, props);
				var renderCancelButton = function renderCancelButton() {
					var isShowCancel = false;
					if (typeof props.showCancelButton === "function") {
						isShowCancel = props.showCancelButton(
							_this390.data.hasFocus,
							_this390.data.searchVal
						);
					} else {
						isShowCancel = props.showCancelButton && _this390.data.searchVal;
					}
					return (
						isShowCancel &&
						/* @__PURE__ */ avm.h(
							"span",
							{
								className: classPrefix$6 + "-suffix",
								onClick: function onClick() {
									_this390.setSearchValue("", props);
									if (props.clearOnCancel) {
										props.onClear == null ? void 0 : props.onClear();
									}
									props.onCancel == null ? void 0 : props.onCancel();
								}
							},
							props.cancelText
						)
					);
				};
				var boxStyles = {};
				boxStyles["background"] = props.bgColor;
				boxStyles["borderRadius"] = props.borderRadius;
				var placeHolderStyle = "color: " + props.placeholderColor;
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classNames(
							classPrefix$6,
							((_classNames15 = {}),
							(_classNames15[classPrefix$6 + "-active"] = _this390.data.hasFocus),
							_classNames15)
						)
					},

					/* @__PURE__ */ avm.h(
						"div",
						{
							className: classNames(
								classPrefix$6 + "-input-box",
								_this390.data.hasFocus ? classPrefix$6 + "-active-input-box" : ""
							),
							style: boxStyles
						},
						/* @__PURE__ */ avm.h(
							"div",
							{
								className: classPrefix$6 + "-input-box-icon"
							},
							/* @__PURE__ */ avm.h("img", {
								src: searchIcon,
								alt: "search"
							})
						),
						/* @__PURE__ */ avm.h(Input, {
							isSearch: true,
							className: classPrefix$6 + "-input",
							value: _this390.data.searchVal,
							onChange: function onChange(val) {
								return _this390.setSearchValue(val, props);
							},
							maxLength: props.maxLength,
							placeholder: props.placeholder,
							placeholderStyle: placeHolderStyle,
							clearable: props.clearable,
							onFocus: function onFocus(e) {
								_this390.setHasFocus(true);
								props.onFocus == null ? void 0 : props.onFocus(e);
							},
							onBlur: function onBlur(e) {
								_this390.setHasFocus(false);
								props.onBlur == null ? void 0 : props.onBlur(e);
							},
							onClear: props.onClear,
							onEnterPress: function onEnterPress() {
								props.onSearch == null
									? void 0
									: props.onSearch(_this390.data.searchVal);
							}
						})
					),
					renderCancelButton()
				);
			});
			return _this390;
		}
		return Search;
	})(Component);
	var classPrefix$5 = "adm-grid";
	var Grid$1 = /*#__PURE__*/ (function(_Component25) {
		_inheritsLoose(Grid$1, _Component25);
		function Grid$1() {
			var _this391;
			for (
				var _len391 = arguments.length, args = new Array(_len391), _key391 = 0;
				_key391 < _len391;
				_key391++
			) {
				args[_key391] = arguments[_key391];
			}
			_this391 =
				_Component25.call.apply(_Component25, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this391), "install", function() {
				console.log("Grid!");
			});
			_defineProperty(_assertThisInitialized(_this391), "render", function(props) {
				var _props$gap = props.gap,
					gap = _props$gap === void 0 ? 0 : _props$gap,
					columns = props.columns;
				var styles = {};
				styles["grid-template-columns"] =
					"repeat(" + columns.toString() + ", minmax(0, 1fr))";
				if (Array.isArray(gap)) {
					styles["column-gap"] = toCSSLength(gap[0]);
					styles["row-gap"] = toCSSLength(gap[1]);
				} else {
					styles["column-gap"] = toCSSLength(gap);
					styles["row-gap"] = toCSSLength(gap);
				}
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$5,
						style: styles
					},
					props.children
				);
			});
			return _this391;
		}
		return Grid$1;
	})(Component);
	var GridItem = /*#__PURE__*/ (function(_Component26) {
		_inheritsLoose(GridItem, _Component26);
		function GridItem() {
			var _this392;
			for (
				var _len392 = arguments.length, args = new Array(_len392), _key392 = 0;
				_key392 < _len392;
				_key392++
			) {
				args[_key392] = arguments[_key392];
			}
			_this392 =
				_Component26.call.apply(_Component26, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this392), "install", function() {
				console.log("GridItem!");
			});
			_defineProperty(_assertThisInitialized(_this392), "render", function(props) {
				props = mergeProps({span: 1}, props);
				var itemStyle = {};
				itemStyle["grid-column-end"] = "span " + props.span;
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$5 + "-item",
						style: itemStyle,
						onClick: props.onClick
					},
					props.children
				);
			});
			return _this392;
		}
		return GridItem;
	})(Component);

	var Grid = attachPropertiesToComponent(Grid$1, {
		Item: GridItem
	});
	var checkIcon =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAIxJREFUOE/Vk7ENg0AQBGfbcSdIFpmphwJIiMgd2gk5ASkNUM8ipLdk4MF+EVj+fEa3e/fi5NNJnj8U2L4AhaRyjp8UIcBjEDyTBDF4IbDdA7Wkdr2ZPXgtuAF3IJfUvSRH8CaC7VnSAFdJwyc42kGQVEAGLAqLHV10C0HyeG9772KT1vj1BCn/4/cTTKW4NxE23iIWAAAAAElFTkSuQmCC";
	var classPrefix$4 = "adm-selector";
	var defaultProps$2 = {
		multiple: false,
		defaultValue: [],
		color: "#333",
		checkedColor: "#e7f1ff"
	};
	var Selector = /*#__PURE__*/ (function(_Component27) {
		_inheritsLoose(Selector, _Component27);
		function Selector() {
			var _this393;
			for (
				var _len393 = arguments.length, args = new Array(_len393), _key393 = 0;
				_key393 < _len393;
				_key393++
			) {
				args[_key393] = arguments[_key393];
			}
			_this393 =
				_Component27.call.apply(_Component27, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this393), "install", function() {
				console.log("Selector!");
			});
			_defineProperty(_assertThisInitialized(_this393), "data", {
				value: _this393.props.value || _this393.props.defaultValue
			});
			_defineProperty(
				_assertThisInitialized(_this393),
				"setValue",

				function(val) {
					_this393.data.value = val;
					var extend = _this393.props.options.filter(function(option) {
						return val.includes(option.value);
					});
					_this393.props.onChange && _this393.props.onChange(val, extend);
				}
			);
			_defineProperty(_assertThisInitialized(_this393), "render", function(props) {
				props = mergeProps(defaultProps$2, props);
				var activeStyles = {};
				activeStyles["color"] = props.color;
				activeStyles["background"] = props.checkedColor;
				var items = props.options.map(function(option) {
					var _classNames16;
					var active = (_this393.data.value || []).includes(option.value);
					var disabled = option.disabled || props.disabled;
					var itemCls = classNames(
						classPrefix$4 + "-item",
						((_classNames16 = {}),
						(_classNames16[classPrefix$4 + "-item-active"] =
							active && !props.multiple),
						(_classNames16[classPrefix$4 + "-item-multiple-active"] =
							active && props.multiple),
						(_classNames16[classPrefix$4 + "-item-disabled"] = disabled),
						_classNames16)
					);

					return /* @__PURE__ */ avm.h(
						"div",
						{
							key: option.value,
							className: itemCls,
							style: active ? activeStyles : {background: "#f5f5f5"},
							onClick: function onClick() {
								if (disabled) {
									return;
								}
								if (props.multiple) {
									var val = active
										? _this393.data.value.filter(function(v) {
												return v !== option.value;
										  })
										: [].concat(_this393.data.value, [option.value]);
									_this393.setValue(val);
								} else {
									var _val = active ? [] : [option.value];
									_this393.setValue(_val);
								}
							}
						},
						/* @__PURE__ */ avm.h(
							"span",
							{
								className: classPrefix$4 + "-label",
								style: {color: active ? props.color : "#333"}
							},
							option.label
						),
						active &&
							props.multiple &&
							/* @__PURE__ */ avm.h(
								"div",
								{
									className: classPrefix$4 + "-check-mark-wrapper"
								},
								/* @__PURE__ */ avm.h("img", {
									src: checkIcon,
									className: classPrefix$4 + "-check-mark-wrapper-img"
								})
							)
					);
				});
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classPrefix$4
					},
					!props.columns &&
						/* @__PURE__ */ avm.h(
							Space,
							{
								wrap: true
							},
							items
						),
					props.columns &&
						/* @__PURE__ */ avm.h(
							Grid,
							{
								columns: props.columns,
								gap: 8
							},
							items
						)
				);
			});
			return _this393;
		}
		return Selector;
	})(Component);
	var classPrefix$3 = "adm-infinite-scroll";
	var InfiniteScrollContent = /*#__PURE__*/ (function(_Component28) {
		_inheritsLoose(InfiniteScrollContent, _Component28);
		function InfiniteScrollContent() {
			var _this394;
			for (
				var _len394 = arguments.length, args = new Array(_len394), _key394 = 0;
				_key394 < _len394;
				_key394++
			) {
				args[_key394] = arguments[_key394];
			}
			_this394 =
				_Component28.call.apply(_Component28, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this394), "render", function(props) {
				return /* @__PURE__ */ avm.h(
					"view",
					{
						className: classPrefix$3 + "-tip"
					},
					props.hasMore
						? /* @__PURE__ */ avm.h(
								"view",
								null,
								/* @__PURE__ */ avm.h(
									"span",
									{
										className: classPrefix$3 + "-tip-text"
									},
									props.hasMoreText || "\u52A0\u8F7D\u4E2D"
								)
						  )
						: /* @__PURE__ */ avm.h(
								"span",
								{
									className: classPrefix$3 + "-tip-text"
								},
								props.notHasMoreText || "\u6CA1\u6709\u66F4\u591A\u4E86"
						  )
				);
			});
			return _this394;
		}
		return InfiniteScrollContent;
	})(Component);
	var InfiniteScroll = /*#__PURE__*/ (function(_Component29) {
		_inheritsLoose(InfiniteScroll, _Component29);
		function InfiniteScroll() {
			var _this395;
			for (
				var _len395 = arguments.length, args = new Array(_len395), _key395 = 0;
				_key395 < _len395;
				_key395++
			) {
				args[_key395] = arguments[_key395];
			}
			_this395 =
				_Component29.call.apply(_Component29, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this395), "install", function() {
				console.log("InfiniteScroll!");
			});
			_defineProperty(_assertThisInitialized(_this395), "render", function(props) {
				props = mergeProps({threshold: 250}, props);
				var doLoadMore = function doLoadMore() {
					props.hasMore && props.loadMore();
				};
				return /* @__PURE__ */ avm.h(
					"scroll-view",
					{
						"scroll-y": true,
						"show-scrollbar": false,
						bounces: true,
						className: classPrefix$3,
						"lower-threshold": props.threshold,
						onscrolltolower: doLoadMore
					},
					props.children,
					/* @__PURE__ */ avm.h(
						InfiniteScrollContent,
						__spreadValues(
							{
								hasMore: props.hasMore
							},
							props
						)
					)
				);
			});
			return _this395;
		}
		return InfiniteScroll;
	})(Component);
	function bound(position, min, max) {
		var ret = position;
		if (min !== void 0) {
			ret = Math.max(position, min);
		}
		if (max !== void 0) {
			ret = Math.min(ret, max);
		}
		return ret;
	}
	var classPrefix$2 = "adm-stepper";
	var defaultProps$1 = {
		defaultValue: 0,
		step: 1,
		disabled: false
	};

	var toStringVal = function toStringVal(val) {
		return val ? val.toString() : val === 0 ? "0" : "";
	};
	var Stepper = /*#__PURE__*/ (function(_Component30) {
		_inheritsLoose(Stepper, _Component30);
		function Stepper() {
			var _this396;
			for (
				var _len396 = arguments.length, args = new Array(_len396), _key396 = 0;
				_key396 < _len396;
				_key396++
			) {
				args[_key396] = arguments[_key396];
			}
			_this396 =
				_Component30.call.apply(_Component30, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this396), "install", function() {
				console.log("Stepper!");
			});
			_defineProperty(_assertThisInitialized(_this396), "data", {
				value: 0,
				inputValue: 0,
				hasFocus: false,
				isInit: true
			});
			_defineProperty(
				_assertThisInitialized(_this396),
				"setValue",

				function(val) {
					_this396.data.isInit = false;
					_this396.data.value = val;
					_this396.setInputValue(toStringVal(val));
					_this396.props.onChange && _this396.props.onChange(Number(val));
				}
			);
			_defineProperty(_assertThisInitialized(_this396), "setInputValue", function(
				val
			) {
				_this396.data.inputValue = val;
			});
			_defineProperty(_assertThisInitialized(_this396), "setHasFocus", function(
				focus
			) {
				_this396.data.hasFocus = focus;
				if (!_this396.data.hasFocus) {
					_this396.setInputValue(toStringVal(_this396.data.value));
				}
			});
			_defineProperty(
				_assertThisInitialized(_this396),
				"setValueWithCheck",
				function(v) {
					if (isNaN(v)) return;
					var target = bound(v, _this396.props.min, _this396.props.max);
					if (_this396.props.digits || _this396.props.digits === 0) {
						target = parseFloat(target.toFixed(_this396.props.digits));
					}
					_this396.setValue(target);
				}
			);
			_defineProperty(
				_assertThisInitialized(_this396),
				"handleInputChange",
				function(v) {
					_this396.setInputValue(v);
					_this396.setValueWithCheck(parseFloat(v));
				}
			);
			_defineProperty(_assertThisInitialized(_this396), "handleMinus", function() {
				_this396.setValueWithCheck(_this396.data.value - _this396.props.step);
			});
			_defineProperty(_assertThisInitialized(_this396), "handlePlus", function() {
				_this396.setValueWithCheck(_this396.data.value + _this396.props.step);
			});
			_defineProperty(
				_assertThisInitialized(_this396),
				"minusDisabled",
				function() {
					if (_this396.props.min === void 0) {
						return _this396.props.disabled;
					} else {
						return (
							_this396.props.disabled || _this396.data.value <= _this396.props.min
						);
					}
				}
			);
			_defineProperty(
				_assertThisInitialized(_this396),
				"plusDisabled",
				function() {
					if (_this396.props.max === void 0) {
						return _this396.props.disabled;
					} else {
						return (
							_this396.props.disabled || _this396.data.value >= _this396.props.max
						);
					}
				}
			);
			_defineProperty(_assertThisInitialized(_this396), "render", function(props) {
				var _classNames17;
				_this396.props = mergeProps(defaultProps$1, props);
				if (_this396.data.isInit) {
					_this396.data.value = props.value || props.defaultValue;
					_this396.data.inputValue =
						props.value !== void 0
							? toStringVal(props.value)
							: toStringVal(props.defaultValue);
				}
				var borderStyle = "1px solid #e5e5e5";
				var disabled = props.disabled,
					_props$height = props.height,
					height = _props$height === void 0 ? "22px" : _props$height,
					_props$inputWidth = props.inputWidth,
					inputWidth = _props$inputWidth === void 0 ? "40px" : _props$inputWidth,
					_props$inputFontSize = props.inputFontSize,
					inputFontSize =
						_props$inputFontSize === void 0 ? "13px" : _props$inputFontSize,
					_props$inputFontColor = props.inputFontColor,
					inputFontColor =
						_props$inputFontColor === void 0 ? "#333" : _props$inputFontColor,
					_props$borderRaduis = props.borderRaduis,
					borderRaduis =
						_props$borderRaduis === void 0 ? "2px" : _props$borderRaduis,
					_props$border = props.border,
					border = _props$border === void 0 ? borderStyle : _props$border,
					_props$activeBorder = props.activeBorder,
					activeBorder =
						_props$activeBorder === void 0 ? borderStyle : _props$activeBorder,
					_props$borderInner = props.borderInner,
					borderInner =
						_props$borderInner === void 0 ? borderStyle : _props$borderInner,
					_props$btnFontSize = props.btnFontSize,
					btnFontSize = _props$btnFontSize === void 0 ? "10px" : _props$btnFontSize,
					_props$btnBgColor = props.btnBgColor,
					btnBgColor =
						_props$btnBgColor === void 0 ? "transparent" : _props$btnBgColor,
					_props$btnWidth = props.btnWidth,
					btnWidth = _props$btnWidth === void 0 ? "22px" : _props$btnWidth,
					_props$btnTextColor = props.btnTextColor,
					btnTextColor =
						_props$btnTextColor === void 0 ? "#1677ff" : _props$btnTextColor;
				var btnWidthStyle = {};
				btnWidthStyle["width"] = btnWidth;
				var boxStyle = {
					height: height,
					width:
						Number(inputWidth.replace("px", "")) +
						Number(btnWidth.replace("px", "")) * 2 +
						"px",
					borderRadius: borderRaduis,
					border: _this396.data.hasFocus ? activeBorder : border
				};

				var btnStyle = __spreadProps(__spreadValues({}, btnWidthStyle), {
					height: height,
					lineHeight: height,
					backgroundColor: btnBgColor,
					fontSize: Number(btnFontSize.replace("px", "")) + 5 + "px",
					opacity: 1
				});

				var inputStyle = {
					height: height,
					width: inputWidth,
					fontSize: inputFontSize,
					color: disabled ? "#999" : inputFontColor,
					border: "none",
					borderLeft: borderInner,
					borderRight: borderInner,
					background: "transparent"
				};

				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classNames(
							classPrefix$2,
							((_classNames17 = {}),
							(_classNames17[classPrefix$2 + "-disabled"] = disabled),
							(_classNames17[classPrefix$2 + "-active"] = _this396.data.hasFocus),
							_classNames17)
						),

						style: boxStyle
					},
					/* @__PURE__ */ avm.h(
						Button,
						{
							className: classPrefix$2 + "-minus",
							onClick: _this396.handleMinus,
							disabled: _this396.minusDisabled(),
							fill: "none",
							style: __spreadProps(__spreadValues({}, btnStyle), {
								color: !_this396.minusDisabled() ? btnTextColor : "#999",
								borderRadius: borderRaduis + " 0 0 " + borderRaduis
							})
						},

						"-"
					),
					/* @__PURE__ */ avm.h("input", {
						className: classPrefix$2 + "-input",
						style: inputStyle,
						onFocus: function onFocus(e) {
							_this396.setHasFocus(true);
							props.onFocus == null ? void 0 : props.onFocus(e);
						},
						value: _this396.data.inputValue,
						disabled: disabled,
						onBlur: function onBlur(e) {
							disabled || _this396.handleInputChange(e.detail.value);
							_this396.setHasFocus(false);
							props.onBlur == null ? void 0 : props.onBlur(e);
						}
					}),
					/* @__PURE__ */ avm.h(
						Button,
						{
							className: classPrefix$2 + "-plus",
							onClick: _this396.handlePlus,
							disabled: _this396.plusDisabled(),
							fill: "none",
							style: __spreadProps(__spreadValues({}, btnStyle), {
								color: !_this396.plusDisabled() ? btnTextColor : "#999",
								borderRadius: "0 " + borderRaduis + " " + borderRaduis + " 0"
							})
						},

						"+"
					)
				);
			});
			return _this396;
		}
		return Stepper;
	})(Component);
	var classPrefix$1 = "adm-result";
	var Result = /*#__PURE__*/ (function(_Component31) {
		_inheritsLoose(Result, _Component31);
		function Result() {
			var _this397;
			for (
				var _len397 = arguments.length, args = new Array(_len397), _key397 = 0;
				_key397 < _len397;
				_key397++
			) {
				args[_key397] = arguments[_key397];
			}
			_this397 =
				_Component31.call.apply(_Component31, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this397), "render", function(props) {
				debugger;
				var status = props.status,
					title = props.title,
					description = props.description;
				if (!status) return null;
				var resultIcon = function resultIcon(status2) {
					if (status2 === "success") {
						return /* @__PURE__ */ avm.h(CheckCircleFill, null);
					} else if (status2 === "error") {
						return /* @__PURE__ */ avm.h(CloseCircleFill, null);
					} else if (status2 === "info") {
						return /* @__PURE__ */ avm.h(InformationCircleOutline, null);
					} else if (status2 === "waiting") {
						return /* @__PURE__ */ avm.h(ClockCircleOutline, null);
					} else if (status2 === "warning") {
						return /* @__PURE__ */ avm.h(SmileOutline, null);
					}
				};
				return /* @__PURE__ */ avm.h(
					"div",
					{
						className: classNames(classPrefix$1, classPrefix$1 + "-" + status)
					},
					/* @__PURE__ */ avm.h(
						"div",
						{
							className: classPrefix$1 + "-icon"
						},
						resultIcon
					),
					/* @__PURE__ */ avm.h(
						"div",
						{
							className: classPrefix$1 + "-title"
						},
						title
					),
					description
						? /* @__PURE__ */ avm.h(
								"div",
								{
									className: classPrefix$1 + "-description"
								},
								description
						  )
						: null
				);
			});
			return _this397;
		}
		return Result;
	})(Component);
	var classPrefix = "adm-nav-bar";
	var defaultProps = {
		back: "",
		backArrow: true
	};
	var NavBar = /*#__PURE__*/ (function(_Component32) {
		_inheritsLoose(NavBar, _Component32);
		function NavBar() {
			var _this398;
			for (
				var _len398 = arguments.length, args = new Array(_len398), _key398 = 0;
				_key398 < _len398;
				_key398++
			) {
				args[_key398] = arguments[_key398];
			}
			_this398 =
				_Component32.call.apply(_Component32, [this].concat(args)) || this;
			_defineProperty(
				_assertThisInitialized(_this398),
				"render",

				function(props) {
					props = mergeProps(defaultProps, props);
					var _props9 = props,
						back = _props9.back,
						backArrow = _props9.backArrow;
					return /* @__PURE__ */ avm.h(
						"div",
						{
							className: classNames(classPrefix)
						},
						/* @__PURE__ */ avm.h(
							"div",
							{
								className: classPrefix + "-left",
								role: "button"
							},
							back !== null &&
								/* @__PURE__ */ avm.h(
									"div",
									{
										className: classPrefix + "-back",
										onClick: props.onBack
									},
									backArrow &&
										/* @__PURE__ */ avm.h("span", {
											className: classPrefix + "-back-arrow"
										}),
									/* @__PURE__ */ avm.h(
										"span",
										{
											"aria-hidden": "true"
										},
										back
									)
								),
							props.left
						),
						/* @__PURE__ */ avm.h(
							"div",
							{
								className: classPrefix + "-title"
							},
							props.children
						),
						/* @__PURE__ */ avm.h(
							"div",
							{
								className: classPrefix + "-right"
							},
							props.right
						)
					);
				}
			);
			return _this398;
		}
		var _proto3 = NavBar.prototype;
		_proto3.install = function install() {
			console.log("NavBar");
		};
		return NavBar;
	})(Component);

	var Tpl = /*@__PURE__*/ (function(Component) {
		function Tpl(props) {
			Component.call(this, props);
			this.data = {
				text: "Hello APICloud",
				year: new Date().getFullYear(),
				stepList1: [
					{title: "标题1", description: "描述1"},
					{title: "标题2", description: "描述2"},
					{title: "标题3", description: "描述3"}
				]
			};
			this.compute = {
				list: function() {
					var apiNames = {
						version: "引擎版本",
						systemType: "系统类型",
						systemVersion: "系统版本",
						deviceModel: "设备型号",
						deviceName: "设备名称",
						operator: "运营商名称",
						connectionType: "网络状态",
						winName: "窗口名字",
						winWidth: "窗口宽度",
						winHeight: "窗口高度",
						appId: "应用ID",
						appName: "应用名称",
						appVersion: "应用版本"
					};

					return Object.entries(apiNames).map(function(item) {
						return item.concat([api[item[0]]]);
					});
				},
				version: function() {},
				systemType: function() {},
				systemVersion: function() {},
				deviceModel: function() {},
				deviceName: function() {},
				operator: function() {},
				connectionType: function() {},
				winName: function() {},
				winWidth: function() {},
				winHeight: function() {},
				appId: function() {},
				appName: function() {},
				appVersion: function() {}
			};
		}

		if (Component) Tpl.__proto__ = Component;
		Tpl.prototype = Object.create(Component && Component.prototype);
		Tpl.prototype.constructor = Tpl;
		Tpl.prototype.apiready = function() {};
		Tpl.prototype.handleClick = function(e) {
			api.toast({
				msg: this.data.text,
				location: "middle"
			});
		};
		Tpl.prototype.render = function() {
			return apivm.h(
				apivm.f,
				null,
				apivm.h("safe-area", null),
				apivm.h("text", null, "导航栏"),
				apivm.h(NavBar, {onBack: "{()=>{}"}, "标题")
			);
		};

		return Tpl;
	})(Component);
	Tpl.css = {
		".t": {fontFamily: "avm-ui-icon"},
		".page": {height: "100%", backgroundColor: "white"},
		".header": {
			background: "#81a9c3",
			justifyContent: "center",
			alignItems: "center"
		},
		".header__title": {
			color: "#fff",
			fontSize: "18px",
			fontWeight: "bold",
			height: "50px",
			lineHeight: "50px"
		},
		".main": {flex: "1", padding: "15px"},
		".h1": {fontSize: "24px"},
		".item": {flexDirection: "row", padding: "10px 0"},
		".item__text": {color: "#333", whiteSpace: "nowrap"},
		".item__value": {marginLeft: "5px"},
		".footer": {
			background: "#81a9c3",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center"
		},
		".footer__text": {
			color: "#fff",
			fontSize: "14px",
			height: "30px",
			lineHeight: "30px"
		}
	};
	Tpl.csslink = ["../../components/avm-ui/avm-ui.css"];
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();
