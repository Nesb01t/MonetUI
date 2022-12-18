import { ref as d, reactive as r, openBlock as m, createElementBlock as u, createElementVNode as l, normalizeClass as p, renderSlot as f } from "vue";
const _ = { class: "button" }, b = ["disabled"], k = { class: "content" }, v = {
  name: "mButton"
}, n = /* @__PURE__ */ Object.assign(v, {
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (t) => ["small", "medium", "mini"].includes(t)
    }
  },
  setup(t) {
    const e = d(!1), i = r({});
    return (s, o) => (m(), u("div", _, [
      l("button", {
        class: p(["m-button", i]),
        onClick: o[0] || (o[0] = (...c) => s.onClick && s.onClick(...c)),
        disabled: e.value
      }, [
        l("div", k, [
          f(s.$slots, "default")
        ])
      ], 10, b)
    ]));
  }
});
n.install = function(t) {
  t.component(n.name, n);
};
const B = [
  n
], a = function(t) {
  a.installed || B.map((e) => t.component(e.name, e));
}, g = {
  install: a,
  mButton: n
};
export {
  g as default
};
