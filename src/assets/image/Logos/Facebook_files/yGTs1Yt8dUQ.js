;/*FB_PKG_DELIM*/

__d("LSUpdateFilteredThreadsRanges",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.seq([function(c){return b.fe(b.ftr(b.db.table(247).fetch([[[a[1]]]]),function(c){return b.i64.eq(c.parentThreadKey,a[1])&&b.i64.eq(c.threadRangeFilter,a[2])&&b.i64.eq(c.secondaryThreadRangeFilter,a[7])&&c.threadRangeFilterValue===a[8]}),function(a){return a["delete"]()})},function(c){return b.db.table(247).add({minLastActivityTimestampMs:a[3],minThreadKey:a[4],parentThreadKey:a[1],folderName:a[0],threadRangeFilter:a[2],secondaryThreadRangeFilter:a[7],threadRangeFilterValue:a[8],maxLastActivityTimestampMs:b.i64.cast([0,1]),maxThreadKey:b.i64.cast([-2147483648,0]),isLoadingBefore:!1,isLoadingAfter:!1,hasMoreBefore:b.i64.gt(a[3],b.i64.cast([0,1]))&&b.i64.gt(a[4],b.i64.cast([-2147483648,0])),hasMoreAfter:!1})}])},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("CometGamingVideoRecentlyWatchedRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4748600375250865"}),null);