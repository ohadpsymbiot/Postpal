"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[47],{"./appsdk/offline/OfflinePageController.js":function(e,t,n){n.r(t);var o=n("./appsdk/pages/BasePageController.js");class s extends o.default{constructor(...e){super(...e),this.redirectURL=null}didActivate({queryParams:e}){this.redirectURL=e.redirectURL}}t.default=s},"./appsdk/offline/OfflinePageView.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var o=n("../../node_modules/react/index.js"),s=n("./collaboration/components/OfflineState/OfflineState.js"),i=n("./js/stores/StoreManager.js"),a=n("./js/stores/SyncStatusStore.js"),r=n("./js/services/NavigationService.js"),c=(n("./js/constants/SyncStatusConstants.js"),n("../../node_modules/mobx/lib/mobx.module.js"));class l extends o.Component{constructor(e){super(e)}async componentDidMount(){const e=(0,i.resolveStoreInstance)(a.default);this.connectivityReactionDisposer=(0,c.reaction)((()=>e.isSocketConnected),(e=>{e&&(this.connectivityReactionDisposer&&this.connectivityReactionDisposer(),r.default.transitionToURL(this.props.controller.redirectURL))}),{fireImmediately:!0})}componentWillUnmount(){this.connectivityReactionDisposer&&this.connectivityReactionDisposer()}render(){return o.createElement("div",{className:"offline-state-wrapper"},o.createElement(s.OfflineState,{heading:"Unable to load data as you're offline",description:"You can view your work and data once you’re back online."}))}}},"./collaboration/components/OfflineState/OfflineState.js":function(e,t,n){n.r(t),n.d(t,{OfflineState:function(){return u}});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/CheckInternetConnection.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),a=n("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const c={HEADING:"You are offline",DESCRIPTION:"Get online to load this data."},l=r.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,d=r.default.div`
    margin: 16px 0 8px;
  `,u=e=>{const{heading:t=c.HEADING,description:n=c.DESCRIPTION}=e;return o.createElement(l,null,o.createElement(s.default,null),o.createElement(d,null,o.createElement(i.default,{type:"h4",text:t})),o.createElement(a.default,{type:"body-medium",color:"content-color-secondary"},n))}}}]);