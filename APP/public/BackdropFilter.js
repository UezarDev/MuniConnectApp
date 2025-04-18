!(function (A, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("react-backdrop-filter", [], e)
    : "object" == typeof exports
    ? (exports["react-backdrop-filter"] = e())
    : (A["react-backdrop-filter"] = e());
})(window, function () {
  return (function (A) {
    var e = {};
    function t(r) {
      if (e[r]) return e[r].exports;
      var n = (e[r] = { i: r, l: !1, exports: {} });
      return A[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
    }
    return (
      (t.m = A),
      (t.c = e),
      (t.d = function (A, e, r) {
        t.o(A, e) || Object.defineProperty(A, e, { enumerable: !0, get: r });
      }),
      (t.r = function (A) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(A, "__esModule", { value: !0 });
      }),
      (t.t = function (A, e) {
        if ((1 & e && (A = t(A)), 8 & e)) return A;
        if (4 & e && "object" == typeof A && A && A.__esModule) return A;
        var r = Object.create(null);
        if ((t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: A }), 2 & e && "string" != typeof A))
          for (var n in A)
            t.d(
              r,
              n,
              function (e) {
                return A[e];
              }.bind(null, n)
            );
        return r;
      }),
      (t.n = function (A) {
        var e =
          A && A.__esModule
            ? function () {
                return A.default;
              }
            : function () {
                return A;
              };
        return t.d(e, "a", e), e;
      }),
      (t.o = function (A, e) {
        return Object.prototype.hasOwnProperty.call(A, e);
      }),
      (t.p = "/dist/"),
      t((t.s = 31))
    );
  })([
    function (A, e, t) {
      A.exports = t(34)();
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = function (A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function (A, e) {
              var t = [],
                r = !0,
                n = !1,
                o = void 0;
              try {
                for (
                  var B, a = A[Symbol.iterator]();
                  !(r = (B = a.next()).done) && (t.push(B.value), !e || t.length !== e);
                  r = !0
                );
              } catch (A) {
                (n = !0), (o = A);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (n) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        n = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })();
      var o = /^#([a-f0-9]{3})$/i,
        B = function (A) {
          var e = A.match(o);
          return (
            !!e && [
              parseInt(e[1][0] + e[1][0], 16),
              parseInt(e[1][1] + e[1][1], 16),
              parseInt(e[1][2] + e[1][2], 16),
              null,
            ]
          );
        },
        a = /^#([a-f0-9]{6})$/i,
        s = function (A) {
          var e = A.match(a);
          return (
            !!e && [
              parseInt(e[1].substring(0, 2), 16),
              parseInt(e[1].substring(2, 4), 16),
              parseInt(e[1].substring(4, 6), 16),
              null,
            ]
          );
        },
        i = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
        c = function (A) {
          var e = A.match(i);
          return !!e && [Number(e[1]), Number(e[2]), Number(e[3]), null];
        },
        u = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/,
        l = function (A) {
          var e = A.match(u);
          return !!(e && e.length > 4) && [Number(e[1]), Number(e[2]), Number(e[3]), Number(e[4])];
        },
        Q = function (A) {
          return [Math.min(A[0], 255), Math.min(A[1], 255), Math.min(A[2], 255), A.length > 3 ? A[3] : null];
        },
        w = function (A) {
          var e = d[A.toLowerCase()];
          return e || !1;
        },
        g = (function () {
          function A(e) {
            !(function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, A);
            var t = Array.isArray(e) ? Q(e) : B(e) || c(e) || l(e) || w(e) || s(e) || [0, 0, 0, null],
              n = r(t, 4),
              o = n[0],
              a = n[1],
              i = n[2],
              u = n[3];
            (this.r = o), (this.g = a), (this.b = i), (this.a = u);
          }
          return (
            n(A, [
              {
                key: "isTransparent",
                value: function () {
                  return 0 === this.a;
                },
              },
              {
                key: "toString",
                value: function () {
                  return null !== this.a && 1 !== this.a
                    ? "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
                    : "rgb(" + this.r + "," + this.g + "," + this.b + ")";
                },
              },
            ]),
            A
          );
        })();
      e.default = g;
      var d = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, null],
        antiquewhite: [250, 235, 215, null],
        aqua: [0, 255, 255, null],
        aquamarine: [127, 255, 212, null],
        azure: [240, 255, 255, null],
        beige: [245, 245, 220, null],
        bisque: [255, 228, 196, null],
        black: [0, 0, 0, null],
        blanchedalmond: [255, 235, 205, null],
        blue: [0, 0, 255, null],
        blueviolet: [138, 43, 226, null],
        brown: [165, 42, 42, null],
        burlywood: [222, 184, 135, null],
        cadetblue: [95, 158, 160, null],
        chartreuse: [127, 255, 0, null],
        chocolate: [210, 105, 30, null],
        coral: [255, 127, 80, null],
        cornflowerblue: [100, 149, 237, null],
        cornsilk: [255, 248, 220, null],
        crimson: [220, 20, 60, null],
        cyan: [0, 255, 255, null],
        darkblue: [0, 0, 139, null],
        darkcyan: [0, 139, 139, null],
        darkgoldenrod: [184, 134, 11, null],
        darkgray: [169, 169, 169, null],
        darkgreen: [0, 100, 0, null],
        darkgrey: [169, 169, 169, null],
        darkkhaki: [189, 183, 107, null],
        darkmagenta: [139, 0, 139, null],
        darkolivegreen: [85, 107, 47, null],
        darkorange: [255, 140, 0, null],
        darkorchid: [153, 50, 204, null],
        darkred: [139, 0, 0, null],
        darksalmon: [233, 150, 122, null],
        darkseagreen: [143, 188, 143, null],
        darkslateblue: [72, 61, 139, null],
        darkslategray: [47, 79, 79, null],
        darkslategrey: [47, 79, 79, null],
        darkturquoise: [0, 206, 209, null],
        darkviolet: [148, 0, 211, null],
        deeppink: [255, 20, 147, null],
        deepskyblue: [0, 191, 255, null],
        dimgray: [105, 105, 105, null],
        dimgrey: [105, 105, 105, null],
        dodgerblue: [30, 144, 255, null],
        firebrick: [178, 34, 34, null],
        floralwhite: [255, 250, 240, null],
        forestgreen: [34, 139, 34, null],
        fuchsia: [255, 0, 255, null],
        gainsboro: [220, 220, 220, null],
        ghostwhite: [248, 248, 255, null],
        gold: [255, 215, 0, null],
        goldenrod: [218, 165, 32, null],
        gray: [128, 128, 128, null],
        green: [0, 128, 0, null],
        greenyellow: [173, 255, 47, null],
        grey: [128, 128, 128, null],
        honeydew: [240, 255, 240, null],
        hotpink: [255, 105, 180, null],
        indianred: [205, 92, 92, null],
        indigo: [75, 0, 130, null],
        ivory: [255, 255, 240, null],
        khaki: [240, 230, 140, null],
        lavender: [230, 230, 250, null],
        lavenderblush: [255, 240, 245, null],
        lawngreen: [124, 252, 0, null],
        lemonchiffon: [255, 250, 205, null],
        lightblue: [173, 216, 230, null],
        lightcoral: [240, 128, 128, null],
        lightcyan: [224, 255, 255, null],
        lightgoldenrodyellow: [250, 250, 210, null],
        lightgray: [211, 211, 211, null],
        lightgreen: [144, 238, 144, null],
        lightgrey: [211, 211, 211, null],
        lightpink: [255, 182, 193, null],
        lightsalmon: [255, 160, 122, null],
        lightseagreen: [32, 178, 170, null],
        lightskyblue: [135, 206, 250, null],
        lightslategray: [119, 136, 153, null],
        lightslategrey: [119, 136, 153, null],
        lightsteelblue: [176, 196, 222, null],
        lightyellow: [255, 255, 224, null],
        lime: [0, 255, 0, null],
        limegreen: [50, 205, 50, null],
        linen: [250, 240, 230, null],
        magenta: [255, 0, 255, null],
        maroon: [128, 0, 0, null],
        mediumaquamarine: [102, 205, 170, null],
        mediumblue: [0, 0, 205, null],
        mediumorchid: [186, 85, 211, null],
        mediumpurple: [147, 112, 219, null],
        mediumseagreen: [60, 179, 113, null],
        mediumslateblue: [123, 104, 238, null],
        mediumspringgreen: [0, 250, 154, null],
        mediumturquoise: [72, 209, 204, null],
        mediumvioletred: [199, 21, 133, null],
        midnightblue: [25, 25, 112, null],
        mintcream: [245, 255, 250, null],
        mistyrose: [255, 228, 225, null],
        moccasin: [255, 228, 181, null],
        navajowhite: [255, 222, 173, null],
        navy: [0, 0, 128, null],
        oldlace: [253, 245, 230, null],
        olive: [128, 128, 0, null],
        olivedrab: [107, 142, 35, null],
        orange: [255, 165, 0, null],
        orangered: [255, 69, 0, null],
        orchid: [218, 112, 214, null],
        palegoldenrod: [238, 232, 170, null],
        palegreen: [152, 251, 152, null],
        paleturquoise: [175, 238, 238, null],
        palevioletred: [219, 112, 147, null],
        papayawhip: [255, 239, 213, null],
        peachpuff: [255, 218, 185, null],
        peru: [205, 133, 63, null],
        pink: [255, 192, 203, null],
        plum: [221, 160, 221, null],
        powderblue: [176, 224, 230, null],
        purple: [128, 0, 128, null],
        rebeccapurple: [102, 51, 153, null],
        red: [255, 0, 0, null],
        rosybrown: [188, 143, 143, null],
        royalblue: [65, 105, 225, null],
        saddlebrown: [139, 69, 19, null],
        salmon: [250, 128, 114, null],
        sandybrown: [244, 164, 96, null],
        seagreen: [46, 139, 87, null],
        seashell: [255, 245, 238, null],
        sienna: [160, 82, 45, null],
        silver: [192, 192, 192, null],
        skyblue: [135, 206, 235, null],
        slateblue: [106, 90, 205, null],
        slategray: [112, 128, 144, null],
        slategrey: [112, 128, 144, null],
        snow: [255, 250, 250, null],
        springgreen: [0, 255, 127, null],
        steelblue: [70, 130, 180, null],
        tan: [210, 180, 140, null],
        teal: [0, 128, 128, null],
        thistle: [216, 191, 216, null],
        tomato: [255, 99, 71, null],
        turquoise: [64, 224, 208, null],
        violet: [238, 130, 238, null],
        wheat: [245, 222, 179, null],
        white: [255, 255, 255, null],
        whitesmoke: [245, 245, 245, null],
        yellow: [255, 255, 0, null],
        yellowgreen: [154, 205, 50, null],
      };
      e.TRANSPARENT = new g([0, 0, 0, 0]);
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.calculateLengthFromValueWithUnit = e.LENGTH_TYPE = void 0);
      var r,
        n = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        o = t(4);
      (r = o) && r.__esModule;
      var B = (e.LENGTH_TYPE = { PX: 0, PERCENTAGE: 1 }),
        a = (function () {
          function A(e) {
            !(function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, A),
              (this.type = "%" === e.substr(e.length - 1) ? B.PERCENTAGE : B.PX);
            var t = parseFloat(e);
            this.value = isNaN(t) ? 0 : t;
          }
          return (
            n(
              A,
              [
                {
                  key: "isPercentage",
                  value: function () {
                    return this.type === B.PERCENTAGE;
                  },
                },
                {
                  key: "getAbsoluteValue",
                  value: function (A) {
                    return this.isPercentage() ? A * (this.value / 100) : this.value;
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (e) {
                    return new A(e);
                  },
                },
              ]
            ),
            A
          );
        })();
      e.default = a;
      e.calculateLengthFromValueWithUnit = function (A, e, t) {
        switch (t) {
          case "px":
          case "%":
            return new a(e + t);
          case "em":
          case "rem":
            var r = new a(e);
            return (
              (r.value *=
                "em" === t
                  ? parseFloat(A.style.font.fontSize)
                  : (function A(e) {
                      var t = e.parent;
                      return t ? A(t) : parseFloat(e.style.font.fontSize);
                    })(A)),
              r
            );
          default:
            return new a("0");
        }
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.parseBoundCurves =
          e.calculatePaddingBoxPath =
          e.calculateBorderBoxPath =
          e.parsePathForBorder =
          e.parseDocumentSize =
          e.calculateContentBox =
          e.calculatePaddingBox =
          e.parseBounds =
          e.Bounds =
            void 0);
      var r = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        n = B(t(9)),
        o = B(t(40));
      function B(A) {
        return A && A.__esModule ? A : { default: A };
      }
      var a = (e.Bounds = (function () {
          function A(e, t, r, n) {
            !(function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, A),
              (this.left = e),
              (this.top = t),
              (this.width = r),
              (this.height = n);
          }
          return (
            r(A, null, [
              {
                key: "fromClientRect",
                value: function (e, t, r) {
                  return new A(e.left + t, e.top + r, e.width, e.height);
                },
              },
            ]),
            A
          );
        })()),
        s =
          ((e.parseBounds = function (A, e, t) {
            return a.fromClientRect(A.getBoundingClientRect(), e, t);
          }),
          (e.calculatePaddingBox = function (A, e) {
            return new a(
              A.left + e[3].borderWidth,
              A.top + e[0].borderWidth,
              A.width - (e[1].borderWidth + e[3].borderWidth),
              A.height - (e[0].borderWidth + e[2].borderWidth)
            );
          }),
          (e.calculateContentBox = function (A, e, t) {
            var r = e[0].value,
              n = e[1].value,
              o = e[2].value,
              B = e[3].value;
            return new a(
              A.left + B + t[3].borderWidth,
              A.top + r + t[0].borderWidth,
              A.width - (t[1].borderWidth + t[3].borderWidth + B + n),
              A.height - (t[0].borderWidth + t[2].borderWidth + r + o)
            );
          }),
          (e.parseDocumentSize = function (A) {
            var e = A.body,
              t = A.documentElement;
            if (!e || !t) throw new Error("");
            var r = Math.max(
                Math.max(e.scrollWidth, t.scrollWidth),
                Math.max(e.offsetWidth, t.offsetWidth),
                Math.max(e.clientWidth, t.clientWidth)
              ),
              n = Math.max(
                Math.max(e.scrollHeight, t.scrollHeight),
                Math.max(e.offsetHeight, t.offsetHeight),
                Math.max(e.clientHeight, t.clientHeight)
              );
            return new a(0, 0, r, n);
          }),
          (e.parsePathForBorder = function (A, e) {
            switch (e) {
              case 0:
                return s(A.topLeftOuter, A.topLeftInner, A.topRightOuter, A.topRightInner);
              case 1:
                return s(A.topRightOuter, A.topRightInner, A.bottomRightOuter, A.bottomRightInner);
              case 2:
                return s(A.bottomRightOuter, A.bottomRightInner, A.bottomLeftOuter, A.bottomLeftInner);
              case 3:
              default:
                return s(A.bottomLeftOuter, A.bottomLeftInner, A.topLeftOuter, A.topLeftInner);
            }
          }),
          function (A, e, t, r) {
            var n = [];
            return (
              A instanceof o.default ? n.push(A.subdivide(0.5, !1)) : n.push(A),
              t instanceof o.default ? n.push(t.subdivide(0.5, !0)) : n.push(t),
              r instanceof o.default ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r),
              e instanceof o.default ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e),
              n
            );
          }),
        i =
          ((e.calculateBorderBoxPath = function (A) {
            return [A.topLeftOuter, A.topRightOuter, A.bottomRightOuter, A.bottomLeftOuter];
          }),
          (e.calculatePaddingBoxPath = function (A) {
            return [A.topLeftInner, A.topRightInner, A.bottomRightInner, A.bottomLeftInner];
          }),
          (e.parseBoundCurves = function (A, e, t) {
            var r = t[i.TOP_LEFT][0].getAbsoluteValue(A.width),
              o = t[i.TOP_LEFT][1].getAbsoluteValue(A.height),
              B = t[i.TOP_RIGHT][0].getAbsoluteValue(A.width),
              a = t[i.TOP_RIGHT][1].getAbsoluteValue(A.height),
              s = t[i.BOTTOM_RIGHT][0].getAbsoluteValue(A.width),
              u = t[i.BOTTOM_RIGHT][1].getAbsoluteValue(A.height),
              l = t[i.BOTTOM_LEFT][0].getAbsoluteValue(A.width),
              Q = t[i.BOTTOM_LEFT][1].getAbsoluteValue(A.height),
              w = [];
            w.push((r + B) / A.width),
              w.push((l + s) / A.width),
              w.push((o + Q) / A.height),
              w.push((a + u) / A.height);
            var g = Math.max.apply(Math, w);
            g > 1 && ((r /= g), (o /= g), (B /= g), (a /= g), (s /= g), (u /= g), (l /= g), (Q /= g));
            var d = A.width - B,
              f = A.height - u,
              U = A.width - s,
              h = A.height - Q;
            return {
              topLeftOuter: r > 0 || o > 0 ? c(A.left, A.top, r, o, i.TOP_LEFT) : new n.default(A.left, A.top),
              topLeftInner:
                r > 0 || o > 0
                  ? c(
                      A.left + e[3].borderWidth,
                      A.top + e[0].borderWidth,
                      Math.max(0, r - e[3].borderWidth),
                      Math.max(0, o - e[0].borderWidth),
                      i.TOP_LEFT
                    )
                  : new n.default(A.left + e[3].borderWidth, A.top + e[0].borderWidth),
              topRightOuter:
                B > 0 || a > 0 ? c(A.left + d, A.top, B, a, i.TOP_RIGHT) : new n.default(A.left + A.width, A.top),
              topRightInner:
                B > 0 || a > 0
                  ? c(
                      A.left + Math.min(d, A.width + e[3].borderWidth),
                      A.top + e[0].borderWidth,
                      d > A.width + e[3].borderWidth ? 0 : B - e[3].borderWidth,
                      a - e[0].borderWidth,
                      i.TOP_RIGHT
                    )
                  : new n.default(A.left + A.width - e[1].borderWidth, A.top + e[0].borderWidth),
              bottomRightOuter:
                s > 0 || u > 0
                  ? c(A.left + U, A.top + f, s, u, i.BOTTOM_RIGHT)
                  : new n.default(A.left + A.width, A.top + A.height),
              bottomRightInner:
                s > 0 || u > 0
                  ? c(
                      A.left + Math.min(U, A.width - e[3].borderWidth),
                      A.top + Math.min(f, A.height + e[0].borderWidth),
                      Math.max(0, s - e[1].borderWidth),
                      u - e[2].borderWidth,
                      i.BOTTOM_RIGHT
                    )
                  : new n.default(A.left + A.width - e[1].borderWidth, A.top + A.height - e[2].borderWidth),
              bottomLeftOuter:
                l > 0 || Q > 0 ? c(A.left, A.top + h, l, Q, i.BOTTOM_LEFT) : new n.default(A.left, A.top + A.height),
              bottomLeftInner:
                l > 0 || Q > 0
                  ? c(
                      A.left + e[3].borderWidth,
                      A.top + h,
                      Math.max(0, l - e[3].borderWidth),
                      Q - e[2].borderWidth,
                      i.BOTTOM_LEFT
                    )
                  : new n.default(A.left + e[3].borderWidth, A.top + A.height - e[2].borderWidth),
            };
          }),
          { TOP_LEFT: 0, TOP_RIGHT: 1, BOTTOM_RIGHT: 2, BOTTOM_LEFT: 3 }),
        c = function (A, e, t, r, B) {
          var a = ((Math.sqrt(2) - 1) / 3) * 4,
            s = t * a,
            c = r * a,
            u = A + t,
            l = e + r;
          switch (B) {
            case i.TOP_LEFT:
              return new o.default(
                new n.default(A, l),
                new n.default(A, l - c),
                new n.default(u - s, e),
                new n.default(u, e)
              );
            case i.TOP_RIGHT:
              return new o.default(
                new n.default(A, e),
                new n.default(A + s, e),
                new n.default(u, l - c),
                new n.default(u, l)
              );
            case i.BOTTOM_RIGHT:
              return new o.default(
                new n.default(u, e),
                new n.default(u, e + c),
                new n.default(A + s, l),
                new n.default(A, l)
              );
            case i.BOTTOM_LEFT:
            default:
              return new o.default(
                new n.default(u, l),
                new n.default(u - s, l),
                new n.default(A, e + c),
                new n.default(A, e)
              );
          }
        };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r,
        n = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        o = t(1),
        B = (r = o) && r.__esModule ? r : { default: r },
        a = t(5),
        s = t(6),
        i = t(14),
        c = t(41),
        u = t(42),
        l = t(43),
        Q = t(44),
        w = t(45),
        g = t(46),
        d = t(10),
        f = t(47),
        U = t(48),
        h = t(20),
        C = t(19),
        F = t(21),
        E = t(13),
        H = t(49),
        p = t(22),
        v = t(50),
        y = t(51),
        N = t(52),
        b = t(53),
        m = t(3),
        I = t(23),
        K = t(16);
      var T = ["INPUT", "TEXTAREA", "SELECT"],
        _ = (function () {
          function A(e, t, r, n) {
            var o = this;
            !(function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, A),
              (this.parent = t),
              (this.tagName = e.tagName),
              (this.index = n),
              (this.childNodes = []),
              (this.listItems = []),
              "number" == typeof e.start && (this.listStart = e.start);
            var a = e.ownerDocument.defaultView,
              _ = a.pageXOffset,
              O = a.pageYOffset,
              L = a.getComputedStyle(e, null),
              M = (0, u.parseDisplay)(L.display),
              D = "radio" === e.type || "checkbox" === e.type,
              R = (0, F.parsePosition)(L.position);
            if (
              ((this.style = {
                background: D ? I.INPUT_BACKGROUND : (0, s.parseBackground)(L, r),
                border: D ? I.INPUT_BORDERS : (0, i.parseBorder)(L),
                borderRadius:
                  (e instanceof a.HTMLInputElement || e instanceof HTMLInputElement) && D
                    ? (0, I.getInputBorderRadius)(e)
                    : (0, c.parseBorderRadius)(L),
                color: D ? I.INPUT_COLOR : new B.default(L.color),
                display: M,
                float: (0, l.parseCSSFloat)(L.float),
                font: (0, Q.parseFont)(L),
                letterSpacing: (0, w.parseLetterSpacing)(L.letterSpacing),
                listStyle: M === u.DISPLAY.LIST_ITEM ? (0, d.parseListStyle)(L) : null,
                lineBreak: (0, g.parseLineBreak)(L.lineBreak),
                margin: (0, f.parseMargin)(L),
                opacity: parseFloat(L.opacity),
                overflow: -1 === T.indexOf(e.tagName) ? (0, U.parseOverflow)(L.overflow) : U.OVERFLOW.HIDDEN,
                overflowWrap: (0, h.parseOverflowWrap)(L.overflowWrap ? L.overflowWrap : L.wordWrap),
                padding: (0, C.parsePadding)(L),
                position: R,
                textDecoration: (0, E.parseTextDecoration)(L),
                textShadow: (0, H.parseTextShadow)(L.textShadow),
                textTransform: (0, p.parseTextTransform)(L.textTransform),
                transform: (0, v.parseTransform)(L),
                visibility: (0, y.parseVisibility)(L.visibility),
                wordBreak: (0, N.parseWordBreak)(L.wordBreak),
                zIndex: (0, b.parseZIndex)(R !== F.POSITION.STATIC ? L.zIndex : "auto"),
              }),
              this.isTransformed() && (e.style.transform = "matrix(1,0,0,1,0,0)"),
              M === u.DISPLAY.LIST_ITEM)
            ) {
              var P = (0, K.getListOwner)(this);
              if (P) {
                var k = P.listItems.length;
                P.listItems.push(this),
                  (this.listIndex =
                    e.hasAttribute("value") && "number" == typeof e.value
                      ? e.value
                      : 0 === k
                      ? "number" == typeof P.listStart
                        ? P.listStart
                        : 1
                      : P.listItems[k - 1].listIndex + 1);
              }
            }
            "IMG" === e.tagName &&
              e.addEventListener("load", function () {
                (o.bounds = (0, m.parseBounds)(e, _, O)),
                  (o.curvedBounds = (0, m.parseBoundCurves)(o.bounds, o.style.border, o.style.borderRadius));
              }),
              (this.image = S(e, r)),
              (this.bounds = D ? (0, I.reformatInputBounds)((0, m.parseBounds)(e, _, O)) : (0, m.parseBounds)(e, _, O)),
              (this.curvedBounds = (0, m.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius));
          }
          return (
            n(A, [
              {
                key: "getClipPaths",
                value: function () {
                  var A = this.parent ? this.parent.getClipPaths() : [];
                  return this.style.overflow !== U.OVERFLOW.VISIBLE
                    ? A.concat([(0, m.calculatePaddingBoxPath)(this.curvedBounds)])
                    : A;
                },
              },
              {
                key: "isInFlow",
                value: function () {
                  return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
                },
              },
              {
                key: "isVisible",
                value: function () {
                  return (
                    !(0, a.contains)(this.style.display, u.DISPLAY.NONE) &&
                    this.style.opacity > 0 &&
                    this.style.visibility === y.VISIBILITY.VISIBLE
                  );
                },
              },
              {
                key: "isAbsolutelyPositioned",
                value: function () {
                  return this.style.position !== F.POSITION.STATIC && this.style.position !== F.POSITION.RELATIVE;
                },
              },
              {
                key: "isPositioned",
                value: function () {
                  return this.style.position !== F.POSITION.STATIC;
                },
              },
              {
                key: "isFloating",
                value: function () {
                  return this.style.float !== l.FLOAT.NONE;
                },
              },
              {
                key: "isRootElement",
                value: function () {
                  return null === this.parent;
                },
              },
              {
                key: "isTransformed",
                value: function () {
                  return null !== this.style.transform;
                },
              },
              {
                key: "isPositionedWithZIndex",
                value: function () {
                  return this.isPositioned() && !this.style.zIndex.auto;
                },
              },
              {
                key: "isInlineLevel",
                value: function () {
                  return (
                    (0, a.contains)(this.style.display, u.DISPLAY.INLINE) ||
                    (0, a.contains)(this.style.display, u.DISPLAY.INLINE_BLOCK) ||
                    (0, a.contains)(this.style.display, u.DISPLAY.INLINE_FLEX) ||
                    (0, a.contains)(this.style.display, u.DISPLAY.INLINE_GRID) ||
                    (0, a.contains)(this.style.display, u.DISPLAY.INLINE_LIST_ITEM) ||
                    (0, a.contains)(this.style.display, u.DISPLAY.INLINE_TABLE)
                  );
                },
              },
              {
                key: "isInlineBlockOrInlineTable",
                value: function () {
                  return (
                    (0, a.contains)(this.style.display, u.DISPLAY.INLINE_BLOCK) ||
                    (0, a.contains)(this.style.display, u.DISPLAY.INLINE_TABLE)
                  );
                },
              },
            ]),
            A
          );
        })();
      e.default = _;
      var S = function (A, e) {
        if (A instanceof A.ownerDocument.defaultView.SVGSVGElement || A instanceof SVGSVGElement) {
          var t = new XMLSerializer();
          return e.loadImage("data:image/svg+xml," + encodeURIComponent(t.serializeToString(A)));
        }
        switch (A.tagName) {
          case "IMG":
            var r = A;
            return e.loadImage(r.currentSrc || r.src);
          case "CANVAS":
            var n = A;
            return e.loadCanvas(n);
          case "IFRAME":
            var o = A.getAttribute("data-html2canvas-internal-iframe-key");
            if (o) return o;
        }
        return null;
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      (e.contains = function (A, e) {
        return 0 != (A & e);
      }),
        (e.distance = function (A, e) {
          return Math.sqrt(A * A + e * e);
        }),
        (e.copyCSSStyles = function (A, e) {
          for (var t = A.length - 1; t >= 0; t--) {
            var r = A.item(t);
            "content" !== r && e.style.setProperty(r, A.getPropertyValue(r));
          }
          return e;
        }),
        (e.SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.parseBackgroundImage =
          e.parseBackground =
          e.calculateBackgroundRepeatPath =
          e.calculateBackgroundPosition =
          e.calculateBackgroungPositioningArea =
          e.calculateBackgroungPaintingArea =
          e.calculateGradientBackgroundSize =
          e.calculateBackgroundSize =
          e.BACKGROUND_ORIGIN =
          e.BACKGROUND_CLIP =
          e.BACKGROUND_SIZE =
          e.BACKGROUND_REPEAT =
            void 0);
      var r = i(t(1)),
        n = i(t(2)),
        o = i(t(39)),
        B = i(t(9)),
        a = t(3),
        s = t(19);
      function i(A) {
        return A && A.__esModule ? A : { default: A };
      }
      var c = (e.BACKGROUND_REPEAT = { REPEAT: 0, NO_REPEAT: 1, REPEAT_X: 2, REPEAT_Y: 3 }),
        u = (e.BACKGROUND_SIZE = { AUTO: 0, CONTAIN: 1, COVER: 2, LENGTH: 3 }),
        l = (e.BACKGROUND_CLIP = { BORDER_BOX: 0, PADDING_BOX: 1, CONTENT_BOX: 2 }),
        Q = (e.BACKGROUND_ORIGIN = l),
        w = function A(e) {
          switch (
            ((function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, A),
            e)
          ) {
            case "contain":
              this.size = u.CONTAIN;
              break;
            case "cover":
              this.size = u.COVER;
              break;
            case "auto":
              this.size = u.AUTO;
              break;
            default:
              this.value = new n.default(e);
          }
        },
        g =
          ((e.calculateBackgroundSize = function (A, e, t) {
            var r = 0,
              n = 0,
              B = A.size;
            if (B[0].size === u.CONTAIN || B[0].size === u.COVER) {
              var a = t.width / t.height,
                s = e.width / e.height;
              return a < s != (B[0].size === u.COVER)
                ? new o.default(t.width, t.width / s)
                : new o.default(t.height * s, t.height);
            }
            return (
              B[0].value && (r = B[0].value.getAbsoluteValue(t.width)),
              B[0].size === u.AUTO && B[1].size === u.AUTO
                ? (n = e.height)
                : B[1].size === u.AUTO
                ? (n = (r / e.width) * e.height)
                : B[1].value && (n = B[1].value.getAbsoluteValue(t.height)),
              B[0].size === u.AUTO && (r = (n / e.height) * e.width),
              new o.default(r, n)
            );
          }),
          (e.calculateGradientBackgroundSize = function (A, e) {
            var t = A.size,
              r = t[0].value ? t[0].value.getAbsoluteValue(e.width) : e.width,
              n = t[1].value ? t[1].value.getAbsoluteValue(e.height) : t[0].value ? r : e.height;
            return new o.default(r, n);
          }),
          new w("auto")),
        d =
          ((e.calculateBackgroungPaintingArea = function (A, e) {
            switch (e) {
              case l.BORDER_BOX:
                return (0, a.calculateBorderBoxPath)(A);
              case l.PADDING_BOX:
              default:
                return (0, a.calculatePaddingBoxPath)(A);
            }
          }),
          (e.calculateBackgroungPositioningArea = function (A, e, t, r) {
            var n = (0, a.calculatePaddingBox)(e, r);
            switch (A) {
              case Q.BORDER_BOX:
                return e;
              case Q.CONTENT_BOX:
                var o = t[s.PADDING_SIDES.LEFT].getAbsoluteValue(e.width),
                  B = t[s.PADDING_SIDES.RIGHT].getAbsoluteValue(e.width),
                  i = t[s.PADDING_SIDES.TOP].getAbsoluteValue(e.width),
                  c = t[s.PADDING_SIDES.BOTTOM].getAbsoluteValue(e.width);
                return new a.Bounds(n.left + o, n.top + i, n.width - o - B, n.height - i - c);
              case Q.PADDING_BOX:
              default:
                return n;
            }
          }),
          (e.calculateBackgroundPosition = function (A, e, t) {
            return new B.default(A[0].getAbsoluteValue(t.width - e.width), A[1].getAbsoluteValue(t.height - e.height));
          }),
          (e.calculateBackgroundRepeatPath = function (A, e, t, r, n) {
            switch (A.repeat) {
              case c.REPEAT_X:
                return [
                  new B.default(Math.round(n.left), Math.round(r.top + e.y)),
                  new B.default(Math.round(n.left + n.width), Math.round(r.top + e.y)),
                  new B.default(Math.round(n.left + n.width), Math.round(t.height + r.top + e.y)),
                  new B.default(Math.round(n.left), Math.round(t.height + r.top + e.y)),
                ];
              case c.REPEAT_Y:
                return [
                  new B.default(Math.round(r.left + e.x), Math.round(n.top)),
                  new B.default(Math.round(r.left + e.x + t.width), Math.round(n.top)),
                  new B.default(Math.round(r.left + e.x + t.width), Math.round(n.height + n.top)),
                  new B.default(Math.round(r.left + e.x), Math.round(n.height + n.top)),
                ];
              case c.NO_REPEAT:
                return [
                  new B.default(Math.round(r.left + e.x), Math.round(r.top + e.y)),
                  new B.default(Math.round(r.left + e.x + t.width), Math.round(r.top + e.y)),
                  new B.default(Math.round(r.left + e.x + t.width), Math.round(r.top + e.y + t.height)),
                  new B.default(Math.round(r.left + e.x), Math.round(r.top + e.y + t.height)),
                ];
              default:
                return [
                  new B.default(Math.round(n.left), Math.round(n.top)),
                  new B.default(Math.round(n.left + n.width), Math.round(n.top)),
                  new B.default(Math.round(n.left + n.width), Math.round(n.height + n.top)),
                  new B.default(Math.round(n.left), Math.round(n.height + n.top)),
                ];
            }
          }),
          (e.parseBackground = function (A, e) {
            return {
              backgroundColor: new r.default(A.backgroundColor),
              backgroundImage: h(A, e),
              backgroundClip: d(A.backgroundClip),
              backgroundOrigin: f(A.backgroundOrigin),
            };
          }),
          function (A) {
            switch (A) {
              case "padding-box":
                return l.PADDING_BOX;
              case "content-box":
                return l.CONTENT_BOX;
            }
            return l.BORDER_BOX;
          }),
        f = function (A) {
          switch (A) {
            case "padding-box":
              return Q.PADDING_BOX;
            case "content-box":
              return Q.CONTENT_BOX;
          }
          return Q.BORDER_BOX;
        },
        U = function (A) {
          switch (A.trim()) {
            case "no-repeat":
              return c.NO_REPEAT;
            case "repeat-x":
            case "repeat no-repeat":
              return c.REPEAT_X;
            case "repeat-y":
            case "no-repeat repeat":
              return c.REPEAT_Y;
            case "repeat":
              return c.REPEAT;
          }
          return c.REPEAT;
        },
        h = function (A, e) {
          var t = E(A.backgroundImage).map(function (A) {
              if ("url" === A.method) {
                var t = e.loadImage(A.args[0]);
                A.args = t ? [t] : [];
              }
              return A;
            }),
            r = A.backgroundPosition.split(","),
            n = A.backgroundRepeat.split(","),
            o = A.backgroundSize.split(",");
          return t.map(function (A, e) {
            var t = (o[e] || "auto").trim().split(" ").map(C),
              B = (r[e] || "auto").trim().split(" ").map(F);
            return {
              source: A,
              repeat: U("string" == typeof n[e] ? n[e] : n[0]),
              size: t.length < 2 ? [t[0], g] : [t[0], t[1]],
              position: B.length < 2 ? [B[0], B[0]] : [B[0], B[1]],
            };
          });
        },
        C = function (A) {
          return "auto" === A ? g : new w(A);
        },
        F = function (A) {
          switch (A) {
            case "bottom":
            case "right":
              return new n.default("100%");
            case "left":
            case "top":
              return new n.default("0%");
            case "auto":
              return new n.default("0");
          }
          return new n.default(A);
        },
        E = (e.parseBackgroundImage = function (A) {
          var e = /^\s$/,
            t = [],
            r = [],
            n = "",
            o = null,
            B = "",
            a = 0,
            s = 0,
            i = function () {
              var A = "";
              if (n) {
                '"' === B.substr(0, 1) && (B = B.substr(1, B.length - 2)), B && r.push(B.trim());
                var e = n.indexOf("-", 1) + 1;
                "-" === n.substr(0, 1) && e > 0 && ((A = n.substr(0, e).toLowerCase()), (n = n.substr(e))),
                  "none" !== (n = n.toLowerCase()) && t.push({ prefix: A, method: n, args: r });
              }
              (r = []), (n = B = "");
            };
          return (
            A.split("").forEach(function (A) {
              if (0 !== a || !e.test(A)) {
                switch (A) {
                  case '"':
                    o ? o === A && (o = null) : (o = A);
                    break;
                  case "(":
                    if (o) break;
                    if (0 === a) return void (a = 1);
                    s++;
                    break;
                  case ")":
                    if (o) break;
                    if (1 === a) {
                      if (0 === s) return (a = 0), void i();
                      s--;
                    }
                    break;
                  case ",":
                    if (o) break;
                    if (0 === a) return void i();
                    if (1 === a && 0 === s && !n.match(/^url$/i)) return r.push(B.trim()), void (B = "");
                }
                0 === a ? (n += A) : (B += A);
              }
            }),
            i(),
            t
          );
        });
    },
    function (A, e, t) {
      "use strict";
      A.exports = t(32);
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.PATH = { VECTOR: 0, BEZIER_CURVE: 1, CIRCLE: 2 };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = t(8);
      e.default = function A(e, t) {
        !(function (A, e) {
          if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, A),
          (this.type = r.PATH.VECTOR),
          (this.x = e),
          (this.y = t);
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.parseListStyle = e.parseListStyleType = e.LIST_STYLE_TYPE = e.LIST_STYLE_POSITION = void 0);
      var r = t(6),
        n = (e.LIST_STYLE_POSITION = { INSIDE: 0, OUTSIDE: 1 }),
        o = (e.LIST_STYLE_TYPE = {
          NONE: -1,
          DISC: 0,
          CIRCLE: 1,
          SQUARE: 2,
          DECIMAL: 3,
          CJK_DECIMAL: 4,
          DECIMAL_LEADING_ZERO: 5,
          LOWER_ROMAN: 6,
          UPPER_ROMAN: 7,
          LOWER_GREEK: 8,
          LOWER_ALPHA: 9,
          UPPER_ALPHA: 10,
          ARABIC_INDIC: 11,
          ARMENIAN: 12,
          BENGALI: 13,
          CAMBODIAN: 14,
          CJK_EARTHLY_BRANCH: 15,
          CJK_HEAVENLY_STEM: 16,
          CJK_IDEOGRAPHIC: 17,
          DEVANAGARI: 18,
          ETHIOPIC_NUMERIC: 19,
          GEORGIAN: 20,
          GUJARATI: 21,
          GURMUKHI: 22,
          HEBREW: 22,
          HIRAGANA: 23,
          HIRAGANA_IROHA: 24,
          JAPANESE_FORMAL: 25,
          JAPANESE_INFORMAL: 26,
          KANNADA: 27,
          KATAKANA: 28,
          KATAKANA_IROHA: 29,
          KHMER: 30,
          KOREAN_HANGUL_FORMAL: 31,
          KOREAN_HANJA_FORMAL: 32,
          KOREAN_HANJA_INFORMAL: 33,
          LAO: 34,
          LOWER_ARMENIAN: 35,
          MALAYALAM: 36,
          MONGOLIAN: 37,
          MYANMAR: 38,
          ORIYA: 39,
          PERSIAN: 40,
          SIMP_CHINESE_FORMAL: 41,
          SIMP_CHINESE_INFORMAL: 42,
          TAMIL: 43,
          TELUGU: 44,
          THAI: 45,
          TIBETAN: 46,
          TRAD_CHINESE_FORMAL: 47,
          TRAD_CHINESE_INFORMAL: 48,
          UPPER_ARMENIAN: 49,
          DISCLOSURE_OPEN: 50,
          DISCLOSURE_CLOSED: 51,
        }),
        B = (e.parseListStyleType = function (A) {
          switch (A) {
            case "disc":
              return o.DISC;
            case "circle":
              return o.CIRCLE;
            case "square":
              return o.SQUARE;
            case "decimal":
              return o.DECIMAL;
            case "cjk-decimal":
              return o.CJK_DECIMAL;
            case "decimal-leading-zero":
              return o.DECIMAL_LEADING_ZERO;
            case "lower-roman":
              return o.LOWER_ROMAN;
            case "upper-roman":
              return o.UPPER_ROMAN;
            case "lower-greek":
              return o.LOWER_GREEK;
            case "lower-alpha":
              return o.LOWER_ALPHA;
            case "upper-alpha":
              return o.UPPER_ALPHA;
            case "arabic-indic":
              return o.ARABIC_INDIC;
            case "armenian":
              return o.ARMENIAN;
            case "bengali":
              return o.BENGALI;
            case "cambodian":
              return o.CAMBODIAN;
            case "cjk-earthly-branch":
              return o.CJK_EARTHLY_BRANCH;
            case "cjk-heavenly-stem":
              return o.CJK_HEAVENLY_STEM;
            case "cjk-ideographic":
              return o.CJK_IDEOGRAPHIC;
            case "devanagari":
              return o.DEVANAGARI;
            case "ethiopic-numeric":
              return o.ETHIOPIC_NUMERIC;
            case "georgian":
              return o.GEORGIAN;
            case "gujarati":
              return o.GUJARATI;
            case "gurmukhi":
              return o.GURMUKHI;
            case "hebrew":
              return o.HEBREW;
            case "hiragana":
              return o.HIRAGANA;
            case "hiragana-iroha":
              return o.HIRAGANA_IROHA;
            case "japanese-formal":
              return o.JAPANESE_FORMAL;
            case "japanese-informal":
              return o.JAPANESE_INFORMAL;
            case "kannada":
              return o.KANNADA;
            case "katakana":
              return o.KATAKANA;
            case "katakana-iroha":
              return o.KATAKANA_IROHA;
            case "khmer":
              return o.KHMER;
            case "korean-hangul-formal":
              return o.KOREAN_HANGUL_FORMAL;
            case "korean-hanja-formal":
              return o.KOREAN_HANJA_FORMAL;
            case "korean-hanja-informal":
              return o.KOREAN_HANJA_INFORMAL;
            case "lao":
              return o.LAO;
            case "lower-armenian":
              return o.LOWER_ARMENIAN;
            case "malayalam":
              return o.MALAYALAM;
            case "mongolian":
              return o.MONGOLIAN;
            case "myanmar":
              return o.MYANMAR;
            case "oriya":
              return o.ORIYA;
            case "persian":
              return o.PERSIAN;
            case "simp-chinese-formal":
              return o.SIMP_CHINESE_FORMAL;
            case "simp-chinese-informal":
              return o.SIMP_CHINESE_INFORMAL;
            case "tamil":
              return o.TAMIL;
            case "telugu":
              return o.TELUGU;
            case "thai":
              return o.THAI;
            case "tibetan":
              return o.TIBETAN;
            case "trad-chinese-formal":
              return o.TRAD_CHINESE_FORMAL;
            case "trad-chinese-informal":
              return o.TRAD_CHINESE_INFORMAL;
            case "upper-armenian":
              return o.UPPER_ARMENIAN;
            case "disclosure-open":
              return o.DISCLOSURE_OPEN;
            case "disclosure-closed":
              return o.DISCLOSURE_CLOSED;
            case "none":
            default:
              return o.NONE;
          }
        }),
        a =
          ((e.parseListStyle = function (A) {
            var e = (0, r.parseBackgroundImage)(A.getPropertyValue("list-style-image"));
            return {
              listStyleType: B(A.getPropertyValue("list-style-type")),
              listStyleImage: e.length ? e[0] : null,
              listStylePosition: a(A.getPropertyValue("list-style-position")),
            };
          }),
          function (A) {
            switch (A) {
              case "inside":
                return n.INSIDE;
              case "outside":
              default:
                return n.OUTSIDE;
            }
          });
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        n = t(22),
        o = t(24);
      var B = (function () {
        function A(e, t, r) {
          !(function (A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, A),
            (this.text = e),
            (this.parent = t),
            (this.bounds = r);
        }
        return (
          r(A, null, [
            {
              key: "fromTextNode",
              value: function (e, t) {
                var r = s(e.data, t.style.textTransform);
                return new A(r, t, (0, o.parseTextBounds)(r, t, e));
              },
            },
          ]),
          A
        );
      })();
      e.default = B;
      var a = /(^|\s|:|-|\(|\))([a-z])/g,
        s = function (A, e) {
          switch (e) {
            case n.TEXT_TRANSFORM.LOWERCASE:
              return A.toLowerCase();
            case n.TEXT_TRANSFORM.CAPITALIZE:
              return A.replace(a, i);
            case n.TEXT_TRANSFORM.UPPERCASE:
              return A.toUpperCase();
            default:
              return A;
          }
        };
      function i(A, e, t) {
        return A.length > 0 ? e + t.toUpperCase() : A;
      }
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = t(25),
        n = function (A) {
          return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3];
        },
        o = {
          get SUPPORT_RANGE_BOUNDS() {
            var A = (function (A) {
              if (A.createRange) {
                var e = A.createRange();
                if (e.getBoundingClientRect) {
                  var t = A.createElement("boundtest");
                  (t.style.height = "123px"), (t.style.display = "block"), A.body.appendChild(t), e.selectNode(t);
                  var r = e.getBoundingClientRect(),
                    n = Math.round(r.height);
                  if ((A.body.removeChild(t), 123 === n)) return !0;
                }
              }
              return !1;
            })(document);
            return Object.defineProperty(o, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
          },
          get SUPPORT_SVG_DRAWING() {
            var A = (function (A) {
              var e = new Image(),
                t = A.createElement("canvas"),
                r = t.getContext("2d");
              e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
              try {
                r.drawImage(e, 0, 0), t.toDataURL();
              } catch (A) {
                return !1;
              }
              return !0;
            })(document);
            return Object.defineProperty(o, "SUPPORT_SVG_DRAWING", { value: A }), A;
          },
          get SUPPORT_BASE64_DRAWING() {
            return function (A) {
              var e = (function (A, e) {
                var t = new Image(),
                  r = A.createElement("canvas"),
                  n = r.getContext("2d");
                return new Promise(function (A) {
                  t.src = e;
                  var o = function () {
                    try {
                      n.drawImage(t, 0, 0), r.toDataURL();
                    } catch (e) {
                      return A(!1);
                    }
                    return A(!0);
                  };
                  (t.onload = o),
                    (t.onerror = function () {
                      return A(!1);
                    }),
                    !0 === t.complete &&
                      setTimeout(function () {
                        o();
                      }, 500);
                });
              })(document, A);
              return (
                Object.defineProperty(o, "SUPPORT_BASE64_DRAWING", {
                  value: function () {
                    return e;
                  },
                }),
                e
              );
            };
          },
          get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var A =
              "function" == typeof Array.from && "function" == typeof window.fetch
                ? (function (A) {
                    var e = A.createElement("canvas");
                    (e.width = 100), (e.height = 100);
                    var t = e.getContext("2d");
                    (t.fillStyle = "rgb(0, 255, 0)"), t.fillRect(0, 0, 100, 100);
                    var o = new Image(),
                      B = e.toDataURL();
                    o.src = B;
                    var a = (0, r.createForeignObjectSVG)(100, 100, 0, 0, o);
                    return (
                      (t.fillStyle = "red"),
                      t.fillRect(0, 0, 100, 100),
                      (0, r.loadSerializedSVG)(a)
                        .then(function (e) {
                          t.drawImage(e, 0, 0);
                          var o = t.getImageData(0, 0, 100, 100).data;
                          (t.fillStyle = "red"), t.fillRect(0, 0, 100, 100);
                          var a = A.createElement("div");
                          return (
                            (a.style.backgroundImage = "url(" + B + ")"),
                            (a.style.height = "100px"),
                            n(o)
                              ? (0, r.loadSerializedSVG)((0, r.createForeignObjectSVG)(100, 100, 0, 0, a))
                              : Promise.reject(!1)
                          );
                        })
                        .then(function (A) {
                          return t.drawImage(A, 0, 0), n(t.getImageData(0, 0, 100, 100).data);
                        })
                        .catch(function (A) {
                          return !1;
                        })
                    );
                  })(document)
                : Promise.resolve(!1);
            return Object.defineProperty(o, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
          },
          get SUPPORT_CORS_IMAGES() {
            var A = void 0 !== new Image().crossOrigin;
            return Object.defineProperty(o, "SUPPORT_CORS_IMAGES", { value: A }), A;
          },
          get SUPPORT_RESPONSE_TYPE() {
            var A = "string" == typeof new XMLHttpRequest().responseType;
            return Object.defineProperty(o, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
          },
          get SUPPORT_CORS_XHR() {
            var A = "withCredentials" in new XMLHttpRequest();
            return Object.defineProperty(o, "SUPPORT_CORS_XHR", { value: A }), A;
          },
        };
      e.default = o;
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.parseTextDecoration = e.TEXT_DECORATION_LINE = e.TEXT_DECORATION = e.TEXT_DECORATION_STYLE = void 0);
      var r,
        n = t(1),
        o = (r = n) && r.__esModule ? r : { default: r };
      var B = (e.TEXT_DECORATION_STYLE = { SOLID: 0, DOUBLE: 1, DOTTED: 2, DASHED: 3, WAVY: 4 }),
        a = (e.TEXT_DECORATION = { NONE: null }),
        s = (e.TEXT_DECORATION_LINE = { UNDERLINE: 1, OVERLINE: 2, LINE_THROUGH: 3, BLINK: 4 }),
        i = function (A) {
          switch (A) {
            case "underline":
              return s.UNDERLINE;
            case "overline":
              return s.OVERLINE;
            case "line-through":
              return s.LINE_THROUGH;
          }
          return s.BLINK;
        };
      e.parseTextDecoration = function (A) {
        var e,
          t =
            "none" === (e = A.textDecorationLine ? A.textDecorationLine : A.textDecoration)
              ? null
              : e.split(" ").map(i);
        return null === t
          ? a.NONE
          : {
              textDecorationLine: t,
              textDecorationColor: A.textDecorationColor ? new o.default(A.textDecorationColor) : null,
              textDecorationStyle: (function (A) {
                switch (A) {
                  case "double":
                    return B.DOUBLE;
                  case "dotted":
                    return B.DOTTED;
                  case "dashed":
                    return B.DASHED;
                  case "wavy":
                    return B.WAVY;
                }
                return B.SOLID;
              })(A.textDecorationStyle),
            };
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.parseBorder = e.BORDER_SIDES = e.BORDER_STYLE = void 0);
      var r,
        n = t(1),
        o = (r = n) && r.__esModule ? r : { default: r };
      var B = (e.BORDER_STYLE = { NONE: 0, SOLID: 1 }),
        a = (e.BORDER_SIDES = { TOP: 0, RIGHT: 1, BOTTOM: 2, LEFT: 3 }),
        s = Object.keys(a).map(function (A) {
          return A.toLowerCase();
        });
      e.parseBorder = function (A) {
        return s.map(function (e) {
          var t = new o.default(A.getPropertyValue("border-" + e + "-color")),
            r = (function (A) {
              switch (A) {
                case "none":
                  return B.NONE;
              }
              return B.SOLID;
            })(A.getPropertyValue("border-" + e + "-style")),
            n = parseFloat(A.getPropertyValue("border-" + e + "-width"));
          return { borderColor: t, borderStyle: r, borderWidth: isNaN(n) ? 0 : n };
        });
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      (e.toCodePoints = function (A) {
        for (var e = [], t = 0, r = A.length; t < r; ) {
          var n = A.charCodeAt(t++);
          if (n >= 55296 && n <= 56319 && t < r) {
            var o = A.charCodeAt(t++);
            56320 == (64512 & o) ? e.push(((1023 & n) << 10) + (1023 & o) + 65536) : (e.push(n), t--);
          } else e.push(n);
        }
        return e;
      }),
        (e.fromCodePoint = function () {
          if (String.fromCodePoint) return String.fromCodePoint.apply(String, arguments);
          var A = arguments.length;
          if (!A) return "";
          for (var e = [], t = -1, r = ""; ++t < A; ) {
            var n = arguments.length <= t ? void 0 : arguments[t];
            n <= 65535 ? e.push(n) : ((n -= 65536), e.push(55296 + (n >> 10), (n % 1024) + 56320)),
              (t + 1 === A || e.length > 16384) && ((r += String.fromCharCode.apply(String, e)), (e.length = 0));
          }
          return r;
        });
      for (
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
          o = 0;
        o < r.length;
        o++
      )
        n[r.charCodeAt(o)] = o;
      (e.decode = function (A) {
        var e = 0.75 * A.length,
          t = A.length,
          r = void 0,
          o = 0,
          B = void 0,
          a = void 0,
          s = void 0,
          i = void 0;
        "=" === A[A.length - 1] && (e--, "=" === A[A.length - 2] && e--);
        var c =
            "undefined" != typeof ArrayBuffer &&
            "undefined" != typeof Uint8Array &&
            void 0 !== Uint8Array.prototype.slice
              ? new ArrayBuffer(e)
              : new Array(e),
          u = Array.isArray(c) ? c : new Uint8Array(c);
        for (r = 0; r < t; r += 4)
          (B = n[A.charCodeAt(r)]),
            (a = n[A.charCodeAt(r + 1)]),
            (s = n[A.charCodeAt(r + 2)]),
            (i = n[A.charCodeAt(r + 3)]),
            (u[o++] = (B << 2) | (a >> 4)),
            (u[o++] = ((15 & a) << 4) | (s >> 2)),
            (u[o++] = ((3 & s) << 6) | (63 & i));
        return c;
      }),
        (e.polyUint16Array = function (A) {
          for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push((A[r + 1] << 8) | A[r]);
          return t;
        }),
        (e.polyUint32Array = function (A) {
          for (var e = A.length, t = [], r = 0; r < e; r += 4)
            t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
          return t;
        });
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createCounterText = e.inlineListItemElement = e.getListOwner = void 0);
      var r = t(5),
        n = s(t(4)),
        o = s(t(11)),
        B = t(10),
        a = t(26);
      function s(A) {
        return A && A.__esModule ? A : { default: A };
      }
      var i = ["OL", "UL", "MENU"],
        c =
          ((e.getListOwner = function (A) {
            var e = A.parent;
            if (!e) return null;
            do {
              if (-1 !== i.indexOf(e.tagName)) return e;
              e = e.parent;
            } while (e);
            return A.parent;
          }),
          (e.inlineListItemElement = function (A, e, t) {
            var a = e.style.listStyle;
            if (a) {
              var s = A.ownerDocument.defaultView.getComputedStyle(A, null),
                i = A.ownerDocument.createElement("html2canvaswrapper");
              switch (
                ((0, r.copyCSSStyles)(s, i),
                (i.style.position = "absolute"),
                (i.style.bottom = "auto"),
                (i.style.display = "block"),
                (i.style.letterSpacing = "normal"),
                a.listStylePosition)
              ) {
                case B.LIST_STYLE_POSITION.OUTSIDE:
                  (i.style.left = "auto"),
                    (i.style.right =
                      A.ownerDocument.defaultView.innerWidth -
                      e.bounds.left -
                      e.style.margin[1].getAbsoluteValue(e.bounds.width) +
                      7 +
                      "px"),
                    (i.style.textAlign = "right");
                  break;
                case B.LIST_STYLE_POSITION.INSIDE:
                  (i.style.left = e.bounds.left - e.style.margin[3].getAbsoluteValue(e.bounds.width) + "px"),
                    (i.style.right = "auto"),
                    (i.style.textAlign = "left");
              }
              var c = void 0,
                u = e.style.margin[0].getAbsoluteValue(e.bounds.width),
                l = a.listStyleImage;
              if (l)
                if ("url" === l.method) {
                  var Q = A.ownerDocument.createElement("img");
                  (Q.src = l.args[0]),
                    (i.style.top = e.bounds.top - u + "px"),
                    (i.style.width = "auto"),
                    (i.style.height = "auto"),
                    i.appendChild(Q);
                } else {
                  var w = 0.5 * parseFloat(e.style.font.fontSize);
                  (i.style.top = e.bounds.top - u + e.bounds.height - 1.5 * w + "px"),
                    (i.style.width = w + "px"),
                    (i.style.height = w + "px"),
                    (i.style.backgroundImage = s.listStyleImage);
                }
              else
                "number" == typeof e.listIndex &&
                  ((c = A.ownerDocument.createTextNode(h(e.listIndex, a.listStyleType, !0))),
                  i.appendChild(c),
                  (i.style.top = e.bounds.top - u + "px"));
              var g = A.ownerDocument.body;
              g.appendChild(i),
                c
                  ? (e.childNodes.push(o.default.fromTextNode(c, e)), g.removeChild(i))
                  : e.childNodes.push(new n.default(i, e, t, 0));
            }
          }),
          {
            integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
          }),
        u = {
          integers: [
            9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60,
            50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
          ],
          values: [
            "Ք",
            "Փ",
            "Ւ",
            "Ց",
            "Ր",
            "Տ",
            "Վ",
            "Ս",
            "Ռ",
            "Ջ",
            "Պ",
            "Չ",
            "Ո",
            "Շ",
            "Ն",
            "Յ",
            "Մ",
            "Ճ",
            "Ղ",
            "Ձ",
            "Հ",
            "Կ",
            "Ծ",
            "Խ",
            "Լ",
            "Ի",
            "Ժ",
            "Թ",
            "Ը",
            "Է",
            "Զ",
            "Ե",
            "Դ",
            "Գ",
            "Բ",
            "Ա",
          ],
        },
        l = {
          integers: [
            1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19,
            18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
          ],
          values: [
            "י׳",
            "ט׳",
            "ח׳",
            "ז׳",
            "ו׳",
            "ה׳",
            "ד׳",
            "ג׳",
            "ב׳",
            "א׳",
            "ת",
            "ש",
            "ר",
            "ק",
            "צ",
            "פ",
            "ע",
            "ס",
            "נ",
            "מ",
            "ל",
            "כ",
            "יט",
            "יח",
            "יז",
            "טז",
            "טו",
            "י",
            "ט",
            "ח",
            "ז",
            "ו",
            "ה",
            "ד",
            "ג",
            "ב",
            "א",
          ],
        },
        Q = {
          integers: [
            1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70,
            60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
          ],
          values: [
            "ჵ",
            "ჰ",
            "ჯ",
            "ჴ",
            "ხ",
            "ჭ",
            "წ",
            "ძ",
            "ც",
            "ჩ",
            "შ",
            "ყ",
            "ღ",
            "ქ",
            "ფ",
            "ჳ",
            "ტ",
            "ს",
            "რ",
            "ჟ",
            "პ",
            "ო",
            "ჲ",
            "ნ",
            "მ",
            "ლ",
            "კ",
            "ი",
            "თ",
            "ჱ",
            "ზ",
            "ვ",
            "ე",
            "დ",
            "გ",
            "ბ",
            "ა",
          ],
        },
        w = function (A, e, t, r, n, o) {
          return A < e || A > t
            ? h(A, n, o.length > 0)
            : r.integers.reduce(function (e, t, n) {
                for (; A >= t; ) (A -= t), (e += r.values[n]);
                return e;
              }, "") + o;
        },
        g = function (A, e, t, r) {
          var n = "";
          do {
            t || A--, (n = r(A) + n), (A /= e);
          } while (A * e >= e);
          return n;
        },
        d = function (A, e, t, r, n) {
          var o = t - e + 1;
          return (
            (A < 0 ? "-" : "") +
            (g(Math.abs(A), o, r, function (A) {
              return (0, a.fromCodePoint)(Math.floor(A % o) + e);
            }) +
              n)
          );
        },
        f = function (A, e) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ". ",
            r = e.length;
          return (
            g(Math.abs(A), r, !1, function (A) {
              return e[Math.floor(A % r)];
            }) + t
          );
        },
        U = function (A, e, t, n, o, a) {
          if (A < -9999 || A > 9999) return h(A, B.LIST_STYLE_TYPE.CJK_DECIMAL, o.length > 0);
          var s = Math.abs(A),
            i = o;
          if (0 === s) return e[0] + i;
          for (var c = 0; s > 0 && c <= 4; c++) {
            var u = s % 10;
            0 === u && (0, r.contains)(a, 1) && "" !== i
              ? (i = e[u] + i)
              : u > 1 ||
                (1 === u && 0 === c) ||
                (1 === u && 1 === c && (0, r.contains)(a, 2)) ||
                (1 === u && 1 === c && (0, r.contains)(a, 4) && A > 100) ||
                (1 === u && c > 1 && (0, r.contains)(a, 8))
              ? (i = e[u] + (c > 0 ? t[c - 1] : "") + i)
              : 1 === u && c > 0 && (i = t[c - 1] + i),
              (s = Math.floor(s / 10));
          }
          return (A < 0 ? n : "") + i;
        },
        h = (e.createCounterText = function (A, e, t) {
          var r = t ? ". " : "",
            n = t ? "、" : "",
            o = t ? ", " : "";
          switch (e) {
            case B.LIST_STYLE_TYPE.DISC:
              return "•";
            case B.LIST_STYLE_TYPE.CIRCLE:
              return "◦";
            case B.LIST_STYLE_TYPE.SQUARE:
              return "◾";
            case B.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
              var a = d(A, 48, 57, !0, r);
              return a.length < 4 ? "0" + a : a;
            case B.LIST_STYLE_TYPE.CJK_DECIMAL:
              return f(A, "〇一二三四五六七八九", n);
            case B.LIST_STYLE_TYPE.LOWER_ROMAN:
              return w(A, 1, 3999, c, B.LIST_STYLE_TYPE.DECIMAL, r).toLowerCase();
            case B.LIST_STYLE_TYPE.UPPER_ROMAN:
              return w(A, 1, 3999, c, B.LIST_STYLE_TYPE.DECIMAL, r);
            case B.LIST_STYLE_TYPE.LOWER_GREEK:
              return d(A, 945, 969, !1, r);
            case B.LIST_STYLE_TYPE.LOWER_ALPHA:
              return d(A, 97, 122, !1, r);
            case B.LIST_STYLE_TYPE.UPPER_ALPHA:
              return d(A, 65, 90, !1, r);
            case B.LIST_STYLE_TYPE.ARABIC_INDIC:
              return d(A, 1632, 1641, !0, r);
            case B.LIST_STYLE_TYPE.ARMENIAN:
            case B.LIST_STYLE_TYPE.UPPER_ARMENIAN:
              return w(A, 1, 9999, u, B.LIST_STYLE_TYPE.DECIMAL, r);
            case B.LIST_STYLE_TYPE.LOWER_ARMENIAN:
              return w(A, 1, 9999, u, B.LIST_STYLE_TYPE.DECIMAL, r).toLowerCase();
            case B.LIST_STYLE_TYPE.BENGALI:
              return d(A, 2534, 2543, !0, r);
            case B.LIST_STYLE_TYPE.CAMBODIAN:
            case B.LIST_STYLE_TYPE.KHMER:
              return d(A, 6112, 6121, !0, r);
            case B.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
              return f(A, "子丑寅卯辰巳午未申酉戌亥", n);
            case B.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
              return f(A, "甲乙丙丁戊己庚辛壬癸", n);
            case B.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
            case B.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
              return U(A, "零一二三四五六七八九", "十百千萬", "負", n, 14);
            case B.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
              return U(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);
            case B.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
              return U(A, "零一二三四五六七八九", "十百千萬", "负", n, 14);
            case B.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
              return U(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);
            case B.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
              return U(A, "〇一二三四五六七八九", "十百千万", "マイナス", n, 0);
            case B.LIST_STYLE_TYPE.JAPANESE_FORMAL:
              return U(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", n, 7);
            case B.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
              return U(A, "영일이삼사오육칠팔구", "십백천만", "마이너스 ", o, 7);
            case B.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
              return U(A, "零一二三四五六七八九", "十百千萬", "마이너스 ", o, 0);
            case B.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
              return U(A, "零壹貳參四五六七八九", "拾百千", "마이너스 ", o, 7);
            case B.LIST_STYLE_TYPE.DEVANAGARI:
              return d(A, 2406, 2415, !0, r);
            case B.LIST_STYLE_TYPE.GEORGIAN:
              return w(A, 1, 19999, Q, B.LIST_STYLE_TYPE.DECIMAL, r);
            case B.LIST_STYLE_TYPE.GUJARATI:
              return d(A, 2790, 2799, !0, r);
            case B.LIST_STYLE_TYPE.GURMUKHI:
              return d(A, 2662, 2671, !0, r);
            case B.LIST_STYLE_TYPE.HEBREW:
              return w(A, 1, 10999, l, B.LIST_STYLE_TYPE.DECIMAL, r);
            case B.LIST_STYLE_TYPE.HIRAGANA:
              return f(
                A,
                "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん"
              );
            case B.LIST_STYLE_TYPE.HIRAGANA_IROHA:
              return f(
                A,
                "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす"
              );
            case B.LIST_STYLE_TYPE.KANNADA:
              return d(A, 3302, 3311, !0, r);
            case B.LIST_STYLE_TYPE.KATAKANA:
              return f(
                A,
                "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
                n
              );
            case B.LIST_STYLE_TYPE.KATAKANA_IROHA:
              return f(
                A,
                "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
                n
              );
            case B.LIST_STYLE_TYPE.LAO:
              return d(A, 3792, 3801, !0, r);
            case B.LIST_STYLE_TYPE.MONGOLIAN:
              return d(A, 6160, 6169, !0, r);
            case B.LIST_STYLE_TYPE.MYANMAR:
              return d(A, 4160, 4169, !0, r);
            case B.LIST_STYLE_TYPE.ORIYA:
              return d(A, 2918, 2927, !0, r);
            case B.LIST_STYLE_TYPE.PERSIAN:
              return d(A, 1776, 1785, !0, r);
            case B.LIST_STYLE_TYPE.TAMIL:
              return d(A, 3046, 3055, !0, r);
            case B.LIST_STYLE_TYPE.TELUGU:
              return d(A, 3174, 3183, !0, r);
            case B.LIST_STYLE_TYPE.THAI:
              return d(A, 3664, 3673, !0, r);
            case B.LIST_STYLE_TYPE.TIBETAN:
              return d(A, 3872, 3881, !0, r);
            case B.LIST_STYLE_TYPE.DECIMAL:
            default:
              return d(A, 48, 57, !0, r);
          }
        });
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        n = t(8),
        o = t(13);
      var B = function (A, e) {
          var t = Math.max.apply(
              null,
              A.colorStops.map(function (A) {
                return A.stop;
              })
            ),
            r = 1 / Math.max(1, t);
          A.colorStops.forEach(function (A) {
            e.addColorStop(r * A.stop, A.color.toString());
          });
        },
        a = (function () {
          function A(e) {
            !(function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, A),
              (this.canvas = e || document.createElement("canvas"));
          }
          return (
            r(A, [
              {
                key: "render",
                value: function (A) {
                  (this.ctx = this.canvas.getContext("2d")),
                    (this.options = A),
                    (this.canvas.width = Math.floor(A.width * A.scale)),
                    (this.canvas.height = Math.floor(A.height * A.scale)),
                    (this.canvas.style.width = A.width + "px"),
                    (this.canvas.style.height = A.height + "px"),
                    this.ctx.scale(this.options.scale, this.options.scale),
                    this.ctx.translate(-A.x, -A.y),
                    (this.ctx.textBaseline = "bottom"),
                    A.logger.log(
                      "Canvas renderer initialized (" +
                        A.width +
                        "x" +
                        A.height +
                        " at " +
                        A.x +
                        "," +
                        A.y +
                        ") with scale " +
                        this.options.scale
                    );
                },
              },
              {
                key: "clip",
                value: function (A, e) {
                  var t = this;
                  A.length &&
                    (this.ctx.save(),
                    A.forEach(function (A) {
                      t.path(A), t.ctx.clip();
                    })),
                    e(),
                    A.length && this.ctx.restore();
                },
              },
              {
                key: "drawImage",
                value: function (A, e, t) {
                  this.ctx.drawImage(A, e.left, e.top, e.width, e.height, t.left, t.top, t.width, t.height);
                },
              },
              {
                key: "drawShape",
                value: function (A, e) {
                  this.path(A), (this.ctx.fillStyle = e.toString()), this.ctx.fill();
                },
              },
              {
                key: "fill",
                value: function (A) {
                  (this.ctx.fillStyle = A.toString()), this.ctx.fill();
                },
              },
              {
                key: "getTarget",
                value: function () {
                  return this.canvas.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), Promise.resolve(this.canvas);
                },
              },
              {
                key: "path",
                value: function (A) {
                  var e = this;
                  this.ctx.beginPath(),
                    Array.isArray(A)
                      ? A.forEach(function (A, t) {
                          var r = A.type === n.PATH.VECTOR ? A : A.start;
                          0 === t ? e.ctx.moveTo(r.x, r.y) : e.ctx.lineTo(r.x, r.y),
                            A.type === n.PATH.BEZIER_CURVE &&
                              e.ctx.bezierCurveTo(
                                A.startControl.x,
                                A.startControl.y,
                                A.endControl.x,
                                A.endControl.y,
                                A.end.x,
                                A.end.y
                              );
                        })
                      : this.ctx.arc(A.x + A.radius, A.y + A.radius, A.radius, 0, 2 * Math.PI, !0),
                    this.ctx.closePath();
                },
              },
              {
                key: "rectangle",
                value: function (A, e, t, r, n) {
                  (this.ctx.fillStyle = n.toString()), this.ctx.fillRect(A, e, t, r);
                },
              },
              {
                key: "renderLinearGradient",
                value: function (A, e) {
                  var t = this.ctx.createLinearGradient(
                    A.left + e.direction.x1,
                    A.top + e.direction.y1,
                    A.left + e.direction.x0,
                    A.top + e.direction.y0
                  );
                  B(e, t), (this.ctx.fillStyle = t), this.ctx.fillRect(A.left, A.top, A.width, A.height);
                },
              },
              {
                key: "renderRadialGradient",
                value: function (A, e) {
                  var t = this,
                    r = A.left + e.center.x,
                    n = A.top + e.center.y,
                    o = this.ctx.createRadialGradient(r, n, 0, r, n, e.radius.x);
                  if (o)
                    if ((B(e, o), (this.ctx.fillStyle = o), e.radius.x !== e.radius.y)) {
                      var a = A.left + 0.5 * A.width,
                        s = A.top + 0.5 * A.height,
                        i = e.radius.y / e.radius.x,
                        c = 1 / i;
                      this.transform(a, s, [1, 0, 0, i, 0, 0], function () {
                        return t.ctx.fillRect(A.left, c * (A.top - s) + s, A.width, A.height * c);
                      });
                    } else this.ctx.fillRect(A.left, A.top, A.width, A.height);
                },
              },
              {
                key: "renderRepeat",
                value: function (A, e, t, r, n) {
                  this.path(A),
                    (this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(e, t), "repeat")),
                    this.ctx.translate(r, n),
                    this.ctx.fill(),
                    this.ctx.translate(-r, -n);
                },
              },
              {
                key: "renderTextNode",
                value: function (A, e, t, r, n) {
                  var B = this;
                  (this.ctx.font = [t.fontStyle, t.fontVariant, t.fontWeight, t.fontSize, t.fontFamily].join(" ")),
                    A.forEach(function (A) {
                      if (
                        ((B.ctx.fillStyle = e.toString()),
                        n && A.text.trim().length
                          ? n
                              .slice(0)
                              .reverse()
                              .forEach(function (e) {
                                (B.ctx.shadowColor = e.color.toString()),
                                  (B.ctx.shadowOffsetX = e.offsetX * B.options.scale),
                                  (B.ctx.shadowOffsetY = e.offsetY * B.options.scale),
                                  (B.ctx.shadowBlur = e.blur),
                                  B.ctx.fillText(A.text, A.bounds.left, A.bounds.top + A.bounds.height);
                              })
                          : B.ctx.fillText(A.text, A.bounds.left, A.bounds.top + A.bounds.height),
                        null !== r)
                      ) {
                        var a = r.textDecorationColor || e;
                        r.textDecorationLine.forEach(function (e) {
                          switch (e) {
                            case o.TEXT_DECORATION_LINE.UNDERLINE:
                              var r = B.options.fontMetrics.getMetrics(t).baseline;
                              B.rectangle(A.bounds.left, Math.round(A.bounds.top + r), A.bounds.width, 1, a);
                              break;
                            case o.TEXT_DECORATION_LINE.OVERLINE:
                              B.rectangle(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1, a);
                              break;
                            case o.TEXT_DECORATION_LINE.LINE_THROUGH:
                              var n = B.options.fontMetrics.getMetrics(t).middle;
                              B.rectangle(A.bounds.left, Math.ceil(A.bounds.top + n), A.bounds.width, 1, a);
                          }
                        });
                      }
                    });
                },
              },
              {
                key: "resizeImage",
                value: function (A, e) {
                  if (A.width === e.width && A.height === e.height) return A;
                  var t = this.canvas.ownerDocument.createElement("canvas");
                  return (
                    (t.width = e.width),
                    (t.height = e.height),
                    t.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e.width, e.height),
                    t
                  );
                },
              },
              {
                key: "setOpacity",
                value: function (A) {
                  this.ctx.globalAlpha = A;
                },
              },
              {
                key: "transform",
                value: function (A, e, t, r) {
                  this.ctx.save(),
                    this.ctx.translate(A, e),
                    this.ctx.transform(t[0], t[1], t[2], t[3], t[4], t[5]),
                    this.ctx.translate(-A, -e),
                    r(),
                    this.ctx.restore();
                },
              },
            ]),
            A
          );
        })();
      e.default = a;
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
        function A(A, e) {
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(A, r.key, r);
          }
        }
        return function (e, t, r) {
          return t && A(e.prototype, t), r && A(e, r), e;
        };
      })();
      var n = (function () {
        function A(e, t, r) {
          !(function (A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, A),
            (this.enabled = "undefined" != typeof window && e),
            (this.start = r || Date.now()),
            (this.id = t);
        }
        return (
          r(A, [
            {
              key: "child",
              value: function (e) {
                return new A(this.enabled, e, this.start);
              },
            },
            {
              key: "log",
              value: function () {
                if (this.enabled && window.console && window.console.log) {
                  for (var A = arguments.length, e = Array(A), t = 0; t < A; t++) e[t] = arguments[t];
                  Function.prototype.bind
                    .call(window.console.log, window.console)
                    .apply(
                      window.console,
                      [
                        Date.now() - this.start + "ms",
                        this.id ? "html2canvas (" + this.id + "):" : "html2canvas:",
                      ].concat([].slice.call(e, 0))
                    );
                }
              },
            },
            {
              key: "error",
              value: function () {
                if (this.enabled && window.console && window.console.error) {
                  for (var A = arguments.length, e = Array(A), t = 0; t < A; t++) e[t] = arguments[t];
                  Function.prototype.bind
                    .call(window.console.error, window.console)
                    .apply(
                      window.console,
                      [
                        Date.now() - this.start + "ms",
                        this.id ? "html2canvas (" + this.id + "):" : "html2canvas:",
                      ].concat([].slice.call(e, 0))
                    );
                }
              },
            },
          ]),
          A
        );
      })();
      e.default = n;
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.parsePadding = e.PADDING_SIDES = void 0);
      var r,
        n = t(2),
        o = (r = n) && r.__esModule ? r : { default: r };
      e.PADDING_SIDES = { TOP: 0, RIGHT: 1, BOTTOM: 2, LEFT: 3 };
      var B = ["top", "right", "bottom", "left"];
      e.parsePadding = function (A) {
        return B.map(function (e) {
          return new o.default(A.getPropertyValue("padding-" + e));
        });
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (e.OVERFLOW_WRAP = { NORMAL: 0, BREAK_WORD: 1 });
      e.parseOverflowWrap = function (A) {
        switch (A) {
          case "break-word":
            return r.BREAK_WORD;
          case "normal":
          default:
            return r.NORMAL;
        }
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (e.POSITION = { STATIC: 0, RELATIVE: 1, ABSOLUTE: 2, FIXED: 3, STICKY: 4 });
      e.parsePosition = function (A) {
        switch (A) {
          case "relative":
            return r.RELATIVE;
          case "absolute":
            return r.ABSOLUTE;
          case "fixed":
            return r.FIXED;
          case "sticky":
            return r.STICKY;
        }
        return r.STATIC;
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (e.TEXT_TRANSFORM = { NONE: 0, LOWERCASE: 1, UPPERCASE: 2, CAPITALIZE: 3 });
      e.parseTextTransform = function (A) {
        switch (A) {
          case "uppercase":
            return r.UPPERCASE;
          case "lowercase":
            return r.LOWERCASE;
          case "capitalize":
            return r.CAPITALIZE;
        }
        return r.NONE;
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.reformatInputBounds =
          e.inlineSelectElement =
          e.inlineTextAreaElement =
          e.inlineInputElement =
          e.getInputBorderRadius =
          e.INPUT_BACKGROUND =
          e.INPUT_BORDERS =
          e.INPUT_COLOR =
            void 0);
      var r = u(t(11)),
        n = t(6),
        o = t(14),
        B = u(t(58)),
        a = u(t(9)),
        s = u(t(1)),
        i = u(t(2)),
        c = (t(3), t(24), t(5));
      function u(A) {
        return A && A.__esModule ? A : { default: A };
      }
      e.INPUT_COLOR = new s.default([42, 42, 42]);
      var l = new s.default([165, 165, 165]),
        Q = new s.default([222, 222, 222]),
        w = { borderWidth: 1, borderColor: l, borderStyle: o.BORDER_STYLE.SOLID },
        g =
          ((e.INPUT_BORDERS = [w, w, w, w]),
          (e.INPUT_BACKGROUND = {
            backgroundColor: Q,
            backgroundImage: [],
            backgroundClip: n.BACKGROUND_CLIP.PADDING_BOX,
            backgroundOrigin: n.BACKGROUND_ORIGIN.PADDING_BOX,
          }),
          new i.default("50%")),
        d = [g, g],
        f = [d, d, d, d],
        U = new i.default("3px"),
        h = [U, U],
        C = [h, h, h, h],
        F =
          ((e.getInputBorderRadius = function (A) {
            return "radio" === A.type ? f : C;
          }),
          (e.inlineInputElement = function (A, e) {
            if ("radio" === A.type || "checkbox" === A.type) {
              if (A.checked) {
                var t = Math.min(e.bounds.width, e.bounds.height);
                e.childNodes.push(
                  "checkbox" === A.type
                    ? [
                        new a.default(e.bounds.left + 0.39363 * t, e.bounds.top + 0.79 * t),
                        new a.default(e.bounds.left + 0.16 * t, e.bounds.top + 0.5549 * t),
                        new a.default(e.bounds.left + 0.27347 * t, e.bounds.top + 0.44071 * t),
                        new a.default(e.bounds.left + 0.39694 * t, e.bounds.top + 0.5649 * t),
                        new a.default(e.bounds.left + 0.72983 * t, e.bounds.top + 0.23 * t),
                        new a.default(e.bounds.left + 0.84 * t, e.bounds.top + 0.34085 * t),
                        new a.default(e.bounds.left + 0.39363 * t, e.bounds.top + 0.79 * t),
                      ]
                    : new B.default(e.bounds.left + t / 4, e.bounds.top + t / 4, t / 4)
                );
              }
            } else F(E(A), A, e, !1);
          }),
          (e.inlineTextAreaElement = function (A, e) {
            F(A.value, A, e, !0);
          }),
          (e.inlineSelectElement = function (A, e) {
            var t = A.options[A.selectedIndex || 0];
            F((t && t.text) || "", A, e, !1);
          }),
          (e.reformatInputBounds = function (A) {
            return (
              A.width > A.height
                ? ((A.left += (A.width - A.height) / 2), (A.width = A.height))
                : A.width < A.height && ((A.top += (A.height - A.width) / 2), (A.height = A.width)),
              A
            );
          }),
          function (A, e, t, n) {
            var o = e.ownerDocument.body;
            if (A.length > 0 && o) {
              var B = e.ownerDocument.createElement("html2canvaswrapper");
              (0, c.copyCSSStyles)(e.ownerDocument.defaultView.getComputedStyle(e, null), B),
                (B.style.position = "absolute"),
                (B.style.left = t.bounds.left + "px"),
                (B.style.top = t.bounds.top + "px"),
                n || (B.style.whiteSpace = "nowrap");
              var a = e.ownerDocument.createTextNode(A);
              B.appendChild(a), o.appendChild(B), t.childNodes.push(r.default.fromTextNode(a, t)), o.removeChild(B);
            }
          }),
        E = function (A) {
          var e = "password" === A.type ? new Array(A.value.length + 1).join("•") : A.value;
          return 0 === e.length ? A.placeholder || "" : e;
        };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.parseTextBounds = e.TextBounds = void 0);
      var r,
        n = t(3),
        o = t(13),
        B = t(12),
        a = (r = B) && r.__esModule ? r : { default: r },
        s = t(26);
      var i = (e.TextBounds = function A(e, t) {
          !(function (A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, A),
            (this.text = e),
            (this.bounds = t);
        }),
        c =
          ((e.parseTextBounds = function (A, e, t) {
            for (
              var r =
                  0 !== e.style.letterSpacing
                    ? (0, s.toCodePoints)(A).map(function (A) {
                        return (0, s.fromCodePoint)(A);
                      })
                    : (0, s.breakWords)(A, e),
                n = r.length,
                B = t.parentNode ? t.parentNode.ownerDocument.defaultView : null,
                l = B ? B.pageXOffset : 0,
                Q = B ? B.pageYOffset : 0,
                w = [],
                g = 0,
                d = 0;
              d < n;
              d++
            ) {
              var f = r[d];
              if (e.style.textDecoration !== o.TEXT_DECORATION.NONE || f.trim().length > 0)
                if (a.default.SUPPORT_RANGE_BOUNDS) w.push(new i(f, u(t, g, f.length, l, Q)));
                else {
                  var U = t.splitText(f.length);
                  w.push(new i(f, c(t, l, Q))), (t = U);
                }
              else a.default.SUPPORT_RANGE_BOUNDS || (t = t.splitText(f.length));
              g += f.length;
            }
            return w;
          }),
          function (A, e, t) {
            var r = A.ownerDocument.createElement("html2canvaswrapper");
            r.appendChild(A.cloneNode(!0));
            var o = A.parentNode;
            if (o) {
              o.replaceChild(r, A);
              var B = (0, n.parseBounds)(r, e, t);
              return r.firstChild && o.replaceChild(r.firstChild, r), B;
            }
            return new n.Bounds(0, 0, 0, 0);
          }),
        u = function (A, e, t, r, o) {
          var B = A.ownerDocument.createRange();
          return B.setStart(A, e), B.setEnd(A, e + t), n.Bounds.fromClientRect(B.getBoundingClientRect(), r, o);
        };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
        function A(A, e) {
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(A, r.key, r);
          }
        }
        return function (e, t, r) {
          return t && A(e.prototype, t), r && A(e, r), e;
        };
      })();
      var n = (function () {
        function A(e) {
          !(function (A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, A),
            (this.element = e);
        }
        return (
          r(A, [
            {
              key: "render",
              value: function (A) {
                var e = this;
                (this.options = A),
                  (this.canvas = document.createElement("canvas")),
                  (this.ctx = this.canvas.getContext("2d")),
                  (this.canvas.width = Math.floor(A.width) * A.scale),
                  (this.canvas.height = Math.floor(A.height) * A.scale),
                  (this.canvas.style.width = A.width + "px"),
                  (this.canvas.style.height = A.height + "px"),
                  A.logger.log(
                    "ForeignObject renderer initialized (" +
                      A.width +
                      "x" +
                      A.height +
                      " at " +
                      A.x +
                      "," +
                      A.y +
                      ") with scale " +
                      A.scale
                  );
                var t = o(
                  Math.max(A.windowWidth, A.width) * A.scale,
                  Math.max(A.windowHeight, A.height) * A.scale,
                  A.scrollX * A.scale,
                  A.scrollY * A.scale,
                  this.element
                );
                return B(t).then(function (t) {
                  return (
                    A.backgroundColor &&
                      ((e.ctx.fillStyle = A.backgroundColor.toString()),
                      e.ctx.fillRect(0, 0, A.width * A.scale, A.height * A.scale)),
                    e.ctx.drawImage(t, -A.x * A.scale, -A.y * A.scale),
                    e.canvas
                  );
                });
              },
            },
          ]),
          A
        );
      })();
      e.default = n;
      var o = (e.createForeignObjectSVG = function (A, e, t, r, n) {
          var o = "http://www.w3.org/2000/svg",
            B = document.createElementNS(o, "svg"),
            a = document.createElementNS(o, "foreignObject");
          return (
            B.setAttributeNS(null, "width", A),
            B.setAttributeNS(null, "height", e),
            a.setAttributeNS(null, "width", "100%"),
            a.setAttributeNS(null, "height", "100%"),
            a.setAttributeNS(null, "x", t),
            a.setAttributeNS(null, "y", r),
            a.setAttributeNS(null, "externalResourcesRequired", "true"),
            B.appendChild(a),
            a.appendChild(n),
            B
          );
        }),
        B = (e.loadSerializedSVG = function (A) {
          return new Promise(function (e, t) {
            var r = new Image();
            (r.onload = function () {
              return e(r);
            }),
              (r.onerror = t),
              (r.src =
                "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A)));
          });
        });
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.breakWords = e.fromCodePoint = e.toCodePoints = void 0);
      var r = t(54);
      Object.defineProperty(e, "toCodePoints", {
        enumerable: !0,
        get: function () {
          return r.toCodePoints;
        },
      }),
        Object.defineProperty(e, "fromCodePoint", {
          enumerable: !0,
          get: function () {
            return r.fromCodePoint;
          },
        });
      var n,
        o = t(4),
        B = ((n = o) && n.__esModule, t(20));
      e.breakWords = function (A, e) {
        for (
          var t = (0, r.LineBreaker)(A, {
              lineBreak: e.style.lineBreak,
              wordBreak: e.style.overflowWrap === B.OVERFLOW_WRAP.BREAK_WORD ? "break-word" : e.style.wordBreak,
            }),
            n = [],
            o = void 0;
          !(o = t.next()).done;

        )
          n.push(o.value.slice());
        return n;
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.FontMetrics = void 0);
      var r = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        n = t(5);
      e.FontMetrics = (function () {
        function A(e) {
          !(function (A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, A),
            (this._data = {}),
            (this._document = e);
        }
        return (
          r(A, [
            {
              key: "_parseMetrics",
              value: function (A) {
                var e = this._document.createElement("div"),
                  t = this._document.createElement("img"),
                  r = this._document.createElement("span"),
                  o = this._document.body;
                if (!o) throw new Error("");
                (e.style.visibility = "hidden"),
                  (e.style.fontFamily = A.fontFamily),
                  (e.style.fontSize = A.fontSize),
                  (e.style.margin = "0"),
                  (e.style.padding = "0"),
                  o.appendChild(e),
                  (t.src = n.SMALL_IMAGE),
                  (t.width = 1),
                  (t.height = 1),
                  (t.style.margin = "0"),
                  (t.style.padding = "0"),
                  (t.style.verticalAlign = "baseline"),
                  (r.style.fontFamily = A.fontFamily),
                  (r.style.fontSize = A.fontSize),
                  (r.style.margin = "0"),
                  (r.style.padding = "0"),
                  r.appendChild(this._document.createTextNode("Hidden Text")),
                  e.appendChild(r),
                  e.appendChild(t);
                var B = t.offsetTop - r.offsetTop + 2;
                e.removeChild(r),
                  e.appendChild(this._document.createTextNode("Hidden Text")),
                  (e.style.lineHeight = "normal"),
                  (t.style.verticalAlign = "super");
                var a = t.offsetTop - e.offsetTop + 2;
                return o.removeChild(e), { baseline: B, middle: a };
              },
            },
            {
              key: "getMetrics",
              value: function (A) {
                var e = A.fontFamily + " " + A.fontSize;
                return void 0 === this._data[e] && (this._data[e] = this._parseMetrics(A)), this._data[e];
              },
            },
          ]),
          A
        );
      })();
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Proxy = void 0);
      var r,
        n = t(12),
        o = (r = n) && r.__esModule ? r : { default: r };
      e.Proxy = function (A, e) {
        if (!e.proxy) return Promise.reject(null);
        var t = e.proxy;
        return new Promise(function (r, n) {
          var B = o.default.SUPPORT_CORS_XHR && o.default.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
            a = o.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
          if (
            ((a.onload = function () {
              if (a instanceof XMLHttpRequest)
                if (200 === a.status)
                  if ("text" === B) r(a.response);
                  else {
                    var A = new FileReader();
                    A.addEventListener(
                      "load",
                      function () {
                        return r(A.result);
                      },
                      !1
                    ),
                      A.addEventListener(
                        "error",
                        function (A) {
                          return n(A);
                        },
                        !1
                      ),
                      A.readAsDataURL(a.response);
                  }
                else n("");
              else r(a.responseText);
            }),
            (a.onerror = n),
            a.open("GET", t + "?url=" + encodeURIComponent(A) + "&responseType=" + B),
            "text" !== B && a instanceof XMLHttpRequest && (a.responseType = B),
            e.imageTimeout)
          ) {
            var s = e.imageTimeout;
            (a.timeout = s),
              (a.ontimeout = function () {
                return n("");
              });
          }
          a.send();
        });
      };
    },
    function (A, e, t) {
      "use strict";
      var r =
          Object.assign ||
          function (A) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
            }
            return A;
          },
        n = a(t(17)),
        o = a(t(18)),
        B = t(36);
      function a(A) {
        return A && A.__esModule ? A : { default: A };
      }
      var s = function (A, e) {
        var t = e || {},
          a = new o.default("boolean" != typeof t.logging || t.logging);
        a.log("html2canvas $npm_package_version");
        var s = A.ownerDocument;
        if (!s) return Promise.reject("Provided element is not within a Document");
        var i = s.defaultView,
          c = {
            async: !0,
            allowTaint: !1,
            backgroundColor: "#ffffff",
            imageTimeout: 15e3,
            logging: !0,
            proxy: null,
            removeContainer: !0,
            foreignObjectRendering: !1,
            scale: i.devicePixelRatio || 1,
            target: new n.default(t.canvas),
            useCORS: !1,
            windowWidth: i.innerWidth,
            windowHeight: i.innerHeight,
            scrollX: i.pageXOffset,
            scrollY: i.pageYOffset,
          };
        return (0, B.renderElement)(A, r({}, c, t), a);
      };
      (s.CanvasRenderer = n.default), (A.exports = s);
    },
    function (A, e, t) {
      "use strict";
      (function (A) {
        var t = (function () {
            if ("undefined" != typeof Map) return Map;
            function A(A, e) {
              var t = -1;
              return (
                A.some(function (A, r) {
                  return A[0] === e && ((t = r), !0);
                }),
                t
              );
            }
            return (function () {
              function e() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(e.prototype, "size", {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.get = function (e) {
                  var t = A(this.__entries__, e),
                    r = this.__entries__[t];
                  return r && r[1];
                }),
                (e.prototype.set = function (e, t) {
                  var r = A(this.__entries__, e);
                  ~r ? (this.__entries__[r][1] = t) : this.__entries__.push([e, t]);
                }),
                (e.prototype.delete = function (e) {
                  var t = this.__entries__,
                    r = A(t, e);
                  ~r && t.splice(r, 1);
                }),
                (e.prototype.has = function (e) {
                  return !!~A(this.__entries__, e);
                }),
                (e.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (e.prototype.forEach = function (A, e) {
                  void 0 === e && (e = null);
                  for (var t = 0, r = this.__entries__; t < r.length; t++) {
                    var n = r[t];
                    A.call(e, n[1], n[0]);
                  }
                }),
                e
              );
            })();
          })(),
          r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
          n =
            void 0 !== A && A.Math === Math
              ? A
              : "undefined" != typeof self && self.Math === Math
              ? self
              : "undefined" != typeof window && window.Math === Math
              ? window
              : Function("return this")(),
          o =
            "function" == typeof requestAnimationFrame
              ? requestAnimationFrame.bind(n)
              : function (A) {
                  return setTimeout(function () {
                    return A(Date.now());
                  }, 1e3 / 60);
                },
          B = 2;
        var a = 20,
          s = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
          i = "undefined" != typeof MutationObserver,
          c = (function () {
            function A() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (A, e) {
                  var t = !1,
                    r = !1,
                    n = 0;
                  function a() {
                    t && ((t = !1), A()), r && i();
                  }
                  function s() {
                    o(a);
                  }
                  function i() {
                    var A = Date.now();
                    if (t) {
                      if (A - n < B) return;
                      r = !0;
                    } else (t = !0), (r = !1), setTimeout(s, e);
                    n = A;
                  }
                  return i;
                })(this.refresh.bind(this), a));
            }
            return (
              (A.prototype.addObserver = function (A) {
                ~this.observers_.indexOf(A) || this.observers_.push(A), this.connected_ || this.connect_();
              }),
              (A.prototype.removeObserver = function (A) {
                var e = this.observers_,
                  t = e.indexOf(A);
                ~t && e.splice(t, 1), !e.length && this.connected_ && this.disconnect_();
              }),
              (A.prototype.refresh = function () {
                this.updateObservers_() && this.refresh();
              }),
              (A.prototype.updateObservers_ = function () {
                var A = this.observers_.filter(function (A) {
                  return A.gatherActive(), A.hasActive();
                });
                return (
                  A.forEach(function (A) {
                    return A.broadcastActive();
                  }),
                  A.length > 0
                );
              }),
              (A.prototype.connect_ = function () {
                r &&
                  !this.connected_ &&
                  (document.addEventListener("transitionend", this.onTransitionEnd_),
                  window.addEventListener("resize", this.refresh),
                  i
                    ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener("DOMSubtreeModified", this.refresh), (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (A.prototype.disconnect_ = function () {
                r &&
                  this.connected_ &&
                  (document.removeEventListener("transitionend", this.onTransitionEnd_),
                  window.removeEventListener("resize", this.refresh),
                  this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (A.prototype.onTransitionEnd_ = function (A) {
                var e = A.propertyName,
                  t = void 0 === e ? "" : e;
                s.some(function (A) {
                  return !!~t.indexOf(A);
                }) && this.refresh();
              }),
              (A.getInstance = function () {
                return this.instance_ || (this.instance_ = new A()), this.instance_;
              }),
              (A.instance_ = null),
              A
            );
          })(),
          u = function (A, e) {
            for (var t = 0, r = Object.keys(e); t < r.length; t++) {
              var n = r[t];
              Object.defineProperty(A, n, { value: e[n], enumerable: !1, writable: !1, configurable: !0 });
            }
            return A;
          },
          l = function (A) {
            return (A && A.ownerDocument && A.ownerDocument.defaultView) || n;
          },
          Q = h(0, 0, 0, 0);
        function w(A) {
          return parseFloat(A) || 0;
        }
        function g(A) {
          for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
          return e.reduce(function (e, t) {
            return e + w(A["border-" + t + "-width"]);
          }, 0);
        }
        function d(A) {
          var e = A.clientWidth,
            t = A.clientHeight;
          if (!e && !t) return Q;
          var r = l(A).getComputedStyle(A),
            n = (function (A) {
              for (var e = {}, t = 0, r = ["top", "right", "bottom", "left"]; t < r.length; t++) {
                var n = r[t],
                  o = A["padding-" + n];
                e[n] = w(o);
              }
              return e;
            })(r),
            o = n.left + n.right,
            B = n.top + n.bottom,
            a = w(r.width),
            s = w(r.height);
          if (
            ("border-box" === r.boxSizing &&
              (Math.round(a + o) !== e && (a -= g(r, "left", "right") + o),
              Math.round(s + B) !== t && (s -= g(r, "top", "bottom") + B)),
            !(function (A) {
              return A === l(A).document.documentElement;
            })(A))
          ) {
            var i = Math.round(a + o) - e,
              c = Math.round(s + B) - t;
            1 !== Math.abs(i) && (a -= i), 1 !== Math.abs(c) && (s -= c);
          }
          return h(n.left, n.top, a, s);
        }
        var f =
          "undefined" != typeof SVGGraphicsElement
            ? function (A) {
                return A instanceof l(A).SVGGraphicsElement;
              }
            : function (A) {
                return A instanceof l(A).SVGElement && "function" == typeof A.getBBox;
              };
        function U(A) {
          return r
            ? f(A)
              ? (function (A) {
                  var e = A.getBBox();
                  return h(0, 0, e.width, e.height);
                })(A)
              : d(A)
            : Q;
        }
        function h(A, e, t, r) {
          return { x: A, y: e, width: t, height: r };
        }
        var C = (function () {
            function A(A) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = h(0, 0, 0, 0)),
                (this.target = A);
            }
            return (
              (A.prototype.isActive = function () {
                var A = U(this.target);
                return (this.contentRect_ = A), A.width !== this.broadcastWidth || A.height !== this.broadcastHeight;
              }),
              (A.prototype.broadcastRect = function () {
                var A = this.contentRect_;
                return (this.broadcastWidth = A.width), (this.broadcastHeight = A.height), A;
              }),
              A
            );
          })(),
          F = function (A, e) {
            var t,
              r,
              n,
              o,
              B,
              a,
              s,
              i =
                ((r = (t = e).x),
                (n = t.y),
                (o = t.width),
                (B = t.height),
                (a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                (s = Object.create(a.prototype)),
                u(s, { x: r, y: n, width: o, height: B, top: n, right: r + o, bottom: B + n, left: r }),
                s);
            u(this, { target: A, contentRect: i });
          },
          E = (function () {
            function A(A, e, r) {
              if (((this.activeObservations_ = []), (this.observations_ = new t()), "function" != typeof A))
                throw new TypeError("The callback provided as parameter 1 is not a function.");
              (this.callback_ = A), (this.controller_ = e), (this.callbackCtx_ = r);
            }
            return (
              (A.prototype.observe = function (A) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                  if (!(A instanceof l(A).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                  var e = this.observations_;
                  e.has(A) || (e.set(A, new C(A)), this.controller_.addObserver(this), this.controller_.refresh());
                }
              }),
              (A.prototype.unobserve = function (A) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                  if (!(A instanceof l(A).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                  var e = this.observations_;
                  e.has(A) && (e.delete(A), e.size || this.controller_.removeObserver(this));
                }
              }),
              (A.prototype.disconnect = function () {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
              }),
              (A.prototype.gatherActive = function () {
                var A = this;
                this.clearActive(),
                  this.observations_.forEach(function (e) {
                    e.isActive() && A.activeObservations_.push(e);
                  });
              }),
              (A.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var A = this.callbackCtx_,
                    e = this.activeObservations_.map(function (A) {
                      return new F(A.target, A.broadcastRect());
                    });
                  this.callback_.call(A, e, A), this.clearActive();
                }
              }),
              (A.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (A.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              A
            );
          })(),
          H = "undefined" != typeof WeakMap ? new WeakMap() : new t(),
          p = function A(e) {
            if (!(this instanceof A)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var t = c.getInstance(),
              r = new E(e, t, this);
            H.set(this, r);
          };
        ["observe", "unobserve", "disconnect"].forEach(function (A) {
          p.prototype[A] = function () {
            var e;
            return (e = H.get(this))[A].apply(e, arguments);
          };
        });
        var v = void 0 !== n.ResizeObserver ? n.ResizeObserver : p;
        e.a = v;
      }).call(this, t(65));
    },
    function (A, e, t) {
      "use strict";
      t.r(e);
      var r = t(7),
        n = t.n(r),
        o = t(0),
        B = t.n(o),
        a = t(29),
        s = t.n(a),
        i = t(30);
      t(66);
      function c(A) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (A) {
                return typeof A;
              }
            : function (A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype
                  ? "symbol"
                  : typeof A;
              })(A);
      }
      function u(A, e) {
        var t = Object.keys(A);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(A);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(A, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function l(A, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(A, r.key, r);
        }
      }
      function Q(A) {
        return (Q = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (A) {
              return A.__proto__ || Object.getPrototypeOf(A);
            })(A);
      }
      function w(A) {
        if (void 0 === A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return A;
      }
      function g(A, e) {
        return (g =
          Object.setPrototypeOf ||
          function (A, e) {
            return (A.__proto__ = e), A;
          })(A, e);
      }
      function d(A, e, t) {
        return (
          e in A
            ? Object.defineProperty(A, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (A[e] = t),
          A
        );
      }
      var f = (function (A) {
        function e() {
          var A, t;
          !(function (A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, o = new Array(r), B = 0; B < r; B++) o[B] = arguments[B];
          return (
            (t = (function (A, e) {
              return !e || ("object" !== c(e) && "function" != typeof e) ? w(A) : e;
            })(this, (A = Q(e)).call.apply(A, [this].concat(o)))),
            d(w(t), "cssSupport", CSS.supports("(backdrop-filter: blur(5px)) or (-webkit-backdrop-filter: blur(5px))")),
            d(w(t), "backdrop", n.a.createRef()),
            d(w(t), "log", function () {
              var A;
              t.props.logging && (A = console).log.apply(A, arguments);
            }),
            d(w(t), "shouldDraw", function () {
              var A = t.props.shouldDraw;
              return "function" == typeof A ? A() : A;
            }),
            d(w(t), "canvasFallback", function () {
              var A = t.props.canvasFallback;
              return "function" == typeof A ? A() : A;
            }),
            d(w(t), "_draw", function () {
              if (t.shouldDraw()) {
                var A = t.backdrop.current;
                if (A) {
                  var e = A.getBoundingClientRect(),
                    r = e.width,
                    n = e.height,
                    o = e.x,
                    B = e.y,
                    a = A.querySelector(".rct-backdrop-filter-canvas");
                  setTimeout(function () {
                    return s()(
                      document.body,
                      (function (A) {
                        for (var e = 1; e < arguments.length; e++) {
                          var t = null != arguments[e] ? arguments[e] : {};
                          e % 2
                            ? u(t, !0).forEach(function (e) {
                                d(A, e, t[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t))
                            : u(t).forEach(function (e) {
                                Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e));
                              });
                        }
                        return A;
                      })({}, t.props.html2canvasOpts, {
                        logging: t.props.logging,
                        width: r,
                        height: n,
                        x: o,
                        y: B,
                        canvas: a,
                      })
                    ).then(function () {
                      "function" == typeof t.props.onDraw && t.props.onDraw();
                    });
                  });
                }
              }
            }),
            t
          );
        }
        var t, o, B;
        return (
          (function (A, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError("Super expression must either be null or a function");
            (A.prototype = Object.create(e && e.prototype, {
              constructor: { value: A, writable: !0, configurable: !0 },
            })),
              e && g(A, e);
          })(e, r["Component"]),
          (t = e),
          (o = [
            {
              key: "componentDidMount",
              value: function () {
                var A = this;
                if (
                  (this.log("CSS backdrop-filter is ".concat(this.cssSupport ? "" : "not ", "supported")),
                  this.isUsingCanvas)
                ) {
                  var e = this.backdrop.current;
                  e &&
                    new i.a(function () {
                      A._draw();
                    }).observe(e),
                    (window.onresize = this._draw);
                }
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.isUsingCanvas && this._draw();
              },
            },
            {
              key: "render",
              value: function () {
                var A = this.props,
                  e = A.className,
                  t = A.children,
                  r = { backdropFilter: this.props.filter, WebkitBackdropFilter: this.props.filter },
                  o = { filter: this.props.filter };
                return n.a.createElement(
                  "div",
                  {
                    "data-html2canvas-ignore": !0,
                    ref: this.backdrop,
                    className: "rct-backdrop-filter-wrapper " + e,
                    style: this.cssSupport ? r : null,
                  },
                  !this.cssSupport &&
                    n.a.createElement("canvas", { className: "rct-backdrop-filter-canvas", style: o }),
                  t
                );
              },
            },
            {
              key: "isUsingCanvas",
              get: function () {
                return !this.cssSupport && !!this.canvasFallback();
              },
            },
          ]) && l(t.prototype, o),
          B && l(t, B),
          e
        );
      })();
      (f.propTypes = {
        children: B.a.node,
        className: B.a.string,
        filter: B.a.string,
        canvasFallback: B.a.oneOfType([B.a.func, B.a.bool]),
        shouldDraw: B.a.oneOfType([B.a.func, B.a.bool]),
        onDraw: B.a.func,
        html2canvasOpts: B.a.object,
        logging: B.a.bool,
      }),
        (f.defaultProps = {
          className: "",
          filter: "",
          canvasFallback: !0,
          shouldDraw: !0,
          html2canvasOpts: {},
          logging: !0,
        }),
        (e.default = f);
    },
    function (A, e, t) {
      "use strict";
      /** @license React v16.9.0
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = t(33),
        n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        B = n ? Symbol.for("react.portal") : 60106,
        a = n ? Symbol.for("react.fragment") : 60107,
        s = n ? Symbol.for("react.strict_mode") : 60108,
        i = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.forward_ref") : 60112,
        Q = n ? Symbol.for("react.suspense") : 60113,
        w = n ? Symbol.for("react.suspense_list") : 60120,
        g = n ? Symbol.for("react.memo") : 60115,
        d = n ? Symbol.for("react.lazy") : 60116;
      n && Symbol.for("react.fundamental"), n && Symbol.for("react.responder");
      var f = "function" == typeof Symbol && Symbol.iterator;
      function U(A) {
        for (
          var e = A.message, t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
          r < arguments.length;
          r++
        )
          t += "&args[]=" + encodeURIComponent(arguments[r]);
        return (
          (A.message =
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. "),
          A
        );
      }
      var h = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        C = {};
      function F(A, e, t) {
        (this.props = A), (this.context = e), (this.refs = C), (this.updater = t || h);
      }
      function E() {}
      function H(A, e, t) {
        (this.props = A), (this.context = e), (this.refs = C), (this.updater = t || h);
      }
      (F.prototype.isReactComponent = {}),
        (F.prototype.setState = function (A, e) {
          if ("object" != typeof A && "function" != typeof A && null != A) throw U(Error(85));
          this.updater.enqueueSetState(this, A, e, "setState");
        }),
        (F.prototype.forceUpdate = function (A) {
          this.updater.enqueueForceUpdate(this, A, "forceUpdate");
        }),
        (E.prototype = F.prototype);
      var p = (H.prototype = new E());
      (p.constructor = H), r(p, F.prototype), (p.isPureReactComponent = !0);
      var v = { current: null },
        y = { suspense: null },
        N = { current: null },
        b = Object.prototype.hasOwnProperty,
        m = { key: !0, ref: !0, __self: !0, __source: !0 };
      function I(A, e, t) {
        var r = void 0,
          n = {},
          B = null,
          a = null;
        if (null != e)
          for (r in (void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (B = "" + e.key), e))
            b.call(e, r) && !m.hasOwnProperty(r) && (n[r] = e[r]);
        var s = arguments.length - 2;
        if (1 === s) n.children = t;
        else if (1 < s) {
          for (var i = Array(s), c = 0; c < s; c++) i[c] = arguments[c + 2];
          n.children = i;
        }
        if (A && A.defaultProps) for (r in (s = A.defaultProps)) void 0 === n[r] && (n[r] = s[r]);
        return { $$typeof: o, type: A, key: B, ref: a, props: n, _owner: N.current };
      }
      function K(A) {
        return "object" == typeof A && null !== A && A.$$typeof === o;
      }
      var T = /\/+/g,
        _ = [];
      function S(A, e, t, r) {
        if (_.length) {
          var n = _.pop();
          return (n.result = A), (n.keyPrefix = e), (n.func = t), (n.context = r), (n.count = 0), n;
        }
        return { result: A, keyPrefix: e, func: t, context: r, count: 0 };
      }
      function O(A) {
        (A.result = null),
          (A.keyPrefix = null),
          (A.func = null),
          (A.context = null),
          (A.count = 0),
          10 > _.length && _.push(A);
      }
      function L(A, e, t) {
        return null == A
          ? 0
          : (function A(e, t, r, n) {
              var a = typeof e;
              ("undefined" !== a && "boolean" !== a) || (e = null);
              var s = !1;
              if (null === e) s = !0;
              else
                switch (a) {
                  case "string":
                  case "number":
                    s = !0;
                    break;
                  case "object":
                    switch (e.$$typeof) {
                      case o:
                      case B:
                        s = !0;
                    }
                }
              if (s) return r(n, e, "" === t ? "." + M(e, 0) : t), 1;
              if (((s = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
                for (var i = 0; i < e.length; i++) {
                  var c = t + M((a = e[i]), i);
                  s += A(a, c, r, n);
                }
              else if (
                (null === e || "object" != typeof e
                  ? (c = null)
                  : (c = "function" == typeof (c = (f && e[f]) || e["@@iterator"]) ? c : null),
                "function" == typeof c)
              )
                for (e = c.call(e), i = 0; !(a = e.next()).done; ) s += A((a = a.value), (c = t + M(a, i++)), r, n);
              else if ("object" === a)
                throw (
                  ((r = "" + e),
                  U(
                    Error(31),
                    "[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r,
                    ""
                  ))
                );
              return s;
            })(A, "", e, t);
      }
      function M(A, e) {
        return "object" == typeof A && null !== A && null != A.key
          ? (function (A) {
              var e = { "=": "=0", ":": "=2" };
              return (
                "$" +
                ("" + A).replace(/[=:]/g, function (A) {
                  return e[A];
                })
              );
            })(A.key)
          : e.toString(36);
      }
      function D(A, e) {
        A.func.call(A.context, e, A.count++);
      }
      function R(A, e, t) {
        var r = A.result,
          n = A.keyPrefix;
        (A = A.func.call(A.context, e, A.count++)),
          Array.isArray(A)
            ? P(A, r, t, function (A) {
                return A;
              })
            : null != A &&
              (K(A) &&
                (A = (function (A, e) {
                  return { $$typeof: o, type: A.type, key: e, ref: A.ref, props: A.props, _owner: A._owner };
                })(A, n + (!A.key || (e && e.key === A.key) ? "" : ("" + A.key).replace(T, "$&/") + "/") + t)),
              r.push(A));
      }
      function P(A, e, t, r, n) {
        var o = "";
        null != t && (o = ("" + t).replace(T, "$&/") + "/"), L(A, R, (e = S(e, o, r, n))), O(e);
      }
      function k() {
        var A = v.current;
        if (null === A) throw U(Error(321));
        return A;
      }
      var X = {
          Children: {
            map: function (A, e, t) {
              if (null == A) return A;
              var r = [];
              return P(A, r, null, e, t), r;
            },
            forEach: function (A, e, t) {
              if (null == A) return A;
              L(A, D, (e = S(null, null, e, t))), O(e);
            },
            count: function (A) {
              return L(
                A,
                function () {
                  return null;
                },
                null
              );
            },
            toArray: function (A) {
              var e = [];
              return (
                P(A, e, null, function (A) {
                  return A;
                }),
                e
              );
            },
            only: function (A) {
              if (!K(A)) throw U(Error(143));
              return A;
            },
          },
          createRef: function () {
            return { current: null };
          },
          Component: F,
          PureComponent: H,
          createContext: function (A, e) {
            return (
              void 0 === e && (e = null),
              ((A = {
                $$typeof: u,
                _calculateChangedBits: e,
                _currentValue: A,
                _currentValue2: A,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: c, _context: A }),
              (A.Consumer = A)
            );
          },
          forwardRef: function (A) {
            return { $$typeof: l, render: A };
          },
          lazy: function (A) {
            return { $$typeof: d, _ctor: A, _status: -1, _result: null };
          },
          memo: function (A, e) {
            return { $$typeof: g, type: A, compare: void 0 === e ? null : e };
          },
          useCallback: function (A, e) {
            return k().useCallback(A, e);
          },
          useContext: function (A, e) {
            return k().useContext(A, e);
          },
          useEffect: function (A, e) {
            return k().useEffect(A, e);
          },
          useImperativeHandle: function (A, e, t) {
            return k().useImperativeHandle(A, e, t);
          },
          useDebugValue: function () {},
          useLayoutEffect: function (A, e) {
            return k().useLayoutEffect(A, e);
          },
          useMemo: function (A, e) {
            return k().useMemo(A, e);
          },
          useReducer: function (A, e, t) {
            return k().useReducer(A, e, t);
          },
          useRef: function (A) {
            return k().useRef(A);
          },
          useState: function (A) {
            return k().useState(A);
          },
          Fragment: a,
          Profiler: i,
          StrictMode: s,
          Suspense: Q,
          unstable_SuspenseList: w,
          createElement: I,
          cloneElement: function (A, e, t) {
            if (null == A) throw U(Error(267), A);
            var n = void 0,
              B = r({}, A.props),
              a = A.key,
              s = A.ref,
              i = A._owner;
            if (null != e) {
              void 0 !== e.ref && ((s = e.ref), (i = N.current)), void 0 !== e.key && (a = "" + e.key);
              var c = void 0;
              for (n in (A.type && A.type.defaultProps && (c = A.type.defaultProps), e))
                b.call(e, n) && !m.hasOwnProperty(n) && (B[n] = void 0 === e[n] && void 0 !== c ? c[n] : e[n]);
            }
            if (1 === (n = arguments.length - 2)) B.children = t;
            else if (1 < n) {
              c = Array(n);
              for (var u = 0; u < n; u++) c[u] = arguments[u + 2];
              B.children = c;
            }
            return { $$typeof: o, type: A.type, key: a, ref: s, props: B, _owner: i };
          },
          createFactory: function (A) {
            var e = I.bind(null, A);
            return (e.type = A), e;
          },
          isValidElement: K,
          version: "16.9.0",
          unstable_withSuspenseConfig: function (A, e) {
            var t = y.suspense;
            y.suspense = void 0 === e ? null : e;
            try {
              A();
            } finally {
              y.suspense = t;
            }
          },
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: v,
            ReactCurrentBatchConfig: y,
            ReactCurrentOwner: N,
            IsSomeRendererActing: { current: !1 },
            assign: r,
          },
        },
        x = { default: X },
        z = (x && X) || x;
      A.exports = z.default || z;
    },
    function (A, e, t) {
      "use strict";
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      function B(A) {
        if (null == A) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(A);
      }
      A.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var A = new String("abc");
          if (((A[5] = "de"), "5" === Object.getOwnPropertyNames(A)[0])) return !1;
          for (var e = {}, t = 0; t < 10; t++) e["_" + String.fromCharCode(t)] = t;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(e)
              .map(function (A) {
                return e[A];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (A) {
              r[A] = A;
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
          );
        } catch (A) {
          return !1;
        }
      })()
        ? Object.assign
        : function (A, e) {
            for (var t, a, s = B(A), i = 1; i < arguments.length; i++) {
              for (var c in (t = Object(arguments[i]))) n.call(t, c) && (s[c] = t[c]);
              if (r) {
                a = r(t);
                for (var u = 0; u < a.length; u++) o.call(t, a[u]) && (s[a[u]] = t[a[u]]);
              }
            }
            return s;
          };
    },
    function (A, e, t) {
      "use strict";
      var r = t(35);
      function n() {}
      function o() {}
      (o.resetWarningCache = n),
        (A.exports = function () {
          function A(A, e, t, n, o, B) {
            if (B !== r) {
              var a = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function e() {
            return A;
          }
          A.isRequired = A;
          var t = {
            array: A,
            bool: A,
            func: A,
            number: A,
            object: A,
            string: A,
            symbol: A,
            any: A,
            arrayOf: e,
            element: A,
            elementType: A,
            instanceOf: e,
            node: A,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: n,
          };
          return (t.PropTypes = t), t;
        });
    },
    function (A, e, t) {
      "use strict";
      A.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.renderElement = void 0);
      var r = function (A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function (A, e) {
              var t = [],
                r = !0,
                n = !1,
                o = void 0;
              try {
                for (
                  var B, a = A[Symbol.iterator]();
                  !(r = (B = a.next()).done) && (t.push(B.value), !e || t.length !== e);
                  r = !0
                );
              } catch (A) {
                (n = !0), (o = A);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (n) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        n = (Q(t(18)), t(37)),
        o = Q(t(59)),
        B = Q(t(25)),
        a = Q(t(12)),
        s = t(3),
        i = t(62),
        c = t(27),
        u = t(1),
        l = Q(u);
      function Q(A) {
        return A && A.__esModule ? A : { default: A };
      }
      e.renderElement = function A(e, t, Q) {
        var w = e.ownerDocument,
          g = new s.Bounds(t.scrollX, t.scrollY, t.windowWidth, t.windowHeight),
          d = w.documentElement ? new l.default(getComputedStyle(w.documentElement).backgroundColor) : u.TRANSPARENT,
          f = w.body ? new l.default(getComputedStyle(w.body).backgroundColor) : u.TRANSPARENT,
          U =
            e === w.documentElement
              ? d.isTransparent()
                ? f.isTransparent()
                  ? t.backgroundColor
                    ? new l.default(t.backgroundColor)
                    : null
                  : f
                : d
              : t.backgroundColor
              ? new l.default(t.backgroundColor)
              : null;
        return (t.foreignObjectRendering ? a.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(!1)).then(
          function (a) {
            return a
              ? (l = new i.DocumentCloner(e, t, Q, !0, A))
                  .inlineFonts(w)
                  .then(function () {
                    return l.resourceLoader.ready();
                  })
                  .then(function () {
                    var A = new B.default(l.documentElement),
                      r = w.defaultView,
                      n = r.pageXOffset,
                      o = r.pageYOffset,
                      a =
                        "HTML" === e.tagName || "BODY" === e.tagName
                          ? (0, s.parseDocumentSize)(w)
                          : (0, s.parseBounds)(e, n, o),
                      i = a.width,
                      c = a.height,
                      u = a.left,
                      g = a.top;
                    return A.render({
                      backgroundColor: U,
                      logger: Q,
                      scale: t.scale,
                      x: "number" == typeof t.x ? t.x : u,
                      y: "number" == typeof t.y ? t.y : g,
                      width: "number" == typeof t.width ? t.width : Math.ceil(i),
                      height: "number" == typeof t.height ? t.height : Math.ceil(c),
                      windowWidth: t.windowWidth,
                      windowHeight: t.windowHeight,
                      scrollX: t.scrollX,
                      scrollY: t.scrollY,
                    });
                  })
              : (0, i.cloneWindow)(w, g, e, t, Q, A).then(function (A) {
                  var e = r(A, 3),
                    B = e[0],
                    a = e[1],
                    i = e[2];
                  var l = (0, n.NodeParser)(a, i, Q),
                    g = a.ownerDocument;
                  return (
                    U === l.container.style.background.backgroundColor &&
                      (l.container.style.background.backgroundColor = u.TRANSPARENT),
                    i.ready().then(function (A) {
                      var e = new c.FontMetrics(g);
                      var r = g.defaultView,
                        n = r.pageXOffset,
                        i = r.pageYOffset,
                        u =
                          "HTML" === a.tagName || "BODY" === a.tagName
                            ? (0, s.parseDocumentSize)(w)
                            : (0, s.parseBounds)(a, n, i),
                        d = u.width,
                        f = u.height,
                        h = u.left,
                        C = u.top,
                        F = {
                          backgroundColor: U,
                          fontMetrics: e,
                          imageStore: A,
                          logger: Q,
                          scale: t.scale,
                          x: "number" == typeof t.x ? t.x : h,
                          y: "number" == typeof t.y ? t.y : C,
                          width: "number" == typeof t.width ? t.width : Math.ceil(d),
                          height: "number" == typeof t.height ? t.height : Math.ceil(f),
                        };
                      if (Array.isArray(t.target))
                        return Promise.all(
                          t.target.map(function (A) {
                            return new o.default(A, F).render(l);
                          })
                        );
                      var E = new o.default(t.target, F).render(l);
                      return !0 === t.removeContainer && B.parentNode && B.parentNode.removeChild(B), E;
                    })
                  );
                });
            var l;
          }
        );
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.NodeParser = void 0);
      var r = i(t(38)),
        n = i(t(4)),
        o = i(t(11)),
        B = t(23),
        a = t(16),
        s = t(10);
      function i(A) {
        return A && A.__esModule ? A : { default: A };
      }
      e.NodeParser = function (A, e, t) {
        var o = 0,
          B = new n.default(A, null, e, o++),
          a = new r.default(B, null, !0);
        return u(A, B, a, e, 1), a;
      };
      var c = ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"],
        u = function A(e, t, i, u, w) {
          for (var g, d = e.firstChild; d; d = g) {
            g = d.nextSibling;
            var f = d.ownerDocument.defaultView;
            if (d instanceof f.Text || d instanceof Text || (f.parent && d instanceof f.parent.Text))
              d.data.trim().length > 0 && t.childNodes.push(o.default.fromTextNode(d, t));
            else if (
              d instanceof f.HTMLElement ||
              d instanceof HTMLElement ||
              (f.parent && d instanceof f.parent.HTMLElement)
            ) {
              if (-1 === c.indexOf(d.nodeName)) {
                var U = new n.default(d, t, u, w++);
                if (U.isVisible()) {
                  "INPUT" === d.tagName
                    ? (0, B.inlineInputElement)(d, U)
                    : "TEXTAREA" === d.tagName
                    ? (0, B.inlineTextAreaElement)(d, U)
                    : "SELECT" === d.tagName
                    ? (0, B.inlineSelectElement)(d, U)
                    : U.style.listStyle &&
                      U.style.listStyle.listStyleType !== s.LIST_STYLE_TYPE.NONE &&
                      (0, a.inlineListItemElement)(d, U, u);
                  var h = "TEXTAREA" !== d.tagName,
                    C = l(U, d);
                  if (C || Q(U)) {
                    var F = C || U.isPositioned() ? i.getRealParentStackingContext() : i,
                      E = new r.default(U, F, C);
                    F.contexts.push(E), h && A(d, U, E, u, w);
                  } else i.children.push(U), h && A(d, U, i, u, w);
                }
              }
            } else if (
              d instanceof f.SVGSVGElement ||
              d instanceof SVGSVGElement ||
              (f.parent && d instanceof f.parent.SVGSVGElement)
            ) {
              var H = new n.default(d, t, u, w++),
                p = l(H, d);
              if (p || Q(H)) {
                var v = p || H.isPositioned() ? i.getRealParentStackingContext() : i,
                  y = new r.default(H, v, p);
                v.contexts.push(y);
              } else i.children.push(H);
            }
          }
        },
        l = function (A, e) {
          return A.isRootElement() || A.isPositionedWithZIndex() || A.style.opacity < 1 || A.isTransformed() || w(A, e);
        },
        Q = function (A) {
          return A.isPositioned() || A.isFloating();
        },
        w = function (A, e) {
          return (
            "BODY" === e.nodeName &&
            A.parent instanceof n.default &&
            A.parent.style.background.backgroundColor.isTransparent()
          );
        };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r,
        n = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        o = t(4);
      (r = o) && r.__esModule, t(21);
      var B = (function () {
        function A(e, t, r) {
          !(function (A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, A),
            (this.container = e),
            (this.parent = t),
            (this.contexts = []),
            (this.children = []),
            (this.treatAsRealStackingContext = r);
        }
        return (
          n(A, [
            {
              key: "getOpacity",
              value: function () {
                return this.parent
                  ? this.container.style.opacity * this.parent.getOpacity()
                  : this.container.style.opacity;
              },
            },
            {
              key: "getRealParentStackingContext",
              value: function () {
                return !this.parent || this.treatAsRealStackingContext
                  ? this
                  : this.parent.getRealParentStackingContext();
              },
            },
          ]),
          A
        );
      })();
      e.default = B;
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.default = function A(e, t) {
        !(function (A, e) {
          if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, A),
          (this.width = e),
          (this.height = t);
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r,
        n = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        o = t(8),
        B = t(9),
        a = (r = B) && r.__esModule ? r : { default: r };
      var s = function (A, e, t) {
          return new a.default(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
        },
        i = (function () {
          function A(e, t, r, n) {
            !(function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, A),
              (this.type = o.PATH.BEZIER_CURVE),
              (this.start = e),
              (this.startControl = t),
              (this.endControl = r),
              (this.end = n);
          }
          return (
            n(A, [
              {
                key: "subdivide",
                value: function (e, t) {
                  var r = s(this.start, this.startControl, e),
                    n = s(this.startControl, this.endControl, e),
                    o = s(this.endControl, this.end, e),
                    B = s(r, n, e),
                    a = s(n, o, e),
                    i = s(B, a, e);
                  return t ? new A(this.start, r, B, i) : new A(i, a, o, this.end);
                },
              },
              {
                key: "reverse",
                value: function () {
                  return new A(this.end, this.endControl, this.startControl, this.start);
                },
              },
            ]),
            A
          );
        })();
      e.default = i;
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.parseBorderRadius = void 0);
      var r,
        n = function (A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function (A, e) {
              var t = [],
                r = !0,
                n = !1,
                o = void 0;
              try {
                for (
                  var B, a = A[Symbol.iterator]();
                  !(r = (B = a.next()).done) && (t.push(B.value), !e || t.length !== e);
                  r = !0
                );
              } catch (A) {
                (n = !0), (o = A);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (n) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        o = t(2),
        B = (r = o) && r.__esModule ? r : { default: r };
      var a = ["top-left", "top-right", "bottom-right", "bottom-left"];
      e.parseBorderRadius = function (A) {
        return a.map(function (e) {
          var t = A.getPropertyValue("border-" + e + "-radius")
              .split(" ")
              .map(B.default.create),
            r = n(t, 2),
            o = r[0],
            a = r[1];
          return void 0 === a ? [o, o] : [o, a];
        });
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (e.DISPLAY = {
          NONE: 1,
          BLOCK: 2,
          INLINE: 4,
          RUN_IN: 8,
          FLOW: 16,
          FLOW_ROOT: 32,
          TABLE: 64,
          FLEX: 128,
          GRID: 256,
          RUBY: 512,
          SUBGRID: 1024,
          LIST_ITEM: 2048,
          TABLE_ROW_GROUP: 4096,
          TABLE_HEADER_GROUP: 8192,
          TABLE_FOOTER_GROUP: 16384,
          TABLE_ROW: 32768,
          TABLE_CELL: 65536,
          TABLE_COLUMN_GROUP: 1 << 17,
          TABLE_COLUMN: 1 << 18,
          TABLE_CAPTION: 1 << 19,
          RUBY_BASE: 1 << 20,
          RUBY_TEXT: 1 << 21,
          RUBY_BASE_CONTAINER: 1 << 22,
          RUBY_TEXT_CONTAINER: 1 << 23,
          CONTENTS: 1 << 24,
          INLINE_BLOCK: 1 << 25,
          INLINE_LIST_ITEM: 1 << 26,
          INLINE_TABLE: 1 << 27,
          INLINE_FLEX: 1 << 28,
          INLINE_GRID: 1 << 29,
        }),
        n = function (A, e) {
          return (
            A |
            (function (A) {
              switch (A) {
                case "block":
                  return r.BLOCK;
                case "inline":
                  return r.INLINE;
                case "run-in":
                  return r.RUN_IN;
                case "flow":
                  return r.FLOW;
                case "flow-root":
                  return r.FLOW_ROOT;
                case "table":
                  return r.TABLE;
                case "flex":
                  return r.FLEX;
                case "grid":
                  return r.GRID;
                case "ruby":
                  return r.RUBY;
                case "subgrid":
                  return r.SUBGRID;
                case "list-item":
                  return r.LIST_ITEM;
                case "table-row-group":
                  return r.TABLE_ROW_GROUP;
                case "table-header-group":
                  return r.TABLE_HEADER_GROUP;
                case "table-footer-group":
                  return r.TABLE_FOOTER_GROUP;
                case "table-row":
                  return r.TABLE_ROW;
                case "table-cell":
                  return r.TABLE_CELL;
                case "table-column-group":
                  return r.TABLE_COLUMN_GROUP;
                case "table-column":
                  return r.TABLE_COLUMN;
                case "table-caption":
                  return r.TABLE_CAPTION;
                case "ruby-base":
                  return r.RUBY_BASE;
                case "ruby-text":
                  return r.RUBY_TEXT;
                case "ruby-base-container":
                  return r.RUBY_BASE_CONTAINER;
                case "ruby-text-container":
                  return r.RUBY_TEXT_CONTAINER;
                case "contents":
                  return r.CONTENTS;
                case "inline-block":
                  return r.INLINE_BLOCK;
                case "inline-list-item":
                  return r.INLINE_LIST_ITEM;
                case "inline-table":
                  return r.INLINE_TABLE;
                case "inline-flex":
                  return r.INLINE_FLEX;
                case "inline-grid":
                  return r.INLINE_GRID;
              }
              return r.NONE;
            })(e)
          );
        };
      e.parseDisplay = function (A) {
        return A.split(" ").reduce(n, 0);
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (e.FLOAT = { NONE: 0, LEFT: 1, RIGHT: 2, INLINE_START: 3, INLINE_END: 4 });
      e.parseCSSFloat = function (A) {
        switch (A) {
          case "left":
            return r.LEFT;
          case "right":
            return r.RIGHT;
          case "inline-start":
            return r.INLINE_START;
          case "inline-end":
            return r.INLINE_END;
        }
        return r.NONE;
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.parseFont = function (A) {
        return {
          fontFamily: A.fontFamily,
          fontSize: A.fontSize,
          fontStyle: A.fontStyle,
          fontVariant: A.fontVariant,
          fontWeight: (function (A) {
            switch (A) {
              case "normal":
                return 400;
              case "bold":
                return 700;
            }
            var e = parseInt(A, 10);
            return isNaN(e) ? 400 : e;
          })(A.fontWeight),
        };
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.parseLetterSpacing = function (A) {
        if ("normal" === A) return 0;
        var e = parseFloat(A);
        return isNaN(e) ? 0 : e;
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (e.LINE_BREAK = { NORMAL: "normal", STRICT: "strict" });
      e.parseLineBreak = function (A) {
        switch (A) {
          case "strict":
            return r.STRICT;
          case "normal":
          default:
            return r.NORMAL;
        }
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.parseMargin = void 0);
      var r,
        n = t(2),
        o = (r = n) && r.__esModule ? r : { default: r };
      var B = ["top", "right", "bottom", "left"];
      e.parseMargin = function (A) {
        return B.map(function (e) {
          return new o.default(A.getPropertyValue("margin-" + e));
        });
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (e.OVERFLOW = { VISIBLE: 0, HIDDEN: 1, SCROLL: 2, AUTO: 3 });
      e.parseOverflow = function (A) {
        switch (A) {
          case "hidden":
            return r.HIDDEN;
          case "scroll":
            return r.SCROLL;
          case "auto":
            return r.AUTO;
          case "visible":
          default:
            return r.VISIBLE;
        }
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.parseTextShadow = void 0);
      var r,
        n = t(1),
        o = (r = n) && r.__esModule ? r : { default: r };
      var B = /^([+-]|\d|\.)$/i;
      e.parseTextShadow = function (A) {
        if ("none" === A || "string" != typeof A) return null;
        for (
          var e = "",
            t = !1,
            r = [],
            n = [],
            a = 0,
            s = null,
            i = function () {
              e.length && (t ? r.push(parseFloat(e)) : (s = new o.default(e))), (t = !1), (e = "");
            },
            c = function () {
              r.length && null !== s && n.push({ color: s, offsetX: r[0] || 0, offsetY: r[1] || 0, blur: r[2] || 0 }),
                r.splice(0, r.length),
                (s = null);
            },
            u = 0;
          u < A.length;
          u++
        ) {
          var l = A[u];
          switch (l) {
            case "(":
              (e += l), a++;
              break;
            case ")":
              (e += l), a--;
              break;
            case ",":
              0 === a ? (i(), c()) : (e += l);
              break;
            case " ":
              0 === a ? i() : (e += l);
              break;
            default:
              0 === e.length && B.test(l) && (t = !0), (e += l);
          }
        }
        return i(), c(), 0 === n.length ? null : n;
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.parseTransform = void 0);
      var r,
        n = t(2),
        o = (r = n) && r.__esModule ? r : { default: r };
      var B = function (A) {
          return parseFloat(A.trim());
        },
        a = /(matrix|matrix3d)\((.+)\)/,
        s =
          ((e.parseTransform = function (A) {
            var e = i(A.transform || A.webkitTransform || A.mozTransform || A.msTransform || A.oTransform);
            return null === e
              ? null
              : {
                  transform: e,
                  transformOrigin: s(
                    A.transformOrigin ||
                      A.webkitTransformOrigin ||
                      A.mozTransformOrigin ||
                      A.msTransformOrigin ||
                      A.oTransformOrigin
                  ),
                };
          }),
          function (A) {
            if ("string" != typeof A) {
              var e = new o.default("0");
              return [e, e];
            }
            var t = A.split(" ").map(o.default.create);
            return [t[0], t[1]];
          }),
        i = function (A) {
          if ("none" === A || "string" != typeof A) return null;
          var e = A.match(a);
          if (e) {
            if ("matrix" === e[1]) {
              var t = e[2].split(",").map(B);
              return [t[0], t[1], t[2], t[3], t[4], t[5]];
            }
            var r = e[2].split(",").map(B);
            return [r[0], r[1], r[4], r[5], r[12], r[13]];
          }
          return null;
        };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (e.VISIBILITY = { VISIBLE: 0, HIDDEN: 1, COLLAPSE: 2 });
      e.parseVisibility = function (A) {
        switch (A) {
          case "hidden":
            return r.HIDDEN;
          case "collapse":
            return r.COLLAPSE;
          case "visible":
          default:
            return r.VISIBLE;
        }
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (e.WORD_BREAK = { NORMAL: "normal", BREAK_ALL: "break-all", KEEP_ALL: "keep-all" });
      e.parseWordBreak = function (A) {
        switch (A) {
          case "break-all":
            return r.BREAK_ALL;
          case "keep-all":
            return r.KEEP_ALL;
          case "normal":
          default:
            return r.NORMAL;
        }
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.parseZIndex = function (A) {
        var e = "auto" === A;
        return { auto: e, order: e ? 0 : parseInt(A, 10) };
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = t(15);
      Object.defineProperty(e, "toCodePoints", {
        enumerable: !0,
        get: function () {
          return r.toCodePoints;
        },
      }),
        Object.defineProperty(e, "fromCodePoint", {
          enumerable: !0,
          get: function () {
            return r.fromCodePoint;
          },
        });
      var n = t(55);
      Object.defineProperty(e, "LineBreaker", {
        enumerable: !0,
        get: function () {
          return n.LineBreaker;
        },
      });
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LineBreaker =
          e.inlineBreakOpportunities =
          e.lineBreakAtIndex =
          e.codePointsToCharacterClasses =
          e.UnicodeTrie =
          e.BREAK_ALLOWED =
          e.BREAK_NOT_ALLOWED =
          e.BREAK_MANDATORY =
          e.classes =
          e.LETTER_NUMBER_MODIFIER =
            void 0);
      var r,
        n = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        o = function (A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function (A, e) {
              var t = [],
                r = !0,
                n = !1,
                o = void 0;
              try {
                for (
                  var B, a = A[Symbol.iterator]();
                  !(r = (B = a.next()).done) && (t.push(B.value), !e || t.length !== e);
                  r = !0
                );
              } catch (A) {
                (n = !0), (o = A);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (n) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        B = t(56),
        a = t(57),
        s = (r = a) && r.__esModule ? r : { default: r },
        i = t(15);
      var c = (e.LETTER_NUMBER_MODIFIER = 50),
        u = 10,
        l = 13,
        Q = 15,
        w = 17,
        g = 18,
        d = 19,
        f = 20,
        U = 21,
        h = 22,
        C = 24,
        F = 25,
        E = 26,
        H = 27,
        p = 28,
        v = 30,
        y = 32,
        N = 33,
        b = 34,
        m = 35,
        I = 37,
        K = 38,
        T = 39,
        _ = 40,
        S = 42,
        O =
          ((e.classes = {
            BK: 1,
            CR: 2,
            LF: 3,
            CM: 4,
            NL: 5,
            SG: 6,
            WJ: 7,
            ZW: 8,
            GL: 9,
            SP: u,
            ZWJ: 11,
            B2: 12,
            BA: l,
            BB: 14,
            HY: Q,
            CB: 16,
            CL: w,
            CP: g,
            EX: d,
            IN: f,
            NS: U,
            OP: h,
            QU: 23,
            IS: C,
            NU: F,
            PO: E,
            PR: H,
            SY: p,
            AI: 29,
            AL: v,
            CJ: 31,
            EB: y,
            EM: N,
            H2: b,
            H3: m,
            HL: 36,
            ID: I,
            JL: K,
            JV: T,
            JT: _,
            RI: 41,
            SA: S,
            XX: 43,
          }),
          (e.BREAK_MANDATORY = "!")),
        L = (e.BREAK_NOT_ALLOWED = "×"),
        M = (e.BREAK_ALLOWED = "÷"),
        D = (e.UnicodeTrie = (0, B.createTrieFromBase64)(s.default)),
        R = [v, 36],
        P = [1, 2, 3, 5],
        k = [u, 8],
        X = [H, E],
        x = P.concat(k),
        z = [K, T, _, b, m],
        V = [Q, l],
        J = (e.codePointsToCharacterClasses = function (A) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "strict",
            t = [],
            r = [],
            n = [];
          return (
            A.forEach(function (A, o) {
              var B = D.get(A);
              if (
                (B > c ? (n.push(!0), (B -= c)) : n.push(!1),
                -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A))
              )
                return r.push(o), t.push(16);
              if (4 === B || 11 === B) {
                if (0 === o) return r.push(o), t.push(v);
                var a = t[o - 1];
                return -1 === x.indexOf(a) ? (r.push(r[o - 1]), t.push(a)) : (r.push(o), t.push(v));
              }
              return (
                r.push(o),
                31 === B
                  ? t.push("strict" === e ? U : I)
                  : B === S
                  ? t.push(v)
                  : 29 === B
                  ? t.push(v)
                  : 43 === B
                  ? (A >= 131072 && A <= 196605) || (A >= 196608 && A <= 262141)
                    ? t.push(I)
                    : t.push(v)
                  : void t.push(B)
              );
            }),
            [r, t, n]
          );
        }),
        G = function (A, e, t, r) {
          var n = r[t];
          if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n)
            for (var o = t; o <= r.length; ) {
              var B = r[++o];
              if (B === e) return !0;
              if (B !== u) break;
            }
          if (n === u)
            for (var a = t; a > 0; ) {
              var s = r[--a];
              if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s)
                for (var i = t; i <= r.length; ) {
                  var c = r[++i];
                  if (c === e) return !0;
                  if (c !== u) break;
                }
              if (s !== u) break;
            }
          return !1;
        },
        Y = function (A, e) {
          for (var t = A; t >= 0; ) {
            var r = e[t];
            if (r !== u) return r;
            t--;
          }
          return 0;
        },
        W = function (A, e, t, r, n) {
          if (0 === t[r]) return L;
          var o = r - 1;
          if (Array.isArray(n) && !0 === n[o]) return L;
          var B = o - 1,
            a = o + 1,
            s = e[o],
            i = B >= 0 ? e[B] : 0,
            c = e[a];
          if (2 === s && 3 === c) return L;
          if (-1 !== P.indexOf(s)) return O;
          if (-1 !== P.indexOf(c)) return L;
          if (-1 !== k.indexOf(c)) return L;
          if (8 === Y(o, e)) return M;
          if (11 === D.get(A[o]) && (c === I || c === y || c === N)) return L;
          if (7 === s || 7 === c) return L;
          if (9 === s) return L;
          if (-1 === [u, l, Q].indexOf(s) && 9 === c) return L;
          if (-1 !== [w, g, d, C, p].indexOf(c)) return L;
          if (Y(o, e) === h) return L;
          if (G(23, h, o, e)) return L;
          if (G([w, g], U, o, e)) return L;
          if (G(12, 12, o, e)) return L;
          if (s === u) return M;
          if (23 === s || 23 === c) return L;
          if (16 === c || 16 === s) return M;
          if (-1 !== [l, Q, U].indexOf(c) || 14 === s) return L;
          if (36 === i && -1 !== V.indexOf(s)) return L;
          if (s === p && 36 === c) return L;
          if (c === f && -1 !== R.concat(f, d, F, I, y, N).indexOf(s)) return L;
          if ((-1 !== R.indexOf(c) && s === F) || (-1 !== R.indexOf(s) && c === F)) return L;
          if ((s === H && -1 !== [I, y, N].indexOf(c)) || (-1 !== [I, y, N].indexOf(s) && c === E)) return L;
          if ((-1 !== R.indexOf(s) && -1 !== X.indexOf(c)) || (-1 !== X.indexOf(s) && -1 !== R.indexOf(c))) return L;
          if (
            (-1 !== [H, E].indexOf(s) && (c === F || (-1 !== [h, Q].indexOf(c) && e[a + 1] === F))) ||
            (-1 !== [h, Q].indexOf(s) && c === F) ||
            (s === F && -1 !== [F, p, C].indexOf(c))
          )
            return L;
          if (-1 !== [F, p, C, w, g].indexOf(c))
            for (var v = o; v >= 0; ) {
              var S = e[v];
              if (S === F) return L;
              if (-1 === [p, C].indexOf(S)) break;
              v--;
            }
          if (-1 !== [H, E].indexOf(c))
            for (var x = -1 !== [w, g].indexOf(s) ? B : o; x >= 0; ) {
              var J = e[x];
              if (J === F) return L;
              if (-1 === [p, C].indexOf(J)) break;
              x--;
            }
          if (
            (K === s && -1 !== [K, T, b, m].indexOf(c)) ||
            (-1 !== [T, b].indexOf(s) && -1 !== [T, _].indexOf(c)) ||
            (-1 !== [_, m].indexOf(s) && c === _)
          )
            return L;
          if ((-1 !== z.indexOf(s) && -1 !== [f, E].indexOf(c)) || (-1 !== z.indexOf(c) && s === H)) return L;
          if (-1 !== R.indexOf(s) && -1 !== R.indexOf(c)) return L;
          if (s === C && -1 !== R.indexOf(c)) return L;
          if ((-1 !== R.concat(F).indexOf(s) && c === h) || (-1 !== R.concat(F).indexOf(c) && s === g)) return L;
          if (41 === s && 41 === c) {
            for (var W = t[o], j = 1; W > 0 && 41 === e[--W]; ) j++;
            if (j % 2 != 0) return L;
          }
          return s === y && c === N ? L : M;
        },
        j =
          ((e.lineBreakAtIndex = function (A, e) {
            if (0 === e) return L;
            if (e >= A.length) return O;
            var t = J(A),
              r = o(t, 2),
              n = r[0],
              B = r[1];
            return W(A, B, n, e);
          }),
          function (A, e) {
            e || (e = { lineBreak: "normal", wordBreak: "normal" });
            var t = J(A, e.lineBreak),
              r = o(t, 3),
              n = r[0],
              B = r[1],
              a = r[2];
            return (
              ("break-all" !== e.wordBreak && "break-word" !== e.wordBreak) ||
                (B = B.map(function (A) {
                  return -1 !== [F, v, S].indexOf(A) ? I : A;
                })),
              [
                n,
                B,
                "keep-all" === e.wordBreak
                  ? a.map(function (e, t) {
                      return e && A[t] >= 19968 && A[t] <= 40959;
                    })
                  : null,
              ]
            );
          }),
        q =
          ((e.inlineBreakOpportunities = function (A, e) {
            var t = (0, i.toCodePoints)(A),
              r = L,
              n = j(t, e),
              B = o(n, 3),
              a = B[0],
              s = B[1],
              c = B[2];
            return (
              t.forEach(function (A, e) {
                r += (0, i.fromCodePoint)(A) + (e >= t.length - 1 ? O : W(t, s, a, e + 1, c));
              }),
              r
            );
          }),
          (function () {
            function A(e, t, r, n) {
              !(function (A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
              })(this, A),
                (this._codePoints = e),
                (this.required = t === O),
                (this.start = r),
                (this.end = n);
            }
            return (
              n(A, [
                {
                  key: "slice",
                  value: function () {
                    return i.fromCodePoint.apply(
                      void 0,
                      (function (A) {
                        if (Array.isArray(A)) {
                          for (var e = 0, t = Array(A.length); e < A.length; e++) t[e] = A[e];
                          return t;
                        }
                        return Array.from(A);
                      })(this._codePoints.slice(this.start, this.end))
                    );
                  },
                },
              ]),
              A
            );
          })());
      e.LineBreaker = function (A, e) {
        var t = (0, i.toCodePoints)(A),
          r = j(t, e),
          n = o(r, 3),
          B = n[0],
          a = n[1],
          s = n[2],
          c = t.length,
          u = 0,
          l = 0;
        return {
          next: function () {
            if (l >= c) return { done: !0 };
            for (var A = L; l < c && (A = W(t, a, B, ++l, s)) === L; );
            if (A !== L || l === c) {
              var e = new q(t, A, u, l);
              return (u = l), { value: e, done: !1 };
            }
            return { done: !0 };
          },
        };
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Trie =
          e.createTrieFromBase64 =
          e.UTRIE2_INDEX_2_MASK =
          e.UTRIE2_INDEX_2_BLOCK_LENGTH =
          e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH =
          e.UTRIE2_INDEX_1_OFFSET =
          e.UTRIE2_UTF8_2B_INDEX_2_LENGTH =
          e.UTRIE2_UTF8_2B_INDEX_2_OFFSET =
          e.UTRIE2_INDEX_2_BMP_LENGTH =
          e.UTRIE2_LSCP_INDEX_2_LENGTH =
          e.UTRIE2_DATA_MASK =
          e.UTRIE2_DATA_BLOCK_LENGTH =
          e.UTRIE2_LSCP_INDEX_2_OFFSET =
          e.UTRIE2_SHIFT_1_2 =
          e.UTRIE2_INDEX_SHIFT =
          e.UTRIE2_SHIFT_1 =
          e.UTRIE2_SHIFT_2 =
            void 0);
      var r = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        n = t(15);
      var o = (e.UTRIE2_SHIFT_2 = 5),
        B = (e.UTRIE2_SHIFT_1 = 11),
        a = (e.UTRIE2_INDEX_SHIFT = 2),
        s = (e.UTRIE2_SHIFT_1_2 = B - o),
        i = (e.UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> o),
        c = (e.UTRIE2_DATA_BLOCK_LENGTH = 1 << o),
        u = (e.UTRIE2_DATA_MASK = c - 1),
        l = (e.UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> o),
        Q = (e.UTRIE2_INDEX_2_BMP_LENGTH = i + l),
        w = (e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = Q),
        g = (e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32),
        d = (e.UTRIE2_INDEX_1_OFFSET = w + g),
        f = (e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> B),
        U = (e.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << s),
        h = (e.UTRIE2_INDEX_2_MASK = U - 1),
        C =
          ((e.createTrieFromBase64 = function (A) {
            var e = (0, n.decode)(A),
              t = Array.isArray(e) ? (0, n.polyUint32Array)(e) : new Uint32Array(e),
              r = Array.isArray(e) ? (0, n.polyUint16Array)(e) : new Uint16Array(e),
              o = r.slice(12, t[4] / 2),
              B = 2 === t[5] ? r.slice((24 + t[4]) / 2) : t.slice(Math.ceil((24 + t[4]) / 4));
            return new C(t[0], t[1], t[2], t[3], o, B);
          }),
          (e.Trie = (function () {
            function A(e, t, r, n, o, B) {
              !(function (A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
              })(this, A),
                (this.initialValue = e),
                (this.errorValue = t),
                (this.highStart = r),
                (this.highValueIndex = n),
                (this.index = o),
                (this.data = B);
            }
            return (
              r(A, [
                {
                  key: "get",
                  value: function (A) {
                    var e = void 0;
                    if (A >= 0) {
                      if (A < 55296 || (A > 56319 && A <= 65535))
                        return (e = ((e = this.index[A >> o]) << a) + (A & u)), this.data[e];
                      if (A <= 65535)
                        return (e = ((e = this.index[i + ((A - 55296) >> o)]) << a) + (A & u)), this.data[e];
                      if (A < this.highStart)
                        return (
                          (e = d - f + (A >> B)),
                          (e = this.index[e]),
                          (e += (A >> o) & h),
                          (e = ((e = this.index[e]) << a) + (A & u)),
                          this.data[e]
                        );
                      if (A <= 1114111) return this.data[this.highValueIndex];
                    }
                    return this.errorValue;
                  },
                },
              ]),
              A
            );
          })()));
    },
    function (A, e, t) {
      "use strict";
      A.exports =
        "KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA";
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = t(8);
      e.default = function A(e, t, n) {
        !(function (A, e) {
          if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, A),
          (this.type = r.PATH.CIRCLE),
          (this.x = e),
          (this.y = t),
          (this.radius = n);
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r,
        n = function (A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function (A, e) {
              var t = [],
                r = !0,
                n = !1,
                o = void 0;
              try {
                for (
                  var B, a = A[Symbol.iterator]();
                  !(r = (B = a.next()).done) && (t.push(B.value), !e || t.length !== e);
                  r = !0
                );
              } catch (A) {
                (n = !0), (o = A);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (n) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        o = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        B = t(3),
        a = (t(27), t(60)),
        s = t(11),
        i = (r = s) && r.__esModule ? r : { default: r },
        c = t(6),
        u = t(14);
      var l = (function () {
        function A(e, t) {
          !(function (A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, A),
            (this.target = e),
            (this.options = t),
            e.render(t);
        }
        return (
          o(A, [
            {
              key: "renderNode",
              value: function (A) {
                A.isVisible() && (this.renderNodeBackgroundAndBorders(A), this.renderNodeContent(A));
              },
            },
            {
              key: "renderNodeContent",
              value: function (A) {
                var e = this,
                  t = function () {
                    if (
                      (A.childNodes.length &&
                        A.childNodes.forEach(function (t) {
                          if (t instanceof i.default) {
                            var r = t.parent.style;
                            e.target.renderTextNode(t.bounds, r.color, r.font, r.textDecoration, r.textShadow);
                          } else e.target.drawShape(t, A.style.color);
                        }),
                      A.image)
                    ) {
                      var t = e.options.imageStore.get(A.image);
                      if (t) {
                        var r = (0, B.calculateContentBox)(A.bounds, A.style.padding, A.style.border),
                          n = "number" == typeof t.width && t.width > 0 ? t.width : r.width,
                          o = "number" == typeof t.height && t.height > 0 ? t.height : r.height;
                        n > 0 &&
                          o > 0 &&
                          e.target.clip([(0, B.calculatePaddingBoxPath)(A.curvedBounds)], function () {
                            e.target.drawImage(t, new B.Bounds(0, 0, n, o), r);
                          });
                      }
                    }
                  },
                  r = A.getClipPaths();
                r.length ? this.target.clip(r, t) : t();
              },
            },
            {
              key: "renderNodeBackgroundAndBorders",
              value: function (A) {
                var e = this,
                  t = !A.style.background.backgroundColor.isTransparent() || A.style.background.backgroundImage.length,
                  r = A.style.border.some(function (A) {
                    return A.borderStyle !== u.BORDER_STYLE.NONE && !A.borderColor.isTransparent();
                  }),
                  n = function () {
                    var r = (0, c.calculateBackgroungPaintingArea)(A.curvedBounds, A.style.background.backgroundClip);
                    t &&
                      e.target.clip([r], function () {
                        A.style.background.backgroundColor.isTransparent() ||
                          e.target.fill(A.style.background.backgroundColor),
                          e.renderBackgroundImage(A);
                      }),
                      A.style.border.forEach(function (t, r) {
                        t.borderStyle === u.BORDER_STYLE.NONE ||
                          t.borderColor.isTransparent() ||
                          e.renderBorder(t, r, A.curvedBounds);
                      });
                  };
                if (t || r) {
                  var o = A.parent ? A.parent.getClipPaths() : [];
                  o.length ? this.target.clip(o, n) : n();
                }
              },
            },
            {
              key: "renderBackgroundImage",
              value: function (A) {
                var e = this;
                A.style.background.backgroundImage
                  .slice(0)
                  .reverse()
                  .forEach(function (t) {
                    "url" === t.source.method && t.source.args.length
                      ? e.renderBackgroundRepeat(A, t)
                      : /gradient/i.test(t.source.method) && e.renderBackgroundGradient(A, t);
                  });
              },
            },
            {
              key: "renderBackgroundRepeat",
              value: function (A, e) {
                var t = this.options.imageStore.get(e.source.args[0]);
                if (t) {
                  var r = (0, c.calculateBackgroungPositioningArea)(
                      A.style.background.backgroundOrigin,
                      A.bounds,
                      A.style.padding,
                      A.style.border
                    ),
                    n = (0, c.calculateBackgroundSize)(e, t, r),
                    o = (0, c.calculateBackgroundPosition)(e.position, n, r),
                    B = (0, c.calculateBackgroundRepeatPath)(e, o, n, r, A.bounds),
                    a = Math.round(r.left + o.x),
                    s = Math.round(r.top + o.y);
                  this.target.renderRepeat(B, t, n, a, s);
                }
              },
            },
            {
              key: "renderBackgroundGradient",
              value: function (A, e) {
                var t = (0, c.calculateBackgroungPositioningArea)(
                    A.style.background.backgroundOrigin,
                    A.bounds,
                    A.style.padding,
                    A.style.border
                  ),
                  r = (0, c.calculateGradientBackgroundSize)(e, t),
                  n = (0, c.calculateBackgroundPosition)(e.position, r, t),
                  o = new B.Bounds(Math.round(t.left + n.x), Math.round(t.top + n.y), r.width, r.height),
                  s = (0, a.parseGradient)(A, e.source, o);
                if (s)
                  switch (s.type) {
                    case a.GRADIENT_TYPE.LINEAR_GRADIENT:
                      this.target.renderLinearGradient(o, s);
                      break;
                    case a.GRADIENT_TYPE.RADIAL_GRADIENT:
                      this.target.renderRadialGradient(o, s);
                  }
              },
            },
            {
              key: "renderBorder",
              value: function (A, e, t) {
                this.target.drawShape((0, B.parsePathForBorder)(t, e), A.borderColor);
              },
            },
            {
              key: "renderStack",
              value: function (A) {
                var e = this;
                if (A.container.isVisible()) {
                  var t = A.getOpacity();
                  t !== this._opacity && (this.target.setOpacity(A.getOpacity()), (this._opacity = t));
                  var r = A.container.style.transform;
                  null !== r
                    ? this.target.transform(
                        A.container.bounds.left + r.transformOrigin[0].value,
                        A.container.bounds.top + r.transformOrigin[1].value,
                        r.transform,
                        function () {
                          return e.renderStackContent(A);
                        }
                      )
                    : this.renderStackContent(A);
                }
              },
            },
            {
              key: "renderStackContent",
              value: function (A) {
                var e = w(A),
                  t = n(e, 5),
                  r = t[0],
                  o = t[1],
                  B = t[2],
                  a = t[3],
                  s = t[4],
                  i = Q(A),
                  c = n(i, 2),
                  u = c[0],
                  l = c[1];
                this.renderNodeBackgroundAndBorders(A.container),
                  r.sort(g).forEach(this.renderStack, this),
                  this.renderNodeContent(A.container),
                  l.forEach(this.renderNode, this),
                  a.forEach(this.renderStack, this),
                  s.forEach(this.renderStack, this),
                  u.forEach(this.renderNode, this),
                  o.forEach(this.renderStack, this),
                  B.sort(g).forEach(this.renderStack, this);
              },
            },
            {
              key: "render",
              value: function (A) {
                return (
                  this.options.backgroundColor &&
                    this.target.rectangle(
                      this.options.x,
                      this.options.y,
                      this.options.width,
                      this.options.height,
                      this.options.backgroundColor
                    ),
                  this.renderStack(A),
                  this.target.getTarget()
                );
              },
            },
          ]),
          A
        );
      })();
      e.default = l;
      var Q = function (A) {
          for (var e = [], t = [], r = A.children.length, n = 0; n < r; n++) {
            var o = A.children[n];
            o.isInlineLevel() ? e.push(o) : t.push(o);
          }
          return [e, t];
        },
        w = function (A) {
          for (var e = [], t = [], r = [], n = [], o = [], B = A.contexts.length, a = 0; a < B; a++) {
            var s = A.contexts[a];
            s.container.isPositioned() || s.container.style.opacity < 1 || s.container.isTransformed()
              ? s.container.style.zIndex.order < 0
                ? e.push(s)
                : s.container.style.zIndex.order > 0
                ? r.push(s)
                : t.push(s)
              : s.container.isFloating()
              ? n.push(s)
              : o.push(s);
          }
          return [e, t, r, n, o];
        },
        g = function (A, e) {
          return A.container.style.zIndex.order > e.container.style.zIndex.order
            ? 1
            : A.container.style.zIndex.order < e.container.style.zIndex.order
            ? -1
            : A.container.index > e.container.index
            ? 1
            : -1;
        };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.transformWebkitRadialGradientArgs =
          e.parseGradient =
          e.RadialGradient =
          e.LinearGradient =
          e.RADIAL_GRADIENT_SHAPE =
          e.GRADIENT_TYPE =
            void 0);
      var r = function (A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function (A, e) {
              var t = [],
                r = !0,
                n = !1,
                o = void 0;
              try {
                for (
                  var B, a = A[Symbol.iterator]();
                  !(r = (B = a.next()).done) && (t.push(B.value), !e || t.length !== e);
                  r = !0
                );
              } catch (A) {
                (n = !0), (o = A);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (n) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        n = (i(t(4)), t(61)),
        o = i(t(1)),
        B = t(2),
        a = i(B),
        s = t(5);
      function i(A) {
        return A && A.__esModule ? A : { default: A };
      }
      function c(A, e) {
        if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      var u = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i,
        l = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i,
        Q = /(px)|%|( 0)$/i,
        w = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i,
        g =
          /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i,
        d = (e.GRADIENT_TYPE = { LINEAR_GRADIENT: 0, RADIAL_GRADIENT: 1 }),
        f = (e.RADIAL_GRADIENT_SHAPE = { CIRCLE: 0, ELLIPSE: 1 }),
        U = {
          left: new a.default("0%"),
          top: new a.default("0%"),
          center: new a.default("50%"),
          right: new a.default("100%"),
          bottom: new a.default("100%"),
        },
        h = (e.LinearGradient = function A(e, t) {
          c(this, A), (this.type = d.LINEAR_GRADIENT), (this.colorStops = e), (this.direction = t);
        }),
        C = (e.RadialGradient = function A(e, t, r, n) {
          c(this, A),
            (this.type = d.RADIAL_GRADIENT),
            (this.colorStops = e),
            (this.shape = t),
            (this.center = r),
            (this.radius = n);
        }),
        F =
          ((e.parseGradient = function (A, e, t) {
            var r = e.args,
              n = e.method,
              o = e.prefix;
            return "linear-gradient" === n
              ? E(r, t, !!o)
              : "gradient" === n && "linear" === r[0]
              ? E(["to bottom"].concat(K(r.slice(3))), t, !!o)
              : "radial-gradient" === n
              ? H(A, "-webkit-" === o ? I(r) : r, t)
              : "gradient" === n && "radial" === r[0]
              ? H(A, K(I(r.slice(1))), t)
              : void 0;
          }),
          function (A, e, t) {
            for (var r = [], n = e; n < A.length; n++) {
              var B = A[n],
                s = Q.test(B),
                i = B.lastIndexOf(" "),
                c = new o.default(s ? B.substring(0, i) : B),
                u = s
                  ? new a.default(B.substring(i + 1))
                  : n === e
                  ? new a.default("0%")
                  : n === A.length - 1
                  ? new a.default("100%")
                  : null;
              r.push({ color: c, stop: u });
            }
            for (
              var l = r.map(function (A) {
                  var e = A.color,
                    r = A.stop;
                  return { color: e, stop: 0 === t ? 0 : r ? r.getAbsoluteValue(t) / t : null };
                }),
                w = l[0].stop,
                g = 0;
              g < l.length;
              g++
            )
              if (null !== w) {
                var d = l[g].stop;
                if (null === d) {
                  for (var f = g; null === l[f].stop; ) f++;
                  for (var U = f - g + 1, h = (l[f].stop - w) / U; g < f; g++) w = l[g].stop = w + h;
                } else w = d;
              }
            return l;
          }),
        E = function (A, e, t) {
          var r = (0, n.parseAngle)(A[0]),
            o = u.test(A[0]),
            B = o || null !== r || l.test(A[0]),
            a = B ? (null !== r ? p(t ? r - 0.5 * Math.PI : r, e) : o ? y(A[0], e) : N(A[0], e)) : p(Math.PI, e),
            i = B ? 1 : 0,
            c = Math.min(
              (0, s.distance)(Math.abs(a.x0) + Math.abs(a.x1), Math.abs(a.y0) + Math.abs(a.y1)),
              2 * e.width,
              2 * e.height
            );
          return new h(F(A, i, c), a);
        },
        H = function (A, e, t) {
          var r = e[0].match(g),
            n = r && ("circle" === r[1] || (void 0 !== r[3] && void 0 === r[5])) ? f.CIRCLE : f.ELLIPSE,
            o = {},
            a = {};
          r &&
            (void 0 !== r[3] &&
              (o.x = (0, B.calculateLengthFromValueWithUnit)(A, r[3], r[4]).getAbsoluteValue(t.width)),
            void 0 !== r[5] &&
              (o.y = (0, B.calculateLengthFromValueWithUnit)(A, r[5], r[6]).getAbsoluteValue(t.height)),
            r[7]
              ? (a.x = U[r[7].toLowerCase()])
              : void 0 !== r[8] && (a.x = (0, B.calculateLengthFromValueWithUnit)(A, r[8], r[9])),
            r[10]
              ? (a.y = U[r[10].toLowerCase()])
              : void 0 !== r[11] && (a.y = (0, B.calculateLengthFromValueWithUnit)(A, r[11], r[12])));
          var s = {
              x: void 0 === a.x ? t.width / 2 : a.x.getAbsoluteValue(t.width),
              y: void 0 === a.y ? t.height / 2 : a.y.getAbsoluteValue(t.height),
            },
            i = m((r && r[2]) || "farthest-corner", n, s, o, t);
          return new C(F(e, r ? 1 : 0, Math.min(i.x, i.y)), n, s, i);
        },
        p = function (A, e) {
          var t = e.width,
            r = e.height,
            n = 0.5 * t,
            o = 0.5 * r,
            B = (Math.abs(t * Math.sin(A)) + Math.abs(r * Math.cos(A))) / 2,
            a = n + Math.sin(A) * B,
            s = o - Math.cos(A) * B;
          return { x0: a, x1: t - a, y0: s, y1: r - s };
        },
        v = function (A) {
          return Math.acos(A.width / 2 / ((0, s.distance)(A.width, A.height) / 2));
        },
        y = function (A, e) {
          switch (A) {
            case "bottom":
            case "to top":
              return p(0, e);
            case "left":
            case "to right":
              return p(Math.PI / 2, e);
            case "right":
            case "to left":
              return p((3 * Math.PI) / 2, e);
            case "top right":
            case "right top":
            case "to bottom left":
            case "to left bottom":
              return p(Math.PI + v(e), e);
            case "top left":
            case "left top":
            case "to bottom right":
            case "to right bottom":
              return p(Math.PI - v(e), e);
            case "bottom left":
            case "left bottom":
            case "to top right":
            case "to right top":
              return p(v(e), e);
            case "bottom right":
            case "right bottom":
            case "to top left":
            case "to left top":
              return p(2 * Math.PI - v(e), e);
            case "top":
            case "to bottom":
            default:
              return p(Math.PI, e);
          }
        },
        N = function (A, e) {
          var t = A.split(" ").map(parseFloat),
            n = r(t, 2),
            o = n[0],
            B = n[1],
            a = ((o / 100) * e.width) / ((B / 100) * e.height);
          return p(Math.atan(isNaN(a) ? 1 : a) + Math.PI / 2, e);
        },
        b = function (A, e, t, r) {
          return [
            { x: 0, y: 0 },
            { x: 0, y: A.height },
            { x: A.width, y: 0 },
            { x: A.width, y: A.height },
          ].reduce(
            function (A, n) {
              var o = (0, s.distance)(e - n.x, t - n.y);
              return (r ? o < A.optimumDistance : o > A.optimumDistance) ? { optimumCorner: n, optimumDistance: o } : A;
            },
            { optimumDistance: r ? 1 / 0 : -1 / 0, optimumCorner: null }
          ).optimumCorner;
        },
        m = function (A, e, t, r, n) {
          var o = t.x,
            B = t.y,
            a = 0,
            i = 0;
          switch (A) {
            case "closest-side":
              e === f.CIRCLE
                ? (a = i = Math.min(Math.abs(o), Math.abs(o - n.width), Math.abs(B), Math.abs(B - n.height)))
                : e === f.ELLIPSE &&
                  ((a = Math.min(Math.abs(o), Math.abs(o - n.width))),
                  (i = Math.min(Math.abs(B), Math.abs(B - n.height))));
              break;
            case "closest-corner":
              if (e === f.CIRCLE)
                a = i = Math.min(
                  (0, s.distance)(o, B),
                  (0, s.distance)(o, B - n.height),
                  (0, s.distance)(o - n.width, B),
                  (0, s.distance)(o - n.width, B - n.height)
                );
              else if (e === f.ELLIPSE) {
                var c = Math.min(Math.abs(B), Math.abs(B - n.height)) / Math.min(Math.abs(o), Math.abs(o - n.width)),
                  u = b(n, o, B, !0);
                i = c * (a = (0, s.distance)(u.x - o, (u.y - B) / c));
              }
              break;
            case "farthest-side":
              e === f.CIRCLE
                ? (a = i = Math.max(Math.abs(o), Math.abs(o - n.width), Math.abs(B), Math.abs(B - n.height)))
                : e === f.ELLIPSE &&
                  ((a = Math.max(Math.abs(o), Math.abs(o - n.width))),
                  (i = Math.max(Math.abs(B), Math.abs(B - n.height))));
              break;
            case "farthest-corner":
              if (e === f.CIRCLE)
                a = i = Math.max(
                  (0, s.distance)(o, B),
                  (0, s.distance)(o, B - n.height),
                  (0, s.distance)(o - n.width, B),
                  (0, s.distance)(o - n.width, B - n.height)
                );
              else if (e === f.ELLIPSE) {
                var l = Math.max(Math.abs(B), Math.abs(B - n.height)) / Math.max(Math.abs(o), Math.abs(o - n.width)),
                  Q = b(n, o, B, !1);
                i = l * (a = (0, s.distance)(Q.x - o, (Q.y - B) / l));
              }
              break;
            default:
              (a = r.x || 0), (i = void 0 !== r.y ? r.y : a);
          }
          return { x: a, y: i };
        },
        I = (e.transformWebkitRadialGradientArgs = function (A) {
          var e = "",
            t = "",
            r = "",
            n = "",
            o = 0,
            B = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i,
            a = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i,
            s = A[o].match(B);
          s && o++;
          var i = A[o].match(
            /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i
          );
          i &&
            ((e = i[1] || ""),
            "contain" === (r = i[2] || "") ? (r = "closest-side") : "cover" === r && (r = "farthest-corner"),
            o++);
          var c = A[o].match(a);
          c && o++;
          var u = A[o].match(B);
          u && o++;
          var l = A[o].match(a);
          l && o++;
          var Q = u || s;
          Q &&
            Q[1] &&
            ((n = Q[1] + (/^\d+$/.test(Q[1]) ? "px" : "")),
            Q[2] && (n += " " + Q[2] + (/^\d+$/.test(Q[2]) ? "px" : "")));
          var w = l || c;
          return (
            w && ((t = w[0]), w[1] || (t += "px")),
            !n || e || t || r || ((t = n), (n = "")),
            n && (n = "at " + n),
            [
              [e, r, t, n]
                .filter(function (A) {
                  return !!A;
                })
                .join(" "),
            ].concat(A.slice(o))
          );
        }),
        K = function (A) {
          return A.map(function (A) {
            return A.match(w);
          }).map(function (e, t) {
            if (!e) return A[t];
            switch (e[1]) {
              case "from":
                return e[4] + " 0%";
              case "to":
                return e[4] + " 100%";
              case "color-stop":
                return "%" === e[3] ? e[4] + " " + e[2] : e[4] + " " + 100 * parseFloat(e[2]) + "%";
            }
          });
        };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;
      e.parseAngle = function (A) {
        var e = A.match(r);
        if (e) {
          var t = parseFloat(e[1]);
          switch (e[2].toLowerCase()) {
            case "deg":
              return (Math.PI * t) / 180;
            case "grad":
              return (Math.PI / 200) * t;
            case "rad":
              return t;
            case "turn":
              return 2 * Math.PI * t;
          }
        }
        return null;
      };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.cloneWindow = e.DocumentCloner = void 0);
      var r = function (A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function (A, e) {
              var t = [],
                r = !0,
                n = !1,
                o = void 0;
              try {
                for (
                  var B, a = A[Symbol.iterator]();
                  !(r = (B = a.next()).done) && (t.push(B.value), !e || t.length !== e);
                  r = !0
                );
              } catch (A) {
                (n = !0), (o = A);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (n) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        n = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        o = t(3),
        B = t(28),
        a = l(t(63)),
        s = t(5),
        i = t(6),
        c = l(t(17)),
        u = t(64);
      function l(A) {
        return A && A.__esModule ? A : { default: A };
      }
      var Q = (e.DocumentCloner = (function () {
          function A(e, t, r, n, o) {
            !(function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, A),
              (this.referenceElement = e),
              (this.scrolledElements = []),
              (this.copyStyles = n),
              (this.inlineImages = n),
              (this.logger = r),
              (this.options = t),
              (this.renderer = o),
              (this.resourceLoader = new a.default(t, r, window)),
              (this.pseudoContentData = { counters: {}, quoteDepth: 0 }),
              (this.documentElement = this.cloneNode(e.ownerDocument.documentElement));
          }
          return (
            n(A, [
              {
                key: "inlineAllImages",
                value: function (A) {
                  var e = this;
                  if (this.inlineImages && A) {
                    var t = A.style;
                    Promise.all(
                      (0, i.parseBackgroundImage)(t.backgroundImage).map(function (A) {
                        return "url" === A.method
                          ? e.resourceLoader
                              .inlineImage(A.args[0])
                              .then(function (A) {
                                return A && "string" == typeof A.src ? 'url("' + A.src + '")' : "none";
                              })
                              .catch(function (A) {
                                0;
                              })
                          : Promise.resolve("" + A.prefix + A.method + "(" + A.args.join(",") + ")");
                      })
                    ).then(function (A) {
                      A.length > 1 && (t.backgroundColor = ""), (t.backgroundImage = A.join(","));
                    }),
                      A instanceof HTMLImageElement &&
                        this.resourceLoader
                          .inlineImage(A.src)
                          .then(function (e) {
                            if (e && A instanceof HTMLImageElement && A.parentNode) {
                              var t = A.parentNode,
                                r = (0, s.copyCSSStyles)(A.style, e.cloneNode(!1));
                              t.replaceChild(r, A);
                            }
                          })
                          .catch(function (A) {
                            0;
                          });
                  }
                },
              },
              {
                key: "inlineFonts",
                value: function (A) {
                  var e = this;
                  return Promise.all(
                    Array.from(A.styleSheets).map(function (e) {
                      return e.href
                        ? fetch(e.href)
                            .then(function (A) {
                              return A.text();
                            })
                            .then(function (A) {
                              return g(A, e.href);
                            })
                            .catch(function (A) {
                              return [];
                            })
                        : w(e, A);
                    })
                  )
                    .then(function (A) {
                      return A.reduce(function (A, e) {
                        return A.concat(e);
                      }, []);
                    })
                    .then(function (A) {
                      return Promise.all(
                        A.map(function (A) {
                          return fetch(A.formats[0].src)
                            .then(function (A) {
                              return A.blob();
                            })
                            .then(function (A) {
                              return new Promise(function (e, t) {
                                var r = new FileReader();
                                (r.onerror = t),
                                  (r.onload = function () {
                                    var A = r.result;
                                    e(A);
                                  }),
                                  r.readAsDataURL(A);
                              });
                            })
                            .then(function (e) {
                              return (
                                A.fontFace.setProperty("src", 'url("' + e + '")'),
                                "@font-face {" + A.fontFace.cssText + " "
                              );
                            });
                        })
                      );
                    })
                    .then(function (t) {
                      var r = A.createElement("style");
                      (r.textContent = t.join("\n")), e.documentElement.appendChild(r);
                    });
                },
              },
              {
                key: "createElementClone",
                value: function (A) {
                  var e = this;
                  if (this.copyStyles && A instanceof HTMLCanvasElement) {
                    var t = A.ownerDocument.createElement("img");
                    try {
                      return (t.src = A.toDataURL()), t;
                    } catch (A) {
                      0;
                    }
                  }
                  if (A instanceof HTMLIFrameElement) {
                    var r = A.cloneNode(!1),
                      n = v();
                    r.setAttribute("data-html2canvas-internal-iframe-key", n);
                    var B = (0, o.parseBounds)(A, 0, 0),
                      a = B.width,
                      i = B.height;
                    return (
                      (this.resourceLoader.cache[n] = N(A, this.options)
                        .then(function (A) {
                          return e.renderer(
                            A,
                            {
                              async: e.options.async,
                              allowTaint: e.options.allowTaint,
                              backgroundColor: "#ffffff",
                              canvas: null,
                              imageTimeout: e.options.imageTimeout,
                              logging: e.options.logging,
                              proxy: e.options.proxy,
                              removeContainer: e.options.removeContainer,
                              scale: e.options.scale,
                              foreignObjectRendering: e.options.foreignObjectRendering,
                              useCORS: e.options.useCORS,
                              target: new c.default(),
                              width: a,
                              height: i,
                              x: 0,
                              y: 0,
                              windowWidth: A.ownerDocument.defaultView.innerWidth,
                              windowHeight: A.ownerDocument.defaultView.innerHeight,
                              scrollX: A.ownerDocument.defaultView.pageXOffset,
                              scrollY: A.ownerDocument.defaultView.pageYOffset,
                            },
                            e.logger.child(n)
                          );
                        })
                        .then(function (e) {
                          return new Promise(function (t, n) {
                            var o = document.createElement("img");
                            (o.onload = function () {
                              return t(e);
                            }),
                              (o.onerror = n),
                              (o.src = e.toDataURL()),
                              r.parentNode &&
                                r.parentNode.replaceChild(
                                  (0, s.copyCSSStyles)(A.ownerDocument.defaultView.getComputedStyle(A), o),
                                  r
                                );
                          });
                        })),
                      r
                    );
                  }
                  if (A instanceof HTMLStyleElement && A.sheet && A.sheet.cssRules) {
                    var u = [].slice.call(A.sheet.cssRules, 0).reduce(function (A, t) {
                        try {
                          return t && t.cssText ? A + t.cssText : A;
                        } catch (r) {
                          return e.logger.log("Unable to access cssText property", t.name), A;
                        }
                      }, ""),
                      l = A.cloneNode(!1);
                    return (l.textContent = u), l;
                  }
                  return A.cloneNode(!1);
                },
              },
              {
                key: "cloneNode",
                value: function (A) {
                  var e =
                      A.nodeType === Node.TEXT_NODE ? document.createTextNode(A.nodeValue) : this.createElementClone(A),
                    t = A.ownerDocument.defaultView,
                    r = A instanceof t.HTMLElement ? t.getComputedStyle(A) : null,
                    n = A instanceof t.HTMLElement ? t.getComputedStyle(A, ":before") : null,
                    o = A instanceof t.HTMLElement ? t.getComputedStyle(A, ":after") : null;
                  this.referenceElement === A && e instanceof t.HTMLElement && (this.clonedReferenceElement = e),
                    e instanceof t.HTMLBodyElement && E(e);
                  for (
                    var B = (0, u.parseCounterReset)(r, this.pseudoContentData),
                      a = (0, u.resolvePseudoContent)(A, n, this.pseudoContentData),
                      i = A.firstChild;
                    i;
                    i = i.nextSibling
                  )
                    (i.nodeType === Node.ELEMENT_NODE &&
                      ("SCRIPT" === i.nodeName ||
                        i.hasAttribute("data-html2canvas-ignore") ||
                        ("function" == typeof this.options.ignoreElements && this.options.ignoreElements(i)))) ||
                      (this.copyStyles && "STYLE" === i.nodeName) ||
                      e.appendChild(this.cloneNode(i));
                  var c = (0, u.resolvePseudoContent)(A, o, this.pseudoContentData);
                  if (
                    ((0, u.popCounters)(B, this.pseudoContentData),
                    A instanceof t.HTMLElement && e instanceof t.HTMLElement)
                  )
                    switch (
                      (n && this.inlineAllImages(f(A, e, n, a, U)),
                      o && this.inlineAllImages(f(A, e, o, c, h)),
                      !r || !this.copyStyles || A instanceof HTMLIFrameElement || (0, s.copyCSSStyles)(r, e),
                      this.inlineAllImages(e),
                      (0 === A.scrollTop && 0 === A.scrollLeft) ||
                        this.scrolledElements.push([e, A.scrollLeft, A.scrollTop]),
                      A.nodeName)
                    ) {
                      case "CANVAS":
                        this.copyStyles || d(A, e);
                        break;
                      case "TEXTAREA":
                      case "SELECT":
                        e.value = A.value;
                    }
                  return e;
                },
              },
            ]),
            A
          );
        })()),
        w = function (A, e) {
          return (A.cssRules ? Array.from(A.cssRules) : [])
            .filter(function (A) {
              return A.type === CSSRule.FONT_FACE_RULE;
            })
            .map(function (A) {
              for (
                var t = (0, i.parseBackgroundImage)(A.style.getPropertyValue("src")), r = [], n = 0;
                n < t.length;
                n++
              )
                if ("url" === t[n].method && t[n + 1] && "format" === t[n + 1].method) {
                  var o = e.createElement("a");
                  (o.href = t[n].args[0]), e.body && e.body.appendChild(o);
                  var B = { src: o.href, format: t[n + 1].args[0] };
                  r.push(B);
                }
              return {
                formats: r.filter(function (A) {
                  return /^woff/i.test(A.format);
                }),
                fontFace: A.style,
              };
            })
            .filter(function (A) {
              return A.formats.length;
            });
        },
        g = function (A, e) {
          var t = document.implementation.createHTMLDocument(""),
            r = document.createElement("base");
          r.href = e;
          var n = document.createElement("style");
          return (
            (n.textContent = A),
            t.head && t.head.appendChild(r),
            t.body && t.body.appendChild(n),
            n.sheet ? w(n.sheet, t) : []
          );
        },
        d = function (A, e) {
          try {
            if (e) {
              (e.width = A.width), (e.height = A.height);
              var t = A.getContext("2d"),
                r = e.getContext("2d");
              t ? r.putImageData(t.getImageData(0, 0, A.width, A.height), 0, 0) : r.drawImage(A, 0, 0);
            }
          } catch (A) {}
        },
        f = function (A, e, t, r, n) {
          if (t && t.content && "none" !== t.content && "-moz-alt-content" !== t.content && "none" !== t.display) {
            var o = e.ownerDocument.createElement("html2canvaspseudoelement");
            if (((0, s.copyCSSStyles)(t, o), r))
              for (var B = r.length, a = 0; a < B; a++) {
                var c = r[a];
                switch (c.type) {
                  case u.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var l = e.ownerDocument.createElement("img");
                    (l.src = (0, i.parseBackgroundImage)("url(" + c.value + ")")[0].args[0]),
                      (l.style.opacity = "1"),
                      o.appendChild(l);
                    break;
                  case u.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    o.appendChild(e.ownerDocument.createTextNode(c.value));
                }
              }
            return (
              (o.className = C + " " + F),
              (e.className += n === U ? " " + C : " " + F),
              n === U ? e.insertBefore(o, e.firstChild) : e.appendChild(o),
              o
            );
          }
        },
        U = ":before",
        h = ":after",
        C = "___html2canvas___pseudoelement_before",
        F = "___html2canvas___pseudoelement_after",
        E = function (A) {
          H(
            A,
            "." +
              C +
              U +
              '{\n    content: "" !important;\n    display: none !important;\n}\n         .' +
              F +
              h +
              '{\n    content: "" !important;\n    display: none !important;\n}'
          );
        },
        H = function (A, e) {
          var t = A.ownerDocument.createElement("style");
          (t.innerHTML = e), A.appendChild(t);
        },
        p = function (A) {
          var e = r(A, 3),
            t = e[0],
            n = e[1],
            o = e[2];
          (t.scrollLeft = n), (t.scrollTop = o);
        },
        v = function () {
          return Math.ceil(Date.now() + 1e7 * Math.random()).toString(16);
        },
        y = /^data:text\/(.+);(base64)?,(.*)$/i,
        N = function (A, e) {
          try {
            return Promise.resolve(A.contentWindow.document.documentElement);
          } catch (t) {
            return e.proxy
              ? (0, B.Proxy)(A.src, e)
                  .then(function (A) {
                    var e = A.match(y);
                    return e
                      ? "base64" === e[2]
                        ? window.atob(decodeURIComponent(e[3]))
                        : decodeURIComponent(e[3])
                      : Promise.reject();
                  })
                  .then(function (e) {
                    return b(A.ownerDocument, (0, o.parseBounds)(A, 0, 0)).then(function (A) {
                      var t = A.contentWindow.document;
                      t.open(), t.write(e);
                      var r = m(A).then(function () {
                        return t.documentElement;
                      });
                      return t.close(), r;
                    });
                  })
              : Promise.reject();
          }
        },
        b = function (A, e) {
          var t = A.createElement("iframe");
          return (
            (t.className = "html2canvas-container"),
            (t.style.visibility = "hidden"),
            (t.style.position = "fixed"),
            (t.style.left = "-10000px"),
            (t.style.top = "0px"),
            (t.style.border = "0"),
            (t.width = e.width.toString()),
            (t.height = e.height.toString()),
            (t.scrolling = "no"),
            t.setAttribute("data-html2canvas-ignore", "true"),
            A.body ? (A.body.appendChild(t), Promise.resolve(t)) : Promise.reject("")
          );
        },
        m = function (A) {
          var e = A.contentWindow,
            t = e.document;
          return new Promise(function (r, n) {
            e.onload =
              A.onload =
              t.onreadystatechange =
                function () {
                  var e = setInterval(function () {
                    t.body.childNodes.length > 0 && "complete" === t.readyState && (clearInterval(e), r(A));
                  }, 50);
                };
          });
        },
        I =
          ((e.cloneWindow = function (A, e, t, r, n, o) {
            var B = new Q(t, r, n, !1, o),
              a = A.defaultView.pageXOffset,
              s = A.defaultView.pageYOffset;
            return b(A, e).then(function (n) {
              var o = n.contentWindow,
                i = o.document,
                c = m(n).then(function () {
                  B.scrolledElements.forEach(p),
                    o.scrollTo(e.left, e.top),
                    !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
                      (o.scrollY === e.top && o.scrollX === e.left) ||
                      ((i.documentElement.style.top = -e.top + "px"),
                      (i.documentElement.style.left = -e.left + "px"),
                      (i.documentElement.style.position = "absolute"));
                  var t = Promise.resolve([n, B.clonedReferenceElement, B.resourceLoader]),
                    a = r.onclone;
                  return B.clonedReferenceElement instanceof o.HTMLElement ||
                    B.clonedReferenceElement instanceof A.defaultView.HTMLElement ||
                    B.clonedReferenceElement instanceof HTMLElement
                    ? "function" == typeof a
                      ? Promise.resolve()
                          .then(function () {
                            return a(i);
                          })
                          .then(function () {
                            return t;
                          })
                      : t
                    : Promise.reject("");
                });
              return (
                i.open(),
                i.write(I(document.doctype) + "<html></html>"),
                (function (A, e, t) {
                  !A.defaultView ||
                    (e === A.defaultView.pageXOffset && t === A.defaultView.pageYOffset) ||
                    A.defaultView.scrollTo(e, t);
                })(t.ownerDocument, a, s),
                i.replaceChild(i.adoptNode(B.documentElement), i.documentElement),
                i.close(),
                c
              );
            });
          }),
          function (A) {
            var e = "";
            return (
              A &&
                ((e += "<!DOCTYPE "),
                A.name && (e += A.name),
                A.internalSubset && (e += A.internalSubset),
                A.publicId && (e += '"' + A.publicId + '"'),
                A.systemId && (e += '"' + A.systemId + '"'),
                (e += ">")),
              e
            );
          });
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.ResourceStore = void 0);
      var r,
        n = (function () {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(A, r.key, r);
            }
          }
          return function (e, t, r) {
            return t && A(e.prototype, t), r && A(e, r), e;
          };
        })(),
        o = t(12),
        B = (r = o) && r.__esModule ? r : { default: r },
        a = t(28);
      function s(A, e) {
        if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      var i = (function () {
        function A(e, t, r) {
          s(this, A),
            (this.options = e),
            (this._window = r),
            (this.origin = this.getOrigin(r.location.href)),
            (this.cache = {}),
            (this.logger = t),
            (this._index = 0);
        }
        return (
          n(A, [
            {
              key: "loadImage",
              value: function (A) {
                var e = this;
                if (this.hasResourceInCache(A)) return A;
                if (d(A)) return (this.cache[A] = U(A, this.options.imageTimeout || 0)), A;
                if (!f(A) || B.default.SUPPORT_SVG_DRAWING) {
                  if (!0 === this.options.allowTaint || w(A) || this.isSameOrigin(A)) return this.addImage(A, A, !1);
                  if (!this.isSameOrigin(A)) {
                    if ("string" == typeof this.options.proxy)
                      return (
                        (this.cache[A] = (0, a.Proxy)(A, this.options).then(function (A) {
                          return U(A, e.options.imageTimeout || 0);
                        })),
                        A
                      );
                    if (!0 === this.options.useCORS && B.default.SUPPORT_CORS_IMAGES) return this.addImage(A, A, !0);
                  }
                }
              },
            },
            {
              key: "inlineImage",
              value: function (A) {
                var e = this;
                return w(A)
                  ? U(A, this.options.imageTimeout || 0)
                  : this.hasResourceInCache(A)
                  ? this.cache[A]
                  : this.isSameOrigin(A) || "string" != typeof this.options.proxy
                  ? this.xhrImage(A)
                  : (this.cache[A] = (0, a.Proxy)(A, this.options).then(function (A) {
                      return U(A, e.options.imageTimeout || 0);
                    }));
              },
            },
            {
              key: "xhrImage",
              value: function (A) {
                var e = this;
                return (
                  (this.cache[A] = new Promise(function (t, r) {
                    var n = new XMLHttpRequest();
                    if (
                      ((n.onreadystatechange = function () {
                        if (4 === n.readyState)
                          if (200 !== n.status)
                            r("Failed to fetch image " + A.substring(0, 256) + " with status code " + n.status);
                          else {
                            var e = new FileReader();
                            e.addEventListener(
                              "load",
                              function () {
                                var A = e.result;
                                t(A);
                              },
                              !1
                            ),
                              e.addEventListener(
                                "error",
                                function (A) {
                                  return r(A);
                                },
                                !1
                              ),
                              e.readAsDataURL(n.response);
                          }
                      }),
                      (n.responseType = "blob"),
                      e.options.imageTimeout)
                    ) {
                      var o = e.options.imageTimeout;
                      (n.timeout = o),
                        (n.ontimeout = function () {
                          return r("");
                        });
                    }
                    n.open("GET", A, !0), n.send();
                  }).then(function (A) {
                    return U(A, e.options.imageTimeout || 0);
                  })),
                  this.cache[A]
                );
              },
            },
            {
              key: "loadCanvas",
              value: function (A) {
                var e = String(this._index++);
                return (this.cache[e] = Promise.resolve(A)), e;
              },
            },
            {
              key: "hasResourceInCache",
              value: function (A) {
                return void 0 !== this.cache[A];
              },
            },
            {
              key: "addImage",
              value: function (A, e, t) {
                var r = this;
                var n = function (A) {
                  return new Promise(function (n, o) {
                    var B = new Image();
                    if (
                      ((B.onload = function () {
                        return n(B);
                      }),
                      (A && !t) || (B.crossOrigin = "anonymous"),
                      (B.onerror = o),
                      (B.src = e),
                      !0 === B.complete &&
                        setTimeout(function () {
                          n(B);
                        }, 500),
                      r.options.imageTimeout)
                    ) {
                      var a = r.options.imageTimeout;
                      setTimeout(function () {
                        return o("");
                      }, a);
                    }
                  });
                };
                return (this.cache[A] = g(e) && !f(e) ? B.default.SUPPORT_BASE64_DRAWING(e).then(n) : n(!0)), A;
              },
            },
            {
              key: "isSameOrigin",
              value: function (A) {
                return this.getOrigin(A) === this.origin;
              },
            },
            {
              key: "getOrigin",
              value: function (A) {
                var e = this._link || (this._link = this._window.document.createElement("a"));
                return (e.href = A), (e.href = e.href), e.protocol + e.hostname + e.port;
              },
            },
            {
              key: "ready",
              value: function () {
                var A = this,
                  e = Object.keys(this.cache),
                  t = e.map(function (e) {
                    return A.cache[e].catch(function (A) {
                      return null;
                    });
                  });
                return Promise.all(t).then(function (A) {
                  return new c(e, A);
                });
              },
            },
          ]),
          A
        );
      })();
      e.default = i;
      var c = (e.ResourceStore = (function () {
          function A(e, t) {
            s(this, A), (this._keys = e), (this._resources = t);
          }
          return (
            n(A, [
              {
                key: "get",
                value: function (A) {
                  var e = this._keys.indexOf(A);
                  return -1 === e ? null : this._resources[e];
                },
              },
            ]),
            A
          );
        })()),
        u = /^data:image\/svg\+xml/i,
        l = /^data:image\/.*;base64,/i,
        Q = /^data:image\/.*/i,
        w = function (A) {
          return Q.test(A);
        },
        g = function (A) {
          return l.test(A);
        },
        d = function (A) {
          return "blob" === A.substr(0, 4);
        },
        f = function (A) {
          return "svg" === A.substr(-3).toLowerCase() || u.test(A);
        },
        U = function (A, e) {
          return new Promise(function (t, r) {
            var n = new Image();
            (n.onload = function () {
              return t(n);
            }),
              (n.onerror = r),
              (n.src = A),
              !0 === n.complete &&
                setTimeout(function () {
                  t(n);
                }, 500),
              e &&
                setTimeout(function () {
                  return r("");
                }, e);
          });
        };
    },
    function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.parseContent =
          e.resolvePseudoContent =
          e.popCounters =
          e.parseCounterReset =
          e.TOKEN_TYPE =
          e.PSEUDO_CONTENT_ITEM_TYPE =
            void 0);
      var r = function (A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function (A, e) {
              var t = [],
                r = !0,
                n = !1,
                o = void 0;
              try {
                for (
                  var B, a = A[Symbol.iterator]();
                  !(r = (B = a.next()).done) && (t.push(B.value), !e || t.length !== e);
                  r = !0
                );
              } catch (A) {
                (n = !0), (o = A);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (n) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        n = t(16),
        o = t(10),
        B = (e.PSEUDO_CONTENT_ITEM_TYPE = { TEXT: 0, IMAGE: 1 }),
        a = (e.TOKEN_TYPE = { STRING: 0, ATTRIBUTE: 1, URL: 2, COUNTER: 3, COUNTERS: 4, OPENQUOTE: 5, CLOSEQUOTE: 6 }),
        s =
          ((e.parseCounterReset = function (A, e) {
            if (!A || !A.counterReset || "none" === A.counterReset) return [];
            for (var t = [], n = A.counterReset.split(/\s*,\s*/), o = n.length, B = 0; B < o; B++) {
              var a = n[B].split(/\s+/),
                s = r(a, 2),
                i = s[0],
                c = s[1];
              t.push(i);
              var u = e.counters[i];
              u || (u = e.counters[i] = []), u.push(parseInt(c || 0, 10));
            }
            return t;
          }),
          (e.popCounters = function (A, e) {
            for (var t = A.length, r = 0; r < t; r++) e.counters[A[r]].pop();
          }),
          (e.resolvePseudoContent = function (A, e, t) {
            if (!e || !e.content || "none" === e.content || "-moz-alt-content" === e.content || "none" === e.display)
              return null;
            var n = s(e.content),
              o = n.length,
              i = [],
              l = "",
              Q = e.counterIncrement;
            if (Q && "none" !== Q) {
              var w = Q.split(/\s+/),
                g = r(w, 2),
                d = g[0],
                f = g[1],
                U = t.counters[d];
              U && (U[U.length - 1] += void 0 === f ? 1 : parseInt(f, 10));
            }
            for (var h = 0; h < o; h++) {
              var C = n[h];
              switch (C.type) {
                case a.STRING:
                  l += C.value || "";
                  break;
                case a.ATTRIBUTE:
                  A instanceof HTMLElement && C.value && (l += A.getAttribute(C.value) || "");
                  break;
                case a.COUNTER:
                  var F = t.counters[C.name || ""];
                  F && (l += u([F[F.length - 1]], "", C.format));
                  break;
                case a.COUNTERS:
                  var E = t.counters[C.name || ""];
                  E && (l += u(E, C.glue, C.format));
                  break;
                case a.OPENQUOTE:
                  (l += c(e, !0, t.quoteDepth)), t.quoteDepth++;
                  break;
                case a.CLOSEQUOTE:
                  t.quoteDepth--, (l += c(e, !1, t.quoteDepth));
                  break;
                case a.URL:
                  l && (i.push({ type: B.TEXT, value: l }), (l = "")), i.push({ type: B.IMAGE, value: C.value || "" });
              }
            }
            return l && i.push({ type: B.TEXT, value: l }), i;
          }),
          (e.parseContent = function (A, e) {
            if (e && e[A]) return e[A];
            for (var t = [], r = A.length, n = !1, o = !1, B = !1, s = "", c = "", u = [], l = 0; l < r; l++) {
              var Q = A.charAt(l);
              switch (Q) {
                case "'":
                case '"':
                  o ? (s += Q) : ((n = !n), B || n || (t.push({ type: a.STRING, value: s }), (s = "")));
                  break;
                case "\\":
                  o ? ((s += Q), (o = !1)) : (o = !0);
                  break;
                case "(":
                  n ? (s += Q) : ((B = !0), (c = s), (s = ""), (u = []));
                  break;
                case ")":
                  if (n) s += Q;
                  else if (B) {
                    switch ((s && u.push(s), c)) {
                      case "attr":
                        u.length > 0 && t.push({ type: a.ATTRIBUTE, value: u[0] });
                        break;
                      case "counter":
                        if (u.length > 0) {
                          var w = { type: a.COUNTER, name: u[0] };
                          u.length > 1 && (w.format = u[1]), t.push(w);
                        }
                        break;
                      case "counters":
                        if (u.length > 0) {
                          var g = { type: a.COUNTERS, name: u[0] };
                          u.length > 1 && (g.glue = u[1]), u.length > 2 && (g.format = u[2]), t.push(g);
                        }
                        break;
                      case "url":
                        u.length > 0 && t.push({ type: a.URL, value: u[0] });
                    }
                    (B = !1), (s = "");
                  }
                  break;
                case ",":
                  n ? (s += Q) : B && (u.push(s), (s = ""));
                  break;
                case " ":
                case "\t":
                  n ? (s += Q) : s && (i(t, s), (s = ""));
                  break;
                default:
                  s += Q;
              }
              "\\" !== Q && (o = !1);
            }
            return s && i(t, s), e && (e[A] = t), t;
          })),
        i = function (A, e) {
          switch (e) {
            case "open-quote":
              A.push({ type: a.OPENQUOTE });
              break;
            case "close-quote":
              A.push({ type: a.CLOSEQUOTE });
          }
        },
        c = function (A, e, t) {
          var r = A.quotes ? A.quotes.split(/\s+/) : ["'\"'", "'\"'"],
            n = 2 * t;
          return n >= r.length && (n = r.length - 2), e || ++n, r[n].replace(/^["']|["']$/g, "");
        },
        u = function (A, e, t) {
          for (var r = A.length, B = "", a = 0; a < r; a++)
            a > 0 && (B += e || ""),
              (B += (0, n.createCounterText)(A[a], (0, o.parseListStyleType)(t || "decimal"), !1));
          return B;
        };
    },
    function (A, e) {
      var t;
      t = (function () {
        return this;
      })();
      try {
        t = t || new Function("return this")();
      } catch (A) {
        "object" == typeof window && (t = window);
      }
      A.exports = t;
    },
    function (A, e, t) {
      var r = t(67);
      "string" == typeof r && (r = [[A.i, r, ""]]);
      var n = { insert: "head", singleton: !1 };
      t(69)(r, n);
      r.locals && (A.exports = r.locals);
    },
    function (A, e, t) {
      (A.exports = t(68)(!1)).push([
        A.i,
        ".rct-backdrop-filter-wrapper {\n  position: relative;\n  overflow: hidden;\n}\n\n.rct-backdrop-filter-wrapper .rct-backdrop-filter-canvas {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n",
        "",
      ]);
    },
    function (A, e, t) {
      "use strict";
      A.exports = function (A) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var t = (function (A, e) {
                var t = A[1] || "",
                  r = A[3];
                if (!r) return t;
                if (e && "function" == typeof btoa) {
                  var n =
                      ((B = r),
                      (a = btoa(unescape(encodeURIComponent(JSON.stringify(B))))),
                      (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a)),
                      "/*# ".concat(s, " */")),
                    o = r.sources.map(function (A) {
                      return "/*# sourceURL=".concat(r.sourceRoot).concat(A, " */");
                    });
                  return [t].concat(o).concat([n]).join("\n");
                }
                var B, a, s;
                return [t].join("\n");
              })(e, A);
              return e[2] ? "@media ".concat(e[2], "{").concat(t, "}") : t;
            }).join("");
          }),
          (e.i = function (A, t) {
            "string" == typeof A && (A = [[null, A, ""]]);
            for (var r = {}, n = 0; n < this.length; n++) {
              var o = this[n][0];
              null != o && (r[o] = !0);
            }
            for (var B = 0; B < A.length; B++) {
              var a = A[B];
              (null != a[0] && r[a[0]]) ||
                (t && !a[2] ? (a[2] = t) : t && (a[2] = "(".concat(a[2], ") and (").concat(t, ")")), e.push(a));
            }
          }),
          e
        );
      };
    },
    function (A, e, t) {
      "use strict";
      var r,
        n = {},
        o = function () {
          return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
        },
        B = (function () {
          var A = {};
          return function (e) {
            if (void 0 === A[e]) {
              var t = document.querySelector(e);
              if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                try {
                  t = t.contentDocument.head;
                } catch (A) {
                  t = null;
                }
              A[e] = t;
            }
            return A[e];
          };
        })();
      function a(A, e) {
        for (var t = [], r = {}, n = 0; n < A.length; n++) {
          var o = A[n],
            B = e.base ? o[0] + e.base : o[0],
            a = { css: o[1], media: o[2], sourceMap: o[3] };
          r[B] ? r[B].parts.push(a) : t.push((r[B] = { id: B, parts: [a] }));
        }
        return t;
      }
      function s(A, e) {
        for (var t = 0; t < A.length; t++) {
          var r = A[t],
            o = n[r.id],
            B = 0;
          if (o) {
            for (o.refs++; B < o.parts.length; B++) o.parts[B](r.parts[B]);
            for (; B < r.parts.length; B++) o.parts.push(d(r.parts[B], e));
          } else {
            for (var a = []; B < r.parts.length; B++) a.push(d(r.parts[B], e));
            n[r.id] = { id: r.id, refs: 1, parts: a };
          }
        }
      }
      function i(A) {
        var e = document.createElement("style");
        if (void 0 === A.attributes.nonce) {
          var r = t.nc;
          r && (A.attributes.nonce = r);
        }
        if (
          (Object.keys(A.attributes).forEach(function (t) {
            e.setAttribute(t, A.attributes[t]);
          }),
          "function" == typeof A.insert)
        )
          A.insert(e);
        else {
          var n = B(A.insert || "head");
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(e);
        }
        return e;
      }
      var c,
        u =
          ((c = []),
          function (A, e) {
            return (c[A] = e), c.filter(Boolean).join("\n");
          });
      function l(A, e, t, r) {
        var n = t ? "" : r.css;
        if (A.styleSheet) A.styleSheet.cssText = u(e, n);
        else {
          var o = document.createTextNode(n),
            B = A.childNodes;
          B[e] && A.removeChild(B[e]), B.length ? A.insertBefore(o, B[e]) : A.appendChild(o);
        }
      }
      function Q(A, e, t) {
        var r = t.css,
          n = t.media,
          o = t.sourceMap;
        if (
          (n && A.setAttribute("media", n),
          o &&
            btoa &&
            (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
              " */"
            )),
          A.styleSheet)
        )
          A.styleSheet.cssText = r;
        else {
          for (; A.firstChild; ) A.removeChild(A.firstChild);
          A.appendChild(document.createTextNode(r));
        }
      }
      var w = null,
        g = 0;
      function d(A, e) {
        var t, r, n;
        if (e.singleton) {
          var o = g++;
          (t = w || (w = i(e))), (r = l.bind(null, t, o, !1)), (n = l.bind(null, t, o, !0));
        } else
          (t = i(e)),
            (r = Q.bind(null, t, e)),
            (n = function () {
              !(function (A) {
                if (null === A.parentNode) return !1;
                A.parentNode.removeChild(A);
              })(t);
            });
        return (
          r(A),
          function (e) {
            if (e) {
              if (e.css === A.css && e.media === A.media && e.sourceMap === A.sourceMap) return;
              r((A = e));
            } else n();
          }
        );
      }
      A.exports = function (A, e) {
        ((e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}),
          e.singleton || "boolean" == typeof e.singleton || (e.singleton = o());
        var t = a(A, e);
        return (
          s(t, e),
          function (A) {
            for (var r = [], o = 0; o < t.length; o++) {
              var B = t[o],
                i = n[B.id];
              i && (i.refs--, r.push(i));
            }
            A && s(a(A, e), e);
            for (var c = 0; c < r.length; c++) {
              var u = r[c];
              if (0 === u.refs) {
                for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                delete n[u.id];
              }
            }
          }
        );
      };
    },
  ]);
});
