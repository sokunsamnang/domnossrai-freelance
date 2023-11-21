;/*FB_PKG_DELIM*/

__d("useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo",selections:[{alias:"viewer_image",args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},{kind:"Literal",name:"height",value:1e6},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:1e6}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometPhotoViewerPlaceholderPassthroughProps_photo"}],type:"Photo",abstractKey:null};e.exports=a}),null);
__d("ProfileCometAccountStatusNotice_data$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"ProfileCometAccountStatusNotice_data$normalization",selections:[{alias:null,args:null,concreteType:"IXAccountStatusProfileEntrypointModel",kind:"LinkedField",name:"profile_entrypoint",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status_value",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("ProfileCometAccountStatusNotice_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAccountStatusNotice_data",selections:[{alias:null,args:null,concreteType:"IXAccountStatusProfileEntrypointModel",kind:"LinkedField",name:"profile_entrypoint",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status_value",storageKey:null}],storageKey:null}],type:"IXAccountStatus",abstractKey:null};e.exports=a}),null);
__d("ProfileCometBioTextEditorPrivacyIconQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5009284572488938"}),null);
__d("ProfileCometBioTextEditorPrivacyIconQuery$Parameters",["ProfileCometBioTextEditorPrivacyIconQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometBioTextEditorPrivacyIconQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometBioTextEditorPrivacyIconQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useCometPhotoViewerPlaceholderPassthroughPropsWithURI",["CometRelay","useCometPhotoViewerPlaceholderPassthroughProps","useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var e=a.photo;a=a.productTagReferralCode;e=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo.graphql"),e);return c("useCometPhotoViewerPlaceholderPassthroughProps")({photo:e,placeholderImageSrc:e==null?void 0:(e=e.viewer_image)==null?void 0:e.uri,productTagReferralCode:a})}g["default"]=a}),98);
__d("CixAccountStatusVpvdFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743357");b=d("FalcoLoggerInternal").create("cix_account_status_vpvd",a);e=b;g["default"]=e}),98);
__d("XCometAccountStatusRootControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/account_status/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("ProfileCometAccountStatusNotice.react",["fbt","ix","CixAccountStatusVpvdFalcoEvent","CometCard.react","CometLink.react","CometRelay","CometRow.react","CometRowItem.react","Locale","ProfileCometAccountStatusNotice_data.graphql","TetraIcon.react","TetraTextPairing.react","XCometAccountStatusRootControllerRouteBuilder","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l,m=l||(l=d("react"));e=l;var n=e.useEffect,o=e.useRef,p=d("fbicon")._(i("492539"),24),q=d("fbicon")._(i("492491"),24),r={chevronIcon:{marginTop:"x1gslohp",$$css:!0},redirect:{":hover_backgroundColor":"x10d93hz",$$css:!0},redirectLink:{":hover_textDecoration":"x1lku1pv",$$css:!0},restrictedBackground:{backgroundColor:"x1py5hnd",$$css:!0},root:{marginBottom:"x1yztbdb",$$css:!0},statusIndicator:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",display:"x78zum5",paddingTop:"x1y1aw1k",paddingEnd:"x1sxyh0",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",width:"x1kky2od",$$css:!0},warningBackground:{backgroundColor:"x1rfik1p",$$css:!0}};function s(a){if(a===null)return null;var b,e;switch(a){case"WARNING":b=m.jsx(c("TetraIcon.react"),{icon:d("fbicon")._(i("502061"),16),size:16});e=r.warningBackground;break;default:b=m.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("538075"),16),size:16}),e=r.restrictedBackground}return m.jsx("div",{className:(k||(k=c("stylex")))(r.statusIndicator,e),children:b})}s.displayName=s.name+" [from "+f.id+"]";function a(a){a=a.data;a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometAccountStatusNotice_data.graphql"),a);var e=o(null);n(function(){if(e.current===!0)return;if(g!=="WARNING"&&g!=="RESTRICTED")return;e.current=!0;c("CixAccountStatusVpvdFalcoEvent").log(function(){return{event:"render",location:"profile_self",poi:"EP_PROFILE"}})});a=a==null?void 0:a.profile_entrypoint;if(a===null)return null;var f=a==null?void 0:a.status,g=a==null?void 0:a.status_value;if(g!=="WARNING"&&g!=="RESTRICTED")return null;a=s(g);var i=d("Locale").isRTL();return m.jsx("div",{className:"x1yztbdb",children:m.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:m.jsx("div",{className:"x10d93hz",children:m.jsx(c("CometLink.react"),{href:c("XCometAccountStatusRootControllerRouteBuilder").buildURL({location:"profile_self"}),onClick:function(){c("CixAccountStatusVpvdFalcoEvent").log(function(){return{event:"click",location:"profile_self",poi:"EP_PROFILE"}})},target:"_blank",xstyle:r.redirectLink,children:m.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:16,paddingTop:16,paddingVertical:16,children:[m.jsx(c("CometRowItem.react"),{children:a}),m.jsx(c("CometRowItem.react"),{expanding:!0,children:m.jsx(c("TetraTextPairing.react"),{headline:f,level:4,meta:h._("__JHASH__XDODsVB6EzW__JHASH__")})}),m.jsx(c("CometRowItem.react"),{children:m.jsx("div",{className:"x1gslohp",children:m.jsx(c("TetraIcon.react"),{"aria-label":h._("__JHASH__ojPYlPQM0eh__JHASH__"),color:"disabled",icon:i?q:p,size:24})})})]})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometLoadingOverlay.react",["CometProgressIndicator.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={partialOpacity:{opacity:"x1us6l5c",$$css:!0},root:{alignItems:"x6s0dn4",backgroundColor:"x2bj2ny",bottom:"x1ey2m1c",boxSizing:"x9f619",display:"x78zum5",end:"xds687c",left:null,right:null,justifyContent:"xl56j7k",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}};function a(a){a=a.solidBackground;return j.jsx("div",{className:(h||(h=c("stylex")))(k.root,(a==null||a===!1)&&k.partialOpacity),children:j.jsx(c("CometProgressIndicator.react"),{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometBioTextEditor.entrypoint",["JSResourceForInteraction","ProfileCometBioTextEditorPrivacyIconQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{queryReference:{options:{fetchPolicy:"network-only"},parameters:c("ProfileCometBioTextEditorPrivacyIconQuery$Parameters"),variables:{id:a}}}}},root:c("JSResourceForInteraction")("ProfileCometBioTextEditor.react").__setRef("ProfileCometBioTextEditor.entrypoint")};g["default"]=a}),98);
__d("ProfileCometTileImage.react",["CometImage.react","CometPressable.react","getRoundedCorners","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={borderBottomEndRadius:{borderBottomEndRadius:"x30kzoy",$$css:!0},borderBottomStartRadius:{borderBottomStartRadius:"x9jhf4c",$$css:!0},borderTopEndRadius:{borderTopEndRadius:"xgqcy7u",$$css:!0},borderTopStartRadius:{borderTopStartRadius:"x1lq5wgf",$$css:!0},fallbackImage:{backgroundColor:"x1vtvx1t",$$css:!0},image:{height:"x5yr21d",objectFit:"xl1xv1r",width:"xh8yej3",$$css:!0},imageContainer:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},root:{display:"x1lliihq",paddingBottom:"x1vrad04",position:"x1n2onr6",width:"xh8yej3",$$css:!0},shadow:{bottom:"x1ey2m1c",boxShadow:"xybwsfo",boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}};function a(a,b){var d=a.linkProps,e=a.onHoverIn,f=a.onHoverOut,g=a.onPress,i=a.onPressIn,l=a.onPressOut,m=a.roundCorner;a=a.src;m=(m=m)!=null?m:c("getRoundedCorners").CORNERS.NONE;return j.jsx(c("CometPressable.react"),{"aria-hidden":!0,display:"inline",linkProps:d,onHoverIn:e,onHoverOut:f,onPress:g,onPressIn:i,onPressOut:l,ref:b,xstyle:k.root,children:j.jsxs("div",{className:"x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy",children:[a!==""&&a!=="#"?j.jsx(c("CometImage.react"),{src:a,xstyle:[k.image,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.TOP_START)&&k.borderTopStartRadius,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.TOP_END)&&k.borderTopEndRadius,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.BOTTOM_START)&&k.borderBottomStartRadius,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.BOTTOM_END)&&k.borderBottomEndRadius]}):j.jsx("div",{className:(h||(h=c("stylex")))(k.image,k.fallbackImage,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.TOP_START)&&k.borderTopStartRadius,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.TOP_END)&&k.borderTopEndRadius,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.BOTTOM_START)&&k.borderBottomStartRadius,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.BOTTOM_END)&&k.borderBottomEndRadius)}),j.jsx("span",{className:(h||(h=c("stylex")))(k.shadow,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.TOP_START)&&k.borderTopStartRadius,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.TOP_END)&&k.borderTopEndRadius,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.BOTTOM_START)&&k.borderBottomStartRadius,c("getRoundedCorners").hasCorner(m,c("getRoundedCorners").CORNERS.BOTTOM_END)&&k.borderBottomEndRadius)})]})})}a.displayName=a.name+" [from "+f.id+"]";b=j.forwardRef(a);g["default"]=b}),98);
__d("ProfileCometFeaturedHighlightsEditDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5734486029922153"}),null);/*FB_PKG_DELIM*/
__d("LSOptimisticUnsendMessageStoredProcedure",["LSOptimisticUnsendMessage"],(function(a,b,c,d,e,f,g){function a(a,b){var d=[];d[0]=b.messageId;return c("LSOptimisticUnsendMessage").apply(void 0,d.concat([a]))}g["default"]=a}),98);
__d("MWXRadio.react",["cr:695","cr:744","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){if(b("cr:695")!=null)return i.jsx(b("cr:695"),babelHelpers["extends"]({},a));return b("cr:744")!=null?i.jsx(b("cr:744"),babelHelpers["extends"]({},a)):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSDialogPageLegacy.react",["CometProgressRingIndeterminate.react","CometRow.react","CometRowItem.react","TetraButton.react","TetraButtonGroup.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={content:{paddingTop:"xyamay9",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",position:"x1n2onr6",$$css:!0},footer:{display:"x78zum5",flexDirection:"x1q0g3np",justifyContent:"x13a6bvl",paddingBottom:"x1l90r2v",$$css:!0},noPaddingBottom:{paddingBottom:"x18d9i69",$$css:!0},textOnlyContent:{paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",$$css:!0}};function a(a,b){var d=a.callToActionGroupDirection;d=d===void 0?"backward":d;var e=a.callToActionGroupLayout;e=e===void 0?"default":e;var f=a.callToActionGroupWrap;f=f===void 0?"none":f;var g=a.children,i=a.hasTextOnlyContent,l=a.includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION;l=l===void 0?!0:l;var m=a.primaryCallToAction;a=a.secondaryCallToAction;d=m!=null?j.jsx(c("TetraButtonGroup.react"),{direction:d,expanding:e==="expanded"||a==null,paddingHorizontal:16,primary:{addOnPrimary:m.loading===!0?j.jsx(c("CometProgressRingIndeterminate.react"),{color:"disabled",size:16}):void 0,disabled:m.disabled===!0||m.loading,label:m.label,linkProps:m.linkProps,onPress:m.onPress,testid:m.testid,type:(m==null?void 0:m.type)==="destructive"?"fdsOverride_negative":"primary"},secondary:a!=null?{disabled:a.disabled,label:a.label,linkProps:a.linkProps,onPress:a.onPress,reduceEmphasis:e==="default",testid:a.testid}:null,wrap:f}):a!=null?j.jsx(c("CometRow.react"),{expanding:!0,paddingHorizontal:16,paddingTop:16,children:j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsx(c("TetraButton.react"),babelHelpers["extends"]({},a,{type:"secondary"}))})}):null;return j.jsxs("div",{ref:b,children:[j.jsx("div",{className:l===!0?(h||(h=c("stylex")))([k.content,i===!0&&k.textOnlyContent,i!==!0&&d!=null&&k.noPaddingBottom]):void 0,children:g}),d!=null?j.jsx("div",{className:"x78zum5 x1q0g3np x13a6bvl x1l90r2v",children:d}):void 0]})}a.displayName=a.name+" [from "+f.id+"]";b=j.forwardRef(a);g["default"]=b}),98);
__d("MWXDialogPageLegacy.react",["cr:6308","cr:6309","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,c){var d=a.callToActionGroupDirection;d=d===void 0?"backward":d;var e=a.callToActionGroupLayout,f=a.children,g=a.includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION;g=g===void 0?!0:g;a=babelHelpers.objectWithoutPropertiesLoose(a,["callToActionGroupDirection","callToActionGroupLayout","children","includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION"]);if(b("cr:6308"))return i.jsx(b("cr:6308"),babelHelpers["extends"]({callToActionGroupDirection:d,callToActionGroupLayout:e,includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION:g},a,{ref:c,children:f}));return b("cr:6309")?i.jsx(b("cr:6309"),babelHelpers["extends"]({callToActionGroupDirection:d,ref:c},a,{children:f})):null}a.displayName=a.name+" [from "+f.id+"]";c=i.forwardRef(a);g["default"]=c}),98);
__d("MWXMultiStepDialog.react",["cr:12314","cr:369","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,c){a.iconCssSelectorId;a.withDeprecatedStyles;a.withoutHeaderBottomBorder;var d=babelHelpers.objectWithoutPropertiesLoose(a,["iconCssSelectorId","withDeprecatedStyles","withoutHeaderBottomBorder"]);if(b("cr:369")!=null)return i.jsx(b("cr:369"),babelHelpers["extends"]({},a,{ref:c}));return b("cr:12314")!=null?i.jsx(b("cr:12314"),babelHelpers["extends"]({},d,{ref:c})):null}a.displayName=a.name+" [from "+f.id+"]";c=i.forwardRef(a);g["default"]=c}),98);
__d("MWDialogText.react",["MWDialogContentTypeValues","MWXText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.children,e=a.type;e=e===void 0?"body":e;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","type"]);switch(e){case"bodyLink":return i.jsx(c("MWXText.react"),babelHelpers["extends"]({type:d("MWDialogContentTypeValues").textBodyLinkType},a,{children:b}));case"headlineEmphasized":return i.jsx(c("MWXText.react"),babelHelpers["extends"]({type:d("MWDialogContentTypeValues").textHeadlineType},a,{children:b}));case"meta":return i.jsx(c("MWXText.react"),babelHelpers["extends"]({type:d("MWDialogContentTypeValues").textMetaType},a,{children:b}))}return i.jsx(c("MWXText.react"),babelHelpers["extends"]({type:d("MWDialogContentTypeValues").textBodyType},a,{children:b}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWXCardedDialog.react",["BaseHeadingContextWrapper.react","cr:12313","cr:278","cr:6308","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,d){var e=a.callToActionGroupDirection;e=e===void 0?"backward":e;var f=a.callToActionGroupLayout;f=f===void 0?"default":f;var g=a.callToActionGroupWrap;g=g===void 0?"none":g;var h=a.children,j=a.disableHeaderDivider,k=a.hasTextOnlyContent,l=a.includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION;l=l===void 0?!0:l;var m=a.primaryCallToAction,n=a.secondaryCallToAction,o=a.titleWithEntities;a=babelHelpers.objectWithoutPropertiesLoose(a,["callToActionGroupDirection","callToActionGroupLayout","callToActionGroupWrap","children","disableHeaderDivider","hasTextOnlyContent","includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION","primaryCallToAction","secondaryCallToAction","titleWithEntities"]);if(b("cr:278")&&b("cr:6308"))return i.jsx(b("cr:278"),babelHelpers["extends"]({},a,{disableHeaderDivider:j,ref:d,titleWithEntities:o,children:i.jsx(b("cr:6308"),{callToActionGroupDirection:e,callToActionGroupLayout:f,callToActionGroupWrap:g,hasTextOnlyContent:k,includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION:l,primaryCallToAction:m,secondaryCallToAction:n,children:i.jsx(c("BaseHeadingContextWrapper.react"),{children:h})})}));return b("cr:12313")?i.jsx(b("cr:12313"),babelHelpers["extends"]({},a,{callToActionGroupDirection:e,callToActionGroupWrap:g,hasTextOnlyContent:k,primaryCallToAction:m,ref:d,secondaryCallToAction:n,children:h})):null}a.displayName=a.name+" [from "+f.id+"]";e=i.forwardRef(a);g["default"]=e}),98);
__d("MWChatDeleteConversationDialog.react",["fbt","BroadcastChannelQPL","LSMessagingThreadTypeUtil","MWCMIsAnyCMThread","MWDialogText.react","MWXCardedDialog.react","MessengerWebUXLogger","WebUXLoggingSurfaceContextProvider","WebUserFlowLoggingDataContextProvider.react","cr:2580","qex","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react")),k=i.useContext,l=h._("__JHASH__k5wZauBOYLk__JHASH__");function m(a){var b=a.threadName;a=a.threadType;var e=c("MWCMIsAnyCMThread")(a),f=d("LSMessagingThreadTypeUtil").isJoinedSocialChannel(a),g=d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(a);b=b!=null?'"'+b+'"':l;a=d("LSMessagingThreadTypeUtil").isCMSubthread(a);if(a)return h._("__JHASH__6w20vLsid-t__JHASH__");e&&h._("__JHASH__9hXPGOpRfLG__JHASH__",[h._param("displayName",b)]);return f||g?h._("__JHASH__-rAxpN6HHn3__JHASH__"):h._("__JHASH__9Hx8h3Llibh__JHASH__")}function n(a){var b=a.threadName;a=a.threadType;var e=c("MWCMIsAnyCMThread")(a),f=d("LSMessagingThreadTypeUtil").isJoinedSocialChannel(a),g=d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(a),i=d("LSMessagingThreadTypeUtil").isSecure(a);b=b!=null?'"'+b+'"':l;a=d("LSMessagingThreadTypeUtil").isCMSubthread(a);if(a)return h._("__JHASH__TLMKgYhAr6X__JHASH__");if(e)return h._("__JHASH__033yHigwNMA__JHASH__",[h._param("displayName",b)]);if(f||g)return h._("__JHASH__IhWv8tuiVJQ__JHASH__");i&&!c("qex")._("1536")&&h._("__JHASH__03lnaXL-qcE__JHASH__");return h._("__JHASH__3GuNoaSICM-__JHASH__")}function a(a){var b=a.entryPoint,c=a.onClose,e=a.onConfirm;a=a.thread;return j.jsxs(d("WebUXLoggingSurfaceContextProvider").WebUXLoggingSurfaceContextProvider,{value:"thread_delete_sheet",children:[j.jsx(o,{entryPoint:b,onClose:c,onConfirm:e,thread:a}),">"]})}a.displayName=a.name+" [from "+f.id+"]";function o(a){var e=a.entryPoint,f=a.onClose,g=a.onConfirm;a=a.thread;var i=a.threadKey,l=a.threadType,o=d("LSMessagingThreadTypeUtil").isJoinedSocialChannel(a.threadType),p=d("LSMessagingThreadTypeUtil").isCMSubthread(l),q=d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(l),r=m(a),s=n(a),t=c("MessengerWebUXLogger")==null?void 0:c("MessengerWebUXLogger").useInteractionLogger(),u=k(d("WebUserFlowLoggingDataContextProvider.react").WebUserFlowLoggingDataContext),v=u.loggingDataRef,w=d("BroadcastChannelQPL").useLogDeleteChannelCanceled(a.threadType);u=function(){t==null?void 0:t(babelHelpers["extends"]({},v.current,{eventName:"thread_delete_canceled"})),w(),f==null?void 0:f()};a=c("MessengerWebUXLogger")==null?void 0:c("MessengerWebUXLogger").useImpressionLoggerRef(babelHelpers["extends"]({},v.current,{eventName:"thread_deleted_sheet_rendered"}));return j.jsx(c("MWXCardedDialog.react"),{hasTextOnlyContent:!0,onClose:u,primaryCallToAction:{label:o||q?h._("__JHASH__-rAxpN6HHn3__JHASH__"):p?h._("__JHASH__oybgddIc4mI__JHASH__"):h._("__JHASH__8HY4rDcPis2__JHASH__"),onPress:function(){g(),t==null?void 0:t(babelHelpers["extends"]({},v.current,{eventName:"thread_delete_confirmed"})),b("cr:2580")&&e!=null&&b("cr:2580")({threadKey:i,threadType:l},"delete_thread",e),f==null?void 0:f()},testid:"mw_delete_conversation_dialog_confirm",type:"primary"},ref:a,secondaryCallToAction:{label:h._("__JHASH__ddF1YsNwDg4__JHASH__"),onPress:u},testid:void 0,title:r,withCloseButton:!0,children:j.jsx(c("MWDialogText.react"),{children:s})})}o.displayName=o.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWXConfirmationDialog.react",["MWDialogText.react","MWXCardedDialog.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.body,d=a.cancel,e=a.confirm,f=a.onClose;a=a.title;return i.jsx(c("MWXCardedDialog.react"),{callToActionGroupLayout:"expanded",hasTextOnlyContent:!0,onClose:function(){return f(!1)},primaryCallToAction:{label:e,onPress:function(){f(!0)},testid:"mw-confirmation-dialog-confirm-button"},secondaryCallToAction:{label:d,onPress:function(){f(!1)},testid:"mw-confirmation-dialog-cancel-button"},size:"small",title:a,withCloseButton:!0,children:i.jsx(c("MWDialogText.react"),{children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("MWChatCSAMBlockDialogListItem.react",["ix","CometSkittleIcon.react","Locale","MWXIcon.react","MWXListCellPressable.react","MWXTextPairing.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.body,e=a.headline,f=a.icon;a=a.url;return j.jsx("div",{className:"x1iorvi4",children:j.jsx(c("MWXListCellPressable.react"),{addOnEnd:j.jsx(c("MWXIcon.react"),{color:"primary",icon:c("Locale").isRTL()?d("fbicon")._(h("492485"),16):d("fbicon")._(h("492533"),16)}),addOnStart:j.jsx(c("CometSkittleIcon.react"),{color:"gray",icon:f,size:36}),content:j.jsx(c("MWXTextPairing.react"),{body:b,bodyColor:"secondary",headline:e,level:4}),linkProps:{target:"_blank",url:a}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatCSAMBlockDialogList.react",["fbt","ix","MWChatCSAMBlockDialogListItem.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||d("react");function a(){return k.jsxs(k.Fragment,{children:[k.jsx(c("MWChatCSAMBlockDialogListItem.react"),{body:h._("__JHASH__lA_JJgIGpZS__JHASH__"),headline:h._("__JHASH__PT-t2JhzEtg__JHASH__"),icon:d("fbicon")._(i("502062"),20),url:"https://www.facebook.com/help/189165674568397/"}),k.jsx(c("MWChatCSAMBlockDialogListItem.react"),{body:h._("__JHASH__JfZpPSRCXYc__JHASH__"),headline:h._("__JHASH__htE1DgfaAjW__JHASH__"),icon:d("fbicon")._(i("508554"),20),url:"https://www.facebook.com/help/195478914971499/"}),k.jsx(c("MWChatCSAMBlockDialogListItem.react"),{body:h._("__JHASH__re5VmPK54Xy__JHASH__"),headline:h._("__JHASH__ane7Qp05Z-s__JHASH__"),icon:d("fbicon")._(i("479177"),20),url:"https://transparency.fb.com/en-gb/policies/community-standards/child-sexual-exploitation-abuse-nudity/"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("getCSAMShouldHidePicture",["I64"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){switch((h||(h=d("I64"))).to_int32(a.enforcements)){case 1:case 8192:case 4096:case 2048:case 1024:return!0;case 512:case 256:return!1}return!1}g["default"]=a}),98);
__d("MWChatCSAMBlockDialogHelpPage.react",["fbt","MWChatCSAMBlockDialogList.react","MWThreadPicture.react","MWXDialogPageLegacy.react","MWXRow.react","MWXRowItem.react","MWXText.react","MessengerWebUXLogger","getCSAMShouldHidePicture","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react"),k={items:{marginBottom:"x1e56ztr",marginStart:"xp7jhwk",marginLeft:null,marginRight:null,$$css:!0},picture:{marginTop:"xjv05ge",$$css:!0},subtext:{marginBottom:"x1e56ztr",marginTop:"xqui205",$$css:!0}};function a(a){var b=a.thread;a=a.threadLimit;a=c("getCSAMShouldHidePicture")(a);var d=c("MessengerWebUXLogger")==null?void 0:c("MessengerWebUXLogger").useImpressionLoggerRef({eventName:"csam_block_help_page_impression",threadKey:b.threadKey,threadType:b.threadType});return j.jsxs(c("MWXDialogPageLegacy.react"),{hasTextOnlyContent:!0,ref:d,children:[j.jsx(c("MWXRow.react"),{align:"center",xstyle:k.picture,children:j.jsx(c("MWXRowItem.react"),{children:j.jsx(c("MWThreadPicture.react"),{badgeSize:10,photoSize:60,showFacepiles:a,threadKey:b.threadKey})})}),j.jsx(c("MWXRow.react"),{align:"center",children:j.jsx(c("MWXRowItem.react"),{children:j.jsx(c("MWXText.react"),{type:"headlineEmphasized2",children:h._("__JHASH__wbX4o5HLoMQ__JHASH__")})})}),j.jsx("div",{className:"x1e56ztr xqui205",children:j.jsx(c("MWXText.react"),{color:"secondary",type:"body3",children:h._("__JHASH__rN8zkv98Tbj__JHASH__")})}),j.jsx("div",{className:"x1e56ztr xp7jhwk",children:j.jsx(c("MWChatCSAMBlockDialogList.react"),{})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("getCSAMBlockReason",["fbt","I64","MWXLink.react","XCometAccountStatusRootControllerRouteBuilder","gkx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=i||d("react"),l=c("gkx")("571")?"https://www.facebook.com/account_status":c("XCometAccountStatusRootControllerRouteBuilder").buildUri({}).path;function a(a){switch((j||(j=d("I64"))).to_int32(a.enforcements)){case 1:return h._("__JHASH__IkSDhzY3qPV__JHASH__");case 8192:return h._("__JHASH__gIkaS1c6JPJ__JHASH__",[h._implicitParam("=m2",k.jsx(c("MWXLink.react"),{href:l,target:"_blank",children:h._("__JHASH__tYxP6tqaqas__JHASH__")}))]);case 4096:return h._("__JHASH__MF9XPeGjQMl__JHASH__");case 512:return h._("__JHASH__WKgH-MlXAFF__JHASH__",[h._implicitParam("=m2",k.jsx(c("MWXLink.react"),{href:l,target:"_blank",children:h._("__JHASH__UqmZzkNUmFi__JHASH__")}))]);case 256:return h._("__JHASH__55FxZiB8YLt__JHASH__");case 2048:return h._("__JHASH__VY238TnDRnk__JHASH__",[h._implicitParam("=m2",k.jsx(c("MWXLink.react"),{href:l,target:"_blank",children:h._("__JHASH__w0PawBaXIig__JHASH__")}))]);case 1024:return h._("__JHASH__LL4j16P5JTZ__JHASH__")}return null}g["default"]=a}),98);
__d("MWChatCSAMBlockDialogLeavePage.react",["fbt","LSMessagingThreadTypeUtil","MAWRemoveGroupParticipantsUtils","MWChatCSAMBlockDialogHelpPage.react","MWPActor.react","MWXDialogPageLegacy.react","MWXText.react","MessengerWebUXLogger","getCSAMBlockReason","promiseDone","react","useMWPRemoveFromGroup","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react")),l=j.useState;function a(a){var b=a.pushPage,e=a.thread,f=a.threadLimit;a=(i||(i=c("useReStore")))();var g=d("LSMessagingThreadTypeUtil").isSecure(e.threadType),j=d("MWPActor.react").useActor(),m=c("useMWPRemoveFromGroup")(e.threadKey),n=d("MAWRemoveGroupParticipantsUtils").createLeaveGroupCallback(a,e.threadKey);a=l(!1);var o=a[0],p=a[1],q=function(){return g?n(j):m(j)},r=function(){p(!0);s==null?void 0:s({eventName:"csam_block_leave_group_click"});return q()},s=c("MessengerWebUXLogger")==null?void 0:c("MessengerWebUXLogger").useInteractionLogger();a=c("MessengerWebUXLogger")==null?void 0:c("MessengerWebUXLogger").useImpressionLoggerRef({eventName:"csam_block_leave_group_page_impression",threadKey:e.threadKey,threadType:e.threadType});return k.jsxs(c("MWXDialogPageLegacy.react"),{primaryCallToAction:{disabled:o,label:h._("__JHASH__iJoYYU1WkHb__JHASH__"),loading:o,onPress:function(){c("promiseDone")(r(),b(function(){return k.jsx(c("MWChatCSAMBlockDialogHelpPage.react"),{thread:e,threadLimit:f})},{withoutBackButton:!0}),function(){p(!1)})}},ref:a,children:[k.jsx(c("MWXText.react"),{color:"secondary",type:"body3",children:c("getCSAMBlockReason")(f)}),k.jsx("div",{className:"xyamay9",children:k.jsx(c("MWXText.react"),{color:"secondary",type:"meta4",children:h._("__JHASH__n9QfZbodxcy__JHASH__")})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatCSAMBlockDialog.react",["fbt","MWChatCSAMBlockDialogLeavePage.react","MWXMultiStepDialog.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.onClose,d=a.thread,e=a.threadLimit;return j.jsx(c("MWXMultiStepDialog.react"),{onClose:b,title:h._("__JHASH__Cu6sktcR-dZ__JHASH__"),withCloseButton:!0,children:function(a){return j.jsx(c("MWChatCSAMBlockDialogLeavePage.react"),{pushPage:a,thread:d,threadLimit:e})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);