/*pub-2|2011-10-25 15:48:55*/(function(a,b,c){var d={mix:function(a,b,d,f){if(!b||!a)return a;d===c&&(d=!0);var g,h,i;if(f&&(i=f.length))for(g=0;g<i;g++)h=f[g],h in b&&e(h,a,b,d);else for(h in b)e(h,a,b,d);return a}},e=function(a,b,c,d){if(d||!(a in b))b[a]=c[a]},f=a&&a[b]||{},g=0,h="";return a=f.__HOST||(f.__HOST=a||{}),b=a[b]=d.mix(f,d,!1),b.mix(b,{__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.1.6",merge:function(){var a={},c,d=arguments.length;for(c=0;c<d;c++)b.mix(a,arguments[c]);return a},augment:function(){var a=arguments,d=a.length-2,e=a[0],f=a[d],g=a[d+1],h=1;b.isArray(g)||(f=g,g=c,d++),b.isBoolean(f)||(f=c,d++);for(;h<d;h++)b.mix(e.prototype,a[h].prototype||a[h],f,g);return e},extend:function(a,c,d,e){if(!c||!a)return a;var f=Object.create?function(a,b){return Object.create(a,{constructor:{value:b}})}:function(a,b){function c(){}c.prototype=a;var d=new c;return d.constructor=b,d},g=c.prototype,h;return a.prototype=h=f(g,a),a.superclass=f(g,c),d&&b.mix(h,d),e&&b.mix(a,e),a},__init:function(){this.Config=this.Config||{},this.Env=this.Env||{},this.Config.debug=""},namespace:function(){var b=arguments,c=b.length,d=null,e,f,g,i=b[c-1]===!0&&c--;for(e=0;e<c;e++){g=(h+b[e]).split("."),d=i?a:this;for(f=a[g[0]]===d?1:0;f<g.length;++f)d=d[g[f]]=d[g[f]]||{}}return d},app:function(c,d){var e=b.isString(c),f=e?a[c]||{}:c,g=0,h=b.__APP_INIT_METHODS.length;b.mix(f,this,!0,b.__APP_MEMBERS);for(;g<h;g++)b[b.__APP_INIT_METHODS[g]].call(f);return b.mix(f,b.isFunction(d)?d():d),e&&(a[c]=f),f},log:function(d,e,f){b.Config.debug&&(f&&(d=f+": "+d),a.console!==c&&console.log&&console[e&&console[e]?e:"log"](d))},error:function(a){if(b.Config.debug)throw a},guid:function(a){return(a||h)+g++}}),b.__init(),b})(this,"KISSY"),function(a,b){var c=a.__HOST,d=Object.prototype.toString,e=Array.prototype.indexOf,f=Array.prototype.lastIndexOf,g=Array.prototype.filter,h=String.prototype.trim,i="",j=/^\s+|\s+$/g,k={};a.mix(a,{type:function(a){return a==null?String(a):k[d.call(a)]||"object"},isNull:function(a){return a===null},isUndefined:function(a){return a===b},isEmptyObject:function(a){for(var b in a)return!1;return!0},isPlainObject:function(a){return a&&d.call(a)==="[object Object]"&&"isPrototypeOf"in a},clone:function(b){var c=b,d,e;if(b&&((d=a.isArray(b))||a.isPlainObject(b))){c=d?[]:{};for(e in b)b.hasOwnProperty(e)&&(c[e]=a.clone(b[e]))}return c},trim:h?function(a){return a==b?i:h.call(a)}:function(a){return a==b?i:a.toString().replace(j,i)},substitute:function(c,d,e){return!a.isString(c)||!a.isPlainObject(d)?c:c.replace(e||/\\?\{([^{}]+)\}/g,function(a,c){return a.charAt(0)==="\\"?a.slice(1):d[c]!==b?d[c]:i})},each:function(d,e,f){var g,h,i=0,j=d.length,k=j===b||a.type(d)==="function";f=f||c;if(k){for(g in d)if(e.call(f,d[g],g,d)===!1)break}else for(h=d[0];i<j&&e.call(f,h,i,d)!==!1;h=d[++i]);return d},indexOf:e?function(a,b){return e.call(b,a)}:function(a,b){for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1},lastIndexOf:f?function(a,b){return f.call(b,a)}:function(a,b){for(var c=b.length-1;c>=0;c--)if(b[c]===a)break;return c},unique:function(b,c){c&&b.reverse();var d=b.slice(),e=0,f,g;while(e<d.length){g=d[e];while((f=a.lastIndexOf(g,d))!==e)d.splice(f,1);e+=1}return c&&d.reverse(),d},inArray:function(b,c){return a.indexOf(b,c)>-1},filter:g?function(a,b,c){return g.call(a,b,c)}:function(b,c,d){var e=[];return a.each(b,function(a,b,f){c.call(d,a,b,f)&&e.push(a)}),e},now:function(){return(new Date).getTime()}}),a.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b,c){k["[object "+b+"]"]=c=b.toLowerCase(),a["is"+b]=function(b){return a.type(b)==c}})}(KISSY),function(a,b){function q(a){var b=typeof a;return a===null||b!=="object"&&b!=="function"}function r(a){return Array.prototype.slice.call(a)}var c=a.__HOST,d=c.document,e=d.documentElement,f="",g="&",h=encodeURIComponent("[]"),i=!1,j=[],k=!1,l=500,m=40,n=/^#?([\w-]+)$/,o=/^(\w+)\[\]$/,p=/\S/;a.mix(a,{isWindow:function(b){return a.type(b)==="object"&&"setInterval"in b},makeArray:function(c){return c===null||c===b?[]:a.isArray(c)?c:typeof c.length!="number"||a.isString(c)||a.isFunction(c)?[c]:r(c)},param:function(b,c){if(!a.isPlainObject(b))return f;c=c||g;var d=[],e,i;for(e in b){i=b[e],e=encodeURIComponent(e);if(q(i))d.push(e,"=",encodeURIComponent(i+f),c);else if(a.isArray(i)&&i.length)for(var j=0,k=i.length;j<k;++j)q(i[j])&&d.push(e,h+"=",encodeURIComponent(i[j]+f),c)}return d.pop(),d.join(f)},unparam:function(b,c){if(typeof b!="string"||(b=a.trim(b)).length===0)return{};var d={},e=b.split(c||g),h,i,j,k,l=0,m=e.length;for(;l<m;++l){h=e[l].split("="),i=decodeURIComponent(h[0]);try{j=decodeURIComponent(h[1]||f)}catch(n){j=h[1]||f}(k=i.match(o))&&k[1]?(d[k[1]]=d[k[1]]||[],d[k[1]].push(j)):d[i]=j}return d},globalEval:function(a){if(a&&p.test(a)){var b=d.getElementsByTagName("head")[0]||e,c=d.createElement("script");c.text=a,b.insertBefore(c,b.firstChild),b.removeChild(c)}},later:function(b,c,d,e,f){c=c||0,e=e||{};var g=b,h=a.makeArray(f),i,j;return a.isString(b)&&(g=e[b]),g||a.error("method undefined"),i=function(){g.apply(e,h)},j=d?setInterval(i,c):setTimeout(i,c),{id:j,interval:d,cancel:function(){this.interval?clearInterval(j):clearTimeout(j)}}},ready:function(a){return k||this._bindReady(),i?a.call(c,this):j.push(a),this},_bindReady:function(){var a=this,b=d.documentElement.doScroll,e=b?"onreadystatechange":"DOMContentLoaded",f="complete",g=function(){a._fireReady()};k=!0;if(d.readyState===f)return g();if(d.addEventListener){function h(){d.removeEventListener(e,h,!1),g()}d.addEventListener(e,h,!1),c.addEventListener("load",g,!1)}else{function i(){d.readyState===f&&(d.detachEvent(e,i),g())}d.attachEvent(e,i),c.attachEvent("onload",g);var j=!1;try{j=c.frameElement==null}catch(l){}if(b&&j){function m(){try{b("left"),g()}catch(a){setTimeout(m,1)}}m()}}},_fireReady:function(){if(i)return;i=!0;if(j){var a,b=0;while(a=j[b++])a.call(c,this);j=null}},available:function(b,c){b=(b+f).match(n)[1];if(!b||!a.isFunction(c))return;var e=1,g=a.later(function(){(d.getElementById(b)&&(c()||1)||++e>l)&&g.cancel()},m,!0)}});try{r(e.childNodes)}catch(s){r=function(a){for(var b=[],c=a.length-1;c>=0;c--)b[c]=a[c];return b}}location&&(location.search||f).indexOf("ks-debug")!==-1&&(a.Config.debug=!0),a._bindReady()}(KISSY),function(a,b){function r(a){var b=a.src,c=a.getAttribute("data-combo-prefix")||"??",d=a.getAttribute("data-combo-sep")||",",e=b.split(d),f,g=e[0],h=g.indexOf(c);if(h==-1)f=b.replace(p,"$1");else{f=g.substring(0,h);var i=g.substring(h+2,g.length);if(i.match(q))f+=i.replace(p,"$1");else for(var j=1;j<e.length;j++){var k=e[j];if(k.match(q)){f+=k.replace(p,"$1");break}}}return f}var c=a.__HOST,d=c.document,e=d.getElementsByTagName("head")[0]||d.documentElement,f="",g="cssfullpath",h=1,i=2,j=3,k=4,l=a.mix,m=d.createElement("script").readyState?function(a,b){var c=a.onreadystatechange;a.onreadystatechange=function(){var d=a.readyState;if(d==="loaded"||d==="complete")a.onreadystatechange=null,c&&c(),b.call(this)}}:function(a,b){a.addEventListener("load",b,!1)},n=/\.css(?:\?|$)/i,o;o={add:function(b,c,d){var e=this,f=e.Env.mods,g,h,j;return a.isString(b)&&!d&&a.isPlainObject(c)&&(h={},h[b]=c,b=h),a.isPlainObject(b)?(a.each(b,function(a,b){a.name=b,f[b]&&l(a,f[b],!1)}),l(f,b)):(d=d||{},g=f[b]||{},b=d.host||g.host||b,g=f[b]||{},l(g,{name:b,status:i}),g.fns||(g.fns=[]),c&&g.fns.push(c),j=g.requires,l(f[b]=g,d),f[b].requires=j,g.attach!==!1&&e.__isAttached(g.requires)&&e.__attachMod(g)),e},use:function(b,c,d){b=b.replace(/\s+/g,f).split(","),d=d||{};var e=this,g=e.Env.mods,h=(d||0).global,i,j=b.length,l,m,n;h&&e.__mixMods(h);if(e.__isAttached(b)){c&&c(e);return}for(i=0;i<j&&(l=g[b[i]]);i++){if(l.status===k)continue;d.order&&i>0&&(l.requires||(l.requires=[]),l._requires=l.requires.concat(),m=b[i-1],!a.inArray(m,l.requires)&&!a.inArray(l.name,g[m].requires||[])&&l.requires.push(m)),e.__attach(l,function(){l._requires&&(l.requires=l._requires,delete l._requires),!n&&e.__isAttached(b)&&(n=!0,c&&c(e))},h)}return e},__attach:function(a,b,c){function h(){var c=a.requires||[];d.__isAttached(c)&&(a.status===i&&d.__attachMod(a),a.status===k&&b())}var d=this,e=a.requires||[],f=0,g=e.length;for(;f<g;f++)d.__attach(d.Env.mods[e[f]],h,c);d.__buildPath(a),d.__load(a,h,c)},__mixMods:function(a){var b=this.Env.mods,c=a.Env.mods,d;for(d in c)this.__mixMod(b,c,d,a)},__mixMod:function(b,c,d,e){var f=b[d]||{},g=f.status;a.mix(f,a.clone(c[d])),g&&(f.status=g),e&&this.__buildPath(f,e.Config.base),b[d]=f},__attachMod:function(c){var d=this;c.fns&&(a.each(c.fns,function(a){a&&a(d)}),c.fns=b),c.status=k},__isAttached:function(b){var c=this.Env.mods,d,e=(b=a.makeArray(b)).length-1;for(;e>=0&&(d=c[b[e]]);e--)if(d.status!==k)return!1;return!0},__load:function(b,c,d){function q(){r(),b.status!==j&&(d&&e.__mixMod(e.Env.mods,d.Env.mods,b.name,d),b.status!==k&&(b.status=i),c())}function r(){l[f]=i}var e=this,f=b.fullpath,l=a.Env._loadQueue,o=l[f],p;b.status=b.status||0,b.status<h&&o&&(b.status=o.nodeName?h:i),a.isString(b[g])&&(e.getScript(b[g]),b[g]=i),b.status<h&&f?(b.status=h,p=e.getScript(f,{success:function(){KISSY.log(b.name+" is loaded.","info"),q()},error:function(){b.status=j,r()},charset:b.charset}),n.test(f)||(l[f]=p)):b.status===h?m(o,q):c()},__buildPath:function(a,b){function d(d,e){!a[e]&&a[d]&&(a[e]=(b||c.base)+a[d]),a[e]&&c.debug&&(a[e]=a[e].replace(/-min/g,""))}var c=this.Config;d("path","fullpath"),a[g]!==i&&d("csspath",g)},getScript:function(c,f,g){var h=n.test(c),i=d.createElement(h?"link":"script"),j=f,k,l,o;return a.isPlainObject(j)&&(f=j.success,k=j.error,l=j.timeout,g=j.charset),h?(i.href=c,i.rel="stylesheet"):(i.src=c,i.async=!0),g&&(i.charset=g),h?a.isFunction(f)&&f.call(i):m(i,function(){o&&(o.cancel(),o=b),a.isFunction(f)&&f.call(i),e&&i.parentNode&&e.removeChild(i)}),a.isFunction(k)&&(o=a.later(function(){o=b,k()},(l||this.Config.timeout)*1e3)),e.insertBefore(i,e.firstChild),i}},l(a,o);var p=/^(.*)(seed|kissy)(-min)?\.js[^/]*/i,q=/(seed|kissy)(-min)?\.js/;a.__initLoader=function(){var a=d.getElementsByTagName("script"),b=a[a.length-1],c=r(b);this.Env.mods={},this.Env._loadQueue={},this.Config.base||(this.Config.base=c),this.Config.timeout||(this.Config.timeout=10)},a.__initLoader(),a.each(o,function(b,c){a.__APP_MEMBERS.push(c)}),a.__APP_INIT_METHODS.push("__initLoader")}(KISSY),function(a){var b={core:{path:"packages/core-min.js",charset:"utf-8"}};a.each(["sizzle","dd","datalazyload","flash","switchable","suggest","calendar","uibase","overlay","imagezoom"],function(a){b[a]={path:a+"/"+a+"-pkg-min.js",requires:["core"],charset:"utf-8"}}),b.calendar.csspath="calendar/default-min.css",b.overlay.requires=["uibase"],a.add(b)}(KISSY);var TB=KISSY.app("TB");TB.add("mod~global",function(){var f=KISSY,m=!"0"[0],u=m&&!window.XMLHttpRequest,v=!!window.ActiveXObject,I=document,e=window,n,t,l=" ",q="hover",j,x="g_config" in e?("appId" in e.g_config?parseInt(e.g_config["appId"]):undefined):undefined,b="mini-cart",k="mini-cart-no-layer",p=location.hostname.split("."),J=I.domain,d=J.indexOf("tmall.com")>-1,z=!(J.indexOf("taobao.com")>-1||d),s=z?".daily.taobao.net":".taobao.com",H="",a=false,A=(I.location.href.indexOf("https://")===0),E={},c={siteNav:function(){if(!j){return}j.setAttribute("role","navigation");f.each(G("menu","*",j),function(L){TB.Global._addMenu(L)});var K=I.forms.topSearch;y(K,"submit",function(){if(K.q.value==H){K.action="http://list.taobao.com/browse/cat-0.htm"}});var i=G("cart","li",j)[0];y(i,"click",function(M){var L=M.target||M.srcElement;if(L.nodeName!="A"&&L.parentNode.nodeName==="A"){L=L.parentNode}if(L.nodeName==="A"&&L.href.indexOf("my_cart.htm")>-1){h(M);r(i,"hover");TB.Cart&&TB.Cart.redirect(L,L.href);if(e.MiniCart){e.MiniCart._clicked=false}}})},tDog:function(){if((x&&x!=-1)||"tstart" in t||"tdog" in t){var i="http://"+n+"/p/header/webww-min.js?t=20110629.js",K=0;f.ready(function(){if(f.DOM){f.getScript(i)}else{f.log("webww: try "+K);if(K<10){setTimeout(arguments.callee,1000);K++}else{f.use("core",function(){f.getScript(i)})}}})}},tLabs:function(){if(location.href.indexOf("tms.taobao.com")!==-1){return}f.ready(function(){var K="http://"+n+"/p/tlabs/1.0.0/tlabs-min.js?t=1.0.0.js",i=F("_nk_")||F("tracknick");i=encodeURIComponent(w(unescape(i.replace(/\\u/g,"%u"))));f.getScript(K,function(){if(typeof TLabs!=="undefined"){TLabs.init({nick:i})}})})},POCMonitor:function(){var O=e._poc||[],N,L=0,K=[["_setAccount",(e.g_config||0).appId],["_setStartTime",(e.g_config||0).startTime||e.HUBBLE_st||e.g_hb_monitor_st]],M=10000;while((N=O[L++])){if(N[0]==="_setRate"){M=N[1]}else{if(N[0]==="_setAccount"){K[0]=N}else{if(N[0]==="_setStartTime"){K[1]=N}else{K.push(N)}}}}if(K[0][1]&&parseInt(Math.random()*M)===0){e._poc=K;f.getScript("http://a.tbcdn.cn/p/poc/m.js?v=0.0.1.js")}},prefetch:function(){f.ready(function(){f.getScript("http://a.tbcdn.cn/p/prefetch/1.0/prefetch.js")})},initHeaderLinks:function(){if(J.indexOf(".taobao.net")===-1){return}var M=j?j.getElementsByTagName("a"):[],L=0,K=M.length,N=p;while(N.length>3){N.shift()}N=N.join(".");for(;L<K;L++){M[L].href=M[L].href.replace("taobao.com",N)}},initLogout:function(){var i=I.getElementById("#J_Logout");if(!i){return}y(i,"click",function(L){L.halt();var K=i.href;new Image().src="//taobao.alipay.com/user/logout.htm";setTimeout(function(){location.href=K},20)})},initSiteNav:function(){var L=I.getElementById("J_Service"),K=I.getElementById("J_ServicesContainer"),N,i="http://www.taobao.com/index_inc/2010c/includes/get-services.php",O="__services_results";if(!L||!K){return}y(L,"mouseover",M);y(L,"keydown",M);function M(P){if(P.type==="keydown"&&P.keyCode!==39&&P.keyCode!==40){return}N=f.getScript(i+"?cb="+O,{charset:"gbk"});h(P)}window[O]=function(P){if(N){N.parentNode.removeChild(N)}N=null;try{K.innerHTML=P;K.style.height="auto";B(L,"mouseover",M);B(L,"keydown",M)}catch(Q){K.style.display="none"}}},test:function(){var i=false;var K=function(){if(i){return}i=true;if(location.href.indexOf("__cloudyrun__")>-1){f.getScript("http://assets.daily.taobao.net/p/cloudyrun/1.0/cloudyrun-taobao-pkg.js?t="+(+new Date()))}};f.ready(K);setTimeout(K,4000)},assist:function(){if(F("test_accouts")&&document.domain.indexOf("taobao.net")>-1){f.ready(function(){f.getScript("http://assets.daily.taobao.net/p/assist/login/login.js")})}},miniCart:function(){var i=TB.Global;if(i._OFF){return}if(d||J.indexOf("tmall.net")>-1){if(f.isUndefined(x)){return}else{if(!(F("uc2")&&F("mt"))){f.getScript("http://www"+s+"/go/app/tmall/login-api.php?t="+f.now());return}}}i.initMiniCart()},mpp:function(){f.getScript("http://"+n+"/p/tstart/1.0/build/tb-mpp-min.js?t=201107210.js",function(){f.ready(function(){if(!TB.Global.isLogin()){return}Mpp.Notify.register({appId:1010,type:1,callback:function(){f.getScript("http://"+(z?"webww.daily.taobao.net:8080":"webwangwang.taobao.com")+"/getOtherSystem.do?callback=TB.Global.setUserMsg&t="+f.now())}})})})}};var D=["tDog","tLabs","test","mpp"];for(var C=0;C<D.length;C++){(function(K){var i=c[K];c[K]=function(){setTimeout(i,1000)}})(D[C])}TB.Global={_addMenu:function(N){if(!N){return}var K=this,O=G("menu-hd","*",N)[0],M=G("menu-bd","*",N)[0];if(!M||!O){return}O.tabIndex=0;K._subMenus.push(M);M.setAttribute("role","menu");M.setAttribute("aria-hidden","true");if(!M.getAttribute("id")){M.setAttribute("id",f.guid("menu-"))}O.setAttribute("aria-haspopup",M.getAttribute("id"));O.setAttribute("aria-label","\u53f3\u952e\u5f39\u51fa\u83dc\u5355\uff0ctab\u952e\u5bfc\u822a\uff0cesc\u5173\u95ed\u5f53\u524d\u83dc\u5355");var L=false;if(!A&&u){L=I.createElement("iframe");L.src="about: blank";L.className="menu-bd";N.insertBefore(L,M)}y(N,"mouseover",function(Q){var P=Q.relatedTarget;while(P&&P!==N){P=P.parentNode}if(P!==N){f.each(K._subMenus,function(R){if(R!==M){r(R.parentNode,q);R.setAttribute("aria-hidden","true")}});o(N,q);M.setAttribute("aria-hidden","false");if(!L){return}L.style.height=parseInt(M.offsetHeight)+25+"px";L.style.width=parseInt(M.offsetWidth)+1+"px"}});y(N,"mouseout",function(Q){var P=Q.relatedTarget;while(P&&P!==N){P=P.parentNode}if(P!==N){r(N,q);M.setAttribute("aria-hidden","true");f.each(M.getElementsByTagName("input"),function(R){if(R.getAttribute("type")!=="hidden"){R.blur()}})}});y(N,"keydown",function(Q){var P=Q.keyCode;if(P==27||P==37||P==38){r(N,q);M.setAttribute("aria-hidden","true");O.focus();h(Q)}else{if(P==39||P==40){o(N,q);M.setAttribute("aria-hidden","false");h(Q)}}});var i;y(N,v?"focusin":"focus",function(){if(i){clearTimeout(i);i=null}},!v);y(N,v?"focusout":"blur",function(){i=setTimeout(function(){r(N,q);M.setAttribute("aria-hidden","true")},100)},!v)},init:function(i){if(a){return}a=true;n=z?"assets.daily.taobao.net":"a.tbcdn.cn";t=f.unparam(location.search.substring(1));j=I.getElementById("site-nav");this._OFF=!!!j;this.config=i;if(i&&i.mc&&i.mc===-1){this._OFF=true}if(window.top!==window.self){f.log(["in frame, exit"]);this._OFF=true}this._subMenus=[];for(var K in c){c[K]()}},writeLoginInfo:function(ae,N){ae=ae||{};var T=this,ad=F("_nk_")||F("tracknick"),L=g(F("uc1")),Y=parseInt(L._msg_)||0,Q=f.now(),S="http://login.taobao.com",i=ae.memberServer||"http://member1.taobao.com",aa=ae.outmemServer||"http://outmem.taobao.com",K=ae.loginServer||"https://login.taobao.com",U=ae.loginUrl||K+"/member/login.jhtml?f=top",O=location.href,V,ab,M,ac,Z,R=H;if(/^http.*(\/member\/login\.jhtml)$/i.test(O)){O=H}V=ae.redirectUrl||O;if(V){U+="&redirectURL="+encodeURIComponent(V)}ab=ae.logoutUrl||S+"/member/logout.jhtml?f=top";M=i+"/member/newbie.htm";ac=aa+"/message/list_private_msg.htm?t="+Q;Z="http://jianghu.taobao.com/admin/home.htm?t="+Q;if(T.isLogin()){R='hi\uff0c<a class="user-nick" href="'+Z+'" target="_top">'+w(unescape(ad.replace(/\\u/g,"%u")))+"</a>\uff01"+T.showVIP()+'<a id="J_Logout" href="'+ab+'" target="_top">\u9000\u51fa</a><a href="'+ac+'" target="_top">\u7ad9\u5185\u4fe1';if(Y){R+="("+Y+")"}R+="</a>"}else{R='\u4eb2\uff0c\u6b22\u8fce\u6765\u6dd8\u5b9d\uff01<a href="'+U+'" target="_top">\u8bf7\u767b\u5f55</a>';R+='<a href="'+M+'" target="_top">\u514d\u8d39\u6ce8\u518c</a>'}if(N){var P=document.getElementById("site-nav");if(P){var W=P.getElementsByTagName("p")[0];if(W&&W.className==="login-info"){W.innerHTML=R}}return}I.write(R);if(T.showVIP().length<1){return}var X=document.getElementById("J_Vip_Areas");if(u){y(X,"mouseover",function(af){o(X,"vip-areas-hover")});y(X,"mouseout",function(af){r(X,"vip-areas-hover")})}},showVIP:function(){var i=parseInt(g(F("uc1"))["tag"])||0,L=H,M=H,K="http://vip"+s;f.log(["vip",i]);if(f.indexOf(i,[0,1,2,3,4,5,6])>-1){if(i>2){M='<a class="vip-my-service" href="http://service.taobao.com/support/minerva/robot_main.htm?dcs=2&sourceId=400&businessId=100&moduleGroupId=taobaocrm" rel="nofollow" target="_top"></a>'}L='<span class="vip-areas" id="J_Vip_Areas"><a class="vip-icon'+i+'" id="J_VipIcon" rel="nofollow" target="_top" href="http://vip.taobao.com/"></a><span class="vip-content"><b></b><a class="vip-toy-icon'+i+'" href="http://vip.taobao.com/growth_info.htm" rel="nofollow" target="_top"></a><span class="vip-my-level">\u6211\u7684\u7b49\u7ea7\uff1a<a class="vip-my-level'+i+'" target="_top" href="http://vip.taobao.com/growth_info.htm" rel="nofollow" target="_top"></a></span><a class="vip-my-power" href="http://vip.taobao.com/growth_info.htm" rel="nofollow" target="_top">\u67e5\u770b\u6211\u7684\u4f1a\u5458\u7279\u6743</a>'+M+"</span></span>"}else{if(i===7){L='<span class="vip-areas" id="J_Vip_Areas"><a class="vip-icon'+i+'" id="J_VipIcon" rel="nofollow" target="_top" href="http://vip.taobao.com"></a><span class="vip-content-new" id="J_Vip_Content_New"><b></b><a class="vip-close" id="J_VipClose" href="javascript:void(0);" target="_self"></a><span class="vip-upgrade">\u4eb2\uff0c\u6dd8\u5b9d\u4f1a\u5458\u4f53\u7cfb\u5168\u7f51\u5347\u7ea7\u4e2d\uff01</span><br /><span class="vip-activation"><a target="_top" href="http://huiyuan.taobao.com" rel="nofollow" target="_top">\u70b9\u6b64\u6fc0\u6d3b</a>\uff0c\u9886\u53d6\u4f60\u7684\u65b0\u8eab\u4efd\u548c\u65b0\u7279\u6743</span></span></span>'}}return L},isLogin:function(){var K=F("tracknick"),i=F("_nk_")||K;return !!(F("_l_g_")&&i||F("ck1")&&K)},getCartElem:function(){return j&&G("cart","li",j)[0]},initMiniCart:function(){var K=this,O="http://cart"+s+"/top_cart_quantity.htm?",M=function(){f.getScript(O+"callback=TB.Global.setCartNum&t="+f.now()+(x?"&appid="+x:H))};if(K._OFF=(K._OFF||!!!K.getCartElem())){return}f.log(["off",K._OFF]);var i=g(F("mt")),L,N;if(i&&(L=i.ci)){L=L.split("_");N=parseInt(L[1]);L=parseInt(L[0]);K._OFF=L<0;if(L<0){f.log("ci < 0, not request and not init minicart");return}if(K.isLogin()){if(N===0){f.log("login , cp = 0, ci >= 0, requesting");M()}else{if(N===1){f.log("login , cp = 1, minicart is init.");TB.Global.setCartNum(L)}}}else{if(N===0){f.log("not login , cp = 0, ci >= 0, minicart is init.");TB.Global.setCartNum(L)}else{if(N===1){f.log("not login , cp = 1, ci >= 0, requesting.");M()}}}}else{f.log(["no mt, requesting"]);M()}},setCartNum:function(L){if(!f.isNumber(L)||TB.Global._OFF){return}var K=TB.Global.getCartElem();if(!K){return}var M=K.getElementsByTagName("a")[0],N='<span class="mini-cart-line"></span><s></s>\u8d2d\u7269\u8f66',i=x!==19;if(L<0){TB.Global._OFF=L===-1;M.innerHTML=N;r(K,b);e.MiniCart&&e.MiniCart.hide();return}M.innerHTML=N+'<span class="mc-count'+(L<10?" mc-pt3":H)+'">'+L+"</span>\u4ef6"+(i?"<b></b>":H);M.href="http://ju.atpanel.com/?url=http://cart"+s+"/my_cart.htm?from=mini&ad_id=&am_id=&cm_id=&pm_id=150042785330be233161";o(K,b);if(!i){o(K,k)}o(K,"menu");o(M,"menu-hd");M.id="mc-menu-hd";if(e.MiniCart){e.MiniCart.cartNum=L;e.MiniCart.isExpired=true}else{f.ready(function(){var O=0;f.getScript("http://"+n+"/p/global/1.0/minicart"+(z?H:"-min")+".js?t=20110811.js",function(){if(f.DOM){e.MiniCart.init(L,i)}else{f.log("minicart: try "+O);if(O<10){setTimeout(arguments.callee,1000);O++}else{f.use("core",function(){e.MiniCart.init(L,i)})}}})})}},run:function(i){var K=this;K.initMiniCart();if(K.isLogin()){var L=0;f.later(function(){var N=I.getElementById("J_Logout");f.log(["tmall vip try: ",L]);if(!N){if(L<20){setTimeout(arguments.callee,20);L++}return}var M=K.showVIP();if(M.length<1){return}var O=I.createElement("div");O.innerHTML=M;N.parentNode.insertBefore(O.firstChild,N);K._addMenu(O.firstChild)},30)}},setUserMsg:function(M){if(M.success&&M.success==="true"){var L=f.DOM;if(!L){return}var O=L.get(".login-info",j),N=L.offset(O),K=L.get("#gb-msg-notice"),i;if(!K){K=L.create('<div id="gb-msg-notice"><div class="gb-msg-inner gb-msg-info"><p class="gb-msg-content">'+M.result["messages"][0]+'</p><div class="gb-msg-icon gb-msg-close" title="\u5173\u95ed"></div></div><div class="gb-msg-icon gb-msg-tri"><div class="gb-msg-icon gb-msg-tri-inner"></div></div></div>');L.append(K,j.parentNode);L.offset(K,{left:N.left+30,top:N.top+L.height(O)+1});f.Event.on(K,"click",function(Q){var P=Q.target;if(L.hasClass(P,"gb-msg-close")){L.hide(K)}})}else{i=L.get(".gb-msg-content",K);L.html(i,M.result["messages"][0]);L.show(K)}}}};TB.Cart=f.merge({},{domain:document.domain.indexOf("taobao.net")>-1?"daily.taobao.net":"taobao.com",API:"http://cart.%domain%/check_cart_login.htm",cache:{},popup:null,redirect:function(N,M){var L=f.makeArray(arguments);var O=arguments.callee;var i=this;if(M.indexOf("ct=")===-1&&F("t")){M=M+(M.indexOf("?")===-1?"?":"&")+"ct="+F("t")}if(!f.DOM||!f.Event){f.getScript("http://a.tbcdn.cn/s/kissy/1.1.6/packages/core-min.js",function(){O.apply(i,L)});return}this._addStyleSheetOnce();var K=f.guid();this.cache[K]=f.makeArray(arguments);f.getScript(this.API.replace("%domain%",this.domain)+"?callback=TB.Cart.redirectCallback&guid="+K,{timeout:4000,error:function(){location.href=M}})},redirectCallback:function(L){var K=L.guid;var i=f.trim(this.cache[K][1]);if(!L.needLogin){location.href=i;return}if(!K){throw Error("[error] guid not found in callback data")}if(!this.popup){this.popup=this._initPopup()}this._initLoginIframe(i)},hidePopup:function(i){i&&i.preventDefault&&i.preventDefault();f.DOM.css(this.popup,"visibility","hidden")},showPopup:function(){this._centerPopup();f.DOM.css(this.popup,"visibility","visible")},_centerPopup:function(){var i=(f.DOM.viewportHeight()-parseInt(f.DOM.css(this.popup,"height"),10))/2;i=i<0?0:i;f.DOM.css(this.popup,"top",i)},_addStyleSheetOnce:function(){if(!this._stylesheetAdded){f.DOM.addStyleSheet("#g-cartlogin{position:fixed;_position:absolute;border:1px solid #aaa;left:50%;top:120px;margin-left:-206px;width:412px;height:272px;z-index:10001;background:#fafafa;-moz-box-shadow:rgba(0,0,0,0.2) 3px 3px 3px;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,0.2);filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=3,OffY=3,Color=#16000000,Positive=true);} #g_minicart_login_close{position:absolute;right:5px;top:5px;width:17px;height:17px;background:url(http://img01.taobaocdn.com/tps/i1/T1krl0Xk8zXXXXXXXX-194-382.png) no-repeat -100px -69px;text-indent:-999em;overflow:hidden;}#g-cartlogin-close{cursor:pointer;position:absolute;right:5px;top:5px;width:17px;height:17px;line-height:0;overflow:hidden;background:url(http://img03.taobaocdn.com/tps/i1/T1k.tYXadGXXXXXXXX-146-77.png) no-repeat -132px 0;text-indent:-999em;}");this._stylesheetAdded=true}},_initPopup:function(){var i=f.DOM.create('<div id="g-cartlogin"></div>');f.DOM.append(i,f.DOM.get("body"));return i},_initLoginIframe:function(i){var K="https://login."+this.domain+"/member/login.jhtml?from=globalcart&style=mini&redirectURL="+encodeURIComponent(i)+"&full_redirect=true";this.popup.innerHTML='<iframe src="'+K+'" width="410" height="270" frameborder="0" scrolling="0"></iframe><span title="\u5173\u95ed" id="g-cartlogin-close">\u5173\u95ed</span>';f.Event.on("#g-cartlogin-close","click",this.hidePopup,this);this.showPopup()}});function F(K){if(e.userCookie&&!f.isUndefined(e.userCookie[K])){return e.userCookie[K]}if(f.isUndefined(E[K])){var i=I.cookie.match("(?:^|;)\\s*"+K+"=([^;]*)");E[K]=(i&&i[1])?decodeURIComponent(i[1]):H}return E[K]}function w(K){var L=I.createElement("div"),i=I.createTextNode(K);L.appendChild(i);return L.innerHTML}function G(S,T,K){var M=K.getElementsByTagName(T||"*"),Q=[],O=0,N=0,P=M.length,L,R;S=l+S+l;for(;O<P;++O){L=M[O];R=L.className;if(R&&(l+R+l).indexOf(S)>-1){Q[N++]=L}}return Q}function y(M,L,K,i){if(!M){return}if(M.addEventListener){M.addEventListener(L,K,!!i)}else{if(M.attachEvent){M.attachEvent("on"+L,K)}}}function B(M,L,K,i){if(!M){return}if(M.removeEventListener){M.removeEventListener(L,K,!!i)}else{if(M.detachEvent){M.detachEvent("on"+L,K)}}}function o(L,i){var K=l+L.className+l;if(K.indexOf(l+i+l)===-1){K+=i;L.className=f.trim(K)}}function r(L,i){var K=l+L.className+l;if(K.indexOf(l+i+l)!==-1){K=K.replace(l+i+l,l);L.className=f.trim(K)}}function g(i){if(e.userCookie&&e.userCookie.version=="2"){return f.unparam(i,"&amp;")}return f.unparam(i)}function h(i){if(i.preventDefault){i.preventDefault()}else{i.returnValue=false}}});(function(){var g=KISSY,e,a,j=window.g_config,i=j.assetsHost||"http://a.tbcdn.cn",k="1.1.6",b={"1.1.6":["datalazyload","suggest","switchable","uibase","overlay2","imagezoom","flash","template"]},c=j.kissyVersion||k,h=j.kissyWidgets||b[c],l="/s/kissy/"+c+"/??",f=(function(){return"?t=20111215"})(),d="packages/core-min.js,",m=[];g.each(h,function(n){m.push(n+"/"+n+"-pkg-min.js")});a={"tb-core":{fullpath:i+l+d+m.join(",")+"?t=20110119.js"},"tshop-mods":{fullpath:i+"/p/shop/1.0/??mods/c/head/head-min.js,mods/b/head/head-min.js,mods/s/rank/rank-min.js,mods/s/service/service-min.js,mods/s/isv/isv-min.js,mods/s/compatible/compatible-min.js,mods/s/countdown/countdown-min.js,mods/s/load-module/load-module-min.js,mods/s/search/search-min.js,mods/s/rechargeCenter/rechargeCenter-min.js,mods/s/rechargeAlimama/rechargeAlimama-min.js,init-min.js"+f,requires:["tb-core"]}};g.each(["mod~c2c-head","mod~b2c-head","mod~rank","mod~service","mod~slide","mod~load-module","mod~search","mod~rechargeCenter","mod~rechargeAlimama","isv","init"],function(n){a[n]={requires:["tshop-mods"]}});e=g.app("TShop");e.add(a);e.namespace("mods","widgets");g.mix(e,{timeStamp:f,isDetail:function(){return 1===window.g_config["appId"]},isMall:function(){return"b"===window.g_config["type"]},isBid:function(){return"auction"===window.g_config["pageType"]},addTimeStamp:function(){var n=g.now();return function(o){return o+(o.indexOf("?")===-1?"?":"&")+"t="+n}}()})})();