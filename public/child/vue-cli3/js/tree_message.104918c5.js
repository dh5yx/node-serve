(window["webpackJsonp_demo"]=window["webpackJsonp_demo"]||[]).push([["tree_message"],{"452f":function(e,t,a){"use strict";a("56ab")},"56ab":function(e,t,a){},"7bcf":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{span:6}},[e._v(" 点击节点整行可展开 "),a("dataTree",{attrs:{treeData:e.treeData,clickNodeExpand:"",treeConfig:e.treeConfig}})],1),a("el-col",{attrs:{span:6}},[e._v(" 显示复选框，默认展开全部 "),a("dataTree",{attrs:{treeData:e.treeData,showCheckbox:"",expandAll:"",treeConfig:e.treeConfig},model:{value:e.checkNode,callback:function(t){e.checkNode=t},expression:"checkNode"}})],1),a("el-col",{attrs:{span:6}},[e._v(" 不高亮选中节点 "),a("dataTree",{attrs:{treeData:e.treeData,noHighNode:"",showCheckbox:"",expandAll:"",treeConfig:e.treeConfig}})],1),a("el-col",{attrs:{span:6}},[e._v(" 点击节点勾选选中 "),a("dataTree",{attrs:{treeData:e.treeData,checkOnClickNode:"",noHighNode:"",showCheckbox:"",expandAll:"",treeConfig:e.treeConfig}})],1),a("el-col",{attrs:{span:6}},[e._v(" 展开的节点保存下载，刷新数据不会收起 "),a("el-button",{on:{click:e.resetTree}},[e._v("点击刷新树")]),a("dataTree",{attrs:{treeData:e.treeData,clickNodeExpand:"",noHighNode:"",treeConfig:e.treeConfig}})],1),a("el-col",{attrs:{span:6}},[a("el-button",{on:{click:e.getCheckedNodes}},[e._v("获取选中节点")]),a("dataTree",{ref:"getcheckedTree",attrs:{showCheckbox:"",treeData:e.treeData,clickNodeExpand:"",treeConfig:e.treeConfig}})],1),a("el-col",{attrs:{span:6}},[a("el-button",{on:{click:e.setCheckedNodes}},[e._v("设置节点选中")]),a("el-button",{on:{click:e.getKeys}},[e._v("获取选中keys")]),a("dataTree",{ref:"setcheckedTree",attrs:{showCheckbox:"",treeData:e.treeData,clickNodeExpand:"",treeConfig:e.treeConfig}})],1),a("el-col",{attrs:{span:6}},[e._v(" 懒加载 "),a("dataTree",{attrs:{lazy:"",loadNodeFun:e.loadNodeFun,showCheckbox:"",clickNodeExpand:"",treeConfig:e.treeConfig}})],1)],1)},i=[],n=(a("bc4a"),{name:"tree_message",components:{dataTree:function(){return a.e("chunk-267e153e").then(a.bind(null,"6769"))}},data:function(){return{treeData:[{title:"1",key:"1",list:[]},{title:"2",key:"2",list:[{title:"3",key:"3",list:[{title:"4",key:"4",list:[]},{title:"5",key:"5",list:[]}]},{title:"6222222222222222222222222222222222222222222222221",key:"6",list:[]}]},{title:"7",key:"7",list:[{title:"8",key:"8",list:[]},{title:"9",key:"9",list:[]},{title:"10",key:"10",list:[]}]},{title:"11",key:"11",list:[]}],treeConfig:{label:"title",id:"key",children:"list"},checkNode:"",setList:["1","4","5","9"]}},watch:{checkNode:function(){}},methods:{resetTree:function(){this.treeData=[{title:"11111",key:"11111",list:[]},{title:"2",key:"2",list:[{title:"2.1",key:"2.1",list:[]},{title:"2.2",key:"2.2",list:[]}]},{title:"3",key:"3",list:[{title:"3.1",key:"3.1",list:[]},{title:"3.2",key:"3.2",list:[]},{title:"3.3",key:"3.3",list:[]}]}]},getCheckedNodes:function(){this.$refs.getcheckedTree.getCheckedNodesByKeys()},setCheckedNodes:function(){this.$refs.setcheckedTree.setCheckNodeByKeys(this.setList)},getKeys:function(){this.$refs.setcheckedTree.getCheckedNodesByKeys()},loadNodeFun:function(e,t){var a=this;return 0===e.level?(this.num=0,t([{title:"region",key:"1"}])):e.level>5?t([]):void setTimeout((function(){var e=[{title:"leaf",key:a.num++,leaf:!0},{key:a.num+++"2",title:"zone"}];t(e)}),500)}},created:function(){},beforeDestroy:function(){},destroyed:function(){}}),l=n,s=(a("452f"),a("5d22")),r=Object(s["a"])(l,o,i,!1,null,"ab655978",null);t["default"]=r.exports}}]);