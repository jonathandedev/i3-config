/*!
   This file is part of ColorZilla

   Written by Alex Sirota (alex @ iosart.com)

   Copyright (c) iosart labs llc 2011, All Rights Reserved

   Please do not use without permission
*/
var ColorZilla;void 0!==ColorZilla&&ColorZilla||(ColorZilla={}),function(){var s=ColorZilla;s.czHSVTriple=function(t,e,r){this.h=t,this.s=e,this.v=r,this.toString=function(){return"("+this.h+", "+this.s+", "+this.v+")"}},s.czHSLTriple=function(t,e,r){this.h=t,this.s=e,this.l=r,this.toString=function(){return"("+this.h+", "+this.s+", "+this.l+")"}},s.czRGBTriple=function(t,e,r){this.r=t,this.g=e,this.b=r,this.toString=function(){return"("+this.r+", "+this.g+", "+this.b+")"}},s.czLABTriple=function(t,e,r){this.l=t,this.a=e,this.b=r,this.toString=function(){return"("+this.l+", "+this.a+", "+this.b+")"}},s.czXYZTriple=function(t,e,r){this.x=t,this.y=e,this.z=r,this.toString=function(){return"("+this.x+", "+this.y+", "+this.z+")"}},s.czCMYKQuadruple=function(t,e,r,n){this.c=t,this.m=e,this.y=r,this.k=n,this.toString=function(){return"("+this.c+", "+this.m+", "+this.y+", "+this.k+")"}},s.czRGBToColor=function(t,e,r){return t|e<<8|r<<16},s.czGetRValue=function(t){return 255&t},s.czGetGValue=function(t){return t>>8&255},s.czGetBValue=function(t){return t>>16&255},s.czIntToPercent=function(t){return Math.floor(100*t/255+.5)},s.czIntToDegrees=function(t){return Math.floor(360*t/255+.5)},s.czDecimalToHexa=function(t){t=t.toString(16);return t=t.length<2?"0"+t:t},s.czColToRGBPercentageAttribute=function(t){return"rgb("+(s.czIntToPercent(s.czGetRValue(t))+"%, "+s.czIntToPercent(s.czGetGValue(t))+"%, "+s.czIntToPercent(s.czGetBValue(t))+"%")+")"},s.czColToHSLAttribute=function(t){t=s.czRGBToHSL(s.czGetRValue(t),s.czGetGValue(t),s.czGetBValue(t));return"hsl("+(t.h+", "+s.czIntToPercent(t.s)+"%, "+s.czIntToPercent(t.l)+"%")+")"},s.czColToRGBAttribute=function(t){return"rgb("+(s.czGetRValue(t)+", "+s.czGetGValue(t)+", "+s.czGetBValue(t))+")"},s.czColToRGBAAttribute=function(t,e){return"rgba("+(s.czGetRValue(t)+", "+s.czGetGValue(t)+", "+s.czGetBValue(t)+", "+e)+")"},s.czRGBAttributeToCol=function(t){t=(t=(t=t.split("(")[1]).split(")")[0]).split(",");return s.czRGBToColor(t[0],t[1],t[2])},s.czColToRGBHexaAttribute=function(t){t=s.czDecimalToHexa(s.czGetRValue(t))+s.czDecimalToHexa(s.czGetGValue(t))+s.czDecimalToHexa(s.czGetBValue(t));return"#"+(t=s.gbCZLowerCaseHexa?t:t.toUpperCase())},s.czRGBHexaAttributeToCol=function(t){var e=t.substr(1,2),r=t.substr(3,2),t=t.substr(5,2),e=parseInt(e,16),r=parseInt(r,16),t=parseInt(t,16);return s.czRGBToColor(e,r,t)},s.czRGBToGrayscale=function(t,e,r){return.3*t+.59*e+.11*r},s.czColToSpecificColorFormat=function(t,e){var r;switch(e){case"rgb":r=s.czColToRGBAttribute(t);break;case"rgba":r=s.czColToRGBAAttribute(t,1);break;case"rgb-perc":r=s.czColToRGBPercentageAttribute(t);break;case"hsl":r=s.czColToHSLAttribute(t);break;case"hex-no-hash":r=(r=s.czColToRGBHexaAttribute(t)).substring(1);break;default:r=s.czColToRGBHexaAttribute(t)}return r},s.czCSSColToSpecificColorFormat=function(t,e){t="#"==t.substr(0,1)?s.czRGBHexaAttributeToCol(t):s.czRGBAttributeToCol(t);return s.czColToSpecificColorFormat(t,e)},s.czRGBToHSV=function(t,e,r){var n,o=Math.max(t,e,r),c=o-Math.min(t,e,r),u=0==o?0:255*c/o;return 0==u?n=0:t==o?n=60*(e-r)/c:e==o?n=120+60*(r-t)/c:r==o&&(n=240+60*(t-e)/c),n<0&&(n+=360),n=Math.round(255*n/360),u=Math.round(u),new s.czHSVTriple(n,u,o)},s.czRGBToHSL=function(t,e,r){t/=255,e/=255,r/=255;var n,o=Math.max(t,e,r),c=Math.min(t,e,r),u=(o+c)/2;if(o==c)n=a=0;else{var i=o-c,a=i/(.5<u?2-o-c:o+c);switch(o){case t:n=(e-r)/i+(e<r?6:0);break;case e:n=(r-t)/i+2;break;case r:n=(t-e)/i+4}n/=6}return n=Math.round(360*n),a=Math.round(255*a),u=Math.round(255*u),new s.czHSLTriple(n,a,u)},s.czRGBToXYZ=function(t,e,r){function n(t){return.04045<t?Math.pow((t+.055)/1.055,2.4):t/12.92}e/=255,r/=255;var o=.4124*(t=n(t/=255))+.3576*(e=n(e))+.1805*(r=n(r)),c=.2126*t+.7152*e+.0722*r,t=.0193*t+.1192*e+.9505*r;return new s.czXYZTriple(o*=100,c*=100,t*=100)},s.czXYZToRGB=function(t,e,r){function n(t){return.0031308<t?1.055*Math.pow(t,1/2.4)-.055:12.92*t}var o=-.9689*(t/=100)+1.8758*(e/=100)+.0415*(r/=100),c=.0557*t-.204*e+1.057*r;function u(t){return t<0?0:255<t?255:t}return t=n(3.2406*t-1.5372*e-.4986*r),o=n(o),c=n(c),t=u(Math.round(255*t)),o=u(Math.round(255*o)),c=u(Math.round(255*c)),new s.czRGBTriple(t,o,c)},s.czXYZToLAB=function(t,e,r){function n(t){return.00885645<t?Math.pow(t,.3333333333):7.787037037037*t+.13793103448}t=n(t/96.422),e=n(e/100),r=n(r/82.521);return new s.czLABTriple(116*e-16,500*(t-e),200*(e-r))},s.czLABToXYZ=function(t,e,r){function n(t){return 6/29<t?Math.pow(t,3):.128418549*(t-.137931)}t=(t+16)/116,r=t-r/200,e=n(t+e/500),t=n(t),r=n(r);return new s.czXYZTriple(e*=96.422,t*=100,r*=82.521)},s.czRGBToLAB=function(t,e,r){t=s.czRGBToXYZ(t,e,r);return s.czXYZToLAB(t.x,t.y,t.z)},s.czLABToRGB=function(t,e,r){t=s.czLABToXYZ(parseFloat(t),parseFloat(e),parseFloat(r));return s.czXYZToRGB(t.x,t.y,t.z)},s.czHSVToRGB=function(t,e,r){var n,o,c,u,i,a,l;if(0==e)n=o=c=r;else{switch(i=(r/=255)*(1-(e/=255)),a=r*(1-e*(u=(t=359*t/15300)-(t=Math.floor(t)))),l=r*(1-e*(1-u)),t){case 0:n=r,o=l,c=i;break;case 1:n=a,o=r,c=i;break;case 2:n=i,o=r,c=l;break;case 3:n=i,o=a,c=r;break;case 4:n=l,o=i,c=r;break;default:n=r,o=i,c=a}n=Math.round(255*n),o=Math.round(255*o),c=Math.round(255*c)}return new s.czRGBTriple(n,o,c)},s.czRGBToCMYK=function(t,e,r){var t=255-t,e=255-e,r=255-r,n=Math.min(t,Math.min(e,r));return 255==n?t=e=r=0:(t=Math.round((t-n)/(255-n)*255),e=Math.round((e-n)/(255-n)*255),r=Math.round((r-n)/(255-n)*255)),new s.czCMYKQuadruple(t,e,r,n)},s.czCMYKToRGB=function(t,e,n,o){return t=(t/=255)*(1-(o/=255))+o,e=(e/=255)*(1-o)+o,n=(n/=255)*(1-o)+o,r=Math.round(255*(1-t)),g=Math.round(255*(1-e)),b=Math.round(255*(1-n)),new s.czRGBTriple(r,g,b)},s.czGetColorLightness=function(t){var e=s.czGetRValue(t),r=s.czGetGValue(t),t=s.czGetBValue(t);return Math.max(e,r,t)},s.czHexaAttributeToPredefinedColor=function(t){return"#800000"==(t=t.toLowerCase())?"maroon":"#ff0000"==t?"red":"#ffa500"==t?"orange":"#ffff00"==t?"yellow":"#808000"==t?"olive":"#800080"==t?"purple":"#ff00ff"==t?"fuchsia":"#ffffff"==t?"white":"#00ff00"==t?"lime":"#008000"==t?"green":"#000080"==t?"navy":"#0000ff"==t?"blue":"#00ffff"==t?"aqua":"#008080"==t?"teal":"#000000"==t?"black":"#c0c0c0"==t?"silver":"#808080"==t?"gray":null},s.czFixHexValue=function(t){return 7!=t.length||"#"!=t.substr(0,1)?"#000000":t},s.czFixByteValue=function(t){return 255<t?t=255:t<0&&(t=0),t},s.czFix100Value=function(t){return 100<t?t=100:t<0&&(t=0),t},s.czFixLabABValue=function(t){return 127<t?t=127:t<-128&&(t=-128),t},s.czValidateByteValue=function(t){return!(t<0||255<t)},s.czCompareTwoStrings=function(t,e){return t<e?-1:e<t?1:0},s.czClipString=function(t,e){return t&&(t.length>(e=void 0===e?15:e)?t.substr(0,e)+"...":t)},s.czGetColorPalettePermalink=function(t,e,r){for(var n=[],o=0;o<t.length;o++){var c=t[o],c=s.czColToRGBHexaAttribute(c).substring(1);n.push(c)}t=(n=256<n.length?n.slice(0,255):n).join("+");var u="http://colorzilla.com/colors/"+n.join("+"),r=(r&&(64<r.length&&(r=r.substr(0,64)),u+="/"+encodeURIComponent(r)),null);return e&&(r=(r=(r=(r=e).replace(/^https?:\/\//,"")).replace(/\?.*$/,"")).replace(/#.*$/,""),r=encodeURIComponent(r)),r&&u.length+r.length<1900&&(u+="?source-url="+r),u},s.gbCZLowerCaseHexa=!1}();