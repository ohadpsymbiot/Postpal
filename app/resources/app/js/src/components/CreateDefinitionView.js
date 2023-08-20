"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[154],{"../../node_modules/@postman/aether/esmLib/src/components/Card/Card.js":function(e,t,i){i.r(t);var n=i("../../node_modules/react/index.js"),o=i("../../node_modules/prop-types/index.js"),r=i.n(o),a=i("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=i("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),d=i("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),c=a.default.div.withConfig({displayName:"Card__StyledCard",componentId:"qu0gct-0"})(["background-color:",";border:",";border-radius:",";box-sizing:border-box;height:",";width:",";min-width:",";max-width:",";padding:",";&:hover{background-color:",";}cursor:",";"],(function(e){return"fill"===e.type?e.theme["background-color-secondary"]:e.theme["background-color-primary"]}),(function(e){return"outline"===e.type?"".concat(e.theme["border-width-default"]," ").concat(e.theme["border-style-solid"]," ").concat(e.theme["border-color-strong"]):"none"}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.height}),(function(e){return e.width}),(function(e){return e.minWidth}),(function(e){return e.maxWidth}),(function(e){return e.theme["spacing-xs"]}),(function(e){return e.isClickable?"fill"===e.type?e.theme["background-color-tertiary"]:e.theme["background-color-secondary"]:""}),(function(e){return e.isClickable?"pointer":"default"})),l=(0,a.default)(s.default).withConfig({displayName:"Card__StyledCardContentArea",componentId:"qu0gct-1"})(["padding:20px;"]),m=n.forwardRef((function(e,t){var i=e.type,o=e.onClick,r=e.id,a=e.cover,m=e.title,p=e.figure,u=e.tag,h=e.height,f=e.width,g=e.minWidth,I=e.maxWidth,C=e.dataTestId,b=e.children,y=a.src,E=a.position,w=void 0===E?"left":E,_=!!u&&!p;return n.createElement(c,{type:i,ref:t,height:h,width:f,minWidth:g,maxWidth:I,"data-aether-id":"aether-card","data-testid":C,isClickable:!!o,onClick:function(){o&&o(r)}},n.createElement(s.default,{direction:"top"===w?"column":"row"},y&&("left"===w||"top"===w)&&n.createElement(s.default,{justifyContent:"center",alignItems:"center",backgroundColor:"background-color-primary",padding:"spacing-l",borderRadius:"border-radius-default"},y),n.createElement(l,{coverPosition:w,gap:"spacing-s",direction:"column",shrink:1,grow:1},p&&n.createElement(s.default,{justifyContent:"space-between",wrap:"wrap"},n.createElement(s.default,{padding:{paddingBottom:"spacing-s"}},p),u),n.createElement(s.default,{direction:"column",gap:"spacing-s"},_?n.createElement(s.default,{justifyContent:"space-between",gap:"spacing-m"},m&&n.createElement(d.default,{type:"h4",text:m}),u):m&&n.createElement(d.default,{type:"h4",text:m}),b)),y&&"right"===w&&n.createElement(s.default,{justifyContent:"center",alignItems:"center",padding:"spacing-l",borderRadius:"border-radius-default",backgroundColor:"background-color-primary"},y)))}));m.defaultProps={type:"outline",onClick:null,id:"",cover:{},title:"",figure:null,tag:null,height:"max-content",width:"inherit",minWidth:"228px",maxWidth:"",dataTestId:""},m.propTypes={children:r().oneOfType([r().arrayOf(r().node),r().node]).isRequired,type:r().oneOf(["outline","fill"]),onClick:r().func,id:r().string,cover:r().shape({src:r().node,position:r().oneOf(["top","right","left"])}),title:r().string,figure:r().node,tag:r().node,height:r().string,width:r().string,minWidth:r().string,maxWidth:r().string,dataTestId:r().string},t.default=m},"../../packages/api-design/api-definition-ui/src/components/CreateDefinitionView.js":function(e,t,i){i.r(t);var n,o=i("../../node_modules/react/index.js"),r=i("../../node_modules/mobx-react/dist/mobx-react.module.js"),a=i("./js/stores/CurrentUserStore.js"),s=i("./js/services/NavigationService.js"),d=i("./js/stores/StoreManager.js"),c=i("./api-dev/interfaces/APIInterface.js"),l=i("../../packages/api-design/api-design-analytics/index.js"),m=i("../../node_modules/@postman/aether/esmLib/src/components/Spinner/Spinner.js"),p=i("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),u=i("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),h=i("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),f=i("../../node_modules/@postman/aether/esmLib/src/components/Card/Card.js"),g=i("../../node_modules/@postman/aether/esmLib/src/components/Avatar/Avatar.js"),I=i("../../node_modules/@postman/aether/esmLib/src/components/Toast/withToast.js"),C=i("../../node_modules/lodash/lodash.js");let b=(0,r.observer)(n=class extends o.Component{constructor(e){super(e),this.isLoggedIn=()=>!!(0,d.resolveStoreInstance)(a.default).isLoggedIn||(pm.mediator.trigger("showSignInModal",{type:"createDefinition",origin:"create_definition_button",continueUrl:new URL(window.location.href)}),!1),this.handleCreateDefinitionFromScratch=async()=>{const{apiId:e,apiName:t,apiVersionId:i}=this.props.controller;if(!e)return;try{const t=await(0,c.getAPI)(e);if(!t)throw new Error("Could not fetch API");if(!t.isMigrated)return void await(0,c.migrateAPI)(e,i)}catch(e){return void pm.logger.error("CreateDefinitionViewV2~handleImportFromLocalClick: Error while fetching API",e)}const n=s.default.getActiveQueryParams().get();n.apiName=t,this.isLoggedIn()&&((0,l.logApiDesignAnalytics)({category:l.EVENT_CATEGORIES.CREATE_API_DEFINITION,action:l.EVENT_ACTIONS.AUTHOR_FROM_SCRATCH_CLICK,entityId:e,entityType:l.EVENT_ENTITY_TYPES.API}),s.default.transitionTo("build.definitionScratch",{apiId:e},n,{tabOptions:{openIn:this.props.id}}))},this.handleImportFromLocalClick=async()=>{const{apiId:e,apiVersionId:t}=this.props.controller;if((0,l.logApiDesignAnalytics)({category:l.EVENT_CATEGORIES.CREATE_API_DEFINITION,action:l.EVENT_ACTIONS.IMPORT_DEFINITION_CLICK,entityId:e,entityType:l.EVENT_ENTITY_TYPES.API}),this.isLoggedIn()&&e){try{const i=await(0,c.getAPI)(e),n=i.version.apiRepositoryStore;if(!i)throw new Error("Could not fetch API");if(!i.isMigrated)return void await(0,c.migrateAPI)(e,t);if(!n.canEditAPISource.allowed){const t=pm.logger.getContext("CreateDefinitionView","api-definition-ui");return pm.logger.error("CreateDefinitionhView~handleImportFromLocalClick Cannot create a definition for this API as it is disabled",{name:"actionNotAllowedError",message:"This action is disabled for this API",details:{apiId:e}},{context:t}),void n.openEditDisabledModal()}}catch(e){return void pm.logger.error("CreateDefinitionViewV2~handleImportFromLocalClick: Error while fetching API",e)}s.default.transitionTo("build.importDefinition",{apiId:e},s.default.getActiveQueryParams().get(),{additionalContext:{originalTabId:this.props.controller.tabId}})}},this.handleCreateDefinitionFromScratch=this.handleCreateDefinitionFromScratch.bind(this),this.handleImportFromLocalClick=this.handleImportFromLocalClick.bind(this)}render(){return C.get(this.props.controller,"isLoading")?o.createElement("div",{className:"import-container-loading"},o.createElement(m.default,null)):o.createElement(p.default,{className:"create-definition-block-container",direction:"column",height:"100%"},o.createElement(p.default,{basis:"auto",direction:"column"},o.createElement("div",null,o.createElement(u.default,{type:"h1",text:"Create Definition"}),o.createElement(h.default,{className:"create-definition-subheading",type:"lead",color:"content-color-primary"},"Choose one of the options to get started"))),o.createElement(p.default,{gap:"spacing-xl",justifyContent:"flex-start",alignItems:"flex-start",direction:"row",height:"100%","max-width":"100%",wrap:"wrap"},o.createElement("div",{className:"tesifclass-is-working"},o.createElement(f.default,{title:"Import Definition",figure:o.createElement(g.default,{className:"create-definition-block-image-mask",isOrg:!0,size:"l",src:"https://voyager.postman.com/icon/from-local.svg"}),onClick:()=>this.handleImportFromLocalClick(),width:"312px",height:"180px"},o.createElement(h.default,{type:"para"},"Import Definition files from code repository, local file system or API Gateways."))),o.createElement("div",{className:"tesifclass-is-working"},o.createElement(f.default,{title:"Author Definition from scratch",figure:o.createElement(g.default,{className:"create-definition-block-image-mask",isOrg:!0,size:"l",src:"https://voyager.postman.com/icon/create-folder-from-scratch.svg"}),onClick:()=>this.handleCreateDefinitionFromScratch(),width:"312px",height:"180px"},o.createElement(h.default,{type:"para"},"Describe your service using a spec format.")))))}})||n;t.default=(0,I.default)(b)}}]);