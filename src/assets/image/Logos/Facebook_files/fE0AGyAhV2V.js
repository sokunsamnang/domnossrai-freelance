;/*FB_PKG_DELIM*/

__d("HostnameRewriter",["ConstUriUtils","Env","URI","isFacebookURI","lowerFacebookDomain"],(function(a,b,c,d,e,f,g){var h,i,j=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},k=null,l=null,m=new RegExp("facebook\\.com$"),n=new RegExp("^www\\.(|.*\\.)facebook\\.com$"),o=null,p="facebook.com",q=null,r=new RegExp("fbcdn\\.net$"),s=new RegExp("^www\\."),t=new RegExp("(^|\\.)(facebook\\.com|workplace\\.com)$","i");function u(){k=null;var a="(^|\\.)";o=a+j(p)+"$";l=null}function v(){if(o==null)return null;if(k)return k;k=new RegExp(o,"i");return k}function w(){if(l)return l;l=new RegExp("(^|\\.)("+j(p)+"|facebook\\.com)$","i");return l}function x(a){if(w().test(a)&&p!=null)return a.replace(m,p);else if(q!=null&&a!==null)return a.replace(r,q);return a}function y(a){return n.test(a)?a.replace(s,"web."):a}function z(a){return function(b){b=new(h||(h=c("URI")))(b);b.setDomain(a(b.getDomain()));return b}}function A(a,b){p=a,q=b,u(),c("isFacebookURI").setRegex(v()),(h||(h=c("URI"))).registerFilter(z(x)),d("ConstUriUtils").registerDomainFilter(x),c("lowerFacebookDomain").setDomain(p)}function a(a,b){p=a,(h||(h=c("URI"))).registerFilter(z(y))}function b(){var a=(i||(i=c("Env"))).hostnameRewriterConfig;if(a==null)return;switch(a.site){case"onion":A(a.inboundName,a.cdnDomainName);break}}function e(){c("isFacebookURI").setRegex(t)}g.registerFacebookOverTorFilters=A;g.registerInternetDotOrgFilters=a;g.maybeRegisterFilters=b;g.treatWorkplaceAsFacebookURI=e}),98);
__d("XAppSettingsAsyncDeleteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/settings/apps/delete_app_multi/",{__asyncDialog:{type:"Int"},app_ids:{type:"String"},surface:{type:"Enum",defaultValue:"applications",enumType:1},refresh_page_on_success:{type:"Bool",defaultValue:!1},refresh_page_on_done:{type:"Bool",defaultValue:!1},page_id:{type:"Int"},privacy_mutation_token:{type:"String"}})}),null);