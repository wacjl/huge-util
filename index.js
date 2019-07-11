(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : (global["hugeUtil"] = factory());
})(this, function() {
  "use strict";
  const phoneReg = /^1\d{10}$/;
  return {
    phoneReg
  };
});
