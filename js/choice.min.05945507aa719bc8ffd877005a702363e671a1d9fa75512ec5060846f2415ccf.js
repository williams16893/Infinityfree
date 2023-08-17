(function() {
    var t, o, i, a = "infinityfree.com",
        e = document.createElement("script"),
        n = document.getElementsByTagName("script")[0],
        r = "https://cmp.quantcast.com".concat("/choice/", "XxkLwExAwrf55", "/", a, "/choice.js?tag_version=V2"),
        s = 0,
        c = 3;
    e.async = !0, e.type = "text/javascript", e.src = r, n.parentNode.insertBefore(e, n);

    function l() {
        var s, t = "__tcfapiLocator",
            n = [],
            e = window;

        function o() {
            var n, s = e.document,
                i = !!e.frames[t];
            return i || (s.body ? (n = s.createElement("iframe"), n.style.cssText = "display:none", n.name = t, s.body.appendChild(n)) : setTimeout(o, 5)), !i
        }

        function i() {
            var t, s, e = arguments;
            if (!e.length) return n;
            e[0] === "setGdprApplies" ? e.length > 3 && e[2] === 2 && typeof e[3] == "boolean" && (t = e[3], typeof e[2] == "function" && e[2]("set", !0)) : e[0] === "ping" ? (s = {
                gdprApplies: t,
                cmpLoaded: !1,
                cmpStatus: "stub"
            }, typeof e[2] == "function" && e[2](s)) : (e[0] === "init" && typeof e[3] == "object" && (e[3] = Object.assign(e[3], {
                tag_version: "V2"
            })), n.push(e))
        }

        function a(e) {
            var t, s = typeof e.data == "string",
                n = {};
            try {
                s ? n = JSON.parse(e.data) : n = e.data
            } catch {}
            t = n.__tcfapiCall, t && window.__tcfapi(t.command, t.version, function(n, o) {
                var i = {
                    __tcfapiReturn: {
                        returnValue: n,
                        success: o,
                        callId: t.callId
                    }
                };
                s && (i = JSON.stringify(i)), e && e.source && e.source.postMessage && e.source.postMessage(i, "*")
            }, t.parameter)
        }
        for (; e;) {
            try {
                if (e.frames[t]) {
                    s = e;
                    break
                }
            } catch {}
            if (e === window.top) break;
            e = e.parent
        }
        s || (o(), e.__tcfapi = i, e.addEventListener("message", a, !1))
    }
    l(), t = function() {
        var e = arguments;
        typeof window.__uspapi !== t && setTimeout(function() {
            typeof window.__uspapi != "undefined" && window.__uspapi.apply(window.__uspapi, e)
        }, 500)
    }, o = function() {
        s++, window.__uspapi === t && s < c ? console.warn("USP is not accessible") : clearInterval(i)
    }, typeof window.__uspapi == "undefined" && (window.__uspapi = t, i = setInterval(o, 6e3))
})()