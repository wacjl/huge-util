(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : (global["hugeUtil"] = factory());
})(this, function() {
  "use strict";
  const phoneReg = /^1\d{10}$/;
  const emailRge = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  return {
    phoneReg,
    emailRge
  };
});
