"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[129],{"./version-control/common/TabEmptyState.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return l}});var n=o("../../node_modules/react/index.js"),r=o("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),a=o("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js");const s=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js").default.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .empty-state__title {
    margin-top: ${({theme:e})=>e["spacing-l"]};
  }

  .empty-state__description {
    margin-top: ${({theme:e})=>e["spacing-xs"]};
    margin-bottom: ${({theme:e})=>e["spacing-l"]};
  }
`;function l(e){return n.createElement(s,{className:e.className},e.illustration,n.createElement(r.default,{type:"h4",text:e.title,hasBottomSpacing:!0,className:"empty-state__title"}),n.createElement(a.default,{type:"body-medium",color:"content-color-secondary",className:"empty-state__description"},e.message),e.showAction&&e.action)}},"./version-control/common/context-bar-items.js":function(e,t,o){o.r(t),o.d(t,{ContextBarContainer:function(){return l},ContextBarDescription:function(){return r},ContextBarEmptyStateContainer:function(){return m},ContextBarListItem:function(){return a},ContextBarLoading:function(){return i},ContextBarSubtext:function(){return s}});var n=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const r=n.default.span`
  font-size: var(--text-size-m);
  color: var(--content-color-secondary);
  font-weight: var(--text-weight-regular);
  margin-left: var(--spacing-s);
  display: flex;
`,a=n.default.span`
  color: var(--content-color-primary);
  font-size: var(--text-size-m);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`,s=n.default.p`
  margin-top: 0;
  margin-bottom: 0;
  color: var(--content-color-tertiary);
  font-size: var(--text-size-s);
`,l=n.default.div`
  margin-left: var(--spacing-s);
  margin-top: var(--spacing-l);
  padding-bottom: var(--spacing-xl);

  div {
    margin-bottom: var(--spacing-s);
  }
