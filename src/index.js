import ericWaterfall from "./Waterfall";
import ericWaterfallSlot from "./WaterfallSlot";

window.ericWaterfall = { ericWaterfall, ericWaterfallSlot };

export { ericWaterfall, ericWaterfallSlot };

export default {
  install: function(Vue) {
    Vue.component("eric-waterfall", ericWaterfall);
    Vue.component("eric-waterfall-slot", ericWaterfallSlot);
  }
};
