webpackJsonp([5],{"2pXY":function(t,e){},vnEL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("3cXf"),n=a.n(r),s=a("4YfN"),i=a.n(s),c=a("9rMa"),o={computed:i()({},Object(c.e)({show:function(t){return t.detail.show}}),Object(c.c)({yearList:"detail/yearList",list:"detail/list"})),methods:i()({},Object(c.b)({getDetail:"detail/getDetail",changeYear:"detail/changeYear"}),{goBack:function(t){this.carsInfo.carId=null,this.carsInfo.carName=t.target.innerHTML,window.sessionStorage.setItem("carInfo",n()(this.carsInfo)),this.$router.go(-1)},selectCarType:function(t){var e=t.target.dataset.year+" 款 "+t.target.dataset.name;this.carsInfo.carId=t.target.dataset.id,this.carsInfo.carName=e,window.sessionStorage.setItem("carInfo",n()(this.carsInfo)),this.$router.push("/picture")}}),mounted:function(){this.carsInfo=JSON.parse(window.sessionStorage.getItem("carInfo")),this.getDetail(this.carsInfo.id)}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"type"},[a("p",{on:{click:function(e){return t.goBack(e)}}},[t._v("全部车型")]),t._v(" "),a("div",[a("div",{staticClass:"c-type"},t._l(t.yearList,function(e,r){return a("span",{key:r,class:{active:e===t.show},on:{click:function(a){t.changeYear(e)}}},[t._v(t._s(e))])})),t._v(" "),t._l(t.list,function(e,r,n){return a("div",{key:n},[a("p",{staticClass:"tip"},[t._v("\n                "+t._s(r)+"\n            ")]),t._v(" "),a("ul",{on:{click:function(e){return t.selectCarType(e)}}},t._l(e,function(e,r){return a("li",{key:r,attrs:{"data-id":e.car_id,"data-name":e.car_name,"data-year":e.market_attribute.year}},[a("p",[a("span",[t._v(t._s(e.market_attribute.year)+"款  "+t._s(e.car_name))]),t._v(" "),a("span",[t._v(t._s(e.market_attribute.dealer_price_min)+"起")])]),t._v(" "),a("p",[a("span",[t._v(t._s(e.horse_power)+"马力"+t._s(e.gear_num)+"档"+t._s(e.trans_type))]),t._v(" "),a("span",[t._v("指导价："+t._s(e.market_attribute.official_refer_price))])])])}))])})],2)])},staticRenderFns:[]};var u=a("C7Lr")(o,_,!1,function(t){a("2pXY")},"data-v-537f91cc",null);e.default=u.exports}});
//# sourceMappingURL=5.62d45445ddd3f460bb82.js.map