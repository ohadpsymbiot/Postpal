"use strict";(self.webpackChunk_postman_app_scratchpad=self.webpackChunk_postman_app_scratchpad||[]).push([[13],{6579:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a,i=n(1),s=n(1593),o=n(1007),r=n(1611),p=n(1222),l=n(6580),d=n(6582),c=n(5119),g=n(2734),h=n(1013),u=n(21);let m=(0,s.observer)(a=class extends i.Component{constructor(e){super(e),this.state={activeLanguage:{language:"curl",variant:"cURL"},optionsArray:[],optionsPreference:{},codeSnippet:"",originalSnippetHash:"",codeCopied:!1,selectedLanguage:{}},this.handleCodeTypeSelect=this.handleCodeTypeSelect.bind(this),this.handleSnippetChange=this.handleSnippetChange.bind(this),this.handleCopyCode=this.handleCopyCode.bind(this),this.store=(0,h.getStore)("CodegenStore"),this.throttledGenerateSnippet=u.throttle(this.handleCodeTypeSelect.bind(this),500,{leading:!0,trailing:!0})}componentDidMount(){var e={id:this.store.languagePreference},{language:t,variant:n}=u.isObject(e.id)?e:JSON.parse(e.id);this.disposePreviewReaction=(0,o.reaction)((()=>{let e=(0,h.getStore)("EditorStore").find(this.props.contextData.editorId),t=e&&e.model;return t&&t.viewState&&(0,o.toJS)(t.viewState.previewRequest)}),(()=>{this.throttledGenerateSnippet(this.state.selectedLanguage)})),this.handleCodeTypeSelect(e),p.default.addEventV2({category:"codegen",action:"open_codegen_contextbar",label:`${t}_${n}`})}componentWillUnmount(){this.disposePreviewReaction&&this.disposePreviewReaction()}componentDidUpdate(e){const{id:t}=e.contextData||{};t!==u.get(this.props.contextData,"id")&&this.handleCodeTypeSelect(this.state.selectedLanguage)}hash(e){return n(515).createHash("sha1").update(e).digest("base64")}handleCodeTypeSelect(e){u.isEmpty(e)||this.setState({selectedLanguage:e});let t,n=u.isEmpty(e)?this.store.languagePreference:JSON.parse(e.id),{language:a,variant:i}=n,s={};this.setState({activeLanguage:{language:a,variant:i}}),c.default.getOptions(a,i).then((e=>{e&&e.length&&(this.setState({optionsArray:e}),e.forEach((e=>{s[e.id]=e.default})))})).catch((e=>{this.setState({optionsArray:[]}),pm.logger.error(`CodeCBView~handleCodeTypeSelect - ${e}`)})).then((()=>{t=this.store.getSnippetOptionForLanguage(a,i)||s,this.setState({optionsPreference:t})})).then((()=>{let e=this.props.contextData&&this.props.contextData.type;c.default.getSnippet(this.props.contextData.editorId,{language:a,variant:i,optionsPreference:t},e).then((e=>{if(!e)return;let t=this.hash(e.snippet);t!==this.state.originalSnippetHash&&this.setState({codeSnippet:e.snippet,originalSnippetHash:t},(()=>{let e=JSON.stringify({language:a,variant:i});this.store.updateLanguagePreference(e)}))}))}))}handleSnippetChange(e){this.setState({codeSnippet:e})}handleCopyCode(){g.default.copy(this.state.codeSnippet),this.setState({codeCopied:!0}),clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.setState({codeCopied:!1})}),1500)}render(){let e,t=u.get(this.state.activeLanguage,"language","curl"),{controller:n={}}=this.props||{},a=u.get(this.state.activeLanguage,"variant","cURL"),s=n.labelEditorMap&&n.labelEditorMap[`${t}_${a}`]?n.labelEditorMap[`${t}_${a}`].editorMode:"powershell",o={indentationType:this.state.optionsPreference.indentType?u.toLower(this.state.optionsPreference.indentType):null,indentationSize:this.state.optionsPreference.indentCount||null},p=this.store.getSnippetOptions();return n.editor&&(e=n.editor.isDirty),"dart"===s&&(s="powershell"),i.createElement("div",{className:"context-bar-code-snippet-view"},i.createElement(r.ContextBarViewHeader,{title:"Code snippet",onClose:this.props.onClose}),i.createElement("div",{className:"context-bar-code-snippet-body"},i.createElement(l.default,{codeCopied:this.state.codeCopied,languageList:n.languageList,onSelectLanguage:this.handleCodeTypeSelect,selectedLanguage:this.state.selectedLanguage,handleCopyCode:this.handleCopyCode,snippetOptions:p,isDirty:e}),i.createElement(d.default,{indentation:o,codeSnippet:this.state.codeSnippet,editorMode:s,handleSnippetChange:this.handleSnippetChange})))}})||a},6580:function(e,t,n){n.r(t);var a=n(1),i=n(1665),s=n(6581),o=n(1612),r=n(2702),p=n(21);class l extends a.Component{constructor(e){super(e),this.openLanguageSettingsModal=()=>{r.ModalViewManager.onMount((()=>{pm.mediator.trigger("openLanguageSettingsModel",this.props.selectedLanguage)}))},this.openLanguageSettingsModal=this.openLanguageSettingsModal.bind(this)}componentDidUpdate(e){let t=this.props.snippetOptions,n=e.snippetOptions,a=JSON.parse(this.props.selectedLanguage.id),i=p.get(a,"language","curl"),s=p.get(a,"variant","cURL");(JSON.stringify(n[`${i}_${s}`])!==JSON.stringify(t[`${i}_${s}`])||!this.props.isDirty&&e.isDirty)&&this.props.onSelectLanguage(this.props.selectedLanguage)}render(){return a.createElement("div",{className:"context-bar-codegen-controls"},a.createElement("div",{className:"context-bar-codegen-controls-left"},a.createElement("div",{className:"context-bar-codegen-controls-left__dropdown"},a.createElement(s.default,{selectedTarget:this.props.selectedLanguage,onTargetSelect:this.props.onSelectLanguage,menuClassName:"context-bar-codegen-dropdown",filterItems:this.props.languageList})),a.createElement("div",{className:"context-bar-codegen-controls-left__setting"},a.createElement(o.Button,{type:"tertiary",onClick:this.openLanguageSettingsModal},a.createElement(i.default,{name:"icon-descriptive-setting-stroke",className:"language-settings-icon",tooltip:"Code settings"})))),a.createElement("div",{className:"context-bar-codegen-controls-right"},a.createElement("div",{className:"context-bar-codegen-controls-right__copy"},this.props.codeCopied?a.createElement(o.Button,{onClick:this.props.handleCopyCode,tooltip:"Copied"},a.createElement(i.default,{name:"icon-state-success-stroke",className:"code-copied-icon"})):a.createElement(o.Button,{type:"tertiary",onClick:this.props.handleCopyCode,tooltip:"Copy snippet"},a.createElement(i.default,{name:"icon-action-copy-stroke",className:"code-copy-icon"})))))}}t.default=l},6582:function(e,t,n){n.r(t);var a=n(1),i=n(2744);class s extends a.Component{constructor(e){super(e)}render(){return a.createElement("div",{className:"context-bar-code-snippet-editor"},a.createElement(i.default,{ref:e=>e&&e.focus(),indentation:this.props.indentation,value:this.props.codeSnippet,language:this.props.editorMode,onChange:this.props.handleSnippetChange,wordWrap:!0,ref:"editor"}))}}t.default=s},6581:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(1),i=n(2684),s=n(1982),o=n(3351),r=n(21);class p extends a.Component{constructor(e){super(e),this.selectedTarget=this.selectedTarget.bind(this)}getFilteredList(e,t,n={}){return!t||n.firstRender?e:r.filter(e,(e=>e.id&&r.includes(e.name.toLowerCase(),t.toLowerCase())))}selectedTarget(){var e=this.props.filterItems,t=this.props.selectedTarget,n=r.find(e,(e=>e.id===t.id));return n||{id:'{language:"curl",variant:"cURL"}',name:"cURL"}}getOption(e,t,n={}){const i=e.name,r=e.id;return t&&!n.firstRender?a.createElement(s.default,null,a.createElement("div",{className:"input-select-item",key:r},a.createElement(o.default,{source:i,query:t}))):a.createElement(s.default,null,a.createElement("div",{className:"input-select-item",key:r},i))}render(){var{filterItems:e}=this.props;return a.createElement("div",{className:"context-bar-dropdown-wrapper"},a.createElement("div",null,a.createElement(i.InputSelectV2,{style:{height:"32px"},onSelect:this.props.onTargetSelect,getFilteredList:this.getFilteredList.bind(this,e),optionRenderer:this.getOption,selectedItem:this.selectedTarget(),ref:"inputSelect",menuClassName:this.props.menuClassName,getInputValue:e=>e.name||""})))}}}}]);