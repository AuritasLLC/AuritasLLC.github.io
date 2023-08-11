(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["b2b-integration"],
  {
    ddf0: function (e, t, a) {
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
                    attrs: { data: e.data, current: "b2bIntegration" },
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
        d = a("6060"),
        i = {
          components: {
            PopupRouterView: r["a"],
            PopupOverlay: p["a"],
            PopupContent: u["a"],
            DemoContainer: d["a"],
          },
          data() {
            return { headerBG: !1 };
          },
          props: { data: { type: Object, default: () => {} } },
        },
        l = i,
        s = a("2877"),
        c = Object(s["a"])(l, o, n, !1, null, null, null);
      t["default"] = c.exports;
    },
  },
]);
//# sourceMappingURL=b2b-integration.25a72685.js.map