`,i=n.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
`,m=n.default.div`
  position: absolute;
  top: 30%;
  left: 15%;
  min-width: 300px;

  p {
    font-size: var(--text-size-m);
    color: var(--content-color-secondary);
    margin: 0;
  }

  .context-bar-empty-state--full-width {
    width: 100%;
  }
`},"./version-control/fork/ForkListBody.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return B}});var n=o("../../node_modules/react/index.js"),r=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),s=o("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),l=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/CheckInternetConnection.js"),i=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoPermission.js"),m=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/InternalServerError.js"),c=o("../../node_modules/@postman/aether/esmLib/src/components/BlankState/BlankState.js"),d=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoFork.js"),u=o("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-openWeb-stroke.js"),f=o("./node_modules/moment-timezone/index.js"),p=o.n(f),g=o("./appsdk/components/link/Link.js"),k=o("./version-control/common/TabLoader.js"),y=o("./version-control/common/index.js"),h=o("./js/components/base/Avatar.js"),b=o("./version-control/common/TabEmptyState.js"),v=o("./version-control/common/context-bar-items.js"),x=o("./js/components/base/Buttons.js"),E=o("./js/utils/PluralizeHelper.js"),j=o("./version-control/common/ItemLink.js"),C=o("./node_modules/lodash/lodash.js");const _=r.default.div`
  display: inline-block;
`,w=r.default.div`
  float: left;
  width: 100%;
`,I=(0,r.default)(y.CustomTooltip)`
  float: right;
  margin-top: var(--spacing-s);
  margin-right: var(--spacing-xxl);
`,S=r.default.div`
  font-size: var(--text-size-m);
  color: var(--content-color-primary);
  font-weight: var(--text-weight-medium);
  margin-bottom: var(--spacing-m);
`;function B(e){const t=n.createElement(a.default,{inline:!0,alignItems:"center"},n.createElement(s.default,{type:"link-default"},n.createElement(g.default,{className:"forks-external-link",to:"https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-entities",target:"_blank"},"forks")),n.createElement(u.default,null)),o=n.createElement(s.default,{type:"para"},"They aren't visible because they're in workspaces you don't have access to. Learn more about ",t),r=n.createElement(s.default,{type:"para"},"All forks created from this ",e.modelName," will appear here. Learn more about ",t),f=n.createElement(x.Button,{type:"primary",size:"small",onClick:e.fetchForks},"Retry"),y=E.default.pluralize({count:C.get(e,"forkInfo.totalForks"),singular:"fork",plural:"forks"});if(e.loading)return n.createElement(k.default,null);if(e.isOffline)return n.createElement(v.ContextBarEmptyStateContainer,null,n.createElement(b.default,{showAction:!0,illustration:n.createElement(l.default,null),title:"Check your connection",message:"Get online to view your list of forks.",action:f}));if(e.error){const t="object"==typeof e.error&&"forbiddenError"===e.error.name;return n.createElement(v.ContextBarEmptyStateContainer,null,n.createElement(b.default,{illustration:t?n.createElement(i.default,null):n.createElement(m.default,null),title:t?"Cannot view forks":"Unable to load list of forks",message:t?`You don't have permission to view the forks of this ${e.modelName}`:C.get(e,"error.error.message")||"Try refetching forks"}))}if(e.isEmpty){const t=Boolean(C.get(e,"forkInfo.hiddenForks"));return n.createElement(v.ContextBarEmptyStateContainer,null,n.createElement(c.default,{className:"context-bar-empty-state--full-width",title:t?`${C.get(e,"forkInfo.totalForks")} ${y} of ${C.get(e,"name")}`:"There are no forks",description:t?o:r},n.createElement(d.default,null)))}return n.createElement(n.Fragment,null,n.createElement(v.ContextBarDescription,null,C.get(e,"forkInfo.totalForks")," ",y," of"," ",C.get(e,"name"),".",C.get(e,"forkInfo.hiddenForks")>0?` ${C.get(e,"forkInfo.hiddenForks")} of those aren't in this list because they're in workspaces you don't have access to.`:""),n.createElement(v.ContextBarContainer,null,n.createElement(S,null,"Recently created:"),(e.forks||[]).map((t=>n.createElement(w,{key:t.modelId},n.createElement(_,null,n.createElement(g.default,{to:t.modelId?`${pm.artemisUrl}/${e.modelName}/${t.modelId}`:"",disabled:!t.modelId},n.createElement(v.ContextBarListItem,null,n.createElement(j.default,{text:t.forkName}))),n.createElement(v.ContextBarSubtext,null,`Created on: ${p()(t.createdAt).format("DD MMM, YYYY")}`)),n.createElement(I,{align:"bottom",body:C.get(t,"createdBy.name")},n.createElement(h.default,{size:"medium",userId:C.get(t,"createdBy.id"),customPic:C.get(t,"createdBy.profilePicUrl")}))))),n.createElement(g.default,{to:{routeIdentifier:"build.forks",routeParams:{model:e.modelName,id:C.get(e,"modelUID")}}},n.createElement(s.default,{type:"link-primary"},C.get(e,"forkInfo.totalForks")>(e.forks||[]).length?"View all forks":"View details"))))}},"./version-control/fork/ForkListing.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return y}});var n=o("../../node_modules/react/index.js"),r=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("./node_modules/querystring-browser/querystring.js"),s=o.n(a),l=o("./js/stores/SyncStatusStore.js"),i=o("./js/stores/StoreManager.js"),m=o("./appsdk/contextbar/ContextBarViewHeader.js"),c=o("./version-control/fork/ForkListBody.js"),d=o("./js/modules/services/RemoteSyncRequestService.js"),u=o("./node_modules/lodash/lodash.js");const f=r.default.div`
  overflow-y: auto;
`,p=12,g="createdAt",k="desc";function y(e){const[t,o]=(0,n.useState)([]),[r,a]=(0,n.useState)({}),[y,h]=(0,n.useState)(!0),[b,v]=(0,n.useState)(!1),[x,E]=(0,n.useState)(null),j=(0,i.resolveStoreInstance)(l.default),C=!(0,i.resolveStoreInstance)(l.default).isSocketConnected,_={populateUsers:!0,pageSize:p,sortBy:g,sortType:k},w=()=>{h(!0),E(null),j.onSyncAvailable({timeout:5e3}).then((()=>d.default.request(`/${e.contextData.model}/${e.contextData.uid}/fork-list?${s().stringify(_)}`))).then((e=>{o(u.get(e,"body.data.forks")),a({publicForks:u.get(e,"body.data.publicForkCount"),privateForks:u.get(e,"body.data.privateForkCount"),hiddenForks:u.get(e,"body.data.hiddenForkCount"),totalForks:u.get(e,"body.data.totalForkCount")}),v(!(u.get(e,"body.data.forks")||[]).length),h(!1)})).catch((e=>{E(e),h(!1),pm.logger.error("Unable to fetch fork list",e)}))};return(0,n.useEffect)((()=>{w()}),[]),n.createElement(f,null,n.createElement(m.ContextBarViewHeader,{title:"Forks",onClose:e.onClose}),n.createElement(c.default,{loading:y,isOffline:C,isEmpty:b,error:x,forks:t,fetchForks:w,forkInfo:r,modelName:e.contextData.model,name:e.contextData.name,modelUID:e.contextData.uid}))}}}]);