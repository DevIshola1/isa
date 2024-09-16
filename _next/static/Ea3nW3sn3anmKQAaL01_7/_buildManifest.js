self.__BUILD_MANIFEST = function(s, a, c, t, e, d, n, i, u, b, h, f, k, j, p, l, g, o, r, v, y, _, m, w, x, I, B, F, A, D, E, L, M, N, S, T, U, C, q, P, z, G, H) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/monitoring(/?)",
                has: [{
                    type: E,
                    key: "o",
                    value: "(?<orgid>\\d*)"
                }, {
                    type: E,
                    key: "p",
                    value: "(?<projectid>\\d*)"
                }]
            }],
            fallback: []
        },
        "/": [s, a, "static/chunks/9837-50916d2c97d36eae.js", c, "static/css/b376ac80d4a9fa03.css", "static/chunks/pages/index-a9eb5a27a0e73f13.js"],
        "/404": [s, a, c, "static/chunks/pages/404-d2fd47c371de6a3b.js"],
        "/_error": [s, a, c, "static/chunks/pages/_error-54def9c6f4b3bf05.js"],
        "/betadashboard": [s, a, e, h, n, f, i, u, b, d, v, p, j, l, g, o, "static/chunks/6118-3ce46a5607d1b024.js", _, "static/chunks/6164-01b7814f4b38d73e.js", c, t, k, L, y, "static/chunks/699-c5f43b4bc104f598.js", "static/chunks/pages/betadashboard-963bb374ce7acdc5.js"],
        "/bridge": [s, m, a, w, M, "static/chunks/1119-b05d93aee8a49a62.js", c, t, N, "static/chunks/pages/bridge-ba1bc9b348aa5a71.js"],
        "/claim": [s, a, c, "static/chunks/pages/claim-088e7a20c3143d90.js"],
        "/dynalab": [s, a, e, n, i, u, b, d, j, l, o, c, t, k, S, "static/chunks/pages/dynalab-2446eaf701720430.js"],
        "/dynalab/[id]": [s, a, h, n, d, p, o, c, "static/chunks/pages/dynalab/[id]-929064d1db3386e8.js"],
        "/dynasets": [s, a, e, n, i, u, b, d, j, l, o, c, t, k, S, "static/chunks/pages/dynasets-f0da0879fdb43d17.js"],
        "/dynasets/[id]": [s, a, n, d, o, c, "static/chunks/pages/dynasets/[id]-bd835412ff4a895f.js"],
        "/launchpad": [s, a, r, T, c, U, "static/chunks/pages/launchpad-874806a8cfce620b.js"],
        "/launchpad/claim": [m, "static/chunks/pages/launchpad/claim-f1686e54e67a2fee.js"],
        "/launchpad/myallocations": [s, "static/chunks/d6df58b7-e75e22ac991b11ec.js", a, e, f, u, "static/chunks/9820-81ed248a7704904a.js", c, t, C, "static/chunks/pages/launchpad/myallocations-e3e8202204e4e8c8.js"],
        "/launchpad/nunet/_index": [s, "static/chunks/a29ae703-4f88ffa03c70df92.js", a, e, f, u, d, _, q, "static/chunks/2797-519c48adb1fc1af1.js", c, t, k, C, "static/chunks/pages/launchpad/nunet/_index-bd06a75266731204.js"],
        "/launchpad/[id]": [s, a, e, h, i, b, p, j, r, T, c, t, U, "static/chunks/pages/launchpad/[id]-96f30ecd6b5e20f1.js"],
        "/migrate": [s, a, c, "static/chunks/pages/migrate-908b3f7b64dfa858.js"],
        "/migrate-asi": [s, a, c, "static/chunks/pages/migrate-asi-0ad8b3f10e2f8bfc.js"],
        "/pools": [s, a, e, f, i, u, b, g, P, c, t, k, L, "static/chunks/pages/pools-bb284c2c3559d34f.js"],
        "/pv2/dynavault": [s, a, w, c, "static/chunks/pages/pv2/dynavault-471879deab33b0fa.js"],
        "/pv2/portfolio": [s, "static/chunks/2272ea81-88ce39681a970b3d.js", a, "static/chunks/9784-fb00222aadccb189.js", "static/chunks/1920-d2d7905cbf571da2.js", c, "static/chunks/pages/pv2/portfolio-50ab0d345bc0554f.js"],
        "/sentry-example-page": ["static/chunks/pages/sentry-example-page-46af8c7fb02c7b54.js"],
        "/staking": [s, a, h, r, z, G, x, c, I, H, "static/chunks/pages/staking-dd70222202425137.js"],
        "/staking/projects": [s, a, r, x, c, I, "static/css/2d4f5b995870a912.css", "static/chunks/pages/staking/projects-0cd54ffb36155824.js"],
        "/staking/projects/[id]": [s, m, a, h, r, z, G, x, c, I, H, "static/chunks/pages/staking/projects/[id]-b7fbfd17bb61e848.js"],
        "/swap": [s, a, c, "static/chunks/pages/swap-d4bda6e02fee37dc.js"],
        "/swap-old": [s, a, e, n, f, i, b, d, w, _, P, M, q, "static/chunks/8202-60b90f6e0c7f84c9.js", c, t, "static/chunks/7028-23cc80b1810f2a55.js", N, "static/chunks/pages/swap-old-afad5c3c234f114c.js"],
        "/vaults/epochvaults": [s, a, e, h, n, f, i, u, b, d, v, p, j, l, g, B, F, "static/chunks/634-38efb73a02327ce0.js", c, t, k, y, A, D, "static/chunks/pages/vaults/epochvaults-bb570b4e32f39ec2.js"],
        "/vaults/unbondedvaults": [s, a, e, h, n, f, i, u, b, d, v, p, j, l, g, B, F, "static/chunks/8418-a222d27aa14d5206.js", c, t, k, y, A, D, "static/chunks/pages/vaults/unbondedvaults-8548b955d6bc39f7.js"],
        "/vaults/yieldvaults": [s, a, e, h, n, f, i, u, b, d, v, p, j, l, g, B, F, c, t, k, y, A, D, "static/chunks/pages/vaults/yieldvaults-302225b77d58883b.js"],
        "/wc": [s, a, c, "static/chunks/pages/wc-7619b37edb660cb0.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/betadashboard", "/bridge", "/claim", "/dynalab", "/dynalab/[id]", "/dynasets", "/dynasets/[id]", "/launchpad", "/launchpad/claim", "/launchpad/myallocations", "/launchpad/nunet/_index", "/launchpad/[id]", "/migrate", "/migrate-asi", "/pools", "/pv2/dynavault", "/pv2/portfolio", "/sentry-example-page", "/staking", "/staking/projects", "/staking/projects/[id]", "/swap", "/swap-old", "/vaults/epochvaults", "/vaults/unbondedvaults", "/vaults/yieldvaults", "/wc"]
    }
}("static/chunks/94a7ad86-20e09c8aeb1be6e9.js", "static/chunks/8777-f81fe66d067ca759.js", "static/chunks/9866-97c865d7d2d88123.js", "static/chunks/4136-3dddd7f8e4464453.js", "static/chunks/171-4e48554b0c6ff706.js", "static/chunks/9722-e291aff2e6c66a08.js", "static/chunks/9188-485fd34d722f675f.js", "static/chunks/4936-4754d450ac34da48.js", "static/chunks/8701-9f4851eedacca751.js", "static/chunks/5527-53b4d81c60330a09.js", "static/chunks/9384-6a360c806a093085.js", "static/chunks/7307-a224f556adb7b04a.js", "static/chunks/3762-21a2726894eab0cb.js", "static/chunks/2143-c3ff38ffffa711a8.js", "static/chunks/6313-f2bf576f1b0fe8d6.js", "static/chunks/9593-a2a127016baf7940.js", "static/chunks/3976-cc352da3b3c74ed2.js", "static/chunks/5059-067829c34fe9de54.js", "static/chunks/7413-2b491119ffeb4ef2.js", "static/chunks/8094-18c56085e7920aad.js", "static/chunks/2175-1b90c69ebb65db07.js", "static/chunks/3573-9c01c0f7836a627a.js", "static/chunks/2edb282b-ee9378f1d75cffd2.js", "static/chunks/3543-e37dca782945c9a4.js", "static/chunks/7273-0933dec5dc13b7b0.js", "static/chunks/1798-ac587eca1634e3cd.js", "static/chunks/1014-71d36b61a742a4fa.js", "static/chunks/3328-e124036845fad108.js", "static/chunks/1041-017672926c55db00.js", "static/chunks/8671-4e5aca0fd192a154.js", "query", "static/chunks/8119-b3b6b699ad5fb007.js", "static/chunks/9290-3cd329da586b3344.js", "static/chunks/2763-06bebcc641d5f83d.js", "static/chunks/700-86800582f5b2c992.js", "static/chunks/7227-f109165b4e38eb9a.js", "static/chunks/4546-5ec69b3189e0b9ed.js", "static/chunks/5796-be01719b44c4075b.js", "static/chunks/9850-1431318ef70bfaa3.js", "static/chunks/2008-112c10bac6bb82e2.js", "static/chunks/3955-d61159fc23003884.js", "static/chunks/7630-a0e9d99bd80ff006.js", "static/chunks/8347-8e6feac69e0aa0cb.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();