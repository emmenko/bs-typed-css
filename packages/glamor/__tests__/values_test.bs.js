'use strict';

var TestHelpers = require("./TestHelpers.bs.js");
var TypedGlamor = require("../src/TypedGlamor.bs.js");

describe("universal", (function () {
        TestHelpers.testValue(TypedGlamor.inherit_, "inherit");
        TestHelpers.testValue(TypedGlamor.initial, "initial");
        return TestHelpers.testValue(TypedGlamor.unset, "unset");
      }));

describe("length", (function () {
        TestHelpers.testValue(TypedGlamor.em(1.5), "1.5em");
        TestHelpers.testValue(TypedGlamor.ex(1), "1ex");
        TestHelpers.testValue(TypedGlamor.ch(1), "1ch");
        TestHelpers.testValue(TypedGlamor.rem(1), "1rem");
        TestHelpers.testValue(TypedGlamor.vw(33.3), "33.3vw");
        TestHelpers.testValue(TypedGlamor.vh(33.3), "33.3vh");
        TestHelpers.testValue(TypedGlamor.vmin(33.3), "33.3vmin");
        TestHelpers.testValue(TypedGlamor.vmax(33.3), "33.3vmax");
        TestHelpers.testValue(TypedGlamor.cm(1), "1cm");
        TestHelpers.testValue(TypedGlamor.mm(1), "1mm");
        TestHelpers.testValue(TypedGlamor.q(1), "1q");
        TestHelpers.testValue(TypedGlamor.inch(1), "1in");
        TestHelpers.testValue(TypedGlamor.pc(1), "1pc");
        TestHelpers.testValue(TypedGlamor.pt(1), "1pt");
        TestHelpers.testValue(TypedGlamor.px(1), "1px");
        return TestHelpers.testValue(TypedGlamor.zero, "0");
      }));

describe("percentage", (function () {
        return TestHelpers.testValue(TypedGlamor.pct(1.2), "1.2%");
      }));

describe("angle", (function () {
        TestHelpers.testValue(TypedGlamor.rad(3.14), "3.14rad");
        TestHelpers.testValue(TypedGlamor.grad(200), "200grad");
        TestHelpers.testValue(TypedGlamor.deg(180), "180deg");
        return TestHelpers.testValue(TypedGlamor.turn(0.5), "0.5turn");
      }));

describe("time", (function () {
        TestHelpers.testValue(TypedGlamor.s(1.2), "1.2s");
        return TestHelpers.testValue(TypedGlamor.ms(200), "200ms");
      }));

describe("url", (function () {
        return TestHelpers.testValue(TypedGlamor.url("harry potter"), "url(harry potter)");
      }));

describe("color", (function () {
        TestHelpers.testValue(TypedGlamor.rgb(255, 0, 0), "rgb(255, 0, 0)");
        TestHelpers.testValue(TypedGlamor.rgba(255, 0, 128, 0.5), "rgba(255, 0, 128, 0.5)");
        TestHelpers.testValue(TypedGlamor.hsl(TypedGlamor.turn(0.5), 50, 100), "hsl(0.5turn, 50%, 100%)");
        TestHelpers.testValue(TypedGlamor.hsla(TypedGlamor.turn(0.5), 50, 100, 0.5), "hsla(0.5turn, 50%, 100%, 0.5)");
        TestHelpers.testValue(TypedGlamor.hex("f8a"), "#f8a");
        TestHelpers.testValue(TypedGlamor.currentColor, "currentColor");
        return TestHelpers.testValue(TypedGlamor.transparent, "transparent");
      }));

describe("customIdent", (function () {
        return TestHelpers.testValue(TypedGlamor.ident("foo"), "foo");
      }));

describe("timingFunction", (function () {
        TestHelpers.testValue(TypedGlamor.linear, "linear");
        TestHelpers.testValue(TypedGlamor.ease, "ease");
        TestHelpers.testValue(TypedGlamor.easeIn, "ease-in");
        TestHelpers.testValue(TypedGlamor.easeOut, "ease-out");
        TestHelpers.testValue(TypedGlamor.easeInOut, "ease-in-out");
        TestHelpers.testValue(TypedGlamor.cubicBezier(/* tuple */[
                  1,
                  0.4
                ], /* tuple */[
                  2.3,
                  5.1
                ]), "cubic-bezier(1, 0.4, 2.3, 5.1)");
        TestHelpers.testValue(TypedGlamor.stepStart, "step-start");
        TestHelpers.testValue(TypedGlamor.stepEnd, "step-end");
        TestHelpers.testValue(TypedGlamor.steps(2, TypedGlamor.start), "steps(2, start)");
        return TestHelpers.testValue(TypedGlamor.frames(4), "frames(4)");
      }));

describe("ad-hoc", (function () {
        TestHelpers.testValue(TypedGlamor.none, "none");
        TestHelpers.testValue(TypedGlamor.auto, "auto");
        TestHelpers.testValue(TypedGlamor.thin, "thin");
        TestHelpers.testValue(TypedGlamor.medium, "medium");
        TestHelpers.testValue(TypedGlamor.thick, "thick");
        TestHelpers.testValue(TypedGlamor.hidden, "hidden");
        TestHelpers.testValue(TypedGlamor.dotted, "dotted");
        TestHelpers.testValue(TypedGlamor.dashed, "dashed");
        TestHelpers.testValue(TypedGlamor.solid, "solid");
        TestHelpers.testValue(TypedGlamor.$$double, "double");
        TestHelpers.testValue(TypedGlamor.groove, "groove");
        TestHelpers.testValue(TypedGlamor.ridge, "ridge");
        TestHelpers.testValue(TypedGlamor.inset, "inset");
        TestHelpers.testValue(TypedGlamor.outset, "outset");
        TestHelpers.testValue(TypedGlamor.start, "start");
        TestHelpers.testValue(TypedGlamor.end_, "end");
        TestHelpers.testValue(TypedGlamor.repeat, "repeat");
        TestHelpers.testValue(TypedGlamor.repeatX, "repeat-x");
        TestHelpers.testValue(TypedGlamor.repeatY, "repeat-y");
        TestHelpers.testValue(TypedGlamor.noRepeat, "no-repeat");
        TestHelpers.testValue(TypedGlamor.scroll, "scroll");
        TestHelpers.testValue(TypedGlamor.fixed, "fixed");
        TestHelpers.testValue(TypedGlamor.center, "center");
        TestHelpers.testValue(TypedGlamor.top, "top");
        TestHelpers.testValue(TypedGlamor.right, "right");
        TestHelpers.testValue(TypedGlamor.bottom, "bottom");
        return TestHelpers.testValue(TypedGlamor.left, "left");
      }));

/*  Not a pure module */
