"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[31],{"../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/CreateFlow.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var n=o("../../node_modules/react/index.js"),s=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/Illustration.js");function r(){return n.createElement(s.default,{name:"illustration-create-flow"})}},"./js/containers/apps/requester/sidebar/SidebarFilter.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});var n,s=o("../../node_modules/react/index.js"),r=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),a=o("./js/components/base/XPaths/XPath.js"),i=o("./js/components/base/Inputs.js"),l=o("./node_modules/lodash/lodash.js");let c=(0,r.observer)(n=class extends s.Component{constructor(e){super(e),this.handleSearchChange=this.handleSearchChange.bind(this),this.handleSearchCancel=this.handleSearchCancel.bind(this),this.focusSearchBox=this.focusSearchBox.bind(this)}UNSAFE_componentWillMount(){pm.mediator.on("focusSearchBox",this.focusSearchBox)}componentWillUnmount(){pm.mediator.off("focusSearchBox",this.focusSearchBox)}focusSearchBox(){l.invoke(this,"refs.filter.focus")}handleSearchChange(e){this.props.onSearch&&this.props.onSearch(e)}handleSearchCancel(){this.props.onSearch&&this.props.onSearch("")}render(){return s.createElement(a.default,{identifier:"filter"},s.createElement(i.Input,{icon:"icon-action-filter-stroke",ref:"filter",inputStyle:"search",onChange:this.handleSearchChange,onCancel:this.handleSearchCancel,query:this.props.searchQuery,className:this.props.className}))}})||n},"./js/containers/apps/requester/sidebar/SidebarListActions.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return p}});var n,s=o("../../node_modules/react/index.js"),r=o("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),a=o("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-add-stroke.js"),i=o("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),l=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),c=o("./js/containers/apps/requester/sidebar/SidebarFilter.js"),d=o("./js/components/base/Buttons.js"),u=o("./js/components/base/Dropdowns.js"),m=o("./js/components/base/XPaths/XPath.js");let p=(0,l.observer)(n=class extends s.Component{constructor(e){super(e),this.handleDropdownSelect=this.handleDropdownSelect.bind(this)}handleDropdownSelect(e){this.props.onActionsDropdownSelect&&this.props.onActionsDropdownSelect(e)}getCreateNewButton(e){if(!e)return null;const t=s.createElement(r.default,{className:"create-new__btn",onClick:e.onCreate,tooltip:e.tooltip,isDisabled:e.disabled,icon:s.createElement(a.default,null),type:"tertiary",size:"small"});return e.xPathIdentifier?s.createElement(m.default,{identifier:e.xPathIdentifier},t):t}render(){return s.createElement("div",{className:"requester-left-sidebar__actions-container"},this.getCreateNewButton(this.props.createNewConfig),s.createElement(c.default,{onSearch:this.props.onSearch,className:this.props.className,searchQuery:this.props.searchQuery}),this.props.rightMetaContainer||this.props.moreActions?s.createElement("div",{className:"secondary-actions-container"},this.props.rightMetaContainer,this.props.moreActions?s.createElement(u.Dropdown,{ref:"menu",onSelect:this.handleDropdownSelect,className:"actions-dropdown"},s.createElement(u.DropdownButton,{dropdownStyle:"nocaret",type:"custom"},s.createElement(d.Button,{tooltip:"View more actions"},s.createElement(i.default,{name:"icon-action-options-stroke",className:"dropdown-action-button pm-icon pm-icon-normal"}))),this.props.moreActions):null):"")}})||n},"./flow-runner/api/FlowInterface.ts":function(e,t,o){o.r(t),o.d(t,{createNewFlow:function(){return d},openFlowInWorkbench:function(){return c}});var n=o("./node_modules/nanoid/index.prod.js"),s=o("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),r=o("./collaboration/workspace/controller/ActiveWorkspaceController.ts"),a=o("./js/services/NavigationService.js"),i=o("./flow-runner/service/ClientEvents.ts"),l=function(e,t,o,n){return new(o||(o=Promise))((function(s,r){function a(e){try{l(n.next(e))}catch(e){r(e)}}function i(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,i)}l((n=n.apply(e,t||[])).next())}))};function c(e,t){a.default.transitionTo("build.flow",{fid:e},{},{additionalContext:t})}function d(e){return l(this,void 0,void 0,(function*(){const{reactiveStorage:t}=pm,o=r.default.get(),a=yield t.subscribe("flows",o.id),l=(0,n.nanoid)(),d={type:"ev/endpoint@1",config:{},ui:{},pos:{x:0,y:0},extend:{input:{},output:{}}};try{const[t]=yield a.add({attributes:{name:"New Flow"},nodes:{[l]:d}});c(t,{new:!0}),(0,i.record)("flows-ux","create:success","flow",t,e)}catch(t){(0,s.toast)({title:"Failed to Create",status:"error",description:t.message||"There was an error while creating the flow"}),(0,i.record)("flows-ux","create:fail","flow","",e)}}))}},"./flow-runner/components/_base/FlowsDeleteModal.tsx":function(e,t,o){o.r(t);var n=o("../../node_modules/react/index.js"),s=o("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),r=o("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),a=o("../../node_modules/@postman/aether/esmLib/src/components/Modal/Modal.js"),i=o("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),l=o("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-forkedFlow-stroke.js"),c=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),d=o("./version-control/common/ForkLabel.js");const u=c.default.div`
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: ${e=>e.theme["highlight-background-color-tertiary"]}
`,m=(0,c.default)(s.default)`
  max-width: 30%;
`;t.default=({isVisible:e,onClose:t,onDelete:o,flowName:c,id:p,forkLabel:f,baseModelUid:h})=>n.createElement(a.Modal,{isOpen:e,onClose:()=>t(),size:"small"},n.createElement(a.ModalHeader,{heading:"Delete Flow"}),n.createElement(a.ModalContent,null,(()=>{if(f){const e={id:p,forkLabel:f,model:"flow"},t={id:h,model:"flow"};return n.createElement(r.default,{alignItems:"center",gap:"spacing-s",padding:{paddingBottom:"spacing-xl"},width:"100%"},n.createElement(l.default,null),n.createElement(m,{isTruncated:!0},c),n.createElement(u,null),n.createElement(d.default,{forkedEntity:e,baseEntity:t,label:f,size:"large"}),n.createElement(s.default,null,"will be deleted."))}return n.createElement("span",null,"Are you sure you want to delete"," ",n.createElement("strong",null,c),"?")})()),n.createElement(a.ModalFooter,null,n.createElement(r.default,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-s"},n.createElement(i.default,{type:"secondary",text:"Cancel",onClick:()=>{t()}}),n.createElement(i.default,{type:"destructive",text:"Delete",autoFocus:!0,onClick:()=>{o(),t()}}))))},"./flow-runner/components/sidebar/FlowSidebarCommingSoon.tsx":function(e,t,o){o.r(t);var n=o("../../node_modules/react/index.js"),s=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./appsdk/components/link/Link.js"),a=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/CreateFlow.js"),i=o("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),l=o("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js");const c=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xxl) var(--spacing-l);
`,d=s.default.div`
  margin-bottom: var(--spacing-l);
`,u=s.default.div`
  text-align: center;
`,m=s.default.div`
  margin-bottom: var(--spacing-s);
`;t.default=()=>n.createElement(c,null,n.createElement(d,null,n.createElement(a.default,null)),n.createElement(u,null,n.createElement(m,null,n.createElement(i.default,{type:"h4",text:"Flows is Coming soon!",color:"content-color-secondary",hasBottomSpacing:!0})),n.createElement(l.default,{type:"para",color:"content-color-secondary",hasBottomSpacing:!0},"Flows help you create API applications by connecting series of requests on an infinite canvas."),n.createElement(r.default,{to:"https://go.pstmn.io/flows-landing",target:"_blank"},n.createElement(l.default,{type:"link-primary"},"Learn more and request early access"))))},"./flow-runner/components/sidebar/FlowSidebarContainer/FlowSidebarContainer.tsx":function(e,t,o){o.r(t);var n=o("../../node_modules/react/index.js"),s=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),r=o("./node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),a=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=o("./node_modules/react-window/dist/index.esm.js"),l=o("./node_modules/lodash/lodash.js"),c=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/CreateFlow.js"),d=o("./appsdk/sidebar/SidebarNoResultsFound/SidebarNoResultsFound.js"),u=o("./flow-runner/components/sidebar/FlowSidebarContainer/FlowSidebarListItem.tsx");const m=a.default.div`
  display: flex;
  flex-direction:column;
  flex: 1;

  >.sidebar-list-item {
    flex: unset;
  }
`;t.default=(0,s.observer)((({model:e})=>n.createElement(m,null,n.createElement(r.default,null,(({height:t,width:o})=>n.createElement(i.FixedSizeList,{height:t,width:o,itemCount:e.items.length,itemSize:28,overscanCount:10},(({index:t,style:o})=>{const s=(0,l.get)(e.items,t);return n.createElement(u.default,{item:s,style:o,canAdd:e.permission.canAdd,canRemove:e.permission.canRemove,isOffline:e.isOffline,onAction:t=>e.handleAction(t,s)})})))),(0,l.isEmpty)(e.items)&&!(0,l.isEmpty)(e.searchQuery)&&n.createElement(d.default,{searchQuery:e.searchQuery,illustration:n.createElement(c.default,null)}))))},"./flow-runner/components/sidebar/FlowSidebarContainer/FlowSidebarListItem.tsx":function(e,t,o){o.r(t);var n=o("../../node_modules/react/index.js"),s=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),r=o("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-fork-stroke-small.js"),a=o("../../node_modules/@postman/aether/esmLib/src/components/Menu/MenuItem.js"),i=o("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),l=o("./version-control/common/ForkLabel.js"),c=o("./appsdk/workbench/WorkbenchService.js"),d=o("./js/containers/apps/requester/sidebar/SidebarListItem.js"),u=o("./flow-runner/api/FlowInterface.ts"),m=o("./flow-runner/service/UserSignInService.ts"),p=o("./js/components/base/Dropdowns.js"),f=o("./js/services/NavigationService.js"),h=o("./js/components/base/keymaps/KeyMaps.js"),w=o("./js/controllers/ShortcutsList.js"),b=o("./node_modules/lodash/lodash.js");t.default=(0,s.observer)((({item:e,style:t,canAdd:o,canRemove:s,isOffline:v,onAction:y})=>{var g,k;const S=(0,n.useRef)(),{id:E,attributes:{name:j}={name:""}}=e,C=()=>{S.current&&S.current.editText()},x=null===(g=e.attributes)||void 0===g?void 0:g.fork,F={id:b.get(x,"id"),forkLabel:b.get(x,"label"),model:b.get(x,"type")},L={id:b.get(x,"parent.id"),model:b.get(x,"type")};return n.createElement(h.default,{handlers:{fork:pm.shortcuts.handle("fork",(e=>(e=>{e.preventDefault(),y("fork")})(e))),delete:pm.shortcuts.handle("delete",(()=>{y("delete")})),duplicate:pm.shortcuts.handle("duplicate",(()=>{y("duplicate")})),rename:pm.shortcuts.handle("rename",(()=>{C()}))}},n.createElement("div",{style:t,key:E},n.createElement(d.default,{ref:S,text:j,onClick:()=>(0,u.openFlowInWorkbench)(E),onRename:t=>e.update({name:t}),moreActions:n.createElement(p.DropdownMenu,{"align-right":!0},n.createElement(p.MenuItem,{key:"move",refKey:"move",disabled:v||!s||(0,m.isCurrentUserPartner)(),disabledText:s?"You can take this actions once online":"You don't have permission to take this action."},n.createElement("div",{className:"dropdown-menu-item-label"},"Move")),n.createElement(p.MenuItem,{key:"rename",refKey:"rename",disabled:v||!s,disabledText:s?"You can take this actions once online":"You don't have permission to take this action."},n.createElement("div",{className:"dropdown-menu-item-label"},"Rename"),n.createElement("div",{className:"dropdown-menu-item-shortcut"},(0,w.getShortcutByName)("rename"))),n.createElement(p.MenuItem,{key:"duplicate",refKey:"duplicate",disabled:v||!o,disabledText:o?"You can take this actions once online":"You don't have permission to take this action."},n.createElement("div",{className:"dropdown-menu-item-label"},"Duplicate"),n.createElement("div",{className:"dropdown-menu-item-shortcut"},(0,w.getShortcutByName)("duplicate"))),n.createElement(p.MenuItem,{key:"fork",refKey:"fork",disabled:v,disabledText:"You can take this actions once online"},n.createElement("div",{className:"dropdown-menu-item-label"},"Create a fork"),n.createElement("div",{className:"dropdown-menu-item-shortcut"},(0,w.getShortcutByName)("fork"))),n.createElement(p.MenuItem,{key:"delete",refKey:"delete",disabled:v||!s,disabledText:s?"You can take this actions once online":"You don't have permission to take this action."},n.createElement("div",{className:"dropdown-menu-item-label"},"Delete"),n.createElement("div",{className:"dropdown-menu-item-shortcut"},(0,w.getShortcutByName)("delete")))),onActionsDropdownSelect:e=>"rename"===e?C():y(e),isForked:!!(null===(k=e.attributes)||void 0===k?void 0:k.fork),statusIndicators:()=>{var t,o;return(null===(t=e.attributes)||void 0===t?void 0:t.fork)?n.createElement(i.default,{padding:"spacing-zero spacing-xs"},!0!==(null===(o=e.attributes)||void 0===o?void 0:o.fork)?n.createElement(l.default,{forkedEntity:F,baseEntity:L,label:b.get(F,"forkLabel")}):n.createElement(r.default,{color:"content-color-tertiary"})):null},isSelected:f.default.isActive("build.flow",{fid:E}),routeConfig:{routeIdentifier:"build.flow",routeParams:{fid:E},isNonLink:!0},moreActionsForAetherMenu:c.default.isUseBrowserTabsActive()?(()=>{const e=e=>{switch(e){case"move":case"rename":case"delete":return!s&&"You don't have permission to take this action.";case"duplicate":return!o&&"You don't have permission to take this action.";default:return null}};return[c.default.isUseBrowserTabsActive()&&n.createElement(a.default,{key:"open-in-new-browser-tab",isDisabled:v,tooltip:v?"You can take this actions once online":e("open-in-new-browser-tab"),onClick:()=>y("open-in-new-browser-tab"),shortcutLabel:(0,w.getShortcutByName)("openInNewBrowserTab")},"Open In New Tab"),n.createElement(a.default,{key:"move",isDisabled:v||!s,tooltip:v?"You can take this actions once online":e("move"),onClick:()=>y("move")},"Move"),n.createElement(a.default,{key:"rename",isDisabled:v||!s,tooltip:v?"You can take this actions once online":e("rename"),onClick:()=>C(),shortcutLabel:(0,w.getShortcutByName)("rename")},"Rename"),n.createElement(a.default,{key:"duplicate",isDisabled:v||!s,tooltip:v?"You can take this actions once online":e("duplicate"),onClick:()=>y("duplicate"),shortcutLabel:(0,w.getShortcutByName)("duplicate")},"Duplicate"),n.createElement(a.default,{key:"fork",isDisabled:v,tooltip:v?"You can take this actions once online":e("fork"),onClick:()=>y("fork")},"Create a fork"),n.createElement(a.default,{key:"delete",isDisabled:v||!s,tooltip:v?"You can take this actions once online":e("delete"),onClick:()=>y("delete"),shortcutLabel:(0,w.getShortcutByName)("delete"),type:"destructive"},"Delete")].filter(Boolean)})():null})))}))},"./flow-runner/components/sidebar/FlowSidebarController.ts":function(e,t,o){o.r(t),o.d(t,{default:function(){return a}});var n=o("./collaboration/workspace/controller/ActiveWorkspaceController.ts"),s=o("./flow-runner/components/sidebar/FlowSidebarModel.ts"),r=o("../../node_modules/console-browserify/index.js");class a{constructor(){this.reactiveStorage=pm.reactiveStorage}didCreate(){if(this.workspace=n.default.get().id,!this.workspace)return void r.error("FlowSidebarController~didCreate: Got undefined/null workspace id");const e=this.reactiveStorage.subscribeSync("flows",this.workspace);this.model=new s.default(e,this.workspace)}beforeDestroy(){var e;null===(e=this.model)||void 0===e||e.dispose(),this.model=void 0,this.workspace&&this.reactiveStorage.dispose(this.workspace)}}},"./flow-runner/components/sidebar/FlowSidebarModel.ts":function(e,t,o){o.r(t),o.d(t,{default:function(){return b}});var n=o("./node_modules/lodash/lodash.js"),s=o("../../node_modules/mobx/lib/mobx.module.js"),r=o("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),a=o("./js/services/NavigationService.js"),i=o("./js/stores/SyncStatusStore.js"),l=o("./js/stores/StoreManager.js"),c=o("./js/utils/TabOpeningUtil.js"),d=o("./flow-runner/api/ReactiveListStorage.ts"),u=o("./js/modules/services/ShareModalService.js"),m=o("./flow-runner/service/ClientEvents.ts"),p=o("./flow-runner/api/FlowInterface.ts"),f=o("./flow-runner/service/UserSignInService.ts"),h=function(e,t,o,n){var s,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,o,a):s(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},w=function(e,t,o,n){return new(o||(o=Promise))((function(s,r){function a(e){try{l(n.next(e))}catch(e){r(e)}}function i(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,i)}l((n=n.apply(e,t||[])).next())}))};class b{constructor(e,t){this.searchQuery="",this.flowDeleteModal={isVisible:!1,onDelete:()=>{},onClose:()=>{},flowName:"",id:""},this.list=e,(0,s.when)((()=>this.status===d.SyncState.SYNCED),(()=>(0,m.record)("flows-ux","list:success","workspace",t,this.items.length?"not-empty":"empty"))),(0,s.when)((()=>this.status===d.SyncState.ERROR),(()=>(0,m.record)("flows-ux","list:fail","workspace",t,"unhandled"))),(0,s.when)((()=>this.status===d.SyncState.NO_PERMISSION),(()=>(0,m.record)("flows-ux","list:fail","workspace",t,"permission")))}get status(){return this.list.status}get isOffline(){return!(0,l.resolveStoreInstance)(i.default).isSocketConnected}get isLoading(){return this.list.status===d.SyncState.SYNCING}get permission(){return this.list.storage.permission}setSearchQuery(e){this.searchQuery=e}setFlowDeleteModal(e){var t;this.flowDeleteModal.onClose=(0,s.action)((()=>{this.flowDeleteModal.isVisible=!1})),this.flowDeleteModal.onDelete=()=>w(this,void 0,void 0,(function*(){try{yield this.list.remove(e),(0,m.record)("flows-ux","delete:success","flow",e.id,"from:menu")}catch(t){(0,r.toast)({title:"Failed to Delete",status:"error",description:t.message||"There was an error while deleting the flow"}),(0,m.record)("flows-ux","delete:fail","flow",e.id,"from:menu")}})),this.flowDeleteModal.flowName=null===(t=e.attributes)||void 0===t?void 0:t.name,this.flowDeleteModal.isVisible=!0,this.flowDeleteModal.forkLabel=(0,n.get)(e.attributes,"fork.label"),this.flowDeleteModal.id=e.id,this.flowDeleteModal.baseModelUid=(0,n.get)(e.attributes,"fork.parent.id")}get items(){let{items:e}=this.list;return e=(0,n.sortBy)(e,(e=>{var t;return null===(t=e.attributes)||void 0===t?void 0:t.name.toLowerCase()})),this.searchQuery.trim()?(0,n.filter)(e,(({attributes:e})=>{const t=!!(null==e?void 0:e.fork);return(0,n.includes)((0,n.toLower)(null==e?void 0:e.name),(0,n.toLower)(this.searchQuery))||t&&(0,n.includes)((0,n.toLower)(null==e?void 0:e.fork.label),(0,n.toLower)(this.searchQuery))})):e}handleAction(e,t){var o;return w(this,void 0,void 0,(function*(){if(!this.isOffline){if("delete"===e&&this.permission.canRemove&&this.setFlowDeleteModal(t),"move"===e&&(0,u.moveFlow)(t.id,null===(o=t.attributes)||void 0===o?void 0:o.name,{origin:"sidebar"}),"duplicate"===e){(yield this.list.duplicate([t.id])).map((e=>(0,p.openFlowInWorkbench)(e,{rename:!0})))}return"fork"===e?(0,f.checkUserSignInForFork)(t.id)&&a.default.transitionTo("build.fork",{model:"flow",id:t.id},{origin:"sidebar"}):"open-in-new-browser-tab"===e?(0,c.openInNewBrowserTab)("build.flow",{fid:t.id}):void 0}}))}reSync(){this.list.reSync()}dispose(){this.list.dispose()}}h([s.observable],b.prototype,"searchQuery",void 0),h([s.observable],b.prototype,"flowDeleteModal",void 0),h([s.computed],b.prototype,"status",null),h([s.computed],b.prototype,"isOffline",null),h([s.computed],b.prototype,"isLoading",null),h([s.computed],b.prototype,"permission",null),h([s.action],b.prototype,"setSearchQuery",null),h([s.action],b.prototype,"setFlowDeleteModal",null),h([s.computed],b.prototype,"items",null)},"./flow-runner/components/sidebar/FlowSidebarView.tsx":function(e,t,o){o.r(t);var n=o("../../node_modules/react/index.js"),s=o("./node_modules/lodash/lodash.js"),r=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),a=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/InternalServerError.js"),i=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoPermission.js"),l=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/CreateFlow.js"),c=o("./js/containers/apps/requester/sidebar/SidebarListActions.js"),d=o("./appsdk/sidebar/SidebarEmptyState/SidebarEmptyState.js"),u=o("./appsdk/sidebar/SidebarLoadingState/SidebarLoadingState.js"),m=o("./flow-runner/components/sidebar/FlowSidebarContainer/FlowSidebarContainer.tsx"),p=o("./flow-runner/components/sidebar/FlowSidebarCommingSoon.tsx"),f=o("./flow-runner/api/FlowInterface.ts"),h=o("./flow-runner/components/_base/FlowsDeleteModal.tsx"),w=o("./flow-runner/api/ReactiveListStorage.ts"),b=o("./flow-runner/featureFlags.ts"),v=function(e,t,o,n){var s,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,o,a):s(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},y=function(e,t,o,n){return new(o||(o=Promise))((function(s,r){function a(e){try{l(n.next(e))}catch(e){r(e)}}function i(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,i)}l((n=n.apply(e,t||[])).next())}))};let g=class extends n.Component{constructor(e){super(e),this.state={isCreatingNewFlow:!1},this.getOnCreateToolTip=this.getOnCreateToolTip.bind(this),this.handleNewFlowClick=this.handleNewFlowClick.bind(this)}getOnCreateToolTip(e){return!e||e.isLoading?"Loading...":e.isOffline?"You can take this action once you are back online.":e.permission.canAdd?this.state.isCreatingNewFlow?"Please wait while we create your new flow":"Create a new flow":"You don't have permission to take this action."}getView(){const{model:e}=this.props.controller;return e&&e.status!==w.SyncState.ERROR?e.status===w.SyncState.SYNCING?n.createElement(u.default,{hasIcon:!0}):e.permission.canList?(0,s.isEmpty)(e.items)&&(0,s.isEmpty)(e.searchQuery)?n.createElement(d.default,{illustration:n.createElement(l.default,null),title:"Create your first Flow",message:"Flows help you create API applications by connecting series of requests on an infinite canvas.",action:{label:"Create Flow",handler:()=>(0,f.createNewFlow)("from:empty-state")},hasPermissions:!e.isOffline&&e.permission.canAdd}):n.createElement(m.default,{model:e}):n.createElement(d.default,{illustration:n.createElement(i.default,null),title:"Cannot show flows",message:"You don't have permission to view flows in this workspace."}):n.createElement(d.default,{illustration:n.createElement(a.default,null),title:"Could not load flows",message:"There was an error in our servers while loading your flows.",action:{label:"Try again",handler:()=>null==e?void 0:e.reSync()}})}handleNewFlowClick(){return y(this,void 0,void 0,(function*(){this.setState({isCreatingNewFlow:!0}),yield(0,f.createNewFlow)("from:plus-button"),this.setState({isCreatingNewFlow:!1})}))}render(){const{model:e}=this.props.controller;return(0,b.isFlowsEnabled)()?n.createElement(n.Fragment,null,n.createElement(c.default,{createNewConfig:{tooltip:this.getOnCreateToolTip(e),onCreate:this.handleNewFlowClick,disabled:!e||e.isOffline||e.isLoading||!e.permission.canAdd||this.state.isCreatingNewFlow},onSearch:t=>null==e?void 0:e.setSearchQuery(t),searchQuery:null==e?void 0:e.searchQuery}),this.getView(),e&&n.createElement(h.default,{id:e.flowDeleteModal.id,forkLabel:e.flowDeleteModal.forkLabel,baseModelUid:e.flowDeleteModal.baseModelUid,isVisible:e.flowDeleteModal.isVisible,onDelete:e.flowDeleteModal.onDelete,onClose:e.flowDeleteModal.onClose,flowName:e.flowDeleteModal.flowName})):n.createElement(p.default,null)}};g=v([r.observer],g),t.default=g},"./flow-runner/featureFlags.ts":function(e,t,o){o.r(t),o.d(t,{isCloudExecutionEnabled:function(){return l},isFlowsEnabled:function(){return i}});var n=o("./onboarding/src/common/LaunchDarkly.js"),s=o("./collaboration/workspace/controller/ActiveWorkspaceController.ts"),r=o("./collaboration/workspace/types/WorkspaceTypes.ts");const a={FLOWS_ROLLOUT:{key:"flow-866-flow-controlled-rollout",defaultValue:!1},CLOUD_EXECUTION:{key:"flow-880-cloud-execution",defaultValue:!1}},i=()=>{const{FLOWS_ROLLOUT:e}=a,{visibilityStatus:t}=s.default.get();return t===r.VISIBILITY_STATUS.public||n.launchDarkly.getFlag(e.key,e.defaultValue)},l=()=>{const{CLOUD_EXECUTION:e}=a;return n.launchDarkly.getFlag(e.key,e.defaultValue)}},"./flow-runner/service/ClientEvents.ts":function(e,t,o){o.r(t),o.d(t,{record:function(){return s}});var n=o("./js/modules/services/AnalyticsService.js");function s(e,t,o,s,r,a=1,i={}){n.default.addEventV2({category:e,action:t,label:r,value:a,entityType:o,entityId:s,meta:i})}},"./flow-runner/service/UserSignInService.ts":function(e,t,o){o.r(t),o.d(t,{checkUserSignInForFork:function(){return a},getWorkspacePath:function(){return r},isCurrentUserPartner:function(){return i}});var n=o("./js/stores/CurrentUserStore.js"),s=o("./js/stores/StoreManager.js");const r=()=>{const e=window.location.pathname.split("/");let t="";for(let o=1;o<e.length;o++){if("workspace"===e[o-1]){t+=`/${e[o]}`;break}t+=`/${e[o]}`}return t},a=e=>!!(0,s.resolveStoreInstance)(n.default).isLoggedIn||(pm.mediator.trigger("showSignInModal",{type:"fork",origin:"fork-create",title:"Sign in to create a fork",subtitle:"You need to be logged in to fork a flow. Go ahead and create an account. It's free!",continueUrl:`${window.location.origin}${r()}/flow/${e}/fork`}),!1),i=()=>(0,s.resolveStoreInstance)(n.default).isCurrentUserPartner}}]);