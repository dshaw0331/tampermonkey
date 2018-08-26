function async_request(url) {return new Promise(request_xhr); function request_xhr(successCallback, failureCallback) {function onReadyStateChanged() {if (xhr.readyState !== XMLHttpRequest.DONE) return; if (xhr.status !== 200) {xhr.onreadystatechange = null; failureCallback(new Error(xhr.status)); return} xhr.onreadystatechange = null; successCallback(xhr.responseText)} var xhr = new XMLHttpRequest; xhr.withCredentials = false; xhr.open("GET", url, true); xhr.onreadystatechange = onReadyStateChanged; xhr.send(null)} }
function async_exec(data, id) {return new Promise(exec); function exec(resolve, reject) {try {if (!data) {console.log("async_request: could not load: " + id); return;} var script = document.createElement("script"); script.type = "text/javascript"; script.innerHTML = data; script.id = id; document.body.appendChild(script); resolve(true);} catch (e) {reject(e);} } }

window.csm = window.csm || {};
(function(csm) {
    if (!window.utui) {
        return;
    }
    csm.extra_info = function() {
        csm.qtip_config = {};
        csm.qtip_init = (function() {
            // parseHTML
            function parseHTML(str) {
                var tmp = document.implementation.createHTMLDocument();
                tmp.body.innerHTML = str;
                return tmp.body.children[0];
            }
            // _lodash debounce and throttle
            (function() {
                function e() {}

                function t(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t);
                }

                function n(e) {
                    return null != e && "object" == typeof e;
                }

                function o(e) {
                    var t;
                    if (!(t = "symbol" == typeof e) && (t = n(e))) {
                        if (null == e) {
                            e = e === i ? "[object Undefined]" : "[object Null]";
                        } else if (v && v in Object(e)) {
                            t = m.call(e, v);
                            var o = e[v];
                            try {
                                e[v] = i;
                                var r = !0;
                            } catch (e) {}
                            var u = j.call(e);
                            r && (t ? e[v] = o : delete e[v]), e = u;
                        } else {
                            e = j.call(e);
                        }
                        t = "[object Symbol]" == e;
                    }
                    return t;
                }

                function r(e) {
                    if ("number" == typeof e) {
                        return e;
                    }
                    if (o(e)) {
                        return u;
                    }
                    if (t(e) && (e = "function" == typeof e.valueOf ? e.valueOf() : e, e = t(e) ? e + "" : e), "string" != typeof e) {
                        return 0 === e ? e : +e;
                    }
                    e = e.replace(f, "");
                    var n = l.test(e);
                    return n || a.test(e) ? s(e.slice(2), n ? 2 : 8) : c.test(e) ? u : +e;
                }
                var i, u = NaN,
                    f = /^\s+|\s+$/g,
                    c = /^[-+]0x[0-9a-f]+$/i,
                    l = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    s = parseInt,
                    b = "object" == typeof self && self && self.Object === Object && self,
                    p = "object" == typeof global && global && global.Object === Object && global || b || Function("return this")(),
                    y = (b = "object" == typeof exports && exports && !exports.nodeType && exports) && "object" == typeof module && module && !module.nodeType && module,
                    d = Object.prototype,
                    m = d.hasOwnProperty,
                    j = d.toString,
                    v = (d = p.Symbol) ? d.toStringTag : i,
                    g = Math.max,
                    O = Math.min,
                    h = function() {
                        return p.Date.now();
                    };
                e.debounce = function(e, n, o) {
                    function u(t) {
                        var n = s,
                            o = b;
                        return s = b = i, j = t, y = e.apply(o, n);
                    }

                    function f(e) {
                        var t = e - m;
                        return e -= j, m === i || t >= n || 0 > t || x && e >= p;
                    }

                    function c() {
                        var e = h();
                        if (f(e)) {
                            return l(e);
                        }
                        var t, o = setTimeout;
                        t = e - j, e = n - (e - m), t = x ? O(e, p - t) : e, d = o(c, t);
                    }

                    function l(e) {
                        return d = i, T && s ? u(e) : (s = b = i, y);
                    }

                    function a() {
                        var e = h(),
                            t = f(e);
                        if (s = arguments, b = this, m = e, t) {
                            if (d === i) {
                                return j = e = m, d = setTimeout(c, n), v ? u(e) : y;
                            }
                            if (x) {
                                return d = setTimeout(c, n), u(m);
                            }
                        }
                        return d === i && (d = setTimeout(c, n)), y;
                    }
                    var s, b, p, y, d, m, j = 0,
                        v = !1,
                        x = !1,
                        T = !0;
                    if ("function" != typeof e) {
                        throw new TypeError("Expected a function");
                    }
                    return n = r(n) || 0, t(o) && (v = !!o.leading, p = (x = "maxWait" in o) ? g(r(o.maxWait) || 0, n) : p, T = "trailing" in o ? !!o.trailing : T), a.cancel = function() {
                        d !== i && clearTimeout(d), j = 0, s = m = b = d = i;
                    }, a.flush = function() {
                        return d === i ? y : l(h());
                    }, a;
                }, e.isObject = t, e.isObjectLike = n, e.isSymbol = o, e.now = h, e.toNumber = r, e.VERSION = "4.17.4", "function" == typeof define && "object" == typeof define.amd && define.amd ? (p._lodash = e, define(function() {
                    return e;
                })) : y ? ((y.exports = e)._ = e, b._ = e) : p._lodash = e;
            }).call(window);
            // animate css and jquery animateCSS extend
            var init_qtip_animate = function() {
                ! function n(t, a, e) {
                    function o(i, m) {
                        if (!a[i]) {
                            if (!t[i]) {
                                var s = "function" == typeof require && require;
                                if (!m && s) {
                                    return s(i, !0);
                                }
                                if (r) {
                                    return r(i, !0);
                                }
                                var f = new Error("Cannot find module '" + i + "'");
                                throw f.code = "MODULE_NOT_FOUND", f;
                            }
                            var d = a[i] = {
                                exports: {}
                            };
                            t[i][0].call(d.exports, function(n) {
                                var a = t[i][1][n];
                                return o(a ? a : n);
                            }, d, d.exports, n, t, a, e);
                        }
                        return a[i].exports;
                    }
                    for (var r = "function" == typeof require && require, i = 0; i < e.length; i++) {
                        o(e[i]);
                    }
                    return o;
                }({
                    1: [function(n, t, a) {
                        "use strict";
                        var e = [],
                            o = function(n, t) {
                                var a = document.head || document.getElementsByTagName("head")[0],
                                    o = e[e.length - 1];
                                if (t = t || {}, t.insertAt = t.insertAt || "bottom", "top" === t.insertAt) {
                                    o ? o.nextSibling ? a.insertBefore(n, o.nextSibling) : a.appendChild(n) : a.insertBefore(n, a.firstChild), e.push(n);
                                } else {
                                    if ("bottom" !== t.insertAt) {
                                        throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                                    }
                                    a.appendChild(n);
                                }
                            };
                        t.exports = {
                            createLink: function(n, t) {
                                var a = document.head || document.getElementsByTagName("head")[0],
                                    e = document.createElement("link");
                                e.href = n, e.rel = "stylesheet";
                                for (var o in t) {
                                    if (t.hasOwnProperty(o)) {
                                        var r = t[o];
                                        e.setAttribute("data-" + o, r);
                                    }
                                }
                                a.appendChild(e);
                            },
                            createStyle: function(n, t, a) {
                                a = a || {};
                                var e = document.createElement("style");
                                e.type = "text/css";
                                for (var r in t) {
                                    if (t.hasOwnProperty(r)) {
                                        var i = t[r];
                                        e.setAttribute("data-" + r, i);
                                    }
                                }
                                e.sheet ? (e.innerHTML = n, e.sheet.cssText = n, o(e, {
                                    insertAt: a.insertAt
                                })) : e.styleSheet ? (o(e, {
                                    insertAt: a.insertAt
                                }), e.styleSheet.cssText = n) : (e.appendChild(document.createTextNode(n)), o(e, {
                                    insertAt: a.insertAt
                                }));
                            }
                        };
                    }, {}],
                    2: [function(n, t, a) {
                        var e = '@charset "UTF-8";\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.2\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2017 Daniel Eden\n */\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  animation-iteration-count: infinite;\n}\n.animated.hinge {\n  animation-duration: 2s;\n}\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  animation-duration: .4s;\n}\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.5);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0,-4px,0);\n  }\n}\n.bounce {\n  animation-name: bounce;\n  transform-origin: center bottom;\n}\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n.flash {\n  animation-name: flash;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.pulse {\n  animation-name: pulse;\n}\n@keyframes rubberBand {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.rubberBand {\n  animation-name: rubberBand;\n}\n@keyframes shake {\n  from, to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0);\n  }\n}\n.shake {\n  animation-name: shake;\n}\n@keyframes headShake {\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n}\n.headShake {\n  animation-timing-function: ease-in-out;\n  animation-name: headShake;\n}\n@keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n.swing {\n  transform-origin: top center;\n  animation-name: swing;\n}\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.tada {\n  animation-name: tada;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes wobble {\n  from {\n    transform: none;\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n.wobble {\n  animation-name: wobble;\n}\n@keyframes jello {\n  from, 11.1%, to {\n    transform: none;\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n.jello {\n  animation-name: jello;\n  transform-origin: center;\n}\n@keyframes bounceIn {\n  from, 20%, 60%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n.bounceIn {\n  animation-name: bounceIn;\n}\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n.bounceInDown {\n  animation-name: bounceInDown;\n}\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n.bounceInLeft {\n  animation-name: bounceInLeft;\n}\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n.bounceInRight {\n  animation-name: bounceInRight;\n}\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.bounceInUp {\n  animation-name: bounceInUp;\n}\n@keyframes bounceOut {\n  20% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n}\n.bounceOut {\n  animation-name: bounceOut;\n}\n@keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n.bounceOutDown {\n  animation-name: bounceOutDown;\n}\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n.bounceOutLeft {\n  animation-name: bounceOutLeft;\n}\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n.bounceOutRight {\n  animation-name: bounceOutRight;\n}\n@keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n.bounceOutUp {\n  animation-name: bounceOutUp;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInDown {\n  animation-name: fadeInDown;\n}\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInDownBig {\n  animation-name: fadeInDownBig;\n}\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInLeftBig {\n  animation-name: fadeInLeftBig;\n}\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInRightBig {\n  animation-name: fadeInRightBig;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInUpBig {\n  animation-name: fadeInUpBig;\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n.fadeOut {\n  animation-name: fadeOut;\n}\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.fadeOutDown {\n  animation-name: fadeOutDown;\n}\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n.fadeOutDownBig {\n  animation-name: fadeOutDownBig;\n}\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n.fadeOutLeft {\n  animation-name: fadeOutLeft;\n}\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n.fadeOutLeftBig {\n  animation-name: fadeOutLeftBig;\n}\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.fadeOutRight {\n  animation-name: fadeOutRight;\n}\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n.fadeOutRightBig {\n  animation-name: fadeOutRightBig;\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.fadeOutUp {\n  animation-name: fadeOutUp;\n}\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n.fadeOutUpBig {\n  animation-name: fadeOutUpBig;\n}\n@keyframes flip {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    animation-timing-function: ease-in;\n  }\n}\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  animation-name: flip;\n}\n@keyframes flipInX {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInX;\n}\n@keyframes flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInY;\n}\n@keyframes flipOutX {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n.flipOutX {\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n@keyframes flipOutY {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipOutY;\n}\n@keyframes lightSpeedIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n.lightSpeedIn {\n  animation-name: lightSpeedIn;\n  animation-timing-function: ease-out;\n}\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n.lightSpeedOut {\n  animation-name: lightSpeedOut;\n  animation-timing-function: ease-in;\n}\n@keyframes rotateIn {\n  from {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: center;\n    transform: none;\n    opacity: 1;\n  }\n}\n.rotateIn {\n  animation-name: rotateIn;\n}\n@keyframes rotateInDownLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n.rotateInDownLeft {\n  animation-name: rotateInDownLeft;\n}\n@keyframes rotateInDownRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n.rotateInDownRight {\n  animation-name: rotateInDownRight;\n}\n@keyframes rotateInUpLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n.rotateInUpLeft {\n  animation-name: rotateInUpLeft;\n}\n@keyframes rotateInUpRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n.rotateInUpRight {\n  animation-name: rotateInUpRight;\n}\n@keyframes rotateOut {\n  from {\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.rotateOut {\n  animation-name: rotateOut;\n}\n@keyframes rotateOutDownLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n.rotateOutDownLeft {\n  animation-name: rotateOutDownLeft;\n}\n@keyframes rotateOutDownRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n.rotateOutDownRight {\n  animation-name: rotateOutDownRight;\n}\n@keyframes rotateOutUpLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n.rotateOutUpLeft {\n  animation-name: rotateOutUpLeft;\n}\n@keyframes rotateOutUpRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n.rotateOutUpRight {\n  animation-name: rotateOutUpRight;\n}\n@keyframes hinge {\n  0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n.hinge {\n  animation-name: hinge;\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.rollIn {\n  animation-name: rollIn;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n.rollOut {\n  animation-name: rollOut;\n}\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n.zoomIn {\n  animation-name: zoomIn;\n}\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n.zoomInDown {\n  animation-name: zoomInDown;\n}\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n.zoomInLeft {\n  animation-name: zoomInLeft;\n}\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n.zoomInRight {\n  animation-name: zoomInRight;\n}\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n.zoomInUp {\n  animation-name: zoomInUp;\n}\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n.zoomOut {\n  animation-name: zoomOut;\n}\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n.zoomOutDown {\n  animation-name: zoomOutDown;\n}\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n.zoomOutLeft {\n  animation-name: zoomOutLeft;\n}\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n.zoomOutRight {\n  animation-name: zoomOutRight;\n}\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n.zoomOutUp {\n  animation-name: zoomOutUp;\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown {\n  animation-name: slideInDown;\n}\n@keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInLeft {\n  animation-name: slideInLeft;\n}\n@keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInRight {\n  animation-name: slideInRight;\n}\n@keyframes slideInUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInUp {\n  animation-name: slideInUp;\n}\n@keyframes slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.slideOutDown {\n  animation-name: slideOutDown;\n}\n@keyframes slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n.slideOutLeft {\n  animation-name: slideOutLeft;\n}\n@keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.slideOutRight {\n  animation-name: slideOutRight;\n}\n@keyframes slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.slideOutUp {\n  animation-name: slideOutUp;\n}\n';
                        n("browserify-css").createStyle(e, {
                            href: "animate.css"
                        }, {
                            insertAt: "bottom"
                        }), t.exports = e;
                    }, {
                        "browserify-css": 1
                    }]
                }, {}, [2]), $.fn.extend({
                    animateCSS: function(n) {
                        var t = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
                        return this.addClass("animated " + n).one(t, function() {
                            $(this).removeClass("animated " + n);
                        }), this;
                    }
                });
            };
            // qtip2 js
            var init_qtip_js = function() {
                return ! function(a, b, c) {
                    ! function(a) {
                        "function" == typeof define && define.amd ? define(["jquery"], a) : jQuery && !jQuery.fn.qtip && a(jQuery);
                    }(function(d) {
                        function e(a, b, c, e) {
                            this.id = c, this.target = a, this.tooltip = F, this.elements = {
                                target: a
                            }, this._id = S + "-" + c, this.timers = {
                                img: {}
                            }, this.options = b, this.plugins = {}, this.cache = {
                                event: {},
                                target: d(),
                                disabled: E,
                                attr: e,
                                onTooltip: E,
                                lastClass: ""
                            }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = E;
                        }

                        function f(a) {
                            return a === F || "object" !== d.type(a);
                        }

                        function g(a) {
                            return !(d.isFunction(a) || a && a.attr || a.length || "object" === d.type(a) && (a.jquery || a.then));
                        }

                        function h(a) {
                            var b, c, e, h;
                            return f(a) ? E : (f(a.metadata) && (a.metadata = {
                                type: a.metadata
                            }), "content" in a && (b = a.content, f(b) || b.jquery || b.done ? (c = g(b) ? E : b, b = a.content = {
                                text: c
                            }) : c = b.text, "ajax" in b && (e = b.ajax, h = e && e.once !== E, delete b.ajax, b.text = function(a, b) {
                                var f = c || d(this).attr(b.options.content.attr) || "Loading...",
                                    g = d.ajax(d.extend({}, e, {
                                        context: b
                                    })).then(e.success, F, e.error).then(function(a) {
                                        return a && h && b.set("content.text", a), a;
                                    }, function(a, c, d) {
                                        b.destroyed || 0 === a.status || b.set("content.text", c + ": " + d);
                                    });
                                return h ? f : (b.set("content.text", f), g);
                            }), "title" in b && (d.isPlainObject(b.title) && (b.button = b.title.button, b.title = b.title.text), g(b.title || E) && (b.title = E))), "position" in a && f(a.position) && (a.position = {
                                my: a.position,
                                at: a.position
                            }), "show" in a && f(a.show) && (a.show = a.show.jquery ? {
                                target: a.show
                            } : a.show === D ? {
                                ready: D
                            } : {
                                event: a.show
                            }), "hide" in a && f(a.hide) && (a.hide = a.hide.jquery ? {
                                target: a.hide
                            } : {
                                event: a.hide
                            }), "style" in a && f(a.style) && (a.style = {
                                classes: a.style
                            }), d.each(R, function() {
                                this.sanitize && this.sanitize(a);
                            }), a);
                        }

                        function i(a, b) {
                            for (var c, d = 0, e = a, f = b.split("."); e = e[f[d++]];) {
                                d < f.length && (c = e);
                            }
                            return [c || a, f.pop()];
                        }

                        function j(a, b) {
                            var c, d, e;
                            for (c in this.checks) {
                                if (this.checks.hasOwnProperty(c)) {
                                    for (d in this.checks[c]) {
                                        this.checks[c].hasOwnProperty(d) && (e = new RegExp(d, "i").exec(a)) && (b.push(e), ("builtin" === c || this.plugins[c]) && this.checks[c][d].apply(this.plugins[c] || this, b));
                                    }
                                }
                            }
                        }

                        function k(a) {
                            return V.concat("").join(a ? "-" + a + " " : " ");
                        }

                        function l(a, b) {
                            return b > 0 ? setTimeout(d.proxy(a, this), b) : void a.call(this);
                        }

                        function m(a) {
                            this.tooltip.hasClass(aa) || (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = l.call(this, function() {
                                this.toggle(D, a);
                            }, this.options.show.delay));
                        }

                        function n(a) {
                            if (!this.tooltip.hasClass(aa) && !this.destroyed) {
                                var b = d(a.relatedTarget),
                                    c = b.closest(W)[0] === this.tooltip[0],
                                    e = b[0] === this.options.show.target[0];
                                if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== b[0] && "mouse" === this.options.position.target && c || this.options.hide.fixed && /mouse(out|leave|move)/.test(a.type) && (c || e)) {
                                    try {
                                        a.preventDefault(), a.stopImmediatePropagation();
                                    } catch (f) {}
                                } else {
                                    this.timers.hide = l.call(this, function() {
                                        this.toggle(E, a);
                                    }, this.options.hide.delay, this);
                                }
                            }
                        }

                        function o(a) {
                            !this.tooltip.hasClass(aa) && this.options.hide.inactive && (clearTimeout(this.timers.inactive), this.timers.inactive = l.call(this, function() {
                                this.hide(a);
                            }, this.options.hide.inactive));
                        }

                        function p(a) {
                            this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(a);
                        }

                        function q(a, c, e) {
                            d(b.body).delegate(a, (c.split ? c : c.join("." + S + " ")) + "." + S, function() {
                                var a = y.api[d.attr(this, U)];
                                a && !a.disabled && e.apply(a, arguments);
                            });
                        }

                        function r(a, c, f) {
                            var g, i, j, k, l, m = d(b.body),
                                n = a[0] === b ? m : a,
                                o = a.metadata ? a.metadata(f.metadata) : F,
                                p = "html5" === f.metadata.type && o ? o[f.metadata.name] : F,
                                q = a.data(f.metadata.name || "qtipopts");
                            try {
                                q = "string" == typeof q ? d.parseJSON(q) : q;
                            } catch (r) {}
                            if (k = d.extend(D, {}, y.defaults, f, "object" == typeof q ? h(q) : F, h(p || o)), i = k.position, k.id = c, "boolean" == typeof k.content.text) {
                                if (j = a.attr(k.content.attr), k.content.attr === E || !j) {
                                    return E;
                                }
                                k.content.text = j;
                            }
                            if (i.container.length || (i.container = m), i.target === E && (i.target = n), k.show.target === E && (k.show.target = n), k.show.solo === D && (k.show.solo = i.container.closest("body")), k.hide.target === E && (k.hide.target = n), k.position.viewport === D && (k.position.viewport = i.container), i.container = i.container.eq(0), i.at = new A(i.at, D), i.my = new A(i.my), a.data(S)) {
                                if (k.overwrite) {
                                    a.qtip("destroy", !0);
                                } else if (k.overwrite === E) {
                                    return E;
                                }
                            }
                            return a.attr(T, c), k.suppress && (l = a.attr("title")) && a.removeAttr("title").attr(ca, l).attr("title", ""), g = new e(a, k, c, !!j), a.data(S, g), g;
                        }

                        function s(a) {
                            return a.charAt(0).toUpperCase() + a.slice(1);
                        }

                        function t(a, b) {
                            var d, e, f = b.charAt(0).toUpperCase() + b.slice(1),
                                g = (b + " " + va.join(f + " ") + f).split(" "),
                                h = 0;
                            if (ua[b]) {
                                return a.css(ua[b]);
                            }
                            for (; d = g[h++];) {
                                if ((e = a.css(d)) !== c) {
                                    return ua[b] = d, e;
                                }
                            }
                        }

                        function u(a, b) {
                            return Math.ceil(parseFloat(t(a, b)));
                        }

                        function v(a, b) {
                            this._ns = "tip", this.options = b, this.offset = b.offset, this.size = [b.width, b.height], this.qtip = a, this.init(a);
                        }

                        function w(a, b) {
                            this.options = b, this._ns = "-modal", this.qtip = a, this.init(a);
                        }

                        function x(a) {
                            this._ns = "ie6", this.qtip = a, this.init(a);
                        }
                        var y, z, A, B, C, D = !0,
                            E = !1,
                            F = null,
                            G = "x",
                            H = "y",
                            I = "width",
                            J = "height",
                            K = "top",
                            L = "left",
                            M = "bottom",
                            N = "right",
                            O = "center",
                            P = "flipinvert",
                            Q = "shift",
                            R = {},
                            S = "qtip",
                            T = "data-hasqtip",
                            U = "data-qtip-id",
                            V = ["ui-widget", "ui-tooltip"],
                            W = "." + S,
                            X = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
                            Y = S + "-fixed",
                            Z = S + "-default",
                            $ = S + "-focus",
                            _ = S + "-hover",
                            aa = S + "-disabled",
                            ba = "_replacedByqTip",
                            ca = "oldtitle",
                            da = {
                                ie: function() {
                                    var a, c;
                                    for (a = 4, c = b.createElement("div");
                                        (c.innerHTML = "<!--[if gt IE " + a + "]><i></i><![endif]-->") && c.getElementsByTagName("i")[0]; a += 1) {}
                                    return a > 4 ? a : NaN;
                                }(),
                                iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || E
                            };
                        z = e.prototype, z._when = function(a) {
                            return d.when.apply(d, a);
                        }, z.render = function(a) {
                            if (this.rendered || this.destroyed) {
                                return this;
                            }
                            var b = this,
                                c = this.options,
                                e = this.cache,
                                f = this.elements,
                                g = c.content.text,
                                h = c.content.title,
                                i = c.content.button,
                                j = c.position,
                                k = [];
                            return d.attr(this.target[0], "aria-describedby", this._id), e.posClass = this._createPosClass((this.position = {
                                my: j.my,
                                at: j.at
                            }).my), this.tooltip = f.tooltip = d("<div/>", {
                                id: this._id,
                                class: [S, Z, c.style.classes, e.posClass].join(" "),
                                width: c.style.width || "",
                                height: c.style.height || "",
                                tracking: "mouse" === j.target && j.adjust.mouse,
                                role: "alert",
                                "aria-live": "polite",
                                "aria-atomic": E,
                                "aria-describedby": this._id + "-content",
                                "aria-hidden": D
                            }).toggleClass(aa, this.disabled).attr(U, this.id).data(S, this).appendTo(j.container).append(f.content = d("<div />", {
                                class: S + "-content",
                                id: this._id + "-content",
                                "aria-atomic": D
                            })), this.rendered = -1, this.positioning = D, h && (this._createTitle(), d.isFunction(h) || k.push(this._updateTitle(h, E))), i && this._createButton(), d.isFunction(g) || k.push(this._updateContent(g, E)), this.rendered = D, this._setWidget(), d.each(R, function(a) {
                                var c;
                                "render" === this.initialize && (c = this(b)) && (b.plugins[a] = c);
                            }), this._unassignEvents(), this._assignEvents(), this._when(k).then(function() {
                                b._trigger("render"), b.positioning = E, b.hiddenDuringWait || !c.show.ready && !a || b.toggle(D, e.event, E), b.hiddenDuringWait = E;
                            }), y.api[this.id] = this, this;
                        }, z.destroy = function(a) {
                            function b() {
                                if (!this.destroyed) {
                                    this.destroyed = D;
                                    var a, b = this.target,
                                        c = b.attr(ca);
                                    this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), d.each(this.plugins, function() {
                                        this.destroy && this.destroy();
                                    });
                                    for (a in this.timers) {
                                        this.timers.hasOwnProperty(a) && clearTimeout(this.timers[a]);
                                    }
                                    b.removeData(S).removeAttr(U).removeAttr(T).removeAttr("aria-describedby"), this.options.suppress && c && b.attr("title", c).removeAttr(ca), this._unassignEvents(), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = F, delete y.api[this.id];
                                }
                            }
                            return this.destroyed ? this.target : (a === D && "hide" !== this.triggering || !this.rendered ? b.call(this) : (this.tooltip.one("tooltiphidden", d.proxy(b, this)), !this.triggering && this.hide()), this.target);
                        }, B = z.checks = {
                            builtin: {
                                "^id$": function(a, b, c, e) {
                                    var f = c === D ? y.nextid : c,
                                        g = S + "-" + f;
                                    f !== E && f.length > 0 && !d("#" + g).length ? (this._id = g, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : a[b] = e;
                                },
                                "^prerender": function(a, b, c) {
                                    c && !this.rendered && this.render(this.options.show.ready);
                                },
                                "^content.text$": function(a, b, c) {
                                    this._updateContent(c);
                                },
                                "^content.attr$": function(a, b, c, d) {
                                    this.options.content.text === this.target.attr(d) && this._updateContent(this.target.attr(c));
                                },
                                "^content.title$": function(a, b, c) {
                                    return c ? (c && !this.elements.title && this._createTitle(), void this._updateTitle(c)) : this._removeTitle();
                                },
                                "^content.button$": function(a, b, c) {
                                    this._updateButton(c);
                                },
                                "^content.title.(text|button)$": function(a, b, c) {
                                    this.set("content." + b, c);
                                },
                                "^position.(my|at)$": function(a, b, c) {
                                    "string" == typeof c && (this.position[b] = a[b] = new A(c, "at" === b));
                                },
                                "^position.container$": function(a, b, c) {
                                    this.rendered && this.tooltip.appendTo(c);
                                },
                                "^show.ready$": function(a, b, c) {
                                    c && (!this.rendered && this.render(D) || this.toggle(D));
                                },
                                "^style.classes$": function(a, b, c, d) {
                                    this.rendered && this.tooltip.removeClass(d).addClass(c);
                                },
                                "^style.(width|height)": function(a, b, c) {
                                    this.rendered && this.tooltip.css(b, c);
                                },
                                "^style.widget|content.title": function() {
                                    this.rendered && this._setWidget();
                                },
                                "^style.def": function(a, b, c) {
                                    this.rendered && this.tooltip.toggleClass(Z, !!c);
                                },
                                "^events.(render|show|move|hide|focus|blur)$": function(a, b, c) {
                                    this.rendered && this.tooltip[(d.isFunction(c) ? "" : "un") + "bind"]("tooltip" + b, c);
                                },
                                "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                                    if (this.rendered) {
                                        var a = this.options.position;
                                        this.tooltip.attr("tracking", "mouse" === a.target && a.adjust.mouse), this._unassignEvents(), this._assignEvents();
                                    }
                                }
                            }
                        }, z.get = function(a) {
                            if (this.destroyed) {
                                return this;
                            }
                            var b = i(this.options, a.toLowerCase()),
                                c = b[0][b[1]];
                            return c.precedance ? c.string() : c;
                        };
                        var ea = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
                            fa = /^prerender|show\.ready/i;
                        z.set = function(a, b) {
                            if (this.destroyed) {
                                return this;
                            }
                            var c, e = this.rendered,
                                f = E,
                                g = this.options;
                            return "string" == typeof a ? (c = a, a = {}, a[c] = b) : a = d.extend({}, a), d.each(a, function(b, c) {
                                if (e && fa.test(b)) {
                                    return void delete a[b];
                                }
                                var h, j = i(g, b.toLowerCase());
                                h = j[0][j[1]], j[0][j[1]] = c && c.nodeType ? d(c) : c, f = ea.test(b) || f, a[b] = [j[0], j[1], c, h];
                            }), h(g), this.positioning = D, d.each(a, d.proxy(j, this)), this.positioning = E, this.rendered && this.tooltip[0].offsetWidth > 0 && f && this.reposition("mouse" === g.position.target ? F : this.cache.event), this;
                        }, z._update = function(a, b) {
                            var c = this,
                                e = this.cache;
                            return this.rendered && a ? (d.isFunction(a) && (a = a.call(this.elements.target, e.event, this) || ""), d.isFunction(a.then) ? (e.waiting = D, a.then(function(a) {
                                return e.waiting = E, c._update(a, b);
                            }, F, function(a) {
                                return c._update(a, b);
                            })) : a === E || !a && "" !== a ? E : (a.jquery && a.length > 0 ? b.empty().append(a.css({
                                display: "block",
                                visibility: "visible"
                            })) : b.html(a), this._waitForContent(b).then(function(a) {
                                c.rendered && c.tooltip[0].offsetWidth > 0 && c.reposition(e.event, !a.length);
                            }))) : E;
                        }, z._waitForContent = function(a) {
                            var b = this.cache;
                            return b.waiting = D, (d.fn.imagesLoaded ? a.imagesLoaded() : (new d.Deferred).resolve([])).done(function() {
                                b.waiting = E;
                            }).promise();
                        }, z._updateContent = function(a, b) {
                            this._update(a, this.elements.content, b);
                        }, z._updateTitle = function(a, b) {
                            this._update(a, this.elements.title, b) === E && this._removeTitle(E);
                        }, z._createTitle = function() {
                            var a = this.elements,
                                b = this._id + "-title";
                            a.titlebar && this._removeTitle(), a.titlebar = d("<div />", {
                                class: S + "-titlebar " + (this.options.style.widget ? k("header") : "")
                            }).append(a.title = d("<div />", {
                                id: b,
                                class: S + "-title",
                                "aria-atomic": D
                            })).insertBefore(a.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(a) {
                                d(this).toggleClass("ui-state-active ui-state-focus", "down" === a.type.substr(-4));
                            }).delegate(".qtip-close", "mouseover mouseout", function(a) {
                                d(this).toggleClass("ui-state-hover", "mouseover" === a.type);
                            }), this.options.content.button && this._createButton();
                        }, z._removeTitle = function(a) {
                            var b = this.elements;
                            b.title && (b.titlebar.remove(), b.titlebar = b.title = b.button = F, a !== E && this.reposition());
                        }, z._createPosClass = function(a) {
                            return S + "-pos-" + (a || this.options.position.my).abbrev();
                        }, z.reposition = function(c, e) {
                            if (!this.rendered || this.positioning || this.destroyed) {
                                return this;
                            }
                            this.positioning = D;
                            var f, g, h, i, j = this.cache,
                                k = this.tooltip,
                                l = this.options.position,
                                m = l.target,
                                n = l.my,
                                o = l.at,
                                p = l.viewport,
                                q = l.container,
                                r = l.adjust,
                                s = r.method.split(" "),
                                t = k.outerWidth(E),
                                u = k.outerHeight(E),
                                v = 0,
                                w = 0,
                                x = k.css("position"),
                                y = {
                                    left: 0,
                                    top: 0
                                },
                                z = k[0].offsetWidth > 0,
                                A = c && "scroll" === c.type,
                                B = d(a),
                                C = q[0].ownerDocument,
                                F = this.mouse;
                            if (d.isArray(m) && 2 === m.length) {
                                o = {
                                    x: L,
                                    y: K
                                }, y = {
                                    left: m[0],
                                    top: m[1]
                                };
                            } else if ("mouse" === m) {
                                o = {
                                    x: L,
                                    y: K
                                }, (!r.mouse || this.options.hide.distance) && j.origin && j.origin.pageX ? c = j.origin : !c || c && ("resize" === c.type || "scroll" === c.type) ? c = j.event : F && F.pageX && (c = F), "static" !== x && (y = q.offset()), C.body.offsetWidth !== (a.innerWidth || C.documentElement.clientWidth) && (g = d(b.body).offset()), y = {
                                    left: c.pageX - y.left + (g && g.left || 0),
                                    top: c.pageY - y.top + (g && g.top || 0)
                                }, r.mouse && A && F && (y.left -= (F.scrollX || 0) - B.scrollLeft(), y.top -= (F.scrollY || 0) - B.scrollTop());
                            } else {
                                if ("event" === m ? c && c.target && "scroll" !== c.type && "resize" !== c.type ? j.target = d(c.target) : c.target || (j.target = this.elements.target) : "event" !== m && (j.target = d(m.jquery ? m : this.elements.target)), m = j.target, m = d(m).eq(0), 0 === m.length) {
                                    return this;
                                }
                                m[0] === b || m[0] === a ? (v = da.iOS ? a.innerWidth : m.width(), w = da.iOS ? a.innerHeight : m.height(), m[0] === a && (y = {
                                    top: (p || m).scrollTop(),
                                    left: (p || m).scrollLeft()
                                })) : R.imagemap && m.is("area") ? f = R.imagemap(this, m, o, R.viewport ? s : E) : R.svg && m && m[0].ownerSVGElement ? f = R.svg(this, m, o, R.viewport ? s : E) : (v = m.outerWidth(E), w = m.outerHeight(E), y = m.offset()), f && (v = f.width, w = f.height, g = f.offset, y = f.position), y = this.reposition.offset(m, y, q), (da.iOS > 3.1 && da.iOS < 4.1 || da.iOS >= 4.3 && da.iOS < 4.33 || !da.iOS && "fixed" === x) && (y.left -= B.scrollLeft(), y.top -= B.scrollTop()), (!f || f && f.adjustable !== E) && (y.left += o.x === N ? v : o.x === O ? v / 2 : 0, y.top += o.y === M ? w : o.y === O ? w / 2 : 0);
                            }
                            return y.left += r.x + (n.x === N ? -t : n.x === O ? -t / 2 : 0), y.top += r.y + (n.y === M ? -u : n.y === O ? -u / 2 : 0), R.viewport ? (h = y.adjusted = R.viewport(this, y, l, v, w, t, u), g && h.left && (y.left += g.left), g && h.top && (y.top += g.top), h.my && (this.position.my = h.my)) : y.adjusted = {
                                left: 0,
                                top: 0
                            }, j.posClass !== (i = this._createPosClass(this.position.my)) && (j.posClass = i, k.removeClass(j.posClass).addClass(i)), this._trigger("move", [y, p.elem || p], c) ? (delete y.adjusted, e === E || !z || isNaN(y.left) || isNaN(y.top) || "mouse" === m || !d.isFunction(l.effect) ? k.css(y) : d.isFunction(l.effect) && (l.effect.call(k, this, d.extend({}, y)), k.queue(function(a) {
                                d(this).css({
                                    opacity: "",
                                    height: ""
                                }), da.ie && this.style.removeAttribute("filter"), a();
                            })), this.positioning = E, this) : this;
                        }, z.reposition.offset = function(a, c, e) {
                            function f(a, b) {
                                c.left += b * a.scrollLeft(), c.top += b * a.scrollTop();
                            }
                            if (!e[0]) {
                                return c;
                            }
                            var g, h, i, j, k = d(a[0].ownerDocument),
                                l = !!da.ie && "CSS1Compat" !== b.compatMode,
                                m = e[0];
                            do {
                                "static" !== (h = d.css(m, "position")) && ("fixed" === h ? (i = m.getBoundingClientRect(), f(k, -1)) : (i = d(m).position(), i.left += parseFloat(d.css(m, "borderLeftWidth")) || 0, i.top += parseFloat(d.css(m, "borderTopWidth")) || 0), c.left -= i.left + (parseFloat(d.css(m, "marginLeft")) || 0), c.top -= i.top + (parseFloat(d.css(m, "marginTop")) || 0), g || "hidden" === (j = d.css(m, "overflow")) || "visible" === j || (g = d(m)));
                            } while (m = m.offsetParent);
                            return g && (g[0] !== k[0] || l) && f(g, 1), c;
                        };
                        var ga = (A = z.reposition.Corner = function(a, b) {
                            a = ("" + a).replace(/([A-Z])/, " $1").replace(/middle/gi, O).toLowerCase(), this.x = (a.match(/left|right/i) || a.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (a.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !!b;
                            var c = a.charAt(0);
                            this.precedance = "t" === c || "b" === c ? H : G;
                        }).prototype;
                        ga.invert = function(a, b) {
                            this[a] = this[a] === L ? N : this[a] === N ? L : b || this[a];
                        }, ga.string = function(a) {
                            var b = this.x,
                                c = this.y,
                                d = b !== c ? "center" === b || "center" !== c && (this.precedance === H || this.forceY) ? [c, b] : [b, c] : [b];
                            return a !== !1 ? d.join(" ") : d;
                        }, ga.abbrev = function() {
                            var a = this.string(!1);
                            return a[0].charAt(0) + (a[1] && a[1].charAt(0) || "");
                        }, ga.clone = function() {
                            return new A(this.string(), this.forceY);
                        }, z.toggle = function(a, c) {
                            var e = this.cache,
                                f = this.options,
                                g = this.tooltip;
                            if (c) {
                                if (/over|enter/.test(c.type) && e.event && /out|leave/.test(e.event.type) && f.show.target.add(c.target).length === f.show.target.length && g.has(c.relatedTarget).length) {
                                    return this;
                                }
                                e.event = d.event.fix(c);
                            }
                            if (this.waiting && !a && (this.hiddenDuringWait = D), !this.rendered) {
                                return a ? this.render(1) : this;
                            }
                            if (this.destroyed || this.disabled) {
                                return this;
                            }
                            var h, i, j, k = a ? "show" : "hide",
                                l = this.options[k],
                                m = this.options.position,
                                n = this.options.content,
                                o = this.tooltip.css("width"),
                                p = this.tooltip.is(":visible"),
                                q = a || 1 === l.target.length,
                                r = !c || l.target.length < 2 || e.target[0] === c.target;
                            return (typeof a).search("boolean|number") && (a = !p), h = !g.is(":animated") && p === a && r, i = h ? F : !!this._trigger(k, [90]), this.destroyed ? this : (i !== E && a && this.focus(c), !i || h ? this : (d.attr(g[0], "aria-hidden", !a), a ? (this.mouse && (e.origin = d.event.fix(this.mouse)), d.isFunction(n.text) && this._updateContent(n.text, E), d.isFunction(n.title) && this._updateTitle(n.title, E), !C && "mouse" === m.target && m.adjust.mouse && (d(b).bind("mousemove." + S, this._storeMouse), C = D), o || g.css("width", g.outerWidth(E)), this.reposition(c, arguments[2]), o || g.css("width", ""), l.solo && ("string" == typeof l.solo ? d(l.solo) : d(W, l.solo)).not(g).not(l.target).qtip("hide", new d.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete e.origin, C && !d(W + '[tracking="true"]:visible', l.solo).not(g).length && (d(b).unbind("mousemove." + S), C = E), this.blur(c)), j = d.proxy(function() {
                                a ? (da.ie && g[0].style.removeAttribute("filter"), g.css("overflow", ""), "string" == typeof l.autofocus && d(this.options.show.autofocus, g).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : g.css({
                                    display: "",
                                    visibility: "",
                                    opacity: "",
                                    left: "",
                                    top: ""
                                }), this._trigger(a ? "visible" : "hidden");
                            }, this), l.effect === E || q === E ? (g[k](), j()) : d.isFunction(l.effect) ? (g.stop(1, 1), l.effect.call(g, this), g.queue("fx", function(a) {
                                j(), a();
                            })) : g.fadeTo(90, a ? 1 : 0, j), a && l.target.trigger("qtip-" + this.id + "-inactive"), this));
                        }, z.show = function(a) {
                            return this.toggle(D, a);
                        }, z.hide = function(a) {
                            return this.toggle(E, a);
                        }, z.focus = function(a) {
                            if (!this.rendered || this.destroyed) {
                                return this;
                            }
                            var b = d(W),
                                c = this.tooltip,
                                e = parseInt(c[0].style.zIndex, 10),
                                f = y.zindex + b.length;
                            return c.hasClass($) || this._trigger("focus", [f], a) && (e !== f && (b.each(function() {
                                this.style.zIndex > e && (this.style.zIndex = this.style.zIndex - 1);
                            }), b.filter("." + $).qtip("blur", a)), c.addClass($)[0].style.zIndex = f), this;
                        }, z.blur = function(a) {
                            return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass($), this._trigger("blur", [this.tooltip.css("zIndex")], a), this);
                        }, z.disable = function(a) {
                            return this.destroyed ? this : ("toggle" === a ? a = !(this.rendered ? this.tooltip.hasClass(aa) : this.disabled) : "boolean" != typeof a && (a = D), this.rendered && this.tooltip.toggleClass(aa, a).attr("aria-disabled", a), this.disabled = !!a, this);
                        }, z.enable = function() {
                            return this.disable(E);
                        }, z._createButton = function() {
                            var a = this,
                                b = this.elements,
                                c = b.tooltip,
                                e = this.options.content.button,
                                f = "string" == typeof e,
                                g = f ? e : "Close tooltip";
                            b.button && b.button.remove(), e.jquery ? b.button = e : b.button = d("<a />", {
                                class: "qtip-close " + (this.options.style.widget ? "" : S + "-icon"),
                                title: g,
                                "aria-label": g
                            }).prepend(d("<span />", {
                                class: "ui-icon ui-icon-close",
                                html: "&times;"
                            })), b.button.appendTo(b.titlebar || c).attr("role", "button").click(function(b) {
                                return c.hasClass(aa) || a.hide(b), E;
                            });
                        }, z._updateButton = function(a) {
                            if (!this.rendered) {
                                return E;
                            }
                            var b = this.elements.button;
                            a ? this._createButton() : b.remove();
                        }, z._setWidget = function() {
                            var a = this.options.style.widget,
                                b = this.elements,
                                c = b.tooltip,
                                d = c.hasClass(aa);
                            c.removeClass(aa), aa = a ? "ui-state-disabled" : "qtip-disabled", c.toggleClass(aa, d), c.toggleClass("ui-helper-reset " + k(), a).toggleClass(Z, this.options.style.def && !a), b.content && b.content.toggleClass(k("content"), a), b.titlebar && b.titlebar.toggleClass(k("header"), a), b.button && b.button.toggleClass(S + "-icon", !a);
                        }, z._storeMouse = function(a) {
                            return (this.mouse = d.event.fix(a)).type = "mousemove", this;
                        }, z._bind = function(a, b, c, e, f) {
                            if (a && c && b.length) {
                                var g = "." + this._id + (e ? "-" + e : "");
                                return d(a).bind((b.split ? b : b.join(g + " ")) + g, d.proxy(c, f || this)), this;
                            }
                        }, z._unbind = function(a, b) {
                            return a && d(a).unbind("." + this._id + (b ? "-" + b : "")), this;
                        }, z._trigger = function(a, b, c) {
                            var e = new d.Event("tooltip" + a);
                            return e.originalEvent = c && d.extend({}, c) || this.cache.event || F, this.triggering = a, this.tooltip.trigger(e, [this].concat(b || [])), this.triggering = E, !e.isDefaultPrevented();
                        }, z._bindEvents = function(a, b, c, e, f, g) {
                            var h = c.filter(e).add(e.filter(c)),
                                i = [];
                            h.length && (d.each(b, function(b, c) {
                                var e = d.inArray(c, a);
                                e > -1 && i.push(a.splice(e, 1)[0]);
                            }), i.length && (this._bind(h, i, function(a) {
                                var b = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1;
                                (b ? g : f).call(this, a);
                            }), c = c.not(h), e = e.not(h))), this._bind(c, a, f), this._bind(e, b, g);
                        }, z._assignInitialEvents = function(a) {
                            function b(a) {
                                return this.disabled || this.destroyed ? E : (this.cache.event = a && d.event.fix(a), this.cache.target = a && d(a.target), clearTimeout(this.timers.show), void(this.timers.show = l.call(this, function() {
                                    this.render("object" == typeof a || c.show.ready);
                                }, c.prerender ? 0 : c.show.delay)));
                            }
                            var c = this.options,
                                e = c.show.target,
                                f = c.hide.target,
                                g = c.show.event ? d.trim("" + c.show.event).split(" ") : [],
                                h = c.hide.event ? d.trim("" + c.hide.event).split(" ") : [];
                            this._bind(this.elements.target, ["remove", "removeqtip"], function() {
                                this.destroy(!0);
                            }, "destroy"), /mouse(over|enter)/i.test(c.show.event) && !/mouse(out|leave)/i.test(c.hide.event) && h.push("mouseleave"), this._bind(e, "mousemove", function(a) {
                                this._storeMouse(a), this.cache.onTarget = D;
                            }), this._bindEvents(g, h, e, f, b, function() {
                                return this.timers ? void clearTimeout(this.timers.show) : E;
                            }), (c.show.ready || c.prerender) && b.call(this, a);
                        }, z._assignEvents = function() {
                            var c = this,
                                e = this.options,
                                f = e.position,
                                g = this.tooltip,
                                h = e.show.target,
                                i = e.hide.target,
                                j = f.container,
                                k = f.viewport,
                                l = d(b),
                                q = d(a),
                                r = e.show.event ? d.trim("" + e.show.event).split(" ") : [],
                                s = e.hide.event ? d.trim("" + e.hide.event).split(" ") : [];
                            d.each(e.events, function(a, b) {
                                c._bind(g, "toggle" === a ? ["tooltipshow", "tooltiphide"] : ["tooltip" + a], b, null, g);
                            }), /mouse(out|leave)/i.test(e.hide.event) && "window" === e.hide.leave && this._bind(l, ["mouseout", "blur"], function(a) {
                                /select|option/.test(a.target.nodeName) || a.relatedTarget || this.hide(a);
                            }), e.hide.fixed ? i = i.add(g.addClass(Y)) : /mouse(over|enter)/i.test(e.show.event) && this._bind(i, "mouseleave", function() {
                                clearTimeout(this.timers.show);
                            }), ("" + e.hide.event).indexOf("unfocus") > -1 && this._bind(j.closest("html"), ["mousedown", "touchstart"], function(a) {
                                var b = d(a.target),
                                    c = this.rendered && !this.tooltip.hasClass(aa) && this.tooltip[0].offsetWidth > 0,
                                    e = b.parents(W).filter(this.tooltip[0]).length > 0;
                                b[0] === this.target[0] || b[0] === this.tooltip[0] || e || this.target.has(b[0]).length || !c || this.hide(a);
                            }), "number" == typeof e.hide.inactive && (this._bind(h, "qtip-" + this.id + "-inactive", o, "inactive"), this._bind(i.add(g), y.inactiveEvents, o)), this._bindEvents(r, s, h, i, m, n), this._bind(h.add(g), "mousemove", function(a) {
                                if ("number" == typeof e.hide.distance) {
                                    var b = this.cache.origin || {},
                                        c = this.options.hide.distance,
                                        d = Math.abs;
                                    (d(a.pageX - b.pageX) >= c || d(a.pageY - b.pageY) >= c) && this.hide(a);
                                }
                                this._storeMouse(a);
                            }), "mouse" === f.target && f.adjust.mouse && (e.hide.event && this._bind(h, ["mouseenter", "mouseleave"], function(a) {
                                return this.cache ? void(this.cache.onTarget = "mouseenter" === a.type) : E;
                            }), this._bind(l, "mousemove", function(a) {
                                this.rendered && this.cache.onTarget && !this.tooltip.hasClass(aa) && this.tooltip[0].offsetWidth > 0 && this.reposition(a);
                            })), (f.adjust.resize || k.length) && this._bind(d.event.special.resize ? k : q, "resize", p), f.adjust.scroll && this._bind(q.add(f.container), "scroll", p);
                        }, z._unassignEvents = function() {
                            var c = this.options,
                                e = c.show.target,
                                f = c.hide.target,
                                g = d.grep([this.elements.target[0], this.rendered && this.tooltip[0], c.position.container[0], c.position.viewport[0], c.position.container.closest("html")[0], a, b], function(a) {
                                    return "object" == typeof a;
                                });
                            e && e.toArray && (g = g.concat(e.toArray())), f && f.toArray && (g = g.concat(f.toArray())), this._unbind(g)._unbind(g, "destroy")._unbind(g, "inactive");
                        }, d(function() {
                            q(W, ["mouseenter", "mouseleave"], function(a) {
                                var b = "mouseenter" === a.type,
                                    c = d(a.currentTarget),
                                    e = d(a.relatedTarget || a.target),
                                    f = this.options;
                                b ? (this.focus(a), c.hasClass(Y) && !c.hasClass(aa) && clearTimeout(this.timers.hide)) : "mouse" === f.position.target && f.position.adjust.mouse && f.hide.event && f.show.target && !e.closest(f.show.target[0]).length && this.hide(a), c.toggleClass(_, b);
                            }), q("[" + U + "]", X, o);
                        }), y = d.fn.qtip = function(a, b, e) {
                            var f = ("" + a).toLowerCase(),
                                g = F,
                                i = d.makeArray(arguments).slice(1),
                                j = i[i.length - 1],
                                k = this[0] ? d.data(this[0], S) : F;
                            return !arguments.length && k || "api" === f ? k : "string" == typeof a ? (this.each(function() {
                                var a = d.data(this, S);
                                if (!a) {
                                    return D;
                                }
                                if (j && j.timeStamp && (a.cache.event = j), !b || "option" !== f && "options" !== f) {
                                    a[f] && a[f].apply(a, i);
                                } else {
                                    if (e === c && !d.isPlainObject(b)) {
                                        return g = a.get(b), E;
                                    }
                                    a.set(b, e);
                                }
                            }), g !== F ? g : this) : "object" != typeof a && arguments.length ? void 0 : (k = h(d.extend(D, {}, a)), this.each(function(a) {
                                var b, c;
                                return c = d.isArray(k.id) ? k.id[a] : k.id, c = !c || c === E || c.length < 1 || y.api[c] ? y.nextid++ : c, b = r(d(this), c, k), b === E ? D : (y.api[c] = b, d.each(R, function() {
                                    "initialize" === this.initialize && this(b);
                                }), void b._assignInitialEvents(j));
                            }));
                        }, d.qtip = e, y.api = {}, d.each({
                            attr: function(a, b) {
                                if (this.length) {
                                    var c = this[0],
                                        e = "title",
                                        f = d.data(c, "qtip");
                                    if (a === e && f && f.options && "object" == typeof f && "object" == typeof f.options && f.options.suppress) {
                                        return arguments.length < 2 ? d.attr(c, ca) : (f && f.options.content.attr === e && f.cache.attr && f.set("content.text", b), this.attr(ca, b));
                                    }
                                }
                                return d.fn["attr" + ba].apply(this, arguments);
                            },
                            clone: function(a) {
                                var b = d.fn["clone" + ba].apply(this, arguments);
                                return a || b.filter("[" + ca + "]").attr("title", function() {
                                    return d.attr(this, ca);
                                }).removeAttr(ca), b;
                            }
                        }, function(a, b) {
                            if (!b || d.fn[a + ba]) {
                                return D;
                            }
                            var c = d.fn[a + ba] = d.fn[a];
                            d.fn[a] = function() {
                                return b.apply(this, arguments) || c.apply(this, arguments);
                            };
                        }), d.ui || (d["cleanData" + ba] = d.cleanData, d.cleanData = function(a) {
                            for (var b, c = 0;
                                (b = d(a[c])).length; c++) {
                                if (b.attr(T)) {
                                    try {
                                        b.triggerHandler("removeqtip");
                                    } catch (e) {}
                                }
                            }
                            d["cleanData" + ba].apply(this, arguments);
                        }), y.version = "3.0.3", y.nextid = 0, y.inactiveEvents = X, y.zindex = 15e3, y.defaults = {
                            prerender: E,
                            id: E,
                            overwrite: D,
                            suppress: D,
                            content: {
                                text: D,
                                attr: "title",
                                title: E,
                                button: E
                            },
                            position: {
                                my: "top left",
                                at: "bottom right",
                                target: E,
                                container: E,
                                viewport: E,
                                adjust: {
                                    x: 0,
                                    y: 0,
                                    mouse: D,
                                    scroll: D,
                                    resize: D,
                                    method: "flipinvert flipinvert"
                                },
                                effect: function(a, b) {
                                    d(this).animate(b, {
                                        duration: 200,
                                        queue: E
                                    });
                                }
                            },
                            show: {
                                target: E,
                                event: "mouseenter",
                                effect: D,
                                delay: 90,
                                solo: E,
                                ready: E,
                                autofocus: E
                            },
                            hide: {
                                target: E,
                                event: "mouseleave",
                                effect: D,
                                delay: 0,
                                fixed: E,
                                inactive: E,
                                leave: "window",
                                distance: E
                            },
                            style: {
                                classes: "",
                                widget: E,
                                width: E,
                                height: E,
                                def: D
                            },
                            events: {
                                render: F,
                                move: F,
                                show: F,
                                hide: F,
                                toggle: F,
                                visible: F,
                                hidden: F,
                                focus: F,
                                blur: F
                            }
                        };
                        var ha, ia, ja, ka, la, ma = "margin",
                            na = "border",
                            oa = "color",
                            pa = "background-color",
                            qa = "transparent",
                            ra = " !important",
                            sa = !!b.createElement("canvas").getContext,
                            ta = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
                            ua = {},
                            va = ["Webkit", "O", "Moz", "ms"];
                        sa ? (ka = a.devicePixelRatio || 1, la = function() {
                            var a = b.createElement("canvas").getContext("2d");
                            return a.backingStorePixelRatio || a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || 1;
                        }(), ja = ka / la) : ia = function(a, b, c) {
                            return "<qtipvml:" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (b || "") + ' style="behavior: url(#default#VML); ' + (c || "") + '" />';
                        }, d.extend(v.prototype, {
                            init: function(a) {
                                var b, c;
                                c = this.element = a.elements.tip = d("<div />", {
                                    class: S + "-tip"
                                }).prependTo(a.tooltip), sa ? (b = d("<canvas />").appendTo(this.element)[0].getContext("2d"), b.lineJoin = "miter", b.miterLimit = 1e5, b.save()) : (b = ia("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(b + b), a._bind(d("*", c).add(c), ["click", "mousedown"], function(a) {
                                    a.stopPropagation();
                                }, this._ns)), a._bind(a.tooltip, "tooltipmove", this.reposition, this._ns, this), this.create();
                            },
                            _swapDimensions: function() {
                                this.size[0] = this.options.height, this.size[1] = this.options.width;
                            },
                            _resetDimensions: function() {
                                this.size[0] = this.options.width, this.size[1] = this.options.height;
                            },
                            _useTitle: function(a) {
                                var b = this.qtip.elements.titlebar;
                                return b && (a.y === K || a.y === O && this.element.position().top + this.size[1] / 2 + this.options.offset < b.outerHeight(D));
                            },
                            _parseCorner: function(a) {
                                var b = this.qtip.options.position.my;
                                return a === E || b === E ? a = E : a === D ? a = new A(b.string()) : a.string || (a = new A(a), a.fixed = D), a;
                            },
                            _parseWidth: function(a, b, c) {
                                var d = this.qtip.elements,
                                    e = na + s(b) + "Width";
                                return (c ? u(c, e) : u(d.content, e) || u(this._useTitle(a) && d.titlebar || d.content, e) || u(d.tooltip, e)) || 0;
                            },
                            _parseRadius: function(a) {
                                var b = this.qtip.elements,
                                    c = na + s(a.y) + s(a.x) + "Radius";
                                return da.ie < 9 ? 0 : u(this._useTitle(a) && b.titlebar || b.content, c) || u(b.tooltip, c) || 0;
                            },
                            _invalidColour: function(a, b, c) {
                                var d = a.css(b);
                                return !d || c && d === a.css(c) || ta.test(d) ? E : d;
                            },
                            _parseColours: function(a) {
                                var b = this.qtip.elements,
                                    c = this.element.css("cssText", ""),
                                    e = na + s(a[a.precedance]) + s(oa),
                                    f = this._useTitle(a) && b.titlebar || b.content,
                                    g = this._invalidColour,
                                    h = [];
                                return h[0] = g(c, pa) || g(f, pa) || g(b.content, pa) || g(b.tooltip, pa) || c.css(pa), h[1] = g(c, e, oa) || g(f, e, oa) || g(b.content, e, oa) || g(b.tooltip, e, oa) || b.tooltip.css(e), d("*", c).add(c).css("cssText", pa + ":" + qa + ra + ";" + na + ":0" + ra + ";"), h;
                            },
                            _calculateSize: function(a) {
                                var b, c, d, e = a.precedance === H,
                                    f = this.options.width,
                                    g = this.options.height,
                                    h = "c" === a.abbrev(),
                                    i = (e ? f : g) * (h ? .5 : 1),
                                    j = Math.pow,
                                    k = Math.round,
                                    l = Math.sqrt(j(i, 2) + j(g, 2)),
                                    m = [this.border / i * l, this.border / g * l];
                                return m[2] = Math.sqrt(j(m[0], 2) - j(this.border, 2)), m[3] = Math.sqrt(j(m[1], 2) - j(this.border, 2)), b = l + m[2] + m[3] + (h ? 0 : m[0]), c = b / l, d = [k(c * f), k(c * g)], e ? d : d.reverse();
                            },
                            _calculateTip: function(a, b, c) {
                                c = c || 1, b = b || this.size;
                                var d = b[0] * c,
                                    e = b[1] * c,
                                    f = Math.ceil(d / 2),
                                    g = Math.ceil(e / 2),
                                    h = {
                                        br: [0, 0, d, e, d, 0],
                                        bl: [0, 0, d, 0, 0, e],
                                        tr: [0, e, d, 0, d, e],
                                        tl: [0, 0, 0, e, d, e],
                                        tc: [0, e, f, 0, d, e],
                                        bc: [0, 0, d, 0, f, e],
                                        rc: [0, 0, d, g, 0, e],
                                        lc: [d, 0, d, e, 0, g]
                                    };
                                return h.lt = h.br, h.rt = h.bl, h.lb = h.tr, h.rb = h.tl, h[a.abbrev()];
                            },
                            _drawCoords: function(a, b) {
                                a.beginPath(), a.moveTo(b[0], b[1]), a.lineTo(b[2], b[3]), a.lineTo(b[4], b[5]), a.closePath();
                            },
                            create: function() {
                                var a = this.corner = (sa || da.ie) && this._parseCorner(this.options.corner);
                                return this.enabled = !!this.corner && "c" !== this.corner.abbrev(), this.enabled && (this.qtip.cache.corner = a.clone(), this.update()), this.element.toggle(this.enabled), this.corner;
                            },
                            update: function(b, c) {
                                if (!this.enabled) {
                                    return this;
                                }
                                var e, f, g, h, i, j, k, l, m = this.qtip.elements,
                                    n = this.element,
                                    o = n.children(),
                                    p = this.options,
                                    q = this.size,
                                    r = p.mimic,
                                    s = Math.round;
                                b || (b = this.qtip.cache.corner || this.corner), r === E ? r = b : (r = new A(r), r.precedance = b.precedance, "inherit" === r.x ? r.x = b.x : "inherit" === r.y ? r.y = b.y : r.x === r.y && (r[b.precedance] = b[b.precedance])), f = r.precedance, b.precedance === G ? this._swapDimensions() : this._resetDimensions(), e = this.color = this._parseColours(b), e[1] !== qa ? (l = this.border = this._parseWidth(b, b[b.precedance]), p.border && 1 > l && !ta.test(e[1]) && (e[0] = e[1]), this.border = l = p.border !== D ? p.border : l) : this.border = l = 0, k = this.size = this._calculateSize(b), n.css({
                                    width: k[0],
                                    height: k[1],
                                    lineHeight: k[1] + "px"
                                }), j = b.precedance === H ? [s(r.x === L ? l : r.x === N ? k[0] - q[0] - l : (k[0] - q[0]) / 2), s(r.y === K ? k[1] - q[1] : 0)] : [s(r.x === L ? k[0] - q[0] : 0), s(r.y === K ? l : r.y === M ? k[1] - q[1] - l : (k[1] - q[1]) / 2)], sa ? (g = o[0].getContext("2d"), g.restore(), g.save(), g.clearRect(0, 0, 6e3, 6e3), h = this._calculateTip(r, q, ja), i = this._calculateTip(r, this.size, ja), o.attr(I, k[0] * ja).attr(J, k[1] * ja), o.css(I, k[0]).css(J, k[1]), this._drawCoords(g, i), g.fillStyle = e[1], g.fill(), g.translate(j[0] * ja, j[1] * ja), this._drawCoords(g, h), g.fillStyle = e[0], g.fill()) : (h = this._calculateTip(r), h = "m" + h[0] + "," + h[1] + " l" + h[2] + "," + h[3] + " " + h[4] + "," + h[5] + " xe", j[2] = l && /^(r|b)/i.test(b.string()) ? 8 === da.ie ? 2 : 1 : 0, o.css({
                                    coordsize: k[0] + l + " " + k[1] + l,
                                    antialias: "" + (r.string().indexOf(O) > -1),
                                    left: j[0] - j[2] * Number(f === G),
                                    top: j[1] - j[2] * Number(f === H),
                                    width: k[0] + l,
                                    height: k[1] + l
                                }).each(function(a) {
                                    var b = d(this);
                                    b[b.prop ? "prop" : "attr"]({
                                        coordsize: k[0] + l + " " + k[1] + l,
                                        path: h,
                                        fillcolor: e[0],
                                        filled: !!a,
                                        stroked: !a
                                    }).toggle(!(!l && !a)), !a && b.html(ia("stroke", 'weight="' + 2 * l + 'px" color="' + e[1] + '" miterlimit="1000" joinstyle="miter"'));
                                })), a.opera && setTimeout(function() {
                                    m.tip.css({
                                        display: "inline-block",
                                        visibility: "visible"
                                    });
                                }, 1), c !== E && this.calculate(b, k);
                            },
                            calculate: function(a, b) {
                                if (!this.enabled) {
                                    return E;
                                }
                                var c, e, f = this,
                                    g = this.qtip.elements,
                                    h = this.element,
                                    i = this.options.offset,
                                    j = {};
                                return a = a || this.corner, c = a.precedance, b = b || this._calculateSize(a), e = [a.x, a.y], c === G && e.reverse(), d.each(e, function(d, e) {
                                    var h, k, l;
                                    e === O ? (h = c === H ? L : K, j[h] = "50%", j[ma + "-" + h] = -Math.round(b[c === H ? 0 : 1] / 2) + i) : (h = f._parseWidth(a, e, g.tooltip), k = f._parseWidth(a, e, g.content), l = f._parseRadius(a), j[e] = Math.max(-f.border, d ? k : i + (l > h ? l : -h)));
                                }), j[a[c]] -= b[c === G ? 0 : 1], h.css({
                                    margin: "",
                                    top: "",
                                    bottom: "",
                                    left: "",
                                    right: ""
                                }).css(j), j;
                            },
                            reposition: function(a, b, d) {
                                function e(a, b, c, d, e) {
                                    a === Q && j.precedance === b && k[d] && j[c] !== O ? j.precedance = j.precedance === G ? H : G : a !== Q && k[d] && (j[b] = j[b] === O ? k[d] > 0 ? d : e : j[b] === d ? e : d);
                                }

                                function f(a, b, e) {
                                    j[a] === O ? p[ma + "-" + b] = o[a] = g[ma + "-" + b] - k[b] : (h = g[e] !== c ? [k[b], -g[b]] : [-k[b], g[b]], (o[a] = Math.max(h[0], h[1])) > h[0] && (d[b] -= k[b], o[b] = E), p[g[e] !== c ? e : b] = o[a]);
                                }
                                if (this.enabled) {
                                    var g, h, i = b.cache,
                                        j = this.corner.clone(),
                                        k = d.adjusted,
                                        l = b.options.position.adjust.method.split(" "),
                                        m = l[0],
                                        n = l[1] || l[0],
                                        o = {
                                            left: E,
                                            top: E,
                                            x: 0,
                                            y: 0
                                        },
                                        p = {};
                                    this.corner.fixed !== D && (e(m, G, H, L, N), e(n, H, G, K, M), j.string() === i.corner.string() && i.cornerTop === k.top && i.cornerLeft === k.left || this.update(j, E)), g = this.calculate(j), g.right !== c && (g.left = -g.right), g.bottom !== c && (g.top = -g.bottom), g.user = this.offset, o.left = m === Q && !!k.left, o.left && f(G, L, N), o.top = n === Q && !!k.top, o.top && f(H, K, M), this.element.css(p).toggle(!(o.x && o.y || j.x === O && o.y || j.y === O && o.x)), d.left -= g.left.charAt ? g.user : m !== Q || o.top || !o.left && !o.top ? g.left + this.border : 0, d.top -= g.top.charAt ? g.user : n !== Q || o.left || !o.left && !o.top ? g.top + this.border : 0, i.cornerLeft = k.left, i.cornerTop = k.top, i.corner = j.clone();
                                }
                            },
                            destroy: function() {
                                this.qtip._unbind(this.qtip.tooltip, this._ns), this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove();
                            }
                        }), ha = R.tip = function(a) {
                            return new v(a, a.options.style.tip);
                        }, ha.initialize = "render", ha.sanitize = function(a) {
                            if (a.style && "tip" in a.style) {
                                var b = a.style.tip;
                                "object" != typeof b && (b = a.style.tip = {
                                    corner: b
                                }), /string|boolean/i.test(typeof b.corner) || (b.corner = D);
                            }
                        }, B.tip = {
                            "^position.my|style.tip.(corner|mimic|border)$": function() {
                                this.create(), this.qtip.reposition();
                            },
                            "^style.tip.(height|width)$": function(a) {
                                this.size = [a.width, a.height], this.update(), this.qtip.reposition();
                            },
                            "^content.title|style.(classes|widget)$": function() {
                                this.update();
                            }
                        }, d.extend(D, y.defaults, {
                            style: {
                                tip: {
                                    corner: D,
                                    mimic: E,
                                    width: 6,
                                    height: 6,
                                    border: D,
                                    offset: 0
                                }
                            }
                        });
                        var wa, xa, ya = "qtip-modal",
                            za = "." + ya;
                        xa = function() {
                            function a(a) {
                                if (d.expr[":"].focusable) {
                                    return d.expr[":"].focusable;
                                }
                                var b, c, e, f = !isNaN(d.attr(a, "tabindex")),
                                    g = a.nodeName && a.nodeName.toLowerCase();
                                return "area" === g ? (b = a.parentNode, c = b.name, a.href && c && "map" === b.nodeName.toLowerCase() ? (e = d("img[usemap=#" + c + "]")[0], !!e && e.is(":visible")) : !1) : /input|select|textarea|button|object/.test(g) ? !a.disabled : "a" === g ? a.href || f : f;
                            }

                            function c(a) {
                                j.length < 1 && a.length ? a.not("body").blur() : j.first().focus();
                            }

                            function e(a) {
                                if (h.is(":visible")) {
                                    var b, e = d(a.target),
                                        g = f.tooltip,
                                        i = e.closest(W);
                                    b = i.length < 1 ? E : parseInt(i[0].style.zIndex, 10) > parseInt(g[0].style.zIndex, 10), b || e.closest(W)[0] === g[0] || c(e);
                                }
                            }
                            var f, g, h, i = this,
                                j = {};
                            d.extend(i, {
                                init: function() {
                                    return h = i.elem = d("<div />", {
                                        id: "qtip-overlay",
                                        html: "<div></div>",
                                        mousedown: function() {
                                            return E;
                                        }
                                    }).hide(), d(b.body).bind("focusin" + za, e), d(b).bind("keydown" + za, function(a) {
                                        f && f.options.show.modal.escape && 27 === a.keyCode && f.hide(a);
                                    }), h.bind("click" + za, function(a) {
                                        f && f.options.show.modal.blur && f.hide(a);
                                    }), i;
                                },
                                update: function(b) {
                                    f = b, j = b.options.show.modal.stealfocus !== E ? b.tooltip.find("*").filter(function() {
                                        return a(this);
                                    }) : [];
                                },
                                toggle: function(a, e, j) {
                                    var k = a.tooltip,
                                        l = a.options.show.modal,
                                        m = l.effect,
                                        n = e ? "show" : "hide",
                                        o = h.is(":visible"),
                                        p = d(za).filter(":visible:not(:animated)").not(k);
                                    return i.update(a), e && l.stealfocus !== E && c(d(":focus")), h.toggleClass("blurs", l.blur), e && h.appendTo(b.body), h.is(":animated") && o === e && g !== E || !e && p.length ? i : (h.stop(D, E), d.isFunction(m) ? m.call(h, e) : m === E ? h[n]() : h.fadeTo(parseInt(j, 10) || 90, e ? 1 : 0, function() {
                                        e || h.hide();
                                    }), e || h.queue(function(a) {
                                        h.css({
                                            left: "",
                                            top: ""
                                        }), d(za).length || h.detach(), a();
                                    }), g = e, f.destroyed && (f = F), i);
                                }
                            }), i.init();
                        }, xa = new xa, d.extend(w.prototype, {
                            init: function(a) {
                                var b = a.tooltip;
                                return this.options.on ? (a.elements.overlay = xa.elem, b.addClass(ya).css("z-index", y.modal_zindex + d(za).length), a._bind(b, ["tooltipshow", "tooltiphide"], function(a, c, e) {
                                    var f = a.originalEvent;
                                    if (a.target === b[0]) {
                                        if (f && "tooltiphide" === a.type && /mouse(leave|enter)/.test(f.type) && d(f.relatedTarget).closest(xa.elem[0]).length) {
                                            try {
                                                a.preventDefault();
                                            } catch (g) {}
                                        } else {
                                            (!f || f && "tooltipsolo" !== f.type) && this.toggle(a, "tooltipshow" === a.type, e);
                                        }
                                    }
                                }, this._ns, this), a._bind(b, "tooltipfocus", function(a, c) {
                                    if (!a.isDefaultPrevented() && a.target === b[0]) {
                                        var e = d(za),
                                            f = y.modal_zindex + e.length,
                                            g = parseInt(b[0].style.zIndex, 10);
                                        xa.elem[0].style.zIndex = f - 1, e.each(function() {
                                            this.style.zIndex > g && (this.style.zIndex -= 1);
                                        }), e.filter("." + $).qtip("blur", a.originalEvent), b.addClass($)[0].style.zIndex = f, xa.update(c);
                                        try {
                                            a.preventDefault();
                                        } catch (h) {}
                                    }
                                }, this._ns, this), void a._bind(b, "tooltiphide", function(a) {
                                    a.target === b[0] && d(za).filter(":visible").not(b).last().qtip("focus", a);
                                }, this._ns, this)) : this;
                            },
                            toggle: function(a, b, c) {
                                return a && a.isDefaultPrevented() ? this : void xa.toggle(this.qtip, !!b, c);
                            },
                            destroy: function() {
                                this.qtip.tooltip.removeClass(ya), this.qtip._unbind(this.qtip.tooltip, this._ns), xa.toggle(this.qtip, E), delete this.qtip.elements.overlay;
                            }
                        }), wa = R.modal = function(a) {
                            return new w(a, a.options.show.modal);
                        }, wa.sanitize = function(a) {
                            a.show && ("object" != typeof a.show.modal ? a.show.modal = {
                                on: !!a.show.modal
                            } : "undefined" == typeof a.show.modal.on && (a.show.modal.on = D));
                        }, y.modal_zindex = y.zindex - 200, wa.initialize = "render", B.modal = {
                            "^show.modal.(on|blur)$": function() {
                                this.destroy(), this.init(), this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0);
                            }
                        }, d.extend(D, y.defaults, {
                            show: {
                                modal: {
                                    on: E,
                                    effect: D,
                                    blur: D,
                                    stealfocus: D,
                                    escape: D
                                }
                            }
                        }), R.viewport = function(c, d, e, f, g, h, i) {
                            function j(a, b, c, e, f, g, h, i, j) {
                                var k = d[f],
                                    s = u[a],
                                    t = v[a],
                                    w = c === Q,
                                    x = s === f ? j : s === g ? -j : -j / 2,
                                    y = t === f ? i : t === g ? -i : -i / 2,
                                    z = q[f] + r[f] - (n ? 0 : m[f]),
                                    A = z - k,
                                    B = k + j - (h === I ? o : p) - z,
                                    C = x - (u.precedance === a || s === u[b] ? y : 0) - (t === O ? i / 2 : 0);
                                return w ? (C = (s === f ? 1 : -1) * x, d[f] += A > 0 ? A : B > 0 ? -B : 0, d[f] = Math.max(-m[f] + r[f], k - C, Math.min(Math.max(-m[f] + r[f] + (h === I ? o : p), k + C), d[f], "center" === s ? k - x : 1e9))) : (e *= c === P ? 2 : 0, A > 0 && (s !== f || B > 0) ? (d[f] -= C + e, l.invert(a, f)) : B > 0 && (s !== g || A > 0) && (d[f] -= (s === O ? -C : C) + e, l.invert(a, g)), d[f] < q[f] && -d[f] > B && (d[f] = k, l = u.clone())), d[f] - k;
                            }
                            var k, l, m, n, o, p, q, r, s = e.target,
                                t = c.elements.tooltip,
                                u = e.my,
                                v = e.at,
                                w = e.adjust,
                                x = w.method.split(" "),
                                y = x[0],
                                z = x[1] || x[0],
                                A = e.viewport,
                                B = e.container,
                                C = {
                                    left: 0,
                                    top: 0
                                };
                            return A.jquery && s[0] !== a && s[0] !== b.body && "none" !== w.method ? (m = B.offset() || C, n = "static" === B.css("position"), k = "fixed" === t.css("position"), o = A[0] === a ? A.width() : A.outerWidth(E), p = A[0] === a ? A.height() : A.outerHeight(E), q = {
                                left: k ? 0 : A.scrollLeft(),
                                top: k ? 0 : A.scrollTop()
                            }, r = A.offset() || C, "shift" === y && "shift" === z || (l = u.clone()), C = {
                                left: "none" !== y ? j(G, H, y, w.x, L, N, I, f, h) : 0,
                                top: "none" !== z ? j(H, G, z, w.y, K, M, J, g, i) : 0,
                                my: l
                            }) : C;
                        }, R.polys = {
                            polygon: function(a, b) {
                                var c, d, e, f = {
                                        width: 0,
                                        height: 0,
                                        position: {
                                            top: 1e10,
                                            right: 0,
                                            bottom: 0,
                                            left: 1e10
                                        },
                                        adjustable: E
                                    },
                                    g = 0,
                                    h = [],
                                    i = 1,
                                    j = 1,
                                    k = 0,
                                    l = 0;
                                for (g = a.length; g--;) {
                                    c = [parseInt(a[--g], 10), parseInt(a[g + 1], 10)], c[0] > f.position.right && (f.position.right = c[0]), c[0] < f.position.left && (f.position.left = c[0]), c[1] > f.position.bottom && (f.position.bottom = c[1]), c[1] < f.position.top && (f.position.top = c[1]), h.push(c);
                                }
                                if (d = f.width = Math.abs(f.position.right - f.position.left), e = f.height = Math.abs(f.position.bottom - f.position.top), "c" === b.abbrev()) {
                                    f.position = {
                                        left: f.position.left + f.width / 2,
                                        top: f.position.top + f.height / 2
                                    };
                                } else {
                                    for (; d > 0 && e > 0 && i > 0 && j > 0;) {
                                        for (d = Math.floor(d / 2), e = Math.floor(e / 2), b.x === L ? i = d : b.x === N ? i = f.width - d : i += Math.floor(d / 2), b.y === K ? j = e : b.y === M ? j = f.height - e : j += Math.floor(e / 2), g = h.length; g-- && !(h.length < 2);) {
                                            k = h[g][0] - f.position.left, l = h[g][1] - f.position.top, (b.x === L && k >= i || b.x === N && i >= k || b.x === O && (i > k || k > f.width - i) || b.y === K && l >= j || b.y === M && j >= l || b.y === O && (j > l || l > f.height - j)) && h.splice(g, 1);
                                        }
                                    }
                                    f.position = {
                                        left: h[0][0],
                                        top: h[0][1]
                                    };
                                }
                                return f;
                            },
                            rect: function(a, b, c, d) {
                                return {
                                    width: Math.abs(c - a),
                                    height: Math.abs(d - b),
                                    position: {
                                        left: Math.min(a, c),
                                        top: Math.min(b, d)
                                    }
                                };
                            },
                            _angles: {
                                tc: 1.5,
                                tr: 7 / 4,
                                tl: 5 / 4,
                                bc: .5,
                                br: .25,
                                bl: .75,
                                rc: 2,
                                lc: 1,
                                c: 0
                            },
                            ellipse: function(a, b, c, d, e) {
                                var f = R.polys._angles[e.abbrev()],
                                    g = 0 === f ? 0 : c * Math.cos(f * Math.PI),
                                    h = d * Math.sin(f * Math.PI);
                                return {
                                    width: 2 * c - Math.abs(g),
                                    height: 2 * d - Math.abs(h),
                                    position: {
                                        left: a + g,
                                        top: b + h
                                    },
                                    adjustable: E
                                };
                            },
                            circle: function(a, b, c, d) {
                                return R.polys.ellipse(a, b, c, c, d);
                            }
                        }, R.svg = function(a, c, e) {
                            for (var f, g, h, i, j, k, l, m, n, o = c[0], p = d(o.ownerSVGElement), q = o.ownerDocument, r = (parseInt(c.css("stroke-width"), 10) || 0) / 2; !o.getBBox;) {
                                o = o.parentNode;
                            }
                            if (!o.getBBox || !o.parentNode) {
                                return E;
                            }
                            switch (o.nodeName) {
                                case "ellipse":
                                case "circle":
                                    m = R.polys.ellipse(o.cx.baseVal.value, o.cy.baseVal.value, (o.rx || o.r).baseVal.value + r, (o.ry || o.r).baseVal.value + r, e);
                                    break;
                                case "line":
                                case "polygon":
                                case "polyline":
                                    for (l = o.points || [{
                                            x: o.x1.baseVal.value,
                                            y: o.y1.baseVal.value
                                        }, {
                                            x: o.x2.baseVal.value,
                                            y: o.y2.baseVal.value
                                        }], m = [], k = -1, i = l.numberOfItems || l.length; ++k < i;) {
                                        j = l.getItem ? l.getItem(k) : l[k], m.push.apply(m, [j.x, j.y]);
                                    }
                                    m = R.polys.polygon(m, e);
                                    break;
                                default:
                                    m = o.getBBox(), m = {
                                        width: m.width,
                                        height: m.height,
                                        position: {
                                            left: m.x,
                                            top: m.y
                                        }
                                    };
                            }
                            return n = m.position, p = p[0], p.createSVGPoint && (g = o.getScreenCTM(), l = p.createSVGPoint(), l.x = n.left, l.y = n.top, h = l.matrixTransform(g), n.left = h.x, n.top = h.y), q !== b && "mouse" !== a.position.target && (f = d((q.defaultView || q.parentWindow).frameElement).offset(), f && (n.left += f.left, n.top += f.top)), q = d(q), n.left += q.scrollLeft(), n.top += q.scrollTop(), m;
                        }, R.imagemap = function(a, b, c) {
                            b.jquery || (b = d(b));
                            var e, f, g, h, i, j = (b.attr("shape") || "rect").toLowerCase().replace("poly", "polygon"),
                                k = d('img[usemap="#' + b.parent("map").attr("name") + '"]'),
                                l = d.trim(b.attr("coords")),
                                m = l.replace(/,$/, "").split(",");
                            if (!k.length) {
                                return E;
                            }
                            if ("polygon" === j) {
                                h = R.polys.polygon(m, c);
                            } else {
                                if (!R.polys[j]) {
                                    return E;
                                }
                                for (g = -1, i = m.length, f = []; ++g < i;) {
                                    f.push(parseInt(m[g], 10));
                                }
                                h = R.polys[j].apply(this, f.concat(c));
                            }
                            return e = k.offset(), e.left += Math.ceil((k.outerWidth(E) - k.width()) / 2), e.top += Math.ceil((k.outerHeight(E) - k.height()) / 2), h.position.left += e.left, h.position.top += e.top, h;
                        };
                        var Aa, Ba = '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';
                        d.extend(x.prototype, {
                            _scroll: function() {
                                var b = this.qtip.elements.overlay;
                                b && (b[0].style.top = d(a).scrollTop() + "px");
                            },
                            init: function(c) {
                                var e = c.tooltip;
                                d("select, object").length < 1 && (this.bgiframe = c.elements.bgiframe = d(Ba).appendTo(e), c._bind(e, "tooltipmove", this.adjustBGIFrame, this._ns, this)), this.redrawContainer = d("<div/>", {
                                    id: S + "-rcontainer"
                                }).appendTo(b.body), c.elements.overlay && c.elements.overlay.addClass("qtipmodal-ie6fix") && (c._bind(a, ["scroll", "resize"], this._scroll, this._ns, this), c._bind(e, ["tooltipshow"], this._scroll, this._ns, this)), this.redraw();
                            },
                            adjustBGIFrame: function() {
                                var a, b, c = this.qtip.tooltip,
                                    d = {
                                        height: c.outerHeight(E),
                                        width: c.outerWidth(E)
                                    },
                                    e = this.qtip.plugins.tip,
                                    f = this.qtip.elements.tip;
                                b = parseInt(c.css("borderLeftWidth"), 10) || 0, b = {
                                    left: -b,
                                    top: -b
                                }, e && f && (a = "x" === e.corner.precedance ? [I, L] : [J, K], b[a[1]] -= f[a[0]]()), this.bgiframe.css(b).css(d);
                            },
                            redraw: function() {
                                if (this.qtip.rendered < 1 || this.drawing) {
                                    return this;
                                }
                                var a, b, c, d, e = this.qtip.tooltip,
                                    f = this.qtip.options.style,
                                    g = this.qtip.options.position.container;
                                return this.qtip.drawing = 1, f.height && e.css(J, f.height), f.width ? e.css(I, f.width) : (e.css(I, "").appendTo(this.redrawContainer), b = e.width(), 1 > b % 2 && (b += 1), c = e.css("maxWidth") || "", d = e.css("minWidth") || "", a = (c + d).indexOf("%") > -1 ? g.width() / 100 : 0, c = (c.indexOf("%") > -1 ? a : 1 * parseInt(c, 10)) || b, d = (d.indexOf("%") > -1 ? a : 1 * parseInt(d, 10)) || 0, b = c + d ? Math.min(Math.max(b, d), c) : b, e.css(I, Math.round(b)).appendTo(g)), this.drawing = 0, this;
                            },
                            destroy: function() {
                                this.bgiframe && this.bgiframe.remove(), this.qtip._unbind([a, this.qtip.tooltip], this._ns);
                            }
                        }), Aa = R.ie6 = function(a) {
                            return 6 === da.ie ? new x(a) : E;
                        }, Aa.initialize = "render", B.ie6 = {
                            "^content|style$": function() {
                                this.redraw();
                            }
                        };
                    });
                }(window, document);
            };
            // qtip2 css
            var init_qtip_css = function(config) {
                config = config || {
                    force: true
                };
                var elem = document.querySelector('style[data-href="qtip.css"]');
                if (elem && !config.force) {
                    return;
                }
                if (elem && config.force) {
                    elem.parentNode.removeChild(elem);
                }
                return function e(t, n, r) {
                    function s(o, u) {
                        if (!n[o]) {
                            if (!t[o]) {
                                var a = typeof require === "function" && require;
                                if (!u && a) {
                                    return a(o, !0);
                                }
                                if (i) {
                                    return i(o, !0);
                                }
                                var f = new Error("Cannot find module '" + o + "'");
                                throw (f.code = "MODULE_NOT_FOUND", f);
                            }
                            var l = n[o] = {
                                exports: {}
                            };
                            t[o][0].call(l.exports, function(e) {
                                var n = t[o][1][e];
                                return s(n ? n : e);
                            }, l, l.exports, e, t, n, r);
                        }
                        return n[o].exports;
                    }
                    var i = typeof require === "function" && require;
                    for (var o = 0; o < r.length; o++) {
                        s(r[o]);
                    }
                    return s;
                }({
                    1: [function(require, module, exports) {
                        "use strict";
                        var styleElementsInsertedAtTop = [];
                        var insertStyleElement = function(styleElement, options) {
                            var head = document.head || document.getElementsByTagName("head")[0];
                            var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
                            options = options || {};
                            options.insertAt = options.insertAt || "bottom";
                            if (options.insertAt === "top") {
                                if (!lastStyleElementInsertedAtTop) {
                                    head.insertBefore(styleElement, head.firstChild);
                                } else if (lastStyleElementInsertedAtTop.nextSibling) {
                                    head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
                                } else {
                                    head.appendChild(styleElement);
                                }
                                styleElementsInsertedAtTop.push(styleElement);
                            } else if (options.insertAt === "bottom") {
                                head.appendChild(styleElement);
                            } else {
                                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                            }
                        };
                        module.exports = {
                            createLink: function(href, attributes) {
                                var head = document.head || document.getElementsByTagName("head")[0];
                                var link = document.createElement("link");
                                link.href = href;
                                link.rel = "stylesheet";
                                for (var key in attributes) {
                                    if (!attributes.hasOwnProperty(key)) {
                                        continue;
                                    }
                                    var value = attributes[key];
                                    link.setAttribute("data-" + key, value);
                                }
                                head.appendChild(link);
                            },
                            createStyle: function(cssText, attributes, extraOptions) {
                                extraOptions = extraOptions || {};
                                var style = document.createElement("style");
                                style.type = "text/css";
                                for (var key in attributes) {
                                    if (!attributes.hasOwnProperty(key)) {
                                        continue;
                                    }
                                    var value = attributes[key];
                                    style.setAttribute("data-" + key, value);
                                }
                                if (style.sheet) {
                                    style.innerHTML = cssText;
                                    style.sheet.cssText = cssText;
                                    insertStyleElement(style, {
                                        insertAt: extraOptions.insertAt
                                    });
                                } else if (style.styleSheet) {
                                    insertStyleElement(style, {
                                        insertAt: extraOptions.insertAt
                                    });
                                    style.styleSheet.cssText = cssText;
                                } else {
                                    style.appendChild(document.createTextNode(cssText));
                                    insertStyleElement(style, {
                                        insertAt: extraOptions.insertAt
                                    });
                                }
                            }
                        };
                    }, {}],
                    2: [function(require, module, exports) {
                        var css = '#qtip-overlay.blurs,\n.qtip-close {\n  cursor: pointer;\n}\n.qtip {\n  position: absolute;\n  left: -28000px;\n  top: -28000px;\n  display: none;\n  max-width: 500px;\n  min-width: 50px;\n  font-size: 10.5px;\n  line-height: 12px;\n  direction: ltr;\n  box-shadow: none;\n  padding: 0;\n}\n.qtip-content,\n.qtip-titlebar {\n  position: relative;\n  overflow: hidden;\n margin-right: 10px;\n}\n.qtip-content {\n  padding: 5px 9px;\n  text-align: left;\n  word-wrap: break-word;\n}\n.qtip-titlebar {\n  padding: 5px 35px 5px 10px;\n  border-width: 0 0 1px;\n  font-weight: 700;\n}\n.qtip-titlebar+.qtip-content {\n  border-top-width: 0!important;\n}\n.qtip-close {\n  position: absolute;\n  right: -9px;\n  top: -9px;\n  z-index: 11;\n  outline: 0;\n  border: 1px solid transparent;\n}\n.qtip-titlebar .qtip-close {\n  right: 4px;\n  top: 50%;\n  margin-top: -9px;\n}\n* html .qtip-titlebar .qtip-close {\n  top: 16px;\n}\n.qtip-icon .ui-icon,\n.qtip-titlebar .ui-icon {\n  display: block;\n  text-indent: -1000em;\n  direction: ltr;\n}\n.qtip-icon,\n.qtip-icon .ui-icon {\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  text-decoration: none;\n}\n.qtip-icon .ui-icon {\n  width: 18px;\n  height: 14px;\n  line-height: 14px;\n  text-align: center;\n  text-indent: 0;\n  font: normal 700 10px/13px Tahoma,sans-serif;\n  color: inherit;\n  background: -100em -100em no-repeat;\n}\n.qtip-default {\n  border: 1px solid #F1D031;\n  background-color: #FFFFA3;\n  color: #555;\n}\n.qtip-default .qtip-titlebar {\n  background-color: #FFEF93;\n}\n.qtip-default .qtip-icon {\n  border-color: #CCC;\n  background: #F1F1F1;\n  color: #777;\n}\n.qtip-default .qtip-titlebar .qtip-close {\n  border-color: #AAA;\n  color: #111;\n}\n.qtip-light {\n  background-color: #fff;\n  border-color: #E2E2E2;\n  color: #454545;\n}\n.qtip-light .qtip-titlebar {\n  background-color: #f1f1f1;\n}\n.qtip-dark {\n  background-color: #505050;\n  border-color: #303030;\n  color: #f3f3f3;\n}\n.qtip-dark .qtip-titlebar {\n  background-color: #404040;\n}\n.qtip-dark .qtip-icon {\n  border-color: #444;\n}\n.qtip-dark .qtip-titlebar .ui-state-hover {\n  border-color: #303030;\n}\n.qtip-cream {\n  background-color: #FBF7AA;\n  border-color: #F9E98E;\n  color: #A27D35;\n}\n.qtip-red,\n.qtip-red .qtip-icon,\n.qtip-red .qtip-titlebar .ui-state-hover {\n  border-color: #D95252;\n}\n.qtip-cream .qtip-titlebar {\n  background-color: #F0DE7D;\n}\n.qtip-cream .qtip-close .qtip-icon {\n  background-position: -82px 0;\n}\n.qtip-red {\n  background-color: #F78B83;\n  color: #912323;\n}\n.qtip-red .qtip-titlebar {\n  background-color: #F06D65;\n}\n.qtip-red .qtip-close .qtip-icon {\n  background-position: -102px 0;\n}\n.qtip-green {\n  background-color: #CAED9E;\n  border-color: #90D93F;\n  color: #3F6219;\n}\n.qtip-green .qtip-titlebar {\n  background-color: #B0DE78;\n}\n.qtip-green .qtip-close .qtip-icon {\n  background-position: -42px 0;\n}\n.qtip-blue {\n  background-color: #E5F6FE;\n  border-color: #ADD9ED;\n  color: #5E99BD;\n}\n.qtip-blue .qtip-titlebar {\n  background-color: #D0E9F5;\n}\n.qtip-blue .qtip-close .qtip-icon {\n  background-position: -2px 0;\n}\n.qtip-shadow {\n  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,.15);\n  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,.15);\n  box-shadow: 1px 1px 3px 1px rgba(0,0,0,.15);\n}\n.qtip-bootstrap,\n.qtip-rounded,\n.qtip-tipsy {\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n}\n.qtip-rounded .qtip-titlebar {\n  -moz-border-radius: 4px 4px 0 0;\n  -webkit-border-radius: 4px 4px 0 0;\n  border-radius: 4px 4px 0 0;\n}\n.qtip-youtube {\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 0 3px #333;\n  -moz-box-shadow: 0 0 3px #333;\n  box-shadow: 0 0 3px #333;\n  color: #fff;\n  border: 0 solid transparent;\n  background: #4A4A4A;\n  background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#4A4A4A),color-stop(100%,#000));\n  background-image: -webkit-linear-gradient(top,#4A4A4A 0,#000 100%);\n  background-image: -moz-linear-gradient(top,#4A4A4A 0,#000 100%);\n  background-image: -ms-linear-gradient(top,#4A4A4A 0,#000 100%);\n  background-image: -o-linear-gradient(top,#4A4A4A 0,#000 100%);\n}\n.qtip-youtube .qtip-titlebar {\n  background-color: #4A4A4A;\n  background-color: rgba(0,0,0,0);\n}\n.qtip-youtube .qtip-content {\n  padding: .75em;\n  font: 12px arial,sans-serif;\n  filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr=#4a4a4a, EndColorStr=#000000);\n  -ms-filter: "progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#4a4a4a,EndColorStr=#000000);";\n}\n.qtip-youtube .qtip-icon {\n  border-color: #222;\n}\n.qtip-youtube .qtip-titlebar .ui-state-hover {\n  border-color: #303030;\n}\n.qtip-jtools {\n  background: #232323;\n  background: rgba(0,0,0,.7);\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#717171),to(#232323));\n  background-image: -moz-linear-gradient(top,#717171,#232323);\n  background-image: -webkit-linear-gradient(top,#717171,#232323);\n  background-image: -ms-linear-gradient(top,#717171,#232323);\n  background-image: -o-linear-gradient(top,#717171,#232323);\n  border: 2px solid #ddd;\n  border: 2px solid rgba(241,241,241,1);\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 0 12px #333;\n  -moz-box-shadow: 0 0 12px #333;\n  box-shadow: 0 0 12px #333;\n}\n.qtip-jtools .qtip-titlebar {\n  background-color: transparent;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#717171, endColorstr=#4A4A4A);\n  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#717171,endColorstr=#4A4A4A)";\n}\n.qtip-jtools .qtip-content {\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#4A4A4A, endColorstr=#232323);\n  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#4A4A4A,endColorstr=#232323)";\n}\n.qtip-jtools .qtip-content,\n.qtip-jtools .qtip-titlebar {\n  background: 0 0;\n  color: #fff;\n  border: 0 dashed transparent;\n}\n.qtip-jtools .qtip-icon {\n  border-color: #555;\n}\n.qtip-jtools .qtip-titlebar .ui-state-hover {\n  border-color: #333;\n}\n.qtip-cluetip {\n  -webkit-box-shadow: 4px 4px 5px rgba(0,0,0,.4);\n  -moz-box-shadow: 4px 4px 5px rgba(0,0,0,.4);\n  box-shadow: 4px 4px 5px rgba(0,0,0,.4);\n  background-color: #D9D9C2;\n  color: #111;\n  border: 0 dashed transparent;\n}\n.qtip-cluetip .qtip-titlebar {\n  background-color: #87876A;\n  color: #fff;\n  border: 0 dashed transparent;\n}\n.qtip-cluetip .qtip-icon {\n  border-color: #808064;\n}\n.qtip-cluetip .qtip-titlebar .ui-state-hover {\n  border-color: #696952;\n  color: #696952;\n}\n.qtip-tipsy {\n  background: #000;\n  background: rgba(0,0,0,.87);\n  color: #fff;\n  border: 0 solid transparent;\n  font-size: 11px;\n  font-family: \'Lucida Grande\',sans-serif;\n  font-weight: 700;\n  line-height: 16px;\n  text-shadow: 0 1px #000;\n}\n.qtip-tipsy .qtip-titlebar {\n  padding: 6px 35px 0 10px;\n  background-color: transparent;\n}\n.qtip-tipsy .qtip-content {\n  padding: 6px 10px;\n}\n.qtip-tipsy .qtip-icon {\n  border-color: #222;\n  text-shadow: none;\n}\n.qtip-tipsy .qtip-titlebar .ui-state-hover {\n  border-color: #303030;\n}\n.qtip-tipped {\n  border: 3px solid #959FA9;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  background-color: #F9F9F9;\n  color: #454545;\n  font-weight: 400;\n  font-family: serif;\n}\n.qtip-tipped .qtip-titlebar {\n  border-bottom-width: 0;\n  color: #fff;\n  background: #3A79B8;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#3A79B8),to(#2E629D));\n  background-image: -webkit-linear-gradient(top,#3A79B8,#2E629D);\n  background-image: -moz-linear-gradient(top,#3A79B8,#2E629D);\n  background-image: -ms-linear-gradient(top,#3A79B8,#2E629D);\n  background-image: -o-linear-gradient(top,#3A79B8,#2E629D);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#3A79B8, endColorstr=#2E629D);\n  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#3A79B8,endColorstr=#2E629D)";\n}\n.qtip-tipped .qtip-icon {\n  border: 2px solid #285589;\n  background: #285589;\n}\n.qtip-tipped .qtip-icon .ui-icon {\n  background-color: #FBFBFB;\n  color: #555;\n}\n.qtip-bootstrap {\n  font-size: 14px;\n  line-height: 20px;\n  color: #333;\n  padding: 1px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0,0,0,.2);\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0,0,0,.2);\n  -moz-box-shadow: 0 5px 10px rgba(0,0,0,.2);\n  box-shadow: 0 5px 10px rgba(0,0,0,.2);\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n.qtip-bootstrap .qtip-titlebar {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-border-radius: 5px 5px 0 0;\n  -moz-border-radius: 5px 5px 0 0;\n  border-radius: 5px 5px 0 0;\n}\n.qtip-bootstrap .qtip-titlebar .qtip-close {\n  right: 11px;\n  top: 45%;\n  border-style: none;\n}\n.qtip-bootstrap .qtip-content {\n  padding: 9px 14px;\n  max-height: 200px;\n  overflow: "scroll"}\n.qtip-bootstrap .qtip-icon {\n  background: 0 0;\n}\n.qtip-bootstrap .qtip-icon .ui-icon {\n  width: auto;\n  height: auto;\n  float: right;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 18px;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2;\n  filter: alpha(opacity=20);\n}\n#qtip-overlay,\n#qtip-overlay div {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.qtip-bootstrap .qtip-icon .ui-icon:hover {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: .4;\n  filter: alpha(opacity=40);\n}\n.qtip:not(.ie9haxors) div.qtip-content,\n.qtip:not(.ie9haxors) div.qtip-titlebar {\n  filter: none;\n  -ms-filter: none;\n}\n.qtip .qtip-tip {\n  margin: 0 auto;\n  overflow: hidden;\n  z-index: 10;\n}\n.qtip .qtip-tip,\nx:-o-prefocus {\n  visibility: hidden;\n}\n.qtip .qtip-tip,\n.qtip .qtip-tip .qtip-vml,\n.qtip .qtip-tip canvas {\n  position: absolute;\n  color: #123456;\n  background: 0 0;\n  border: 0 dashed transparent;\n}\n.qtip .qtip-tip canvas {\n  top: 0;\n  left: 0;\n}\n.qtip .qtip-tip .qtip-vml {\n  behavior: url(#default#VML);\n  display: inline-block;\n  visibility: visible;\n}\n#qtip-overlay {\n  position: fixed;\n}\n#qtip-overlay div {\n  position: absolute;\n  background-color: #000;\n  opacity: .7;\n  filter: alpha(opacity=70);\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";\n}\n.qtipmodal-ie6fix {\n  position: absolute!important;\n}\n';
                        require("browserify-css").createStyle(css, {
                            href: "qtip.css"
                        }, {
                            insertAt: "bottom"
                        });
                        module.exports = css;
                    }, {
                        "browserify-css": 1
                    }]
                }, {}, [2]);
            };
            // mau5 css
            var init_qtip_css_mod = function(config) {
                config = config || {
                    force: true
                };
                if (config.force) {
                    let elem = document.querySelector("#qtip-mod");
                    if (elem) {
                        elem.parentNode.removeChild(elem);
                    }
                }
                var stylesheet = document.createElement("style");
                stylesheet.type = "text/css";
                stylesheet.id = "qtip-mod";
                document.head.appendChild(stylesheet);
                stylesheet.sheet.addRule(".qtip-mono", "font-family: Consolas for BBEdit !important;");
                stylesheet.sheet.addRule(".qtip-title", "margin-right: 20px;");
                stylesheet.sheet.addRule("ul.tip", "padding-left: 0px !important; list-style-type:none;");
                stylesheet.sheet.addRule("p.tip-header", "padding-left: 0px !important; height: 20px; display: inline-block; margin: 1px; font-weight: bolder; font-size: 13px;");
                stylesheet.sheet.addRule(".truncate", "max-width: 400px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;");
            };
            var init_qtip_config = function(config) {
                var qtip_config = {
                    content: {
                        button: true,
                        text: function(event, api) {
                            var ul = document.createElement("ul");
                            ul.classList.add("tip");

                            function parse_loadrules(element) {
                                var text;
                                if (element) {
                                    text = element.textContent;
                                }
                                text = text.split(",").map(function(string) {
                                    var obj = {};
                                    obj.id = utui.data.loadrules[string.trim()].id;
                                    obj.text = obj.id + ": " + utui.data.loadrules[string.trim()].title;
                                    return obj;
                                });

                                function build_template(data) {
                                    var li_text = ['<li class="truncate" style="font-size: 12px;"><i class="icon-book mapping-icon icon-large" data-id=' + data.id + "></i>" + " " + data.text + "</li>"].join("");
                                    var li = parseHTML(li_text);
                                    li.dataset.id = data.id;
                                    li.firstElementChild.onclick = function() {
                                        $(this).animateCSS("bounceIn");
                                        utui.util.pubsub.publish(utui.constants.loadrules.FOCUSED, "loadrules_content", "loadrules", this.dataset.id, ".uidValue");
                                        setTimeout(function() {
                                            elem = $("h3[aria-expanded=true]").get(0);
                                            elem.scrollIntoView();
                                        }, 40);
                                    };
                                    return li;
                                }
                                if (text) {
                                    text.forEach(function(obj) {
                                        li = build_template(obj);
                                        ul.appendChild(li);
                                    });
                                }
                            }

                            function parse_extensions(element) {
                                var text;
                                if (element) {
                                    text = element.textContent;
                                }
                                text = text.split(",").map(function(string) {
                                    var obj = {};
                                    obj.id = utui.data.customizations[string.trim()]._id;
                                    obj.text = obj.id + ": " + utui.data.customizations[string.trim()].title;
                                    return obj;
                                });

                                function build_template(data) {
                                    var li_text = ['<li class="truncate" style="font-size: 12px;"><i class="icon-gear mapping-icon icon-large" data-id=' + data.id + "></i>" + " " + data.text + "</li>"].join("");
                                    var li = parseHTML(li_text);
                                    li.dataset.id = data.id;
                                    li.firstElementChild.onclick = function() {
                                        $(this).animateCSS("bounceIn");
                                        utui.util.pubsub.publish(utui.constants.extensions.FOCUSED, "customize_content", "customizations", this.dataset.id, ".container_uid");
                                    };
                                    return li;
                                }
                                if (text) {
                                    text.forEach(function(obj) {
                                        li = build_template(obj);
                                        if (li) {
                                            ul.appendChild(li);
                                        }
                                    });
                                }
                            }
                            var loadrules = $(this).find(".lr").get(0);
                            if (loadrules) {
                                parse_loadrules(loadrules);
                            }
                            var extensions = $(this).find(".ext").get(0);
                            if (extensions) {
                                parse_extensions(extensions);
                            }
                            return ul;
                        },
                        title: function(event, api) {
                            var id = this[0].parentNode.parentNode.parentNode.dataset.id;
                            var title = id + ": " + utui.data.manage[id].title;
                            return "<p class='tip-header'><i class='go_tag icon-tag icon-large' data-id=" + id + "></i>" + " " + title + "</p>";
                        }
                    },
                    style: {
                        classes: "qtip-bootstrap qtip-shadow qtip-mono"
                    },
                    events: {
                        visible: function(event, api) {
                            csm.current_qtip = api.tooltip[0];
                            var enter = function(event) {
                                    var api = this;
                                    if (!api.debounced_enter) {
                                        api.debounced_enter = 1;
                                    }
                                    api.set("hide.distance", false);
                                    api.set("hide.target", api.tooltip);
                                    api.set("hide.event", false);
                                    if (config.debug) {
                                        console.log(["enter", event, api]);
                                        console.log(config);
                                        console.count(api.id + ":enter");
                                    }
                                    var leave = function(event) {
                                            var api = this;
                                            if (api.options.hide.event === false) {
                                                return;
                                            }
                                            api.toggle(false);
                                            api.set("hide.distance", 40);
                                            if (config.debug) {
                                                console.count(api.id + ":leave");
                                            }
                                            api.debounced_leave = 1;
                                        }
                                        .bind(api);
                                    var debounced_leave = _lodash.debounce(leave, 200, {
                                        leading: true,
                                        trailing: false
                                    });
                                    if (!api.debounced_leave) {
                                        $(api.tooltip).on("mouseleave", debounced_leave);
                                    }
                                }
                                .bind(api);
                            var debounced_enter = _lodash.debounce(enter, 200, {
                                leading: true,
                                trailing: false
                            });
                            if (!api.debounced_enter) {
                                $(api.tooltip).on("mouseenter", debounced_enter);
                                if (config.debug) {
                                    console.log(api.id + ":adding");
                                }
                            }
                        }
                    },
                    hide: {
                        event: "mouseleave",
                        inactive: false,
                        fixed: true,
                        delay: 600
                    },
                    show: {
                        event: "mouseenter",
                        effect: true,
                        delay: 200,
                        solo: true
                    },
                    position: {
                        my: "right top",
                        at: "top left",
                        adjust: {
                            x: 0,
                            y: 10,
                            method: "flip"
                        }
                    }
                };
                if (config.debug) {
                    qtip_config.hide.event = false;
                }
                return $("div.container_info").qtip(qtip_config);
            };

            function init(qtip_opts) {
                var qtip_config = this.qtip_config;
                if (!qtip_opts) {
                    qtip_opts = {
                        debug: false,
                        force: false
                    };
                }
                if (!qtip_config.animate) {
                    init_qtip_animate();
                    qtip_config.animate = 1;
                }
                if (!qtip_config.js) {
                    init_qtip_js();
                    qtip_config.js = 1;
                }
                if (!qtip_config.css) {
                    init_qtip_css(qtip_opts);
                    qtip_config.css = 1;
                }
                if (!qtip_config.css_mod) {
                    init_qtip_css_mod(qtip_opts);
                    qtip_config.css_mod = 1;
                }
                init_qtip_config(qtip_opts);
            }
            return init;
        })();
        csm.qtip_init();
        $(document.body).on("mousedown", ".qtip-focus", function(e) {
            var api = $(this).qtip();
            if (e.altKey) {
                api.set("hide.distance", false);
                api.set("hide.event", false);
                api.set("position.target", [500, 70]);
            }
        });
        console.save = console.save || function(data, filename) {
            if (!data) {
                return;
            }
            if (!filename) {
                var date = new Date;
                filename = date.getTime().toString() + "." + document.location.href.replace(/\/|:/gim, "-").replace(/---/, ".") + ".txt";
            }
            if (typeof data === "object") {
                data = JSON.stringify(data);
            }
            var blob = new Blob([data], {
                    type: "text/json"
                }),
                e = document.createEvent("MouseEvents"),
                a = document.createElement("a");
            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        };
        return (function() {

            csm.prime_css = function() {
                var elem = document.querySelector("#csm_qtip_css");
                if (elem) {
                    elem.parentNode.removeChild(elem);
                }
                var stylesheet = document.createElement("style");
                stylesheet.id = "csm_qtip_css";
                document.head.appendChild(stylesheet);
                stylesheet.sheet.addRule(".container_info::-webkit-scrollbar", "display: none;");
                stylesheet.sheet.addRule(".container_info", "overflow: scroll; max-width: 157px; font-size: 11px; vertical-align: middle; margin-top: -12px; white-space:nowrap;");
                stylesheet.sheet.addRule(".med", "max-width: 150px !important");
                stylesheet.sheet.addRule(".long", "max-width: 300px !important");
                stylesheet.sheet.addRule(".hidden", "display: none;");
                stylesheet.sheet.addRule(".container_variables", "max-width: 22px !important;");
                stylesheet.sheet.addRule(".px-width", "width: 1px !important;");
                stylesheet.sheet.addRule(".qtip-titlebar", "max-width: 421px !important; min-width: 421px;");
                stylesheet.sheet.addRule(".qtip-titlebar", "border-bottom: 0px !important;");
                stylesheet.sheet.addRule(".qtip-content", "max-width: 421px !important; margin: 0px; min-width: 421px;");
                $(".container_variables").css("max-width", "22px");
                $(".container_loadRules").css("width", "150px !important");
                $("div[id*='_mappedVars']").css("width", "12px");
            };
            //Define object that will contain all extensions scoped to a tag
            csm.parseHTML = function parseHTML(str) {
                var tmp = document.implementation.createHTMLDocument();
                tmp.body.innerHTML = str;
                return tmp.body.children;
            };
            csm.get_current_tab = function() {
                return utui.config.currentTab;
            };
            csm.labels = {
                find: function(element) {
                    if (!element) {
                        return null;
                    }
                    return $(element).find(".container_label").get(0);
                },
                get_selector: function() {
                    return ".container_label" + '[data-type="' + csm.get_current_tab() + '"]';
                },
                hide: function() {
                    var labels = document.querySelectorAll(csm.labels.get_selector());
                    for (let i = 0; i < labels.length; i++) {
                        window.requestAnimationFrame(function() {
                            labels[i].classList.add("hidden");
                        });
                    }
                },
                show: function() {
                    var labels = document.querySelectorAll(csm.labels.get_selector());
                    for (let i = 0; i < labels.length; i++) {
                        labels[i].classList.remove("hidden");
                    }
                }
            };
            csm.remove_info = function() {
                return document.querySelectorAll(".container_info").forEach(function(o) {
                    o.parentNode.removeChild(o);
                });
            };
            csm.has_info = function() {
                return document.querySelector(".container_info") === null ? false : true;
            };
            csm.chkbox = {
                get_state: function() {
                    var checked = false;
                    var curr_tab = csm.get_current_tab();
                    if (curr_tab === "manage") {
                        if (!csm.chkbox.tags || !csm.chkbox.tags.ext) {
                            csm.create_checkbox.tags();
                        }
                        if (csm.chkbox.tags.lr.firstChild.checked || csm.chkbox.tags.ext.firstChild.checked) {
                            checked = true;
                        }
                    } else if (curr_tab === "customizations") {
                        if (typeof csm.chkbox.extensions.scope === "undefined") {
                            csm.create_checkbox.customizations();
                        }
                        if (csm.chkbox.extensions.scope.firstChild.checked) {
                            checked = true;
                        }
                    }
                    return checked;
                },
                tags: {},
                extensions: {}
            };
            csm.create_checkbox = {
                tags: function() {
                    document.querySelectorAll(".tab-menu-item.chkbox.manage").forEach(function(elem, i) {
                        elem.parentNode.removeChild(elem);
                    });
                    var selector = "#manageContainer_headerControls";
                    var node = document.querySelector(selector);
                    var chkboxes = {
                        lr: '<div class="tab-menu-item chkbox manage"><input class="chkbox_manage" id="loadrules_chkbox" type="checkbox" checked="checked" value="loadrules"><label for="loadrules_chkbox"><i class="icon-book mapping-icon"></i></label></div>',
                        ext: '<div class="tab-menu-item chkbox manage"><input class="chkbox_manage" id="ext_chkbox" type="checkbox" checked="checked" value="ext"><label for="ext_chkbox"><i class="icon-cog mapping-icon"></i></label></div>'
                    };
                    csm.chkbox.tags.lr = csm.parseHTML(chkboxes.lr)[0];
                    csm.chkbox.tags.ext = csm.parseHTML(chkboxes.ext)[0];
                    csm.chkbox.tags.lr.onchange = function() {
                        if (this.firstChild.checked || csm.chkbox.tags.ext.childNodes[0].checked) {
                            $(".container_info").remove();
                            csm.add_info();
                        } else {
                            $(".container_info").remove();
                            csm.labels.show();
                        }
                    };
                    csm.chkbox.tags.ext.onchange = function() {
                        if (this.firstChild.checked || csm.chkbox.tags.lr.childNodes[0].checked) {
                            $(".container_label").addClass("hidden");
                            $(".container_label").addClass("px-width");
                            $(".container_info").remove();
                            csm.add_info();
                        } else {
                            csm.remove_info();
                            $(".container_label").removeClass("hidden");
                        }
                    };
                    node.appendChild(csm.chkbox.tags.lr);
                    node.appendChild(csm.chkbox.tags.ext);
                },
                customizations: function() {
                    document.querySelectorAll(".tab-menu-item.chkbox.customizations").forEach(function(elem, i) {
                        elem.parentNode.removeChild(elem);
                    });
                    var selector = "#customizeContainer_headerControls";
                    var node = document.querySelector(selector);
                    var chkboxes = {
                        scope: '<div class="tab-menu-item chkbox customizations"><input class="chkbox_customizations" id="customizations_chkbox" type="checkbox" checked="checked" value="customizations"><label for="customizations_chkbox"><i class="icon-book mapping-icon"></i></label></div>'
                    };
                    csm.chkbox.extensions.scope = csm.parseHTML(chkboxes.scope)[0];
                    if (node) {
                        node.appendChild(csm.chkbox.extensions.scope);
                    }
                    csm.chkbox.extensions.scope.onchange = function() {
                        var self = this;
                        if (self.hasChildNodes() && self.firstChild.id === "customizations_chkbox" && self.firstChild.checked) {
                            $(".container_info").remove();
                            $(".container_label").addClass("px-width");
                            csm.add_info();
                            $(".container_label").addClass("hidden");
                        } else {
                            csm.remove_info();
                            $(".container_label").removeClass("hidden");
                        }
                    };
                    csm.checkbox_customizations = 1;
                }
            };
            csm.get_checkbox_state = function() {
                var current_tab = csm.get_current_tab();
                var selector = ".chkbox" + "_" + current_tab;
                var checked = false;
                var check_boxes = document.querySelectorAll(selector);
                if (!check_boxes) {
                    if (current_tab === "manage") {
                        csm.create_checkbox.tags();
                    }
                    if (current_tab === "extensions") {
                        csm.create_checkbox.customizations();
                    }
                }
                if (check_boxes) {
                    for (let i = 0; i < check_boxes.length; i++) {
                        if (check_boxes[i].checked) {
                            checked = true;
                            break;
                        }
                    }
                }
                return checked;
            };
            csm.InfoContainer = class InfoContainer {
                constructor(ext, lr) {
                    // ecluded all pages loadrule. request @jason-paddock.
                    if (lr && lr !== "all" && document.querySelector("#loadrules_chkbox").checked) {
                        this.lr = ['<div class="mapping-item mapping-lr"><i class="icon-book mapping-icon"></i><div class="lr" style="margin-left: 3px; width: auto; max-width:280px;">' + lr + "</div></div>"];
                    }
                    if (ext && document.querySelector("#ext_chkbox").checked) {
                        this.ext = ['<div class="mapping-item mapping-ext"><i class="icon-cog mapping-icon"></i><div class="ext" style="margin-left: 3px; width: auto; max-width:280px;">' + ext + "</div></div>"];
                    }
                }
                get content() {
                    return this.buildContent();
                }
                buildContent() {
                    function create_elem(type, value) {
                        // here we can add custom css to each element in the mapping container.
                        // format should be camelCalse. paddingLeft will be added as padding-left.
                        var css = {
                            div: {
                                display: "inline-block",
                                fontSize: "11px"
                            },
                            loadrule: {
                                "marginLeft": "3px",
                                "marginRight": "5px",
                                "paddingLeft": "3px",
                                "display": "inline-block",
                                "height": "14px"
                            },
                            extension: {
                                "marginLeft": "3px",
                                "marginRight": "5px",
                                "paddingLeft": "3px",
                                "display:": "inline-block",
                                "height": "14px"
                            }
                        };
                        var element;
                        if (type === "div") {
                            element = document.createElement("div");
                            element.classList.add("container_info");
                            for (let key in css[type]) {
                                if (css[type].hasOwnProperty(key)) {
                                    element.style[key] = css[type][key];
                                }
                            }
                            return element;
                        }
                        if (type === "loadrule") {
                            element = csm.parseHTML(value.join(""))[0];
                            for (let key in css[type]) {
                                if (css[type].hasOwnProperty(key)) {
                                    element.style[key] = css[type][key];
                                }
                            }
                            return element;
                        }
                        if (type === "extension") {
                            element = csm.parseHTML(value.join(""))[0];
                            for (var key in css[type]) {
                                if (css[type].hasOwnProperty(key)) {
                                    element.style[key] = css[type][key];
                                }
                            }
                            return element;
                        }
                    }
                    var div = create_elem("div");
                    if (this.lr) {
                        div.appendChild(create_elem("loadrule", this.lr));
                    }
                    if (this.ext) {
                        div.appendChild(create_elem("extension", this.ext));
                    }
                    return div;
                }
            };
            csm.ExtensionsInfoContainer = class ExtensionsInfoContainer {
                constructor(scope) {
                    if (scope) {
                        this.scope = ['<div class="mapping-item mapping-ext"><i class="icon-cog mapping-icon"></i><div class="ext" style="margin-left: 3px; width: auto">' + scope + "</div></div>"];
                    }
                }
                get content() {
                    return this.buildContent();
                }
                buildContent() {
                    function create_elem(type, value) {
                        var css = {
                            div: {
                                display: "inline-block",
                                fontSize: "11px"
                            },
                            scope: {
                                "marginLeft": "3px",
                                "marginRight": "5px",
                                "paddingLeft": "3px",
                                "display:": "inline-block",
                                "height": "14px"
                            }
                        };
                        if (type === "div") {
                            let element = document.createElement("div");
                            element.classList.add("container_info");
                            for (let key in css[type]) {
                                if (css[type].hasOwnProperty(key)) {
                                    element.style[key] = css[type][key];
                                }
                            }
                            return element;
                        }
                        if (type === "scope") {
                            let element = csm.parseHTML(value.join(""))[0];
                            for (var key in css[type]) {
                                if (css[type].hasOwnProperty(key)) {
                                    element.style[key] = css[type][key];
                                }
                            }
                            return element;
                        }
                    }
                    var div = create_elem("div");
                    if (this.scope) {
                        div.appendChild(create_elem("scope", this.scope));
                    }
                    return div;
                }
            };
            csm.build_info_container = function(element) {
                if (element.dataset.extensions === "" && element.dataset.loadRules === "all") {
                    return;
                }
                var info_container = new csm.InfoContainer(element.dataset.extensions, element.dataset.loadRules);
                var new_elem = info_container.buildContent();
                if (new_elem.hasChildNodes()) {
                    let anchor = elem.children[0].children[1].querySelector('.container_label');
                    if (anchor && anchor.hasAttribute("data-uid")) {
                        new_elem.dataset.id = anchor.getAttribute("data-uid");
                    }
                    anchor.parentNode.insertBefore(new_elem, anchor);
                }
            };
            csm.build_scope = function(type) {
                function build_extension_scope(elem) {
                    var curr_scope = (utui.data.customizations[elem.dataset.id].scope.split());
                    return curr_scope[0].split(",").map(function(scope) {
                        if (scope === "global") {
                            let new_scope = "AT";
                            let exec_option = utui.data.customizations[elem.dataset.id].advExecOption ? utui.data.customizations[elem.dataset.id].advExecOption : "";
                            if (exec_option) {
                                exec_option = ":" + exec_option.toUpperCase();
                                new_scope = new_scope + exec_option;
                            }
                            return new_scope;
                        } else if (scope === "preload") {
                            return "PRE";
                        } else if (scope === "domready") {
                            return "DOM";
                        } else {
                            return scope;
                        }
                    });
                }
                var scope = {};
                if (type === "manage") {
                    var ext = utui.data.customizations;
                    Object.keys(ext).forEach(function(extension) {
                        if (ext[extension].scope) {
                            let curr_scope = ext[extension].scope.split(",");
                            curr_scope.forEach(function(e, i) {
                                scope[e] = scope[e] || [];
                                scope[e].push(extension);
                            });
                        }
                    });
                    return scope;
                } else if (type === "customizations") {
                    $(".customize_container").each(function(i, elem) {
                        scope[elem.dataset.id] = build_extension_scope(elem);
                    });
                    return scope;
                }
            };
            csm.add_info = function() {
                var tags, extensions;
                if (csm.chkbox.get_state() === false) {
                    return;
                }
                var curr_tab = csm.get_current_tab();
                if (curr_tab === "manage") {
                    // build the data-set
                    tags = (function() {
                        return {
                            elems: jQuery(".manage_container").toArray(),
                            scope: csm.build_scope(curr_tab)
                        };
                    }());
                    // add data-set to dom elements
                    tags.elems.map(function(elem) {
                        elem.dataset.loadRules = utui.data.manage[elem.dataset.id].loadrule;
                        if (tags.scope[elem.dataset.id]) {
                            elem.dataset.extensions = tags.scope[elem.dataset.id].join(", ");
                        } else {
                            elem.dataset.extensions = "";
                        }
                        return elem;
                    });
                    tags.elems.forEach(function(elem) {
                        csm.build_info_container(elem);
                    });
                    window.setTimeout(function() {
                        csm.qtip_init({
                            force: true,
                            debug: false
                        });
                    }, 100);
                } else if (curr_tab === "customizations") {
                    extensions = (function() {
                        return {
                            elems: jQuery(".customize_container").toArray(),
                            scope: csm.build_scope(curr_tab)
                        };
                    })();
                    extensions.elems.forEach(function(elem, i) {
                        var info_container;
                        if (extensions.scope[elem.dataset.id]) {
                            elem.dataset.scope = extensions.scope[elem.dataset.id].join(",");
                            info_container = new csm.ExtensionsInfoContainer(elem.dataset.scope).buildContent();
                            info_container.id = "info" + "_" + elem.dataset.id;
                            var anchor = elem.children[0].children[1].children[5];
                            anchor.parentNode.insertBefore(info_container, anchor);

                        }
                    });
                }
            };


            csm.init_view_state = function init_view_state() {
                try {
                    var localData = JSON.parse(utui.util.storage.loadLocal(utui.login.email));
                } catch (e) {
                    utui.util.storage.storeLocal(utui.login.email, JSON.stringify({
                        tabState: {
                            define: {}
                        }
                    }));
                }
            };

            csm.add_restore_callback = function() {
                function add_idle_callback(e) {
                    e.stopPropagation();
                    csm.remove_info();
                    window.requestIdleCallback(function() {
                        csm.chkbox.get_state() ? $(".container_label").addClass("hidden") : $(".container_label").removeClass("hidden");
                        if (csm.has_info()) {
                            csm.remove_info();
                        }
                        csm.add_info();
                    });
                }
                $("#tabs_manage,#tabs_customizations").off("mouseup", add_idle_callback);
                $("#tabs_manage,#tabs_customizations").on("mouseup", _lodash.debounce(add_idle_callback, 300));
            };
            csm.prime_css();
            if (!csm.checkbox_manage) {
                csm.create_checkbox.tags();
            }
            if (!csm.checkbox_customizations) {
                csm.create_checkbox.customizations();
            }

            csm.add_restore_callback();

        })();
    };
    csm.go_tag_handler = function go_tag_handler(e) {
        var self = this;
        if (e.originalEvent.path[0].classList.contains("go_tag")) {
            e.stopPropagation();
        }
        utui.util.pubsub.publish.apply(utui.util.pubsub, ["focused_tag", "manage_content", "manage", self.dataset.id, ".uidValue"]);
    };
    csm.go_tag_init = function() {
        jQuery(document.body).off("click", csm.go_tag_handler);
        jQuery(document.body).on("click", ".go_tag", csm.go_tag_handler);
    };
})(window.csm);

if (!csm.loaded) {
    utui.util.pubsub.subscribe("sol_load.extra_info", function load_sol_extra_info() {
        csm.extra_info();
        csm.go_tag_init();
        csm.loaded = 1;
        utui.util.pubsub.unsubscribe("sol_load.extra_info");
    }, csm);
    utui.util.pubsub.subscribe("loaded_users", function pubsub_trigger_extra_info() {
        utui.util.pubsub.publish("sol_load.extra_info");
    });
}


$(document.body).one("click", function(e) {
    $(document).off("click", csm.qtip_toggle);
    return $(document.body).on("click", ".qtip-titlebar", function(e) {
        $(this).next().slideToggle("fast")
    });
});

