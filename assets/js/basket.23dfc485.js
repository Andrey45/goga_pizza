(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basket"],{"06a0":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},n=[],s={},r=s,c=(i("9711"),i("2877")),o=Object(c["a"])(r,a,n,!1,null,"527b1e74",null);e["default"]=o.exports},"5ec5":function(t,e,i){"use strict";var a=i("692e"),n=i.n(a);n.a},"692e":function(t,e,i){},"866e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("div",{staticClass:"display-2"},[t._v(t._s(t.$t("basket.title")))]),t.data?t._e():i("v-list",{staticClass:"lis-total orange"},[i("v-list-item",[i("v-list-item-content",[t._v(t._s(t.$t("basket.title_size")))])],1)],1),t._l(t.appPizzas,function(e){return i("v-list",{staticClass:"lis",attrs:{subheader:"",dark:""}},[i("v-list-item",[i("div",{staticClass:"title font-weight-bold font-italic"},[t._v(t._s(e.name))]),i("v-spacer"),i("v-list-item-avatar",{attrs:{size:"80"}},[i("v-btn",{attrs:{icon:""},on:{click:function(i){return t.minus(e)}}},[t._v("-")]),t._v(t._s(e.quantity)),i("v-btn",{attrs:{icon:""},on:{click:function(i){return t.plus(e)}}},[t._v("+")])],1),i("v-spacer"),i("v-list-item-avatar",{attrs:{size:"80"}},[i("v-list-item",[t._v(t._s(t.$n(e.total,"currency")))])],1),i("v-spacer"),i("v-list-item-avatar",{attrs:{size:"50"}},[i("v-btn",{attrs:{icon:""},on:{click:function(i){return t.del(e.id)}}},[i("v-icon",{attrs:{color:"orange"}},[t._v("delete_forever")])],1)],1)],1)],1)}),i("v-divider"),i("v-list",{staticClass:"lis-total orange"},[i("v-list-item",[i("v-btn",[t._v(t._s(t.$t("cards.button_order")))]),i("v-spacer"),i("v-list-item-avatar",{staticClass:"pr-2",attrs:{"max-width":"200","min-width":"140"}},[i("v-list-item"),i("div",{staticClass:"text"},[t._v(t._s(t.$t("basket.itog")))]),i("div",{staticClass:"text"},[t._v(" "+t._s(t.$n(t.total(),"currency")))])],1)],1)],1)],2)},n=[],s=(i("8e6e"),i("456d"),i("ac6a"),i("bd86")),r=i("2f62");function c(t,e){var i=Object.keys(t);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(t)),e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i}function o(t){for(var e=1;e<arguments.length;e++)if(e%2){var i=null!=arguments[e]?arguments[e]:{};c(i,!0).forEach(function(e){Object(s["a"])(t,e,i[e])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e])):c(arguments[e]).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(arguments[e],i))});return t}var l={computed:Object(r["c"])(["appPizzas"]),data:function(){return{data:!0}},mounted:function(){this.data=this.appPizzas},methods:o({},Object(r["d"])(["delet","updatepizz"]),{total:function(){var t=0;if(this.appPizzas.length>0)return this.appPizzas.forEach(function(e){t+=parseInt(e.total)}),t;this.data=!1},plus:function(t){t.quantity+=1,t.total=t.price*t.quantity,this.updatepizz({id:t.id,price:t.price,quantity:t.quantity,total:t.total})},minus:function(t){t.quantity-=1,t.quantity<0&&(t.quantity=0),t.total=t.price*t.quantity,this.updatepizz({id:t.id,price:t.price,quantity:t.quantity,total:t.total})},del:function(t){this.delet(t)}})},u=l,v=(i("5ec5"),i("2877")),p=i("6544"),d=i.n(p),f=i("8336"),b=i("a523"),_=i("ce7e"),m=i("132d"),y=i("8860"),h=i("da13"),z=i("8270"),O=i("5d23"),w=i("2fa4"),j=Object(v["a"])(u,a,n,!1,null,"51cfc488",null);e["default"]=j.exports;d()(j,{VBtn:f["a"],VContainer:b["a"],VDivider:_["a"],VIcon:m["a"],VList:y["a"],VListItem:h["a"],VListItemAvatar:z["a"],VListItemContent:O["a"],VSpacer:w["a"]})},9711:function(t,e,i){"use strict";var a=i("cd96"),n=i.n(a);n.a},cd96:function(t,e,i){}}]);
//# sourceMappingURL=basket.23dfc485.js.map