"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1014], {
        75277: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var r = n(2784),
                o = n(58511),
                i = n(14837),
                a = {
                    expand: "expand"
                };

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(v, e);
                var t, n, g, h = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n, r = b(v);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (e = n) && ("object" === c(e) || "function" == typeof e) ? e : y(this)
                });

                function v() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, v);
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return m(y(e = h.call.apply(h, [this].concat(n))), "state", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? f(Object(n), !0).forEach(function(t) {
                                m(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        expanded: []
                    }, e.props.initialState)), m(y(e), "itemRefs", []), e
                }
                return n = [{
                    key: "onPanelChange",
                    value: function(e, t) {
                        var n = this.state.expanded;
                        if (this.props.accordion) n = n[0] === e ? [] : [e];
                        else {
                            var r, o = (n = function(e) {
                                if (Array.isArray(e)) return s(e)
                            }(r = n) || function(e) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                            }(r) || l(r) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()).indexOf(e);
                            o > -1 ? n.splice(o, 1) : n.push(e)
                        }
                        var i = {
                            expanded: n
                        };
                        this.internalSetState(a.expand, i);
                        for (var c = arguments.length, u = Array(c > 2 ? c - 2 : 0), f = 2; f < c; f++) u[f - 2] = arguments[f];
                        "function" == typeof t && t.apply(void 0, u)
                    }
                }, {
                    key: "internalSetState",
                    value: function(e, t) {
                        var n = this.props,
                            r = n.stateReducer,
                            o = n.onChange,
                            i = r(e, t, this.state);
                        this.setState(i), "function" == typeof o && o(i)
                    }
                }, {
                    key: "handleKeyDown",
                    value: function(e) {
                        if (!this.props.disabled) {
                            var t = this.itemRefs;
                            if (36 === e.keyCode) {
                                e.preventDefault();
                                var n = t[0];
                                n.current && n.current.focus()
                            }
                            if (35 === e.keyCode) {
                                e.preventDefault();
                                var r = t[t.length - 1];
                                r.current && r.current.focus()
                            }
                            if (38 === e.keyCode) {
                                e.preventDefault();
                                var o = t.findIndex(function(e) {
                                    return e.current === document.activeElement
                                });
                                if (o > 0) {
                                    var i = t[o - 1];
                                    i.current && i.current.focus()
                                }
                            }
                            if (40 === e.keyCode) {
                                e.preventDefault();
                                var a = t.findIndex(function(e) {
                                    return e.current === document.activeElement
                                });
                                if (a < t.length - 1) {
                                    var c = t[a + 1];
                                    c.current && c.current.focus()
                                }
                            }
                        }
                    }
                }, {
                    key: "getItems",
                    value: function() {
                        var e = this,
                            t = this.state.expanded,
                            n = this.props,
                            o = n.accordion,
                            i = n.disabled,
                            a = n.children,
                            c = n.renderAll,
                            u = n.overrides;
                        return r.Children.map(a, function(n, a) {
                            if (n) {
                                var l = r.createRef();
                                e.itemRefs.push(l);
                                var s = n.key || String(a),
                                    f = !1;
                                f = o ? t[0] === s : t.includes(s);
                                var d = {
                                    key: s,
                                    ref: l,
                                    expanded: f || n.props.expanded,
                                    accordion: o,
                                    renderAll: c,
                                    overrides: n.props.overrides || u,
                                    disabled: n.props.disabled || i,
                                    onChange: function() {
                                        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                        return e.onPanelChange.apply(e, [s, n.props.onChange].concat(r))
                                    }
                                };
                                return r.cloneElement(n, d)
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this.props.overrides,
                            n = (void 0 === t ? {} : t).Root,
                            a = function(e) {
                                if (Array.isArray(e)) return e
                            }(e = (0, o.jb)(n, i.fC)) || function(e, t) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                    var n = [],
                                        r = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                    } catch (e) {
                                        o = !0, i = e
                                    } finally {
                                        try {
                                            r || null == c.return || c.return()
                                        } finally {
                                            if (o) throw i
                                        }
                                    }
                                    return n
                                }
                            }(e, 2) || l(e, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            c = a[0],
                            s = a[1];
                        return r.createElement(c, u({
                            "data-baseweb": "accordion",
                            $disabled: this.props.disabled,
                            $isFocusVisible: !1,
                            onKeyDown: this.handleKeyDown.bind(this)
                        }, s), this.getItems())
                    }
                }], d(v.prototype, n), g && d(v, g), v
            }(r.Component);
            m(g, "defaultProps", {
                accordion: !0,
                disabled: !1,
                initialState: {
                    expanded: []
                },
                onChange: function() {},
                overrides: {},
                renderAll: !1,
                stateReducer: function(e, t) {
                    return t
                }
            })
        },
        62049: function(e, t, n) {
            var r = n(2784),
                o = n(47618),
                i = n(58511),
                a = n(14837),
                c = n(59426);

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var p = r.forwardRef(function(e, t) {
                var n = e["aria-controls"],
                    l = e.children,
                    d = e.disabled,
                    p = void 0 !== d && d,
                    y = e.expanded,
                    b = void 0 !== y && y,
                    m = e.onChange,
                    g = void 0 === m ? function() {} : m,
                    h = e.onClick,
                    v = void 0 === h ? function() {} : h,
                    O = e.onKeyDown,
                    j = void 0 === O ? function() {} : O,
                    C = e.overrides,
                    P = void 0 === C ? {} : C,
                    w = e.title,
                    x = void 0 === w ? "" : w,
                    S = e.renderAll,
                    k = void 0 !== S && S,
                    D = f(r.useState({
                        expanded: b,
                        isFocusVisible: !1,
                        elementHeight: 0,
                        animationInProgress: !1
                    }), 2),
                    E = D[0],
                    R = D[1],
                    I = r.useCallback(function(e) {
                        (0, c.E)(e) && R(s(s({}, E), {}, {
                            isFocusVisible: !0
                        }))
                    }, [E]),
                    A = r.useCallback(function(e) {
                        E.isFocusVisible && R(s(s({}, E), {}, {
                            isFocusVisible: !1
                        }))
                    }, [E]),
                    $ = r.useCallback(function(e) {
                        p || ("function" == typeof g && g({
                            expanded: !b
                        }), "function" == typeof v && v(e))
                    }, [b, p, g, v]),
                    T = r.useCallback(function(e) {
                        p || ((13 === e.keyCode || 32 === e.keyCode) && ("function" == typeof g && g({
                            expanded: !b
                        }), 32 === e.keyCode && e.preventDefault()), "function" == typeof j && j(e))
                    }, [b, p, g, j]),
                    H = r.useRef(null);
                r.useEffect(function() {
                    if (H.current) {
                        var e = H.current.getBoundingClientRect().height;
                        b !== E.expanded ? R(s(s({}, E), {}, {
                            expanded: b,
                            animationInProgress: !0
                        })) : parseInt(E.elementHeight) !== e && R(s(s({}, E), {}, {
                            elementHeight: e ? "".concat(e, "px") : 0
                        }))
                    }
                }, [H.current, b, E.elementHeight, E.expanded, R]);
                var F = r.useMemo(function() {
                        if (!b && E.expanded) {
                            var e = H.current.getBoundingClientRect().height;
                            return R(s(s({}, E), {}, {
                                elementHeight: e ? "".concat(e, "px") : 0
                            })), E.elementHeight
                        }
                        return E.expanded ? E.animationInProgress ? E.elementHeight : "auto" : 0
                    }, [b, E.expanded, E.animationInProgress, E.elementHeight]),
                    B = {
                        $disabled: p,
                        $expanded: b,
                        $isFocusVisible: E.isFocusVisible
                    },
                    _ = P.PanelContainer,
                    z = P.Header,
                    N = P.Content,
                    V = P.ContentAnimationContainer,
                    K = P.ToggleIcon,
                    L = P.ToggleIconGroup,
                    M = f((0, i.jb)(_, a.lk), 2),
                    Z = M[0],
                    Q = M[1],
                    G = f((0, i.jb)(z, a.h4), 2),
                    U = G[0],
                    X = G[1],
                    Y = f((0, i.jb)(N, a.VY), 2),
                    W = Y[0],
                    q = Y[1],
                    J = f((0, i.jb)(V, a.D7), 2),
                    ee = J[0],
                    et = J[1],
                    en = f((0, i.jb)(L, a.bx), 2),
                    er = en[0],
                    eo = en[1],
                    ei = f((0, i.jb)(K, a.Xs), 2),
                    ea = ei[0],
                    ec = ei[1];
                return r.createElement(o.R.Consumer, null, function(e) {
                    return r.createElement(Z, u({}, B, Q), r.createElement(U, u({
                        tabIndex: 0,
                        role: "button",
                        "aria-expanded": b,
                        "aria-disabled": p || null
                    }, B, X, n ? {
                        "aria-controls": n
                    } : {}, {
                        onClick: $,
                        onKeyDown: T,
                        onFocus: (0, c.Ah)(X, I),
                        onBlur: (0, c.Z5)(X, A),
                        ref: t
                    }), x, r.createElement(ea, u({
                        viewBox: "0 0 24 24",
                        title: E.expanded ? e.accordion.collapse : e.accordion.expand,
                        size: 16
                    }, ec, B), r.createElement(er, u({}, B, eo), r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z"
                    })), r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z"
                    }))), r.createElement(ee, u({}, B, et, {
                        $height: F,
                        onTransitionEnd: function() {
                            E.animationInProgress && R(s(s({}, E), {}, {
                                animationInProgress: !1
                            }))
                        }
                    }), r.createElement(W, u({
                        ref: H
                    }, B, q, n ? {
                        id: n
                    } : {}), E.expanded || k || E.animationInProgress ? l : null)))
                })
            });
            p.displayName = "Panel", t.Z = p
        },
        14837: function(e, t, n) {
            n.d(t, {
                D7: function() {
                    return p
                },
                VY: function() {
                    return d
                },
                Xs: function() {
                    return s
                },
                bx: function() {
                    return f
                },
                fC: function() {
                    return c
                },
                h4: function() {
                    return l
                },
                lk: function() {
                    return u
                }
            });
            var r = n(50592),
                o = n(63038);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var c = (0, r.zo)("ul", {
                listStyleType: "none",
                marginBottom: 0,
                marginTop: 0,
                paddingLeft: 0,
                paddingRight: 0,
                width: "100%"
            });
            c.displayName = "Root";
            var u = (0, r.zo)("li", function(e) {
                var t = e.$expanded,
                    n = e.$theme.colors;
                return {
                    listStyleType: "none",
                    width: "100%",
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: t ? n.mono500 : n.mono400
                }
            });
            u.displayName = "PanelContainer";
            var l = (0, r.zo)("div", function(e) {
                var t = e.$disabled,
                    n = e.$isFocusVisible,
                    r = e.$theme,
                    o = r.colors,
                    i = r.sizing;
                return a(a({}, r.typography.font350), {}, {
                    color: o.contentPrimary,
                    cursor: t ? "not-allowed" : "pointer",
                    backgroundColor: o.listHeaderFill,
                    paddingTop: i.scale600,
                    paddingBottom: i.scale600,
                    paddingLeft: i.scale700,
                    paddingRight: i.scale700,
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    display: "flex",
                    alignItems: "center",
                    outline: n ? "3px solid ".concat(o.accent) : "none",
                    outlineOffset: "-3px",
                    justifyContent: "space-between",
                    ":hover": {
                        color: o.primary
                    }
                })
            });
            l.displayName = "Header";
            var s = (0, r.zo)("svg", function(e) {
                var t = e.$theme,
                    n = e.$disabled,
                    r = e.$color;
                return a(a({}, (0, o.u)(e)), {}, {
                    flexShrink: 0,
                    color: r || t.colors.contentPrimary,
                    cursor: n ? "not-allowed" : "pointer"
                })
            });
            s.displayName = "ToggleIcon";
            var f = (0, r.zo)("g", function(e) {
                var t = e.$theme;
                return {
                    transform: e.$expanded ? "rotate(0)" : "rotate(-90deg)",
                    transformOrigin: "center",
                    transitionProperty: "transform",
                    transitionDuration: t.animation.timing500,
                    transitionTimingFunction: t.animation.easeOutQuinticCurve
                }
            });
            f.displayName = "ToggleIconGroup";
            var d = (0, r.zo)("div", function(e) {
                var t = e.$theme,
                    n = t.animation,
                    r = t.colors,
                    o = t.sizing,
                    i = t.typography,
                    c = e.$expanded;
                return a(a({}, i.font200), {}, {
                    backgroundColor: r.listBodyFill,
                    color: r.contentPrimary,
                    paddingTop: o.scale800,
                    paddingBottom: o.scale1000,
                    paddingLeft: o.scale800,
                    paddingRight: o.scale800,
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    boxSizing: "border-box",
                    overflow: "hidden",
                    opacity: c ? 1 : 0,
                    visibility: c ? "visible" : "hidden",
                    transitionProperty: "opacity,visibility",
                    transitionDuration: n.timing500,
                    transitionDelay: n.timing200,
                    transitionTimingFunction: n.easeOutQuinticCurve
                })
            });
            d.displayName = "Content";
            var p = (0, r.zo)("div", function(e) {
                var t = e.$height,
                    n = e.$theme.animation;
                return {
                    height: "".concat(t),
                    overflow: "hidden",
                    transitionProperty: "height",
                    transitionDuration: n.timing500,
                    transitionTimingFunction: n.easeOutQuinticCurve
                }
            });
            p.displayName = "ContentAnimationContainer"
        }
    }
]);