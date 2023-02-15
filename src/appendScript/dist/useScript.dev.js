"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var useScript = function useScript(url) {
  (0, _react.useEffect)(function () {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
    return function () {
      document.head.removeChild(script);
    };
  }, [url]);
};

var _default = useScript;
exports["default"] = _default;