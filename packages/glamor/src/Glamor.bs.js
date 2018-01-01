// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");

function em(n) {
  return "" + (String(n) + "em");
}

function ex(n) {
  return "" + (String(n) + "ex");
}

function inch(n) {
  return "" + (String(n) + "in");
}

function cm(n) {
  return "" + (String(n) + "cm");
}

function mm(n) {
  return "" + (String(n) + "mm");
}

function pt(n) {
  return "" + (String(n) + "pt");
}

function pc(n) {
  return "" + (String(n) + "pc");
}

function px(n) {
  return "" + (String(n) + "px");
}

function pct(n) {
  return "" + (String(n) + "%");
}

function url(url$1) {
  return "url(" + (String(url$1) + ")");
}

function margin(value) {
  return /* tuple */[
          "margin",
          value
        ];
}

function padding(value) {
  return /* tuple */[
          "padding",
          value
        ];
}

function style(declarations) {
  var dict = { };
  List.iter((function (decl) {
          dict[decl[0]] = decl[1];
          return /* () */0;
        }), declarations);
  return dict;
}

var inherit_ = "inherit";

var initial = "initial";

var unset = "unset";

var none = "none";

var auto = "auto";

var zero = "0";

exports.inherit_ = inherit_;
exports.initial  = initial;
exports.unset    = unset;
exports.none     = none;
exports.auto     = auto;
exports.em       = em;
exports.ex       = ex;
exports.inch     = inch;
exports.cm       = cm;
exports.mm       = mm;
exports.pt       = pt;
exports.pc       = pc;
exports.px       = px;
exports.zero     = zero;
exports.pct      = pct;
exports.url      = url;
exports.margin   = margin;
exports.padding  = padding;
exports.style    = style;
/* No side effect */
