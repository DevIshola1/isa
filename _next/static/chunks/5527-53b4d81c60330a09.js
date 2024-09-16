"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5527], {
        79467: function(e, t, r) {
            r.r(t), r.d(t, {
                AlchemyProvider: function() {
                    return v
                },
                AlchemyWebSocketProvider: function() {
                    return w
                },
                AnkrProvider: function() {
                    return _
                },
                BaseProvider: function() {
                    return i.Zk
                },
                CloudflareProvider: function() {
                    return S
                },
                EtherscanProvider: function() {
                    return C
                },
                FallbackProvider: function() {
                    return B.H
                },
                Formatter: function() {
                    return a.Mb
                },
                InfuraProvider: function() {
                    return H
                },
                InfuraWebSocketProvider: function() {
                    return J
                },
                IpcProvider: function() {
                    return D
                },
                JsonRpcBatchProvider: function() {
                    return W
                },
                JsonRpcProvider: function() {
                    return l.r
                },
                JsonRpcSigner: function() {
                    return l.C
                },
                NodesmithProvider: function() {
                    return F
                },
                PocketProvider: function() {
                    return V
                },
                Provider: function() {
                    return o.zt
                },
                Resolver: function() {
                    return i.H2
                },
                StaticJsonRpcProvider: function() {
                    return y.c
                },
                UrlJsonRpcProvider: function() {
                    return y.l
                },
                Web3Provider: function() {
                    return Q.Q
                },
                WebSocketProvider: function() {
                    return f
                },
                getDefaultProvider: function() {
                    return Z
                },
                getNetwork: function() {
                    return n.H
                },
                isCommunityResourcable: function() {
                    return a.Ed
                },
                isCommunityResource: function() {
                    return a.Gp
                },
                showThrottleMessage: function() {
                    return a.vh
                }
            });
            var o = r(35239),
                n = r(62678),
                i = r(58171),
                s = r(84427),
                a = r(44520),
                c = r(10528),
                l = r(1005),
                u = r(57036),
                p = r(75707);
            let h = null;
            try {
                if (h = WebSocket, null == h) throw Error("inject please")
            } catch (t) {
                let e = new u.Logger(p.i);
                h = function() {
                    e.throwError("WebSockets not supported in this environment", u.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new WebSocket()"
                    })
                }
            }
            var d = function(e, t, r, o) {
                return new(r || (r = Promise))(function(n, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                })
            };
            let g = new u.Logger(p.i),
                m = 1;
            class f extends l.r {
                constructor(e, t) {
                    "any" === t && g.throwError("WebSocketProvider does not support 'any' network yet", u.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "network:any"
                    }), "string" == typeof e ? super(e, t) : super("_websocket", t), this._pollingInterval = -1, this._wsReady = !1, "string" == typeof e ? (0, s.defineReadOnly)(this, "_websocket", new h(this.connection.url)) : (0, s.defineReadOnly)(this, "_websocket", e), (0, s.defineReadOnly)(this, "_requests", {}), (0, s.defineReadOnly)(this, "_subs", {}), (0, s.defineReadOnly)(this, "_subIds", {}), (0, s.defineReadOnly)(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
                        this._wsReady = !0, Object.keys(this._requests).forEach(e => {
                            this.websocket.send(this._requests[e].payload)
                        })
                    }, this.websocket.onmessage = e => {
                        let t = e.data,
                            r = JSON.parse(t);
                        if (null != r.id) {
                            let e = String(r.id),
                                o = this._requests[e];
                            if (delete this._requests[e], void 0 !== r.result) o.callback(null, r.result), this.emit("debug", {
                                action: "response",
                                request: JSON.parse(o.payload),
                                response: r.result,
                                provider: this
                            });
                            else {
                                let e = null;
                                r.error ? (e = Error(r.error.message || "unknown error"), (0, s.defineReadOnly)(e, "code", r.error.code || null), (0, s.defineReadOnly)(e, "response", t)) : e = Error("unknown error"), o.callback(e, void 0), this.emit("debug", {
                                    action: "response",
                                    error: e,
                                    request: JSON.parse(o.payload),
                                    provider: this
                                })
                            }
                        } else if ("eth_subscription" === r.method) {
                            let e = this._subs[r.params.subscription];
                            e && e.processFunc(r.params.result)
                        } else console.warn("this should not happen")
                    };
                    let r = setInterval(() => {
                        this.emit("poll")
                    }, 1e3);
                    r.unref && r.unref()
                }
                get websocket() {
                    return this._websocket
                }
                detectNetwork() {
                    return this._detectNetwork
                }
                get pollingInterval() {
                    return 0
                }
                resetEventsBlock(e) {
                    g.throwError("cannot reset events block on WebSocketProvider", u.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "resetEventBlock"
                    })
                }
                set pollingInterval(e) {
                    g.throwError("cannot set polling interval on WebSocketProvider", u.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPollingInterval"
                    })
                }
                poll() {
                    return d(this, void 0, void 0, function*() {
                        return null
                    })
                }
                set polling(e) {
                    e && g.throwError("cannot set polling on WebSocketProvider", u.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPolling"
                    })
                }
                send(e, t) {
                    let r = m++;
                    return new Promise((o, n) => {
                        let i = JSON.stringify({
                            method: e,
                            params: t,
                            id: r,
                            jsonrpc: "2.0"
                        });
                        this.emit("debug", {
                            action: "request",
                            request: JSON.parse(i),
                            provider: this
                        }), this._requests[String(r)] = {
                            callback: function(e, t) {
                                return e ? n(e) : o(t)
                            },
                            payload: i
                        }, this._wsReady && this.websocket.send(i)
                    })
                }
                static defaultUrl() {
                    return "ws://localhost:8546"
                }
                _subscribe(e, t, r) {
                    return d(this, void 0, void 0, function*() {
                        let o = this._subIds[e];
                        null == o && (o = Promise.all(t).then(e => this.send("eth_subscribe", e)), this._subIds[e] = o);
                        let n = yield o;
                        this._subs[n] = {
                            tag: e,
                            processFunc: r
                        }
                    })
                }
                _startEvent(e) {
                    switch (e.type) {
                        case "block":
                            this._subscribe("block", ["newHeads"], e => {
                                let t = c.O$.from(e.number).toNumber();
                                this._emitted.block = t, this.emit("block", t)
                            });
                            break;
                        case "pending":
                            this._subscribe("pending", ["newPendingTransactions"], e => {
                                this.emit("pending", e)
                            });
                            break;
                        case "filter":
                            this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], t => {
                                null == t.removed && (t.removed = !1), this.emit(e.filter, this.formatter.filterLog(t))
                            });
                            break;
                        case "tx":
                            {
                                let t = e => {
                                    let t = e.hash;
                                    this.getTransactionReceipt(t).then(e => {
                                        e && this.emit(t, e)
                                    })
                                };t(e),
                                this._subscribe("tx", ["newHeads"], e => {
                                    this._events.filter(e => "tx" === e.type).forEach(t)
                                });
                                break
                            }
                        case "debug":
                        case "poll":
                        case "willPoll":
                        case "didPoll":
                        case "error":
                            break;
                        default:
                            console.log("unhandled:", e)
                    }
                }
                _stopEvent(e) {
                    let t = e.tag;
                    if ("tx" === e.type) {
                        if (this._events.filter(e => "tx" === e.type).length) return;
                        t = "tx"
                    } else if (this.listenerCount(e.event)) return;
                    let r = this._subIds[t];
                    r && (delete this._subIds[t], r.then(e => {
                        this._subs[e] && (delete this._subs[e], this.send("eth_unsubscribe", [e]))
                    }))
                }
                destroy() {
                    return d(this, void 0, void 0, function*() {
                        this.websocket.readyState === h.CONNECTING && (yield new Promise(e => {
                            this.websocket.onopen = function() {
                                e(!0)
                            }, this.websocket.onerror = function() {
                                e(!1)
                            }
                        })), this.websocket.close(1e3)
                    })
                }
            }
            var y = r(68930);
            let b = new u.Logger(p.i),
                k = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
            class w extends f {
                constructor(e, t) {
                    let r = new v(e, t),
                        o = r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi.");
                    super(o, r.network), (0, s.defineReadOnly)(this, "apiKey", r.apiKey)
                }
                isCommunityResource() {
                    return this.apiKey === k
                }
            }
            class v extends y.l {
                static getWebSocketProvider(e, t) {
                    return new w(e, t)
                }
                static getApiKey(e) {
                    return null == e ? k : (e && "string" != typeof e && b.throwArgumentError("invalid apiKey", "apiKey", e), e)
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e.name) {
                        case "homestead":
                            r = "eth-mainnet.alchemyapi.io/v2/";
                            break;
                        case "goerli":
                            r = "eth-goerli.g.alchemy.com/v2/";
                            break;
                        case "matic":
                            r = "polygon-mainnet.g.alchemy.com/v2/";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.g.alchemy.com/v2/";
                            break;
                        case "arbitrum":
                            r = "arb-mainnet.g.alchemy.com/v2/";
                            break;
                        case "arbitrum-goerli":
                            r = "arb-goerli.g.alchemy.com/v2/";
                            break;
                        case "optimism":
                            r = "opt-mainnet.g.alchemy.com/v2/";
                            break;
                        case "optimism-goerli":
                            r = "opt-goerli.g.alchemy.com/v2/";
                            break;
                        default:
                            b.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return {
                        allowGzip: !0,
                        url: "https://" + r + t,
                        throttleCallback: (e, r) => (t === k && (0, a.vh)(), Promise.resolve(!0))
                    }
                }
                isCommunityResource() {
                    return this.apiKey === k
                }
            }
            let E = new u.Logger(p.i),
                P = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
            class _ extends y.l {
                isCommunityResource() {
                    return this.apiKey === P
                }
                static getApiKey(e) {
                    return null == e ? P : e
                }
                static getUrl(e, t) {
                    null == t && (t = P);
                    let r = {
                        allowGzip: !0,
                        url: "https://" + function(e) {
                            switch (e) {
                                case "homestead":
                                    return "rpc.ankr.com/eth/";
                                case "ropsten":
                                    return "rpc.ankr.com/eth_ropsten/";
                                case "rinkeby":
                                    return "rpc.ankr.com/eth_rinkeby/";
                                case "goerli":
                                    return "rpc.ankr.com/eth_goerli/";
                                case "matic":
                                    return "rpc.ankr.com/polygon/";
                                case "arbitrum":
                                    return "rpc.ankr.com/arbitrum/"
                            }
                            return E.throwArgumentError("unsupported network", "name", e)
                        }(e.name) + t,
                        throttleCallback: (e, r) => (t.apiKey === P && (0, a.vh)(), Promise.resolve(!0))
                    };
                    return null != t.projectSecret && (r.user = "", r.password = t.projectSecret), r
                }
            }
            let R = new u.Logger(p.i);
            class S extends y.l {
                static getApiKey(e) {
                    return null != e && R.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e), null
                }
                static getUrl(e, t) {
                    let r = null;
                    return "homestead" === e.name ? r = "https://cloudflare-eth.com/" : R.throwArgumentError("unsupported network", "network", arguments[0]), r
                }
                perform(e, t) {
                    var r, o, n, i;
                    let s = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return r = this, o = void 0, n = void 0, i = function*() {
                        if ("getBlockNumber" === e) {
                            let e = yield s.perform.call(this, "getBlock", {
                                blockTag: "latest"
                            });
                            return e.number
                        }
                        return s.perform.call(this, e, t)
                    }, new(n || (n = Promise))(function(e, t) {
                        function s(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function c(t) {
                            var r;
                            t.done ? e(t.value) : ((r = t.value) instanceof n ? r : new n(function(e) {
                                e(r)
                            })).then(s, a)
                        }
                        c((i = i.apply(r, o || [])).next())
                    })
                }
            }
            var I = r(75398),
                x = r(13353),
                N = r(38637),
                O = function(e, t, r, o) {
                    return new(r || (r = Promise))(function(n, i) {
                        function s(e) {
                            try {
                                c(o.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(o.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(s, a)
                        }
                        c((o = o.apply(e, t || [])).next())
                    })
                };
            let A = new u.Logger(p.i);

            function T(e) {
                let t = {};
                for (let r in e) {
                    if (null == e[r]) continue;
                    let o = e[r];
                    ("type" !== r || 0 !== o) && (o = ({
                        type: !0,
                        gasLimit: !0,
                        gasPrice: !0,
                        maxFeePerGs: !0,
                        maxPriorityFeePerGas: !0,
                        nonce: !0,
                        value: !0
                    })[r] ? (0, I.hexValue)((0, I.hexlify)(o)) : "accessList" === r ? "[" + (0, x.accessListify)(o).map(e => `{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`).join(",") + "]" : (0, I.hexlify)(o), t[r] = o)
                }
                return t
            }

            function j(e) {
                if (0 == e.status && ("No records found" === e.message || "No transactions found" === e.message)) return e.result;
                if (1 != e.status || "string" != typeof e.message || !e.message.match(/^OK/)) {
                    let t = Error("invalid response");
                    throw t.result = JSON.stringify(e), (e.result || "").toLowerCase().indexOf("rate limit") >= 0 && (t.throttleRetry = !0), t
                }
                return e.result
            }

            function L(e) {
                if (e && 0 == e.status && "NOTOK" == e.message && (e.result || "").toLowerCase().indexOf("rate limit") >= 0) {
                    let t = Error("throttled response");
                    throw t.result = JSON.stringify(e), t.throttleRetry = !0, t
                }
                if ("2.0" != e.jsonrpc) {
                    let t = Error("invalid response");
                    throw t.result = JSON.stringify(e), t
                }
                if (e.error) {
                    let t = Error(e.error.message || "unknown error");
                    throw e.error.code && (t.code = e.error.code), e.error.data && (t.data = e.error.data), t
                }
                return e.result
            }

            function K(e) {
                if ("pending" === e) throw Error("pending not supported");
                return "latest" === e ? e : parseInt(e.substring(2), 16)
            }

            function U(e, t, r) {
                if ("call" === e && t.code === u.Logger.errors.SERVER_ERROR) {
                    let e = t.error;
                    if (e && (e.message.match(/reverted/i) || e.message.match(/VM execution error/i))) {
                        let r = e.data;
                        if (r && (r = "0x" + r.replace(/^.*0x/i, "")), (0, I.isHexString)(r)) return r;
                        A.throwError("missing revert data in call exception", u.Logger.errors.CALL_EXCEPTION, {
                            error: t,
                            data: "0x"
                        })
                    }
                }
                let o = t.message;
                throw t.code === u.Logger.errors.SERVER_ERROR && (t.error && "string" == typeof t.error.message ? o = t.error.message : "string" == typeof t.body ? o = t.body : "string" == typeof t.responseText && (o = t.responseText)), (o = (o || "").toLowerCase()).match(/insufficient funds/) && A.throwError("insufficient funds for intrinsic transaction cost", u.Logger.errors.INSUFFICIENT_FUNDS, {
                    error: t,
                    method: e,
                    transaction: r
                }), o.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && A.throwError("nonce has already been used", u.Logger.errors.NONCE_EXPIRED, {
                    error: t,
                    method: e,
                    transaction: r
                }), o.match(/another transaction with same nonce/) && A.throwError("replacement fee too low", u.Logger.errors.REPLACEMENT_UNDERPRICED, {
                    error: t,
                    method: e,
                    transaction: r
                }), o.match(/execution failed due to an exception|execution reverted/) && A.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", u.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: t,
                    method: e,
                    transaction: r
                }), t
            }
            class C extends i.Zk {
                constructor(e, t) {
                    super(e), (0, s.defineReadOnly)(this, "baseUrl", this.getBaseUrl()), (0, s.defineReadOnly)(this, "apiKey", t || null)
                }
                getBaseUrl() {
                    switch (this.network ? this.network.name : "invalid") {
                        case "homestead":
                            return "https://api.etherscan.io";
                        case "goerli":
                            return "https://api-goerli.etherscan.io";
                        case "sepolia":
                            return "https://api-sepolia.etherscan.io";
                        case "matic":
                            return "https://api.polygonscan.com";
                        case "maticmum":
                            return "https://api-testnet.polygonscan.com";
                        case "arbitrum":
                            return "https://api.arbiscan.io";
                        case "arbitrum-goerli":
                            return "https://api-goerli.arbiscan.io";
                        case "optimism":
                            return "https://api-optimistic.etherscan.io";
                        case "optimism-goerli":
                            return "https://api-goerli-optimistic.etherscan.io"
                    }
                    return A.throwArgumentError("unsupported network", "network", this.network.name)
                }
                getUrl(e, t) {
                    let r = Object.keys(t).reduce((e, r) => {
                            let o = t[r];
                            return null != o && (e += `&${r}=${o}`), e
                        }, ""),
                        o = this.apiKey ? `&apikey=${this.apiKey}` : "";
                    return `${this.baseUrl}/api?module=${e}${r}${o}`
                }
                getPostUrl() {
                    return `${this.baseUrl}/api`
                }
                getPostData(e, t) {
                    return t.module = e, t.apikey = this.apiKey, t
                }
                fetch(e, t, r) {
                    return O(this, void 0, void 0, function*() {
                        let o = r ? this.getPostUrl() : this.getUrl(e, t),
                            n = r ? this.getPostData(e, t) : null,
                            i = "proxy" === e ? L : j;
                        this.emit("debug", {
                            action: "request",
                            request: o,
                            provider: this
                        });
                        let c = {
                                url: o,
                                throttleSlotInterval: 1e3,
                                throttleCallback: (e, t) => (this.isCommunityResource() && (0, a.vh)(), Promise.resolve(!0))
                            },
                            l = null;
                        n && (c.headers = {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }, l = Object.keys(n).map(e => `${e}=${n[e]}`).join("&"));
                        let u = yield(0, N.fetchJson)(c, l, i || L);
                        return this.emit("debug", {
                            action: "response",
                            request: o,
                            response: (0, s.deepCopy)(u),
                            provider: this
                        }), u
                    })
                }
                detectNetwork() {
                    return O(this, void 0, void 0, function*() {
                        return this.network
                    })
                }
                perform(e, t) {
                    let r = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return O(this, void 0, void 0, function*() {
                        switch (e) {
                            case "getBlockNumber":
                                return this.fetch("proxy", {
                                    action: "eth_blockNumber"
                                });
                            case "getGasPrice":
                                return this.fetch("proxy", {
                                    action: "eth_gasPrice"
                                });
                            case "getBalance":
                                return this.fetch("account", {
                                    action: "balance",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getTransactionCount":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionCount",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getCode":
                                return this.fetch("proxy", {
                                    action: "eth_getCode",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getStorageAt":
                                return this.fetch("proxy", {
                                    action: "eth_getStorageAt",
                                    address: t.address,
                                    position: t.position,
                                    tag: t.blockTag
                                });
                            case "sendTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_sendRawTransaction",
                                    hex: t.signedTransaction
                                }, !0).catch(e => U("sendTransaction", e, t.signedTransaction));
                            case "getBlock":
                                if (t.blockTag) return this.fetch("proxy", {
                                    action: "eth_getBlockByNumber",
                                    tag: t.blockTag,
                                    boolean: t.includeTransactions ? "true" : "false"
                                });
                                throw Error("getBlock by blockHash not implemented");
                            case "getTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionByHash",
                                    txhash: t.transactionHash
                                });
                            case "getTransactionReceipt":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionReceipt",
                                    txhash: t.transactionHash
                                });
                            case "call":
                                {
                                    if ("latest" !== t.blockTag) throw Error("EtherscanProvider does not support blockTag for call");
                                    let e = T(t.transaction);e.module = "proxy",
                                    e.action = "eth_call";
                                    try {
                                        return yield this.fetch("proxy", e, !0)
                                    } catch (e) {
                                        return U("call", e, t.transaction)
                                    }
                                }
                            case "estimateGas":
                                {
                                    let e = T(t.transaction);e.module = "proxy",
                                    e.action = "eth_estimateGas";
                                    try {
                                        return yield this.fetch("proxy", e, !0)
                                    } catch (e) {
                                        return U("estimateGas", e, t.transaction)
                                    }
                                }
                            case "getLogs":
                                {
                                    let e = {
                                        action: "getLogs"
                                    };
                                    if (t.filter.fromBlock && (e.fromBlock = K(t.filter.fromBlock)), t.filter.toBlock && (e.toBlock = K(t.filter.toBlock)), t.filter.address && (e.address = t.filter.address), t.filter.topics && t.filter.topics.length > 0 && (t.filter.topics.length > 1 && A.throwError("unsupported topic count", u.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topics: t.filter.topics
                                        }), 1 === t.filter.topics.length)) {
                                        let r = t.filter.topics[0];
                                        ("string" != typeof r || 66 !== r.length) && A.throwError("unsupported topic format", u.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topic0: r
                                        }), e.topic0 = r
                                    }
                                    let r = yield this.fetch("logs", e), o = {};
                                    for (let e = 0; e < r.length; e++) {
                                        let t = r[e];
                                        if (null == t.blockHash) {
                                            if (null == o[t.blockNumber]) {
                                                let e = yield this.getBlock(t.blockNumber);
                                                e && (o[t.blockNumber] = e.hash)
                                            }
                                            t.blockHash = o[t.blockNumber]
                                        }
                                    }
                                    return r
                                }
                            case "getEtherPrice":
                                if ("homestead" !== this.network.name) return 0;
                                return parseFloat((yield this.fetch("stats", {
                                    action: "ethprice"
                                })).ethusd)
                        }
                        return r.perform.call(this, e, t)
                    })
                }
                getHistory(e, t, r) {
                    return O(this, void 0, void 0, function*() {
                        let o = {
                                action: "txlist",
                                address: yield this.resolveName(e), startblock: null == t ? 0 : t, endblock: null == r ? 99999999 : r, sort: "asc"
                            },
                            n = yield this.fetch("account", o);
                        return n.map(e => {
                            ["contractAddress", "to"].forEach(function(t) {
                                "" == e[t] && delete e[t]
                            }), null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
                            let t = this.formatter.transactionResponse(e);
                            return e.timeStamp && (t.timestamp = parseInt(e.timeStamp)), t
                        })
                    })
                }
                isCommunityResource() {
                    return null == this.apiKey
                }
            }
            var B = r(97477);
            let D = null,
                $ = new u.Logger(p.i),
                q = "84842078b09946638c03157f83405213";
            class J extends f {
                constructor(e, t) {
                    let r = new H(e, t),
                        o = r.connection;
                    o.password && $.throwError("INFURA WebSocket project secrets unsupported", u.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "InfuraProvider.getWebSocketProvider()"
                    });
                    let n = o.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
                    super(n, e), (0, s.defineReadOnly)(this, "apiKey", r.projectId), (0, s.defineReadOnly)(this, "projectId", r.projectId), (0, s.defineReadOnly)(this, "projectSecret", r.projectSecret)
                }
                isCommunityResource() {
                    return this.projectId === q
                }
            }
            class H extends y.l {
                static getWebSocketProvider(e, t) {
                    return new J(e, t)
                }
                static getApiKey(e) {
                    let t = {
                        apiKey: q,
                        projectId: q,
                        projectSecret: null
                    };
                    return null == e || ("string" == typeof e ? t.projectId = e : null != e.projectSecret ? ($.assertArgument("string" == typeof e.projectId, "projectSecret requires a projectId", "projectId", e.projectId), $.assertArgument("string" == typeof e.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"), t.projectId = e.projectId, t.projectSecret = e.projectSecret) : e.projectId && (t.projectId = e.projectId), t.apiKey = t.projectId), t
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e ? e.name : "unknown") {
                        case "homestead":
                            r = "mainnet.infura.io";
                            break;
                        case "goerli":
                            r = "goerli.infura.io";
                            break;
                        case "sepolia":
                            r = "sepolia.infura.io";
                            break;
                        case "matic":
                            r = "polygon-mainnet.infura.io";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.infura.io";
                            break;
                        case "optimism":
                            r = "optimism-mainnet.infura.io";
                            break;
                        case "optimism-goerli":
                            r = "optimism-goerli.infura.io";
                            break;
                        case "arbitrum":
                            r = "arbitrum-mainnet.infura.io";
                            break;
                        case "arbitrum-goerli":
                            r = "arbitrum-goerli.infura.io";
                            break;
                        default:
                            $.throwError("unsupported network", u.Logger.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    let o = {
                        allowGzip: !0,
                        url: "https://" + r + "/v3/" + t.projectId,
                        throttleCallback: (e, r) => (t.projectId === q && (0, a.vh)(), Promise.resolve(!0))
                    };
                    return null != t.projectSecret && (o.user = "", o.password = t.projectSecret), o
                }
                isCommunityResource() {
                    return this.projectId === q
                }
            }
            class W extends l.r {
                send(e, t) {
                    let r = {
                        method: e,
                        params: t,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    null == this._pendingBatch && (this._pendingBatch = []);
                    let o = {
                            request: r,
                            resolve: null,
                            reject: null
                        },
                        n = new Promise((e, t) => {
                            o.resolve = e, o.reject = t
                        });
                    return this._pendingBatch.push(o), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout(() => {
                        let e = this._pendingBatch;
                        this._pendingBatch = null, this._pendingBatchAggregator = null;
                        let t = e.map(e => e.request);
                        return this.emit("debug", {
                            action: "requestBatch",
                            request: (0, s.deepCopy)(t),
                            provider: this
                        }), (0, N.fetchJson)(this.connection, JSON.stringify(t)).then(r => {
                            this.emit("debug", {
                                action: "response",
                                request: t,
                                response: r,
                                provider: this
                            }), e.forEach((e, t) => {
                                let o = r[t];
                                if (o.error) {
                                    let t = Error(o.error.message);
                                    t.code = o.error.code, t.data = o.error.data, e.reject(t)
                                } else e.resolve(o.result)
                            })
                        }, r => {
                            this.emit("debug", {
                                action: "response",
                                error: r,
                                request: t,
                                provider: this
                            }), e.forEach(e => {
                                e.reject(r)
                            })
                        })
                    }, 10)), n
                }
            }
            let G = new u.Logger(p.i);
            class F extends y.l {
                static getApiKey(e) {
                    return e && "string" != typeof e && G.throwArgumentError("invalid apiKey", "apiKey", e), e || "ETHERS_JS_SHARED"
                }
                static getUrl(e, t) {
                    G.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
                    let r = null;
                    switch (e.name) {
                        case "homestead":
                            r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
                            break;
                        case "ropsten":
                            r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
                            break;
                        case "rinkeby":
                            r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
                            break;
                        case "goerli":
                            r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
                            break;
                        case "kovan":
                            r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
                            break;
                        default:
                            G.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return r + "?apiKey=" + t
                }
            }
            let M = new u.Logger(p.i),
                z = "62e1ad51b37b8e00394bda3b";
            class V extends y.l {
                static getApiKey(e) {
                    let t = {
                        applicationId: null,
                        loadBalancer: !0,
                        applicationSecretKey: null
                    };
                    return null == e ? t.applicationId = z : "string" == typeof e ? t.applicationId = e : null != e.applicationSecretKey ? (t.applicationId = e.applicationId, t.applicationSecretKey = e.applicationSecretKey) : e.applicationId ? t.applicationId = e.applicationId : M.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e), t
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e ? e.name : "unknown") {
                        case "goerli":
                            r = "eth-goerli.gateway.pokt.network";
                            break;
                        case "homestead":
                            r = "eth-mainnet.gateway.pokt.network";
                            break;
                        case "kovan":
                            r = "poa-kovan.gateway.pokt.network";
                            break;
                        case "matic":
                            r = "poly-mainnet.gateway.pokt.network";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai-rpc.gateway.pokt.network";
                            break;
                        case "rinkeby":
                            r = "eth-rinkeby.gateway.pokt.network";
                            break;
                        case "ropsten":
                            r = "eth-ropsten.gateway.pokt.network";
                            break;
                        default:
                            M.throwError("unsupported network", u.Logger.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    let o = `https://${r}/v1/lb/${t.applicationId}`,
                        n = {
                            headers: {},
                            url: o
                        };
                    return null != t.applicationSecretKey && (n.user = "", n.password = t.applicationSecretKey), n
                }
                isCommunityResource() {
                    return this.applicationId === z
                }
            }
            var Q = r(8550);
            let X = new u.Logger(p.i);

            function Z(e, t) {
                if (null == e && (e = "homestead"), "string" == typeof e) {
                    let t = e.match(/^(ws|http)s?:/i);
                    if (t) switch (t[1].toLowerCase()) {
                        case "http":
                        case "https":
                            return new l.r(e);
                        case "ws":
                        case "wss":
                            return new f(e);
                        default:
                            X.throwArgumentError("unsupported URL scheme", "network", e)
                    }
                }
                let r = (0, n.H)(e);
                return r && r._defaultProvider || X.throwError("unsupported getDefaultProvider network", u.Logger.errors.NETWORK_ERROR, {
                    operation: "getDefaultProvider",
                    network: e
                }), r._defaultProvider({
                    FallbackProvider: B.H,
                    AlchemyProvider: v,
                    AnkrProvider: _,
                    CloudflareProvider: S,
                    EtherscanProvider: C,
                    InfuraProvider: H,
                    JsonRpcProvider: l.r,
                    NodesmithProvider: F,
                    PocketProvider: V,
                    Web3Provider: Q.Q,
                    IpcProvider: D
                }, t)
            }
        },
        45894: function(e, t, r) {
            r.r(t), r.d(t, {
                keccak256: function() {
                    return g
                },
                pack: function() {
                    return d
                },
                sha256: function() {
                    return m
                }
            });
            var o = r(10528),
                n = r(75398),
                i = r(59256),
                s = r(58254),
                a = r(71320),
                c = r(57036);
            let l = RegExp("^bytes([0-9]+)$"),
                u = RegExp("^(u?int)([0-9]*)$"),
                p = RegExp("^(.*)\\[([0-9]*)\\]$"),
                h = new c.Logger("solidity/5.7.0");

            function d(e, t) {
                e.length != t.length && h.throwArgumentError("wrong number of values; expected ${ types.length }", "values", t);
                let r = [];
                return e.forEach(function(e, i) {
                    r.push(function e(t, r, i) {
                        switch (t) {
                            case "address":
                                if (i) return (0, n.zeroPad)(r, 32);
                                return (0, n.arrayify)(r);
                            case "string":
                                return (0, a.Y0)(r);
                            case "bytes":
                                return (0, n.arrayify)(r);
                            case "bool":
                                if (r = r ? "0x01" : "0x00", i) return (0, n.zeroPad)(r, 32);
                                return (0, n.arrayify)(r)
                        }
                        let s = t.match(u);
                        if (s) {
                            let e = parseInt(s[2] || "256");
                            return (s[2] && String(e) !== s[2] || e % 8 != 0 || 0 === e || e > 256) && h.throwArgumentError("invalid number type", "type", t), i && (e = 256), r = o.O$.from(r).toTwos(e), (0, n.zeroPad)(r, e / 8)
                        }
                        if (s = t.match(l)) {
                            let e = parseInt(s[1]);
                            return ((String(e) !== s[1] || 0 === e || e > 32) && h.throwArgumentError("invalid bytes type", "type", t), (0, n.arrayify)(r).byteLength !== e && h.throwArgumentError(`invalid value for ${t}`, "value", r), i) ? (0, n.arrayify)((r + "0000000000000000000000000000000000000000000000000000000000000000").substring(0, 66)) : r
                        }
                        if ((s = t.match(p)) && Array.isArray(r)) {
                            let o = s[1],
                                i = parseInt(s[2] || String(r.length));
                            i != r.length && h.throwArgumentError(`invalid array length for ${t}`, "value", r);
                            let a = [];
                            return r.forEach(function(t) {
                                a.push(e(o, t, !0))
                            }), (0, n.concat)(a)
                        }
                        return h.throwArgumentError("invalid type", "type", t)
                    }(e, t[i]))
                }), (0, n.hexlify)((0, n.concat)(r))
            }

            function g(e, t) {
                return (0, i.keccak256)(d(e, t))
            }

            function m(e, t) {
                return (0, s.JQ)(d(e, t))
            }
        }
    }
]);