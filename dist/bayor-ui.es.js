import { defineComponent as t, createElementBlock as o, openBlock as n, toDisplayString as p } from "vue";
const l = { class: "font-bold text-red-500" }, c = /* @__PURE__ */ t({
  __name: "AppButton",
  props: {
    label: { default: "Click Me!!" }
  },
  setup(r) {
    return (e, s) => (n(), o("div", l, p(e.label), 1));
  }
});
export {
  c as AppButton
};
