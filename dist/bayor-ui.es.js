import { defineComponent as t, createElementBlock as o, openBlock as r, createVNode as p, unref as n, withCtx as l, createTextVNode as a, toDisplayString as c } from "vue";
import { ElButton as i } from "element-plus";
const s = /* @__PURE__ */ t({
  __name: "AppButton",
  props: {
    label: { default: "Click Me!!" }
  },
  setup(u) {
    return (e, m) => (r(), o("div", null, [
      p(n(i), { type: "primary" }, {
        default: l(() => [
          a(c(e.label), 1)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  s as AppButton
};
