# demo
在线预览：[demo](https://yokaki.github.io/demos/vue/Guestbook/index.html)
> A Vue.js project

开发过程中遇到的问题：

- 可以在组件内部的script标签内引入外部js文件，但是要把外部的js文件放到根目录下,否则最后webpack打包会保存。

```js
import store from '../../../localstorage/store.everything.min'
```

- 在SPA下，所有组件都可以调用Local Storage里面的数据。但是在修改相应数据时，一定要注意逻辑。
添加一条数据时：先把数据push到待办事项和所有事项的数组，然后再把两个数组存到locastorage。最后再把v-model清空。

```js
addData(){
    this.doingArr.push({dataItem: this.newData});
    store.set('doingArr', this.doingArr);
    this.allArr.push({dataItem: this.newData});
    store.set('allArr', this.allArr);
    this.newData = ''
  }
```

- 页面初始化时，应该首先把数组的数据与localstorage的数据同步。


```js
getDoingArr(){
    let localDoingArr = store.get('doingArr');
    if (localDoingArr) {
      this.doingArr = localDoingArr;
    } else {
      this.doingArr = [];
    }
  }
```

- 删除一条数据时,先用变量储存要删除的数据，把该条数据push到保存删除数据的数组，然后用localstorage储存该数组。接着剪切待办事项的数组，并且同步更新到localstorage。

```js
check(index){
	let downItem = this.doingArr[index];
	this.downArr.push(downItem)
	store.set('downArr', this.downArr)
	this.doingArr.splice(index, 1);
	store.set('doingArr', this.doingArr);
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
