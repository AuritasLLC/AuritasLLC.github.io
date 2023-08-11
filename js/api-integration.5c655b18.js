(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["api-integration"],
  {
    a80a: function (e, t, a) {
      "use strict";
      a.r(t);
      var o = function () {
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
                    attrs: { data: e.data, current: "apiIntegration" },
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
        n = [],
        r = a("fe60"),
        p = a("0061"),
        u = a("1aee"),
        i = a("6060"),
        l = {
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
        s = l,
        c = a("2877"),
        d = Object(c["a"])(s, o, n, !1, null, null, null);
      t["default"] = d.exports;
    },
  },
]);
//# sourceMappingURL=api-integration.5c655b18.js.map
