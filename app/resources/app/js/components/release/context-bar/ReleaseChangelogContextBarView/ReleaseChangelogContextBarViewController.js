"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[98],{"./api-dev/components/release/context-bar/ReleaseChangelogContextBarView/ReleaseChangelogContextBarViewController.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return b}});var i,r,n,a,s,l,c=o("./node_modules/@postman/date-helper/index.js"),d=o.n(c),h=o("../../node_modules/mobx/lib/mobx.module.js"),g=o("../../packages/api-design/schema-changelog/index.js"),p=o("./js/stores/CollectionActivityFeedStore.js"),u=o("./api-dev/services/APIDevService.js"),m=o("./api-dev/util/error.js"),f=(o("./js/models/Toasts.js"),o("./node_modules/lodash/lodash.js"));function y(e,t,o,i){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(i):void 0})}function v(e,t,o,i,r){var n={};return Object.keys(i).forEach((function(e){n[e]=i[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=o.slice().reverse().reduce((function(o,i){return i(e,t,o)||o}),n),r&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(r):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}let b=(r=v((i=class{constructor(){y(this,"schemaChangelog",r,this),y(this,"collectionChangelogStores",n,this),y(this,"model",a,this),y(this,"isSchemaLoadingMore",s,this),y(this,"isSchemaLoadingMoreError",l,this)}async fetchChangelog(e){try{this.setCollectionChangelogStores([]),this.schemaChangelog=null,this.setIsSchemaLoadingMore(!1),this.setIsSchemaLoadingMoreError(null),this.model=e;let t=[],o=[],i=this.handleFetchSchemaChangelog(e);o.push(i),this.handleFetchCollectionChangelog(e,o);const r=await Promise.all(o);this.schemaChangelog=f.head(r),t=this.schemaChangelog.data.map((e=>({...e,changeType:"schema",enableRestore:!1}))),f.map(this.collectionChangelogStores,(e=>{const o=f.map(f.get(e,"feeds",[]),(t=>({...t,changeType:"collection",meta:e.meta,collectionUid:f.get(e,"collectionUid"),enableRestore:!1})));t=f.concat(t,o)})),t=f.chain(t).sortBy("createdAt").reverse().value();const n=await u.default.getAllReleases(f.get(e,"api.id"),f.get(e,"apiVersion.id"),"gitTag"),a=this.groupChangesByRelease(t,n);return f.find(a,(t=>t.id===f.get(e,"activeRelease.id")))}catch(e){(0,m.handleError)(e,"Something went wrong while fetching changelog")}}groupChangesByRelease(e,t){let o=f.chain(t).sortBy("createdAt").reverse().value();o.unshift({name:"Unreleased Changes",id:"unreleasedChanges"});let i=0,r=0;for(;i<e.length;){const t=e[i],n=o[r],a=o[r+1];r===o.length-1||t.createdAt>a.createdAt?(n.changelog?n.changelog.push(t):n.changelog=[t],i++):r++}return o=o.map((e=>{const t=d().getDateGroups(e.changelog,"createdAt","MMMM D, YYYY");return{...e,changesGroupedByDate:t}})),o}handleFetchSchemaChangelog(e,t=null){const o=f.get(e,"activeRelease.entities.schemas[0].entityId");return o?(0,g.fetchChangelog)(o,t):Promise.resolve({data:[]})}fetchCollectionIds(e){const t=new Set;return f.map(f.get(this.model,"activeRelease.entities"),(e=>{f.map(e,(e=>{t.add(e.entityId)}))})),Array.from(t)}handleFetchCollectionChangelog(e,t){f.map(this.fetchCollectionIds(),(e=>{const o=new p.default;t.push(o.initialize(e)),this.collectionChangelogStores.push(o)}))}get isLoadingMore(){return!f.every(this.collectionChangelogStores,{isLoadingMore:!1})||this.isSchemaLoadingMore}get isLoaded(){let e=!0;for(let t of this.collectionChangelogStores)e=e&&0===f.get(t,"meta.next_max_id");return e&&!f.get(this.schemaChangelog,"meta.cursor.next")}get loadMoreError(){for(let e of this.collectionChangelogStores)if("loadMore"===f.get(e,"error.type"))return e.error;if(this.isSchemaLoadingMoreError)return{...this.isSchemaLoadingMoreError,type:"loadMore"}}setIsSchemaLoadingMore(e){this.isSchemaLoadingMore=e}setIsSchemaLoadingMoreError(e){this.isSchemaLoadingMoreError=e}setCollectionChangelogStores(e){this.collectionChangelogStores=e}async loadMore(){try{if(this.isLoaded||this.isLoadingMore)return;this.setIsSchemaLoadingMore(!0),this.setIsSchemaLoadingMoreError(null);let e=null;try{if(f.get(this.schemaChangelog,"meta.cursor.next")){const e=await this.handleFetchSchemaChangelog(this.model,f.get(this,"schemaChangelog.meta.cursor.next")),t=f.concat(f.get(e,"data",[]),f.get(this.schemaChangelog,"data",[]));this.schemaChangelog=Object.assign({},e,{data:t})}e=this.schemaChangelog.data.map((e=>({...e,changeType:"schema",enableRestore:!1})))}catch(e){throw this.setIsSchemaLoadingMoreError({...e,entityType:"schema"}),e}f.forEach(this.collectionChangelogStores,(async e=>{if(f.get(e,"loadMore"))try{await e.loadMore()}catch(e){throw e}})),f.map(this.collectionChangelogStores,(t=>{const o=f.map(f.get(t,"feeds",[]),(e=>({...e,changeType:"collection",meta:t.meta,collectionUid:f.get(t,"collectionUid"),enableRestore:!1})));e=f.concat(e,o)})),e=f.chain(e).sortBy("createdAt").reverse().value();const t=await u.default.getAllReleases(f.get(this.model,"api.id"),f.get(this.model,"apiVersion.id"),"gitTag"),o=this.groupChangesByRelease(e,t),i=f.find(o,(e=>e.id===f.get(this.model,"activeRelease.id")));return this.setIsSchemaLoadingMore(!1),i}catch(e){(0,m.handleError)(e,"There was an unexpected error while loading more changes")}}}).prototype,"schemaChangelog",[h.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),n=v(i.prototype,"collectionChangelogStores",[h.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),a=v(i.prototype,"model",[h.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),s=v(i.prototype,"isSchemaLoadingMore",[h.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=v(i.prototype,"isSchemaLoadingMoreError",[h.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v(i.prototype,"handleFetchCollectionChangelog",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"handleFetchCollectionChangelog"),i.prototype),v(i.prototype,"isLoadingMore",[h.computed],Object.getOwnPropertyDescriptor(i.prototype,"isLoadingMore"),i.prototype),v(i.prototype,"isLoaded",[h.computed],Object.getOwnPropertyDescriptor(i.prototype,"isLoaded"),i.prototype),v(i.prototype,"loadMoreError",[h.computed],Object.getOwnPropertyDescriptor(i.prototype,"loadMoreError"),i.prototype),v(i.prototype,"setIsSchemaLoadingMore",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"setIsSchemaLoadingMore"),i.prototype),v(i.prototype,"setIsSchemaLoadingMoreError",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"setIsSchemaLoadingMoreError"),i.prototype),v(i.prototype,"setCollectionChangelogStores",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"setCollectionChangelogStores"),i.prototype),i)},"./js/modules/services/ActivityFeedService.js":function(e,t,o){o.r(t);o("./js/modules/controllers/WorkspaceSessionController.js"),o("./js/common/controllers/WindowController.js");var i=o("./js/modules/services/RemoteSyncRequestService.js"),r=o("./collaboration/workspace/controller/ActiveWorkspaceController.ts"),n=o("./node_modules/lodash/lodash.js");var a={fetchActivityFeed(e,t={}){if(!e.collectionUid)return Promise.reject(new Error("ActivityFeedService~fetchPossibleAPI: collectionUid not found"));let o=n.assign({},{count:20},{populate:!0},{max_id:e.maxId?e.maxId:0},{since_id:e.sinceId?e.sinceId:0}),r=`/collection/revisions/${e.collectionUid}?count=${o.count}&populate=${o.populate}`;return t.loadMore?r=r.concat(`&max_id=${o.max_id}`):t.loadNew&&(r=r.concat(`&since_id=${o.since_id}`)),i.default.request(r,{method:"get"}).then((t=>{let o={id:e.collectionUid,meta:n.get(t.body,"meta")||{},feeds:n.get(t.body,"data")||[],error:!t.body.data||t.error||!1};return Promise.resolve(o)}))},fetchPossibleAPIVersions:e=>e.collectionUid?async function(){try{return r.default.get().id}catch(e){return pm.logger.error(e),Promise.reject(e)}}().then((t=>{if(!t)return Promise.reject(new Error("ActivityFeedService~fetchPossibleAPIVersions: workspaceId not found"));n.assign(e,{workspaceId:t});let o=`/collections/${e.collectionUid}/apiVersions?workspace=${e.workspaceId}`;return i.default.request(o,{method:"get"}).then((e=>{let t=e.body.data.apis;return Promise.resolve(t)}))})):Promise.reject(new Error("ActivityFeedService~fetchPossibleAPIVersions: collectionUid not found")),addVersionTag(e){if(!e.collectionUid)return Promise.reject(new Error("ActivityFeedService~addVersionTag: collectionUid not found"));if(!e.apiVersionId)return Promise.reject(new Error("ActivityFeedService~addVersionTag: apiVersionId not found"));if(!e.revisionId)return Promise.reject(new Error("ActivityFeedService~addVersionTag: revisionId not found"));if(!e.relationType)return Promise.reject(new Error("ActivityFeedService~addVersionTag: relationType not found"));let t=`/collections/${e.collectionUid}/versiontags`,o={apiVersion:e.apiVersionId,revision:e.revisionId,relations:[{type:e.relationType}]};return i.default.request(t,{method:"post",data:o}).then((e=>Promise.resolve(e.body.data)))},removeVersionTag(e){if(!e.collectionUid)return Promise.reject(new Error("ActivityFeedService~removeVersionTag: collectionUid not found"));if(!e.tagId)return Promise.reject(new Error("ActivityFeedService~removeVersionTag: tagId not found"));let t=`/collections/${e.collectionUid}/versiontags/${e.tagId}`;return i.default.request(t,{method:"delete"}).then((()=>Promise.resolve()))}};t.default=a},"./js/stores/CollectionActivityFeedStore.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return L}});var i,r,n,a,s,l,c,d,h,g=o("./js/modules/services/ActivityFeedService.js"),p=o("../../node_modules/mobx/lib/mobx.module.js"),u=o("./node_modules/lodash/lodash.js");function m(e,t,o,i){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(i):void 0})}function f(e,t,o,i,r){var n={};return Object.keys(i).forEach((function(e){n[e]=i[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=o.slice().reverse().reduce((function(o,i){return i(e,t,o)||o}),n),r&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(r):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}const y="initial",v="loadMore",b="loadNew",w="addVersionTag",C="removeVersionTag",S="add",j="remove";let L=(r=f((i=class{constructor(){this.modelEvents={namespace:"collectionactivityfeed"},m(this,"collectionUid",r,this),m(this,"feeds",n,this),m(this,"meta",a,this),m(this,"isLoaded",s,this),m(this,"isLoading",l,this),m(this,"isLoadingMore",c,this),m(this,"isLoadingNew",d,this),m(this,"error",h,this),this.collectionUid=null}add(e){u.isEmpty(e)||e.id!==this.collectionUid||(this.isLoading=!1,this.isLoadingMore=!1,this.isLoadingNew=!1,this.collectionUid=e.id,this.feeds=u.orderBy(u.unionBy(this.feeds,e.feeds,"id"),"id","desc"),e.meta.next_max_id||(this.meta.next_max_id=0),this.meta=u.merge(this.meta,e.meta),this.error={})}initialize(e){return this.collectionUid=e,this.getFeeds().then((()=>Promise.resolve()))}handleError(e,t){let o="";t===w?o="There was an issue adding the version tag on this collection. Please try again.":t===C&&(o="There was an issue removing the version tag on this collection. Please try again."),this.error.type=t,this.error.message=u.get(e.details,"message")||e.message||o,this.error.title=e.title||"",this.isLoading=!1,this.isLoadingMore=!1,this.isLoadingNew=!1}updateCurrentLabel(){let e=u.head(this.feeds);!u.isEmpty(e.tags)&&u.last(e.tags).system&&e.tags.pop()}getFeeds(){if(this.collectionUid)return this.isLoading=!0,g.default.fetchActivityFeed({collectionUid:this.collectionUid}).then((e=>{if(!u.isEmpty(e))return this.add(e),Promise.resolve()})).catch((e=>{this.handleError(e.error,y),pm.logger.warn("CollectionActivityFeedStore~getFeeds: Error occurred while fetching feeds",e)}))}loadMore(){if(!this.didReachEndOfFeed()&&!this.isLoaded)return this.isLoadingMore=!0,g.default.fetchActivityFeed({collectionUid:this.collectionUid,maxId:this.meta.next_max_id},{loadMore:this.isLoadingMore}).then((e=>{u.isEmpty(e)||this.add(e)})).catch((e=>{this.handleError(e.error,v),pm.logger.warn("CollectionActivityFeedStore~loadMore: Error occurred while fetching older feeds",e)}));this.isLoaded=!0}loadNew(){if(this.isLoadingNew=!0,u.isEmpty(this.feeds))return pm.logger.warn("CollectionActivityFeedStore~loadNew: sinceId not found");let e=u.head(this.feeds).id;return g.default.fetchActivityFeed({collectionUid:this.collectionUid,sinceId:e},{loadNew:this.isLoadingNew}).then((0,p.action)((e=>u.isEmpty(e.feeds)?(this.isLoadingNew=!1,Promise.resolve(!1)):(this.updateCurrentLabel(),this.add(e),Promise.resolve(!0))))).catch((e=>{this.handleError(e.error,b),pm.logger.warn("CollectionActivityFeedStore~loadNew: Error occurred while fetching newer feeds",e)}))}addVersionTag(e){return g.default.addVersionTag(e).then((e=>{this.updateFeed(e,S),pm.toasts.success("This tag will be associated with the selected API version.",{noIcon:!0,title:"Version tag added"})})).catch((e=>(this.handleError(e.error,w),pm.logger.warn("CollectionActivityFeedStore~addVersionTag: Error occurred while adding a version tag on collection revision",e),pm.toasts.error(this.error.message,{noIcon:!0,title:this.error.title}),Promise.reject())))}removeVersionTag(e){return g.default.removeVersionTag(e).then((()=>{this.updateFeed({revision:e.revisionId},j)})).catch((e=>{this.handleError(e.error,C),pm.logger.warn("CollectionActivityFeedStore~removeTag: Error occurred while removing a version tag on collection revision",e),pm.toasts.error(this.error.message,{noIcon:!0,title:this.error.title})}))}updateFeed(e,t){let o=u.find(this.feeds,["id",e.revision]),i=u.pick(e,["apiVersion","createdAt","createdBy","id","revision","updatedAt"]);if(o){if(t===j)o.tags.shift();else if(t===S){let t,r=u.get(e.apiVersion,"id");if(!r)return void pm.logger.warn("CollectionActivityFeedStore~Error occurred while updating revision. API version Id not found");let n=u.find(this.feeds,(e=>u.find(e.tags,(e=>e.apiVersion.id===r))));n&&(t=n.tags.shift().id,i.id=t),o.tags.unshift(i)}}else pm.logger.error("CollectionActivityFeedStore~Error occurred while updating revision. Revision not found.")}didReachEndOfFeed(){return!u.get(this.meta,"next_max_id")}}).prototype,"collectionUid",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),n=f(i.prototype,"feeds",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),a=f(i.prototype,"meta",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),s=f(i.prototype,"isLoaded",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=f(i.prototype,"isLoading",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=f(i.prototype,"isLoadingMore",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=f(i.prototype,"isLoadingNew",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=f(i.prototype,"error",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),f(i.prototype,"add",[p.action],Object.getOwnPropertyDescriptor(i.prototype,"add"),i.prototype),f(i.prototype,"initialize",[p.action],Object.getOwnPropertyDescriptor(i.prototype,"initialize"),i.prototype),f(i.prototype,"handleError",[p.action],Object.getOwnPropertyDescriptor(i.prototype,"handleError"),i.prototype),f(i.prototype,"updateCurrentLabel",[p.action],Object.getOwnPropertyDescriptor(i.prototype,"updateCurrentLabel"),i.prototype),f(i.prototype,"getFeeds",[p.action],Object.getOwnPropertyDescriptor(i.prototype,"getFeeds"),i.prototype),f(i.prototype,"loadMore",[p.action],Object.getOwnPropertyDescriptor(i.prototype,"loadMore"),i.prototype),f(i.prototype,"loadNew",[p.action],Object.getOwnPropertyDescriptor(i.prototype,"loadNew"),i.prototype),f(i.prototype,"updateFeed",[p.action],Object.getOwnPropertyDescriptor(i.prototype,"updateFeed"),i.prototype),i)}}]);