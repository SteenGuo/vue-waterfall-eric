<template>
  <div class="list">
    <eric-waterfall :list="list" :column="2" :gap="2.6667" :height-extend-scale="44 / 164" :max-item-scale="2" animate="fadeInUp">
      <template scope="props">
        <eric-waterfall-slot :config="props.config">
          <div class="list-item">
            <div>
              <p>图片{{ props.item.id }}</p>
            </div>
          </div>
          <div class="item-bottom" slot="bottom">
            <span>拓展区域</span>
          </div>
        </eric-waterfall-slot>
      </template>
    </eric-waterfall>
    <button class="btn" @click="addItems">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addSum: 0,
      list: [
        { id: 1, picWidth: 640, picHeight: 800 },
        { id: 2, picWidth: 300, picHeight: 600 },
        { id: 3, picWidth: 480, picHeight: 640 },
        { id: 4, picWidth: 750, picHeight: 1440 },
        { id: 5, picWidth: 375, picHeight: 640 },
        { id: 6, picWidth: 640, picHeight: 320 },
        { id: 7, picWidth: 640, picHeight: 640 },
        { id: 8, picWidth: 1280, picHeight: 640 },
        { id: 9, picWidth: 750, picHeight: 1440 },
        { id: 10, picWidth: 375, picHeight: 640 }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    addItems() {
      this.addSum++;
      let _list = [
        { id: 1 + 10 * this.addSum, picWidth: 640, picHeight: 800 },
        { id: 2 + 10 * this.addSum, picWidth: 300, picHeight: 600 },
        { id: 3 + 10 * this.addSum, picWidth: 480, picHeight: 640 },
        { id: 4 + 10 * this.addSum, picWidth: 750, picHeight: 1440 },
        { id: 5 + 10 * this.addSum, picWidth: 375, picHeight: 640 },
        { id: 6 + 10 * this.addSum, picWidth: 640, picHeight: 320 },
        { id: 7 + 10 * this.addSum, picWidth: 640, picHeight: 640 },
        { id: 8 + 10 * this.addSum, picWidth: 1280, picHeight: 640 },
        { id: 9 + 10 * this.addSum, picWidth: 750, picHeight: 1440 },
        { id: 10 + 10 * this.addSum, picWidth: 375, picHeight: 640 }
      ];
      this.list.push(..._list);
    }
  },
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
* {
  margin: 0;
  padding: 0;
}
.list {
  width: 100%;
  .list-item {
    width: 100%;
    height: 100%;
    background-color: #b7b7b7;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .item-bottom {
    width: 100%;
    height: 100%;
    background-color: #d6d6d6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn {
    width: 100%;
  }
}
</style>
