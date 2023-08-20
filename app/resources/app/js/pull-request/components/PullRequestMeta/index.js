"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[145],{"./version-control/pull-request/components/PullRequestMeta/index.js":function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var n=s("../../node_modules/react/index.js"),o=s("./node_modules/lodash/lodash.js"),r=s.n(o),a=s("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=s("../../node_modules/@postman/aether/esmLib/src/components/Badge/Badge.js"),c=s("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),i=s("./version-control/common/CopyButton.tsx"),u=s("./version-control/pull-request/components/PullRequestMeta/infoComponents.js"),m=s("./appsdk/contextbar/ContextBarViewHeader.js"),d=s("./version-control/constants.js");const p={merged:"Merged",declined:"Declined"},f=a.default.div`
  /** increasing specificity */
  .pull-request-meta__header.pull-request-meta__header {
    padding-bottom: ${({theme:e})=>e["spacing-l"]};
  }

  .pull-request-id {
    width: 100%;
    background-color: ${({theme:e})=>e["background-color-secondary"]};
    border-radius: ${({theme:e})=>e["border-radius-default"]};
    padding: 6px ${({theme:e})=>e["spacing-s"]} 6px
      ${({theme:e})=>e["spacing-s"]};
    margin-right: ${({theme:e})=>e["spacing-s"]};
  }

  .copy-action {
    padding-left: ${({theme:e})=>e["spacing-m"]};
    padding-right: ${({theme:e})=>e["spacing-m"]};
  }
`;class E extends n.Component{constructor(e){super(e)}get isActivePR(){return[d.PR_STATES.OPEN,d.PR_STATES.APPROVED].includes(r().get(this.props.contextData,"pullRequest.status"))}pullRequestReviewerStatusBadge(e){return e===d.PR_STATES.APPROVED?n.createElement(l.default,{text:d.PR_STATES.APPROVED,status:"success"}):e===d.PR_STATES.MERGED?n.createElement(l.default,{text:d.PR_STATES.MERGED,status:"success"}):e===d.PR_STATES.DECLINED?n.createElement(l.default,{text:d.PR_STATES.DECLINED,status:"critical"}):void 0}render(){return n.createElement(f,null,n.createElement(m.ContextBarViewHeader,{title:"Pull request details",onClose:this.props.onClose,className:"pull-request-meta__header"}),n.createElement("div",{className:"pull-request-meta"},n.createElement(u.Info,{title:"ID"},n.createElement("div",{className:"pull-request-id",title:r().get(this.props,"contextData.modelId","")},n.createElement(c.default,{type:"body-medium",color:"content-color-primary"},r().get(this.props,"contextData.modelId",""))),n.createElement(i.default,{tooltip:"Copy ID",type:"tertiary",className:"copy-action"})),!this.isActivePR&&n.createElement(u.Info,{title:`${p[r().get(this.props.contextData,"pullRequest.status")]} by`},n.createElement(u.User,{user:r().get(this.props.contextData,"pullRequest.updatedBy")})),n.createElement(u.Info,{title:"Created by"},n.createElement(u.User,{user:r().get(this.props.contextData,"pullRequest.createdBy")})),n.createElement(u.Info,{title:"Created on"},n.createElement(u.Date,{date:r().get(this.props.contextData,"pullRequest.createdAt"),format:"DD MMM YYYY"})),this.isActivePR&&n.createElement(u.Info,{title:"Last updated"},n.createElement(u.Date,{date:r().get(this.props.contextData,"pullRequest.updatedAt"),relative:!0})),n.createElement(u.Info,{title:"Reviewers"},r().get(this.props.contextData,"pullRequest.reviewers.length",0)?n.createElement("ul",{className:"pull-request-reviewers-list"},r()(this.props.contextData).get("pullRequest.reviewers",[]).map((e=>n.createElement(u.User,{key:e.id,user:e,renderRight:()=>this.pullRequestReviewerStatusBadge(e.status)})))):n.createElement(c.default,{type:"body-medium",color:"content-color-primary"},"No reviewers"))))}}},"./version-control/pull-request/components/PullRequestMeta/infoComponents.js":function(e,t,s){s.r(t),s.d(t,{Date:function(){return f},Info:function(){return p},User:function(){return h}});var n=s("../../node_modules/react/index.js"),o=s("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),r=s("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),a=s("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),l=s("./node_modules/moment-timezone/index.js"),c=s.n(l),i=s("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),u=s("./js/components/base/Avatar.js"),m=s("./version-control/common/index.js");const d=i.default.div`
  & + & {
    margin-top: ${({theme:e})=>e["spacing-xl"]};
  }

  .pr-meta-info__title {
    margin-bottom: ${({theme:e})=>e["spacing-s"]};
  }

  .pr-meta-info__content {
    display: flex;
  }
`;function p(e){const{title:t,children:s}=e;return n.createElement(d,null,n.createElement(o.default,{type:"h6",text:t,color:"content-color-secondary",className:"pr-meta-info__title"}),n.createElement(r.default,null,s))}function f(e){const{date:t,format:s,relative:o}=e;let r;return o?r=c()(t).fromNow():s&&(r=c()(t).format(s)),n.createElement(a.default,{type:"body-medium",color:"content-color-primary"},r)}const E=i.default.li`
  display: flex;
  width: 100%;

  .space-filler {
    flex: auto;
  }
`;function h(e){const{user:t,renderRight:s}=e;return n.createElement(E,null,n.createElement(u.default,{size:"medium",userId:t.id,customPic:t.profilePicUrl}),n.createElement(m.Username,{className:"pull-request-user__name",currentUserId:t.id,id:t.id,user:t}),n.createElement("span",{className:"space-filler"}),s&&s())}},"./version-control/common/CopyButton.tsx":function(e,t,s){s.r(t);var n=s("../../node_modules/react/index.js"),o=s("./js/utils/ClipboardHelper.js"),r=s("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),a=s("../../node_modules/@postman/aether/esmLib/src/components/Tooltip/Tooltip.js"),l=s("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-state-success-stroke.js"),c=s("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-copy-stroke.js");t.default=({content:e,type:t,size:s,tooltip:i="Copy",className:u,onClick:m})=>{const[d,p]=(0,n.useState)(!1);return n.createElement(r.default,{type:t,size:s,icon:d?n.createElement(l.default,null):n.createElement(c.default,null),className:u,onClick:()=>{o.default.copy(e),p(!0),setTimeout((()=>{p(!1)}),3e3),null==m||m()},tooltip:n.createElement(a.default,{content:d?"Copied!":i,placement:"top"})})}}}]);