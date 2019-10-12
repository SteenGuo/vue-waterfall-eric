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
  components: {},
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
  },
  computed: {},
  watch: {},
  methods: {},
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
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
