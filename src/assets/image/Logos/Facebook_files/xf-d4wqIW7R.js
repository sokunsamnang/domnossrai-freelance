;/*FB_PKG_DELIM*/

__d("CometGroupMembersAdminsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6048922388544835"}),null);
__d("CometGroupMembersAdminsRootQuery$Parameters",["CometGroupMembersAdminsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGroupMembersAdminsRootQuery_facebookRelayOperation"),metadata:{},name:"CometGroupMembersAdminsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupMembersAdminsRoot.entrypoint",["CometGroupMembersAdminsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildGroupCometRootRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildGroupCometRootRoute.entrypoint")(c("JSResourceForInteraction")("CometGroupMembersAdminsRoot.react").__setRef("CometGroupMembersAdminsRoot.entrypoint"),function(a){a=a.routeProps;a=a.groupID;a={groupID:a,scale:d("WebPixelRatio").get()};return{queries:{queryReference:{parameters:b("CometGroupMembersAdminsRootQuery$Parameters"),variables:a}}}});g["default"]=a}),98);
__d("MultiwaySharedTypes",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";c=(a=b("$InternalEnum"))({UNKNOWN:0,SFU:1,P2P:2});d=a({UNKNOWN:0,GROUP:1,IGLIVE:8,IGVIDEOCALL:9,OCULUS:10,ROOM:15,DEBUGTOOL:16,DARWIN:19,CRUCIBLE:20,MBS_WA:21});f=a({OFFER:0,PRANSWER:1,ANSWER:2});b=a({LOW:0,MEDIUM:1,HIGH:2,HD:3,NUM_QUALITIES:4});var g=a({UNKNOWN:0,DOMINANT_SPEAKER:1,GRID:2,THUMBNAIL:3}),h=a({E2EE_NOT_MANDATED:0,DEPRECATED_NO_REQUIREMENT:1,E2EE_MANDATED:2}),i=a({NOT_SET:0,CONTROL:1,TEST:2}),j=a({NotPaused:0,Paused:1}),k=a({AUDIO:0,VIDEO:1,DATA:2}),l=a({UDP:1,TCP:2}),m=a({UNKNOWN:0,COMPOSITING_SERVICE:1,MEDIA_SERVER:2,CATHODE_AMBISONIC:3,CATHODE_CAPTIONS:4}),n=a({CNAME:0,TRACK:1,DOMINANT_SPEAKER:2}),o=a({UNKNOWN:0,DEFAULT:1,SCREEN_SHARE:2}),p=a({UNSPECIFIED:0,FNA:1,FNA_PREFERRED:2});a=a({IntValue:"intValue",StringValue:"stringValue"});e.exports={ConferenceType:d,DisplayMode:g,E2eeInfraMandatedExpStatus:i,E2eeMode:h,EdgerayType:p,EndpointServiceType:m,MediaPath:c,MediaPauseStatus:j,MediaType:k,ProxygenCandidateProtocol:l,QuickExperimentValue$Types:a,RenderedStreamType:o,SdpType:f,SubscriptionType:n,VideoQuality:b}}),null);