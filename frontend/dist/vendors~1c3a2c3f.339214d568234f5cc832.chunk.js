(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},Aplp:function(e,t,r){"use strict";var n,o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),i={},s=0,a=0;function u(e){var t="";do{t=o[e%64]+t,e=Math.floor(e/64)}while(e>0);return t}function h(){var e=u(+new Date);return e!==n?(s=0,n=e):e+"."+u(s++)}for(;a<64;a++)i[o[a]]=a;h.encode=u,h.decode=function(e){var t=0;for(a=0;a<e.length;a++)t=64*t+i[e.charAt(a)];return t},e.exports=h},Sl0r:function(e,t,r){(function(t){var n;!function(){"use strict";(n=function(e,r,n,o){o=o||{},this.dictionary=null,this.rules={},this.dictionaryTable={},this.compoundRules=[],this.compoundRuleCodes={},this.replacementTable=[],this.flags=o.flags||{},this.memoized={},this.loaded=!1;var i,s,a,u,h,l=this;function c(e,t){var r=l._readFile(e,null,o.asyncLoad);o.asyncLoad?r.then((function(e){t(e)})):t(r)}function f(e){r=e,n&&d()}function p(e){n=e,r&&d()}function d(){for(l.rules=l._parseAFF(r),l.compoundRuleCodes={},s=0,u=l.compoundRules.length;s<u;s++){var e=l.compoundRules[s];for(a=0,h=e.length;a<h;a++)l.compoundRuleCodes[e[a]]=[]}for(s in"ONLYINCOMPOUND"in l.flags&&(l.compoundRuleCodes[l.flags.ONLYINCOMPOUND]=[]),l.dictionaryTable=l._parseDIC(n),l.compoundRuleCodes)0===l.compoundRuleCodes[s].length&&delete l.compoundRuleCodes[s];for(s=0,u=l.compoundRules.length;s<u;s++){var t=l.compoundRules[s],i="";for(a=0,h=t.length;a<h;a++){var c=t[a];c in l.compoundRuleCodes?i+="("+l.compoundRuleCodes[c].join("|")+")":i+=c}l.compoundRules[s]=new RegExp(i,"i")}l.loaded=!0,o.asyncLoad&&o.loadedCallback&&o.loadedCallback(l)}return e&&(l.dictionary=e,r&&n?d():"undefined"!=typeof window&&"chrome"in window&&"extension"in window.chrome&&"getURL"in window.chrome.extension?(i=o.dictionaryPath?o.dictionaryPath:"typo/dictionaries",r||c(chrome.extension.getURL(i+"/"+e+"/"+e+".aff"),f),n||c(chrome.extension.getURL(i+"/"+e+"/"+e+".dic"),p)):(i=o.dictionaryPath?o.dictionaryPath:t+"/dictionaries",r||c(i+"/"+e+"/"+e+".aff",f),n||c(i+"/"+e+"/"+e+".dic",p))),this}).prototype={load:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);return this},_readFile:function(e,t,n){if(t=t||"utf8","undefined"!=typeof XMLHttpRequest){var o,i=new XMLHttpRequest;return i.open("GET",e,n),n&&(o=new Promise((function(e,t){i.onload=function(){200===i.status?e(i.responseText):t(i.statusText)},i.onerror=function(){t(i.statusText)}}))),i.overrideMimeType&&i.overrideMimeType("text/plain; charset="+t),i.send(null),n?o:i.responseText}var s=r(2);try{if(s.existsSync(e))return s.readFileSync(e,t);console.log("Path "+e+" does not exist.")}catch(e){return console.log(e),""}},_parseAFF:function(e){var t,r,n,o,i,s,a,u={},h=e.split(/\r?\n/);for(o=0,s=h.length;o<s;o++)if(t=(t=this._removeAffixComments(h[o])).trim()){var l=t.split(/\s+/),c=l[0];if("PFX"==c||"SFX"==c){var f=l[1],p=l[2],d=[];for(i=o+1,a=o+1+(r=parseInt(l[3],10));i<a;i++){var y=(n=h[i].split(/\s+/))[2],m=n[3].split("/"),b=m[0];"0"===b&&(b="");var v=this.parseRuleCodes(m[1]),g=n[4],w={};w.add=b,v.length>0&&(w.continuationClasses=v),"."!==g&&(w.match="SFX"===c?new RegExp(g+"$"):new RegExp("^"+g)),"0"!=y&&(w.remove="SFX"===c?new RegExp(y+"$"):y),d.push(w)}u[f]={type:c,combineable:"Y"==p,entries:d},o+=r}else if("COMPOUNDRULE"===c){for(i=o+1,a=o+1+(r=parseInt(l[1],10));i<a;i++)n=(t=h[i]).split(/\s+/),this.compoundRules.push(n[1]);o+=r}else"REP"===c?3===(n=t.split(/\s+/)).length&&this.replacementTable.push([n[1],n[2]]):this.flags[c]=l[1]}return u},_removeAffixComments:function(e){return e.match(/^\s*#/,"")?"":e},_parseDIC:function(e){var t=(e=this._removeDicComments(e)).split(/\r?\n/),r={};function n(e,t){r.hasOwnProperty(e)||(r[e]=null),t.length>0&&(null===r[e]&&(r[e]=[]),r[e].push(t))}for(var o=1,i=t.length;o<i;o++){var s=t[o];if(s){var a=s.split("/",2),u=a[0];if(a.length>1){var h=this.parseRuleCodes(a[1]);"NEEDAFFIX"in this.flags&&-1!=h.indexOf(this.flags.NEEDAFFIX)||n(u,h);for(var l=0,c=h.length;l<c;l++){var f=h[l],p=this.rules[f];if(p)for(var d=this._applyRule(u,p),y=0,m=d.length;y<m;y++){var b=d[y];if(n(b,[]),p.combineable)for(var v=l+1;v<c;v++){var g=h[v],w=this.rules[g];if(w&&w.combineable&&p.type!=w.type)for(var C=this._applyRule(b,w),x=0,R=C.length;x<R;x++){n(C[x],[])}}}f in this.compoundRuleCodes&&this.compoundRuleCodes[f].push(u)}}else n(u.trim(),[])}}return r},_removeDicComments:function(e){return e=e.replace(/^\t.*$/gm,"")},parseRuleCodes:function(e){if(!e)return[];if(!("FLAG"in this.flags))return e.split("");if("long"===this.flags.FLAG){for(var t=[],r=0,n=e.length;r<n;r+=2)t.push(e.substr(r,2));return t}return"num"===this.flags.FLAG?e.split(","):void 0},_applyRule:function(e,t){for(var r=t.entries,n=[],o=0,i=r.length;o<i;o++){var s=r[o];if(!s.match||e.match(s.match)){var a=e;if(s.remove&&(a=a.replace(s.remove,"")),"SFX"===t.type?a+=s.add:a=s.add+a,n.push(a),"continuationClasses"in s)for(var u=0,h=s.continuationClasses.length;u<h;u++){var l=this.rules[s.continuationClasses[u]];l&&(n=n.concat(this._applyRule(a,l)))}}}return n},check:function(e){if(!this.loaded)throw"Dictionary not loaded.";var t=e.replace(/^\s\s*/,"").replace(/\s\s*$/,"");if(this.checkExact(t))return!0;if(t.toUpperCase()===t){var r=t[0]+t.substring(1).toLowerCase();if(this.hasFlag(r,"KEEPCASE"))return!1;if(this.checkExact(r))return!0;if(this.checkExact(t.toLowerCase()))return!0}var n=t[0].toLowerCase()+t.substring(1);if(n!==t){if(this.hasFlag(n,"KEEPCASE"))return!1;if(this.checkExact(n))return!0}return!1},checkExact:function(e){if(!this.loaded)throw"Dictionary not loaded.";var t,r,n=this.dictionaryTable[e];if(void 0===n){if("COMPOUNDMIN"in this.flags&&e.length>=this.flags.COMPOUNDMIN)for(t=0,r=this.compoundRules.length;t<r;t++)if(e.match(this.compoundRules[t]))return!0}else{if(null===n)return!0;if("object"==typeof n)for(t=0,r=n.length;t<r;t++)if(!this.hasFlag(e,"ONLYINCOMPOUND",n[t]))return!0}return!1},hasFlag:function(e,t,r){if(!this.loaded)throw"Dictionary not loaded.";return!(!(t in this.flags)||(void 0===r&&(r=Array.prototype.concat.apply([],this.dictionaryTable[e])),!r||-1===r.indexOf(this.flags[t])))},alphabet:"",suggest:function(e,t){if(!this.loaded)throw"Dictionary not loaded.";if(t=t||5,this.memoized.hasOwnProperty(e)){var r=this.memoized[e].limit;if(t<=r||this.memoized[e].suggestions.length<r)return this.memoized[e].suggestions.slice(0,t)}if(this.check(e))return[];for(var n=0,o=this.replacementTable.length;n<o;n++){var i=this.replacementTable[n];if(-1!==e.indexOf(i[0])){var s=e.replace(i[0],i[1]);if(this.check(s))return[s]}}var a=this;function u(e,t){var r,n,o,i,s={},u=a.alphabet.length;if("string"==typeof e){var h=e;(e={})[h]=!0}for(var h in e)for(r=0,o=h.length+1;r<o;r++){var l=[h.substring(0,r),h.substring(r)];if(l[1]&&(i=l[0]+l[1].substring(1),t&&!a.check(i)||(i in s?s[i]+=1:s[i]=1)),l[1].length>1&&l[1][1]!==l[1][0]&&(i=l[0]+l[1][1]+l[1][0]+l[1].substring(2),t&&!a.check(i)||(i in s?s[i]+=1:s[i]=1)),l[1]){var c=l[1].substring(0,1).toUpperCase()===l[1].substring(0,1)?"uppercase":"lowercase";for(n=0;n<u;n++){var f=a.alphabet[n];"uppercase"===c&&(f=f.toUpperCase()),f!=l[1].substring(0,1)&&(i=l[0]+f+l[1].substring(1),t&&!a.check(i)||(i in s?s[i]+=1:s[i]=1))}}if(l[1])for(n=0;n<u;n++){c=l[0].substring(-1).toUpperCase()===l[0].substring(-1)&&l[1].substring(0,1).toUpperCase()===l[1].substring(0,1)?"uppercase":"lowercase",f=a.alphabet[n];"uppercase"===c&&(f=f.toUpperCase()),i=l[0]+f+l[1],t&&!a.check(i)||(i in s?s[i]+=1:s[i]=1)}}return s}return a.alphabet="abcdefghijklmnopqrstuvwxyz",this.memoized[e]={suggestions:function(e){var r,n=u(e),o=u(n,!0);for(var i in n)a.check(i)&&(i in o?o[i]+=n[i]:o[i]=n[i]);var s=[];for(r in o)o.hasOwnProperty(r)&&s.push([r,o[r]]);s.sort((function(e,t){var r=e[1],n=t[1];return r<n?-1:r>n?1:t[0].localeCompare(e[0])})).reverse();var h=[],l="lowercase";e.toUpperCase()===e?l="uppercase":e.substr(0,1).toUpperCase()+e.substr(1).toLowerCase()===e&&(l="capitalized");var c=t;for(r=0;r<Math.min(c,s.length);r++)"uppercase"===l?s[r][0]=s[r][0].toUpperCase():"capitalized"===l&&(s[r][0]=s[r][0].substr(0,1).toUpperCase()+s[r][0].substr(1)),a.hasFlag(s[r][0],"NOSUGGEST")||-1!=h.indexOf(s[r][0])?c++:h.push(s[r][0]);return h}(e),limit:t},this.memoized[e].suggestions}}}(),e.exports=n}).call(this,"/")},bZMm:function(e,t){!function(e){"use strict";if(!e.fetch){var t="URLSearchParams"in e,r="Symbol"in e&&"iterator"in Symbol,n="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in e,i="ArrayBuffer"in e;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=function(e){return e&&DataView.prototype.isPrototypeOf(e)},u=ArrayBuffer.isView||function(e){return e&&s.indexOf(Object.prototype.toString.call(e))>-1};d.prototype.append=function(e,t){e=c(e),t=f(t);var r=this.map[e];this.map[e]=r?r+","+t:t},d.prototype.delete=function(e){delete this.map[c(e)]},d.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},d.prototype.set=function(e,t){this.map[c(e)]=f(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),p(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),p(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),p(e)},r&&(d.prototype[Symbol.iterator]=d.prototype.entries);var h=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},g.call(w.prototype),g.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var l=[301,302,303,307,308];x.redirect=function(e,t){if(-1===l.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})},e.Headers=d,e.Request=w,e.Response=x,e.fetch=function(e,t){return new Promise((function(r,o){var i=new w(e,t),s=new XMLHttpRequest;s.onload=function(){var e,t,n={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new x(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n&&(s.responseType="blob"),i.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),s.send(void 0===i._bodyInit?null:i._bodyInit)}))},e.fetch.polyfill=!0}function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function f(e){return"string"!=typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function y(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function m(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function b(e){var t=new FileReader,r=m(t);return t.readAsArrayBuffer(e),r}function v(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(n&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(o&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(i&&n&&a(e))this._bodyArrayBuffer=v(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!i||!ArrayBuffer.prototype.isPrototypeOf(e)&&!u(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=v(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var e=y(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var e,t,r,n=y(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=m(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(C)}),this.json=function(){return this.text().then(JSON.parse)},this}function w(e,t){var r,n,o=(t=t||{}).body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),h.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function C(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function x(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=vendors~1c3a2c3f.339214d568234f5cc832.bundle.map