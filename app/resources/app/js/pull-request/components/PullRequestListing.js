"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[144],{"../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoPullRequest.js":function(e,t,l){l.r(t),l.d(t,{default:function(){return o}});var n=l("../../node_modules/react/index.js"),s=l("../../node_modules/@postman/aether/esmLib/src/components/Illustration/Illustration.js");function o(){return n.createElement(s.default,{name:"illustration-no-pull-request"})}},"./version-control/pull-request/hooks/usePullRequestMergeSettingsViewPermission.js":function(e,t,l){l.r(t),l.d(t,{default:function(){return a}});var n=l("../../node_modules/react/index.js"),s=l("./version-control/pull-request/services/PullRequestService.js"),o=l("./js/stores/CurrentUserStore.js"),r=l("./js/stores/StoreManager.js");function a(e,t){const[l,a]=(0,n.useState)(!1),[i,u]=(0,n.useState)(),[c,d]=(0,n.useState)(),m=(0,n.useRef)(),p=(0,r.resolveStoreInstance)(o.default).id;return(0,n.useEffect)((()=>(m.current=!0,(async()=>{try{m.current&&a(!0);const l=await(0,s.checkPullRequestMergeSettingViewPermission)({model:e,modelId:t,userId:p});m.current&&u(l)}catch(e){m.current&&d(e.error||e)}finally{m.current&&a(!1)}})(),()=>{m.current=!1})),[]),{isLoading:l,permission:i,error:c}}},"./version-control/pull-request/components/PullRequestListing/emptyState.tsx":function(e,t,l){l.r(t),l.d(t,{default:function(){return r}});var n=l("../../node_modules/react/index.js"),s=l("../../node_modules/@postman/aether/esmLib/src/components/BlankState/BlankState.js"),o=l("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js");function r(e){return n.createElement(s.default,{title:e.title,description:e.message,secondaryAction:e.handleRetry&&n.createElement(o.default,{text:"Retry",type:"outline",onClick:e.handleRetry})},e.illustration)}},"./version-control/pull-request/components/PullRequestListing/index.tsx":function(e,t,l){l.r(t),l.d(t,{EmptyState:function(){return i.default},default:function(){return c},usePullRequests:function(){return u.default}});var n=l("../../node_modules/react/index.js"),s=l("./version-control/diff/constants.ts"),o=l("./version-control/pull-request/components/PullRequestListing/modelPullRequests.tsx"),r=l("./version-control/pull-request/components/PullRequestListing/modelPullRequestsV2.tsx"),a=l("./onboarding/src/common/LaunchDarkly.js"),i=l("./version-control/pull-request/components/PullRequestListing/emptyState.tsx"),u=l("./version-control/pull-request/components/PullRequestListing/usePullRequests.ts");function c(e){return a.launchDarkly.getFlag(s.ENABLE_PULL_REQUESTS_LIST_V2.key,s.ENABLE_PULL_REQUESTS_LIST_V2.defaultValue)?n.createElement(r.default,Object.assign({},e)):n.createElement(o.default,Object.assign({},e))}},"./version-control/pull-request/components/PullRequestListing/modelPullRequests.tsx":function(e,t,l){l.r(t),l.d(t,{default:function(){return k}});var n=l("../../node_modules/react/index.js"),s=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=l("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/CheckInternetConnection.js"),r=l("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),a=l("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),i=l("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/InternalServerError.js"),u=l("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoPullRequest.js"),c=l("./node_modules/lodash/lodash.js"),d=l.n(c),m=l("./js/components/base/LoadingIndicator.js"),p=l("./appsdk/contextbar/ContextBarViewHeader.js"),f=l("./version-control/pull-request/hooks/usePullRequestMergeSettingsViewPermission.js"),g=l("./js/services/NavigationService.js"),h=l("./version-control/pull-request/components/PullRequestListing/emptyState.tsx"),v=l("./version-control/pull-request/components/PullRequestListing/usePullRequests.ts"),q=l("./version-control/hooks/useConnectionStatus.ts"),y=l("./version-control/pull-request/components/PullRequestListing/pullRequesFilter.tsx"),E=l("./version-control/pull-request/components/PullRequestListing/pullRequestList.tsx"),b=l("./version-control/pull-request/config/index.ts");const x=s.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .pullRequest-content-container {
    padding-left: ${({theme:e})=>e["spacing-s"]};
    padding-right: ${({theme:e})=>e["spacing-xxl"]};
    padding-bottom: ${({theme:e})=>e["spacing-m"]};
    flex: auto;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  .pullRequest-list-container {
    flex: auto;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
`;function k(e){const[t,l]=(0,n.useState)({open:!0,approved:!0,merged:!0,declined:!0}),s=(0,q.default)(),{pullRequests:c,error:k,isLoading:j,filteredPullRequests:R}=(0,v.default)({model:e.contextData.model,modelId:e.contextData.uid,filters:t,retryOnConnection:!0}),w=!(null==c?void 0:c.length),_=!(null==R?void 0:R.length),{permission:L}=(0,f.default)(e.contextData.model,e.contextData.uid),P=d().get(b.default,`${e.contextData.model}.displayName`,"");return s||c?n.createElement(x,null,n.createElement(p.ContextBarViewHeader,{title:"Pull requests",onClose:e.onClose},n.createElement("div",{className:"pull-request-container__actions-filter"},L&&n.createElement(r.default,{type:"tertiary",icon:"icon-descriptive-setting-stroke",onClick:()=>{g.default.transitionTo("build.roles.manage",{},{collection:e.contextData.uid})},tooltip:"View merge settings"}),n.createElement(y.default,{filters:t,onChange:l,disabled:w}))),n.createElement("div",{className:"pullRequest-content-container"},n.createElement(a.default,{type:"body-medium",color:"content-color-secondary"},"Keep track of all pull requests for this ",P,"."),n.createElement("div",{className:"pullRequest-list-container"},n.createElement(n.Fragment,null,j&&n.createElement("div",{className:"collection-info-cb__pull-requests-loading"},n.createElement(m.default,null)),k&&!j&&n.createElement(h.default,{illustration:n.createElement(i.default,null),title:"Unable to load pull requests",message:"Please try refetching pull requests."}),!k&&!j&&w&&n.createElement(h.default,{illustration:n.createElement(u.default,null),title:"No pull requests right now",message:`View and keep track of all the pull requests on this ${P}.`}),!k&&!j&&!w&&_&&n.createElement(h.default,{illustration:n.createElement(u.default,null),title:"No pull requests found",message:"Change filters and try again."}),!k&&!w&&R&&n.createElement(E.default,{pullRequests:R}))))):n.createElement(x,null,n.createElement(p.ContextBarViewHeader,{title:"Pull requests",onClose:e.onClose}),n.createElement(n.Fragment,null,n.createElement(h.default,{illustration:n.createElement(o.default,null),title:"Check your connection",message:"Get online to view your list of Pull Requests"})))}},"./version-control/pull-request/components/PullRequestListing/modelPullRequestsV2.tsx":function(e,t,l){l.r(t),l.d(t,{default:function(){return _}});var n=l("../../node_modules/react/index.js"),s=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=l("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/CheckInternetConnection.js"),r=l("../../node_modules/@postman/aether/esmLib/src/components/Spinner/Spinner.js"),a=l("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/InternalServerError.js"),i=l("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoPullRequest.js"),u=l("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),c=l("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),d=l("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),m=l("./node_modules/lodash/lodash.js"),p=l("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-openWeb-stroke.js"),f=l("./js/stores/ActiveWorkspaceStore.js"),g=l("./js/stores/StoreManager.js"),h=l("./appsdk/components/link/Link.js"),v=l("./appsdk/contextbar/ContextBarViewHeader.js"),q=l("./version-control/pull-request/hooks/usePullRequestMergeSettingsViewPermission.js"),y=l("./js/services/NavigationService.js"),E=l("./version-control/pull-request/components/PullRequestListing/emptyState.tsx"),b=l("./version-control/pull-request/components/PullRequestListing/usePullRequestsV2.ts"),x=l("./version-control/hooks/useConnectionStatus.ts"),k=l("./version-control/pull-request/components/PullRequestListing/pullRequestListV2.tsx"),j=l("./version-control/pull-request/config/index.ts"),R=l("./version-control/pull-request/components/PullRequestListing/useForkInfo.tsx");const w=s.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .pullRequest-content-container {
    padding-left: ${({theme:e})=>e["spacing-s"]};
    padding-right: ${({theme:e})=>e["spacing-s"]};
    padding-bottom: ${({theme:e})=>e["spacing-m"]};
    flex: auto;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  .pullRequest-list-container {
    container-type: inline-size;
    flex: auto;
    display: flex;
    flex-direction: column;

    .pullRequest-lists-divider {
      margin-top: ${({theme:e})=>e["spacing-l"]};
      margin-bottom: ${({theme:e})=>e["spacing-l"]};
      border-bottom: ${({theme:e})=>`${e["border-width-default"]} solid ${e["highlight-background-color-primary"]};`};
    }
  }
`;function _(e){const[t,l]=(0,n.useState)({open:!0,approved:!0,merged:!0,declined:!0}),s=(0,x.default)(),{pullRequests:_,error:L,isLoading:P,filteredPullRequests:I,fetch:C}=(0,b.default)({model:e.contextData.model,modelId:e.contextData.uid,destinationId:e.contextData.uid,filters:t,retryOnConnection:!0}),{pullRequests:S,error:$,isLoading:N,filteredPullRequests:B,fetch:T}=(0,b.default)({model:e.contextData.model,modelId:e.contextData.uid,sourceId:e.contextData.uid,filters:{open:!0,approved:!0,merged:!1,declined:!1},retryOnConnection:!0}),F=y.default.getActiveQueryParams().get().filters;if(F){const e={open:!1,approved:!1,merged:!1,declined:!1};null==F||F.split(",").forEach((t=>{e[t]=!0})),(0,m.isEqual)(e,t)||l(e)}const{forkInfo:D}=(0,R.default)({model:e.contextData.model,modelId:e.contextData.uid}),{permission:V}=(0,q.default)(e.contextData.model,e.contextData.uid),U=()=>{y.default.transitionTo("build.pullRequestCreate",{},{source:e.contextData.uid,destination:null==D?void 0:D.baseModelUid,entityType:e.contextData.model,workspace:(0,g.resolveStoreInstance)(f.default).id,origin:"pull_request_list_empty_state"})},A=()=>{C(),T()},M=(0,m.get)(j.default,`${e.contextData.model}.displayName`,""),O=!(null==_?void 0:_.length)&&!(null==S?void 0:S.length),z=L||$,H=N||P,W=Object.keys(t).filter((e=>!1===t[e])).length>0;if(!s&&O)return n.createElement(w,null,n.createElement(v.ContextBarViewHeader,{title:"Pull requests",onClose:e.onClose}),n.createElement(n.Fragment,null,n.createElement(E.default,{illustration:n.createElement(o.default,null),title:"Check your connection",message:"Get online to view your list of Pull Requests"})));if(H)return n.createElement(w,null,n.createElement(v.ContextBarViewHeader,{title:"Pull requests",onClose:e.onClose}),n.createElement("div",{className:"collection-info-cb__pull-requests-loading"},n.createElement(r.default,null)));if(z)return n.createElement(w,null,n.createElement(v.ContextBarViewHeader,{title:"Pull requests",onClose:e.onClose}),n.createElement(E.default,{illustration:n.createElement(a.default,null),title:"Unable to load pull requests",message:"Please try refetching pull requests.",handleRetry:A}));if(O)return n.createElement(w,null,n.createElement(v.ContextBarViewHeader,{title:"Pull requests",onClose:e.onClose}),n.createElement(E.default,{illustration:n.createElement(i.default,null),title:"There are no pull requests",message:n.createElement(u.default,{direction:"column",gap:"spacing-l",alignItems:"center"},n.createElement(c.default,null,"Once a pull request is created for this"," ",(null==D?void 0:D.forkId)?"forked":""," ",M,", you will be able to manage it from here. Learn more about"," ",n.createElement(h.default,{to:"https://learning.postman.com/docs/collaborating-in-postman/version-control/#creating-pull-requests",target:"_blank"},n.createElement(u.default,{inline:!0,alignItems:"center"},n.createElement(c.default,{type:"link-default"},"pull requests"),n.createElement(p.default,null)))),(null==D?void 0:D.forkId)&&n.createElement(d.default,{"data-testid":"create-pull-request-btn",type:"primary",text:"Create Pull Request",onClick:U}))}));const G=0!==_.length;return n.createElement(w,null,n.createElement(v.ContextBarViewHeader,{title:"Pull requests",onClose:e.onClose},n.createElement("div",{className:"pull-request-container__actions-filter"},V&&n.createElement(d.default,{type:"tertiary",icon:"icon-descriptive-setting-stroke",onClick:()=>{y.default.transitionTo("build.roles.manage",{},{collection:e.contextData.uid})},tooltip:"View merge settings"}))),n.createElement("div",{className:"pullRequest-content-container"},n.createElement(c.default,{type:"body-medium",color:"content-color-secondary"},`Manage all pull requests related to this ${(null==D?void 0:D.forkId)?"forked":""} ${M}.`),n.createElement("div",{className:"pullRequest-list-container"},n.createElement(u.default,{direction:"column",padding:{paddingTop:"spacing-l"}},(null==D?void 0:D.forkId)&&n.createElement(k.default,{isEmpty:O,pullRequests:B,isForked:!0,headingText:"Sent for review",testid:"sent-for-review",emptyState:n.createElement(u.default,{direction:"column",gap:"spacing-s",alignItems:"start",padding:{paddingTop:"spacing-xs"}},n.createElement(c.default,{color:"content-color-secondary"},"Currently, there is no open pull request created from this forked ",M,"."," ",S.length>0&&n.createElement("span",{"data-testid":"view-closed-pull-requests"},n.createElement(h.default,{to:`${pm.artemisUrl}/${e.contextData.model}/${D.baseModelUid}?ctx=pull-requests&filters=merged,declined`},n.createElement(c.default,{type:"link-default"},"View closed pull requests")))),n.createElement(d.default,{type:"outline","data-testid":"create-pull-request-btn",onClick:U,text:"Create Pull Request"}))}),(null==D?void 0:D.forkId)&&n.createElement("div",{className:"pullRequest-lists-divider"}),n.createElement(k.default,{filters:t,showFilterMenu:G,setFilters:l,isEmpty:O,pullRequests:I,headingText:"Received for review",testid:"received-for-review",emptyState:n.createElement(E.default,{illustration:n.createElement(i.default,null),title:W?"No results from these filters":"No pull requests to review",message:W?n.createElement(u.default,{gap:"spacing-m",direction:"column",alignItems:"center"},n.createElement(c.default,null,"There are no pull requests to display for the selected filters. Adjust or reset your filter settings."),n.createElement(d.default,{onClick:()=>{l({open:!0,approved:!0,declined:!0,merged:!0})},text:"Reset Filters",type:"outline"})):`If a pull request is requested for review to this ${(null==D?void 0:D.forkId)?"forked":""} ${M}, you will be able to manage it from here.`})})))))}},"./version-control/pull-request/components/PullRequestListing/pullRequesFilter.tsx":function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l("../../node_modules/react/index.js"),s=l("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),o=l("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),r=l("../../node_modules/@postman/aether/esmLib/src/components/CheckBox/Checkbox.js"),a=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=l("./js/components/base/Tooltips.js");const u=a.createGlobalStyle`
  .pullRequest-status-filter__option {
    margin-top: ${({theme:e})=>e["spacing-m"]};
  }

  .pullRequest-status-filer-popover .tooltip-wrapper {
    padding: ${({theme:e})=>e["spacing-m"]};
    background-color: ${({theme:e})=>e["background-color-primary"]};
  }
`,c=[{label:"Open requests",value:"open"},{label:"Approved requests",value:"approved"},{label:"Merged requests",value:"merged"},{label:"Declined requests",value:"declined"}];function d(e){const[t,l]=(0,n.useState)(!1),[a,d]=(0,n.useState)(),{filters:m,onChange:p,disabled:f}=e,g=Object.keys(m).filter((e=>!1===m[e])).length>0;return n.createElement(n.Fragment,null,n.createElement(u,null),n.createElement(s.default,{type:"tertiary",icon:"icon-action-filter-stroke",onClick:()=>{l(!t)},ref:d,isDisabled:f,showIndicator:g,tooltip:"Filter pull requests"}),a&&n.createElement(i.Tooltip,{show:t,target:a,onClose:()=>l(!1),closeOnClickOutside:!0,immediate:!0,hideArrow:!0,placement:"bottom-right",className:"pullRequest-status-filer-popover"},n.createElement(i.TooltipBody,null,n.createElement(o.default,{type:"primary",size:"medium",text:"Show"}),n.createElement("div",null,c.map((e=>n.createElement(r.default,{className:"pullRequest-status-filter__option",key:e.value,label:e.label,isChecked:m[e.value],onChange:()=>(e=>{"function"==typeof p&&p(Object.assign(Object.assign({},m),{[e.value]:!m[e.value]}))})(e)})))))))}},"./version-control/pull-request/components/PullRequestListing/pullRequestList.tsx":function(e,t,l){l.r(t);var n=l("./node_modules/moment/moment.js"),s=l.n(n),o=l("../../node_modules/react/index.js"),r=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=l("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),i=l("../../node_modules/@postman/aether/esmLib/src/components/Badge/Badge.js"),u=l("./node_modules/lodash/lodash.js"),c=l.n(u),d=l("./js/stores/ActiveWorkspaceStore.js"),m=l("./js/stores/StoreManager.js"),p=l("./appsdk/components/link/Link.js"),f=l("./js/components/base/Avatar.js"),g=l("./version-control/common/index.js");const h={open:"neutral",approved:"warning",merged:"success",declined:"critical"},v=r.default.li`
  all: unset;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: ${({theme:e})=>e["spacing-m"]};

  .title-group {
    width: 50%;
    display: inline-flex;
    flex-direction: column;
    color: ${({theme:e})=>e["content-color-primary"]};
  }

  .avatar-container {
    width: 25%;
    display: flex;
    justify-content: center;
  }

  .status-container {
    width: 25%;
    display: flex;
    justify-content: flex-end;
  }

  .pullRequest-list-item__title {
    font-size: ${({theme:e})=>e["text-size-m"]};
    line-height: ${({theme:e})=>e["line-height-m"]};
    /** link type text sets max-content width which results in no wrapping */
    width: unset;
    display: inline-block;
  }
`;function q({pullRequest:e}){return o.createElement(v,null,o.createElement("div",{className:"title-group"},o.createElement("div",{className:"title"},o.createElement(p.default,{to:{routeIdentifier:"build.pullRequestView",routeParams:{id:e.id},queryParams:{workspace:(0,m.resolveStoreInstance)(d.default).id}}},o.createElement(a.default,{type:"link-subtle",className:"pullRequest-list-item__title"},e.title))),o.createElement(a.default,{type:"body-small",color:"content-color-tertiary"},"Last updated: ",s()(e.updatedAt).fromNow())),o.createElement("div",{className:"avatar-container"},o.createElement(g.CustomTooltip,{align:"bottom",body:c().get(e,"createdBy.name")},o.createElement(f.default,{className:"pr-author-avatar",size:"medium",userId:c().get(e,"createdBy.id",0),customPic:c().get(e,"createdBy.profilePicUrl")}))),o.createElement("div",{className:"status-container"},o.createElement(i.default,{text:e.status,status:h[e.status]})))}const y=r.default.ul`
  all: unset;
`;t.default=function(e){const{pullRequests:t}=e;return o.createElement(y,null,t.map((e=>o.createElement(q,{key:e.id,pullRequest:e}))))}},"./version-control/pull-request/components/PullRequestListing/pullRequestListV2.tsx":function(e,t,l){l.r(t);var n=l("./node_modules/moment/moment.js"),s=l.n(n),o=l("../../node_modules/react/index.js"),r=l("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=l("../../node_modules/@postman/aether/esmLib/src/components/Popover/Popover.js"),i=l("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),u=l("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),c=l("../../node_modules/@postman/aether/esmLib/src/components/Avatar/Avatar.js"),d=l("../../node_modules/@postman/aether/esmLib/src/components/Badge/Badge.js"),m=l("../../node_modules/@postman/aether/esmLib/src/components/Tooltip/Tooltip.js"),p=l("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),f=l("./node_modules/lodash/lodash.js"),g=l("./js/stores/ActiveWorkspaceStore.js"),h=l("./js/stores/StoreManager.js"),v=l("./js/stores/CurrentUserStore.js"),q=l("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-collection-stroke.js"),y=l("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-environment-stroke.js"),E=l("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-descriptive-user-stroke.js"),b=l("./js/utils/PluralizeHelper.js"),x=l("./version-control/common/ForkLabel.js"),k=l("./appsdk/components/link/Link.js"),j=l("./version-control/pull-request/components/PullRequestListing/pullRequesFilter.tsx"),R=l("./version-control/pull-request/components/PullRequestListing/useForkInfo.tsx");const w={open:"neutral",approved:"warning",merged:"success",declined:"critical"},_={collection:o.createElement(q.default,null),environment:o.createElement(y.default,null)},L=(0,r.default)(k.default)`
  width: calc(100% - 80px);
`,P=(0,r.default)(a.default)`
  background-color: ${({theme:e})=>e["background-color-primary"]};
  box-shadow: ${({theme:e})=>e["shadow-default"]};
  border: none;
  min-width: 200px;
  max-height: 216px;
  overflow: auto;
  border-radius: ${({theme:e})=>e["border-radius-default"]};

  .reviewer-item {
    padding: ${({theme:e})=>e["spacing-s"]}
      ${({theme:e})=>e["spacing-m"]};

    .anonymous-reviewers {
      cursor: pointer;
      .anonymous-reviewer-icon {
        width: ${({theme:e})=>e["size-s"]};
        height: ${({theme:e})=>e["size-s"]};
        border-radius: ${({theme:e})=>e["border-radius-max"]};
        background-color: ${({theme:e})=>e["background-color-secondary"]};
      }
    }
  }
`,I=r.default.li`
  all: unset;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${({theme:e})=>e["spacing-m"]};
  padding-bottom: ${({theme:e,isForked:t})=>t?"none":e["spacing-m"]};
  border-bottom: ${({theme:e,isForked:t})=>t?"none":`${e["border-width-default"]} solid ${e["highlight-background-color-primary"]}`};

  .pr-author-avatar {
    margin-top: 2px;
    margin-right: ${({theme:e})=>e["spacing-s"]};
  }

  .title-group {
    width: 100%;
    display: inline;
    color: ${({theme:e})=>e["content-color-primary"]};
    margin-right: ${({theme:e})=>e["spacing-m"]};

    .title {
      width: 100%;
      word-break: break-word;
    }
  }

  .pullRequest-list-item__info {
    width: calc(100% - ${({theme:e})=>e["spacing-xxl"]});
    margin-top: ${({theme:e})=>e["spacing-xs"]};
    margin-left: ${({theme:e})=>e["spacing-xxl"]};

    .reviewers-number {
      cursor: pointer;
    }

    .seperator {
      width: 2px;
      height: 2px;
      min-width: 2px;
      min-height: 2px;
      background-color: ${({theme:e})=>e["content-color-tertiary"]};
      border-radius: 100%;
    }
  }

  .pullRequest-list-item__title {
    font-size: ${({theme:e})=>e["text-size-m"]};
    line-height: ${({theme:e})=>e["line-height-m"]};
    /** link type text sets max-content width which results in no wrapping */
    width: unset;
    display: inline-block;
  }

  .pullRequest-list-item__badge {
    margin-top: 2px;
  }
`,C=({pullRequest:e})=>{const{forkInfo:t}=(0,R.default)({modelId:e.toId,model:e.entity}),l={id:e.toId,forkLabel:null==t?void 0:t.forkLabel,model:e.entity},n={id:null==t?void 0:t.baseModelUid,model:e.entity};return o.createElement(i.default,{alignItems:"center",gap:"spacing-xs",padding:{paddingTop:"spacing-s"},width:"100%"},o.createElement(u.default,{color:"content-color-info",typographyStyle:{fontWeight:"text-weight-medium"}},"Destination:"),o.createElement(L,{to:`${pm.artemisUrl}/${e.entity}/${e.toId}`},o.createElement(i.default,{alignItems:"center",gap:"spacing-xs",width:"100%"},_[e.entity],o.createElement(u.default,{isTruncated:!0},null==t?void 0:t.name),o.createElement(x.default,{forkedEntity:l,baseEntity:n,label:null==t?void 0:t.forkLabel}))))};function S({pullRequest:e,isForked:t}){var l,n,r,a,p;const q=(null===(l=e.reviewers)||void 0===l?void 0:l.filter((e=>e.publicProfileUrl)))||[],y=(null===(n=e.reviewers)||void 0===n?void 0:n.filter((e=>!e.publicProfileUrl)))||[],x=(0,h.resolveStoreInstance)(v.default);return o.createElement(o.Fragment,null,e.entity&&t&&o.createElement(C,{pullRequest:e}),o.createElement(I,{isForked:t},o.createElement(i.default,{alignItems:"start",justifyContent:"space-between"},o.createElement(c.default,{tooltip:(0,f.get)(e,"createdBy.name"),className:"pr-author-avatar",size:"s",userId:(0,f.get)(e,"createdBy.id",0),src:(0,f.get)(e,"createdBy.profilePicUrl")}),o.createElement("div",{className:"title-group"},o.createElement(k.default,{to:{routeIdentifier:"build.pullRequestView",routeParams:{id:e.id},queryParams:{workspace:(0,h.resolveStoreInstance)(g.default).id,origin:"pull_request_from_fork"}},className:"title"},o.createElement(u.default,{type:"link-subtle",className:"pullRequest-list-item__title"},e.title))),o.createElement("div",{className:"status-container"},o.createElement(d.default,{className:"pullRequest-list-item__badge",text:e.status,status:w[e.status]}))),o.createElement(i.default,{className:"pullRequest-list-item__info",wrap:"wrap",alignItems:"center",gap:"spacing-xs"},o.createElement(u.default,{type:"body-small",color:"content-color-secondary",className:"reviewers-number"},0===(null===(r=e.reviewers)||void 0===r?void 0:r.length)?o.createElement(m.default,{placement:"bottom",content:"No reviewers have been assigned to this pull request."},o.createElement("span",null,"No reviewers")):o.createElement(P,{placement:"bottom",triggerEvent:"mouseenter",trigger:o.createElement("span",null,null===(a=e.reviewers)||void 0===a?void 0:a.length," ",b.default.pluralize({count:null===(p=e.reviewers)||void 0===p?void 0:p.length,singular:"reviewer",plural:"reviewers"}))},o.createElement(i.default,{className:"reviewer-item",direction:"column",alignItems:"start",gap:"spacing-m"},q.map((e=>o.createElement(k.default,{to:e.username&&`${pm.dashboardUrl}/users/${e.id}`},o.createElement(i.default,{paddingTop:"spacing-xs",paddingBottom:"spacing-xs",gap:"spacing-s",alignItems:"center",justifyContent:"start"},o.createElement(c.default,{size:"s",userId:e.id,src:e.profilePicUrl}),o.createElement(u.default,{color:"content-color-primary",type:"link-subtle"},e.name," ",x.id===e.id?"You":""))))),y.length>0&&o.createElement(i.default,{paddingTop:"spacing-xs",paddingBottom:"spacing-xs",className:"anonymous-reviewers",alignItems:"center",gap:"spacing-s"},o.createElement(i.default,{className:"anonymous-reviewer-icon",alignItems:"center",justifyContent:"center"},o.createElement(E.default,null)),o.createElement(m.default,{placement:"bottom",content:"Reviewers with accounts set to private are kept anonymous."},o.createElement("div",null,y.length," anonymous"," ",b.default.pluralize({count:y.length,singular:"reviewer",plural:"reviewers"}))))))),o.createElement("div",{className:"seperator"}),o.createElement(u.default,{type:"body-small",color:"content-color-secondary"},"Last updated ",s()(e.updatedAt).fromNow()))))}const $=r.default.ul`
  all: unset;
`;t.default=function(e){const{pullRequests:t,emptyState:l,filters:n,setFilters:s,isEmpty:r,isForked:a,showFilterMenu:u}=e,c=!(null==t?void 0:t.length);return o.createElement("div",{className:"pullRequest-list"},o.createElement(i.default,{alignItems:"center",justifyContent:"space-between"},o.createElement(p.default,{type:"h4","data-testid":e.testid,text:e.headingText,color:"content-color-primary"}),n&&u&&o.createElement(j.default,{filters:n,onChange:s,disabled:r})),c&&l,!c&&o.createElement($,null,t.map((e=>o.createElement(S,{isForked:a,key:e.id,pullRequest:e})))))}},"./version-control/pull-request/components/PullRequestListing/useForkInfo.tsx":function(e,t,l){l.r(t);var n=l("../../packages/version-control/change-management/index.ts"),s=l("../../node_modules/react/index.js");t.default=function(e){const[t,l]=(0,s.useState)(),[o,r]=(0,s.useState)(!0),[a,i]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{n.ForkConsumerService.getModel(e.model,e.modelId,!0).then((e=>{var t,n,s;l({baseModelUid:null===(t=e.forkDetails)||void 0===t?void 0:t.parent.id,name:e.name,forkLabel:null===(n=e.forkDetails)||void 0===n?void 0:n.label,forkId:null===(s=e.forkDetails)||void 0===s?void 0:s.id})})).catch((e=>i(e))).finally((()=>r(!1)))}),[]),{forkInfo:t,isLoading:o,error:a}}},"./version-control/pull-request/components/PullRequestListing/usePullRequests.ts":function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var n=l("../../node_modules/react/index.js"),s=l("./node_modules/lodash/lodash.js"),o=l.n(s),r=l("./version-control/pull-request/services/PullRequestService.js"),a=l("./version-control/hooks/useConnectionStatus.ts");function i(e){const[t,l]=(0,n.useState)(!1),[s,i]=(0,n.useState)(),[u,c]=(0,n.useState)(),d=(0,a.default)();let m;const p=()=>{l(!0),(0,r.fetchPullRequests)(e.model,e.modelId).then((e=>{i(o()(e.pullRequests).sortBy("updatedAt").reverse().value())})).catch((e=>{c(e)})).finally((()=>{l(!1)}))};if((0,n.useEffect)((()=>{d&&p()}),[]),(0,n.useEffect)((()=>{d&&e.retryOnConnection&&!t&&!s&&p()}),[d]),s)if(e.filters){const t=Object.keys(e.filters).filter((t=>e.filters&&e.filters[t]));m=s.filter((e=>t.includes(e.status)))}else m=s;return{pullRequests:s,filteredPullRequests:m,isLoading:t,error:u,fetch:p}}},"./version-control/pull-request/components/PullRequestListing/usePullRequestsV2.ts":function(e,t,l){l.r(t);var n=l("../../node_modules/react/index.js"),s=l("./node_modules/lodash/lodash.js"),o=l.n(s),r=l("./version-control/pull-request/services/PullRequestService.js"),a=l("./version-control/hooks/useConnectionStatus.ts");t.default=function(e){const[t,l]=(0,n.useState)(!1),[s,i]=(0,n.useState)([]),[u,c]=(0,n.useState)(),d=(0,a.default)();let m=[];const p=()=>{l(!0),(0,r.fetchPullRequests)(e.model,e.destinationId,e.sourceId).then((e=>{i(o()(e.pullRequests).sortBy("updatedAt").reverse().value())})).catch((e=>{c(e)})).finally((()=>{l(!1)}))};if((0,n.useEffect)((()=>{d&&p()}),[]),(0,n.useEffect)((()=>{d&&e.retryOnConnection&&!t&&p()}),[d]),s)if(e.filters){const t=Object.keys(e.filters).filter((t=>e.filters&&e.filters[t]));m=s.filter((e=>t.includes(e.status)))}else m=s;return{pullRequests:s,filteredPullRequests:m,isLoading:t,error:u,fetch:p}}}}]);