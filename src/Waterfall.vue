<!-- waterfall -->
<template>
  <div class="waterfall" :style="`height:${maxColHeight()}vw;`">
    <slot
      v-for="(item, index) in list"
      :index="index"
      :item="item"
      :config="itemConfig[index]"
    ></slot>
  </div>
</template>

<script>
export default {
  name:"waterfall",
  components: {},
  props: {
    list: { type: Array, default: () => [] },
    column: { type: Number, default: 2 }, //列数
    gap: { type: Number, default: 2.6667 }, //间隔 单位vw
    heightExtendScale: { type: Number, default: 44 / 164 }, //内部单元高度拓展比例 （与列宽的比例）
    maxItemScale: { type: Number, default: 2 }, //内部单元最大高宽比 单位vw
    animate: { type: String, default: "fadeInUp" }
  },
  data() {
    return {
      colHeightArry: [], //列高度数组  单位vw
      //内部元素定位坐标
      itemConfig: [
        // { height: 0, left: 0, top: 0 }
      ]
    };
  },
  computed: {
    //列宽 单位vw
    colWidth() {
      return (100 - (this.column + 1) * this.gap) / this.column;
    }
  },
  watch: {
    list: {
      handler: function(val) {
        this.reset();
      },
      deep: true
    }
  },
  methods: {
    // 初始化列高数组
    initColHeightArry() {
      let _arr = [];
      for (var i = 0; i < this.column; i++) {
        _arr[i] = this.gap;
      }
      return _arr;
    },
    // 计算内部单元高度 单位vw
    itemHeight(picHeight, picWidth) {
      if (!picHeight || !picWidth) {
        return this.colWidth * this.maxItemScale;
      } else {
        let _itemHeight =
          (picHeight / picWidth) * this.colWidth +
          this.colWidth * this.heightExtendScale;
        return _itemHeight / this.colWidth > this.maxItemScale
          ? this.colWidth * this.maxItemScale
          : _itemHeight;
      }
    },
    //列最大高度
    maxColHeight() {
      return Math.max(...this.colHeightArry);
    },
    //最小高度的下标
    minIndex() {
      return this.colHeightArry.indexOf(Math.min(...this.colHeightArry));
    },
    //设置定位
    reset() {
      this.itemConfig = [];
      this.colHeightArry = this.initColHeightArry();
      this.list.forEach(item => {
        let _minIndex = this.minIndex();
        let _itemHeight = this.itemHeight(item.picHeight, item.picWidth);
        let _left = (_minIndex + 1) * this.gap + _minIndex * this.colWidth;
        let _top = this.colHeightArry[_minIndex];
        this.itemConfig.push({ height: _itemHeight, left: _left, top: _top });

        this.colHeightArry[_minIndex] =
          this.colHeightArry[_minIndex] + _itemHeight + this.gap;
      });
    }
  },
  mounted() {
    this.reset();
  },
};
</script>

<style lang="scss" scoped>
.waterfall {
  width: 100%;
  position: relative;
}
</style>
