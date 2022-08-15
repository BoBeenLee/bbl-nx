"use strict";(globalThis.webpackChunkbbl_nx=globalThis.webpackChunkbbl_nx||[]).push([[32],{31032(a,b,c){c.r(b),c.d(b,{ColorControl:()=>bs,default:()=>bs}),c(19601),c(47941),c(69600),c(57327),c(41539),c(9653),c(74916),c(39714),c(15306),c(66992),c(51532),c(78783),c(33948),c(4723),c(21249),c(23123),c(54747),c(47042),c(92222),c(26833),c(23157),c(68309),c(82526),c(41817),c(32165),c(91038);var d,e,f,g=c(72857),h=c(67294),i=c(65316);function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(a){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function l(a,b){return q(a)||p(a,b)||n(a,b)||m()}function m(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(a,b){if(a){if("string"==typeof a)return o(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return o(a,b)}}function o(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function p(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}function q(a){if(Array.isArray(a))return a}function r(){return(r=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function s(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)b.indexOf(c=f[d])>=0||(e[c]=a[c]);return e}function t(a){var b=(0,h.useRef)(a),c=(0,h.useRef)(function(a){b.current&&b.current(a)});return b.current=a,c.current}c(52326),c(35032),c(80129);var u=function(a,b,c){return void 0===b&&(b=0),void 0===c&&(c=1),a>c?c:a<b?b:a},v=function(a){return"touches"in a},w=function(a){return a&&a.ownerDocument.defaultView||self},x=function(a,b,c){var d=a.getBoundingClientRect(),e=v(b)?function(a,b){for(var c=0;c<a.length;c++)if(a[c].identifier===b)return a[c];return a[0]}(b.touches,c):b;return{left:u((e.pageX-(d.left+w(a).pageXOffset))/d.width),top:u((e.pageY-(d.top+w(a).pageYOffset))/d.height)}},y=function(a){v(a)||a.preventDefault()},z=h.memo(function(a){var b=a.onMove,c=a.onKey,d=s(a,["onMove","onKey"]),e=(0,h.useRef)(null),f=t(b),g=t(c),i=(0,h.useRef)(null),j=(0,h.useRef)(!1),k=(0,h.useMemo)(function(){var a=function(a){y(a),(v(a)?a.touches.length>0:a.buttons>0)&&e.current?f(x(e.current,a,i.current)):c(!1)},b=function(){return c(!1)};function c(c){var d=j.current,f=w(e.current),g=c?f.addEventListener:f.removeEventListener;g(d?"touchmove":"mousemove",a),g(d?"touchend":"mouseup",b)}return[function(a){var b=a.nativeEvent,d=e.current;if(d&&(y(b),!function(a,b){return b&&!v(a)}(b,j.current)&&d)){if(v(b)){j.current=!0;var g=b.changedTouches||[];g.length&&(i.current=g[0].identifier)}d.focus(),f(x(d,b,i.current)),c(!0)}},function(a){var b=a.which||a.keyCode;b<37||b>40||(a.preventDefault(),g({left:39===b?.05:37===b?-0.05:0,top:40===b?.05:38===b?-0.05:0}))},c]},[g,f]),l=k[0],m=k[1],n=k[2];return(0,h.useEffect)(function(){return n},[n]),h.createElement("div",r({},d,{onTouchStart:l,onMouseDown:l,className:"react-colorful__interactive",ref:e,onKeyDown:m,tabIndex:0,role:"slider"}))}),A=function(a){return a.filter(Boolean).join(" ")},B=function(a){var b=a.color,c=a.left,d=a.top,e=A(["react-colorful__pointer",a.className]);return h.createElement("div",{className:e,style:{top:100*(void 0===d?.5:d)+"%",left:100*c+"%"}},h.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:b}}))},C=function(a,b,c){return void 0===b&&(b=0),void 0===c&&(c=Math.pow(10,b)),Math.round(c*a)/c},D={grad:.9,turn:360,rad:360/(2*Math.PI)},E=function(a){return"#"===a[0]&&(a=a.substr(1)),a.length<6?{r:parseInt(a[0]+a[0],16),g:parseInt(a[1]+a[1],16),b:parseInt(a[2]+a[2],16),a:1}:{r:parseInt(a.substr(0,2),16),g:parseInt(a.substr(2,2),16),b:parseInt(a.substr(4,2),16),a:1}},F=function(a){var b=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return b?G({h:function(a,b){return void 0===b&&(b="deg"),Number(a)*(D[b]||1)}(b[1],b[2]),s:Number(b[3]),l:Number(b[4]),a:void 0===b[5]?1:Number(b[5])/(b[6]?100:1)}):{h:0,s:0,v:0,a:1}},G=function(a){var b=a.s,c=a.l;return{h:a.h,s:(b*=(c<50?c:100-c)/100)>0?2*b/(c+b)*100:0,v:c+b,a:a.a}},H=function(a){var b=a.s,c=a.v,d=a.a,e=(200-b)*c/100;return{h:C(a.h),s:C(e>0&&e<200?b*c/100/(e<=100?e:200-e)*100:0),l:C(e/2),a:C(d,2)}},I=function(a){var b=H(a);return"hsl("+b.h+", "+b.s+"%, "+b.l+"%)"},J=function(a){var b=H(a);return"hsla("+b.h+", "+b.s+"%, "+b.l+"%, "+b.a+")"},K=function(a){var b=a.h,c=a.s,d=a.v,e=a.a;c/=100,d/=100;var f=Math.floor(b=b/360*6),g=d*(1-c),h=d*(1-(b-f)*c),i=d*(1-(1-b+f)*c),j=f%6;return{r:C(255*[d,h,g,g,i,d][j]),g:C(255*[i,d,d,h,g,g][j]),b:C(255*[g,g,i,d,d,h][j]),a:C(e,2)}},L=function(a){var b=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return b?N({r:Number(b[1])/(b[2]?100/255:1),g:Number(b[3])/(b[4]?100/255:1),b:Number(b[5])/(b[6]?100/255:1),a:void 0===b[7]?1:Number(b[7])/(b[8]?100:1)}):{h:0,s:0,v:0,a:1}},M=function(a){var b=a.toString(16);return b.length<2?"0"+b:b},N=function(a){var b=a.r,c=a.g,d=a.b,e=a.a,f=Math.max(b,c,d),g=f-Math.min(b,c,d),h=g?f===b?(c-d)/g:f===c?2+(d-b)/g:4+(b-c)/g:0;return{h:C(60*(h<0?h+6:h)),s:C(f?g/f*100:0),v:C(f/255*100),a:e}},O=h.memo(function(a){var b=a.hue,c=a.onChange,d=A(["react-colorful__hue",a.className]);return h.createElement("div",{className:d},h.createElement(z,{onMove:function(a){c({h:360*a.left})},onKey:function(a){c({h:u(b+360*a.left,0,360)})},"aria-label":"Hue","aria-valuetext":C(b)},h.createElement(B,{className:"react-colorful__hue-pointer",left:b/360,color:I({h:b,s:100,v:100,a:1})})))}),P=h.memo(function(a){var b=a.hsva,c=a.onChange,d={backgroundColor:I({h:b.h,s:100,v:100,a:1})};return h.createElement("div",{className:"react-colorful__saturation",style:d},h.createElement(z,{onMove:function(a){c({s:100*a.left,v:100-100*a.top})},onKey:function(a){c({s:u(b.s+100*a.left,0,100),v:u(b.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+C(b.s)+"%, Brightness "+C(b.v)+"%"},h.createElement(B,{className:"react-colorful__saturation-pointer",top:1-b.v/100,left:b.s/100,color:I(b)})))}),Q=function(a,b){if(a===b)return!0;for(var c in a)if(a[c]!==b[c])return!1;return!0},R=function(a,b){return a.replace(/\s/g,"")===b.replace(/\s/g,"")};function S(a,b,c){var d=t(c),e=(0,h.useState)(function(){return a.toHsva(b)}),f=e[0],g=e[1],i=(0,h.useRef)({color:b,hsva:f});(0,h.useEffect)(function(){if(!a.equal(b,i.current.color)){var c=a.toHsva(b);i.current={hsva:c,color:b},g(c)}},[b,a]),(0,h.useEffect)(function(){var b;Q(f,i.current.hsva)||a.equal(b=a.fromHsva(f),i.current.color)||(i.current={hsva:f,color:b},d(b))},[f,a,d]);var j=(0,h.useCallback)(function(a){g(function(b){return Object.assign({},b,a)})},[]);return[f,j]}for(var T="undefined"!=typeof window?h.useLayoutEffect:h.useEffect,U=new Map,V=function(a){T(function(){var b=a.current?a.current.ownerDocument:document;if(void 0!==b&&!U.has(b)){var d=b.createElement("style");d.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',U.set(b,d);var e=function(){return c.nc}();e&&d.setAttribute("nonce",e),b.head.appendChild(d)}},[])},W=function(a){var b=a.className,c=a.colorModel,d=a.color,e=void 0===d?c.defaultColor:d,f=a.onChange,g=s(a,["className","colorModel","color","onChange"]),i=(0,h.useRef)(null);V(i);var j=S(c,e,f),k=j[0],l=j[1],m=A(["react-colorful",b]);return h.createElement("div",r({},g,{ref:i,className:m}),h.createElement(P,{hsva:k,onChange:l}),h.createElement(O,{hue:k.h,onChange:l,className:"react-colorful__last-control"}))},X={defaultColor:"000",toHsva:function(a){return N(E(a))},fromHsva:function(a){var b,c,d;return c=(b=K(a)).g,d=b.b,"#"+M(b.r)+M(c)+M(d)},equal:function(a,b){return a.toLowerCase()===b.toLowerCase()||Q(E(a),E(b))}},Y=function(a){return h.createElement(W,r({},a,{colorModel:X}))},Z=function(a){var b=a.className,c=a.hsva,d=a.onChange,e={backgroundImage:"linear-gradient(90deg, "+J(Object.assign({},c,{a:0}))+", "+J(Object.assign({},c,{a:1}))+")"},f=A(["react-colorful__alpha",b]);return h.createElement("div",{className:f},h.createElement("div",{className:"react-colorful__alpha-gradient",style:e}),h.createElement(z,{onMove:function(a){d({a:a.left})},onKey:function(a){d({a:u(c.a+a.left)})},"aria-label":"Alpha","aria-valuetext":C(100*c.a)+"%"},h.createElement(B,{className:"react-colorful__alpha-pointer",left:c.a,color:J(c)})))},$=function(a){var b=a.className,c=a.colorModel,d=a.color,e=void 0===d?c.defaultColor:d,f=a.onChange,g=s(a,["className","colorModel","color","onChange"]),i=(0,h.useRef)(null);V(i);var j=S(c,e,f),k=j[0],l=j[1],m=A(["react-colorful",b]);return h.createElement("div",r({},g,{ref:i,className:m}),h.createElement(P,{hsva:k,onChange:l}),h.createElement(O,{hue:k.h,onChange:l}),h.createElement(Z,{hsva:k,onChange:l,className:"react-colorful__last-control"}))},_={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:F,fromHsva:J,equal:R},aa=function(a){return h.createElement($,r({},a,{colorModel:_}))},ab={defaultColor:"rgba(0, 0, 0, 1)",toHsva:L,fromHsva:function(a){var b=K(a);return"rgba("+b.r+", "+b.g+", "+b.b+", "+b.a+")"},equal:R},ac=function(a){return h.createElement($,r({},a,{colorModel:ab}))},ad={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},ae={},af=0,ag=Object.keys(ad);af<ag.length;af++){var ah=ag[af];ae[ad[ah]]=ah}for(var ai={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},aj=ai,ak=0,al=Object.keys(ai);ak<al.length;ak++){var am=al[ak];if(!("channels"in ai[am]))throw Error("missing channels property: "+am);if(!("labels"in ai[am]))throw Error("missing channel labels property: "+am);if(ai[am].labels.length!==ai[am].channels)throw Error("channel and label counts mismatch: "+am);var an=ai[am],ao=an.channels,ap=an.labels;delete ai[am].channels,delete ai[am].labels,Object.defineProperty(ai[am],"channels",{value:ao}),Object.defineProperty(ai[am],"labels",{value:ap})}function aq(a,b){return Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2)+Math.pow(a[2]-b[2],2)}ai.rgb.hsl=function(a){var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=Math.min(d,e,f),h=Math.max(d,e,f),i=h-g;h===g?b=0:d===h?b=(e-f)/i:e===h?b=2+(f-d)/i:f===h&&(b=4+(d-e)/i),(b=Math.min(60*b,360))<0&&(b+=360);var j=(g+h)/2;return[b,100*(h===g?0:j<=.5?i/(h+g):i/(2-h-g)),100*j]},ai.rgb.hsv=function(a){var b,c,d,e,f,g=a[0]/255,h=a[1]/255,i=a[2]/255,j=Math.max(g,h,i),k=j-Math.min(g,h,i),l=function(a){return(j-a)/6/k+.5};return 0===k?(e=0,f=0):(f=k/j,b=l(g),c=l(h),d=l(i),g===j?e=d-c:h===j?e=1/3+b-d:i===j&&(e=2/3+c-b),e<0?e+=1:e>1&&(e-=1)),[360*e,100*f,100*j]},ai.rgb.hwb=function(a){var b=a[0],c=a[1],d=a[2],e=ai.rgb.hsl(a)[0],f=1/255*Math.min(b,Math.min(c,d));return d=1-1/255*Math.max(b,Math.max(c,d)),[e,100*f,100*d]},ai.rgb.cmyk=function(a){var b=a[0]/255,c=a[1]/255,d=a[2]/255,e=Math.min(1-b,1-c,1-d);return[100*((1-b-e)/(1-e)||0),100*((1-c-e)/(1-e)||0),100*((1-d-e)/(1-e)||0),100*e]},ai.rgb.keyword=function(a){var b,c=ae[a];if(c)return c;for(var d=1/0,e=0,f=Object.keys(ad);e<f.length;e++){var g=f[e],h=aq(a,ad[g]);h<d&&(d=h,b=g)}return b},ai.keyword.rgb=function(a){return ad[a]},ai.rgb.xyz=function(a){var b=a[0]/255,c=a[1]/255,d=a[2]/255;b=b>.04045?Math.pow((b+.055)/1.055,2.4):b/12.92;var e=.4124*b+.3576*(c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92)+.1805*(d=d>.04045?Math.pow((d+.055)/1.055,2.4):d/12.92),f=.2126*b+.7152*c+.0722*d,g=.0193*b+.1192*c+.9505*d;return[100*e,100*f,100*g]},ai.rgb.lab=function(a){var b=ai.rgb.xyz(a),c=b[0],d=b[1],e=b[2];c/=95.047,d/=100,e/=108.883,c=c>.008856?Math.pow(c,1/3):7.787*c+16/116,d=d>.008856?Math.pow(d,1/3):7.787*d+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116;var f=116*d-16,g=500*(c-d),h=200*(d-e);return[f,g,h]},ai.hsl.rgb=function(a){var b,c,d,e=a[0]/360,f=a[1]/100,g=a[2]/100;if(0===f)return[d=255*g,d,d];b=g<.5?g*(1+f):g+f-g*f;for(var h=2*g-b,i=[0,0,0],j=0;j<3;j++)(c=e+ -(1/3*(j-1)))<0&&c++,c>1&&c--,d=6*c<1?h+(b-h)*6*c:2*c<1?b:3*c<2?h+(b-h)*(2/3-c)*6:h,i[j]=255*d;return i},ai.hsl.hsv=function(a){var b=a[0],c=a[1]/100,d=a[2]/100,e=c,f=Math.max(d,.01);d*=2,c*=d<=1?d:2-d,e*=f<=1?f:2-f;var g=(d+c)/2,h=0===d?2*e/(f+e):2*c/(d+c);return[b,100*h,100*g]},ai.hsv.rgb=function(a){var b=a[0]/60,c=a[1]/100,d=a[2]/100,e=Math.floor(b)%6,f=b-Math.floor(b),g=255*d*(1-c),h=255*d*(1-c*f),i=255*d*(1-c*(1-f));switch(d*=255,e){case 0:return[d,i,g];case 1:return[h,d,g];case 2:return[g,d,i];case 3:return[g,h,d];case 4:return[i,g,d];case 5:return[d,g,h]}},ai.hsv.hsl=function(a){var b,c,d=a[0],e=a[1]/100,f=a[2]/100,g=Math.max(f,.01);c=(2-e)*f;var h=(2-e)*g;return b=e*g,b/=h<=1?h:2-h,[d,100*(b=b||0),100*(c/=2)]},ai.hwb.rgb=function(a){var b,c,d,e,f=a[0]/360,g=a[1]/100,h=a[2]/100,i=g+h;i>1&&(g/=i,h/=i);var j=Math.floor(6*f),k=1-h;(1&j)!=0&&(b=1-b);var l=g+(b=6*f-j)*(k-g);switch(j){default:case 6:case 0:c=k,d=l,e=g;break;case 1:c=l,d=k,e=g;break;case 2:c=g,d=k,e=l;break;case 3:c=g,d=l,e=k;break;case 4:c=l,d=g,e=k;break;case 5:c=k,d=g,e=l}return[255*c,255*d,255*e]},ai.cmyk.rgb=function(a){var b=a[0]/100,c=a[1]/100,d=a[2]/100,e=a[3]/100;return[255*(1-Math.min(1,b*(1-e)+e)),255*(1-Math.min(1,c*(1-e)+e)),255*(1-Math.min(1,d*(1-e)+e))]},ai.xyz.rgb=function(a){var b,c,d,e=a[0]/100,f=a[1]/100,g=a[2]/100;return b=3.2406*e+ -1.5372*f+ -0.4986*g,c=-0.9689*e+1.8758*f+.0415*g,d=.0557*e+ -0.204*f+1.057*g,b=b>.0031308?1.055*Math.pow(b,1/2.4)-.055:12.92*b,c=c>.0031308?1.055*Math.pow(c,1/2.4)-.055:12.92*c,d=d>.0031308?1.055*Math.pow(d,1/2.4)-.055:12.92*d,b=Math.min(Math.max(0,b),1),c=Math.min(Math.max(0,c),1),d=Math.min(Math.max(0,d),1),[255*b,255*c,255*d]},ai.xyz.lab=function(a){var b=a[0],c=a[1],d=a[2];b/=95.047,c/=100,d/=108.883,b=b>.008856?Math.pow(b,1/3):7.787*b+16/116,c=c>.008856?Math.pow(c,1/3):7.787*c+16/116,d=d>.008856?Math.pow(d,1/3):7.787*d+16/116;var e=116*c-16,f=500*(b-c),g=200*(c-d);return[e,f,g]},ai.lab.xyz=function(a){var b,c,d,e=a[0],f=a[1],g=a[2];b=f/500+(c=(e+16)/116),d=c-g/200;var h=Math.pow(c,3),i=Math.pow(b,3),j=Math.pow(d,3);return c=h>.008856?h:(c-16/116)/7.787,b=i>.008856?i:(b-16/116)/7.787,d=j>.008856?j:(d-16/116)/7.787,[b*=95.047,c*=100,d*=108.883]},ai.lab.lch=function(a){var b,c=a[0],d=a[1],e=a[2];return(b=360*Math.atan2(e,d)/2/Math.PI)<0&&(b+=360),[c,Math.sqrt(d*d+e*e),b]},ai.lch.lab=function(a){var b=a[0],c=a[1],d=a[2],e=d/360*2*Math.PI;return[b,c*Math.cos(e),c*Math.sin(e)]},ai.rgb.ansi16=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:null,c=l(a,3),d=c[0],e=c[1],f=c[2],g=null===b?ai.rgb.hsv(a)[2]:b;if(0===(g=Math.round(g/50)))return 30;var h=30+(Math.round(f/255)<<2|Math.round(e/255)<<1|Math.round(d/255));return 2===g&&(h+=60),h},ai.hsv.ansi16=function(a){return ai.rgb.ansi16(ai.hsv.rgb(a),a[2])},ai.rgb.ansi256=function(a){var b=a[0],c=a[1],d=a[2];return b===c&&c===d?b<8?16:b>248?231:Math.round((b-8)/247*24)+232:16+36*Math.round(b/255*5)+6*Math.round(c/255*5)+Math.round(d/255*5)},ai.ansi16.rgb=function(a){var b=a%10;if(0===b||7===b)return a>50&&(b+=3.5),[b=b/10.5*255,b,b];var c=(~~(a>50)+1)*.5,d=(1&b)*c*255,e=(b>>1&1)*c*255,f=(b>>2&1)*c*255;return[d,e,f]},ai.ansi256.rgb=function(a){if(a>=232){var b,c=(a-232)*10+8;return[c,c,c]}var d=Math.floor((a-=16)/36)/5*255,e=Math.floor((b=a%36)/6)/5*255,f=b%6/5*255;return[d,e,f]},ai.rgb.hex=function(a){var b=(((255&Math.round(a[0]))<<16)+((255&Math.round(a[1]))<<8)+(255&Math.round(a[2]))).toString(16).toUpperCase();return"000000".substring(b.length)+b},ai.hex.rgb=function(a){var b=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!b)return[0,0,0];var c=b[0];3===b[0].length&&(c=c.split("").map(function(a){return a+a}).join(""));var d=parseInt(c,16);return[d>>16&255,d>>8&255,255&d]},ai.rgb.hcg=function(a){var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=Math.max(Math.max(d,e),f),h=Math.min(Math.min(d,e),f),i=g-h;return b=i<1?h/(1-i):0,c=i<=0?0:g===d?(e-f)/i%6:g===e?2+(f-d)/i:4+(d-e)/i,c/=6,c%=1,[360*c,100*i,100*b]},ai.hsl.hcg=function(a){var b=a[1]/100,c=a[2]/100,d=c<.5?2*b*c:2*b*(1-c),e=0;return d<1&&(e=(c-.5*d)/(1-d)),[a[0],100*d,100*e]},ai.hsv.hcg=function(a){var b=a[1]/100,c=a[2]/100,d=b*c,e=0;return d<1&&(e=(c-d)/(1-d)),[a[0],100*d,100*e]},ai.hcg.rgb=function(a){var b=a[0]/360,c=a[1]/100,d=a[2]/100;if(0===c)return[255*d,255*d,255*d];var e=[0,0,0],f=b%1*6,g=f%1,h=1-g,i=0;switch(Math.floor(f)){case 0:e[0]=1,e[1]=g,e[2]=0;break;case 1:e[0]=h,e[1]=1,e[2]=0;break;case 2:e[0]=0,e[1]=1,e[2]=g;break;case 3:e[0]=0,e[1]=h,e[2]=1;break;case 4:e[0]=g,e[1]=0,e[2]=1;break;default:e[0]=1,e[1]=0,e[2]=h}return i=(1-c)*d,[(c*e[0]+i)*255,(c*e[1]+i)*255,(c*e[2]+i)*255]},ai.hcg.hsv=function(a){var b=a[1]/100,c=b+a[2]/100*(1-b),d=0;return c>0&&(d=b/c),[a[0],100*d,100*c]},ai.hcg.hsl=function(a){var b=a[1]/100,c=a[2]/100*(1-b)+.5*b,d=0;return c>0&&c<.5?d=b/(2*c):c>=.5&&c<1&&(d=b/(2*(1-c))),[a[0],100*d,100*c]},ai.hcg.hwb=function(a){var b=a[1]/100,c=b+a[2]/100*(1-b);return[a[0],(c-b)*100,(1-c)*100]},ai.hwb.hcg=function(a){var b=a[1]/100,c=a[2]/100,d=1-c,e=d-b,f=0;return e<1&&(f=(d-e)/(1-e)),[a[0],100*e,100*f]},ai.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]},ai.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]},ai.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]},ai.gray.hsl=function(a){return[0,0,a[0]]},ai.gray.hsv=ai.gray.hsl,ai.gray.hwb=function(a){return[0,100,a[0]]},ai.gray.cmyk=function(a){return[0,0,0,a[0]]},ai.gray.lab=function(a){return[a[0],0,0]},ai.gray.hex=function(a){var b=255&Math.round(a[0]/100*255),c=((b<<16)+(b<<8)+b).toString(16).toUpperCase();return"000000".substring(c.length)+c},ai.rgb.gray=function(a){return[(a[0]+a[1]+a[2])/3/255*100]};var ar=aj;function as(){for(var a={},b=Object.keys(ar),c=b.length,d=0;d<c;d++)a[b[d]]={distance:-1,parent:null};return a}function at(a){var b=as(),c=[a];for(b[a].distance=0;c.length;)for(var d=c.pop(),e=Object.keys(ar[d]),f=e.length,g=0;g<f;g++){var h=e[g],i=b[h];-1===i.distance&&(i.distance=b[d].distance+1,i.parent=d,c.unshift(h))}return b}function au(a,b){return function(c){return b(a(c))}}function av(a,b){for(var c=[b[a].parent,a],d=ar[b[a].parent][a],e=b[a].parent;b[e].parent;)c.unshift(b[e].parent),d=au(ar[b[e].parent][e],d),e=b[e].parent;return d.conversion=c,d}var aw=function(a){for(var b=at(a),c={},d=Object.keys(b),e=d.length,f=0;f<e;f++){var g=d[f];null!==b[g].parent&&(c[g]=av(g,b))}return c},ax=aj,ay=aw,az={},aA=Object.keys(ax);function aB(a){var b=function(){for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];var e=c[0];return null==e?e:(e.length>1&&(c=e),a(c))};return"conversion"in a&&(b.conversion=a.conversion),b}function aC(a){var b=function(){for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];var e=c[0];if(null==e)return e;e.length>1&&(c=e);var f=a(c);if("object"===k(f))for(var g=f.length,h=0;h<g;h++)f[h]=Math.round(f[h]);return f};return"conversion"in a&&(b.conversion=a.conversion),b}aA.forEach(function(a){az[a]={},Object.defineProperty(az[a],"channels",{value:ax[a].channels}),Object.defineProperty(az[a],"labels",{value:ax[a].labels});var b=ay(a);Object.keys(b).forEach(function(c){var d=b[c];az[a][c]=aC(d),az[a][c].raw=aB(d)})});var aD=az,aE=g.u,aF=function(){return aE.Date.now()},aG=/\s/;function aH(a){for(var b=a.length;b-- &&aG.test(a.charAt(b)););return b}var aI=aH,aJ=/^\s+/;function aK(a){return a?a.slice(0,aI(a)+1).replace(aJ,""):a}var aL=aK,aM=g.x,aN=g.y,aO=0/0,aP=/^[-+]0x[0-9a-f]+$/i,aQ=/^0b[01]+$/i,aR=/^0o[0-7]+$/i,aS=parseInt;function aT(a){if("number"==typeof a)return a;if(aN(a))return aO;if(aM(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=aM(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=aL(a);var c=aQ.test(a);return c||aR.test(a)?aS(a.slice(2),c?2:8):aP.test(a)?aO:+a}var aU=g.x,aV=aF,aW=aT,aX="Expected a function",aY=Math.max,aZ=Math.min;function a$(a,b,c){var d,e,f,g,h,i,j=0,k=!1,l=!1,m=!0;if("function"!=typeof a)throw TypeError(aX);function n(b){var c=d,f=e;return d=e=void 0,j=b,g=a.apply(f,c)}function o(a){return j=a,h=setTimeout(r,b),k?n(a):g}function p(a){var c=a-i,d=a-j,e=b-c;return l?aZ(e,f-d):e}function q(a){var c=a-i,d=a-j;return void 0===i||c>=b||c<0||l&&d>=f}function r(){var a=aV();if(q(a))return s(a);h=setTimeout(r,p(a))}function s(a){return(h=void 0,m&&d)?n(a):(d=e=void 0,g)}function t(){void 0!==h&&clearTimeout(h),j=0,d=i=e=h=void 0}function u(){return void 0===h?g:s(aV())}function v(){var a=aV(),c=q(a);if(d=arguments,e=this,i=a,c){if(void 0===h)return o(i);if(l)return clearTimeout(h),h=setTimeout(r,b),n(i)}return void 0===h&&(h=setTimeout(r,b)),g}return b=aW(b)||0,aU(c)&&(k=!!c.leading,l="maxWait"in c,f=l?aY(aW(c.maxWait)||0,b):f,m="trailing"in c?!!c.trailing:m),v.cancel=t,v.flush=u,v}var a_=a$,a0=g.x,a1="Expected a function";function a2(a,b,c){var d=!0,e=!0;if("function"!=typeof a)throw TypeError(a1);return a0(c)&&(d="leading"in c?!!c.leading:d,e="trailing"in c?!!c.trailing:e),a_(a,b,{leading:d,maxWait:b,trailing:e})}var a3=a2,a4=i.zo.div({position:"relative",maxWidth:250}),a5=(0,i.zo)(g.W)({position:"absolute",zIndex:1,top:4,left:4}),a6=i.zo.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),a7=(0,i.zo)(g.T)(function(a){return{fontFamily:a.theme.typography.fonts.base}}),a8=i.zo.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),a9=i.zo.div(function(a){var b=a.theme;return{width:16,height:16,boxShadow:a.active?"".concat(b.appBorderColor," 0 0 0 1px inset, ").concat(b.color.mediumdark,"50 0 0 0 4px"):"".concat(b.appBorderColor," 0 0 0 1px inset"),borderRadius:b.appBorderRadius}}),ba='url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',bb=function(a){var b=a.value,c=a.active,d=a.onClick,e=a.style,f=(0,g.a)(a,["value","active","onClick","style"]),i="linear-gradient(".concat(b,", ").concat(b,"), ").concat(ba,", linear-gradient(#fff, #fff)");return h.createElement(a9,Object.assign({},f,{active:c,onClick:d},{style:Object.assign(Object.assign({},e),{backgroundImage:i})}))},bc=(0,i.zo)(g.F.Input)(function(a){return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:a.theme.typography.fonts.base}}),bd=(0,i.zo)(g.I)(function(a){return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:a.theme.input.color}});!function(a){a.RGB="rgb",a.HSL="hsl",a.HEX="hex"}(f||(f={}));var be=Object.values(f),bf=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,bg=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,bh=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,bi=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,bj=/^\s*#?([0-9a-f]{3})\s*$/i,bk=(j(d={},f.HEX,Y),j(d,f.RGB,ac),j(d,f.HSL,aa),d),bl=(j(e={},f.HEX,"transparent"),j(e,f.RGB,"rgba(0, 0, 0, 0)"),j(e,f.HSL,"hsla(0, 0%, 0%, 0)"),e),bm=function(a){var b=null==a?void 0:a.match(bf);if(!b)return[0,0,0,1];var c=l(b,5),d=c[1],e=c[2],f=c[3],g=c[4],h=void 0===g?1:g;return[d,e,f,h].map(Number)},bn=function(a){if(a){var b=!0;if(bg.test(a)){var c,d,e=bm(a),g=l(e,4),h=g[0],i=g[1],k=g[2],m=g[3],n=aD.rgb.hsl([h,i,k])||[0,0,0],o=l(n,3),p=o[0],q=o[1],r=o[2];return d={valid:b,value:a,keyword:aD.rgb.keyword([h,i,k]),colorSpace:f.RGB},j(d,f.RGB,a),j(d,f.HSL,"hsla(".concat(p,", ").concat(q,"%, ").concat(r,"%, ").concat(m,")")),j(d,f.HEX,"#".concat(aD.rgb.hex([h,i,k]).toLowerCase())),d}if(bh.test(a)){var s,t=bm(a),u=l(t,4),v=u[0],w=u[1],x=u[2],y=u[3],z=aD.hsl.rgb([v,w,x])||[0,0,0],A=l(z,3),B=A[0],C=A[1],D=A[2];return s={valid:b,value:a,keyword:aD.hsl.keyword([v,w,x]),colorSpace:f.HSL},j(s,f.RGB,"rgba(".concat(B,", ").concat(C,", ").concat(D,", ").concat(y,")")),j(s,f.HSL,a),j(s,f.HEX,"#".concat(aD.hsl.hex([v,w,x]).toLowerCase())),s}var E=a.replace("#",""),F=aD.keyword.rgb(E)||aD.hex.rgb(E),G=aD.rgb.hsl(F),H=a;if(/[^#a-f0-9]/i.test(a)?H=E:bi.test(a)&&(H="#".concat(E)),H.startsWith("#"))b=bi.test(H);else try{aD.keyword.hex(H)}catch(I){b=!1}return c={valid:b,value:H,keyword:aD.rgb.keyword(F),colorSpace:f.HEX},j(c,f.RGB,"rgba(".concat(F[0],", ").concat(F[1],", ").concat(F[2],", 1)")),j(c,f.HSL,"hsla(".concat(G[0],", ").concat(G[1],"%, ").concat(G[2],"%, 1)")),j(c,f.HEX,H),c}},bo=function(a,b,c){if(!a||!(null==b?void 0:b.valid))return bl[c];if(c!==f.HEX)return(null==b?void 0:b[c])||bl[c];if(!b.hex.startsWith("#"))try{return"#".concat(aD.keyword.hex(b.hex))}catch(d){return bl.hex}var e=b.hex.match(bj);if(!e)return bi.test(b.hex)?b.hex:bl.hex;var g=l(e[1].split(""),3),h=g[0],i=g[1],j=g[2];return"#".concat(h).concat(h).concat(i).concat(i).concat(j).concat(j)},bp=function(a,b){var c=(0,h.useState)(a||""),d=l(c,2),e=d[0],g=d[1],i=(0,h.useState)(function(){return bn(e)}),j=l(i,2),k=j[0],m=j[1],n=l((0,h.useState)((null==k?void 0:k.colorSpace)||f.HEX),2),o=n[0],p=n[1];(0,h.useEffect)(function(){void 0===a&&(g(""),m(void 0),p(f.HEX))},[a]);var q=(0,h.useMemo)(function(){return bo(e,k,o).toLowerCase()},[e,k,o]),r=(0,h.useCallback)(function(a){var c=bn(a);g((null==c?void 0:c.value)||a||""),c&&(m(c),p(c.colorSpace),b(c.value))},[b]),s=(0,h.useCallback)(function(){var a=be.indexOf(o)+1;a>=be.length&&(a=0),p(be[a]);var c=(null==k?void 0:k[be[a]])||"";g(c),b(c)},[k,o,b]);return{value:e,realValue:q,updateValue:r,color:k,colorSpace:o,cycleColorSpace:s}},bq=function(a){return a.replace(/\s*/,"").toLowerCase()},br=function(a,b,c){var d=(0,h.useState)((null==b?void 0:b.valid)?[b]:[]),e=l(d,2),f=e[0],g=e[1];(0,h.useEffect)(function(){void 0===b&&g([])},[b]);var i=(0,h.useMemo)(function(){return(a||[]).map(function(a){return"string"==typeof a?bn(a):a.title?Object.assign(Object.assign({},bn(a.color)),{keyword:a.title}):bn(a.color)}).concat(f).filter(Boolean).slice(-27)},[a,f]),j=(0,h.useCallback)(function(a){(null==a?void 0:a.valid)&&(i.some(function(b){return bq(b[c])===bq(a[c])})||g(function(b){return b.concat(a)}))},[c,i]);return{presets:i,addPreset:j}},bs=function(a){var b=a.name,c=a.value,d=a.onChange,e=a.onFocus,f=a.onBlur,i=a.presetColors,j=a.startOpen,k=bp(c,a3(d,200)),l=k.value,m=k.realValue,n=k.updateValue,o=k.color,p=k.colorSpace,q=k.cycleColorSpace,r=br(i,o,p),s=r.presets,t=r.addPreset,u=bk[p];return h.createElement(a4,null,h.createElement(a5,{trigger:"click",startOpen:j,closeOnClick:!0,onVisibilityChange:function(){return t(o)},tooltip:h.createElement(a6,null,h.createElement(u,Object.assign({color:"transparent"===m?"#000000":m},{onChange:n,onFocus:e,onBlur:f})),s.length>0&&h.createElement(a8,null,s.map(function(a,b){return h.createElement(g.W,{key:"".concat(a.value,"-").concat(b),hasChrome:!1,tooltip:h.createElement(a7,{note:a.keyword||a.value})},h.createElement(bb,{value:a[p],active:o&&bq(a[p])===bq(o[p]),onClick:function(){return n(a.value)}}))})))},h.createElement(bb,{value:m,style:{margin:4}})),h.createElement(bc,{id:(0,g.z)(b),value:l,onChange:function(a){return n(a.target.value)},onFocus:function(a){return a.target.select()},placeholder:"Choose color..."}),l?h.createElement(bd,{icon:"markup",onClick:q}):null)}}}])