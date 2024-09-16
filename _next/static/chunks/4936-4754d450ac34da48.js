"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4936], {
        97477: function(e, t, r) {
            r.d(t, {
                H: function() {
                    return P
                }
            });
            var n = r(35239),
                o = r(10528),
                i = r(75398),
                l = r(84427),
                s = r(56938),
                a = r(38637),
                u = r(58171),
                c = r(44520),
                g = r(57036),
                h = r(75707),
                d = function(e, t, r, n) {
                    return new(r || (r = Promise))(function(o, i) {
                        function l(e) {
                            try {
                                a(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            try {
                                a(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(l, s)
                        }
                        a((n = n.apply(e, t || [])).next())
                    })
                };
            let f = new g.Logger(h.i);

            function m() {
                return new Date().getTime()
            }

            function p(e) {
                let t = null;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (null == n) return null;
                    t ? t.name === n.name && t.chainId === n.chainId && (t.ensAddress === n.ensAddress || null == t.ensAddress && null == n.ensAddress) || f.throwArgumentError("provider mismatch", "networks", e) : t = n
                }
                return t
            }

            function w(e, t) {
                e = e.slice().sort();
                let r = Math.floor(e.length / 2);
                if (e.length % 2) return e[r];
                let n = e[r - 1],
                    o = e[r];
                return null != t && Math.abs(n - o) > t ? null : (n + o) / 2
            }

            function k(e) {
                if (null === e) return "null";
                if ("number" == typeof e || "boolean" == typeof e) return JSON.stringify(e);
                if ("string" == typeof e) return e;
                if (o.O$.isBigNumber(e)) return e.toString();
                if (Array.isArray(e)) return JSON.stringify(e.map(e => k(e)));
                if ("object" == typeof e) {
                    let t = Object.keys(e);
                    return t.sort(), "{" + t.map(t => {
                        let r = e[t];
                        return r = "function" == typeof r ? "[function]" : k(r), JSON.stringify(t) + ":" + r
                    }).join(",") + "}"
                }
                throw Error("unknown value type: " + typeof e)
            }
            let b = 1;

            function y(e) {
                let t = null,
                    r = null,
                    n = new Promise(n => {
                        r = setTimeout(t = function() {
                            r && (clearTimeout(r), r = null), n()
                        }, e)
                    });
                return {
                    cancel: t,
                    getPromise: function() {
                        return n
                    },
                    wait: e => n = n.then(e)
                }
            }
            let v = [g.Logger.errors.CALL_EXCEPTION, g.Logger.errors.INSUFFICIENT_FUNDS, g.Logger.errors.NONCE_EXPIRED, g.Logger.errors.REPLACEMENT_UNDERPRICED, g.Logger.errors.UNPREDICTABLE_GAS_LIMIT],
                E = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

            function N(e, t) {
                let r = {
                    weight: e.weight
                };
                return Object.defineProperty(r, "provider", {
                    get: () => e.provider
                }), e.start && (r.start = e.start), t && (r.duration = t - e.start), e.done && (e.error ? r.error = e.error : r.result = e.result || null), r
            }

            function T(e, t) {
                return d(this, void 0, void 0, function*() {
                    let r = e.provider;
                    return null != r.blockNumber && r.blockNumber >= t || -1 === t ? r : (0, a.poll)(() => new Promise((n, o) => {
                        setTimeout(function() {
                            return r.blockNumber >= t ? n(r) : e.cancelled ? n(null) : n(void 0)
                        }, 0)
                    }), {
                        oncePoll: r
                    })
                })
            }
            class P extends u.Zk {
                constructor(e, t) {
                    0 === e.length && f.throwArgumentError("missing providers", "providers", e);
                    let r = e.map((e, t) => {
                            if (n.zt.isProvider(e)) {
                                let t = (0, c.Gp)(e) ? 2e3 : 750;
                                return Object.freeze({
                                    provider: e,
                                    weight: 1,
                                    stallTimeout: t,
                                    priority: 1
                                })
                            }
                            let r = (0, l.shallowCopy)(e);
                            null == r.priority && (r.priority = 1), null == r.stallTimeout && (r.stallTimeout = (0, c.Gp)(e) ? 2e3 : 750), null == r.weight && (r.weight = 1);
                            let o = r.weight;
                            return (o % 1 || o > 512 || o < 1) && f.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${t}].weight`, o), Object.freeze(r)
                        }),
                        o = r.reduce((e, t) => e + t.weight, 0);
                    null == t ? t = o / 2 : t > o && f.throwArgumentError("quorum will always fail; larger than total weight", "quorum", t);
                    let i = p(r.map(e => e.provider.network));
                    null == i && (i = new Promise((e, t) => {
                        setTimeout(() => {
                            this.detectNetwork().then(e, t)
                        }, 0)
                    })), super(i), (0, l.defineReadOnly)(this, "providerConfigs", Object.freeze(r)), (0, l.defineReadOnly)(this, "quorum", t), this._highestBlockNumber = -1
                }
                detectNetwork() {
                    return d(this, void 0, void 0, function*() {
                        let e = yield Promise.all(this.providerConfigs.map(e => e.provider.getNetwork()));
                        return p(e)
                    })
                }
                perform(e, t) {
                    return d(this, void 0, void 0, function*() {
                        if ("sendTransaction" === e) {
                            let e = yield Promise.all(this.providerConfigs.map(e => e.provider.sendTransaction(t.signedTransaction).then(e => e.hash, e => e)));
                            for (let t = 0; t < e.length; t++) {
                                let r = e[t];
                                if ("string" == typeof r) return r
                            }
                            throw e[0]
                        } - 1 === this._highestBlockNumber && "getBlockNumber" !== e && (yield this.getBlockNumber());
                        let r = function(e, t, r) {
                                var n, o;
                                let i = k;
                                switch (t) {
                                    case "getBlockNumber":
                                        return function(t) {
                                            let r = t.map(e => e.result),
                                                n = w(t.map(e => e.result), 2);
                                            if (null != n) return n = Math.ceil(n), r.indexOf(n + 1) >= 0 && n++, n >= e._highestBlockNumber && (e._highestBlockNumber = n), e._highestBlockNumber
                                        };
                                    case "getGasPrice":
                                        return function(e) {
                                            let t = e.map(e => e.result);
                                            return t.sort(), t[Math.floor(t.length / 2)]
                                        };
                                    case "getEtherPrice":
                                        return function(e) {
                                            return w(e.map(e => e.result))
                                        };
                                    case "getBalance":
                                    case "getTransactionCount":
                                    case "getCode":
                                    case "getStorageAt":
                                    case "call":
                                    case "estimateGas":
                                    case "getLogs":
                                        break;
                                    case "getTransaction":
                                    case "getTransactionReceipt":
                                        i = function(e) {
                                            return null == e ? null : ((e = (0, l.shallowCopy)(e)).confirmations = -1, k(e))
                                        };
                                        break;
                                    case "getBlock":
                                        i = r.includeTransactions ? function(e) {
                                            return null == e ? null : ((e = (0, l.shallowCopy)(e)).transactions = e.transactions.map(e => ((e = (0, l.shallowCopy)(e)).confirmations = -1, e)), k(e))
                                        } : function(e) {
                                            return null == e ? null : k(e)
                                        };
                                        break;
                                    default:
                                        throw Error("unknown method: " + t)
                                }
                                return n = i, o = e.quorum,
                                    function(e) {
                                        let t = {};
                                        e.forEach(e => {
                                            let r = n(e.result);
                                            t[r] || (t[r] = {
                                                count: 0,
                                                result: e.result
                                            }), t[r].count++
                                        });
                                        let r = Object.keys(t);
                                        for (let e = 0; e < r.length; e++) {
                                            let n = t[r[e]];
                                            if (n.count >= o) return n.result
                                        }
                                    }
                            }(this, e, t),
                            n = (0, s.y)(this.providerConfigs.map(l.shallowCopy));
                        n.sort((e, t) => e.priority - t.priority);
                        let o = this._highestBlockNumber,
                            a = 0,
                            u = !0;
                        for (;;) {
                            let s = m(),
                                c = n.filter(e => e.runner && s - e.start < e.stallTimeout).reduce((e, t) => e + t.weight, 0);
                            for (; c < this.quorum && a < n.length;) {
                                let r = n[a++],
                                    s = b++;
                                r.start = m(), r.staller = y(r.stallTimeout), r.staller.wait(() => {
                                    r.staller = null
                                }), r.runner = (function(e, t, r, n) {
                                    return d(this, void 0, void 0, function*() {
                                        let o = e.provider;
                                        switch (r) {
                                            case "getBlockNumber":
                                            case "getGasPrice":
                                                return o[r]();
                                            case "getEtherPrice":
                                                if (o.getEtherPrice) return o.getEtherPrice();
                                                break;
                                            case "getBalance":
                                            case "getTransactionCount":
                                            case "getCode":
                                                return n.blockTag && (0, i.isHexString)(n.blockTag) && (o = yield T(e, t)), o[r](n.address, n.blockTag || "latest");
                                            case "getStorageAt":
                                                return n.blockTag && (0, i.isHexString)(n.blockTag) && (o = yield T(e, t)), o.getStorageAt(n.address, n.position, n.blockTag || "latest");
                                            case "getBlock":
                                                return n.blockTag && (0, i.isHexString)(n.blockTag) && (o = yield T(e, t)), o[n.includeTransactions ? "getBlockWithTransactions" : "getBlock"](n.blockTag || n.blockHash);
                                            case "call":
                                            case "estimateGas":
                                                if (n.blockTag && (0, i.isHexString)(n.blockTag) && (o = yield T(e, t)), "call" === r && n.blockTag) return o[r](n.transaction, n.blockTag);
                                                return o[r](n.transaction);
                                            case "getTransaction":
                                            case "getTransactionReceipt":
                                                return o[r](n.transactionHash);
                                            case "getLogs":
                                                {
                                                    let r = n.filter;
                                                    return (r.fromBlock && (0, i.isHexString)(r.fromBlock) || r.toBlock && (0, i.isHexString)(r.toBlock)) && (o = yield T(e, t)),
                                                    o.getLogs(r)
                                                }
                                        }
                                        return f.throwError("unknown method error", g.Logger.errors.UNKNOWN_ERROR, {
                                            method: r,
                                            params: n
                                        })
                                    })
                                })(r, o, e, t).then(n => {
                                    r.done = !0, r.result = n, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: s,
                                        backend: N(r, m()),
                                        request: {
                                            method: e,
                                            params: (0, l.deepCopy)(t)
                                        },
                                        provider: this
                                    })
                                }, n => {
                                    r.done = !0, r.error = n, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: s,
                                        backend: N(r, m()),
                                        request: {
                                            method: e,
                                            params: (0, l.deepCopy)(t)
                                        },
                                        provider: this
                                    })
                                }), this.listenerCount("debug") && this.emit("debug", {
                                    action: "request",
                                    rid: s,
                                    backend: N(r, null),
                                    request: {
                                        method: e,
                                        params: (0, l.deepCopy)(t)
                                    },
                                    provider: this
                                }), c += r.weight
                            }
                            let h = [];
                            n.forEach(e => {
                                !e.done && e.runner && (h.push(e.runner), e.staller && h.push(e.staller.getPromise()))
                            }), h.length && (yield Promise.race(h));
                            let p = n.filter(e => e.done && null == e.error);
                            if (p.length >= this.quorum) {
                                let e = r(p);
                                if (void 0 !== e) return n.forEach(e => {
                                    e.staller && e.staller.cancel(), e.cancelled = !0
                                }), e;
                                u || (yield y(100).getPromise()), u = !1
                            }
                            let w = n.reduce((e, t) => {
                                if (!t.done || null == t.error) return e;
                                let r = t.error.code;
                                return v.indexOf(r) >= 0 && (e[r] || (e[r] = {
                                    error: t.error,
                                    weight: 0
                                }), e[r].weight += t.weight), e
                            }, {});
                            if (Object.keys(w).forEach(e => {
                                    let t = w[e];
                                    if (t.weight < this.quorum) return;
                                    n.forEach(e => {
                                        e.staller && e.staller.cancel(), e.cancelled = !0
                                    });
                                    let r = t.error,
                                        o = {};
                                    E.forEach(e => {
                                        null != r[e] && (o[e] = r[e])
                                    }), f.throwError(r.reason || r.message, e, o)
                                }), 0 === n.filter(e => !e.done).length) break
                        }
                        return n.forEach(e => {
                            e.staller && e.staller.cancel(), e.cancelled = !0
                        }), f.throwError("failed to meet quorum", g.Logger.errors.SERVER_ERROR, {
                            method: e,
                            params: t,
                            results: n.map(e => N(e)),
                            provider: this
                        })
                    })
                }
            }
        },
        68930: function(e, t, r) {
            r.d(t, {
                c: function() {
                    return a
                },
                l: function() {
                    return u
                }
            });
            var n = r(84427),
                o = r(57036),
                i = r(75707),
                l = r(1005);
            let s = new o.Logger(i.i);
            class a extends l.r {
                detectNetwork() {
                    var e, t, r, i;
                    let l = Object.create(null, {
                        detectNetwork: {
                            get: () => super.detectNetwork
                        }
                    });
                    return e = this, t = void 0, r = void 0, i = function*() {
                        let e = this.network;
                        return null == e && ((e = yield l.detectNetwork.call(this)) || s.throwError("no network detected", o.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && ((0, n.defineReadOnly)(this, "_network", e), this.emit("network", e, null))), e
                    }, new(r || (r = Promise))(function(n, o) {
                        function l(e) {
                            try {
                                a(i.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                a(i.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(l, s)
                        }
                        a((i = i.apply(e, t || [])).next())
                    })
                }
            }
            class u extends a {
                constructor(e, t) {
                    s.checkAbstract(new.target, u), e = (0, n.getStatic)(new.target, "getNetwork")(e), t = (0, n.getStatic)(new.target, "getApiKey")(t);
                    let r = (0, n.getStatic)(new.target, "getUrl")(e, t);
                    super(r, e), "string" == typeof t ? (0, n.defineReadOnly)(this, "apiKey", t) : null != t && Object.keys(t).forEach(e => {
                        (0, n.defineReadOnly)(this, e, t[e])
                    })
                }
                _startPending() {
                    s.warn("WARNING: API provider does not support pending filters")
                }
                isCommunityResource() {
                    return !1
                }
                getSigner(e) {
                    return s.throwError("API provider does not support signing", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getSigner"
                    })
                }
                listAccounts() {
                    return Promise.resolve([])
                }
                static getApiKey(e) {
                    return e
                }
                static getUrl(e, t) {
                    return s.throwError("not implemented; sub-classes must override getUrl", o.Logger.errors.NOT_IMPLEMENTED, {
                        operation: "getUrl"
                    })
                }
            }
        },
        56938: function(e, t, r) {
            r.d(t, {
                y: function() {
                    return n
                }
            });

            function n(e) {
                e = e.slice();
                for (let t = e.length - 1; t > 0; t--) {
                    let r = Math.floor(Math.random() * (t + 1)),
                        n = e[t];
                    e[t] = e[r], e[r] = n
                }
                return e
            }
        }
    }
]);