(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4355], {
        27728: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(81293);
            let i = r(46756);

            function n(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(52887), t.jQ = 64, t.KS = 64, t.aP = 32;
            let s = new Uint8Array(32);
            s[0] = 9;
            let o = n(),
                a = n([1]),
                c = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                l = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                u = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function h(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function p(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function f(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function d(e, t) {
                let r = n(),
                    i = n();
                for (let e = 0; e < 16; e++) i[e] = t[e];
                p(i), p(i), p(i);
                for (let e = 0; e < 2; e++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, f(i, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
            }
            n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function g(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function y(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function v(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    l = 0,
                    u = 0,
                    h = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    _ = 0,
                    w = 0,
                    b = 0,
                    I = 0,
                    E = 0,
                    P = 0,
                    S = 0,
                    O = 0,
                    x = 0,
                    R = 0,
                    C = 0,
                    A = 0,
                    N = 0,
                    T = 0,
                    j = 0,
                    q = 0,
                    D = 0,
                    L = r[0],
                    z = r[1],
                    k = r[2],
                    M = r[3],
                    $ = r[4],
                    U = r[5],
                    H = r[6],
                    V = r[7],
                    K = r[8],
                    B = r[9],
                    F = r[10],
                    W = r[11],
                    Z = r[12],
                    G = r[13],
                    J = r[14],
                    Q = r[15];
                s += (i = t[0]) * L, o += i * z, a += i * k, c += i * M, l += i * $, u += i * U, h += i * H, p += i * V, f += i * K, d += i * B, g += i * F, y += i * W, v += i * Z, m += i * G, _ += i * J, w += i * Q, o += (i = t[1]) * L, a += i * z, c += i * k, l += i * M, u += i * $, h += i * U, p += i * H, f += i * V, d += i * K, g += i * B, y += i * F, v += i * W, m += i * Z, _ += i * G, w += i * J, b += i * Q, a += (i = t[2]) * L, c += i * z, l += i * k, u += i * M, h += i * $, p += i * U, f += i * H, d += i * V, g += i * K, y += i * B, v += i * F, m += i * W, _ += i * Z, w += i * G, b += i * J, I += i * Q, c += (i = t[3]) * L, l += i * z, u += i * k, h += i * M, p += i * $, f += i * U, d += i * H, g += i * V, y += i * K, v += i * B, m += i * F, _ += i * W, w += i * Z, b += i * G, I += i * J, E += i * Q, l += (i = t[4]) * L, u += i * z, h += i * k, p += i * M, f += i * $, d += i * U, g += i * H, y += i * V, v += i * K, m += i * B, _ += i * F, w += i * W, b += i * Z, I += i * G, E += i * J, P += i * Q, u += (i = t[5]) * L, h += i * z, p += i * k, f += i * M, d += i * $, g += i * U, y += i * H, v += i * V, m += i * K, _ += i * B, w += i * F, b += i * W, I += i * Z, E += i * G, P += i * J, S += i * Q, h += (i = t[6]) * L, p += i * z, f += i * k, d += i * M, g += i * $, y += i * U, v += i * H, m += i * V, _ += i * K, w += i * B, b += i * F, I += i * W, E += i * Z, P += i * G, S += i * J, O += i * Q, p += (i = t[7]) * L, f += i * z, d += i * k, g += i * M, y += i * $, v += i * U, m += i * H, _ += i * V, w += i * K, b += i * B, I += i * F, E += i * W, P += i * Z, S += i * G, O += i * J, x += i * Q, f += (i = t[8]) * L, d += i * z, g += i * k, y += i * M, v += i * $, m += i * U, _ += i * H, w += i * V, b += i * K, I += i * B, E += i * F, P += i * W, S += i * Z, O += i * G, x += i * J, R += i * Q, d += (i = t[9]) * L, g += i * z, y += i * k, v += i * M, m += i * $, _ += i * U, w += i * H, b += i * V, I += i * K, E += i * B, P += i * F, S += i * W, O += i * Z, x += i * G, R += i * J, C += i * Q, g += (i = t[10]) * L, y += i * z, v += i * k, m += i * M, _ += i * $, w += i * U, b += i * H, I += i * V, E += i * K, P += i * B, S += i * F, O += i * W, x += i * Z, R += i * G, C += i * J, A += i * Q, y += (i = t[11]) * L, v += i * z, m += i * k, _ += i * M, w += i * $, b += i * U, I += i * H, E += i * V, P += i * K, S += i * B, O += i * F, x += i * W, R += i * Z, C += i * G, A += i * J, N += i * Q, v += (i = t[12]) * L, m += i * z, _ += i * k, w += i * M, b += i * $, I += i * U, E += i * H, P += i * V, S += i * K, O += i * B, x += i * F, R += i * W, C += i * Z, A += i * G, N += i * J, T += i * Q, m += (i = t[13]) * L, _ += i * z, w += i * k, b += i * M, I += i * $, E += i * U, P += i * H, S += i * V, O += i * K, x += i * B, R += i * F, C += i * W, A += i * Z, N += i * G, T += i * J, j += i * Q, _ += (i = t[14]) * L, w += i * z, b += i * k, I += i * M, E += i * $, P += i * U, S += i * H, O += i * V, x += i * K, R += i * B, C += i * F, A += i * W, N += i * Z, T += i * G, j += i * J, q += i * Q, w += (i = t[15]) * L, b += i * z, I += i * k, E += i * M, P += i * $, S += i * U, O += i * H, x += i * V, R += i * K, C += i * B, A += i * F, N += i * W, T += i * Z, j += i * G, q += i * J, D += i * Q, s += 38 * b, o += 38 * I, a += 38 * E, c += 38 * P, l += 38 * S, u += 38 * O, h += 38 * x, p += 38 * R, f += 38 * C, d += 38 * A, g += 38 * N, y += 38 * T, v += 38 * j, m += 38 * q, _ += 38 * D, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = l, e[5] = u, e[6] = h, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = _, e[15] = w
            }

            function m(e, t) {
                let r = n(),
                    i = n(),
                    s = n(),
                    o = n(),
                    a = n(),
                    l = n(),
                    u = n(),
                    h = n(),
                    p = n();
                y(r, e[1], e[0]), y(p, t[1], t[0]), v(r, r, p), g(i, e[0], e[1]), g(p, t[0], t[1]), v(i, i, p), v(s, e[3], t[3]), v(s, s, c), v(o, e[2], t[2]), g(o, o, o), y(a, i, r), y(l, o, s), g(u, o, s), g(h, i, r), v(e[0], a, l), v(e[1], h, u), v(e[2], u, l), v(e[3], a, h)
            }

            function _(e, t, r) {
                for (let i = 0; i < 4; i++) f(e[i], t[i], r)
            }

            function w(e, t) {
                let r = n(),
                    i = n(),
                    s = n();
                (function(e, t) {
                    let r;
                    let i = n();
                    for (r = 0; r < 16; r++) i[r] = t[r];
                    for (r = 253; r >= 0; r--) v(i, i, i), 2 !== r && 4 !== r && v(i, i, t);
                    for (r = 0; r < 16; r++) e[r] = i[r]
                })(s, t[2]), v(r, t[0], s), v(i, t[1], s), d(e, i), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return d(t, e), 1 & t[0]
                }(r) << 7
            }

            function b(e, t) {
                let r = [n(), n(), n(), n()];
                h(r[0], l), h(r[1], u), h(r[2], a), v(r[3], l, u),
                    function(e, t, r) {
                        h(e[0], o), h(e[1], a), h(e[2], a), h(e[3], o);
                        for (let i = 255; i >= 0; --i) {
                            let n = r[i / 8 | 0] >> (7 & i) & 1;
                            _(e, t, n), m(t, e), m(e, e), _(e, t, n)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
                let r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let s = new Uint8Array(32),
                    o = [n(), n(), n(), n()];
                b(o, r), w(s, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            };
            let I = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function E(e, t) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * I[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), t[n] -= 256 * r;
                    t[n] += r, t[i] = 0
                }
                for (n = 0, r = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * I[n], r = t[n] >> 8, t[n] &= 255;
                for (n = 0; n < 32; n++) t[n] -= r * I[n];
                for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i]
            }

            function P(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                E(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    s = [n(), n(), n(), n()],
                    o = (0, i.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let l = c.digest();
                c.clean(), P(l), b(s, l), w(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let u = c.digest();
                P(u);
                for (let e = 0; e < 32; e++) r[e] = l[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += u[e] * o[t];
                return E(a.subarray(32), r), a
            }
        },
        46756: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(9437),
                n = r(52887);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], e, 8 * s), i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, n, s, a, c) {
                for (var l, u, h, p, f, d, g, y, v = r[0], m = r[1], _ = r[2], w = r[3], b = r[4], I = r[5], E = r[6], P = r[7], S = n[0], O = n[1], x = n[2], R = n[3], C = n[4], A = n[5], N = n[6], T = n[7]; c >= 128;) {
                    for (var j = 0; j < 16; j++) {
                        var q = 8 * j + a;
                        e[j] = i.readUint32BE(s, q), t[j] = i.readUint32BE(s, q + 4)
                    }
                    for (var j = 0; j < 80; j++) {
                        var D = v,
                            L = m,
                            z = _,
                            k = w,
                            M = b,
                            $ = I,
                            U = E,
                            H = P,
                            V = S,
                            K = O,
                            B = x,
                            F = R,
                            W = C,
                            Z = A,
                            G = N,
                            J = T;
                        if (l = P, f = 65535 & (u = T), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = (b >>> 14 | C << 18) ^ (b >>> 18 | C << 14) ^ (C >>> 9 | b << 23), f += 65535 & (u = (C >>> 14 | b << 18) ^ (C >>> 18 | b << 14) ^ (b >>> 9 | C << 23)), d += u >>> 16, g += 65535 & l, y += l >>> 16, l = b & I ^ ~b & E, f += 65535 & (u = C & A ^ ~C & N), d += u >>> 16, g += 65535 & l, y += l >>> 16, l = o[2 * j], f += 65535 & (u = o[2 * j + 1]), d += u >>> 16, g += 65535 & l, y += l >>> 16, l = e[j % 16], f += 65535 & (u = t[j % 16]), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, h = 65535 & g | y << 16, p = 65535 & f | d << 16, l = h, f = 65535 & (u = p), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = (v >>> 28 | S << 4) ^ (S >>> 2 | v << 30) ^ (S >>> 7 | v << 25), f += 65535 & (u = (S >>> 28 | v << 4) ^ (v >>> 2 | S << 30) ^ (v >>> 7 | S << 25)), d += u >>> 16, g += 65535 & l, y += l >>> 16, l = v & m ^ v & _ ^ m & _, f += 65535 & (u = S & O ^ S & x ^ O & x), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, H = 65535 & g | y << 16, J = 65535 & f | d << 16, l = k, f = 65535 & (u = F), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = h, f += 65535 & (u = p), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, k = 65535 & g | y << 16, F = 65535 & f | d << 16, m = D, _ = L, w = z, b = k, I = M, E = $, P = U, v = H, O = V, x = K, R = B, C = F, A = W, N = Z, T = G, S = J, j % 16 == 15)
                            for (var q = 0; q < 16; q++) l = e[q], f = 65535 & (u = t[q]), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = e[(q + 9) % 16], f += 65535 & (u = t[(q + 9) % 16]), d += u >>> 16, g += 65535 & l, y += l >>> 16, l = ((h = e[(q + 1) % 16]) >>> 1 | (p = t[(q + 1) % 16]) << 31) ^ (h >>> 8 | p << 24) ^ h >>> 7, f += 65535 & (u = (p >>> 1 | h << 31) ^ (p >>> 8 | h << 24) ^ (p >>> 7 | h << 25)), d += u >>> 16, g += 65535 & l, y += l >>> 16, l = ((h = e[(q + 14) % 16]) >>> 19 | (p = t[(q + 14) % 16]) << 13) ^ (p >>> 29 | h << 3) ^ h >>> 6, f += 65535 & (u = (p >>> 19 | h << 13) ^ (h >>> 29 | p << 3) ^ (p >>> 6 | h << 26)), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, e[q] = 65535 & g | y << 16, t[q] = 65535 & f | d << 16
                    }
                    l = v, f = 65535 & (u = S), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = r[0], f += 65535 & (u = n[0]), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[0] = v = 65535 & g | y << 16, n[0] = S = 65535 & f | d << 16, l = m, f = 65535 & (u = O), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = r[1], f += 65535 & (u = n[1]), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[1] = m = 65535 & g | y << 16, n[1] = O = 65535 & f | d << 16, l = _, f = 65535 & (u = x), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = r[2], f += 65535 & (u = n[2]), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[2] = _ = 65535 & g | y << 16, n[2] = x = 65535 & f | d << 16, l = w, f = 65535 & (u = R), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = r[3], f += 65535 & (u = n[3]), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[3] = w = 65535 & g | y << 16, n[3] = R = 65535 & f | d << 16, l = b, f = 65535 & (u = C), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = r[4], f += 65535 & (u = n[4]), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[4] = b = 65535 & g | y << 16, n[4] = C = 65535 & f | d << 16, l = I, f = 65535 & (u = A), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = r[5], f += 65535 & (u = n[5]), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[5] = I = 65535 & g | y << 16, n[5] = A = 65535 & f | d << 16, l = E, f = 65535 & (u = N), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = r[6], f += 65535 & (u = n[6]), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[6] = E = 65535 & g | y << 16, n[6] = N = 65535 & f | d << 16, l = P, f = 65535 & (u = T), d = u >>> 16, g = 65535 & l, y = l >>> 16, l = r[7], f += 65535 & (u = n[7]), d += u >>> 16, g += 65535 & l, y += l >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[7] = P = 65535 & g | y << 16, n[7] = T = 65535 & f | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        74355: function(e, t, r) {
            "use strict";
            let i;
            r.r(t), r.d(t, {
                EthereumProvider: function() {
                    return iF
                },
                OPTIONAL_EVENTS: function() {
                    return ij
                },
                OPTIONAL_METHODS: function() {
                    return iN
                },
                REQUIRED_EVENTS: function() {
                    return iT
                },
                REQUIRED_METHODS: function() {
                    return iA
                },
                default: function() {
                    return iB
                }
            });
            var n = r(22699),
                s = r.n(n),
                o = r(48623);
            let a = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                c = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                l = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function u(e, t) {
                if ("__proto__" === e || "constructor" === e && t && "object" == typeof t && "prototype" in t) {
                    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
                    return
                }
                return t
            }

            function h(e, t = {}) {
                if ("string" != typeof e) return e;
                let r = e.trim();
                if ('"' === e[0] && '"' === e.at(-1) && !e.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    let e = r.toLowerCase();
                    if ("true" === e) return !0;
                    if ("false" === e) return !1;
                    if ("undefined" === e) return;
                    if ("null" === e) return null;
                    if ("nan" === e) return Number.NaN;
                    if ("infinity" === e) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === e) return Number.NEGATIVE_INFINITY
                }
                if (!l.test(e)) {
                    if (t.strict) throw SyntaxError("[destr] Invalid JSON");
                    return e
                }
                try {
                    if (a.test(e) || c.test(e)) {
                        if (t.strict) throw Error("[destr] Possible prototype pollution");
                        return JSON.parse(e, u)
                    }
                    return JSON.parse(e)
                } catch (r) {
                    if (t.strict) throw r;
                    return e
                }
            }
            var p = r(48834).Buffer;

            function f(e, ...t) {
                try {
                    var r;
                    return (r = e(...t)) && "function" == typeof r.then ? r : Promise.resolve(r)
                } catch (e) {
                    return Promise.reject(e)
                }
            }

            function d(e) {
                if (function(e) {
                        let t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }(e)) return String(e);
                if (function(e) {
                        let t = Object.getPrototypeOf(e);
                        return !t || t.isPrototypeOf(Object)
                    }(e) || Array.isArray(e)) return JSON.stringify(e);
                if ("function" == typeof e.toJSON) return d(e.toJSON());
                throw Error("[unstorage] Cannot stringify value!")
            }
            let g = "base64:";

            function y(e) {
                return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function v(e) {
                return (e = y(e)) ? e + ":" : ""
            }
            let m = () => {
                let e = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => e.has(t),
                    getItem: t => e.get(t) ? ? null,
                    getItemRaw: t => e.get(t) ? ? null,
                    setItem(t, r) {
                        e.set(t, r)
                    },
                    setItemRaw(t, r) {
                        e.set(t, r)
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    getKeys: () => Array.from(e.keys()),
                    clear() {
                        e.clear()
                    },
                    dispose() {
                        e.clear()
                    }
                }
            };

            function _(e, t, r) {
                return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {}
            }
            async function w(e) {
                "function" == typeof e.dispose && await f(e.dispose)
            }

            function b(e) {
                return new Promise((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                })
            }

            function I(e, t) {
                let r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                let i = b(r);
                return (e, r) => i.then(i => r(i.transaction(t, e).objectStore(t)))
            }

            function E() {
                return i || (i = I("keyval-store", "keyval")), i
            }

            function P(e, t = E()) {
                return t("readonly", t => b(t.get(e)))
            }
            var S = r(42325),
                O = (e = {}) => {
                    let t;
                    let r = e.base && e.base.length > 0 ? `${e.base}:` : "",
                        i = e => r + e;
                    return e.dbName && e.storeName && (t = I(e.dbName, e.storeName)), {
                        name: "idb-keyval",
                        options: e,
                        hasItem: async e => !(typeof await P(i(e), t) > "u"),
                        getItem: async e => await P(i(e), t) ? ? null,
                        setItem: (e, r) => (function(e, t, r = E()) {
                            return r("readwrite", r => (r.put(t, e), b(r.transaction)))
                        })(i(e), r, t),
                        removeItem: e => (function(e, t = E()) {
                            return t("readwrite", t => (t.delete(e), b(t.transaction)))
                        })(i(e), t),
                        getKeys: () => (function(e = E()) {
                            return e("readonly", e => {
                                var t;
                                if (e.getAllKeys) return b(e.getAllKeys());
                                let r = [];
                                return (t = e => r.push(e.key), e.openCursor().onsuccess = function() {
                                    this.result && (t(this.result), this.result.continue())
                                }, b(e.transaction)).then(() => r)
                            })
                        })(t),
                        clear: () => (function(e = E()) {
                            return e("readwrite", e => (e.clear(), b(e.transaction)))
                        })(t)
                    }
                };
            class x {
                constructor() {
                    this.indexedDb = function(e = {}) {
                        let t = {
                                mounts: {
                                    "": e.driver || m()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            r = e => {
                                for (let r of t.mountpoints)
                                    if (e.startsWith(r)) return {
                                        base: r,
                                        relativeKey: e.slice(r.length),
                                        driver: t.mounts[r]
                                    };
                                return {
                                    base: "",
                                    relativeKey: e,
                                    driver: t.mounts[""]
                                }
                            },
                            i = (e, r) => t.mountpoints.filter(t => t.startsWith(e) || r && e.startsWith(t)).map(r => ({
                                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                                mountpoint: r,
                                driver: t.mounts[r]
                            })),
                            n = (e, r) => {
                                if (t.watching)
                                    for (let i of (r = y(r), t.watchListeners)) i(e, r)
                            },
                            s = async () => {
                                if (!t.watching)
                                    for (let e in t.watching = !0, t.mounts) t.unwatch[e] = await _(t.mounts[e], n, e)
                            },
                            o = async () => {
                                if (t.watching) {
                                    for (let e in t.unwatch) await t.unwatch[e]();
                                    t.unwatch = {}, t.watching = !1
                                }
                            },
                            a = (e, t, i) => {
                                let n = new Map,
                                    s = e => {
                                        let t = n.get(e.base);
                                        return t || (t = {
                                            driver: e.driver,
                                            base: e.base,
                                            items: []
                                        }, n.set(e.base, t)), t
                                    };
                                for (let i of e) {
                                    let e = "string" == typeof i,
                                        n = y(e ? i : i.key),
                                        o = e ? void 0 : i.value,
                                        a = e || !i.options ? t : { ...t,
                                            ...i.options
                                        },
                                        c = r(n);
                                    s(c).items.push({
                                        key: n,
                                        value: o,
                                        relativeKey: c.relativeKey,
                                        options: a
                                    })
                                }
                                return Promise.all([...n.values()].map(e => i(e))).then(e => e.flat())
                            },
                            c = {
                                hasItem(e, t = {}) {
                                    e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e);
                                    return f(n.hasItem, i, t)
                                },
                                getItem(e, t = {}) {
                                    e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e);
                                    return f(n.getItem, i, t).then(e => h(e))
                                },
                                getItems: (e, t) => a(e, t, e => e.driver.getItems ? f(e.driver.getItems, e.items.map(e => ({
                                    key: e.relativeKey,
                                    options: e.options
                                })), t).then(t => t.map(t => ({
                                    key: function(...e) {
                                        return y(e.join(":"))
                                    }(e.base, t.key),
                                    value: h(t.value)
                                }))) : Promise.all(e.items.map(t => f(e.driver.getItem, t.relativeKey, t.options).then(e => ({
                                    key: t.key,
                                    value: h(e)
                                }))))),
                                getItemRaw(e, t = {}) {
                                    e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e);
                                    return n.getItemRaw ? f(n.getItemRaw, i, t) : f(n.getItem, i, t).then(e => "string" == typeof e && e.startsWith(g) ? p.from(e.slice(g.length), "base64") : e)
                                },
                                async setItem(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e);
                                    e = y(e);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e);
                                    o.setItem && (await f(o.setItem, s, d(t), i), o.watch || n("update", e))
                                },
                                async setItems(e, t) {
                                    await a(e, t, async e => {
                                        e.driver.setItems && await f(e.driver.setItems, e.items.map(e => ({
                                            key: e.relativeKey,
                                            value: d(e.value),
                                            options: e.options
                                        })), t), e.driver.setItem && await Promise.all(e.items.map(t => f(e.driver.setItem, t.relativeKey, d(t.value), t.options)))
                                    })
                                },
                                async setItemRaw(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e, i);
                                    e = y(e);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e);
                                    if (o.setItemRaw) await f(o.setItemRaw, s, t, i);
                                    else {
                                        if (!o.setItem) return;
                                        await f(o.setItem, s, function(e) {
                                            if ("string" == typeof e) return e;
                                            let t = p.from(e).toString("base64");
                                            return g + t
                                        }(t), i)
                                    }
                                    o.watch || n("update", e)
                                },
                                async removeItem(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        removeMeta: t
                                    }), e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: s
                                    } = r(e);
                                    s.removeItem && (await f(s.removeItem, i, t), (t.removeMeta || t.removeMata) && await f(s.removeItem, i + "$", t), s.watch || n("remove", e))
                                },
                                async getMeta(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        nativeOnly: t
                                    }), e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e), s = Object.create(null);
                                    if (n.getMeta && Object.assign(s, await f(n.getMeta, i, t)), !t.nativeOnly) {
                                        let e = await f(n.getItem, i + "$", t).then(e => h(e));
                                        e && "object" == typeof e && ("string" == typeof e.atime && (e.atime = new Date(e.atime)), "string" == typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(s, e))
                                    }
                                    return s
                                },
                                setMeta(e, t, r = {}) {
                                    return this.setItem(e + "$", t, r)
                                },
                                removeMeta(e, t = {}) {
                                    return this.removeItem(e + "$", t)
                                },
                                async getKeys(e, t = {}) {
                                    e = v(e);
                                    let r = i(e, !0),
                                        n = [],
                                        s = [];
                                    for (let e of r) {
                                        let r = await f(e.driver.getKeys, e.relativeBase, t),
                                            i = r.map(t => e.mountpoint + y(t)).filter(e => !n.some(t => e.startsWith(t)));
                                        s.push(...i), n = [e.mountpoint, ...n.filter(t => !t.startsWith(e.mountpoint))]
                                    }
                                    return e ? s.filter(t => t.startsWith(e) && !t.endsWith("$")) : s.filter(e => !e.endsWith("$"))
                                },
                                async clear(e, t = {}) {
                                    e = v(e), await Promise.all(i(e, !1).map(async e => {
                                        if (e.driver.clear) return f(e.driver.clear, e.relativeBase, t);
                                        if (e.driver.removeItem) {
                                            let r = await e.driver.getKeys(e.relativeBase || "", t);
                                            return Promise.all(r.map(r => e.driver.removeItem(r, t)))
                                        }
                                    }))
                                },
                                async dispose() {
                                    await Promise.all(Object.values(t.mounts).map(e => w(e)))
                                },
                                watch: async e => (await s(), t.watchListeners.push(e), async () => {
                                    t.watchListeners = t.watchListeners.filter(t => t !== e), 0 === t.watchListeners.length && await o()
                                }),
                                async unwatch() {
                                    t.watchListeners = [], await o()
                                },
                                mount(e, r) {
                                    if ((e = v(e)) && t.mounts[e]) throw Error(`already mounted at ${e}`);
                                    return e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)), t.mounts[e] = r, t.watching && Promise.resolve(_(r, n, e)).then(r => {
                                        t.unwatch[e] = r
                                    }).catch(console.error), c
                                },
                                async unmount(e, r = !0) {
                                    (e = v(e)) && t.mounts[e] && (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]), r && await w(t.mounts[e]), t.mountpoints = t.mountpoints.filter(t => t !== e), delete t.mounts[e])
                                },
                                getMount(e = "") {
                                    e = y(e) + ":";
                                    let t = r(e);
                                    return {
                                        driver: t.driver,
                                        base: t.base
                                    }
                                },
                                getMounts(e = "", t = {}) {
                                    e = y(e);
                                    let r = i(e, t.parents);
                                    return r.map(e => ({
                                        driver: e.driver,
                                        base: e.mountpoint
                                    }))
                                }
                            };
                        return c
                    }({
                        driver: O({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
                }
                async getItem(e) {
                    let t = await this.indexedDb.getItem(e);
                    if (null !== t) return t
                }
                async setItem(e, t) {
                    await this.indexedDb.setItem(e, (0, S.u)(t))
                }
                async removeItem(e) {
                    await this.indexedDb.removeItem(e)
                }
            }
            var R = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                C = {
                    exports: {}
                };

            function A(e) {
                var t;
                return [e[0], (0, S.D)(null != (t = e[1]) ? t : "")]
            }! function() {
                function e() {}
                e.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, e.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, e.prototype.removeItem = function(e) {
                    delete this[e]
                }, e.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, e.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, e.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), "u" > typeof R && R.localStorage ? C.exports = R.localStorage : "u" > typeof window && window.localStorage ? C.exports = window.localStorage : C.exports = new e
            }();
            class N {
                constructor() {
                    this.localStorage = C.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(A)
                }
                async getItem(e) {
                    let t = this.localStorage.getItem(e);
                    if (null !== t) return (0, S.D)(t)
                }
                async setItem(e, t) {
                    this.localStorage.setItem(e, (0, S.u)(t))
                }
                async removeItem(e) {
                    this.localStorage.removeItem(e)
                }
            }
            let T = async (e, t, r) => {
                    let i = "wc_storage_version",
                        n = await t.getItem(i);
                    if (n && n >= 1) {
                        r(t);
                        return
                    }
                    let s = await e.getKeys();
                    if (!s.length) {
                        r(t);
                        return
                    }
                    let o = [];
                    for (; s.length;) {
                        let r = s.shift();
                        if (!r) continue;
                        let i = r.toLowerCase();
                        if (i.includes("wc@") || i.includes("walletconnect") || i.includes("wc_") || i.includes("wallet_connect")) {
                            let i = await e.getItem(r);
                            await t.setItem(r, i), o.push(r)
                        }
                    }
                    await t.setItem(i, 1), r(t), j(e, o)
                },
                j = async (e, t) => {
                    t.length && t.forEach(async t => {
                        await e.removeItem(t)
                    })
                };
            class q {
                constructor() {
                    this.initialized = !1, this.setInitialized = e => {
                        this.storage = e, this.initialized = !0
                    };
                    let e = new N;
                    this.storage = e;
                    try {
                        let t = new x;
                        T(e, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(e) {
                    return await this.initialize(), this.storage.getItem(e)
                }
                async setItem(e, t) {
                    return await this.initialize(), this.storage.setItem(e, t)
                }
                async removeItem(e) {
                    return await this.initialize(), this.storage.removeItem(e)
                }
                async initialize() {
                    this.initialized || await new Promise(e => {
                        let t = setInterval(() => {
                            this.initialized && (clearInterval(t), e())
                        }, 20)
                    })
                }
            }
            var D = r(67660),
                L = r(52500),
                z = r(5774);
            class k extends z.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class M extends z.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class $ {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class U extends z.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class H extends z.q {
                constructor(e) {
                    super()
                }
            }
            class V {
                constructor(e, t, r, i) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class K extends z.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class B extends z.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class F {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class W {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class Z {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class G {
                constructor(e) {
                    this.client = e
                }
            }
            var J = r(27728),
                Q = r(81293),
                Y = r(10666);
            let X = "base64url",
                ee = "base58btc";
            var et = r(31080),
                er = r(53832),
                ei = r(28807);

            function en(e) {
                return (0, er.B)((0, ei.m)((0, S.u)(e), "utf8"), X)
            }

            function es(e) {
                let t = (0, ei.m)("K36", ee),
                    r = "z" + (0, er.B)((0, et.z)([t, e]), ee);
                return ["did", "key", r].join(":")
            }

            function eo(e = (0, Q.randomBytes)(32)) {
                return J._w(e)
            }
            async function ea(e, t, r, i, n = (0, Y.fromMiliseconds)(Date.now())) {
                var s, o, a;
                let c = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    l = es(i.publicKey),
                    u = {
                        iss: l,
                        sub: e,
                        aud: t,
                        iat: n,
                        exp: n + r
                    },
                    h = (s = {
                        header: c,
                        payload: u
                    }, (0, ei.m)([en(s.header), en(s.payload)].join("."), "utf8")),
                    p = J.Xx(i.secretKey, h);
                return [en((o = {
                    header: c,
                    payload: u,
                    signature: p
                }).header), en(o.payload), (a = o.signature, (0, er.B)(a, X))].join(".")
            }
            r(3947);
            var ec = r(74013),
                el = r(23427),
                eu = r(55494);
            let eh = () => "u" > typeof WebSocket || "u" > typeof r.g && "u" > typeof r.g.WebSocket || "u" > typeof window && "u" > typeof window.WebSocket || "u" > typeof self && "u" > typeof self.WebSocket,
                ep = e => e.split("?")[0],
                ef = "u" > typeof WebSocket ? WebSocket : "u" > typeof r.g && "u" > typeof r.g.WebSocket ? r.g.WebSocket : "u" > typeof window && "u" > typeof window.WebSocket ? window.WebSocket : "u" > typeof self && "u" > typeof self.WebSocket ? self.WebSocket : r(77814);
            class ed {
                constructor(e) {
                    if (this.url = e, this.events = new n.EventEmitter, this.registering = !1, !(0, eu.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return "u" > typeof this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    return new Promise((e, t) => {
                        if (typeof this.socket > "u") {
                            t(Error("Connection already closed"));
                            return
                        }
                        this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close()
                    })
                }
                async send(e) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send((0, S.u)(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register(e = this.url) {
                    if (!(0, eu.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return t(Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        let i = new URLSearchParams(e).get("origin"),
                            n = (0, eu.isReactNative)() ? {
                                headers: {
                                    origin: i
                                }
                            } : {
                                rejectUnauthorized: !(0, eu.isLocalhostUrl)(e)
                            },
                            s = new ef(e, [], n);
                        eh() ? s.onerror = e => {
                            r(this.emitError(e.error))
                        } : s.on("error", e => {
                            r(this.emitError(e))
                        }), s.onopen = () => {
                            this.onOpen(s), t(s)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    let t = "string" == typeof e.data ? (0, S.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = r.message || r.toString(),
                        n = (0, eu.formatJsonRpcError)(e, i);
                    this.events.emit("payload", n)
                }
                parseError(e, t = this.url) {
                    return (0, eu.parseConnectionError)(e, ep(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    let t = this.parseError(Error(e ? .message || `WebSocket connection failed for host: ${ep(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var eg = r(33958),
                ey = r.n(eg),
                ev = r(26528),
                em = r.n(ev),
                e_ = r(34406),
                ew = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < e.length; n++) {
                        var s = e.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        l = Math.log(a) / Math.log(256),
                        u = Math.log(256) / Math.log(a);

                    function h(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var i = 0, n = 0; e[t] === c;) i++, t++;
                            for (var s = (e.length - t) * l + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var u = r[e.charCodeAt(t)];
                                if (255 === u) return;
                                for (var h = 0, p = s - 1;
                                    (0 !== u || h < n) && -1 !== p; p--, h++) u += a * o[p] >>> 0, o[p] = u % 256 >>> 0, u = u / 256 >>> 0;
                                if (0 !== u) throw Error("Non-zero carry");
                                n = h, t++
                            }
                            if (" " !== e[t]) {
                                for (var f = s - n; f !== s && 0 === o[f];) f++;
                                for (var d = new Uint8Array(i + (s - f)), g = i; f !== s;) d[g++] = o[f++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                            for (var o = (s - n) * u + 1 >>> 0, l = new Uint8Array(o); n !== s;) {
                                for (var h = t[n], p = 0, f = o - 1;
                                    (0 !== h || p < i) && -1 !== f; f--, p++) h += 256 * l[f] >>> 0, l[f] = h % a >>> 0, h = h / a >>> 0;
                                if (0 !== h) throw Error("Non-zero carry");
                                i = p, n++
                            }
                            for (var d = o - i; d !== o && 0 === l[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(l[d]);
                            return g
                        },
                        decodeUnsafe: h,
                        decode: function(e) {
                            var r = h(e);
                            if (r) return r;
                            throw Error(`Non-${t} character`)
                        }
                    }
                };
            let eb = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                eI = e => new TextEncoder().encode(e),
                eE = e => new TextDecoder().decode(e);
            class eP {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class eS {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return ex(this, e)
                }
            }
            class eO {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return ex(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let ex = (e, t) => new eO({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class eR {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new eP(e, t, r), this.decoder = new eS(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let eC = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new eR(e, t, r, i),
                eA = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = ew(r, t);
                    return eC({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => eb(n(e))
                    })
                },
                eN = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        l = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[l++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                eT = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                ej = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => eC({
                    prefix: t,
                    name: e,
                    encode: e => eT(e, i, r),
                    decode: t => eN(t, i, r, e)
                }),
                eq = eC({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => eE(e),
                    decode: e => eI(e)
                });
            var eD = Object.freeze({
                __proto__: null,
                identity: eq
            });
            let eL = ej({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var ez = Object.freeze({
                __proto__: null,
                base2: eL
            });
            let ek = ej({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var eM = Object.freeze({
                __proto__: null,
                base8: ek
            });
            let e$ = eA({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var eU = Object.freeze({
                __proto__: null,
                base10: e$
            });
            let eH = ej({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                eV = ej({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var eK = Object.freeze({
                __proto__: null,
                base16: eH,
                base16upper: eV
            });
            let eB = ej({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                eF = ej({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                eW = ej({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                eZ = ej({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                eG = ej({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                eJ = ej({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                eQ = ej({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                eY = ej({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                eX = ej({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var e0 = Object.freeze({
                __proto__: null,
                base32: eB,
                base32upper: eF,
                base32pad: eW,
                base32padupper: eZ,
                base32hex: eG,
                base32hexupper: eJ,
                base32hexpad: eQ,
                base32hexpadupper: eY,
                base32z: eX
            });
            let e1 = eA({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                e5 = eA({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var e6 = Object.freeze({
                __proto__: null,
                base36: e1,
                base36upper: e5
            });
            let e2 = eA({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                e3 = eA({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var e4 = Object.freeze({
                __proto__: null,
                base58btc: e2,
                base58flickr: e3
            });
            let e7 = ej({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                e8 = ej({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                e9 = ej({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                te = ej({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var tt = Object.freeze({
                __proto__: null,
                base64: e7,
                base64pad: e8,
                base64url: e9,
                base64urlpad: te
            });
            let tr = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                ti = tr.reduce((e, t, r) => (e[r] = t, e), []),
                tn = tr.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                ts = eC({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += ti[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = tn[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var to = Object.freeze({
                __proto__: null,
                base256emoji: ts
            });

            function ta(e, t, r) {
                t = t || [], r = r || 0;
                for (var i = r; e >= 2147483648;) t[r++] = 255 & e | 128, e /= 128;
                for (; - 128 & e;) t[r++] = 255 & e | 128, e >>>= 7;
                return t[r] = 0 | e, ta.bytes = r - i + 1, t
            }

            function tc(e, t) {
                var r, i = 0,
                    t = t || 0,
                    n = 0,
                    s = t,
                    o = e.length;
                do {
                    if (s >= o) throw tc.bytes = 0, RangeError("Could not decode varint");
                    r = e[s++], i += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n), n += 7
                } while (r >= 128);
                return tc.bytes = s - t, i
            }
            var tl = {
                encode: ta,
                decode: tc,
                encodingLength: function(e) {
                    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let tu = (e, t, r = 0) => (tl.encode(e, t, r), t),
                th = e => tl.encodingLength(e),
                tp = (e, t) => {
                    let r = t.byteLength,
                        i = th(e),
                        n = i + th(r),
                        s = new Uint8Array(n + r);
                    return tu(e, s, 0), tu(r, s, i), s.set(t, n), new tf(e, r, t, s)
                };
            class tf {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let td = ({
                name: e,
                code: t,
                encode: r
            }) => new tg(e, t, r);
            class tg {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? tp(this.code, t) : t.then(e => tp(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let ty = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                tv = td({
                    name: "sha2-256",
                    code: 18,
                    encode: ty("SHA-256")
                }),
                tm = td({
                    name: "sha2-512",
                    code: 19,
                    encode: ty("SHA-512")
                });
            var t_ = Object.freeze({
                    __proto__: null,
                    sha256: tv,
                    sha512: tm
                }),
                tw = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: eb,
                        digest: e => tp(0, eb(e))
                    }
                });
            new TextEncoder, new TextDecoder;
            let tb = { ...eD,
                ...ez,
                ...eM,
                ...eU,
                ...eK,
                ...e0,
                ...e6,
                ...e4,
                ...tt,
                ...to
            };

            function tI(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function tE(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }({ ...t_,
                ...tw
            });
            let tP = tE("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                tS = tE("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? tI(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }(e.length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                tO = {
                    utf8: tP,
                    "utf-8": tP,
                    hex: tb.base16,
                    latin1: tS,
                    ascii: tS,
                    binary: tS,
                    ...tb
                },
                tx = "core",
                tR = `wc@2:${tx}:`,
                tC = {
                    name: tx,
                    logger: "error"
                },
                tA = {
                    database: ":memory:"
                },
                tN = "client_ed25519_seed",
                tT = Y.ONE_DAY,
                tj = Y.SIX_HOURS,
                tq = "wss://relay.walletconnect.com",
                tD = "wss://relay.walletconnect.org",
                tL = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    transport_closed: "relayer_transport_closed",
                    publish: "relayer_publish"
                },
                tz = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                tk = Y.ONE_SECOND,
                tM = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    expired: "subscription_expired",
                    disabled: "subscription_disabled",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                t$ = 1e3 * Y.FIVE_SECONDS,
                tU = {
                    wc_pairingDelete: {
                        req: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: Y.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: Y.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                tH = {
                    create: "pairing_create",
                    expire: "pairing_expire",
                    delete: "pairing_delete",
                    ping: "pairing_ping"
                },
                tV = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                tK = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                tB = "verify-api",
                tF = "https://verify.walletconnect.com",
                tW = "https://verify.walletconnect.org",
                tZ = [tF, tW];
            class tG {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = tR, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, L.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, (0, o.KC)(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, o.IP)(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class tJ {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
                        this.isInitialized();
                        let e = await this.getClientSeed(),
                            t = eo(e);
                        return es(t.publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = (0, o.Au)();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = await this.getClientSeed(),
                            r = eo(t),
                            i = (0, o.jd)();
                        return await ea(i, e, tT, r)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let i = this.getPrivateKey(e),
                            n = (0, o.m$)(i, t);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || (0, o.Ym)(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, o.EN)(r),
                            n = (0, S.u)(t);
                        if ((0, o.Q8)(i)) {
                            let t = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let s = this.getSymKey(e),
                            {
                                type: a,
                                senderPublicKey: c
                            } = i;
                        return (0, o.HI)({
                            type: a,
                            symKey: s,
                            message: n,
                            senderPublicKey: c
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, o.Ll)(t, r);
                        if ((0, o.Q8)(i)) {
                            let t = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            let r = this.getSymKey(e),
                                i = (0, o.pe)({
                                    symKey: r,
                                    encoded: t
                                });
                            return (0, S.D)(i)
                        } catch (t) {
                            this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(t)
                        }
                    }, this.getPayloadType = e => {
                        let t = (0, o.vB)(e);
                        return (0, o.WG)(t.type)
                    }, this.getPayloadSenderPublicKey = e => {
                        let t = (0, o.vB)(e);
                        return t.senderPublicKey ? (0, ec.BB)(t.senderPublicKey, o.AW) : void 0
                    }, this.core = e, this.logger = (0, L.generateChildLogger)(t, this.name), this.keychain = r || new tG(this.core, this.logger)
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(tN)
                    } catch {
                        e = (0, o.jd)(), await this.keychain.set(tN, e)
                    }
                    return function(e, t = "utf8") {
                        let r = tO[t];
                        if (!r) throw Error(`Unsupported encoding "${t}"`);
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? tI(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class tQ extends $ {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = tR, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = (0, o.rj)(t),
                            i = this.messages.get(e);
                        return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = t, this.messages.set(e, i), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => {
                        this.isInitialized();
                        let r = this.get(e),
                            i = (0, o.rj)(t);
                        return "u" > typeof r[i]
                    }, this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, L.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, (0, o.KC)(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, o.IP)(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class tY extends U {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new n.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, Y.toMiliseconds)(Y.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            let n = r ? .ttl || tj,
                                s = (0, o._H)(r),
                                a = r ? .prompt || !1,
                                c = r ? .tag || 0,
                                l = r ? .id || (0, eu.getBigIntRpcId)().toString(),
                                u = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: n,
                                        relay: s,
                                        prompt: a,
                                        tag: c,
                                        id: l
                                    }
                                },
                                h = setTimeout(() => this.queue.set(l, u), this.publishTimeout);
                            try {
                                await await (0, o.hF)(this.rpcPublish(e, t, n, s, a, c, l), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(l), this.relayer.events.emit(tL.publish, u)
                            } catch (e) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (i = r ? .internal) && i.throwOnFailedPublish) throw this.removeRequestFromQueue(l), e;
                                return
                            } finally {
                                clearTimeout(h)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(e), e
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, L.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, i, n, s, a) {
                    var c, l, u, h;
                    let p = {
                        method: (0, o.cO)(i.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: n,
                            tag: s
                        },
                        id: a
                    };
                    return (0, o.o8)(null == (c = p.params) ? void 0 : c.prompt) && (null == (l = p.params) || delete l.prompt), (0, o.o8)(null == (u = p.params) ? void 0 : u.tag) && (null == (h = p.params) || delete h.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: p
                    }), this.relayer.request(p)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: i
                        } = e;
                        await this.publish(t, r, i)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(D.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(tL.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(tL.message_ack, e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
            }
            class tX {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let i = r.filter(e => e !== t);
                        if (!i.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, i)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var t0 = Object.defineProperty,
                t1 = Object.defineProperties,
                t5 = Object.getOwnPropertyDescriptors,
                t6 = Object.getOwnPropertySymbols,
                t2 = Object.prototype.hasOwnProperty,
                t3 = Object.prototype.propertyIsEnumerable,
                t4 = (e, t, r) => t in e ? t0(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                t7 = (e, t) => {
                    for (var r in t || (t = {})) t2.call(t, r) && t4(e, r, t[r]);
                    if (t6)
                        for (var r of t6(t)) t3.call(t, r) && t4(e, r, t[r]);
                    return e
                },
                t8 = (e, t) => t1(e, t5(t));
            class t9 extends K {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new tX, this.events = new n.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = tR, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = (0, o._H)(t),
                                i = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, i);
                            let n = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), n
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise((t, r) => {
                        let i = new Y.Watch;
                        i.start(this.pendingSubscriptionWatchLabel);
                        let n = setInterval(() => {
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), t(!0)), i.elapsed(this.pendingSubscriptionWatchLabel) >= t$ && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(Error("Subscription resolution timeout")))
                        }, this.pollingInterval)
                    }).catch(() => !1), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, L.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let i = (0, o._H)(r);
                        await this.rpcUnsubscribe(e, t, i);
                        let n = (0, o.D6)("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: (0, o.cO)(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await (0, o.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(tL.connection_stalled)
                    }
                    return (0, o.rj)(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = e[0].relay,
                        r = {
                            method: (0, o.cO)(t.protocol).batchSubscribe,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, o.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(tL.connection_stalled)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    let i = {
                        method: (0, o.cO)(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, t8(t7({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, t7({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, t7({}, t)), this.topicMap.set(t.topic, e), this.events.emit(tM.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(tM.deleted, t8(t7({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(tM.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(tM.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = (0, o.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    let t = await this.rpcBatchSubscribe(e);
                    (0, o.qt)(t) && this.onBatchSubscribe(t.map((t, r) => t8(t7({}, e[r]), {
                        id: t
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(D.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(tL.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(tL.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(tM.created, async e => {
                        let t = tM.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(tM.deleted, async e => {
                        let t = tM.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
            }
            var re = Object.defineProperty,
                rt = Object.getOwnPropertySymbols,
                rr = Object.prototype.hasOwnProperty,
                ri = Object.prototype.propertyIsEnumerable,
                rn = (e, t, r) => t in e ? re(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rs = (e, t) => {
                    for (var r in t || (t = {})) rr.call(t, r) && rn(e, r, t[r]);
                    if (rt)
                        for (var r of rt(t)) ri.call(t, r) && rn(e, r, t[r]);
                    return e
                };
            class ro extends H {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new n.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(e)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e)
                    }, this.onConnectHandler = () => {
                        this.events.emit(tL.connect)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(tL.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(tz.payload, this.onPayloadHandler), this.provider.on(tz.connect, this.onConnectHandler), this.provider.on(tz.disconnect, this.onDisconnectHandler), this.provider.on(tz.error, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0, L.generateChildLogger)(e.logger, this.name) : (0, L.pino)((0, L.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new tQ(this.logger, e.core), this.subscriber = new t9(this, this.logger), this.publisher = new tY(this, this.logger), this.relayUrl = e ? .relayUrl || tq, this.projectId = e.projectId, this.bundleId = (0, o.X_)(), this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${tD}...`), await this.restartTransport(tD)
                    }
                    this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    let i;
                    this.isInitialized();
                    let n = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    if (n) return n;
                    let s = t => {
                        t.topic === e && (this.subscriber.off(tM.created, s), i())
                    };
                    return await Promise.all([new Promise(e => {
                        i = e, this.subscriber.on(tM.created, s)
                    }), new Promise(async r => {
                        n = await this.subscriber.subscribe(e, t), r()
                    })]), n
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await (0, o.hF)(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise(e => {
                                if (!this.initialized) return e();
                                this.subscriber.once(tM.resubscribed, () => {
                                    e()
                                })
                            }), new Promise(async (e, t) => {
                                try {
                                    await (0, o.hF)(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                                } catch (e) {
                                    t(e);
                                    return
                                }
                                e()
                            })])
                        } catch (e) {
                            if (this.logger.error(e), !this.isConnectionStalled(e.message)) throw e;
                            this.provider.events.emit(tz.disconnect)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(e) {
                    await this.confirmOnlineStateOrThrow(), this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await (0, o.Gg)()) throw Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new el.r(new ed((0, o.$0)({
                        sdkVersion: "2.11.0",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
                    let i = this.messages.has(t, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), (0, eu.isJsonRpcRequest)(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = t.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(rs({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else(0, eu.isJsonRpcResponse)(e) && this.events.emit(tL.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(tL.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = (0, eu.formatJsonRpcResult)(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(tz.payload, this.onPayloadHandler), this.provider.off(tz.connect, this.onConnectHandler), this.provider.off(tz.disconnect, this.onDisconnectHandler), this.provider.off(tz.error, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(tL.connection_stalled, () => {
                        this.restartTransport().catch(e => this.logger.error(e))
                    });
                    let e = await (0, o.Gg)();
                    (0, o.uw)(async t => {
                        this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch(e => this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(e => this.logger.error(e))))
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(tL.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
                        await this.restartTransport().catch(e => this.logger.error(e))
                    }, (0, Y.toMiliseconds)(tk)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise(e => {
                            let t = setInterval(() => {
                                this.connected && (clearInterval(t), e())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
            }
            var ra = Object.defineProperty,
                rc = Object.getOwnPropertySymbols,
                rl = Object.prototype.hasOwnProperty,
                ru = Object.prototype.propertyIsEnumerable,
                rh = (e, t, r) => t in e ? ra(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rp = (e, t) => {
                    for (var r in t || (t = {})) rl.call(t, r) && rh(e, r, t[r]);
                    if (rc)
                        for (var r of rc(t)) ru.call(t, r) && rh(e, r, t[r]);
                    return e
                };
            class rf extends V {
                constructor(e, t, r, i = tR, n) {
                    super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tR, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            this.getKey && null !== e && !(0, o.o8)(e) ? this.map.set(this.getKey(e), e) : (0, o.xW)(e) ? this.map.set(e.id, e) : (0, o.h1)(e) && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => ey()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = rp(rp({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, L.generateChildLogger)(t, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = (0, o.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rd {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(s()), this.initialized = !1, this.storagePrefix = tR, this.ignoredPayloadTypes = [o.rV], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async () => {
                        this.isInitialized();
                        let e = (0, o.jd)(),
                            t = await this.core.crypto.setSymKey(e),
                            r = (0, o.gn)(Y.FIVE_MINUTES),
                            i = {
                                protocol: "irn"
                            },
                            n = (0, o.Bv)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: t,
                                symKey: e,
                                relay: i
                            });
                        return await this.pairings.set(t, {
                            topic: t,
                            expiry: r,
                            relay: i,
                            active: !1
                        }), await this.core.relayer.subscribe(t), this.core.expirer.set(t, r), {
                            topic: t,
                            uri: n
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: i
                        } = (0, o.he)(e.uri);
                        if (this.pairings.keys.includes(t) && this.pairings.get(t).active) throw Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                        let n = (0, o.gn)(Y.FIVE_MINUTES),
                            s = {
                                topic: t,
                                relay: i,
                                expiry: n,
                                active: !1
                            };
                        return await this.pairings.set(t, s), this.core.expirer.set(t, n), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(tH.create, s), this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: i
                        })), s
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        let t = (0, o.gn)(Y.THIRTY_DAYS);
                        await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        }), this.core.expirer.set(e, t)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, o.H1)();
                            this.events.once((0, o.E0)("pairing_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", (0, o.D6)("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let i = (0, eu.formatJsonRpcRequest)(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = tU[t].req;
                        return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = (0, eu.formatJsonRpcResult)(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = tU[s.request.method].res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = (0, eu.formatJsonRpcError)(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = tU[s.request.method] ? tU[s.request.method].res : tU.unregistered_method.res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, (0, o.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => (0, o.Bw)(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(tH.ping, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, eu.isJsonRpcResult)(t) ? this.events.emit((0, o.E0)("pairing_ping", r), {}): (0, eu.isJsonRpcError)(t) && this.events.emit((0, o.E0)("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(tH.delete, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: i
                        } = t;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            let t = (0, o.D6)("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error((0, o.D6)("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        var t;
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw Error(t)
                        }
                        if (!(0, o.jv)(e.uri)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw Error(t)
                        }
                        let r = (0, o.he)(e.uri);
                        if (!(null != (t = r ? .relay) && t.protocol)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw Error(e)
                        }
                        if (!(null != r && r.symKey)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!(0, o.M_)(e, !1)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw Error(t)
                        }
                        if ((0, o.Bw)(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = (0, o.Z7)("EXPIRED", `pairing topic: ${e}`);
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = (0, L.generateChildLogger)(t, this.name), this.pairings = new rf(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(tL.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let i = await this.core.crypto.decode(t, r);
                        try {
                            (0, eu.isJsonRpcRequest)(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : (0, eu.isJsonRpcResponse)(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.core.history.delete(t, i.id))
                        } catch (e) {
                            this.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(tK.expired, async e => {
                        let {
                            topic: t
                        } = (0, o.iP)(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(tH.expire, {
                            topic: t
                        }))
                    })
                }
            }
            class rg extends M {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new n.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tR, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let i = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: (0, o.gn)(Y.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(tV.created, i)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = (0, eu.isJsonRpcError)(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(tV.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(tV.deleted, r))
                        })
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, L.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: (0, eu.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(tV.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = (0, o.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(tV.created, e => {
                        let t = tV.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(tV.updated, e => {
                        let t = tV.updated;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(tV.deleted, e => {
                        let t = tV.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(D.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, Y.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class ry extends B {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new n.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tR, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            i = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(tK.created, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(tK.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, L.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return (0, o.Z4)(e);
                    if ("number" == typeof e) return (0, o.Gq)(e);
                    let {
                        message: t
                    } = (0, o.Z7)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(tK.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = (0, o.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, Y.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(tK.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(D.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(tK.created, e => {
                        let t = tK.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(tK.expired, e => {
                        let t = tK.expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(tK.deleted, e => {
                        let t = tK.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rv extends F {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = tB, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async e => {
                        if (this.verifyDisabled || (0, o.b$)() || !(0, o.jU)()) return;
                        let t = this.getVerifyUrl(e ? .verifyUrl);
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (e) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = tW;
                            try {
                                await this.createIframe()
                            } catch (e) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        let t;
                        if (this.isDevEnv) return "";
                        let r = this.getVerifyUrl(e ? .verifyUrl);
                        try {
                            t = await this.fetchAttestation(e.attestationId, r)
                        } catch (i) {
                            this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${r}`), this.logger.info(i), t = await this.fetchAttestation(e.attestationId, tW)
                        }
                        return t
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                        let r = this.startAbortTimer(2 * Y.ONE_SECOND),
                            i = await fetch(`${t}/attestation/${e}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(e => this.sendPost(e)), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let e;
                        let t = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise(r => {
                            if (document.getElementById(tB)) return r();
                            window.addEventListener("message", t);
                            let i = document.createElement("iframe");
                            i.id = tB, i.src = `${this.verifyUrl}/${this.projectId}`, i.style.display = "none", document.body.append(i), this.iframe = i, e = r
                        }), new Promise((e, r) => setTimeout(() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }, (0, Y.toMiliseconds)(Y.FIVE_SECONDS)))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = e => {
                        let t = e || tF;
                        return tZ.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${tF}`), t = tF), t
                    }, this.logger = (0, L.generateChildLogger)(t, this.name), this.verifyUrl = tF, this.abortController = new AbortController, this.isDevEnv = (0, o.UG)() && e_.env.IS_VITEST
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, Y.toMiliseconds)(e))
                }
            }
            class rm extends W {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.context = "echo", this.registerDeviceToken = async e => {
                        let {
                            clientId: t,
                            token: r,
                            notificationType: i,
                            enableEncrypted: n = !1
                        } = e, s = `https://echo.walletconnect.com/${this.projectId}/clients`;
                        await em()(s, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                client_id: t,
                                type: i,
                                token: r,
                                always_raw: n
                            })
                        })
                    }, this.logger = (0, L.generateChildLogger)(t, this.context)
                }
            }
            var r_ = Object.defineProperty,
                rw = Object.getOwnPropertySymbols,
                rb = Object.prototype.hasOwnProperty,
                rI = Object.prototype.propertyIsEnumerable,
                rE = (e, t, r) => t in e ? r_(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rP = (e, t) => {
                    for (var r in t || (t = {})) rb.call(t, r) && rE(e, r, t[r]);
                    if (rw)
                        for (var r of rw(t)) rI.call(t, r) && rE(e, r, t[r]);
                    return e
                };
            class rS extends k {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = tx, this.events = new n.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || tq, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, L.pino)((0, L.getDefaultLoggerOptions)({
                        level: e ? .logger || tC.logger
                    }));
                    this.logger = (0, L.generateChildLogger)(t, this.name), this.heartbeat = new D.HeartBeat, this.crypto = new tJ(this, this.logger, e ? .keychain), this.history = new rg(this, this.logger), this.expirer = new ry(this, this.logger), this.storage = null != e && e.storage ? e.storage : new q(rP(rP({}, tA), e ? .storageOptions)), this.relayer = new ro({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new rd(this, this.logger), this.verify = new rv(this.projectId || "", this.logger), this.echoClient = new rm(this.projectId || "", this.logger)
                }
                static async init(e) {
                    let t = new rS(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            let rO = "client",
                rx = `wc@2:${rO}:`,
                rR = {
                    name: rO,
                    logger: "error",
                    controller: !1,
                    relayUrl: "wss://relay.walletconnect.com"
                },
                rC = "WALLETCONNECT_DEEPLINK_CHOICE",
                rA = "Proposal expired",
                rN = Y.SEVEN_DAYS,
                rT = {
                    wc_sessionPropose: {
                        req: {
                            ttl: Y.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: Y.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: Y.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: Y.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: Y.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: Y.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: Y.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: Y.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: Y.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: Y.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: Y.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                rj = {
                    min: Y.FIVE_MINUTES,
                    max: Y.SEVEN_DAYS
                },
                rq = {
                    idle: "IDLE",
                    active: "ACTIVE"
                },
                rD = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var rL = Object.defineProperty,
                rz = Object.defineProperties,
                rk = Object.getOwnPropertyDescriptors,
                rM = Object.getOwnPropertySymbols,
                r$ = Object.prototype.hasOwnProperty,
                rU = Object.prototype.propertyIsEnumerable,
                rH = (e, t, r) => t in e ? rL(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rV = (e, t) => {
                    for (var r in t || (t = {})) r$.call(t, r) && rH(e, r, t[r]);
                    if (rM)
                        for (var r of rM(t)) rU.call(t, r) && rH(e, r, t[r]);
                    return e
                },
                rK = (e, t) => rz(e, rk(t));
            class rB extends G {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(s()), this.initialized = !1, this.ignoredPayloadTypes = [o.rV], this.requestQueue = {
                        state: rq.idle,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: rq.idle,
                        queue: []
                    }, this.requestQueueDelay = Y.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(rT)
                        }), this.initialized = !0, setTimeout(() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }, (0, Y.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        let t = rK(rV({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: a
                        } = t, c = r, l, u = !1;
                        if (c && (u = this.client.core.pairing.pairings.get(c).active), !c || !u) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            c = e, l = t
                        }
                        let h = await this.client.core.crypto.generateKeyPair(),
                            p = rV({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: a ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: h,
                                    metadata: this.client.metadata
                                }
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: f,
                                resolve: d,
                                done: g
                            } = (0, o.H1)(Y.FIVE_MINUTES, rA);
                        if (this.events.once((0, o.E0)("session_connect"), async ({
                                error: e,
                                session: t
                            }) => {
                                if (e) f(e);
                                else if (t) {
                                    t.self.publicKey = h;
                                    let e = rK(rV({}, t), {
                                        requiredNamespaces: t.requiredNamespaces,
                                        optionalNamespaces: t.optionalNamespaces
                                    });
                                    await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), c && await this.client.core.pairing.updateMetadata({
                                        topic: c,
                                        metadata: t.peer.metadata
                                    }), d(e)
                                }
                            }), !c) {
                            let {
                                message: e
                            } = (0, o.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                            throw Error(e)
                        }
                        let y = await this.sendRequest({
                                topic: c,
                                method: "wc_sessionPropose",
                                params: p
                            }),
                            v = (0, o.gn)(Y.FIVE_MINUTES);
                        return await this.setProposal(y, rV({
                            id: y,
                            expiry: v
                        }, p)), {
                            uri: l,
                            approval: g
                        }
                    }, this.pair = async e => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        await this.isInitialized(), await this.isValidApprove(e);
                        let {
                            id: t,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: n
                        } = e, s = this.client.proposal.get(t), {
                            pairingTopic: a,
                            proposer: c,
                            requiredNamespaces: l,
                            optionalNamespaces: u
                        } = s;
                        a = a || "", (0, o.L5)(l) || (l = (0, o.fc)(i, "approve()"));
                        let h = await this.client.core.crypto.generateKeyPair(),
                            p = c.publicKey,
                            f = await this.client.core.crypto.generateSharedKey(h, p);
                        a && t && (await this.client.core.pairing.updateMetadata({
                            topic: a,
                            metadata: c.metadata
                        }), await this.sendResult({
                            id: t,
                            topic: a,
                            result: {
                                relay: {
                                    protocol: r ? ? "irn"
                                },
                                responderPublicKey: h
                            }
                        }), await this.client.proposal.delete(t, (0, o.D6)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: a
                        }));
                        let d = rV({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: i,
                            requiredNamespaces: l,
                            optionalNamespaces: u,
                            pairingTopic: a,
                            controller: {
                                publicKey: h,
                                metadata: this.client.metadata
                            },
                            expiry: (0, o.gn)(rN)
                        }, n && {
                            sessionProperties: n
                        });
                        await this.client.core.relayer.subscribe(f), await this.sendRequest({
                            topic: f,
                            method: "wc_sessionSettle",
                            params: d,
                            throwOnFailedPublish: !0
                        });
                        let g = rK(rV({}, d), {
                            topic: f,
                            pairingTopic: a,
                            acknowledged: !1,
                            self: d.controller,
                            peer: {
                                publicKey: c.publicKey,
                                metadata: c.metadata
                            },
                            controller: h
                        });
                        return await this.client.session.set(f, g), await this.setExpiry(f, (0, o.gn)(rN)), {
                            topic: f,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(f)), 500))
                        }
                    }, this.reject = async e => {
                        await this.isInitialized(), await this.isValidReject(e);
                        let {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: i
                        } = this.client.proposal.get(t);
                        i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, (0, o.D6)("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized(), await this.isValidUpdate(e);
                        let {
                            topic: t,
                            namespaces: r
                        } = e, i = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: n,
                            resolve: s,
                            reject: a
                        } = (0, o.H1)();
                        return this.events.once((0, o.E0)("session_update", i), ({
                            error: e
                        }) => {
                            e ? a(e) : s()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: n
                        }
                    }, this.extend = async e => {
                        await this.isInitialized(), await this.isValidExtend(e);
                        let {
                            topic: t
                        } = e, r = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: i,
                            resolve: n,
                            reject: s
                        } = (0, o.H1)();
                        return this.events.once((0, o.E0)("session_extend", r), ({
                            error: e
                        }) => {
                            e ? s(e) : n()
                        }), await this.setExpiry(t, (0, o.gn)(rN)), {
                            acknowledged: i
                        }
                    }, this.request = async e => {
                        await this.isInitialized(), await this.isValidRequest(e);
                        let {
                            chainId: t,
                            request: r,
                            topic: i,
                            expiry: n
                        } = e, s = (0, eu.payloadId)(), {
                            done: a,
                            resolve: c,
                            reject: l
                        } = (0, o.H1)(n, "Request expired. Please try again.");
                        return this.events.once((0, o.E0)("session_request", s), ({
                            error: e,
                            result: t
                        }) => {
                            e ? l(e) : c(t)
                        }), await Promise.all([new Promise(async e => {
                            await this.sendRequest({
                                clientRpcId: s,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: r,
                                    chainId: t
                                },
                                expiry: n,
                                throwOnFailedPublish: !0
                            }).catch(e => l(e)), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: t,
                                id: s
                            }), e()
                        }), new Promise(async e => {
                            let t = await (0, o.bW)(this.client.core.storage, rC);
                            (0, o.Hh)({
                                id: s,
                                topic: i,
                                wcDeepLink: t
                            }), e()
                        }), a()]).then(e => e[2])
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: i
                        } = r;
                        (0, eu.isJsonRpcResult)(r) ? await this.sendResult({
                            id: i,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }): (0, eu.isJsonRpcError)(r) && await this.sendError(i, t, r.error), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = await this.sendRequest({
                                    topic: t,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, o.H1)();
                            this.events.once((0, o.E0)("session_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            }
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.client.session.keys.includes(t) ? (await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: (0, o.D6)("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (0, o.Ih)(t, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (e, t) => {
                        let {
                            self: r
                        } = this.client.session.get(e);
                        await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, (0, o.D6)("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), t || this.client.core.expirer.del(e), this.client.core.storage.removeItem(rC).catch(e => this.client.logger.warn(e)), this.getPendingSessionRequests().forEach(t => {
                            t.topic === e && this.deletePendingSessionRequest(t.id, (0, o.D6)("USER_DISCONNECTED"))
                        })
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, (0, o.D6)("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t => t.id !== e), r && (this.sessionRequestQueue.state = rq.idle)
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
                    }, this.setPendingSessionRequest = async e => {
                        let t = rT.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: i,
                                params: n,
                                verifyContext: s
                            } = e;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: i,
                            params: n,
                            verifyContext: s
                        }), t && this.client.core.expirer.set(r, (0, o.gn)(t))
                    }, this.sendRequest = async e => {
                        let {
                            topic: t,
                            method: r,
                            params: i,
                            expiry: n,
                            relayRpcId: s,
                            clientRpcId: a,
                            throwOnFailedPublish: c
                        } = e, l = (0, eu.formatJsonRpcRequest)(r, i, a);
                        if ((0, o.jU)() && rD.includes(r)) {
                            let e = (0, o.rj)(JSON.stringify(l));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        let u = await this.client.core.crypto.encode(t, l),
                            h = rT[r].req;
                        return n && (h.ttl = n), s && (h.id = s), this.client.core.history.set(t, l), c ? (h.internal = rK(rV({}, h.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(t, u, h)) : this.client.core.relayer.publish(t, u, h).catch(e => this.client.logger.error(e)), l.id
                    }, this.sendResult = async e => {
                        let {
                            id: t,
                            topic: r,
                            result: i,
                            throwOnFailedPublish: n
                        } = e, s = (0, eu.formatJsonRpcResult)(t, i), o = await this.client.core.crypto.encode(r, s), a = await this.client.core.history.get(r, t), c = rT[a.request.method].res;
                        n ? (c.internal = rK(rV({}, c.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, c)) : this.client.core.relayer.publish(r, o, c).catch(e => this.client.logger.error(e)), await this.client.core.history.resolve(s)
                    }, this.sendError = async (e, t, r) => {
                        let i = (0, eu.formatJsonRpcError)(e, r),
                            n = await this.client.core.crypto.encode(t, i),
                            s = await this.client.core.history.get(t, e),
                            o = rT[s.request.method].res;
                        this.client.core.relayer.publish(t, n, o), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            (0, o.Bw)(t.expiry) && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            (0, o.Bw)(e.expiry) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession(e)), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state === rq.active) {
                            this.client.logger.info("Request queue already active, skipping...");
                            return
                        }
                        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                            this.requestQueue.state = rq.active;
                            let e = this.requestQueue.queue.shift();
                            if (e) try {
                                this.processRequest(e), await new Promise(e => setTimeout(e, 300))
                            } catch (e) {
                                this.client.logger.warn(e)
                            }
                        }
                        this.requestQueue.state = rq.idle
                    }, this.processRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = (0, o.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidConnect(rV({}, t.params));
                            let n = (0, o.gn)(Y.FIVE_MINUTES),
                                s = rV({
                                    id: i,
                                    pairingTopic: e,
                                    expiry: n
                                }, r);
                            await this.setProposal(i, s);
                            let a = (0, o.rj)(JSON.stringify(t)),
                                c = await this.getVerifyContext(a, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: s,
                                verifyContext: c
                            })
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if ((0, eu.isJsonRpcResult)(t)) {
                            let {
                                result: i
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            let n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            let s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            let o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else(0, eu.isJsonRpcError)(t) && (await this.client.proposal.delete(r, (0, o.D6)("USER_DISCONNECTED")), this.events.emit((0, o.E0)("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(i);
                            let {
                                relay: r,
                                controller: n,
                                expiry: s,
                                namespaces: a,
                                requiredNamespaces: c,
                                optionalNamespaces: l,
                                sessionProperties: u,
                                pairingTopic: h
                            } = t.params, p = rV({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: a,
                                acknowledged: !0,
                                pairingTopic: h,
                                requiredNamespaces: c,
                                optionalNamespaces: l,
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, u && {
                                sessionProperties: u
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0
                            }), this.events.emit((0, o.E0)("session_connect"), {
                                session: p
                            }), this.cleanupDuplicatePairings(p)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, eu.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit((0, o.E0)("session_approve", r), {})) : (0, eu.isJsonRpcError)(t) && (await this.client.session.delete(e, (0, o.D6)("USER_DISCONNECTED")), this.events.emit((0, o.E0)("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            let t = `${e}_session_update`,
                                n = o.O6.get(t);
                            if (n && this.isRequestOutOfSync(n, i)) {
                                this.client.logger.info(`Discarding out of sync request - ${i}`);
                                return
                            }
                            this.isValidUpdate(rV({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: i,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: i,
                                topic: e,
                                params: r
                            }), o.O6.set(t, i)
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, eu.isJsonRpcResult)(t) ? this.events.emit((0, o.E0)("session_update", r), {}): (0, eu.isJsonRpcError)(t) && this.events.emit((0, o.E0)("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, (0, o.gn)(rN)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, eu.isJsonRpcResult)(t) ? this.events.emit((0, o.E0)("session_extend", r), {}): (0, eu.isJsonRpcError)(t) && this.events.emit((0, o.E0)("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, eu.isJsonRpcResult)(t) ? this.events.emit((0, o.E0)("session_ping", r), {}): (0, eu.isJsonRpcError)(t) && this.events.emit((0, o.E0)("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(tL.publish, async () => {
                                    t(await this.deleteSession(e))
                                })
                            }), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            })]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidRequest(rV({
                                topic: e
                            }, i));
                            let t = (0, o.rj)(JSON.stringify((0, eu.formatJsonRpcRequest)("wc_sessionRequest", i, r))),
                                n = this.client.session.get(e),
                                s = await this.getVerifyContext(t, n.peer.metadata),
                                a = {
                                    id: r,
                                    topic: e,
                                    params: i,
                                    verifyContext: s
                                };
                            await this.setPendingSessionRequest(a), this.addSessionRequestToSessionRequestQueue(a), this.processSessionRequestQueue()
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, eu.isJsonRpcResult)(t) ? this.events.emit((0, o.E0)("session_request", r), {
                            result: t.result
                        }): (0, eu.isJsonRpcError)(t) && this.events.emit((0, o.E0)("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            let t = `${e}_session_event_${i.event.name}`,
                                n = o.O6.get(t);
                            if (n && this.isRequestOutOfSync(n, r)) {
                                this.client.logger.info(`Discarding out of sync request - ${r}`);
                                return
                            }
                            this.isValidEmit(rV({
                                topic: e
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: i
                            }), o.O6.set(t, r)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = rq.idle, this.processSessionRequestQueue()
                        }, (0, Y.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === rq.active) {
                            this.client.logger.info("session request queue is already active.");
                            return
                        }
                        let e = this.sessionRequestQueue.queue[0];
                        if (!e) {
                            this.client.logger.info("session request queue is empty.");
                            return
                        }
                        try {
                            this.sessionRequestQueue.state = rq.active, this.client.events.emit("session_request", e)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onPairingCreated = e => {
                        if (e.active) return;
                        let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
                        t && this.onSessionProposeRequest(e.topic, (0, eu.formatJsonRpcRequest)("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer,
                            sessionProperties: t.sessionProperties
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw Error(t)
                        }
                        let {
                            pairingTopic: t,
                            requiredNamespaces: r,
                            optionalNamespaces: i,
                            sessionProperties: n,
                            relays: s
                        } = e;
                        if ((0, o.o8)(t) || await this.isValidPairingTopic(t), !(0, o.PM)(s, !0)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `connect() relays: ${s}`);
                            throw Error(e)
                        }(0, o.o8)(r) || 0 === (0, o.L5)(r) || this.validateNamespaces(r, "requiredNamespaces"), (0, o.o8)(i) || 0 === (0, o.L5)(i) || this.validateNamespaces(i, "optionalNamespaces"), (0, o.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = (0, o.n)(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!(0, o.EJ)(e)) throw Error((0, o.Z7)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = e;
                        await this.isValidProposalId(t);
                        let s = this.client.proposal.get(t),
                            a = (0, o.in)(r, "approve()");
                        if (a) throw Error(a.message);
                        let c = (0, o.rF)(s.requiredNamespaces, r, "approve()");
                        if (c) throw Error(c.message);
                        if (!(0, o.M_)(i, !0)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw Error(e)
                        }(0, o.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), !(0, o.$t)(r)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            relay: t,
                            controller: r,
                            namespaces: i,
                            expiry: n
                        } = e;
                        if (!(0, o.Z2)(t)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let s = (0, o.Dd)(r, "onSessionSettleRequest()");
                        if (s) throw Error(s.message);
                        let a = (0, o.in)(i, "onSessionSettleRequest()");
                        if (a) throw Error(a.message);
                        if ((0, o.Bw)(n)) {
                            let {
                                message: e
                            } = (0, o.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        let i = this.client.session.get(t),
                            n = (0, o.in)(r, "update()");
                        if (n) throw Error(n.message);
                        let s = (0, o.rF)(i.requiredNamespaces, r, "update()");
                        if (s) throw Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            request: r,
                            chainId: i,
                            expiry: n
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: s
                        } = this.client.session.get(t);
                        if (!(0, o.p8)(s, i)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, o.hH)(r)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, o.al)(s, i, r.method)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw Error(e)
                        }
                        if (n && !(0, o.ON)(n, rj)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${rj.min} and ${rj.max}`);
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        var t;
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            response: i
                        } = e;
                        try {
                            await this.isValidSessionTopic(r)
                        } catch (r) {
                            throw null != (t = e ? .response) && t.id && this.cleanupAfterResponse(e), r
                        }
                        if (!(0, o.JT)(i)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: n
                        } = this.client.session.get(t);
                        if (!(0, o.p8)(n, i)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, o.nf)(r)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, o.sI)(n, i, r.name)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || tF,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let i = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.info(e)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!(0, o.M_)(e, !1)) {
                                let {
                                    message: r
                                } = (0, o.Z7)("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw Error(r)
                            }
                        })
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(tL.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        let i = await this.client.core.crypto.decode(t, r);
                        try {
                            (0, eu.isJsonRpcRequest)(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : (0, eu.isJsonRpcResponse)(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: i
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(tK.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = (0, o.iP)(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, (0, o.Z7)("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(tH.create, e => this.onPairingCreated(e))
                }
                isValidPairingTopic(e) {
                    if (!(0, o.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.Bw)(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = (0, o.Z7)("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!(0, o.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.Bw)(this.client.session.get(e).expiry)) {
                        await this.deleteSession(e);
                        let {
                            message: t
                        } = (0, o.Z7)("EXPIRED", `session topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if ((0, o.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = (0, o.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if (!(0, o.Q0)(e)) {
                        let {
                            message: t
                        } = (0, o.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.Bw)(this.client.proposal.get(e).expiry)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = (0, o.Z7)("EXPIRED", `proposal id: ${e}`);
                        throw Error(t)
                    }
                }
            }
            class rF extends rf {
                constructor(e, t) {
                    super(e, t, "proposal", rx), this.core = e, this.logger = t
                }
            }
            class rW extends rf {
                constructor(e, t) {
                    super(e, t, "session", rx), this.core = e, this.logger = t
                }
            }
            class rZ extends rf {
                constructor(e, t) {
                    super(e, t, "request", rx, e => e.id), this.core = e, this.logger = t
                }
            }
            class rG extends Z {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = rR.name, this.events = new n.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || rR.name, this.metadata = e ? .metadata || (0, o.D)();
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, L.pino)((0, L.getDefaultLoggerOptions)({
                        level: e ? .logger || rR.logger
                    }));
                    this.core = e ? .core || new rS(e), this.logger = (0, L.generateChildLogger)(t, this.name), this.session = new rW(this.core, this.logger), this.proposal = new rF(this.core, this.logger), this.pendingRequest = new rZ(this.core, this.logger), this.engine = new rB(this)
                }
                static async init(e) {
                    let t = new rG(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }
            var rJ = r(58481);
            let rQ = "error",
                rY = "wc@2:universal_provider:",
                rX = {
                    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
                };
            var r0 = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                r1 = {
                    exports: {}
                };
            ! function(e, t) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 1 / 0,
                        a = 0 / 0,
                        c = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        l = "[object Arguments]",
                        u = "[object Array]",
                        h = "[object Boolean]",
                        p = "[object Date]",
                        f = "[object Error]",
                        d = "[object Function]",
                        g = "[object GeneratorFunction]",
                        y = "[object Map]",
                        v = "[object Number]",
                        m = "[object Object]",
                        _ = "[object Promise]",
                        w = "[object RegExp]",
                        b = "[object Set]",
                        I = "[object String]",
                        E = "[object Symbol]",
                        P = "[object WeakMap]",
                        S = "[object ArrayBuffer]",
                        O = "[object DataView]",
                        x = "[object Float32Array]",
                        R = "[object Float64Array]",
                        C = "[object Int8Array]",
                        A = "[object Int16Array]",
                        N = "[object Int32Array]",
                        T = "[object Uint8Array]",
                        j = "[object Uint8ClampedArray]",
                        q = "[object Uint16Array]",
                        D = "[object Uint32Array]",
                        L = /\b__p \+= '';/g,
                        z = /\b(__p \+=) '' \+/g,
                        k = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        M = /&(?:amp|lt|gt|quot|#39);/g,
                        $ = /[&<>"']/g,
                        U = RegExp(M.source),
                        H = RegExp($.source),
                        V = /<%-([\s\S]+?)%>/g,
                        K = /<%([\s\S]+?)%>/g,
                        B = /<%=([\s\S]+?)%>/g,
                        F = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        W = /^\w*$/,
                        Z = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        G = /[\\^$.*+?()[\]{}|]/g,
                        J = RegExp(G.source),
                        Q = /^\s+/,
                        Y = /\s/,
                        X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        et = /,? & /,
                        er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ei = /[()=,{}\[\]\/\s]/,
                        en = /\\(\\)?/g,
                        es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eo = /\w*$/,
                        ea = /^[-+]0x[0-9a-f]+$/i,
                        ec = /^0b[01]+$/i,
                        el = /^\[object .+?Constructor\]$/,
                        eu = /^0o[0-7]+$/i,
                        eh = /^(?:0|[1-9]\d*)$/,
                        ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ef = /($^)/,
                        ed = /['\n\r\u2028\u2029\\]/g,
                        eg = "\ud800-\udfff",
                        ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        ev = "\\u2700-\\u27bf",
                        em = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        e_ = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        ew = "\\ufe0e\\ufe0f",
                        eb = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        eI = "['’]",
                        eE = "[" + eb + "]",
                        eP = "[" + ey + "]",
                        eS = "[" + em + "]",
                        eO = "[^" + eg + eb + "\\d+" + ev + em + e_ + "]",
                        ex = "\ud83c[\udffb-\udfff]",
                        eR = "[^" + eg + "]",
                        eC = "(?:\ud83c[\udde6-\uddff]){2}",
                        eA = "[\ud800-\udbff][\udc00-\udfff]",
                        eN = "[" + e_ + "]",
                        eT = "\\u200d",
                        ej = "(?:" + eS + "|" + eO + ")",
                        eq = "(?:" + eI + "(?:d|ll|m|re|s|t|ve))?",
                        eD = "(?:" + eI + "(?:D|LL|M|RE|S|T|VE))?",
                        eL = "(?:" + eP + "|" + ex + ")?",
                        ez = "[" + ew + "]?",
                        ek = "(?:" + eT + "(?:" + [eR, eC, eA].join("|") + ")" + ez + eL + ")*",
                        eM = ez + eL + ek,
                        e$ = "(?:" + ["[" + ev + "]", eC, eA].join("|") + ")" + eM,
                        eU = "(?:" + [eR + eP + "?", eP, eC, eA, "[" + eg + "]"].join("|") + ")",
                        eH = RegExp(eI, "g"),
                        eV = RegExp(eP, "g"),
                        eK = RegExp(ex + "(?=" + ex + ")|" + eU + eM, "g"),
                        eB = RegExp([eN + "?" + eS + "+" + eq + "(?=" + [eE, eN, "$"].join("|") + ")", "(?:" + eN + "|" + eO + ")+" + eD + "(?=" + [eE, eN + ej, "$"].join("|") + ")", eN + "?" + ej + "+" + eq, eN + "+" + eD, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", e$].join("|"), "g"),
                        eF = RegExp("[" + eT + eg + ey + ew + "]"),
                        eW = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        eZ = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        eG = -1,
                        eJ = {};
                    eJ[x] = eJ[R] = eJ[C] = eJ[A] = eJ[N] = eJ[T] = eJ[j] = eJ[q] = eJ[D] = !0, eJ[l] = eJ[u] = eJ[S] = eJ[h] = eJ[O] = eJ[p] = eJ[f] = eJ[d] = eJ[y] = eJ[v] = eJ[m] = eJ[w] = eJ[b] = eJ[I] = eJ[P] = !1;
                    var eQ = {};
                    eQ[l] = eQ[u] = eQ[S] = eQ[O] = eQ[h] = eQ[p] = eQ[x] = eQ[R] = eQ[C] = eQ[A] = eQ[N] = eQ[y] = eQ[v] = eQ[m] = eQ[w] = eQ[b] = eQ[I] = eQ[E] = eQ[T] = eQ[j] = eQ[q] = eQ[D] = !0, eQ[f] = eQ[d] = eQ[P] = !1;
                    var eY = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        eX = parseFloat,
                        e0 = parseInt,
                        e1 = "object" == typeof r0 && r0 && r0.Object === Object && r0,
                        e5 = "object" == typeof self && self && self.Object === Object && self,
                        e6 = e1 || e5 || Function("return this")(),
                        e2 = t && !t.nodeType && t,
                        e3 = e2 && e && !e.nodeType && e,
                        e4 = e3 && e3.exports === e2,
                        e7 = e4 && e1.process,
                        e8 = function() {
                            try {
                                return e3 && e3.require && e3.require("util").types || e7 && e7.binding && e7.binding("util")
                            } catch {}
                        }(),
                        e9 = e8 && e8.isArrayBuffer,
                        te = e8 && e8.isDate,
                        tt = e8 && e8.isMap,
                        tr = e8 && e8.isRegExp,
                        ti = e8 && e8.isSet,
                        tn = e8 && e8.isTypedArray;

                    function ts(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function to(e, t, r, i) {
                        for (var n = -1, s = null == e ? 0 : e.length; ++n < s;) {
                            var o = e[n];
                            t(i, o, r(o), e)
                        }
                        return i
                    }

                    function ta(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tc(e, t) {
                        for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tl(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function tu(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }

                    function th(e, t) {
                        return !!(null == e ? 0 : e.length) && tb(e, t, 0) > -1
                    }

                    function tp(e, t, r) {
                        for (var i = -1, n = null == e ? 0 : e.length; ++i < n;)
                            if (r(t, e[i])) return !0;
                        return !1
                    }

                    function tf(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
                        return n
                    }

                    function td(e, t) {
                        for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                        return e
                    }

                    function tg(e, t, r, i) {
                        var n = -1,
                            s = null == e ? 0 : e.length;
                        for (i && s && (r = e[++n]); ++n < s;) r = t(r, e[n], n, e);
                        return r
                    }

                    function ty(e, t, r, i) {
                        var n = null == e ? 0 : e.length;
                        for (i && n && (r = e[--n]); n--;) r = t(r, e[n], n, e);
                        return r
                    }

                    function tv(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var tm = tS("length");

                    function t_(e, t, r) {
                        var i;
                        return r(e, function(e, r, n) {
                            if (t(e, r, n)) return i = r, !1
                        }), i
                    }

                    function tw(e, t, r, i) {
                        for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function tb(e, t, r) {
                        return t == t ? function(e, t, r) {
                            for (var i = r - 1, n = e.length; ++i < n;)
                                if (e[i] === t) return i;
                            return -1
                        }(e, t, r) : tw(e, tE, r)
                    }

                    function tI(e, t, r, i) {
                        for (var n = r - 1, s = e.length; ++n < s;)
                            if (i(e[n], t)) return n;
                        return -1
                    }

                    function tE(e) {
                        return e != e
                    }

                    function tP(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? tR(e, t) / r : a
                    }

                    function tS(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function tO(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function tx(e, t, r, i, n) {
                        return n(e, function(e, n, s) {
                            r = i ? (i = !1, e) : t(r, e, n, s)
                        }), r
                    }

                    function tR(e, t) {
                        for (var i, n = -1, s = e.length; ++n < s;) {
                            var o = t(e[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function tC(e, t) {
                        for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                        return i
                    }

                    function tA(e) {
                        return e && e.slice(0, tF(e) + 1).replace(Q, "")
                    }

                    function tN(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function tT(e, t) {
                        return tf(t, function(t) {
                            return e[t]
                        })
                    }

                    function tj(e, t) {
                        return e.has(t)
                    }

                    function tq(e, t) {
                        for (var r = -1, i = e.length; ++r < i && tb(t, e[r], 0) > -1;);
                        return r
                    }

                    function tD(e, t) {
                        for (var r = e.length; r-- && tb(t, e[r], 0) > -1;);
                        return r
                    }
                    var tL = tO({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tz = tO({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function tk(e) {
                        return "\\" + eY[e]
                    }

                    function tM(e) {
                        return eF.test(e)
                    }

                    function t$(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e, i) {
                            r[++t] = [i, e]
                        }), r
                    }

                    function tU(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function tH(e, t) {
                        for (var r = -1, i = e.length, n = 0, o = []; ++r < i;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function tV(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e) {
                            r[++t] = e
                        }), r
                    }

                    function tK(e) {
                        return tM(e) ? function(e) {
                            for (var t = eK.lastIndex = 0; eK.test(e);) ++t;
                            return t
                        }(e) : tm(e)
                    }

                    function tB(e) {
                        return tM(e) ? e.match(eK) || [] : e.split("")
                    }

                    function tF(e) {
                        for (var t = e.length; t-- && Y.test(e.charAt(t)););
                        return t
                    }
                    var tW = tO({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tZ = function e(t) {
                            var Y, eg, ey, ev, em = (t = null == t ? e6 : tZ.defaults(e6.Object(), t, tZ.pick(e6, eZ))).Array,
                                e_ = t.Date,
                                ew = t.Error,
                                eb = t.Function,
                                eI = t.Math,
                                eE = t.Object,
                                eP = t.RegExp,
                                eS = t.String,
                                eO = t.TypeError,
                                ex = em.prototype,
                                eR = eb.prototype,
                                eC = eE.prototype,
                                eA = t["__core-js_shared__"],
                                eN = eR.toString,
                                eT = eC.hasOwnProperty,
                                ej = 0,
                                eq = (Y = /[^.]+$/.exec(eA && eA.keys && eA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Y : "",
                                eD = eC.toString,
                                eL = eN.call(eE),
                                ez = e6._,
                                ek = eP("^" + eN.call(eT).replace(G, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                eM = e4 ? t.Buffer : r,
                                e$ = t.Symbol,
                                eU = t.Uint8Array,
                                eK = eM ? eM.allocUnsafe : r,
                                eF = tU(eE.getPrototypeOf, eE),
                                eY = eE.create,
                                e1 = eC.propertyIsEnumerable,
                                e5 = ex.splice,
                                e2 = e$ ? e$.isConcatSpreadable : r,
                                e3 = e$ ? e$.iterator : r,
                                e7 = e$ ? e$.toStringTag : r,
                                e8 = function() {
                                    try {
                                        var e = nw(eE, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                tm = t.clearTimeout !== e6.clearTimeout && t.clearTimeout,
                                tO = e_ && e_.now !== e6.Date.now && e_.now,
                                tG = t.setTimeout !== e6.setTimeout && t.setTimeout,
                                tJ = eI.ceil,
                                tQ = eI.floor,
                                tY = eE.getOwnPropertySymbols,
                                tX = eM ? eM.isBuffer : r,
                                t0 = t.isFinite,
                                t1 = ex.join,
                                t5 = tU(eE.keys, eE),
                                t6 = eI.max,
                                t2 = eI.min,
                                t3 = e_.now,
                                t4 = t.parseInt,
                                t7 = eI.random,
                                t8 = ex.reverse,
                                t9 = nw(t, "DataView"),
                                re = nw(t, "Map"),
                                rt = nw(t, "Promise"),
                                rr = nw(t, "Set"),
                                ri = nw(t, "WeakMap"),
                                rn = nw(eE, "create"),
                                rs = ri && new ri,
                                ro = {},
                                ra = nB(t9),
                                rc = nB(re),
                                rl = nB(rt),
                                ru = nB(rr),
                                rh = nB(ri),
                                rp = e$ ? e$.prototype : r,
                                rf = rp ? rp.valueOf : r,
                                rd = rp ? rp.toString : r;

                            function rg(e) {
                                if (sY(e) && !sU(e) && !(e instanceof r_)) {
                                    if (e instanceof rm) return e;
                                    if (eT.call(e, "__wrapped__")) return nF(e)
                                }
                                return new rm(e)
                            }
                            var ry = function() {
                                function e() {}
                                return function(t) {
                                    if (!sQ(t)) return {};
                                    if (eY) return eY(t);
                                    e.prototype = t;
                                    var i = new e;
                                    return e.prototype = r, i
                                }
                            }();

                            function rv() {}

                            function rm(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                            }

                            function r_(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function rw(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rb(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rI(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rE(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new rI; ++t < r;) this.add(e[t])
                            }

                            function rP(e) {
                                var t = this.__data__ = new rb(e);
                                this.size = t.size
                            }

                            function rS(e, t) {
                                var r = sU(e),
                                    i = !r && s$(e),
                                    n = !r && !i && sB(e),
                                    s = !r && !i && !n && s4(e),
                                    o = r || i || n || s,
                                    a = o ? tC(e.length, eS) : [],
                                    c = a.length;
                                for (var l in e)(t || eT.call(e, l)) && !(o && ("length" == l || n && ("offset" == l || "parent" == l) || s && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || nx(l, c))) && a.push(l);
                                return a
                            }

                            function rO(e) {
                                var t = e.length;
                                return t ? e[id(0, t - 1)] : r
                            }

                            function rx(e, t) {
                                return nH(iZ(e), rL(t, 0, e.length))
                            }

                            function rR(e) {
                                return nH(iZ(e))
                            }

                            function rC(e, t, i) {
                                (i === r || sz(e[t], i)) && (i !== r || t in e) || rq(e, t, i)
                            }

                            function rA(e, t, i) {
                                var n = e[t];
                                eT.call(e, t) && sz(n, i) && (i !== r || t in e) || rq(e, t, i)
                            }

                            function rN(e, t) {
                                for (var r = e.length; r--;)
                                    if (sz(e[r][0], t)) return r;
                                return -1
                            }

                            function rT(e, t, r, i) {
                                return rU(e, function(e, n, s) {
                                    t(i, e, r(e), s)
                                }), i
                            }

                            function rj(e, t) {
                                return e && iG(t, om(t), e)
                            }

                            function rq(e, t, r) {
                                "__proto__" == t && e8 ? e8(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }

                            function rD(e, t) {
                                for (var i = -1, n = t.length, s = em(n), o = null == e; ++i < n;) s[i] = o ? r : of (e, t[i]);
                                return s
                            }

                            function rL(e, t, i) {
                                return e == e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e
                            }

                            function rz(e, t, i, n, s, o) {
                                var a, c = 1 & t,
                                    u = 2 & t,
                                    f = 4 & t;
                                if (i && (a = s ? i(e, n, s, o) : i(e)), a !== r) return a;
                                if (!sQ(e)) return e;
                                var _ = sU(e);
                                if (_) {
                                    if (P = e.length, L = new e.constructor(P), P && "string" == typeof e[0] && eT.call(e, "index") && (L.index = e.index, L.input = e.input), a = L, !c) return iZ(e, a)
                                } else {
                                    var P, L, z, k, M, $ = nE(e),
                                        U = $ == d || $ == g;
                                    if (sB(e)) return iH(e, c);
                                    if ($ == m || $ == l || U && !s) {
                                        if (a = u || U ? {} : nS(e), !c) return u ? (z = (M = a) && iG(e, o_(e), M), iG(e, nI(e), z)) : (k = rj(a, e), iG(e, nb(e), k))
                                    } else {
                                        if (!eQ[$]) return s ? e : {};
                                        a = function(e, t, r) {
                                            var i, n, s = e.constructor;
                                            switch (t) {
                                                case S:
                                                    return iV(e);
                                                case h:
                                                case p:
                                                    return new s(+e);
                                                case O:
                                                    return i = r ? iV(e.buffer) : e.buffer, new e.constructor(i, e.byteOffset, e.byteLength);
                                                case x:
                                                case R:
                                                case C:
                                                case A:
                                                case N:
                                                case T:
                                                case j:
                                                case q:
                                                case D:
                                                    return iK(e, r);
                                                case y:
                                                    return new s;
                                                case v:
                                                case I:
                                                    return new s(e);
                                                case w:
                                                    return (n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex, n;
                                                case b:
                                                    return new s;
                                                case E:
                                                    return rf ? eE(rf.call(e)) : {}
                                            }
                                        }(e, $, c)
                                    }
                                }
                                o || (o = new rP);
                                var H = o.get(e);
                                if (H) return H;
                                o.set(e, a), s6(e) ? e.forEach(function(r) {
                                    a.add(rz(r, t, i, r, e, o))
                                }) : sX(e) && e.forEach(function(r, n) {
                                    a.set(n, rz(r, t, i, n, e, o))
                                });
                                var V = f ? u ? nf : np : u ? o_ : om,
                                    K = _ ? r : V(e);
                                return ta(K || e, function(r, n) {
                                    K && (r = e[n = r]), rA(a, n, rz(r, t, i, n, e, o))
                                }), a
                            }

                            function rk(e, t, i) {
                                var n = i.length;
                                if (null == e) return !n;
                                for (e = eE(e); n--;) {
                                    var s = i[n],
                                        o = t[s],
                                        a = e[s];
                                    if (a === r && !(s in e) || !o(a)) return !1
                                }
                                return !0
                            }

                            function rM(e, t, n) {
                                if ("function" != typeof e) throw new eO(i);
                                return nk(function() {
                                    e.apply(r, n)
                                }, t)
                            }

                            function r$(e, t, r, i) {
                                var n = -1,
                                    s = th,
                                    o = !0,
                                    a = e.length,
                                    c = [],
                                    l = t.length;
                                if (!a) return c;
                                r && (t = tf(t, tN(r))), i ? (s = tp, o = !1) : t.length >= 200 && (s = tj, o = !1, t = new rE(t));
                                e: for (; ++n < a;) {
                                    var u = e[n],
                                        h = null == r ? u : r(u);
                                    if (u = i || 0 !== u ? u : 0, o && h == h) {
                                        for (var p = l; p--;)
                                            if (t[p] === h) continue e;
                                        c.push(u)
                                    } else s(t, h, i) || c.push(u)
                                }
                                return c
                            }
                            rg.templateSettings = {
                                escape: V,
                                evaluate: K,
                                interpolate: B,
                                variable: "",
                                imports: {
                                    _: rg
                                }
                            }, rg.prototype = rv.prototype, rg.prototype.constructor = rg, rm.prototype = ry(rv.prototype), rm.prototype.constructor = rm, r_.prototype = ry(rv.prototype), r_.prototype.constructor = r_, rw.prototype.clear = function() {
                                this.__data__ = rn ? rn(null) : {}, this.size = 0
                            }, rw.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, rw.prototype.get = function(e) {
                                var t = this.__data__;
                                if (rn) {
                                    var i = t[e];
                                    return i === n ? r : i
                                }
                                return eT.call(t, e) ? t[e] : r
                            }, rw.prototype.has = function(e) {
                                var t = this.__data__;
                                return rn ? t[e] !== r : eT.call(t, e)
                            }, rw.prototype.set = function(e, t) {
                                var i = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, i[e] = rn && t === r ? n : t, this
                            }, rb.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, rb.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = rN(t, e);
                                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0)
                            }, rb.prototype.get = function(e) {
                                var t = this.__data__,
                                    i = rN(t, e);
                                return i < 0 ? r : t[i][1]
                            }, rb.prototype.has = function(e) {
                                return rN(this.__data__, e) > -1
                            }, rb.prototype.set = function(e, t) {
                                var r = this.__data__,
                                    i = rN(r, e);
                                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
                            }, rI.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new rw,
                                    map: new(re || rb),
                                    string: new rw
                                }
                            }, rI.prototype.delete = function(e) {
                                var t = nm(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, rI.prototype.get = function(e) {
                                return nm(this, e).get(e)
                            }, rI.prototype.has = function(e) {
                                return nm(this, e).has(e)
                            }, rI.prototype.set = function(e, t) {
                                var r = nm(this, e),
                                    i = r.size;
                                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
                            }, rE.prototype.add = rE.prototype.push = function(e) {
                                return this.__data__.set(e, n), this
                            }, rE.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rP.prototype.clear = function() {
                                this.__data__ = new rb, this.size = 0
                            }, rP.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }, rP.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, rP.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rP.prototype.set = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof rb) {
                                    var i = r.__data__;
                                    if (!re || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new rI(i)
                                }
                                return r.set(e, t), this.size = r.size, this
                            };
                            var rU = iY(rG),
                                rH = iY(rJ, !0);

                            function rV(e, t) {
                                var r = !0;
                                return rU(e, function(e, i, n) {
                                    return r = !!t(e, i, n)
                                }), r
                            }

                            function rK(e, t, i) {
                                for (var n = -1, s = e.length; ++n < s;) {
                                    var o = e[n],
                                        a = t(o);
                                    if (null != a && (c === r ? a == a && !s3(a) : i(a, c))) var c = a,
                                        l = o
                                }
                                return l
                            }

                            function rB(e, t) {
                                var r = [];
                                return rU(e, function(e, i, n) {
                                    t(e, i, n) && r.push(e)
                                }), r
                            }

                            function rF(e, t, r, i, n) {
                                var s = -1,
                                    o = e.length;
                                for (r || (r = nO), n || (n = []); ++s < o;) {
                                    var a = e[s];
                                    t > 0 && r(a) ? t > 1 ? rF(a, t - 1, r, i, n) : td(n, a) : i || (n[n.length] = a)
                                }
                                return n
                            }
                            var rW = iX(),
                                rZ = iX(!0);

                            function rG(e, t) {
                                return e && rW(e, t, om)
                            }

                            function rJ(e, t) {
                                return e && rZ(e, t, om)
                            }

                            function rQ(e, t) {
                                return tu(t, function(t) {
                                    return sZ(e[t])
                                })
                            }

                            function rY(e, t) {
                                t = iM(t, e);
                                for (var i = 0, n = t.length; null != e && i < n;) e = e[nK(t[i++])];
                                return i && i == n ? e : r
                            }

                            function rX(e, t, r) {
                                var i = t(e);
                                return sU(e) ? i : td(i, r(e))
                            }

                            function r0(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e7 && e7 in eE(e) ? function(e) {
                                    var t = eT.call(e, e7),
                                        i = e[e7];
                                    try {
                                        e[e7] = r;
                                        var n = !0
                                    } catch {}
                                    var s = eD.call(e);
                                    return n && (t ? e[e7] = i : delete e[e7]), s
                                }(e) : eD.call(e)
                            }

                            function r1(e, t) {
                                return e > t
                            }

                            function r5(e, t) {
                                return null != e && eT.call(e, t)
                            }

                            function r6(e, t) {
                                return null != e && t in eE(e)
                            }

                            function r2(e, t, i) {
                                for (var n = i ? tp : th, s = e[0].length, o = e.length, a = o, c = em(o), l = 1 / 0, u = []; a--;) {
                                    var h = e[a];
                                    a && t && (h = tf(h, tN(t))), l = t2(h.length, l), c[a] = !i && (t || s >= 120 && h.length >= 120) ? new rE(a && h) : r
                                }
                                h = e[0];
                                var p = -1,
                                    f = c[0];
                                e: for (; ++p < s && u.length < l;) {
                                    var d = h[p],
                                        g = t ? t(d) : d;
                                    if (d = i || 0 !== d ? d : 0, !(f ? tj(f, g) : n(u, g, i))) {
                                        for (a = o; --a;) {
                                            var y = c[a];
                                            if (!(y ? tj(y, g) : n(e[a], g, i))) continue e
                                        }
                                        f && f.push(g), u.push(d)
                                    }
                                }
                                return u
                            }

                            function r3(e, t, i) {
                                t = iM(t, e);
                                var n = null == (e = nD(e, t)) ? e : e[nK(n6(t))];
                                return null == n ? r : ts(n, e, i)
                            }

                            function r4(e) {
                                return sY(e) && r0(e) == l
                            }

                            function r7(e, t, i, n, s) {
                                return e === t || (null != e && null != t && (sY(e) || sY(t)) ? function(e, t, i, n, s, o) {
                                    var a = sU(e),
                                        c = sU(t),
                                        d = a ? u : nE(e),
                                        g = c ? u : nE(t);
                                    d = d == l ? m : d, g = g == l ? m : g;
                                    var _ = d == m,
                                        P = g == m,
                                        x = d == g;
                                    if (x && sB(e)) {
                                        if (!sB(t)) return !1;
                                        a = !0, _ = !1
                                    }
                                    if (x && !_) return o || (o = new rP), a || s4(e) ? nu(e, t, i, n, s, o) : function(e, t, r, i, n, s, o) {
                                        switch (r) {
                                            case O:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                e = e.buffer, t = t.buffer;
                                            case S:
                                                return !(e.byteLength != t.byteLength || !s(new eU(e), new eU(t)));
                                            case h:
                                            case p:
                                            case v:
                                                return sz(+e, +t);
                                            case f:
                                                return e.name == t.name && e.message == t.message;
                                            case w:
                                            case I:
                                                return e == t + "";
                                            case y:
                                                var a = t$;
                                            case b:
                                                var c = 1 & i;
                                                if (a || (a = tV), e.size != t.size && !c) break;
                                                var l = o.get(e);
                                                if (l) return l == t;
                                                i |= 2, o.set(e, t);
                                                var u = nu(a(e), a(t), i, n, s, o);
                                                return o.delete(e), u;
                                            case E:
                                                if (rf) return rf.call(e) == rf.call(t)
                                        }
                                        return !1
                                    }(e, t, d, i, n, s, o);
                                    if (!(1 & i)) {
                                        var R = _ && eT.call(e, "__wrapped__"),
                                            C = P && eT.call(t, "__wrapped__");
                                        if (R || C) {
                                            var A = R ? e.value() : e,
                                                N = C ? t.value() : t;
                                            return o || (o = new rP), s(A, N, i, n, o)
                                        }
                                    }
                                    return !!x && (o || (o = new rP), function(e, t, i, n, s, o) {
                                        var a = 1 & i,
                                            c = np(e),
                                            l = c.length;
                                        if (l != np(t).length && !a) return !1;
                                        for (var u = l; u--;) {
                                            var h = c[u];
                                            if (!(a ? h in t : eT.call(t, h))) return !1
                                        }
                                        var p = o.get(e),
                                            f = o.get(t);
                                        if (p && f) return p == t && f == e;
                                        var d = !0;
                                        o.set(e, t), o.set(t, e);
                                        for (var g = a; ++u < l;) {
                                            var y = e[h = c[u]],
                                                v = t[h];
                                            if (n) var m = a ? n(v, y, h, t, e, o) : n(y, v, h, e, t, o);
                                            if (!(m === r ? y === v || s(y, v, i, n, o) : m)) {
                                                d = !1;
                                                break
                                            }
                                            g || (g = "constructor" == h)
                                        }
                                        if (d && !g) {
                                            var _ = e.constructor,
                                                w = t.constructor;
                                            _ != w && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w) && (d = !1)
                                        }
                                        return o.delete(e), o.delete(t), d
                                    }(e, t, i, n, s, o))
                                }(e, t, i, n, r7, s) : e != e && t != t)
                            }

                            function r8(e, t, i, n) {
                                var s = i.length,
                                    o = s,
                                    a = !n;
                                if (null == e) return !o;
                                for (e = eE(e); s--;) {
                                    var c = i[s];
                                    if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                }
                                for (; ++s < o;) {
                                    var l = (c = i[s])[0],
                                        u = e[l],
                                        h = c[1];
                                    if (a && c[2]) {
                                        if (u === r && !(l in e)) return !1
                                    } else {
                                        var p = new rP;
                                        if (n) var f = n(u, h, l, e, t, p);
                                        if (!(f === r ? r7(h, u, 3, n, p) : f)) return !1
                                    }
                                }
                                return !0
                            }

                            function r9(e) {
                                return !(!sQ(e) || eq && eq in e) && (sZ(e) ? ek : el).test(nB(e))
                            }

                            function ie(e) {
                                return "function" == typeof e ? e : null == e ? oK : "object" == typeof e ? sU(e) ? io(e[0], e[1]) : is(e) : oX(e)
                            }

                            function it(e) {
                                if (!nT(e)) return t5(e);
                                var t = [];
                                for (var r in eE(e)) eT.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }

                            function ir(e, t) {
                                return e < t
                            }

                            function ii(e, t) {
                                var r = -1,
                                    i = sV(e) ? em(e.length) : [];
                                return rU(e, function(e, n, s) {
                                    i[++r] = t(e, n, s)
                                }), i
                            }

                            function is(e) {
                                var t = n_(e);
                                return 1 == t.length && t[0][2] ? nj(t[0][0], t[0][1]) : function(r) {
                                    return r === e || r8(r, e, t)
                                }
                            }

                            function io(e, t) {
                                var i;
                                return nC(e) && (i = t) == i && !sQ(i) ? nj(nK(e), t) : function(i) {
                                    var n = of (i, e);
                                    return n === r && n === t ? od(i, e) : r7(t, n, 3)
                                }
                            }

                            function ia(e, t, i, n, s) {
                                e !== t && rW(t, function(o, a) {
                                    if (s || (s = new rP), sQ(o)) ! function(e, t, i, n, s, o, a) {
                                        var c = nL(e, i),
                                            l = nL(t, i),
                                            u = a.get(l);
                                        if (u) {
                                            rC(e, i, u);
                                            return
                                        }
                                        var h = o ? o(c, l, i + "", e, t, a) : r,
                                            p = h === r;
                                        if (p) {
                                            var f = sU(l),
                                                d = !f && sB(l),
                                                g = !f && !d && s4(l);
                                            h = l, f || d || g ? sU(c) ? h = c : sK(c) ? h = iZ(c) : d ? (p = !1, h = iH(l, !0)) : g ? (p = !1, h = iK(l, !0)) : h = [] : s1(l) || s$(l) ? (h = c, s$(c) ? h = on(c) : (!sQ(c) || sZ(c)) && (h = nS(l))) : p = !1
                                        }
                                        p && (a.set(l, h), s(h, l, n, o, a), a.delete(l)), rC(e, i, h)
                                    }(e, t, a, i, ia, n, s);
                                    else {
                                        var c = n ? n(nL(e, a), o, a + "", e, t, s) : r;
                                        c === r && (c = o), rC(e, a, c)
                                    }
                                }, o_)
                            }

                            function ic(e, t) {
                                var i = e.length;
                                if (i) return nx(t += t < 0 ? i : 0, i) ? e[t] : r
                            }

                            function il(e, t, r) {
                                t = t.length ? tf(t, function(e) {
                                    return sU(e) ? function(t) {
                                        return rY(t, 1 === e.length ? e[0] : e)
                                    } : e
                                }) : [oK];
                                var i = -1;
                                return t = tf(t, tN(nv())),
                                    function(e, t) {
                                        var r = e.length;
                                        for (e.sort(t); r--;) e[r] = e[r].value;
                                        return e
                                    }(ii(e, function(e, r, n) {
                                        return {
                                            criteria: tf(t, function(t) {
                                                return t(e)
                                            }),
                                            index: ++i,
                                            value: e
                                        }
                                    }), function(e, t) {
                                        return function(e, t, r) {
                                            for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o;) {
                                                var c = iB(n[i], s[i]);
                                                if (c) {
                                                    if (i >= a) return c;
                                                    return c * ("desc" == r[i] ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, r)
                                    })
                            }

                            function iu(e, t, r) {
                                for (var i = -1, n = t.length, s = {}; ++i < n;) {
                                    var o = t[i],
                                        a = rY(e, o);
                                    r(a, o) && i_(s, iM(o, e), a)
                                }
                                return s
                            }

                            function ih(e, t, r, i) {
                                var n = i ? tI : tb,
                                    s = -1,
                                    o = t.length,
                                    a = e;
                                for (e === t && (t = iZ(t)), r && (a = tf(e, tN(r))); ++s < o;)
                                    for (var c = 0, l = t[s], u = r ? r(l) : l;
                                        (c = n(a, u, c, i)) > -1;) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                                return e
                            }

                            function ip(e, t) {
                                for (var r = e ? t.length : 0, i = r - 1; r--;) {
                                    var n = t[r];
                                    if (r == i || n !== s) {
                                        var s = n;
                                        nx(n) ? e5.call(e, n, 1) : iN(e, n)
                                    }
                                }
                                return e
                            }

                            function id(e, t) {
                                return e + tQ(t7() * (t - e + 1))
                            }

                            function ig(e, t) {
                                var r = "";
                                if (!e || t < 1 || t > 9007199254740991) return r;
                                do t % 2 && (r += e), (t = tQ(t / 2)) && (e += e); while (t);
                                return r
                            }

                            function iy(e, t) {
                                return nM(nq(e, t, oK), e + "")
                            }

                            function iv(e) {
                                return rO(ox(e))
                            }

                            function im(e, t) {
                                var r = ox(e);
                                return nH(r, rL(t, 0, r.length))
                            }

                            function i_(e, t, i, n) {
                                if (!sQ(e)) return e;
                                t = iM(t, e);
                                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                                    var l = nK(t[s]),
                                        u = i;
                                    if ("__proto__" === l || "constructor" === l || "prototype" === l) break;
                                    if (s != a) {
                                        var h = c[l];
                                        (u = n ? n(h, l, c) : r) === r && (u = sQ(h) ? h : nx(t[s + 1]) ? [] : {})
                                    }
                                    rA(c, l, u), c = c[l]
                                }
                                return e
                            }
                            var iw = rs ? function(e, t) {
                                    return rs.set(e, t), e
                                } : oK,
                                ib = e8 ? function(e, t) {
                                    return e8(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: oU(t),
                                        writable: !0
                                    })
                                } : oK;

                            function iI(e) {
                                return nH(ox(e))
                            }

                            function iE(e, t, r) {
                                var i = -1,
                                    n = e.length;
                                t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                for (var s = em(n); ++i < n;) s[i] = e[i + t];
                                return s
                            }

                            function iP(e, t) {
                                var r;
                                return rU(e, function(e, i, n) {
                                    return !(r = t(e, i, n))
                                }), !!r
                            }

                            function iS(e, t, r) {
                                var i = 0,
                                    n = null == e ? i : e.length;
                                if ("number" == typeof t && t == t && n <= 2147483647) {
                                    for (; i < n;) {
                                        var s = i + n >>> 1,
                                            o = e[s];
                                        null !== o && !s3(o) && (r ? o <= t : o < t) ? i = s + 1 : n = s
                                    }
                                    return n
                                }
                                return iO(e, t, oK, r)
                            }

                            function iO(e, t, i, n) {
                                var s = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                t = i(t);
                                for (var a = t != t, c = null === t, l = s3(t), u = t === r; s < o;) {
                                    var h = tQ((s + o) / 2),
                                        p = i(e[h]),
                                        f = p !== r,
                                        d = null === p,
                                        g = p == p,
                                        y = s3(p);
                                    if (a) var v = n || g;
                                    else v = u ? g && (n || f) : c ? g && f && (n || !d) : l ? g && f && !d && (n || !y) : !d && !y && (n ? p <= t : p < t);
                                    v ? s = h + 1 : o = h
                                }
                                return t2(o, 4294967294)
                            }

                            function ix(e, t) {
                                for (var r = -1, i = e.length, n = 0, s = []; ++r < i;) {
                                    var o = e[r],
                                        a = t ? t(o) : o;
                                    if (!r || !sz(a, c)) {
                                        var c = a;
                                        s[n++] = 0 === o ? 0 : o
                                    }
                                }
                                return s
                            }

                            function iR(e) {
                                return "number" == typeof e ? e : s3(e) ? a : +e
                            }

                            function iC(e) {
                                if ("string" == typeof e) return e;
                                if (sU(e)) return tf(e, iC) + "";
                                if (s3(e)) return rd ? rd.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function iA(e, t, r) {
                                var i = -1,
                                    n = th,
                                    s = e.length,
                                    o = !0,
                                    a = [],
                                    c = a;
                                if (r) o = !1, n = tp;
                                else if (s >= 200) {
                                    var l = t ? null : nn(e);
                                    if (l) return tV(l);
                                    o = !1, n = tj, c = new rE
                                } else c = t ? [] : a;
                                e: for (; ++i < s;) {
                                    var u = e[i],
                                        h = t ? t(u) : u;
                                    if (u = r || 0 !== u ? u : 0, o && h == h) {
                                        for (var p = c.length; p--;)
                                            if (c[p] === h) continue e;
                                        t && c.push(h), a.push(u)
                                    } else n(c, h, r) || (c !== a && c.push(h), a.push(u))
                                }
                                return a
                            }

                            function iN(e, t) {
                                return t = iM(t, e), null == (e = nD(e, t)) || delete e[nK(n6(t))]
                            }

                            function iT(e, t, r, i) {
                                return i_(e, t, r(rY(e, t)), i)
                            }

                            function ij(e, t, r, i) {
                                for (var n = e.length, s = i ? n : -1;
                                    (i ? s-- : ++s < n) && t(e[s], s, e););
                                return r ? iE(e, i ? 0 : s, i ? s + 1 : n) : iE(e, i ? s + 1 : 0, i ? n : s)
                            }

                            function iq(e, t) {
                                var r = e;
                                return r instanceof r_ && (r = r.value()), tg(t, function(e, t) {
                                    return t.func.apply(t.thisArg, td([e], t.args))
                                }, r)
                            }

                            function iD(e, t, r) {
                                var i = e.length;
                                if (i < 2) return i ? iA(e[0]) : [];
                                for (var n = -1, s = em(i); ++n < i;)
                                    for (var o = e[n], a = -1; ++a < i;) a != n && (s[n] = r$(s[n] || o, e[a], t, r));
                                return iA(rF(s, 1), t, r)
                            }

                            function iL(e, t, i) {
                                for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s;) {
                                    var c = n < o ? t[n] : r;
                                    i(a, e[n], c)
                                }
                                return a
                            }

                            function iz(e) {
                                return sK(e) ? e : []
                            }

                            function ik(e) {
                                return "function" == typeof e ? e : oK
                            }

                            function iM(e, t) {
                                return sU(e) ? e : nC(e, t) ? [e] : nV(os(e))
                            }

                            function i$(e, t, i) {
                                var n = e.length;
                                return i = i === r ? n : i, !t && i >= n ? e : iE(e, t, i)
                            }
                            var iU = tm || function(e) {
                                return e6.clearTimeout(e)
                            };

                            function iH(e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                    i = eK ? eK(r) : new e.constructor(r);
                                return e.copy(i), i
                            }

                            function iV(e) {
                                var t = new e.constructor(e.byteLength);
                                return new eU(t).set(new eU(e)), t
                            }

                            function iK(e, t) {
                                var r = t ? iV(e.buffer) : e.buffer;
                                return new e.constructor(r, e.byteOffset, e.length)
                            }

                            function iB(e, t) {
                                if (e !== t) {
                                    var i = e !== r,
                                        n = null === e,
                                        s = e == e,
                                        o = s3(e),
                                        a = t !== r,
                                        c = null === t,
                                        l = t == t,
                                        u = s3(t);
                                    if (!c && !u && !o && e > t || o && a && l && !c && !u || n && a && l || !i && l || !s) return 1;
                                    if (!n && !o && !u && e < t || u && i && s && !n && !o || c && i && s || !a && s || !l) return -1
                                }
                                return 0
                            }

                            function iF(e, t, r, i) {
                                for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, l = t6(s - o, 0), u = em(c + l), h = !i; ++a < c;) u[a] = t[a];
                                for (; ++n < o;)(h || n < s) && (u[r[n]] = e[n]);
                                for (; l--;) u[a++] = e[n++];
                                return u
                            }

                            function iW(e, t, r, i) {
                                for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, l = t.length, u = t6(s - a, 0), h = em(u + l), p = !i; ++n < u;) h[n] = e[n];
                                for (var f = n; ++c < l;) h[f + c] = t[c];
                                for (; ++o < a;)(p || n < s) && (h[f + r[o]] = e[n++]);
                                return h
                            }

                            function iZ(e, t) {
                                var r = -1,
                                    i = e.length;
                                for (t || (t = em(i)); ++r < i;) t[r] = e[r];
                                return t
                            }

                            function iG(e, t, i, n) {
                                var s = !i;
                                i || (i = {});
                                for (var o = -1, a = t.length; ++o < a;) {
                                    var c = t[o],
                                        l = n ? n(i[c], e[c], c, i, e) : r;
                                    l === r && (l = e[c]), s ? rq(i, c, l) : rA(i, c, l)
                                }
                                return i
                            }

                            function iJ(e, t) {
                                return function(r, i) {
                                    var n = sU(r) ? to : rT,
                                        s = t ? t() : {};
                                    return n(r, e, nv(i, 2), s)
                                }
                            }

                            function iQ(e) {
                                return iy(function(t, i) {
                                    var n = -1,
                                        s = i.length,
                                        o = s > 1 ? i[s - 1] : r,
                                        a = s > 2 ? i[2] : r;
                                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && nR(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), t = eE(t); ++n < s;) {
                                        var c = i[n];
                                        c && e(t, c, n, o)
                                    }
                                    return t
                                })
                            }

                            function iY(e, t) {
                                return function(r, i) {
                                    if (null == r) return r;
                                    if (!sV(r)) return e(r, i);
                                    for (var n = r.length, s = t ? n : -1, o = eE(r);
                                        (t ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                    return r
                                }
                            }

                            function iX(e) {
                                return function(t, r, i) {
                                    for (var n = -1, s = eE(t), o = i(t), a = o.length; a--;) {
                                        var c = o[e ? a : ++n];
                                        if (!1 === r(s[c], c, s)) break
                                    }
                                    return t
                                }
                            }

                            function i0(e) {
                                return function(t) {
                                    var i = tM(t = os(t)) ? tB(t) : r,
                                        n = i ? i[0] : t.charAt(0),
                                        s = i ? i$(i, 1).join("") : t.slice(1);
                                    return n[e]() + s
                                }
                            }

                            function i1(e) {
                                return function(t) {
                                    return tg(ok(oA(t).replace(eH, "")), e, "")
                                }
                            }

                            function i5(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var r = ry(e.prototype),
                                        i = e.apply(r, t);
                                    return sQ(i) ? i : r
                                }
                            }

                            function i6(e) {
                                return function(t, i, n) {
                                    var s = eE(t);
                                    if (!sV(t)) {
                                        var o = nv(i, 3);
                                        t = om(t), i = function(e) {
                                            return o(s[e], e, s)
                                        }
                                    }
                                    var a = e(t, i, n);
                                    return a > -1 ? s[o ? t[a] : a] : r
                                }
                            }

                            function i2(e) {
                                return nh(function(t) {
                                    var n = t.length,
                                        s = n,
                                        o = rm.prototype.thru;
                                    for (e && t.reverse(); s--;) {
                                        var a = t[s];
                                        if ("function" != typeof a) throw new eO(i);
                                        if (o && !c && "wrapper" == ng(a)) var c = new rm([], !0)
                                    }
                                    for (s = c ? s : n; ++s < n;) {
                                        var l = ng(a = t[s]),
                                            u = "wrapper" == l ? nd(a) : r;
                                        c = u && nA(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? c[ng(u[0])].apply(c, u[3]) : 1 == a.length && nA(a) ? c[l]() : c.thru(a)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (c && 1 == e.length && sU(r)) return c.plant(r).value();
                                        for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n;) s = t[i].call(this, s);
                                        return s
                                    }
                                })
                            }

                            function i3(e, t, i, n, s, o, a, c, l, u) {
                                var h = 128 & t,
                                    p = 1 & t,
                                    f = 2 & t,
                                    d = 24 & t,
                                    g = 512 & t,
                                    y = f ? r : i5(e);
                                return function v() {
                                    for (var m = arguments.length, _ = em(m), w = m; w--;) _[w] = arguments[w];
                                    if (d) var b = ny(v),
                                        I = function(e, t) {
                                            for (var r = e.length, i = 0; r--;) e[r] === t && ++i;
                                            return i
                                        }(_, b);
                                    if (n && (_ = iF(_, n, s, d)), o && (_ = iW(_, o, a, d)), m -= I, d && m < u) {
                                        var E = tH(_, b);
                                        return nr(e, t, i3, v.placeholder, i, _, E, c, l, u - m)
                                    }
                                    var P = p ? i : this,
                                        S = f ? P[e] : e;
                                    return m = _.length, c ? _ = function(e, t) {
                                        for (var i = e.length, n = t2(t.length, i), s = iZ(e); n--;) {
                                            var o = t[n];
                                            e[n] = nx(o, i) ? s[o] : r
                                        }
                                        return e
                                    }(_, c) : g && m > 1 && _.reverse(), h && l < m && (_.length = l), this && this !== e6 && this instanceof v && (S = y || i5(S)), S.apply(P, _)
                                }
                            }

                            function i4(e, t) {
                                return function(r, i) {
                                    var n, s;
                                    return n = t(i), s = {}, rG(r, function(t, r, i) {
                                        e(s, n(t), r, i)
                                    }), s
                                }
                            }

                            function i7(e, t) {
                                return function(i, n) {
                                    var s;
                                    if (i === r && n === r) return t;
                                    if (i !== r && (s = i), n !== r) {
                                        if (s === r) return n;
                                        "string" == typeof i || "string" == typeof n ? (i = iC(i), n = iC(n)) : (i = iR(i), n = iR(n)), s = e(i, n)
                                    }
                                    return s
                                }
                            }

                            function i8(e) {
                                return nh(function(t) {
                                    return t = tf(t, tN(nv())), iy(function(r) {
                                        var i = this;
                                        return e(t, function(e) {
                                            return ts(e, i, r)
                                        })
                                    })
                                })
                            }

                            function i9(e, t) {
                                var i = (t = t === r ? " " : iC(t)).length;
                                if (i < 2) return i ? ig(t, e) : t;
                                var n = ig(t, tJ(e / tK(t)));
                                return tM(t) ? i$(tB(n), 0, e).join("") : n.slice(0, e)
                            }

                            function ne(e) {
                                return function(t, i, n) {
                                    return n && "number" != typeof n && nR(t, i, n) && (i = n = r), t = oe(t), i === r ? (i = t, t = 0) : i = oe(i), n = n === r ? t < i ? 1 : -1 : oe(n),
                                        function(e, t, r, i) {
                                            for (var n = -1, s = t6(tJ((t - e) / (r || 1)), 0), o = em(s); s--;) o[i ? s : ++n] = e, e += r;
                                            return o
                                        }(t, i, n, e)
                                }
                            }

                            function nt(e) {
                                return function(t, r) {
                                    return "string" == typeof t && "string" == typeof r || (t = oi(t), r = oi(r)), e(t, r)
                                }
                            }

                            function nr(e, t, i, n, s, o, a, c, l, u) {
                                var h = 8 & t,
                                    p = h ? a : r,
                                    f = h ? r : a,
                                    d = h ? o : r,
                                    g = h ? r : o;
                                t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
                                var y = [e, t, s, d, p, g, f, c, l, u],
                                    v = i.apply(r, y);
                                return nA(e) && nz(v, y), v.placeholder = n, n$(v, e, t)
                            }

                            function ni(e) {
                                var t = eI[e];
                                return function(e, r) {
                                    if (e = oi(e), (r = null == r ? 0 : t2(ot(r), 292)) && t0(e)) {
                                        var i = (os(e) + "e").split("e");
                                        return +((i = (os(t(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                    }
                                    return t(e)
                                }
                            }
                            var nn = rr && 1 / tV(new rr([, -0]))[1] == o ? function(e) {
                                return new rr(e)
                            } : oG;

                            function ns(e) {
                                return function(t) {
                                    var r, i, n = nE(t);
                                    return n == y ? t$(t) : n == b ? (r = -1, i = Array(t.size), t.forEach(function(e) {
                                        i[++r] = [e, e]
                                    }), i) : tf(e(t), function(e) {
                                        return [e, t[e]]
                                    })
                                }
                            }

                            function no(e, t, n, o, a, c, l, u) {
                                var h = 2 & t;
                                if (!h && "function" != typeof e) throw new eO(i);
                                var p = o ? o.length : 0;
                                if (p || (t &= -97, o = a = r), l = l === r ? l : t6(ot(l), 0), u = u === r ? u : ot(u), p -= a ? a.length : 0, 64 & t) {
                                    var f = o,
                                        d = a;
                                    o = a = r
                                }
                                var g = h ? r : nd(e),
                                    y = [e, t, n, o, a, f, d, c, l, u];
                                if (g && function(e, t) {
                                        var r = e[1],
                                            i = t[1],
                                            n = r | i,
                                            o = n < 131,
                                            a = 128 == i && 8 == r || 128 == i && 256 == r && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                                        if (o || a) {
                                            1 & i && (e[2] = t[2], n |= 1 & r ? 0 : 4);
                                            var c = t[3];
                                            if (c) {
                                                var l = e[3];
                                                e[3] = l ? iF(l, c, t[4]) : c, e[4] = l ? tH(e[3], s) : t[4]
                                            }(c = t[5]) && (l = e[5], e[5] = l ? iW(l, c, t[6]) : c, e[6] = l ? tH(e[5], s) : t[6]), (c = t[7]) && (e[7] = c), 128 & i && (e[8] = null == e[8] ? t[8] : t2(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = n
                                        }
                                    }(y, g), e = y[0], t = y[1], n = y[2], o = y[3], a = y[4], (u = y[9] = y[9] === r ? h ? 0 : e.length : t6(y[9] - p, 0)) || !(24 & t) || (t &= -25), t && 1 != t) 8 == t || 16 == t ? (v = e, m = t, _ = u, w = i5(v), T = function e() {
                                    for (var t = arguments.length, i = em(t), n = t, s = ny(e); n--;) i[n] = arguments[n];
                                    var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : tH(i, s);
                                    return (t -= o.length) < _ ? nr(v, m, i3, e.placeholder, r, i, o, r, r, _ - t) : ts(this && this !== e6 && this instanceof e ? w : v, this, i)
                                }) : 32 != t && 33 != t || a.length ? T = i3.apply(r, y) : (b = e, I = t, E = n, P = o, S = 1 & I, O = i5(b), T = function e() {
                                    for (var t = -1, r = arguments.length, i = -1, n = P.length, s = em(n + r), o = this && this !== e6 && this instanceof e ? O : b; ++i < n;) s[i] = P[i];
                                    for (; r--;) s[i++] = arguments[++t];
                                    return ts(o, S ? E : this, s)
                                });
                                else var v, m, _, w, b, I, E, P, S, O, x, R, C, A, N, T = (x = e, R = t, C = n, A = 1 & R, N = i5(x), function e() {
                                    return (this && this !== e6 && this instanceof e ? N : x).apply(A ? C : this, arguments)
                                });
                                return n$((g ? iw : nz)(T, y), e, t)
                            }

                            function na(e, t, i, n) {
                                return e === r || sz(e, eC[i]) && !eT.call(n, i) ? t : e
                            }

                            function nc(e, t, i, n, s, o) {
                                return sQ(e) && sQ(t) && (o.set(t, e), ia(e, t, r, nc, o), o.delete(t)), e
                            }

                            function nl(e) {
                                return s1(e) ? r : e
                            }

                            function nu(e, t, i, n, s, o) {
                                var a = 1 & i,
                                    c = e.length,
                                    l = t.length;
                                if (c != l && !(a && l > c)) return !1;
                                var u = o.get(e),
                                    h = o.get(t);
                                if (u && h) return u == t && h == e;
                                var p = -1,
                                    f = !0,
                                    d = 2 & i ? new rE : r;
                                for (o.set(e, t), o.set(t, e); ++p < c;) {
                                    var g = e[p],
                                        y = t[p];
                                    if (n) var v = a ? n(y, g, p, t, e, o) : n(g, y, p, e, t, o);
                                    if (v !== r) {
                                        if (v) continue;
                                        f = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!tv(t, function(e, t) {
                                                if (!tj(d, t) && (g === e || s(g, e, i, n, o))) return d.push(t)
                                            })) {
                                            f = !1;
                                            break
                                        }
                                    } else if (!(g === y || s(g, y, i, n, o))) {
                                        f = !1;
                                        break
                                    }
                                }
                                return o.delete(e), o.delete(t), f
                            }

                            function nh(e) {
                                return nM(nq(e, r, nY), e + "")
                            }

                            function np(e) {
                                return rX(e, om, nb)
                            }

                            function nf(e) {
                                return rX(e, o_, nI)
                            }
                            var nd = rs ? function(e) {
                                return rs.get(e)
                            } : oG;

                            function ng(e) {
                                for (var t = e.name + "", r = ro[t], i = eT.call(ro, t) ? r.length : 0; i--;) {
                                    var n = r[i],
                                        s = n.func;
                                    if (null == s || s == e) return n.name
                                }
                                return t
                            }

                            function ny(e) {
                                return (eT.call(rg, "placeholder") ? rg : e).placeholder
                            }

                            function nv() {
                                var e = rg.iteratee || oB;
                                return e = e === oB ? ie : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function nm(e, t) {
                                var r, i = e.__data__;
                                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                            }

                            function n_(e) {
                                for (var t = om(e), r = t.length; r--;) {
                                    var i = t[r],
                                        n = e[i];
                                    t[r] = [i, n, n == n && !sQ(n)]
                                }
                                return t
                            }

                            function nw(e, t) {
                                var i = null == e ? r : e[t];
                                return r9(i) ? i : r
                            }
                            var nb = tY ? function(e) {
                                    return null == e ? [] : tu(tY(e = eE(e)), function(t) {
                                        return e1.call(e, t)
                                    })
                                } : o5,
                                nI = tY ? function(e) {
                                    for (var t = []; e;) td(t, nb(e)), e = eF(e);
                                    return t
                                } : o5,
                                nE = r0;

                            function nP(e, t, r) {
                                t = iM(t, e);
                                for (var i = -1, n = t.length, s = !1; ++i < n;) {
                                    var o = nK(t[i]);
                                    if (!(s = null != e && r(e, o))) break;
                                    e = e[o]
                                }
                                return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sJ(n) && nx(o, n) && (sU(e) || s$(e))
                            }

                            function nS(e) {
                                return "function" != typeof e.constructor || nT(e) ? {} : ry(eF(e))
                            }

                            function nO(e) {
                                return sU(e) || s$(e) || !!(e2 && e && e[e2])
                            }

                            function nx(e, t) {
                                var r = typeof e;
                                return !!(t = t ? ? 9007199254740991) && ("number" == r || "symbol" != r && eh.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function nR(e, t, r) {
                                if (!sQ(r)) return !1;
                                var i = typeof t;
                                return ("number" == i ? !!(sV(r) && nx(t, r.length)) : "string" == i && t in r) && sz(r[t], e)
                            }

                            function nC(e, t) {
                                if (sU(e)) return !1;
                                var r = typeof e;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == e || s3(e)) || W.test(e) || !F.test(e) || null != t && e in eE(t)
                            }

                            function nA(e) {
                                var t = ng(e),
                                    r = rg[t];
                                if ("function" != typeof r || !(t in r_.prototype)) return !1;
                                if (e === r) return !0;
                                var i = nd(r);
                                return !!i && e === i[0]
                            }(t9 && nE(new t9(new ArrayBuffer(1))) != O || re && nE(new re) != y || rt && nE(rt.resolve()) != _ || rr && nE(new rr) != b || ri && nE(new ri) != P) && (nE = function(e) {
                                var t = r0(e),
                                    i = t == m ? e.constructor : r,
                                    n = i ? nB(i) : "";
                                if (n) switch (n) {
                                    case ra:
                                        return O;
                                    case rc:
                                        return y;
                                    case rl:
                                        return _;
                                    case ru:
                                        return b;
                                    case rh:
                                        return P
                                }
                                return t
                            });
                            var nN = eA ? sZ : o6;

                            function nT(e) {
                                var t = e && e.constructor,
                                    r = "function" == typeof t && t.prototype || eC;
                                return e === r
                            }

                            function nj(e, t) {
                                return function(i) {
                                    return null != i && i[e] === t && (t !== r || e in eE(i))
                                }
                            }

                            function nq(e, t, i) {
                                return t = t6(t === r ? e.length - 1 : t, 0),
                                    function() {
                                        for (var r = arguments, n = -1, s = t6(r.length - t, 0), o = em(s); ++n < s;) o[n] = r[t + n];
                                        n = -1;
                                        for (var a = em(t + 1); ++n < t;) a[n] = r[n];
                                        return a[t] = i(o), ts(e, this, a)
                                    }
                            }

                            function nD(e, t) {
                                return t.length < 2 ? e : rY(e, iE(t, 0, -1))
                            }

                            function nL(e, t) {
                                if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var nz = nU(iw),
                                nk = tG || function(e, t) {
                                    return e6.setTimeout(e, t)
                                },
                                nM = nU(ib);

                            function n$(e, t, r) {
                                var i, n, s = t + "";
                                return nM(e, function(e, t) {
                                    var r = t.length;
                                    if (!r) return e;
                                    var i = r - 1;
                                    return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(X, `{
/* [wrapped with ` + t + `] */
`)
                                }(s, (i = (n = s.match(ee)) ? n[1].split(et) : [], ta(c, function(e) {
                                    var t = "_." + e[0];
                                    r & e[1] && !th(i, t) && i.push(t)
                                }), i.sort())))
                            }

                            function nU(e) {
                                var t = 0,
                                    i = 0;
                                return function() {
                                    var n = t3(),
                                        s = 16 - (n - i);
                                    if (i = n, s > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function nH(e, t) {
                                var i = -1,
                                    n = e.length,
                                    s = n - 1;
                                for (t = t === r ? n : t; ++i < t;) {
                                    var o = id(i, s),
                                        a = e[o];
                                    e[o] = e[i], e[i] = a
                                }
                                return e.length = t, e
                            }
                            var nV = (ey = (eg = sN(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(Z, function(e, r, i, n) {
                                    t.push(i ? n.replace(en, "$1") : r || e)
                                }), t
                            }, function(e) {
                                return 500 === ey.size && ey.clear(), e
                            })).cache, eg);

                            function nK(e) {
                                if ("string" == typeof e || s3(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function nB(e) {
                                if (null != e) {
                                    try {
                                        return eN.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function nF(e) {
                                if (e instanceof r_) return e.clone();
                                var t = new rm(e.__wrapped__, e.__chain__);
                                return t.__actions__ = iZ(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var nW = iy(function(e, t) {
                                    return sK(e) ? r$(e, rF(t, 1, sK, !0)) : []
                                }),
                                nZ = iy(function(e, t) {
                                    var i = n6(t);
                                    return sK(i) && (i = r), sK(e) ? r$(e, rF(t, 1, sK, !0), nv(i, 2)) : []
                                }),
                                nG = iy(function(e, t) {
                                    var i = n6(t);
                                    return sK(i) && (i = r), sK(e) ? r$(e, rF(t, 1, sK, !0), r, i) : []
                                });

                            function nJ(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : ot(r);
                                return n < 0 && (n = t6(i + n, 0)), tw(e, nv(t, 3), n)
                            }

                            function nQ(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n - 1;
                                return i !== r && (s = ot(i), s = i < 0 ? t6(n + s, 0) : t2(s, n - 1)), tw(e, nv(t, 3), s, !0)
                            }

                            function nY(e) {
                                return (null == e ? 0 : e.length) ? rF(e, 1) : []
                            }

                            function nX(e) {
                                return e && e.length ? e[0] : r
                            }
                            var n0 = iy(function(e) {
                                    var t = tf(e, iz);
                                    return t.length && t[0] === e[0] ? r2(t) : []
                                }),
                                n1 = iy(function(e) {
                                    var t = n6(e),
                                        i = tf(e, iz);
                                    return t === n6(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? r2(i, nv(t, 2)) : []
                                }),
                                n5 = iy(function(e) {
                                    var t = n6(e),
                                        i = tf(e, iz);
                                    return (t = "function" == typeof t ? t : r) && i.pop(), i.length && i[0] === e[0] ? r2(i, r, t) : []
                                });

                            function n6(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : r
                            }
                            var n2 = iy(n3);

                            function n3(e, t) {
                                return e && e.length && t && t.length ? ih(e, t) : e
                            }
                            var n4 = nh(function(e, t) {
                                var r = null == e ? 0 : e.length,
                                    i = rD(e, t);
                                return ip(e, tf(t, function(e) {
                                    return nx(e, r) ? +e : e
                                }).sort(iB)), i
                            });

                            function n7(e) {
                                return null == e ? e : t8.call(e)
                            }
                            var n8 = iy(function(e) {
                                    return iA(rF(e, 1, sK, !0))
                                }),
                                n9 = iy(function(e) {
                                    var t = n6(e);
                                    return sK(t) && (t = r), iA(rF(e, 1, sK, !0), nv(t, 2))
                                }),
                                se = iy(function(e) {
                                    var t = n6(e);
                                    return t = "function" == typeof t ? t : r, iA(rF(e, 1, sK, !0), r, t)
                                });

                            function st(e) {
                                if (!(e && e.length)) return [];
                                var t = 0;
                                return e = tu(e, function(e) {
                                    if (sK(e)) return t = t6(e.length, t), !0
                                }), tC(t, function(t) {
                                    return tf(e, tS(t))
                                })
                            }

                            function sr(e, t) {
                                if (!(e && e.length)) return [];
                                var i = st(e);
                                return null == t ? i : tf(i, function(e) {
                                    return ts(t, r, e)
                                })
                            }
                            var si = iy(function(e, t) {
                                    return sK(e) ? r$(e, t) : []
                                }),
                                sn = iy(function(e) {
                                    return iD(tu(e, sK))
                                }),
                                ss = iy(function(e) {
                                    var t = n6(e);
                                    return sK(t) && (t = r), iD(tu(e, sK), nv(t, 2))
                                }),
                                so = iy(function(e) {
                                    var t = n6(e);
                                    return t = "function" == typeof t ? t : r, iD(tu(e, sK), r, t)
                                }),
                                sa = iy(st),
                                sc = iy(function(e) {
                                    var t = e.length,
                                        i = t > 1 ? e[t - 1] : r;
                                    return i = "function" == typeof i ? (e.pop(), i) : r, sr(e, i)
                                });

                            function sl(e) {
                                var t = rg(e);
                                return t.__chain__ = !0, t
                            }

                            function su(e, t) {
                                return t(e)
                            }
                            var sh = nh(function(e) {
                                    var t = e.length,
                                        i = t ? e[0] : 0,
                                        n = this.__wrapped__,
                                        s = function(t) {
                                            return rD(t, e)
                                        };
                                    return !(t > 1) && !this.__actions__.length && n instanceof r_ && nx(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                                        func: su,
                                        args: [s],
                                        thisArg: r
                                    }), new rm(n, this.__chain__).thru(function(e) {
                                        return t && !e.length && e.push(r), e
                                    })) : this.thru(s)
                                }),
                                sp = iJ(function(e, t, r) {
                                    eT.call(e, r) ? ++e[r] : rq(e, r, 1)
                                }),
                                sf = i6(nJ),
                                sd = i6(nQ);

                            function sg(e, t) {
                                return (sU(e) ? ta : rU)(e, nv(t, 3))
                            }

                            function sy(e, t) {
                                return (sU(e) ? tc : rH)(e, nv(t, 3))
                            }
                            var sv = iJ(function(e, t, r) {
                                    eT.call(e, r) ? e[r].push(t) : rq(e, r, [t])
                                }),
                                sm = iy(function(e, t, r) {
                                    var i = -1,
                                        n = "function" == typeof t,
                                        s = sV(e) ? em(e.length) : [];
                                    return rU(e, function(e) {
                                        s[++i] = n ? ts(t, e, r) : r3(e, t, r)
                                    }), s
                                }),
                                s_ = iJ(function(e, t, r) {
                                    rq(e, r, t)
                                });

                            function sw(e, t) {
                                return (sU(e) ? tf : ii)(e, nv(t, 3))
                            }
                            var sb = iJ(function(e, t, r) {
                                    e[r ? 0 : 1].push(t)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                sI = iy(function(e, t) {
                                    if (null == e) return [];
                                    var r = t.length;
                                    return r > 1 && nR(e, t[0], t[1]) ? t = [] : r > 2 && nR(t[0], t[1], t[2]) && (t = [t[0]]), il(e, rF(t, 1), [])
                                }),
                                sE = tO || function() {
                                    return e6.Date.now()
                                };

                            function sP(e, t, i) {
                                return t = i ? r : t, t = e && null == t ? e.length : t, no(e, 128, r, r, r, r, t)
                            }

                            function sS(e, t) {
                                var n;
                                if ("function" != typeof t) throw new eO(i);
                                return e = ot(e),
                                    function() {
                                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n
                                    }
                            }
                            var sO = iy(function(e, t, r) {
                                    var i = 1;
                                    if (r.length) {
                                        var n = tH(r, ny(sO));
                                        i |= 32
                                    }
                                    return no(e, i, t, r, n)
                                }),
                                sx = iy(function(e, t, r) {
                                    var i = 3;
                                    if (r.length) {
                                        var n = tH(r, ny(sx));
                                        i |= 32
                                    }
                                    return no(t, i, e, r, n)
                                });

                            function sR(e, t, n) {
                                var s, o, a, c, l, u, h = 0,
                                    p = !1,
                                    f = !1,
                                    d = !0;
                                if ("function" != typeof e) throw new eO(i);

                                function g(t) {
                                    var i = s,
                                        n = o;
                                    return s = o = r, h = t, c = e.apply(n, i)
                                }

                                function y(e) {
                                    var i = e - u,
                                        n = e - h;
                                    return u === r || i >= t || i < 0 || f && n >= a
                                }

                                function v() {
                                    var e, r, i, n = sE();
                                    if (y(n)) return m(n);
                                    l = nk(v, (e = n - u, r = n - h, i = t - e, f ? t2(i, a - r) : i))
                                }

                                function m(e) {
                                    return l = r, d && s ? g(e) : (s = o = r, c)
                                }

                                function _() {
                                    var e, i = sE(),
                                        n = y(i);
                                    if (s = arguments, o = this, u = i, n) {
                                        if (l === r) return h = e = u, l = nk(v, t), p ? g(e) : c;
                                        if (f) return iU(l), l = nk(v, t), g(u)
                                    }
                                    return l === r && (l = nk(v, t)), c
                                }
                                return t = oi(t) || 0, sQ(n) && (p = !!n.leading, a = (f = "maxWait" in n) ? t6(oi(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), _.cancel = function() {
                                    l !== r && iU(l), h = 0, s = u = o = l = r
                                }, _.flush = function() {
                                    return l === r ? c : m(sE())
                                }, _
                            }
                            var sC = iy(function(e, t) {
                                    return rM(e, 1, t)
                                }),
                                sA = iy(function(e, t, r) {
                                    return rM(e, oi(t) || 0, r)
                                });

                            function sN(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new eO(i);
                                var r = function() {
                                    var i = arguments,
                                        n = t ? t.apply(this, i) : i[0],
                                        s = r.cache;
                                    if (s.has(n)) return s.get(n);
                                    var o = e.apply(this, i);
                                    return r.cache = s.set(n, o) || s, o
                                };
                                return r.cache = new(sN.Cache || rI), r
                            }

                            function sT(e) {
                                if ("function" != typeof e) throw new eO(i);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2])
                                    }
                                    return !e.apply(this, t)
                                }
                            }
                            sN.Cache = rI;
                            var sj = iy(function(e, t) {
                                    var r = (t = 1 == t.length && sU(t[0]) ? tf(t[0], tN(nv())) : tf(rF(t, 1), tN(nv()))).length;
                                    return iy(function(i) {
                                        for (var n = -1, s = t2(i.length, r); ++n < s;) i[n] = t[n].call(this, i[n]);
                                        return ts(e, this, i)
                                    })
                                }),
                                sq = iy(function(e, t) {
                                    var i = tH(t, ny(sq));
                                    return no(e, 32, r, t, i)
                                }),
                                sD = iy(function(e, t) {
                                    var i = tH(t, ny(sD));
                                    return no(e, 64, r, t, i)
                                }),
                                sL = nh(function(e, t) {
                                    return no(e, 256, r, r, r, t)
                                });

                            function sz(e, t) {
                                return e === t || e != e && t != t
                            }
                            var sk = nt(r1),
                                sM = nt(function(e, t) {
                                    return e >= t
                                }),
                                s$ = r4(function() {
                                    return arguments
                                }()) ? r4 : function(e) {
                                    return sY(e) && eT.call(e, "callee") && !e1.call(e, "callee")
                                },
                                sU = em.isArray,
                                sH = e9 ? tN(e9) : function(e) {
                                    return sY(e) && r0(e) == S
                                };

                            function sV(e) {
                                return null != e && sJ(e.length) && !sZ(e)
                            }

                            function sK(e) {
                                return sY(e) && sV(e)
                            }
                            var sB = tX || o6,
                                sF = te ? tN(te) : function(e) {
                                    return sY(e) && r0(e) == p
                                };

                            function sW(e) {
                                if (!sY(e)) return !1;
                                var t = r0(e);
                                return t == f || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !s1(e)
                            }

                            function sZ(e) {
                                if (!sQ(e)) return !1;
                                var t = r0(e);
                                return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function sG(e) {
                                return "number" == typeof e && e == ot(e)
                            }

                            function sJ(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }

                            function sQ(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function sY(e) {
                                return null != e && "object" == typeof e
                            }
                            var sX = tt ? tN(tt) : function(e) {
                                return sY(e) && nE(e) == y
                            };

                            function s0(e) {
                                return "number" == typeof e || sY(e) && r0(e) == v
                            }

                            function s1(e) {
                                if (!sY(e) || r0(e) != m) return !1;
                                var t = eF(e);
                                if (null === t) return !0;
                                var r = eT.call(t, "constructor") && t.constructor;
                                return "function" == typeof r && r instanceof r && eN.call(r) == eL
                            }
                            var s5 = tr ? tN(tr) : function(e) {
                                    return sY(e) && r0(e) == w
                                },
                                s6 = ti ? tN(ti) : function(e) {
                                    return sY(e) && nE(e) == b
                                };

                            function s2(e) {
                                return "string" == typeof e || !sU(e) && sY(e) && r0(e) == I
                            }

                            function s3(e) {
                                return "symbol" == typeof e || sY(e) && r0(e) == E
                            }
                            var s4 = tn ? tN(tn) : function(e) {
                                    return sY(e) && sJ(e.length) && !!eJ[r0(e)]
                                },
                                s7 = nt(ir),
                                s8 = nt(function(e, t) {
                                    return e <= t
                                });

                            function s9(e) {
                                if (!e) return [];
                                if (sV(e)) return s2(e) ? tB(e) : iZ(e);
                                if (e3 && e[e3]) return function(e) {
                                    for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                    return r
                                }(e[e3]());
                                var t = nE(e);
                                return (t == y ? t$ : t == b ? tV : ox)(e)
                            }

                            function oe(e) {
                                return e ? (e = oi(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function ot(e) {
                                var t = oe(e),
                                    r = t % 1;
                                return t == t ? r ? t - r : t : 0
                            }

                            function or(e) {
                                return e ? rL(ot(e), 0, 4294967295) : 0
                            }

                            function oi(e) {
                                if ("number" == typeof e) return e;
                                if (s3(e)) return a;
                                if (sQ(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = sQ(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tA(e);
                                var r = ec.test(e);
                                return r || eu.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
                            }

                            function on(e) {
                                return iG(e, o_(e))
                            }

                            function os(e) {
                                return null == e ? "" : iC(e)
                            }
                            var oo = iQ(function(e, t) {
                                    if (nT(t) || sV(t)) {
                                        iG(t, om(t), e);
                                        return
                                    }
                                    for (var r in t) eT.call(t, r) && rA(e, r, t[r])
                                }),
                                oa = iQ(function(e, t) {
                                    iG(t, o_(t), e)
                                }),
                                oc = iQ(function(e, t, r, i) {
                                    iG(t, o_(t), e, i)
                                }),
                                ol = iQ(function(e, t, r, i) {
                                    iG(t, om(t), e, i)
                                }),
                                ou = nh(rD),
                                oh = iy(function(e, t) {
                                    e = eE(e);
                                    var i = -1,
                                        n = t.length,
                                        s = n > 2 ? t[2] : r;
                                    for (s && nR(t[0], t[1], s) && (n = 1); ++i < n;)
                                        for (var o = t[i], a = o_(o), c = -1, l = a.length; ++c < l;) {
                                            var u = a[c],
                                                h = e[u];
                                            (h === r || sz(h, eC[u]) && !eT.call(e, u)) && (e[u] = o[u])
                                        }
                                    return e
                                }),
                                op = iy(function(e) {
                                    return e.push(r, nc), ts(ob, r, e)
                                });

                            function of (e, t, i) {
                                var n = null == e ? r : rY(e, t);
                                return n === r ? i : n
                            }

                            function od(e, t) {
                                return null != e && nP(e, t, r6)
                            }
                            var og = i4(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eD.call(t)), e[t] = r
                                }, oU(oK)),
                                oy = i4(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eD.call(t)), eT.call(e, t) ? e[t].push(r) : e[t] = [r]
                                }, nv),
                                ov = iy(r3);

                            function om(e) {
                                return sV(e) ? rS(e) : it(e)
                            }

                            function o_(e) {
                                return sV(e) ? rS(e, !0) : function(e) {
                                    if (!sQ(e)) return function(e) {
                                        var t = [];
                                        if (null != e)
                                            for (var r in eE(e)) t.push(r);
                                        return t
                                    }(e);
                                    var t = nT(e),
                                        r = [];
                                    for (var i in e) "constructor" == i && (t || !eT.call(e, i)) || r.push(i);
                                    return r
                                }(e)
                            }
                            var ow = iQ(function(e, t, r) {
                                    ia(e, t, r)
                                }),
                                ob = iQ(function(e, t, r, i) {
                                    ia(e, t, r, i)
                                }),
                                oI = nh(function(e, t) {
                                    var r = {};
                                    if (null == e) return r;
                                    var i = !1;
                                    t = tf(t, function(t) {
                                        return t = iM(t, e), i || (i = t.length > 1), t
                                    }), iG(e, nf(e), r), i && (r = rz(r, 7, nl));
                                    for (var n = t.length; n--;) iN(r, t[n]);
                                    return r
                                }),
                                oE = nh(function(e, t) {
                                    return null == e ? {} : iu(e, t, function(t, r) {
                                        return od(e, r)
                                    })
                                });

                            function oP(e, t) {
                                if (null == e) return {};
                                var r = tf(nf(e), function(e) {
                                    return [e]
                                });
                                return t = nv(t), iu(e, r, function(e, r) {
                                    return t(e, r[0])
                                })
                            }
                            var oS = ns(om),
                                oO = ns(o_);

                            function ox(e) {
                                return null == e ? [] : tT(e, om(e))
                            }
                            var oR = i1(function(e, t, r) {
                                return t = t.toLowerCase(), e + (r ? oC(t) : t)
                            });

                            function oC(e) {
                                return oz(os(e).toLowerCase())
                            }

                            function oA(e) {
                                return (e = os(e)) && e.replace(ep, tL).replace(eV, "")
                            }
                            var oN = i1(function(e, t, r) {
                                    return e + (r ? "-" : "") + t.toLowerCase()
                                }),
                                oT = i1(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toLowerCase()
                                }),
                                oj = i0("toLowerCase"),
                                oq = i1(function(e, t, r) {
                                    return e + (r ? "_" : "") + t.toLowerCase()
                                }),
                                oD = i1(function(e, t, r) {
                                    return e + (r ? " " : "") + oz(t)
                                }),
                                oL = i1(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toUpperCase()
                                }),
                                oz = i0("toUpperCase");

                            function ok(e, t, i) {
                                var n;
                                return e = os(e), (t = i ? r : t) === r ? (n = e, eW.test(n)) ? e.match(eB) || [] : e.match(er) || [] : e.match(t) || []
                            }
                            var oM = iy(function(e, t) {
                                    try {
                                        return ts(e, r, t)
                                    } catch (e) {
                                        return sW(e) ? e : new ew(e)
                                    }
                                }),
                                o$ = nh(function(e, t) {
                                    return ta(t, function(t) {
                                        rq(e, t = nK(t), sO(e[t], e))
                                    }), e
                                });

                            function oU(e) {
                                return function() {
                                    return e
                                }
                            }
                            var oH = i2(),
                                oV = i2(!0);

                            function oK(e) {
                                return e
                            }

                            function oB(e) {
                                return ie("function" == typeof e ? e : rz(e, 1))
                            }
                            var oF = iy(function(e, t) {
                                    return function(r) {
                                        return r3(r, e, t)
                                    }
                                }),
                                oW = iy(function(e, t) {
                                    return function(r) {
                                        return r3(e, r, t)
                                    }
                                });

                            function oZ(e, t, r) {
                                var i = om(t),
                                    n = rQ(t, i);
                                null != r || sQ(t) && (n.length || !i.length) || (r = t, t = e, e = this, n = rQ(t, om(t)));
                                var s = !(sQ(r) && "chain" in r) || !!r.chain,
                                    o = sZ(e);
                                return ta(n, function(r) {
                                    var i = t[r];
                                    e[r] = i, o && (e.prototype[r] = function() {
                                        var t = this.__chain__;
                                        if (s || t) {
                                            var r = e(this.__wrapped__);
                                            return (r.__actions__ = iZ(this.__actions__)).push({
                                                func: i,
                                                args: arguments,
                                                thisArg: e
                                            }), r.__chain__ = t, r
                                        }
                                        return i.apply(e, td([this.value()], arguments))
                                    })
                                }), e
                            }

                            function oG() {}
                            var oJ = i8(tf),
                                oQ = i8(tl),
                                oY = i8(tv);

                            function oX(e) {
                                return nC(e) ? tS(nK(e)) : function(t) {
                                    return rY(t, e)
                                }
                            }
                            var o0 = ne(),
                                o1 = ne(!0);

                            function o5() {
                                return []
                            }

                            function o6() {
                                return !1
                            }
                            var o2 = i7(function(e, t) {
                                    return e + t
                                }, 0),
                                o3 = ni("ceil"),
                                o4 = i7(function(e, t) {
                                    return e / t
                                }, 1),
                                o7 = ni("floor"),
                                o8 = i7(function(e, t) {
                                    return e * t
                                }, 1),
                                o9 = ni("round"),
                                ae = i7(function(e, t) {
                                    return e - t
                                }, 0);
                            return rg.after = function(e, t) {
                                if ("function" != typeof t) throw new eO(i);
                                return e = ot(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, rg.ary = sP, rg.assign = oo, rg.assignIn = oa, rg.assignInWith = oc, rg.assignWith = ol, rg.at = ou, rg.before = sS, rg.bind = sO, rg.bindAll = o$, rg.bindKey = sx, rg.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return sU(e) ? e : [e]
                            }, rg.chain = sl, rg.chunk = function(e, t, i) {
                                t = (i ? nR(e, t, i) : t === r) ? 1 : t6(ot(t), 0);
                                var n = null == e ? 0 : e.length;
                                if (!n || t < 1) return [];
                                for (var s = 0, o = 0, a = em(tJ(n / t)); s < n;) a[o++] = iE(e, s, s += t);
                                return a
                            }, rg.compact = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r;) {
                                    var s = e[t];
                                    s && (n[i++] = s)
                                }
                                return n
                            }, rg.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = em(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                                return td(sU(r) ? iZ(r) : [r], rF(t, 1))
                            }, rg.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    r = nv();
                                return e = t ? tf(e, function(e) {
                                    if ("function" != typeof e[1]) throw new eO(i);
                                    return [r(e[0]), e[1]]
                                }) : [], iy(function(r) {
                                    for (var i = -1; ++i < t;) {
                                        var n = e[i];
                                        if (ts(n[0], this, r)) return ts(n[1], this, r)
                                    }
                                })
                            }, rg.conforms = function(e) {
                                var t, r;
                                return t = rz(e, 1), r = om(t),
                                    function(e) {
                                        return rk(e, t, r)
                                    }
                            }, rg.constant = oU, rg.countBy = sp, rg.create = function(e, t) {
                                var r = ry(e);
                                return null == t ? r : rj(r, t)
                            }, rg.curry = function e(t, i, n) {
                                i = n ? r : i;
                                var s = no(t, 8, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rg.curryRight = function e(t, i, n) {
                                i = n ? r : i;
                                var s = no(t, 16, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rg.debounce = sR, rg.defaults = oh, rg.defaultsDeep = op, rg.defer = sC, rg.delay = sA, rg.difference = nW, rg.differenceBy = nZ, rg.differenceWith = nG, rg.drop = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iE(e, (t = i || t === r ? 1 : ot(t)) < 0 ? 0 : t, n) : []
                            }, rg.dropRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iE(e, 0, (t = n - (t = i || t === r ? 1 : ot(t))) < 0 ? 0 : t) : []
                            }, rg.dropRightWhile = function(e, t) {
                                return e && e.length ? ij(e, nv(t, 3), !0, !0) : []
                            }, rg.dropWhile = function(e, t) {
                                return e && e.length ? ij(e, nv(t, 3), !0) : []
                            }, rg.fill = function(e, t, i, n) {
                                var s = null == e ? 0 : e.length;
                                return s ? (i && "number" != typeof i && nR(e, t, i) && (i = 0, n = s), function(e, t, i, n) {
                                    var s = e.length;
                                    for ((i = ot(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : ot(n)) < 0 && (n += s), n = i > n ? 0 : or(n); i < n;) e[i++] = t;
                                    return e
                                }(e, t, i, n)) : []
                            }, rg.filter = function(e, t) {
                                return (sU(e) ? tu : rB)(e, nv(t, 3))
                            }, rg.flatMap = function(e, t) {
                                return rF(sw(e, t), 1)
                            }, rg.flatMapDeep = function(e, t) {
                                return rF(sw(e, t), o)
                            }, rg.flatMapDepth = function(e, t, i) {
                                return i = i === r ? 1 : ot(i), rF(sw(e, t), i)
                            }, rg.flatten = nY, rg.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? rF(e, o) : []
                            }, rg.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? rF(e, t = t === r ? 1 : ot(t)) : []
                            }, rg.flip = function(e) {
                                return no(e, 512)
                            }, rg.flow = oH, rg.flowRight = oV, rg.fromPairs = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r;) {
                                    var n = e[t];
                                    i[n[0]] = n[1]
                                }
                                return i
                            }, rg.functions = function(e) {
                                return null == e ? [] : rQ(e, om(e))
                            }, rg.functionsIn = function(e) {
                                return null == e ? [] : rQ(e, o_(e))
                            }, rg.groupBy = sv, rg.initial = function(e) {
                                return (null == e ? 0 : e.length) ? iE(e, 0, -1) : []
                            }, rg.intersection = n0, rg.intersectionBy = n1, rg.intersectionWith = n5, rg.invert = og, rg.invertBy = oy, rg.invokeMap = sm, rg.iteratee = oB, rg.keyBy = s_, rg.keys = om, rg.keysIn = o_, rg.map = sw, rg.mapKeys = function(e, t) {
                                var r = {};
                                return t = nv(t, 3), rG(e, function(e, i, n) {
                                    rq(r, t(e, i, n), e)
                                }), r
                            }, rg.mapValues = function(e, t) {
                                var r = {};
                                return t = nv(t, 3), rG(e, function(e, i, n) {
                                    rq(r, i, t(e, i, n))
                                }), r
                            }, rg.matches = function(e) {
                                return is(rz(e, 1))
                            }, rg.matchesProperty = function(e, t) {
                                return io(e, rz(t, 1))
                            }, rg.memoize = sN, rg.merge = ow, rg.mergeWith = ob, rg.method = oF, rg.methodOf = oW, rg.mixin = oZ, rg.negate = sT, rg.nthArg = function(e) {
                                return e = ot(e), iy(function(t) {
                                    return ic(t, e)
                                })
                            }, rg.omit = oI, rg.omitBy = function(e, t) {
                                return oP(e, sT(nv(t)))
                            }, rg.once = function(e) {
                                return sS(2, e)
                            }, rg.orderBy = function(e, t, i, n) {
                                return null == e ? [] : (sU(t) || (t = null == t ? [] : [t]), sU(i = n ? r : i) || (i = null == i ? [] : [i]), il(e, t, i))
                            }, rg.over = oJ, rg.overArgs = sj, rg.overEvery = oQ, rg.overSome = oY, rg.partial = sq, rg.partialRight = sD, rg.partition = sb, rg.pick = oE, rg.pickBy = oP, rg.property = oX, rg.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? r : rY(e, t)
                                }
                            }, rg.pull = n2, rg.pullAll = n3, rg.pullAllBy = function(e, t, r) {
                                return e && e.length && t && t.length ? ih(e, t, nv(r, 2)) : e
                            }, rg.pullAllWith = function(e, t, i) {
                                return e && e.length && t && t.length ? ih(e, t, r, i) : e
                            }, rg.pullAt = n4, rg.range = o0, rg.rangeRight = o1, rg.rearg = sL, rg.reject = function(e, t) {
                                return (sU(e) ? tu : rB)(e, sT(nv(t, 3)))
                            }, rg.remove = function(e, t) {
                                var r = [];
                                if (!(e && e.length)) return r;
                                var i = -1,
                                    n = [],
                                    s = e.length;
                                for (t = nv(t, 3); ++i < s;) {
                                    var o = e[i];
                                    t(o, i, e) && (r.push(o), n.push(i))
                                }
                                return ip(e, n), r
                            }, rg.rest = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return iy(e, t = t === r ? t : ot(t))
                            }, rg.reverse = n7, rg.sampleSize = function(e, t, i) {
                                return t = (i ? nR(e, t, i) : t === r) ? 1 : ot(t), (sU(e) ? rx : im)(e, t)
                            }, rg.set = function(e, t, r) {
                                return null == e ? e : i_(e, t, r)
                            }, rg.setWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : i_(e, t, i, n)
                            }, rg.shuffle = function(e) {
                                return (sU(e) ? rR : iI)(e)
                            }, rg.slice = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? (i && "number" != typeof i && nR(e, t, i) ? (t = 0, i = n) : (t = null == t ? 0 : ot(t), i = i === r ? n : ot(i)), iE(e, t, i)) : []
                            }, rg.sortBy = sI, rg.sortedUniq = function(e) {
                                return e && e.length ? ix(e) : []
                            }, rg.sortedUniqBy = function(e, t) {
                                return e && e.length ? ix(e, nv(t, 2)) : []
                            }, rg.split = function(e, t, i) {
                                return i && "number" != typeof i && nR(e, t, i) && (t = i = r), (i = i === r ? 4294967295 : i >>> 0) ? (e = os(e)) && ("string" == typeof t || null != t && !s5(t)) && !(t = iC(t)) && tM(e) ? i$(tB(e), 0, i) : e.split(t, i) : []
                            }, rg.spread = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return t = null == t ? 0 : t6(ot(t), 0), iy(function(r) {
                                    var i = r[t],
                                        n = i$(r, 0, t);
                                    return i && td(n, i), ts(e, this, n)
                                })
                            }, rg.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? iE(e, 1, t) : []
                            }, rg.take = function(e, t, i) {
                                return e && e.length ? iE(e, 0, (t = i || t === r ? 1 : ot(t)) < 0 ? 0 : t) : []
                            }, rg.takeRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iE(e, (t = n - (t = i || t === r ? 1 : ot(t))) < 0 ? 0 : t, n) : []
                            }, rg.takeRightWhile = function(e, t) {
                                return e && e.length ? ij(e, nv(t, 3), !1, !0) : []
                            }, rg.takeWhile = function(e, t) {
                                return e && e.length ? ij(e, nv(t, 3)) : []
                            }, rg.tap = function(e, t) {
                                return t(e), e
                            }, rg.throttle = function(e, t, r) {
                                var n = !0,
                                    s = !0;
                                if ("function" != typeof e) throw new eO(i);
                                return sQ(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), sR(e, t, {
                                    leading: n,
                                    maxWait: t,
                                    trailing: s
                                })
                            }, rg.thru = su, rg.toArray = s9, rg.toPairs = oS, rg.toPairsIn = oO, rg.toPath = function(e) {
                                return sU(e) ? tf(e, nK) : s3(e) ? [e] : iZ(nV(os(e)))
                            }, rg.toPlainObject = on, rg.transform = function(e, t, r) {
                                var i = sU(e),
                                    n = i || sB(e) || s4(e);
                                if (t = nv(t, 4), null == r) {
                                    var s = e && e.constructor;
                                    r = n ? i ? new s : [] : sQ(e) && sZ(s) ? ry(eF(e)) : {}
                                }
                                return (n ? ta : rG)(e, function(e, i, n) {
                                    return t(r, e, i, n)
                                }), r
                            }, rg.unary = function(e) {
                                return sP(e, 1)
                            }, rg.union = n8, rg.unionBy = n9, rg.unionWith = se, rg.uniq = function(e) {
                                return e && e.length ? iA(e) : []
                            }, rg.uniqBy = function(e, t) {
                                return e && e.length ? iA(e, nv(t, 2)) : []
                            }, rg.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : r, e && e.length ? iA(e, r, t) : []
                            }, rg.unset = function(e, t) {
                                return null == e || iN(e, t)
                            }, rg.unzip = st, rg.unzipWith = sr, rg.update = function(e, t, r) {
                                return null == e ? e : iT(e, t, ik(r))
                            }, rg.updateWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : iT(e, t, ik(i), n)
                            }, rg.values = ox, rg.valuesIn = function(e) {
                                return null == e ? [] : tT(e, o_(e))
                            }, rg.without = si, rg.words = ok, rg.wrap = function(e, t) {
                                return sq(ik(t), e)
                            }, rg.xor = sn, rg.xorBy = ss, rg.xorWith = so, rg.zip = sa, rg.zipObject = function(e, t) {
                                return iL(e || [], t || [], rA)
                            }, rg.zipObjectDeep = function(e, t) {
                                return iL(e || [], t || [], i_)
                            }, rg.zipWith = sc, rg.entries = oS, rg.entriesIn = oO, rg.extend = oa, rg.extendWith = oc, oZ(rg, rg), rg.add = o2, rg.attempt = oM, rg.camelCase = oR, rg.capitalize = oC, rg.ceil = o3, rg.clamp = function(e, t, i) {
                                return i === r && (i = t, t = r), i !== r && (i = (i = oi(i)) == i ? i : 0), t !== r && (t = (t = oi(t)) == t ? t : 0), rL(oi(e), t, i)
                            }, rg.clone = function(e) {
                                return rz(e, 4)
                            }, rg.cloneDeep = function(e) {
                                return rz(e, 5)
                            }, rg.cloneDeepWith = function(e, t) {
                                return rz(e, 5, t = "function" == typeof t ? t : r)
                            }, rg.cloneWith = function(e, t) {
                                return rz(e, 4, t = "function" == typeof t ? t : r)
                            }, rg.conformsTo = function(e, t) {
                                return null == t || rk(e, t, om(t))
                            }, rg.deburr = oA, rg.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, rg.divide = o4, rg.endsWith = function(e, t, i) {
                                e = os(e), t = iC(t);
                                var n = e.length,
                                    s = i = i === r ? n : rL(ot(i), 0, n);
                                return (i -= t.length) >= 0 && e.slice(i, s) == t
                            }, rg.eq = sz, rg.escape = function(e) {
                                return (e = os(e)) && H.test(e) ? e.replace($, tz) : e
                            }, rg.escapeRegExp = function(e) {
                                return (e = os(e)) && J.test(e) ? e.replace(G, "\\$&") : e
                            }, rg.every = function(e, t, i) {
                                var n = sU(e) ? tl : rV;
                                return i && nR(e, t, i) && (t = r), n(e, nv(t, 3))
                            }, rg.find = sf, rg.findIndex = nJ, rg.findKey = function(e, t) {
                                return t_(e, nv(t, 3), rG)
                            }, rg.findLast = sd, rg.findLastIndex = nQ, rg.findLastKey = function(e, t) {
                                return t_(e, nv(t, 3), rJ)
                            }, rg.floor = o7, rg.forEach = sg, rg.forEachRight = sy, rg.forIn = function(e, t) {
                                return null == e ? e : rW(e, nv(t, 3), o_)
                            }, rg.forInRight = function(e, t) {
                                return null == e ? e : rZ(e, nv(t, 3), o_)
                            }, rg.forOwn = function(e, t) {
                                return e && rG(e, nv(t, 3))
                            }, rg.forOwnRight = function(e, t) {
                                return e && rJ(e, nv(t, 3))
                            }, rg.get = of , rg.gt = sk, rg.gte = sM, rg.has = function(e, t) {
                                return null != e && nP(e, t, r5)
                            }, rg.hasIn = od, rg.head = nX, rg.identity = oK, rg.includes = function(e, t, r, i) {
                                e = sV(e) ? e : ox(e), r = r && !i ? ot(r) : 0;
                                var n = e.length;
                                return r < 0 && (r = t6(n + r, 0)), s2(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && tb(e, t, r) > -1
                            }, rg.indexOf = function(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : ot(r);
                                return n < 0 && (n = t6(i + n, 0)), tb(e, t, n)
                            }, rg.inRange = function(e, t, i) {
                                var n, s, o;
                                return t = oe(t), i === r ? (i = t, t = 0) : i = oe(i), (n = e = oi(e)) >= t2(s = t, o = i) && n < t6(s, o)
                            }, rg.invoke = ov, rg.isArguments = s$, rg.isArray = sU, rg.isArrayBuffer = sH, rg.isArrayLike = sV, rg.isArrayLikeObject = sK, rg.isBoolean = function(e) {
                                return !0 === e || !1 === e || sY(e) && r0(e) == h
                            }, rg.isBuffer = sB, rg.isDate = sF, rg.isElement = function(e) {
                                return sY(e) && 1 === e.nodeType && !s1(e)
                            }, rg.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (sV(e) && (sU(e) || "string" == typeof e || "function" == typeof e.splice || sB(e) || s4(e) || s$(e))) return !e.length;
                                var t = nE(e);
                                if (t == y || t == b) return !e.size;
                                if (nT(e)) return !it(e).length;
                                for (var r in e)
                                    if (eT.call(e, r)) return !1;
                                return !0
                            }, rg.isEqual = function(e, t) {
                                return r7(e, t)
                            }, rg.isEqualWith = function(e, t, i) {
                                var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                                return n === r ? r7(e, t, r, i) : !!n
                            }, rg.isError = sW, rg.isFinite = function(e) {
                                return "number" == typeof e && t0(e)
                            }, rg.isFunction = sZ, rg.isInteger = sG, rg.isLength = sJ, rg.isMap = sX, rg.isMatch = function(e, t) {
                                return e === t || r8(e, t, n_(t))
                            }, rg.isMatchWith = function(e, t, i) {
                                return i = "function" == typeof i ? i : r, r8(e, t, n_(t), i)
                            }, rg.isNaN = function(e) {
                                return s0(e) && e != +e
                            }, rg.isNative = function(e) {
                                if (nN(e)) throw new ew("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return r9(e)
                            }, rg.isNil = function(e) {
                                return null == e
                            }, rg.isNull = function(e) {
                                return null === e
                            }, rg.isNumber = s0, rg.isObject = sQ, rg.isObjectLike = sY, rg.isPlainObject = s1, rg.isRegExp = s5, rg.isSafeInteger = function(e) {
                                return sG(e) && e >= -9007199254740991 && e <= 9007199254740991
                            }, rg.isSet = s6, rg.isString = s2, rg.isSymbol = s3, rg.isTypedArray = s4, rg.isUndefined = function(e) {
                                return e === r
                            }, rg.isWeakMap = function(e) {
                                return sY(e) && nE(e) == P
                            }, rg.isWeakSet = function(e) {
                                return sY(e) && "[object WeakSet]" == r0(e)
                            }, rg.join = function(e, t) {
                                return null == e ? "" : t1.call(e, t)
                            }, rg.kebabCase = oN, rg.last = n6, rg.lastIndexOf = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n;
                                return i !== r && (s = (s = ot(i)) < 0 ? t6(n + s, 0) : t2(s, n - 1)), t == t ? function(e, t, r) {
                                    for (var i = r + 1; i-- && e[i] !== t;);
                                    return i
                                }(e, t, s) : tw(e, tE, s, !0)
                            }, rg.lowerCase = oT, rg.lowerFirst = oj, rg.lt = s7, rg.lte = s8, rg.max = function(e) {
                                return e && e.length ? rK(e, oK, r1) : r
                            }, rg.maxBy = function(e, t) {
                                return e && e.length ? rK(e, nv(t, 2), r1) : r
                            }, rg.mean = function(e) {
                                return tP(e, oK)
                            }, rg.meanBy = function(e, t) {
                                return tP(e, nv(t, 2))
                            }, rg.min = function(e) {
                                return e && e.length ? rK(e, oK, ir) : r
                            }, rg.minBy = function(e, t) {
                                return e && e.length ? rK(e, nv(t, 2), ir) : r
                            }, rg.stubArray = o5, rg.stubFalse = o6, rg.stubObject = function() {
                                return {}
                            }, rg.stubString = function() {
                                return ""
                            }, rg.stubTrue = function() {
                                return !0
                            }, rg.multiply = o8, rg.nth = function(e, t) {
                                return e && e.length ? ic(e, ot(t)) : r
                            }, rg.noConflict = function() {
                                return e6._ === this && (e6._ = ez), this
                            }, rg.noop = oG, rg.now = sE, rg.pad = function(e, t, r) {
                                e = os(e);
                                var i = (t = ot(t)) ? tK(e) : 0;
                                if (!t || i >= t) return e;
                                var n = (t - i) / 2;
                                return i9(tQ(n), r) + e + i9(tJ(n), r)
                            }, rg.padEnd = function(e, t, r) {
                                e = os(e);
                                var i = (t = ot(t)) ? tK(e) : 0;
                                return t && i < t ? e + i9(t - i, r) : e
                            }, rg.padStart = function(e, t, r) {
                                e = os(e);
                                var i = (t = ot(t)) ? tK(e) : 0;
                                return t && i < t ? i9(t - i, r) + e : e
                            }, rg.parseInt = function(e, t, r) {
                                return r || null == t ? t = 0 : t && (t = +t), t4(os(e).replace(Q, ""), t || 0)
                            }, rg.random = function(e, t, i) {
                                if (i && "boolean" != typeof i && nR(e, t, i) && (t = i = r), i === r && ("boolean" == typeof t ? (i = t, t = r) : "boolean" == typeof e && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = oe(e), t === r ? (t = e, e = 0) : t = oe(t)), e > t) {
                                    var n = e;
                                    e = t, t = n
                                }
                                if (i || e % 1 || t % 1) {
                                    var s = t7();
                                    return t2(e + s * (t - e + eX("1e-" + ((s + "").length - 1))), t)
                                }
                                return id(e, t)
                            }, rg.reduce = function(e, t, r) {
                                var i = sU(e) ? tg : tx,
                                    n = arguments.length < 3;
                                return i(e, nv(t, 4), r, n, rU)
                            }, rg.reduceRight = function(e, t, r) {
                                var i = sU(e) ? ty : tx,
                                    n = arguments.length < 3;
                                return i(e, nv(t, 4), r, n, rH)
                            }, rg.repeat = function(e, t, i) {
                                return t = (i ? nR(e, t, i) : t === r) ? 1 : ot(t), ig(os(e), t)
                            }, rg.replace = function() {
                                var e = arguments,
                                    t = os(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, rg.result = function(e, t, i) {
                                t = iM(t, e);
                                var n = -1,
                                    s = t.length;
                                for (s || (s = 1, e = r); ++n < s;) {
                                    var o = null == e ? r : e[nK(t[n])];
                                    o === r && (n = s, o = i), e = sZ(o) ? o.call(e) : o
                                }
                                return e
                            }, rg.round = o9, rg.runInContext = e, rg.sample = function(e) {
                                return (sU(e) ? rO : iv)(e)
                            }, rg.size = function(e) {
                                if (null == e) return 0;
                                if (sV(e)) return s2(e) ? tK(e) : e.length;
                                var t = nE(e);
                                return t == y || t == b ? e.size : it(e).length
                            }, rg.snakeCase = oq, rg.some = function(e, t, i) {
                                var n = sU(e) ? tv : iP;
                                return i && nR(e, t, i) && (t = r), n(e, nv(t, 3))
                            }, rg.sortedIndex = function(e, t) {
                                return iS(e, t)
                            }, rg.sortedIndexBy = function(e, t, r) {
                                return iO(e, t, nv(r, 2))
                            }, rg.sortedIndexOf = function(e, t) {
                                var r = null == e ? 0 : e.length;
                                if (r) {
                                    var i = iS(e, t);
                                    if (i < r && sz(e[i], t)) return i
                                }
                                return -1
                            }, rg.sortedLastIndex = function(e, t) {
                                return iS(e, t, !0)
                            }, rg.sortedLastIndexBy = function(e, t, r) {
                                return iO(e, t, nv(r, 2), !0)
                            }, rg.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var r = iS(e, t, !0) - 1;
                                    if (sz(e[r], t)) return r
                                }
                                return -1
                            }, rg.startCase = oD, rg.startsWith = function(e, t, r) {
                                return e = os(e), r = null == r ? 0 : rL(ot(r), 0, e.length), t = iC(t), e.slice(r, r + t.length) == t
                            }, rg.subtract = ae, rg.sum = function(e) {
                                return e && e.length ? tR(e, oK) : 0
                            }, rg.sumBy = function(e, t) {
                                return e && e.length ? tR(e, nv(t, 2)) : 0
                            }, rg.template = function(e, t, i) {
                                var n = rg.templateSettings;
                                i && nR(e, t, i) && (t = r), e = os(e), t = oc({}, t, n, na);
                                var s, o, a = oc({}, t.imports, n.imports, na),
                                    c = om(a),
                                    l = tT(a, c),
                                    u = 0,
                                    h = t.interpolate || ef,
                                    p = "__p += '",
                                    f = eP((t.escape || ef).source + "|" + h.source + "|" + (h === B ? es : ef).source + "|" + (t.evaluate || ef).source + "|$", "g"),
                                    d = "//# sourceURL=" + (eT.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eG + "]") + `
`;
                                e.replace(f, function(t, r, i, n, a, c) {
                                    return i || (i = n), p += e.slice(u, c).replace(ed, tk), r && (s = !0, p += `' +
__e(` + r + `) +
'`), a && (o = !0, p += `';
` + a + `;
__p += '`), i && (p += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`), u = c + t.length, t
                                }), p += `';
`;
                                var g = eT.call(t, "variable") && t.variable;
                                if (g) {
                                    if (ei.test(g)) throw new ew("Invalid `variable` option passed into `_.template`")
                                } else p = `with (obj) {
` + p + `
}
`;
                                p = (o ? p.replace(L, "") : p).replace(z, "$1").replace(k, "$1;"), p = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
                                var y = oM(function() {
                                    return eb(c, d + "return " + p).apply(r, l)
                                });
                                if (y.source = p, sW(y)) throw y;
                                return y
                            }, rg.times = function(e, t) {
                                if ((e = ot(e)) < 1 || e > 9007199254740991) return [];
                                var r = 4294967295,
                                    i = t2(e, 4294967295);
                                t = nv(t), e -= 4294967295;
                                for (var n = tC(i, t); ++r < e;) t(r);
                                return n
                            }, rg.toFinite = oe, rg.toInteger = ot, rg.toLength = or, rg.toLower = function(e) {
                                return os(e).toLowerCase()
                            }, rg.toNumber = oi, rg.toSafeInteger = function(e) {
                                return e ? rL(ot(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                            }, rg.toString = os, rg.toUpper = function(e) {
                                return os(e).toUpperCase()
                            }, rg.trim = function(e, t, i) {
                                if ((e = os(e)) && (i || t === r)) return tA(e);
                                if (!e || !(t = iC(t))) return e;
                                var n = tB(e),
                                    s = tB(t),
                                    o = tq(n, s),
                                    a = tD(n, s) + 1;
                                return i$(n, o, a).join("")
                            }, rg.trimEnd = function(e, t, i) {
                                if ((e = os(e)) && (i || t === r)) return e.slice(0, tF(e) + 1);
                                if (!e || !(t = iC(t))) return e;
                                var n = tB(e),
                                    s = tD(n, tB(t)) + 1;
                                return i$(n, 0, s).join("")
                            }, rg.trimStart = function(e, t, i) {
                                if ((e = os(e)) && (i || t === r)) return e.replace(Q, "");
                                if (!e || !(t = iC(t))) return e;
                                var n = tB(e),
                                    s = tq(n, tB(t));
                                return i$(n, s).join("")
                            }, rg.truncate = function(e, t) {
                                var i = 30,
                                    n = "...";
                                if (sQ(t)) {
                                    var s = "separator" in t ? t.separator : s;
                                    i = "length" in t ? ot(t.length) : i, n = "omission" in t ? iC(t.omission) : n
                                }
                                var o = (e = os(e)).length;
                                if (tM(e)) {
                                    var a = tB(e);
                                    o = a.length
                                }
                                if (i >= o) return e;
                                var c = i - tK(n);
                                if (c < 1) return n;
                                var l = a ? i$(a, 0, c).join("") : e.slice(0, c);
                                if (s === r) return l + n;
                                if (a && (c += l.length - c), s5(s)) {
                                    if (e.slice(c).search(s)) {
                                        var u, h = l;
                                        for (s.global || (s = eP(s.source, os(eo.exec(s)) + "g")), s.lastIndex = 0; u = s.exec(h);) var p = u.index;
                                        l = l.slice(0, p === r ? c : p)
                                    }
                                } else if (e.indexOf(iC(s), c) != c) {
                                    var f = l.lastIndexOf(s);
                                    f > -1 && (l = l.slice(0, f))
                                }
                                return l + n
                            }, rg.unescape = function(e) {
                                return (e = os(e)) && U.test(e) ? e.replace(M, tW) : e
                            }, rg.uniqueId = function(e) {
                                var t = ++ej;
                                return os(e) + t
                            }, rg.upperCase = oL, rg.upperFirst = oz, rg.each = sg, rg.eachRight = sy, rg.first = nX, oZ(rg, (ev = {}, rG(rg, function(e, t) {
                                eT.call(rg.prototype, t) || (ev[t] = e)
                            }), ev), {
                                chain: !1
                            }), rg.VERSION = "4.17.21", ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                rg[e].placeholder = rg
                            }), ta(["drop", "take"], function(e, t) {
                                r_.prototype[e] = function(i) {
                                    i = i === r ? 1 : t6(ot(i), 0);
                                    var n = this.__filtered__ && !t ? new r_(this) : this.clone();
                                    return n.__filtered__ ? n.__takeCount__ = t2(i, n.__takeCount__) : n.__views__.push({
                                        size: t2(i, 4294967295),
                                        type: e + (n.__dir__ < 0 ? "Right" : "")
                                    }), n
                                }, r_.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            }), ta(["filter", "map", "takeWhile"], function(e, t) {
                                var r = t + 1,
                                    i = 1 == r || 3 == r;
                                r_.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: nv(e, 3),
                                        type: r
                                    }), t.__filtered__ = t.__filtered__ || i, t
                                }
                            }), ta(["head", "last"], function(e, t) {
                                var r = "take" + (t ? "Right" : "");
                                r_.prototype[e] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), ta(["initial", "tail"], function(e, t) {
                                var r = "drop" + (t ? "" : "Right");
                                r_.prototype[e] = function() {
                                    return this.__filtered__ ? new r_(this) : this[r](1)
                                }
                            }), r_.prototype.compact = function() {
                                return this.filter(oK)
                            }, r_.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, r_.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, r_.prototype.invokeMap = iy(function(e, t) {
                                return "function" == typeof e ? new r_(this) : this.map(function(r) {
                                    return r3(r, e, t)
                                })
                            }), r_.prototype.reject = function(e) {
                                return this.filter(sT(nv(e)))
                            }, r_.prototype.slice = function(e, t) {
                                e = ot(e);
                                var i = this;
                                return i.__filtered__ && (e > 0 || t < 0) ? new r_(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (i = (t = ot(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i)
                            }, r_.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, r_.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, rG(r_.prototype, function(e, t) {
                                var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                    n = /^(?:head|last)$/.test(t),
                                    s = rg[n ? "take" + ("last" == t ? "Right" : "") : t],
                                    o = n || /^find/.test(t);
                                s && (rg.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        a = n ? [1] : arguments,
                                        c = t instanceof r_,
                                        l = a[0],
                                        u = c || sU(t),
                                        h = function(e) {
                                            var t = s.apply(rg, td([e], a));
                                            return n && p ? t[0] : t
                                        };
                                    u && i && "function" == typeof l && 1 != l.length && (c = u = !1);
                                    var p = this.__chain__,
                                        f = !!this.__actions__.length,
                                        d = o && !p,
                                        g = c && !f;
                                    if (!o && u) {
                                        t = g ? t : new r_(this);
                                        var y = e.apply(t, a);
                                        return y.__actions__.push({
                                            func: su,
                                            args: [h],
                                            thisArg: r
                                        }), new rm(y, p)
                                    }
                                    return d && g ? e.apply(this, a) : (y = this.thru(h), d ? n ? y.value()[0] : y.value() : y)
                                })
                            }), ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var t = ex[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    i = /^(?:pop|shift)$/.test(e);
                                rg.prototype[e] = function() {
                                    var e = arguments;
                                    if (i && !this.__chain__) {
                                        var n = this.value();
                                        return t.apply(sU(n) ? n : [], e)
                                    }
                                    return this[r](function(r) {
                                        return t.apply(sU(r) ? r : [], e)
                                    })
                                }
                            }), rG(r_.prototype, function(e, t) {
                                var r = rg[t];
                                if (r) {
                                    var i = r.name + "";
                                    eT.call(ro, i) || (ro[i] = []), ro[i].push({
                                        name: t,
                                        func: r
                                    })
                                }
                            }), ro[i3(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], r_.prototype.clone = function() {
                                var e = new r_(this.__wrapped__);
                                return e.__actions__ = iZ(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = iZ(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = iZ(this.__views__), e
                            }, r_.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new r_(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else e = this.clone(), e.__dir__ *= -1;
                                return e
                            }, r_.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    r = sU(e),
                                    i = t < 0,
                                    n = r ? e.length : 0,
                                    s = function(e, t, r) {
                                        for (var i = -1, n = r.length; ++i < n;) {
                                            var s = r[i],
                                                o = s.size;
                                            switch (s.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = t2(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = t6(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, n, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    l = i ? a : o - 1,
                                    u = this.__iteratees__,
                                    h = u.length,
                                    p = 0,
                                    f = t2(c, this.__takeCount__);
                                if (!r || !i && n == c && f == c) return iq(e, this.__actions__);
                                var d = [];
                                e: for (; c-- && p < f;) {
                                    l += t;
                                    for (var g = -1, y = e[l]; ++g < h;) {
                                        var v = u[g],
                                            m = v.iteratee,
                                            _ = v.type,
                                            w = m(y);
                                        if (2 == _) y = w;
                                        else if (!w) {
                                            if (1 == _) continue e;
                                            break e
                                        }
                                    }
                                    d[p++] = y
                                }
                                return d
                            }, rg.prototype.at = sh, rg.prototype.chain = function() {
                                return sl(this)
                            }, rg.prototype.commit = function() {
                                return new rm(this.value(), this.__chain__)
                            }, rg.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = s9(this.value()));
                                var e = this.__index__ >= this.__values__.length,
                                    t = e ? r : this.__values__[this.__index__++];
                                return {
                                    done: e,
                                    value: t
                                }
                            }, rg.prototype.plant = function(e) {
                                for (var t, i = this; i instanceof rv;) {
                                    var n = nF(i);
                                    n.__index__ = 0, n.__values__ = r, t ? s.__wrapped__ = n : t = n;
                                    var s = n;
                                    i = i.__wrapped__
                                }
                                return s.__wrapped__ = e, t
                            }, rg.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof r_) {
                                    var t = e;
                                    return this.__actions__.length && (t = new r_(this)), (t = t.reverse()).__actions__.push({
                                        func: su,
                                        args: [n7],
                                        thisArg: r
                                    }), new rm(t, this.__chain__)
                                }
                                return this.thru(n7)
                            }, rg.prototype.toJSON = rg.prototype.valueOf = rg.prototype.value = function() {
                                return iq(this.__wrapped__, this.__actions__)
                            }, rg.prototype.first = rg.prototype.head, e3 && (rg.prototype[e3] = function() {
                                return this
                            }), rg
                        }();
                    e3 ? ((e3.exports = tZ)._ = tZ, e2._ = tZ) : e6._ = tZ
                }).call(r0)
            }(r1, r1.exports);
            var r5 = Object.defineProperty,
                r6 = Object.defineProperties,
                r2 = Object.getOwnPropertyDescriptors,
                r3 = Object.getOwnPropertySymbols,
                r4 = Object.prototype.hasOwnProperty,
                r7 = Object.prototype.propertyIsEnumerable,
                r8 = (e, t, r) => t in e ? r5(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                r9 = (e, t) => {
                    for (var r in t || (t = {})) r4.call(t, r) && r8(e, r, t[r]);
                    if (r3)
                        for (var r of r3(t)) r7.call(t, r) && r8(e, r, t[r]);
                    return e
                },
                ie = (e, t) => r6(e, r2(t));

            function it(e, t, r) {
                var i;
                let n = (0, o.DQ)(e);
                return (null == (i = t.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
            }

            function ir(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function ii(e) {
                return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
            }

            function is(e) {
                var t, r, i, n;
                let s = {};
                if (!(0, o.L5)(e)) return s;
                for (let [a, c] of Object.entries(e)) {
                    let e = (0, o.gp)(a) ? [a] : c.chains,
                        l = c.methods || [],
                        u = c.events || [],
                        h = c.rpcMap || {},
                        p = (0, o.M)(a);
                    s[p] = ie(r9(r9({}, s[p]), c), {
                        chains: (0, o.eG)(e, null == (t = s[p]) ? void 0 : t.chains),
                        methods: (0, o.eG)(l, null == (r = s[p]) ? void 0 : r.methods),
                        events: (0, o.eG)(u, null == (i = s[p]) ? void 0 : i.events),
                        rpcMap: r9(r9({}, h), null == (n = s[p]) ? void 0 : n.rpcMap)
                    })
                }
                return s
            }

            function io(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function ia(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
            }
            let ic = {},
                il = e => ic[e],
                iu = (e, t) => {
                    ic[e] = t
                };
            class ih {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = il("events"), this.client = il("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rX.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ir(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || it(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new el.r(new rJ.Z(r, il("disableProviderPing")))
                }
            }
            class ip {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = il("events"), this.client = il("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(rX.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    let r = t || it(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new el.r(new rJ.k(r, il("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = parseInt(ir(t));
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let i = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
                    i = i.startsWith("0x") ? i : `0x${i}`;
                    let n = parseInt(i, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: i
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }), this.setDefaultChain(`${n}`);
                    else throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class id {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = il("events"), this.client = il("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rX.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ir(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || it(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new el.r(new rJ.Z(r, il("disableProviderPing")))
                }
            }
            class ig {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = il("events"), this.client = il("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rX.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ir(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || it(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new el.r(new rJ.Z(r, il("disableProviderPing")))
                }
            }
            class iy {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = il("events"), this.client = il("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rX.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        let r = this.getCardanoRPCUrl(t),
                            i = ir(t);
                        e[i] = this.createHttpProvider(i, r)
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    let t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || this.getCardanoRPCUrl(e);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new el.r(new rJ.Z(r, il("disableProviderPing")))
                }
            }
            class iv {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = il("events"), this.client = il("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rX.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ir(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || it(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new el.r(new rJ.Z(r, il("disableProviderPing")))
                }
            }
            class im {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = il("events"), this.client = il("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rX.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ir(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || it(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new el.r(new rJ.Z(r, il("disableProviderPing")))
                }
            }
            class i_ {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = il("events"), this.client = il("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || it(`${this.name}:${e}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(rX.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || it(e, this.namespace);
                    return typeof r > "u" ? void 0 : new el.r(new rJ.Z(r, il("disableProviderPing")))
                }
            }
            var iw = Object.defineProperty,
                ib = Object.defineProperties,
                iI = Object.getOwnPropertyDescriptors,
                iE = Object.getOwnPropertySymbols,
                iP = Object.prototype.hasOwnProperty,
                iS = Object.prototype.propertyIsEnumerable,
                iO = (e, t, r) => t in e ? iw(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ix = (e, t) => {
                    for (var r in t || (t = {})) iP.call(t, r) && iO(e, r, t[r]);
                    if (iE)
                        for (var r of iE(t)) iS.call(t, r) && iO(e, r, t[r]);
                    return e
                },
                iR = (e, t) => ib(e, iI(t));
            class iC {
                constructor(e) {
                    this.events = new(s()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, L.pino)((0, L.getDefaultLoggerOptions)({
                        level: e ? .logger || rQ
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static async init(e) {
                    let t = new iC(e);
                    return await t.initialize(), t
                }
                async request(e, t) {
                    let [r, i] = this.validateChain(t);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: ix({}, e),
                        chainId: `${r}:${i}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(e, t, r) {
                    let i = new Date().getTime();
                    this.request(e, r).then(e => t(null, (0, eu.formatJsonRpcResult)(i, e))).catch(e => t(e, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: (0, o.D6)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then(e => {
                            this.session = e, this.namespaces || (this.namespaces = function(e) {
                                let t = {};
                                for (let [r, i] of Object.entries(e)) {
                                    let e = i.methods || [],
                                        n = i.events || [],
                                        s = i.accounts || [],
                                        a = (0, o.gp)(r) ? [r] : i.chains ? i.chains : ii(i.accounts);
                                    t[r] = {
                                        chains: a,
                                        methods: e,
                                        events: n,
                                        accounts: s
                                    }
                                }
                                return t
                            }(e.namespaces), this.persist("namespaces", this.namespaces))
                        }).catch(e => {
                            if (e.message !== rA) throw e;
                            t++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        let [r, i] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(i, t)
                    } catch (e) {
                        if (!/Please call connect/.test(e.message)) throw e
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let t = this.client.pairing.getAll();
                    if ((0, o.qt)(t)) {
                        for (let r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await rG.init({
                        logger: this.providerOpts.logger || rQ,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let e = [...new Set(Object.keys(this.session.namespaces).map(e => (0, o.M)(e)))];
                    iu("client", this.client), iu("events", this.events), iu("disableProviderPing", this.disableProviderPing), e.forEach(e => {
                        if (!this.session) return;
                        let t = function(e, t) {
                                let r = Object.keys(t.namespaces).filter(t => t.includes(e));
                                if (!r.length) return [];
                                let i = [];
                                return r.forEach(e => {
                                    let r = t.namespaces[e].accounts;
                                    i.push(...r)
                                }), i
                            }(e, this.session),
                            r = ii(t),
                            i = function(e = {}, t = {}) {
                                let r = is(e),
                                    i = is(t);
                                return r1.exports.merge(r, i)
                            }(this.namespaces, this.optionalNamespaces),
                            n = iR(ix({}, i[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new ip({
                                    namespace: n
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new id({
                                    namespace: n
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new ig({
                                    namespace: n
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new ih({
                                    namespace: n
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new iy({
                                    namespace: n
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new iv({
                                    namespace: n
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new im({
                                    namespace: n
                                });
                                break;
                            case "near":
                                this.rpcProviders[e] = new i_({
                                    namespace: n
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", e => {
                        this.events.emit("session_ping", e)
                    }), this.client.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            let e = r.data;
                            e && (0, o.qt)(e) && this.events.emit("accountsChanged", e.map(io))
                        } else if ("chainChanged" === r.name) {
                            let e = t.chainId,
                                r = t.event.data,
                                i = (0, o.M)(e),
                                n = ia(e) !== ia(r) ? `${i}:${ia(r)}` : e;
                            this.onChainChanged(n)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    }), this.client.on("session_update", ({
                        topic: e,
                        params: t
                    }) => {
                        var r;
                        let {
                            namespaces: i
                        } = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
                        this.session = iR(ix({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    }), this.client.on("session_delete", async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", iR(ix({}, (0, o.D6)("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    }), this.on(rX.DEFAULT_CHAIN_CHANGED, e => {
                        this.onChainChanged(e, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    let {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    let [t, r] = e ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map(e => (0, o.M)(e)).includes(t)) throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    let i = (0, o.M)(Object.keys(this.namespaces)[0]),
                        n = this.rpcProviders[i].getDefaultChain();
                    return [i, n]
                }
                async requestAccounts() {
                    let [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    var r;
                    if (!this.namespaces) return;
                    let [i, n] = this.validateChain(e);
                    t || this.getProvider(i).setDefaultChain(n), (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${rY}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${rY}/${e}`)
                }
            }
            let iA = ["eth_sendTransaction", "personal_sign"],
                iN = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                iT = ["chainChanged", "accountsChanged"],
                ij = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var iq = Object.defineProperty,
                iD = Object.defineProperties,
                iL = Object.getOwnPropertyDescriptors,
                iz = Object.getOwnPropertySymbols,
                ik = Object.prototype.hasOwnProperty,
                iM = Object.prototype.propertyIsEnumerable,
                i$ = (e, t, r) => t in e ? iq(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iU = (e, t) => {
                    for (var r in t || (t = {})) ik.call(t, r) && i$(e, r, t[r]);
                    if (iz)
                        for (var r of iz(t)) iM.call(t, r) && i$(e, r, t[r]);
                    return e
                },
                iH = (e, t) => iD(e, iL(t));

            function iV(e) {
                return Number(e[0].split(":")[1])
            }

            function iK(e) {
                return `0x${e.toString(16)}`
            }
            class iB {
                constructor() {
                    this.events = new n.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    let t = new iB;
                    return await t.initialize(e), t
                }
                async request(e) {
                    return await this.signer.request(e, this.formatChainId(this.chainId))
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: s,
                            optionalEvents: a,
                            rpcMap: c
                        } = e;
                        if (!(0, o.qt)(t)) throw Error("Invalid chains");
                        let l = {
                                chains: t,
                                methods: i || iA,
                                events: s || iT,
                                rpcMap: iU({}, t.length ? {
                                    [iV(t)]: c[iV(t)]
                                } : {})
                            },
                            u = s ? .filter(e => !iT.includes(e)),
                            h = i ? .filter(e => !iA.includes(e));
                        if (!r && !a && !n && !(null != u && u.length) && !(null != h && h.length)) return {
                            required: t.length ? l : void 0
                        };
                        let p = u ? .length && h ? .length || !r,
                            f = {
                                chains: [...new Set(p ? l.chains.concat(r || []) : r)],
                                methods: [...new Set(l.methods.concat(null != n && n.length ? n : iN))],
                                events: [...new Set(l.events.concat(null != a && a.length ? a : ij))],
                                rpcMap: c
                            };
                        return {
                            required: t.length ? l : void 0,
                            optional: r.length ? f : void 0
                        }
                    }(this.rpc);
                    try {
                        let i = await new Promise(async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(iH(iU({
                                namespaces: iU({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then(e => {
                                i(e)
                            }).catch(e => {
                                n(Error(e.message))
                            })
                        });
                        if (!i) return;
                        let n = (0, o.gu)(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: iK(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", iK(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", iH(iU({}, (0, o.D6)("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", iK(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, i] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: i
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    let i = null != (t = e ? .chains) ? t : [],
                        n = null != (r = e ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let o = i.length ? e ? .methods || iA : [],
                        a = i.length ? e ? .events || iT : [],
                        c = e ? .optionalMethods || [],
                        l = e ? .optionalEvents || [],
                        u = e ? .rpcMap || this.buildRpcMap(s, e.projectId),
                        h = e ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map(e => this.formatChainId(e)),
                        optionalChains: n.map(e => this.formatChainId(e)),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: l,
                        rpcMap: u,
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: h,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? iV(this.rpc.chains) : iV(this.rpc.optionalChains), this.signer = await iC.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(4378).then(r.bind(r, 24378));
                            e = t
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(iU({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: i
                    } = e;
                    t && (0, o.qt)(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    })), r && (0, o.qt)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : t ? .accounts), this.setAccounts(t ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
            }
            let iF = iB
        },
        5774: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return i
                }
            });
            class i {}
        },
        33843: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: function() {
                    return i.q
                }
            });
            var i = r(5774)
        },
        57052: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            let i = r(10666);
            t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        13566: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(87592);
            i.__exportStar(r(57052), t)
        },
        47798: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            let i = r(87592),
                n = r(22699),
                s = r(10666),
                o = r(87826),
                a = r(13566);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        let t = new c(e);
                        return yield t.init(), t
                    })
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        67660: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(87592);
            i.__exportStar(r(47798), t), i.__exportStar(r(87826), t), i.__exportStar(r(13566), t)
        },
        81829: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            let i = r(33843);
            class n extends i.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = n
        },
        87826: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(87592);
            i.__exportStar(r(81829), t)
        },
        87592: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return b
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return u
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return f
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return E
                },
                __makeTemplateObject: function() {
                    return I
                },
                __metadata: function() {
                    return l
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function l(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function u(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function p(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function f(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, l) : u(s[0][2], r)
                    } catch (e) {
                        u(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function l(e) {
                    a("throw", e)
                }

                function u(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function w(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function b(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function I(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function E(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        77814: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        47337: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        52500: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            let i = r(42126),
                n = i.__importDefault(r(69413));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), i.__exportStar(r(47337), t), i.__exportStar(r(48846), t)
        },
        48846: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            let i = r(47337);

            function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[t] || ""
            }

            function s(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[r] = t, e
            }

            function o(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return void 0 === e.bindings ? n(e, t) : e.bindings().context || ""
            }

            function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = o(e, r),
                    s = n.trim() ? `${n}/${t}` : t;
                return s
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = n, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = a(e, t, r),
                    o = e.child({
                        context: n
                    });
                return s(o, n, r)
            }
        },
        42126: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return b
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return u
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return f
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return E
                },
                __makeTemplateObject: function() {
                    return I
                },
                __metadata: function() {
                    return l
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function l(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function u(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function p(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function f(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, l) : u(s[0][2], r)
                    } catch (e) {
                        u(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function l(e) {
                    a("throw", e)
                }

                function u(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function w(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function b(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function I(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function E(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        3947: function() {},
        33958: function(e, t, r) {
            e = r.nmd(e);
            var i, n, s, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                l = "[object Boolean]",
                u = "[object Date]",
                h = "[object Error]",
                p = "[object Function]",
                f = "[object Map]",
                d = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                v = "[object RegExp]",
                m = "[object Set]",
                _ = "[object String]",
                w = "[object WeakMap]",
                b = "[object ArrayBuffer]",
                I = "[object DataView]",
                E = /^\[object .+?Constructor\]$/,
                P = /^(?:0|[1-9]\d*)$/,
                S = {};
            S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S[a] = S[c] = S[b] = S[l] = S[I] = S[u] = S[h] = S[p] = S[f] = S[d] = S[g] = S[v] = S[m] = S[_] = S[w] = !1;
            var O = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                x = "object" == typeof self && self && self.Object === Object && self,
                R = O || x || Function("return this")(),
                C = t && !t.nodeType && t,
                A = C && e && !e.nodeType && e,
                N = A && A.exports === C,
                T = N && O.process,
                j = function() {
                    try {
                        return T && T.binding && T.binding("util")
                    } catch (e) {}
                }(),
                q = j && j.isTypedArray;

            function D(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, i) {
                    r[++t] = [i, e]
                }), r
            }

            function L(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var z = Array.prototype,
                k = Function.prototype,
                M = Object.prototype,
                $ = R["__core-js_shared__"],
                U = k.toString,
                H = M.hasOwnProperty,
                V = (i = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                K = M.toString,
                B = RegExp("^" + U.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                F = N ? R.Buffer : void 0,
                W = R.Symbol,
                Z = R.Uint8Array,
                G = M.propertyIsEnumerable,
                J = z.splice,
                Q = W ? W.toStringTag : void 0,
                Y = Object.getOwnPropertySymbols,
                X = F ? F.isBuffer : void 0,
                ee = (n = Object.keys, s = Object, function(e) {
                    return n(s(e))
                }),
                et = eS(R, "DataView"),
                er = eS(R, "Map"),
                ei = eS(R, "Promise"),
                en = eS(R, "Set"),
                es = eS(R, "WeakMap"),
                eo = eS(Object, "create"),
                ea = eR(et),
                ec = eR(er),
                el = eR(ei),
                eu = eR(en),
                eh = eR(es),
                ep = W ? W.prototype : void 0,
                ef = ep ? ep.valueOf : void 0;

            function ed(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eg(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ey(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ev(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new ey; ++t < r;) this.add(e[t])
            }

            function em(e) {
                var t = this.__data__ = new eg(e);
                this.size = t.size
            }

            function e_(e, t) {
                for (var r = e.length; r--;)
                    if (eC(e[r][0], t)) return r;
                return -1
            }

            function ew(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Q && Q in Object(e) ? function(e) {
                    var t = H.call(e, Q),
                        r = e[Q];
                    try {
                        e[Q] = void 0;
                        var i = !0
                    } catch (e) {}
                    var n = K.call(e);
                    return i && (t ? e[Q] = r : delete e[Q]), n
                }(e) : K.call(e)
            }

            function eb(e) {
                return eL(e) && ew(e) == a
            }

            function eI(e, t, r, i, n, s) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var l = s.get(e);
                if (l && s.get(t)) return l == t;
                var u = -1,
                    h = !0,
                    p = 2 & r ? new ev : void 0;
                for (s.set(e, t), s.set(t, e); ++u < a;) {
                    var f = e[u],
                        d = t[u];
                    if (i) var g = o ? i(d, f, u, t, e, s) : i(f, d, u, e, t, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        h = !1;
                        break
                    }
                    if (p) {
                        if (! function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!p.has(t) && (f === e || n(f, e, r, i, s))) return p.push(t)
                            })) {
                            h = !1;
                            break
                        }
                    } else if (!(f === d || n(f, d, r, i, s))) {
                        h = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), h
            }

            function eE(e) {
                var t;
                return t = function(e) {
                    return null != e && eq(e.length) && !ej(e) ? function(e, t) {
                        var r, i, n = eN(e),
                            s = !n && eA(e),
                            o = !n && !s && eT(e),
                            a = !n && !s && !o && ez(e),
                            c = n || s || o || a,
                            l = c ? function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }(e.length, String) : [],
                            u = l.length;
                        for (var h in e) H.call(e, h) && !(c && ("length" == h || o && ("offset" == h || "parent" == h) || a && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || (r = h, (i = null == (i = u) ? 9007199254740991 : i) && ("number" == typeof r || P.test(r)) && r > -1 && r % 1 == 0 && r < i))) && l.push(h);
                        return l
                    }(e) : function(e) {
                        if (r = "function" == typeof(t = e && e.constructor) && t.prototype || M, e !== r) return ee(e);
                        var t, r, i = [];
                        for (var n in Object(e)) H.call(e, n) && "constructor" != n && i.push(n);
                        return i
                    }(e)
                }(e), eN(e) ? t : function(e, t) {
                    for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                    return e
                }(t, eO(e))
            }

            function eP(e, t) {
                var r, i = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function eS(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!eD(r) || V && V in r) && (ej(r) ? B : E).test(eR(r)) ? r : void 0
            }
            ed.prototype.clear = function() {
                this.__data__ = eo ? eo(null) : {}, this.size = 0
            }, ed.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ed.prototype.get = function(e) {
                var t = this.__data__;
                if (eo) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return H.call(t, e) ? t[e] : void 0
            }, ed.prototype.has = function(e) {
                var t = this.__data__;
                return eo ? void 0 !== t[e] : H.call(t, e)
            }, ed.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = eo && void 0 === t ? o : t, this
            }, eg.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, eg.prototype.delete = function(e) {
                var t = this.__data__,
                    r = e_(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : J.call(t, r, 1), --this.size, !0)
            }, eg.prototype.get = function(e) {
                var t = this.__data__,
                    r = e_(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, eg.prototype.has = function(e) {
                return e_(this.__data__, e) > -1
            }, eg.prototype.set = function(e, t) {
                var r = this.__data__,
                    i = e_(r, e);
                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
            }, ey.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ed,
                    map: new(er || eg),
                    string: new ed
                }
            }, ey.prototype.delete = function(e) {
                var t = eP(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, ey.prototype.get = function(e) {
                return eP(this, e).get(e)
            }, ey.prototype.has = function(e) {
                return eP(this, e).has(e)
            }, ey.prototype.set = function(e, t) {
                var r = eP(this, e),
                    i = r.size;
                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
            }, ev.prototype.add = ev.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, ev.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.clear = function() {
                this.__data__ = new eg, this.size = 0
            }, em.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, em.prototype.get = function(e) {
                return this.__data__.get(e)
            }, em.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof eg) {
                    var i = r.__data__;
                    if (!er || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new ey(i)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var eO = Y ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }(Y(e = Object(e)), function(t) {
                        return G.call(e, t)
                    })
                } : function() {
                    return []
                },
                ex = ew;

            function eR(e) {
                if (null != e) {
                    try {
                        return U.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eC(e, t) {
                return e === t || e != e && t != t
            }(et && ex(new et(new ArrayBuffer(1))) != I || er && ex(new er) != f || ei && ex(ei.resolve()) != y || en && ex(new en) != m || es && ex(new es) != w) && (ex = function(e) {
                var t = ew(e),
                    r = t == g ? e.constructor : void 0,
                    i = r ? eR(r) : "";
                if (i) switch (i) {
                    case ea:
                        return I;
                    case ec:
                        return f;
                    case el:
                        return y;
                    case eu:
                        return m;
                    case eh:
                        return w
                }
                return t
            });
            var eA = eb(function() {
                    return arguments
                }()) ? eb : function(e) {
                    return eL(e) && H.call(e, "callee") && !G.call(e, "callee")
                },
                eN = Array.isArray,
                eT = X || function() {
                    return !1
                };

            function ej(e) {
                if (!eD(e)) return !1;
                var t = ew(e);
                return t == p || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function eq(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function eD(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function eL(e) {
                return null != e && "object" == typeof e
            }
            var ez = q ? function(e) {
                return q(e)
            } : function(e) {
                return eL(e) && eq(e.length) && !!S[ew(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, i, n, s) {
                    return t === r || (null != t && null != r && (eL(t) || eL(r)) ? function(e, t, r, i, n, s) {
                        var o = eN(e),
                            p = eN(t),
                            y = o ? c : ex(e),
                            w = p ? c : ex(t);
                        y = y == a ? g : y, w = w == a ? g : w;
                        var E = y == g,
                            P = w == g,
                            S = y == w;
                        if (S && eT(e)) {
                            if (!eT(t)) return !1;
                            o = !0, E = !1
                        }
                        if (S && !E) return s || (s = new em), o || ez(e) ? eI(e, t, r, i, n, s) : function(e, t, r, i, n, s, o) {
                            switch (r) {
                                case I:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case b:
                                    if (e.byteLength != t.byteLength || !s(new Z(e), new Z(t))) break;
                                    return !0;
                                case l:
                                case u:
                                case d:
                                    return eC(+e, +t);
                                case h:
                                    return e.name == t.name && e.message == t.message;
                                case v:
                                case _:
                                    return e == t + "";
                                case f:
                                    var a = D;
                                case m:
                                    var c = 1 & i;
                                    if (a || (a = L), e.size != t.size && !c) break;
                                    var p = o.get(e);
                                    if (p) return p == t;
                                    i |= 2, o.set(e, t);
                                    var g = eI(a(e), a(t), i, n, s, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (ef) return ef.call(e) == ef.call(t)
                            }
                            return !1
                        }(e, t, y, r, i, n, s);
                        if (!(1 & r)) {
                            var O = E && H.call(e, "__wrapped__"),
                                x = P && H.call(t, "__wrapped__");
                            if (O || x) {
                                var R = O ? e.value() : e,
                                    C = x ? t.value() : t;
                                return s || (s = new em), n(R, C, r, i, s)
                            }
                        }
                        return !!S && (s || (s = new em), function(e, t, r, i, n, s) {
                            var o = 1 & r,
                                a = eE(e),
                                c = a.length;
                            if (c != eE(t).length && !o) return !1;
                            for (var l = c; l--;) {
                                var u = a[l];
                                if (!(o ? u in t : H.call(t, u))) return !1
                            }
                            var h = s.get(e);
                            if (h && s.get(t)) return h == t;
                            var p = !0;
                            s.set(e, t), s.set(t, e);
                            for (var f = o; ++l < c;) {
                                var d = e[u = a[l]],
                                    g = t[u];
                                if (i) var y = o ? i(g, d, u, t, e, s) : i(d, g, u, e, t, s);
                                if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                                    p = !1;
                                    break
                                }
                                f || (f = "constructor" == u)
                            }
                            if (p && !f) {
                                var v = e.constructor,
                                    m = t.constructor;
                                v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (p = !1)
                            }
                            return s.delete(e), s.delete(t), p
                        }(e, t, r, i, n, s))
                    }(t, r, i, n, e, s) : t != t && r != r)
                }(e, t)
            }
        },
        26528: function(e) {
            "use strict";
            let t = self.fetch.bind(self);
            e.exports = t, e.exports.default = e.exports
        },
        31493: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, i) {
                var n = i && i.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = Array(s);
                    o[0] = n(e);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var l = "", u = 0, h = -1, p = e && e.length || 0, f = 0; f < p;) {
                    if (37 === e.charCodeAt(f) && f + 1 < p) {
                        switch (h = h > -1 ? h : 0, e.charCodeAt(f + 1)) {
                            case 100:
                            case 102:
                                if (u >= c || null == r[u]) break;
                                h < f && (l += e.slice(h, f)), l += Number(r[u]), h = f + 2, f++;
                                break;
                            case 105:
                                if (u >= c || null == r[u]) break;
                                h < f && (l += e.slice(h, f)), l += Math.floor(Number(r[u])), h = f + 2, f++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (u >= c || void 0 === r[u]) break;
                                h < f && (l += e.slice(h, f));
                                var d = typeof r[u];
                                if ("string" === d) {
                                    l += "'" + r[u] + "'", h = f + 2, f++;
                                    break
                                }
                                if ("function" === d) {
                                    l += r[u].name || "<anonymous>", h = f + 2, f++;
                                    break
                                }
                                l += n(r[u]), h = f + 2, f++;
                                break;
                            case 115:
                                if (u >= c) break;
                                h < f && (l += e.slice(h, f)), l += String(r[u]), h = f + 2, f++;
                                break;
                            case 37:
                                h < f && (l += e.slice(h, f)), l += "%", h = f + 2, f++, u--
                        }++u
                    }++f
                }
                return -1 === h ? e : (h < p && (l += e.slice(h)), l)
            }
        },
        69413: function(e, t, r) {
            "use strict";
            let i = r(31493);
            e.exports = s;
            let n = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function s(e) {
                var t;
                (e = e || {}).browser = e.browser || {};
                let r = e.browser.transmit;
                if (r && "function" != typeof r.send) throw Error("pino: transmit option must have a send function");
                let i = e.browser.write || n;
                e.browser.write && (e.browser.asObject = !0);
                let u = e.serializers || {},
                    h = function(e, t) {
                        if (Array.isArray(e)) {
                            let t = e.filter(function(e) {
                                return "!stdSerializers.err" !== e
                            });
                            return t
                        }
                        return !0 === e && Object.keys(t)
                    }(e.browser.serialize, u),
                    g = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (g = !1), "function" == typeof i && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i), !1 === e.enabled && (e.level = "silent");
                let y = e.level || "info",
                    v = Object.create(i);
                v.log || (v.log = p), Object.defineProperty(v, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(v, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(m, v, "error", "log"), o(m, v, "fatal", "error"), o(m, v, "warn", "error"), o(m, v, "info", "log"), o(m, v, "debug", "log"), o(m, v, "trace", "log")
                    }
                });
                let m = {
                    transmit: r,
                    serialize: h,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(t = e).timestamp ? t.timestamp : !1 === t.timestamp ? f : d
                };
                return v.levels = s.levels, v.level = y, v.setMaxListeners = v.getMaxListeners = v.emit = v.addListener = v.on = v.prependListener = v.once = v.prependOnceListener = v.removeListener = v.removeAllListeners = v.listeners = v.listenerCount = v.eventNames = v.write = v.flush = p, v.serializers = u, v._serialize = h, v._stdErrSerialize = g, v.child = function(t, i) {
                    if (!t) throw Error("missing bindings for child Pino");
                    i = i || {}, h && t.serializers && (i.serializers = t.serializers);
                    let n = i.serializers;
                    if (h && n) {
                        var s = Object.assign({}, u, n),
                            o = !0 === e.browser.serialize ? Object.keys(s) : h;
                        delete t.serializers, a([t], o, s, this._stdErrSerialize)
                    }

                    function p(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), s && (this.serializers = s, this._serialize = o), r && (this._logEvent = l([].concat(e._logEvent.bindings, t)))
                    }
                    return p.prototype = this, new p(this)
                }, r && (v._logEvent = l()), v
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? p : c[r] ? c[r] : n[r] || n[o] || p,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== p) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    u = Array(arguments.length),
                                    h = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                for (var p = 0; p < u.length; p++) u[p] = arguments[p];
                                if (e.serialize && !e.asObject && a(u, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(h, function(e, t, r, n) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            l = {};
                                        n && (l.time = n), l.level = s.levels.values[t];
                                        let u = (0 | e._childLevel) + 1;
                                        if (u < 1 && (u = 1), null !== c && "object" == typeof c) {
                                            for (; u-- && "object" == typeof o[0];) Object.assign(l, o.shift());
                                            c = o.length ? i(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = i(o.shift(), o));
                                        return void 0 !== c && (l.msg = c), l
                                    }(this, r, u, c)) : o.apply(h, u), e.transmit) {
                                    let i = e.transmit.level || t.level,
                                        n = s.levels.values[i],
                                        o = s.levels.values[r];
                                    if (o < n) return;
                                    (function(e, t, r) {
                                        let i = t.send,
                                            n = t.ts,
                                            s = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            u = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === u.indexOf(e)
                                        }), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, c), e._logEvent = l(u)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: i,
                                        transmitValue: s.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, u)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, i) {
                for (let n in e)
                    if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
                    else if ("object" == typeof e[n] && !Array.isArray(e[n]))
                    for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
            }

            function c(e, t, r) {
                return function() {
                    let i = Array(1 + arguments.length);
                    i[0] = t;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return e[r].apply(this, i)
                }
            }

            function l(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function u() {
                return {}
            }

            function h(e) {
                return e
            }

            function p() {}

            function f() {
                return !1
            }

            function d() {
                return Date.now()
            }
            s.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, s.stdSerializers = {
                mapHttpRequest: u,
                mapHttpResponse: u,
                wrapRequestSerializer: h,
                wrapResponseSerializer: h,
                wrapErrorSerializer: h,
                req: u,
                res: u,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, s.stdTimeFunctions = Object.assign({}, {
                nullTime: f,
                epochTime: d,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);