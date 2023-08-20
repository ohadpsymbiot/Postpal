"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[166],{"../../packages/api-design/schema-editor/src/constants/FileWorkbenchConstants.js":function(e,t,i){i.r(t),i.d(t,{CONFLICTED:function(){return s},DELETED:function(){return a}});const s="updated",a="deleted"},"../../packages/api-design/schema-editor/src/controllers/FileWorkbenchController.js":function(e,t,i){i.r(t),i.d(t,{default:function(){return ee}});var s,a,o,r,n,l,d,h,c,p,u,m,I,g,b,f,y,v,S=i("../../node_modules/mobx/lib/mobx.module.js"),D=i("../../node_modules/moment/moment.js"),E=i.n(D),T=i("../../node_modules/lodash/lodash.js"),P=i.n(T),_=i("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),w=i("./appsdk/workbench/BaseWorkbenchController.js"),A=i("./appsdk/tracked-state/ObservableTrackedState.js"),O=i("./js/stores/StoreManager.js"),k=i("../../packages/api-design/api-definition-store/index.js"),C=i("./api-dev/stores/APIListStore.js"),F=i("../../packages/api-design/schema-editor/src/constants/SchemaEditorModes.js"),j=i("../../packages/api-design/schema-editor/src/constants/SchemaErrors.js"),M=i("../../packages/api-design/schema-editor/src/constants/FileWorkbenchConstants.js"),L=i("./js/stores/CommentStore.js"),N=i("./collaboration/services/CollaborationNavigationService.js"),R=i("../../packages/api-design/api-definition-ui/index.js"),U=i("./js/modules/services/APITabUpdateHelpers.js"),z=i("./appsdk/workbench/WorkbenchService.js"),V=i("./js/utils/urlUtils.js"),W=i("./js/services/NavigationService.js"),x=i("./api-dev/interfaces/APIInterface.js"),q=i("./api-dev/constants/APITabModes.js"),H=i("./schema/constants/Constants.js"),B=i("./js/stores/SyncStatusStore.js"),Q=i("./collaboration/constants/comments.js"),G=i("./js/modules/model-event.js"),Y=i("../../packages/api-design/api-design-analytics/index.js");function J(e,t,i,s){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(s):void 0})}function K(e,t,i,s,a){var o={};return Object.keys(s).forEach((function(e){o[e]=s[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,s){return s(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}const{API_NO_PERMISSION:X,API_REDIRECT_CONSUMER_ENTITY:Z}=H.INTERMEDIATE_DEFINITION_VIEW,$=pm.logger.getContext("FileWorkbenchController","api-design");let ee=(s=class extends w.default{setIsInitializingAutoSave(e){this.isInitializingAutoSave=e}setErrorInitialisingAutoSave(e){var t;null===(t=this.file)||void 0===t||t.set("errorInitialisingAutoSave",e)}constructor(){super(),J(this,"apiId",a,this),J(this,"apiVersionId",o,this),J(this,"fileId",r,this),J(this,"isSaving",n,this),J(this,"name",l,this),J(this,"file",d,this),J(this,"isCommentMode",h,this),J(this,"hasFileLoaded",c,this),J(this,"status",p,this),J(this,"mode",u,this),J(this,"goToPath",m,this),J(this,"intermediateView",I,this),this.editorRef=null,J(this,"shouldShowSaveMessage",g,this),J(this,"lastSaved",b,this),J(this,"shouldShowLastUpdatedTime",f,this),J(this,"isInitializingAutoSave",y,this),J(this,"shouldShowUnsavedWarningModal",v,this),this._prevQueryParams={},this.modelName=Q.MODEL_TYPE.API_DEFINITION,this.hasConflict=!1,this.handleRequestForAccessOnParentAPI=this.handleRequestForAccessOnParentAPI.bind(this),this.handleRedirectToAPIConsumerDefinition=this.handleRedirectToAPIConsumerDefinition.bind(this)}async didCreate({routeParams:e,queryParams:t,additionalContext:i}){this._cacheQueryParams();try{await(0,O.resolveStoreInstance)(B.default).onSyncAvailable();const s=await U.default.resolveActiveModeForLinkedEntities(e.apiId,t);this.apiMode=s,this.setTitle("Loading...");let a,o=P().get(e,"apiId"),r=P().get(e,"apiVersionId"),n=P().get(e,"apiDefinitionId"),l=P().get(e,"fileId");this.set("apiId",o),this.set("apiVersionId",r),this.queryParams=t;const d=(0,O.resolveStoreInstance)(k.APIDefinitionStore),h=await d.getDefinitionFromAPI(o,s,r);if((s.name===q.VERSION_VIEW||s.name===q.BUILDER_VIEW&&!h)&&(await this.determineIntermediateView(o,n,null==h?void 0:h.id),!P().isEmpty(this.intermediateView)))return this.setWorkbenchStatus("ready"),void this.setTitle("Definition File");if(!h)return void this.handleError({name:j.FILE_NOT_FOUND});h&&h.id!==n&&(a=d.getLatestPath(this.tabId),await(0,S.when)((()=>h.hasFileTreeLoaded)),a&&h.filePathMap.has(a)&&(l=h.filePathMap.get(a)),W.default.updateURL("build.apiDefinitionFile",{apiId:o,apiDefinitionId:h.id,fileId:l},t)),this.set("fileId",l),this.id=null==h?void 0:h.id,this.goToLocation=P().get(i,"goToLocation"),this.id&&this.initialize()}catch(e){return pm.logger.error("FileWorkbenchController~didCreate",e,{context:$}),void this.handleError({name:j.FILE_NOT_FOUND})}}async initialize(){try{const e=this.queryParams,t=e&&e.comment,i=e&&e.version;this.releaseId=i;const s=(0,O.resolveStoreInstance)(k.APIDefinitionStore);this.store=await s.getModelForReleaseId({apiId:this.apiId,apiVersionId:this.apiVersionId,apiDefinitionId:this.id,releaseId:i}),this.store.loadPermissions(),this.setWorkbenchStatus("loading");const{content:a,language:o,path:r,isRoot:n}=await this.store.getFileContent({fileId:this.fileId,conflictHandler:this.detectConflict.bind(this),tabId:this._editorModel.id});this.set("file",this.store.entityMap.get(this.fileId)),this.set("isRoot",n);let l=r.split("/");this.set("name",l.pop()),this.setTitle(this.name);const d=await(0,x.getAPI)(this.apiId),h=d&&P().get(d,"childEntities.values");this.versions=h,this.setConflictOptions({entityType:"file"}),this.wbReadyReactionDispose=(0,S.reaction)((()=>P().get(this.store,"hasContentLoaded")),(e=>{e&&(this.setHasFileLoaded(!0),this.setWorkbenchStatus("ready"),t&&this.handleCommentHighlight(t),this.updateSidebarItem())}),{fireImmediately:!0}),this.entityDeletedReactionDispose=(0,S.reaction)((()=>P().get(this.file,"isDeleted")),(e=>{e&&this.setStatus("deleted",j.DELETED_STATUS_MESSAGE)}),{fireImmediately:!0}),this.migrationReactionDispose=(0,S.reaction)((()=>P().get(this.store,"isMigrated")),(()=>{setTimeout((()=>{this.reload()}),1e3)})),this.deleteApiReactionDisposer=(0,S.reaction)((()=>P().get(d,"isDeleted")),(e=>{e&&this.markFileAsDeleted()}),{fireImmediately:!0}),pm.eventBus.channel("__apiEditor").subscribe((e=>{"deleted"===(0,G.getEventName)(e)&&(0,G.getEventData)(e).id===this.apiId&&this.markFileAsDeleted()})),this.beginTracking({content:a},this.saveFile)}catch(e){this.handleError(e)}this.modelDeleteReactionDisposer&&this.modelDeleteReactionDisposer(),this.modelDeleteReactionDisposer=(0,S.reaction)((()=>this.store.isDeleted),(e=>{e&&this.initialize()})),this.lastSavedTimeUpdateDisposer=setInterval((()=>{this.isAutoSaveEnabled&&this.lastSaved&&E()().diff(this.lastSaved,"minute")>=1&&this.set("shouldShowLastUpdatedTime",!0)}),3e4)}shouldClose(){return!this.isAutoSaveEnabled||!this.isDirty||(this.set("shouldShowUnsavedWarningModal",!0),!1)}markFileAsDeleted(){this.file.set("isDeleted",!0),this.setStatus("deleted",j.DELETED_STATUS_MESSAGE)}handleError(e){e&&e.name===j.FILE_NOT_FOUND?(this.errorMessage=j.FILE_NOT_FOUND_MESSAGE,this.errorTitle="File not found",this.errorType=j.FILE_NOT_FOUND):(this.errorMessage=j.UNABLE_TO_LOAD_MESSAGE,this.errorTitle="Unable to load",this.errorType=null),this.setTitle("Unable to load"),this.setWorkbenchStatus("error"),this.setHasFileLoaded(!0),pm.logger.error("Error in File workbench controller: ",e,{context:$})}beginTracking(e,t){let i;const s=this.getPersistedTrackedState();i=s&&s.isDirty?s:new A.ObservableTrackedState(e),this.attachTrackedState(i,t,{persist:!0}),s&&s.isDirty&&this.detectConflict(e)}handleCommentHighlight(e){(0,O.resolveStoreInstance)(L.default).setLoaded(!1),!this.isCommentMode&&this.toggleCommentMode(),N.default.handleOpenComment(this.fileId,e)}detectConflict(e,t={shouldReinitialize:!1}){if(t.shouldReinitialize)return this.clearStatus(),void this.initialize();let i=(0,S.toJS)(this._trackedState._initialState);if(this.isDirty&&!P().isEqual((0,S.toJS)(e),i))return this.set("hasConflict",!0),void this.setStatus("CONFLICT","This file has been modified since you last opened this tab.");this.clearStatus(),this.handleIncomingUpdates(e,{resetUpdates:!this._trackedState.isDirty})}handleIncomingUpdates(e,t={resetUpdates:!0}){if(!e)throw new Error("FileWorkBenchController~handleIncomingUpdates: Could not set new state. Parameter `newInitialState` not provided");this.clearStatus(),this.set("hasConflict",!1),t&&!t.resetUpdates?this._trackedState._setInitialState(e):this._trackedState.reset(e)}clearTrackedUpdates(e=!1){this._trackedState.resetUpdates(),this.store.setFileContent(this.fileId,this._trackedState.get("content"),{isDirty:!1,shouldBundle:e})}async saveFile(e){var t;if(this.isAutoSaveEnabled&&!P().get(e,"shouldHideSaveMessage")&&((0,S.runInAction)((()=>{this.shouldShowSaveMessage=!0})),setTimeout((()=>(0,S.runInAction)((()=>{this.shouldShowSaveMessage=!1}))),5e3)),this.isAutoSaveEnabled&&!(0,O.resolveStoreInstance)(B.default).isSocketConnected)return!1;if(null!==(t=this.file)&&void 0!==t&&t.isDeleted)return(0,_.toast)({description:"The file you’re trying to save has been deleted.",status:"error"}),!1;try{return this.set("isSaving",!0),await this.store.saveFile(this.fileId,this.content),this.set("isSaving",!1),this._trackedState.reset({content:this.content}),this.set("lastSaved",E()()),this.set("shouldShowLastUpdatedTime",!1),!0}catch(e){return this.set("isSaving",!1),!1}}async changeLanguage(e){try{return this.language=e,await this.store.saveFile(this.fileId,void 0,e),!0}catch(e){return this.set("isSaving",!1),!1}}get conflictType(){return P().get(this,"file.isDeleted")?M.DELETED:this.hasConflict?M.CONFLICTED:void 0}set(e,t){this[e]=t}get isDirty(){return(!this.isAutoSaveEnabled||!(0,O.resolveStoreInstance)(B.default).isSocketConnected)&&(this._trackedState&&this._trackedState.isDirty)}get showLocalSaveMessage(){var e;return this.isAutoSaveEnabled&&(null===(e=this._trackedState)||void 0===e?void 0:e.isDirty)&&!(0,O.resolveStoreInstance)(B.default).isSocketConnected}get isAutoSaveEnabled(){var e,t;return(null===(e=this.store)||void 0===e?void 0:e.isAutoSaveEnabled)&&this.canUpdateFile&&!(null!==(t=this.file)&&void 0!==t&&t.errorInitialisingAutoSave)}get canUpdateFile(){var e,t,i;return(null===(e=this.store)||void 0===e||null===(t=e.apiDefinitionPermissions)||void 0===t?void 0:t.canUpdateDefinition)&&!(null!==(i=this.store)&&void 0!==i&&i.readOnly)}set content(e){this._editorModel.promoteEditor(),this._trackedState&&this._trackedState.set({content:e}),this.store.setFileContent(this.fileId,e,{isDirty:this._trackedState&&this._trackedState.isDirty,shouldBundle:!0})}set language(e){this.store.setLanguageContent(this.fileId,e)}get content(){return this._trackedState&&this._trackedState.get("content")}get language(){return this.file.language}setName(e){this.setTitle(e),this.name=e}toggleCommentMode(){this.isCommentMode?this.mode=F.FILE_MODE:this.mode=F.COMMENT_MODE,this.isCommentMode=!this.isCommentMode}get apiName(){const e=(0,O.resolveStoreInstance)(C.default)&&(0,O.resolveStoreInstance)(C.default).find(this.apiId);return P().get(e,"name")||"API"}setWorkbenchStatus(e){this.status=e,"ready"!==e&&"error"!==e||this.setLoading(!1)}get path(){const e=(0,O.resolveStoreInstance)(k.APIDefinitionStore);if(!this.store)return"";if(this.store.isSchema){const t=this.file?this.file.name:this.name;return this.setTitle(t),e.setLatestPath(this.tabId,t),t}const t=this.store.calculateFilePath(this.fileId);if(!t)return"";let i=t.split("/");return this.set("name",i.pop()),this.setTitle(this.name),e.setLatestPath(this._tabId,t),t}reload(){this.setHasFileLoaded(!1),this.initialize()}setHasFileLoaded(e){this.hasFileLoaded=e}detachTrackedState(){P().get(this.file,"isDeleted")||this.clearTrackedUpdates(),this._saveCallback=null}beforeDestroy(){this.wbReadyReactionDispose&&this.wbReadyReactionDispose(),this.entityDeletedReactionDispose&&this.entityDeletedReactionDispose(),this.migrationReactionDispose&&this.migrationReactionDispose(),this.modelDeleteReactionDisposer&&this.modelDeleteReactionDisposer(),this.deleteApiReactionDisposer&&this.deleteApiReactionDisposer(),this.lastSavedTimeUpdateDisposer&&this.lastSavedTimeUpdateDisposer(),this.detachTrackedState(),this.store.removeTab(this.fileId),(0,Y.logApiDesignAnalytics)({category:Y.EVENT_CATEGORIES.DEFINITION,action:Y.EVENT_ACTIONS.FILE_TAB_X,entityType:Y.EVENT_ENTITY_TYPES.API_DEFINITION_NODE,entityId:this.fileId})}onItemClick(e){(0,R.openSideBarItems)({apiId:this.apiId,apiVersionId:this.apiVersionId},(()=>{this.store&&this.store.updateActiveItem(e)}))}updateSidebarItem(){const{routeParams:e,queryParams:t}=this.getRouteConfig(),i=(0,O.resolveStoreInstance)(k.APIDefinitionStore),s=i.getStoreKey(null==e?void 0:e.apiDefinitionId,null==t?void 0:t.version);i.updateActiveItem(null==e?void 0:e.fileId,s)}didActivate(){var e;null===(e=this.updateSidebarItem)||void 0===e||e.call(this)}didQueryParamsChange(e){(0,V.getUpdatedQueryParamsList)(e,this._prevQueryParams).some((e=>["version","branch"].includes(e)))&&(0,S.transaction)((()=>{z.default.suspendEditor(this.tabId),z.default.restoreEditor(this.tabId)})),this._cacheQueryParams(e)}_cacheQueryParams(){this._prevQueryParams=this.getQueryParams()}highlightPath(e){this.set("goToPath",e)}async determineIntermediateView(e,t,i){var s;let a,o=!1;if((null===(s=this.apiMode)||void 0===s?void 0:s.name)===q.BUILDER_VIEW&&P().has(this.queryParams,"branch")&&P().isEmpty(i))this.set("intermediateView",X);else{try{a=await(0,x.resolveAPIRelationId)(e,"apiDefinition",t)}catch(e){P().includes(["apiUnmigratedError","apiDefinitionDoesntExistOnTheAPI"],e.name)?o=!0:"apiDefinitionConsumerDuplicateDoesntExistOnTheAPI"===e.name&&P().has(this.queryParams,"branch")&&(o=!0,this.consumerDefinitionId=i,this.set("intermediateView",Z))}a===t||o||(a?(this.consumerDefinitionId=a,this.set("intermediateView",Z)):this.set("intermediateView",X))}}handleRequestForAccessOnParentAPI(){this.apiId&&(0,x.requestAccessOnAPI)(this.apiId)}async handleRedirectToAPIConsumerDefinition(){const e=Object.assign(this.queryParams,(0,R.getQueryParamsForMode)(this.apiMode)),t=(0,O.resolveStoreInstance)(k.APIDefinitionStore),i=await t.getModel({apiId:this.apiId,apiVersionId:this.apiVersionId,apiDefinitionId:this.consumerDefinitionId});let s=await i.getRedirectionFileId();return P().includes(k.APIDefinitionTypeService.schemaDocumentationSupportedTypes(),i.type)?W.default.transitionTo("build.apiDefinition",{apiId:this.apiId,apiVersionId:this.apiVersionId,apiDefinitionId:this.consumerDefinitionId},e):P().isEmpty(s)?W.default.transitionTo("build.api",{apiId:this.apiId},e):W.default.transitionTo("build.apiDefinitionFile",{apiId:this.apiId,apiVersionId:this.apiVersionId,apiDefinitionId:this.consumerDefinitionId,fileId:s},e)}updateContent(e,t){this.editorRef.current.insertTextBlockAtPosition(e,t)}},a=K(s.prototype,"apiId",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=K(s.prototype,"apiVersionId",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),r=K(s.prototype,"fileId",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),n=K(s.prototype,"isSaving",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=K(s.prototype,"name",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=K(s.prototype,"file",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=K(s.prototype,"isCommentMode",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=K(s.prototype,"hasFileLoaded",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),p=K(s.prototype,"status",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"loading"}}),u=K(s.prototype,"mode",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return F.FILE_MODE}}),m=K(s.prototype,"goToPath",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=K(s.prototype,"intermediateView",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=K(s.prototype,"shouldShowSaveMessage",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=K(s.prototype,"lastSaved",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=K(s.prototype,"shouldShowLastUpdatedTime",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),y=K(s.prototype,"isInitializingAutoSave",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),v=K(s.prototype,"shouldShowUnsavedWarningModal",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),K(s.prototype,"setIsInitializingAutoSave",[S.action],Object.getOwnPropertyDescriptor(s.prototype,"setIsInitializingAutoSave"),s.prototype),K(s.prototype,"setErrorInitialisingAutoSave",[S.action],Object.getOwnPropertyDescriptor(s.prototype,"setErrorInitialisingAutoSave"),s.prototype),K(s.prototype,"conflictType",[S.computed],Object.getOwnPropertyDescriptor(s.prototype,"conflictType"),s.prototype),K(s.prototype,"set",[S.action],Object.getOwnPropertyDescriptor(s.prototype,"set"),s.prototype),K(s.prototype,"isDirty",[S.computed],Object.getOwnPropertyDescriptor(s.prototype,"isDirty"),s.prototype),K(s.prototype,"showLocalSaveMessage",[S.computed],Object.getOwnPropertyDescriptor(s.prototype,"showLocalSaveMessage"),s.prototype),K(s.prototype,"content",[S.computed],Object.getOwnPropertyDescriptor(s.prototype,"content"),s.prototype),K(s.prototype,"language",[S.computed],Object.getOwnPropertyDescriptor(s.prototype,"language"),s.prototype),K(s.prototype,"setName",[S.action],Object.getOwnPropertyDescriptor(s.prototype,"setName"),s.prototype),K(s.prototype,"toggleCommentMode",[S.action],Object.getOwnPropertyDescriptor(s.prototype,"toggleCommentMode"),s.prototype),K(s.prototype,"apiName",[S.computed],Object.getOwnPropertyDescriptor(s.prototype,"apiName"),s.prototype),K(s.prototype,"setWorkbenchStatus",[S.action],Object.getOwnPropertyDescriptor(s.prototype,"setWorkbenchStatus"),s.prototype),K(s.prototype,"reload",[S.action],Object.getOwnPropertyDescriptor(s.prototype,"reload"),s.prototype),K(s.prototype,"setHasFileLoaded",[S.action],Object.getOwnPropertyDescriptor(s.prototype,"setHasFileLoaded"),s.prototype),K(s.prototype,"detachTrackedState",[S.action],Object.getOwnPropertyDescriptor(s.prototype,"detachTrackedState"),s.prototype),s)},"./js/utils/urlUtils.js":function(e,t,i){function s(e={},t={}){let i=[];return Object.keys(e).forEach((s=>{e[s]!==t[s]&&i.push(s)})),i}i.r(t),i.d(t,{getUpdatedQueryParamsList:function(){return s}})},"./schema/constants/Constants.js":function(e,t,i){i.r(t),i.d(t,{INTERMEDIATE_DEFINITION_VIEW:function(){return a},resourceTypeEnum:function(){return s}});const s={APIDEFINITION:"apiDefinition",SCHEMA:"schema"},a={API_NO_PERMISSION:"api-no-permission",API_REDIRECT_CONSUMER_ENTITY:"api-redirect"}}}]);