webpackJsonp([13],{"4tbL":function(e,t,a){var n=a("diuv");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("b1b5a9ec",n,!0)},Be8O:function(e,t,a){"use strict";function n(e){a("4tbL")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("oX5X"),r=a("M+wB"),o=a("VU/8"),s=n,d=o(i.a,r.a,!1,s,"data-v-f1d9a53c",null);t.default=d.exports},"M+wB":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"heartRate"}},[a("div",{staticClass:"head-notice"},[e._v("\n    心率：正常情况下，心率一般不会超过100次/分钟，当心率超过一定数值时，手环屏幕会闪烁提醒，超过心率数值可选择设置。\n  ")]),e._v(" "),a("div",{staticClass:"setting-steps"},[a("div",{staticClass:"heart-rate"},[a("yd-cell-item",[a("span",{staticClass:"setting-name",attrs:{slot:"left"},slot:"left"},[e._v("心率提醒")]),e._v(" "),a("span",{attrs:{slot:"right"},slot:"right"},[a("yd-switch",{model:{value:e.heartRateRemind,callback:function(t){e.heartRateRemind=t},expression:"heartRateRemind"}})],1)])],1),e._v(" "),a("div",{staticClass:"heart-rate"},[a("div",{staticClass:"divs"}),e._v(" "),a("yd-cell-item",[a("span",{staticClass:"setting-name",attrs:{slot:"left"},slot:"left"},[e._v("心率设置")]),e._v(" "),a("yd-spinner",{attrs:{slot:"right",min:"80",max:"150",unit:"5"},slot:"right",model:{value:e.postData.heartRateCountRemind,callback:function(t){e.$set(e.postData,"heartRateCountRemind",t)},expression:"postData.heartRateCountRemind"}})],1)],1)])])},i=[],r={render:n,staticRenderFns:i};t.a=r},diuv:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,"#heartRate[data-v-f1d9a53c]{height:100%;background-color:#ebebeb}#heartRate .head-notice[data-v-f1d9a53c]{text-indent:2em}#heartRate .body-notice[data-v-f1d9a53c],#heartRate .head-notice[data-v-f1d9a53c]{font-size:.32rem;color:#333;padding:.3rem .4rem}#heartRate .heart-rate[data-v-f1d9a53c]{background-color:#fff;position:relative}#heartRate .heart-rate .divs[data-v-f1d9a53c]{position:absolute;right:.76rem;top:0;width:.98rem;height:.6rem;background:hsla(0,0%,100%,.1);top:50%;margin-top:-.3rem;z-index:999}#heartRate .setting-left[data-v-f1d9a53c],#heartRate .setting-name[data-v-f1d9a53c]{font-size:.3rem;color:#2a2a2a}#heartRate .setting-right[data-v-f1d9a53c]{font-size:.34rem;color:#929292}","",{version:3,sources:["D:/jackie_project/device_S4/src/routers/deviceSet/HeartRate.vue"],names:[],mappings:"AACA,4BACE,YAAa,AACb,wBAA0B,CAC3B,AACD,yCAGE,eAAiB,CAElB,AACD,kFALE,iBAAkB,AAClB,WAAY,AAEZ,mBAAqB,CAMtB,AACD,wCACE,sBAAuB,AACvB,iBAAmB,CACpB,AACD,8CACE,kBAAmB,AACnB,aAAe,AACf,MAAO,AACP,aAAe,AACf,aAAe,AACf,8BAAqC,AACrC,QAAS,AACT,kBAAoB,AACpB,WAAa,CACd,AAKD,oFACE,gBAAiB,AACjB,aAAe,CAChB,AACD,2CACE,iBAAkB,AAClB,aAAe,CAChB",file:"HeartRate.vue",sourcesContent:["\n#heartRate[data-v-f1d9a53c] {\n  height: 100%;\n  background-color: #ebebeb;\n}\n#heartRate .head-notice[data-v-f1d9a53c] {\n  font-size: .32rem;\n  color: #333;\n  text-indent: 2em;\n  padding: .3rem .4rem;\n}\n#heartRate .body-notice[data-v-f1d9a53c] {\n  font-size: .32rem;\n  color: #333;\n  padding: .3rem .4rem;\n}\n#heartRate .heart-rate[data-v-f1d9a53c] {\n  background-color: #fff;\n  position: relative;\n}\n#heartRate .heart-rate .divs[data-v-f1d9a53c] {\n  position: absolute;\n  right: 0.76rem;\n  top: 0;\n  width: 0.98rem;\n  height: 0.6rem;\n  background: rgba(255, 255, 255, 0.1);\n  top: 50%;\n  margin-top: -0.3rem;\n  z-index: 999;\n}\n#heartRate .setting-name[data-v-f1d9a53c] {\n  font-size: .3rem;\n  color: #2a2a2a;\n}\n#heartRate .setting-left[data-v-f1d9a53c] {\n  font-size: .3rem;\n  color: #2a2a2a;\n}\n#heartRate .setting-right[data-v-f1d9a53c] {\n  font-size: .34rem;\n  color: #929292;\n}\n"],sourceRoot:""}])},oX5X:function(e,t,a){"use strict";var n=a("Dd8w"),i=a.n(n),r=a("NYxO"),o=a("SBGd");t.a={data:function(){return{a:1,heartRateRemind:!1,postData:{deviceType:2,heartRateCountRemind:0,heartRateRemind:0,sportTarget:0,sportTargetRemind:1,temperatureDifferenceRemind:0,temperatureDifferenceValue:0,lowHeartRateValue:0,basalMetabolism:60}}},mounted:function(){this.heartRateRemind=1==this.deviceInfoSeting.heartRateRemind,this.postData=i()({},this.postData,this.deviceInfoSeting),$("input").attr("readonly",!0)},computed:i()({},Object(r.d)({deviceGetInfo:function(e){return e.main.deviceInfo},deviceInfoSeting:function(e){return e.main.deviceInfoSeting}})),methods:i()({},Object(r.b)(["changeDeviceInfo"]),Object(r.c)(["deviceInfoSetingSet","deviceInfoSet"]),{setDeciceSetInfo:function(){var e=this;console.error("提交前的数据"),console.error(this.postData),Object(o.m)(this.postData).then(function(t){e.deviceInfoSetingSet(e.postData),e.deviceInfoSet(e.postData),l.w("HeartRate.destroyed"),e.changeDeviceInfo()})}}),watch:{heartRateRemind:{handler:function(e,t){this.postData.heartRateRemind=e?1:0,this.setDeciceSetInfo()},deep:!0},"postData.heartRateCountRemind":{handler:function(e,t){this.setDeciceSetInfo()},deep:!0}}}}});
//# sourceMappingURL=13.4718b0623f47d1b2f9c6.js.map