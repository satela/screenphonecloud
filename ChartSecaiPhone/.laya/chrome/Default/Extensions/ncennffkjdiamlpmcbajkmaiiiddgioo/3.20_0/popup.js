!function(e){var t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(i,d,function(t){return e[t]}.bind(null,d));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){!function(){var e,t,n,i,d;function o(n){e.setPluginEnabled(!t),window.close()}function r(i){t&&(e.setMonitorVideoTags(!n),window.close())}function l(n){t&&(chrome.tabs.getSelected(null,function(t){if(d&&e.removeBlackListPage(t.url,t.id),i){var n=t.url,o=n.indexOf("://");if(o>=0){var r,l=n.indexOf("/",o+3);r=l>=0?n.substring(0,l):n,e.removeBlackListWebsite(r,t.url,t.id,!0)}}else d||e.addBlackListPage(t.url,t.id)}),window.close())}function c(n){t&&(chrome.tabs.getSelected(null,function(t){var n=t.url,d=n.indexOf("://");if(d>=0){var o,r=n.indexOf("/",d+3);o=r>=0?n.substring(0,r):n,i?e.removeBlackListWebsite(o,t.url,t.id):e.addBlackListWebsite(o,t.id)}}),window.close())}function a(t){e.onFeedback(),window.close()}function u(n){t&&chrome.tabs.query({active:!0,lastFocusedWindow:!0},function(t){if(t)for(var n=0;n<t.length;n++){var i=t[n];e.enterMultiDownload(i.id,i.url)}}),window.close()}function s(e){chrome.tabs.create({url:"http://x.xunlei.com/"},function(){})}function m(){(e=chrome.extension.getBackgroundPage()).isException()?function(){var e=document.getElementById("ThunderChromeSupport");document.body.removeChild(e.parentNode);var t=document.getElementById("EnterMultiSelect");document.body.removeChild(t.parentNode);var n=document.getElementById("MonitorVideoTags");document.body.removeChild(n.parentNode);var i=document.getElementById("ThisPageDisableThunder");document.body.removeChild(i.parentNode);var d=document.getElementById("Feedback");document.body.removeChild(d.parentNode);var o=document.createElement("p");o.innerHTML="<div class=\"guide\"><b><h3><font color='red'>迅雷下载支持异常</font></h3></b></div>",document.body.appendChild(o);var r=document.createElement("p");r.innerHTML='<div class="guide">您可能没有安装迅雷，或已安装的迅雷不完整，请您下载安装最新版本的迅雷！<br>（安装完成后，请重启Chrome浏览器）</div>',document.body.appendChild(r);var l=document.createElement("p");l.setAttribute("align","center"),align=l.attributes.getNamedItem("align").value="center",l.innerHTML='<div class="downloadBtn">立即下载</div>',document.body.appendChild(l),l.addEventListener("click",s)}():(t=e.isPluginEnabled())?(document.getElementById("ThunderChromeSupport").className="item item-select",(n=e.isVideoMonitor())&&(document.getElementById("MonitorVideoTags").className="item item-select"),chrome.tabs.getSelected(null,function(t){i=!e.isMonitorDomain(t.url),d=e.checkIsPageInUserBlackList(t.url),i?(document.getElementById("ThisPageDisableThunder").className="item item-select",document.getElementById("ThisWebsiteDisableThunder").className="item item-select"):d&&(document.getElementById("ThisPageDisableThunder").className="item item-select")})):(document.getElementById("ThunderChromeSupport").className="item",document.getElementById("MonitorVideoTags").className="item-disable",document.getElementById("ThisPageDisableThunder").className="item-disable",document.getElementById("ThisWebsiteDisableThunder").className="item-disable",document.getElementById("EnterMultiSelect").className="item-disable")}document.addEventListener("DOMContentLoaded",function(){document.getElementById("ThunderChromeSupport").addEventListener("click",o),document.getElementById("MonitorVideoTags").addEventListener("click",r),document.getElementById("ThisPageDisableThunder").addEventListener("click",l),document.getElementById("ThisWebsiteDisableThunder").addEventListener("click",c),document.getElementById("Feedback").addEventListener("click",a),document.getElementById("EnterMultiSelect").addEventListener("click",u),m()})}()}]);
//# sourceMappingURL=popup.js.map