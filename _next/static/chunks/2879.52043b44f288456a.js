(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2879], {
        50857: function(e, t, n) {
            var a = n(37772).Symbol;
            e.exports = a
        },
        49432: function(e) {
            e.exports = function(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
        },
        78048: function(e) {
            e.exports = function(e, t, n) {
                if ("function" != typeof e) throw TypeError("Expected a function");
                return setTimeout(function() {
                    e.apply(void 0, n)
                }, t)
            }
        },
        53366: function(e, t, n) {
            var a = n(50857),
                r = n(62107),
                o = n(37157),
                i = a ? a.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? r(e) : o(e)
            }
        },
        6840: function(e, t, n) {
            var a = n(61049),
                r = n(47394),
                o = n(29259),
                i = n(87035),
                s = /^\[object .+?Constructor\]$/,
                l = Object.prototype,
                d = Function.prototype.toString,
                u = l.hasOwnProperty,
                c = RegExp("^" + d.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!o(e) || r(e)) && (a(e) ? c : s).test(i(e))
            }
        },
        36060: function(e, t, n) {
            var a = n(23059),
                r = n(43114),
                o = n(17223);
            e.exports = function(e, t) {
                return o(r(e, t, a), e + "")
            }
        },
        86532: function(e, t, n) {
            var a = n(86874),
                r = n(83043),
                o = n(23059),
                i = r ? function(e, t) {
                    return r(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: a(t),
                        writable: !0
                    })
                } : o;
            e.exports = i
        },
        24019: function(e, t, n) {
            var a = n(37772)["__core-js_shared__"];
            e.exports = a
        },
        83043: function(e, t, n) {
            var a = n(38761),
                r = function() {
                    try {
                        var e = a(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (e) {}
                }();
            e.exports = r
        },
        51242: function(e, t, n) {
            var a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = a
        },
        38761: function(e, t, n) {
            var a = n(6840),
                r = n(98109);
            e.exports = function(e, t) {
                var n = r(e, t);
                return a(n) ? n : void 0
            }
        },
        62107: function(e, t, n) {
            var a = n(50857),
                r = Object.prototype,
                o = r.hasOwnProperty,
                i = r.toString,
                s = a ? a.toStringTag : void 0;
            e.exports = function(e) {
                var t = o.call(e, s),
                    n = e[s];
                try {
                    e[s] = void 0;
                    var a = !0
                } catch (e) {}
                var r = i.call(e);
                return a && (t ? e[s] = n : delete e[s]), r
            }
        },
        98109: function(e) {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        47394: function(e, t, n) {
            var a, r = n(24019),
                o = (a = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + a : "";
            e.exports = function(e) {
                return !!o && o in e
            }
        },
        37157: function(e) {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        43114: function(e, t, n) {
            var a = n(49432),
                r = Math.max;
            e.exports = function(e, t, n) {
                return t = r(void 0 === t ? e.length - 1 : t, 0),
                    function() {
                        for (var o = arguments, i = -1, s = r(o.length - t, 0), l = Array(s); ++i < s;) l[i] = o[t + i];
                        i = -1;
                        for (var d = Array(t + 1); ++i < t;) d[i] = o[i];
                        return d[t] = n(l), a(e, this, d)
                    }
            }
        },
        37772: function(e, t, n) {
            var a = n(51242),
                r = "object" == typeof self && self && self.Object === Object && self,
                o = a || r || Function("return this")();
            e.exports = o
        },
        17223: function(e, t, n) {
            var a = n(86532),
                r = n(97787)(a);
            e.exports = r
        },
        97787: function(e) {
            var t = Date.now;
            e.exports = function(e) {
                var n = 0,
                    a = 0;
                return function() {
                    var r = t(),
                        o = 16 - (r - a);
                    if (a = r, o > 0) {
                        if (++n >= 800) return arguments[0]
                    } else n = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        87035: function(e) {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
        },
        60417: function(e) {
            e.exports = function(e) {
                for (var t = -1, n = null == e ? 0 : e.length, a = 0, r = []; ++t < n;) {
                    var o = e[t];
                    o && (r[a++] = o)
                }
                return r
            }
        },
        86874: function(e) {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        98923: function(e, t, n) {
            var a = n(78048),
                r = n(36060),
                o = n(7642),
                i = r(function(e, t, n) {
                    return a(e, o(t) || 0, n)
                });
            e.exports = i
        },
        23059: function(e) {
            e.exports = function(e) {
                return e
            }
        },
        61049: function(e, t, n) {
            var a = n(53366),
                r = n(29259);
            e.exports = function(e) {
                if (!r(e)) return !1;
                var t = a(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        16951: function(e, t, n) {
            var a = n(80537);
            e.exports = function(e) {
                return a(e) && e != +e
            }
        },
        1842: function(e) {
            e.exports = function(e) {
                return null == e
            }
        },
        80537: function(e, t, n) {
            var a = n(53366),
                r = n(15125);
            e.exports = function(e) {
                return "number" == typeof e || r(e) && "[object Number]" == a(e)
            }
        },
        29259: function(e) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        15125: function(e) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        62879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return e$
                }
            });
            var a = n(52322),
                r = n(98614),
                o = n(2784),
                i = n(14013),
                s = n(9906),
                l = n(49771),
                d = n(61335),
                u = n(98174),
                c = n(50274),
                p = n(98923),
                m = n.n(p),
                y = n(96558),
                b = n(41704),
                f = n(78183),
                g = n(72558),
                v = n(90711),
                x = n(75398),
                h = n(60417),
                T = n.n(h),
                w = n(1842),
                N = n.n(w),
                C = n(16951),
                k = n.n(C),
                E = n(52060),
                A = n(50068),
                S = n(36854),
                j = JSON.parse('[{"inputs":[{"internalType":"address","name":"_oldToken","type":"address"},{"internalType":"address","name":"_newToken","type":"address"},{"internalType":"address","name":"_burnAddress","type":"address"},{"internalType":"uint256","name":"_oldTokenTotalSupply","type":"uint256"},{"internalType":"bool","name":"_isBurnAllowed","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenHolder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenConverted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"operation","type":"bool"}],"name":"UpdatePause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawToken","type":"event"},{"inputs":[],"name":"bridgeContractaddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bridgeTokenHoldings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBurnAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newToken","outputs":[{"internalType":"contract IERC20Metadata","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldToken","outputs":[{"internalType":"contract ERC20Burnable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldTokenTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalConvertedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"convertToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"pauseOperations","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenHolder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateBridgeDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getDetails","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]'),
                O = JSON.parse('[{"inputs":[],"name":"AlreadyInitialized","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"amountNeeded","type":"uint256"}],"name":"MissingAllowance","type":"error"},{"inputs":[],"name":"MissingBurnAddress","type":"error"},{"inputs":[],"name":"MissingConversionRatio","type":"error"},{"inputs":[],"name":"MissingNewToken","type":"error"},{"inputs":[],"name":"MissingOldToken","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"amountNeeded","type":"uint256"},{"internalType":"address","name":"holder","type":"address"}],"name":"NotEnoughBalance","type":"error"},{"inputs":[],"name":"NotInitialized","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newInstance","type":"address"}],"name":"Cloned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_oldToken","type":"address"},{"indexed":false,"internalType":"address","name":"_newToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"_conversionRatio","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_isOldTokenBurnable","type":"bool"},{"indexed":false,"internalType":"bool","name":"_isNewTokenMintable","type":"bool"},{"indexed":false,"internalType":"address","name":"_burnAddress","type":"address"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"old_token","type":"address"},{"indexed":false,"internalType":"address","name":"new_token","type":"address"},{"indexed":false,"internalType":"uint256","name":"old_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"new_amount","type":"uint256"}],"name":"Migrated","type":"event"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"clone","outputs":[{"internalType":"address","name":"newInstance","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"conversionRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getClone","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_oldToken","type":"address"},{"internalType":"address","name":"_newToken","type":"address"},{"internalType":"uint256","name":"_conversionRatio","type":"uint256"},{"internalType":"bool","name":"_isOldTokenBurnable","type":"bool"},{"internalType":"bool","name":"_isNewTokenMintable","type":"bool"},{"internalType":"address","name":"_burnAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"isNewTokenMintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOldTokenBurnable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrateAllTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"migrateTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"newToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldTokenPrecision","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"name":"setOwnerAfterClone","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                M = JSON.parse('[{"inputs":[{"internalType":"address","name":"_oldToken","type":"address"},{"internalType":"address","name":"_newToken","type":"address"},{"internalType":"address","name":"_migrationContract","type":"address"},{"internalType":"uint256","name":"_vestingPeriodInBlocks","type":"uint256"},{"internalType":"uint256","name":"_commissionRateMul1000","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InvalidCommissionRate","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"amountNeeded","type":"uint256"}],"name":"MissingAllowance","type":"error"},{"inputs":[],"name":"NoCommissionAvailable","type":"error"},{"inputs":[],"name":"NoConvertableTokens","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"amountNeeded","type":"uint256"},{"internalType":"address","name":"holder","type":"address"}],"name":"NotEnoughBalance","type":"error"},{"inputs":[],"name":"UnableToCollectCommission","type":"error"},{"inputs":[],"name":"UnableToMigrateTokens","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminDisableVesting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminWithdrawCommission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"commissionPoolTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"commissionPoolWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"commissionRateMul1000","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getTotalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getTotalUnlocked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getTotalVested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVestingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVestingCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVestingEndHeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVestingStartHeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"migrateTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrationContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"releaseTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vestingDisabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vestingPeriodInBlocks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
            let R = [{
                vesting: !0,
                enabled: S.e.featureFlags.ASIVesting,
                oldTokenSymbol: "CUDOS",
                oldTokenName: "CUDOS",
                newTokenSymbol: "FET",
                newTokenName: "FET",
                oldTokenDecimals: 18,
                newTokenDecimals: 18,
                outputRatio: .1,
                oldTokenContractAddress: {
                    11155111: "0xB9D31a4D47f3d85b4571b0A32908E2A09aD188F4"
                },
                newTokenContractAddress: {
                    11155111: "0xA01845369a35a3e6A492abe2186Fd556178F96F9"
                },
                migrationContractAddress: {
                    11155111: "0x450A77034F4FAC37B055C9cCC10c786B3321cdF3"
                },
                migrationContractFunctionName: "migrateTokens",
                abi: M,
                oldTokenIcon: "".concat("https://public.singularitydao.ai", "/migration/cudos.png"),
                newTokenIcon: "".concat("https://public.singularitydao.ai", "/migration/fet.png")
            }, {
                vesting: !1,
                enabled: !0,
                oldTokenSymbol: "AGIX",
                oldTokenName: "AGIX",
                newTokenSymbol: "FET",
                newTokenName: "FET",
                oldTokenDecimals: 8,
                newTokenDecimals: 18,
                outputRatio: .43335,
                oldTokenContractAddress: {
                    1: "0x5B7533812759B45C2B44C19e320ba2cD2681b542",
                    31338: "0x5B7533812759B45C2B44C19e320ba2cD2681b542",
                    11155111: "0xf38C6903dB841bAe659d304a9d53ef3A083347eB"
                },
                newTokenContractAddress: {
                    1: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
                    31338: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
                    11155111: "0x03F6004f8d1f50b085DCF4C7A7081325f66Ed141"
                },
                migrationContractAddress: {
                    1: "0x33784Ed688e507A2086B4E8793E126c8deE9e863",
                    31338: "0x33784Ed688e507A2086B4E8793E126c8deE9e863",
                    11155111: "0xa4D17153C343b9870aA72207190ea42FeBab7730"
                },
                migrationContractFunctionName: "migrateTokens",
                abi: O,
                oldTokenIcon: "".concat("https://public.singularitydao.ai", "/migration/agix.png"),
                newTokenIcon: "".concat("https://public.singularitydao.ai", "/migration/fet.png")
            }, {
                vesting: !1,
                enabled: !0,
                oldTokenSymbol: "OCEAN",
                oldTokenName: "OCEAN",
                newTokenSymbol: "FET",
                newTokenName: "FET",
                oldTokenDecimals: 18,
                newTokenDecimals: 18,
                outputRatio: .433226,
                oldTokenContractAddress: {
                    1: "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
                    31338: "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
                    11155111: "0x1B083D8584dd3e6Ff37d04a6e7e82b5F622f3985"
                },
                newTokenContractAddress: {
                    1: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
                    31338: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
                    11155111: "0x03F6004f8d1f50b085DCF4C7A7081325f66Ed141"
                },
                migrationContractAddress: {
                    1: "0x664D2f142cbc89Ee9Ed20c8E4EeB66C63b9cE663",
                    31338: "0x664D2f142cbc89Ee9Ed20c8E4EeB66C63b9cE663",
                    11155111: "0x9546734Aa2211F8dBC111501E219Aa1Be158E31b"
                },
                migrationContractFunctionName: "migrateTokens",
                abi: O,
                oldTokenIcon: "".concat("https://public.singularitydao.ai", "/migration/ocean.png"),
                newTokenIcon: "".concat("https://public.singularitydao.ai", "/migration/fet.png")
            }, {
                vesting: !1,
                enabled: !0,
                oldTokenSymbol: "RJV",
                oldTokenName: "Rejuve",
                newTokenSymbol: "RJV",
                newTokenName: "Rejuve",
                oldTokenDecimals: 6,
                newTokenDecimals: 6,
                outputRatio: 1,
                oldTokenContractAddress: {
                    1: "0x02c3296C6eb50249f290AE596F2bE9454bFfadaB",
                    56: "0x1135883a1bC6776bF90c97845adc491922106dFb",
                    31338: "0x02c3296C6eb50249f290AE596F2bE9454bFfadaB",
                    31339: "0x1135883a1bC6776bF90c97845adc491922106dFb"
                },
                newTokenContractAddress: {
                    1: "0xa1f410f13B6007fCa76833ee7eb58478D47Bc5Ef",
                    56: "0x602B6C6ccE5F95c00603bd07D8fA7EbAF3747D44",
                    31338: "0xa1f410f13B6007fCa76833ee7eb58478D47Bc5Ef",
                    31339: "0x602B6C6ccE5F95c00603bd07D8fA7EbAF3747D44"
                },
                migrationContractAddress: {
                    1: "0xb8019542931286D1AEBaef1165fe1f639e62b0A3",
                    56: "0xDE3c3851Fc1D342D5D3289Ca5e9E45deB60314ab",
                    31338: "0xb8019542931286D1AEBaef1165fe1f639e62b0A3",
                    31339: "0xDE3c3851Fc1D342D5D3289Ca5e9E45deB60314ab"
                },
                migrationContractFunctionName: "convertToken",
                abi: j,
                oldTokenIcon: "".concat("https://public.singularitydao.ai", "/migration/rjv.png"),
                newTokenIcon: "".concat("https://public.singularitydao.ai", "/migration/rjv.png")
            }];
            var I = n(19034),
                _ = n.n(I),
                F = n(31642);
            let D = (e, t, n, a, r) => {
                    let o = (0, A.PJ)({
                        address: e,
                        abi: t,
                        functionName: n,
                        args: [(0, E.v)("".concat(a), Number(r))],
                        enabled: !0
                    });
                    o.isError && f.Tb(o.error.message);
                    let i = (0, A.GG)(o.config);
                    return {
                        prepare: o,
                        contract: i
                    }
                },
                B = (e, t, n, a) => {
                    let r = (0, A.PJ)({
                        abi: y.em,
                        functionName: "approve",
                        address: e,
                        args: [t, BigInt(v.Bz.toString())],
                        account: null == n ? void 0 : n.address,
                        chain: a
                    });
                    r.isError && f.Tb(r.error.message);
                    let o = (0, A.GG)(r.config);
                    return {
                        prepare: r,
                        contract: o
                    }
                },
                L = (e, t) => {
                    let n = (0, A.PJ)({
                        abi: e,
                        functionName: "releaseTokens",
                        address: t
                    });
                    n.isError && f.Tb(n.error.message);
                    let a = (0, A.GG)(n.config);
                    return {
                        prepare: n,
                        contract: a
                    }
                },
                P = e => {
                    var t, n, a, r, i;
                    let [s, l] = (0, o.useState)(!1), [d, u] = (0, o.useState)({
                        oldAmount: "0.0",
                        newAmount: "0.0"
                    }), [c, p] = (0, o.useState)("-"), [m, b] = (0, o.useState)(!1), [f, v] = (0, o.useState)({
                        vesting: !1,
                        enabled: !1,
                        oldTokenSymbol: "",
                        oldTokenName: "",
                        newTokenSymbol: "",
                        newTokenName: "",
                        oldTokenDecimals: 0,
                        newTokenDecimals: 0,
                        outputRatio: 0,
                        oldTokenContractAddress: {},
                        newTokenContractAddress: {},
                        migrationContractAddress: {},
                        migrationContractFunctionName: "",
                        oldTokenIcon: "",
                        newTokenIcon: "",
                        abi: null
                    }), h = (0, A.mA)(), {
                        data: w
                    } = (0, A.py)(), {
                        chain: C
                    } = (0, A.LN)(), {
                        data: E
                    } = (0, A.do)({
                        abi: y.em,
                        watch: !0,
                        address: f.oldTokenContractAddress[null == C ? void 0 : C.id],
                        functionName: "balanceOf",
                        args: [null == h ? void 0 : h.address]
                    }), {
                        data: S
                    } = (0, A.do)({
                        abi: y.em,
                        watch: !0,
                        address: f.newTokenContractAddress[null == C ? void 0 : C.id],
                        functionName: "balanceOf",
                        args: [f.migrationContractAddress[null == C ? void 0 : C.id]]
                    }), {
                        data: j
                    } = (0, A.do)({
                        enabled: !0,
                        watch: !0,
                        abi: y.em,
                        functionName: "allowance",
                        chainId: null == C ? void 0 : C.id,
                        address: f.oldTokenContractAddress[null == C ? void 0 : C.id],
                        args: [null == h ? void 0 : h.address, f.migrationContractAddress[null == C ? void 0 : C.id]]
                    }), {
                        data: O
                    } = (0, A.do)({
                        abi: f.abi,
                        watch: !0,
                        address: null == f ? void 0 : null === (t = f.migrationContractAddress) || void 0 === t ? void 0 : t[null == C ? void 0 : C.id],
                        functionName: "getVestingCount",
                        args: [null == h ? void 0 : h.address],
                        enabled: null == f ? void 0 : f.vesting
                    }), {
                        data: M,
                        isLoading: I
                    } = (0, A.do)({
                        abi: f.abi,
                        watch: !0,
                        address: null == f ? void 0 : null === (n = f.migrationContractAddress) || void 0 === n ? void 0 : n[null == C ? void 0 : C.id],
                        functionName: "getTotalUnlocked",
                        args: [null == h ? void 0 : h.address],
                        enabled: null == f ? void 0 : f.vesting
                    }), {
                        data: D,
                        isLoading: B
                    } = (0, A.do)({
                        abi: f.abi,
                        watch: !0,
                        address: null == f ? void 0 : null === (a = f.migrationContractAddress) || void 0 === a ? void 0 : a[null == C ? void 0 : C.id],
                        functionName: "getTotalReleased",
                        args: [null == h ? void 0 : h.address],
                        enabled: null == f ? void 0 : f.vesting
                    }), {
                        data: L,
                        isLoading: P
                    } = (0, A.do)({
                        abi: f.abi,
                        watch: !0,
                        address: null == f ? void 0 : null === (r = f.migrationContractAddress) || void 0 === r ? void 0 : r[null == C ? void 0 : C.id],
                        functionName: "getTotalVested",
                        args: [null == h ? void 0 : h.address],
                        enabled: null == f ? void 0 : f.vesting
                    }), {
                        data: G,
                        isLoading: $
                    } = (0, A.do)({
                        abi: f.abi,
                        watch: !0,
                        address: null == f ? void 0 : null === (i = f.migrationContractAddress) || void 0 === i ? void 0 : i[null == C ? void 0 : C.id],
                        functionName: "getVestingEndHeight",
                        args: [null == h ? void 0 : h.address, Number(O) - 1],
                        enabled: null == f ? void 0 : f.vesting
                    }), {
                        data: U,
                        isLoading: W
                    } = (0, A.Dm)({
                        contracts: Array.from({
                            length: Number(O)
                        }, (e, t) => ({
                            address: f.migrationContractAddress[null == C ? void 0 : C.id],
                            abi: f.abi,
                            functionName: "getVestingAmount",
                            args: [null == h ? void 0 : h.address, t],
                            enabled: null == f ? void 0 : f.vesting
                        }))
                    }), V = (0, o.useMemo)(() => I && B && P && $ && W, [I, B, P, $, W]), z = (0, o.useMemo)(() => {
                        if (void 0 !== U) {
                            let e = U.reduce((e, t) => e += Number(t.result), 0);
                            return e / Math.pow(10, null == f ? void 0 : f.newTokenDecimals)
                        }
                        return 0
                    }, [U, f]), Z = (0, o.useMemo)(() => D ? z - Number(D) / Math.pow(10, null == f ? void 0 : f.newTokenDecimals) : 0, [z, D, f]), H = (0, o.useMemo)(() => M && D ? Math.max(0, (Number(M) - Number(D)) / Math.pow(10, null == f ? void 0 : f.newTokenDecimals)) : 0, [M, D, f]), Y = (0, o.useMemo)(() => D ? Number(D) / Math.pow(10, null == f ? void 0 : f.newTokenDecimals) : 0, [D, f]), J = (0, o.useCallback)(async () => {
                        if (G) {
                            b(!0);
                            let e = null == C ? void 0 : C.id,
                                t = await (0, F.VH)(e),
                                n = await t.perform("getBlock", {
                                    blockTag: x.hexValue(G)
                                });
                            if (null == n ? void 0 : n.timestamp) {
                                let e = Number(null == n ? void 0 : n.timestamp),
                                    t = new Date(1e3 * e),
                                    a = _()(t).format("DD MMMM YYYY");
                                p(a), b(!1);
                                return
                            }
                            let a = [],
                                r = await t.getBlockNumber();
                            for (let e = 0; e < 3; e++) a.push(t.perform("getBlock", {
                                blockTag: x.hexValue(Number(r) - e)
                            }));
                            let o = (await Promise.all(a)).map(e => BigInt(null == e ? void 0 : e.timestamp)),
                                i = [];
                            for (let e = 0; e < 2; e++) i.push(o[e] - o[e + 1]);
                            let s = i.reduce((e, t) => Number(e) + Number(t), 0),
                                l = s / i.length || 0,
                                d = Number(G) - r,
                                u = Number(o[0]) + d * l,
                                c = new Date(1e3 * u),
                                m = _()(c).format("DD MMM YYYY");
                            p(m), b(!1)
                        } else p("-")
                    }, [G, h, C]);
                    (0, o.useEffect)(() => {
                        J()
                    }, [G]);
                    let K = (0, o.useMemo)(() => {
                        let t = R.filter(t => t.newTokenSymbol === e).map(e => {
                            if (e.enabled) return {
                                label: e.oldTokenSymbol,
                                value: e.oldTokenSymbol,
                                token: e
                            }
                        });
                        return T()(t)
                    }, []);
                    (0, o.useEffect)(() => {
                        K.length > 0 && v(K[0].token)
                    }, [K]);
                    let q = () => {
                        let e = (0, g.Z)(d.oldAmount).multipliedBy(f.outputRatio).toString();
                        u({ ...d,
                            newAmount: e
                        })
                    };
                    (0, o.useEffect)(() => {
                        q()
                    }, [d.oldAmount, f.oldTokenSymbol]);
                    let X = (0, o.useMemo)(() => {
                            if (null == h || !h.isConnected || N()(E)) return 0; {
                                let e = new g.Z(10).exponentiatedBy(f.oldTokenDecimals);
                                return new g.Z(E.toString()).div(e).toString()
                            }
                        }, [h.isConnected, E, f.oldTokenDecimals]),
                        Q = (0, o.useMemo)(() => Number(d.oldAmount) > Number(X), [d.oldAmount, X]),
                        ee = (0, o.useMemo)(() => Number(d.newAmount) > Number(S), [d.newAmount, S]),
                        et = (0, o.useMemo)(() => {
                            let e = new g.Z(10).exponentiatedBy(f.oldTokenDecimals);
                            return new g.Z(d.oldAmount).times(e).isGreaterThan(new g.Z(null == j ? void 0 : j.toString()))
                        }, [d.oldAmount, f.oldTokenDecimals, j]),
                        en = async () => {
                            try {
                                await w.watchAsset({
                                    type: "ERC20",
                                    options: {
                                        address: f.oldTokenContractAddress[C.id],
                                        symbol: f.oldTokenSymbol,
                                        decimals: f.oldTokenDecimals,
                                        image: f.oldTokenIcon
                                    }
                                })
                            } catch (e) {
                                console.info(e)
                            }
                        };
                    return {
                        hasInSufficientBalance: Q,
                        hasAllowanceLimitExceeded: et,
                        tokenBalance: X,
                        amount: d,
                        migrationTokenOptions: K,
                        migrationToken: f,
                        account: h,
                        isLoading: s,
                        hasLiquidityIssue: ee,
                        wagmiChain: C,
                        setCustomAmt: e => {
                            u({ ...d,
                                oldAmount: X.toString()
                            })
                        },
                        handleAmountChange: e => {
                            let t = e.target.value;
                            k()(Number(t)) || u({ ...d,
                                oldAmount: t
                            })
                        },
                        handleSelectedToken: e => {
                            let {
                                token: t
                            } = K.find(t => t.token.oldTokenSymbol === e);
                            v(t)
                        },
                        addTokenToMetaMask: en,
                        setLoading: l,
                        resetValues: () => u({
                            oldAmount: "0.0",
                            newAmount: "0.0"
                        }),
                        userCount: O,
                        totalUnlocked: M,
                        releasedToken: Y,
                        totalVested: L,
                        vestingEndHeightDate: c,
                        migratedAmount: z,
                        unvestedAmount: Z,
                        isVestingLoading: V,
                        vestingDateLoading: m,
                        availableForRelease: H
                    }
                };
            var G = n(19384),
                $ = n(81927),
                U = n(50695),
                W = n.n(U);
            let V = "#191A1E",
                z = e => {
                    let {
                        t
                    } = (0, r.$G)("common");
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)($.S$, {
                            className: (0, d.cx)((0, u.m)(W().label, "mb-2 px-2 text-[#B4BCD0]")),
                            font: "12px",
                            children: t("NEW_TOKEN")
                        }), (0, a.jsx)(G.Z, {
                            value: e.output,
                            overrides: {
                                StartEnhancer: {
                                    style: e => ({
                                        backgroundColor: "transparent",
                                        minWidth: "10rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "start",
                                        paddingLeft: "12px",
                                        paddingRight: "12px",
                                        paddingTop: "12px",
                                        paddingBottom: "12px"
                                    })
                                },
                                Input: {
                                    style: e => ({
                                        backgroundColor: V,
                                        fontFamily: "Montserrat",
                                        textAlign: "right"
                                    })
                                },
                                Root: {
                                    style: e => ({
                                        borderRaborderTopLeftRadius: "20px",
                                        borderTopRightRadius: "20px",
                                        borderBottomLeftRadius: "20px",
                                        borderBottomRightRadius: "20px",
                                        borderLeftWidth: "0",
                                        borderRightWidth: "0",
                                        borderTopWidth: "0",
                                        borderBottomWidth: "0",
                                        borderLeftStyle: "none",
                                        borderBottomStyle: "none",
                                        borderRightStyle: "none",
                                        borderTopStyle: "none",
                                        backgroundColor: V
                                    })
                                }
                            },
                            startEnhancer: (0, a.jsxs)("div", {
                                className: "flex flex-row items-center gap-2",
                                children: [(0, a.jsx)("img", {
                                    src: e.icon,
                                    className: "rounded-full",
                                    alt: "TokenIcon",
                                    width: 24,
                                    height: 24
                                }), (0, a.jsx)($.S$, {
                                    className: (0, d.cx)((0, u.m)(W().migrateFont, "text-lg")),
                                    children: e.tokenSymbol
                                })]
                            }),
                            placeholder: "New token",
                            clearOnEscape: !0
                        })]
                    })
                };
            var Z = n(5632),
                H = n.n(Z),
                Y = n(50592),
                J = n(58511),
                K = n(2196);

            function q() {
                return (q = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function X(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            var Q = o.forwardRef(function(e, t) {
                    var n, a = (function(e) {
                            if (Array.isArray(e)) return e
                        }(n = (0, Y.hQ)()) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    a = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var i, s = e[Symbol.iterator](); !(a = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
                                } catch (e) {
                                    r = !0, o = e
                                } finally {
                                    try {
                                        a || null == s.return || s.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                                return n
                            }
                        }(n, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return X(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(e, t)
                            }
                        }(n, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[1],
                        r = e.title,
                        i = e.size,
                        s = e.color,
                        l = e.overrides,
                        d = void 0 === l ? {} : l,
                        u = function(e, t) {
                            if (null == e) return {};
                            var n, a, r = function(e, t) {
                                if (null == e) return {};
                                var n, a, r = {},
                                    o = Object.keys(e);
                                for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < o.length; a++) n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                            }
                            return r
                        }(e, ["title", "size", "color", "overrides"]),
                        c = (0, J.vt)({
                            component: a.icons && a.icons.ChevronDown ? a.icons.ChevronDown : null
                        }, d && d.Svg ? (0, J.hq)(d.Svg) : {});
                    return o.createElement(K.Z, q({
                        viewBox: "0 0 24 24",
                        ref: t,
                        title: void 0 === r ? "Down" : r,
                        size: i,
                        color: s,
                        overrides: {
                            Svg: c
                        }
                    }, u), o.createElement("path", {
                        transform: "rotate(270, 12, 12)",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                    }))
                }),
                ee = n(73992),
                et = n(72932),
                en = n(60732);

            function ea() {
                return (ea = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function er(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            a = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, s = e[Symbol.iterator](); !(a = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
                        } catch (e) {
                            r = !0, o = e
                        } finally {
                            try {
                                a || null == s.return || s.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return n
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return eo(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eo(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function eo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            var ei = o.forwardRef(function(e, t) {
                var n = e.item,
                    a = e.getChildMenu,
                    r = e.getProfileItemLabels,
                    i = e.getProfileItemImg,
                    s = e.getProfileItemImgText,
                    l = e.overrides,
                    d = void 0 === l ? {} : l,
                    u = e.resetMenu,
                    c = e.$isHighlighted,
                    p = e.renderAll,
                    m = function(e, t) {
                        if (null == e) return {};
                        var n, a, r = function(e, t) {
                            if (null == e) return {};
                            var n, a, r = {},
                                o = Object.keys(e);
                            for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (a = 0; a < o.length; a++) n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                        }
                        return r
                    }(e, ["item", "getChildMenu", "getProfileItemLabels", "getProfileItemImg", "getProfileItemImgText", "overrides", "resetMenu", "$isHighlighted", "renderAll"]),
                    y = er((0, J.jb)(d.ListItemProfile, en.HV), 2),
                    b = y[0],
                    f = y[1],
                    g = er((0, J.jb)(d.ProfileImgContainer, en.RE), 2),
                    v = g[0],
                    x = g[1],
                    h = er((0, J.jb)(d.ProfileImg, en.yK), 2),
                    T = h[0],
                    w = h[1],
                    N = er((0, J.jb)(d.ProfileLabelsContainer, en.yD), 2),
                    C = N[0],
                    k = N[1],
                    E = er((0, J.jb)(d.ProfileTitle, en.MA), 2),
                    A = E[0],
                    S = E[1],
                    j = er((0, J.jb)(d.ProfileSubtitle, en.q5), 2),
                    O = j[0],
                    M = j[1],
                    R = er((0, J.jb)(d.ProfileBody, en.uI), 2),
                    I = R[0],
                    _ = R[1],
                    F = i(n),
                    D = r(n),
                    B = D.title,
                    L = D.subtitle,
                    P = D.body;
                return o.createElement(et.Z, {
                    ref: t,
                    getChildMenu: a,
                    isOpen: !!c,
                    item: n,
                    resetParentMenu: void 0 === u ? function() {} : u,
                    renderAll: p,
                    overrides: d
                }, o.createElement(b, ea({}, m, f), o.createElement(v, x, F && ("string" == typeof F ? o.createElement(T, ea({
                    src: F,
                    alt: s(n)
                }, w)) : o.createElement(F, w))), o.createElement(C, k, B && o.createElement(A, S, B), L && o.createElement(O, M, L), P && o.createElement(I, _, P))))
            });
            ei.displayName = "OptionProfile";
            var es = n(96850);

            function el(e) {
                return (el = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function ed(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function eu(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function ec(e, t) {
                return (ec = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ep(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function em(e) {
                return (em = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ey(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var eb = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && ec(e, t)
                }(o, e);
                var t, n, a, r = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n, a = em(o);
                    if (t) {
                        var r = em(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (e = n) && ("object" === el(e) || "function" == typeof e) ? e : ep(this)
                });

                function o() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, o);
                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    return ey(ep(e = r.call.apply(r, [this].concat(n))), "state", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ed(Object(n), !0).forEach(function(t) {
                                ey(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ed(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        isOpen: !1
                    }, e.props.initialState)), ey(ep(e), "onBlur", function(t) {
                        e.props.onBlur && e.props.onBlur(t), e.props.focusLock || e.props.autoFocus || e.close()
                    }), ey(ep(e), "onClick", function(t) {
                        e.props.onClick && e.props.onClick(t), e.state.isOpen ? e.close() : e.open()
                    }), ey(ep(e), "onClickOutside", function() {
                        e.close()
                    }), ey(ep(e), "onEsc", function() {
                        e.close()
                    }), ey(ep(e), "onFocus", function(t) {
                        e.props.onFocus && e.props.onFocus(t), e.open()
                    }), ey(ep(e), "onMouseEnter", function(t) {
                        e.props.onMouseEnter && e.props.onMouseEnter(t), e.open()
                    }), ey(ep(e), "onMouseLeave", function(t) {
                        e.props.onMouseLeave && e.props.onMouseLeave(t), e.close()
                    }), ey(ep(e), "onContentClose", function() {
                        e.close()
                    }), ey(ep(e), "renderContent", function() {
                        var t = e.props.content;
                        return "function" == typeof t ? t({
                            close: e.onContentClose
                        }) : t
                    }), e
                }
                return n = [{
                    key: "open",
                    value: function() {
                        this.internalSetState(es.oL.open, {
                            isOpen: !0
                        }), this.props.onOpen && this.props.onOpen()
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.internalSetState(es.oL.close, {
                            isOpen: !1
                        }), this.props.onClose && this.props.onClose()
                    }
                }, {
                    key: "internalSetState",
                    value: function(e, t) {
                        var n = this.props.stateReducer;
                        if ("function" != typeof n) {
                            this.setState(t);
                            return
                        }
                        this.setState(function(a) {
                            return n(e, t, a)
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.accessibilityType,
                            n = e.autoFocus,
                            a = e.animateOutTime,
                            r = e.dismissOnClickOutside,
                            o = e.dismissOnEsc,
                            i = e.focusLock,
                            s = e.ignoreBoundary,
                            l = e.mountNode,
                            d = e.onBlur,
                            u = e.onClick,
                            c = e.onFocus,
                            p = e.onMouseEnter,
                            m = e.onMouseLeave,
                            y = e.onMouseEnterDelay,
                            b = e.onMouseLeaveDelay,
                            f = e.overrides,
                            g = e.placement,
                            v = e.popperOptions,
                            x = e.renderAll,
                            h = e.returnFocus,
                            T = e.showArrow,
                            w = e.triggerType,
                            N = e.popoverMargin,
                            C = e.focusOptions,
                            k = {
                                accessibilityType: t,
                                animateOutTime: a,
                                autoFocus: n,
                                content: this.renderContent,
                                focusLock: i,
                                ignoreBoundary: s,
                                isOpen: this.state.isOpen,
                                mountNode: l,
                                onBlur: d,
                                onClick: u,
                                onFocus: c,
                                onMouseEnter: p,
                                onMouseLeave: m,
                                onMouseEnterDelay: y,
                                onMouseLeaveDelay: b,
                                overrides: f,
                                placement: g,
                                popperOptions: v,
                                renderAll: x,
                                returnFocus: h,
                                showArrow: T,
                                triggerType: w,
                                popoverMargin: N,
                                focusOptions: C
                            };
                        return r && (k.onClickOutside = this.onClickOutside), o && (k.onEsc = this.onEsc), w === es.gu.hover ? (k.onBlur = this.onBlur, k.onFocus = this.onFocus, k.onMouseEnter = this.onMouseEnter, k.onMouseLeave = this.onMouseLeave) : k.onClick = this.onClick, this.props.children(k)
                    }
                }], eu(o.prototype, n), a && eu(o, a), o
            }(o.Component);
            ey(eb, "defaultProps", {
                accessibilityType: es.SI.menu,
                ignoreBoundary: !1,
                overrides: {},
                onMouseEnterDelay: 200,
                onMouseLeaveDelay: 200,
                placement: es.r4.auto,
                popperOptions: {},
                showArrow: !1,
                triggerType: es.gu.click,
                dismissOnClickOutside: !0,
                dismissOnEsc: !0,
                stateReducer: function(e, t) {
                    return t
                },
                popoverMargin: es.AF
            });
            var ef = n(49940);

            function eg(e) {
                var t = e.children,
                    n = function(e, t) {
                        if (null == e) return {};
                        var n, a, r = function(e, t) {
                            if (null == e) return {};
                            var n, a, r = {},
                                o = Object.keys(e);
                            for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (a = 0; a < o.length; a++) n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                        }
                        return r
                    }(e, ["children"]);
                return o.createElement(eb, n, function(e) {
                    return o.createElement(ef.Z, e, t)
                })
            }
            eg.defaultProps = {
                accessibilityType: es.SI.menu,
                ignoreBoundary: !1,
                overrides: {},
                onMouseEnterDelay: 200,
                onMouseLeaveDelay: 200,
                placement: es.r4.auto,
                showArrow: !1,
                triggerType: es.gu.click,
                dismissOnClickOutside: !0,
                dismissOnEsc: !0,
                stateReducer: function(e, t) {
                    return t
                },
                popoverMargin: es.AF
            };
            let ev = "#191A1E",
                ex = e => {
                    let [t, n] = (0, o.useState)([]), {
                        t: i
                    } = (0, r.$G)("common");
                    return (0, o.useEffect)(() => {
                        let t = R.filter(e => !0 === e.enabled).filter(t => t.newTokenSymbol === e.supportedToken).map(e => ({
                            subtitle: e.oldTokenSymbol,
                            imgUrl: e.oldTokenIcon,
                            token: e
                        }));
                        n(t)
                    }, []), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)($.S$, {
                            className: (0, d.cx)((0, u.m)(W().label, "mb-2 px-2 text-[#B4BCD0]")),
                            font: "12px",
                            children: i("OLD_TOKEN")
                        }), (0, a.jsx)(G.Z, {
                            value: e.input,
                            autoFocus: !0,
                            onChange: e.onChange,
                            type: "number",
                            overrides: {
                                StartEnhancer: {
                                    style: e => ({
                                        backgroundColor: "transparent",
                                        minWidth: "10rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "start",
                                        paddingLeft: "12px",
                                        paddingRight: "12px",
                                        paddingTop: "12px",
                                        paddingBottom: "12px"
                                    })
                                },
                                Input: {
                                    style: e => ({
                                        backgroundColor: ev,
                                        fontFamily: "Montserrat",
                                        textAlign: "right"
                                    })
                                },
                                Root: {
                                    style: e => ({
                                        backgroundColor: ev,
                                        fontFamily: "Montserrat",
                                        borderTopLeftRadius: "20px",
                                        borderTopRightRadius: "20px",
                                        borderBottomLeftRadius: "20px",
                                        borderBottomRightRadius: "20px",
                                        borderLeftWidth: "0",
                                        borderRightWidth: "0",
                                        borderTopWidth: "0",
                                        borderBottomWidth: "0",
                                        borderLeftStyle: "none",
                                        borderBottomStyle: "none",
                                        borderRightStyle: "none",
                                        borderTopStyle: "none"
                                    })
                                }
                            },
                            startEnhancer: (0, a.jsx)(eg, {
                                focusLock: !0,
                                placement: es.r4.bottomLeft,
                                content: n => {
                                    let {
                                        close: r
                                    } = n;
                                    return (0, a.jsx)(ee.Z, {
                                        items: t,
                                        onItemSelect: t => {
                                            e.onTokenSelection(t.item.token), r()
                                        },
                                        overrides: {
                                            List: {
                                                style: {
                                                    height: "172px",
                                                    minWidth: "140px",
                                                    backgroundColor: "white",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    borderRadius: "20px",
                                                    border: "1px solid var(--Primary-blue, #2E5BFF) !important",
                                                    background: "var(--Dropdown-color, #191A1E)",
                                                    color: "var(--style-20-ffffff-light-text, #FFF)"
                                                }
                                            },
                                            Option: {
                                                component: ei,
                                                props: {
                                                    getProfileItemLabels: e => {
                                                        let {
                                                            subtitle: t
                                                        } = e;
                                                        return {
                                                            subtitle: t
                                                        }
                                                    },
                                                    getProfileItemImg: e => e.imgUrl,
                                                    getProfileItemImgText: e => e.subtitle,
                                                    overrides: {
                                                        ListItemProfile: {
                                                            style: {
                                                                padding: "0px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "start"
                                                            }
                                                        },
                                                        ProfileImg: {
                                                            style: {
                                                                width: "32px",
                                                                height: "32px"
                                                            }
                                                        },
                                                        ProfileLabelsContainer: {
                                                            style: {
                                                                margin: "24px",
                                                                marginLeft: "-8px"
                                                            }
                                                        },
                                                        ProfileSubtitle: {
                                                            style: {
                                                                "font-size": "14px",
                                                                "font-family": "Montserrat !important",
                                                                "font-style": "normal",
                                                                "font-weight": 500,
                                                                "line-height": "22px",
                                                                "margin-left": "-24px"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    })
                                },
                                children: (0, a.jsxs)("div", {
                                    className: "flex cursor-pointer flex-row items-center gap-2",
                                    children: [(0, a.jsx)("img", {
                                        src: e.icon,
                                        className: "rounded-full",
                                        alt: "TokenIcon",
                                        width: 24,
                                        height: 24
                                    }), (0, a.jsx)($.S$, {
                                        className: (0, d.cx)((0, u.m)(W().migrateFont, "text-lg")),
                                        children: e.tokenSymbol
                                    }), (0, a.jsx)(Q, {})]
                                })
                            }),
                            placeholder: "Old token",
                            clearOnEscape: !0
                        }), (0, a.jsx)("div", {
                            className: "flex justify-end",
                            children: (0, a.jsx)("button", {
                                onClick: e.onClickMax,
                                className: "mt-1 text-sm font-medium text-blue-500",
                                children: i("MAX")
                            })
                        })]
                    })
                };
            var eh = n(64749),
                eT = n(76635);
            let ew = () => {
                let [e, t] = (0, o.useState)([]), {
                    chain: n
                } = (0, A.LN)(), {
                    switchNetwork: i
                } = (0, A.g0)(), {
                    t: l
                } = (0, r.$G)("common"), c = (0, Z.useRouter)(), p = (0, s.pm)();
                (0, o.useEffect)(() => {
                    let e = c.pathname,
                        n = eh.sD.filter(e => {
                            var t;
                            return e.id !== (null === (t = (0, eh.Or)("CARDANO")) || void 0 === t ? void 0 : t.id)
                        }).filter(t => {
                            var n;
                            return "/migrate-asi" !== e ? t : t.id === (null === (n = (0, eh.Or)("Ethereum")) || void 0 === n ? void 0 : n.id)
                        }).map(e => ({
                            network: e,
                            subtitle: e.name,
                            imgUrl: "".concat("https://public.singularitydao.ai", "/migration/").concat(e.shortName, ".png")
                        }));
                    t(n)
                }, []);
                let m = (0, o.useMemo)(() => {
                        let t = null == n ? void 0 : n.id;
                        return (0, eT.isNil)(t) ? e[0] : e.find(e => e.network.id === t)
                    }, [null == n ? void 0 : n.id, e]),
                    y = e => {
                        try {
                            i(e.id)
                        } catch (e) {
                            p({
                                title: l("ERROR_MESSAGES.ERROR"),
                                description: l("NETWORK_CHANGE_ERROR"),
                                type: "error"
                            })
                        }
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)($.S$, {
                        className: (0, d.cx)((0, u.m)(W().label, "mb-2 pl-16 text-[#B4BCD0]")),
                        font: "12px",
                        children: l("NETWORK")
                    }), (0, a.jsx)(eg, {
                        focusLock: !0,
                        placement: es.r4.bottom,
                        content: t => {
                            let {
                                close: n
                            } = t;
                            return (0, a.jsx)(ee.Z, {
                                items: e,
                                onItemSelect: e => {
                                    y(e.item.network), n()
                                },
                                overrides: {
                                    List: {
                                        style: {
                                            height: "172px",
                                            backgroundColor: "white",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            borderRadius: "20px",
                                            border: "1px solid var(--Primary-blue, #2E5BFF) !important",
                                            background: "var(--Dropdown-color, #191A1E)",
                                            color: "var(--style-20-ffffff-light-text, #FFF)"
                                        }
                                    },
                                    Option: {
                                        component: ei,
                                        props: {
                                            getProfileItemLabels: e => {
                                                let {
                                                    subtitle: t
                                                } = e;
                                                return {
                                                    subtitle: t
                                                }
                                            },
                                            getProfileItemImg: e => e.imgUrl,
                                            getProfileItemImgText: e => e.subtitle,
                                            overrides: {
                                                ListItemProfile: {
                                                    style: {
                                                        padding: "0px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "start"
                                                    }
                                                },
                                                ProfileImg: {
                                                    style: {
                                                        width: "32px",
                                                        height: "32px"
                                                    }
                                                },
                                                ProfileLabelsContainer: {
                                                    style: {
                                                        margin: "24px",
                                                        marginLeft: "-8px"
                                                    }
                                                },
                                                ProfileSubtitle: {
                                                    style: {
                                                        "font-size": "14px",
                                                        "font-family": "Montserrat !important",
                                                        "font-style": "normal",
                                                        "font-weight": 500,
                                                        "line-height": "22px",
                                                        "margin-left": "-24px"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            })
                        },
                        children: (0, a.jsxs)("div", {
                            className: (0, d.cx)((0, u.m)("flex cursor-pointer flex-row items-center gap-2")),
                            children: [(0, a.jsx)($.S$, {
                                className: (0, d.cx)((0, u.m)("pl-2 text-base", W().migrateFont)),
                                font: "16px",
                                children: l("FROM")
                            }), (0, a.jsx)("div", {
                                className: "w-full",
                                children: (0, a.jsxs)("div", {
                                    className: (0, d.cx)((0, u.m)(W().networkSelector, "flex w-full items-center justify-between rounded-2xl p-3 text-white")),
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, a.jsx)("img", {
                                            src: null == m ? void 0 : m.imgUrl,
                                            className: "rounded-full",
                                            alt: "TokenIcon",
                                            width: 24,
                                            height: 24
                                        }), (0, a.jsx)($.S$, {
                                            className: (0, d.cx)((0, u.m)(W().migrateFont, "text-lg")),
                                            children: null == m ? void 0 : m.network.name
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "mr-1",
                                        children: (0, a.jsx)(Q, {})
                                    })]
                                })
                            })]
                        })
                    })]
                })
            };
            var eN = n(49999),
                eC = e => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(eN.Z, {
                        disabled: e.disabled,
                        onClick: e.onClick,
                        isLoading: e.loading,
                        className: (0, d.cx)((0, u.m)(W().button, "w-full p-3 !font-semibold", e.disabled && "bg-gray-500")),
                        children: e.name
                    }), e.loading && (0, a.jsx)($.S$, {
                        className: (0, d.cx)((0, u.m)(W().migrateFont, "mt-2 text-center text-xs text-gray-400")),
                        children: e.name
                    })]
                }),
                ek = n(75277),
                eE = n(62049);

            function eA() {
                return (eA = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function eS(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            var ej = o.forwardRef(function(e, t) {
                    var n, a = (function(e) {
                            if (Array.isArray(e)) return e
                        }(n = (0, Y.hQ)()) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    a = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var i, s = e[Symbol.iterator](); !(a = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
                                } catch (e) {
                                    r = !0, o = e
                                } finally {
                                    try {
                                        a || null == s.return || s.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                                return n
                            }
                        }(n, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return eS(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eS(e, t)
                            }
                        }(n, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[1],
                        r = e.title,
                        i = e.size,
                        s = e.color,
                        l = e.overrides,
                        d = void 0 === l ? {} : l,
                        u = function(e, t) {
                            if (null == e) return {};
                            var n, a, r = function(e, t) {
                                if (null == e) return {};
                                var n, a, r = {},
                                    o = Object.keys(e);
                                for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < o.length; a++) n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                            }
                            return r
                        }(e, ["title", "size", "color", "overrides"]),
                        c = (0, J.vt)({
                            component: a.icons && a.icons.TriangleUp ? a.icons.TriangleUp : null
                        }, d && d.Svg ? (0, J.hq)(d.Svg) : {});
                    return o.createElement(K.Z, eA({
                        viewBox: "0 0 24 24",
                        ref: t,
                        title: void 0 === r ? "Triangle Up" : r,
                        size: i,
                        color: s,
                        overrides: {
                            Svg: c
                        }
                    }, u), o.createElement("path", {
                        d: "M12.7071 8.70711L17.1464 13.1464C17.4614 13.4614 17.2383 14 16.7929 14L7.20711 14C6.76165 14 6.53857 13.4614 6.85355 13.1464L11.2929 8.70711C11.6834 8.31658 12.3166 8.31658 12.7071 8.70711Z"
                    }))
                }),
                eO = n(5437);
            let eM = e => {
                    let {
                        title: t,
                        lists: n,
                        disc: r = !0,
                        expanded: i
                    } = e, [s, l] = (0, o.useState)(i);
                    return (0, a.jsx)("div", {
                        className: "min-w-screen-sm mb-4 min-h-12 w-full max-w-full rounded-[20px] bg-[#2B2B2BB2] px-2 text-white",
                        children: (0, a.jsx)(ek.Z, {
                            onChange: () => l(e => !e),
                            children: (0, a.jsx)(eE.Z, {
                                expanded: s,
                                onChange: e => {
                                    l(e.expanded)
                                },
                                overrides: {
                                    ToggleIcon: {
                                        component: e => {
                                            let {
                                                $expanded: t
                                            } = e;
                                            return t ? (0, a.jsx)(ej, {
                                                size: 20
                                            }) : (0, a.jsx)(eO.Z, {
                                                size: 20
                                            })
                                        }
                                    },
                                    Header: {
                                        style: {
                                            fontWeight: "500",
                                            fontSize: "14px",
                                            fontFamily: "Montserrat",
                                            lineHeight: "20px",
                                            paddingTop: "14px",
                                            paddingBottom: 0,
                                            paddingLeft: "24px",
                                            paddingRight: "24px",
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginTop: 0,
                                            marginBottom: 0,
                                            color: "#F7F8F8",
                                            ":hover": {
                                                color: "#F7F8F8"
                                            }
                                        }
                                    },
                                    Content: {
                                        style: {
                                            backgroundColor: "transparent",
                                            paddingLeft: "24px",
                                            paddingRight: "24px",
                                            paddingTop: "4px",
                                            paddingBottom: "12px",
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginTop: 0,
                                            marginBottom: 0
                                        }
                                    },
                                    PanelContainer: {
                                        style: {
                                            borderLeftWidth: "0",
                                            borderRightWidth: "0",
                                            borderTopWidth: "0",
                                            borderBottomWidth: "0",
                                            borderLeftStyle: "none",
                                            borderBottomStyle: "none",
                                            borderRightStyle: "none",
                                            borderTopStyle: "none",
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginTop: 0,
                                            marginBottom: 0
                                        }
                                    }
                                },
                                title: t,
                                children: (0, a.jsx)("div", {
                                    className: (0, d.cx)((0, u.m)(W().migrateFont), "mt-2 px-3 text-xs"),
                                    children: (0, a.jsx)("ul", {
                                        className: r ? "list-disc" : "list-none",
                                        children: n.map((e, t) => (0, a.jsx)("li", {
                                            className: "mt-2",
                                            children: e
                                        }, t))
                                    })
                                })
                            })
                        })
                    })
                },
                eR = () => {
                    let {
                        t: e
                    } = (0, r.$G)("common");
                    return (0, a.jsxs)("div", {
                        className: (0, d.cx)((0, u.m)(W().migrateBubbles), "ml-0"),
                        children: [(0, a.jsx)("h2", {
                            className: (0, d.cx)((0, u.m)(W().migrateFont, "mb-6 mt-8 text-base font-normal text-white md:mt-0")),
                            children: e("ASI_TOKEN_MIGRATION")
                        }), (0, a.jsx)(eM, {
                            expanded: !0,
                            lists: e("ASI_REBRANDING_AND_MERGING_TOKENS_LIST", {
                                returnObjects: !0
                            }),
                            title: e("ASI_REBRANDING_AND_MERGING_TOKENS")
                        }), (0, a.jsx)(eM, {
                            expanded: !1,
                            lists: e("ASI_MIGRATION_PHASE_2_DEPLOYMENT_AND_UPGRADE_GUIDE_LIST", {
                                returnObjects: !0
                            }),
                            title: e("ASI_MIGRATION_PHASE_2_DEPLOYMENT_AND_UPGRADE_GUIDE")
                        }), (0, a.jsx)(eM, {
                            expanded: !0,
                            disc: !1,
                            lists: [e("ASI_MIGRATION_DISCLAIMER")],
                            title: e("DISCLAIMER")
                        })]
                    })
                };
            var eI = n(78246),
                e_ = n(96577),
                eF = n.n(e_),
                eD = n(53972),
                eB = n(25384);
            let eL = e => {
                    let {
                        label: t,
                        value: n,
                        loading: r,
                        icon: o,
                        subValue: i,
                        subIcon: s
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "flex min-h-[30px] items-center justify-between",
                        children: [(0, a.jsx)(eD.ZP, {
                            className: "fontMontserrat text-[14px] font-normal leading-[22px] text-[#B4BCD0]",
                            children: t
                        }), r ? (0, a.jsx)("div", {
                            className: "flex gap-2",
                            children: (0, a.jsx)(eB.$, {})
                        }) : (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, a.jsx)("p", {
                                    className: "text-[14px] font-normal text-[#FFFFFF]",
                                    children: n
                                }), o && (0, a.jsx)(eF(), {
                                    loader: () => o,
                                    height: 20,
                                    width: 20,
                                    src: o,
                                    alt: t
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-end gap-2",
                                children: [(0, a.jsx)("p", {
                                    className: "text-[12px] font-normal text-[#FFFFFF]",
                                    children: i
                                }), s && (0, a.jsx)(eF(), {
                                    loader: () => s,
                                    height: 10,
                                    width: 10,
                                    className: "h-[15px] w-[15px]",
                                    src: s,
                                    alt: "".concat(t, " sub icon")
                                })]
                            })]
                        })]
                    })
                },
                eP = e => {
                    let {
                        migrationToken: t,
                        releasedToken: n,
                        vestingEndHeightDate: i,
                        migratedAmount: l,
                        unvestedAmount: c,
                        availableForRelease: p,
                        vestingDateLoading: m,
                        isVestingLoading: b
                    } = e, {
                        address: f
                    } = (0, A.mA)(), {
                        chain: g
                    } = (0, A.LN)(), [v, x] = (0, o.useState)(!1), {
                        t: h
                    } = (0, r.$G)("common"), T = (0, s.pm)(), w = L(t.abi, t.migrationContractAddress[null == g ? void 0 : g.id]), N = async () => {
                        try {
                            if (x(!0), w.prepare.isError) {
                                T({
                                    title: w.prepare.error.message || h("ERROR_MESSAGES.UNKNOWN_ERROR"),
                                    type: "error"
                                });
                                return
                            }
                            let e = await w.contract.writeAsync();
                            await (0, y.Mn)({
                                hash: e.hash
                            }), T({
                                title: h("RELEASE_WAS_SUCCESSFUL"),
                                description: "Code: ".concat(e.hash),
                                type: "success"
                            })
                        } catch (e) {
                            T({
                                title: h("ERROR_MESSAGES.ERROR"),
                                description: e.message || h("ERROR_MESSAGES.UNKNOWN_ERROR"),
                                type: "error"
                            })
                        } finally {
                            x(!1)
                        }
                    };
                    return (0, a.jsxs)("div", {
                        className: "flex flex-col items-start justify-between gap-7",
                        children: [(0, a.jsxs)("div", {
                            className: "flex w-full flex-col gap-[18px] rounded-2xl bg-[#2B2B2BB2] p-6",
                            "aria-labelledby": "vesting-details-title",
                            children: [(0, a.jsx)("h2", {
                                id: "vesting-details-title",
                                className: (0, d.cx)((0, u.m)(W().migrateFont, "min-h-7 text-[14px] font-medium text-[#F7F8F8] md:mt-0")),
                                children: h("MIGRATION_SUMMARY")
                            }), (0, a.jsxs)("div", {
                                className: "fontMontserrat flex flex-col justify-between gap-6 text-sm text-white",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, a.jsx)(eL, {
                                        label: h("MIGRATED_AMOUNT"),
                                        value: l,
                                        loading: b,
                                        icon: t.newTokenIcon,
                                        subValue: l / t.outputRatio,
                                        subIcon: t.oldTokenIcon
                                    }), (0, a.jsx)(eL, {
                                        label: h("UNVESTED_AMOUNT"),
                                        value: c,
                                        loading: b,
                                        icon: t.newTokenIcon
                                    }), (0, a.jsx)(eL, {
                                        label: h("AVAILABLE_FOR_RELEASE"),
                                        value: p,
                                        loading: b,
                                        icon: t.newTokenIcon
                                    }), (0, a.jsx)(eL, {
                                        label: h("TOTAL_RELEASED"),
                                        value: n,
                                        loading: b,
                                        icon: t.newTokenIcon
                                    }), (0, a.jsx)(eL, {
                                        label: h("VESTING_COMPLETES"),
                                        value: i,
                                        loading: b || m
                                    })]
                                }), (0, a.jsx)(eI.z, {
                                    size: "medium",
                                    className: "h-10 min-w-20 self-end focus:border-none",
                                    disabled: 0 >= Number(p) || v || !f,
                                    onClick: () => N(),
                                    children: v ? (0, a.jsx)(eB.$, {}) : h("RELEASE")
                                })]
                            })]
                        }), (0, a.jsx)(eM, {
                            expanded: !0,
                            disc: !1,
                            lists: [h("ASI_MIGRATION_VESTING_DISCLAIMER")],
                            title: h("DISCLAIMER")
                        })]
                    })
                },
                eG = e => {
                    let {
                        supportedTokens: t
                    } = e, {
                        amount: n,
                        hasInSufficientBalance: p,
                        hasAllowanceLimitExceeded: f,
                        migrationToken: g,
                        account: v,
                        tokenBalance: x,
                        isLoading: h,
                        wagmiChain: T,
                        setLoading: w,
                        handleAmountChange: N,
                        handleSelectedToken: C,
                        addTokenToMetaMask: k,
                        setCustomAmt: E,
                        resetValues: A,
                        releasedToken: S,
                        vestingEndHeightDate: j,
                        migratedAmount: O,
                        unvestedAmount: M,
                        availableForRelease: R,
                        isVestingLoading: I,
                        vestingDateLoading: _
                    } = P(t), F = D(g.migrationContractAddress[null == T ? void 0 : T.id], g.abi, g.migrationContractFunctionName, n.oldAmount, g.oldTokenDecimals), L = B(g.oldTokenContractAddress[null == T ? void 0 : T.id], g.migrationContractAddress[null == T ? void 0 : T.id], v, T), {
                        t: G
                    } = (0, r.$G)("common"), $ = (0, i.d)(), U = (0, s.pm)(), V = async () => {
                        try {
                            if (w(!0), L.prepare.isError) U({
                                title: G("ERROR_MESSAGES.ERROR"),
                                description: JSON.stringify(L.prepare.error),
                                type: "error"
                            });
                            else {
                                m()(() => Z(), 3e4);
                                let e = await L.contract.writeAsync();
                                await (0, y.Mn)({
                                    hash: e.hash
                                }), await F.prepare.refetch(), U({
                                    title: G("ERROR_MESSAGES.APPROVED_SUCCESSFULLY"),
                                    description: "Code: ".concat(e.hash),
                                    type: "success"
                                })
                            }
                        } catch (e) {
                            U({
                                title: G("ERROR_MESSAGES.FAILED_TO_APPROVE"),
                                description: JSON.stringify(null == e ? void 0 : e.details),
                                type: "error"
                            })
                        } finally {
                            w(!1)
                        }
                    }, Z = () => {
                        h && U({
                            title: G("DELAYED_TXN"),
                            description: "",
                            type: "info"
                        })
                    }, Y = async () => {
                        try {
                            if (w(!0), "error" === F.prepare.status) U({
                                title: G("ERROR_MESSAGES.ERROR"),
                                description: JSON.stringify(F.prepare.error),
                                type: "error"
                            });
                            else {
                                m()(() => Z(), 3e4);
                                let e = await F.contract.writeAsync();
                                await (0, y.Mn)({
                                    hash: e.hash
                                }), A(), U({
                                    title: G("TOKEN_MIGRATED_SUCCESSFULLY"),
                                    description: "Code: ".concat(e.hash),
                                    type: "success"
                                })
                            }
                        } catch (e) {
                            U({
                                title: G("ERROR_MESSAGES.ERROR"),
                                description: JSON.stringify(null == e ? void 0 : e.details),
                                type: "error"
                            })
                        } finally {
                            w(!1)
                        }
                    }, J = (0, o.useMemo)(() => "/migrate-asi" === H().pathname, [H().pathname]);
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col items-start gap-5 md:flex-row lg:gap-16 xl:gap-44 xl:pr-8",
                            children: [(0, a.jsxs)("div", {
                                className: "w-full md:w-1/2",
                                children: [(0, a.jsx)("div", {
                                    className: (0, d.cx)((0, u.m)(W().formShadow), "min-w-full rounded-t-xl p-5 text-white"),
                                    children: (0, a.jsx)("h2", {
                                        className: (0, d.cx)((0, u.m)(W().heading), "text-lg font-normal text-[#B4BCD0]"),
                                        children: J ? G("MIGRATION_ASI_DESCRIPTION") : G("MIGRATION_DESCRIPTION")
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: (0, d.cx)((0, u.m)(W().bgMigrate), "-mt-2 min-w-full rounded-b-xl p-5  text-white"),
                                    children: [(0, a.jsx)("div", {
                                        className: "mb-6",
                                        children: (0, a.jsx)(ew, {})
                                    }), (0, a.jsx)(ex, {
                                        tokenSymbol: g.oldTokenSymbol,
                                        icon: g.oldTokenIcon,
                                        input: n.oldAmount,
                                        onTokenSelection: e => {
                                            C(e.oldTokenSymbol)
                                        },
                                        supportedToken: t,
                                        onChange: N,
                                        onClickMax: () => {
                                            E(Number(x))
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: "my-1 flex w-full justify-center",
                                        children: (0, a.jsx)(l.x, {
                                            size: $ ? "medium" : "large",
                                            circle: !0,
                                            icon: "ph:arrow-down",
                                            variantColor: "quaternary",
                                            className: "mx-auto"
                                        })
                                    }), (0, a.jsx)(z, {
                                        tokenSymbol: g.newTokenSymbol,
                                        icon: g.newTokenIcon,
                                        output: n.newAmount
                                    }), (0, a.jsxs)("div", {
                                        className: "my-8",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex justify-between dark:text-white",
                                            children: [(0, a.jsxs)("h4", {
                                                className: "text-sm",
                                                children: [G("BALANCE"), ":", (0, a.jsx)("span", {
                                                    className: "mx-1 text-primary",
                                                    children: null == x ? void 0 : x.toString()
                                                }), g.oldTokenSymbol, " (old)"]
                                            }), (0, a.jsx)("div", {
                                                className: "mr-0",
                                                children: (0, a.jsxs)("button", {
                                                    className: "flex cursor-pointer items-center space-x-2 rounded-full text-white",
                                                    onClick: k,
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-sm",
                                                        children: G("ADD_TO_WALLET")
                                                    }), (0, a.jsx)("img", {
                                                        className: "w-6",
                                                        src: "image/wallets/metamask.svg"
                                                    })]
                                                })
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "my-4 flex items-center gap-1 text-sm dark:text-white",
                                            children: [(0, a.jsxs)("h4", {
                                                children: [G("PHASE"), " 1 : ", G("CONVERSION_RATE"), " :"]
                                            }), (0, a.jsxs)("h4", {
                                                children: ["1 ", g.oldTokenSymbol]
                                            }), (0, a.jsx)(c.JO, {
                                                icon: "ic:outline-swap-horiz",
                                                className: "text-xl font-light text-white"
                                            }), (0, a.jsxs)("h4", {
                                                children: [g.outputRatio, " ", g.newTokenSymbol]
                                            })]
                                        }), (0, a.jsxs)("h2", {
                                            className: "text-xs",
                                            children: [g.oldTokenSymbol, " tokens will migrate to", " ", g.newTokenSymbol, " at a conversion rate of 1", " ", g.oldTokenSymbol, " to ", g.outputRatio, " ", g.newTokenSymbol]
                                        })]
                                    }), !v.isConnected && (0, a.jsx)("div", {
                                        className: "flex w-full flex-row justify-center",
                                        children: (0, a.jsx)(b.Z, {})
                                    }), v.isConnected && !p && !f && (0, a.jsx)(eC, {
                                        onClick: Y,
                                        loading: h,
                                        name: G(h ? "TXN_IN_PROGRESS" : "MIGRATION"),
                                        disabled: h || 0 >= Number(n.oldAmount)
                                    }), v.isConnected && !p && f && (0, a.jsx)(eC, {
                                        name: G(h ? "TXN_IN_PROGRESS" : "APPROVE"),
                                        loading: h,
                                        onClick: V,
                                        disabled: h
                                    }), v.isConnected && p && (0, a.jsx)(eC, {
                                        name: "".concat(G("INSUFFICIENT"), " ").concat(G("BALANCE")),
                                        loading: h,
                                        onClick: null,
                                        disabled: h
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "flex w-full flex-col gap-5 md:w-1/2",
                                children: J && ((null == g ? void 0 : g.vesting) ? (0, a.jsx)(eP, {
                                    migrationToken: g,
                                    releasedToken: S,
                                    vestingEndHeightDate: j,
                                    migratedAmount: O,
                                    unvestedAmount: M,
                                    availableForRelease: R,
                                    vestingDateLoading: _,
                                    isVestingLoading: I
                                }) : (0, a.jsx)(eR, {}))
                            })]
                        })
                    })
                };
            var e$ = function(e) {
                let {
                    title: t,
                    description: n,
                    supportedTokens: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: "relative flex flex-col gap-4 p-4 md:p-0",
                    children: [(0, a.jsx)("div", {
                        className: "text-3xl font-bold text-white",
                        children: t
                    }), (0, a.jsx)("div", {
                        className: "pb-4 text-2xl font-bold text-[#B4BCD0] ",
                        children: n
                    }), (0, a.jsx)(eG, {
                        supportedTokens: r
                    })]
                })
            }
        },
        41704: function(e, t, n) {
            "use strict";
            var a = n(52322);
            n(2784);
            var r = n(98614),
                o = n(57143),
                i = n(77926),
                s = n(28589),
                l = n(94862),
                d = n(6687),
                u = n(14013);
            t.Z = e => {
                let {
                    button: t
                } = e, n = (0, u.d)(), {
                    t: c
                } = (0, r.$G)("common"), {
                    connect: p,
                    account: m
                } = (0, d.aF)();
                return (0, a.jsx)(a.Fragment, {
                    children: m ? null : (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)(o.k.Root, {
                            children: [(0, a.jsx)(o.k.Trigger, {
                                asChild: !0,
                                children: t || (0, a.jsx)(s.x, {
                                    id: "connectButton",
                                    variant: "default",
                                    variantStyle: "primary",
                                    disabled: !1,
                                    size: "small",
                                    className: "font-bold",
                                    children: c("CONNECT")
                                })
                            }), (0, a.jsxs)(o.k.Content, {
                                variant: "unstyled",
                                className: "max-h-full bg-blue-700 text-white",
                                fullscreen: n,
                                children: [(0, a.jsx)(o.k.Title, {
                                    children: (0, a.jsx)(i.Uo.WalletHeader, {
                                        t: c
                                    })
                                }), (0, a.jsx)(o.k.Body, {
                                    className: "my-0",
                                    children: (0, a.jsx)(l.b, {
                                        connectWallet: p
                                    })
                                }), (0, a.jsx)(o.k.Close, {})]
                            })]
                        })
                    })
                })
            }
        },
        31642: function(e, t, n) {
            "use strict";
            n.d(t, {
                U5: function() {
                    return p
                },
                VH: function() {
                    return u
                },
                y5: function() {
                    return c
                }
            });
            var a = n(58194),
                r = n(1005),
                o = n(42143),
                i = n(89496),
                s = n(64749);
            let l = e => {
                    try {
                        return a.isAddress(e)
                    } catch (e) {
                        throw Error(e)
                    }
                },
                d = {},
                u = async (e, t) => {
                    let n = (0, s.xW)(e);
                    try {
                        d[e] || (d[e] = new r.r(n.rpcUrls.default.http[0]));
                        let a = d[e];
                        if (l(t)) return await a.getSigner(t);
                        return a
                    } catch (e) {
                        return null
                    }
                },
                c = async (e, t) => {
                    let n = await u(t, e);
                    return o.MulticallWrapper.wrap(n)
                },
                p = async (e, t, n, a) => {
                    try {
                        if (e === i.g3 && a) return await u(a, t);
                        return t ? await n.getSigner() : n
                    } catch (e) {
                        return null
                    }
                }
        },
        25384: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return o
                }
            });
            var a = n(52322),
                r = n(61335);

            function o(e) {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    width: "auto",
                    className: (0, r.cx)("animate-spin h-[0.8em]", t),
                    ...n,
                    children: (0, a.jsx)("path", {
                        d: "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                    })
                })
            }
        },
        49771: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return c
                }
            });
            var a = n(52322),
                r = n(2784),
                o = n(61335),
                i = n(17973),
                s = n(73179),
                l = n(25384),
                d = n(50274);
            let u = e => {
                    switch (e) {
                        case "xsmall":
                        default:
                            return "12px";
                        case "small":
                            return "16px";
                        case "medium":
                            return "20px";
                        case "large":
                            return "24px"
                    }
                },
                c = r.forwardRef(function(e, t) {
                    let {
                        asChild: n,
                        icon: r,
                        children: c,
                        variant: y,
                        variantColor: b,
                        size: f = "xsmall",
                        disabled: g,
                        loading: v,
                        circle: x,
                        className: h,
                        ...T
                    } = e, w = n ? i.g7 : "button", N = (0, s.B3)(t);
                    return (0, a.jsxs)(w, {
                        ref: N,
                        className: (0, o.cx)(p({
                            variant: y,
                            size: f,
                            variantColor: b,
                            disabled: g,
                            loading: v,
                            circle: x
                        }), h),
                        disabled: !!(g || v),
                        ...T,
                        children: [r && !v && (0, a.jsx)(d.JO, {
                            icon: r,
                            className: m({
                                size: f
                            }),
                            style: {
                                fontSize: u(f)
                            }
                        }), v && (0, a.jsx)(l.$, {
                            className: m({
                                size: f
                            })
                        }), (0, a.jsx)(i.A4, {
                            children: c
                        })]
                    })
                }),
                p = (0, o.j)("inline-flex items-center justify-center focus:ouline-none", {
                    variants: {
                        variant: {
                            plain: "shadow-card",
                            ghost: "",
                            outline: "",
                            text: ""
                        },
                        trims: {
                            default: "rounded",
                            circle: "rounded-full"
                        },
                        size: {
                            xsmall: "w-4 h-4 text-sm",
                            small: "w-7 h-7 text-md",
                            medium: "w-9 h-9 text-md",
                            large: "w-14 h-14 text-xl"
                        },
                        variantColor: {
                            neutral: "rgba(38, 50, 56, 0.5)",
                            primary: "",
                            secondary: "",
                            tertiary: "",
                            quaternary: "",
                            quinary: "",
                            accent: "",
                            accentlight: "",
                            warning: "",
                            danger: ""
                        },
                        disabled: {
                            true: "cursor-not-allowed"
                        },
                        loading: {
                            true: "cursor-progress"
                        },
                        circle: {
                            true: "rounded-full",
                            false: "rounded"
                        }
                    },
                    compoundVariants: [{
                        variant: "plain",
                        variantColor: "primary",
                        disabled: !1,
                        className: "bg-green-25 text-black"
                    }, {
                        variant: "plain",
                        variantColor: "primary",
                        loading: !1,
                        disabled: !1,
                        className: "hover:bg-accent hover:text-black"
                    }, {
                        variant: "plain",
                        variantColor: "secondary",
                        disabled: !1,
                        className: "bg-purple-500 text-white"
                    }, {
                        variant: "plain",
                        variantColor: "secondary",
                        loading: !1,
                        disabled: !1,
                        className: "hover:bg-purple-500 hover:text-white"
                    }, {
                        variant: "plain",
                        variantColor: "tertiary",
                        disabled: !1,
                        className: "bg-blue-300/25"
                    }, {
                        variant: "plain",
                        variantColor: "tertiary",
                        loading: !1,
                        disabled: !1,
                        className: "hover:bg-blue-300/25 hover:text-black"
                    }, {
                        variant: "plain",
                        variantColor: "quaternary",
                        disabled: !1,
                        className: "bg-blue-500/75 text-white"
                    }, {
                        variant: "plain",
                        variantColor: "quaternary",
                        loading: !1,
                        disabled: !1,
                        className: "hover:bbg-blue-500/75 hover:text-white"
                    }, {
                        variant: "plain",
                        variantColor: "accent",
                        loading: !1,
                        disabled: !1,
                        className: "hover:bg-white hover:text-primary"
                    }, {
                        variant: "plain",
                        variantColor: "accent",
                        disabled: !1,
                        className: "bg-white text-primary"
                    }, {
                        variant: "plain",
                        variantColor: "warning",
                        disabled: !1,
                        className: "bg-orange-400 text-white"
                    }, {
                        variant: "plain",
                        variantColor: "warning",
                        loading: !1,
                        disabled: !1,
                        className: "hover:bg-orange-600"
                    }, {
                        variant: "plain",
                        variantColor: "danger",
                        disabled: !1,
                        className: "bg-red-400 text-white"
                    }, {
                        variant: "plain",
                        variantColor: "danger",
                        disabled: !1,
                        loading: !1,
                        className: "hover:bg-red-600"
                    }, {
                        variant: "plain",
                        disabled: !0,
                        className: "bg-grey-50 text-grey-300"
                    }, {
                        variant: "outline",
                        variantColor: "primary",
                        className: "text-primary border border-2  border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "primary",
                        className: "hover:bg-white hover:text-primary border border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "accent",
                        className: "text-primary border border-2 border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "accent",
                        className: "hover:bg-accent hover:text-primary border border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "secondary",
                        className: "text-green-25 border border-2 border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "secondary",
                        loading: !1,
                        className: "hover:text-green-25 border border-2 border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "tertiary",
                        className: "text-blue-500 border border-2 border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "tertiary",
                        className: "hover:text-blue-500  border border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "warning",
                        disabled: !1,
                        className: "text-orange-500  border border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "warning",
                        loading: !1,
                        disabled: !1,
                        className: "hover:text-orange-600  border border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "danger",
                        disabled: !1,
                        className: "text-red-500  border border-grey-150"
                    }, {
                        variant: "outline",
                        variantColor: "danger",
                        disabled: !1,
                        loading: !1,
                        className: "hover:text-red-600  border border-grey-150"
                    }, {
                        variant: "outline",
                        disabled: !0,
                        className: "text-grey-300"
                    }, {
                        variant: "ghost",
                        variantColor: "neutral",
                        disabled: !1,
                        className: "text-black"
                    }, {
                        variant: "ghost",
                        variantColor: "primary",
                        disabled: !1,
                        className: "text-primary"
                    }, {
                        variant: "ghost",
                        variantColor: "primary",
                        loading: !1,
                        disabled: !1,
                        className: "hover:bg-white hover:text-primary border-primary"
                    }, {
                        variant: "ghost",
                        variantColor: "accent",
                        disabled: !1,
                        className: "text-primary"
                    }, {
                        variant: "ghost",
                        variantColor: "accent",
                        loading: !1,
                        disabled: !1,
                        className: "hover:bg-accent hover:text-primary"
                    }, {
                        variant: "ghost",
                        variantColor: "secondary",
                        disabled: !1,
                        className: "text-green-25"
                    }, {
                        variant: "ghost",
                        variantColor: "secondary",
                        loading: !1,
                        disabled: !1,
                        className: "hover:text-green-25"
                    }, {
                        variant: "ghost",
                        variantColor: "tertiary",
                        disabled: !1,
                        className: "text-blue-500"
                    }, {
                        variant: "ghost",
                        variantColor: "tertiary",
                        loading: !1,
                        disabled: !1,
                        className: "hover:text-blue-500"
                    }, {
                        variant: "ghost",
                        variantColor: "warning",
                        disabled: !1,
                        className: "text-orange-500"
                    }, {
                        variant: "ghost",
                        variantColor: "warning",
                        loading: !1,
                        disabled: !1,
                        className: "hover:text-orange-600"
                    }, {
                        variant: "ghost",
                        variantColor: "danger",
                        disabled: !1,
                        className: "text-red-500"
                    }, {
                        variant: "ghost",
                        variantColor: "danger",
                        disabled: !1,
                        loading: !1,
                        className: "hover:text-red-600"
                    }, {
                        variant: "ghost",
                        disabled: !0,
                        className: "text-grey-300"
                    }],
                    defaultVariants: {
                        variant: "plain",
                        circle: !1,
                        size: "medium",
                        variantColor: "primary",
                        disabled: !1,
                        loading: !1
                    }
                }),
                m = (0, o.j)(["m-0"], {
                    variants: {
                        size: {
                            xsmall: "text-base leading-4",
                            small: "text-xxl leading-5",
                            medium: "text-2xl leading-6",
                            large: "text-2xl leading-6"
                        }
                    },
                    defaultVariants: {
                        size: "medium"
                    }
                })
        },
        50695: function(e) {
            e.exports = {
                bgMigrate: "migrationpanel_bgMigrate__nbPjt",
                migrateFont: "migrationpanel_migrateFont__tXogp",
                formShadow: "migrationpanel_formShadow__rgPdv",
                heading: "migrationpanel_heading__E00Wx",
                label: "migrationpanel_label__5YAnZ",
                button: "migrationpanel_button__y_Hlr",
                networkSelector: "migrationpanel_networkSelector__al1qK",
                migrateBubbles: "migrationpanel_migrateBubbles__uQTwM"
            }
        },
        52060: function(e, t, n) {
            "use strict";

            function a(e, t) {
                let [n, a = "0"] = e.split("."), r = n.startsWith("-");
                if (r && (n = n.slice(1)), a = a.replace(/(0+)$/, ""), 0 === t) 1 === Math.round(Number(`.${a}`)) && (n = `${BigInt(n)+1n}`), a = "";
                else if (a.length > t) {
                    let [e, r, o] = [a.slice(0, t - 1), a.slice(t - 1, t), a.slice(t)], i = Math.round(Number(`${r}.${o}`));
                    (a = i > 9 ? `${BigInt(e)+BigInt(1)}0`.padStart(e.length + 1, "0") : `${e}${i}`).length > t && (a = a.slice(1), n = `${BigInt(n)+1n}`), a = a.slice(0, t)
                } else a = a.padEnd(t, "0");
                return BigInt(`${r?"-":""}${n}${a}`)
            }
            n.d(t, {
                v: function() {
                    return a
                }
            })
        }
    }
]);