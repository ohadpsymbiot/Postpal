"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[23],{"./documentation/components/DocumentationIntersectionObserver/index.js":function(e,t,n){n.r(t),n.d(t,{IntersectionObserverContext:function(){return o.IntersectionObserverContext},useIntersectionObserver:function(){return o.useIntersectionObserver}});var o=n("./documentation/components/DocumentationIntersectionObserver/DocumentationIntersectionObserver.js");t.default=o.default},"./runtime-repl/extensible-collection/workbench/ECFolder/FolderEditor.jsx":function(e,t,n){n.r(t);var o=n("../../node_modules/react/index.js"),r=n("../../node_modules/mobx-react/dist/mobx-react.module.js"),a=n("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),i=n("./documentation/constants.js"),s=n("./runtime-repl/extensible-collection/index.ts"),l=n("./runtime-repl/extensible-collection/configurations/Folder.ts"),d=n("./runtime-repl/extensible-collection/workbench/Overview.jsx"),c=n("./runtime-repl/extensible-collection/api/ExtensibleCollectionItemAPI.ts"),m=n("./node_modules/lodash/lodash.js");const u=(0,r.observer)((({state:e})=>{const{addToast:t}=(0,a.default)(),n=m.get(c.default.cacheAPI.get(e.id),"extensions.documentation.content","");return o.createElement(d.default,{entityType:"folder",info:{createdAt:e.createdAt},hasPermission:l.default.hasPermission(e.id,s.ItemAction.SAVE),description:n,onDescriptionSave:(n,o)=>{l.default.get(e.id).then((({extensions:t})=>l.default.update({id:e.id,extensions:m.merge(t,{documentation:{content:n}})}))).then((()=>o(null))).catch((e=>{o(e),pm.logger.error("FolderEditor~onDescriptionSave",e),t({status:"error",description:"Something went wrong while updating the folder description."})}))},modelDetails:{model:i.FILE_UPLOAD_MODELS.EXTENSIBLE_COLLECTION_ITEM,modelId:e.id}})}));t.default=u},"./runtime-repl/extensible-collection/workbench/Overview.jsx":function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("../../node_modules/react/index.js"),a=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/ResponsiveContainer/ResponsiveContainer.js"),s=n("../../packages/documentation/documentation-core/index.js"),l=n("./js/stores/StoreManager.js"),d=n("./js/stores/OnlineStatusStore.js"),c=n("./runtime-repl/_common/components/EntityMetaInfoView/EntityMetaInfoView.js"),m=n("./runtime-repl/_common/DisabledTooltipConstants.js"),u=n("./documentation/components/DocumentationIntersectionObserver/index.js"),p=n("./runtime-repl/extensible-collection/workbench/Summary.tsx"),f=n("./node_modules/lodash/lodash.js");const h=(0,o.default)(a.default)`
  overflow-y: auto;
  padding-top: var(--spacing-l);
`,b=(0,o.default)(i.default)`
  width: 100%;
`,v=(0,o.default)(i.default)`
  font-size: var(--text-size-m);
  line-height: var(--line-height-m);

  ${e=>e.inEditMode&&o.css`
    height: 100%;
    overflow: unset;
  `}

  .description-editor-wrapper {
    height: 100%;
    overflow: hidden;

    .description-editor__markdown-editor {
      pre {
        word-break: break-word;
      }
    }

    .documentation-editor-footer {
      flex-wrap: wrap;
      gap: var(--spacing-s);
    }
  }

  .description-preview {
    overflow: auto;
    height: fit-content !important;

    &__edit-icon {
      margin-left: var(--spacing-l);
    }

    &__markdown {
      word-break: break-word;
    }
  }
