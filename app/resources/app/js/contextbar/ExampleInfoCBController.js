"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[111],{"./runtime-repl/example/contextbar/ExampleInfoCBController.js":function(e,i,t){t.r(i),t.d(i,{default:function(){return p}});var r,n,a,l=t("../../node_modules/mobx/lib/mobx.module.js"),o=t("./runtime-repl/example/_api/ResponseStoreV2.js");function s(e,i,t,r){t&&Object.defineProperty(e,i,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})}function u(e,i,t,r,n){var a={};return Object.keys(r).forEach((function(e){a[e]=r[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=t.slice().reverse().reduce((function(t,r){return r(e,i,t)||t}),a),n&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(n):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,i,a),a=null),a}let c=(n=u((r=class{constructor(){s(this,"id",n,this),s(this,"createdAt",a,this)}update(e){e&&(e.id&&(this.id=e.id),e.createdAt&&(this.createdAt=e.createdAt))}}).prototype,"id",[l.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=u(r.prototype,"createdAt",[l.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u(r.prototype,"update",[l.action],Object.getOwnPropertyDescriptor(r.prototype,"update"),r.prototype),r);class p{constructor(){this.info=new c}async didCreate(e){const{id:i,parentCollectionUID:t}=e;this.info.update({id:i}),this.response=await(0,o.getOne)(i,t,{exclude:["response"]}),this.response&&this.info.update({id:i,createdAt:this.response.createdAt})}}}}]);