import { defineComponent as o, createElementBlock as n, openBlock as l, createVNode as r, unref as p, withCtx as a, createTextVNode as i, createElementVNode as u, toDisplayString as m } from "vue";
import { ElButton as s } from "element-plus";
const _ = /* @__PURE__ */ o({
  __name: "AppButton",
  props: {
    label: { default: "Click Me!!" }
  },
  setup(d) {
    return (t, e) => (l(), n("div", null, [
      r(p(s), { type: "primary" }, {
        default: a(() => [
          i(m(t.label) + " ", 1),
          e[0] || (e[0] = u("span", { class: "font-bold underline" }, "Hello", -1))
        ]),
        _: 1,
        __: [0]
      })
    ]));
  }
});
export {
  _ as AppButton
};
