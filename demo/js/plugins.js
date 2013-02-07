/**
 * Avoid `console` errors in browsers that lack a console.
 */

(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/**
 * REM unit polyfill
 * @author Chuck Carpenter
 * @source http://cbrac.co/XCmW8V
 */

(function(window,undefined){var cssremunit=function(){var div=document.createElement("div");div.style.cssText="font-size: 1rem;";return/rem/.test(div.style.fontSize)},isStyleSheet=function(){var styles=document.getElementsByTagName("link"),filteredStyles=[];for(i=0;i<styles.length;i++)if(styles[i].rel.toLowerCase()==="stylesheet")filteredStyles.push(styles[i]);return filteredStyles},processSheets=function(){var links=[];sheets=isStyleSheet();sheets.og=sheets.length;for(var i=0;i<sheets.length;i++){links[i]=
sheets[i].href;xhr(links[i],matchcss,i)}},matchcss=function(response,i){var clean=removeComments(response.responseText),pattern=/[\w\d\s\-\/\\\[\]:,.'"*()<>+~%#^$_=|]+\{[\w\d\s\-\/\\%#:;,.'"*()]+\d*\.{0,1}\d+rem[\w\d\s\-\/\\%#:;,.'"*()]*\}/g,current=clean.match(pattern),remPattern=/\d*\.{0,1}\d+rem/g,remCurrent=clean.match(remPattern);if(current!==null&&current.length!==0){found=found.concat(current);foundProps=foundProps.concat(remCurrent)}if(i===sheets.og-1)buildIt()},buildIt=function(){var pattern=
/[\w\d\s\-\/\\%#:,.'"*()]+\d*\.{0,1}\d+rem[\w\d\s\-\/\\%#:,.'"*()]*[;}]/g;for(var i=0;i<found.length;i++){rules=rules+found[i].substr(0,found[i].indexOf("{")+1);var current=found[i].match(pattern);for(var j=0;j<current.length;j++){rules=rules+current[j];if(j===current.length-1&&rules[rules.length-1]!=="}")rules=rules+"\n}"}}parseIt()},parseIt=function(){for(var i=0;i<foundProps.length;i++)css[i]=Math.round(eval(foundProps[i].substr(0,foundProps[i].length-3)*fontSize))+"px";loadCSS()},loadCSS=function(){for(var i=
0;i<css.length;i++)if(css[i])rules=rules.replace(foundProps[i],css[i]);var remcss=document.createElement("style");remcss.setAttribute("type","text/css");remcss.id="remReplace";document.getElementsByTagName("head")[0].appendChild(remcss);remcss.styleSheet.cssText=rules},xhr=function(url,callback,i){var xhr=getXMLHttpRequest();xhr.open("GET",url,true);xhr.send();if(window.XMLHttpRequest)xhr.onreadystatechange=function(){if(xhr.readyState===4)callback(xhr,i);else;};else xhr.onreadystatechange=new function(){if(xhr.readyState===
4)callback(xhr,i);else;}},removeComments=function(css){var start=css.search(/\/\*/),end=css.search(/\*\//);if(start>-1&&end>start){css=css.substring(0,start)+css.substring(end+2);return removeComments(css)}else return css},getXMLHttpRequest=function(){if(window.XMLHttpRequest)return new XMLHttpRequest;else return new ActiveXObject("Microsoft.XMLHTTP")};if(!cssremunit()){var rules="",sheets=[],found=[],foundProps=[],css=[],body=document.getElementsByTagName("body")[0],fontSize="";if(body.currentStyle)if(body.currentStyle["fontSize"].indexOf("px")>=
0)fontSize=body.currentStyle["fontSize"].replace("px","");else if(body.currentStyle["fontSize"].indexOf("em")>=0)fontSize=body.currentStyle["fontSize"].replace("em","");else if(body.currentStyle["fontSize"].indexOf("pt")>=0)fontSize=body.currentStyle["fontSize"].replace("pt","");else fontSize=body.currentStyle["fontSize"].replace("%","")/100*16;else if(window.getComputedStyle)fontSize=document.defaultView.getComputedStyle(body,null).getPropertyValue("font-size").replace("px","");processSheets()}else;
})(window);

// Place your Javascript code and plugins here
