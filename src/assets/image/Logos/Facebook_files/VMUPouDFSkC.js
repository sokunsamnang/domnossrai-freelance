;/*FB_PKG_DELIM*/

__d("LSIssueNewTaskWithExtraOperationsAndGetTaskID",["LSIssueNewTaskAndGetTaskID","LSMailboxTaskCompletionApiOnTaskInsertion"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[];return c.seq([function(f){return c.seq([function(e){return c.sp(b("LSIssueNewTaskAndGetTaskID"),a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],c.i64.cast([0,0])).then(function(a){return a=a,d[0]=a[0],a})},function(a){return c.sp(b("LSMailboxTaskCompletionApiOnTaskInsertion"),d[0])},function(a){return e[0]=d[0]}])},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("LSPredefineTraceForTask",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(d){return b.seq([function(d){return c[0]=b.i64.of_float(Date.now()),b.fe(b.db.table(2).fetch([[[a[1]]]]),function(b){var d=b.update;b.item;return d({dataTraceId:a[0],initTraceTimestampMs:c[0]})})},function(d){return b.db.table(153).add({traceId:a[0],initTimestampMs:c[0],foregroundTimestampMs:b.i64.cast([0,0]),traceType:b.i64.cast([0,1]),shouldFlush:!1,contextOne:a[2],contextTwo:b.i64.to_string(a[1]),predefinedId:a[3]})}])},function(a){return b.resolve(d)}])}b=a;f["default"]=b}),66);
__d("useMWEntrypoint",["MWLSThreadDisplayContext"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(),b="inbox";switch(a){case"ChatTab":b="popup_chat_box";break;case"RoomsSideChat":b="rooms_lobby";break}return b}g["default"]=a}),98);
__d("MessageRequestsLog",["I64","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(c=c("requireDeferred"))("MessageRequestsBulkActionConfirmedFalcoEvent").__setRef("MessageRequestsLog"),j=c("MessageRequestsBulkActionEditFalcoEvent").__setRef("MessageRequestsLog"),k=c("MessageRequestsBulkActionTappedFalcoEvent").__setRef("MessageRequestsLog"),l=c("MessageRequestsInfoBannerShownFalcoEvent").__setRef("MessageRequestsLog"),m=c("MessageRequestsThreadActionConfirmedFalcoEvent").__setRef("MessageRequestsLog"),n=c("MessageRequestsThreadActionTappedFalcoEvent").__setRef("MessageRequestsLog"),o=c("MessageRequestsThreadDenialOptionsTappedFalcoEvent").__setRef("MessageRequestsLog"),p=c("MessageRequestsViewThreadlistFalcoEvent").__setRef("MessageRequestsLog");function q(a){switch(a.folderName){case"pending":return-1;case"other":return-2;case"spam":return-3;case"inbox":return 0}}function a(a,b,c){l.onReady(function(e){e.log(function(){return{action:0,extra_data_map:void 0,group_thread_id:c,other_user_id:b,request_id:void 0,thread_folder:q(a),thread_id:c!=null?c:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:(h||(h=d("I64"))).to_int32(a.threadType)}})})}function b(a,b){o.onReady(function(c){c.log(function(){return{action:0,extra_data_map:void 0,group_thread_id:void 0,other_user_id:b,request_id:void 0,thread_folder:q(a),thread_id:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:h.to_int32(a.threadType)}})})}function e(a,b,c,e){n.onReady(function(f){f.log(function(){return{action:b,extra_data_map:void 0,group_thread_id:e,other_user_id:c,request_id:void 0,thread_folder:q(a),thread_id:e!=null?e:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:(h||(h=d("I64"))).to_int32(a.threadType)}})})}function f(a,b,c,e){m.onReady(function(f){f.log(function(){return{action:b,extra_data_map:void 0,group_thread_id:e,other_user_id:c,request_id:void 0,thread_folder:q(a),thread_id:e!=null?e:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:(h||(h=d("I64"))).to_int32(a.threadType)}})})}function r(a,b){p.onReady(function(c){c.log(function(){return{action:0,actioned_thread_count:"0",actioned_thread_ids:void 0,actioned_unread_thread_count:"0",entry_point:a,folder:b,request_id:void 0}})})}function s(a,b,c,d,e){k.onReady(function(f){f.log(function(){return{action:d,actioned_thread_count:b.toString(),actioned_thread_ids:void 0,actioned_unread_thread_count:c.toString(),entry_point:a,folder:e,request_id:void 0}})})}function t(a,b,c,d,e){i.onReady(function(f){f.log(function(){return{action:d,actioned_thread_count:b.toString(),actioned_thread_ids:void 0,actioned_unread_thread_count:c.toString(),entry_point:a,folder:e,request_id:void 0}})})}function u(a,b,c){j.onReady(function(d){d.log(function(){return{action:b,actioned_thread_count:"0",actioned_thread_ids:void 0,actioned_unread_thread_count:"0",entry_point:a,folder:c,request_id:void 0}})})}g.logMessageRequestInfoShown=a;g.logDenialOptionsTapped=b;g.logActionTapped=e;g.logActionConfirmed=f;g.logMessageRequestsView=r;g.logMessageRequestsBulkActionTapped=s;g.logMessageRequestsBulkActionConfirmed=t;g.logMessageRequestsBulkActionEdit=u}),98);
__d("isAppSyncDeleteThreadEnabled",["qex"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("qex")._("1536")===!0||c("qex")._("555")===!0}g["default"]=a}),98);
__d("ZenonAppProvider",["IGDWebUtils","ZenonActorHooks"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("ZenonActorHooks").ZenonActor.getAppID()==null?null:Number(d("ZenonActorHooks").ZenonActor.getAppID());return d("IGDWebUtils").isInstagramWebSupportedApp(a)}function b(){var a=d("ZenonActorHooks").ZenonActor.getAppID()==null?null:Number(d("ZenonActorHooks").ZenonActor.getAppID());return h(a)}function h(a){return a!=null?a===2763362503905702||a===351299233827255:!1}g.isInstagramApp=a;g.isOculusApp=b}),98);
__d("ZenonActorHooks",["CurrentUser","FBLogger","ZenonAppProvider"],(function(a,b,c,d,e,f,g){"use strict";var h=null,i=null,j=null,k=!1,l=!1,m=new Set();function n(a,b){b===void 0&&(b="Fallback to CurrentUser"),m.has(a)||(c("FBLogger")("rtc_www").blameToPreviousFrame().info("ZenonActor."+a+" - "+b),m.add(a))}function a(){return[o.getID(),function(a){n("useZenonActor:setter","This setter should not be used as Zenon should currently doesn't allow switching Actor"),h=a}]}function b(a,b,c){b===void 0&&(b=!1);c===void 0&&(c=!1);if(h!==null){if(l)return;n("initZenonActor","ZenonActor is being reinitalized. This may indicate unneccessary ZenonActorProvider's to RelayEnvironmentProvider's in the component tree.")}l=l||b;k=k||c;typeof a==="string"||typeof a==="number"?(h=a.toString(),i=null,j=null):(a==null?void 0:a.actorID)!=null&&(h=a.actorID.toString(),i=a.name,j=a.shortName)}var o={getAccountID:function(){if(o.isInstagramUser())return c("CurrentUser").getEIMU();return o.isOculusCastingUser()?c("CurrentUser").getEOCPU():c("CurrentUser").getAccountID()},getAppID:function(){return c("CurrentUser").getAppID()},getID:function(){if(o.isInstagramUser())return c("CurrentUser").getEIMU();if(o.isOculusCastingUser())return c("CurrentUser").getEOCPU();if(h===null){n("getID");return c("CurrentUser").getID()}else return h},getName:function(){var a;return(a=i)!=null?a:c("CurrentUser").getName()},getShortName:function(){var a;return(a=j)!=null?a:c("CurrentUser").getShortName()},isEmployee:function(){return c("CurrentUser").isEmployee()},isInstagramUser:function(){return c("CurrentUser").getEIMU()!==0&&d("ZenonAppProvider").isInstagramApp()},isLoggedIn:function(){return c("CurrentUser").isLoggedIn()},isLoggedInNow:function(){return c("CurrentUser").isLoggedInNow()},isMessengerCallGuestUser:function(){return c("CurrentUser").isMessengerCallGuestUser()},isOculusCastingUser:function(){return c("CurrentUser").getEOCPU()!==0&&d("ZenonAppProvider").isOculusApp()},isOculusUser:function(){return c("CurrentUser").getEPOU()!==0&&d("ZenonAppProvider").isOculusApp()},isPage:function(){return k},isTestUser:function(){return c("CurrentUser").isTestUser()},isWorkishUser:function(){return c("CurrentUser").isWorkroomsUser()||c("CurrentUser").isWorkUser()},isWorkroomsUser:function(){return c("CurrentUser").isWorkroomsUser()},isWorkUser:function(){return c("CurrentUser").isWorkUser()}};g.useZenonActor=a;g.initZenonActor=b;g.ZenonActor=o}),98);
__d("ZenonAuditedCheckpointLogId",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["RP_ROOMS_INFRA_WWW__E2EE","RP_ROOMS_INFRA_WWW__WASM","RP_ROOMS_INFRA_WWW__LOGGER_INFRA","RP_ROOMS_INFRA_WWW__STATE_MACHINE","RP_ROOMS_INFRA_WWW__ERROR"]);c=a;f["default"]=c}),66);
__d("RpWebInfraActionsLoggerEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744334");b=d("FalcoLoggerInternal").create("rp_web_infra_actions_logger_event",a);e=b;g["default"]=e}),98);
__d("isEmployeeTestUserZenonLogging",["gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("gkx")("2890")||c("gkx")("6954")||c("gkx")("10484")}g["default"]=a}),98);
__d("ZenonInfraActionsLogger",["Log","RpWebInfraActionsLoggerEventFalcoEvent","ZenonAuditedCheckpointLogId","formatDate","isEmployeeTestUserZenonLogging","justknobx"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){this.$1={callTrigger:void 0,conferenceName:void 0,deviceID:void 0,mediaPath:"sfu",peerID:void 0,serverInfoData:void 0,signalingID:void 0},this.$2=new Set(),this.$3=new Map(),this.$4=new Map()}var b=a.prototype;b.updateCachedValues=function(a){Object.assign(this.$1,a)};b.setE2eeIsMandatedForCall=function(a){this.$3.set(a,!0)};b.logCheckpointEmployeesTestUsersOnly=function(a){if(!c("isEmployeeTestUserZenonLogging")())return;this.logCheckpoint(a)};b.logCheckpoint=function(a){this.logEvent(babelHelpers["extends"]({},a))};b.logCheckpointOnceForDomain=function(a){var b=a.checkpoint;this.$2.has(b)||(this.$2.add(b),this.logCheckpoint(a))};b.logError=function(a){this.logEvent(babelHelpers["extends"]({},a))};b.startTimer=function(a){var b=Date.now();this.$4.set(a,b);this.logEvent({checkpoint:a+"_timerStart"})};b.stopTimer=function(a){var b=this.$4.get(a);this.$4["delete"](a);b=b!=null?Date.now()-b:null;this.logEvent({checkpoint:a+"_timerEnd",eventTimeElapsed:b});return parseInt(b,10)};b.logEvent=function(a){var b;if(c("justknobx")._("854"))return;b=(b=this.$3.get((b=this.$1.signalingID)!=null?b:""))!=null?b:!1;if(b&&!c("justknobx")._("1021"))return;if(b&&a.auditId==null){b="Encountered an unaudited log line, dropping it.";a.error!=null?this.logEvent({auditId:c("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__LOGGER_INFRA,error:b}):this.logEvent({auditId:c("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__LOGGER_INFRA,checkpoint:b});return}if(((b=a.checkpoint)==null?void 0:b.length)!=null&&a.checkpoint.length>3e5)return;var d={call_id:(b=a.signalingID)!=null?b:this.$1.signalingID==null?void 0:String(this.$1.signalingID),call_trigger:this.$1.callTrigger,call_type:(b=a.callType)!=null?b:null,checkpoint:a.checkpoint,client_session_id:this.$1.signalingID,client_time:Date.now().toString(),conference_name:(b=a.conferenceName)!=null?b:this.$1.conferenceName,connection:(b=a.connectionState)!=null?b:this.$1.connectionState,device_id:this.$1.deviceID,error:a.error,error_domain:a.errorDomain,event_time_elapsed:(b=a.eventTimeElapsed)==null?void 0:b.toString(),is_caller:(b=a.isCaller)!=null?b:null,media_path:(b=a.mediaPath)!=null?b:this.$1.mediaPath,message_id:a.messageID,peer_connection:(b=a.peerConnectionState)!=null?b:this.$1.peerConnectionState,peer_id:this.$1.peerID,sdp_format:(b=a.sdpFormat)!=null?b:null,server_info_data:(b=a.serverInfoData)!=null?b:this.$1.serverInfoData,signaling:(b=a.signalingState)!=null?b:this.$1.signalingState,state_machine_id:a.stateMachineID};c("RpWebInfraActionsLoggerEventFalcoEvent").log(function(){return d})};return a}();b=new a();g["default"]=b}),98);
__d("ZenonIceStatsParser",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=[];a=a.split("\r\n");a.forEach(function(a){g(a)&&b.push({gen:h(a),type:i(a)})});return b}function g(a){return a.indexOf("candidate:")>-1}function h(a){var b=0;a=a.match(/generation (\d+)/);a&&(b=parseInt(a[1],10));return b}function i(a){a=a.match(/typ (host|relay|srflx|prflx)/);if(a)return a[1];else return"unknown"}f.extractIceInfo=a}),66);
__d("ZenonSignalingProtocol",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({MW:"mw",MWPP:"mw++"});c=a;f["default"]=c}),66);
__d("ZenonMWMessageDebugLogger",["Log","LogHistory","ODS","RpWebStateMachineLoggingBlocklist","ZenonIceStatsParser","ZenonInfraActionsLogger","ZenonMWMessageMap","ZenonMWMessageTypes","ZenonMWTranslatorUtils","formatDate","isEmployeeTestUserZenonLogging"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(){function a(){this.$1=d("LogHistory").getInstance("webrtc"),this.$2=new Set(c("RpWebStateMachineLoggingBlocklist").MESSAGE_TYPES)}var b=a.prototype;b.$3=function(a,b,d){b===void 0&&(b=!0);var e=c("formatDate")(new Date(),"[H:i:s:X]",{skipPatternLocalization:!0});this.$1.log("Console",e+" "+a);b&&c("ZenonInfraActionsLogger").logCheckpoint({checkpoint:"[ZP] "+a,messageID:d})};b.$4=function(a){return isNaN(+a)?0:+a};b.$5=function(a){a=a.jsonPayload.header;return a.responseStatusCode!=null};b.logMWMessage=function(a,b,d){this.$6(a,b,d);if(d.jsonPayload==null||!c("isEmployeeTestUserZenonLogging")())return;var e=d.jsonPayload.header,f=c("ZenonMWMessageMap")[e.type],g=this.$5(d)?"RESPONSE":"REQUEST";d=this.$7(d);a="[ms] "+a+" ["+b+"] "+f+" "+g+" [retryCount: "+e.retryCount+(d!=null?" details: "+d:"")+"]";this.$2.has(f)||this.$3(a,!0,e.transactionId)};b.$6=function(a,b,c){a=this.$8(a,b,c);a!==null&&(h||(h=d("ODS"))).bumpEntityKey(4083,"zenon_signaling",a)};b.$8=function(a,b,e){if(e.jsonPayload==null)return null;var f=e.jsonPayload,g=f.body;f=f.header;var h="";switch(f.type){case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.DATA_MESSAGE:if(g.dataMessageRequest){h=(g=d("ZenonMWTranslatorUtils").getGenericDataMessageTopic(g.dataMessageRequest))!=null?g:"undefined"}break}g=this.$5(e)?"RESPONSE":"REQUEST";e=c("ZenonMWMessageMap")[f.type];if(h==="")return a+"-"+b+"-"+e+"-"+g;else return a+"-"+b+"-"+e+"-"+g+"-"+h};b.$7=function(a){if(a.jsonPayload==null)return null;var b=a.jsonPayload.header;switch(b.type){case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.JOIN:return this.$9(a);case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.SERVER_MEDIA_UPDATE:return this.$10(a);case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.CLIENT_MEDIA_UPDATE:return this.$11(a);case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.SUBSCRIPTION:return this.$12(a);case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.ICE_CANDIDATE:return this.$13(a);default:return null}};b.$9=function(a){var b=a.jsonPayload,c=b.body;b=b.header;if(this.$5(a)){return JSON.stringify({hasAnswer:((a=c.joinResponse)==null?void 0:a.answer)!=null,hasRenegotiationOffer:((a=c.joinResponse)==null?void 0:a.renegotiationOffer)!=null,isPendingApproval:(a=c.joinResponse)==null?void 0:a.isPendingApproval,multipleVideoStreamsAllowed:(a=c.joinResponse)==null?void 0:a.multipleVideoStreamsAllowed,statusCode:b.responseStatusCode,subCode:b.responseSubCode})}return JSON.stringify({deviceCapabilities:(a=c.joinRequest)==null?void 0:a.deviceCapabilities,sdpType:((b=c.joinRequest)==null?void 0:b.offer)!=null?"offer":((a=c.joinRequest)==null?void 0:a.answer)!=null?"answer":"null",userCapabilities:(b=c.joinRequest)==null?void 0:b.userCapabilities})};b.$10=function(a){var b=a.jsonPayload,c=b.body;b=b.header;if(this.$5(a)){return JSON.stringify({currentVersion:(a=c.serverMediaUpdateResponse)==null?void 0:a.currentVersion,hasAnswer:((a=c.serverMediaUpdateResponse)==null?void 0:a.answer)!=null,statusCode:b.responseStatusCode,subCode:b.responseSubCode})}return JSON.stringify({fromVersion:(a=c.serverMediaUpdateRequest)==null?void 0:a.fromVersion,messageTags:b.messageTags,renegotiationRequested:(b=(a=c.serverMediaUpdateRequest)==null?void 0:a.renegotiationRequested)!=null?b:!1,sdpType:((a=c.serverMediaUpdateRequest)==null?void 0:a.offer)?"offer":((b=c.serverMediaUpdateRequest)==null?void 0:b.answer)?"answer":((a=c.serverMediaUpdateRequest)==null?void 0:a.update)?"delta":"empty",toVersion:(a=(b=c.serverMediaUpdateRequest)==null?void 0:b.toVersion)!=null?a:""})};b.$11=function(a){var b=a.jsonPayload,c=b.body;b=b.header;if(this.$5(a)){return JSON.stringify({currentVersion:(a=(a=c.clientMediaUpdateResponse)==null?void 0:a.currentVersion)!=null?a:"",statusCode:b.responseStatusCode,subCode:b.responseSubCode})}return JSON.stringify({fromVersion:(b=(a=c.clientMediaUpdateRequest)==null?void 0:a.fromVersion)!=null?b:"",toVersion:(b=(a=c.clientMediaUpdateRequest)==null?void 0:a.toVersion)!=null?b:""})};b.$12=function(a){var b=a.jsonPayload.body;return this.$5(a)?null:JSON.stringify({subscriptions:(b=(a=b.subscriptionRequest)==null?void 0:a.subscriptions)!=null?b:""})};b.$13=function(a){var b=a.jsonPayload.body;if(this.$5(a))return null;b=(a=b.iceCandidateRequest)==null?void 0:a.iceCandidateSdps.map(function(a){a=a.candidateSdpString;if(a!=null)return d("ZenonIceStatsParser").extractIceInfo(a)});return JSON.stringify({iceCandidates:b})};b.logSendMultiwayMessageFailure=function(a,b){(h||(h=d("ODS"))).bumpEntityKey(4083,"zenon_multiway","send_message_failure"),h.flush(),c("ZenonInfraActionsLogger").logCheckpoint({checkpoint:"Failed to send MW message of type "+b+". Error msg: "+a+":"})};return a}();b=new a();g["default"]=b}),98);
__d("StateSyncSerializers",["ThriftTypes"],(function(a,b,c,d,e,f){"use strict";var g;function a(){return{version:0}}function c(){return{stateStore:{}}}function h(a,c){c.writeStructBegin("State");c.writeFieldBegin({fname:"version",ftype:(g||(g=b("ThriftTypes"))).I32,fid:1});if(a.version!=null)c.writeI32(a.version);else{var d=0;c.writeI32(d)}c.writeFieldEnd();a.data!=null&&(c.writeFieldBegin({fname:"data",ftype:(g||(g=b("ThriftTypes"))).STRING,fid:2}),c.writeBinary(a.data),c.writeFieldEnd());c.writeFieldStop();c.writeStructEnd()}function d(a,c){c.writeStructBegin("Snapshot");c.writeFieldBegin({fname:"stateStore",ftype:(g||(g=b("ThriftTypes"))).MAP,fid:1});if(a.stateStore!=null){c.writeMapBegin({ktype:(g||(g=b("ThriftTypes"))).STRING,vtype:g.STRUCT,size:Object.keys(a.stateStore).length});a=Object.entries(a.stateStore);for(var d=0;d<a.length;d++){var e=a[d],f=e[0];e=e[1];c.writeString(f);h(e,c)}c.writeMapEnd()}else{f={};c.writeMapBegin({ktype:(g||(g=b("ThriftTypes"))).STRING,vtype:g.STRUCT,size:Object.keys(f).length});e=Object.entries(f);for(a=0;a<e.length;a++){d=e[a];f=d[0];d=d[1];c.writeString(f);h(d,c)}c.writeMapEnd()}c.writeFieldEnd();c.writeFieldStop();c.writeStructEnd()}function i(a){var c={};a.readStructBegin();while(!0){var d=a.readFieldBegin(),e=d.ftype;d=d.fid;if(e===(g||(g=b("ThriftTypes"))).STOP)break;switch(d){case 1:e===(g||(g=b("ThriftTypes"))).I32?c.version=a.readI32():a.skip(e);break;case 2:e===(g||(g=b("ThriftTypes"))).STRING?c.data=a.readBinary():a.skip(e);break;default:a.skip(e)}a.readFieldEnd()}a.readStructEnd();c.version===void 0&&(c.version=0);return c}function e(a){var c={};a.readStructBegin();while(!0){var d=a.readFieldBegin(),e=d.ftype;d=d.fid;if(e===(g||(g=b("ThriftTypes"))).STOP)break;switch(d){case 1:if(e===(g||(g=b("ThriftTypes"))).MAP){c.stateStore={};d=a.readMapBegin();for(var f=0;f<d.size;f++){var h=a.readString(),j=i(a);c.stateStore[h]=j}}else a.skip(e);break;default:a.skip(e)}a.readFieldEnd()}a.readStructEnd();c.stateStore===void 0&&(c.stateStore={});return c}f.State$DefaultConstructor=a;f.Snapshot$DefaultConstructor=c;f.serializeState=h;f.serializeSnapshot=d;f.deserializeState=i;f.deserializeSnapshot=e}),66);
__d("LSInternetConnectionState",[],(function(a,b,c,d,e,f){a=Object.freeze({NOT_CONNECTED:0,CONNECTED:1});f["default"]=a}),66);
__d("useMWXConfirmationDialog",["fbt","JSResourceForInteraction","react","useMWXLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||d("react")).useCallback,k=c("JSResourceForInteraction")("MWXConfirmationDialog.react").__setRef("useMWXConfirmationDialog");function a(){var a=c("useMWXLazyDialog")(k),b=a[0];return j(function(a,c,d){var e=a.cancel;e=e===void 0?h._("__JHASH__ko1T7DvDF-J__JHASH__"):e;var f=a.confirm;f=f===void 0?h._("__JHASH__Yske7OqlYXF__JHASH__"):f;a=babelHelpers.objectWithoutPropertiesLoose(a,["cancel","confirm"]);b(babelHelpers["extends"]({cancel:e,confirm:f},a),function(a){return a?c():d==null?void 0:d()})},[b])}g["default"]=a}),98);