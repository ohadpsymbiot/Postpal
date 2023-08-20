/*! For license information please see RelatedCollectionCBView.js.LICENSE.txt */
(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[162],{"../../packages/search/related-collections/node_modules/classnames/index.js":function(e,t){var o;!function(){"use strict";var l={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)){if(o.length){var n=s.apply(null,o);n&&e.push(n)}}else if("object"===r){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)l.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(o=function(){return s}.apply(t,[]))||(e.exports=o)}()},"../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/native.js":function(e,t,o){"use strict";o.r(t);const l="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);t.default={randomUUID:l}},"../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/regex.js":function(e,t,o){"use strict";o.r(t),t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},"../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/rng.js":function(e,t,o){"use strict";let l;o.r(t),o.d(t,{default:function(){return r}});const s=new Uint8Array(16);function r(){if(!l&&(l="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(s)}},"../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/stringify.js":function(e,t,o){"use strict";o.r(t),o.d(t,{unsafeStringify:function(){return r}});var l=o("../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/validate.js");const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function r(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}t.default=function(e,t=0){const o=r(e,t);if(!(0,l.default)(o))throw TypeError("Stringified UUID is invalid");return o}},"../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/v4.js":function(e,t,o){"use strict";o.r(t);var l=o("../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/native.js"),s=o("../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/rng.js"),r=o("../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/stringify.js");t.default=function(e,t,o){if(l.default.randomUUID&&!t&&!e)return l.default.randomUUID();const n=(e=e||{}).random||(e.rng||s.default)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){o=o||0;for(let e=0;e<16;++e)t[o+e]=n[e];return t}return(0,r.unsafeStringify)(n)}},"../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/validate.js":function(e,t,o){"use strict";o.r(t);var l=o("../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/regex.js");t.default=function(e){return"string"==typeof e&&l.default.test(e)}},"../../packages/search/related-collections/src/components/RelatedCollectionCBView.js":function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return z}});var l,s=o("../../node_modules/react/index.js"),r=o("../../packages/search/related-collections/node_modules/uuid/dist/esm-browser/v4.js"),n=o("../../node_modules/mobx/lib/mobx.module.js"),i=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),a=o("../../packages/search/related-collections/node_modules/classnames/index.js"),c=o.n(a),d=o("../../node_modules/@postman/aether/esmLib/src/components/BlankState/BlankState.js"),m=o("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),u=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/InternalServerError.js"),p=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoCollection.js"),h=o("../../node_modules/@postman/aether/esmLib/src/components/Badge/Badge.js"),g=o("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),f=o("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),v=o("./js/components/base/Buttons.js"),b=o("./js/stores/CurrentUserStore.js"),_=o("./runtime-repl/environment/datastores/ActiveEnvironmentStore.js"),y=o("./js/stores/EditorStore.js"),x=o("./js/stores/StoreManager.js"),w=(o("./js/stores/SearchStore.js"),o("../../packages/search/universal-search/index.js")),k=o("./js/components/base/LoadingIndicator.js"),C=o("./appsdk/components/link/Link.js"),E=o("./js/modules/services/AnalyticsService.js"),j=o("./runtime-repl/collection/_api/CollectionInterface.js"),I=o("../../packages/search/related-collections/src/components/RelatedCollectionListItem.js"),S=o("../../packages/search/related-collections/src/constants.js"),L=o("./js/services/NavigationService.js"),N=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),R=o("../../packages/search/related-collections/src/styled/StyledRelatedCollectionsWrapper.js"),T=o("../../node_modules/lodash/lodash.js");const U=N.default.p`
  font-size: ${e=>e.theme["text-size-m"]};
  line-height: 1.6;
  color: ${e=>e.theme["content-color-secondary"]};
  padding: 0px ${e=>e.theme["spacing-xl"]}
  `;let z=(0,i.observer)(l=class extends s.Component{constructor(e){super(e),this.handleCollectionFork=(e,t)=>{if(E.default.addEventV2AndPublish({category:"related",action:"fork",label:"collection-forked",value:t,entityType:"collection",entityId:e,traceId:this.traceId}),E.default.addEventV2AndPublish({category:"explore",action:"initiate-fork",label:"sidebar-recommendations",entityType:"collection",entityId:e,traceId:this.traceId}),(0,x.resolveStoreInstance)(b.default).isLoggedIn)return(0,j.collectionActions)(e,"fork",null,{origin:"request-contextbar"});pm.mediator.trigger("showSignInModal",{type:"fork",origin:"fork_collection_modal"})},this.state={isLoading:!0,relatedCollections:[],loadError:!1,loadEmpty:!1,hasMoreResults:!1,loadingMore:!1,requestUrl:"",currentOffset:0},this.traceId="",this.fetchRelatedCollections=T.debounce(this.fetchRelatedCollections.bind(this),1500),this.sanitizedCountPlaceholder=this.sanitizedCountPlaceholder.bind(this),this.getCollectionUrl=this.getCollectionUrl.bind(this),this.requestOrigin="contextBarRecommendation",this.handleCollectionFork=this.handleCollectionFork.bind(this),this.sanitizedCountPlaceholder=this.sanitizedCountPlaceholder.bind(this),this.hideForkInfo=!0,this.relatedCollectionsList=s.createRef(),this.handleScroll=T.debounce(this.handleScroll.bind(this),1e3)}componentDidMount(){this.traceId=(0,r.default)();let{type:e,id:t}=this.props.contextData;E.default.addEventV2AndPublish({category:"related",action:"initiate",entityType:e,entityId:t,traceId:this.traceId}),this.disposePreviewReaction=(0,n.reaction)((()=>{let e=(0,x.resolveStoreInstance)(y.default).find(this.props.contextData.editorId),t=(e&&e.model).resourceToSave(),o=(0,x.resolveStoreInstance)(_.default).id;return t.url+o}),(()=>{this.fetchRelatedCollections(this.props.contextData.editorId)})),this.fetchRelatedCollections(this.props.contextData.editorId)}componentWillUnmount(){this.disposePreviewReaction&&this.disposePreviewReaction(),T.invoke(this.relatedCollectionsList,"removeEventListener","scroll")}handleScroll(){this.relatedCollectionsList.scrollTop+this.relatedCollectionsList.clientHeight>=this.relatedCollectionsList.scrollHeight&&!this.state.loadingMore&&this.state.hasMoreResults&&this.loadMoreCollections()}loadMoreCollections(){this.setState({loadingMore:!0});const{requestUrl:e,currentOffset:t}=this.state;w.SearchService.getRequestRelatedCollections(e,this.traceId,this.props.contextData.parentCollectionUid,this.requestOrigin,S.RELATED_COLLECTIONS_CB_COUNT,t).then((e=>{let o=T.get(e,"data",[]),l=this.state.relatedCollections;this.setState({relatedCollections:T.concat(l,o),hasMoreResults:e.meta.total>t+S.RELATED_COLLECTIONS_CB_COUNT,currentOffset:t+S.RELATED_COLLECTIONS_CB_COUNT,loadingMore:!1})})).catch((e=>{pm.logger.error("RelatedCollectionCBView~loadMoreCollections: Failed to fetch more related collections"),this.setState({loadingMore:!1})}))}sanitizedCountPlaceholder(e,t){return T.isUndefined(e)&&(e=0),`${e=w.util.convertToUserFriendlyMetric(e)} ${t}`}fetchRelatedCollections(e){this.props.controller.getResolvedRequest(e).then((e=>{if(e===this.state.requestUrl)throw new Error("sameRequest");return this.setState({isLoading:!0,loadError:!1,relatedCollections:[],requestUrl:e}),""===e||0===e.length?{}:w.SearchService.getRequestRelatedCollections(e,this.traceId,this.props.contextData.parentCollectionUid,this.requestOrigin,S.RELATED_COLLECTIONS_CB_COUNT)})).then((e=>{let t=T.get(e,"data",[]);if(0===t.length)this.setState({relatedCollections:[],isLoading:!1});else{let{type:o,id:l}=this.props.contextData;E.default.addEventV2AndPublish({category:"related",action:"view",value:t.length,entityType:o,entityId:l,traceId:this.traceId}),this.setState({relatedCollections:t,isLoading:!1,currentOffset:S.RELATED_COLLECTIONS_CB_COUNT,hasMoreResults:e.meta.total>S.RELATED_COLLECTIONS_CB_COUNT},(()=>{T.isFunction(this.relatedCollectionsList.addEventListener)&&this.relatedCollectionsList.addEventListener("scroll",this.handleScroll)}))}})).catch((e=>{"sameRequest"===!e.message?(pm.logger.error("RelatedCollectionCBView~fetchRelatedCollections: Failed to fetch related collections"),this.setState({relatedCollections:[],isLoading:!1,loadError:!0})):this.setState({isLoading:!1})}))}getCollectionUrl(e){const{publisherHandle:t,workspaces:o}=e,l=T.get(o,"0.slug");return t&&l?`${window.postman_explore_url}/${t}/workspace/${l}/collection/${e.id}`:`${window.postman_explore_url}/v1/backend/redirect?type=${e.entityType}&id=${e.id}&publisherType=${e.publisherType}&publisherId=${e.publisherId}`}getCollectionList(e){if(0===e.length)return;let{type:t,id:o}=this.props.contextData;return s.createElement("div",{className:"related-collections-cb__list",ref:e=>this.relatedCollectionsList=e},e.map(((e,t)=>{const o=e.document,l=this.getCollectionUrl(o);return s.createElement(I.default,{key:t,collection:o,redirectUrl:l,sanitizedCountPlaceholder:this.sanitizedCountPlaceholder,hideForkInfo:this.hideForkInfo,traceId:this.traceId,contextData:this.props.contextData,handleCollectionFork:this.handleCollectionFork,index:t})})),this.state.loadingMore&&s.createElement("div",{className:"related-collections-cb__list-load-more"},s.createElement(k.default,null)),s.createElement("div",{className:"related-collections-cb__list-footer"},s.createElement("div",null,"Explore more collections on the "),s.createElement("div",{type:"link-subtle"},s.createElement(C.default,{to:`${window.postman_explore_redirect_url}/collections`,className:"lead-link",onClick:()=>{E.default.addEventV2AndPublish({category:"related",action:"click",label:"explore",entityType:t,entityId:o,traceId:this.traceId})}},"Public API Network")),"."))}getErrorState(){let e=this.props.contextData.editorId;return s.createElement("div",{className:"related-collections-cb__error"},s.createElement(d.default,{className:"related-collections-cb__error-state-component",title:"Couldn't load related collections",description:"Couldn't load related collections. Try reloading.",primaryAction:s.createElement(m.default,{type:"outline",text:"Reload",onClick:()=>this.fetchRelatedCollections(e)})},s.createElement(u.default,null)))}getEmptyState(){return s.createElement("div",{className:"related-collections-cb__empty-state"},s.createElement(d.default,{className:"related-collections-cb__empty-state-component",title:"No related collections",description:s.createElement(U,null,"Try a different request or explore collections on the ",s.createElement(m.default,{type:"monochrome-plain",onClick:()=>{L.default.openURL(`${window.postman_explore_redirect_url}/collections`)},text:"Public API Network"}))},s.createElement(p.default,null)))}render(){let{isLoading:e,relatedCollections:t,loadError:o}=this.state;return s.createElement(R.default,null,s.createElement("div",{className:"related-collections-cb"},s.createElement("div",{className:c()("right-context-bar-header",this.props.className)},s.createElement("span",{className:"right-context-bar__title"},this.props.title,s.createElement(h.default,{status:"info",text:"beta",className:"related-collections-cb-badge"})),s.createElement("div",{className:"right-context__actions-container"},this.props.children,s.createElement(v.Button,{className:"context-bar-actions__button",type:"tertiary",onClick:this.props.onClose},s.createElement(f.default,{name:"icon-action-close-stroke",className:"right-context-bar__close-icon"})))),e?s.createElement("div",{className:"related-collections-cb__loader"},s.createElement(k.default,{className:"related-collections-cb__loader-item"})):o?this.getErrorState():t.length>0?s.createElement("div",{className:"related-collections-cb__container"},s.createElement("div",{className:"related-collections-cb__subheading"},s.createElement(g.default,{type:"body-medium",color:"content-color-secondary"},"Discover public collections that best match your request")),this.getCollectionList(t)):this.getEmptyState()))}})||l},"../../packages/search/related-collections/src/components/RelatedCollectionListItem.js":function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return g}});var l=o("../../node_modules/react/index.js"),s=o("../../node_modules/@postman/aether/esmLib/src/components/Avatar/Avatar.js"),r=o("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),n=o("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-descriptive-team-stroke.js"),i=o("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-descriptive-user-stroke.js"),a=o("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),c=o("./appsdk/components/link/Link.js"),d=o("./js/modules/services/AnalyticsService.js"),m=o("./version-control/components.js"),u=o("./js/stores/StoreManager.js"),p=o("./js/stores/SyncStatusStore.js"),h=o("../../node_modules/lodash/lodash.js");function g(e){const{collection:{id:t,name:o,publisherName:g,workspaces:f,views:v,forkLabel:b,publisherLogo:_,publisherHandle:y,publisherType:x},redirectUrl:w,index:k}=e;return l.createElement("div",{className:"related-collections-cb__list-item"},l.createElement("div",{className:"related-collections-cb__list-item-details"},l.createElement("div",{className:"related-collections-cb__list-item-profile-icon"},_?l.createElement(c.default,{to:`${window.postman_explore_url}/${y}`,target:"_blank"},l.createElement(s.default,{size:"xs",className:"pm-srp-list-item-title-team-logo",src:_})):"team"===x?l.createElement(c.default,{to:`${window.postman_explore_url}/${y}`,target:"_blank"},l.createElement(n.default,{size:"xs",className:"pm-srp-list-item-title-team-logo"})):l.createElement(c.default,{to:`${window.postman_explore_url}/${y}`,target:"_blank"},l.createElement(i.default,{size:"xs",className:"pm-srp-list-item-title-team-logo"}))),l.createElement("div",{className:"related-collections-cb__list-item-info"},l.createElement("div",{className:"related-collections-cb__list-item-title-wrapper"},l.createElement(c.default,{to:w,target:"browser"===window.SDK_PLATFORM?"_blank":"_self",onClick:o=>{d.default.addEventV2AndPublish({category:"related",action:"view-collection",value:k,label:"public-collection",entityType:"collection",entityId:t,traceId:e.traceId})}},l.createElement(r.default,{color:"content-color-primary"},l.createElement(r.default,{type:"link-subtle",className:"related-collections-cb__list-item-title",isTruncated:!0},o)))),l.createElement("div",{className:"related-collections-cb__list-item-meta"},l.createElement("div",{className:"related-collections-cb__list-item-meta-row"},b&&l.createElement("div",{className:"related-collections-cb__list-item-fork-label"},l.createElement(a.default,{name:"icon-action-fork-stroke-small",color:"content-color-secondary",size:"small",className:"related-collections-cb__list-item-fork-label-icon"}),l.createElement("div",{className:"related-collections-cb__list-item-fork-label-text"},b))),l.createElement("div",{className:"related-collections-cb__list-item-meta-row"},g&&l.createElement(c.default,{to:`${window.postman_explore_url}/${y}`,target:"_blank"},l.createElement(r.default,{type:"body-medium",color:"content-color-secondary",className:"related-collections-cb__list-item-meta-publisher",isTruncated:!0},g))),l.createElement("div",{className:"related-collections-cb__list-item-meta-row"},l.createElement(a.default,{name:"icon-action-view-stroke-small",color:"content-color-tertiary",size:"small",className:"related-collections-cb__list-item-meta-row-icon"}),l.createElement(r.default,{type:"body-medium",color:"content-color-secondary"},e.sanitizedCountPlaceholder(v,"views")))))),l.createElement("div",{className:"related-collections-cb__list-item-fork-button"},l.createElement(m.ForkButton,{modelId:t,model:"collection",origin:"request-contextbar",disabled:!(0,u.resolveStoreInstance)(p.default).isSocketConnected,disabledTooltip:"Get online to create a fork or view existing forks.",className:"related-collections-cb__list-item-fork-button",onFork:()=>e.handleCollectionFork(t,k),workspaceId:h.get(f,"0.id")})))}},"../../packages/search/related-collections/src/styled/StyledRelatedCollectionsWrapper.js":function(e,t,o){"use strict";o.r(t);const l=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js").default.div`
height: 100%;
.related-collections-cb {
  height: 100%;
  &-badge{
    margin-left: var(--spacing-s);
  }

  &__subheading{
    padding-right: var(--spacing-xxxl);
    margin-bottom: var(--spacing-s);
  }

  &__container{
    display: flex;
    flex-direction: column;
    padding: var(--spacing-zero) var(--spacing-s);
    height: 100%;
    width: 100%;

    .related-collections-cb__list{
      width: 98%;
      height: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      font-size: var(--text-size-m);
      padding-bottom: 64px;
      &-item{
        display: flex;
        padding-top: var(--spacing-xl);
        padding-bottom: var(--spacing-xl);
        border-bottom: var(--border-width-default) var(--border-style-solid) var(--border-color-default);
        justify-content: space-between;

        &-info{
          width: 92%;
        }

        &-profile-icon{
          padding-right: var(--spacing-s);
          padding-top: 1px;
        }

        &-title{
          display: block;
          font-weight: var(--text-weight-medium);
          text-decoration: none;
        }

        &-fork-label{
          display: flex;
          color: var(--content-color-primary);
          &-icon{
            margin: var(--spacing-xs) var(--spacing-xs) var(--spacing-xs) 0;
          }
          &-text{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }

        &-details{
          overflow: hidden;
          display: flex;

          .related-collections-cb__list-item-meta{
            &-row{
              margin-top: var((--spacing-xs));
              &-icon {
                margin-right: var(--spacing-xs);
                position: relative;
                top: 2px;
              }
            }
            &-publisher{
              padding-bottom: 2px;
              &:hover{
                color: var(--content-color-link);
                text-decoration: underline;
              }
            }
          }
        }
      }

      &-load-more{
        min-height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &-footer{
        margin-top: var(--spacing-xl);
        display: flex;
        flex-wrap: wrap;
        color: var(--content-color-secondary);
        font-size: var(--text-size-m);
        font-weight: var(--text-weight-regular);
        line-height: var(--line-height-m);
        margin-bottom: var(--spacing-l);
      }

      .lead-link{
        color: var(--content-color-secondary);
        font-size: var(--text-size-m);
        font-weight: var(--text-weight-regular);
        line-height: var(--line-height-m);
        text-decoration: underline;
      }

      .lead-link:hover{
        color: var(--content-color-link)
      }
    }
  }

  &__loader{
    display: flex;
    width: 100%;
    height: 85vh;
    justify-content: center;
    align-items: center;
  }

  &__error{
    &-component{
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
      &-message-heading{
        font-size: var(--text-size-l);
        font-weight: var(--text-weight-medium);
        line-height: var(--line-height-m);
        margin-bottom: var(--spacing-s);
        color: var(--content-color-primary);
      }
      &-message-subheading{
        color: var(--content-color-secondary);
        font-size: var(--text-size-m);
        font-weight: var(--text-weight-regular);
        line-height: var(--line-height-m);
        margin-bottom: var(--spacing-l);
        margin-top: var(--text-size-l);
      }

  }

  &__empty-state{
    &-component{
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;

    &-heading{
      font-size: var(--text-size-l);
      font-weight: var(--text-weight-medium);
      line-height: var(--line-height-m);
      margin-bottom: var(--spacing-s);
      margin-top: var(--spacing-m);
      color: var(--content-color-primary);
    }
    &-subheading{
      display: flex;
      flex-wrap: wrap;
      margin-right: var(--spacing-l);
      color: var(--content-color-secondary);
      font-size: var(--text-size-m);
      font-weight: var(--text-weight-regular);
      line-height: var(--line-height-m);
      justify-content: center;
    }

    .lead-link{
      color: var(--content-color-secondary);
      font-size: var(--text-size-m);
      font-weight: var(--text-weight-regular);
      line-height: var(--line-height-m);
      text-decoration: underline;
    }

    .lead-link:hover{
      color: var(--content-color-link)
    }
  }
}

.related-collections-callout{
  background-color: var(--background-color-primary);
  padding: var(--spacing-s);
  &-header{
    display: flex;
    justify-content: space-between;
    &-title{
      display: flex;
      align-items: center;
    }
    &-close{
      display: flex;
      align-items: center;
    }
  }

  &-content{
    margin-bottom: var(--spacing-l);
  }
  &-view-button{
    margin-right: var(--spacing-s);
    margin-bottom: var(--spacing-s);
  }
}

.related-collection-tooltip-wrapper{
  max-width: 324px;
  .tooltip-wrapper{
    background-color: var(--background-color-primary);
  }
}


`;t.default=l},"./version-control/components.js":function(e,t,o){"use strict";o.r(t),o.d(t,{ForkButton:function(){return l.default}});var l=o("./version-control/common/ForkButton/index.js")}}]);