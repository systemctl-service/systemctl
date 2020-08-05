/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);;
// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.
// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)
/* jquery.nicescroll
-- version 3.7.6
-- copyright 2017-07-19 InuYaksa*2017
-- licensed under the MIT
--
-- https://nicescroll.areaaperta.com/
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/

/* jshint expr: true */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as anonymous module.
      define(['jquery'], factory);
    } else if (typeof exports === 'object') {
      // Node/CommonJS.
      module.exports = factory(require('jquery'));
    } else {
      // Browser globals.
      factory(jQuery);
    }
  }(function (jQuery) {
  
    "use strict";
  
    // globals
    var domfocus = false,
      mousefocus = false,
      tabindexcounter = 0,
      ascrailcounter = 2000,
      globalmaxzindex = 0;
  
    var $ = jQuery,       // sandbox
      _doc = document,
      _win = window,
      $window = $(_win);
  
    var delegatevents = [];
  
    // http://stackoverflow.com/questions/2161159/get-script-path
    function getScriptPath() {
      var scripts = _doc.currentScript || (function () { var s = _doc.getElementsByTagName('script'); return (s.length) ? s[s.length - 1] : false; })();
      var path = scripts ? scripts.src.split('?')[0] : '';
      return (path.split('/').length > 0) ? path.split('/').slice(0, -1).join('/') + '/' : '';
    }
  
    // based on code by Paul Irish https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/  
    var setAnimationFrame = _win.requestAnimationFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || false;
    var clearAnimationFrame = _win.cancelAnimationFrame || _win.webkitCancelAnimationFrame || _win.mozCancelAnimationFrame || false;
  
    if (!setAnimationFrame) {
      var anilasttime = 0;
      setAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - anilasttime));
        var id = _win.setTimeout(function () { callback(currTime + timeToCall); },
          timeToCall);
        anilasttime = currTime + timeToCall;
        return id;
      };
      clearAnimationFrame = function (id) {
        _win.clearTimeout(id);
      };
    } else {
      if (!_win.cancelAnimationFrame) clearAnimationFrame = function (id) { };
    }
  
    var ClsMutationObserver = _win.MutationObserver || _win.WebKitMutationObserver || false;
  
    var now = Date.now || function () { return new Date().getTime(); };
  
    var _globaloptions = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#424242",
      cursorwidth: "6px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 40,
      mousescrollstep: 9 * 3,
      touchbehavior: false,   // deprecated
      emulatetouch: false,    // replacing touchbehavior
      hwacceleration: true,
      usetransition: true,
      boxzoom: false,
      dblclickzoom: true,
      gesturezoom: true,
      grabcursorenabled: true,
      autohidemode: true,
      background: "",
      iframeautoresize: true,
      cursorminheight: 32,
      preservenativescrolling: true,
      railoffset: false,
      railhoffset: false,
      bouncescroll: true,
      spacebarenabled: true,
      railpadding: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      },
      disableoutline: true,
      horizrailenabled: true,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: true,
      enablemousewheel: true,
      enablekeyboard: true,
      smoothscroll: true,
      sensitiverail: true,
      enablemouselockapi: true,
      //      cursormaxheight:false,
      cursorfixedheight: false,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: true,
      enablescrollonselection: true,
      overflowx: true,
      overflowy: true,
      cursordragspeed: 0.3,
      rtlmode: "auto",
      cursordragontouch: false,
      oneaxismousemode: "auto",
      scriptpath: getScriptPath(),
      preventmultitouchscrolling: true,
      disablemutationobserver: false,
      enableobserver: true,
      scrollbarid: false,
      scrollCLass: false
    };
  
    var browserdetected = false;
  
    var getBrowserDetection = function () {
  
      if (browserdetected) return browserdetected;
  
      var _el = _doc.createElement('DIV'),
        _style = _el.style,
        _agent = navigator.userAgent,
        _platform = navigator.platform,
        d = {};
  
      d.haspointerlock = "pointerLockElement" in _doc || "webkitPointerLockElement" in _doc || "mozPointerLockElement" in _doc;
  
      d.isopera = ("opera" in _win); // 12-
      d.isopera12 = (d.isopera && ("getUserMedia" in navigator));
      d.isoperamini = (Object.prototype.toString.call(_win.operamini) === "[object OperaMini]");
  
      d.isie = (("all" in _doc) && ("attachEvent" in _el) && !d.isopera); //IE10-
      d.isieold = (d.isie && !("msInterpolationMode" in _style)); // IE6 and older
      d.isie7 = d.isie && !d.isieold && (!("documentMode" in _doc) || (_doc.documentMode === 7));
      d.isie8 = d.isie && ("documentMode" in _doc) && (_doc.documentMode === 8);
      d.isie9 = d.isie && ("performance" in _win) && (_doc.documentMode === 9);
      d.isie10 = d.isie && ("performance" in _win) && (_doc.documentMode === 10);
      d.isie11 = ("msRequestFullscreen" in _el) && (_doc.documentMode >= 11); // IE11+
  
      d.ismsedge = ("msCredentials" in _win);  // MS Edge 14+
  
      d.ismozilla = ("MozAppearance" in _style);
  
      d.iswebkit = !d.ismsedge && ("WebkitAppearance" in _style);
  
      d.ischrome = d.iswebkit && ("chrome" in _win);
      d.ischrome38 = (d.ischrome && ("touchAction" in _style)); // behavior changed in touch emulation    
      d.ischrome22 = (!d.ischrome38) && (d.ischrome && d.haspointerlock);
      d.ischrome26 = (!d.ischrome38) && (d.ischrome && ("transition" in _style)); // issue with transform detection (maintain prefix)
  
      d.cantouch = ("ontouchstart" in _doc.documentElement) || ("ontouchstart" in _win); // with detection for Chrome Touch Emulation    
      d.hasw3ctouch = (_win.PointerEvent || false) && ((navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)); //IE11 pointer events, following W3C Pointer Events spec
      d.hasmstouch = (!d.hasw3ctouch) && (_win.MSPointerEvent || false); // IE10 pointer events
  
      d.ismac = /^mac$/i.test(_platform);
  
      d.isios = d.cantouch && /iphone|ipad|ipod/i.test(_platform);
      d.isios4 = d.isios && !("seal" in Object);
      d.isios7 = d.isios && ("webkitHidden" in _doc);  //iOS 7+
      d.isios8 = d.isios && ("hidden" in _doc);  //iOS 8+
      d.isios10 = d.isios && _win.Proxy;  //iOS 10+
  
      d.isandroid = (/android/i.test(_agent));
  
      d.haseventlistener = ("addEventListener" in _el);
  
      d.trstyle = false;
      d.hastransform = false;
      d.hastranslate3d = false;
      d.transitionstyle = false;
      d.hastransition = false;
      d.transitionend = false;
  
      d.trstyle = "transform";
      d.hastransform = ("transform" in _style) || (function () {
        var check = ['msTransform', 'webkitTransform', 'MozTransform', 'OTransform'];
        for (var a = 0, c = check.length; a < c; a++) {
          if (_style[check[a]] !== undefined) {
            d.trstyle = check[a];
            break;
          }
        }
        d.hastransform = (!!d.trstyle);
      })();
  
      if (d.hastransform) {
        _style[d.trstyle] = "translate3d(1px,2px,3px)";
        d.hastranslate3d = /translate3d/.test(_style[d.trstyle]);
      }
  
      d.transitionstyle = "transition";
      d.prefixstyle = '';
      d.transitionend = "transitionend";
  
      d.hastransition = ("transition" in _style) || (function () {
  
        d.transitionend = false;
        var check = ['webkitTransition', 'msTransition', 'MozTransition', 'OTransition', 'OTransition', 'KhtmlTransition'];
        var prefix = ['-webkit-', '-ms-', '-moz-', '-o-', '-o', '-khtml-'];
        var evs = ['webkitTransitionEnd', 'msTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd', 'KhtmlTransitionEnd'];
        for (var a = 0, c = check.length; a < c; a++) {
          if (check[a] in _style) {
            d.transitionstyle = check[a];
            d.prefixstyle = prefix[a];
            d.transitionend = evs[a];
            break;
          }
        }
        if (d.ischrome26) d.prefixstyle = prefix[1];  // always use prefix
  
        d.hastransition = (d.transitionstyle);
  
      })();
  
      function detectCursorGrab() {
        var lst = ['grab', '-webkit-grab', '-moz-grab'];
        if ((d.ischrome && !d.ischrome38) || d.isie) lst = []; // force setting for IE returns false positive and chrome cursor bug
        for (var a = 0, l = lst.length; a < l; a++) {
          var p = lst[a];
          _style.cursor = p;
          if (_style.cursor == p) return p;
        }
        return 'url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize'; // thanks to https://cdnjs.com/ for the openhand cursor!
      }
      d.cursorgrabvalue = detectCursorGrab();
  
      d.hasmousecapture = ("setCapture" in _el);
  
      d.hasMutationObserver = (ClsMutationObserver !== false);
  
      _el = null; //memory released
  
      browserdetected = d;
  
      return d;
    };
  
    var NiceScrollClass = function (myopt, me) {
  
      var self = this;
  
      this.version = '3.7.6';
      this.name = 'nicescroll';
  
      this.me = me;
  
      var $body = $("body");
  
      var opt = this.opt = {
        doc: $body,
        win: false
      };
  
      $.extend(opt, _globaloptions);  // clone opts
  
      // Options for internal use
      opt.snapbackspeed = 80;
  
      if (myopt || false) {
        for (var a in opt) {
          if (myopt[a] !== undefined) opt[a] = myopt[a];
        }
      }
  
      if (opt.disablemutationobserver) ClsMutationObserver = false;
  
      this.doc = opt.doc;
      this.iddoc = (this.doc && this.doc[0]) ? this.doc[0].id || '' : '';
      this.ispage = /^BODY|HTML/.test((opt.win) ? opt.win[0].nodeName : this.doc[0].nodeName);
      this.haswrapper = (opt.win !== false);
      this.win = opt.win || (this.ispage ? $window : this.doc);
      this.docscroll = (this.ispage && !this.haswrapper) ? $window : this.win;
      this.body = $body;
      this.viewport = false;
  
      this.isfixed = false;
  
      this.iframe = false;
      this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));
  
      this.istextarea = (this.win[0].nodeName == 'TEXTAREA');
  
      this.forcescreen = false; //force to use screen position on events
  
      this.canshowonmouseevent = (opt.autohidemode != "scroll");
  
      // Events jump table    
      this.onmousedown = false;
      this.onmouseup = false;
      this.onmousemove = false;
      this.onmousewheel = false;
      this.onkeypress = false;
      this.ongesturezoom = false;
      this.onclick = false;
  
      // Nicescroll custom events
      this.onscrollstart = false;
      this.onscrollend = false;
      this.onscrollcancel = false;
  
      this.onzoomin = false;
      this.onzoomout = false;
  
      // Let's start!  
      this.view = false;
      this.page = false;
  
      this.scroll = {
        x: 0,
        y: 0
      };
      this.scrollratio = {
        x: 0,
        y: 0
      };
      this.cursorheight = 20;
      this.scrollvaluemax = 0;
  
      // http://dev.w3.org/csswg/css-writing-modes-3/#logical-to-physical
      // http://dev.w3.org/csswg/css-writing-modes-3/#svg-writing-mode
      if (opt.rtlmode == "auto") {
        var target = this.win[0] == _win ? this.body : this.win;
        var writingMode = target.css("writing-mode") || target.css("-webkit-writing-mode") || target.css("-ms-writing-mode") || target.css("-moz-writing-mode");
  
        if (writingMode == "horizontal-tb" || writingMode == "lr-tb" || writingMode === "") {
          this.isrtlmode = (target.css("direction") == "rtl");
          this.isvertical = false;
        } else {
          this.isrtlmode = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl" || writingMode == "rl-tb");
          this.isvertical = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl");
        }
      } else {
        this.isrtlmode = (opt.rtlmode === true);
        this.isvertical = false;
      }
      //    this.checkrtlmode = false;
  
      this.scrollrunning = false;
  
      this.scrollmom = false;
  
      this.observer = false;  // observer div changes
      this.observerremover = false;  // observer on parent for remove detection
      this.observerbody = false;  // observer on body for position change
  
      if (opt.scrollbarid !== false) {
        this.id = opt.scrollbarid;
      } else {
        do {
          this.id = "ascrail" + (ascrailcounter++);
        } while (_doc.getElementById(this.id));
      }
  
      this.rail = false;
      this.cursor = false;
      this.cursorfreezed = false;
      this.selectiondrag = false;
  
      this.zoom = false;
      this.zoomactive = false;
  
      this.hasfocus = false;
      this.hasmousefocus = false;
  
      //this.visibility = true;
      this.railslocked = false;  // locked by resize
      this.locked = false;  // prevent lost of locked status sets by user
      this.hidden = false; // rails always hidden
      this.cursoractive = true; // user can interact with cursors
  
      this.wheelprevented = false; //prevent mousewheel event
  
      this.overflowx = opt.overflowx;
      this.overflowy = opt.overflowy;
  
      this.nativescrollingarea = false;
      this.checkarea = 0;
  
      this.events = []; // event list for unbind
  
      this.saved = {};  // style saved
  
      this.delaylist = {};
      this.synclist = {};
  
      this.lastdeltax = 0;
      this.lastdeltay = 0;
  
      this.detected = getBrowserDetection();
  
      var cap = $.extend({}, this.detected);
  
      this.canhwscroll = (cap.hastransform && opt.hwacceleration);
      this.ishwscroll = (this.canhwscroll && self.haswrapper);
  
      if (!this.isrtlmode) {
        this.hasreversehr = false;
      } else if (this.isvertical) { // RTL mode with reverse horizontal axis
        this.hasreversehr = !(cap.iswebkit || cap.isie || cap.isie11);
      } else {
        this.hasreversehr = !(cap.iswebkit || (cap.isie && !cap.isie10 && !cap.isie11));
      }
  
      this.istouchcapable = false; // desktop devices with touch screen support
  
      //## Check WebKit-based desktop with touch support
      //## + Firefox 18 nightly build (desktop) false positive (or desktop with touch support)
  
      if (!cap.cantouch && (cap.hasw3ctouch || cap.hasmstouch)) {  // desktop device with multiple input
        this.istouchcapable = true;
      } else if (cap.cantouch && !cap.isios && !cap.isandroid && (cap.iswebkit || cap.ismozilla)) {
        this.istouchcapable = true;
      }
  
      //## disable MouseLock API on user request
      if (!opt.enablemouselockapi) {
        cap.hasmousecapture = false;
        cap.haspointerlock = false;
      }
  
      this.debounced = function (name, fn, tm) {
        if (!self) return;
        var dd = self.delaylist[name] || false;
        if (!dd) {
          self.delaylist[name] = {
            h: setAnimationFrame(function () {
              self.delaylist[name].fn.call(self);
              self.delaylist[name] = false;
            }, tm)
          };
          fn.call(self);
        }
        self.delaylist[name].fn = fn;
      };
  
  
      this.synched = function (name, fn) {
        if (self.synclist[name]) self.synclist[name] = fn;
        else {
          self.synclist[name] = fn;
          setAnimationFrame(function () {
            if (!self) return;
            self.synclist[name] && self.synclist[name].call(self);
            self.synclist[name] = null;
          });
        }
      };
  
      this.unsynched = function (name) {
        if (self.synclist[name]) self.synclist[name] = false;
      };
  
      this.css = function (el, pars) { // save & set
        for (var n in pars) {
          self.saved.css.push([el, n, el.css(n)]);
          el.css(n, pars[n]);
        }
      };
  
      this.scrollTop = function (val) {
        return (val === undefined) ? self.getScrollTop() : self.setScrollTop(val);
      };
  
      this.scrollLeft = function (val) {
        return (val === undefined) ? self.getScrollLeft() : self.setScrollLeft(val);
      };
  
      // derived by by Dan Pupius www.pupius.net
      var BezierClass = function (st, ed, spd, p1, p2, p3, p4) {
  
        this.st = st;
        this.ed = ed;
        this.spd = spd;
  
        this.p1 = p1 || 0;
        this.p2 = p2 || 1;
        this.p3 = p3 || 0;
        this.p4 = p4 || 1;
  
        this.ts = now();
        this.df = ed - st;
      };
      BezierClass.prototype = {
        B2: function (t) {
          return 3 * (1 - t) * (1 - t) * t;
        },
        B3: function (t) {
          return 3 * (1 - t) * t * t;
        },
        B4: function (t) {
          return t * t * t;
        },
        getPos: function () {
          return (now() - this.ts) / this.spd;
        },
        getNow: function () {
          var pc = (now() - this.ts) / this.spd;
          var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
          return (pc >= 1) ? this.ed : this.st + (this.df * bz) | 0;
        },
        update: function (ed, spd) {
          this.st = this.getNow();
          this.ed = ed;
          this.spd = spd;
          this.ts = now();
          this.df = this.ed - this.st;
          return this;
        }
      };
  
      //derived from http://stackoverflow.com/questions/11236090/
      function getMatrixValues() {
        var tr = self.doc.css(cap.trstyle);
        if (tr && (tr.substr(0, 6) == "matrix")) {
          return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, '').split(/, +/);
        }
        return false;
      }
  
      if (this.ishwscroll) {    // hw accelerated scroll
  
        this.doc.translate = {
          x: 0,
          y: 0,
          tx: "0px",
          ty: "0px"
        };
  
        //this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
        if (cap.hastranslate3d && cap.isios) this.doc.css("-webkit-backface-visibility", "hidden"); // prevent flickering http://stackoverflow.com/questions/3461441/      
  
        this.getScrollTop = function (last) {
          if (!last) {
            var mtx = getMatrixValues();
            if (mtx) return (mtx.length == 16) ? -mtx[13] : -mtx[5]; //matrix3d 16 on IE10
            if (self.timerscroll && self.timerscroll.bz) return self.timerscroll.bz.getNow();
          }
          return self.doc.translate.y;
        };
  
        this.getScrollLeft = function (last) {
          if (!last) {
            var mtx = getMatrixValues();
            if (mtx) return (mtx.length == 16) ? -mtx[12] : -mtx[4]; //matrix3d 16 on IE10
            if (self.timerscroll && self.timerscroll.bh) return self.timerscroll.bh.getNow();
          }
          return self.doc.translate.x;
        };
  
        this.notifyScrollEvent = function (el) {
          var e = _doc.createEvent("UIEvents");
          e.initUIEvent("scroll", false, false, _win, 1);
          e.niceevent = true;
          el.dispatchEvent(e);
        };
  
        var cxscrollleft = (this.isrtlmode) ? 1 : -1;
  
        if (cap.hastranslate3d && opt.enabletranslate3d) {
          this.setScrollTop = function (val, silent) {
            self.doc.translate.y = val;
            self.doc.translate.ty = (val * -1) + "px";
            self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
            if (!silent) self.notifyScrollEvent(self.win[0]);
          };
          this.setScrollLeft = function (val, silent) {
            self.doc.translate.x = val;
            self.doc.translate.tx = (val * cxscrollleft) + "px";
            self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
            if (!silent) self.notifyScrollEvent(self.win[0]);
          };
        } else {
          this.setScrollTop = function (val, silent) {
            self.doc.translate.y = val;
            self.doc.translate.ty = (val * -1) + "px";
            self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
            if (!silent) self.notifyScrollEvent(self.win[0]);
          };
          this.setScrollLeft = function (val, silent) {
            self.doc.translate.x = val;
            self.doc.translate.tx = (val * cxscrollleft) + "px";
            self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
            if (!silent) self.notifyScrollEvent(self.win[0]);
          };
        }
      } else {    // native scroll
  
        this.getScrollTop = function () {
          return self.docscroll.scrollTop();
        };
        this.setScrollTop = function (val) {
          self.docscroll.scrollTop(val);
        };
  
        this.getScrollLeft = function () {
          var val;
          if (!self.hasreversehr) {
            val = self.docscroll.scrollLeft();
          } else if (self.detected.ismozilla) {
            val = self.page.maxw - Math.abs(self.docscroll.scrollLeft());
          } else {
            val = self.page.maxw - self.docscroll.scrollLeft();
          }
          return val;
        };
        this.setScrollLeft = function (val) {
          return setTimeout(function () {
            if (!self) return;
            if (self.hasreversehr) {
              if (self.detected.ismozilla) {
                val = -(self.page.maxw - val);
              } else {
                val = self.page.maxw - val;
              }
            }
            return self.docscroll.scrollLeft(val);
          }, 1);
        };
      }
  
      this.getTarget = function (e) {
        if (!e) return false;
        if (e.target) return e.target;
        if (e.srcElement) return e.srcElement;
        return false;
      };
  
      this.hasParent = function (e, id) {
        if (!e) return false;
        var el = e.target || e.srcElement || e || false;
        while (el && el.id != id) {
          el = el.parentNode || false;
        }
        return (el !== false);
      };
  
      function getZIndex() {
        var dom = self.win;
        if ("zIndex" in dom) return dom.zIndex(); // use jQuery UI method when available
        while (dom.length > 0) {
          if (dom[0].nodeType == 9) return false;
          var zi = dom.css('zIndex');
          if (!isNaN(zi) && zi !== 0) return parseInt(zi);
          dom = dom.parent();
        }
        return false;
      }
  
      //inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
      var _convertBorderWidth = {
        "thin": 1,
        "medium": 3,
        "thick": 5
      };
  
      function getWidthToPixel(dom, prop, chkheight) {
        var wd = dom.css(prop);
        var px = parseFloat(wd);
        if (isNaN(px)) {
          px = _convertBorderWidth[wd] || 0;
          var brd = (px == 3) ? ((chkheight) ? (self.win.outerHeight() - self.win.innerHeight()) : (self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
          if (self.isie8 && px) px += 1;
          return (brd) ? px : 0;
        }
        return px;
      }
  
      this.getDocumentScrollOffset = function () {
        return {
          top: _win.pageYOffset || _doc.documentElement.scrollTop,
          left: _win.pageXOffset || _doc.documentElement.scrollLeft
        };
      };
  
      this.getOffset = function () {
        if (self.isfixed) {
          var ofs = self.win.offset();  // fix Chrome auto issue (when right/bottom props only)
          var scrl = self.getDocumentScrollOffset();
          ofs.top -= scrl.top;
          ofs.left -= scrl.left;
          return ofs;
        }
        var ww = self.win.offset();
        if (!self.viewport) return ww;
        var vp = self.viewport.offset();
        return {
          top: ww.top - vp.top,
          left: ww.left - vp.left
        };
      };
  
      this.updateScrollBar = function (len) {
        var pos, off;
        if (self.ishwscroll) {
          self.rail.css({
            height: self.win.innerHeight() - (opt.railpadding.top + opt.railpadding.bottom)
          });
          if (self.railh) self.railh.css({
            width: self.win.innerWidth() - (opt.railpadding.left + opt.railpadding.right)
          });
        } else {
          var wpos = self.getOffset();
          pos = {
            top: wpos.top,
            left: wpos.left - (opt.railpadding.left + opt.railpadding.right)
          };
          pos.top += getWidthToPixel(self.win, 'border-top-width', true);
          pos.left += (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win, 'border-right-width') - self.rail.width : getWidthToPixel(self.win, 'border-left-width');
  
          off = opt.railoffset;
          if (off) {
            if (off.top) pos.top += off.top;
            if (off.left) pos.left += off.left;
          }
  
          if (!self.railslocked) self.rail.css({
            top: pos.top,
            left: pos.left,
            height: ((len) ? len.h : self.win.innerHeight()) - (opt.railpadding.top + opt.railpadding.bottom)
          });
  
          if (self.zoom) {
            self.zoom.css({
              top: pos.top + 1,
              left: (self.rail.align == 1) ? pos.left - 20 : pos.left + self.rail.width + 4
            });
          }
  
          if (self.railh && !self.railslocked) {
            pos = {
              top: wpos.top,
              left: wpos.left
            };
            off = opt.railhoffset;
            if (off) {
              if (off.top) pos.top += off.top;
              if (off.left) pos.left += off.left;
            }
            var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win, 'border-top-width', true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win, 'border-top-width', true);
            var x = pos.left + getWidthToPixel(self.win, 'border-left-width');
            self.railh.css({
              top: y - (opt.railpadding.top + opt.railpadding.bottom),
              left: x,
              width: self.railh.width
            });
          }
  
        }
      };
  
      this.doRailClick = function (e, dbl, hr) {
        var fn, pg, cur, pos;
  
        if (self.railslocked) return;
  
        self.cancelEvent(e);
  
        if (!("pageY" in e)) {
          e.pageX = e.clientX + _doc.documentElement.scrollLeft;
          e.pageY = e.clientY + _doc.documentElement.scrollTop;
        }
  
        if (dbl) {
          fn = (hr) ? self.doScrollLeft : self.doScrollTop;
          cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth / 2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight / 2)) * self.scrollratio.y);
          self.unsynched("relativexy");
          fn(cur|0);
        } else {
          fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
          cur = (hr) ? self.scroll.x : self.scroll.y;
          pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
          pg = (hr) ? self.view.w : self.view.h;
          fn((cur >= pos) ? pg : -pg);
        }
  
      };
  
      self.newscrolly = self.newscrollx = 0;
  
      self.hasanimationframe = ("requestAnimationFrame" in _win);
      self.hascancelanimationframe = ("cancelAnimationFrame" in _win);
  
      self.hasborderbox = false;
  
      this.init = function () {
  
        self.saved.css = [];
  
        if (cap.isoperamini) return true; // SORRY, DO NOT WORK!
        if (cap.isandroid && !("hidden" in _doc)) return true; // Android 3- SORRY, DO NOT WORK!
  
        opt.emulatetouch = opt.emulatetouch || opt.touchbehavior;  // mantain compatibility with "touchbehavior"      
  
        self.hasborderbox = _win.getComputedStyle && (_win.getComputedStyle(_doc.body)['box-sizing'] === "border-box");
  
        var _scrollyhidden = { 'overflow-y': 'hidden' };
        if (cap.isie11 || cap.isie10) _scrollyhidden['-ms-overflow-style'] = 'none';  // IE 10 & 11 is always a world apart!
  
        if (self.ishwscroll) {
          this.doc.css(cap.transitionstyle, cap.prefixstyle + 'transform 0ms ease-out');
          if (cap.transitionend) self.bind(self.doc, cap.transitionend, self.onScrollTransitionEnd, false); //I have got to do something usefull!!
        }
  
        self.zindex = "auto";
        if (!self.ispage && opt.zindex == "auto") {
          self.zindex = getZIndex() || "auto";
        } else {
          self.zindex = opt.zindex;
        }
  
        if (!self.ispage && self.zindex != "auto" && self.zindex > globalmaxzindex) {
          globalmaxzindex = self.zindex;
        }
  
        if (self.isie && self.zindex === 0 && opt.zindex == "auto") { // fix IE auto == 0
          self.zindex = "auto";
        }
  
        if (!self.ispage || !cap.isieold) {
  
          var cont = self.docscroll;
          if (self.ispage) cont = (self.haswrapper) ? self.win : self.doc;
  
          self.css(cont, _scrollyhidden);
  
          if (self.ispage && (cap.isie11 || cap.isie)) { // IE 7-11
            self.css($("html"), _scrollyhidden);
          }
  
          if (cap.isios && !self.ispage && !self.haswrapper) self.css($body, {
            "-webkit-overflow-scrolling": "touch"
          }); //force hw acceleration
  
          var cursor = $(_doc.createElement('div'));
          cursor.css({
            position: "relative",
            top: 0,
            "float": "right",
            width: opt.cursorwidth,
            height: 0,
            'background-color': opt.cursorcolor,
            border: opt.cursorborder,
            'background-clip': 'padding-box',
            '-webkit-border-radius': opt.cursorborderradius,
            '-moz-border-radius': opt.cursorborderradius,
            'border-radius': opt.cursorborderradius
          });
  
          cursor.addClass('nicescroll-cursors');
  
          self.cursor = cursor;
  
          var rail = $(_doc.createElement('div'));
          rail.attr('id', self.id);
          rail.addClass('nicescroll-rails nicescroll-rails-vr');
  
          if (opt.scrollCLass) {
              rail.addClass(opt.scrollCLass);
          }
  
          var v, a, kp = ["left", "right", "top", "bottom"];  //**
          for (var n in kp) {
            a = kp[n];
            v = opt.railpadding[a] || 0;
            v && rail.css("padding-" + a, v + "px");
          }
  
          rail.append(cursor);
  
          rail.width = Math.max(parseFloat(opt.cursorwidth), cursor.outerWidth());
          rail.css({
            width: rail.width + "px",
            zIndex: self.zindex,
            background: opt.background,
            cursor: "default"
          });
  
          rail.visibility = true;
          rail.scrollable = true;
  
          rail.align = (opt.railalign == "left") ? 0 : 1;
  
          self.rail = rail;
  
          self.rail.drag = false;
  
          var zoom = false;
          if (opt.boxzoom && !self.ispage && !cap.isieold) {
            zoom = _doc.createElement('div');
  
            self.bind(zoom, "click", self.doZoom);
            self.bind(zoom, "mouseenter", function () {
              self.zoom.css('opacity', opt.cursoropacitymax);
            });
            self.bind(zoom, "mouseleave", function () {
              self.zoom.css('opacity', opt.cursoropacitymin);
            });
  
            self.zoom = $(zoom);
            self.zoom.css({
              cursor: "pointer",
              zIndex: self.zindex,
              backgroundImage: 'url(' + opt.scriptpath + 'zoomico.png)',
              height: 18,
              width: 18,
              backgroundPosition: '0 0'
            });
            if (opt.dblclickzoom) self.bind(self.win, "dblclick", self.doZoom);
            if (cap.cantouch && opt.gesturezoom) {
              self.ongesturezoom = function (e) {
                if (e.scale > 1.5) self.doZoomIn(e);
                if (e.scale < 0.8) self.doZoomOut(e);
                return self.cancelEvent(e);
              };
              self.bind(self.win, "gestureend", self.ongesturezoom);
            }
          }
  
          // init HORIZ
  
          self.railh = false;
          var railh;
  
          if (opt.horizrailenabled) {
  
            self.css(cont, {
              overflowX: 'hidden'
            });
  
            cursor = $(_doc.createElement('div'));
            cursor.css({
              position: "absolute",
              top: 0,
              height: opt.cursorwidth,
              width: 0,
              backgroundColor: opt.cursorcolor,
              border: opt.cursorborder,
              backgroundClip: 'padding-box',
              '-webkit-border-radius': opt.cursorborderradius,
              '-moz-border-radius': opt.cursorborderradius,
              'border-radius': opt.cursorborderradius
            });
  
            if (cap.isieold) cursor.css('overflow', 'hidden');  //IE6 horiz scrollbar issue
  
            cursor.addClass('nicescroll-cursors');
  
            self.cursorh = cursor;
  
            railh = $(_doc.createElement('div'));
            railh.attr('id', self.id + '-hr');
            railh.addClass('nicescroll-rails nicescroll-rails-hr');
            if (opt.scrollCLass) {
                railh.addClass(opt.scrollCLass);
            }
  
            railh.height = Math.max(parseFloat(opt.cursorwidth), cursor.outerHeight());
            railh.css({
              height: railh.height + "px",
              'zIndex': self.zindex,
              "background": opt.background
            });
  
            railh.append(cursor);
  
            railh.visibility = true;
            railh.scrollable = true;
  
            railh.align = (opt.railvalign == "top") ? 0 : 1;
  
            self.railh = railh;
  
            self.railh.drag = false;
  
          }
  
          if (self.ispage) {
  
            rail.css({
              position: "fixed",
              top: 0,
              height: "100%"
            });
  
            rail.css((rail.align) ? { right: 0 } : { left: 0 });
  
            self.body.append(rail);
            if (self.railh) {
              railh.css({
                position: "fixed",
                left: 0,
                width: "100%"
              });
  
              railh.css((railh.align) ? { bottom: 0 } : { top: 0 });
  
              self.body.append(railh);
            }
          } else {
            if (self.ishwscroll) {
              if (self.win.css('position') == 'static') self.css(self.win, { 'position': 'relative' });
              var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
              $(bd).scrollTop(0).scrollLeft(0);  // fix rail position if content already scrolled
              if (self.zoom) {
                self.zoom.css({
                  position: "absolute",
                  top: 1,
                  right: 0,
                  "margin-right": rail.width + 4
                });
                bd.append(self.zoom);
              }
              rail.css({
                position: "absolute",
                top: 0
              });
              rail.css((rail.align) ? { right: 0 } : { left: 0 });
              bd.append(rail);
              if (railh) {
                railh.css({
                  position: "absolute",
                  left: 0,
                  bottom: 0
                });
                railh.css((railh.align) ? { bottom: 0 } : { top: 0 });
                bd.append(railh);
              }
            } else {
              self.isfixed = (self.win.css("position") == "fixed");
              var rlpos = (self.isfixed) ? "fixed" : "absolute";
  
              if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
              if (self.viewport) {
                self.body = self.viewport;
                if (!(/fixed|absolute/.test(self.viewport.css("position")))) self.css(self.viewport, {
                  "position": "relative"
                });
              }
  
              rail.css({
                position: rlpos
              });
              if (self.zoom) self.zoom.css({
                position: rlpos
              });
              self.updateScrollBar();
              self.body.append(rail);
              if (self.zoom) self.body.append(self.zoom);
              if (self.railh) {
                railh.css({
                  position: rlpos
                });
                self.body.append(railh);
              }
            }
  
            if (cap.isios) self.css(self.win, {
              '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
              '-webkit-touch-callout': 'none'
            }); // prevent grey layer on click
  
            if (opt.disableoutline) {
              if (cap.isie) self.win.attr("hideFocus", "true"); // IE, prevent dotted rectangle on focused div
              if (cap.iswebkit) self.win.css('outline', 'none');  // Webkit outline
            }
  
          }
  
          if (opt.autohidemode === false) {
            self.autohidedom = false;
            self.rail.css({
              opacity: opt.cursoropacitymax
            });
            if (self.railh) self.railh.css({
              opacity: opt.cursoropacitymax
            });
          } else if ((opt.autohidemode === true) || (opt.autohidemode === "leave")) {
            self.autohidedom = $().add(self.rail);
            if (cap.isie8) self.autohidedom = self.autohidedom.add(self.cursor);
            if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
            if (self.railh && cap.isie8) self.autohidedom = self.autohidedom.add(self.cursorh);
          } else if (opt.autohidemode == "scroll") {
            self.autohidedom = $().add(self.rail);
            if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
          } else if (opt.autohidemode == "cursor") {
            self.autohidedom = $().add(self.cursor);
            if (self.railh) self.autohidedom = self.autohidedom.add(self.cursorh);
          } else if (opt.autohidemode == "hidden") {
            self.autohidedom = false;
            self.hide();
            self.railslocked = false;
          }
  
          if (cap.cantouch || self.istouchcapable || opt.emulatetouch || cap.hasmstouch) {
  
            self.scrollmom = new ScrollMomentumClass2D(self);
  
            var delayedclick = null;
  
            self.ontouchstart = function (e) {
  
              if (self.locked) return false;
  
              //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
              if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return false;  // need test on surface!!
  
              self.hasmoving = false;
  
              if (self.scrollmom.timer) {
                self.triggerScrollEnd();
                self.scrollmom.stop();
              }
  
              if (!self.railslocked) {
                var tg = self.getTarget(e);
  
                if (tg) {
                  var skp = (/INPUT/i.test(tg.nodeName)) && (/range/i.test(tg.type));
                  if (skp) return self.stopPropagation(e);
                }
  
                var ismouse = (e.type === "mousedown");
  
                if (!("clientX" in e) && ("changedTouches" in e)) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
  
                if (self.forcescreen) {
                  var le = e;
                  e = {
                    "original": (e.original) ? e.original : e
                  };
                  e.clientX = le.screenX;
                  e.clientY = le.screenY;
                }
  
                self.rail.drag = {
                  x: e.clientX,
                  y: e.clientY,
                  sx: self.scroll.x,
                  sy: self.scroll.y,
                  st: self.getScrollTop(),
                  sl: self.getScrollLeft(),
                  pt: 2,
                  dl: false,
                  tg: tg
                };
  
                if (self.ispage || !opt.directionlockdeadzone) {
  
                  self.rail.drag.dl = "f";
  
                } else {
  
                  var view = {
                    w: $window.width(),
                    h: $window.height()
                  };
  
                  var page = self.getContentSize();
  
                  var maxh = page.h - view.h;
                  var maxw = page.w - view.w;
  
                  if (self.rail.scrollable && !self.railh.scrollable) self.rail.drag.ck = (maxh > 0) ? "v" : false;
                  else if (!self.rail.scrollable && self.railh.scrollable) self.rail.drag.ck = (maxw > 0) ? "h" : false;
                  else self.rail.drag.ck = false;
  
                }
  
                if (opt.emulatetouch && self.isiframe && cap.isie) {
                  var wp = self.win.position();
                  self.rail.drag.x += wp.left;
                  self.rail.drag.y += wp.top;
                }
  
                self.hasmoving = false;
                self.lastmouseup = false;
                self.scrollmom.reset(e.clientX, e.clientY);
  
                if (tg&&ismouse) {
  
                  var ip = /INPUT|SELECT|BUTTON|TEXTAREA/i.test(tg.nodeName);
                  if (!ip) {
                    if (cap.hasmousecapture) tg.setCapture();
                    if (opt.emulatetouch) {
                      if (tg.onclick && !(tg._onclick || false)) { // intercept DOM0 onclick event
                        tg._onclick = tg.onclick;
                        tg.onclick = function (e) {
                          if (self.hasmoving) return false;
                          tg._onclick.call(this, e);
                        };
                      }
                      return self.cancelEvent(e);
                    }
                    return self.stopPropagation(e);
                  }
  
                  if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
                    self.preventclick = {
                      "tg": tg,
                      "click": false
                    };
                  }
  
                }
              }
  
            };
  
            self.ontouchend = function (e) {
  
              if (!self.rail.drag) return true;
  
              if (self.rail.drag.pt == 2) {
                //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
                if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return false;
  
                self.rail.drag = false;
  
                var ismouse = (e.type === "mouseup");
  
                if (self.hasmoving) {
                  self.scrollmom.doMomentum();
                  self.lastmouseup = true;
                  self.hideCursor();
                  if (cap.hasmousecapture) _doc.releaseCapture();
                  if (ismouse) return self.cancelEvent(e);
                }
  
              }
              else if (self.rail.drag.pt == 1) {
                return self.onmouseup(e);
              }
  
            };
  
            var moveneedoffset = (opt.emulatetouch && self.isiframe && !cap.hasmousecapture);
  
            var locktollerance = opt.directionlockdeadzone * 0.3 | 0;
  
            self.ontouchmove = function (e, byiframe) {
  
              if (!self.rail.drag) return true;
  
              if (e.targetTouches && opt.preventmultitouchscrolling) {
                if (e.targetTouches.length > 1) return true; // multitouch
              }
  
              //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
              if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return true;
  
              if (self.rail.drag.pt == 2) {
  
                if (("changedTouches" in e)) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
  
                var ofy, ofx;
                ofx = ofy = 0;
  
                if (moveneedoffset && !byiframe) {
                  var wp = self.win.position();
                  ofx = -wp.left;
                  ofy = -wp.top;
                }
  
                var fy = e.clientY + ofy;
                var my = (fy - self.rail.drag.y);
                var fx = e.clientX + ofx;
                var mx = (fx - self.rail.drag.x);
  
                var ny = self.rail.drag.st - my;
  
                if (self.ishwscroll && opt.bouncescroll) {
                  if (ny < 0) {
                    ny = Math.round(ny / 2);
                  } else if (ny > self.page.maxh) {
                    ny = self.page.maxh + Math.round((ny - self.page.maxh) / 2);
                  }
                } else {
                  if (ny < 0) {
                    ny = 0;
                    fy = 0;
                  }
                  else if (ny > self.page.maxh) {
                    ny = self.page.maxh;
                    fy = 0;
                  }
                  if (fy === 0 && !self.hasmoving) {
                    if (!self.ispage) self.rail.drag = false;
                    return true;
                  }
                }
  
                var nx = self.getScrollLeft();
  
                if (self.railh && self.railh.scrollable) {
                  nx = (self.isrtlmode) ? mx - self.rail.drag.sl : self.rail.drag.sl - mx;
  
                  if (self.ishwscroll && opt.bouncescroll) {
                    if (nx < 0) {
                      nx = Math.round(nx / 2);
                    } else if (nx > self.page.maxw) {
                      nx = self.page.maxw + Math.round((nx - self.page.maxw) / 2);
                    }
                  } else {
                    if (nx < 0) {
                      nx = 0;
                      fx = 0;
                    }
                    if (nx > self.page.maxw) {
                      nx = self.page.maxw;
                      fx = 0;
                    }
                  }
  
                }
  
  
                if (!self.hasmoving) {
  
                  if (self.rail.drag.y === e.clientY && self.rail.drag.x === e.clientX) return self.cancelEvent(e);  // prevent first useless move event 
  
                  var ay = Math.abs(my);
                  var ax = Math.abs(mx);
                  var dz = opt.directionlockdeadzone;
  
                  if (!self.rail.drag.ck) {
                    if (ay > dz && ax > dz) self.rail.drag.dl = "f";
                    else if (ay > dz) self.rail.drag.dl = (ax > locktollerance) ? "f" : "v";
                    else if (ax > dz) self.rail.drag.dl = (ay > locktollerance) ? "f" : "h";
                  }
                  else if (self.rail.drag.ck == "v") {
                    if (ax > dz && ay <= locktollerance) {
                      self.rail.drag = false;
                    }
                    else if (ay > dz) self.rail.drag.dl = "v";
  
                  }
                  else if (self.rail.drag.ck == "h") {
  
                    if (ay > dz && ax <= locktollerance) {
                      self.rail.drag = false;
                    }
                    else if (ax > dz) self.rail.drag.dl = "h";
  
                  }
  
                  if (!self.rail.drag.dl) return self.cancelEvent(e);
  
                  self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
                  self.hasmoving = true;
                }
  
                if (self.preventclick && !self.preventclick.click) {
                  self.preventclick.click = self.preventclick.tg.onclick || false;
                  self.preventclick.tg.onclick = self.onpreventclick;
                }
  
                if (self.rail.drag.dl) {
                  if (self.rail.drag.dl == "v") nx = self.rail.drag.sl;
                  else if (self.rail.drag.dl == "h") ny = self.rail.drag.st;
                }
  
                self.synched("touchmove", function () {
                  if (self.rail.drag && (self.rail.drag.pt == 2)) {
                    if (self.prepareTransition) self.resetTransition();
                    if (self.rail.scrollable) self.setScrollTop(ny);
                    self.scrollmom.update(fx, fy);
                    if (self.railh && self.railh.scrollable) {
                      self.setScrollLeft(nx);
                      self.showCursor(ny, nx);
                    } else {
                      self.showCursor(ny);
                    }
                    if (cap.isie10) _doc.selection.clear();
                  }
                });
  
                return self.cancelEvent(e);
  
              }
              else if (self.rail.drag.pt == 1) { // drag on cursor
                return self.onmousemove(e);
              }
  
            };
  
            self.ontouchstartCursor = function (e, hronly) {
              if (self.rail.drag && self.rail.drag.pt != 3) return;
              if (self.locked) return self.cancelEvent(e);
              self.cancelScroll();
              self.rail.drag = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                sx: self.scroll.x,
                sy: self.scroll.y,
                pt: 3,
                hr: (!!hronly)
              };
              var tg = self.getTarget(e);
              if (!self.ispage && cap.hasmousecapture) tg.setCapture();
              if (self.isiframe && !cap.hasmousecapture) {
                self.saved.csspointerevents = self.doc.css("pointer-events");
                self.css(self.doc, { "pointer-events": "none" });
              }
              return self.cancelEvent(e);
            };
  
            self.ontouchendCursor = function (e) {
              if (self.rail.drag) {
                if (cap.hasmousecapture) _doc.releaseCapture();
                if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
                if (self.rail.drag.pt != 3) return;
                self.rail.drag = false;
                return self.cancelEvent(e);
              }
            };
  
            self.ontouchmoveCursor = function (e) {
              if (self.rail.drag) {
                if (self.rail.drag.pt != 3) return;
  
                self.cursorfreezed = true;
  
                if (self.rail.drag.hr) {
                  self.scroll.x = self.rail.drag.sx + (e.touches[0].clientX - self.rail.drag.x);
                  if (self.scroll.x < 0) self.scroll.x = 0;
                  var mw = self.scrollvaluemaxw;
                  if (self.scroll.x > mw) self.scroll.x = mw;
                } else {
                  self.scroll.y = self.rail.drag.sy + (e.touches[0].clientY - self.rail.drag.y);
                  if (self.scroll.y < 0) self.scroll.y = 0;
                  var my = self.scrollvaluemax;
                  if (self.scroll.y > my) self.scroll.y = my;
                }
  
                self.synched('touchmove', function () {
                  if (self.rail.drag && (self.rail.drag.pt == 3)) {
                    self.showCursor();
                    if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x * self.scrollratio.x), opt.cursordragspeed);
                    else self.doScrollTop(Math.round(self.scroll.y * self.scrollratio.y), opt.cursordragspeed);
                  }
                });
  
                return self.cancelEvent(e);
              }
  
            };
  
          }
  
          self.onmousedown = function (e, hronly) {
            if (self.rail.drag && self.rail.drag.pt != 1) return;
            if (self.railslocked) return self.cancelEvent(e);
            self.cancelScroll();
            self.rail.drag = {
              x: e.clientX,
              y: e.clientY,
              sx: self.scroll.x,
              sy: self.scroll.y,
              pt: 1,
              hr: hronly || false
            };
            var tg = self.getTarget(e);
  
            if (cap.hasmousecapture) tg.setCapture();
            if (self.isiframe && !cap.hasmousecapture) {
              self.saved.csspointerevents = self.doc.css("pointer-events");
              self.css(self.doc, {
                "pointer-events": "none"
              });
            }
            self.hasmoving = false;
            return self.cancelEvent(e);
          };
  
          self.onmouseup = function (e) {
            if (self.rail.drag) {
              if (self.rail.drag.pt != 1) return true;
  
              if (cap.hasmousecapture) _doc.releaseCapture();
              if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
              self.rail.drag = false;
              self.cursorfreezed = false;
              if (self.hasmoving) self.triggerScrollEnd();
              return self.cancelEvent(e);
            }
          };
  
          self.onmousemove = function (e) {
            if (self.rail.drag) {
              if (self.rail.drag.pt !== 1) return;
  
              if (cap.ischrome && e.which === 0) return self.onmouseup(e);
  
              self.cursorfreezed = true;
  
              if (!self.hasmoving) self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
  
              self.hasmoving = true;
  
              if (self.rail.drag.hr) {
                self.scroll.x = self.rail.drag.sx + (e.clientX - self.rail.drag.x);
                if (self.scroll.x < 0) self.scroll.x = 0;
                var mw = self.scrollvaluemaxw;
                if (self.scroll.x > mw) self.scroll.x = mw;
              } else {
                self.scroll.y = self.rail.drag.sy + (e.clientY - self.rail.drag.y);
                if (self.scroll.y < 0) self.scroll.y = 0;
                var my = self.scrollvaluemax;
                if (self.scroll.y > my) self.scroll.y = my;
              }
  
              self.synched('mousemove', function () {
  
                if (self.cursorfreezed) {
                  self.showCursor();
  
                  if (self.rail.drag.hr) {
                    self.scrollLeft(Math.round(self.scroll.x * self.scrollratio.x));
                  } else {
                    self.scrollTop(Math.round(self.scroll.y * self.scrollratio.y));
                  }
  
                }
              });
  
              return self.cancelEvent(e);
            }
            else {
              self.checkarea = 0;
            }
          };
  
          if (cap.cantouch || opt.emulatetouch) {
  
            self.onpreventclick = function (e) {
              if (self.preventclick) {
                self.preventclick.tg.onclick = self.preventclick.click;
                self.preventclick = false;
                return self.cancelEvent(e);
              }
            };
  
            self.onclick = (cap.isios) ? false : function (e) {  // it needs to check IE11 ???
              if (self.lastmouseup) {
                self.lastmouseup = false;
                return self.cancelEvent(e);
              } else {
                return true;
              }
            };
  
            if (opt.grabcursorenabled && cap.cursorgrabvalue) {
              self.css((self.ispage) ? self.doc : self.win, {
                'cursor': cap.cursorgrabvalue
              });
              self.css(self.rail, {
                'cursor': cap.cursorgrabvalue
              });
            }
  
          } else {
  
            var checkSelectionScroll = function (e) {
              if (!self.selectiondrag) return;
  
              if (e) {
                var ww = self.win.outerHeight();
                var df = (e.pageY - self.selectiondrag.top);
                if (df > 0 && df < ww) df = 0;
                if (df >= ww) df -= ww;
                self.selectiondrag.df = df;
              }
              if (self.selectiondrag.df === 0) return;
  
              var rt = -(self.selectiondrag.df*2/6)|0;
              self.doScrollBy(rt);
  
              self.debounced("doselectionscroll", function () {
                checkSelectionScroll();
              }, 50);
            };
  
            if ("getSelection" in _doc) { // A grade - Major browsers
              self.hasTextSelected = function () {
                return (_doc.getSelection().rangeCount > 0);
              };
            } else if ("selection" in _doc) { //IE9-
              self.hasTextSelected = function () {
                return (_doc.selection.type != "None");
              };
            } else {
              self.hasTextSelected = function () { // no support
                return false;
              };
            }
  
            self.onselectionstart = function (e) {
              //  More testing - severe chrome issues           
              /* 
                            if (!self.haswrapper&&(e.which&&e.which==2)) {  // fool browser to manage middle button scrolling
                              self.win.css({'overflow':'auto'});
                              setTimeout(function(){
                                self.win.css({'overflow':'hidden'});
                              },10);                
                              return true;
                            }            
              */
              if (self.ispage) return;
              self.selectiondrag = self.win.offset();
            };
  
            self.onselectionend = function (e) {
              self.selectiondrag = false;
            };
            self.onselectiondrag = function (e) {
              if (!self.selectiondrag) return;
              if (self.hasTextSelected()) self.debounced("selectionscroll", function () {
                checkSelectionScroll(e);
              }, 250);
            };
          }
  
          if (cap.hasw3ctouch) { //IE11+
            self.css((self.ispage) ? $("html") : self.win, { 'touch-action': 'none' });
            self.css(self.rail, {
              'touch-action': 'none'
            });
            self.css(self.cursor, {
              'touch-action': 'none'
            });
            self.bind(self.win, "pointerdown", self.ontouchstart);
            self.bind(_doc, "pointerup", self.ontouchend);
            self.delegate(_doc, "pointermove", self.ontouchmove);
          } else if (cap.hasmstouch) { //IE10
            self.css((self.ispage) ? $("html") : self.win, { '-ms-touch-action': 'none' });
            self.css(self.rail, {
              '-ms-touch-action': 'none'
            });
            self.css(self.cursor, {
              '-ms-touch-action': 'none'
            });
            self.bind(self.win, "MSPointerDown", self.ontouchstart);
            self.bind(_doc, "MSPointerUp", self.ontouchend);
            self.delegate(_doc, "MSPointerMove", self.ontouchmove);
            self.bind(self.cursor, "MSGestureHold", function (e) {
              e.preventDefault();
            });
            self.bind(self.cursor, "contextmenu", function (e) {
              e.preventDefault();
            });
          } else if (cap.cantouch) { // smartphones/touch devices
            self.bind(self.win, "touchstart", self.ontouchstart, false, true);
            self.bind(_doc, "touchend", self.ontouchend, false, true);
            self.bind(_doc, "touchcancel", self.ontouchend, false, true);
            self.delegate(_doc, "touchmove", self.ontouchmove, false, true);
          }
  
          if (opt.emulatetouch) {
            self.bind(self.win, "mousedown", self.ontouchstart, false, true);
            self.bind(_doc, "mouseup", self.ontouchend, false, true);
            self.bind(_doc, "mousemove", self.ontouchmove, false, true);
          }
  
          if (opt.cursordragontouch || (!cap.cantouch && !opt.emulatetouch)) {
  
            self.rail.css({
              cursor: "default"
            });
            self.railh && self.railh.css({
              cursor: "default"
            });
  
            self.jqbind(self.rail, "mouseenter", function () {
              if (!self.ispage && !self.win.is(":visible")) return false;
              if (self.canshowonmouseevent) self.showCursor();
              self.rail.active = true;
            });
            self.jqbind(self.rail, "mouseleave", function () {
              self.rail.active = false;
              if (!self.rail.drag) self.hideCursor();
            });
  
            if (opt.sensitiverail) {
              self.bind(self.rail, "click", function (e) {
                self.doRailClick(e, false, false);
              });
              self.bind(self.rail, "dblclick", function (e) {
                self.doRailClick(e, true, false);
              });
              self.bind(self.cursor, "click", function (e) {
                self.cancelEvent(e);
              });
              self.bind(self.cursor, "dblclick", function (e) {
                self.cancelEvent(e);
              });
            }
  
            if (self.railh) {
              self.jqbind(self.railh, "mouseenter", function () {
                if (!self.ispage && !self.win.is(":visible")) return false;
                if (self.canshowonmouseevent) self.showCursor();
                self.rail.active = true;
              });
              self.jqbind(self.railh, "mouseleave", function () {
                self.rail.active = false;
                if (!self.rail.drag) self.hideCursor();
              });
  
              if (opt.sensitiverail) {
                self.bind(self.railh, "click", function (e) {
                  self.doRailClick(e, false, true);
                });
                self.bind(self.railh, "dblclick", function (e) {
                  self.doRailClick(e, true, true);
                });
                self.bind(self.cursorh, "click", function (e) {
                  self.cancelEvent(e);
                });
                self.bind(self.cursorh, "dblclick", function (e) {
                  self.cancelEvent(e);
                });
              }
  
            }
  
          }
  
          if (opt.cursordragontouch && (this.istouchcapable || cap.cantouch)) {
            self.bind(self.cursor, "touchstart", self.ontouchstartCursor);
            self.bind(self.cursor, "touchmove", self.ontouchmoveCursor);
            self.bind(self.cursor, "touchend", self.ontouchendCursor);
            self.cursorh && self.bind(self.cursorh, "touchstart", function (e) {
              self.ontouchstartCursor(e, true);
            });
            self.cursorh && self.bind(self.cursorh, "touchmove", self.ontouchmoveCursor);
            self.cursorh && self.bind(self.cursorh, "touchend", self.ontouchendCursor);
          }
  
  //        if (!cap.cantouch && !opt.emulatetouch) {
          if (!opt.emulatetouch && !cap.isandroid && !cap.isios) {
  
            self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.onmouseup);
            self.bind(_doc, "mousemove", self.onmousemove);
            if (self.onclick) self.bind(_doc, "click", self.onclick);
  
            self.bind(self.cursor, "mousedown", self.onmousedown);
            self.bind(self.cursor, "mouseup", self.onmouseup);
  
            if (self.railh) {
              self.bind(self.cursorh, "mousedown", function (e) {
                self.onmousedown(e, true);
              });
              self.bind(self.cursorh, "mouseup", self.onmouseup);
            }
  
            if (!self.ispage && opt.enablescrollonselection) {
              self.bind(self.win[0], "mousedown", self.onselectionstart);
              self.bind(_doc, "mouseup", self.onselectionend);
              self.bind(self.cursor, "mouseup", self.onselectionend);
              if (self.cursorh) self.bind(self.cursorh, "mouseup", self.onselectionend);
              self.bind(_doc, "mousemove", self.onselectiondrag);
            }
  
            if (self.zoom) {
              self.jqbind(self.zoom, "mouseenter", function () {
                if (self.canshowonmouseevent) self.showCursor();
                self.rail.active = true;
              });
              self.jqbind(self.zoom, "mouseleave", function () {
                self.rail.active = false;
                if (!self.rail.drag) self.hideCursor();
              });
            }
  
          } else {
  
            self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.ontouchend);
            if (self.onclick) self.bind(_doc, "click", self.onclick);
  
            if (opt.cursordragontouch) {
              self.bind(self.cursor, "mousedown", self.onmousedown);
              self.bind(self.cursor, "mouseup", self.onmouseup);
              self.cursorh && self.bind(self.cursorh, "mousedown", function (e) {
                self.onmousedown(e, true);
              });
              self.cursorh && self.bind(self.cursorh, "mouseup", self.onmouseup);
            } else {
              self.bind(self.rail, "mousedown", function (e) { e.preventDefault(); });  // prevent text selection             
              self.railh && self.bind(self.railh, "mousedown", function (e) { e.preventDefault(); });
            }
  
          }
  
  
          if (opt.enablemousewheel) {
            if (!self.isiframe) self.mousewheel((cap.isie && self.ispage) ? _doc : self.win, self.onmousewheel);
            self.mousewheel(self.rail, self.onmousewheel);
            if (self.railh) self.mousewheel(self.railh, self.onmousewheelhr);
          }
  
          if (!self.ispage && !cap.cantouch && !(/HTML|^BODY/.test(self.win[0].nodeName))) {
            if (!self.win.attr("tabindex")) self.win.attr({
              "tabindex": ++tabindexcounter
            });
  
            self.bind(self.win, "focus", function (e) {  // better using native events
              domfocus = (self.getTarget(e)).id || self.getTarget(e) || false;
              self.hasfocus = true;
              if (self.canshowonmouseevent) self.noticeCursor();
            });
            self.bind(self.win, "blur", function (e) {  // *
              domfocus = false;
              self.hasfocus = false;
            });
  
            self.bind(self.win, "mouseenter", function (e) {   // *
              mousefocus = (self.getTarget(e)).id || self.getTarget(e) || false;
              self.hasmousefocus = true;
              if (self.canshowonmouseevent) self.noticeCursor();
            });
            self.bind(self.win, "mouseleave", function (e) {   // *       
              mousefocus = false;
              self.hasmousefocus = false;
              if (!self.rail.drag) self.hideCursor();
            });
  
          }
  
  
          //Thanks to http://www.quirksmode.org !!
          self.onkeypress = function (e) {
            if (self.railslocked && self.page.maxh === 0) return true;
  
            e = e || _win.event;
            var tg = self.getTarget(e);
            if (tg && /INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
              var tp = tg.getAttribute('type') || tg.type || false;
              if ((!tp) || !(/submit|button|cancel/i.tp)) return true;
            }
  
            if ($(tg).attr('contenteditable')) return true;
  
            if (self.hasfocus || (self.hasmousefocus && !domfocus) || (self.ispage && !domfocus && !mousefocus)) {
              var key = e.keyCode;
  
              if (self.railslocked && key != 27) return self.cancelEvent(e);
  
              var ctrl = e.ctrlKey || false;
              var shift = e.shiftKey || false;
  
              var ret = false;
              switch (key) {
                case 38:
                case 63233: //safari
                  self.doScrollBy(24 * 3);
                  ret = true;
                  break;
                case 40:
                case 63235: //safari
                  self.doScrollBy(-24 * 3);
                  ret = true;
                  break;
                case 37:
                case 63232: //safari
                  if (self.railh) {
                    (ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24 * 3);
                    ret = true;
                  }
                  break;
                case 39:
                case 63234: //safari
                  if (self.railh) {
                    (ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24 * 3);
                    ret = true;
                  }
                  break;
                case 33:
                case 63276: // safari
                  self.doScrollBy(self.view.h);
                  ret = true;
                  break;
                case 34:
                case 63277: // safari
                  self.doScrollBy(-self.view.h);
                  ret = true;
                  break;
                case 36:
                case 63273: // safari                
                  (self.railh && ctrl) ? self.doScrollPos(0, 0) : self.doScrollTo(0);
                  ret = true;
                  break;
                case 35:
                case 63275: // safari
                  (self.railh && ctrl) ? self.doScrollPos(self.page.maxw, self.page.maxh) : self.doScrollTo(self.page.maxh);
                  ret = true;
                  break;
                case 32:
                  if (opt.spacebarenabled) {
                    (shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
                    ret = true;
                  }
                  break;
                case 27: // ESC
                  if (self.zoomactive) {
                    self.doZoom();
                    ret = true;
                  }
                  break;
              }
              if (ret) return self.cancelEvent(e);
            }
          };
  
          if (opt.enablekeyboard) self.bind(_doc, (cap.isopera && !cap.isopera12) ? "keypress" : "keydown", self.onkeypress);
  
          self.bind(_doc, "keydown", function (e) {
            var ctrl = e.ctrlKey || false;
            if (ctrl) self.wheelprevented = true;
          });
          self.bind(_doc, "keyup", function (e) {
            var ctrl = e.ctrlKey || false;
            if (!ctrl) self.wheelprevented = false;
          });
          self.bind(_win, "blur", function (e) {
            self.wheelprevented = false;
          });
  
          self.bind(_win, 'resize', self.onscreenresize);
          self.bind(_win, 'orientationchange', self.onscreenresize);
  
          self.bind(_win, "load", self.lazyResize);
  
          if (cap.ischrome && !self.ispage && !self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
            var tmp = self.win.attr("style");
            var ww = parseFloat(self.win.css("width")) + 1;
            self.win.css('width', ww);
            self.synched("chromefix", function () {
              self.win.attr("style", tmp);
            });
          }
  
  
          // Trying a cross-browser implementation - good luck!
  
          self.onAttributeChange = function (e) {
            self.lazyResize(self.isieold ? 250 : 30);
          };
  
          if (opt.enableobserver) {
  
            if ((!self.isie11) && (ClsMutationObserver !== false)) {  // IE11 crashes  #568
              self.observerbody = new ClsMutationObserver(function (mutations) {
                mutations.forEach(function (mut) {
                  if (mut.type == "attributes") {
                    return ($body.hasClass("modal-open") && $body.hasClass("modal-dialog") && !$.contains($('.modal-dialog')[0], self.doc[0])) ? self.hide() : self.show();  // Support for Bootstrap modal; Added check if the nice scroll element is inside a modal
                  }
                });
                if (self.me.clientWidth != self.page.width || self.me.clientHeight != self.page.height) return self.lazyResize(30);
              });
              self.observerbody.observe(_doc.body, {
                childList: true,
                subtree: true,
                characterData: false,
                attributes: true,
                attributeFilter: ['class']
              });
            }
  
            if (!self.ispage && !self.haswrapper) {
  
              var _dom = self.win[0];
  
              // redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
              if (ClsMutationObserver !== false) {
                self.observer = new ClsMutationObserver(function (mutations) {
                  mutations.forEach(self.onAttributeChange);
                });
                self.observer.observe(_dom, {
                  childList: true,
                  characterData: false,
                  attributes: true,
                  subtree: false
                });
                self.observerremover = new ClsMutationObserver(function (mutations) {
                  mutations.forEach(function (mo) {
                    if (mo.removedNodes.length > 0) {
                      for (var dd in mo.removedNodes) {
                        if (!!self && (mo.removedNodes[dd] === _dom)) return self.remove();
                      }
                    }
                  });
                });
                self.observerremover.observe(_dom.parentNode, {
                  childList: true,
                  characterData: false,
                  attributes: false,
                  subtree: false
                });
              } else {
                self.bind(_dom, (cap.isie && !cap.isie9) ? "propertychange" : "DOMAttrModified", self.onAttributeChange);
                if (cap.isie9) _dom.attachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug
                self.bind(_dom, "DOMNodeRemoved", function (e) {
                  if (e.target === _dom) self.remove();
                });
              }
            }
  
          }
  
          //
  
          if (!self.ispage && opt.boxzoom) self.bind(_win, "resize", self.resizeZoom);
          if (self.istextarea) {
            self.bind(self.win, "keydown", self.lazyResize);
            self.bind(self.win, "mouseup", self.lazyResize);
          }
  
          self.lazyResize(30);
  
        }
  
        if (this.doc[0].nodeName == 'IFRAME') {
          var oniframeload = function () {
            self.iframexd = false;
            var doc;
            try {
              doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow._doc;
              var a = doc.domain;
            } catch (e) {
              self.iframexd = true;
              doc = false;
            }
  
            if (self.iframexd) {
              if ("console" in _win) console.log('NiceScroll error: policy restriced iframe');
              return true; //cross-domain - I can't manage this        
            }
  
            self.forcescreen = true;
  
            if (self.isiframe) {
              self.iframe = {
                "doc": $(doc),
                "html": self.doc.contents().find('html')[0],
                "body": self.doc.contents().find('body')[0]
              };
              self.getContentSize = function () {
                return {
                  w: Math.max(self.iframe.html.scrollWidth, self.iframe.body.scrollWidth),
                  h: Math.max(self.iframe.html.scrollHeight, self.iframe.body.scrollHeight)
                };
              };
              self.docscroll = $(self.iframe.body);
            }
  
            if (!cap.isios && opt.iframeautoresize && !self.isiframe) {
              self.win.scrollTop(0); // reset position
              self.doc.height(""); //reset height to fix browser bug
              var hh = Math.max(doc.getElementsByTagName('html')[0].scrollHeight, doc.body.scrollHeight);
              self.doc.height(hh);
            }
            self.lazyResize(30);
  
            self.css($(self.iframe.body), _scrollyhidden);
  
            if (cap.isios && self.haswrapper) {
              self.css($(doc.body), {
                '-webkit-transform': 'translate3d(0,0,0)'
              }); // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
            }
  
            if ('contentWindow' in this) {
              self.bind(this.contentWindow, "scroll", self.onscroll); //IE8 & minor
            } else {
              self.bind(doc, "scroll", self.onscroll);
            }
  
            if (opt.enablemousewheel) {
              self.mousewheel(doc, self.onmousewheel);
            }
  
            if (opt.enablekeyboard) self.bind(doc, (cap.isopera) ? "keypress" : "keydown", self.onkeypress);
  
            if (cap.cantouch) {
              self.bind(doc, "touchstart", self.ontouchstart);
              self.bind(doc, "touchmove", self.ontouchmove);
            }
            else if (opt.emulatetouch) {
              self.bind(doc, "mousedown", self.ontouchstart);
              self.bind(doc, "mousemove", function (e) {
                return self.ontouchmove(e, true);
              });
              if (opt.grabcursorenabled && cap.cursorgrabvalue) self.css($(doc.body), {
                'cursor': cap.cursorgrabvalue
              });
            }
  
            self.bind(doc, "mouseup", self.ontouchend);
  
            if (self.zoom) {
              if (opt.dblclickzoom) self.bind(doc, 'dblclick', self.doZoom);
              if (self.ongesturezoom) self.bind(doc, "gestureend", self.ongesturezoom);
            }
          };
  
          if (this.doc[0].readyState && this.doc[0].readyState === "complete") {
            setTimeout(function () {
              oniframeload.call(self.doc[0], false);
            }, 500);
          }
          self.bind(this.doc, "load", oniframeload);
  
        }
  
      };
  
      this.showCursor = function (py, px) {
        if (self.cursortimeout) {
          clearTimeout(self.cursortimeout);
          self.cursortimeout = 0;
        }
        if (!self.rail) return;
        if (self.autohidedom) {
          self.autohidedom.stop().css({
            opacity: opt.cursoropacitymax
          });
          self.cursoractive = true;
        }
  
        if (!self.rail.drag || self.rail.drag.pt != 1) {
          if (py !== undefined && py !== false) {
            self.scroll.y = (py / self.scrollratio.y) | 0;
          }
          if (px !== undefined) {
            self.scroll.x = (px / self.scrollratio.x) | 0;
          }
        }
  
        self.cursor.css({
          height: self.cursorheight,
          top: self.scroll.y
        });
        if (self.cursorh) {
          var lx = (self.hasreversehr) ? self.scrollvaluemaxw - self.scroll.x : self.scroll.x;
          self.cursorh.css({
            width: self.cursorwidth,
            left: (!self.rail.align && self.rail.visibility) ? lx + self.rail.width : lx
          });
          self.cursoractive = true;
        }
  
        if (self.zoom) self.zoom.stop().css({
          opacity: opt.cursoropacitymax
        });
      };
  
      this.hideCursor = function (tm) {
        if (self.cursortimeout) return;
        if (!self.rail) return;
        if (!self.autohidedom) return;
  
        if (self.hasmousefocus && opt.autohidemode === "leave") return;
        self.cursortimeout = setTimeout(function () {
          if (!self.rail.active || !self.showonmouseevent) {
            self.autohidedom.stop().animate({
              opacity: opt.cursoropacitymin
            });
            if (self.zoom) self.zoom.stop().animate({
              opacity: opt.cursoropacitymin
            });
            self.cursoractive = false;
          }
          self.cursortimeout = 0;
        }, tm || opt.hidecursordelay);
      };
  
      this.noticeCursor = function (tm, py, px) {
        self.showCursor(py, px);
        if (!self.rail.active) self.hideCursor(tm);
      };
  
      this.getContentSize =
        (self.ispage) ?
          function () {
            return {
              w: Math.max(_doc.body.scrollWidth, _doc.documentElement.scrollWidth),
              h: Math.max(_doc.body.scrollHeight, _doc.documentElement.scrollHeight)
            };
          } : (self.haswrapper) ?
            function () {
              return {
                w: self.doc[0].offsetWidth,
                h: self.doc[0].offsetHeight
              };
            } : function () {
              return {
                w: self.docscroll[0].scrollWidth,
                h: self.docscroll[0].scrollHeight
              };
            };
  
      this.onResize = function (e, page) {
  
        if (!self || !self.win) return false;
  
        var premaxh = self.page.maxh,
            premaxw = self.page.maxw,
            previewh = self.view.h,
            previeww = self.view.w;
  
        self.view = {
          w: (self.ispage) ? self.win.width() : self.win[0].clientWidth,
          h: (self.ispage) ? self.win.height() : self.win[0].clientHeight
        };
  
        self.page = (page) ? page : self.getContentSize();
  
        self.page.maxh = Math.max(0, self.page.h - self.view.h);
        self.page.maxw = Math.max(0, self.page.w - self.view.w);
  
        if ((self.page.maxh == premaxh) && (self.page.maxw == premaxw) && (self.view.w == previeww) && (self.view.h == previewh)) {
          // test position        
          if (!self.ispage) {
            var pos = self.win.offset();
            if (self.lastposition) {
              var lst = self.lastposition;
              if ((lst.top == pos.top) && (lst.left == pos.left)) return self; //nothing to do            
            }
            self.lastposition = pos;
          } else {
            return self; //nothing to do
          }
        }
  
        if (self.page.maxh === 0) {
          self.hideRail();
          self.scrollvaluemax = 0;
          self.scroll.y = 0;
          self.scrollratio.y = 0;
          self.cursorheight = 0;
          self.setScrollTop(0);
          if (self.rail) self.rail.scrollable = false;
        } else {
          self.page.maxh -= (opt.railpadding.top + opt.railpadding.bottom);
          self.rail.scrollable = true;
        }
  
        if (self.page.maxw === 0) {
          self.hideRailHr();
          self.scrollvaluemaxw = 0;
          self.scroll.x = 0;
          self.scrollratio.x = 0;
          self.cursorwidth = 0;
          self.setScrollLeft(0);
          if (self.railh) {
            self.railh.scrollable = false;
          }
        } else {
          self.page.maxw -= (opt.railpadding.left + opt.railpadding.right);
          if (self.railh) self.railh.scrollable = (opt.horizrailenabled);
        }
  
        self.railslocked = (self.locked) || ((self.page.maxh === 0) && (self.page.maxw === 0));
        if (self.railslocked) {
          if (!self.ispage) self.updateScrollBar(self.view);
          return false;
        }
  
        if (!self.hidden) {
          if (!self.rail.visibility) self.showRail();
          if (self.railh && !self.railh.visibility) self.showRailHr();
        }
  
        if (self.istextarea && self.win.css('resize') && self.win.css('resize') != 'none') self.view.h -= 20;
  
        self.cursorheight = Math.min(self.view.h, Math.round(self.view.h * (self.view.h / self.page.h)));
        self.cursorheight = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorheight);
  
        self.cursorwidth = Math.min(self.view.w, Math.round(self.view.w * (self.view.w / self.page.w)));
        self.cursorwidth = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorwidth);
  
        self.scrollvaluemax = self.view.h - self.cursorheight - (opt.railpadding.top + opt.railpadding.bottom);
        if (!self.hasborderbox) self.scrollvaluemax -= self.cursor[0].offsetHeight - self.cursor[0].clientHeight;
  
        if (self.railh) {
          self.railh.width = (self.page.maxh > 0) ? (self.view.w - self.rail.width) : self.view.w;
          self.scrollvaluemaxw = self.railh.width - self.cursorwidth - (opt.railpadding.left + opt.railpadding.right);
        }
  
        if (!self.ispage) self.updateScrollBar(self.view);
  
        self.scrollratio = {
          x: (self.page.maxw / self.scrollvaluemaxw),
          y: (self.page.maxh / self.scrollvaluemax)
        };
  
        var sy = self.getScrollTop();
        if (sy > self.page.maxh) {
          self.doScrollTop(self.page.maxh);
        } else {
          self.scroll.y = (self.getScrollTop() / self.scrollratio.y) | 0;
          self.scroll.x = (self.getScrollLeft() / self.scrollratio.x) | 0;
          if (self.cursoractive) self.noticeCursor();
        }
  
        if (self.scroll.y && (self.getScrollTop() === 0)) self.doScrollTo((self.scroll.y * self.scrollratio.y)|0);
  
        return self;
      };
  
      this.resize = self.onResize;
  
      var hlazyresize = 0;
  
      this.onscreenresize = function(e) {
        clearTimeout(hlazyresize);
  
        var hiderails = (!self.ispage && !self.haswrapper);
        if (hiderails) self.hideRails();
  
        hlazyresize = setTimeout(function () {
          if (self) {
            if (hiderails) self.showRails();
            self.resize();
          }
          hlazyresize=0;
        }, 120);
      };
  
      this.lazyResize = function (tm) { // event debounce
  
        clearTimeout(hlazyresize);
  
        tm = isNaN(tm) ? 240 : tm;
  
        hlazyresize = setTimeout(function () {
          self && self.resize();
          hlazyresize=0;
        }, tm);
  
        return self;
  
      };
  
      // derived by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
      function _modernWheelEvent(dom, name, fn, bubble) {
        self._bind(dom, name, function (e) {
          e = e || _win.event;
          var event = {
            original: e,
            target: e.target || e.srcElement,
            type: "wheel",
            deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
            deltaX: 0,
            deltaZ: 0,
            preventDefault: function () {
              e.preventDefault ? e.preventDefault() : e.returnValue = false;
              return false;
            },
            stopImmediatePropagation: function () {
              (e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
            }
          };
  
          if (name == "mousewheel") {
            e.wheelDeltaX && (event.deltaX = -1 / 40 * e.wheelDeltaX);
            e.wheelDeltaY && (event.deltaY = -1 / 40 * e.wheelDeltaY);
            !event.deltaY && !event.deltaX && (event.deltaY = -1 / 40 * e.wheelDelta);
          } else {
            event.deltaY = e.detail;
          }
  
          return fn.call(dom, event);
        }, bubble);
      }
  
  
  
      this.jqbind = function (dom, name, fn) { // use jquery bind for non-native events (mouseenter/mouseleave)
        self.events.push({
          e: dom,
          n: name,
          f: fn,
          q: true
        });
        $(dom).on(name, fn);
      };
  
      this.mousewheel = function (dom, fn, bubble) { // bind mousewheel
        var el = ("jquery" in dom) ? dom[0] : dom;
        if ("onwheel" in _doc.createElement("div")) { // Modern browsers support "wheel"
          self._bind(el, "wheel", fn, bubble || false);
        } else {
          var wname = (_doc.onmousewheel !== undefined) ? "mousewheel" : "DOMMouseScroll"; // older Webkit+IE support or older Firefox          
          _modernWheelEvent(el, wname, fn, bubble || false);
          if (wname == "DOMMouseScroll") _modernWheelEvent(el, "MozMousePixelScroll", fn, bubble || false); // Firefox legacy
        }
      };
  
      var passiveSupported = false;
  
      if (cap.haseventlistener) {  // W3C standard event model
  
        // thanks to https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        try { var options = Object.defineProperty({}, "passive", { get: function () { passiveSupported = !0; } }); _win.addEventListener("test", null, options); } catch (err) { }
  
        this.stopPropagation = function (e) {
          if (!e) return false;
          e = (e.original) ? e.original : e;
          e.stopPropagation();
          return false;
        };
  
        this.cancelEvent = function(e) {
          if (e.cancelable) e.preventDefault();
          e.stopImmediatePropagation();
          if (e.preventManipulation) e.preventManipulation();  // IE10+
          return false;
        };      
  
      } else {
  
        // inspired from https://gist.github.com/jonathantneal/2415137      
  
        Event.prototype.preventDefault = function () {
          this.returnValue = false;
        };
  
        Event.prototype.stopPropagation = function () {
          this.cancelBubble = true;
        };
  
        _win.constructor.prototype.addEventListener = _doc.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (type, listener, useCapture) {
          this.attachEvent("on" + type, listener);
        };
        _win.constructor.prototype.removeEventListener = _doc.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (type, listener, useCapture) {
          this.detachEvent("on" + type, listener);
        };
  
        // Thanks to http://www.switchonthecode.com !!
        this.cancelEvent = function (e) {
          e = e || _win.event;
          if (e) {          
            e.cancelBubble = true;
            e.cancel = true;
            e.returnValue = false;
          }  
          return false;
        };
  
        this.stopPropagation = function (e) {
          e = e || _win.event;
          if (e) e.cancelBubble = true;
          return false;
        };
  
      }
  
      this.delegate = function (dom, name, fn, bubble, active) {
  
        var de = delegatevents[name] || false;
  
        if (!de) {
  
          de = {
            a: [],
            l: [],
            f: function (e) {
              var lst = de.l, l = lst.length - 1;
              var r = false;
              for (var a = l; a >= 0; a--) {
                r = lst[a].call(e.target, e);
                if (r === false) return false;
              }
              return r;
            }
          };
  
          self.bind(dom, name, de.f, bubble, active);
  
          delegatevents[name] = de;
  
        }
  
        if (self.ispage) {
          de.a = [self.id].concat(de.a);
          de.l = [fn].concat(de.l);
        } else {
          de.a.push(self.id);
          de.l.push(fn);        
        }
  
      };
  
      this.undelegate = function (dom, name, fn, bubble, active) {
        var de = delegatevents[name]||false;
        if (de&&de.l) {  // quick fix #683
          for (var a=0,l=de.l.length;a<l;a++) {
            if (de.a[a] === self.id) {
              de.a.splice(a);
              de.l.splice(a);
              if (de.a.length===0) {
                self._unbind(dom,name,de.l.f);
                delegatevents[name] = null;
              }
            }
          }
        }
      };
  
      this.bind = function (dom, name, fn, bubble, active) {
        var el = ("jquery" in dom) ? dom[0] : dom;
        self._bind(el, name, fn, bubble || false, active || false);
      };
  
      this._bind = function (el, name, fn, bubble, active) { // primitive bind
  
        self.events.push({
          e: el,
          n: name,
          f: fn,
          b: bubble,
          q: false
        });
  
        (passiveSupported && (active || el == window.document || el == window.document.body || el == window)) ? el.addEventListener(name, fn, { passive: false, capture: bubble }) : el.addEventListener(name, fn, bubble || false);
      };
  
      this._unbind = function (el, name, fn, bub) { // primitive unbind
        if (delegatevents[name]) self.undelegate(el, name, fn, bub);
        else el.removeEventListener(name, fn, bub);
      };
  
      this.unbindAll = function () {
        for (var a = 0; a < self.events.length; a++) {
          var r = self.events[a];
          (r.q) ? r.e.unbind(r.n, r.f) : self._unbind(r.e, r.n, r.f, r.b);
        }
      };
  
      this.showRails = function () {
        return self.showRail().showRailHr();
      };
  
      this.showRail = function () {
        if ((self.page.maxh !== 0) && (self.ispage || self.win.css('display') != 'none')) {
          //self.visibility = true;
          self.rail.visibility = true;
          self.rail.css('display', 'block');
        }
        return self;
      };
  
      this.showRailHr = function () {
        if (self.railh) {
          if ((self.page.maxw !== 0) && (self.ispage || self.win.css('display') != 'none')) {
            self.railh.visibility = true;
            self.railh.css('display', 'block');
          }
        }
        return self;
      };
  
      this.hideRails = function () {
        return self.hideRail().hideRailHr();
      };
  
      this.hideRail = function () {
        //self.visibility = false;
        self.rail.visibility = false;
        self.rail.css('display', 'none');
        return self;
      };
  
      this.hideRailHr = function () {
        if (self.railh) {
          self.railh.visibility = false;
          self.railh.css('display', 'none');
        }
        return self;
      };
  
      this.show = function () {
        self.hidden = false;
        self.railslocked = false;
        return self.showRails();
      };
  
      this.hide = function () {
        self.hidden = true;
        self.railslocked = true;
        return self.hideRails();
      };
  
      this.toggle = function () {
        return (self.hidden) ? self.show() : self.hide();
      };
  
      this.remove = function () {
        self.stop();
        if (self.cursortimeout) clearTimeout(self.cursortimeout);
        for (var n in self.delaylist) if (self.delaylist[n]) clearAnimationFrame(self.delaylist[n].h);
        self.doZoomOut();
        self.unbindAll();
  
        if (cap.isie9) self.win[0].detachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug
  
        if (self.observer !== false) self.observer.disconnect();
        if (self.observerremover !== false) self.observerremover.disconnect();
        if (self.observerbody !== false) self.observerbody.disconnect();
  
        self.events = null;
  
        if (self.cursor) {
          self.cursor.remove();
        }
        if (self.cursorh) {
          self.cursorh.remove();
        }
        if (self.rail) {
          self.rail.remove();
        }
        if (self.railh) {
          self.railh.remove();
        }
        if (self.zoom) {
          self.zoom.remove();
        }
        for (var a = 0; a < self.saved.css.length; a++) {
          var d = self.saved.css[a];
          d[0].css(d[1], (d[2] === undefined) ? '' : d[2]);
        }
        self.saved = false;
        self.me.data('__nicescroll', ''); //erase all traces
  
        // memory leak fixed by GianlucaGuarini - thanks a lot!
        // remove the current nicescroll from the $.nicescroll array & normalize array
        var lst = $.nicescroll;
        lst.each(function (i) {
          if (!this) return;
          if (this.id === self.id) {
            delete lst[i];
            for (var b = ++i; b < lst.length; b++ , i++) lst[i] = lst[b];
            lst.length--;
            if (lst.length) delete lst[lst.length];
          }
        });
  
        for (var i in self) {
          self[i] = null;
          delete self[i];
        }
  
        self = null;
  
      };
  
      this.scrollstart = function (fn) {
        this.onscrollstart = fn;
        return self;
      };
      this.scrollend = function (fn) {
        this.onscrollend = fn;
        return self;
      };
      this.scrollcancel = function (fn) {
        this.onscrollcancel = fn;
        return self;
      };
  
      this.zoomin = function (fn) {
        this.onzoomin = fn;
        return self;
      };
      this.zoomout = function (fn) {
        this.onzoomout = fn;
        return self;
      };
  
      this.isScrollable = function (e) {
        var dom = (e.target) ? e.target : e;
        if (dom.nodeName == 'OPTION') return true;
        while (dom && (dom.nodeType == 1) && (dom !== this.me[0]) && !(/^BODY|HTML/.test(dom.nodeName))) {
          var dd = $(dom);
          var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
          if (/scroll|auto/.test(ov)) return (dom.clientHeight != dom.scrollHeight);
          dom = (dom.parentNode) ? dom.parentNode : false;
        }
        return false;
      };
  
      this.getViewport = function (me) {
        var dom = (me && me.parentNode) ? me.parentNode : false;
        while (dom && (dom.nodeType == 1) && !(/^BODY|HTML/.test(dom.nodeName))) {
          var dd = $(dom);
          if (/fixed|absolute/.test(dd.css("position"))) return dd;
          var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
          if ((/scroll|auto/.test(ov)) && (dom.clientHeight != dom.scrollHeight)) return dd;
          if (dd.getNiceScroll().length > 0) return dd;
          dom = (dom.parentNode) ? dom.parentNode : false;
        }
        return false;
      };
  
      this.triggerScrollStart = function (cx, cy, rx, ry, ms) {
  
        if (self.onscrollstart) {
          var info = {
            type: "scrollstart",
            current: {
              x: cx,
              y: cy
            },
            request: {
              x: rx,
              y: ry
            },
            end: {
              x: self.newscrollx,
              y: self.newscrolly
            },
            speed: ms
          };
          self.onscrollstart.call(self, info);
        }
  
      };
  
      this.triggerScrollEnd = function () {
        if (self.onscrollend) {
  
          var px = self.getScrollLeft();
          var py = self.getScrollTop();
  
          var info = {
            type: "scrollend",
            current: {
              x: px,
              y: py
            },
            end: {
              x: px,
              y: py
            }
          };
  
          self.onscrollend.call(self, info);
  
        }
  
      };
  
      var scrolldiry = 0, scrolldirx = 0, scrolltmr = 0, scrollspd = 1;
  
      function doScrollRelative(px, py, chkscroll, iswheel) {
  
        if (!self.scrollrunning) {
          self.newscrolly = self.getScrollTop();
          self.newscrollx = self.getScrollLeft();
          scrolltmr = now();
        }
  
        var gap = (now() - scrolltmr);
        scrolltmr = now();
  
        if (gap > 350) {
          scrollspd = 1;
        } else {
          scrollspd += (2 - scrollspd) / 10;
        }
  
        px = px * scrollspd | 0;
        py = py * scrollspd | 0;
  
        if (px) {
  
          if (iswheel) { // mouse-only
            if (px < 0) {  // fix apple magic mouse swipe back/forward
              if (self.getScrollLeft() >= self.page.maxw) return true;
            } else {
              if (self.getScrollLeft() <= 0) return true;
            }
          }
  
          var dx = px > 0 ? 1 : -1;
  
          if (scrolldirx !== dx) {
            if (self.scrollmom) self.scrollmom.stop();
            self.newscrollx = self.getScrollLeft();
            scrolldirx = dx;
          }
  
          self.lastdeltax -= px;
  
        }
  
        if (py) {
  
          var chk = (function () {
            var top = self.getScrollTop();
            if (py < 0) {
              if (top >= self.page.maxh) return true;
            } else {
              if (top <= 0) return true;
            }
          })();
  
          if (chk) {
            if (opt.nativeparentscrolling && chkscroll && !self.ispage && !self.zoomactive) return true;
            var ny = self.view.h >> 1;
            if (self.newscrolly < -ny) { self.newscrolly = -ny; py = -1; }
            else if (self.newscrolly > self.page.maxh + ny) { self.newscrolly = self.page.maxh + ny; py = 1; }
            else py = 0;
          }
  
          var dy = py > 0 ? 1 : -1;
  
          if (scrolldiry !== dy) {
            if (self.scrollmom) self.scrollmom.stop();
            self.newscrolly = self.getScrollTop();
            scrolldiry = dy;
          }
  
          self.lastdeltay -= py;
  
        }
  
        if (py || px) {
          self.synched("relativexy", function () {
  
            var dty = self.lastdeltay + self.newscrolly;
            self.lastdeltay = 0;
  
            var dtx = self.lastdeltax + self.newscrollx;
            self.lastdeltax = 0;
  
            if (!self.rail.drag) self.doScrollPos(dtx, dty);
  
          });
        }
  
      }
  
      var hasparentscrollingphase = false;
  
      function execScrollWheel(e, hr, chkscroll) {
        var px, py;
  
        if (!chkscroll && hasparentscrollingphase) return true;
  
        if (e.deltaMode === 0) { // PIXEL
          px = -(e.deltaX * (opt.mousescrollstep / (18 * 3))) | 0;
          py = -(e.deltaY * (opt.mousescrollstep / (18 * 3))) | 0;
        } else if (e.deltaMode === 1) { // LINE
          px = -(e.deltaX * opt.mousescrollstep * 50 / 80) | 0;
          py = -(e.deltaY * opt.mousescrollstep * 50 / 80) | 0;
        }
  
        if (hr && opt.oneaxismousemode && (px === 0) && py) { // classic vertical-only mousewheel + browser with x/y support 
          px = py;
          py = 0;
  
          if (chkscroll) {
            var hrend = (px < 0) ? (self.getScrollLeft() >= self.page.maxw) : (self.getScrollLeft() <= 0);
            if (hrend) {  // preserve vertical scrolling
              py = px;
              px = 0;
            }
          }
  
        }
  
        // invert horizontal direction for rtl mode
        if (self.isrtlmode) px = -px;
  
        var chk = doScrollRelative(px, py, chkscroll, true);
  
        if (chk) {
          if (chkscroll) hasparentscrollingphase = true;
        } else {
          hasparentscrollingphase = false;
          e.stopImmediatePropagation();
          return e.preventDefault();
        }
  
      }
  
      this.onmousewheel = function (e) {
        if (self.wheelprevented||self.locked) return false;
        if (self.railslocked) {
          self.debounced("checkunlock", self.resize, 250);
          return false;
        }
        if (self.rail.drag) return self.cancelEvent(e);
  
        if (opt.oneaxismousemode === "auto" && e.deltaX !== 0) opt.oneaxismousemode = false; // check two-axis mouse support (not very elegant)
  
        if (opt.oneaxismousemode && e.deltaX === 0) {
          if (!self.rail.scrollable) {
            if (self.railh && self.railh.scrollable) {
              return self.onmousewheelhr(e);
            } else {
              return true;
            }
          }
        }
  
        var nw = now();
        var chk = false;
        if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
          self.nativescrollingarea = self.isScrollable(e);
          chk = true;
        }
        self.checkarea = nw;
        if (self.nativescrollingarea) return true; // this isn't my business
        var ret = execScrollWheel(e, false, chk);
        if (ret) self.checkarea = 0;
        return ret;
      };
  
      this.onmousewheelhr = function (e) {
        if (self.wheelprevented) return;
        if (self.railslocked || !self.railh.scrollable) return true;
        if (self.rail.drag) return self.cancelEvent(e);
  
        var nw = now();
        var chk = false;
        if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
          self.nativescrollingarea = self.isScrollable(e);
          chk = true;
        }
        self.checkarea = nw;
        if (self.nativescrollingarea) return true; // this is not my business
        if (self.railslocked) return self.cancelEvent(e);
  
        return execScrollWheel(e, true, chk);
      };
  
      this.stop = function () {
        self.cancelScroll();
        if (self.scrollmon) self.scrollmon.stop();
        self.cursorfreezed = false;
        self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
        self.noticeCursor();
        return self;
      };
  
      this.getTransitionSpeed = function (dif) {
  
        return 80 + (dif / 72) * opt.scrollspeed |0;
  
      };
  
      if (!opt.smoothscroll) {
        this.doScrollLeft = function (x, spd) { //direct
          var y = self.getScrollTop();
          self.doScrollPos(x, y, spd);
        };
        this.doScrollTop = function (y, spd) { //direct
          var x = self.getScrollLeft();
          self.doScrollPos(x, y, spd);
        };
        this.doScrollPos = function (x, y, spd) { //direct
          var nx = (x > self.page.maxw) ? self.page.maxw : x;
          if (nx < 0) nx = 0;
          var ny = (y > self.page.maxh) ? self.page.maxh : y;
          if (ny < 0) ny = 0;
          self.synched('scroll', function () {
            self.setScrollTop(ny);
            self.setScrollLeft(nx);
          });
        };
        this.cancelScroll = function () { }; // direct
  
      } else if (self.ishwscroll && cap.hastransition && opt.usetransition && !!opt.smoothscroll) {
  
        var lasttransitionstyle = '';
  
        this.resetTransition = function () {
          lasttransitionstyle = '';
          self.doc.css(cap.prefixstyle + 'transition-duration', '0ms');
        };
  
        this.prepareTransition = function (dif, istime) {
          var ex = (istime) ? dif : self.getTransitionSpeed(dif);
          var trans = ex + 'ms';
          if (lasttransitionstyle !== trans) {
            lasttransitionstyle = trans;
            self.doc.css(cap.prefixstyle + 'transition-duration', trans);
          }
          return ex;
        };
  
        this.doScrollLeft = function (x, spd) { //trans
          var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
          self.doScrollPos(x, y, spd);
        };
  
        this.doScrollTop = function (y, spd) { //trans
          var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
          self.doScrollPos(x, y, spd);
        };
  
        this.cursorupdate = {
          running: false,
          start: function () {
            var m = this;
  
            if (m.running) return;
            m.running = true;
  
            var loop = function () {
              if (m.running) setAnimationFrame(loop);
              self.showCursor(self.getScrollTop(), self.getScrollLeft());
              self.notifyScrollEvent(self.win[0]);
            };
  
            setAnimationFrame(loop);
          },
          stop: function () {
            this.running = false;
          }
        };
  
        this.doScrollPos = function (x, y, spd) { //trans
  
          var py = self.getScrollTop();
          var px = self.getScrollLeft();
  
          if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection      
  
          if (!opt.bouncescroll) {
            if (y < 0) y = 0;
            else if (y > self.page.maxh) y = self.page.maxh;
            if (x < 0) x = 0;
            else if (x > self.page.maxw) x = self.page.maxw;
          } else {
            if (y < 0) y = y / 2 | 0;
            else if (y > self.page.maxh) y = self.page.maxh + (y - self.page.maxh) / 2 | 0;
            if (x < 0) x = x / 2 | 0;
            else if (x > self.page.maxw) x = self.page.maxw + (x - self.page.maxw) / 2 | 0;
          }
  
          if (self.scrollrunning && x == self.newscrollx && y == self.newscrolly) return false;
  
          self.newscrolly = y;
          self.newscrollx = x;
  
          var top = self.getScrollTop();
          var lft = self.getScrollLeft();
  
          var dst = {};
          dst.x = x - lft;
          dst.y = y - top;
  
          var dd = Math.sqrt((dst.x * dst.x) + (dst.y * dst.y)) | 0;
  
          var ms = self.prepareTransition(dd);
  
          if (!self.scrollrunning) {
            self.scrollrunning = true;
            self.triggerScrollStart(lft, top, x, y, ms);
            self.cursorupdate.start();
          }
  
          self.scrollendtrapped = true;
  
          if (!cap.transitionend) {
            if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
            self.scrollendtrapped = setTimeout(self.onScrollTransitionEnd, ms); // simulate transitionend event
          }
  
          self.setScrollTop(self.newscrolly);
          self.setScrollLeft(self.newscrollx);
  
        };
  
        this.cancelScroll = function () {
          if (!self.scrollendtrapped) return true;
          var py = self.getScrollTop();
          var px = self.getScrollLeft();
          self.scrollrunning = false;
          if (!cap.transitionend) clearTimeout(cap.transitionend);
          self.scrollendtrapped = false;
          self.resetTransition();
          self.setScrollTop(py); // fire event onscroll
          if (self.railh) self.setScrollLeft(px);
          if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
          self.timerscroll = false;
  
          self.cursorfreezed = false;
  
          self.cursorupdate.stop();
          self.showCursor(py, px);
          return self;
        };
  
        this.onScrollTransitionEnd = function () {
  
          if (!self.scrollendtrapped) return;
  
          var py = self.getScrollTop();
          var px = self.getScrollLeft();
  
          if (py < 0) py = 0;
          else if (py > self.page.maxh) py = self.page.maxh;
          if (px < 0) px = 0;
          else if (px > self.page.maxw) px = self.page.maxw;
          if ((py != self.newscrolly) || (px != self.newscrollx)) return self.doScrollPos(px, py, opt.snapbackspeed);
  
          if (self.scrollrunning) self.triggerScrollEnd();
          self.scrollrunning = false;
  
          self.scrollendtrapped = false;
          self.resetTransition();
          self.timerscroll = false;
          self.setScrollTop(py); // fire event onscroll        
          if (self.railh) self.setScrollLeft(px); // fire event onscroll left
  
          self.cursorupdate.stop();
          self.noticeCursor(false, py, px);
  
          self.cursorfreezed = false;
  
        };
  
      } else {
  
        this.doScrollLeft = function (x, spd) { //no-trans
          var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
          self.doScrollPos(x, y, spd);
        };
  
        this.doScrollTop = function (y, spd) { //no-trans
          var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
          self.doScrollPos(x, y, spd);
        };
  
        this.doScrollPos = function (x, y, spd) { //no-trans
  
          var py = self.getScrollTop();
          var px = self.getScrollLeft();
  
          if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection
  
          var clipped = false;
  
          if (!self.bouncescroll || !self.rail.visibility) {
            if (y < 0) {
              y = 0;
              clipped = true;
            } else if (y > self.page.maxh) {
              y = self.page.maxh;
              clipped = true;
            }
          }
          if (!self.bouncescroll || !self.railh.visibility) {
            if (x < 0) {
              x = 0;
              clipped = true;
            } else if (x > self.page.maxw) {
              x = self.page.maxw;
              clipped = true;
            }
          }
  
          if (self.scrollrunning && (self.newscrolly === y) && (self.newscrollx === x)) return true;
  
          self.newscrolly = y;
          self.newscrollx = x;
  
          self.dst = {};
          self.dst.x = x - px;
          self.dst.y = y - py;
          self.dst.px = px;
          self.dst.py = py;
  
          var dd = Math.sqrt((self.dst.x * self.dst.x) + (self.dst.y * self.dst.y)) | 0;
          var ms = self.getTransitionSpeed(dd);
  
          self.bzscroll = {};
  
          var p3 = (clipped) ? 1 : 0.58;
          self.bzscroll.x = new BezierClass(px, self.newscrollx, ms, 0, 0, p3, 1);
          self.bzscroll.y = new BezierClass(py, self.newscrolly, ms, 0, 0, p3, 1);
  
          var loopid = now();
  
          var loop = function () {
  
            if (!self.scrollrunning) return;
            var x = self.bzscroll.y.getPos();
  
            self.setScrollLeft(self.bzscroll.x.getNow());
            self.setScrollTop(self.bzscroll.y.getNow());
  
            if (x <= 1) {
              self.timer = setAnimationFrame(loop);
            } else {
              self.scrollrunning = false;
              self.timer = 0;
              self.triggerScrollEnd();
            }
  
          };
  
          if (!self.scrollrunning) {
            self.triggerScrollStart(px, py, x, y, ms);
            self.scrollrunning = true;
            self.timer = setAnimationFrame(loop);
          }
  
        };
  
        this.cancelScroll = function () {
          if (self.timer) clearAnimationFrame(self.timer);
          self.timer = 0;
          self.bzscroll = false;
          self.scrollrunning = false;
          return self;
        };
  
      }
  
      this.doScrollBy = function (stp, relative) {
        doScrollRelative(0, stp);
      };
  
      this.doScrollLeftBy = function (stp, relative) {
        doScrollRelative(stp, 0);
      };
  
      this.doScrollTo = function (pos, relative) {
        var ny = (relative) ? Math.round(pos * self.scrollratio.y) : pos;
        if (ny < 0) ny = 0;
        else if (ny > self.page.maxh) ny = self.page.maxh;
        self.cursorfreezed = false;
        self.doScrollTop(pos);
      };
  
      this.checkContentSize = function () {
        var pg = self.getContentSize();
        if ((pg.h != self.page.h) || (pg.w != self.page.w)) self.resize(false, pg);
      };
  
      self.onscroll = function (e) {
        if (self.rail.drag) return;
        if (!self.cursorfreezed) {
          self.synched('scroll', function () {
            self.scroll.y = Math.round(self.getScrollTop() / self.scrollratio.y);
            if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() / self.scrollratio.x);
            self.noticeCursor();
          });
        }
      };
      self.bind(self.docscroll, "scroll", self.onscroll);
  
      this.doZoomIn = function (e) {
        if (self.zoomactive) return;
        self.zoomactive = true;
  
        self.zoomrestore = {
          style: {}
        };
        var lst = ['position', 'top', 'left', 'zIndex', 'backgroundColor', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight'];
        var win = self.win[0].style;
        for (var a in lst) {
          var pp = lst[a];
          self.zoomrestore.style[pp] = (win[pp] !== undefined) ? win[pp] : '';
        }
  
        self.zoomrestore.style.width = self.win.css('width');
        self.zoomrestore.style.height = self.win.css('height');
  
        self.zoomrestore.padding = {
          w: self.win.outerWidth() - self.win.width(),
          h: self.win.outerHeight() - self.win.height()
        };
  
        if (cap.isios4) {
          self.zoomrestore.scrollTop = $window.scrollTop();
          $window.scrollTop(0);
        }
  
        self.win.css({
          position: (cap.isios4) ? "absolute" : "fixed",
          top: 0,
          left: 0,
          zIndex: globalmaxzindex + 100,
          margin: 0
        });
        var bkg = self.win.css("backgroundColor");
        if ("" === bkg || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor", "#fff");
        self.rail.css({
          zIndex: globalmaxzindex + 101
        });
        self.zoom.css({
          zIndex: globalmaxzindex + 102
        });
        self.zoom.css('backgroundPosition', '0 -18px');
        self.resizeZoom();
  
        if (self.onzoomin) self.onzoomin.call(self);
  
        return self.cancelEvent(e);
      };
  
      this.doZoomOut = function (e) {
        if (!self.zoomactive) return;
        self.zoomactive = false;
  
        self.win.css("margin", "");
        self.win.css(self.zoomrestore.style);
  
        if (cap.isios4) {
          $window.scrollTop(self.zoomrestore.scrollTop);
        }
  
        self.rail.css({
          "z-index": self.zindex
        });
        self.zoom.css({
          "z-index": self.zindex
        });
        self.zoomrestore = false;
        self.zoom.css('backgroundPosition', '0 0');
        self.onResize();
  
        if (self.onzoomout) self.onzoomout.call(self);
  
        return self.cancelEvent(e);
      };
  
      this.doZoom = function (e) {
        return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
      };
  
      this.resizeZoom = function () {
        if (!self.zoomactive) return;
  
        var py = self.getScrollTop(); //preserve scrolling position
        self.win.css({
          width: $window.width() - self.zoomrestore.padding.w + "px",
          height: $window.height() - self.zoomrestore.padding.h + "px"
        });
        self.onResize();
  
        self.setScrollTop(Math.min(self.page.maxh, py));
      };
  
      this.init();
  
      $.nicescroll.push(this);
  
    };
  
    // Inspired by the work of Kin Blas
    // http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js  
    var ScrollMomentumClass2D = function (nc) {
      var self = this;
      this.nc = nc;
  
      this.lastx = 0;
      this.lasty = 0;
      this.speedx = 0;
      this.speedy = 0;
      this.lasttime = 0;
      this.steptime = 0;
      this.snapx = false;
      this.snapy = false;
      this.demulx = 0;
      this.demuly = 0;
  
      this.lastscrollx = -1;
      this.lastscrolly = -1;
  
      this.chkx = 0;
      this.chky = 0;
  
      this.timer = 0;
  
      this.reset = function (px, py) {
        self.stop();
        self.steptime = 0;
        self.lasttime = now();
        self.speedx = 0;
        self.speedy = 0;
        self.lastx = px;
        self.lasty = py;
        self.lastscrollx = -1;
        self.lastscrolly = -1;
      };
  
      this.update = function (px, py) {
        var tm = now();
        self.steptime = tm - self.lasttime;
        self.lasttime = tm;
        var dy = py - self.lasty;
        var dx = px - self.lastx;
        var sy = self.nc.getScrollTop();
        var sx = self.nc.getScrollLeft();
        var newy = sy + dy;
        var newx = sx + dx;
        self.snapx = (newx < 0) || (newx > self.nc.page.maxw);
        self.snapy = (newy < 0) || (newy > self.nc.page.maxh);
        self.speedx = dx;
        self.speedy = dy;
        self.lastx = px;
        self.lasty = py;
      };
  
      this.stop = function () {
        self.nc.unsynched("domomentum2d");
        if (self.timer) clearTimeout(self.timer);
        self.timer = 0;
        self.lastscrollx = -1;
        self.lastscrolly = -1;
      };
  
      this.doSnapy = function (nx, ny) {
        var snap = false;
  
        if (ny < 0) {
          ny = 0;
          snap = true;
        } else if (ny > self.nc.page.maxh) {
          ny = self.nc.page.maxh;
          snap = true;
        }
  
        if (nx < 0) {
          nx = 0;
          snap = true;
        } else if (nx > self.nc.page.maxw) {
          nx = self.nc.page.maxw;
          snap = true;
        }
  
        (snap) ? self.nc.doScrollPos(nx, ny, self.nc.opt.snapbackspeed) : self.nc.triggerScrollEnd();
      };
  
      this.doMomentum = function (gp) {
        var t = now();
        var l = (gp) ? t + gp : self.lasttime;
  
        var sl = self.nc.getScrollLeft();
        var st = self.nc.getScrollTop();
  
        var pageh = self.nc.page.maxh;
        var pagew = self.nc.page.maxw;
  
        self.speedx = (pagew > 0) ? Math.min(60, self.speedx) : 0;
        self.speedy = (pageh > 0) ? Math.min(60, self.speedy) : 0;
  
        var chk = l && (t - l) <= 60;
  
        if ((st < 0) || (st > pageh) || (sl < 0) || (sl > pagew)) chk = false;
  
        var sy = (self.speedy && chk) ? self.speedy : false;
        var sx = (self.speedx && chk) ? self.speedx : false;
  
        if (sy || sx) {
          var tm = Math.max(16, self.steptime); //timeout granularity
  
          if (tm > 50) { // do smooth
            var xm = tm / 50;
            self.speedx *= xm;
            self.speedy *= xm;
            tm = 50;
          }
  
          self.demulxy = 0;
  
          self.lastscrollx = self.nc.getScrollLeft();
          self.chkx = self.lastscrollx;
          self.lastscrolly = self.nc.getScrollTop();
          self.chky = self.lastscrolly;
  
          var nx = self.lastscrollx;
          var ny = self.lastscrolly;
  
          var onscroll = function () {
            var df = ((now() - t) > 600) ? 0.04 : 0.02;
  
            if (self.speedx) {
              nx = Math.floor(self.lastscrollx - (self.speedx * (1 - self.demulxy)));
              self.lastscrollx = nx;
              if ((nx < 0) || (nx > pagew)) df = 0.10;
            }
  
            if (self.speedy) {
              ny = Math.floor(self.lastscrolly - (self.speedy * (1 - self.demulxy)));
              self.lastscrolly = ny;
              if ((ny < 0) || (ny > pageh)) df = 0.10;
            }
  
            self.demulxy = Math.min(1, self.demulxy + df);
  
            self.nc.synched("domomentum2d", function () {
  
              if (self.speedx) {
                var scx = self.nc.getScrollLeft();
                //              if (scx != self.chkx) self.stop();
                self.chkx = nx;
                self.nc.setScrollLeft(nx);
              }
  
              if (self.speedy) {
                var scy = self.nc.getScrollTop();
                //              if (scy != self.chky) self.stop();
                self.chky = ny;
                self.nc.setScrollTop(ny);
              }
  
              if (!self.timer) {
                self.nc.hideCursor();
                self.doSnapy(nx, ny);
              }
  
            });
  
            if (self.demulxy < 1) {
              self.timer = setTimeout(onscroll, tm);
            } else {
              self.stop();
              self.nc.hideCursor();
              self.doSnapy(nx, ny);
            }
          };
  
          onscroll();
  
        } else {
          self.doSnapy(self.nc.getScrollLeft(), self.nc.getScrollTop());
        }
  
      };
  
    };
  
  
    // override jQuery scrollTop
    var _scrollTop = jQuery.fn.scrollTop; // preserve original function
  
    jQuery.cssHooks.pageYOffset = {
      get: function (elem, computed, extra) {
        var nice = $.data(elem, '__nicescroll') || false;
        return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
      },
      set: function (elem, value) {
        var nice = $.data(elem, '__nicescroll') || false;
        (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem, value);
        return this;
      }
    };
  
    jQuery.fn.scrollTop = function (value) {
      if (value === undefined) {
        var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
        return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
      } else {
        return this.each(function () {
          var nice = $.data(this, '__nicescroll') || false;
          (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this), value);
        });
      }
    };
  
    // override jQuery scrollLeft
    var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function
  
    $.cssHooks.pageXOffset = {
      get: function (elem, computed, extra) {
        var nice = $.data(elem, '__nicescroll') || false;
        return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
      },
      set: function (elem, value) {
        var nice = $.data(elem, '__nicescroll') || false;
        (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem, value);
        return this;
      }
    };
  
    jQuery.fn.scrollLeft = function (value) {
      if (value === undefined) {
        var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
        return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
      } else {
        return this.each(function () {
          var nice = $.data(this, '__nicescroll') || false;
          (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this), value);
        });
      }
    };
  
    var NiceScrollArray = function (doms) {
      var self = this;
      this.length = 0;
      this.name = "nicescrollarray";
  
      this.each = function (fn) {
        $.each(self, fn);
        return self;
      };
  
      this.push = function (nice) {
        self[self.length] = nice;
        self.length++;
      };
  
      this.eq = function (idx) {
        return self[idx];
      };
  
      if (doms) {
        for (var a = 0; a < doms.length; a++) {
          var nice = $.data(doms[a], '__nicescroll') || false;
          if (nice) {
            this[this.length] = nice;
            this.length++;
          }
        }
      }
  
      return this;
    };
  
    function mplex(el, lst, fn) {
      for (var a = 0, l = lst.length; a < l; a++) fn(el, lst[a]);
    }
    mplex(
      NiceScrollArray.prototype, ['show', 'hide', 'toggle', 'onResize', 'resize', 'remove', 'stop', 'doScrollPos'],
      function (e, n) {
        e[n] = function () {
          var args = arguments;
          return this.each(function () {
            this[n].apply(this, args);
          });
        };
      }
    );
  
    jQuery.fn.getNiceScroll = function (index) {
      if (index === undefined) {
        return new NiceScrollArray(this);
      } else {
        return this[index] && $.data(this[index], '__nicescroll') || false;
      }
    };
  
    var pseudos = jQuery.expr.pseudos || jQuery.expr[':'];  // jQuery 3 migration
    pseudos.nicescroll = function (a) {
      return $.data(a, '__nicescroll') !== undefined;
    };
  
    $.fn.niceScroll = function (wrapper, _opt) {
      if (_opt === undefined && typeof wrapper == "object" && !("jquery" in wrapper)) {
        _opt = wrapper;
        wrapper = false;
      }
  
      var ret = new NiceScrollArray();
  
      this.each(function () {
        var $this = $(this);
  
        var opt = $.extend({}, _opt); // cloning
  
        if (wrapper || false) {
          var wrp = $(wrapper);
          opt.doc = (wrp.length > 1) ? $(wrapper, $this) : wrp;
          opt.win = $this;
        }
        var docundef = !("doc" in opt);
        if (!docundef && !("win" in opt)) opt.win = $this;
  
        var nice = $this.data('__nicescroll') || false;
        if (!nice) {
          opt.doc = opt.doc || $this;
          nice = new NiceScrollClass(opt, $this);
          $this.data('__nicescroll', nice);
        }
        ret.push(nice);
      });
  
      return (ret.length === 1) ? ret[0] : ret;
    };
  
    _win.NiceScroll = {
      getjQuery: function () {
        return jQuery;
      }
    };
  
    if (!$.nicescroll) {
      $.nicescroll = new NiceScrollArray();
      $.nicescroll.options = _globaloptions;
    }
  
  }));;
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/**
 * Isotope Item
**/

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/item',[
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(
      window.Outlayer
    );
  }

}( window, function factory( Outlayer ) {
'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
function Item() {
  Outlayer.Item.apply( this, arguments );
}

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var _create = proto._create;
proto._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  _create.call( this );
  this.sortData = {};
};

proto.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  // default sorters
  this.sortData.id = this.id;
  // for backward compatibility
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  // go thru getSortData obj and apply the sorters
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};

