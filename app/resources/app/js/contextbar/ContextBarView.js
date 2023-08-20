"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[105],{"./flow-runner/components/contextbar/ContextBarView.tsx":function(e,t,o){o.r(t);var n=o("../../node_modules/react/index.js"),s=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),l=o("../../node_modules/@postman/aether/esmLib/src/components/TextArea/TextArea.js"),a=o("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),d=o("./runtime-repl/_common/components/molecule.js"),i=o("../../node_modules/mobx/lib/mobx.module.js"),c=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),m=o("./appsdk/contextbar/ContextBarViewHeader.js"),p=function(e,t,o,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(l=(r<3?s(l):r>3?s(t,o,l):s(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};const u=s.default.div`
  padding: ${({theme:e})=>e["spacing-zero"]} ${({theme:e})=>e["spacing-s"]};
  `,f=s.default.div`
  padding: ${({theme:e})=>e["spacing-l"]} ${({theme:e})=>e["spacing-s"]};
  gap: ${({theme:e})=>e["spacing-xs"]};
  display: flex;
  flex-direction: column;
  font-size: ${({theme:e})=>e["text-size-m"]};
  line-height: ${({theme:e})=>e["line-height-m"]};

  .documentation-editor-dropdown {
    display: none;
  }

`;let h=class extends n.Component{constructor(){super(...arguments),this.editMode=!1}setEditMode(e){this.editMode=e}render(){const{onClose:e}=this.props,{id:t,model:o}=this.props.contextData;return n.createElement(r.default,{direction:"column"},n.createElement(m.ContextBarViewHeader,{title:"Flow details",onClose:()=>e()}),n.createElement(u,null,n.createElement(d.EntityMetaInfoView,{userFriendlyEntityName:"flow",info:{id:t,createdAt:o.createdOn,owner:o.createdBy}})),n.createElement(f,null,n.createElement(l.default,{placeholder:"Enter summary for flow",value:o.flowDescription,onChange:e=>{o.updateFlowDescription(e.target.value)},label:n.createElement(a.default,{text:"Summary"}),isDisabled:o.isReadOnly,maxLength:140})))}};p([i.observable],h.prototype,"editMode",void 0),p([i.action],h.prototype,"setEditMode",null),h=p([c.observer],h),t.default=h}}]);