'use strict';

var TestHelpers = require("./TestHelpers.bs.js");
var TypedGlamor = require("../src/TypedGlamor.bs.js");

describe("margin", (function () {
        TestHelpers.testDeclaration(TypedGlamor.margin(TypedGlamor.auto), /* tuple */[
              "margin",
              "auto"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.margin2(TypedGlamor.zero, TypedGlamor.auto), /* tuple */[
              "margin",
              "0 auto"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.margin3(TypedGlamor.pct(10), TypedGlamor.auto, TypedGlamor.px(45)), /* tuple */[
              "margin",
              "10% auto 45px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.margin4(TypedGlamor.pct(10), TypedGlamor.auto, TypedGlamor.px(45), TypedGlamor.ex(2)), /* tuple */[
              "margin",
              "10% auto 45px 2ex"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.marginTop(TypedGlamor.px(1)), /* tuple */[
              "marginTop",
              "1px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.marginRight(TypedGlamor.px(1)), /* tuple */[
              "marginRight",
              "1px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.marginBottom(TypedGlamor.px(1)), /* tuple */[
              "marginBottom",
              "1px"
            ]);
        return TestHelpers.testDeclaration(TypedGlamor.marginLeft(TypedGlamor.px(1)), /* tuple */[
                    "marginLeft",
                    "1px"
                  ]);
      }));

describe("padding", (function () {
        TestHelpers.testDeclaration(TypedGlamor.padding(TypedGlamor.px(-1)), /* tuple */[
              "padding",
              "-1px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.padding2(TypedGlamor.zero, TypedGlamor.pct(50)), /* tuple */[
              "padding",
              "0 50%"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.padding3(TypedGlamor.pct(10), TypedGlamor.pct(50), TypedGlamor.px(45)), /* tuple */[
              "padding",
              "10% 50% 45px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.padding4(TypedGlamor.pct(10), TypedGlamor.pct(50), TypedGlamor.px(45), TypedGlamor.ex(2)), /* tuple */[
              "padding",
              "10% 50% 45px 2ex"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.paddingTop(TypedGlamor.px(1)), /* tuple */[
              "paddingTop",
              "1px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.paddingRight(TypedGlamor.px(1)), /* tuple */[
              "paddingRight",
              "1px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.paddingBottom(TypedGlamor.px(1)), /* tuple */[
              "paddingBottom",
              "1px"
            ]);
        return TestHelpers.testDeclaration(TypedGlamor.paddingLeft(TypedGlamor.px(1)), /* tuple */[
                    "paddingLeft",
                    "1px"
                  ]);
      }));

describe("border", (function () {
        TestHelpers.testDeclaration(TypedGlamor.border(TypedGlamor.none), /* tuple */[
              "border",
              "none"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.border2(/* None */0, /* None */0, TypedGlamor.ridge), /* tuple */[
              "border",
              "ridge"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.border2(/* Some */[TypedGlamor.px(1)], /* None */0, TypedGlamor.dashed), /* tuple */[
              "border",
              "1px dashed"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.border2(/* None */0, /* Some */[TypedGlamor.green], TypedGlamor.inset), /* tuple */[
              "border",
              "inset green"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.border2(/* Some */[TypedGlamor.px(1)], /* Some */[TypedGlamor.aqua], TypedGlamor.$$double), /* tuple */[
              "border",
              "1px double aqua"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.border3(TypedGlamor.px(1), TypedGlamor.solid, TypedGlamor.slategray), /* tuple */[
              "border",
              "1px solid slategray"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderTop(TypedGlamor.none), /* tuple */[
              "borderTop",
              "none"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderTop3(TypedGlamor.px(1), TypedGlamor.solid, TypedGlamor.slategray), /* tuple */[
              "borderTop",
              "1px solid slategray"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderRight(TypedGlamor.none), /* tuple */[
              "borderRight",
              "none"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderRight3(TypedGlamor.px(1), TypedGlamor.solid, TypedGlamor.slategray), /* tuple */[
              "borderRight",
              "1px solid slategray"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderBottom(TypedGlamor.none), /* tuple */[
              "borderBottom",
              "none"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderBottom3(TypedGlamor.px(1), TypedGlamor.solid, TypedGlamor.slategray), /* tuple */[
              "borderBottom",
              "1px solid slategray"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderLeft(TypedGlamor.none), /* tuple */[
              "borderLeft",
              "none"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderLeft3(TypedGlamor.px(1), TypedGlamor.solid, TypedGlamor.slategray), /* tuple */[
              "borderLeft",
              "1px solid slategray"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderWidth(TypedGlamor.px(2)), /* tuple */[
              "borderWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderTopWidth(TypedGlamor.px(2)), /* tuple */[
              "borderTopWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderRightWidth(TypedGlamor.px(2)), /* tuple */[
              "borderRightWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderBottomWidth(TypedGlamor.px(2)), /* tuple */[
              "borderBottomWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderLeftWidth(TypedGlamor.px(2)), /* tuple */[
              "borderLeftWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderStyle(TypedGlamor.solid), /* tuple */[
              "borderStyle",
              "solid"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderTopStyle(TypedGlamor.dashed), /* tuple */[
              "borderTopStyle",
              "dashed"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderRightStyle(TypedGlamor.dotted), /* tuple */[
              "borderRightStyle",
              "dotted"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderBottomStyle(TypedGlamor.ridge), /* tuple */[
              "borderBottomStyle",
              "ridge"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderLeftStyle(TypedGlamor.inset), /* tuple */[
              "borderLeftStyle",
              "inset"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderColor(TypedGlamor.transparent), /* tuple */[
              "borderColor",
              "transparent"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderTopColor(TypedGlamor.transparent), /* tuple */[
              "borderTopColor",
              "transparent"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderRightColor(TypedGlamor.transparent), /* tuple */[
              "borderRightColor",
              "transparent"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderBottomColor(TypedGlamor.transparent), /* tuple */[
              "borderBottomColor",
              "transparent"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderLeftColor(TypedGlamor.transparent), /* tuple */[
              "borderLeftColor",
              "transparent"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderRadius(TypedGlamor.px(2)), /* tuple */[
              "borderRadius",
              "2px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderTopLeftRadius(TypedGlamor.px(2)), /* tuple */[
              "borderTopLeftRadius",
              "2px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderTopLeftRadius2(TypedGlamor.px(2), TypedGlamor.zero), /* tuple */[
              "borderTopLeftRadius",
              "2px 0"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderTopRightRadius(TypedGlamor.px(2)), /* tuple */[
              "borderTopRightRadius",
              "2px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderTopRightRadius2(TypedGlamor.px(2), TypedGlamor.zero), /* tuple */[
              "borderTopRightRadius",
              "2px 0"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderBottomLeftRadius(TypedGlamor.px(2)), /* tuple */[
              "borderBottomLeftRadius",
              "2px"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderBottomLeftRadius2(TypedGlamor.px(2), TypedGlamor.zero), /* tuple */[
              "borderBottomLeftRadius",
              "2px 0"
            ]);
        TestHelpers.testDeclaration(TypedGlamor.borderBottomRightRadius(TypedGlamor.px(2)), /* tuple */[
              "borderBottomRightRadius",
              "2px"
            ]);
        return TestHelpers.testDeclaration(TypedGlamor.borderBottomRightRadius2(TypedGlamor.px(2), TypedGlamor.zero), /* tuple */[
                    "borderBottomRightRadius",
                    "2px 0"
                  ]);
      }));

/*  Not a pure module */
