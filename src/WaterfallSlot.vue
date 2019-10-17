<!-- waterfall slot -->
<template>
  <div
    class="waterfall-slot animated"
    :class="animate"
    :style="
      `width:${colWidth}vw;height:${config.height}vw;top:${config.top}vw;left:${config.left}vw`
    "
  >
    <slot name="top"></slot>
    <div
      class="slot-middle"
      :style="
        `width:100%;height: calc(100% - ${colWidth * heightExtendScale}vw) `
      "
    >
      <slot></slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name:"waterfallSlot",
  props: {
    config: {
      type: Object,
      default: () => {
        return { height: 0, left: 0, top: 0 };
      }
    }
  },
  data() {
    return {
      colWidth: this.$parent.colWidth,
      heightExtendScale: this.$parent.heightExtendScale,
      animate: this.$parent.animate
    };
  }
};
</script>

<style lang="scss" scoped>
.waterfall-slot {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  .slot-middle {
    flex-shrink: 0;
    flex-grow: 0;
  }
}
</style>
