;/*FB_PKG_DELIM*/

__d("MWChatStateV2IsFlyoutOpen",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.openFlyoutWatermark!==0}f.isFlyoutOpen=a}),66);
__d("MWChatHeadPicture.react",["ix","MDSGlimmer.react","MWChatFacepile.react","MWChatProfile.react","MWXIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l={chatHeadIntroAnim:{animationDirection:"xpz12be",animationDuration:"x4b6v7d",animationFillMode:"x10e4vud",animationIterationCount:"x1v7wizp",animationName:"xxjl4ni",animationTimingFunction:"x84okpw",$$css:!0},dropShadow:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",boxShadow:"x1qeybcx",":hover_boxShadow":"x19xcq9t",$$css:!0},headGlimmer:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xsdox4t",position:"x1n2onr6",width:"x1useyqa",$$css:!0},withBackground:{backgroundColor:"xcrg951",$$css:!0},withOverflowBackground:{alignItems:"x6s0dn4",backgroundColor:"xcrg951",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",height:"xsdox4t",justifyContent:"xl56j7k",width:"x1useyqa",$$css:!0}};function a(a){var b=a.children,e=a.images,f=a.noDropShadow;f=f===void 0?!1:f;a=a.noFacepile;a=a===void 0?!1:a;var g=e.length;return g!==1?g!==0?a?k.jsxs("div",{className:(i||(i=c("stylex")))(f?!1:l.dropShadow,l.withOverflowBackground),children:[k.jsx(c("MWXIcon.react"),{icon:d("fbicon")._(h("481920"),24)}),b]}):k.jsx(c("MWChatFacepile.react"),{borderBetweenImages:!1,firstParticipantURI:e[0],secondParticipantURI:e[1],shadow:!0,size:48,children:b}):k.jsx("div",{className:"xcrg951 x14yjl9h xudhj91 x18nykt9 xww2gxu xsdox4t x1n2onr6 x1useyqa",children:k.jsx(c("MDSGlimmer.react"),{index:1,children:b})}):k.jsx("div",{className:(i||(i=c("stylex")))(f?!1:l.dropShadow,l.chatHeadIntroAnim),children:k.jsx(c("MWChatProfile.react"),{size:48,src:e[0],children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2ChatHeadButton.react",["MWXPressable.react","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h.forwardRef;var j={button:{appearance:"xjyslct",backgroundColor:"xjbqb8w",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xsdox4t",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",transitionDuration:"xx6bhzk",transitionProperty:"x11xpdln",transitionTimingFunction:"x9lcvmn",width:"x1useyqa",$$css:!0},container:{alignItems:"x6s0dn4",display:"x78zum5",height:"xsdox4t",justifyContent:"xl56j7k",marginBottom:"xyorhqc",position:"x1n2onr6",width:"x1useyqa",$$css:!0},containerOld:{alignItems:"x6s0dn4",display:"x78zum5",height:"xsdox4t",justifyContent:"xl56j7k",marginBottom:"xyorhqc",position:"x10l6tqk",width:"x1useyqa",$$css:!0}};function a(a){var b=a.children;a=a.style;return c("gkx")("3599")?i.jsx("div",{className:"x6s0dn4 x78zum5 xsdox4t xl56j7k xyorhqc x1n2onr6 x1useyqa",children:b}):i.jsx("div",{className:"x6s0dn4 x78zum5 xsdox4t xl56j7k xyorhqc x10l6tqk x1useyqa",style:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";function b(a,b){var d=a.ariaDescribedBy,e=a.ariaLabel,f=a.children,g=a.onFocusChange,h=a.onHoverChange,k=a.onHoverIn,l=a.onHoverOut,m=a.onPress,n=a.onPressIn;a=a.testid;return i.jsx(c("MWXPressable.react"),{"aria-describedby":d,"aria-label":e,onFocusChange:g,onHoverChange:h,onHoverIn:k,onHoverOut:l,onPress:m,onPressIn:n,overlayDisabled:!0,ref:b,testid:void 0,xstyle:j.button,children:f})}b.displayName=b.name+" [from "+f.id+"]";d=e(b);g.MWV2ChatHeadButtonContainer=a;g.MWV2ChatHeadButton=d}),98);
__d("MWV2ChatHeadCloseButton.react",["fbt","ix","MWXIcon.react","MWXPressable.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||d("react"),l={closeButton:{alignItems:"x6s0dn4",backgroundColor:"xcrg951",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",end:"x1adoouj",left:null,right:null,height:"x1qx5ct2",justifyContent:"xl56j7k",opacity:"xg01cxk",position:"x10l6tqk",top:"x1fo6t33",transform:"x1f85oc2",transitionDuration:"x19bguh7",transitionProperty:"x6o7n8i",width:"xw4jnvo",$$css:!0},visible:{opacity:"x1hc1fzr",transform:"x3oybdh",$$css:!0}};function a(a){var b=a.isVisible,e=a.onFocusChange,f=a.onHoverChange;a=a.onPress;return k.jsx(c("MWXPressable.react"),{"aria-label":h._("__JHASH__SolP4Av4egw__JHASH__"),onFocusChange:e,onHoverChange:f,onPress:a,xstyle:function(a){return[l.closeButton,b||a.focused?l.visible:!1]},children:k.jsx(c("MWXIcon.react"),{icon:d("fbicon")._(i("478231"),12)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2ChatHeadFlyout.react",["fbt","CometBadge.react","LSThreadTitle.react","Locale","MWPIsThreadUnread","MWThreadSnippetForDisplay.react","MWXText.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l={container:{backgroundColor:"xcrg951",borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",bottom:"x1ey2m1c",boxShadow:"x1ot33o7",boxSizing:"x9f619",display:"x78zum5",end:"x92rtbv",left:null,right:null,flexDirection:"xdt5ytf",height:"xnnlda6",maxWidth:"x256u9z",minWidth:"xktpd3l",paddingEnd:"x1iji9kk",paddingLeft:null,paddingRight:null,paddingStart:"x1sln4lm",position:"x10l6tqk",$$css:!0},containerWithSubtitle:{height:"xwzfr38",$$css:!0},gradientLTR:{backgroundImage:"x1ov1ned",$$css:!0},gradientRTL:{backgroundImage:"xwntvv8",$$css:!0},openChatArrowPointer:{borderTopEndRadius:"xevpo8y",bottom:"x1doy451",end:"x1923su1",left:null,right:null,height:"xlup9mm",position:"x10l6tqk",width:"x1kky2od",$$css:!0},openChatArrowPointerShadow:{boxShadow:"x1ot33o7",$$css:!0},spacer:{flexGrow:"x1iyjqo2",$$css:!0}},m=d("Locale").isRTL(),n=m?-45:45;function a(a){var b=a.id,e=a.subtitle;a=a.thread;var f=k.jsx(c("MWThreadSnippetForDisplay.react"),{thread:a}),g=e!=null,j=d("MWPIsThreadUnread").useIsThreadUnread(a.threadKey);return k.jsxs("div",{"data-testid":void 0,id:b,children:[k.jsx("div",{className:"xevpo8y x1doy451 x1923su1 xlup9mm x10l6tqk x1kky2od x1ot33o7",style:{transform:"rotate("+n+"deg)"}}),k.jsxs("div",{className:(i||(i=c("stylex")))(l.container,g?l.containerWithSubtitle:!1),children:[k.jsx("div",{className:"x1iyjqo2"}),k.jsx("div",{"aria-hidden":!0,children:k.jsx(c("MWXText.react"),{color:"primary",numberOfLines:1,type:"headlineEmphasized4",children:k.jsx(c("LSThreadTitle.react"),{thread:a})})}),e!=null?k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"x1iyjqo2"}),k.jsx(c("MWXText.react"),{color:"secondary",numberOfLines:1,type:"headline4",children:e})]}):null,k.jsx("div",{className:"x1iyjqo2"}),k.jsxs(c("MWXText.react"),{color:"secondary",numberOfLines:1,type:"body3",children:[j?k.jsx(c("CometBadge.react"),{color:"blue",label:h._("__JHASH__l0d8BOpfm06__JHASH__")}):null,f]}),k.jsx("div",{className:"x1iyjqo2"})]}),k.jsx("div",{className:i(l.openChatArrowPointer,m?l.gradientRTL:l.gradientLTR),style:{transform:"rotate("+n+"deg)"}})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2ChatHeadTypingIndicator.react",["I64","MWChatTypingIndicator.react","ReQL","ReQLSuspense","ServerTime","clearTimeout","react","setTimeout","useReStore","withCometPlaceholder"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));b=j;var l=b.useEffect,m=b.useState;function a(a){var b=a.threadKey;a=a.threadType;var e=m(!1),g=e[0],j=e[1],n=(h||(h=c("useReStore")))(),o=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(n.table("typing_indicator")).getKeyRange(b).filter(function(a){a=a.expirationTimestampMs;return d("ServerTime").getMillis()<(i||(i=d("I64"))).to_float(a)})},[n,b],f.id+":48");l(function(){j(o.length>0);var a=o.map(function(a){return(i||(i=d("I64"))).to_float(a.expirationTimestampMs)});a=Math.max.apply(Math,a);a=a-d("ServerTime").getMillis();var b=c("setTimeout")(function(){return j(!1)},a);return function(){c("clearTimeout")(b)}},[j,o]);return!g?null:k.jsx("div",{className:"x6s0dn4 xcrg951 x1a2cdl4 xnhgr82 x1qt0ttw xgk8upj x1ey2m1c x78zum5 xds687c x1qx5ct2 xl56j7k x10l6tqk x1td3qas",children:k.jsx(c("MWChatTypingIndicator.react"),{threadType:a})})}a.displayName=a.name+" [from "+f.id+"]";e=d("withCometPlaceholder").withCometPlaceholder(a);g["default"]=e}),98);
__d("MWV2ChatHeadUnreadMessageCountBadge.react",["fbt","CometNumberedBadge.react","CometPlaceholder.react","I64","MWPActor.react","ReQL","ReQLSuspense","react","stylex","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l,m=l||d("react"),n={badgeHidden:{opacity:"xg01cxk",$$css:!0},badgeShrunk:{transform:"x1f85oc2",$$css:!0},unreadBadge:{end:"x1adoouj",left:null,right:null,position:"x10l6tqk",top:"x1fo6t33",transitionDuration:"x19bguh7",transitionProperty:"x6o7n8i",$$css:!0},unreadBadgeIndeterminate:{marginEnd:"x1n0m28w",marginLeft:null,marginRight:null,$$css:!0}};function o(a,b){var e,g=(i||(i=c("useReStore")))(),h=d("MWPActor.react").useActor();return(e=(e=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(g.table("messages")).getKeyRange(a).bounds({gt:[b]}).filter(function(a){return!(k||(k=d("I64"))).equal(a.senderId,h)}).take(10)},[h,g,b,a],f.id+":57"))==null?void 0:e.length)!=null?e:0}function p(a){var b=a.isUnread,d=a.isVisible;a=a.unreadMessageCount;if(a===0&&!b)return m.jsx("div",{"aria-hidden":!0,className:"xg01cxk x1f85oc2"});b=a===0?h._("__JHASH__MH2_8oaWFOv__JHASH__"):h._("__JHASH__oUEWSJWvKe9__JHASH__",[h._plural(a,"number")]);var e=a===0?null:m.jsx(c("CometNumberedBadge.react"),{overflow:9,value:a});return m.jsx("div",{"aria-label":b,className:(j||(j=c("stylex")))(n.unreadBadge,d?!1:n.badgeHidden,a===0?n.unreadBadgeIndeterminate:!1),children:e})}p.displayName=p.name+" [from "+f.id+"]";function q(a){var b=a.isUnread,c=a.isVisible,d=a.lastReadWatermarkTimestampMs;a=a.threadKey;a=o(a,d);return m.jsx(p,{isUnread:b,isVisible:c,unreadMessageCount:a})}q.displayName=q.name+" [from "+f.id+"]";a=function(a){return m.jsx(c("CometPlaceholder.react"),{fallback:m.jsx(p,{isUnread:a.isUnread,isVisible:a.isVisible,unreadMessageCount:0}),children:m.jsx(q,babelHelpers["extends"]({},a))})};g.MWV2ChatHeadUnreadMessageCountBadge=a}),98);
__d("MWV2ChatHead.react",["fbt","CometContextualLayer.react","GroupsCometChatsEngagementLogger","I64","LSMessagingThreadTypeUtil","LSThreadAttributionStore","MWCMInboxHeaderCommunityGroupName.react","MWCMThreadTypes.react","MWChatHeadPicture.react","MWChatInteraction","MWChatStateActions","MWChatStateV2.react","MWChatStateV2IsFlyoutOpen","MWFacepileBadge.react","MWPActor.react","MWPGetThreadTitle","MWPIsThreadUnread","MWV2ChatHeadButton.react","MWV2ChatHeadCloseButton.react","MWV2ChatHeadFlyout.react","MWV2ChatHeadTypingIndicator.react","MWV2ChatHeadUnreadMessageCountBadge.react","ReQL","ReQLSuspense","getLSMediaContactProfilePictureUrl","getLSMediaThreadPictureUrl","profilePhotoUtils","react","useCommunityFolder","useGetContactsToShow","useMWChatOpenTabTraceProvider","useMWV2EnsureThatChatTabExists","useMWV2PreloadThread","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=k||(k=d("react"));b=k;var m=b.useId,n=b.useRef,o=b.useState;function p(a,b){var c=d("MWPActor.react").useActor(),e=a.threadName;if(e!=null)return h._("__JHASH__8WUxbAIePCk__JHASH__",[h._param("name of conversation",e)]);a=(e=d("MWPGetThreadTitle").computeThreadTitle(void 0,a.threadType,b,c))!=null?e:"";return h._("__JHASH__WVlVng4Euk___JHASH__",[h._param("chat participants",a)])}function q(a,b){var e=d("MWPActor.react").useActor(),f=c("getLSMediaThreadPictureUrl")(a);a=c("useGetContactsToShow")(a,b,e);return f!=null?[f]:a.map(c("getLSMediaContactProfilePictureUrl"))}function r(a){var b=a.onFocusChange,e=a.onHoverChange,g=a.style,h=a.tab,k=a.thread,r=(i||(i=c("useReStore")))(),s=c("useCommunityFolder")(k),t=d("MWChatStateV2.react").useDispatch(),u=c("useMWChatOpenTabTraceProvider")();a=function(){d("MWCMThreadTypes.react").isJoinedCMThread(k.threadType)&&d("GroupsCometChatsEngagementLogger").log({action:"tap",community_id:s?(j||(j=d("I64"))).to_string(s.folderId):(j||(j=d("I64"))).to_string(k.parentThreadKey),event:"thread_open",group_id:s?(j||(j=d("I64"))).to_string(s.fbGroupId):null,source:"chat_bubble",surface:"chat_bubbles_container",thread_id:(j||(j=d("I64"))).to_string(k.threadKey)}),u(function(a){d("MWChatInteraction").set((j||(j=d("I64"))).to_string(k.threadKey),a),t(d("MWChatStateActions").maximizeTab(Date.now(),h.tabId))},(j||(j=d("I64"))).to_int32(k.threadType),"chatheads",k.threadKey),d("LSThreadAttributionStore").setSource(j.to_string(k.threadKey),"chatheads")};var v=k.threadKey,w=o(!1),x=w[0],y=w[1];w=o(!1);var z=w[0],A=w[1];w=function(){return t(d("MWChatStateActions").closeTab(Date.now(),h.tabId))};var B=d("LSMessagingThreadTypeUtil").isSecure(k.threadType),C=d("ReQLSuspense").useArray(function(){return d("ReQL").leftJoin(d("ReQL").fromTableAscending(r.table("participants"),["contactId","nickname"]).getKeyRange(v),d("ReQL").fromTableAscending(r.table("contacts"),["name","rank","contactType","firstName","capabilities","capabilities2","id","profilePictureFallbackUrl","profilePictureUrl","profilePictureUrlExpirationTimestampMs","id"])).take(8)},[r,v],f.id+":178"),D=n(null),E=d("MWChatStateV2IsFlyoutOpen").isFlyoutOpen(h),F=m(),G=p(k,C);C=C.map(function(a){return a[1]});C=q(k,C);var H=d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(48);H=H[0];var I=d("profilePhotoUtils").getBadgePosition(24);B=c("useMWV2PreloadThread")(v,B);var J=B[0],K=B[1];B=B[2];var L=d("MWCMThreadTypes.react").isJoinedCMThread(k.threadType);L=L?l.jsx(c("MWCMInboxHeaderCommunityGroupName.react"),{thread:k}):null;var M=d("MWPIsThreadUnread").useIsThreadUnread(k.threadKey);return l.jsxs(d("MWV2ChatHeadButton.react").MWV2ChatHeadButtonContainer,{style:g,children:[l.jsxs(d("MWV2ChatHeadButton.react").MWV2ChatHeadButton,{ariaDescribedBy:F,ariaLabel:G.toString(),onFocusChange:function(a){A(a),b(a)},onHoverChange:function(a){y(a),e(a)},onHoverIn:J,onHoverOut:K,onPress:a,onPressIn:B,children:[l.jsx("div",{ref:D,children:l.jsxs(c("MWChatHeadPicture.react"),{images:C,children:[l.jsx(d("MWV2ChatHeadUnreadMessageCountBadge.react").MWV2ChatHeadUnreadMessageCountBadge,{isUnread:M,isVisible:!x&&!z,lastReadWatermarkTimestampMs:k.lastReadWatermarkTimestampMs,threadKey:v}),l.jsx("div",{className:"x10l6tqk",style:{bottom:I.bottom,left:I.left,right:I.right,transform:I.transform},children:l.jsx(c("MWFacepileBadge.react"),{size:H,threadKey:k.threadKey})})]})}),x||z||E?l.jsx(c("CometContextualLayer.react"),{contextRef:D,children:l.jsx(c("MWV2ChatHeadFlyout.react"),{id:F,subtitle:L,thread:k})}):null,l.jsx(c("MWV2ChatHeadTypingIndicator.react"),{threadKey:v,threadType:k.threadType})]}),l.jsx(c("MWV2ChatHeadCloseButton.react"),{isVisible:x||z,onFocusChange:A,onHoverChange:y,onPress:w})]})}r.displayName=r.name+" [from "+f.id+"]";function a(a){var b=a.onFocusChange,e=a.onHoverChange,g=a.style,h=a.tab;a=a.threadKeyDescriptor;var j=(i||(i=c("useReStore")))(),k=a.clientThreadKey,m=a.threadKey;c("useMWV2EnsureThatChatTabExists")(m,a.threadType,a.clientThreadKey);a=d("ReQLSuspense").useFirst(function(){return d("ReQL").fromTableAscending(j.table("threads")).getKeyRange(m)},[j,m],f.id+":294");var n=d("ReQLSuspense").useFirst(function(){return k!=null?d("ReQL").fromTableAscending(j.table("threads").index("clientThreadKey")).getKeyRange(k):d("ReQL").empty()},[j,k],f.id+":298");n=(a=(a=a)!=null?a:n)!=null?a:null;return n&&l.jsx(r,{onFocusChange:b,onHoverChange:e,style:g,tab:h,thread:n})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);