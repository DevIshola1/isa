"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9384], {
        19384: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return J
                }
            });
            var o = r(2784),
                n = r(58511);

            function i(e, t) {
                var r = e.disabled,
                    o = e.error,
                    n = e.positive,
                    i = e.adjoined,
                    a = e.size,
                    l = e.required,
                    s = e.readOnly;
                return {
                    $isFocused: t.isFocused,
                    $disabled: r,
                    $error: o,
                    $positive: n,
                    $adjoined: i,
                    $size: a,
                    $required: l,
                    $isReadOnly: s
                }
            }
            var a = r(31377),
                l = r(50592),
                s = r(77773);

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach(function(t) {
                        p(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function p(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var d = (0, l.zo)("button", function(e) {
                var t, r = e.$theme,
                    o = e.$size,
                    n = e.$isFocusVisible,
                    i = (p(t = {}, a.NO.mini, r.sizing.scale400), p(t, a.NO.compact, r.sizing.scale400), p(t, a.NO.default, r.sizing.scale300), p(t, a.NO.large, r.sizing.scale200), t)[o];
                return {
                    display: "flex",
                    alignItems: "center",
                    borderTopStyle: "none",
                    borderBottomStyle: "none",
                    borderLeftStyle: "none",
                    borderRightStyle: "none",
                    background: "none",
                    paddingLeft: i,
                    paddingRight: i,
                    outline: n ? "solid 3px ".concat(r.colors.accent) : "none",
                    color: r.colors.contentPrimary
                }
            });
            d.displayName = "StyledMaskToggleButton";
            var f = (0, l.zo)("div", function(e) {
                var t, r = e.$alignTop,
                    o = void 0 !== r && r,
                    n = e.$size,
                    i = e.$theme,
                    l = (p(t = {}, a.NO.mini, i.sizing.scale200), p(t, a.NO.compact, i.sizing.scale200), p(t, a.NO.default, i.sizing.scale100), p(t, a.NO.large, i.sizing.scale0), t)[n];
                return {
                    display: "flex",
                    alignItems: o ? "flex-start" : "center",
                    paddingLeft: l,
                    paddingRight: l,
                    paddingTop: o ? i.sizing.scale500 : "0px",
                    color: i.colors.contentPrimary
                }
            });
            f.displayName = "StyledClearIconContainer";
            var y = (0, l.zo)(s.Z, function(e) {
                var t = e.$theme;
                return {
                    cursor: "pointer",
                    outline: e.$isFocusVisible ? "solid 3px ".concat(t.colors.accent) : "none"
                }
            });

            function b(e, t) {
                var r;
                return (p(r = {}, a.NO.mini, t.font100), p(r, a.NO.compact, t.font200), p(r, a.NO.default, t.font300), p(r, a.NO.large, t.font400), r)[e]
            }
            y.displayName = "StyledClearIcon";
            var h = (0, l.zo)("div", function(e) {
                var t, r, o, n, i = e.$isFocused,
                    l = e.$adjoined,
                    s = e.$error,
                    u = e.$disabled,
                    p = e.$positive,
                    d = e.$size,
                    f = e.$theme,
                    y = e.$theme,
                    h = y.borders,
                    g = y.colors,
                    m = y.sizing,
                    v = y.typography,
                    O = y.animation,
                    C = e.$hasIconTrailing;
                return c(c(c(c({
                    boxSizing: "border-box",
                    display: "flex",
                    overflow: "hidden",
                    width: "100%",
                    borderLeftWidth: "2px",
                    borderRightWidth: "2px",
                    borderTopWidth: "2px",
                    borderBottomWidth: "2px",
                    borderLeftStyle: "solid",
                    borderRightStyle: "solid",
                    borderTopStyle: "solid",
                    borderBottomStyle: "solid",
                    transitionProperty: "border",
                    transitionDuration: O.timing200,
                    transitionTimingFunction: O.easeOutCurve
                }, {
                    borderTopLeftRadius: t = h.inputBorderRadius,
                    borderBottomLeftRadius: t,
                    borderTopRightRadius: t,
                    borderBottomRightRadius: t
                }), b(d, v)), function(e, t, r) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        n = arguments.length > 4 ? arguments[4] : void 0;
                    return e ? {
                        borderLeftColor: n.inputFillDisabled,
                        borderRightColor: n.inputFillDisabled,
                        borderTopColor: n.inputFillDisabled,
                        borderBottomColor: n.inputFillDisabled,
                        backgroundColor: n.inputFillDisabled
                    } : t ? {
                        borderLeftColor: n.borderSelected,
                        borderRightColor: n.borderSelected,
                        borderTopColor: n.borderSelected,
                        borderBottomColor: n.borderSelected,
                        backgroundColor: n.inputFillActive
                    } : r ? {
                        borderLeftColor: n.inputBorderError,
                        borderRightColor: n.inputBorderError,
                        borderTopColor: n.inputBorderError,
                        borderBottomColor: n.inputBorderError,
                        backgroundColor: n.inputFillError
                    } : o ? {
                        borderLeftColor: n.inputBorderPositive,
                        borderRightColor: n.inputBorderPositive,
                        borderTopColor: n.inputBorderPositive,
                        borderBottomColor: n.inputBorderPositive,
                        backgroundColor: n.inputFillPositive
                    } : {
                        borderLeftColor: n.inputBorder,
                        borderRightColor: n.inputBorder,
                        borderTopColor: n.inputBorder,
                        borderBottomColor: n.inputBorder,
                        backgroundColor: n.inputFill
                    }
                }(u, i, s, p, g)), (r = f.direction, o = l === a.y4.both || l === a.y4.left && "rtl" !== r || l === a.y4.right && "rtl" === r || C && "rtl" === r, n = l === a.y4.both || l === a.y4.right && "rtl" !== r || l === a.y4.left && "rtl" === r || C && "rtl" !== r, {
                    paddingLeft: o ? m.scale550 : "0px",
                    paddingRight: n ? m.scale550 : "0px"
                }))
            });
            h.displayName = "Root";
            var g = (0, l.zo)("div", function(e) {
                var t, r = e.$size,
                    o = e.$disabled,
                    n = e.$isFocused,
                    i = e.$error,
                    l = e.$positive,
                    s = e.$theme,
                    u = s.colors,
                    d = s.sizing,
                    f = s.typography,
                    y = s.animation;
                return c(c(c({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transitionProperty: "color, background-color",
                    transitionDuration: y.timing200,
                    transitionTimingFunction: y.easeOutCurve
                }, b(r, f)), (p(t = {}, a.NO.mini, {
                    paddingRight: d.scale400,
                    paddingLeft: d.scale400
                }), p(t, a.NO.compact, {
                    paddingRight: d.scale400,
                    paddingLeft: d.scale400
                }), p(t, a.NO.default, {
                    paddingRight: d.scale300,
                    paddingLeft: d.scale300
                }), p(t, a.NO.large, {
                    paddingRight: d.scale200,
                    paddingLeft: d.scale200
                }), t)[r]), o ? {
                    color: u.inputEnhancerTextDisabled,
                    backgroundColor: u.inputFillDisabled
                } : n ? {
                    color: u.contentPrimary,
                    backgroundColor: u.inputFillActive
                } : i ? {
                    color: u.contentPrimary,
                    backgroundColor: u.inputFillError
                } : l ? {
                    color: u.contentPrimary,
                    backgroundColor: u.inputFillPositive
                } : {
                    color: u.contentPrimary,
                    backgroundColor: u.inputFill
                })
            });
            g.displayName = "InputEnhancer";
            var m = (0, l.zo)("div", function(e) {
                var t = e.$isFocused,
                    r = e.$error,
                    o = e.$disabled,
                    n = e.$positive,
                    i = e.$size,
                    a = e.$theme,
                    l = a.colors,
                    s = a.typography,
                    u = a.animation;
                return c(c({
                    display: "flex",
                    width: "100%",
                    transitionProperty: "background-color",
                    transitionDuration: u.timing200,
                    transitionTimingFunction: u.easeOutCurve
                }, b(i, s)), o ? {
                    color: l.inputTextDisabled,
                    backgroundColor: l.inputFillDisabled
                } : t ? {
                    color: l.contentPrimary,
                    backgroundColor: l.inputFillActive
                } : r ? {
                    color: l.contentPrimary,
                    backgroundColor: l.inputFillError
                } : n ? {
                    color: l.contentPrimary,
                    backgroundColor: l.inputFillPositive
                } : {
                    color: l.contentPrimary,
                    backgroundColor: l.inputFill
                })
            });
            m.displayName = "InputContainer";
            var v = (0, l.zo)("input", function(e) {
                var t, r = e.$disabled,
                    o = (e.$isFocused, e.$error, e.$size),
                    n = e.$theme,
                    i = n.colors,
                    l = n.sizing;
                return c(c(c({
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftStyle: "none",
                    borderRightStyle: "none",
                    borderTopStyle: "none",
                    borderBottomStyle: "none",
                    outline: "none",
                    width: "100%",
                    minWidth: 0,
                    maxWidth: "100%",
                    cursor: r ? "not-allowed" : "text",
                    margin: "0",
                    paddingTop: "0",
                    paddingBottom: "0",
                    paddingLeft: "0",
                    paddingRight: "0"
                }, b(o, n.typography)), (p(t = {}, a.NO.mini, {
                    paddingTop: l.scale100,
                    paddingBottom: l.scale100,
                    paddingLeft: l.scale550,
                    paddingRight: l.scale550
                }), p(t, a.NO.compact, {
                    paddingTop: l.scale200,
                    paddingBottom: l.scale200,
                    paddingLeft: l.scale550,
                    paddingRight: l.scale550
                }), p(t, a.NO.default, {
                    paddingTop: l.scale400,
                    paddingBottom: l.scale400,
                    paddingLeft: l.scale550,
                    paddingRight: l.scale550
                }), p(t, a.NO.large, {
                    paddingTop: l.scale550,
                    paddingBottom: l.scale550,
                    paddingLeft: l.scale550,
                    paddingRight: l.scale550
                }), t)[o]), r ? {
                    color: i.inputTextDisabled,
                    "-webkit-text-fill-color": i.inputTextDisabled,
                    caretColor: i.contentPrimary,
                    "::placeholder": {
                        color: i.inputPlaceholderDisabled
                    }
                } : {
                    color: i.contentPrimary,
                    caretColor: i.contentPrimary,
                    "::placeholder": {
                        color: i.inputPlaceholder
                    }
                })
            });
            v.displayName = "Input";
            var O = r(2196);

            function C() {
                return (C = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                return o
            }
            var w = o.forwardRef(function(e, t) {
                var r, i = (function(e) {
                        if (Array.isArray(e)) return e
                    }(r = (0, l.hQ)()) || function(e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var r = [],
                                o = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                            } catch (e) {
                                n = !0, i = e
                            } finally {
                                try {
                                    o || null == l.return || l.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                            return r
                        }
                    }(r, 2) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return S(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, t)
                        }
                    }(r, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())[1],
                    a = e.title,
                    s = e.size,
                    u = e.color,
                    c = e.overrides,
                    p = void 0 === c ? {} : c,
                    d = function(e, t) {
                        if (null == e) return {};
                        var r, o, n = function(e, t) {
                            if (null == e) return {};
                            var r, o, n = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                        }
                        return n
                    }(e, ["title", "size", "color", "overrides"]),
                    f = (0, n.vt)({
                        component: i.icons && i.icons.Hide ? i.icons.Hide : null
                    }, p && p.Svg ? (0, n.hq)(p.Svg) : {});
                return o.createElement(O.Z, C({
                    viewBox: "0 0 20 20",
                    ref: t,
                    title: void 0 === a ? "Hide" : a,
                    size: s,
                    color: u,
                    overrides: {
                        Svg: f
                    }
                }, d), o.createElement("path", {
                    d: "M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
                }))
            });

            function F() {
                return (F = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                return o
            }
            var E = o.forwardRef(function(e, t) {
                    var r, i = (function(e) {
                            if (Array.isArray(e)) return e
                        }(r = (0, l.hQ)()) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var r = [],
                                    o = !0,
                                    n = !1,
                                    i = void 0;
                                try {
                                    for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                                } catch (e) {
                                    n = !0, i = e
                                } finally {
                                    try {
                                        o || null == l.return || l.return()
                                    } finally {
                                        if (n) throw i
                                    }
                                }
                                return r
                            }
                        }(r, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return j(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(e, t)
                            }
                        }(r, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[1],
                        a = e.title,
                        s = e.size,
                        u = e.color,
                        c = e.overrides,
                        p = void 0 === c ? {} : c,
                        d = function(e, t) {
                            if (null == e) return {};
                            var r, o, n = function(e, t) {
                                if (null == e) return {};
                                var r, o, n = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                            }
                            return n
                        }(e, ["title", "size", "color", "overrides"]),
                        f = (0, n.vt)({
                            component: i.icons && i.icons.Show ? i.icons.Show : null
                        }, p && p.Svg ? (0, n.hq)(p.Svg) : {});
                    return o.createElement(O.Z, F({
                        viewBox: "0 0 20 20",
                        ref: t,
                        title: void 0 === a ? "Show" : a,
                        size: s,
                        color: u,
                        overrides: {
                            Svg: f
                        }
                    }, d), o.createElement("path", {
                        d: "M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"
                    }))
                }),
                k = r(59426);

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function P() {
                return (P = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var r = [],
                            o = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (e) {
                            n = !0, i = e
                        } finally {
                            try {
                                o || null == l.return || l.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return T(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                return o
            }

            function B(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function $(e, t) {
                return ($ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function z(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function I(e) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function N(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var A = function() {
                    return null
                },
                D = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && $(e, t)
                    }(u, e);
                    var t, r, l, s = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r, o = I(u);
                        if (t) {
                            var n = I(this).constructor;
                            r = Reflect.construct(o, arguments, n)
                        } else r = o.apply(this, arguments);
                        return (e = r) && ("object" === x(e) || "function" == typeof e) ? e : z(this)
                    });

                    function u() {
                        var e;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, u);
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return N(z(e = s.call.apply(s, [this].concat(r))), "inputRef", e.props.inputRef || o.createRef()), N(z(e), "state", {
                            isFocused: e.props.autoFocus || !1,
                            isMasked: "password" === e.props.type,
                            initialType: e.props.type,
                            isFocusVisibleForClear: !1,
                            isFocusVisibleForMaskToggle: !1
                        }), N(z(e), "onInputKeyDown", function(t) {
                            e.props.clearOnEscape && "Escape" === t.key && e.inputRef.current && !e.props.readOnly && (e.clearValue(), t.stopPropagation())
                        }), N(z(e), "onClearIconClick", function() {
                            e.inputRef.current && e.clearValue(), e.inputRef.current && e.inputRef.current.focus()
                        }), N(z(e), "onFocus", function(t) {
                            e.props.readOnly || (e.setState({
                                isFocused: !0
                            }), e.props.onFocus(t))
                        }), N(z(e), "onBlur", function(t) {
                            e.props.readOnly || (e.setState({
                                isFocused: !1
                            }), e.props.onBlur(t))
                        }), N(z(e), "handleFocusForMaskToggle", function(t) {
                            (0, k.E)(t) && e.setState({
                                isFocusVisibleForMaskToggle: !0
                            })
                        }), N(z(e), "handleBlurForMaskToggle", function(t) {
                            !1 !== e.state.isFocusVisibleForMaskToggle && e.setState({
                                isFocusVisibleForMaskToggle: !1
                            })
                        }), N(z(e), "handleFocusForClear", function(t) {
                            (0, k.E)(t) && e.setState({
                                isFocusVisibleForClear: !0
                            })
                        }), N(z(e), "handleBlurForClear", function(t) {
                            !1 !== e.state.isFocusVisibleForClear && e.setState({
                                isFocusVisibleForClear: !1
                            })
                        }), e
                    }
                    return r = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.autoFocus,
                                r = e.clearable;
                            this.inputRef.current && (t && this.inputRef.current.focus(), r && this.inputRef.current.addEventListener("keydown", this.onInputKeyDown))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.clearable && this.inputRef.current && this.inputRef.current.removeEventListener("keydown", this.onInputKeyDown)
                        }
                    }, {
                        key: "clearValue",
                        value: function() {
                            var e = this.inputRef.current;
                            if (e) {
                                var t = Object.getOwnPropertyDescriptor(this.props.type === a.iB.textarea ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, "value");
                                if (t) {
                                    var r = t.set;
                                    if (r) {
                                        r.call(e, "");
                                        var o, n, i = (o = "input", "function" == typeof window.Event ? n = new window.Event(o, {
                                            bubbles: !0,
                                            cancelable: !0
                                        }) : (n = document.createEvent("Event")).initEvent(o, !0, !0), n);
                                        e.dispatchEvent(i)
                                    }
                                }
                            }
                        }
                    }, {
                        key: "getInputType",
                        value: function() {
                            return "password" === this.props.type ? this.state.isMasked ? "password" : "text" : this.props.type
                        }
                    }, {
                        key: "renderMaskToggle",
                        value: function() {
                            var e, t = this;
                            if ("password" !== this.props.type) return null;
                            var r = R((0, n.jb)(this.props.overrides.MaskToggleButton, d), 2),
                                i = r[0],
                                l = r[1],
                                s = R((0, n.jb)(this.props.overrides.MaskToggleShowIcon, E), 2),
                                u = s[0],
                                c = s[1],
                                p = R((0, n.jb)(this.props.overrides.MaskToggleHideIcon, w), 2),
                                f = p[0],
                                y = p[1],
                                b = this.state.isMasked ? "Show password text" : "Hide password text",
                                h = (N(e = {}, a.NO.mini, "12px"), N(e, a.NO.compact, "16px"), N(e, a.NO.default, "20px"), N(e, a.NO.large, "24px"), e)[this.props.size];
                            return o.createElement(i, P({
                                $size: this.props.size,
                                $isFocusVisible: this.state.isFocusVisibleForMaskToggle,
                                "aria-label": b,
                                onClick: function() {
                                    return t.setState(function(e) {
                                        return {
                                            isMasked: !e.isMasked
                                        }
                                    })
                                },
                                title: b,
                                type: "button"
                            }, l, {
                                onFocus: (0, k.Ah)(l, this.handleFocusForMaskToggle),
                                onBlur: (0, k.Z5)(l, this.handleBlurForMaskToggle)
                            }), this.state.isMasked ? o.createElement(u, P({
                                size: h,
                                title: b
                            }, c)) : o.createElement(f, P({
                                size: h,
                                title: b
                            }, y)))
                        }
                    }, {
                        key: "renderClear",
                        value: function() {
                            var e, t = this,
                                r = this.props,
                                l = r.clearable,
                                s = r.value,
                                u = r.disabled,
                                c = r.readOnly,
                                p = r.overrides,
                                d = void 0 === p ? {} : p;
                            if (u || c || !l || null == s || "string" == typeof s && 0 === s.length) return null;
                            var b = R((0, n.jb)(d.ClearIconContainer, f), 2),
                                h = b[0],
                                g = b[1],
                                m = R((0, n.jb)(d.ClearIcon, y), 2),
                                v = m[0],
                                O = m[1],
                                C = "Clear value",
                                S = i(this.props, this.state),
                                w = (N(e = {}, a.NO.mini, "14px"), N(e, a.NO.compact, "14px"), N(e, a.NO.default, "16px"), N(e, a.NO.large, "22px"), e)[this.props.size];
                            return o.createElement(h, P({
                                $alignTop: this.props.type === a.iB.textarea
                            }, S, g), o.createElement(v, P({
                                size: w,
                                tabIndex: 0,
                                title: C,
                                "aria-label": C,
                                onClick: this.onClearIconClick,
                                onKeyDown: function(e) {
                                    e.key && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), t.onClearIconClick())
                                },
                                role: "button",
                                $isFocusVisible: this.state.isFocusVisibleForClear
                            }, S, O, {
                                onFocus: (0, k.Ah)(O, this.handleFocusForClear),
                                onBlur: (0, k.Z5)(O, this.handleBlurForClear)
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.value,
                                r = e.type,
                                l = e.overrides,
                                s = l.InputContainer,
                                c = l.Input,
                                p = l.Before,
                                d = l.After,
                                f = "password" === this.state.initialType && this.props.autoComplete === u.defaultProps.autoComplete ? "new-password" : this.props.autoComplete,
                                y = i(this.props, this.state),
                                b = R((0, n.jb)(s, m), 2),
                                h = b[0],
                                g = b[1],
                                O = R((0, n.jb)(c, v), 2),
                                C = O[0],
                                S = O[1],
                                w = R((0, n.jb)(p, A), 2),
                                F = w[0],
                                j = w[1],
                                E = R((0, n.jb)(d, A), 2),
                                k = E[0],
                                x = E[1];
                            return o.createElement(h, P({
                                "data-baseweb": this.props["data-baseweb"] || "base-input"
                            }, y, g), o.createElement(F, P({}, y, j)), o.createElement(C, P({
                                ref: this.inputRef,
                                "aria-activedescendant": this.props["aria-activedescendant"],
                                "aria-autocomplete": this.props["aria-autocomplete"],
                                "aria-controls": this.props["aria-controls"],
                                "aria-errormessage": this.props["aria-errormessage"],
                                "aria-haspopup": this.props["aria-haspopup"],
                                "aria-label": this.props["aria-label"],
                                "aria-labelledby": this.props["aria-labelledby"],
                                "aria-describedby": this.props["aria-describedby"],
                                "aria-invalid": this.props.error,
                                "aria-required": this.props.required,
                                autoComplete: f,
                                disabled: this.props.disabled,
                                readOnly: this.props.readOnly,
                                id: this.props.id,
                                inputMode: this.props.inputMode,
                                maxLength: this.props.maxLength,
                                name: this.props.name,
                                onBlur: this.onBlur,
                                onChange: this.props.onChange,
                                onFocus: this.onFocus,
                                onKeyDown: this.props.onKeyDown,
                                onKeyPress: this.props.onKeyPress,
                                onKeyUp: this.props.onKeyUp,
                                pattern: this.props.pattern,
                                placeholder: this.props.placeholder,
                                type: this.getInputType(),
                                required: this.props.required,
                                role: this.props.role,
                                value: this.props.value,
                                min: this.props.min,
                                max: this.props.max,
                                step: this.props.step,
                                rows: this.props.type === a.iB.textarea ? this.props.rows : null
                            }, y, S), r === a.iB.textarea ? t : null), this.renderClear(), this.renderMaskToggle(), o.createElement(k, P({}, y, x)))
                        }
                    }], B(u.prototype, r), l && B(u, l), u
                }(o.Component);

            function M(e) {
                return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function L() {
                return (L = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var r = [],
                            o = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (e) {
                            n = !0, i = e
                        } finally {
                            try {
                                o || null == l.return || l.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return V(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return V(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                return o
            }

            function K(e, t) {
                if (null == e) return {};
                var r, o, n = function(e, t) {
                    if (null == e) return {};
                    var r, o, n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }

            function W(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function q(e, t) {
                return (q = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function U(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function H(e) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function Z(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            N(D, "defaultProps", {
                "aria-activedescendant": null,
                "aria-autocomplete": null,
                "aria-controls": null,
                "aria-errormessage": null,
                "aria-haspopup": null,
                "aria-label": null,
                "aria-labelledby": null,
                "aria-describedby": null,
                adjoined: a.y4.none,
                autoComplete: "on",
                autoFocus: !1,
                disabled: !1,
                error: !1,
                positive: !1,
                name: "",
                inputMode: "text",
                onBlur: function() {},
                onChange: function() {},
                onKeyDown: function() {},
                onKeyPress: function() {},
                onKeyUp: function() {},
                onFocus: function() {},
                onClear: function() {},
                clearable: !1,
                clearOnEscape: !0,
                overrides: {},
                pattern: null,
                placeholder: "",
                required: !1,
                role: null,
                size: a.NO.default,
                type: "text",
                readOnly: !1
            });
            var Q = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && q(e, t)
                }(u, e);
                var t, r, l, s = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r, o = H(u);
                    if (t) {
                        var n = H(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return (e = r) && ("object" === M(e) || "function" == typeof e) ? e : U(this)
                });

                function u() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, u);
                    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    return Z(U(e = s.call.apply(s, [this].concat(r))), "state", {
                        isFocused: e.props.autoFocus && !e.props.readOnly || !1
                    }), Z(U(e), "onFocus", function(t) {
                        e.props.readOnly || (e.setState({
                            isFocused: !0
                        }), e.props.onFocus(t))
                    }), Z(U(e), "onBlur", function(t) {
                        e.props.readOnly || (e.setState({
                            isFocused: !1
                        }), e.props.onBlur(t))
                    }), e
                }
                return r = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.startEnhancer,
                            r = e.endEnhancer,
                            l = e.overrides,
                            s = l.Root,
                            u = l.StartEnhancer,
                            c = l.EndEnhancer,
                            p = K(l, ["Root", "StartEnhancer", "EndEnhancer"]),
                            d = K(e, ["startEnhancer", "endEnhancer", "overrides"]),
                            f = _((0, n.jb)(s, h), 2),
                            y = f[0],
                            b = f[1],
                            m = _((0, n.jb)(u, g), 2),
                            v = m[0],
                            O = m[1],
                            C = _((0, n.jb)(c, g), 2),
                            S = C[0],
                            w = C[1],
                            F = i(this.props, this.state);
                        return o.createElement(y, L({
                            "data-baseweb": "input"
                        }, F, b, {
                            $adjoined: X(t, r),
                            $hasIconTrailing: this.props.clearable || "password" == this.props.type
                        }), G(t) && o.createElement(v, L({}, F, O, {
                            $position: a.Xf.start
                        }), "function" == typeof t ? t(F) : t), o.createElement(D, L({}, d, {
                            overrides: p,
                            adjoined: X(t, r),
                            onFocus: this.onFocus,
                            onBlur: this.onBlur
                        })), G(r) && o.createElement(S, L({}, F, w, {
                            $position: a.Xf.end
                        }), "function" == typeof r ? r(F) : r))
                    }
                }], W(u.prototype, r), l && W(u, l), u
            }(o.Component);

            function X(e, t) {
                return G(e) && G(t) ? a.y4.both : G(e) ? a.y4.left : G(t) ? a.y4.right : a.y4.none
            }

            function G(e) {
                return !!(e || 0 === e)
            }
            Z(Q, "defaultProps", {
                autoComplete: "on",
                autoFocus: !1,
                disabled: !1,
                name: "",
                onBlur: function() {},
                onFocus: function() {},
                overrides: {},
                required: !1,
                size: a.NO.default,
                startEnhancer: null,
                endEnhancer: null,
                clearable: !1,
                type: "text",
                readOnly: !1
            });
            var J = Q
        }
    }
]);