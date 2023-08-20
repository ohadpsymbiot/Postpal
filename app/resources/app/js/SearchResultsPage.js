"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[65],{"../../packages/search/search-results-page/src/SRPUtils.js":function(e,t,a){a.r(t),a.d(t,{metaInfoItems:function(){return S}});var r=a("../../node_modules/react/index.js"),s=a("../../packages/search/universal-search/index.js"),i=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-workspaces-stroke.js"),n=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-gRPC-stroke.js"),l=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-websocket-stroke.js"),o=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-request-stroke.js"),c=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-api-stroke.js"),d=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-forkedFlow-stroke.js"),p=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-flow-stroke.js"),u=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-descriptive-team-stroke.js"),m=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-folder-stroke.js"),h=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-example-stroke.js"),g=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-forkedCollection-stroke.js"),y=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-collection-stroke.js"),v=a("../../node_modules/moment/moment.js"),f=a.n(v);const S={workspace:{infoItems:(e={isPublic:!1})=>(e.isPublic,[{key:"publisherName",label:"",prepend:!1},{key:"collectionCount",label:"Collections: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)},{key:"apiCount",label:"APIs: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)},{key:"updatedAt",label:"Last Updated: ",prepend:!0,transformer:e=>f()(e).fromNow()},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}]),icon:()=>r.createElement(i.default,{size:"small",color:"content-color-secondary"})},request:{infoItems:(e={isPublic:!1,hideMetaInfo:!1})=>{const{isPublic:t,hideMetaInfo:a}=e;return t?[{key:"publisherName",label:"",prepend:!1,hideMetaInfo:a},{key:"updatedAt",label:"Last Updated: ",prepend:!0,transformer:e=>f()(e).fromNow()},{key:"forkCount",label:"Forks: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)},{key:"watcherCount",label:"Watchers: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}]:[{key:"workspaces.0.name",label:"",prepend:!0,hideMetaInfo:a},{key:"updatedAt",label:"Last Updated: ",prepend:!0,transformer:e=>f()(e).fromNow()},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}]},icon:(e={entityType:"http"})=>{switch(e.entityType){case"grpc-request":return r.createElement(n.default,{size:"small",color:"content-color-secondary",title:"gRPC Request"});case"ws-raw-request":case"ws-socketio-request":return r.createElement(l.default,{size:"small",color:"content-color-secondary",title:"Websocket Request"});default:return r.createElement(o.default,{size:"small",color:"content-color-secondary",title:"HTTP Request"})}}},api:{infoItems:(e={isPublic:!1,hideMetaInfo:!1})=>{const{isPublic:t,hideMetaInfo:a}=e;return t?[{key:"publisherName",label:"",prepend:!1,hideMetaInfo:a},{key:"updatedAt",label:"Last Updated: ",prepend:!0,transformer:e=>f()(e).fromNow()},{key:"versionCount",label:"Versions: ",prepend:!0},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}]:[{key:"workspaces.0.name",label:"",prepend:!1,hideMetaInfo:a},{key:"updatedAt",label:"Last Updated: ",prepend:!0,transformer:e=>f()(e).fromNow()},{key:"versionCount",label:"Versions: ",prepend:!0},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}]},icon:()=>r.createElement(c.default,{size:"small",color:"content-color-secondary"})},flow:{infoItems:(e={isPublic:!1,hideMetaInfo:!1})=>{const{isPublic:t,hideMetaInfo:a}=e;return t?[{key:"publisherName",label:"",prepend:!1,hideMetaInfo:a},{key:"updatedAt",label:"Last Updated: ",prepend:!0,transformer:e=>f()(e).fromNow()},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}]:[{key:"workspaces.0.name",label:"",prepend:!1,hideMetaInfo:a},{key:"updatedAt",label:"Last Updated: ",prepend:!0,transformer:e=>f()(e).fromNow()},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}]},icon:(e={forkLabel:""})=>e.forkLabel?r.createElement(d.default,{size:"small",color:"content-color-secondary"}):r.createElement(p.default,{size:"small",color:"content-color-secondary"})},team:{infoItems:()=>[{key:"workspaceCount",label:"Workspaces: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)},{key:"collectionCount",label:"Collections: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)},{key:"apiCount",label:"APIs: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}],icon:()=>r.createElement(u.default,{size:"small",color:"content-color-secondary"})},collection:{infoItems:(e={isPublic:!1,hideMetaInfo:!1})=>{const{isPublic:t,hideMetaInfo:a}=e;return t?[{key:"publisherName",label:"",prepend:!1,hideMetaInfo:a},{key:"updatedAt",label:"Last Updated: ",prepend:!0,transformer:e=>f()(e).fromNow()},{key:"forkCount",label:"Forks: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)},{key:"watcherCount",label:"Watchers: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}]:[{key:"workspaces.0.name",label:"",prepend:!0,hideMetaInfo:a},{key:"updatedAt",label:"Last Updated: ",prepend:!0,transformer:e=>f()(e).fromNow()},{key:"views",label:"Views: ",prepend:!0,transformer:e=>s.util.convertToUserFriendlyMetric(e)}]},icon:(e={entityType:"collection",forkLabel:""})=>{switch(e.entityType){case"folder":return r.createElement(m.default,{size:"small",color:"content-color-secondary"});case"example":return r.createElement(h.default,{size:"small",color:"content-color-secondary"});default:return e.forkLabel?r.createElement(g.default,{size:"small",color:"content-color-secondary"}):r.createElement(y.default,{size:"small",color:"content-color-secondary"})}}}}},"../../packages/search/search-results-page/src/components/SRPList.js":function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var r=a("../../node_modules/react/index.js"),s=a("../../packages/search/search-results-page/src/styled/StyledSRPList.js"),i=a("../../packages/search/search-results-page/src/components/SRPListItem.js");function n(e){const{results:t,activeType:a,activeScope:n,getRedirectUrl:l,handleEntityRedirection:o,handlePublisherNameEvent:c}=e;return r.createElement(s.StyledSRPList,null,r.createElement("div",{className:"pm-srp-list-wrapper"},t.map(((e,t)=>r.createElement(i.default,{index:t,key:t,resultItem:e,activeType:a,activeScope:n,getRedirectUrl:l,handleEntityRedirection:o,handlePublisherNameEvent:c})))))}},"../../packages/search/search-results-page/src/components/SRPListItem.js":function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a("../../node_modules/react/index.js"),s=a("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),i=a("../../node_modules/@postman/aether/esmLib/src/components/Avatar/Avatar.js"),n=a("../../node_modules/@postman/aether/esmLib/src/components/Tooltip/Tooltip.js"),l=a("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),o=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-descriptive-featured-stroke.js"),c=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-fork-stroke-small.js"),d=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-entity-collection-stroke.js"),p=a("./appsdk/components/link/Link.js"),u=a("../../packages/search/search-results-page/src/components/SearchEntityHighlight.js"),m=a("../../packages/search/universal-search/index.js"),h=a("../../node_modules/classnames/index.js"),g=a.n(h),y=a("./onboarding/src/common/LaunchDarkly.js"),v=a("../../packages/search/search-results-page/src/SRPUtils.js"),f=a("../../node_modules/lodash/lodash.js");let S=!1;function b(e){var t,a,h,b,E,C,x,k,w,I,_,T,R;const{resultItem:P,activeScope:N,activeType:A,index:L,getRedirectUrl:U,handleEntityRedirection:j,handlePublisherNameEvent:F}=e,{document:O,isParent:M,indent:$,isLastChild:Q,isChild:q}=P,{documentType:z,name:D,isPublic:H,forkLabel:V,method:B,url:W}=O,K=void 0!==q&&q;S=y.launchDarkly.getFlag(null===m.searchFeatureFlags||void 0===m.searchFeatureFlags||null===(t=m.searchFeatureFlags.PRIVATE_NETWORK_SEARCH)||void 0===t?void 0:t.key,!1);let G=z,Y=f.get(P,"highlight.name")||D,Z=O.tags&&O.tags.includes("FEATURED")?r.createElement(o.default,null):null,J=f.get(P,"highlight.summary")||O.summary,X=f.get(P,"highlight.description")||O.description,ee=null===(a=v.metaInfoItems[z])||void 0===a||null===(h=a.infoItems)||void 0===h?void 0:h.call(a,{isPublic:H,hideMetaInfo:K}),te="collection"===z||"request"===z?O.folders?"folder":O.examples?"example":O.type?O.type:"collection":z,ae=v.metaInfoItems[z].icon({forkLabel:V,entityType:te});const re=(null===(b=P.document)||void 0===b?void 0:b.visibilityStatus)||(null==P||null===(E=P.document)||void 0===E||null===(C=E.workspaces)||void 0===C||null===(x=C[0])||void 0===x?void 0:x.visibilityStatus)||(null==P||null===(k=P.document)||void 0===k||null===(w=k.workspaces)||void 0===w||null===(I=w[0])||void 0===I?void 0:I.visibilitystatus),se=f.get((0,m.visibilityStatusIconMap)(G),re);if("collection"===G)P.folders?(G="folder",Y=f.get(P,["highlight","folders.name"])||f.get(P,"folders.document.name"),X=f.get(P,["highlight","folders.description"])||f.get(P,"folders.document.description","")):P.examples&&(G="example",Y=f.get(P,["highlight","examples.name"])||f.get(P,"examples.document.name"),X=f.get(P,["highlight","examples.description"])||f.get(P,"examples.document.description",""));else if("request"===G)switch(X=f.get(P,["highlight","requests.description"])||f.get(P,"document.description",""),Y=f.get(P,"document.name"),null===(_=P.document)||void 0===_?void 0:_.type){case"grpc-request":case"ws-raw-request":case"ws-socketio-request":break;default:B&&W&&(Y=(0,m.getRequestTitle)(B,W))}const ie=S&&"privateAPINetwork"===N;let ne="pm-srp-list-item";if($>0&&(ne="pm-srp-list-item-indented-"+$.toString(),"request"===z)){ne="pm-srp-list-item-indented-"+($-1).toString()+"-request",Q&&(ne+="-last")}return"request"===z&&$>0&&"all"===A?r.createElement("div",{className:g()("pm-srp-list-item",ne)},r.createElement(s.default,{type:"link-primary"},r.createElement(p.default,{onClick:e=>j(P,z,m.searchUtil.getRedirectionUrlPath(P,ie),L,e),to:m.searchUtil.getRedirectionUrlPath(P,ie)},r.createElement("div",{className:"pm-srp-list-item-entity-type"},r.createElement("div",{className:"pm-srp-list-item-entity-type-icon"},ae),r.createElement("div",{className:"pm-srp-list-item-title-request"},r.createElement("div",{className:"pm-srp-list-item-title-text"},r.createElement("span",{className:"pm-srp-list-item-title-link-group"},r.createElement(u.default,{source:Y,className:"search-markdown pm-srp-title-text"})))))))):r.createElement("div",{className:g()("pm-srp-list-item",ne)},"all"===A&&r.createElement("div",{className:"pm-srp-list-item-entity-type"},r.createElement("div",{className:"pm-srp-list-item-entity-type-icon"},ae),r.createElement("div",{className:"pm-srp-list-item-entity-type-text"},function(e){return"api"===e?"API":e.charAt(0).toUpperCase()+e.slice(1)}(G))),r.createElement("div",{className:"pm-srp-list-item-title"},r.createElement("div",{className:"pm-srp-list-item-title-text"},r.createElement(s.default,{type:"strong"},r.createElement("span",{className:"pm-srp-list-item-title-link-group"},"team"===z&&P.document&&P.document.logo&&r.createElement(p.default,{onClick:e=>j(P,z,m.searchUtil.getRedirectionUrlPath(P,ie),L,e),to:m.searchUtil.getRedirectionUrlPath(P,ie)},r.createElement(i.default,{size:"xs",className:"pm-srp-list-item-title-team-logo",src:P.document.logo})),r.createElement(s.default,{type:"link-primary"},r.createElement(p.default,{onClick:e=>j(P,z,m.searchUtil.getRedirectionUrlPath(P,ie),L,e),to:m.searchUtil.getRedirectionUrlPath(P,ie)},("request"===A&&"request"===G||"collection"===A&&(P.folders||P.examples||P.requests))&&r.createElement("span",{className:"pm-srp-list-item-title-text-child-icon"},ae),r.createElement(u.default,{source:Y,className:"search-markdown pm-srp-title-text"}))))),!(P.folders||P.examples||P.requests)&&V&&r.createElement("div",{className:"pm-srp-list-item-title-text-fork-label"},r.createElement(c.default,{color:"content-color-primary",className:"pm-srp-list-title-text-fork-label-icon"}),r.createElement("div",{className:"pm-srp-list-item-title-text-fork-label-text"},V))),r.createElement("div",{className:"pm-srp-list-item-title-tags"},se&&!K&&"privateAPINetwork"!==N&&se,Z&&r.createElement(n.default,{content:"Featured",placement:"bottom"},r.createElement(o.default,{color:"content-color-warning"})))),"request"===z?r.createElement(l.default,{padding:{paddingBottom:"spacing-s"}},r.createElement(l.default,null,r.createElement(s.default,{isTruncated:!0,color:"content-color-primary"}," ",P.document.name," ")),r.createElement(l.default,{alignItems:"center"},r.createElement("span",{className:"pm-srp-list-item-request-info-separator"})),null!==(T=P.document.collection)&&void 0!==T&&T.name?r.createElement(l.default,{alignItems:"center",gap:"spacing-xs"},r.createElement(d.default,{size:"small"}),r.createElement(s.default,{isTruncated:!0,color:"content-color-primary"}," ",null===(R=P.document.collection)||void 0===R?void 0:R.name," ")):null):null,(J||X)&&r.createElement("div",{className:"pm-srp-list-item-description"},r.createElement(u.default,{source:J||X,className:"search-markdown"})),(P.folders||P.examples||P.requests)&&r.createElement("div",{className:"pm-srp-list-item-parent-collection"},r.createElement(u.default,{source:O.name,className:"search-markdown"}),V&&r.createElement("div",{className:"pm-srp-list-item-title-text-fork-label"},r.createElement(c.default,{color:"content-color-primary",className:"pm-srp-list-fork-icon"}),r.createElement("div",{className:"pm-srp-list-item-title-text-fork-label-text"},V))),r.createElement("div",{className:"pm-srp-list-item-meta"},f.reduce(ee,((e,t)=>{let a=f.get(O,t.key);return f.get(O,"isPublic")||"views"!==t.key&&""!==a?(f.isUndefined(a)||(a=t.transformer?t.transformer(a):a,0!==a||"views"!==t.key&&"forkCount"!==t.key&&"watcherCount"!==t.key||(a=0),e.length&&e.push(r.createElement("span",{className:g()("pm-srp-list-item-meta-separator",{"hide-info":t.hideMetaInfo})})),"publisherName"===t.key?!t.hideMetaInfo&&e.push(r.createElement("span",{className:"pm-srp-list-item-meta-info"},r.createElement(p.default,{to:`${window.postman_explore_url}/${f.get(O,"publisherHandle","")}`,target:"_blank",onClick:e=>F({entityId:f.get(O,"id"),positionClicked:L+1})},r.createElement(s.default,{type:"link-subtle",className:"pm-srp-list-item-meta-info-link"},t.prepend?`${t.label}${a}`:`${a}${t.label}`)))):!t.hideMetaInfo&&e.push(r.createElement("span",{className:"pm-srp-list-item-meta-info"},t.prepend?`${t.label}${a}`:`${a}${t.label}`))),e):e}),[])))}},"../../packages/search/search-results-page/src/components/SearchEntityHighlight.js":function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a("../../node_modules/react/index.js"),s=a("../../node_modules/sanitize-html/index.js"),i=a.n(s),n=a("../../node_modules/prop-types/index.js"),l=a.n(n);class o extends r.Component{constructor(e){super(e)}render(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:i()(this.props.source,{allowedTags:["b"]})},className:this.props.className})}}o.propTypes={source:l().string.isRequired}},"../../packages/search/search-results-page/src/components/SearchResultsPage.js":function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var r,s=a("../../node_modules/react/index.js"),i=a("../../node_modules/classnames/index.js"),n=a.n(i),l=a("../../node_modules/mobx-react/dist/mobx-react.module.js"),o=a("../../packages/search/search-results-page/src/components/Sidebar.js"),c=a("../../packages/search/search-results-page/src/components/TypeNavigationItem.js"),d=a("./js/components/base/LoadingIndicator.js"),p=a("./js/stores/SyncStatusStore.js"),u=a("./js/stores/SearchStore.js"),m=a("./js/stores/StoreManager.js"),h=a("./js/stores/CurrentUserStore.js"),g=a("./js/utils/util.js"),y=a("./js/services/NavigationService.js"),v=a("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),f=a("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/Search.js"),S=a("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/InternalServerError.js"),b=a("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/CheckInternetConnection.js"),E=a("../../node_modules/@postman/aether/esmLib/src/components/BlankState/BlankState.js"),C=a("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),x=a("../../node_modules/@postman/aether/esmLib/src/components/ResponsiveContainer/ResponsiveContainer.js"),k=a("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),w=a("../../node_modules/@postman/aether/esmLib/src/components/Dropdown/SingleSelect/SingleSelect.js"),I=a("../../packages/search/universal-search/index.js"),_=a("./js/modules/services/AnalyticsService.js"),T=a("../../node_modules/uuid/dist/esm-browser/v4.js"),R=a("./appsdk/utils/NavigationUtils.js"),P=a("../../node_modules/mobx/lib/mobx.module.js"),N=a("../../packages/search/search-results-page/src/components/SRPList.js"),A=a("./appsdk/components/link/Link.js"),L=a("./onboarding/src/common/LaunchDarkly.js"),U=a("../../packages/search/search-results-page/src/styled/StyledSRPWrapper.js"),j=a("./js/utils/NavigationUtil.js"),F=a("../../node_modules/lodash/lodash.js");const O=I.searchUtil.getTypeFilters().map((e=>({key:e.action,label:e.label,icon:e.icon}))),M={workspace:"collaboration.workspace",api:"adp.api",collection:"runtime.collection",flow:"flow.flow",team:"apinetwork.team",user:"apinetwork.user",request:"runtime.request"},$=[{label:"Most relevant",value:"relevance"},{label:"Most views",value:"views"},{label:"Most recent",value:"updatedAt"}];let Q=!1,q=(0,l.observer)(r=class extends s.Component{constructor(e){super(e),this.state={activeType:"all",globalSearchQuery:"",activeScope:I.SEARCH_SCOPES.public,error:!1,errorType:"",entityTypeCount:{all:0,workspace:0,api:0,collection:0,team:0,user:0,flow:0,request:0},searchResults:[],activeSort:"relevance",currentPageSize:0,loadingMore:!1,isLoading:!1,hasMoreResults:!1,hideMobileFilters:!0,metaCount:0,sortOptions:$,correctedQueryText:"",entityTypeNavigationCount:{all:0,workspace:0,api:0,collection:0,team:0,user:0,flow:0,request:0},showDidYouMean:!1,showSpellCorrectedResults:!1,correctedQueryResultCount:{all:0,workspace:0,api:0,collection:0,team:0,flow:0,request:0},PRIVATE_NETWORK_ENABLED_FOR_ENTERPRISE:!1},this.handleScopeChange=this.handleScopeChange.bind(this),this.handleTypeChange=this.handleTypeChange.bind(this),this.handleSortChange=this.handleSortChange.bind(this),this.handleSearchChange=this.handleSearchChange.bind(this),this.searchData=this.searchData.bind(this),this.traceId="",this.getSearchQuery=this.getSearchQuery.bind(this),this.getSearchCountQuery=this.getSearchCountQuery.bind(this),this.loadMoreSearchData=this.loadMoreSearchData.bind(this),this.getSearchSubText=this.getSearchSubText.bind(this),this.handleScroll=F.debounce(this.handleScroll.bind(this),500),this.handleQueryParamsChange=this.handleQueryParamsChange.bind(this),F.invoke(this.props,"controller.setQueryParamChangeListener",this.handleQueryParamsChange),this.searchResultContainer=s.createRef(),this.requestState=null,this.debouncedScopeChange=F.debounce(this.handleScopeChange.bind(this),1e3),this.handleMobileFilterToggle=this.handleMobileFilterToggle.bind(this),this.reactions=[],this.getRedirectUrl=this.getRedirectUrl.bind(this),this.getCollectionChildEntityUrl=this.getCollectionChildEntityUrl.bind(this),this.handleEntityRedirection=this.handleEntityRedirection.bind(this),this.handlePublisherNameEvent=this.handlePublisherNameEvent.bind(this),this.getCorrectedQueryData=this.getCorrectedQueryData.bind(this),this.handleLearningCenterLinkClick=this.handleLearningCenterLinkClick.bind(this),this.searchResultTitleRef=s.createRef()}componentDidMount(){const e="desktop"===window.SDK_PLATFORM?(0,j.getUrlParts)(y.default.getCurrentURL()).queryString:window.location.search;let t=new URLSearchParams(e);if((t.get("scope")===I.SEARCH_SCOPES.team||t.get("scope")===I.SEARCH_SCOPES.personal)&&"team"===t.get("type")){t.set("scope",I.SEARCH_SCOPES.public);let e=Object.fromEntries(t);y.default.setURL("search",{},e)}this.setState({globalSearchQuery:t.get("q"),activeType:t.get("type"),activeScope:t.get("scope")});!(0,m.resolveStoreInstance)(h.default).isLoggedIn&&I.searchUtil.setMetaViewportTag(),this.getSortOptions(),this.traceId=(0,m.resolveStoreInstance)(u.default).traceId,this.traceId||(this.traceId=(0,T.default)()),this.reactions.push((0,P.reaction)((()=>[(0,m.resolveStoreInstance)(h.default).isLoggedIn,(0,m.resolveStoreInstance)(h.default).teamId]),(()=>{let e=(0,m.resolveStoreInstance)(h.default);if(e.isLoggedIn){const t="desktop"===window.SDK_PLATFORM?(0,j.getUrlParts)(y.default.getCurrentURL()).queryString:window.location.search;let a=new URLSearchParams(t).get("scope");if(a===I.SEARCH_SCOPES.personal&&e.teamId?a=I.SEARCH_SCOPES.team:a!==I.SEARCH_SCOPES.team&&a!==I.SEARCH_SCOPES.privateAPINetwork||e.teamId||(a=I.SEARCH_SCOPES.personal),I.searchUtil.getScopeFilters(Q).find((e=>e.action===a))||(a=I.SEARCH_SCOPES.all),this.state.activeScope===a)return;a!==I.SEARCH_SCOPES.team&&a!==I.SEARCH_SCOPES.privateAPINetwork||this.state.activeScope!==I.SEARCH_SCOPES.personal?this.handleScopeChange(a):this.debouncedScopeChange(a)}}))),(0,P.when)((()=>!(0,m.resolveStoreInstance)(h.default).isHydrating),(()=>{this.state.globalSearchQuery&&(_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,property:"search",action:"initiate",label:"search",traceId:this.traceId,value:2,teamId:(0,m.resolveStoreInstance)(h.default).teamId}),_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,property:"search",label:this.state.globalSearchQuery,action:"query",traceId:this.traceId,teamId:(0,m.resolveStoreInstance)(h.default).teamId}))})),this.fetchAndSetPrivateNetworkFeature(),(0,m.resolveStoreInstance)(u.default).clear(),this.requestState=null,F.isFunction(this.searchResultContainer.addEventListener)&&this.searchResultContainer.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){F.isFunction(this.searchResultContainer.removeEventListener)&&this.searchResultContainer.removeEventListener("scroll",this.handleScroll),this.reactions.forEach((e=>e())),I.searchUtil.unsetMetaViewportTag()}async fetchAndSetPrivateNetworkFeature(){await(0,I.fetchPrivateNetworkFeature)()&&this.setState({PRIVATE_NETWORK_ENABLED_FOR_ENTERPRISE:!0})}handleScroll(){this.searchResultContainer.scrollTop+this.searchResultContainer.clientHeight>=this.searchResultContainer.scrollHeight-10&&!this.state.isLoading&&!this.state.loadingMore&&this.state.hasMoreResults&&this.loadMoreSearchData()}handleLearningCenterLinkClick(){_.default.addEventV2AndPublish({category:"search-all",action:"lc-click-srp",label:this.state.globalSearchQuery,traceId:this.traceId,teamId:(0,m.resolveStoreInstance)(h.default).teamId})}handlePublisherNameEvent({entityId:e,positionClicked:t}){_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,property:"search",action:"click",label:"publisher-name",traceId:this.traceId,value:t,entityId:e,teamId:(0,m.resolveStoreInstance)(h.default).teamId})}handleQueryParamsChange(e){if(e.q!==this.state.globalSearchQuery){let t=(0,m.resolveStoreInstance)(u.default).traceId;t?(this.traceId=t,(0,m.resolveStoreInstance)(u.default).clear()):e.q&&(this.traceId||(this.traceId=(0,T.default)()),_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,property:"search",action:"initiate",traceId:this.traceId,value:2,teamId:(0,m.resolveStoreInstance)(h.default).teamId}),_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,property:"search",label:e.q,action:"query",traceId:this.traceId,teamId:(0,m.resolveStoreInstance)(h.default).teamId}))}else(0,m.resolveStoreInstance)(u.default).traceId&&(this.traceId=(0,m.resolveStoreInstance)(u.default).traceId,(0,m.resolveStoreInstance)(u.default).clear());if(e.q||e.type||e.scope){let t=(0,m.resolveStoreInstance)(h.default),a=e.scope;t.isLoggedIn&&a&&(a===I.SEARCH_SCOPES.personal&&t.teamId?a=I.SEARCH_SCOPES.team:a!==I.SEARCH_SCOPES.team&&a!==I.SEARCH_SCOPES.privateAPINetwork||t.teamId||(a=I.SEARCH_SCOPES.personal),I.searchUtil.getScopeFilters(Q).find((e=>e.action===a))||(a=I.SEARCH_SCOPES.public),e.scope!==I.SEARCH_SCOPES.privateAPINetwork||I.searchUtil.isEnabledForPrivateAPINetwork(e.type)||(a=I.SEARCH_SCOPES.public,e.scope=I.SEARCH_SCOPES.public,y.default.setURL("search",{},e))),this.setState({globalSearchQuery:e.q||this.state.globalSearchQuery||"",activeScope:a||this.state.activeScope||I.SEARCH_SCOPES.all,activeType:e.type||this.state.activeType||"all"},(()=>{this.searchData()}))}}handleScopeChange(e){let t=I.searchUtil.getQueryParams();e!==I.SEARCH_SCOPES.team&&e!==I.SEARCH_SCOPES.personal||(t=F.omit(t,"category")),e!==I.SEARCH_SCOPES.privateAPINetwork||I.searchUtil.isEnabledForPrivateAPINetwork(this.state.activeType)||(e=I.SEARCH_SCOPES.public),y.default.setURL("search",{},{...t,scope:e}),this.setState({activeScope:e},(()=>{this.searchData()}))}handleTypeChange(e){"team"!==this.state.activeScope&&this.state.activeScope!==I.SEARCH_SCOPES.personal||"team"!=e||(e="all"),this.state.activeScope!==I.SEARCH_SCOPES.privateAPINetwork||I.searchUtil.isEnabledForPrivateAPINetwork(e)||(e="all");const t=F.omit(I.searchUtil.getQueryParams(),"category");y.default.setURL("search",{},{...t,type:e}),this.setState({activeType:e},(()=>{this.searchData()}))}handleSortChange(e){const t=I.searchUtil.getQueryParams();y.default.setURL("search",{},{...t,sort:e.value}),this.setState({activeSort:e.value},(()=>{this.searchData()}))}getSortOptions(){return I.SearchService.getSRPConfigData().then((e=>{let t=F.get(e,"sortOptions");t?(t=t.map((e=>({value:e.action,label:e.label}))),this.setState({sortOptions:t})):this.setState({sortOptions:F.get(e,"sortOptions",$)})})).catch((e=>{pm.logger.error("pm~SearchContainer~SortOptions",e),this.setState({sortOptions:$})}))}getSearchQuery({pageSize:e,pageOffset:t,searchEntityTypes:a,options:r}){const{activeType:s,activeScope:i,activeSort:n,globalSearchQuery:l}=this.state;let o={queryIndices:a.map((e=>M[e])),queryText:l,size:e,from:t,clientTraceId:this.traceId,requestOrigin:"srp",mergeEntities:!0,nonNestedRequests:true};return r&&r.correctedQuery&&(o.correctedQueryText=this.state.correctedQueryText),i!==I.SEARCH_SCOPES.all&&(o.domain=i),"views"!==n&&"updatedAt"!==n||(o.sort=[{field:n,order:"desc"}]),"all"!==s&&this.requestState&&(o.state=this.requestState),o}getSearchCountQuery(){const{globalSearchQuery:e,activeScope:t}=this.state,a=I.searchUtil.getAllowedTypeFilters(t).map((e=>M[e.action]));let r={queryText:e,clientTraceId:this.traceId,queryIndices:a};return t!==I.SEARCH_SCOPES.all&&(r.domain=t),r}async searchData(e={}){if(F.isEmpty(this.state.globalSearchQuery))return;this.setState({isLoading:!0,error:!1}),this.requestState=null;let t=[],a={},r=this.state.activeType;const s=I.searchUtil.getAllowedTypeFilters(this.state.activeScope).map((e=>e.action));if("all"===r)t.push(I.SearchService.getSearchData(this.getSearchQuery({pageSize:I.CROSS_RANKED_SRP_PAGE_SIZE,pageOffset:I.INITIAL_SRP_OFFSET,searchEntityTypes:s,options:e}))),t.push(I.SearchService.getSearchCount(this.getSearchCountQuery()));else{let a=this.getSearchQuery({pageSize:I.SINGLE_TYPE_PAGE_SIZE,pageOffset:0,searchEntityTypes:[r],options:e});t.push(I.SearchService.getSearchData(a)),t.push(I.SearchService.getSearchCount(this.getSearchCountQuery()))}Promise.all(t).then((([t,s])=>{if("queryTextLimitExceeded"===F.get(t,"error.errorType",""))return this.setState({isLoading:!1,error:!0,errorType:"query-text-exceeded-limit"});let i=0;for(let e in t.meta.total)i+=t.meta.total[e];if(I.ENABLE_SPELL_CORRECTION&&0===i&&F.get(t,`meta.spellCorrection.count.${r}`,0)>0&&(i+=F.get(t,`meta.spellCorrection.count.${r}`,0)),"all"===r&&this.state.activeScope!==I.SEARCH_SCOPES.privateAPINetwork&&(t.data=I.searchUtil.getGroupedResultsInBuckets(t.data,I.GROUPING_BUCKET_SIZE)),a.searchResults=F.get(t,"data",[]),a.entityTypeCount=F.get(t,"meta.total",I.DEFAULT_COUNT_OBJECT),a.entityTypeCount.all=this.getAllCount(F.get(t,"meta.total",I.DEFAULT_COUNT_OBJECT)),a.entityTypeNavigationCount=F.get(s,"data",I.DEFAULT_COUNT_OBJECT),F.isEmpty(a.entityTypeNavigationCount)&&(a.entityTypeNavigationCount=a.entityTypeCount),a.correctedQueryText="",a.correctedQueryResultCount=I.DEFAULT_COUNT_OBJECT,a.showDidYouMean=!1,a.showSpellCorrectedResults=!1,0===i?(a.error=!0,a.errorType="no-results",_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,property:"search",label:`${r}-results`,action:"empty-view",traceId:this.traceId,teamId:(0,m.resolveStoreInstance)(h.default).teamId})):(F.get(t,"meta.spellCorrection.correctedQueryText","")&&F.get(t,`meta.spellCorrection.count.${r}`,0)&&(a.correctedQueryText=F.get(t,"meta.spellCorrection.correctedQueryText",""),a.correctedQueryResultCount=F.get(t,"meta.spellCorrection.count",I.DEFAULT_COUNT_OBJECT),a.entityTypeNavigationCount[r]>0&&(a.showDidYouMean=!0),0===a.entityTypeNavigationCount[r]&&(a.showDidYouMean=!1,a.showSpellCorrectedResults=!0,a.entityTypeNavigationCount=a.correctedQueryResultCount)),_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,property:"search",label:`${r}-results`,action:"view",value:a.entityTypeCount[r],traceId:this.traceId,teamId:(0,m.resolveStoreInstance)(h.default).teamId})),a.isLoading=!1,a.currentPageSize=I.CROSS_RANKED_SRP_PAGE_SIZE,i>I.SRP_ENTITY_COUNT*a.currentPageSize?a.hasMoreResults=!0:a.hasMoreResults=!1,I.ENABLE_SPELL_CORRECTION&&e&&e.correctedQuery){a.globalSearchQuery=this.state.correctedQueryText;const e="desktop"===window.SDK_PLATFORM?(0,j.getUrlParts)(y.default.getCurrentURL()).queryString:window.location.search;let t=new URLSearchParams(e);t.set("q",this.state.correctedQueryText);let r=Object.fromEntries(t);y.default.setURL("search",{},r),a.entityTypeNavigationCount=this.state.correctedQueryResultCount}this.setState(a,(()=>{var e,t,a;!this.isElementInViewport(null===(e=this.searchResultTitleRef)||void 0===e?void 0:e.current)&&(null===(t=this.searchResultTitleRef)||void 0===t||null===(a=t.current)||void 0===a||a.scrollIntoView({behavior:"smooth"}))}))}),(e=>{pm.logger.error("SearchContainer~searchData ",e),this.setState({isLoading:!1,error:!0,errorType:(0,m.resolveStoreInstance)(p.default).isSocketConnected?"server-error":"user-offline"})}))}loadMoreSearchData(){if(F.isEmpty(this.state.globalSearchQuery))return;let{currentPageSize:e,activeType:t,hasMoreResults:a,entityTypeCount:r,activeScope:s}=this.state;if(!a)return;let i=[];if("all"===t)for(let t in r)"all"!==t&&r[t]>e&&i.push(t);else r[t]>e&&i.push(t);if(0===i.length)return this.setState({hasMoreResults:!1});let n=this.getSearchQuery({pageSize:I.CROSS_RANKED_SRP_PAGE_SIZE,pageOffset:e,searchEntityTypes:i});n&&(this.state.correctedQueryText&&this.state.showSpellCorrectedResults&&(n.correctedQueryText=this.state.correctedQueryText),this.setState({loadingMore:!0}),I.SearchService.getSearchData(n).then((a=>{let i=F.get(a,"data",[]),n=this.state.searchResults;"all"===t&&s!==I.SEARCH_SCOPES.privateAPINetwork&&(i=I.searchUtil.getGroupedResultsInBuckets(i,I.GROUPING_BUCKET_SIZE)),this.requestState=F.get(a,"meta.state"),r=F.get(a,"meta.total"),r.all=this.getAllCount(r),this.setState({searchResults:F.concat(n,i),currentPageSize:e+I.CROSS_RANKED_SRP_PAGE_SIZE,loadingMore:!1,hasMoreResults:!0,entityTypeCount:r})}),(e=>{this.setState({loadingMore:!1})})))}getAllCount(e){return Object.keys(e).reduce((function(t,a){return t+e[a]}),0)}handleSearchChange(e){this.setState({globalSearchQuery:e},(()=>{this.searchData()}))}isElementInViewport(e){if(F.isUndefined(e)||null===e)return!1;const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}getSearchSubText(){let{activeType:e,entityTypeCount:t,globalSearchQuery:a,activeScope:r}=this.state,s=F.get(F.filter(O,{key:e}),"[0].label"),i="";const n=I.searchUtil.getScopeFilters(Q),l=F.get(F.find(n,["action",r]),"label","");return"all"===e?`${l}: ${t.all<10?"< 10":I.util.convertToUserFriendlyMetric(t.all)} results found for "${a}"`:("APIs"!==s&&(s=s.toLocaleLowerCase()),i=`${l}: ${t[e]<10?"< 10":I.util.convertToUserFriendlyMetric(t[e])} ${s} found for "${a}"`,"collection"===e&&(i=`${l}: ${t[[e]]<10?"< 10":I.util.convertToUserFriendlyMetric(t[e])} ${s} found for "${a}"`),i)}getCorrectedQueryData(){_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,label:`${this.state.globalSearchQuery}<>${this.state.correctedQueryText}`,property:"search",action:"click-did-you-mean",traceId:this.traceId,teamId:(0,m.resolveStoreInstance)(h.default).teamId}),this.searchData({correctedQuery:!0})}getSpellCorrectionSubtext(){let e=F.get(F.filter(O,{key:this.state.activeType}),"[0].label"),t="",a=I.searchUtil.getScopeFilters(Q),r=F.get(F.find(a,["action",this.state.activeScope]),"placeholder",""),i=F.get(this.state.correctedQueryResultCount,this.state.activeType,0);switch(t="all"===this.state.activeType||F.isUndefined(e)?`Showing ${i<10?"< 10":I.util.convertToUserFriendlyMetric(i)} results for "${this.state.correctedQueryText}"`:`Showing ${i<10?"< 10":I.util.convertToUserFriendlyMetric(i)} ${e.toLocaleLowerCase()} for "${this.state.correctedQueryText}"`,this.state.activeScope){case I.SEARCH_SCOPES.team:t+=" in your ";break;case I.SEARCH_SCOPES.public:t+=" in the "}return this.state.activeScope!==I.SEARCH_SCOPES.team&&this.state.activeScope!==I.SEARCH_SCOPES.public||(t+=r),t+=" instead",this.state.showDidYouMean?s.createElement(v.default,{type:"lead"},"Did you mean to search for ",s.createElement(A.default,{onClick:this.getCorrectedQueryData},s.createElement(v.default,{type:"link-primary",className:"italics-subheading-term"},this.state.correctedQueryText))):s.createElement(s.Fragment,null,s.createElement(v.default,{type:"lead"},'No results found for "',this.state.globalSearchQuery,'" '),s.createElement(v.default,{type:"lead"},t))}getCollectionChildEntityUrl(e){const{entityType:t,name:a,workspaces:r,id:s,documentType:i}=e.document,n=`${pm.dashboardUrl}/build`;if("collection"===t||"collection"===i)return e.folders?`${n}/folder/${e.folders.document.id}`:e.requests?`${n}/request/${e.requests.document.id}`:e.examples?`${n}/example/${e.examples.document.id}`:e.responses?`${n}/responses/${e.responses.document.id}`:`${n}/collection/${s}`}getRedirectUrl(e,t){let a;const{id:r,publicHandle:s,isPublic:i,publisherType:n,publisherId:l,entityType:o}=e.document;if("user"===t||"team"===t?a=`${window.postman_explore_url}/${s}`:"api"===t?a=`${pm.dashboardUrl}/build/api/${r}`:"workspace"===t?a=`${pm.dashboardUrl}/build/workspace/${r}`:"collection"===t&&(a=this.getCollectionChildEntityUrl(e)),i)switch(t){case"workspace":case"api":a=`${window.postman_explore_url}/v1/backend/redirect?type=${t}&id=${r}&publisherType=${n}&publisherId=${l}`;break;case"collection":switch(a=`${window.postman_explore_url}/v1/backend/redirect?type=${t}&id=${r}&publisherType=${n}&publisherId=${l}`,o){case"template":a=`${window.postman_explore_url}/v1/backend/redirect?type=template&id=${r}&documentation=true`;break;case"apinetworkentity":a=`${window.postman_explore_url}/v1/backend/redirect?type=apinetworkentity&id=${r}&documentation=true`}}return a}getAllResultLine(e,t){const a=["workspace","collection","api","team","user"],r=F.indexOf(a,t),s=F.slice(a,0,r);return e+F.reduce(s,((e,t)=>e+F.get(this.state,`${t}Data`,[]).length),0)}handleEntityRedirection(e,t,a,r,s){const{activeType:i}=this.state,{id:n}=e.document;if(_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,property:"search",label:`${i}-results`,action:"click",entityType:t,entityId:n,value:r+1,traceId:this.traceId,teamId:(0,m.resolveStoreInstance)(h.default).teamId}),e.isSpellCorrected&&_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,label:"spell-corrected-result-srp",property:"search",entityId:n,entityType:t,action:"click",value:r+1,traceId:this.traceId,teamId:(0,m.resolveStoreInstance)(h.default).teamId}),a.includes("/v1/backend/redirect")&&_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,property:"search",label:"api-network-endpoint-srp",action:"click",entityType:t,entityId:n,value:r+1,traceId:this.traceId,teamId:(0,m.resolveStoreInstance)(h.default).teamId}),"collection"===t&&(e.folders||e.requests||e.examples)){let t="",a="";e.folders?(t="folder",a=F.get(e,"folders.document.id","")):e.requests?(t="request",a=F.get(e,"requests.document.id","")):e.examples&&(t="example",a=F.get(e,"examples.document.id","")),""!==t&&""!==a&&_.default.addEventV2AndPublish({category:`search-${this.state.activeScope}`,label:"collection-child-result",property:this.property,entityId:a,entityType:t,action:"click",traceId:this.traceId})}if((0,m.resolveStoreInstance)(u.default).clear(),"browser"!==window.SDK_PLATFORM){if("team"===t||"user"===t){const{publicHandle:t,isPublic:a}=e.document;s.preventDefault(),(0,I.openPublicProfile)(t,a)}if(e.document.isPublic)return s.preventDefault(),s.stopPropagation(),(0,R.checkContextAndNavigate)(a)}}handleMobileFilterToggle(){this.setState({hideMobileFilters:!this.state.hideMobileFilters})}getSortDropdownValue(){return F.find(this.state.sortOptions,["value",this.state.activeSort])}getErrorSection(){const{errorType:e,globalSearchQuery:t}=this.state;let a={};return"no-results"===e||F.isEmpty(t)?(a.illustration=s.createElement(f.default,null),a.heading="No results found",a.text="Try checking your spelling, adjusting your filters, or trying a different search term."):"server-error"===e?(a.illustration=s.createElement(S.default,null),a.heading="Unable to search",a.text="We are having trouble searching right now."):"user-offline"===e?(a.illustration=s.createElement(b.default,null),a.heading="Unable to search as you are offline",a.text="You need to be online to carry out a search"):"query-text-exceeded-limit"===e&&(a.illustration=s.createElement(f.default,null),a.heading="Search query too long",a.text="Try searching with a shorter query"),s.createElement("div",{className:"search-result-section-empty"},s.createElement(E.default,{title:a.heading,description:a.text},a.illustration))}render(){var e;let{activeType:t,globalSearchQuery:a,entityTypeCount:r,activeScope:i,entityTypeNavigationCount:l,PRIVATE_NETWORK_ENABLED_FOR_ENTERPRISE:p}=this.state,u=(0,m.resolveStoreInstance)(h.default),y=g.default.getTeamName(u);y||I.SEARCH_SCOPES.personal,F.get(u,"name");Q=L.launchDarkly.getFlag(null===I.searchFeatureFlags||void 0===I.searchFeatureFlags||null===(e=I.searchFeatureFlags.PRIVATE_NETWORK_SEARCH)||void 0===e?void 0:e.key,!1)&&p;const f=[{title:s.createElement("div",{className:"pm-universal-search-sidebar-section__main-title-wrapper"},s.createElement("span",{className:"pm-universal-search-sidebar-section__main-title"},"Filter by"),s.createElement(C.default,{onClick:()=>{this.setState({hideMobileFilters:!0})},type:"tertiary",icon:"icon-action-close-stroke",className:n()("hide-for-computer","sidebar-filter-close")}))},u.isLoggedIn&&{title:"Scope",items:s.createElement(s.Fragment,null,I.searchUtil.getScopeFilters(Q).map(((e,a)=>{const r="team"===e.action&&"team"===t,l=e.action===I.SEARCH_SCOPES.privateAPINetwork&&!I.searchUtil.isEnabledForPrivateAPINetwork(t);return s.createElement("div",{key:a,className:n()("scope-item",i===e.action&&"scope-item-active",{"scope-item-disabled":r||l}),onClick:()=>{this.handleScopeChange(e.action),this.handleMobileFilterToggle()}},s.createElement(v.default,{color:"content-color-primary",typographyStyle:{fontSize:"text-size-m",fontWeight:""+(i===e.action?"text-weight-medium":"text-weight-regular")}},e.label))})))},{title:s.createElement("div",{className:"pm-universal-search-sidebar-section__type-title"},s.createElement("span",null,"Type")),items:s.createElement(s.Fragment,null,I.searchUtil.getTypeFilters().filter((e=>!(i===I.SEARCH_SCOPES.privateAPINetwork&&!I.searchUtil.isEnabledForPrivateAPINetwork(e.action))&&(i!==I.SEARCH_SCOPES.team||e.action!==I.SEARCH_SCOPES.team))).map(((e,a)=>{let r="";return r=i===I.SEARCH_SCOPES.team&&e.label===I.SEARCH_SCOPES.team?"":l[e.action],s.createElement(c.default,{count:r,icon:e.icon,id:e.action,isActive:e.action===t,isDisabled:0===r,key:a,name:e.label,onClick:e=>{this.handleTypeChange(e),this.handleMobileFilterToggle()},onClear:e=>{this.handleTypeChange("all"),this.handleMobileFilterToggle()}})})))}];return s.createElement(U.StyledSRPWrapper,null,s.createElement(s.Fragment,null,s.createElement("div",{className:"search-container",ref:e=>this.searchResultContainer=e,"data-testid":"search-container"},s.createElement(s.Fragment,null,s.createElement(x.default,{type:"row",maxWidth:"container-width-large",margin:"spacing-zero auto"},s.createElement(x.default,{type:"column",span:3,mobile:12,tablet:12,className:n()({"hide-mobile-filter":this.state.hideMobileFilters})},s.createElement(o.default,{sections:f,searchQuery:this.state.globalSearchQuery,isLCSearchEnabled:!0,activeScope:i,activeType:t,handleLearningCenterLinkClick:this.handleLearningCenterLinkClick})),s.createElement(x.default,{type:"column",span:9,mobile:12,tablet:12,padding:"spacing-m spacing-xxl spacing-xxl",className:n()({"hide-mobile-filter":!this.state.hideMobileFilters})},s.createElement("div",{className:"search-result"},this.state.isLoading?s.createElement(d.default,{className:"search-result-loader"}):s.createElement(s.Fragment,null,s.createElement("div",{className:"search-result-tile-and-sort-wrapper",ref:this.searchResultTitleRef},s.createElement("div",{className:"search-result-tile-and-subtext-wrapper"},s.createElement("h1",{className:"search-result-title"},"Search results"),a&&r[t]>0&&!this.state.showSpellCorrectedResults&&s.createElement(k.default,{className:"search-result-summary"},this.getSearchSubText())),"all"!==t&&"flow"!==t&&a&&r[t]>0&&!F.isEmpty(this.state.sortOptions)&&s.createElement("div",{className:"search-result-sort hide-for-mobile"},s.createElement("div",{className:"search-result-sort-label"},"Sort by"),s.createElement("div",{className:"search-result-sort-menu"},s.createElement(w.default,{onChange:this.handleSortChange,options:this.state.sortOptions,value:this.getSortDropdownValue(),isClearable:!1})))),I.ENABLE_SPELL_CORRECTION&&this.state.correctedQueryText&&s.createElement("div",{className:"search-result-spell-correction"},this.getSpellCorrectionSubtext()),s.createElement("div",{className:"search-result-section"},F.isEmpty(a)||this.state.error?this.getErrorSection():s.createElement("div",null,s.createElement(N.default,{results:this.state.searchResults,activeType:t,activeScope:i,getRedirectUrl:this.getRedirectUrl,handleEntityRedirection:this.handleEntityRedirection,handlePublisherNameEvent:this.handlePublisherNameEvent}))),this.state.loadingMore&&s.createElement(d.default,{className:"search-result-loading-more"}))))),this.state.hideMobileFilters&&s.createElement(C.default,{onClick:()=>{this.setState({hideMobileFilters:!1})},type:"secondary",text:"Filter",icon:"icon-action-filter-stroke",className:n()("hide-for-computer","sidebar-filter-toggle")})))))}})||r},"../../packages/search/search-results-page/src/components/Sidebar.js":function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a("../../node_modules/react/index.js"),s=a("../../node_modules/classnames/index.js"),i=a.n(s),n=a("../../packages/search/search-results-page/src/styled/StyledSidebar.js"),l=a("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),o=a("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),c=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-openWeb-stroke.js"),d=a("./appsdk/components/link/Link.js");function p(e){const[t,a]=(0,r.useState)(!1),s=(0,r.useCallback)((()=>{window.scrollY>=50?!t&&a(!0):a(!1)}));(0,r.useEffect)((()=>(document.addEventListener("scroll",s),()=>{document.removeEventListener("scroll",s)})),[]);const{activeScope:p,activeType:u}=e;return r.createElement(n.StyledSidebar,null,r.createElement("div",{className:i()({"search-sidebar-container":!0,"pm-universal-search-sidebar":!0,"pm-universal-search-sidebar--sticky":!0})},r.createElement("div",null,e.sections.map(((e,t)=>r.createElement("div",{className:"pm-universal-search-sidebar-section",key:t},r.createElement("h4",{className:"pm-universal-search-sidebar-section__title"},e.title),e.items)))),e.isLCSearchEnabled&&"all"===p&&"all"===u?r.createElement("div",{className:"search-sidebar-learning-center"},r.createElement(l.default,{direction:"column"},r.createElement(l.default,null,r.createElement(o.default,null,"Need help with a product feature?")),r.createElement(l.default,null,r.createElement(d.default,{to:`https://learning.postman.com/search/?q=${e.searchQuery}`,onClick:e.handleLearningCenterLinkClick,target:"__blank"},r.createElement(l.default,{inline:!0,alignItems:"center"},r.createElement(o.default,{type:"link-primary",typographyStyle:{fontSize:"text-size-s",fontWeight:"text-weight-regular"}},"Search in Postman Learning Center")),r.createElement(l.default,{inline:!0,alignItems:"center"},r.createElement(c.default,{color:"content-color-link",className:"lc-icon"})))))):null))}},"../../packages/search/search-results-page/src/components/TypeNavigationItem.js":function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a("../../node_modules/react/index.js"),s=a("../../node_modules/classnames/index.js"),i=a.n(s),n=a("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),l=a("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),o=a("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),c=a("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-close-stroke.js");function d(e){return r.createElement("div",{className:i()("category-navigation-item",{"category-navigation-item-active":e.isActive,disabled:e.isDisabled}),onClick:()=>{e.isActive?e.onClear():e.onClick(e.id)}},r.createElement(n.default,{justifyContent:"space-between",width:"100%",alignItems:"center"},r.createElement(n.default,{alignItems:"center"},r.createElement("span",{className:"category-navigation-item__icon"},r.createElement(o.default,{name:e.icon,color:e.isActive?"content-color-primary":"content-color-secondary"})),r.createElement("span",{className:"category-navigation-item__name"},r.createElement(l.default,{color:"content-color-primary",typographyStyle:{fontSize:"text-size-m",fontWeight:""+(e.isActive?"text-weight-medium":"text-weight-regular")}},e.name))),e.isActive?r.createElement(n.default,{alignItems:"center",justifyContent:"center"},r.createElement("div",{className:"category-navigation-item__deselect"},r.createElement(c.default,{color:"content-color-primary"}))):r.createElement("span",{className:"category-navigation-item__count"},e.count)))}},"../../packages/search/search-results-page/src/controllers/SearchController.js":function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=a("./appsdk/pages/BasePageController.js");class s extends r.default{constructor(...e){super(...e),this.onQueryParamsChange=()=>{}}setQueryParamChangeListener(e){this.onQueryParamsChange=e}didActivate({queryParams:e}){setTimeout((()=>{this.onQueryParamsChange&&this.onQueryParamsChange(e)}),100)}}},"../../packages/search/search-results-page/src/styled/StyledSRPList.js":function(e,t,a){a.r(t),a.d(t,{StyledSRPList:function(){return r}});const r=a("../../node_modules/styled-components/dist/styled-components.browser.esm.js").default.div`
  .pm-srp-list-wrapper{
    overflow-x: hidden;
    border-top: var(--border-width-default) var(--border-style-solid) var(--border-color-default);
  .pm-srp-list-item{
    display: flex;
    flex-direction: column;
    padding: var(--spacing-l) 0;

    &-request-info-separator{
      margin: 0 7px;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background-color: var(--content-color-secondary);
      display: inline-flex;
      vertical-align: middle;
    }

    &-entity-type{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: var(--spacing-s);
      &-icon{
        margin-right: var(--spacing-xs);
        display: flex;
      }
      &-text{
        font-weight: var(--text-weight-regular);
        font-size: var(--text-size-m);
        color: var(--content-color-secondary);
        letter-spacing: 1px;
      }
    }

    &-title{
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-s);

      &-request{
        margin-bottom:0;
      }

      &-link-group{
        display: flex;
        align-items: center;
      }

      &-team-logo{
        cursor: pointer;
        margin-right: var(--spacing-s);
        position: relative;
        top: -1px;
      }

      a{
        display: flex;
        align-items: center;
      }

      &-text{
        .pm-srp-title-text{
          max-width: 550px;
          overflow-x: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        display: flex;
        font-size: var(--text-size-l);
        margin-right: var(--spacing-xs);

        &-child-icon{
          margin-right: var(--spacing-xs);
          position: relative;
          display: flex;
        }

        &-fork-label{
          display: flex;
          align-items: center;
          margin: 0 var(--spacing-xs);
          font-size: var(--text-size-m);
          & > * {
            margin-right: var(--spacing-xs);
          }

          &-text{
          color: var(--content-color-primary);
          max-width: 550px;
          overflow-x: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          }
        }
      }
      &-tags{
        display: flex;
        align-items: center;
        top: 0px;
        position: relative;
        margin-left: var(--spacing-xs);

        & > * {
          margin-right: var(--spacing-xs);
        }
      }
    }

    &-description{
      color: var(--content-color-primary);
      font-size: var(--text-size-m);
      font-weight: var(--text-weight-regular);
      line-height: var(--line-height-m);
      margin-bottom: var(--spacing-s);

      .search-markdown{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }

    &-parent-collection{
      display: flex;
      margin-bottom: var(--spacing-s);
      font-size: var(--text-size-m);
      color: var(--content-color-primary)
    }

    &-meta{
      display: flex;
      align-items: center;
      color: var(--content-color-secondary);
      font-size: var(--text-size-m);
      font-weight: var(--text-weight-regular);
      flex-wrap: wrap;
      row-gap: var(--spacing-s);
      &-info{
        max-width: 300px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &-separator{
        margin: 0 7px;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: var(--content-color-secondary);
        display: inline-flex;
        vertical-align: middle;
      }
    }

    &-indented-0-request{
      padding-top: 0;
      padding-bottom: 0;

      &-last{
          padding-bottom: var(--spacing-l);
          padding-top: 0;
      }
    }

    &-indented-1{
      padding-left: var(--spacing-xl);
      padding-top: var(--spacing-l);

      &-request{
        padding-left: var(--spacing-xl);
        padding-top: 0;
        padding-bottom: 0;

        &-last{
          padding-left: var(--spacing-xl);
          padding-top: 0;
          padding-bottom: var(--spacing-l);
        }
      }
    }

    &-indented-2{
      padding-left: var(--spacing-xxxl);
      padding-top: var(--spacing-l);

      &-request{
        padding-left: var(--spacing-xxxl);
        padding-top: 0;
        padding-bottom: 0;

        &-last{
          padding-left: var(--spacing-xxxl);
          padding-top: 0;
          padding-bottom: var(--spacing-l);
        }
      }
    }
  }

  .search-markdown {
    display: inline-block;

    p {
      margin: 0;
    }

    b {
      font-weight: var(--text-weight-medium);
    }

    a {
      color: unset;
      cursor: default;
      pointer-events: none;
      text-decoration: none;
    }
  }
}

.pm-srp-list-title-text-fork-label-icon{
  position: relative;
}

`},"../../packages/search/search-results-page/src/styled/StyledSRPWrapper.js":function(e,t,a){a.r(t),a.d(t,{StyledSRPWrapper:function(){return s}});const r="1099px",s=a("../../node_modules/styled-components/dist/styled-components.browser.esm.js").default.div`

overflow-y: auto;
height: 100%;

.search-result{
  overflow-x: hidden;
}

.search-result-tile-and-sort-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 72px;
}

.search-result-section {
  .pm-h2 {
    display: inline-block;
    margin: var(--spacing-xl) 0 0 0;
    line-height: var(--spacing-xxl);
  }
}

.search-result-summary {
  font-weight: var(--text-weight-regular);
  font-size: var(--text-size-l);
  color: var(--content-color-secondary);
  line-height: var(--line-height-m);
  margin-bottom: var(--spacing-xl);
}

.search-result-spell-correction{
  margin-bottom: var(--spacing-xl);
  .italics-subheading-term{
    font-style: italic;
  }
}

.search-result-title {
  color: var(--content-color-primary);
  font-size: var(--text-size-xxxl);
  line-height: var(--line-height-xxxl);
  margin-bottom: var(--spacing-xs);
  display: inline-block;
}

.search-result-sort {
  display: flex;
  width: 195px;
  align-items: center;

  &-label{
    font-size: var(--text-size-m);
    margin-right: var(--spacing-s);
    font-weight: var(--text-weight-medium);
    color: var(--content-color-secondary);
    white-space: nowrap;
  }

  &-menu{
    width: 100%;
  }
}

.search-result-section-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  flex-direction: column;
}

.search-container {
  overflow-y: overlay;
  height: 100%;

  @media screen and (max-width: ${r}) {
    overflow-x: hidden;
    border-top: 1px solid var(--background-color-tertiary);
    .sidebar-filter-toggle{
      position: absolute;
      bottom: var(--spacing-xl);
      right: var(--spacing-xl);
      background-color: var(--background-color-primary);
      color: var(--content-color-secondary);
      width: 73px;
      height: var(--spacing-xxl);
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
    }

    .sidebar-filter-close{
      color: var(--content-color-secondary);
    }

    .hide-mobile-filter{
      display: none;
    }

  }

  @media screen and (min-width: ${r}) {
    .hide-for-computer{
      display: none;
    }
  }

  .search-result-loader.loading-indicator-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
  }

  .search-result-loading-more.loading-indicator-wrapper {
      display: flex;
      justify-content: center;
      margin-top: var(--spacing-s);
  }

}

.search-result-badge {
  display: inline-block;
  margin-left: var(--spacing-s);
  border-radius: ${"30px"};
  background-color: var(--background-color-tertiary);
  font-weight: var(--text-weight-medium);
  line-height: var(--line-height-s);
  padding: 0 var(--spacing-s);
  font-size: var(--text-size-s);
  color: var(--content-color-secondary);
}


.pm-loader-sm {
  &.search-result-loading-more {
    display: table;
    margin: auto;
  }
}

.search-markdown {
  display: inline-block;

  p {
    margin: 0;
  }

  b {
    font-weight: var(--text-weight-medium);
  }

  a {
    color: unset;
    cursor: default;
    pointer-events: none;
    text-decoration: none;
  }
}



`},"../../packages/search/search-results-page/src/styled/StyledSidebar.js":function(e,t,a){a.r(t),a.d(t,{StyledSidebar:function(){return s}});const r="1099px",s=a("../../node_modules/styled-components/dist/styled-components.browser.esm.js").default.div`

height: 100%;

.pm-universal-search-sidebar {
  padding: var(--spacing-xxl);
  box-sizing: border-box;
  border-right: none;
  height: 100%;
  overflow-y: auto;
  width: ${"320px"};



  &--sticky {
    position: fixed;
    top: ${"48px"};
  }

  @media screen and (max-width: ${r}) {
    position: relative;
    top: 0;
    width: 100%;
    padding: var(--spacing-s) var(--spacing-xxl);
    height: 100%;
  }

  &-section {
    margin-bottom: var(--spacing-xxl);

    &__main-title-wrapper{
      display: flex;
      justify-content: space-between;
      .sidebar-filter-close{
        margin-top: 6px;
      }
    }
    &__main-title {
      font-size: var(--text-size-l);
      color: var(--content-color-primary);
      @media screen and (max-width: ${r}) {
        display: block;
        padding-top: var(--spacing-m);
      }
    }

    &__title {
      margin: 0 0 var(--spacing-l) 0;
      color: var(--content-color-secondary);
      font-size: var(--text-size-m);
      line-height: var(--line-height-m);
      font-weight: var(--text-weight-medium);
    }

    &__type-title {
      display: flex;
      justify-content: space-between;
      color: var(--content-color-secondary);
    }

    &__clear-button {
      cursor: pointer;
      font-weight: var(--text-weight-regular);
      font-size: var(--text-size-s);
      line-height: var(--line-height-s);
      color: var(--content-color-link);
    }

    .disabled {
      opacity: .4;
      cursor: none;
      pointer-events: none;
    }
  }

  .category-navigation-item, .scope-item {
    height: var(--size-m);
    position: relative;
    padding: 0 var(--spacing-s);
    margin-left: calc(var(--spacing-s) * -1);
    border-radius: var(--border-radius-default);
    font-size: var(--text-size-m);
    margin-bottom: var(--spacing-xs);
    display: flex;
    align-items: center;

    &:hover {
      background-color: var(--background-color-tertiary);
      cursor: pointer;
    }

    &-active {
      background-color: var(--background-color-tertiary);
      color: var(--content-color-primary);
    }

    &-disabled {
      opacity: ${"0.4"};
      pointer-events: none;
      cursor: none;
    }
  }

  .category-navigation-item {
    &__icon {
      margin-right: var(--spacing-s);
      display: inline-flex;

    }

    &__count {
      position: absolute;
      right: var(--spacing-s);
      color: var(--content-color-secondary);
    }

    &__deselect{
      padding-top: 2px;
    }
  }
}

.search-sidebar-learning-center{
  margin-top: 48px;
  border-top: var(--border-width-default) solid var(--border-color-default);
  padding: var(--spacing-l) 0 var(--spacing-xxl);
  .lc-icon{
    position: relative;
    top: 4px;
  }
}
`}}]);