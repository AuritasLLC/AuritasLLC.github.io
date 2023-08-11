(function (e) {
  function t(t) {
    for (
      var n, i, o = t[0], l = t[1], c = t[2], d = 0, g = [];
      d < o.length;
      d++
    )
      (i = o[d]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && g.push(r[i][0]),
        (r[i] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    p && p(t);
    while (g.length) g.shift()();
    return s.push.apply(s, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], n = !0, i = 1; i < a.length; i++) {
        var o = a[i];
        0 !== r[o] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = l((l.s = a[0]))));
    }
    return e;
  }
  var n = {},
    i = { app: 0 },
    r = { app: 0 },
    s = [];
  function o(e) {
    return (
      l.p +
      "js/" +
      ({
        "api-integration~b2b-integration~event-driven-integration":
          "api-integration~b2b-integration~event-driven-integration",
        "api-integration": "api-integration",
        "b2b-integration": "b2b-integration",
        "event-driven-integration": "event-driven-integration",
      }[e] || e) +
      "." +
      {
        "api-integration~b2b-integration~event-driven-integration": "05731c19",
        "api-integration": "5c655b18",
        "b2b-integration": "25a72685",
        "event-driven-integration": "317edaaa",
      }[e] +
      ".js"
    );
  }
  function l(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
  }
  (l.e = function (e) {
    var t = [],
      a = { "api-integration~b2b-integration~event-driven-integration": 1 };
    i[e]
      ? t.push(i[e])
      : 0 !== i[e] &&
        a[e] &&
        t.push(
          (i[e] = new Promise(function (t, a) {
            for (
              var n =
                  "css/" +
                  ({
                    "api-integration~b2b-integration~event-driven-integration":
                      "api-integration~b2b-integration~event-driven-integration",
                    "api-integration": "api-integration",
                    "b2b-integration": "b2b-integration",
                    "event-driven-integration": "event-driven-integration",
                  }[e] || e) +
                  "." +
                  {
                    "api-integration~b2b-integration~event-driven-integration":
                      "e409741c",
                    "api-integration": "31d6cfe0",
                    "b2b-integration": "31d6cfe0",
                    "event-driven-integration": "31d6cfe0",
                  }[e] +
                  ".css",
                r = l.p + n,
                s = document.getElementsByTagName("link"),
                o = 0;
              o < s.length;
              o++
            ) {
              var c = s[o],
                d = c.getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (d === n || d === r)) return t();
            }
            var g = document.getElementsByTagName("style");
            for (o = 0; o < g.length; o++) {
              (c = g[o]), (d = c.getAttribute("data-href"));
              if (d === n || d === r) return t();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = t),
              (p.onerror = function (t) {
                var n = (t && t.target && t.target.src) || r,
                  s = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                  );
                (s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.request = n),
                  delete i[e],
                  p.parentNode.removeChild(p),
                  a(s);
              }),
              (p.href = r);
            var u = document.getElementsByTagName("head")[0];
            u.appendChild(p);
          }).then(function () {
            i[e] = 0;
          }))
        );
    var n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var s = new Promise(function (t, a) {
          n = r[e] = [t, a];
        });
        t.push((n[2] = s));
        var c,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          l.nc && d.setAttribute("nonce", l.nc),
          (d.src = o(e));
        var g = new Error();
        c = function (t) {
          (d.onerror = d.onload = null), clearTimeout(p);
          var a = r[e];
          if (0 !== a) {
            if (a) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              (g.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + i + ")"),
                (g.name = "ChunkLoadError"),
                (g.type = n),
                (g.request = i),
                a[1](g);
            }
            r[e] = void 0;
          }
        };
        var p = setTimeout(function () {
          c({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = c), document.head.appendChild(d);
      }
    return Promise.all(t);
  }),
    (l.m = e),
    (l.c = n),
    (l.d = function (e, t, a) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (l.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (l.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          l.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = ""),
    (l.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var g = 0; g < c.length; g++) t(c[g]);
  var p = d;
  s.push([0, "chunk-vendors"]), a();
})({
  0: function (e, t, a) {
    e.exports = a("56d7");
  },
  "034f": function (e, t, a) {
    "use strict";
    a("85ec");
  },
  "0902": function (e, t, a) {
    "use strict";
    var n = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          e.type,
          {
            tag: "component",
            staticClass: "button",
            class: [
              "button-" + e.variant,
              {
                "button--auto-width-height": e.autoWidthHeight,
                "button--large": "lg" === e.size,
              },
            ],
            attrs: {
              to: e.linkOutData,
              href: e.linkOutData,
              target: e.linkOut ? "_blank" : "",
              tabindex: "0",
            },
            on: {
              click: function (t) {
                return e.$emit("click");
              },
            },
          },
          [
            e._t("default"),
            e.hoverboxes ? a("span", { staticClass: "hoverboxes" }) : e._e(),
            e.external
              ? a(
                  "svg",
                  {
                    staticStyle: { "margin-left": "12px" },
                    attrs: {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 14 14",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    a("path", {
                      attrs: {
                        d: "M12.2162 0.617676H2.74702C2.04085 0.617676 1.46307 1.19545 1.46307 1.90163C1.46307 2.6078 2.04085 3.18558 2.74702 3.18558H9.11863L0.869242 11.4189C0.371711 11.9164 0.371711 12.735 0.869242 13.2325C1.12603 13.4893 1.46307 13.6177 1.78406 13.6177C2.10504 13.6177 2.44208 13.4893 2.69887 13.2485L10.9322 4.99916V11.3708C10.9322 12.0769 11.51 12.6547 12.2162 12.6547C12.9223 12.6547 13.5001 12.0769 13.5001 11.3708V1.90163C13.5001 1.19545 12.9223 0.617676 12.2162 0.617676Z",
                        fill: "currentColor",
                      },
                    }),
                  ]
                )
              : e._e(),
          ],
          2
        );
      },
      i = [],
      r = {
        data() {
          return { linkOutData: "", localCode: "" };
        },
        mounted() {
          this.handleCampaignCode();
        },
        props: {
          to: { type: String, required: !1 },
          variant: { type: String, default: "primary" },
          external: { type: Boolean, default: !1 },
          linkOut: { type: Boolean, required: !1 },
          targetWithCode: { type: Boolean, default: !1 },
          autoWidthHeight: { type: Boolean, default: !1 },
          hoverboxes: { type: Boolean, default: !0 },
          size: { type: String, default: "default" },
        },
        computed: {
          type() {
            return this.external ? "a" : this.to ? "router-link" : "button";
          },
          queryString() {
            var e;
            return null === (e = this.$store) || void 0 === e
              ? void 0
              : e.state.queryString;
          },
          campaignCode() {
            var e;
            return null === (e = this.$store) || void 0 === e
              ? void 0
              : e.state.campaignCode;
          },
        },
        methods: {
          handleCampaignCode() {
            if (this.targetWithCode) {
              let e = "&campaigncode=";
              this.campaignCode
                ? (e += this.campaignCode)
                : (e += "CRM-HY21-CIP-LSTAGINGSGD");
              let t = this.to,
                a = t.concat(e);
              this.linkOutData = a;
            } else this.linkOutData = this.to;
          },
        },
        watch: {
          campaignCode() {
            this.handleCampaignCode();
          },
        },
      },
      s = r,
      o = (a("bc34"), a("2877")),
      l = Object(o["a"])(s, n, i, !1, null, null, null);
    t["a"] = l.exports;
  },
  "0a91": function (e, t, a) {},
  "16f2": function (e, t, a) {},
  1787: function (e, t, a) {
    "use strict";
    a("0a91");
  },
  "1be0": function (e, t, a) {},
  "49f8": function (e, t, a) {
    var n = { "./en.json": "edd4" };
    function i(e) {
      var t = r(e);
      return a(t);
    }
    function r(e) {
      if (!a.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return n[e];
    }
    (i.keys = function () {
      return Object.keys(n);
    }),
      (i.resolve = r),
      (e.exports = i),
      (i.id = "49f8");
  },
  "4e22": function (e, t, a) {
    "use strict";
    a("64b8");
  },
  5114: function (e) {
    e.exports = JSON.parse(
      '{"apiIntegration":{"section":"apiIntegration.section","headingBlock":{"heading":"apiIntegration.headingBlock.heading","subHeading":"apiIntegration.headingBlock.subHeading"},"introScreen":{"headline":"apiIntegration.introScreen.headline","path":"demo-api-integration-intro.mp4","ariaLabel":"apiIntegration.introScreen.ariaLabel","paragraph":"apiIntegration.introScreen.paragraph","source":{"text":"apiIntegration.introScreen.source.text","target":"https://insights.sap.com/what-is-data-management/"},"button":{"text":"apiIntegration.introScreen.button.text","target":""}},"videoPath":"demo-api-integration.mp4","setClassName":"demo demo__api-integration","content":[{"headline":"apiIntegration.content[0].headline","step":"apiIntegration.content[0].step","paragraphs":{"text":"apiIntegration.content[0].paragraphs"},"videoDuration":267,"pauseTime":0.2,"startTime":0.2,"ariaLabel":"apiIntegration.content[0].ariaLabel","clickPoint":{"y":52,"x":67,"mobileScale":{"origin":"75% 52%","scale":2}}},{"headline":"apiIntegration.content[1].headline","step":"apiIntegration.content[1].step","paragraphs":{"text":"apiIntegration.content[1].paragraphs"},"pauseTime":22,"startTime":22,"ariaLabel":"apiIntegration.content[1].ariaLabel","clickPoint":{"y":51,"x":9,"mobileScale":{"origin":"left center","scale":2}}},{"headline":"apiIntegration.content[2].headline","step":"apiIntegration.content[2].step","paragraphs":{"text":"apiIntegration.content[2].paragraphs"},"pauseTime":36,"startTime":36,"ariaLabel":"apiIntegration.content[2].ariaLabel","clickPoint":{"y":8.5,"x":8,"mobileScale":{"origin":"left top","scale":2}}},{"headline":"apiIntegration.content[3].headline","step":"apiIntegration.content[3].step","paragraphs":{"text":"apiIntegration.content[3].paragraphs"},"pauseTime":74.5,"startTime":74.5,"ariaLabel":"apiIntegration.content[3].ariaLabel","clickPoint":{"y":11.5,"x":8,"mobileScale":{"origin":"left top","scale":2.2}}},{"headline":"apiIntegration.content[4].headline","step":"apiIntegration.content[4].step","paragraphs":{"text":"apiIntegration.content[4].paragraphs"},"pauseTime":93,"startTime":93,"ariaLabel":"apiIntegration.content[4].ariaLabel","clickPoint":{"y":10.2,"x":14,"mobileScale":{"origin":"left top","scale":2.2}}},{"headline":"apiIntegration.content[5].headline","step":"apiIntegration.content[5].step","paragraphs":{"text":"apiIntegration.content[5].paragraphs"},"pauseTime":98,"startTime":98,"ariaLabel":"apiIntegration.content[5].ariaLabel","clickPoint":{"y":19,"x":39,"mobileScale":{"origin":"center top","scale":2.2}}},{"headline":"apiIntegration.content[6].headline","step":"apiIntegration.content[6].step","paragraphs":{"text":"apiIntegration.content[6].paragraphs"},"pauseTime":137,"startTime":137,"ariaLabel":"apiIntegration.content[6].ariaLabel","clickPoint":{"y":23.3,"x":80.5,"mobileScale":{"origin":"90% 25%","scale":2.2}}},{"headline":"apiIntegration.content[7].headline","step":"apiIntegration.content[7].step","paragraphs":{"text":"apiIntegration.content[7].paragraphs"},"pauseTime":173,"startTime":173,"ariaLabel":"apiIntegration.content[7].ariaLabel","clickPoint":{"y":16.5,"x":62,"mobileScale":{"origin":"70% top","scale":2.2}}},{"headline":"apiIntegration.content[8].headline","step":"apiIntegration.content[8].step","paragraphs":{"text":"apiIntegration.content[8].paragraphs"},"pauseTime":232,"startTime":232,"ariaLabel":"apiIntegration.content[8].ariaLabel","clickPoint":{"y":27.5,"x":53.5,"mobileScale":{"origin":"50% 25%","scale":2.2}}},{"final":true,"step":"","paragraphs":{},"pauseTime":267,"startTime":267,"ariaLabel":"apiIntegration.content[9].ariaLabel","clickPoint":{"y":0,"x":0,"final":true,"mobileScale":{"origin":"left bottom","scale":2.2}}}],"conclusion":{"text":"apiIntegration.conclusion.text","img":{"src":"assets/demo-api-integration-conclusion.jpg","alt":"apiIntegration.conclusion.img.alt"},"links":[{"atag":{"text":"apiIntegration.conclusion.links[0].atag.text","path":"/guided-demo-data-assist/event-driven-integration"}},{"atag":{"text":"apiIntegration.conclusion.links[1].atag.text","path":"/guided-demo-data-assist/b2b-integration"}}],"learnMoreButton":{"src":"https://www.sap.com/products/technology-platform/integration-suite.html","text":"apiIntegration.conclusion.learnMoreButton.text"}}},"eventDrivenIntegration":{"section":"eventDrivenIntegration.section","headingBlock":{"heading":"eventDrivenIntegration.headingBlock.heading","subHeading":"eventDrivenIntegration.headingBlock.subHeading"},"introScreen":{"headline":"eventDrivenIntegration.introScreen.headline","path":"demo-event-driven-integration-intro.mp4","ariaLabel":"eventDrivenIntegration.introScreen.ariaLabel","paragraph":"eventDrivenIntegration.introScreen.paragraph","source":{"text":"eventDrivenIntegration.introScreen.source.text","target":"https://insights.sap.com/what-is-data-management/"},"button":{"text":"eventDrivenIntegration.introScreen.button.text","target":""}},"videoPath":"demo-event-driven-integration.mp4","setClassName":"demo demo__event-driven-integration","content":[{"headline":"eventDrivenIntegration.content[0].headline","step":"eventDrivenIntegration.content[0].step","paragraphs":{"text":"eventDrivenIntegration.content[0].paragraphs"},"videoDuration":115,"pauseTime":0,"startTime":0,"ariaLabel":"eventDrivenIntegration.content[0].ariaLabel","clickPoint":{"y":27,"x":29,"mobileScale":{"origin":"29% 27%","scale":2}}},{"headline":"eventDrivenIntegration.content[1].headline","step":"eventDrivenIntegration.content[1].step","paragraphs":{"text":"eventDrivenIntegration.content[1].paragraphs"},"pauseTime":0.05,"startTime":0.05,"ariaLabel":"eventDrivenIntegration.content[1].ariaLabel","clickPoint":{"y":27,"x":29,"mobileScale":{"origin":"29% 27%","scale":2}}},{"headline":"eventDrivenIntegration.content[2].headline","step":"eventDrivenIntegration.content[2].step","paragraphs":{"text":"eventDrivenIntegration.content[2].paragraphs"},"pauseTime":24.5,"startTime":24.5,"ariaLabel":"eventDrivenIntegration.content[2].ariaLabel","clickPoint":{"y":31.5,"x":80,"mobileScale":{"origin":"right 30%","scale":2}}},{"headline":"eventDrivenIntegration.content[3].headline","step":"eventDrivenIntegration.content[3].step","paragraphs":{"text":"eventDrivenIntegration.content[3].paragraphs"},"pauseTime":28.5,"startTime":28.5,"ariaLabel":"eventDrivenIntegration.content[3].ariaLabel","clickPoint":{"y":26,"x":52,"mobileScale":{"origin":"center top","scale":2.2}}},{"headline":"eventDrivenIntegration.content[4].headline","step":"eventDrivenIntegration.content[4].step","paragraphs":{"text":"eventDrivenIntegration.content[4].paragraphs"},"pauseTime":43.5,"startTime":47,"ariaLabel":"eventDrivenIntegration.content[4].ariaLabel","clickPoint":{"y":67.5,"x":48.5,"mobileScale":{"origin":"center bottom","scale":2.2}}},{"headline":"eventDrivenIntegration.content[5].headline","step":"eventDrivenIntegration.content[5].step","paragraphs":{"text":"eventDrivenIntegration.content[5].paragraphs"},"pauseTime":51.5,"startTime":51.5,"ariaLabel":"eventDrivenIntegration.content[5].ariaLabel","clickPoint":{"y":37.5,"x":27.5,"mobileScale":{"origin":"left 30%","scale":2.2}}},{"headline":"eventDrivenIntegration.content[6].headline","step":"eventDrivenIntegration.content[6].step","paragraphs":{"text":"eventDrivenIntegration.content[6].paragraphs"},"pauseTime":65,"startTime":65,"ariaLabel":"eventDrivenIntegration.content[6].ariaLabel","clickPoint":{"y":37.5,"x":53.5,"mobileScale":{"origin":"center 30%","scale":2.2}}},{"headline":"eventDrivenIntegration.content[7].headline","step":"eventDrivenIntegration.content[7].step","paragraphs":{"text":"eventDrivenIntegration.content[7].paragraphs"},"pauseTime":81,"startTime":81,"ariaLabel":"eventDrivenIntegration.content[7].ariaLabel","clickPoint":{"y":37.5,"x":79.5,"mobileScale":{"origin":"right 30%","scale":2.2}}},{"headline":"eventDrivenIntegration.content[8].headline","step":"eventDrivenIntegration.content[8].step","paragraphs":{"text":"eventDrivenIntegration.content[8].paragraphs"},"pauseTime":93,"startTime":93,"ariaLabel":"eventDrivenIntegration.content[8].ariaLabel","clickPoint":{"y":73.5,"x":27.5,"mobileScale":{"origin":"left bottom","scale":2.2}}},{"final":true,"step":"","paragraphs":{},"pauseTime":115,"startTime":115,"ariaLabel":"eventDrivenIntegration.content[9].ariaLabel","clickPoint":{"y":94.5,"x":6.5,"final":true,"mobileScale":{"origin":"left bottom","scale":2.2}}}],"conclusion":{"text":"eventDrivenIntegration.conclusion.text","img":{"src":"assets/demo-event-driven-integration-conclusion.jpg","alt":"eventDrivenIntegration.conclusion.img.alt"},"links":[{"atag":{"text":"eventDrivenIntegration.conclusion.links[0].atag.text","path":"/guided-demo-data-assist/api-integration"}},{"atag":{"text":"eventDrivenIntegration.conclusion.links[1].atag.text","path":"/guided-demo-data-assist/b2b-integration"}}],"learnMoreButton":{"src":"https://www.sap.com/products/technology-platform/integration-suite.html","text":"eventDrivenIntegration.conclusion.learnMoreButton.text"}}},"b2bIntegration":{"section":"b2bIntegration.section","headingBlock":{"heading":"b2bIntegration.headingBlock.heading","subHeading":"b2bIntegration.headingBlock.subHeading"},"introScreen":{"headline":"b2bIntegration.introScreen.headline","path":"demo-b2b-integration-intro.mp4","ariaLabel":"b2bIntegration.introScreen.ariaLabel","paragraph":"b2bIntegration.introScreen.paragraph","source":{"text":"b2bIntegration.introScreen.source.text","target":"https://insights.sap.com/what-is-data-management/"},"button":{"text":"b2bIntegration.introScreen.button.text","target":""}},"videoPath":"demo-b2b-integration.mp4","setClassName":"demo demo__event-driven-integration","content":[{"headline":"b2bIntegration.content[0].headline","step":"b2bIntegration.content[0].step","paragraphs":{"text":"b2bIntegration.content[0].paragraphs"},"videoDuration":143,"pauseTime":1,"startTime":1,"ariaLabel":"b2bIntegration.content[0].ariaLabel","clickPoint":{"y":52,"x":37,"mobileScale":{"origin":"center center","scale":2}}},{"headline":"b2bIntegration.content[1].headline","step":"b2bIntegration.content[1].step","paragraphs":{"text":"b2bIntegration.content[1].paragraphs"},"pauseTime":6.5,"startTime":6.5,"ariaLabel":"b2bIntegration.content[1].ariaLabel","clickPoint":{"y":7,"x":8,"mobileScale":{"origin":"left top","scale":2}}},{"headline":"b2bIntegration.content[2].headline","step":"b2bIntegration.content[2].step","paragraphs":{"text":"b2bIntegration.content[2].paragraphs"},"pauseTime":21,"startTime":21,"ariaLabel":"b2bIntegration.content[2].ariaLabel","clickPoint":{"y":12.5,"x":8,"mobileScale":{"origin":"left top","scale":2}}},{"headline":"b2bIntegration.content[3].headline","step":"b2bIntegration.content[3].step","paragraphs":{"text":"b2bIntegration.content[3].paragraphs"},"pauseTime":55,"startTime":55,"ariaLabel":"b2bIntegration.content[3].ariaLabel","clickPoint":{"y":12,"x":12,"mobileScale":{"origin":"left top","scale":2.2}}},{"headline":"b2bIntegration.content[4].headline","step":"b2bIntegration.content[4].step","paragraphs":{"text":"b2bIntegration.content[4].paragraphs"},"pauseTime":65,"startTime":65,"ariaLabel":"b2bIntegration.content[4].ariaLabel","clickPoint":{"y":15.5,"x":3.5,"mobileScale":{"origin":"left top","scale":2.2}}},{"headline":"b2bIntegration.content[5].headline","step":"b2bIntegration.content[5].step","paragraphs":{"text":"b2bIntegration.content[5].paragraphs"},"pauseTime":100,"startTime":100,"ariaLabel":"b2bIntegration.content[5].ariaLabel","clickPoint":{"y":15.5,"x":3.5,"mobileScale":{"origin":"left top","scale":2.2}}},{"headline":"b2bIntegration.content[6].headline","step":"b2bIntegration.content[6].step","paragraphs":{"text":"b2bIntegration.content[6].paragraphs"},"pauseTime":101.5,"startTime":101.5,"ariaLabel":"b2bIntegration.content[6].ariaLabel","clickPoint":{"y":17,"x":8.5,"mobileScale":{"origin":"left top","scale":2.2}}},{"headline":"b2bIntegration.content[7].headline","step":"b2bIntegration.content[7].step","paragraphs":{"text":"b2bIntegration.content[7].paragraphs"},"pauseTime":110.5,"startTime":110.5,"ariaLabel":"b2bIntegration.content[7].ariaLabel","clickPoint":{"y":20.5,"x":8.5,"mobileScale":{"origin":"left top","scale":2.2}}},{"final":true,"step":"","paragraphs":{},"pauseTime":143,"startTime":143,"ariaLabel":"b2bIntegration.content[8].ariaLabel","clickPoint":{"y":94.5,"x":6.5,"final":true,"mobileScale":{"origin":"left bottom","scale":2.2}}}],"conclusion":{"text":"b2bIntegration.conclusion.text","img":{"src":"assets/demo-b2b-integration-conclusion.jpg","alt":"b2bIntegration.conclusion.img.alt"},"links":[{"atag":{"text":"b2bIntegration.conclusion.links[0].atag.text","path":"/guided-demo-data-assist/api-integration"}},{"atag":{"text":"b2bIntegration.conclusion.links[1].atag.text","path":"/guided-demo-data-assist/event-driven-integration"}}],"learnMoreButton":{"src":"https://www.sap.com/products/technology-platform/integration-suite.html","text":"b2bIntegration.conclusion.learnMoreButton.text"}}}}'
    );
  },
  "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    a("e6cf"), a("cca6"), a("a79d");
    var n = a("2b0e"),
      i = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          { attrs: { id: "app" } },
          [
            a("main", [a("router-view")], 1),
            a("PortalTarget", { attrs: { name: "popup" } }),
          ],
          1
        );
      },
      r = [],
      s = a("2b88"),
      o = { components: { PortalTarget: s["PortalTarget"] } },
      l = o,
      c = (a("034f"), a("2877")),
      d = Object(c["a"])(l, i, r, !1, null, null, null),
      g = d.exports,
      p = a("8c4f"),
      u = a("5114"),
      h = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          { staticClass: "homeView" },
          [
            a("Navigation", {
              attrs: {
                "is-open": e.isOpen,
                header: e.$t("landingPage.sidebar.header"),
                subHeader: e.$t("landingPage.sidebar.subheader"),
              },
              on: {
                "is-open": function (t) {
                  return (e.isOpen = t);
                },
              },
              scopedSlots: e._u([
                {
                  key: "list",
                  fn: function () {
                    return e._l(
                      e.$t("landingPage.sidebar.list"),
                      function (t, n) {
                        return a(
                          "li",
                          {
                            key: n,
                            class: {
                              "list__item--active":
                                t.target === "#" + e.activePinId,
                            },
                          },
                          [
                            a(
                              "a",
                              {
                                attrs: { href: t.target },
                                on: {
                                  click: function (a) {
                                    return (
                                      a.preventDefault(),
                                      e.scrollToAndClose(t.target)
                                    );
                                  },
                                },
                              },
                              [e._v(e._s(t.text))]
                            ),
                            t.child
                              ? a(
                                  "ul",
                                  { staticClass: "child" },
                                  e._l(t.child, function (t, n) {
                                    return a(
                                      "li",
                                      {
                                        key: n,
                                        class: {
                                          "list__item--active":
                                            t.target === "#" + e.activePinId,
                                        },
                                      },
                                      [
                                        a(
                                          "a",
                                          {
                                            attrs: { href: t.target },
                                            on: {
                                              click: function (a) {
                                                return (
                                                  a.preventDefault(),
                                                  e.scrollToAndClose(t.url)
                                                );
                                              },
                                            },
                                          },
                                          [e._v(e._s(t.text))]
                                        ),
                                      ]
                                    );
                                  }),
                                  0
                                )
                              : e._e(),
                          ]
                        );
                      }
                    );
                  },
                  proxy: !0,
                },
              ]),
            }),
            a(
              "article",
              { staticClass: "homeView__sections" },
              [
                a("Stage", {
                  staticClass: "scroll-trigger-1",
                  attrs: {
                    video: "assets/intro-stage.mp4",
                    image: "assets/demo-banner.png",
                    "is-open": e.isOpen,
                    ariaLabel: e.$t("landingPage.stage.ariaLabel"),
                    headline: e.$t("landingPage.stage.headline"),
                    header: e.$t("landingPage.sidebar.header"),
                    subHeader: e.$t("landingPage.sidebar.subheader"),
                    copy: e.$t("landingPage.stage.copy"),
                    headlineBreak: !0,
                    id: "welcome",
                  },
                  scopedSlots: e._u([
                    {
                      key: "buttons",
                      fn: function () {
                        return e._l(
                          e.$t("landingPage.stage.buttons"),
                          function (t, n) {
                            return a(
                              "Button",
                              {
                                key: t.key,
                                attrs: { variant: t.variant },
                                on: {
                                  click: function (a) {
                                    return e.scrollTo(
                                      t.url,
                                      1 === n ? -50 : -100
                                    );
                                  },
                                },
                              },
                              [a("span", [e._v(e._s(t.text))])]
                            );
                          }
                        );
                      },
                      proxy: !0,
                    },
                  ]),
                }),
                a(
                  "div",
                  {
                    staticClass: "homeView__intro section",
                    attrs: { id: "homeViewIntro" },
                  },
                  [a("p", [e._v(e._s(e.$t("landingPage.intro.copy")))])]
                ),
                a("Teaser", {
                  staticClass: "scroll-trigger-2 section",
                  attrs: {
                    id: "teaser0",
                    variant: "right",
                    image: "demo-api-integration-main.jpg",
                    altText: e.$t("landingPage.demoApiIntegration.altText"),
                    "image-app": "demo-api-integration-app.jpg",
                    "image-app-position": "top",
                    headline: e.$t("landingPage.demoApiIntegration.headline"),
                    subheadline: e.$t(
                      "landingPage.demoApiIntegration.subheadline"
                    ),
                    copy: e.$t("landingPage.demoApiIntegration.copy"),
                    number: "01",
                  },
                  scopedSlots: e._u([
                    {
                      key: "button",
                      fn: function () {
                        return [
                          a(
                            "Button",
                            {
                              attrs: {
                                to: "/guided-demo-data-assist/api-integration",
                                variant: "primary",
                              },
                            },
                            [
                              a("span", [
                                e._v(
                                  e._s(
                                    e.$t(
                                      "landingPage.demoApiIntegration.button"
                                    )
                                  )
                                ),
                              ]),
                            ]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
                a("Teaser", {
                  staticClass: "scroll-trigger-3 section-half-padded",
                  attrs: {
                    id: "teaser1",
                    variant: "left",
                    background: "lightGrey",
                    image: "demo-event-driven-integration-main.jpg",
                    "image-app": "demo-event-driven-integration-app.jpg",
                    "image-app-position": "bottom",
                    altText: e.$t("landingPage.demoEventDrivenInt.altText"),
                    headline: e.$t("landingPage.demoEventDrivenInt.headline"),
                    subheadline: e.$t(
                      "landingPage.demoEventDrivenInt.subheadline"
                    ),
                    copy: e.$t("landingPage.demoEventDrivenInt.copy"),
                    number: "02",
                  },
                  scopedSlots: e._u([
                    {
                      key: "button",
                      fn: function () {
                        return [
                          a(
                            "Button",
                            {
                              attrs: {
                                to: "/guided-demo-data-assist/event-driven-integration",
                                variant: "primary",
                              },
                            },
                            [
                              a("span", [
                                e._v(
                                  e._s(
                                    e.$t(
                                      "landingPage.demoApiIntegration.button"
                                    )
                                  )
                                ),
                              ]),
                            ]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
                a("Teaser", {
                  staticClass: "scroll-trigger-4 section",
                  attrs: {
                    id: "teaser2",
                    variant: "right",
                    image: "demo-b2b-integration-main.jpg",
                    "image-app": "demo-b2b-integration-app.jpg",
                    "image-app-position": "bottom",
                    altText: e.$t("landingPage.demoB2bInt.altText"),
                    headline: e.$t("landingPage.demoB2bInt.headline"),
                    subheadline: e.$t("landingPage.demoB2bInt.subheadline"),
                    copy: e.$t("landingPage.demoB2bInt.copy"),
                    number: "03",
                  },
                  scopedSlots: e._u([
                    {
                      key: "button",
                      fn: function () {
                        return [
                          a(
                            "Button",
                            {
                              attrs: {
                                to: "/guided-demo-data-assist/b2b-integration",
                                variant: "primary",
                              },
                            },
                            [
                              a("span", [
                                e._v(
                                  e._s(
                                    e.$t(
                                      "landingPage.demoApiIntegration.button"
                                    )
                                  )
                                ),
                              ]),
                            ]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
                a("NextSteps", {
                  staticClass: "scroll-trigger-5",
                  attrs: {
                    id: "nextSteps",
                    background: "assets/demo-nextStep.png",
                  },
                  scopedSlots: e._u([
                    {
                      key: "headline",
                      fn: function () {
                        return [
                          e._v(
                            " " +
                              e._s(e.$t("landingPage.nextStep.headline")) +
                              " "
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                    {
                      key: "copy",
                      fn: function () {
                        return [
                          e._v(
                            " " + e._s(e.$t("landingPage.nextStep.copy")) + " "
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                    {
                      key: "buttons",
                      fn: function () {
                        return [
                          a(
                            "div",
                            { staticClass: "flex justify-content-center" },
                            [
                              a(
                                "Button",
                                {
                                  staticClass: "footer__button",
                                  attrs: {
                                    to: e.$t(
                                      "landingPage.nextStep.button[0].target"
                                    ),
                                    variant: "secondary",
                                    external: !0,
                                    linkOut: !0,
                                  },
                                },
                                [
                                  a("span", [
                                    e._v(
                                      e._s(
                                        e.$t(
                                          "landingPage.nextStep.button[0].text"
                                        )
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          a(
                            "div",
                            {
                              staticClass: "flex justify-content-center",
                              staticStyle: { "margin-top": "24px" },
                            },
                            [
                              a(
                                "Button",
                                {
                                  staticClass: "footer__button",
                                  attrs: {
                                    to: e.$t(
                                      "landingPage.nextStep.button[1].target"
                                    ),
                                    variant: "text-on-dark",
                                    external: !0,
                                    linkOut: !0,
                                    "auto-width-height": !0,
                                  },
                                },
                                [
                                  a("span", [
                                    e._v(
                                      e._s(
                                        e.$t(
                                          "landingPage.nextStep.button[1].text"
                                        )
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          a("div", { staticClass: "footer__scroll" }, [
                            a(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !e.isOpen,
                                    expression: "!isOpen",
                                  },
                                ],
                                staticClass: "footer__back",
                                on: { click: e.back },
                              },
                              [
                                a(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "40",
                                      height: "40",
                                      viewBox: "0 0 40 40",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    a("circle", {
                                      attrs: {
                                        cx: "20",
                                        cy: "20",
                                        r: "19",
                                        stroke: "white",
                                        "stroke-width": "2",
                                      },
                                    }),
                                    a("path", {
                                      attrs: {
                                        d: "M29.6553 23.4482L19.9316 13.7246L10.208 23.4482",
                                        stroke: "white",
                                        "stroke-width": "2",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
              ],
              1
            ),
            a("router-view"),
          ],
          1
        );
      },
      m = [],
      b = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          {
            staticClass: "navigationToggleSticky",
            class: { "navigationToggleSticky--isOpen": e.isOpen },
          },
          [
            a(
              "div",
              {
                staticClass: "navigation__bar",
                attrs: { id: "navigation__bar" },
              },
              [
                e._m(0),
                a(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !e.isOpen,
                        expression: "!isOpen",
                      },
                    ],
                    staticClass: "navigation__toggle",
                    on: {
                      click: function (t) {
                        return e.$emit("is-open", !e.isOpen);
                      },
                    },
                  },
                  [
                    a("img", {
                      attrs: {
                        src: "assets/burger-menu.svg",
                        alt: "data assist by auritas brand icon",
                      },
                    }),
                  ]
                ),
                a(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.isOpen,
                        expression: "isOpen",
                      },
                    ],
                    staticClass: "navigation__toggle",
                    on: {
                      click: function (t) {
                        return e.$emit("is-open", !e.isOpen);
                      },
                    },
                  },
                  [
                    a(
                      "svg",
                      {
                        attrs: {
                          width: "27",
                          height: "27",
                          fill: "white",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        a("path", {
                          attrs: {
                            d: "M2.155-.02L.035 2.1l23.97 23.971 2.121-2.121L2.156-.02z",
                          },
                        }),
                        a("path", {
                          attrs: {
                            d: "M24.005.05L.035 24.02l2.12 2.122 23.971-23.97L24.005.05z",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.isOpen,
                    expression: "isOpen",
                  },
                ],
                staticClass: "navigation",
              },
              [
                a("h2", { domProps: { innerHTML: e._s(e.header) } }),
                a("h3", { domProps: { innerHTML: e._s(e.subHeader) } }),
                a("nav", [a("ul", [e._t("list")], 2)]),
              ]
            ),
            a("div", {
              staticClass: "navigation__backdrop",
              on: {
                click: function (t) {
                  return e.$emit("is-open", !1);
                },
              },
            }),
          ]
        );
      },
      v = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "navigation__favicon" }, [
            a("a", { attrs: { href: "https://www.auritas.com/", target: "_blank" } }, [
              a("img", {
                attrs: {
                  src: "assets/auritasLogo.png",
                  alt: "data assist by auritas brand icon",
                },
              }),
            ]),
          ]);
        },
      ],
      f = {
        props: {
          isOpen: { type: Boolean, default: !1 },
          header: { type: String, required: !0 },
          subHeader: { type: String, required: !0 },
        },
      },
      y = f,
      I = (a("7c4d"), Object(c["a"])(y, b, v, !1, null, "7f6dc1d2", null)),
      S = I.exports,
      w = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "section",
          { staticClass: "stage", attrs: { id: "featuredDemos" } },
          [
            a("div", { staticClass: "stage__background" }, [
              a("video", {
                ref: "video",
                staticClass: "stage__video",
                attrs: {
                  "aria-label": e.ariaLabel,
                  src: e.video,
                  id: "myVideo",
                  muted: "",
                  preload: "",
                  loop: "",
                  autoplay: "",
                  playsinline: "",
                },
                domProps: { muted: !0 },
              }),
            ]),
            e._m(0),
            a("div", { staticClass: "stage__header-container" }, [
              a("div", { staticClass: "stage__header" }, [
                a("div", { staticClass: "stage__row" }, [
                  a("h1", { staticClass: "h3" }, [
                    a("span", { staticClass: "h3--bold" }, [
                      e._v(e._s(e.header)),
                    ]),
                    a("br"),
                    a("span", { staticClass: "h3--regular" }, [
                      e._v(e._s(e.subHeader)),
                    ]),
                  ]),
                ]),
              ]),
              a(
                "div",
                {
                  staticClass: "stage__topBar",
                  attrs: {
                    role: "button",
                    "aria-label": "turn off motion",
                    tabindex: "0",
                  },
                  on: {
                    click: e.toogleReducedMotion,
                    keydown: function (t) {
                      return !t.type.indexOf("key") &&
                        e._k(t.keyCode, "enter", 13, t.key, "Enter")
                        ? null
                        : e.toogleReducedMotion(t);
                    },
                  },
                },
                [
                  e.reduceMotion
                    ? e._e()
                    : a("div", [
                        a(
                          "svg",
                          {
                            attrs: {
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            a("path", {
                              attrs: {
                                d: "M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57931 16.4087 4.00002 11.992 4.00002C7.57528 4.00002 3.99421 7.57931 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM15 16H13V8.00002H15V16ZM11 16H9V8.00002H11V16Z",
                                fill: "white",
                              },
                            }),
                          ]
                        ),
                      ]),
                  e.reduceMotion
                    ? a("div", [
                        a(
                          "svg",
                          {
                            attrs: {
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            a("g", { attrs: { "clip-path": "url(#clip0)" } }, [
                              a("g", { attrs: { filter: "url(#filter0_d)" } }, [
                                a("path", {
                                  attrs: {
                                    d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z",
                                    fill: "white",
                                  },
                                }),
                              ]),
                            ]),
                            a("defs", [
                              a(
                                "filter",
                                {
                                  attrs: {
                                    id: "filter0_d",
                                    x: "-2",
                                    y: "2",
                                    width: "28",
                                    height: "28",
                                    filterUnits: "userSpaceOnUse",
                                    "color-interpolation-filters": "sRGB",
                                  },
                                },
                                [
                                  a("feFlood", {
                                    attrs: {
                                      "flood-opacity": "0",
                                      result: "BackgroundImageFix",
                                    },
                                  }),
                                  a("feColorMatrix", {
                                    attrs: {
                                      in: "SourceAlpha",
                                      type: "matrix",
                                      values:
                                        "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                      result: "hardAlpha",
                                    },
                                  }),
                                  a("feOffset", { attrs: { dy: "4" } }),
                                  a("feGaussianBlur", {
                                    attrs: { stdDeviation: "2" },
                                  }),
                                  a("feComposite", {
                                    attrs: {
                                      in2: "hardAlpha",
                                      operator: "out",
                                    },
                                  }),
                                  a("feColorMatrix", {
                                    attrs: {
                                      type: "matrix",
                                      values:
                                        "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                    },
                                  }),
                                  a("feBlend", {
                                    attrs: {
                                      mode: "normal",
                                      in2: "BackgroundImageFix",
                                      result: "effect1_dropShadow",
                                    },
                                  }),
                                  a("feBlend", {
                                    attrs: {
                                      mode: "normal",
                                      in: "SourceGraphic",
                                      in2: "effect1_dropShadow",
                                      result: "shape",
                                    },
                                  }),
                                ],
                                1
                              ),
                              a("clipPath", { attrs: { id: "clip0" } }, [
                                a("rect", {
                                  attrs: {
                                    width: "24",
                                    height: "24",
                                    fill: "white",
                                  },
                                }),
                              ]),
                            ]),
                          ]
                        ),
                      ])
                    : e._e(),
                  a("p", { staticClass: "stage__motion" }, [
                    e.reduceMotion ? e._e() : a("span", [e._v("Stop motion")]),
                    e.reduceMotion
                      ? a("span", [e._v("Resume motion")])
                      : e._e(),
                  ]),
                ]
              ),
            ]),
            a("div", { staticClass: "stage__wrapper" }, [
              a("div", { staticClass: "stage__row" }, [
                a("div", { staticClass: "stage__content" }, [
                  a("h2", {
                    staticClass: "stage__headline h1 h1--bold",
                    class: { "stage__headline--break": e.headlineBreak },
                    domProps: { innerHTML: e._s(e.headline) },
                  }),
                  a("p", {
                    staticClass: "stage__copy",
                    domProps: { innerHTML: e._s(e.copy) },
                  }),
                ]),
              ]),
              a("div", { staticClass: "stage__buttons" }, [e._t("buttons")], 2),
              a("div", { staticClass: "stage__scroll" }, [
                a(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !e.isOpen,
                        expression: "!isOpen",
                      },
                    ],
                    staticClass: "stage__next",
                    on: { click: e.next },
                  },
                  [
                    a(
                      "svg",
                      {
                        attrs: {
                          width: "50",
                          height: "50",
                          viewBox: "0 0 40 40",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        a("circle", {
                          attrs: {
                            cx: "20",
                            cy: "20",
                            r: "19",
                            stroke: "white",
                            "stroke-width": "2",
                          },
                        }),
                        a("path", {
                          attrs: {
                            d: "M10.3447 16.5518L20.0684 26.2754L29.792 16.5518",
                            stroke: "white",
                            "stroke-width": "2",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
          ]
        );
      },
      x = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "stage__sap-best-brand-icon" }, [
            a("a", { attrs: { href: "https://www.auritas.com/", target: "_blank" } }, [
              a("img", {
                attrs: {
                  src: "assets/auritasLogo.png",
                  alt: "data assist by auritas brand icon",
                },
              }),
            ]),
          ]);
        },
      ],
      P = a("49c3"),
      _ = a.n(P),
      A = a("cffa"),
      k = {
        methods: {
          getOffset(e) {
            switch (e) {
              case "#featuredDemos":
                return -70;
              case "#nextSteps":
                return 0;
              default:
                return 250;
            }
          },
          next() {
            _()(document.querySelector("#homeViewIntro"), {
              verticalOffset: -70,
            });
          },
          scrollTo(e) {
            let t = this.getOffset(e);
            A["a"].to(window, {
              duration: 0.5,
              scrollTo: { y: e, offsetY: t },
            });
          },
          toogleReducedMotion() {
            let e = this.$refs.video;
            this.reduceMotion
              ? (e.play(), (this.reduceMotion = !1))
              : (e.pause(), (this.reduceMotion = !0));
          },
        },
        mounted() {
          let e = this.$refs.video;
          e && e.play(),
            e.addEventListener("canplay", function () {
              (e.style.display = "block"), e.play();
            });
        },
        props: {
          isOpen: { type: Boolean, default: !1 },
          video: { type: String, required: !0 },
          ariaLabel: { type: String, required: !1 },
          image: { type: String },
          headline: { type: String, required: !0 },
          headlineBreak: { type: Boolean, default: !1 },
          header: { type: String, required: !0 },
          subHeader: { type: String, required: !0 },
          copy: { type: String, required: !0 },
        },
        computed: {
          reduceMotion: {
            get: function () {
              return this.$store.state.reduceMotion;
            },
            set: function (e) {
              this.$store.commit("updateReduceMotion", e);
            },
          },
        },
      },
      L = k,
      T = (a("1787"), Object(c["a"])(L, w, x, !1, null, "f8ad7cb6", null)),
      C = T.exports,
      D = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "section",
          {
            staticClass: " teaser",
            class: [
              "teaser--" + e.variant,
              { "teaser--lightGrey": "lightGrey" === e.background },
            ],
          },
          [
            e._t("menu"),
            e._t("pin"),
            a(
              "div",
              { class: "teaser__text scroll-into reveal-" + e.variant },
              [
                e.number
                  ? a("p", { staticClass: "teaser__number" }, [
                      e._v(e._s(e.number)),
                    ])
                  : e._e(),
                a("h2", {
                  staticClass: "teaser__headline h2",
                  domProps: { innerHTML: e._s(e.headline) },
                }),
                a("h3", {
                  staticClass: "teaser__subheadline",
                  domProps: { innerHTML: e._s(e.subheadline) },
                }),
                a(
                  "div",
                  {
                    staticClass: "teaser__image-mobile",
                    class: "teaser__image-mobile--" + e.imageAppPosition,
                    staticStyle: { "aspect-ratio": "10/9" },
                  },
                  [
                    a("img", {
                      class:
                        "teaser__image-main scroll-into reveal-image-" +
                        e.variant,
                      attrs: { src: e.filePath(e.image), alt: e.altText },
                    }),
                    e.imageApp
                      ? a("img", {
                          class:
                            "teaser__image-app teaser__image-app--" +
                            e.imageAppPosition +
                            " scroll-into reveal-image-" +
                            e.variant,
                          attrs: {
                            "data-reveal_delay": "0.25",
                            "data-reveal_start":
                              e.imageAppPosition && "top" === e.imageAppPosition
                                ? "50% center"
                                : "top 85%",
                            src: e.filePath(e.imageApp),
                            alt: "",
                          },
                        })
                      : e._e(),
                  ]
                ),
                a("p", {
                  staticClass: "teaser__copy",
                  domProps: { innerHTML: e._s(e.copy) },
                }),
                a(
                  "div",
                  { staticClass: "teaser__button" },
                  [e._t("button")],
                  2
                ),
              ]
            ),
            a(
              "div",
              {
                staticClass: "teaser__image-desktop",
                class: "teaser__image-desktop--" + e.imageAppPosition,
                staticStyle: { "aspect-ratio": "10/9" },
              },
              [
                a("img", {
                  class:
                    "teaser__image-main scroll-into reveal-image-" + e.variant,
                  attrs: { src: e.filePath(e.image), alt: e.altText },
                }),
                e.imageApp
                  ? a("img", {
                      class:
                        "teaser__image-app teaser__image-app--" +
                        e.imageAppPosition +
                        " scroll-into reveal-image-" +
                        e.variant,
                      attrs: {
                        "data-reveal_delay": "0.25",
                        "data-reveal_start":
                          e.imageAppPosition && "top" === e.imageAppPosition
                            ? "50% center"
                            : "top 85%",
                        src: e.filePath(e.imageApp),
                        alt: "",
                      },
                    })
                  : e._e(),
              ]
            ),
          ],
          2
        );
      },
      B = [],
      M = a("1dac");
    A["a"].registerPlugin(M["a"]);
    var O = {
        props: {
          variant: { type: String, default: "left" },
          image: { type: String, required: !0 },
          imageApp: { type: String, required: !1 },
          imageAppPosition: { type: String, required: !1 },
          altText: { type: String, required: !1 },
          headline: { type: String, required: !0 },
          subheadline: { type: String, required: !0 },
          copy: { type: String, required: !0 },
          number: { type: String, required: null },
          background: { type: String, default: null },
        },
        mounted() {
          window.innerWidth >= 740 &&
            A["a"].utils.toArray(".scroll-into").forEach((e) => {
              let t = "top 50%";
              e.dataset.reveal_start && (t = e.dataset.reveal_start),
                A["a"].set(e, { autoAlpha: 0 }),
                M["a"].create({
                  trigger: e,
                  start: t,
                  once: !0,
                  onEnter: () => {
                    this.animateFrom(e);
                  },
                });
            });
        },
        methods: {
          filePath(e) {
            return "assets/" + e;
          },
          animateFrom(e) {
            let t = 0,
              a = 100;
            e.classList.contains("reveal-left") ||
            e.classList.contains("reveal-image-right")
              ? ((t = -100), (a = 0))
              : (e.classList.contains("reveal-right") ||
                  e.classList.contains("reveal-image-left")) &&
                ((t = 100), (a = 0));
            let n = 0;
            e.dataset.reveal_delay && (n = e.dataset.reveal_delay),
              A["a"].fromTo(
                e,
                { x: t, y: a, autoAlpha: 0 },
                {
                  duration: 2.5,
                  delay: n,
                  x: 0,
                  y: 0,
                  autoAlpha: 1,
                  ease: "expo",
                  overwrite: "auto",
                }
              );
          },
        },
      },
      E = O,
      $ = (a("4e22"), Object(c["a"])(E, D, B, !1, null, "7acae885", null)),
      q = $.exports,
      H = a("0902"),
      V = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "section",
          { staticClass: "nextSteps", staticStyle: { background: "#000" } },
          [
            a("div", {
              staticStyle: {
                width: "100%",
                height: "18px",
                background:
                  "linear-gradient(90deg, #F0AB00 0%, #970A82 50%, #008FD3 100%)",
              },
            }),
            a("span", {
              attrs: {
                role: "img",
                "aria-label":
                  "Man wearing glasses looking down at the iPhone he’s holding",
              },
            }),
            a("div", { staticClass: "nextSteps__content " }, [
              a(
                "h2",
                { staticClass: "nextSteps__headline" },
                [e._t("headline")],
                2
              ),
              a("p", { staticClass: "nextSteps__copy" }, [e._t("copy")], 2),
              a(
                "div",
                { staticClass: "nextSteps__buttons" },
                [e._t("buttons")],
                2
              ),
            ]),
          ]
        );
      },
      U = [],
      z = { props: { background: { type: String, required: !0 } } },
      j = z,
      N = (a("a059"), Object(c["a"])(j, V, U, !1, null, "4a5062d7", null)),
      F = N.exports;
    A["a"].registerPlugin(M["a"]);
    var J = {
        components: {
          NextSteps: F,
          Teaser: q,
          Stage: C,
          Button: H["a"],
          Navigation: S,
        },
        data() {
          return { isOpen: !1, activePinId: "" };
        },
        mounted() {
          A["a"].timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger-1",
              start: "top 50%",
              end: "bottom 50%",
              onToggle: (e) => {
                e.isActive && (this.activePinId = e.trigger.id);
              },
            },
          }),
            A["a"].timeline({
              scrollTrigger: {
                trigger: ".scroll-trigger-2",
                start: "top 70%",
                end: "bottom 50%",
                onToggle: (e) => {
                  e.isActive && (this.activePinId = e.trigger.id);
                },
              },
            }),
            A["a"].timeline({
              scrollTrigger: {
                trigger: ".scroll-trigger-3",
                start: "top 50%",
                end: "bottom 50%",
                onToggle: (e) => {
                  e.isActive && (this.activePinId = e.trigger.id);
                },
              },
            }),
            A["a"].timeline({
              scrollTrigger: {
                trigger: ".scroll-trigger-4",
                start: "top 50%",
                end: "bottom 50%",
                onToggle: (e) => {
                  e.isActive && (this.activePinId = e.trigger.id);
                },
              },
            }),
            A["a"].timeline({
              scrollTrigger: {
                trigger: ".scroll-trigger-5",
                start: "top 50%",
                end: "bottom 50%",
                onToggle: (e) => {
                  e.isActive && (this.activePinId = e.trigger.id);
                },
              },
            });
        },
        methods: {
          scrollTo(e, t) {
            _()(document.querySelector(e), { verticalOffset: t || -50 });
          },
          scrollToAndClose(e) {
            this.$emit("close");
            const t = window.innerWidth < 1024;
            let a = 0;
            switch (e) {
              case "#featuredDemos":
                a = window.innerHeight < 600 ? -60 : -70;
                break;
              case "#nextSteps":
                a = 0;
                break;
              default:
                a = t
                  ? -60
                  : window.innerHeight < 600
                  ? 0.1 * -window.innerHeight
                  : 0.26 * -window.innerHeight;
                break;
            }
            this.isOpen && (this.isOpen = !1),
              _()(document.querySelector(e), { verticalOffset: a });
          },
          back() {
            _()(document.querySelector("#welcome"));
          },
        },
      },
      W = J,
      R = (a("5a01"), Object(c["a"])(W, h, m, !1, null, "1db5ebc6", null)),
      G = R.exports;
    n["default"].use(p["a"]);
    const K = [
        { path: "/", redirect: "/guided-demo-data-assist" },
        {
          path: "/guided-demo-data-assist",
          component: G,
          props: !0,
          meta: { title: "Data ASSIST by Auritas" },
          children: [
            {
              path: "/guided-demo-data-assist/api-integration",
              props: { default: !0, data: u.apiIntegration },
              component: () =>
                Promise.all([
                  a.e(
                    "api-integration~b2b-integration~event-driven-integration"
                  ),
                  a.e("api-integration"),
                ]).then(a.bind(null, "a80a")),
            },
            {
              path: "/guided-demo-data-assist/event-driven-integration",
              props: { default: !0, data: u.eventDrivenIntegration },
              component: () =>
                Promise.all([
                  a.e(
                    "api-integration~b2b-integration~event-driven-integration"
                  ),
                  a.e("event-driven-integration"),
                ]).then(a.bind(null, "2761")),
            },
            {
              path: "/guided-demo-data-assist/b2b-integration",
              props: { default: !0, data: u.b2bIntegration },
              component: () =>
                Promise.all([
                  a.e(
                    "api-integration~b2b-integration~event-driven-integration"
                  ),
                  a.e("b2b-integration"),
                ]).then(a.bind(null, "ddf0")),
            },
          ],
        },
      ],
      Z = new p["a"]({
        routes: K,
        scrollBehavior(e) {
          if (e.hash)
            return new Promise((t) => {
              setTimeout(() => {
                t({ selector: e.hash });
              });
            });
        },
      }),
      Q = "Data ASSIST by Auritas";
    Z.afterEach((e) => {
      n["default"].nextTick(() => {
        document.title = e.meta.title || Q;
      });
    });
    var Y = Z,
      X = (a("466d"), a("ddb0"), a("a925"));
    function ee() {
      const e = a("49f8"),
        t = {};
      return (
        e.keys().forEach((a) => {
          const n = a.match(/([A-Za-z0-9-_]+)\./i);
          if (n && n.length > 1) {
            const i = n[1];
            t[i] = e(a);
          }
        }),
        t
      );
    }
    n["default"].use(X["a"]);
    var te = new X["a"]({ locale: "en", fallbackLocale: "en", messages: ee() }),
      ae = (a("1be0"), a("2f62"));
    n["default"].use(ae["a"]);
    var ne = new ae["a"].Store({
      state() {
        return {
          reduceMotion: !1,
          userClickedTargetOnce: !1,
          demoStatus: { currentIndex: 0, paragraphIndex: 0, isPaused: !1 },
        };
      },
      mutations: {
        updateReduceMotion(e, t) {
          e.reduceMotion = t;
        },
        updateCurrentIndex(e, t) {
          e.demoStatus.currentIndex = t;
        },
        updateParagraphIndex(e, t) {
          e.demoStatus.paragraphIndex = t;
        },
        updateIsPaused(e, t) {
          e.demoStatus.isPaused = t;
        },
        resetDemoStatus(e) {
          e.demoStatus = { currentIndex: 0, paragraphIndex: 0, isPaused: !1 };
        },
        updateUserClickedTargetOnce(e, t) {
          e.userClickedTargetOnce = t;
        },
      },
    });
    (n["default"].config.productionTip = !1),
      new n["default"]({
        router: Y,
        store: ne,
        i18n: te,
        render: (e) => e(g),
      }).$mount("#app");
  },
  "5a01": function (e, t, a) {
    "use strict";
    a("16f2");
  },
  "64b8": function (e, t, a) {},
  "7c4d": function (e, t, a) {
    "use strict";
    a("b685");
  },
  "85ec": function (e, t, a) {},
  a059: function (e, t, a) {
    "use strict";
    a("a554");
  },
  a554: function (e, t, a) {},
  b685: function (e, t, a) {},
  bc34: function (e, t, a) {
    "use strict";
    a("fc13");
  },
  edd4: function (e) {
    e.exports = JSON.parse(
      '{"general":{"introduction":"Introduction","conclusion":"Conclusion","back":"Back","next":"Next","title":"Data ASSIST by Auritas","stageImgAlt":"data assist by auritas brand icon","frameAlt":"electronic device frame","nextStepLabel":"Man wearing glasses looking down at the iPhone he’s holding","readLess":"Read less","readMore":"Read more","noScriptError":"We\'re sorry but this SAP self-guided demo doesn\'t work properly without JavaScript enabled. Please enable it to continue.","menuIcon":"menu icon"},"apiIntegration":{"section":"Data ASSIST by Auritas","headingBlock":{"heading":"Data ASSIST by Auritas","subHeading":"Creating simple, connected digital experiences"},"introScreen":{"headline":"Lucinda’s organization is undergoing a massive digital transformation.","ariaLabel":"People conversing in a business setting","paragraph":["The organization has many different applications and systems that need to connect and share information with each other. Lucinda would like to enhance this connectivity and automate these tasks. She hopes this will improve customer engagement and simplify the integration process. Lucinda would also like to have access to monitoring tools and analytics to provide her leaders with important insights.<br/><br/>Let’s examine how Data ASSIST by Auritas can help."],"source":{"text":"<strong class=\'source-begin\'>Source: <strong/><strong class=\'source\'>SAP Insights Research: What Is Data Management? </strong>"},"button":{"text":"Start demo"}},"content":[{"headline":"Use SAP Open Connectors","step":"Step 1","paragraphs":"Data ASSIST by Auritas brings simplified connectivity to any application with <span class=\'bold\'>SAP Open Connectors</span>. With prebuilt, feature-rich connectors, Lucinda can seamlessly integrate non-SAP cloud applications.<br/><br/>In the <span class=\'bold\'>Connectors Catalog</span>, Lucinda can easily view the list of all API providers available in SAP Open Connectors. She can also build a new connector if it’s not available in the catalog.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Cloud Integration","step":"Step 2","paragraphs":"Data ASSIST by Auritas simplifies the integration process with SAP Cloud Integration. Lucinda can leverage design guidelines, troubleshooting resources, and prebuilt integration packages to assist and accelerate the process. She can also monitor the integration flows and KPIs for message processing.<br/><br/>Multiple resources and documentation are available to support getting started.<br/><br/>In <span class=\'bold\'>Discover</span>, Lucinda can view all available integration packages.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Cloud Integration","step":"Step 2","paragraphs":"In <span class=\'bold\'>Design</span>, Lucinda can build and run integration flows and support end-to-end process integration. After completing this task, Lucinda can save the changes, save as a version, or deploy the integration flow. ","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Cloud Integration","step":"Step 2","paragraphs":"In <span class=\'bold\'>Monitor</span>, Lucinda can view the message and runtime logs, manage integration artifacts such as integration flows and value mappings, and maintain security and consistency. ","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP API Business Hub","step":"Step 3","paragraphs":"SAP API Business Hub is a web application hosted by SAP to discover, explore, and test SAP and non-SAP APIs required to build extensions or process integrations.<br/><br/>On the SAP API Business Hub home page, Lucinda can discover different categories of content and find helpful enablement resources, integration content, and more.<br/><br/>In <span class=\'bold\'>Explore</span>, content is available for different product content categories, helpful enablement resources, integration content, and more. Lucinda can navigate to APIs, view the available list, and try out the selected API. If needed, she can download business documentation and API specifications.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP API Management","step":"Step 4","paragraphs":"SAP API Management lets you publish, promote, and oversee APIs in a secure and scalable environment.<br/><br/>With API Management, Lucinda can manage APIs across multiple platforms in an enriched environment with real-time analytics. API Management also handles the authorizations required to protect, analyze, and monitor services and provides the tools Lucinda needs to complete her tasks.<br/><br/><span class=\'bold\'>API Portal</span> is Lucinda’s one-stop shop to create, secure, and publish API proxies and products. Here, Lucinda can develop, configure, analyze, and monetize APIs, artifacts, products, etc.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP API Management","step":"Step 4","paragraphs":"In <span class=\'bold\'>API portal</span>, there is also an option to create an API in <span class=\'bold\'>API Designer</span>. Lucinda can import or paste the contexts, save, then deploy. Once deployed, the API is now available.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP API Management","step":"Step 4","paragraphs":"<span class=\'bold\'>API Business Hub Enterprise</span> is the self-service developer portal and centralized API catalog. Here Lucinda can discover, browse, and monitor all the available APIs published from the connected API portals. She can also generate code snippets, create a new application, and more.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP API Management","step":"Step 4","paragraphs":"<span class=\'bold\'>API Portal – Analytics dashboard</span> provides Lucinda with a powerful tool to view a summary of all API information, such as response times, latency data, API errors, etc., so she can track her organization’s overall API status and usage.","ariaLabel":"Video showcasing the interactions discussed"},{"ariaLabel":"Video showcasing the interactions discussed"}],"conclusion":{"text":"Seamless API integration is essential for organizations to have a single, unified platform for creating, publishing, and managing API connections between multiple applications, systems, and data sources across the entire enterprise. This allows you to monitor integration flows, ensure efficiency with fast response times, and gain access to valuable data and statistics.<br/><br/>Let’s explore more ways Data ASSIST by Auritas connects and automates your business.","img":{"alt":"Overhead view of people working in an office setting"},"links":[{"atag":{"text":"Enabling Event-Driven Integrations demo"}},{"atag":{"text":"Supporting B2B Integrations demo"}}],"learnMoreButton":{"text":"Learn more about Data ASSIST by Auritas"}}},"eventDrivenIntegration":{"section":"Data GUARD by Auritas","headingBlock":{"heading":"Data ASSIST by Auritas","subHeading":"Enabling event-driven architecture and real-time integrations"},"introScreen":{"headline":"Kim’s organization manages high-volume flows of information between applications, devices, third-party systems, and more.","ariaLabel":"People sitting in a circle and conversing in a business setting","paragraph":["The organization manages physical store locations and factories where thousands of transactions occur daily. Kim needs a solution that can react to high-volume events, in real time, without disrupting their core business systems. Kim\'s organization desires an integrated system that can support its peak holiday season and provide a seamless customer experience.<br/><br/>Let’s investigate how Data ASSIST by Auritas can help Kim’s organization accomplish its goals."],"source":{"text":"<strong class=\'source-begin\'>Source: <strong/><strong class=\'source\'>SAP Insights Research: What Is Data Management? </strong>"},"button":{"text":"Start demo"}},"content":[{"headline":"Use SAP Event Mesh","step":"Step 1","paragraphs":"SAP Event Mesh is a fully managed service that allows applications to communicate through asynchronous events. Kim’s organization can experience greater agility and scalability when creating responsive applications that work independently.<br/><br/>The SAP Event Mesh user interface allows Kim to manage messaging clients and event catalogs for an SAP Business Technology Platform subaccount. From SAP Event Mesh, they can efficiently publish, consume, and subscribe to business events from SAP and non-SAP sources from different systems, applications, or services activities.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Event Mesh","step":"Step 1","paragraphs":"<span class=\'bold\'>Queues</span> enable point-to-point communication between the two applications. They are the core of asynchronous messaging. Applications can subscribe to a queue. On the Queues tab, you can view the list of queues and the number of messages in each, as well as the queue size. Messages are retained in queues until they are consumed by subscribing applications.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Event Mesh","step":"Step 1","paragraphs":"When customers or business partners of Kim’s organization make updates to their contact information or submit a request for order status details, this will raise an event that is transported by Event Mesh to the customer service applications subscribed to those events.<br/><br/>In <span class=\'bold\'>Queues</span>, once these changes are entered in the backend system, the event message is immediately consumed by the customer service application."},{"headline":"Use SAP Event Mesh","step":"Step 1","paragraphs":"To consume the message still in queue, Kim can click on <span class=\'bold\'>Test</span>, select the queue, and quickly consume the message. This is a notification event that was received by the customer service application.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use Data ASSIST by Auritas, Advanced Event Mesh","step":"Step 2","paragraphs":"Data ASSIST by Auritas, Advanced Event Mesh supports event-driven architectures and allows applications to communicate in real time, across distributed landscapes. With this capability, Kim can access support for managing events, runtime, and monitoring insights.<br/><br/><span class=\'bold\'>Event Portal</span> is an event management tool Kim can use to design, discover, visualize, share, and manage various aspects of their event-driven architecture (EDA).","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use Data ASSIST by Auritas, Advanced Event Mesh","step":"Step 2","paragraphs":"With <span class=\'bold\'>Designer</span>, Kim can design and view all aspects of their organization’s EDA. The tool provides a graphical representation of application domains, applications, schemas, and events to help visualize the integration of events between applications.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use Data ASSIST by Auritas, Advanced Event Mesh","step":"Step 2","paragraphs":"Under <span class=\'bold\'>Catalog</span>, Kim can browse or search for the organization’s existing events, schemas, and applications in each domain. This is helpful to reference when building applications that utilize these events.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use Data ASSIST by Auritas, Advanced Event Mesh","step":"Step 2","paragraphs":"With <span class=\'bold\'>Discovery Center</span>, Kim can discover, import, and visualize the organization’s EDA, including all associated applications and events and their relationships from existing event brokers. They  can run scans against the event brokers, discover the data, and choose to import the data to view in Catalog and Designer.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use Data ASSIST by Auritas, Advanced Event Mesh","step":"Step 2","paragraphs":"Using <span class=\'bold\'>Event API Products</span>, they can group events and make them available as API products.","ariaLabel":"Video showcasing the interactions discussed"},{"ariaLabel":"Video showcasing the interactions discussed"}],"conclusion":{"text":"Data GUARD by Auritas allows real-time flow of information, improved response times, greater agility, and overall profitability, allowing you to offer a seamless digital experience.<br/><br/>Let’s explore another scenario with Data ASSIST by Auritas.","img":{"alt":"view of a city highway at night"},"links":[{"atag":{"text":"Creating simple, connected digital experiences demo"}},{"atag":{"text":"Supporting B2B Integrations demo"}}],"learnMoreButton":{"text":"Learn more about Data ASSIST by Auritas"}}},"b2bIntegration":{"section":"Data SEARCH by Auritas","headingBlock":{"heading":"Data ASSIST by Auritas","subHeading":"Supporting B2B Integrations"},"introScreen":{"headline":"Jerry’s organization is struggling to automate and improve its interactions with suppliers and business partners.","ariaLabel":"Person using a tablet device ","paragraph":["In his current role, Jerry is tasked with onboarding new international business partners for the digital ordering process. Manually adding these partners and their data requirements, as well as the industry standard messaging protocols for each, will be too time consuming. Jerry needs a platform that enables him to automate these processes to not only save time, but also improve his organization’s vendor relationships.<br/><br/>Let’s explore how Data ASSIST by Auritas can help Jerry accomplish all these tasks."],"source":{"text":"<strong class=\'source-begin\'>Source: <strong/><strong class=\'source\'>SAP Insights Research: What Is Data Management? </strong>"},"button":{"text":"Start demo"}},"content":[{"headline":"Use SAP Integration Advisor","step":"Step 1","paragraphs":"SAP Integration Advisor helps Jerry streamline the implementation flow of his company’s B2B, A2A, and B2G integration processes. It uses a crowd-based machine learning approach to help accelerate the implementation and maintenance of B2B standard scenarios. With SAP Integration Advisor, Jerry can easily meet the industry standard with access to industry and geographic implementation guidelines.<br/><br/>SAP Integration Advisor gives Jerry numerous options.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Integration Advisor","step":"Step 1","paragraphs":"<span class=\'bold\'>Library of Type Systems</span> shows an overview of all available type systems, a collection of message templates provided by agencies that maintain the B2B/A2A/B2G standards.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Integration Advisor","step":"Step 1","paragraphs":"<span class=\'bold\'>Message Implementation Guidelines (MIG)</span> specify how information is being exchanged with the partner. Jerry can select the protocol, message, and version used by the partner. He can also specify a name, summary, and industry classification.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Integration Advisor","step":"Step 1","paragraphs":"The information Jerry enters allows the Integration Advisor to propose implementation guidelines for the specific messages exchanged, which he can then view under <span class=\'bold\'>Get Proposals</span>. The guidelines include confidence indicators for each field in the recommendation.<br/><br/>Once Jerry saves the implementation guideline, he can use the MIG.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Integration Advisor","step":"Step 1","paragraphs":"Jerry can use the <span class=\'bold\'>Mapping Guidelines</span> tool to create the mapping between the partner’s messages and the messages used at his organization. Once the source and the target are selected, the tool is then able to propose the mapping. After review of the proposal, Jerry can save and export the mapping documentation or runtime artifacts.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Trading Partner Management","step":"Step 2","paragraphs":"SAP Trading Partner Management helps Jerry manage business transactions with multiple trading partners. He can create and maintain trading partner profiles to meet unique requirements, set identifiers, and develop templates for trading partner agreements for specific B2B scenarios. This helps accelerate the onboarding of trading partners and ensures B2B requirements are fulfilled.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Trading Partner Management","step":"Step 2","paragraphs":"In the <span class=\'bold\'>Design</span> tab, Jerry can create and maintain trading partner and agreement details. It consists of different sub tabs, including company profile, trading partners, agreement templates, and agreements.","ariaLabel":"Video showcasing the interactions discussed"},{"headline":"Use SAP Trading Partner Management","step":"Step 2","paragraphs":"The <span class=\'bold\'>Monitor</span> tab is where Jerry can monitor his business-to-business transactions. All processed messages are displayed, and various filter options allow him to easily view interchange details and technical monitoring. ","ariaLabel":"Video showcasing the interactions discussed"},{"ariaLabel":"Video showcasing the interactions discussed"}],"conclusion":{"text":"With Data ASSIST by Auritas, you can create an efficient, secure, and scalable B2B platform to quickly connect and communicate with your trading partners. The robust integration process management framework supports efficient message exchange across your ecosystem, and intelligent advisors help you structure message definitions and mappings for smooth information exchanges and faster partner onboarding.","img":{"alt":"Panoramic aerial view of a cityscape at dusk"},"links":[{"atag":{"text":"Creating simple, connected digital experiences demo"}},{"atag":{"text":"Enabling Event-Driven Integrations demo"}}],"learnMoreButton":{"text":"Learn more about Data ASSIST by Auritas"}}},"landingPage":{"stage":{"headline":"We Manage and Empower Your DATA","copy":"Choose a demo","ariaLabel":"Man holding a laptop standing in front of a server farm","buttons":[{"text":"Data ASSIST by Auritas","url":"#teaser0","variant":"secondary"},{"text":"Data GUARD by Auritas","url":"#teaser1","variant":"secondary"},{"text":"Data SEARCH by Auritas","url":"#teaser2","variant":"secondary"}]},"intro":{"copy":"DATA ASSIST by Auritas is an all-in-one solution that allows users to perform an accurate analysis of archive objects within their database while scheduling & automating the archival process."},"sidebar":{"header":"Auritas DATA Suite","subheader":"Self-guided demo","list":[{"text":"Welcome","target":"#welcome"},{"child":[{"text":"Data ASSIST by Auritas","url":"#teaser0"},{"text":"Data GUARD by Auritas","url":"#teaser1"},{"text":"Data SEARCH by Auritas","url":"#teaser2"}]},{"text":"Take the Next Step","target":"#nextSteps"}]},"nextStep":{"headline":"Take the Next Step","copy":"Contact us for further information on Data ASSIST by Auritas or to schedule an individualized demo.","button":[{"target":"https://www.auritas.com/data-assist/","text":"Request a demo"},{"target":"https://store.sap.com/product/display-0000060335_live_v1/data-assist-by-auritas","text":"Learn more about Data ASSIST by Auritas"}]},"demoApiIntegration":{"altText":"Person using a laptop","headline":"Data ASSIST by Auritas","subheadline":"Scalable, unified platform • Pre-packaged content • Valuable insights","copy":"DATA ASSIST by Auritas is an all-in-one solution that allows users to perform an accurate analysis of archive objects within their database while scheduling & automating the archival process.<br/><br/><span class=\'bold\'>Click on the demo below to learn more</span>","button":"Start demo"},"demoEventDrivenInt":{"altText":"Close-up of a person touching a tablet device","headline":"Data GUARD by Auritas","subheadline":"Real-time responsiveness • Distributed landscapes • Asynchronous communication","copy":"An event is a change in a business application, such as when information is added, modified, or deleted. In organizations, many system events occur. For example, a customer places an online order for an item. When the order is entered, the system sends a notification event to the supplier’s connected inventory management system to fetch additional data for the item’s inventory status. This event-driven approach is critical to meeting business demands quickly and remaining competitive in today’s fast-paced digital world. Data ASSIST by Auritas supports event-driven architectures and enables solutions to communicate with different systems through asynchronous events.<br/><br/><span class=\'bold\'>Click on the demo below to learn more</span>","button":"Start demo"},"demoB2bInt":{"altText":"People walking and conversing on a city sidewalk","headline":"Data SEARCH by Auritas","subheadline":"Seamless information exchanges • Faster partner onboarding • Improved visibility","copy":"Data ASSIST by Auritas can help you improve B2B communications and processes to reduce overall costs, improve connectivity, accelerate partner onboarding, and much more. B2B integration is key to creating an efficient supply chain with enhanced visibility and control. Data ASSIST by Auritas enables automation to improve communication between your organization and your business partners or suppliers.<br/><br/><span class=\'bold\'>Click on the demo below to learn more</span>","button":"Start demo"}}}'
    );
  },
  fc13: function (e, t, a) {},
});
//# sourceMappingURL=app.aa7b0279.js.map
