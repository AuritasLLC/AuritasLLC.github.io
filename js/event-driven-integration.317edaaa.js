(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["event-driven-integration"],
  {
    2761: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "PopupRouterView",
            { attrs: { label: "product.name" } },
            [
              a("PopupOverlay", {
                attrs: { slot: "backdrop" },
                slot: "backdrop",
              }),
              a(
                "PopupContent",
                [
                  a("DemoContainer", {
                    attrs: { data: e.data, current: "eventDrivenIntegration" },
                    on: {
                      introVideoPause: function (t) {
                        e.headerBG = !e.headerBG;
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        o = [],
        r = a("fe60"),
        p = a("0061"),
        u = a("1aee"),
        i = a("6060"),
        d = {
          components: {
            PopupRouterView: r["a"],
            PopupOverlay: p["a"],
            PopupContent: u["a"],
            DemoContainer: i["a"],
          },
          data() {
            return { headerBG: !1 };
          },
          props: { data: { type: Object, default: () => {} } },
        },
        l = d,
        s = a("2877"),
        c = Object(s["a"])(l, n, o, !1, null, null, null);
      t["default"] = c.exports;
    },
  },
]);
//# sourceMappingURL=event-driven-integration.317edaaa.js.map
