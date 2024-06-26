"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Image: () => Image
});
module.exports = __toCommonJS(src_exports);

// src/Image.tsx
var import_react2 = __toESM(require("react"));
var import_core = require("@raikou/core");

// src/store.ts
var import_zustand = require("zustand");
var useStore = (0, import_zustand.create)(() => ({
  error: false
}));

// src/Image.css.ts
var import_react = require("@pigment-css/react");
var imageRoot = (0, import_react.css)({
  // @ts-ignore
  display: "block",
  flexGrow: 0,
  objectFit: "var(--image-object-fit, cover)",
  width: "100%",
  borderRadius: "var(--image-radius, 0)"
});

// src/Image.tsx
var defaultProps = {};
var varsResolver = (0, import_core.createVarsResolver)((_, { radius, fit }) => ({
  root: {
    "--image-radius": radius === void 0 ? void 0 : (0, import_core.getRadius)(radius),
    "--image-object-fit": fit
  }
}));
var Image = (0, import_core.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core.useProps)("Image", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onError,
    src,
    radius,
    fit,
    fallbackSrc
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "onError",
    "src",
    "radius",
    "fit",
    "fallbackSrc"
  ]);
  const getStyles = (0, import_core.useStyles)({
    name: "Image",
    classes: {
      root: imageRoot
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (typeof window === "undefined") {
    var request = require("request").defaults({ encoding: null });
    request.get(src, function(error, response) {
      if (response === void 0) {
        useStore.getState().error = true;
      } else if (response.statusCode !== 200) {
        useStore.getState().error = true;
      }
    });
  }
  return /* @__PURE__ */ import_react2.default.createElement(
    import_core.Box,
    __spreadValues(__spreadProps(__spreadValues({
      component: "img",
      ref
    }, getStyles("root")), {
      src: useStore.getState().error ? fallbackSrc : src
    }), others)
  );
});
Image.displayName = "@raikou/core/Image";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Image
});
