;/*FB_PKG_DELIM*/

__d("LSInMemoryTables",[],(function(a,b,c,d,e,f){"use strict";a="community_members";b="community_members_ranges_v2__generated";c=new Set([a,b]);d=new Set([a,b]);f.all=c;f.onActiveTab=d}),66);
__d("createReStoreEphemeralPersistenceForTables",["FBLogger","LSInMemoryTables","createReStoreEphemeralPersistence"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("createReStoreEphemeralPersistence")(),b=new Set([].concat(Array.from(d("LSInMemoryTables").onActiveTab)));return babelHelpers["extends"]({},a,{logError:function(a,b,d,e){if(d==="dbCorruption"){throw c("FBLogger")("messenger_web_product").mustfixThrow("Got unexpected undefined in edb for tables, mode: %s, table: %s, id: %s, deletedInThisTxn: %s",b,a,(d=e==null?void 0:e.id)!=null?d:"",(b=e==null?void 0:e.deletedInThisTxn)!=null?b:"")}},shouldApplySync:function(a,c){return a==="notifyInMemoryTable"&&b.has(c)},shouldSync:function(a,c){return a==="notifyInMemoryTable"&&b.has(c)}})}g["default"]=a}),98);
__d("MWLSIndexedDBConfigStore",["gkx","justknobx","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h="name";d="main";e="dbCorruption";f=c("gkx")("4463");var i=c("justknobx")._("347");function j(a){a=a.objectStoreNames;return a.contains("_db_config")}function a(){return 8}var k=babelHelpers["extends"]({fullColumnNames:!0,localVersion:i,lockVersion:a(),name:d,reStoreVaulting:f},c("gkx")("9005")?{lockStealing:!0}:{});function b(a,b){b===void 0&&(b={});if(j(a))return;a=a.createObjectStore("_db_config",{autoIncrement:!0,keyPath:h});a.createIndex(h,h,{unique:!0});b=babelHelpers["extends"]({},k,b);a.add(b);a.put({name:"epoch",value:c("uuidv4")()})}g.dbConfigKey=d;g.dbCorruptionFailuresKey=e;g.currentConfig=k;g.createDbConfig=b}),98);
__d("MessengerLocksManagerFallback",["MWLocalStorageErrorHandler","WebStorageLockManager"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return d("WebStorageLockManager").make(a,{onQuotaExceeded:d("MWLocalStorageErrorHandler").onQuotaExceeded})}g["default"]=a}),98);
__d("LSPlatformLockState",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({Waiting:"waiting",Acquired:"acquired",Cleaning:"cleaning",Canceled:"canceled"});f.LockState=a}),66);
__d("ReStoreNameUtils",["CurrentMessengerUser"],(function(a,b,c,d,e,f,g){"use strict";a=d("CurrentMessengerUser").getIDorEIMU();b="RestoreIDBMainLock-"+a;c="dbLock-"+a;e="RestoreConcurrency-"+a;f="lsPlatformLock-"+a;d="syncLock-"+a;a="single-instance-pdb-"+a;g.reStoreCMLockName=b;g.reStoreDBLockName=c;g.restoreConcurrencyBroadcastChannelName=e;g.lsPlatformLockBroadcastChannelName=f;g.lsPlatformLockName=d;g.singleTabLockName=a}),98);
__d("saveHandler",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c={};a.set(c,b);return function(){a["delete"](c)}}f["default"]=a}),66);
__d("LSPlatformSyncLock",["BrowserLockManager","FBLogger","LSPlatformErrorChannel","LSPlatformLockState","LSPlatformLsInitLog","MAWLocalStorage","MWBroadcastChannel","MessengerLocksManagerFallback","MessengerLogHistory","Promise","ReStoreNameUtils","Run","asyncToGeneratorRuntime","clearTimeout","emptyFunction","gkx","justknobx","pageID","promiseDone","saveHandler","setTimeout","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("MessengerLogHistory").getInstance("client_init"),j=typeof window!=="undefined"?window:self,k="iwantlock",l="lockRequestOnDemand",m="mw_msgr_mutex";function n(a,e){a===void 0&&(a=j);e===void 0&&(e=function(){return document.hasFocus()});var f=new Map(),g=new Map(),n=d("LSPlatformLockState").LockState.Waiting,o=c("emptyFunction"),p,q=c("gkx")("3890")||c("gkx")("1203")?d("MWBroadcastChannel").MWBroadcastChannel(d("ReStoreNameUtils").lsPlatformLockBroadcastChannelName):void 0,r=function(){if(!c("gkx")("3890"))return;p!=null&&c("clearTimeout")(p);if(n===d("LSPlatformLockState").LockState.Canceled||n===d("LSPlatformLockState").LockState.Acquired)return;p=c("setTimeout")(function(){e()&&n!==d("LSPlatformLockState").LockState.Acquired&&(i.debug("tab has focus and wants to acquire sync lock"),q==null?void 0:q.postMessage(k))},c("justknobx")._("1764"))};function s(){return t.apply(this,arguments)}function t(){t=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){i.debug("Sync lock acquired"),n=d("LSPlatformLockState").LockState.Acquired,yield (h||(h=b("Promise"))).all(Array.from(f.values()).map(function(a){return a()}))});return t.apply(this,arguments)}function u(){n=d("LSPlatformLockState").LockState.Cleaning,o=c("emptyFunction"),g.forEach(function(a){return a()})}function v(){var b=new AbortController(),f=c("LSPlatformErrorChannel").subscribe(function(e){i.debug("syncLock aborted due to "+e.name),c("FBLogger")("mpf_web_foundations").info("SyncLock aborted due to %s",e.name),o(),b.abort(),n=d("LSPlatformLockState").LockState.Canceled,q==null?void 0:q.removeEventListener("message",g),a.removeEventListener("focus",r),f()}),g=function a(g){if(g==null||g.data==null||(g.data!==k||e())&&g.data!==l)return;i.debug("got message from other tab to abort request to sync lock");o();b.abort();f();q==null?void 0:q.removeEventListener("message",a);n=d("LSPlatformLockState").LockState.Waiting;c("promiseDone")(w())};q==null?void 0:q.addEventListener("message",g);return b}function w(){return x.apply(this,arguments)}function x(){x=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){var a,e=(a=c("BrowserLockManager"))!=null?a:c("MessengerLocksManagerFallback")(c("pageID"));if(e){n=d("LSPlatformLockState").LockState.Waiting;d("LSPlatformLsInitLog").addPoint("sync_lock_start");i.debug("Sync lock requested if available");yield new(h||(h=b("Promise")))(function(a){return e.request(d("ReStoreNameUtils").lsPlatformLockName,{ifAvailable:!0},function(){var c=b("asyncToGeneratorRuntime").asyncToGenerator(function*(c){if(c==null){i.debug("Attempted to acquire sync lock but it already taken");d("LSPlatformLsInitLog").addPoint("sync_lock_unavailable");a();return}i.debug("Attempted to acquire sync lock and suceeded");yield s();d("LSPlatformLsInitLog").addPoint("sync_lock_acquired");a();return new(h||(h=b("Promise")))(function(a){o=function(){i.debug("Releasing sync lock"),u(),a()}})});return function(a){return c.apply(this,arguments)}}())});a=v();if(n!==d("LSPlatformLockState").LockState.Acquired){i.debug("Sync lock requested and will wait");d("LSPlatformLsInitLog").addPoint("sync_lock_requests_again");c("promiseDone")(e.request(d("ReStoreNameUtils").lsPlatformLockName,{signal:a.signal},function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){i.debug("Previous attempt to get sync lock failed, getting in queue for when/if it becomes available");yield s();return new(h||(h=b("Promise")))(function(a){o=function(){i.debug("Releasing sync lock"),u(),a()}})});return function(b){return a.apply(this,arguments)}}()),function(a){},function(a){if((a==null?void 0:a.name)==="AbortError")i.debug("Aborting attempt to acquire sync lock");else{d("LSPlatformLsInitLog").addPoint("sync_lock_request_failure");throw a}});if(c("gkx")("1203"))try{a=d("MAWLocalStorage").getStorage();a=a==null?void 0:a.getItem(m);if(a!=null){a=Number(a);var f=Date.now();f-a>=1e3*60*20&&(i.debug("sending lock request on demand"),q==null?void 0:q.postMessage(l))}}catch(a){c("FBLogger")("mpf_web_foundations").catching(a).warn("Failed to send lock request on demand")}}d("LSPlatformLsInitLog").addPoint("lock_requested")}else{d("LSPlatformLsInitLog").addPoint("sync_lock_end_failure");throw c("unrecoverableViolation")("No lock manager inited","messenger_web_product")}});return x.apply(this,arguments)}q!=null&&(a.addEventListener("focus",r),r(),d("LSPlatformLsInitLog").addPoint("onfocus_set"));d("Run").onBeforeUnload(function(){o()},!1);d("LSPlatformLsInitLog").addPoint("beforeunload_set");return{_getStateInternal:function(){return n},hasLock:function(){return n===d("LSPlatformLockState").LockState.Acquired},onAcquired:function(a){return c("saveHandler")(f,a)},onLost:function(a){return c("saveHandler")(g,a)},onLostOnce:function(a){var b=c("saveHandler")(g,function(){a(),b()})},release:function(){o()},requestLock:w}}var o=null;function a(){o==null&&(o=n());return o}function e(){o!=null&&o.release()}g.SYNC_KEY=m;g.init=n;g.use=a;g.releaseIfExist=e}),98);
__d("ReStoreErrorAction",["ClientConsistencyEventEmitter","LSPlatformSyncLock","MAWCurrentUser"],(function(a,b,c,d,e,f,g){"use strict";function a(){switch(d("MAWCurrentUser").getAppID()){case 772021112871879:c("ClientConsistencyEventEmitter").emit("hardRefresh","ls_forced_refresh");break;default:h()}}function h(){c("ClientConsistencyEventEmitter").emit("softRefresh","ls_forced_refresh")}function b(){d("LSPlatformSyncLock").releaseIfExist()}g.refresh=a;g.softRefresh=h;g.stopClient=b}),98);
__d("ReStoreDbVersionChange",["ReStoreErrorAction"],(function(a,b,c,d,e,f,g){"use strict";var h="LS DB changed version",i="ReStoreDbVersionChange";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c=h;b=a.call(this,c)||this;b.message=c;b.name=i;d("ReStoreErrorAction").stopClient();d("ReStoreErrorAction").refresh();return b}return b}(babelHelpers.wrapNativeSuper(Error));g.ERROR_NAME=i;g.ReStoreDbVersionChange=a}),98);
__d("createReStoreIndexedDbPersistence",["BrowserLockManager","ClientConsistency","CurrentMessengerUser","Deferred","ExecutionEnvironment","FBLogger","LSPlatformErrorChannel","LSPlatformLsInitLog","MAWLSDBEncryption","MWBroadcastChannel","MWLSIndexedDBConfigStore","MessengerLocksManagerFallback","MessengerLogHistory","ReStoreDbClosedError","ReStoreDbVersionChange","ReStoreErrorAction","ReStorePersistence","cr:4038","deepEquals","gkx","justknobx","nullthrows","pageID","promiseDone","qex","recoverableViolation","unrecoverableViolation","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("CurrentMessengerUser").getIDorEIMU(),j=d("MessengerLogHistory").getInstance("db_init"),k=new Set(["_db_config"]);function l(a,b){if(a!=null)if(a instanceof ArrayBuffer)return d("MAWLSDBEncryption").decryptLSDBObj(a,b);else throw c("unrecoverableViolation")("Expected encrypted string","messenger_web_product");else return a}function m(a,b){if(a!=null)return d("MAWLSDBEncryption").encryptLSDBObj(a,b);else return a}function n(a){return new self.Promise(function(b,c){a.onsuccess=function(a){b(a.target.result)},a.onerror=function(a){c(a)}})}function o(a){for(a of a.values())if(a.size!==0)return!1;return!0}function p(a,b){var c=[];a=new Set(a);for(var d of a)b.objectStoreNames.contains(d)||c.push(d);d=[];for(var e=0;e<b.objectStoreNames.length;e++){var f=b.objectStoreNames[e];!a.has(f)&&!k.has(f)&&d.push(f)}if(c.length!==0||d.length!==0)return[c,d]}function q(a,b){if(b==null){j.debug("Schema doesn't have changes to apply");return}j.debug("Schema has changes to apply");var c=b[0];b=b[1];c.forEach(function(b){a.objectStoreNames.contains(b)||a.createObjectStore(b,{autoIncrement:!0})});b.forEach(function(b){a.objectStoreNames.contains(b)&&a.deleteObjectStore(b)})}function r(a,b,e,f){function g(a){e(a.target),j.debug("DB onversionchange TABID="+c("pageID")),c("FBLogger")("mpf_web_foundations").info("[pdb] onversionchange inWorker=%s",String((h||(h=c("ExecutionEnvironment"))).isInWorker)),d("LSPlatformLsInitLog").fail("version_change"),c("LSPlatformErrorChannel").emit(new(d("ReStoreDbVersionChange").ReStoreDbVersionChange)())}return new Promise(function(e,h){var i=indexedDB.open(a,f);i.onupgradeneeded=function(a){a=a.target;var c=a.result;a=a.transaction;b(c,a)};i.onerror=function(a){d("LSPlatformLsInitLog").fail("failed_to_open_pdb"),h(c("unrecoverableViolation")("Failed to open db","messenger_web_product",{error:a.target.error}))};i.onsuccess=function(a){a=a.target.result;a.addEventListener("versionchange",g);e(a)}})}function s(a){return n(a.objectStore("_db_config").get(d("MWLSIndexedDBConfigStore").dbCorruptionFailuresKey))}async function t(a,b,d){a=a.objectStore(b);if(!("getAll"in a)||!("getAllKeys"in a))return new Map();var e=await n(a.getAllKeys());e=e.length>d?e[e.length-d]:void 0;e=e!=null?IDBKeyRange.lowerBound(e,!1):void 0;a=await Promise.all([n(a.getAllKeys(e,d)),n(a.getAll(e,d))]);e=a[0];d=a[1];if(e.length!==d.length){c("recoverableViolation")("Error pre-caching "+b+" IDB table","messenger_web_product");return new Map()}a=new Map();for(b=0;b<e.length;++b)a.set(e[b],{status:"encrypted",value:d[b]});return a}async function u(a,b){var e;d("LSPlatformLsInitLog").addPoint("cache_init_start");var f=(e=c("qex")._("338"))!=null?e:100;try{e=Array.from(a.objectStoreNames).filter(function(a){return!a.startsWith("_")});var g=a.transaction([].concat(e),"readonly");await Promise.all(e.map(async function(a){var c=await t(g,a,f);b.set(a,c)}));d("LSPlatformLsInitLog").addPoint("cache_init_end")}catch(a){c("recoverableViolation")("Error initting ReStore cache","messenger_web_product",{error:a}),d("LSPlatformLsInitLog").addPoint("cache_init_failed"),b.clear()}return a}async function v(a,b,e,f){e===void 0&&(e={});function g(a){d("LSPlatformLsInitLog").addAnnotations({bool:{dbEmpty:!0}});d("MWLSIndexedDBConfigStore").createDbConfig(a,e);for(var c of b)a.createObjectStore(c,{autoIncrement:!0})}d("LSPlatformLsInitLog").addPoint("idb_open_start");var i=await r(a,g,f);d("LSPlatformLsInitLog").addPoint("idb_open_end");var k=i.transaction("_db_config","readwrite");k=await Promise.all([n(k.objectStore("_db_config").get(d("MWLSIndexedDBConfigStore").dbConfigKey)),s(k).then(function(a){return(a=a==null?void 0:a.value)!=null?a:0})]);var l=k[0];k=k[1];var m=k>0;m&&(c("FBLogger")("mpf_web_foundations").info("[pdb] opening corrupted db failures=%s inWorker=%s",String(k),String((h||(h=c("ExecutionEnvironment"))).isInWorker)),j.debug("DB corrupted, deleting db"));k=!c("deepEquals")(babelHelpers.extends({},d("MWLSIndexedDBConfigStore").currentConfig,e),l);k&&j.debug("DB config mismatch, deleting db");d("LSPlatformLsInitLog").addAnnotations({bool:{configMismatch:k,dbCorruptionOccured:m}});if(k||m){i.close();(l=d("LSPlatformLsInitLog")).addPoint("delete_db_start");await n(indexedDB.deleteDatabase(a));l.addPoint("delete_db_end");l.addPoint("re_open_db_start");i=await r(a,g,f);l.addPoint("re_open_db_end")}else{var o=p(b,i);o!=null&&(j.debug("Schema mismatch, bumping db version"),i.close(),d("LSPlatformLsInitLog").addPoint("schema_mismatch_bump_version_start"),i=await r(a,function(a){return q(a,o)},f,i.version+1),d("LSPlatformLsInitLog").addPoint("schema_mismatch_bump_version_end"))}return i}function a(a,e){var f=i+"-"+a,g="dbLock-"+f,h=!0,k,p=[],q=!1,t=!1,w=b("cr:4038")!=null&&c("BrowserLockManager")!=null?new(b("cr:4038").RestoreConcurrencyManager)({onLockAcquired:async function(){if(!h)return;var a=await G();z!==a&&z!=null&&(A.clear(),c("FBLogger")("mpf_web_foundations").info("[pdb] cache dropped, out of date cache version"));t=!0;z=a},onLockReleased:function(){t=!1;return Promise.resolve()}}):null;j.debug("PDB is ON");d("LSPlatformLsInitLog").addPoint("init_idb_start");var x="mwChat-flushchanges-"+i+"-"+a,y=d("MWBroadcastChannel").MWBroadcastChannel(x),z=void 0,A=new Map(),B=c("nullthrows")((x=c("BrowserLockManager"))!=null?x:c("MessengerLocksManagerFallback")(c("uuidv4")().toString())),C=new Promise(function(b,d){c("promiseDone")(B.request(g,async function(){try{var c=await v(a,e,{worker3:!0},D);y.addEventListener("message",I);b(c)}catch(a){d(a)}}),function(a){},function(a){return c("FBLogger")("mpf_web_foundations").catching(a).warn("[pdb] dbLock idbPromise issue")})});c("promiseDone")(C.then(function(){d("LSPlatformLsInitLog").addPoint("init_idb_end")}));c("qex")._("403")&&c("promiseDone")(M(function(){return C.then(function(a){return u(a,A)})}));function D(a){a.close(),h=!1,w==null?void 0:w.release(),y.removeEventListener("message",I)}function E(a,b,c){return a.transaction(c!=null&&c.length>0?c:a.objectStoreNames,b,{durability:"relaxed"})}function F(a){var b=A.get(a);b==null&&(b=new Map(),A.set(a,b));return b}async function G(a){a===void 0&&(a=H);return(a=await a(function(a){return n(a.objectStore("_db_config").get("epoch"))}))==null?void 0:a.value}function H(a){function b(a){var b=E(a,"readonly");b.onabort=function(){k===b&&(k=null)};k=b}return new Promise(async function(c,d){p.push(function(b){return a(b).then(c)});var e=await C;if(k==null)try{b(e)}catch(a){return d(a)}if(!q){q=!0;while(p.length){e=p;p=[];await Promise.all(e.map(function(a){return a(k)}))}q=!1;(d=k)==null?void 0:d.commit==null?void 0:d.commit();k=null}})}function I(a){a=a.data;var b=a.changeSet,d=a.fromVersion,e=a.sentinelDeleted;a=a.toVersion;if(t){c("FBLogger")("mpf_web_foundations").info("[pdb] unexpected cache update received after verifying cache matches db, ignoring");return}z!==d&&z!=null&&(A.clear(),c("FBLogger")("mpf_web_foundations").info("[pdb] out of order cache update received"));z=a;b.forEach(function(a,b){var c=F(b);a.forEach(function(a,b){a===e?c.delete(b):c.set(b,{status:"decrypted",value:a})})})}async function J(){var a;if(!h)return;var b=(a=(a=await H(function(a){return s(a)}))==null?void 0:a.value)!=null?a:0;c("promiseDone")(C,async function(a){a=E(a,"readwrite");a=a.objectStore("_db_config");await n(a.put({name:d("MWLSIndexedDBConfigStore").dbCorruptionFailuresKey,value:b+1}))})}function K(){c("promiseDone")(C,function(a){D(a)})}function L(){if(!h)throw new(c("ReStoreDbClosedError"))()}async function M(a){await C;c("gkx")("789")&&L();if(c("gkx")("2031")&&c("justknobx")._("1699")){var b=c("ClientConsistency").getAdditionalRevisions();b.size>0&&(c("FBLogger")("mpf_web_foundations").info("[pdb] js mismatch detected"),d("ReStoreErrorAction").softRefresh())}return w!=null?w.runExclusively(a):new Promise(function(b,d){c("promiseDone")(B.request(g,async function(){try{var e=await G();z!==e&&z!=null&&(A.clear(),c("FBLogger")("mpf_web_foundations").info("[pdb] cache dropped, out of date cache version"));z=e;t=!0;e=await a();t=!1;b(e)}catch(a){t=!1,d(a)}}),function(a){},function(a){return c("FBLogger")("mpf_web_foundations").catching(a).warn("[pdb] dbLock runExclusively issue")})})}return{clearCache:function(){A.clear()},close:K,flush:async function(b,e){e=e.upgrade;if(!h)return;var f=c("uuidv4")(),g=c("nullthrows")(z);async function i(a){var e=new Promise(function(e,h){a.oncomplete=function(a){try{y.postMessage({changeSet:b,fromVersion:g,sentinelDeleted:d("ReStorePersistence").sentinelDeleted,toVersion:f})}catch(a){c("recoverableViolation")("Failed to broadcast changes","messenger_web_product",a)}e(a.target.result)},a.onerror=a.onabort=function(a){z=null,A.clear(),h(a)}});if(c("gkx")("9005")){var h=await G(function(b){return b(a)});if(h!=null&&g!=null&&h!==g)throw c("FBLogger")("mpf_web_foundations").mustfixThrow("About to commit corruption due to cache version mismatch. Expected %s but got %s",g,h)}h=!1;for(var i of b){var j=i[0],k=i[1],l=a.objectStore(j);for(k of k){var o=k[0],p=k[1],q;if(p===d("ReStorePersistence").sentinelDeleted)q=l.delete(o);else{p=m(p,j);q=l.put(p,o)}q.onerror=function(){return h=!0}}}await n(a.objectStore("_db_config").put({name:"epoch",value:f}));h?a.abort():a.commit!=null&&a.commit();await e}function j(){Array.from(b).forEach(function(a){var b=a[0];a=a[1];var c=F(b);Array.from(a).forEach(function(a){var b=a[0];a=a[1];a===d("ReStorePersistence").sentinelDeleted?c.delete(b):c.set(b,{status:"decrypted",value:a})})}),z=f}if(o(b))return;var l=await C;if(e===!0){c("FBLogger")("mpf_web_foundations").info("[pdb] Updating IDB version, fromVersion: %s, non-empty tables: %s",l.version,Array.from(b.entries()).filter(function(a){a[0];a=a[1];return a.size>0}).map(function(a){a=a[0];return a}).sort().toString());(e=k)==null?void 0:e.abort();l.close();A.clear();z=null;C=async function(){var b=new(c("Deferred"))(),d=await r(a,function(a,d){j(),c("promiseDone")(i(d),function(){b.resolve()},function(){b.reject()})},D,l.version+1);await b.getPromise();return d}();await C;return}if(b.size===0)return;j();e=function(){var a=Array.from(b.keys());a.push("_db_config");return i(E(l,"readwrite",a))};if(w!=null)return w.queueFlush(e);else await e()},get:function(a,b,c){var d=F(b);if(d.has(c)){a=d.get(c);if((a==null?void 0:a.status)==="encrypted"){var e=l(a.value,b);d.set(c,{status:"decrypted",value:e});return e}return a==null?void 0:a.value}else{if(!h)return new Promise(function(){});var f=H(function(a){return n(a.objectStore(b).get(c))}).then(function(a){var e=d.get(c);if((e==null?void 0:e.value)!==f)return e==null?void 0:e.value;e=l(a,b);d.set(c,{status:"decrypted",value:e});return e});d.set(c,{status:"pending",value:f});return f}},isClosed:function(){return!h},logError:function(a,b,d,e){if(d==="dbCorruption"){b==="readwrite"&&c("promiseDone")(J());throw c("FBLogger")("mpf_web_foundations").mustfixThrow("Got unexpected undefined in pdb, mode: %s, table: %s, id: %s, deletedInThisTxn: %s",b,a,(d=e==null?void 0:e.id)!=null?d:"",(b=e==null?void 0:e.deletedInThisTxn)!=null?b:"")}},queueCommitWork:function(a){return w!=null?Promise.resolve(w.queueFlush(a)):a()},runExclusively:M,shouldApplySync:function(){return!0},shouldSync:function(a,b){return a==="notifyInMemoryTable"?!1:!0},types:["indexeddb"],uniqueId:f}}a.schemaDiff=p;a.applyChanges=q;g.default=a}),98);
__d("useMWV2PreloadThreadV2",["Int64Hooks","JSResourceForInteraction","JSScheduler","LSFactory","LSIntEnum","LSIssueMessagesRangeQueryStoredProcedure","LSMailboxMessagesRangeQueryDirection","MWLSThreadDisplayContext","MWPFeatureLimitedData","MWPreloadableQueries","ReQL","gkx","justknobx","promiseDone","useCometPreloader","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=c("JSResourceForInteraction")("MWV2ChatTab.react").__setRef("useMWV2PreloadThreadV2");function a(a,b){var e=(j||(j=c("useReStore")))(),f=d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(),g=f!=="Inbox"&&c("justknobx")._("761");f=d("Int64Hooks").useCallbackInt64(function(){g&&k.preload()},[g]);var i=d("Int64Hooks").useMemoInt64(function(){var f=!1;return function(){if(f===!0)return;f=!0;g&&(h||(h=d("JSScheduler"))).scheduleSpeculativeCallback(function(){k.preload()});b||c("promiseDone")(l(e,a));c("gkx")("2233")&&c("gkx")("8755")&&m(e,a)}},[g,b,e,a]);return c("useCometPreloader")("button",i,f)}function l(a,b){return a.runInTransaction(function(a){return d("ReQL").firstAsync(d("ReQL").fromTableDescending(a.table("messages_ranges_v2__generated")).getKeyRange(b)).then(function(e){if(e!=null&&e.minMessageId===e.maxMessageId)return c("LSIssueMessagesRangeQueryStoredProcedure")(c("LSFactory")(a),{direction:(i||(i=d("LSIntEnum"))).ofNumber(c("LSMailboxMessagesRangeQueryDirection").BEFORE),referenceTimestampMs:e.minTimestampMs,threadKey:b})})},"readwrite")}function m(a,b){var e,f,g;(g=c("promiseDone"))((e=d("ReQL")).firstAsync((f=d("MWPreloadableQueries")).threadNullStateQuery(a,b)));g(e.firstAsync(d("MWPFeatureLimitedData").readonlyFeatureLimitQuery(a)));g(e.firstAsync(f.getCutoverThreadByThreadKey(a,b)));g(e.firstAsync(f.getProactiveWarningsForThreadQuery(a,b)));g(e.firstAsync(f.getThreadBannerQuery(a,b)));g(e.toArrayAsync(f.threadNullStateCtaQuery(a,b)));g(e.toArrayAsync(f.getMostRecentMessagesInThread(a,b)).then(function(c){return d("MWPreloadableQueries").getReactionsForMessages(a,b,c)}));g(e.toArrayAsync(f.getMediaStagingQuery(a,b)));g(f.getCommunityFolderForThreadParentQuery(a,b))}g["default"]=a}),98);
__d("IndexedDbStorage",["EBSMProperties","LSInMemoryTables","MAWLSVaultingHooks","ReStore","asyncToGeneratorRuntime","cr:6218","cr:6693","createReStoreEphemeralPersistenceForTables","createReStoreIndexedDbPersistence","createReStoreTableNameAllowListPersistence","justknobx"],(function(a,b,c,d,e,f,g){"use strict";var h=new Set([].concat(Array.from(d("LSInMemoryTables").all)));function i(a,b){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,d){a=c("createReStoreIndexedDbPersistence")(a,d);d=c("justknobx")._("440");var e;b("cr:6693")!=null&&(e=(yield b("cr:6693").makeEBStateDB()),c("EBSMProperties").persistedTables.forEach(function(a){return h.add(a)}));e==null&&(e=c("createReStoreEphemeralPersistenceForTables")());if(d)return c("createReStoreTableNameAllowListPersistence")(a,e,h);else return b("cr:6693")!=null?c("createReStoreTableNameAllowListPersistence")(a,e,c("EBSMProperties").persistedTables):a});return j.apply(this,arguments)}function a(a,b){return k.apply(this,arguments)}function k(){k=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,d){a=(yield i(a,Object.keys(d.tableIds).map(function(a){return d.tableIds[Number(a)].name})));a=c("ReStore")(a,d,[c("MAWLSVaultingHooks")]);b("cr:6218")&&b("cr:6693")==null&&(yield b("cr:6218")(a));return a});return k.apply(this,arguments)}g["default"]=a}),98);
__d("MWLSIndexedDBDelete",["MWLSIndexedDBName","ODS","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){try{var e=d("MWLSIndexedDBName").dbName();e=indexedDB.deleteDatabase(e);e.onerror=function(){(h||(h=d("ODS"))).bumpEntityKey(3185,"db_delete","error."+a),c("recoverableViolation")("[pdb] Failed to delete db","messenger_web_product")};e.onblocked=function(){(h||(h=d("ODS"))).bumpEntityKey(3185,"db_delete","block."+a)};e.onsuccess=function(){(h||(h=d("ODS"))).bumpEntityKey(3185,"db_delete","success."+a);if(b!=null)return b()};return}catch(a){c("recoverableViolation")("[pdb] error in db deletion ","messenger_web_product");return}}g.deleteIndexedDB=a}),98);
__d("MWLSSchemaIndexedDB",["IndexedDbStorage","LSMetadata","LSPlatformLsInitLog","MWLSIndexedDBDelete","MWLSIndexedDBName","MWSetupDBEncryption","MessengerLogHistory","asyncToGeneratorRuntime","cr:6468","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("MessengerLogHistory").getInstance("db_init"),i=typeof window!=="undefined"?window:self,j=i==null?void 0:(i=i.navigator)==null?void 0:i.locks;i=(i=b("cr:6468"))!=null?i:{MAWInit:{measurePerformance:function(a,b){return b()}}};var k=i.MAWInit;function a(){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){d("LSPlatformLsInitLog").addPoint("init_start");h.debug("Creating persistence");var a=(yield c("IndexedDbStorage")(d("MWLSIndexedDBName").dbName(),d("LSMetadata").metadata));h.debug("Persistence created");d("LSPlatformLsInitLog").addPoint("init_end");return a});return l.apply(this,arguments)}function e(a,b){try{b.closeDb==null?void 0:b.closeDb(),d("MWLSIndexedDBDelete").deleteIndexedDB(a)}catch(a){c("recoverableViolation")("[pdb] Cannot delete db","messenger_web_product")}}function f(){return m.apply(this,arguments)}function m(){m=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){if(j==null)return!1;h.debug("Creating EAR");d("MWSetupDBEncryption").setPerformanceMeasurementTool(k.measurePerformance);var a=(yield d("MWSetupDBEncryption").init());if(!a.success){h.debug("EAR failed, PDB is OFF.");return!1}h.debug("EAR created");return!0});return m.apply(this,arguments)}g.createDB=a;g.deleteDB=e;g.isSupported=f}),98);
__d("migrateEBSMTablesToPDB",["EBSMProperties","FBLogger","LSMetadata","MAWCurrentUser","MAWIndexedDbMetadata","MAWLSVaultingHooks","MWSetupEBStateDB","Promise","ReStore","asyncToGeneratorRuntime","clearTimeout","err","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(a){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){if(indexedDB==null)return;var e=d("MAWIndexedDbMetadata").ebLSDBName(d("MAWCurrentUser").getID());if(typeof window.indexedDB.databases==="function"){var f=(yield window.indexedDB.databases());if(f.find(function(a){return a.name===e})==null)return}else{var g;f=(yield (h||(h=b("Promise"))).race([new h(function(a,b){var d=indexedDB.open(e);d.onupgradeneeded=function(b){b.target.transaction.abort(),a(!1)};d.onsuccess=function(b){b.target.result.close(),a(!0)};d.onerror=function(a){b(c("err")("ebsm migration error in checking db existance "+((a=a.target)==null?void 0:(a=a.error)==null?void 0:a.message)))}}),new h(function(a,b){g=c("setTimeout")(function(){b(c("err")("ebsm db is not available. resolving on timeout"))},300)})]));c("clearTimeout")(g);if(f===!1)return}f=(yield d("MWSetupEBStateDB").makeEBStateDB(!0));if(f==null)return;var i=c("ReStore")(f,d("LSMetadata").metadata,[c("MAWLSVaultingHooks")]);yield a.runInTransaction(function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var d=function*(d){var e=c("EBSMProperties").persistedTablesArray[d];yield i.runInTransaction(function(){var c=b("asyncToGeneratorRuntime").asyncToGenerator(function*(b){b=b.table(e).entries(new WeakMap());var c=(yield b.next());while(!c.done){var d=c.value;d[0];d=d[1];yield a.table(e).put(d);c=(yield b.next())}return});return function(a){return c.apply(this,arguments)}}(),"readwrite")};for(var e=0;e<c("EBSMProperties").persistedTablesArray.length;e++)yield* d(e)});return function(b){return a.apply(this,arguments)}}(),"readwrite")});return j.apply(this,arguments)}function k(){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){var a=d("MAWIndexedDbMetadata").ebLSDBName(d("MAWCurrentUser").getID());if(typeof window.indexedDB.databases==="function"){var c=(yield window.indexedDB.databases());if(c.find(function(b){return b.name===a})==null)return}return new(h||(h=b("Promise")))(function(b,c){var d=window.indexedDB.deleteDatabase(a);d.onsuccess=b;d.onfailure=c})});return l.apply(this,arguments)}function a(a){return i(a)["catch"](function(a){c("FBLogger")("messenger_web_product").catching(a).mustfix("Error migrating data from EBSM to PDB")}).then(function(){return k()})["catch"](function(a){c("FBLogger")("messenger_web_product").catching(a).mustfix("Error cleaning up data in EBSM post PDB startup.")})}g["default"]=a}),98);