var _destroy = proto.destroy;
proto.destroy = function() {
  // call super
  _destroy.apply( this, arguments );
  // reset display, #741
  this.css({
    display: ''
  });
};

return Item;

}));

/**
 * Isotope LayoutMode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-mode',[
        'get-size/get-size',
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(
      window.getSize,
      window.Outlayer
    );
  }

}( window, function factory( getSize, Outlayer ) {
  'use strict';

  // layout mode class
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    // link properties
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  var proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];

  facadeMethods.forEach( function( methodName ) {
    proto[ methodName ] = function() {
      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function() {
    // don't trigger if size did not change
    var size = getSize( this.isotope.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };

  proto.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };

  proto.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement( segmentName, outerSize );
    // got rowHeight or columnWidth, we can chill
    if ( this[ segmentName ] ) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      // or size of container
      this.isotope.size[ 'inner' + size ];
  };

  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };

  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function( namespace, options ) {

    function Mode() {
      LayoutMode.apply( this, arguments );
    }

    Mode.prototype = Object.create( proto );
    Mode.prototype.constructor = Mode;

    // default options
    if ( options ) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[ namespace ] = Mode;

    return Mode;
  };

  return LayoutMode;

}));

/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'masonry-layout/masonry',[
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/masonry',[
        '../layout-mode',
        'masonry-layout/masonry'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
      require('masonry-layout')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
      window.Masonry
    );
  }

}( window, function factory( LayoutMode, Masonry ) {
'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  var proto = MasonryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };

  // inherit Masonry prototype
  for ( var method in Masonry.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Masonry.prototype[ method ];
    }
  }

  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };

  // point to mode options for fitWidth
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'fitWidth' ) {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply( this.isotope, arguments );
  };

  return MasonryMode;

}));

/**
 * fitRows layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/fit-rows',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var FitRows = LayoutMode.create('fitRows');

var proto = FitRows.prototype;

proto._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();

  var itemWidth = item.size.outerWidth + this.gutter;
  // if this element cannot fit in the current row
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }

  var position = {
    x: this.x,
    y: this.y
  };

  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;

  return position;
};

proto._getContainerSize = function() {
  return { height: this.maxY };
};

return FitRows;

}));

/**
 * vertical layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/vertical',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});

var proto = Vertical.prototype;

proto._resetLayout = function() {
  this.y = 0;
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};

proto._getContainerSize = function() {
  return { height: this.y };
};

return Vertical;

}));

/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size',
        'desandro-matches-selector/matches-selector',
        'fizzy-ui-utils/utils',
        'isotope-layout/js/item',
        'isotope-layout/js/layout-mode',
        // include default layout modes
        'isotope-layout/js/layout-modes/masonry',
        'isotope-layout/js/layout-modes/fit-rows',
        'isotope-layout/js/layout-modes/vertical'
      ],
      function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
      });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('outlayer'),
      require('get-size'),
      require('desandro-matches-selector'),
      require('fizzy-ui-utils'),
      require('isotope-layout/js/item'),
      require('isotope-layout/js/layout-mode'),
      // include default layout modes
      require('isotope-layout/js/layout-modes/masonry'),
      require('isotope-layout/js/layout-modes/fit-rows'),
      require('isotope-layout/js/layout-modes/vertical')
    );
  } else {
    // browser global
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode ) {



// -------------------------- vars -------------------------- //

var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };

// -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  var proto = Isotope.prototype;

  proto._create = function() {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call( this );

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = [ 'original-order' ];
    // create from registered layout modes
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };

  proto.reloadItems = function() {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call( this );
  };

  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    // assign ID for original-order
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };


  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      utils.extend( Mode.options, initialOpts ) : initialOpts;
    // init layout mode instance
    this.modes[ name ] = new Mode( this );
  };


  proto.layout = function() {
    // if first time doing layout, do all magic
    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function() {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    var filtered = this._filter( this.items );
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if ( this._isInstant ) {
      this._noTransition( this._hideReveal, [ filtered ] );
    } else {
      this._hideReveal( filtered );
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function( filtered ) {
    this.reveal( filtered.needReveal );
    this.hide( filtered.needHide );
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function() {
    // listen for 3 events to trigger arrangeComplete
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
      }
    }
    this.once( 'layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest( filter );

    // test each item
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test( item );
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if ( isMatched ) {
        matches.push( item );
      }
      // add to additional group if item needs to be hidden or revealed
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }

    // return collections of items to be manipulated
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      // use jQuery
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter == 'function' ) {
      // use filter as function
      return function( item ) {
        return filter( item.element );
      };
    }
    // default, use filter as selector string
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function( elems ) {
    // get items
    var items;
    if ( elems ) {
      elems = utils.makeArray( elems );
      items = this.getItems( elems );
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData( items );
  };

  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function( items ) {
    // do not update if no items
    var len = items && items.length;

    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = ( function() {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter( sorter ) {
      // if not a string, return function or whatever it is
      if ( typeof sorter != 'string' ) {
        return sorter;
      }
      // parse the sorter string
      var args = trim( sorter ).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[ args[1] ];
      // parse the value, if there was a parser
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      // otherwise just return value
      function( elem ) {
        return elem && getValue( elem );
      };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter( attr, query ) {
      // if query looks like [foo-bar], get attribute
      if ( attr ) {
        return function getAttribute( elem ) {
          return elem.getAttribute( attr );
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText( elem ) {
        var child = elem.querySelector( query );
        return child && child.textContent;
      };
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function() {
    if ( !this.options.sortBy ) {
      return;
    }
    // keep track of sortBy History
    var sortBys = utils.makeArray( this.options.sortBy );
    if ( !this._getIsSameSortBy( sortBys ) ) {
      // concat all sortBy and sortHistory, add to front, oldest goes in last
      this.sortHistory = sortBys.concat( this.sortHistory );
    }
    // sort magic
    var itemSorter = getItemSorter( this.sortHistory, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
  };

  // check if sortBys is same as start of sortHistory
  proto._getIsSameSortBy = function( sortBys ) {
    for ( var i=0; i < sortBys.length; i++ ) {
      if ( sortBys[i] != this.sortHistory[i] ) {
        return false;
      }
    }
    return true;
  };

  // returns a function used for sorting
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      // cycle through all sortKeys
      for ( var i = 0; i < sortBys.length; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      // TODO console.error
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[ layoutMode ];
    return mode;
  };

  proto._resetLayout = function() {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };

  proto._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };

  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // layout previous items
    this.layoutItems( this.filteredItems );
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat( this.filteredItems );
    this.items = items.concat( this.items );
  };

  proto._filterRevealAdded = function( items ) {
    var filtered = this._filter( items );
    this.hide( filtered.needHide );
    // reveal all new items
    this.reveal( filtered.matches );
    // layout new items, no transition
    this.layoutItems( filtered.matches, true );
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    // filter new stuff
    var filteredInsertItems = this._filter( items ).matches;
    // set flag
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };

  var _remove = proto.remove;
  proto.remove = function( elems ) {
    elems = utils.makeArray( elems );
    var removeItems = this.getItems( elems );
    // do regular thing
    _remove.call( this, elems );
    // bail if no items to remove
    var len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for ( var i=0; len && i < len; i++ ) {
      var item = removeItems[i];
      // remove item from collection
      utils.removeFrom( this.filteredItems, item );
    }
  };

  proto.shuffle = function() {
    // update random sortData
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function( fn, args ) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.apply( this, args );
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map( function( item ) {
      return item.element;
    });
  };

  // -----  ----- //

  return Isotope;

}));
;
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d) return {
            x: a.touches[0].pageX,
            y: a.touches[0].pageY
        };
        if (a.touches === d) {
            if (a.pageX !== d) return {
                x: a.pageX,
                y: a.pageY
            };
            if (a.pageX === d) return {
                x: a.clientX,
                y: a.clientY
            }
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"),
            f = a;
        for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(e), e = {
                    width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                    return a > 1
                }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function(b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
            f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
            } else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
            e = a(h), f = new Image, f.onload = function() {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["<i class='fa fa-long-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                start: a - e,
                end: a - e + g - 1
            }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function() {
        var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);;
/*!
Waypoints - 4.0.1
Copyright Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();;
/**
* jQuery scroroller Plugin 1.0
*
* http://www.tinywall.net/
* 
* Developers: Arun David, Boobalan
* Copyright (c) 2014 
*/
(function($){
    $(window).on("load",function(){
        $(document).scrollzipInit();
        $(document).rollerInit();
    });
    $(window).on("load scroll resize", function(){
        $('.numscroller').scrollzip({
            showFunction    :   function() {
                                    numberRoller($(this).attr('data-slno'));
                                },
            wholeVisible    :     false,
        });
    });
    $.fn.scrollzipInit=function(){
        $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
    };
    $.fn.rollerInit=function(){
        var i=0;
        $('.numscroller').each(function() {
            i++;
           $(this).attr('data-slno',i); 
           $(this).addClass("roller-title-number-"+i);
        });        
    };
    $.fn.scrollzip = function(options){
        var top;
        var settings = $.extend({
            showFunction    : null,
            hideFunction    : null,
            showShift       : 0,
            wholeVisible    : false,
            hideShift       : 0,
        }, options);
        return this.each(function(i,obj){
            $(this).addClass('scrollzip');
            if ( $.isFunction( settings.showFunction ) ){
                if(
                    !$(this).hasClass('isShown')&&
                    ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
                ){
                    $(this).addClass('isShown');
                    settings.showFunction.call( this );
                }
            }
            if ( $.isFunction( settings.hideFunction ) ){
                if(
                    $(this).hasClass('isShown')&&
                    (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
                ){
                    $(this).removeClass('isShown');
                    settings.hideFunction.call( this );
                }
            }
            return this;
        });
    };
    function numberRoller(slno){
            var min=$('.roller-title-number-'+slno).attr('data-min');
            var max=$('.roller-title-number-'+slno).attr('data-max');
            var timediff=$('.roller-title-number-'+slno).attr('data-delay');
            var increment=$('.roller-title-number-'+slno).attr('data-increment');
            var numdiff=max-min;
            var timeout=(timediff*1000)/numdiff;
            //if(numinc<10){
                //increment=Math.floor((timediff*1000)/10);
            //}//alert(increment);
            numberRoll(slno,min,max,increment,timeout);
            
    }
    function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
        if(min<=max){
            $('.roller-title-number-'+slno).html(min);
            min=parseInt(min)+parseInt(increment);
            setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
        }else{
            $('.roller-title-number-'+slno).html(max);
        }
    }

})(jQuery);;
(function ($) {
 Drupal.behaviors.SCTL_multipurpose = {
   attach: function (context, settings) {
    "use strict";

  new WOW().init();

  // counter js
  // $('.counter').counterUp({
  //     delay: 10,
  //     time: 2000
  // });

    $('.blog-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      dots: false,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      center: true,
      autoplayHoverPause: true,
      responsive: {
        0:{
            items:1,
            center:false,
            singleItem:true,
            itemsScaleUp:true,
        },
        600:{
            items:2,
             center:false,
            singleItem:false,
            itemsScaleUp:false,
        },
        1000:{
            items:3
        }    
      }
    });
    $('.partners').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      transitionStyle: 'fade',
      responsive: {
        0:{
            items:1
        },
        400:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }    
      }
    });

    $('.testimonial-carousel').owlCarousel({
      loop: true,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 450,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      transitionStyle: "fade",
      responsive: {
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1
        }    
      }
    });


    $('.other-project-items').owlCarousel({
      loop: true,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      nav: true,
      dots: false,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 450,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      transitionStyle: "fade",
      responsive: {
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3
        }    
      }
    });

    jQuery(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $("#menu").addClass("sticky");
      } else {
          $("#menu").removeClass("sticky");
      }
    });


    //Scroll to Top
    $("ul.tabs").addClass("tabs-top");
    function headerStyle() {
      if($('body').length){
        var windowpos = $(window).scrollTop();
        var scrollLink = $('.scroll-top');
        if (windowpos >= 250) {
          scrollLink.addClass('open');
           $("ul.tabs").addClass("tabs-top");
        } else {
          scrollLink.removeClass('open');
           $("ul.tabs").removeClass("tabs-top");
        }
      }
    }
    headerStyle();
    // Scroll to Target
    if($('.scroll-to-target').length){
      $(".scroll-to-target", context).once('scrolltopBehavior').on('click', function() {
        var target = $(this).attr('data-target');
         // animate
         $('html, body').animate({
           scrollTop: 0
         }, 2000);
    
      });
    }

  
      $(document).click(function(e) {
        if (!$(e.target).is('.panel-body')) {
          $('.collapse').collapse('hide');      
        }
      });

  $(window).on('scroll', function() {
    headerStyle();
  });
         var main_color = drupalSettings.main_color;
        // alert("Main Color "+main_color);
        $(':root').css('--main-theme-color', main_color);

        $('#clients-count .col-lg-3:last-child').addClass('col-lg-2');
        $('#clients-count .col-lg-2').removeClass('col-lg-3');

}}})(jQuery, Drupal);// End of use strict;
