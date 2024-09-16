(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [108], {
        29252: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/migrate-asi", function() {
                return r(52e3)
            }])
        },
        52e3: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return f
                }
            });
            var l = r(52322),
                n = r(90955),
                a = r(53839),
                s = r(25237),
                o = r.n(s);
            r(2784);
            var i = r(98614),
                u = r(6194);
            let d = o()(() => Promise.all([r.e(2182), r.e(3661), r.e(171), r.e(9384), r.e(4936), r.e(5527), r.e(2143), r.e(1014), r.e(9999), r.e(2879)]).then(r.bind(r, 62879)), {
                loadableGenerated: {
                    webpack: () => [62879]
                },
                ssr: !1
            });

            function c() {
                let {
                    t: e
                } = (0, i.$G)("common");
                return (0, l.jsx)(u.D, {
                    children: (0, l.jsx)(d, {
                        title: e("ASI_ALLIANCE"),
                        description: e("MIGRATION_PHASE_1"),
                        supportedTokens: "FET"
                    })
                })
            }
            c.SeoLayout = (0, l.jsx)(n.Z, {
                properties: a.Z.migrate
            });
            var f = !0;
            t.default = c
        },
        6194: function(e, t, r) {
            "use strict";
            r.d(t, {
                D: function() {
                    return O
                }
            });
            var l = r(52322);
            r(2784);
            var n = r(14013),
                a = r(24373),
                s = r(12522),
                o = r(39097),
                i = r.n(o),
                u = r(78246),
                d = r(36854),
                c = r(98614),
                f = r(82857),
                h = r(77466),
                m = r(93370);
            let p = () => {
                let {
                    t: e
                } = (0, c.$G)("common");
                return (0, l.jsxs)(h._, {
                    children: [(0, l.jsx)(u.z, {
                        component: i(),
                        style: "outline",
                        href: d.e.urlBuySDAO,
                        target: "_blank",
                        children: e("HEADER.BUY_SDAO")
                    }), (0, l.jsxs)(u.z, {
                        component: i(),
                        href: "/launchpad",
                        style: "ghost",
                        className: "gap-2",
                        children: ["Launchpad", (0, l.jsx)(f.J, {
                            width: 24,
                            height: 24,
                            color: "#B4BCD0",
                            icon: "rocket_launch"
                        })]
                    }), (0, l.jsx)(m.m, {})]
                })
            };
            var _ = r(12849),
                b = r(82876),
                x = r(61135);
            let y = e => {
                    let {
                        children: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "pt-4",
                        children: (0, l.jsx)("div", {
                            className: "gap flex flex-col items-start",
                            children: t
                        })
                    })
                },
                j = e => {
                    let {
                        children: t
                    } = e;
                    return (0, l.jsx)(x.Z, {
                        className: "pb-1 text-xs text-[#A0ABBE]",
                        children: t
                    })
                };
            var g = r(41707),
                v = r(95180),
                E = r(61335),
                w = r(98174);
            let C = e => {
                let {
                    active: t,
                    label: r,
                    href: n,
                    target: a
                } = e;
                return (0, l.jsx)("div", {
                    className: "py-2 pl-9",
                    children: (0, l.jsx)(i(), {
                        href: n,
                        target: a,
                        children: (0, l.jsx)(x.Z, {
                            className: (0, w.m)((0, E.cx)("inline-block text-sm text-[#B4BCD0]", t && "text-[#CCA4FF]")),
                            children: r
                        })
                    })
                })
            };
            var N = r(3866);
            let A = () => {
                    let e = (0, b.usePathname)(),
                        {
                            t
                        } = (0, c.$G)("common"),
                        r = (0, N.K)(t);
                    return (0, l.jsx)("nav", {
                        className: "flex flex-grow flex-col px-14 py-14",
                        children: r.map((t, r) => (0, l.jsxs)(y, {
                            children: [t.label && (0, l.jsx)(j, {
                                children: t.label
                            }), t.items.map(t => {
                                var r;
                                return (0, l.jsx)(g.s, {
                                    label: t.label,
                                    href: t.href,
                                    target: t.target,
                                    active: "/" !== t.href && (t.href && (0, _.z)(t.href, e) || t.items && (0, _.$)(t.items, e)),
                                    icon: (0, l.jsx)(v.Z, {
                                        active: t.href && (0, _.z)(t.href, e) || t.items && (0, _.$)(t.items, e),
                                        icon: t.icon
                                    }),
                                    endEnhancer: t.endIcon ? (0, l.jsx)(v.Z, {
                                        className: "ml-auto",
                                        icon: t.endIcon
                                    }) : null,
                                    children: null === (r = t.items) || void 0 === r ? void 0 : r.map(t => (0, l.jsx)(C, {
                                        active: (0, _.z)(t.href, e),
                                        label: t.label,
                                        href: t.href
                                    }, t.label))
                                }, t.label + "_" + t.icon)
                            })]
                        }, t.label + r))
                    })
                },
                O = e => {
                    let {
                        children: t,
                        sidebar: r = !0,
                        breadcrumbs: o = !0
                    } = e, i = (0, n.d)();
                    return i ? (0, l.jsx)(s.n, {
                        menu: (0, l.jsx)(A, {}),
                        children: t
                    }) : (0, l.jsx)(a.S, {
                        header: (0, l.jsx)(p, {}),
                        sidebar: r,
                        breadcrumbs: o,
                        children: t
                    })
                }
        },
        93370: function(e, t, r) {
            "use strict";
            r.d(t, {
                m: function() {
                    return c
                }
            });
            var l = r(52322),
                n = r(78246),
                a = r(67438);
            r(2784);
            var s = r(98614),
                o = r(17129),
                i = r(50068),
                u = r(16270),
                d = r(31754);
            let c = () => {
                let {
                    t: e
                } = (0, s.$G)("common"), t = (0, o.T)(), r = (0, i.mA)(), c = (0, d.Z)();
                return r.isConnected && c ? (0, l.jsx)(a.w, {
                    button: {
                        className: "bg-[#191A1E]"
                    }
                }) : (0, l.jsx)(n.z, {
                    onClick: () => {
                        t((0, u.ad)(!0))
                    },
                    children: e("HEADER.CONNECT_WALLET")
                })
            }
        },
        56164: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    noSSR: function() {
                        return s
                    },
                    default: function() {
                        return o
                    }
                });
            let l = r(17653),
                n = (r(2784), l._(r(56890)));

            function a(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function s(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function o(e, t) {
                let r = n.default,
                    l = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: r,
                                pastDelay: l
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? l.loader = () => e : "function" == typeof e ? l.loader = e : "object" == typeof e && (l = { ...l,
                    ...e
                }), l = { ...l,
                    ...t
                };
                let o = l.loader;
                return (l.loadableGenerated && (l = { ...l,
                    ...l.loadableGenerated
                }, delete l.loadableGenerated), "boolean" != typeof l.ssr || l.ssr) ? r({ ...l,
                    loader: () => null != o ? o().then(a) : Promise.resolve(a(() => null))
                }) : (delete l.webpack, delete l.modules, s(r, l))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        73254: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let l = r(17653),
                n = l._(r(2784)),
                a = n.default.createContext(null)
        },
        56890: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            let l = r(17653),
                n = l._(r(2784)),
                a = r(73254),
                s = [],
                o = [],
                i = !1;

            function u(e) {
                let t = e(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = t.then(e => (r.loading = !1, r.loaded = e, e)).catch(e => {
                    throw r.loading = !1, r.error = e, e
                }), r
            }
            class d {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = { ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function c(e) {
                return function(e, t) {
                    let r = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        l = null;

                    function s() {
                        if (!l) {
                            let t = new d(e, r);
                            l = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return l.promise()
                    }
                    if (!i) {
                        let e = r.webpack ? r.webpack() : r.modules;
                        e && o.push(t => {
                            for (let r of e)
                                if (t.includes(r)) return s()
                        })
                    }

                    function u(e, t) {
                        ! function() {
                            s();
                            let e = n.default.useContext(a.LoadableContext);
                            e && Array.isArray(r.modules) && r.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let o = n.default.useSyncExternalStore(l.subscribe, l.getCurrentValue, l.getCurrentValue);
                        return n.default.useImperativeHandle(t, () => ({
                            retry: l.retry
                        }), []), n.default.useMemo(() => {
                            var t;
                            return o.loading || o.error ? n.default.createElement(r.loading, {
                                isLoading: o.loading,
                                pastDelay: o.pastDelay,
                                timedOut: o.timedOut,
                                error: o.error,
                                retry: l.retry
                            }) : o.loaded ? n.default.createElement((t = o.loaded) && t.default ? t.default : t, e) : null
                        }, [e, o])
                    }
                    return u.preload = () => s(), u.displayName = "LoadableComponent", n.default.forwardRef(u)
                }(u, e)
            }

            function f(e, t) {
                let r = [];
                for (; e.length;) {
                    let l = e.pop();
                    r.push(l(t))
                }
                return Promise.all(r).then(() => {
                    if (e.length) return f(e, t)
                })
            }
            c.preloadAll = () => new Promise((e, t) => {
                f(s).then(e, t)
            }), c.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let r = () => (i = !0, t());
                f(o, e).then(r, r)
            })), window.__NEXT_PRELOADREADY = c.preloadReady;
            let h = c
        },
        25237: function(e, t, r) {
            e.exports = r(56164)
        }
    },
    function(e) {
        e.O(0, [7642, 8777, 9866, 9774, 2888, 179], function() {
            return e(e.s = 29252)
        }), _N_E = e.O()
    }
]);