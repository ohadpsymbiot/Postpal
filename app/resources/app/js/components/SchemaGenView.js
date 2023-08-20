"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[89],{"../../packages/api-design/schema-generator/src/components/SchemaGenView.js":function(e,t,a){a.r(t);var n=a("../../node_modules/react/index.js"),o=a("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),s=a("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),c=a("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),i=a("../../node_modules/@postman/aether/esmLib/src/components/RadioGroup/RadioGroup.js"),l=a("../../node_modules/@postman/aether/esmLib/src/components/Radio/Radio.js"),d=a("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),r=a("./appsdk/contextbar/ContextBarViewHeader.js"),m=a("./js/models/services/filesystem.js"),p=a("../../packages/api-design/api-design-analytics/index.js"),E=a("../../packages/api-design/schema-generator/src/constants.js"),u=a("../../node_modules/lodash/lodash.js");const T={json:"application/json",yaml:"application/x-yaml"};t.default=e=>{const[t,a]=(0,n.useState)("yaml"),[_,g]=(0,n.useState)(!1),{addToast:C}=(0,o.default)();(0,n.useEffect)((()=>{(0,p.logApiDesignAnalytics)({category:p.EVENT_CATEGORIES.SCHEMAGEN,action:p.EVENT_ACTIONS.OPEN_SCHEMAGEN_CONTEXT_BAR,entityType:p.EVENT_ENTITY_TYPES.COLLECTION,entityId:u.get(e,"contextData.collectionUid")})}));return n.createElement(s.default,{direction:"column"},n.createElement(r.ContextBarViewHeader,{title:E.SCHEMAGEN_CONTEXT_BAR_TITLE,onClose:e.onClose}),n.createElement(s.default,{direction:"column",padding:{paddingLeft:"spacing-s"},gap:"spacing-m"},n.createElement(c.default,{type:"body-medium"},"Generate an API specification from a collection."),n.createElement(i.default,{label:"Choose Format",direction:"column",value:t,onChange:e=>a(e)},n.createElement(l.default,{value:"yaml",label:"YAML"}),n.createElement(l.default,{value:"json",label:"JSON"})),n.createElement(s.default,{width:"300px"},n.createElement(d.default,{type:"secondary",size:"medium",text:"Download OAS 3.0",isLoading:_,onClick:async()=>{g(!0);const a="openapi:3";(0,p.logApiDesignAnalytics)({category:p.EVENT_CATEGORIES.SCHEMAGEN,action:p.EVENT_ACTIONS.DOWNLOAD_SPEC,label:`openapi:3_${t}`,entityType:p.EVENT_ENTITY_TYPES.COLLECTION,entityId:u.get(e,"contextData.collectionUid")});try{const n=await e.controller.getSchemaContent({collectionId:e.contextData.collectionUid,specification:a,format:t});g(!1),(0,m.saveAndOpenFile)(`openapi.${t}`,n,T[t],(e=>{if(e)throw e}))}catch(e){g(!1),pm.logger.error("SchemaGenView~downloadSpec",e),C({title:e.message,status:"error"})}}}))))}}}]);