`;function g({entityType:e,info:t,description:n,onDescriptionSave:o,summary:g,enableSummary:E=!1,onSummarySave:y=f.noop,hasPermission:w=!0,modelDetails:x}){const[_,S]=(0,r.useState)(!1),j=(0,l.resolveStoreInstance)(d.default).userCanSave,I=()=>{S(!1)},L=e=>{o(e,(e=>{e||S(!1)}))};return r.createElement(u.default,null,(({rootRef:o})=>r.createElement(h,{grow:1,shrink:1,justifyContent:"center",ref:o},r.createElement(b,{type:"row",maxWidth:"container-width-medium",overflow:"unset"},r.createElement(i.default,{type:"column",span:1,hiddenFor:["mobile"]}),r.createElement(v,{type:"column",span:7,mobile:12,minHeight:"100%",inEditMode:_&&j},_&&j?r.createElement(s.DescriptionEditor,{entityType:e,description:n,onCancel:I,onSave:L,placeholder:`Make things easier for your teammates with a complete ${e} description.`,showWysiwygOption:!0,modelDetails:x}):r.createElement(s.DescriptionPreview,{entityType:e,description:n,onEditButtonClick:()=>S(!0),editable:j,canEdit:w,showEmptyPlaceholder:!0,tooltip:j?w?null:m.DISABLED_TOOLTIP_NO_PERMISSION:m.DISABLED_TOOLTIP_IS_OFFLINE})),r.createElement(i.default,{type:"column",span:3,mobile:12,padding:{paddingRight:"spacing-s",paddingLeft:"spacing-s"},overflow:"unset"},r.createElement(a.default,{gap:"spacing-l",direction:"column"},E&&r.createElement(p.default,{summary:g,placeholder:`Briefly explain this ${e} with a summary.`,isEditable:j&&w,onSubmit:y}),r.createElement(c.default,{userFriendlyEntityName:e,info:{createdAt:t.createdAt,owner:t.createdBy}}))),r.createElement(i.default,{type:"column",span:1,hiddenFor:["mobile"]})))))}},"./runtime-repl/extensible-collection/workbench/Summary.tsx":function(e,t,n){n.r(t);var o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("../../node_modules/react/index.js"),a=n("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/TextArea/TextArea.js"),s=n("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),d=n("./js/components/base/keymaps/KeyMaps.js");const c=(0,o.default)(a.default)`
  padding: var(--spacing-xs) var(--spacing-s);
  white-space: pre-wrap
`,m=o.default.div`
  display: flex;
  align-items: center;
  flex: 1 auto;
  min-height: var(--size-m);
  margin-left: -8px;
  cursor: ${e=>e.isEditable?"text":"default"};

  ${e=>e.isEditable&&o.css`
    &:hover {
      border-radius: var(--border-radius-default);
      background-color: var(--background-color-tertiary);
    }
  `}
`,u=(0,o.default)(i.default)`
  width: 100%;
`;t.default=({summary:e,onSubmit:t,onChange:n=(()=>{}),placeholder:o="Add a brief summary.",characterLimit:a=140,isEditable:i=!0,showLabel:p=!0})=>{const[f,h]=(0,r.useState)(!1),[b,v]=(0,r.useState)(!1),[g,E]=(0,r.useState)(""),[y,w]=(0,r.useState)(e);(0,r.useEffect)((()=>{!f&&w(e)}),[e]);const x=()=>{i&&!b&&(v(!1),h(!1),t(y,(e=>{e&&h(!0)})))};return r.createElement(r.Fragment,null,f?r.createElement(d.default,{handlers:{enter:x,submit:x,quit:()=>{h(!1),v(!1),w(e)}}},r.createElement("div",null,r.createElement(u,{label:r.createElement(s.default,{text:p?"Summary":""}),value:y,placeholder:o,maxLength:a,validationStatus:b?"error":"",validationMessage:g,onChange:(e,{charLimit:t})=>{var o,r;if(!i)return;const s=null===(o=null==e?void 0:e.nativeEvent)||void 0===o?void 0:o.inputType;let l=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.value;var d;"insertLineBreak"!==s&&("insertFromPaste"===s&&(l=(d=l)?d.replace(/\r\n|\r|\n/g," "):""),l.length>a?(v(!0),E(`You are over permitted characters limit by ${t} characters`)):b&&(v(!1),E("")),w(l),n(l))},onBlur:x,isResizable:!1,autoFocus:!0}))):r.createElement(r.Fragment,null,p&&r.createElement(l.default,{type:"h6",text:"Summary",color:"content-color-secondary",hasBottomSpacing:!0}),r.createElement(m,{isEditable:i,onClick:()=>i&&h(!0)},r.createElement(c,{type:"para",maxLines:10,color:y?"content-color-primary":"content-color-tertiary"},y||(i?o:"Summary is yet to be added.")))))}}}]);