(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["api-integration~b2b-integration~event-driven-integration"],
  {
    "001f": function (t, e, a) {
      "use strict";
      a("c543");
    },
    "0061": function (t, e, a) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "PopupOverlay" });
        },
        i = [],
        r = { name: "PopupOverlay" },
        s = r,
        o = (a("87d7"), a("2877")),
        d = Object(o["a"])(s, n, i, !1, null, null, null);
      e["a"] = d.exports;
    },
    "00a6": function (t, e, a) {},
    "0209": function (t, e, a) {},
    "0fd8": function (t, e, a) {},
    1276: function (t, e, a) {
      "use strict";
      var n = a("d784"),
        i = a("44e7"),
        r = a("825a"),
        s = a("1d80"),
        o = a("4840"),
        d = a("8aa5"),
        c = a("50c4"),
        l = a("14c3"),
        u = a("9263"),
        h = a("d039"),
        p = [].push,
        m = Math.min,
        f = 4294967295,
        g = !h(function () {
          return !RegExp(f, "y");
        });
      n(
        "split",
        2,
        function (t, e, a) {
          var n;
          return (
            (n =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function (t, a) {
                    var n = String(s(this)),
                      r = void 0 === a ? f : a >>> 0;
                    if (0 === r) return [];
                    if (void 0 === t) return [n];
                    if (!i(t)) return e.call(n, t, r);
                    var o,
                      d,
                      c,
                      l = [],
                      h =
                        (t.ignoreCase ? "i" : "") +
                        (t.multiline ? "m" : "") +
                        (t.unicode ? "u" : "") +
                        (t.sticky ? "y" : ""),
                      m = 0,
                      g = new RegExp(t.source, h + "g");
                    while ((o = u.call(g, n))) {
                      if (
                        ((d = g.lastIndex),
                        d > m &&
                          (l.push(n.slice(m, o.index)),
                          o.length > 1 &&
                            o.index < n.length &&
                            p.apply(l, o.slice(1)),
                          (c = o[0].length),
                          (m = d),
                          l.length >= r))
                      )
                        break;
                      g.lastIndex === o.index && g.lastIndex++;
                    }
                    return (
                      m === n.length
                        ? (!c && g.test("")) || l.push("")
                        : l.push(n.slice(m)),
                      l.length > r ? l.slice(0, r) : l
                    );
                  }
                : "0".split(void 0, 0).length
                ? function (t, a) {
                    return void 0 === t && 0 === a ? [] : e.call(this, t, a);
                  }
                : e),
            [
              function (e, a) {
                var i = s(this),
                  r = void 0 == e ? void 0 : e[t];
                return void 0 !== r ? r.call(e, i, a) : n.call(String(i), e, a);
              },
              function (t, i) {
                var s = a(n, t, this, i, n !== e);
                if (s.done) return s.value;
                var u = r(t),
                  h = String(this),
                  p = o(u, RegExp),
                  v = u.unicode,
                  _ =
                    (u.ignoreCase ? "i" : "") +
                    (u.multiline ? "m" : "") +
                    (u.unicode ? "u" : "") +
                    (g ? "y" : "g"),
                  x = new p(g ? u : "^(?:" + u.source + ")", _),
                  b = void 0 === i ? f : i >>> 0;
                if (0 === b) return [];
                if (0 === h.length) return null === l(x, h) ? [h] : [];
                var y = 0,
                  w = 0,
                  C = [];
                while (w < h.length) {
                  x.lastIndex = g ? w : 0;
                  var I,
                    $ = l(x, g ? h : h.slice(w));
                  if (
                    null === $ ||
                    (I = m(c(x.lastIndex + (g ? 0 : w)), h.length)) === y
                  )
                    w = d(h, w, v);
                  else {
                    if ((C.push(h.slice(y, w)), C.length === b)) return C;
                    for (var P = 1; P <= $.length - 1; P++)
                      if ((C.push($[P]), C.length === b)) return C;
                    w = y = I;
                  }
                }
                return C.push(h.slice(y)), C;
              },
            ]
          );
        },
        !g
      );
    },
    "13c7": function (t, e, a) {
      "use strict";
      a("e4c8");
    },
    "191b": function (t, e, a) {
      "use strict";
      a("370e");
    },
    "1aee": function (t, e, a) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "popupContent" }, [
            a(
              "div",
              { staticClass: "popupContent__wrapper" },
              [t._t("default")],
              2
            ),
          ]);
        },
        i = [],
        r = {
          methods: {
            handleRoute() {
              this.$router.push(this.$route.matched[0].path);
            },
          },
        },
        s = r,
        o = (a("a203"), a("2877")),
        d = Object(o["a"])(s, n, i, !1, null, "1b8de610", null);
      e["a"] = d.exports;
    },
    "35f7": function (t, e, a) {
      "use strict";
      a("3b97");
    },
    "370e": function (t, e, a) {},
    "3b97": function (t, e, a) {},
    4105: function (t, e, a) {
      "use strict";
      a("ef27");
    },
    "44e7": function (t, e, a) {
      var n = a("861d"),
        i = a("c6b6"),
        r = a("b622"),
        s = r("match");
      t.exports = function (t) {
        var e;
        return n(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == i(t));
      };
    },
    "4aec": function (t, e, a) {
      "use strict";
      a("955a");
    },
    5101: function (t, e, a) {
      "use strict";
      a("f3b6");
    },
    "5e1b": function (t, e, a) {},
    6060: function (t, e, a) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { class: "demo-container " + t.data.setClassName },
            [
              t.demoStarted
                ? t._e()
                : a("DemoHeader", {
                    attrs: { progress: "1" },
                    scopedSlots: t._u(
                      [
                        {
                          key: "header",
                          fn: function () {
                            return [
                              a(
                                "h1",
                                { staticClass: "h3 demo-header__title" },
                                [t._v(t._s(t.$t(t.data.section)))]
                              ),
                            ];
                          },
                          proxy: !0,
                        },
                        {
                          key: "subheader",
                          fn: function () {
                            return [
                              a("h1", [
                                t._v(t._s(t.$t("general.introduction"))),
                              ]),
                            ];
                          },
                          proxy: !0,
                        },
                      ],
                      null,
                      !1,
                      2262545966
                    ),
                  }),
              a(
                "div",
                { class: { "demo-container__inner--intro": !t.demoStarted } },
                [
                  a("DemoIntroVideo", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.demoStarted,
                        expression: "!demoStarted",
                      },
                    ],
                    attrs: {
                      path: t.data.introScreen.path,
                      ariaLabel: t.$t(t.data.introScreen.ariaLabel),
                      pause:
                        (t.introVideoPause && t.reduceMotion) || t.reduceMotion,
                    },
                    on: { startDemo: t.handleDemo },
                  }),
                  t.demoStarted
                    ? t._e()
                    : a(
                        "div",
                        {
                          staticClass: "demo-container__play-pause-intro",
                          attrs: {
                            role: "button",
                            "aria-label": "turn off motion",
                            tabindex: "0",
                          },
                          on: {
                            click: function (e) {
                              t.reduceMotion = !t.reduceMotion;
                            },
                            keydown: function (e) {
                              if (
                                !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                              )
                                return null;
                              t.reduceMotion = !t.reduceMotion;
                            },
                          },
                        },
                        [
                          t.reduceMotion
                            ? t._e()
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
                          !0 === t.reduceMotion
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
                                    a(
                                      "g",
                                      { attrs: { "clip-path": "url(#clip0)" } },
                                      [
                                        a(
                                          "g",
                                          {
                                            attrs: {
                                              filter: "url(#filter0_d)",
                                            },
                                          },
                                          [
                                            a("path", {
                                              attrs: {
                                                d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z",
                                                fill: "white",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
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
                                            "color-interpolation-filters":
                                              "sRGB",
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
                                      a(
                                        "clipPath",
                                        { attrs: { id: "clip0" } },
                                        [
                                          a("rect", {
                                            attrs: {
                                              width: "24",
                                              height: "24",
                                              fill: "white",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ])
                            : t._e(),
                        ]
                      ),
                  t.demoStarted
                    ? t._e()
                    : a("div", { staticClass: "demo-container__intro" }, [
                        a(
                          "div",
                          { staticClass: "demo-container__paragraph" },
                          [
                            a("p", { staticClass: "demo-container__subhead" }, [
                              t._v(
                                " " +
                                  t._s(t.$t(t.data.headingBlock.subHeading)) +
                                  " "
                              ),
                            ]),
                            a(
                              "h3",
                              { staticClass: "demo-container__heading h3" },
                              [
                                t._v(
                                  " " +
                                    t._s(t.$t(t.data.introScreen.headline)) +
                                    " "
                                ),
                              ]
                            ),
                            t._l(
                              t.$t(t.data.introScreen.paragraph),
                              function (e, n) {
                                return a("div", {
                                  key: n,
                                  domProps: { innerHTML: t._s(e) },
                                });
                              }
                            ),
                            a(
                              "div",
                              {
                                staticClass: "demo-container__button",
                                on: { click: t.handleDemo },
                              },
                              [
                                a(
                                  "Button",
                                  { attrs: { variant: "primary", size: "lg" } },
                                  [
                                    a("span", [
                                      t._v(t._s(t.$t("general.next"))),
                                    ]),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          2
                        ),
                      ]),
                  t.demoStarted
                    ? a("DemoStage", { attrs: { data: t.data } })
                    : t._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        i = [],
        r = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "video",
            {
              class: t.pause
                ? "demo-intro-video demo-intro-video--pause"
                : "demo-intro-video",
              attrs: {
                "aria-label": t.ariaLabel,
                autoplay: !t.pause,
                loop: "",
                muted: "",
                playsinline: "",
                id: "demoIntroVideo",
              },
              domProps: { muted: !0 },
            },
            [
              a("source", { attrs: { src: t.filePath, type: "video/mp4" } }),
              t._v(" Your browser does not support the video tag. "),
            ]
          );
        },
        s = [],
        o = {
          props: {
            path: { type: String, default: "" },
            pause: { type: Boolean, default: !1 },
            ariaLabel: { type: String, required: !1 },
          },
          watch: {
            pause(t) {
              let e = document.getElementById("demoIntroVideo");
              t ? e.pause() : e.play();
            },
          },
          computed: {
            filePath() {
              return "assets/" + this.path;
            },
          },
        },
        d = o,
        c = (a("191b"), a("2877")),
        l = Object(c["a"])(d, r, s, !1, null, "07b9d050", null),
        u = l.exports,
        h = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("transition", { attrs: { name: "fade" } }, [
            t.show
              ? a(
                  "div",
                  { class: "demo-stage" },
                  [
                    a("DemoHeader", {
                      attrs: {
                        progress: t.final ? "1" : t.videoProgress.toFixed(3),
                      },
                      scopedSlots: t._u(
                        [
                          {
                            key: "header",
                            fn: function () {
                              return [
                                a(
                                  "h1",
                                  { staticClass: "h3 demo-header__title" },
                                  [t._v(t._s(t.$t(t.data.section)))]
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                          {
                            key: "subheader",
                            fn: function () {
                              return [
                                a("h1", [
                                  t._v(
                                    " " +
                                      t._s(
                                        t.final
                                          ? t.$t("general.conclusion")
                                          : t.$t(
                                              t.data.content[t.paragraphIndex]
                                                .step
                                            )
                                      ) +
                                      " "
                                  ),
                                ]),
                              ];
                            },
                            proxy: !0,
                          },
                        ],
                        null,
                        !1,
                        1684949832
                      ),
                    }),
                    a(
                      "div",
                      {
                        staticClass: "demo-stage__content",
                        class: {
                          "demo-stage__content--vertical": t.frame,
                          "demo-stage__content--final": t.final,
                        },
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass: "demo-stage__content-inner",
                            class: {
                              "demo-stage__content-inner--final": t.final,
                            },
                            style: { height: t.final ? "100%" : "initial" },
                          },
                          [
                            a("DemoParagraphs", {
                              key: "paragraphs",
                              staticClass: "demo-stage__paragraphs",
                              attrs: {
                                headline: t.headline,
                                paragraphs: t.paragraphs,
                                data: t.data,
                                final: t.final,
                                finalScenePlay: t.finalScenePlay,
                              },
                            }),
                            t.final
                              ? a(
                                  "div",
                                  { staticClass: "demo-stage__conclusion-img" },
                                  [
                                    a("img", {
                                      attrs: {
                                        src: t.data.conclusion.img.src,
                                        alt: t.$t(t.data.conclusion.img.alt),
                                      },
                                    }),
                                  ]
                                )
                              : a(
                                  "div",
                                  {
                                    staticClass: "demo-stage__video",
                                    class: {
                                      "demo-stage__video--border":
                                        (!t.frame && !t.customerView) ||
                                        (!t.frame && t.paragraphIndex >= 3),
                                      "demo-stage__video--customer-laptop":
                                        t.paragraphIndex >= 2 &&
                                        t.laptopCustomerView,
                                      "demo-stage__video--customer-tablet":
                                        t.customerView && t.paragraphIndex < 3,
                                    },
                                    attrs: { id: "video" },
                                  },
                                  [
                                    a(
                                      "div",
                                      {
                                        staticClass: "demo-stage__video-border",
                                      },
                                      [
                                        a(
                                          "div",
                                          {
                                            class: t.customerView
                                              ? "demo-stage__aspect-ratio demo-stage__aspect-ratio__customer"
                                              : "demo-stage__aspect-ratio",
                                          },
                                          [
                                            a(
                                              "div",
                                              {
                                                staticClass:
                                                  "demo-stage__aspect-ratio__inner",
                                              },
                                              [
                                                a("DemoVideo", {
                                                  ref: "demoVideoComponent",
                                                  attrs: {
                                                    data: t.data,
                                                    currentIndex:
                                                      t.currentIndex,
                                                    handlePlay: t.handleVideo,
                                                    final: t.final,
                                                    border: !t.frame,
                                                  },
                                                  on: {
                                                    finalScene: t.finalScene,
                                                    videoProgress: function (
                                                      e
                                                    ) {
                                                      return (t.videoProgress =
                                                        e);
                                                    },
                                                  },
                                                }),
                                                t.frame
                                                  ? a("img", {
                                                      staticClass:
                                                        "device__frame",
                                                      class: t.data.setClassName
                                                        ? t.data.setClassName
                                                        : "",
                                                      attrs: {
                                                        src: t.frame,
                                                        alt: "electronic device frame",
                                                      },
                                                    })
                                                  : t._e(),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                            t.final
                              ? t._e()
                              : a("DemoNavButtons", {
                                  staticClass: "demo-stage__progressMobile",
                                  attrs: { dataLength: t.data.content.length },
                                  on: { handleDemo: t.handleNavigation },
                                }),
                          ],
                          1
                        ),
                      ]
                    ),
                    t.final
                      ? t._e()
                      : a("DemoNavButtons", {
                          staticClass: "demo-stage__progressDesktop",
                          attrs: { dataLength: t.data.content.length },
                          on: { handleDemo: t.handleNavigation },
                        }),
                  ],
                  1
                )
              : t._e(),
          ]);
        },
        p = [],
        m =
          (a("1276"),
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "demo-nav-buttons" }, [
              a(
                "div",
                [
                  a(
                    "Button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.currentIndex > 0,
                          expression: "currentIndex > 0",
                        },
                      ],
                      staticClass: "demo-stage__button",
                      attrs: { variant: "large-text" },
                      on: {
                        click: function (e) {
                          return t.$emit("handleDemo", t.currentIndex - 1);
                        },
                      },
                    },
                    [a("span", [t._v(t._s(t.$t("general.back")))])]
                  ),
                ],
                1
              ),
              a(
                "div",
                [
                  a(
                    "Button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.currentIndex < t.dataLength,
                          expression: "currentIndex < dataLength",
                        },
                      ],
                      staticClass: "demo-stage__button",
                      attrs: { variant: "primary-outline" },
                      on: {
                        click: function (e) {
                          return t.$emit("handleDemo", t.currentIndex + 1);
                        },
                      },
                    },
                    [a("span", [t._v(t._s(t.$t("general.next")))])]
                  ),
                ],
                1
              ),
            ]);
          }),
        f = [],
        g = a("0902"),
        v = {
          components: { Button: g["a"] },
          props: { dataLength: { type: Number, default: 0 } },
          computed: {
            currentIndex: {
              get: function () {
                return this.$store.state.demoStatus.currentIndex;
              },
              set: function (t) {
                this.$store.commit("updateCurrentIndex", t);
              },
            },
          },
        },
        _ = v,
        x = (a("4105"), Object(c["a"])(_, m, f, !1, null, "7856c366", null)),
        b = x.exports,
        y = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "video-wrapper",
              class: [
                { "video-wrapper--bordered": t.border },
                t.data.setClassName,
              ],
            },
            [
              this.showTarget
                ? a("DemoClickTarget", {
                    ref: "demoClickTargetComponent",
                    attrs: { data: t.data },
                    on: { next: t.handleVideo },
                  })
                : t._e(),
              a(
                "video",
                {
                  staticClass: "video",
                  style: t.transformStyle,
                  attrs: {
                    muted: "",
                    autoplay: "",
                    playsinline: "",
                    id: "demoVideo",
                    "aria-label": t.$t(t.ariaLabel),
                  },
                  domProps: { muted: !0 },
                },
                [
                  a("source", {
                    attrs: { src: t.filePath, type: "video/mp4" },
                  }),
                  t._v(" Your browser does not support the video tag. "),
                ]
              ),
            ],
            1
          );
        },
        w = [],
        C = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "demo-target-parent",
              class: t.data.setClassName ? t.data.setClassName : "",
              style: t.transformStyle,
              attrs: { id: "demo-target-parent" },
              on: { click: t.handleClick },
            },
            [
              a("div", { style: t.area, attrs: { id: "demo-target" } }, [
                a(
                  "svg",
                  {
                    attrs: {
                      viewBox: "0 0 36 36",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    a("circle", {
                      staticClass: "pulse-one",
                      attrs: { cx: "18", cy: "18", r: "18", fill: "#F0AB00" },
                    }),
                    a("circle", {
                      staticClass: "pulse-two",
                      attrs: { cx: "18", cy: "18", r: "8", fill: "#F0AB00" },
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
                        value: t.showTooltip,
                        expression: "showTooltip",
                      },
                    ],
                    staticClass: "tooltip",
                    class: {
                      "tooltip--left":
                        t.contentData[t.currentIndex].clickPoint.x > 40,
                      "tooltip--right":
                        t.contentData[t.currentIndex].clickPoint.x < 40,
                    },
                  },
                  [
                    a("p", [t._v("Click the circle to continue")]),
                    a("div", { staticClass: "tooltip__arrow" }),
                  ]
                ),
              ]),
            ]
          );
        },
        I = [],
        $ = a("cffa"),
        P = a("9ce6"),
        k = a("a5cf");
      $["a"].registerPlugin(P["a"]);
      let S = new k["c"](),
        T = null;
      var D = {
          data() {
            return { directionsActive: !1, showTooltip: !1 };
          },
          computed: {
            contentData() {
              return this.data.content;
            },
            currentIndex: {
              get: function () {
                return this.$store.state.demoStatus.currentIndex;
              },
              set: function (t) {
                this.$store.commit("updateCurrentIndex", t);
              },
            },
            area() {
              return this.contentData[this.currentIndex].clickPoint &&
                this.contentData[this.currentIndex].clickPoint.area
                ? {
                    width:
                      this.contentData[this.currentIndex].clickPoint.area.w +
                      "%",
                    height:
                      this.contentData[this.currentIndex].clickPoint.area.h +
                      "%",
                  }
                : {};
            },
            transformStyle() {
              return this.contentData[this.currentIndex].clickPoint &&
                this.contentData[this.currentIndex].clickPoint.mobileScale
                ? `transform: scale(${
                    this.contentData[this.currentIndex].clickPoint.mobileScale
                      .scale
                  }); transform-origin: ${
                    this.contentData[this.currentIndex].clickPoint.mobileScale
                      .origin
                  }`
                : "";
            },
          },
          props: {
            data: { type: Object, default: () => {} },
            apiIntegration: { type: Boolean, default: !1 },
            eventDrivenIntegration: { type: Boolean, default: !1 },
            b2bIntegration: { type: Boolean, default: !1 },
          },
          mounted() {
            this.resetTimeline(this.currentIndex),
              T ||
                setTimeout(
                  () => {
                    this.showTooltip = !0;
                  },
                  this.$store.state.userClickedTargetOnce ? 2e4 : 5e3
                );
          },
          methods: {
            handleClick() {
              this.$emit("next"),
                (this.currentIndex += 1),
                this.resetTimeline(this.currentIndex),
                this.$store.state.userClickedTargetOnce ||
                  this.$store.commit("updateUserClickedTargetOnce", !0),
                T && clearTimeout(T);
            },
            resetTimeline(t) {
              (this.directionsActive = !1),
                S.clear(),
                $["a"].set("#demo-target", { autoAlpha: 0 }),
                this.handleTimeline(t);
            },
            handleTimeline(t) {
              T && clearTimeout(T), (this.showTooltip = !1);
              let e = 1;
              (e =
                window.innerWidth < 1023.9 &&
                !this.contentData[0].clickPoint.mobileScale
                  ? 2
                  : 1.6),
                this.contentData[t].clickPoint &&
                  S.to("#demo-target", {
                    xPercent: -50,
                    left: this.contentData[t].clickPoint.x + "%",
                    yPercent: -50,
                    top: this.contentData[t].clickPoint.y + "%",
                    force3D: !0,
                    scale: e,
                    onComplete: () => {
                      0 === this.currentIndex && (this.directionsActive = !0),
                        setTimeout(
                          () => {
                            this.showTooltip = !0;
                          },
                          this.$store.state.userClickedTargetOnce ? 2e4 : 5e3
                        ),
                        S.to("#demo-target", { autoAlpha: 1 });
                    },
                  });
            },
          },
        },
        B = D,
        M = (a("5101"), Object(c["a"])(B, C, I, !1, null, "44912a2a", null)),
        V = M.exports,
        O = {
          data() {
            return {
              videoDuration: 0,
              pauseTime: 0,
              canZoom: !1,
              moveIndex: !1,
              finalScene: !1,
              showTarget: !1,
              ariaLabel: "",
            };
          },
          props: {
            data: { type: Object, default: () => {} },
            final: { type: Boolean, default: !1 },
            border: { type: Boolean, default: !1 },
          },
          components: { DemoClickTarget: V },
          mounted() {
            (this.videoDuration = this.data.content[0].videoDuration),
              (this.pauseTime = this.data.content[0].pauseTime),
              (this.ariaLabel = this.data.content[0].ariaLabel),
              window.requestAnimationFrame(this.onTimeUpdate);
          },
          computed: {
            filePath() {
              return "assets/" + this.data.videoPath;
            },
            transformStyle() {
              return this.canZoom &&
                this.data.content[this.currentIndex] &&
                this.data.content[this.currentIndex].clickPoint.mobileScale
                ? `transform: scale(${
                    this.data.content[this.currentIndex].clickPoint.mobileScale
                      .scale
                  }); transform-origin: ${
                    this.data.content[this.currentIndex].clickPoint.mobileScale
                      .origin
                  }`
                : "";
            },
            currentIndex: {
              get: function () {
                return this.$store.state.demoStatus.currentIndex;
              },
              set: function (t) {
                this.$store.commit("updateCurrentIndex", t);
              },
            },
            paragraphIndex: {
              get: function () {
                return this.$store.state.demoStatus.paragraphIndex;
              },
              set: function (t) {
                this.$store.commit("updateParagraphIndex", t);
              },
            },
            isPaused: {
              get: function () {
                return this.$store.state.demoStatus.isPaused;
              },
              set: function (t) {
                this.$store.commit("updateIsPaused", t);
              },
            },
          },
          methods: {
            onTimeUpdate() {
              let t = document.getElementById("demoVideo");
              t &&
                ((this.currentTime = t.currentTime),
                this.currentTime >= this.pauseTime - 0.1
                  ? (t.pause(),
                    (this.isPaused = !0),
                    (this.showTarget = !0),
                    (this.canZoom = !0),
                    (this.paragraphIndex = this.currentIndex),
                    this.$emit("finalScene", this.finalScene))
                  : (this.showTarget = !1),
                this.currentTime < this.videoDuration &&
                  window.requestAnimationFrame(this.onTimeUpdate),
                this.$emit(
                  "videoProgress",
                  this.currentTime / this.videoDuration
                ));
            },
            handleVideo() {
              let t = document.getElementById("demoVideo");
              t &&
                ((t.currentTime =
                  this.data.content[this.currentIndex].startTime),
                (this.ariaLabel =
                  this.data.content[this.currentIndex].ariaLabel),
                this.isPaused &&
                  (this.data.content[this.currentIndex]
                    ? (this.pauseTime =
                        this.data.content[this.currentIndex + 1].pauseTime)
                    : ((this.finalScene = !0),
                      (this.pauseTime = this.videoDuration)),
                  (this.currentTime = t.currentTime),
                  (this.canZoom = !1),
                  (this.moveIndex = !1),
                  t.play(),
                  (this.isPaused = !1),
                  window.requestAnimationFrame(this.onTimeUpdate)));
            },
            handleNavigationPlay(t) {
              let e = document.getElementById("demoVideo");
              e &&
                (this.$refs.demoClickTargetComponent &&
                  this.$refs.demoClickTargetComponent.resetTimeline(t),
                e.pause(),
                (this.isPaused = !0),
                (e.currentTime = this.data.content[t].startTime),
                (this.currentTime = e.currentTime),
                (this.ariaLabel = this.data.content[t].ariaLabel),
                this.data.content[t]
                  ? (this.pauseTime = this.data.content[t].pauseTime)
                  : ((this.finalScene = !0),
                    (this.pauseTime = this.videoDuration),
                    (this.currentTime = this.videoDuration)),
                (this.canZoom = !1),
                (this.moveIndex = !1),
                e.paused && (e.play(), (this.isPaused = !1)),
                window.requestAnimationFrame(this.onTimeUpdate));
            },
          },
        },
        E = O,
        L = (a("35f7"), Object(c["a"])(E, y, w, !1, null, "fb03e760", null)),
        A = L.exports,
        N = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "demo-stage__paragraphs" }, [
            t.headline
              ? a(
                  "h1",
                  { staticClass: "demo-stage__slide-headline h3 h3--bold" },
                  [t._v(" " + t._s(t.$t(t.headline)) + " ")]
                )
              : t._e(),
            a("div", { staticClass: "demo-stage__toggleMobile" }, [
              t.paragraphs && !t.final && t.$t(t.paragraphs.text)
                ? a("div", [
                    a("span", {
                      domProps: { innerHTML: t._s(t.$t(t.paragraphs.text)) },
                    }),
                  ])
                : t._e(),
            ]),
            a("div", { staticClass: "demo-stage__toggleDesktop" }, [
              t.paragraphs && !t.final && t.$t(t.paragraphs.text).length >= 670
                ? a("div", [
                    t.readMoreActivated
                      ? t._e()
                      : a("span", {
                          domProps: {
                            innerHTML: t._s(
                              t.$t(t.paragraphs.text).slice(0, 450) +
                                "...<br />"
                            ),
                          },
                        }),
                    t.readMoreActivated
                      ? t._e()
                      : a(
                          "a",
                          {
                            staticClass: "demo-stage__read-more",
                            attrs: { href: "#" },
                            on: { click: t.toggleReadMore },
                          },
                          [t._v(" Read more ")]
                        ),
                    t.readMoreActivated
                      ? a("span", {
                          domProps: {
                            innerHTML: t._s(t.$t(t.paragraphs.text)),
                          },
                        })
                      : t._e(),
                    t.readMoreActivated
                      ? a("a", {
                          attrs: { href: "#" },
                          domProps: {
                            innerHTML: t._s(
                              "<br /><strong class=source>Read less<strong/>"
                            ),
                          },
                          on: { click: t.toggleReadMore },
                        })
                      : t._e(),
                  ])
                : t._e(),
              t.paragraphs && !t.final && t.$t(t.paragraphs.text).length <= 670
                ? a("div", [
                    a("span", {
                      domProps: { innerHTML: t._s(t.$t(t.paragraphs.text)) },
                    }),
                  ])
                : t._e(),
            ]),
            t.final
              ? a(
                  "div",
                  { staticClass: "demo-stage__final-container" },
                  [
                    a(
                      "transition-group",
                      { attrs: { name: "slide", mode: "out-in", tag: "div" } },
                      [
                        a("DemoFinalParagraph", {
                          key: t.data.conclusion.text,
                          attrs: {
                            paragraph: t.$t(t.data.conclusion.text),
                            readMoreActivated: t.readMoreActivated,
                          },
                          on: { toggleReadMore: t.toggleReadMore },
                        }),
                        a("div", { staticClass: "spacer" }),
                      ],
                      1
                    ),
                    a("DemoNav", {
                      staticClass: "demo-stage__desktop-nav",
                      attrs: { currentNav: t.data.conclusion },
                    }),
                    a(
                      "Button",
                      {
                        staticStyle: {
                          "margin-top": "80px",
                          "margin-bottom": "80px",
                          "justify-self": "flex-start",
                        },
                        attrs: {
                          variant: "primary",
                          external: !0,
                          linkOut: "",
                          to: t.data.conclusion.learnMoreButton.src,
                          autoWidthHeight: !0,
                        },
                      },
                      [
                        t._v(
                          t._s(t.$t(t.data.conclusion.learnMoreButton.text)) +
                            " "
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : t._e(),
          ]);
        },
        j = [],
        H = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "nav",
            t._l(t.currentNav.links, function (e, n) {
              return a(
                "div",
                { key: n },
                [
                  e.text ? a("p", [t._v(t._s(t.$t("" + e.text)))]) : t._e(),
                  a(
                    "Button",
                    {
                      staticClass: "demo-stage__button",
                      attrs: { variant: "text", size: "lg" },
                      on: {
                        click: function (a) {
                          return t.switchDemos(e.atag.path);
                        },
                      },
                    },
                    [a("span", [t._v(t._s(t.$t("" + e.atag.text)))])]
                  ),
                ],
                1
              );
            }),
            0
          );
        },
        F = [],
        R = a("1dac");
      $["a"].registerPlugin(R["a"]);
      var Z = {
          components: { Button: g["a"] },
          props: { currentNav: { type: Object, default: () => {} } },
          methods: {
            getOffset(t) {
              const e = window.innerWidth < 740;
              switch (t) {
                case "#featuredDemos":
                  return 70;
                case "#nextSteps":
                  return 0;
                default:
                  return e ? 60 : 242;
              }
            },
            scrollTo(t) {
              this.$router.push(this.$route.matched[0].path);
              let e = this.getOffset(t);
              $["a"].to(window, {
                duration: 0.5,
                scrollTo: { y: t, offsetY: e },
              });
            },
            switchDemos(t) {
              this.$router.push(t), this.$store.commit("resetDemoStatus");
            },
          },
        },
        q = Z,
        U = (a("7dd8"), Object(c["a"])(q, H, F, !1, null, "b9de80ee", null)),
        z = U.exports,
        G = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "demo-stage__final-paragraph" }, [
            t.paragraph
              ? a("div", [
                  a("span", { domProps: { innerHTML: t._s(t.paragraph) } }),
                ])
              : t._e(),
          ]);
        },
        Y = [],
        W = {
          props: {
            paragraph: { type: String, default: "" },
            readMoreActivated: { type: Boolean, default: !1 },
          },
        },
        J = W,
        K = (a("8487"), Object(c["a"])(J, G, Y, !1, null, "d1758576", null)),
        Q = K.exports,
        X = {
          components: { DemoNav: z, DemoFinalParagraph: Q, Button: g["a"] },
          data() {
            return { readMoreActivated: !1 };
          },
          methods: {
            toggleReadMore() {
              this.readMoreActivated = !this.readMoreActivated;
            },
          },
          props: {
            headline: { type: String, default: null },
            paragraphs: { type: Object, default: () => {} },
            finalScenePlay: { type: Boolean, default: !1 },
            data: { type: Object, default: () => {} },
            final: { type: Boolean, default: !1 },
          },
        },
        tt = X,
        et = (a("13c7"), Object(c["a"])(tt, N, j, !1, null, "202cbbcd", null)),
        at = et.exports,
        nt = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "demo-header demo-header__container" },
            [
              a(
                "div",
                { staticClass: "demo-header__content" },
                [
                  t._t("header"),
                  a(
                    "div",
                    { staticClass: "demo-header__subhead" },
                    [a("span", [t._v("•")]), t._t("subheader")],
                    2
                  ),
                  a(
                    "button",
                    {
                      staticClass: "demo-header__close",
                      on: { click: t.closeDemo },
                    },
                    [
                      a(
                        "svg",
                        {
                          attrs: {
                            width: "27",
                            height: "27",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        },
                        [
                          a("path", {
                            attrs: {
                              d: "M2.155-.02L.035 2.1l23.97 23.971 2.121-2.121L2.156-.02z",
                              fill: "#000",
                            },
                          }),
                          a("path", {
                            attrs: {
                              d: "M24.005.05L.035 24.02l2.12 2.122 23.971-23.97L24.005.05z",
                              fill: "#000",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ],
                2
              ),
              a("div", {
                staticClass: "demo-header__progress-line",
                class: {
                  "demo-header__progress-line--not-rounded":
                    t.progress > 0.999999,
                },
                style: "width: " + 100 * t.progress + "vw;",
              }),
            ]
          );
        },
        it = [],
        rt = {
          props: { progress: { type: String, default: "0" } },
          methods: {
            closeDemo() {
              this.$router.push(this.$route.matched[0].path),
                this.$store.commit("resetDemoStatus");
            },
          },
        },
        st = rt,
        ot =
          (a("001f"), Object(c["a"])(st, nt, it, !1, null, "32756328", null)),
        dt = ot.exports;
      $["a"].registerPlugin(P["a"]);
      var ct = {
          components: {
            DemoNavButtons: b,
            DemoVideo: A,
            DemoParagraphs: at,
            DemoHeader: dt,
          },
          computed: {
            apiIntegration() {
              return (
                !!this.data.content[this.currentIndex] &&
                !!this.data.content[this.currentIndex].apiIntegration
              );
            },
            eventDrivenIntegration() {
              return (
                !!this.data.content[this.currentIndex] &&
                !!this.data.content[this.currentIndex].eventDrivenIntegration
              );
            },
            b2bIntegration() {
              return (
                !!this.data.content[this.currentIndex] &&
                !!this.data.content[this.currentIndex].b2bIntegration
              );
            },
            headline() {
              return (
                !!this.data.content[this.paragraphIndex] &&
                this.data.content[this.paragraphIndex].headline
              );
            },
            paragraphs() {
              return this.data.content[this.paragraphIndex]
                ? this.data.content[this.paragraphIndex].paragraphs
                : {};
            },
            final() {
              return (
                !this.data.content[this.paragraphIndex] ||
                this.data.content[this.paragraphIndex].final
              );
            },
            frame() {
              return this.data.frame ? "assets/" + this.data.frame : "";
            },
            frameType() {
              return this.data.frame ? this.data.frame.split("-")[0] : "";
            },
            currentIndex: {
              get: function () {
                return this.$store.state.demoStatus.currentIndex;
              },
              set: function (t) {
                this.$store.commit("updateCurrentIndex", t);
              },
            },
            paragraphIndex: {
              get: function () {
                return this.$store.state.demoStatus.paragraphIndex;
              },
              set: function (t) {
                this.$store.commit("updateParagraphIndex", t);
              },
            },
          },
          data() {
            return {
              videoProgress: 0.05,
              show: !1,
              handleVideo: !1,
              customerView: !1,
              finalScenePlay: !1,
              laptopCustomerView: !1,
              headerBG: !1,
            };
          },
          watch: {},
          props: { data: { type: Object, default: () => {} } },
          beforeDestroy() {
            window.removeEventListener("resize", this.onResize);
          },
          mounted() {
            (this.show = !0), (this.customerView = this.customer);
          },
          methods: {
            handleNavigation(t) {
              let e = t;
              t >= this.currentIndex &&
                this.currentIndex !== this.paragraphIndex &&
                (e = this.currentIndex),
                this.$refs.demoVideoComponent.handleNavigationPlay(e),
                (this.currentIndex = e),
                (this.paragraphIndex = e);
            },
            finalScene(t) {
              this.finalScenePlay = t;
            },
          },
        },
        lt = ct,
        ut = (a("4aec"), Object(c["a"])(lt, h, p, !1, null, "4b6c924b", null)),
        ht = ut.exports,
        pt = {
          components: {
            Button: g["a"],
            DemoIntroVideo: u,
            DemoStage: ht,
            DemoHeader: dt,
          },
          data() {
            return { currentIndex: 0, introVideoPause: !1, demoStarted: !1 };
          },
          props: {
            data: { type: Object, default: () => {} },
            current: { type: String, default: "" },
          },
          computed: {
            reduceMotion: {
              get: function () {
                return this.$store.state.reduceMotion;
              },
              set: function (t) {
                this.$store.commit("updateReduceMotion", t);
              },
            },
          },
          methods: {
            handleDemo() {
              (this.demoStarted = !0),
                (this.introVideoPause = !0),
                this.introVideoPause && this.$emit("introVideoPause");
            },
          },
        },
        mt = pt,
        ft = (a("6238"), Object(c["a"])(mt, n, i, !1, null, "738923d4", null));
      e["a"] = ft.exports;
    },
    6238: function (t, e, a) {
      "use strict";
      a("0209");
    },
    "7dd8": function (t, e, a) {
      "use strict";
      a("00a6");
    },
    8487: function (t, e, a) {
      "use strict";
      a("b8cc");
    },
    "87d7": function (t, e, a) {
      "use strict";
      a("0fd8");
    },
    "955a": function (t, e, a) {},
    a203: function (t, e, a) {
      "use strict";
      a("5e1b");
    },
    a403: function (t, e, a) {
      "use strict";
      a("c09a");
    },
    b8cc: function (t, e, a) {},
    c09a: function (t, e, a) {},
    c543: function (t, e, a) {},
    e4c8: function (t, e, a) {},
    ef27: function (t, e, a) {},
    f3b6: function (t, e, a) {},
    fe60: function (t, e, a) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "Portal",
            { attrs: { to: "popup" } },
            [
              a(
                "PopupBase",
                { attrs: { label: t.label } },
                [
                  t._t("backdrop", null, { slot: "backdrop" }),
                  a(
                    "transition",
                    { attrs: { name: "fade-route" } },
                    [t.show ? t._t("default") : t._e()],
                    2
                  ),
                ],
                2
              ),
            ],
            1
          );
        },
        i = [],
        r = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "popupBase",
              class: { "popupBase--centered": t.centered },
              attrs: {
                role: "dialog",
                "aria-label": t.label,
                "aria-modal": "true",
              },
            },
            [
              a(
                "div",
                {
                  staticClass: "popupBase__backdrop",
                  on: {
                    click: function (e) {
                      return t.$emit("close");
                    },
                  },
                },
                [t._t("backdrop")],
                2
              ),
              t._t("default"),
            ],
            2
          );
        },
        s = [],
        o =
          (a("ddb0"),
          {
            name: "popupBase",
            props: {
              centered: { default: !0, type: Boolean },
              focusElement: { default: null, type: Object },
              label: { required: !0, type: String },
            },
            mounted() {
              document.getElementById("navigation__bar").style.display = "none";
              const t = (t) => {
                const e = 27;
                t.keyCode === e && this.$emit("close");
              };
              document.addEventListener("keyup", t),
                this.$on("hook:destroyed", () => {
                  (document.getElementById("navigation__bar").style.display =
                    "block"),
                    document.removeEventListener("keyup", t);
                }),
                this.activate(),
                this.$on("hook:destroyed", () => {
                  this.deactivate();
                });
            },
            methods: {
              activate() {
                (this.previousActiveElement = document.activeElement),
                  this.disableScrolling(),
                  this.inert(),
                  this.focusFirstDescendant();
              },
              async deactivate() {
                this.enableScrolling(),
                  await this.inert(!1),
                  this.restoreFocus();
              },
              disableScrolling() {
                this.scrollPosition = window.pageYOffset;
                const t = document.querySelector("body");
                (t.style.overflow = "hidden"),
                  (t.style.position = "fixed"),
                  (t.style.top = `-${this.scrollPosition}px`),
                  (t.style.width = "100%");
              },
              enableScrolling() {
                const t = document.querySelector("body");
                t.style.removeProperty("overflow"),
                  t.style.removeProperty("position"),
                  t.style.removeProperty("top"),
                  t.style.removeProperty("width"),
                  window.scrollTo(0, this.scrollPosition);
              },
              async inert(t = !0) {
                await this.$nextTick(),
                  [...this.$root.$el.children].forEach((e) => {
                    e === this.$el || e.contains(this.$el) || (e.inert = t);
                  });
              },
              focusFirstDescendant() {
                const t = this.$el.querySelectorAll(
                  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                t[0] && t[0].focus && t[0].focus();
              },
              restoreFocus() {
                const t = this.focusElement || this.previousActiveElement;
                t && t.focus && t.focus();
              },
            },
          }),
        d = o,
        c = (a("a403"), a("2877")),
        l = Object(c["a"])(d, r, s, !1, null, "ef32016e", null),
        u = l.exports,
        h = a("2b88"),
        p = {
          name: "PopupRouterView",
          data() {
            return { show: !1 };
          },
          mounted() {
            this.show = !0;
          },
          props: { label: { required: !0, type: String } },
          components: { PopupBase: u, Portal: h["Portal"] },
        },
        m = p,
        f = Object(c["a"])(m, n, i, !1, null, null, null);
      e["a"] = f.exports;
    },
  },
]);
//# sourceMappingURL=api-integration~b2b-integration~event-driven-integration.05731c19.js.map
