# vue-waterfall-eric

A waterfall layout component for Vue.js

## Installation

```shell
npm install --save vue-waterfall-eric
```

### Import

```js
/* in main.js */
import Vue from "vue";
import Waterfall from 'vue-waterfall-eric'

Vue.use(Waterfall);

/* in xxx.vue */
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
```

#### Browser

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script>
<script src="../lib/vue-waterfall-eric.min.js"></script>
```

```js
new Vue({
  ...
	components: {
		ericWaterfall: waterfall.ericWaterfall
		ericWaterfallSlot: waterfall.ericWaterfallSlot
	},
  ...
})
```

## Props

### ericWaterfall


