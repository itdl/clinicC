/*头部搜索内容*/
function getObject(a) {
    return document.getElementById && document.getElementById(a) ? document.getElementById(a) : document.all && document.all(a) ? document.all(a) : document.layers && document.layers[a] ? document.layers[a] : !1
}
function wValChg(a, b) {
    "yyk" == a && (getObject("wn_" + b + "").innerHTML = "\u533b\u9662", complete(hospitals), document.getElementById("words").name = "words", document.search.action = basePath + "hp/search.htm");
    "ksk" == a && (getObject("wn_" + b + "").innerHTML = "\u79d1\u5ba4", complete(names), document.getElementById("words").name = "words", document.search.action = basePath + "dpt/search.htm");
    "jbk" == a && (getObject("wn_" + b + "").innerHTML = "\u75be\u75c5", complete(diseases), document.getElementById("words").name = "words", document.search.action = basePath + "dis/search.htm");
    getObject("sbArea_" + b + "").style.display = "none";
}

function wValDisp(a, b) {
    "none" == getObject("sbArea_" + a + "").style.display ? getObject("sbArea_" + a + "").style.display = "": getObject("sbArea_" + a + "").style.display = "none"
}
function getNavigatorType(){return"Microsoft Internet Explorer"==navigator.appName?1:"Netscape"==navigator.appName?2:0}function getObject(a){return document.getElementById&&document.getElementById(a)?document.getElementById(a):document.all&&document.all(a)?document.all(a):document.layers&&document.layers[a]?document.layers[a]:!1}

function setSelBox(a){switch(getNavigatorType()){case 1:a=window.event;node=a.srcElement;nodeName=a.srcElement.className;break;case 2:node=a.target;nodeName=a.target.className;break;default:nodeName="None"}if("dselObj"!=nodeName)try{document.getElementById("sbArea_h").style.display="none"}catch(b){}}document.onmousedown=setSelBox;


function complete(a) {
    $("#words").autocomplete(a, {
        max: 12,
        minChars: 1,
        scrollHeight: 300,
        scroll: !0,
        matchContains: !0,
        autoFill: !1,
        cacheLength: 0,
        selectFirst: !1,
        formatItem: function(a, c, n) {
            return a.name
        },
        formatMatch: function(a, c, n) {
            return a.name + a.pinyin1 +  a.pinyin2 + (a.pinyin3 == null? "" : a.pinyin3)+(a.pinyin4 == null? "" : a.pinyin4);
        },
        formatResult: function(a) {
            return a.name;
        }
    }).flushCache();
}

function checkwords() {
    var a = document.getElementById("words").value;
    if ("" == a.trim()||a.trim() == "请输入搜索内容") return ! 1;
    a = a.replace(/ /gi, "");
    document.getElementById("words").value = a;
    return ! 0;
}

var browserVersion = navigator.appVersion;
function createAjax() {
  var a;
  if (window.XMLHttpRequest) a = new XMLHttpRequest;
  else if (window.ActiveXObject) for (var b = "MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP MICROSOFT.XMLHTTP.1.0 MICROSOFT.XMLHTTP.1 MICROSOFT.XMLHTTP".split(" "), c = 0; c < b.length; c++) if (browserVersion.indexOf("MSIE 6.0")) {
    a = new ActiveXObject("MSXML2.XMLHTTP");
    break
  } else if (a = new ActiveXObject(b[c])) break;
  return a
 
}
function addFavorite() {	
  if (document.all) try {
    window.external.addFavorite("http://www.bjguahao.gov.cn", "\u5317\u4eac\u5e02\u9884\u7ea6\u6302\u53f7\u7edf\u4e00\u5e73\u53f0")
  } catch(a) {
    alert("\u52a0\u5165\u6536\u85cf\u5931\u8d25\uff0c\u8bf7\u4f7f\u7528Ctrl+D\u8fdb\u884c\u6dfb\u52a0")
  } else window.sidebar ? window.sidebar.addPanel("\u5317\u4eac\u5e02\u9884\u7ea6\u6302\u53f7\u7edf\u4e00\u5e73\u53f0", "http://www.bjguahao.gov.cn", "") : alert("\u52a0\u5165\u6536\u85cf\u5931\u8d25\uff0c\u8bf7\u4f7f\u7528Ctrl+D\u8fdb\u884c\u6dfb\u52a0")
} (function(a) {
  a.fn.extend({
    autocomplete: function(b, c) { 
      var n = "string" == typeof b;
      c = a.extend({},
      a.Autocompleter.defaults, {
        url: n ? b: null,
        data: n ? null: b,
        delay: n ? a.Autocompleter.defaults.delay: 10,
        max: c && !c.scroll ? 10 : 150
      },
      c);
	  
      c.highlight = c.highlight ||
      function(a) {
        return a
      };
      c.formatMatch = c.formatMatch || c.formatItem;
      return this.each(function() {
        new a.Autocompleter(this, c)
      })
    },
    result: function(a) {
      return this.bind("result", a)
    },
    search: function(a) {
      return this.trigger("search", [a])
    },
    flushCache: function() {
      return this.trigger("flushCache")
    },
    setOptions: function(a) {
      return this.trigger("setOptions", [a])
    },
    unautocomplete: function() {
      return this.trigger("unautocomplete")
    }
  });
  a.Autocompleter = function(b, c) {
    function n() {
      var f = u.selected();
      if (!f) return ! 1;
      var g = f.result;
      y = g;
      if (c.multiple) {
        var d = x(m.val());
        if (1 < d.length) {
          var p = c.multipleSeparator.length,
          l = a(b).selection().start,
          C,
          e = 0;
          a.each(d,
          function(a, b) {
            e += b.length;
            if (l <= e) return C = a,
            !1;
            e += p
          });
          d[C] = g;
          g = d.join(c.multipleSeparator)
        }
        g += c.multipleSeparator
      }
      m.val(g);
      q();
      m.trigger("result", [f.data, f.value]);
      return ! 0
    }
	 
    function s(a, b) {
      if (p == d.DEL) u.hide();
      else {
        var h = m.val();
        if (b || h != y) y = h,
        h = k(h),
        h.length >= c.minChars ? (/*m.addClass(c.loadingClass), */c.matchCase || (h = h.toLowerCase()), l(h, e, q)) : (/*m.removeClass(c.loadingClass),*/ u.hide())
      }
    }
    function x(b) {
      return ! b ? [""] : !c.multiple ? [a.trim(b)] : a.map(b.split(c.multipleSeparator),
      function(c) {
        return a.trim(b).length ? a.trim(c) : null
      })
    }
    function k(f) {
      if (!c.multiple) return f;
      var g = x(f);
      if (1 == g.length) return g[0];
      g = a(b).selection().start;
      g = g == f.length ? x(f) : x(f.replace(f.substring(g), ""));
      return g[g.length - 1]
    }
    function q() {
		
      u.visible();
      u.hide();
      clearTimeout(t);
     /* m.removeClass(c.loadingClass);*/
      c.mustMatch && m.search(function(a) {
        a || (c.multiple ? (a = x(m.val()).slice(0, -1), m.val(a.join(c.multipleSeparator) + (a.length ? c.multipleSeparator: ""))) : (m.val(""), m.trigger("result", null)))
      })
    }
    function e(f, g) {
      if (g && g.length && h) {
     /*   m.removeClass(c.loadingClass);*/
        u.display(g, f);
        var e = g[0].value;
        c.autoFill && (k(m.val()).toLowerCase() == f.toLowerCase() && p != d.BACKSPACE) && (m.val(m.val() + e.substring(k(y).length)), a(b).selection(y.length, y.length + e.length));
        u.show()
      } else q()
    }
    function l(f, g, d) {
      c.matchCase || (f = f.toLowerCase());
      var e = v.load(f);
      if (e && e.length) g(f, e);
      else if ("string" == typeof c.url && 0 < c.url.length) {
        var p = {
          timestamp: +new Date
        };
        a.each(c.extraParams,
        function(a, b) {
          p[a] = "function" == typeof b ? b() : b
        });
        a.ajax({
          mode: "abort",
          port: "autocomplete" + b.name,
          dataType: c.dataType,
          url: c.url,
          data: a.extend({
            q: k(f),
            limit: c.max
          },
          p),
          success: function(b) {
            var d;
            if (! (d = c.parse && c.parse(b))) {
              d = [];
              b = b.split("\n");
              for (var e = 0; e < b.length; e++) {
                var p = a.trim(b[e]);
                p && (p = p.split("|"), d[d.length] = {
                  data: p,
                  value: p[0],
                  result: c.formatResult && c.formatResult(p, p[0]) || p[0]
                })
              }
            }
            v.add(f, d);
            g(f, d)
          }
        })
      } else u.emptyList(),
      d(f)
    }
    var d = {
      UP: 38,
      DOWN: 40,
      DEL: 46,
      TAB: 9,
      RETURN: 13,
      ESC: 27,
      COMMA: 188,
      PAGEUP: 33,
      PAGEDOWN: 34,
      BACKSPACE: 8
    },
    m = a(b).attr("autocomplete", "off").addClass(c.inputClass),
	
    t,
    y = "",
    v = a.Autocompleter.Cache(c),
    h = 0,
    p,
    r = {
      mouseDownOnSelect: !1
    },
    u = a.Autocompleter.Select(c, b, n, r),
    w;

    a.browser.opera && a(b.form).bind("submit.autocomplete",
    function() {
      if (w) return w = !1
    });
    m.bind((a.browser.opera ? "keypress": "keydown") + ".autocomplete",
    function(b) {
      h = 1;
      p = b.keyCode;
      switch (b.keyCode) {
      case d.UP:
        b.preventDefault();
        u.visible() ? u.prev() : s(0, !0);
        break;
      case d.DOWN:
        b.preventDefault();
        u.visible() ? u.next() : s(0, !0);
        break;
      case d.PAGEUP:
        b.preventDefault();
        u.visible() ? u.pageUp() : s(0, !0);
        break;
      case d.PAGEDOWN:
        b.preventDefault();
        u.visible() ? u.pageDown() : s(0, !0);
        break;
      case c.multiple && "," == a.trim(c.multipleSeparator) && d.COMMA: case d.TAB:
      case d.RETURN:
        if (n()) return b.preventDefault(),
        w = !0,
        !1;
        break;
      case d.ESC:
        u.hide();
        break;
      default:
        clearTimeout(t),
        t = setTimeout(s, c.delay)
      }
    }).focus(function() {
      h++
    }).blur(function() {
      h = 0;
      r.mouseDownOnSelect || (clearTimeout(t), t = setTimeout(q, 200))
    }).click(function() {
      1 < h++&&!u.visible() && s(0, !0)
    }).bind("search",
    function(){
      function b(a, d) {
        var p;
        if (d && d.length) for (var e = 0; e < d.length; e++) if (d[e].result.toLowerCase() == a.toLowerCase()) {
          p = d[e];
          break
        }
        "function" == typeof c ? c(p) : m.trigger("result", p && [p.data, p.value])
      }
      var c = 1 < arguments.length ? arguments[1] : null;
      a.each(x(m.val()),
      function(a, c) {
        l(c, b, b)
      })
    }).bind("flushCache",
    function() {
      v.flush()
    }).bind("setOptions",
    function(b, d) {
      a.extend(c, d);
      "data" in d && v.populate()
    }).bind("unautocomplete",
    function() {
      u.unbind();
      m.unbind();
      a(b.form).unbind(".autocomplete")
    })
  };
  a.Autocompleter.defaults = {
    inputClass: "ac_input",
    resultsClass: "ac_results",
   /* loadingClass: "ac_loading",*/
    minChars: 1,
    delay: 400,
    matchCase: !1,
    matchSubset: !0,
    matchContains: !1,
    cacheLength: 10,
    max: 100,
    mustMatch: !1,
    extraParams: {},
    selectFirst: !0,
    formatItem: function(a) {
      return a[0]
    },
    formatMatch: null,
    autoFill: !1,
    width: 0,
    multiple: !1,
    multipleSeparator: ", ",
    highlight: function(a, c) {
      return a.replace(RegExp("(?![^&;]+;)(?!<[^<>]*)(" + c.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>")
    },
    scroll: !0,
    scrollHeight: 180
  };
  a.Autocompleter.Cache = function(b) {
    function c(a, c) {
      b.matchCase || (a = a.toLowerCase());
      var d = a.indexOf(c);
      "word" == b.matchContains && (d = a.toLowerCase().search("\\b" + c.toLowerCase()));
      return - 1 == d ? !1 : 0 == d || b.matchContains
    }
    function n(a, c) {
      q > b.cacheLength && x();
      k[a] || q++;
      k[a] = c
    }
    function s() {
      if (!b.data) return ! 1;
      var c = {},
      l = 0;
      b.url || (b.cacheLength = 1);
      c[""] = [];
      for (var d = 0,
      m = b.data.length; d < m; d++) {
        var t = b.data[d],
        t = "string" == typeof t ? [t] : t,
        q = b.formatMatch(t, d + 1, b.data.length);
        if (!1 !== q) {
          var k = q.charAt(0).toLowerCase();
          c[k] || (c[k] = []);
          t = {
            value: q,
            data: t,
            result: b.formatResult && b.formatResult(t) || q
          };
          c[k].push(t);
          l++<b.max && c[""].push(t)
        }
      }
      a.each(c,
      function(a, c) {
        b.cacheLength++;
        n(a, c)
      })
    }
    function x() {
      k = {};
      q = 0
    }
    var k = {},
    q = 0;
    setTimeout(s, 25);
    return {
      flush: x,
      add: n,
      populate: s,
      load: function(e) {
        if (!b.cacheLength || !q) return null;
        if (!b.url && b.matchContains) {
          var l = [],
          d;
          for (d in k) if (0 < d.length) {
            var m = k[d];
            a.each(m,
            function(a, b) {
              c(b.value, e) && l.push(b)
            })
          }
          return l
        }
        if (k[e]) return k[e];
        if (b.matchSubset) for (d = e.length - 1; d >= b.minChars; d--) if (m = k[e.substr(0, d)]) return l = [],
        a.each(m,
        function(a, b) {
          c(b.value, e) && (l[l.length] = b)
        }),
        l;
        return null
      }
    }
  };
  a.Autocompleter.Select = function(b, c, n, s) {
    function x() {
      y && (v = a("<div/>").hide().addClass(b.resultsClass).css("position", "absolute").appendTo(document.body), h = a("<ul/>").appendTo(v).mouseover(function(b) {
        k(b).nodeName && "LI" == k(b).nodeName.toUpperCase() && (d = a("li", h).removeClass(e.ACTIVE).index(k(b)), a(k(b)).addClass(e.ACTIVE))
      }).click(function(b) {
        a(k(b)).addClass(e.ACTIVE);
        n();
        c.focus();
        return ! 1
      }).mousedown(function() {
        s.mouseDownOnSelect = !0
      }).mouseup(function() {
        s.mouseDownOnSelect = !1
      }), 0 < b.width && v.css("width", b.width), y = !1)
    }
    function k(a) {
      for (a = a.target; a && "LI" != a.tagName;) a = a.parentNode;
      return ! a ? [] : a
    }
    function q(a) {
      l.slice(d, d + 1).removeClass(e.ACTIVE);
      d += a;
      0 > d ? d = l.size() - 1 : d >= l.size() && (d = 0);
      a = l.slice(d, d + 1).addClass(e.ACTIVE);
      if (b.scroll) {
        var c = 0;
        l.slice(0, d).each(function() {
          c += this.offsetHeight
        });
        c + a[0].offsetHeight - h.scrollTop() > h[0].clientHeight ? h.scrollTop(c + a[0].offsetHeight - h.innerHeight()) : c < h.scrollTop() && h.scrollTop(c)
      }
    }
    var e = {
      ACTIVE: "ac_over"
    },
    l,
    d = -1,
    m,
    t = "",
    y = !0,
    v,
    h;
    return {
      display: function(c, n) {
        x();
        m = c;
        t = n;
        h.empty();
        for (var q = b.max && b.max < m.length ? b.max: m.length, k = 0; k < q; k++) if (m[k]) {
          var f = b.formatItem(m[k].data, k + 1, q, m[k].value, t); ! 1 !== f && (f = a("<li/>").html(b.highlight(f, t)).addClass(0 == k % 2 ? "ac_even": "ac_odd").appendTo(h)[0], a.data(f, "ac_data", m[k]))
        }
        l = h.find("li");
        b.selectFirst && (l.slice(0, 1).addClass(e.ACTIVE), d = 0);
        a.fn.bgiframe && h.bgiframe()
      },
      next: function() {
        q(1)
      },
      prev: function() {
        q( - 1)
      },
      pageUp: function() {
        0 != d && 0 > d - 8 ? q( - d) : q( - 8)
      },
      pageDown: function() {
        d != l.size() - 1 && d + 8 > l.size() ? q(l.size() - 1 - d) : q(8)
      },
      hide: function() {
        v && v.hide();
        l && l.removeClass(e.ACTIVE);
        d = -1
      },
      visible: function() {
        return v && v.is(":visible")
      },
      current: function() {
        return this.visible() && (l.filter("." + e.ACTIVE)[0] || b.selectFirst && l[0])
      },
      show: function() {
        var d = a(c).offset();
        v.css({
          width: "string" == typeof b.width || 0 < b.width ? b.width: a(c).width(),
          top: d.top + c.offsetHeight,
          left: d.left
        }).show();
        if (b.scroll && (h.scrollTop(0), h.css({
          maxHeight: b.scrollHeight,
          overflow: "auto"
        }), a.browser.msie && "undefined" === typeof document.body.style.maxHeight)) {
          var e = 0;
          l.each(function() {
            e += this.offsetHeight
          });
          d = e > b.scrollHeight;
          h.css("height", d ? b.scrollHeight: e);
          d || l.width(h.width() - parseInt(l.css("padding-left")) - parseInt(l.css("padding-right")))
        }
      },
      selected: function() {
        var b = l && l.filter("." + e.ACTIVE).removeClass(e.ACTIVE);
        return b && b.length && a.data(b[0], "ac_data")
      },
      emptyList: function() {
        h && h.empty()
      },
      unbind: function() {
        v && v.remove()
      }
    }
  };
  a.fn.selection = function(a, c) {
    if (void 0 !== a) return this.each(function() {
      if (this.createTextRange) {
        var k = this.createTextRange();
        void 0 === c || a == c ? k.move("character", a) : (k.collapse(!0), k.moveStart("character", a), k.moveEnd("character", c));
        k.select()
      } else this.setSelectionRange ? this.setSelectionRange(a, c) : this.selectionStart && (this.selectionStart = a, this.selectionEnd = c)
    });
    var n = this[0];
    if (n.createTextRange) {
      var s = document.selection.createRange(),
      x = n.value,
      k = s.text.length;
      s.text = "<->";
      s = n.value.indexOf("<->");
      n.value = x;
      this.selection(s, s + k);
      return {
        start: s,
        end: s + k
      }
    }
    if (void 0 !== n.selectionStart) return {
      start: n.selectionStart,
      end: n.selectionEnd
    }
  }
})(jQuery); 
/*搜素框内容*/
var names = [{
  name: "\u5fc3\u8840\u7ba1\u5185\u79d1",
  pinyin1: "xinxueguanneike",
  pinyin2: "xxgnk"
},
{

  name: "\u795e\u7ecf\u5185\u79d1",
  pinyin1: "shenjingneike",
  pinyin2: "sjnk"
},
{
  name: "\u6d88\u5316\u5185\u79d1",
  pinyin1: "xiaohuaneike",
  pinyin2: "xhnk"
},
{
  name: "\u5185\u5206\u6ccc\u79d1",
  pinyin1: "neifenmike",
  pinyin2: "nfmk"
},
{
  name: "\u514d\u75ab\u79d1",
  pinyin1: "mianyike",
  pinyin2: "myk"
},
{
  name: "\u547c\u5438\u79d1",
  pinyin1: "huxike",
  pinyin2: "hxk"
},
{
  name: "\u80be\u75c5\u5185\u79d1",
  pinyin1: "shenbingneike",
  pinyin2: "sbnk"
},
{
  name: "\u8840\u6db2\u79d1",
  pinyin1: "xueyeke",
  pinyin2: "xyk"
},
{
  name: "\u611f\u67d3\u5185\u79d1",
  pinyin1: "ganranneike",
  pinyin2: "grnk"
},
{
  name: "\u8fc7\u654f\u53cd\u5e94\u79d1",
  pinyin1: "guominfanyingke",
  pinyin2: "gmfyk"
},
{
  name: "\u8001\u5e74\u75c5\u79d1",
  pinyin1: "laonianbingke",
  pinyin2: "lnbk"
},
{
  name: "\u666e\u901a\u5185\u79d1",
  pinyin1: "putongneike",
  pinyin2: "ptnk"
},
{
  name: "\u9ad8\u538b\u6c27\u79d1",
  pinyin1: "gaoyayangke",
  pinyin2: "gyyk"
},
{
  name: "\u795e\u7ecf\u5916\u79d1",
  pinyin1: "shenjingwaike",
  pinyin2: "sjwk"
},
{
  name: "\u529f\u80fd\u795e\u7ecf\u5916\u79d1",
  pinyin1: "gongnengshenjingwaike",
  pinyin2: "gnsjwk"
},
{
  name: "\u5fc3\u8840\u7ba1\u5916\u79d1",
  pinyin1: "xinxueguanwaike",
  pinyin2: "xxgwk"
},
{
  name: "\u80f8\u5916\u79d1",
  pinyin1: "xiongwaike",
  pinyin2: "xwk"
},
{
  name: "\u6574\u5f62\u79d1",
  pinyin1: "zhengxingke",
  pinyin2: "zxk"
},
{
  name: "\u4e73\u817a\u5916\u79d1",
  pinyin1: "ruxianwaike",
  pinyin2: "rxwk"
},
{
  name: "\u6ccc\u5c3f\u5916\u79d1",
  pinyin1: "miniaowaike",
  pinyin2: "mnwk"
},
{
  name: "\u809d\u80c6\u5916\u79d1",
  pinyin1: "gandanwaike",
  pinyin2: "gdwk"
},
{
  name: "\u809b\u80a0\u79d1",
  pinyin1: "gangchangke",
  pinyin2: "gck"
},
{
  name: "\u8840\u7ba1\u5916\u79d1",
  pinyin1: "xueguanwaike",
  pinyin2: "xgwk"
},
{
  name: "\u5668\u5b98\u79fb\u690d",
  pinyin1: "qiguanyizhi",
  pinyin2: "qgyz"
},
{
  name: "\u5fae\u521b\u5916\u79d1",
  pinyin1: "weichuangwaike",
  pinyin2: "wcwk"
},
{
  name: "\u666e\u5916\u79d1",
  pinyin1: "puwaike",
  pinyin2: "pwk"
},
{
  name: "\u5987\u79d1",
  pinyin1: "fuke",
  pinyin2: "fk"
},
{
  name: "\u4ea7\u79d1",
  pinyin1: "chanke",
  pinyin2: "ck"
},
{
  name: "\u5987\u79d1\u5185\u5206\u6ccc",
  pinyin1: "fukeneifenmi",
  pinyin2: "fknfm"
},
{
  name: "\u5987\u6ccc\u5c3f\u79d1",
  pinyin1: "fuminiaoke",
  pinyin2: "fmnk"
},
{
  name: "\u4ea7\u524d\u68c0\u67e5\u79d1",
  pinyin1: "chanqianjianchake",
  pinyin2: "cqjck"
},
{
  name: "\u9057\u4f20\u54a8\u8be2\u79d1",
  pinyin1: "yichuanzixunke",
  pinyin2: "yczxk"
},
{
  name: "\u8ba1\u5212\u751f\u80b2\u79d1",
  pinyin1: "jihuashengyuke",
  pinyin2: "jhsyk"
},
{
  name: "\u5987\u4ea7\u79d1",
  pinyin1: "fuchanke",
  pinyin2: "fck"
},
{
  name: "\u751f\u6b96\u4e2d\u5fc3",
  pinyin1: "shengzhizhongxin",
  pinyin2: "szzx"
},
{
  name: "\u513f\u79d1",
  pinyin1: "erke",
  pinyin2: "ek"
},
{
  name: "\u65b0\u751f\u513f\u79d1",
  pinyin1: "xinshengerke",
  pinyin2: "xsek"
},
{
  name: "\u5c0f\u513f\u547c\u5438\u79d1",
  pinyin1: "xiaoerhuxike",
  pinyin2: "xehxk"
},
{
  name: "\u5c0f\u513f\u6d88\u5316\u79d1",
  pinyin1: "xiaoerxiaohuake",
  pinyin2: "xexhk"
},
{
  name: "\u5c0f\u513f\u8425\u517b\u4fdd\u5065\u79d1",
  pinyin1: "xiaoeryingyangbaojianke",
  pinyin2: "xeyybjk"
},
{
  name: "\u5c0f\u513f\u795e\u7ecf\u5185\u79d1",
  pinyin1: "xiaoershenjingneike",
  pinyin2: "xesjnk"
},
{
  name: "\u5c0f\u513f\u5fc3\u5185\u79d1",
  pinyin1: "xiaoerxinneike",
  pinyin2: "xexnk"
},
{
  name: "\u5c0f\u513f\u80be\u5185\u79d1",
  pinyin1: "xiaoershenneike",
  pinyin2: "xesnk"
},
{
  name: "\u5c0f\u513f\u5185\u5206\u6ccc\u79d1",
  pinyin1: "xiaoerneifenmike",
  pinyin2: "xenfmk"
},
{
  name: "\u5c0f\u513f\u514d\u75ab\u79d1",
  pinyin1: "xiaoermianyike",
  pinyin2: "xemyk"
},
{
  name: "\u5c0f\u513f\u76ae\u80a4\u79d1",
  pinyin1: "xiaoerpifuke",
  pinyin2: "xepfk"
},
{
  name: "\u5c0f\u513f\u8033\u9f3b\u5589",
  pinyin1: "xiaoererbihou",
  pinyin2: "xeebh"
},
{
  name: "\u5c0f\u513f\u8840\u6db2\u79d1",
  pinyin1: "xiaoerxueyeke",
  pinyin2: "xexyk"
},
{
  name: "\u5c0f\u513f\u611f\u67d3\u79d1",
  pinyin1: "xiaoerganranke",
  pinyin2: "xegrk"
},
{
  name: "\u5c0f\u513f\u7cbe\u795e\u79d1",
  pinyin1: "xiaoerjingshenke",
  pinyin2: "xejsk"
},
{
  name: "\u5c0f\u513f\u5987\u79d1",
  pinyin1: "xiaoerfuke",
  pinyin2: "xefk"
},
{
  name: "\u5c0f\u513f\u5916\u79d1",
  pinyin1: "xiaoerwaike",
  pinyin2: "xewk"
},
{
  name: "\u5c0f\u513f\u5fc3\u5916\u79d1",
  pinyin1: "xiaoerxinwaike",
  pinyin2: "xexwk"
},
{
  name: "\u5c0f\u513f\u80f8\u5916\u79d1",
  pinyin1: "xiaoerxiongwaike",
  pinyin2: "xexwk"
},
{
  name: "\u5c0f\u513f\u9aa8\u79d1",
  pinyin1: "xiaoerguke",
  pinyin2: "xegk"
},
{
  name: "\u5c0f\u513f\u6ccc\u5c3f\u79d1",
  pinyin1: "xiaoerminiaoke",
  pinyin2: "xemnk"
},
{
  name: "\u5c0f\u513f\u795e\u7ecf\u5916\u79d1",
  pinyin1: "xiaoershenjingwaike",
  pinyin2: "xesjwk"
},
{
  name: "\u5c0f\u513f\u6574\u5f62\u79d1",
  pinyin1: "xiaoerzhengxingke",
  pinyin2: "xezxk"
},
{
  name: "\u5c0f\u513f\u5eb7\u590d\u79d1",
  pinyin1: "xiaoerkangfuke",
  pinyin2: "xekfk"
},
{
  name: "\u5c0f\u513f\u6025\u8bca\u79d1",
  pinyin1: "xiaoerjizhenke",
  pinyin2: "xejzk"
},
{
  name: "\u9aa8\u79d1",
  pinyin1: "guke",
  pinyin2: "gk"
},
{
  name: "\u810a\u67f1\u5916\u79d1",
  pinyin1: "jizhuwaike",
  pinyin2: "jzwk"
},
{
  name: "\u624b\u5916\u79d1",
  pinyin1: "shouwaike",
  pinyin2: "swk"
},
{
  name: "\u521b\u4f24\u9aa8\u79d1",
  pinyin1: "chuangshangguke",
  pinyin2: "csgk"
},
{
  name: "\u9aa8\u5173\u8282\u79d1",
  pinyin1: "guguanjieke",
  pinyin2: "ggjk"
},
{
  name: "\u77eb\u5f62\u9aa8\u79d1",
  pinyin1: "jiaoxingguke",
  pinyin2: "jxgk"
},
{
  name: "\u9aa8\u8d28\u758f\u677e\u79d1",
  pinyin1: "guzhishusongke",
  pinyin2: "gzssk"
},
{
  name: "\u773c\u79d1",
  pinyin1: "yanke",
  pinyin2: "yk"
},
{
  name: "\u5c0f\u513f\u773c\u79d1",
  pinyin1: "xiaoeryanke",
  pinyin2: "xeyk"
},
{
  name: "\u773c\u5e95",
  pinyin1: "yandi",
  pinyin2: "yd"
},
{
  name: "\u89d2\u819c\u79d1",
  pinyin1: "jiaomoke",
  pinyin2: "jmk"
},
{
  name: "\u9752\u5149\u773c",
  pinyin1: "qingguangyan",
  pinyin2: "qgy"
},
{
  name: "\u767d\u5185\u969c",
  pinyin1: "baineizhang",
  pinyin2: "bnz"
},
{
  name: "\u773c\u5916\u4f24",
  pinyin1: "yanwaishang",
  pinyin2: "yws"
},
{
  name: "\u773c\u7736\u53ca\u80bf\u7624",
  pinyin1: "yankuangjizhongliu",
  pinyin2: "ykjzl"
},
{
  name: "\u5c48\u5149",
  pinyin1: "quguang",
  pinyin2: "qg"
},
{
  name: "\u773c\u6574\u5f62",
  pinyin1: "yanzhengxing",
  pinyin2: "yzx"
},
{
  name: "\u4e2d\u533b\u773c\u79d1",
  pinyin1: "zhongyiyanke",
  pinyin2: "zyyk"
},
{
  name: "\u53e3\u8154\u79d1",
  pinyin1: "kouqiangke",
  pinyin2: "kqk"
},
{
  name: "\u988c\u9762\u5916\u79d1",
  pinyin1: "hemianwaike",
  pinyin2: "hmwk"
},
{
  name: "\u6b63\u7578\u79d1",
  pinyin1: "zhengjike",
  pinyin2: "zjk"
},
{
  name: "\u7259\u4f53\u7259\u9ad3\u79d1",
  pinyin1: "yatiyasuike",
  pinyin2: "ytysk"
},
{
  name: "\u7259\u5468\u79d1",
  pinyin1: "yazhouke",
  pinyin2: "yzk"
},
{
  name: "\u53e3\u8154\u7c98\u819c\u79d1",
  pinyin1: "kouqiangzhanmoke",
  pinyin2: "kqzmk"
},
{
  name: "\u513f\u7ae5\u53e3\u8154\u79d1",
  pinyin1: "ertongkouqiangke",
  pinyin2: "etkqk"
},
{
  name: "\u53e3\u8154\u4fee\u590d\u79d1",
  pinyin1: "kouqiangxiufuke",
  pinyin2: "kqxfk"
},
{
  name: "\u79cd\u690d\u79d1",
  pinyin1: "zhongzhike",
  pinyin2: "zzk"
},
{
  name: "\u53e3\u8154\u9884\u9632\u79d1",
  pinyin1: "kouqiangyufangke",
  pinyin2: "kqyfk"
},
{
  name: "\u53e3\u8154\u7279\u8bca\u79d1",
  pinyin1: "kouqiangtezhenke",
  pinyin2: "kqtzk"
},
{
  name: "\u53e3\u8154\u6025\u8bca\u79d1",
  pinyin1: "kouqiangjizhenke",
  pinyin2: "kqjzk"
},
{
  name: "\u8033\u9f3b\u5589",
  pinyin1: "erbihou",
  pinyin2: "ebh"
},
{
  name: "\u5934\u9888\u5916\u79d1",
  pinyin1: "toujingwaike",
  pinyin2: "tjwk"
},
{
  name: "\u80bf\u7624\u5185\u79d1",
  pinyin1: "zhongliuneike",
  pinyin2: "zlnk"
},
{
  name: "\u80bf\u7624\u5916\u79d1",
  pinyin1: "zhongliuwaike",
  pinyin2: "zlwk"
},
{
  name: "\u80bf\u7624\u5987\u79d1",
  pinyin1: "zhongliufuke",
  pinyin2: "zlfk"
},
{
  name: "\u653e\u7597\u79d1",
  pinyin1: "fangliaoke",
  pinyin2: "flk"
},
{
  name: "\u9aa8\u80bf\u7624\u79d1",
  pinyin1: "guzhongliuke",
  pinyin2: "gzlk"
},
{
  name: "\u80bf\u7624\u5eb7\u590d\u79d1",
  pinyin1: "zhongliukangfuke",
  pinyin2: "zlkfk"
},
{
  name: "\u80bf\u7624\u7efc\u5408\u79d1",
  pinyin1: "zhongliuzongheke",
  pinyin2: "zlzhk"
},
{
  name: "\u76ae\u80a4\u79d1",
  pinyin1: "pifuke",
  pinyin2: "pfk"
},
{
  name: "\u6027\u75c5\u79d1",
  pinyin1: "xingbingke",
  pinyin2: "xbk"
},
{
  name: "\u7537\u6027\u5b66\u79d1",
  pinyin1: "nanxingxueke",
  pinyin2: "nxxk"
},
{
  name: "\u76ae\u80a4\u7f8e\u5bb9",
  pinyin1: "pifumeirong",
  pinyin2: "pfmr"
},
{
  name: "\u70e7\u4f24\u79d1",
  pinyin1: "shaoshangke",
  pinyin2: "ssk"
},
{
  name: "\u7cbe\u795e\u79d1",
  pinyin1: "jingshenke",
  pinyin2: "jsk"
},
{
  name: "\u5fc3\u7406\u54a8\u8be2\u79d1",
  pinyin1: "xinlizixunke",
  pinyin2: "xlzxk"
},
{
  name: "\u53f8\u6cd5\u9274\u5b9a\u79d1",
  pinyin1: "sifajiandingke",
  pinyin2: "sfjdk"
},
{
  name: "\u53cc\u76f8\u969c\u788d\u79d1",
  pinyin1: "shuangxiangzhangaike",
  pinyin2: "sxzak"
},
{
  name: "\u836f\u7269\u4f9d\u8d56\u79d1",
  pinyin1: "yaowuyilaike",
  pinyin2: "ywylk"
},
{
  name: "\u4e2d\u533b\u5987\u4ea7\u79d1",
  pinyin1: "zhongyifuchanke",
  pinyin2: "zyfck"
},
{
  name: "\u4e2d\u533b\u513f\u79d1",
  pinyin1: "zhongyierke",
  pinyin2: "zyek"
},
{
  name: "\u4e2d\u533b\u9aa8\u79d1",
  pinyin1: "zhongyiguke",
  pinyin2: "zygk"
},
{
  name: "\u4e2d\u533b\u76ae\u80a4\u79d1",
  pinyin1: "zhongyipifuke",
  pinyin2: "zypfk"
},
{
  name: "\u4e2d\u533b\u5185\u5206\u6ccc",
  pinyin1: "zhongyineifenmi",
  pinyin2: "zynfm"
},
{
  name: "\u4e2d\u533b\u6d88\u5316\u79d1",
  pinyin1: "zhongyixiaohuake",
  pinyin2: "zyxhk"
},
{
  name: "\u4e2d\u533b\u547c\u5438\u79d1",
  pinyin1: "zhongyihuxike",
  pinyin2: "zyhxk"
},
{
  name: "\u4e2d\u533b\u80be\u75c5\u5185\u79d1",
  pinyin1: "zhongyishenbingneike",
  pinyin2: "zysbnk"
},
{
  name: "\u4e2d\u533b\u514d\u75ab\u5185\u79d1",
  pinyin1: "zhongyimianyineike",
  pinyin2: "zymynk"
},
{
  name: "\u4e2d\u533b\u5fc3\u5185\u79d1",
  pinyin1: "zhongyixinneike",
  pinyin2: "zyxnk"
},
{
  name: "\u4e2d\u533b\u795e\u7ecf\u5185\u79d1",
  pinyin1: "zhongyishenjingneike",
  pinyin2: "zysjnk"
},
{
  name: "\u4e2d\u533b\u80bf\u7624\u79d1",
  pinyin1: "zhongyizhongliuke",
  pinyin2: "zyzlk"
},
{
  name: "\u4e2d\u533b\u8840\u6db2\u79d1",
  pinyin1: "zhongyixueyeke",
  pinyin2: "zyxyk"
},
{
  name: "\u4e2d\u533b\u611f\u67d3\u5185\u79d1",
  pinyin1: "zhongyiganranneike",
  pinyin2: "zygrnk"
},
{
  name: "\u4e2d\u533b\u809d\u75c5\u79d1",
  pinyin1: "zhongyiganbingke",
  pinyin2: "zygbk"
},
{
  name: "\u4e2d\u533b\u4e94\u5b98\u79d1",
  pinyin1: "zhongyiwuguanke",
  pinyin2: "zywgk"
},
{
  name: "\u4e2d\u533b\u7537\u79d1",
  pinyin1: "zhongyinanke",
  pinyin2: "zynk"
},
{
  name: "\u9488\u7078\u79d1",
  pinyin1: "zhenjiuke",
  pinyin2: "zjk"
},
{
  name: "\u4e2d\u533b\u6309\u6469\u79d1",
  pinyin1: "zhongyianmoke",
  pinyin2: "zyamk"
},
{
  name: "\u4e2d\u533b\u5916\u79d1",
  pinyin1: "zhongyiwaike",
  pinyin2: "zywk"
},
{
  name: "\u4e2d\u533b\u4e73\u817a\u5916\u79d1",
  pinyin1: "zhongyiruxianwaike",
  pinyin2: "zyrxwk"
},
{
  name: "\u4e2d\u533b\u809b\u80a0\u79d1",
  pinyin1: "zhongyigangchangke",
  pinyin2: "zygck"
},
{
  name: "\u4e2d\u533b\u8001\u5e74\u75c5\u79d1",
  pinyin1: "zhongyilaonianbingke",
  pinyin2: "zylnbk"
},
{
  name: "\u4e2d\u533b\u79d1",
  pinyin1: "zhongyike",
  pinyin2: "zyk"
},
{
  name: "\u4e2d\u897f\u533b\u7ed3\u5408\u79d1",
  pinyin1: "zhongxiyijieheke",
  pinyin2: "zxyjhk"
},
{
  name: "\u809d\u75c5\u79d1",
  pinyin1: "ganbingke",
  pinyin2: "gbk"
},
{
  name: "\u4f20\u67d3\u79d1",
  pinyin1: "chuanranke",
  pinyin2: "crk"
},
{
  name: "\u827e\u6ecb\u75c5\u79d1",
  pinyin1: "aizibingke",
  pinyin2: "azbk"
},
{
  name: "\u4f20\u67d3\u5371\u91cd\u5ba4",
  pinyin1: "chuanranweizhongshi",
  pinyin2: "crwzs"
},
{
  name: "\u7ed3\u6838\u75c5\u79d1",
  pinyin1: "jiehebingke",
  pinyin2: "jhbk"
},
{
  name: "\u4ecb\u5165\u533b\u5b66\u79d1",
  pinyin1: "jieruyixueke",
  pinyin2: "jryxk"
},
{
  name: "\u5eb7\u590d\u79d1",
  pinyin1: "kangfuke",
  pinyin2: "kfk"
},
{
  name: "\u7406\u7597\u79d1",
  pinyin1: "liliaoke",
  pinyin2: "llk"
},
{
  name: "\u8fd0\u52a8\u533b\u5b66\u79d1",
  pinyin1: "yundongyixueke",
  pinyin2: "ydyxk"
},
{
  name: "\u75bc\u75db\u79d1",
  pinyin1: "tengtongke",
  pinyin2: "ttk"
},
{
  name: "\u9ebb\u9189\u79d1",
  pinyin1: "mazuike",
  pinyin2: "mzk"
},
{
  name: "\u804c\u4e1a\u75c5\u79d1",
  pinyin1: "zhiyebingke",
  pinyin2: "zybk"
},
{
  name: "\u5730\u65b9\u75c5\u79d1",
  pinyin1: "difangbingke",
  pinyin2: "dfbk"
},
{
  name: "\u8425\u517b\u79d1",
  pinyin1: "yingyangke",
  pinyin2: "yyk"
},
{
  name: "\u6838\u533b\u5b66\u79d1",
  pinyin1: "heyixueke",
  pinyin2: "hyxk"
},
{
  name: "\u653e\u5c04\u79d1",
  pinyin1: "fangsheke",
  pinyin2: "fsk"
},
{
  name: "\u8d85\u58f0\u79d1",
  pinyin1: "chaoshengke",
  pinyin2: "csk"
},
{
  name: "\u533b\u5b66\u5f71\u50cf\u79d1",
  pinyin1: "yixueyingxiangke",
  pinyin2: "yxyxk"
},
{
  name: "\u75c5\u7406\u79d1",
  pinyin1: "binglike",
  pinyin2: "blk"
},
{
  name: "\u6025\u8bca\u79d1",
  pinyin1: "jizhenke",
  pinyin2: "jzk"
},
{
  name: "\u7279\u8272\u533b\u7597\u79d1",
  pinyin1: "teseyiliaoke",
  pinyin2: "tsylk"
},
{
  name: "\u5e72\u90e8\u8bca\u7597\u79d1",
  pinyin1: "ganbuzhenliaoke",
  pinyin2: "gbzlk"
},
{
  name: "\u91cd\u75c7\u76d1\u62a4\u5ba4",
  pinyin1: "zhongzhengjianhushi",
  pinyin2: "zzjhs"
},
{
  name: "\u7279\u8bca\u79d1",
  pinyin1: "tezhenke",
  pinyin2: "tzk"
},
{
  name: "\u68c0\u9a8c\u79d1",
  pinyin1: "jianyanke",
  pinyin2: "jyk"
},
{
  name: "\u9884\u9632\u4fdd\u5065\u79d1",
  pinyin1: "yufangbaojianke",
  pinyin2: "yfbjk"
},
{
  name: "\u529f\u80fd\u68c0\u67e5\u79d1",
  pinyin1: "gongnengjianchake",
  pinyin2: "gnjck"
},
{
  name: "\u5168\u79d1",
  pinyin1: "quanke",
  pinyin2: "qk"
},
{
  name: "\u836f\u5242\u79d1",
  pinyin1: "yaojike",
  pinyin2: "yjk"
},
{
  name: "\u4f53\u68c0\u79d1",
  pinyin1: "tijianke",
  pinyin2: "tjk"
},
{
  name: "\u8840\u900f\u4e2d\u5fc3",
  pinyin1: "xuetouzhongxin",
  pinyin2: "xtzx"
},
{
  name: "\u5b9e\u9a8c\u4e2d\u5fc3",
  pinyin1: "shiyanzhongxin",
  pinyin2: "syzx"
},
{
  name: "\u788e\u77f3\u4e2d\u5fc3",
  pinyin1: "suishizhongxin",
  pinyin2: "sszx"
},
{
  name: "IMCC",
  pinyin1: "IMCC",
  pinyin2: "imcc"
},
{
  name: "\u62a4\u7406\u54a8\u8be2",
  pinyin1: "hulizixun",
  pinyin2: "hlzx"
},
{
  name: "\u8111\u5916\u79d1",
  pinyin1: "naowaike",
  pinyin2: "nwk"
},
{
  name: "\u70e7\u4f24\u79d1",
  pinyin1: "shaoshangke",
  pinyin2: "ssk"
},
{
  name: "\u5c0f\u513f\u666e\u5916\u79d1",
  pinyin1: "xiaoerpuwaike",
  pinyin2: "xepwk"
},
{
  name: "\u513f\u7ae5\u9057\u4f20\u75c5\u79d1",
  pinyin1: "ertongyichuanbingke",
  pinyin2: "etycbk"
},
{
  name: "\u513f\u7ae5\u4f20\u67d3\u75c5\u79d1",
  pinyin1: "ertongchuanranbingke",
  pinyin2: "etcrbk"
},
{
  name: "\u9aa8\u4f24\u4e13\u79d1",
  pinyin1: "gushangzhuanke",
  pinyin2: "gszk"
},
{
  name: "\u51c6\u5206\u5b50\u6fc0\u5149\u79d1",
  pinyin1: "zhunfenzijiguangke",
  pinyin2: "zfzjgk"
},
{
  name: "\u4e2d\u533b\u5185\u79d1",
  pinyin1: "zhongyineike",
  pinyin2: "zynk"
},
{
  name: "\u4e2d\u533b\u813e\u80c3\u79d1",
  pinyin1: "zhongyipiweike",
  pinyin2: "zypwk"
},
{
  name: "\u818f\u65b9\u95e8\u8bca",
  pinyin1: "gaofangmenzhen",
  pinyin2: "gfmz"
},
{
  name: "\u4e2d\u533b\u9aa8\u4f24\u79d1",
  pinyin1: "zhongyigushangke",
  pinyin2: "zygsk"
},
{
  name: "\u53d8\u6001\u53cd\u5e94\u79d1",
  pinyin1: "biantaifanyingke",
  pinyin2: "btfyk"
}];
var diseases = [{
  name: "1\u578b\u7cd6\u5c3f\u75c5",
  pinyin1: "1xingtangniaobing",
  pinyin2: "1xtnb"
},
{
  name: "2\u578b\u7cd6\u5c3f\u75c5",
  pinyin1: "2xingtangniaobing",
  pinyin2: "2xtnb"
},
{
  name: "Graves\u75c5",
  pinyin1: "Gravesbing",
  pinyin2: "gravesb"
},
{
  name: "IGA\u80be\u75c5",
  pinyin1: "IGAshenbing",
  pinyin2: "igasb"
},
{
  name: "KT\u7efc\u5408\u5f81",
  pinyin1: "KTzonghezheng",
  pinyin2: "ktzhz"
},
{
  name: "O\u578b\u817f",
  pinyin1: "Oxingtui",
  pinyin2: "oxt"
},
{
  name: "X\u578b\u817f",
  pinyin1: "Xxingtui",
  pinyin2: "xxt"
},
{
  name: "\u764c\u75db",
  pinyin1: "aitong",
  pinyin2: "at"
},
{
  name: "\u77ee\u5c0f\u75c7",
  pinyin1: "aixiaozheng",
  pinyin2: "axz"
},
{
  name: "\u827e\u6ecb\u75c5",
  pinyin1: "aizibing",
  pinyin2: "azb"
},
{
  name: "\u75a4\u75d5",
  pinyin1: "bahen",
  pinyin2: "bh"
},
{
  name: "\u62d4\u7259",
  pinyin1: "baya",
  pinyin2: "by"
},
{
  name: "\u767d\u5e26\u5f02\u5e38",
  pinyin1: "baidaiyichang",
  pinyin2: "bdyc"
},
{
  name: "\u767d\u765c\u98ce",
  pinyin1: "baidianfeng",
  pinyin2: "bdf"
},
{
  name: "\u767d\u5185\u969c",
  pinyin1: "baineizhang",
  pinyin2: "bnz"
},
{
  name: "\u767d\u585e\u6c0f\u75c5",
  pinyin1: "baisaishibing",
  pinyin2: "bssb"
},
{
  name: "\u767d\u7ec6\u80de\u51cf\u5c11\u75c7",
  pinyin1: "baixibaojianshaozheng",
  pinyin2: "bxbjsz"
},
{
  name: "\u767d\u8840\u75c5",
  pinyin1: "baixuebing",
  pinyin2: "bxb"
},
{
  name: "\u7622\u75d5\u7599\u7629",
  pinyin1: "banhengeda",
  pinyin2: "bhgd"
},
{
  name: "\u8180\u80f1\u764c",
  pinyin1: "bangguangai",
  pinyin2: "bga"
},
{
  name: "\u5305\u830e",
  pinyin1: "baojing",
  pinyin2: "bj"
},
{
  name: "\u5305\u76ae\u9f9f\u5934\u708e",
  pinyin1: "baopiguitouyan",
  pinyin2: "bpgty"
},
{
  name: "\u5305\u76ae\u8fc7\u957f",
  pinyin1: "baopiguozhang",
  pinyin2: "bpgz"
},
{
  name: "\u82ef\u4e19\u916e\u5c3f\u75c7",
  pinyin1: "benbingtongniaozheng",
  pinyin2: "bbtnz"
},
{
  name: "\u9f3b\u7aa6\u708e",
  pinyin1: "bidouyan",
  pinyin2: "bdy"
},
{
  name: "\u9f3b\u606f\u8089",
  pinyin1: "bixirou",
  pinyin2: "bxr"
},
{
  name: "\u9f3b\u54bd\u764c",
  pinyin1: "biyanai",
  pinyin2: "bya"
},
{
  name: "\u9f3b\u708e",
  pinyin1: "biyan",
  pinyin2: "by"
},
{
  name: "\u9f3b\u4e2d\u9694\u504f\u66f2",
  pinyin1: "bizhonggepianqu",
  pinyin2: "bzgpq"
},
{
  name: "\u95ed\u7ecf",
  pinyin1: "bijing",
  pinyin2: "bj"
},
{
  name: "\u81c2\u4e1b\u795e\u7ecf\u635f\u4f24",

  pinyin1: "beicongshenjingsunshang",
  pinyin2: "bcsjss"
},
{
  name: "\u6241\u5e73\u75a3",
  pinyin1: "bianpingyou",
  pinyin2: "bpy"
},
{
  name: "\u6241\u5e73\u8db3",
  pinyin1: "bianpingzu",
  pinyin2: "bpz"
},
{
  name: "\u6241\u6843\u4f53\u708e",
  pinyin1: "biantaotiyan",
  pinyin2: "btty"
},
{
  name: "\u4fbf\u79d8",
  pinyin1: "bianmi",
  pinyin2: "bm"
},
{
  name: "\u4e19\u809d",
  pinyin1: "binggan",
  pinyin2: "bg"
},
{
  name: "\u75c5\u6bd2\u6027\u809d\u708e",
  pinyin1: "bingduxingganyan",
  pinyin2: "bdxgy"
},
{
  name: "\u75c5\u7406\u8bca\u65ad",
  pinyin1: "binglizhenduan",
  pinyin2: "blzd"
},
{
  name: "\u4e0d\u5b55\u4e0d\u80b2",
  pinyin1: "buyunbuyu",
  pinyin2: "byby"
},
{
  name: "\u5e03\u5361\u7efc\u5408\u75c7",
  pinyin1: "bukazonghezheng",
  pinyin2: "bkzhz"
},
{
  name: "\u4ea7\u540e\u98ce\u6e7f",
  pinyin1: "chanhoufengshi",
  pinyin2: "chfs"
},
{
  name: "\u80a0\u6897\u963b",
  pinyin1: "changgengzu",
  pinyin2: "cgz"
},
{
  name: "\u80a0\u7ed3\u6838",
  pinyin1: "changjiehe",
  pinyin2: "cjh"
},
{
  name: "\u80a0\u7618",
  pinyin1: "changlou",
  pinyin2: "cl"
},
{
  name: "\u80a0\u80c3\u708e",
  pinyin1: "changweiyan",
  pinyin2: "cwy"
},
{
  name: "\u80a0\u708e",
  pinyin1: "changyan",
  pinyin2: "cy"
},
{
  name: "\u80a0\u6613\u6fc0\u7efc\u5408\u5f81",
  pinyin1: "changyijizonghezheng",
  pinyin2: "cyjzhz"
},
{
  name: "\u8d85\u58f0\u8bca\u65ad",
  pinyin1: "chaoshengzhenduan",
  pinyin2: "cszd"
},
{
  name: "\u5c18\u80ba",
  pinyin1: "chenfei",
  pinyin2: "cf"
},
{
  name: "\u6210\u4eba\u65af\u8482\u5c14\u75c5",
  pinyin1: "chengrensidierbing",
  pinyin2: "crsdeb"
},
{
  name: "\u6210\u4eba\u5148\u5929\u6027\u9acb\u5173\u8282\u8131\u4f4d",
  pinyin1: "chengrenxiantianxingkuanguanjietuowei",
  pinyin2: "crxtxkgjtw"
},
{
  name: "\u75f4\u5446",
  pinyin1: "chidai",
  pinyin2: "cd"
},
{
  name: "\u62bd\u52a8\u75c7",
  pinyin1: "choudongzheng",
  pinyin2: "cdz"
},
{
  name: "\u5ddd\u5d0e\u75c5",
  pinyin1: "chuanqibing",
  pinyin2: "cqb"
},
{
  name: "\u5782\u4f53\u7624",
  pinyin1: "chuitiliu",
  pinyin2: "ctl"
},
{
  name: "\u5507\u816d\u88c2",
  pinyin1: "chunelie",
  pinyin2: "cel"
},
{
  name: "\u75e4\u75ae",
  pinyin1: "cuochuang",
  pinyin2: "cc"
},
{
  name: "\u5927\u52a8\u8109\u9519\u4f4d",
  pinyin1: "dadongmaicuowei",
  pinyin2: "ddmcw"
},
{
  name: "\u5927\u4e09\u9633",
  pinyin1: "dasanyang",
  pinyin2: "dsy"
},
{
  name: "\u5e26\u72b6\u75b1\u75b9",
  pinyin1: "daizhuangpaozhen",
  pinyin2: "dzpz"
},
{
  name: "\u80c6\u9053\u5148\u5929\u6027\u7578\u5f62",
  pinyin1: "dandaoxiantianxingjixing",
  pinyin2: "ddxtxjx"
},
{
  name: "\u80c6\u7ba1\u764c",
  pinyin1: "danguanai",
  pinyin2: "dga"
},
{
  name: "\u80c6\u7ba1\u7ed3\u77f3",
  pinyin1: "danguanjieshi",
  pinyin2: "dgjs"
},
{
  name: "\u80c6\u7ed3\u77f3",
  pinyin1: "danjieshi",
  pinyin2: "djs"
},
{
  name: "\u80c6\u56ca\u764c",
  pinyin1: "dannangai",
  pinyin2: "dna"
},
{
  name: "\u80c6\u56ca\u7ed3\u77f3",
  pinyin1: "dannangjieshi",
  pinyin2: "dnjs"
},
{
  name: "\u80c6\u56ca\u606f\u8089",
  pinyin1: "dannangxirou",
  pinyin2: "dnxr"
},
{
  name: "\u80c6\u56ca\u708e",
  pinyin1: "dannangyan",
  pinyin2: "dny"
},
{
  name: "\u80c6\u8102\u7624\u578b\u4e2d\u8033\u708e",
  pinyin1: "danzhiliuxingzhongeryan",
  pinyin2: "dzlxzey"
},
{
  name: "\u5012\u776b",
  pinyin1: "daojie",
  pinyin2: "dj"
},
{
  name: "\u766b\u75eb",
  pinyin1: "dianxian",
  pinyin2: "dx"
},
{
  name: "\u7535\u51fb",
  pinyin1: "dianji",
  pinyin2: "dj"
},
{
  name: "\u8035\u804d\u6813\u585e",
  pinyin1: "dingningshuansai",
  pinyin2: "dnss"
},
{
  name: "\u52a8\u8109\u5bfc\u7ba1\u672a\u95ed",
  pinyin1: "dongmaidaoguanweibi",
  pinyin2: "dmdgwb"
},
{
  name: "\u52a8\u8109\u7624",
  pinyin1: "dongmailiu",
  pinyin2: "dml"
},
{
  name: "\u52a8\u8109\u6813\u585e",
  pinyin1: "dongmaishuansai",
  pinyin2: "dmss"
},
{
  name: "\u52a8\u8109\u786c\u5316\u95ed\u585e\u75c7",
  pinyin1: "dongmaiyinghuabisaizheng",
  pinyin2: "dmyhbsz"
},
{
  name: "\u51bb\u4f24",
  pinyin1: "dongshang",
  pinyin2: "ds"
},
{
  name: "\u591a\u53d1\u6027\u9aa8\u9ad3\u7624",
  pinyin1: "duofaxinggusuiliu",
  pinyin2: "dfxgsl"
},
{
  name: "\u591a\u53d1\u6027\u786c\u5316",
  pinyin1: "duofaxingyinghua",
  pinyin2: "dfxyh"
},
{
  name: "\u591a\u6c57\u75c7",
  pinyin1: "duohanzheng",
  pinyin2: "dhz"
},
{
  name: "\u591a\u56ca\u5375\u5de2\u7efc\u5408\u5f81",
  pinyin1: "duonangluanchaozonghezheng",
  pinyin2: "dnlczhz"
},
{
  name: "\u591a\u4e73\u5934\u591a\u4e73\u623f\u7578\u5f62",
  pinyin1: "duorutouduorufangjixing",
  pinyin2: "drtdrfjx"
},
{
  name: "\u9e45\u53e3\u75ae",
  pinyin1: "ekouchuang",
  pinyin2: "ekc"
},
{
  name: "\u513f\u7ae5\u767d\u8840\u75c5",
  pinyin1: "ertongbaixuebing",
  pinyin2: "etbxb"
},
{
  name: "\u513f\u7ae5\u9f3b\u7aa6\u708e",
  pinyin1: "ertongbidouyan",
  pinyin2: "etbdy"
},
{
  name: "\u513f\u7ae5\u7259\u75c5",
  pinyin1: "ertongyabing",
  pinyin2: "etyb"
},
{
  name: "\u8033\u804b",
  pinyin1: "erlong",
  pinyin2: "el"
},
{
  name: "\u8033\u9e23",
  pinyin1: "erming",
  pinyin2: "em"
},
{
  name: "\u4e8c\u5c16\u74e3\u8131\u5782\u7efc\u5408\u75c7",
  pinyin1: "erjianbantuochuizonghezheng",
  pinyin2: "ejbtczhz"
},
{
  name: "\u53d1\u70e7",
  pinyin1: "fashao",
  pinyin2: "fs"
},
{
  name: "\u53d1\u80b2\u8fdf\u7f13",
  pinyin1: "fayuchihuan",
  pinyin2: "fych"
},
{
  name: "\u53d1\u4f5c\u6027\u7761\u75c5",
  pinyin1: "fazuoxingshuibing",
  pinyin2: "fzxsb"
},
{
  name: "\u6cd5\u6d1b\u56db\u8054\u75c7",
  pinyin1: "faluosilianzheng",
  pinyin2: "flslz"
},
{
  name: "\u53cd\u6d41\u6027\u98df\u7ba1\u708e",
  pinyin1: "fanliuxingshiguanyan",
  pinyin2: "flxsgy"
},
{
  name: "\u623f\u98a4",
  pinyin1: "fangzhan",
  pinyin2: "fz"
},
{
  name: "\u623f\u95f4\u9694\u7f3a\u635f",
  pinyin1: "fangjiangequesun",
  pinyin2: "fjgqs"
},
{
  name: "\u653e\u5c04\u8bca\u65ad",
  pinyin1: "fangshezhenduan",
  pinyin2: "fszd"
},
{
  name: "\u975e\u6dcb\u83cc\u6027\u5c3f\u9053\u708e",
  pinyin1: "feilinjunxingniaodaoyan",
  pinyin2: "fljxndy"
},
{
  name: "\u80a5\u80d6\u75c7",
  pinyin1: "feipangzheng",
  pinyin2: "fpz"
},
{
  name: "\u80ba\u764c",
  pinyin1: "feiai",
  pinyin2: "fa"
},
{
  name: "\u80ba\u52a8\u8109\u53e3\u72ed\u7a84",
  pinyin1: "feidongmaikouxiazhai",
  pinyin2: "fdmkxz"
},
{
  name: "\u80ba\u7ed3\u6838",
  pinyin1: "feijiehe",
  pinyin2: "fjh"
},
{
  name: "\u80ba\u9759\u8109\u5f02\u4f4d\u5f15\u6d41",
  pinyin1: "feijingmaiyiweiyinliu",
  pinyin2: "fjmywyl"
},
{
  name: "\u80ba\u6c14\u80bf",
  pinyin1: "feiqizhong",
  pinyin2: "fqz"
},
{
  name: "\u80ba\u6813\u585e",
  pinyin1: "feishuansai",
  pinyin2: "fss"
},
{
  name: "\u80ba\u7ea4\u7ef4\u5316",
  pinyin1: "feixianweihua",
  pinyin2: "fxwh"
},
{
  name: "\u80ba\u5fc3\u75c5",
  pinyin1: "feixinbing",
  pinyin2: "fxb"
},
{
  name: "\u80ba\u708e",
  pinyin1: "feiyan",
  pinyin2: "fy"
},
{
  name: "\u98ce\u6e7f\u75c5",
  pinyin1: "fengshibing",
  pinyin2: "fsb"
},
{
  name: "\u98ce\u6e7f\u6027\u5173\u8282\u708e",
  pinyin1: "fengshixingguanjieyan",
  pinyin2: "fsxgjy"
},
{
  name: "\u98ce\u6e7f\u6027\u5fc3\u810f\u74e3\u819c\u75c5",
  pinyin1: "fengshixingxinzangbanmobing",
  pinyin2: "fsxxzbmb"
},
{
  name: "\u98ce\u6e7f\u6027\u5fc3\u810f\u75c5",
  pinyin1: "fengshixingxinzangbing",
  pinyin2: "fsxxzb"
},
{
  name: "\u5987\u79d1\u708e\u75c7",
  pinyin1: "fukeyanzheng",
  pinyin2: "fkyz"
},
{
  name: "\u9644\u777e\u708e",
  pinyin1: "fugaoyan",
  pinyin2: "fgy"
},
{
  name: "\u590d\u6742\u6027\u5148\u5929\u6027\u5fc3\u810f\u75c5",
  pinyin1: "fuzaxingxiantianxingxinzangbing",
  pinyin2: "fzxxtxxzb"
},
{
  name: "\u526f\u4e73",
  pinyin1: "furu",
  pinyin2: "fr"
},
{
  name: "\u8179\u80a1\u6c9f\u759d",
  pinyin1: "fugugoushan",
  pinyin2: "fggs"
},
{
  name: "\u8179\u819c\u540e\u8840\u80bf",
  pinyin1: "fumohouxuezhong",
  pinyin2: "fmhxz"
},
{
  name: "\u8179\u75db",
  pinyin1: "futong",
  pinyin2: "ft"
},
{
  name: "\u8179\u5916\u759d",
  pinyin1: "fuwaishan",
  pinyin2: "fws"
},
{
  name: "\u8179\u6cfb",
  pinyin1: "fuxie",
  pinyin2: "fx"
},
{
  name: "\u5e72\u773c\u75c7",
  pinyin1: "ganyanzheng",
  pinyin2: "gyz"
},
{
  name: "\u5e72\u71e5\u7efc\u5408\u5f81",
  pinyin1: "ganzaozonghezheng",
  pinyin2: "gzzhz"
},
{
  name: "\u809d\u764c",
  pinyin1: "ganai",
  pinyin2: "ga"
},
{
  name: "\u809d\u8179\u6c34",
  pinyin1: "ganfushui",
  pinyin2: "gfs"
},
{
  name: "\u809d\u5185\u80c6\u7ba1\u7ed3\u77f3",
  pinyin1: "ganneidanguanjieshi",
  pinyin2: "gndgjs"
},
{
  name: "\u809d\u8113\u80bf",
  pinyin1: "gannongzhong",
  pinyin2: "gnz"
},
{
  name: "\u809d\u5916\u80c6\u7ba1\u7ed3\u77f3",
  pinyin1: "ganwaidanguanjieshi",
  pinyin2: "gwdgjs"
},
{
  name: "\u809d\u8840\u7ba1\u7624",
  pinyin1: "ganxueguanliu",
  pinyin2: "gxgl"
},
{
  name: "\u809d\u708e",
  pinyin1: "ganyan",
  pinyin2: "gy"
},
{
  name: "\u809d\u786c\u5316",
  pinyin1: "ganyinghua",
  pinyin2: "gyh"
},
{
  name: "\u611f\u5192",
  pinyin1: "ganmao",
  pinyin2: "gm"
},
{
  name: "\u809b\u88c2",
  pinyin1: "ganglie",
  pinyin2: "gl"
},
{
  name: "\u809b\u7618",
  pinyin1: "ganglou",
  pinyin2: "gl"
},
{
  name: "\u809b\u5468\u8113\u80bf",
  pinyin1: "gangzhounongzhong",
  pinyin2: "gznz"
},
{
  name: "\u9ad8\u6ccc\u4e73\u7d20\u8840\u75c7",
  pinyin1: "gaomirusuxuezheng",
  pinyin2: "gmrsxz"
},
{
  name: "\u9ad8\u8840\u538b",
  pinyin1: "gaoxueya",
  pinyin2: "gxy"
},
{
  name: "\u9ad8\u8840\u8102",
  pinyin1: "gaoxuezhi",
  pinyin2: "gxz"
},
{
  name: "\u9ad8\u539f\u75c5",
  pinyin1: "gaoyuanbing",
  pinyin2: "gyb"
},
{
  name: "\u6839\u7ba1\u6cbb\u7597",
  pinyin1: "genguanzhiliao",
  pinyin2: "ggzl"
},
{
  name: "\u6839\u5c16\u5468\u708e",
  pinyin1: "genjianzhouyan",
  pinyin2: "gjzy"
},
{
  name: "\u8ddf\u8171\u65ad\u88c2",
  pinyin1: "genjianduanlie",
  pinyin2: "gjdl"
},
{
  name: "\u66f4\u5e74\u671f\u7efc\u5408\u75c7",
  pinyin1: "gengnianqizonghezheng",
  pinyin2: "gnqzhz"
},
{
  name: "\u529f\u80fd\u6027\u5b50\u5bab\u51fa\u8840",
  pinyin1: "gongnengxingzigongchuxue",
  pinyin2: "gnxzgcx"
},
{
  name: "\u5bab\u9888\u764c",
  pinyin1: "gongjingai",
  pinyin2: "gja"
},
{
  name: "\u5bab\u9888\u764c\u524d\u75c5\u53d8",
  pinyin1: "gongjingaiqianbingbian",
  pinyin2: "gjaqbb"
},
{
  name: "\u5bab\u9888\u7cdc\u70c2",
  pinyin1: "gongjingmilan",
  pinyin2: "gjml"
},
{
  name: "\u5bab\u9888\u708e",
  pinyin1: "gongjingyan",
  pinyin2: "gjy"
},
{
  name: "\u5bab\u5916\u5b55",
  pinyin1: "gongwaiyun",
  pinyin2: "gwy"
},
{
  name: "\u4f5d\u507b\u75c5",
  pinyin1: "gouloubing",
  pinyin2: "glb"
},
{
  name: "\u80a1\u9aa8\u5934\u574f\u6b7b",
  pinyin1: "gugutouhuaisi",
  pinyin2: "ggths"
},
{
  name: "\u9aa8\u764c",
  pinyin1: "guai",
  pinyin2: "ga"
},
{
  name: "\u9aa8\u4e0d\u8fde",
  pinyin1: "gubulian",
  pinyin2: "gbl"
},
{
  name: "\u9aa8\u7ed3\u6838\u75c5",
  pinyin1: "gujiehebing",
  pinyin2: "gjhb"
},
{
  name: "\u9aa8\u5de8\u7ec6\u80de\u7624",
  pinyin1: "gujuxibaoliu",
  pinyin2: "gjxbl"
},
{
  name: "\u9aa8\u7624",
  pinyin1: "guliu",
  pinyin2: "gl"
},
{
  name: "\u9aa8\u76c6\u9aa8\u6298",
  pinyin1: "gupenguzhe",
  pinyin2: "gpgz"
},
{
  name: "\u9aa8\u8089\u7624",
  pinyin1: "gurouliu",
  pinyin2: "grl"
},
{
  name: "\u9aa8\u8f6f\u9aa8\u75c5",
  pinyin1: "guruangubing",
  pinyin2: "grgb"
},
{
  name: "\u9aa8\u9ad3\u708e",
  pinyin1: "gusuiyan",
  pinyin2: "gsy"
},
{
  name: "\u9aa8\u9ad3\u5f02\u5e38\u589e\u751f\u7efc\u5408\u5f81",
  pinyin1: "gusuiyichangzengshengzonghezheng",
  pinyin2: "gsyczszhz"
},
{
  name: "\u9aa8\u5ef6\u957f",
  pinyin1: "guyanzhang",
  pinyin2: "gyz"
},
{
  name: "\u9aa8\u6298",
  pinyin1: "guzhe",
  pinyin2: "gz"
},
{
  name: "\u9aa8\u8d28\u758f\u677e",
  pinyin1: "guzhishusong",
  pinyin2: "gzss"
},
{
  name: "\u9aa8\u8d28\u589e\u751f",
  pinyin1: "guzhizengsheng",
  pinyin2: "gzzs"
},
{
  name: "\u9aa8\u80bf\u7624",
  pinyin1: "guzhongliu",
  pinyin2: "gzl"
},
{
  name: "\u9aa8\u8f6c\u79fb\u764c",
  pinyin1: "guzhuanyiai",
  pinyin2: "gzya"
},
{
  name: "\u9f13\u819c\u7a7f\u5b54",
  pinyin1: "gumochuankong",
  pinyin2: "gmck"
},
{
  name: "\u5173\u8282\u955c",
  pinyin1: "guanjiejing",
  pinyin2: "gjj"
},
{
  name: "\u5173\u8282\u635f\u4f24",
  pinyin1: "guanjiesunshang",
  pinyin2: "gjss"
},
{
  name: "\u5173\u8282\u708e",
  pinyin1: "guanjieyan",
  pinyin2: "gjy"
},
{
  name: "\u51a0\u5fc3\u75c5",
  pinyin1: "guanxinbing",
  pinyin2: "gxb"
},
{
  name: "\u8fc7\u654f\u6027\u9f3b\u708e",
  pinyin1: "guominxingbiyan",
  pinyin2: "gmxby"
},
{
  name: "\u8fc7\u654f\u6027\u7d2b\u765c",
  pinyin1: "guominxingzidian",
  pinyin2: "gmxzd"
},
{
  name: "\u7ea2\u6591\u72fc\u75ae",
  pinyin1: "hongbanlangchuang",
  pinyin2: "hblc"
},
{
  name: "\u5589\u764c",
  pinyin1: "houai",
  pinyin2: "ha"
},
{
  name: "\u547c\u5438\u8870\u7aed",
  pinyin1: "huxishuaijie",
  pinyin2: "hxsj"
},
{
  name: "\u82b1\u7c89\u75c7",
  pinyin1: "huafenzheng",
  pinyin2: "hfz"
},
{
  name: "\u6ed1\u819c\u708e",
  pinyin1: "huamoyan",
  pinyin2: "hmy"
},
{
  name: "\u8e1d\u90e8\u626d\u4f24",
  pinyin1: "huaibuniushang",
  pinyin2: "hbns"
},
{
  name: "\u5bf0\u67a2\u690e\u8131\u4f4d",
  pinyin1: "huanshuzhuituowei",
  pinyin2: "hsztw"
},
{
  name: "\u9ec4\u6591\u53d8\u6027",
  pinyin1: "huangbanbianxing",
  pinyin2: "hbbx"
},
{
  name: "\u9ec4\u6591\u88c2\u5b54",
  pinyin1: "huangbanliekong",
  pinyin2: "hblk"
},
{
  name: "\u9ec4\u6591\u524d\u819c",
  pinyin1: "huangbanqianmo",
  pinyin2: "hbqm"
},
{
  name: "\u9ec4\u75b8",
  pinyin1: "huangdan",
  pinyin2: "hd"
},
{
  name: "\u9ec4\u8910\u6591",
  pinyin1: "huangheban",
  pinyin2: "hhb"
},
{
  name: "\u5a5a\u604b\u5fc3\u7406\u95ee\u9898",
  pinyin1: "hunlianxinliwenti",
  pinyin2: "hlxlwt"
},
{
  name: "\u808c\u75c5",
  pinyin1: "jibing",
  pinyin2: "jb"
},
{
  name: "\u9e21\u80f8",
  pinyin1: "jixiong",
  pinyin2: "jx"
},
{
  name: "\u9e21\u773c",
  pinyin1: "jiyan",
  pinyin2: "jy"
},
{
  name: "\u7578\u80ce\u7624",
  pinyin1: "jitailiu",
  pinyin2: "jtl"
},
{
  name: "\u6fc0\u7d20\u4f9d\u8d56\u6027\u76ae\u708e",
  pinyin1: "jisuyilaixingpiyan",
  pinyin2: "jsylxpy"
},
{
  name: "\u6025\u6027\u80a0\u708e",
  pinyin1: "jixingchangyan",
  pinyin2: "jxcy"
},
{
  name: "\u6025\u6027\u611f\u67d3\u6027\u5fc3\u5185\u819c\u708e",
  pinyin1: "jixingganranxingxinneimoyan",
  pinyin2: "jxgrxxnmy"
},
{
  name: "\u6025\u6027\u6dcb\u5df4\u7ec6\u80de\u767d\u8840\u75c5",
  pinyin1: "jixinglinbaxibaobaixuebing",
  pinyin2: "jxlbxbbxb"
},
{
  name: "\u6025\u6027\u4e0a\u547c\u5438\u9053\u611f\u67d3",
  pinyin1: "jixingshanghuxidaoganran",
  pinyin2: "jxshxdgr"
},
{
  name: "\u6025\u6027\u54bd\u708e",
  pinyin1: "jixingyanyan",
  pinyin2: "jxyy"
},
{
  name: "\u810a\u9ad3\u7a7a\u6d1e\u75c7",
  pinyin1: "jisuikongdongzheng",
  pinyin2: "jskdz"
},
{
  name: "\u810a\u9ad3\u635f\u4f24",
  pinyin1: "jisuisunshang",
  pinyin2: "jsss"
},
{
  name: "\u810a\u67f1\u4fa7\u5f2f",
  pinyin1: "jizhucewan",
  pinyin2: "jzcw"
},
{
  name: "\u810a\u67f1\u9aa8\u6298",
  pinyin1: "jizhuguzhe",
  pinyin2: "jzgz"
},
{
  name: "\u810a\u67f1\u7ed3\u6838",
  pinyin1: "jizhujiehe",
  pinyin2: "jzjh"
},
{
  name: "\u810a\u67f1\u88c2",
  pinyin1: "jizhulie",
  pinyin2: "jzl"
},
{
  name: "\u7ee7\u53d1\u6027\u80ba\u52a8\u8109\u9ad8\u538b",
  pinyin1: "jifaxingfeidongmaigaoya",
  pinyin2: "jfxfdmgy"
},
{
  name: "\u5bb6\u5ead\u5fc3\u7406\u95ee\u9898",
  pinyin1: "jiatingxinliwenti",
  pinyin2: "jtxlwt"
},
{
  name: "\u7532\u6c9f\u708e",
  pinyin1: "jiagouyan",
  pinyin2: "jgy"
},
{
  name: "\u7532\u51cf",
  pinyin1: "jiajian",
  pinyin2: "jj"
},
{
  name: "\u7532\u4ea2",
  pinyin1: "jiakang",
  pinyin2: "jk"
},
{
  name: "\u7532\u4ea2\u7a81\u773c",
  pinyin1: "jiakangtuyan",
  pinyin2: "jkty"
},
{
  name: "\u7532\u72b6\u817a\u764c",
  pinyin1: "jiazhuangxianai",
  pinyin2: "jzxa"
},
{
  name: "\u7532\u72b6\u817a\u7624",
  pinyin1: "jiazhuangxianliu",
  pinyin2: "jzxl"
},
{
  name: "\u7532\u72b6\u817a\u708e",
  pinyin1: "jiazhuangxianyan",
  pinyin2: "jzxy"
},
{
  name: "\u5c16\u9510\u6e7f\u75a3",
  pinyin1: "jianruishiyou",
  pinyin2: "jrsy"
},
{
  name: "\u95f4\u8d28\u6027\u80ba\u708e",
  pinyin1: "jianzhixingfeiyan",
  pinyin2: "jzxfy"
},
{
  name: "\u80a9\u5173\u8282\u635f\u4f24",
  pinyin1: "jianguanjiesunshang",
  pinyin2: "jgjss"
},
{
  name: "\u80a9\u5173\u8282\u8131\u4f4d",
  pinyin1: "jianguanjietuowei",
  pinyin2: "jgjtw"
},
{
  name: "\u80a9\u5468\u708e",
  pinyin1: "jianzhouyan",
  pinyin2: "jzy"
},
{
  name: "\u7751\u5916\u7ffb",
  pinyin1: "jianwaifan",
  pinyin2: "jwf"
},
{
  name: "\u8171\u9798\u56ca\u80bf",
  pinyin1: "jianqiaonangzhong",
  pinyin2: "jqnz"
},
{
  name: "\u8171\u9798\u708e",
  pinyin1: "jianqiaoyan",
  pinyin2: "jqy"
},
{
  name: "\u80f6\u8d28\u7624",
  pinyin1: "jiaozhiliu",
  pinyin2: "jzl"
},
{
  name: "\u7126\u8651\u75c7",
  pinyin1: "jiaolvzheng",
  pinyin2: "jlz"
},
{
  name: "\u89d2\u819c\u75c5",
  pinyin1: "jiaomobing",
  pinyin2: "jmb"
},
{
  name: "\u89d2\u819c\u708e",
  pinyin1: "jiaomoyan",
  pinyin2: "jmy"
},
{
  name: "\u811a\u6c14",
  pinyin1: "jiaoqi",
  pinyin2: "jq"
},
{
  name: "\u7ed3\u80a0\u764c",
  pinyin1: "jiechangai",
  pinyin2: "jca"
},
{
  name: "\u7ed3\u80a0\u708e",
  pinyin1: "jiechangyan",
  pinyin2: "jcy"
},
{
  name: "\u7ed3\u6838\u6027\u8179\u819c\u708e",
  pinyin1: "jiehexingfumoyan",
  pinyin2: "jhxfmy"
},
{
  name: "\u7ed3\u6838\u6027\u8111\u819c\u708e",
  pinyin1: "jiehexingnaomoyan",
  pinyin2: "jhxnmy"
},
{
  name: "\u7ed3\u8282\u75c5",
  pinyin1: "jiejiebing",
  pinyin2: "jjb"
},
{
  name: "\u7ed3\u8282\u6027\u7ea2\u6591",
  pinyin1: "jiejiexinghongban",
  pinyin2: "jjxhb"
},
{
  name: "\u7ed3\u819c\u708e",
  pinyin1: "jiemoyan",
  pinyin2: "jmy"
},
{
  name: "\u622a\u762b",
  pinyin1: "jietan",
  pinyin2: "jt"
},
{
  name: "\u7b4b\u819c\u708e",
  pinyin1: "jinmoyan",
  pinyin2: "jmy"
},
{
  name: "\u8fd1\u89c6",
  pinyin1: "jinshi",
  pinyin2: "js"
},
{
  name: "\u8fdb\u98df\u969c\u788d",
  pinyin1: "jinshizhangai",
  pinyin2: "jsza"
},
{
  name: "\u60ca\u53a5",
  pinyin1: "jingjue",
  pinyin2: "jj"
},
{
  name: "\u7cbe\u56ca\u708e",
  pinyin1: "jingnangyan",
  pinyin2: "jny"
},
{
  name: "\u7cbe\u795e\u5206\u88c2\u75c7",
  pinyin1: "jingshenfenliezheng",
  pinyin2: "jsflz"
},
{
  name: "\u7cbe\u7d22\u9759\u8109\u66f2\u5f20",
  pinyin1: "jingsuojingmaiquzhang",
  pinyin2: "jsjmqz"
},
{
  name: "\u9888\u90e8\u521b\u4f24",
  pinyin1: "jingbuchuangshang",
  pinyin2: "jbcs"
},
{
  name: "\u9888\u52a8\u8109\u4f53\u7624",
  pinyin1: "jingdongmaitiliu",
  pinyin2: "jdmtl"
},
{
  name: "\u9888\u690e\u75c5",
  pinyin1: "jingzhuibing",
  pinyin2: "jzb"
},
{
  name: "\u9759\u8109\u66f2\u5f20",
  pinyin1: "jingmaiquzhang",
  pinyin2: "jmqz"
},
{
  name: "\u9152\u7cbe\u809d",
  pinyin1: "jiujinggan",
  pinyin2: "jjg"
},
{
  name: "\u70e4\u74f7\u7259",
  pinyin1: "kaociya",
  pinyin2: "kcy"
},
{
  name: "\u54b3\u55fd",
  pinyin1: "kesou",
  pinyin2: "ks"
},
{
  name: "\u6050\u60e7\u75c7",
  pinyin1: "kongjuzheng",
  pinyin2: "kjz"
},
{
  name: "\u53e3\u8154\u767d\u6591\u75c5",
  pinyin1: "kouqiangbaibanbing",
  pinyin2: "kqbbb"
},
{
  name: "\u53e3\u8154\u6241\u5e73\u82d4\u85d3",
  pinyin1: "kouqiangbianpingtaixian",
  pinyin2: "kqbptx"
},
{
  name: "\u53e3\u8154\u5355\u7eaf\u6027\u75b1\u75b9",
  pinyin1: "kouqiangdanchunxingpaozhen",
  pinyin2: "kqdcxpz"
},
{
  name: "\u53e3\u8154\u988c\u9762\u90e8\u56ca\u80bf",
  pinyin1: "kouqianghemianbunangzhong",
  pinyin2: "kqhmbnz"
},
{
  name: "\u53e3\u8154\u988c\u9762\u90e8\u635f\u4f24",
  pinyin1: "kouqianghemianbusunshang",
  pinyin2: "kqhmbss"
},
{
  name: "\u53e3\u8154\u988c\u9762\u90e8\u8840\u7ba1\u7624",
  pinyin1: "kouqianghemianbuxueguanliu",
  pinyin2: "kqhmbxgl"
},
{
  name: "\u53e3\u8154\u988c\u9762\u90e8\u80bf\u7624",
  pinyin1: "kouqianghemianbuzhongliu",
  pinyin2: "kqhmbzl"
},
{
  name: "\u53e3\u8154\u6e83\u75a1",
  pinyin1: "kouqiangkuiyang",
  pinyin2: "kqky"
},
{
  name: "\u53e3\u8154\u4fee\u590d",
  pinyin1: "kouqiangxiufu",
  pinyin2: "kqxf"
},
{
  name: "\u53e3\u8154\u7c98\u819c\u75c5",
  pinyin1: "kouqiangzhanmobing",
  pinyin2: "kqzmb"
},
{
  name: "\u6e83\u75a1\u6027\u7ed3\u80a0\u708e",
  pinyin1: "kuiyangxingjiechangyan",
  pinyin2: "kyxjcy"
},
{
  name: "\u9611\u5c3e\u708e",
  pinyin1: "lanweiyan",
  pinyin2: "lwy"
},
{
  name: "\u72fc\u75ae\u6027\u80be\u708e",
  pinyin1: "langchuangxingshenyan",
  pinyin2: "lcxsy"
},
{
  name: "\u8001\u82b1\u773c",
  pinyin1: "laohuayan",
  pinyin2: "lhy"
},
{
  name: "\u8001\u5e74\u75c5",
  pinyin1: "laonianbing",
  pinyin2: "lnb"
},
{
  name: "\u8001\u5e74\u6027\u804b",
  pinyin1: "laonianxinglong",
  pinyin2: "lnxl"
},
{
  name: "\u6cea\u9053\u963b\u585e",
  pinyin1: "leidaozusai",
  pinyin2: "ldzs"
},
{
  name: "\u6cea\u56ca\u708e",
  pinyin1: "leinangyan",
  pinyin2: "lny"
},
{
  name: "\u7c7b\u98ce\u6e7f\u6027\u5173\u8282\u708e",
  pinyin1: "leifengshixingguanjieyan",
  pinyin2: "lfsxgjy"
},
{
  name: "\u4e24\u6027\u7578\u5f62",
  pinyin1: "liangxingjixing",
  pinyin2: "lxjx"
},
{
  name: "\u6dcb\u5df4\u7624",
  pinyin1: "linbaliu",
  pinyin2: "lbl"
},
{
  name: "\u6dcb\u75c5",
  pinyin1: "linbing",
  pinyin2: "lb"
},
{
  name: "\u6f0f\u6597\u80f8",
  pinyin1: "loudouxiong",
  pinyin2: "ldx"
},
{
  name: "\u9885\u5e95\u80bf\u7624",
  pinyin1: "ludizhongliu",
  pinyin2: "ldzl"
},
{
  name: "\u9885\u54bd\u7ba1\u7624",
  pinyin1: "luyanguanliu",
  pinyin2: "lygl"
},
{
  name: "\u5375\u5de2\u764c",
  pinyin1: "luanchaoai",
  pinyin2: "lca"
},
{
  name: "\u5375\u5de2\u56ca\u80bf",
  pinyin1: "luanchaonangzhong",
  pinyin2: "lcnz"
},
{
  name: "\u5375\u5de2\u65e9\u8870",
  pinyin1: "luanchaozaoshuai",
  pinyin2: "lczs"
},
{
  name: "\u5375\u5de2\u80bf\u7624",
  pinyin1: "luanchaozhongliu",
  pinyin2: "lczl"
},
{
  name: "\u9ebb\u9189",
  pinyin1: "mazui",
  pinyin2: "mz"
},
{
  name: "\u9ea6\u7c92\u80bf",
  pinyin1: "mailizhong",
  pinyin2: "mlz"
},
{
  name: "\u8109\u7ba1\u708e",
  pinyin1: "maiguanyan",
  pinyin2: "mgy"
},
{
  name: "\u6162\u6027\u8179\u6cfb",
  pinyin1: "manxingfuxie",
  pinyin2: "mxfx"
},
{
  name: "\u6162\u6027\u7c92\u7ec6\u80de\u767d\u8840\u75c5",
  pinyin1: "manxinglixibaobaixuebing",
  pinyin2: "mxlxbbxb"
},
{
  name: "\u6162\u6027\u6d45\u8868\u6027\u80c3\u708e",
  pinyin1: "manxingqianbiaoxingweiyan",
  pinyin2: "mxqbxwy"
},
{
  name: "\u6162\u6027\u840e\u7f29\u6027\u80c3\u708e",
  pinyin1: "manxingweisuoxingweiyan",
  pinyin2: "mxwsxwy"
},
{
  name: "\u6162\u6027\u80c3\u708e",
  pinyin1: "manxingweiyan",
  pinyin2: "mxwy"
},
{
  name: "\u6162\u6027\u54bd\u708e",
  pinyin1: "manxingyanyan",
  pinyin2: "mxyy"
},
{
  name: "\u6162\u6027\u652f\u6c14\u7ba1\u708e",
  pinyin1: "manxingzhiqiguanyan",
  pinyin2: "mxzqgy"
},
{
  name: "\u6162\u963b\u80ba",
  pinyin1: "manzufei",
  pinyin2: "mzf"
},
{
  name: "\u6bdb\u56ca\u708e",
  pinyin1: "maonangyan",
  pinyin2: "mny"
},
{
  name: "\u6885\u6bd2",
  pinyin1: "meidu",
  pinyin2: "md"
},
{
  name: "\u9709\u83cc\u6027\u9634\u9053\u708e",
  pinyin1: "meijunxingyindaoyan",
  pinyin2: "mjxydy"
},
{
  name: "\u95e8\u9759\u8109\u9ad8\u538b\u75c7",
  pinyin1: "menjingmaigaoyazheng",
  pinyin2: "mjmgyz"
},
{
  name: "\u9762\u90e8\u8f6e\u5ed3\u6574\u5f62",
  pinyin1: "mianbulunkuozhengxing",
  pinyin2: "mblkzx"
},
{
  name: "\u9762\u808c\u75c9\u631b",
  pinyin1: "mianjijingluan",
  pinyin2: "mjjl"
},
{
  name: "\u9762\u762b",
  pinyin1: "miantan",
  pinyin2: "mt"
},
{
  name: "\u62c7\u5916\u7ffb",
  pinyin1: "muwaifan",
  pinyin2: "mwf"
},
{
  name: "\u5185\u8033\u7729\u6655",
  pinyin1: "neierxuanyun",
  pinyin2: "nexy"
},
{
  name: "\u5185\u5206\u6ccc\u5931\u8c03",
  pinyin1: "neifenmishidiao",
  pinyin2: "nfmsd"
},
{
  name: "\u5185\u7726\u8d58\u76ae",
  pinyin1: "neizizhuipi",
  pinyin2: "nzzp"
},
{
  name: "\u7537\u6027\u4e0d\u80b2",
  pinyin1: "nanxingbuyu",
  pinyin2: "nxby"
},
{
  name: "\u7537\u6027\u4e73\u623f\u80a5\u5927",
  pinyin1: "nanxingrufangfeida",
  pinyin2: "nxrffd"
},
{
  name: "\u7537\u6027\u751f\u6b96\u5668\u5b98\u611f\u67d3",
  pinyin1: "nanxingshengzhiqiguanganran",
  pinyin2: "nxszqggr"
},
{
  name: "\u7537\u6027\u751f\u6b96\u5668\u7578\u5f62",
  pinyin1: "nanxingshengzhiqijixing",
  pinyin2: "nxszqjx"
},
{
  name: "\u7537\u6027\u578b\u79c3\u53d1",
  pinyin1: "nanxingxingtufa",
  pinyin2: "nxxtf"
},
{
  name: "\u96be\u6cbb\u6027\u4f24\u53e3",
  pinyin1: "nanzhixingshangkou",
  pinyin2: "nzxsk"
},
{
  name: "\u8111\u51fa\u8840",
  pinyin1: "naochuxue",
  pinyin2: "ncx"
},
{
  name: "\u8111\u52a8\u8109\u7624",
  pinyin1: "naodongmailiu",
  pinyin2: "ndml"
},
{
  name: "\u8111\u53d1\u80b2\u4e0d\u826f",
  pinyin1: "naofayubuliang",
  pinyin2: "nfybl"
},
{
  name: "\u8111\u6897\u585e",
  pinyin1: "naogengsai",
  pinyin2: "ngs"
},
{
  name: "\u8111\u4f9b\u8840\u4e0d\u8db3",
  pinyin1: "naogongxuebuzu",
  pinyin2: "ngxbz"
},
{
  name: "\u8111\u79ef\u6c34",
  pinyin1: "naojishui",
  pinyin2: "njs"
},
{
  name: "\u8111\u819c\u7624",
  pinyin1: "naomoliu",
  pinyin2: "nml"
},
{
  name: "\u8111\u6813\u585e",
  pinyin1: "naoshuansai",
  pinyin2: "nss"
},
{
  name: "\u8111\u5916\u4f24",
  pinyin1: "naowaishang",
  pinyin2: "nws"
},
{
  name: "\u8111\u8840\u7ba1\u75c5",
  pinyin1: "naoxueguanbing",
  pinyin2: "nxgb"
},
{
  name: "\u8111\u8840\u7ba1\u7578\u5f62",
  pinyin1: "naoxueguanjixing",
  pinyin2: "nxgjx"
},
{
  name: "\u8111\u8840\u6813",
  pinyin1: "naoxueshuan",
  pinyin2: "nxs"
},
{
  name: "\u8111\u708e",
  pinyin1: "naoyan",
  pinyin2: "ny"
},
{
  name: "\u8111\u80bf\u7624",
  pinyin1: "naozhongliu",
  pinyin2: "nzl"
},
{
  name: "\u62df\u9664\u866b\u83ca\u916f\u7c7b\u6740\u866b\u836f\u4e2d",
  pinyin1: "nichuchongjuzhileishachongyaozhong",
  pinyin2: "nccjzlscyz"
},
{
  name: "\u5c3f\u9053\u4e0b\u88c2",
  pinyin1: "niaodaoxialie",
  pinyin2: "ndxl"
},
{
  name: "\u5c3f\u6bd2\u75c7",
  pinyin1: "niaoduzheng",
  pinyin2: "ndz"
},
{
  name: "\u5c3f\u7ed3\u77f3",
  pinyin1: "niaojieshi",
  pinyin2: "njs"
},
{
  name: "\u5c3f\u8def\u611f\u67d3",
  pinyin1: "niaoluganran",
  pinyin2: "nlgr"
},
{
  name: "\u5c3f\u5931\u7981",
  pinyin1: "niaoshijin",
  pinyin2: "nsj"
},
{
  name: "\u989e\u4e0b\u988c\u5173\u8282\u75c5",
  pinyin1: "niexiaheguanjiebing",
  pinyin2: "nxhgjb"
},
{
  name: "\u5973\u6027\u751f\u6b96\u5668\u5b98\u521b\u4f24",
  pinyin1: "nvxingshengzhiqiguanchuangshang",
  pinyin2: "nxszqgcs"
},
{
  name: "\u5e15\u91d1\u68ee",
  pinyin1: "pajinsen",
  pinyin2: "pjs"
},
{
  name: "\u76c6\u8154\u708e",
  pinyin1: "penqiangyan",
  pinyin2: "pqy"
},
{
  name: "\u76ae\u80a4\u8fc7\u654f",
  pinyin1: "pifuguomin",
  pinyin2: "pfgm"
},
{
  name: "\u76ae\u80a4\u7619\u75d2",
  pinyin1: "pifusaoyang",
  pinyin2: "pfsy"
},
{
  name: "\u76ae\u80a4\u6574\u5f62",
  pinyin1: "pifuzhengxing",
  pinyin2: "pfzx"
},
{
  name: "\u76ae\u808c\u708e",
  pinyin1: "pijiyan",
  pinyin2: "pjy"
},
{
  name: "\u76ae\u708e",
  pinyin1: "piyan",
  pinyin2: "py"
},
{
  name: "\u504f\u762b",
  pinyin1: "piantan",
  pinyin2: "pt"
},
{
  name: "\u504f\u5934\u75db",
  pinyin1: "piantoutong",
  pinyin2: "ptt"
},
{
  name: "\u8d2b\u8840",
  pinyin1: "pinxue",
  pinyin2: "px"
},
{
  name: "\u8461\u8404\u819c\u708e",
  pinyin1: "putaomoyan",
  pinyin2: "ptmy"
},
{
  name: "\u8461\u8404\u819c\u80bf\u7624",
  pinyin1: "putaomozhongliu",
  pinyin2: "ptmzl"
},
{
  name: "\u8461\u8404\u80ce",
  pinyin1: "putaotai",
  pinyin2: "ptt"
},
{
  name: "\u6c14\u80f8",
  pinyin1: "qixiong",
  pinyin2: "qx"
},
{
  name: "\u94c5\u4e2d\u6bd2",
  pinyin1: "qianzhongdu",
  pinyin2: "qzd"
},
{
  name: "\u524d\u5217\u817a\u764c",
  pinyin1: "qianliexianai",
  pinyin2: "qlxa"
},
{
  name: "\u524d\u5217\u817a\u708e",
  pinyin1: "qianliexianyan",
  pinyin2: "qlxy"
},
{
  name: "\u524d\u5217\u817a\u589e\u751f",
  pinyin1: "qianliexianzengsheng",
  pinyin2: "qlxzs"
},
{
  name: "\u8368\u9ebb\u75b9",
  pinyin1: "qianmazhen",
  pinyin2: "qmz"
},
{
  name: "\u5f3a\u8feb\u75c7",
  pinyin1: "qiangpozheng",
  pinyin2: "qpz"
},
{
  name: "\u5f3a\u76f4\u6027\u810a\u67f1\u708e",
  pinyin1: "qiangzhixingjizhuyan",
  pinyin2: "qzxjzy"
},
{
  name: "\u9752\u5149\u773c",
  pinyin1: "qingguangyan",
  pinyin2: "qgy"
},
{
  name: "\u60c5\u611f\u969c\u788d",
  pinyin1: "qingganzhangai",
  pinyin2: "qgza"
},
{
  name: "\u5c48\u5149\u4e0d\u6b63",
  pinyin1: "quguangbuzheng",
  pinyin2: "qgbz"
},
{
  name: "\u9f8b\u9f7f",
  pinyin1: "quchi",
  pinyin2: "qc"
},
{
  name: "\u96c0\u6591",
  pinyin1: "queban",
  pinyin2: "qb"
},
{
  name: "\u4eba\u5de5\u5173\u8282\u7f6e\u6362\u672f",
  pinyin1: "rengongguanjiezhihuanshu",
  pinyin2: "rggjzhs"
},
{
  name: "\u4eba\u6d41",
  pinyin1: "renliu",
  pinyin2: "rl"
},
{
  name: "\u598a\u9ad8\u75c7",
  pinyin1: "rengaozheng",
  pinyin2: "rgz"
},
{
  name: "\u598a\u5a20\u5408\u5e76\u75c7",
  pinyin1: "renshenhebingzheng",
  pinyin2: "rshbz"
},
{
  name: "\u97e7\u5e26\u635f\u4f24",
  pinyin1: "rendaisunshang",
  pinyin2: "rdss"
},
{
  name: "\u65e5\u5149\u6027\u76ae\u708e",
  pinyin1: "riguangxingpiyan",
  pinyin2: "rgxpy"
},
{
  name: "\u7ed2\u6bdb\u819c\u764c",
  pinyin1: "rongmaomoai",
  pinyin2: "rmma"
},
{
  name: "\u4e73\u817a\u764c",
  pinyin1: "ruxianai",
  pinyin2: "rxa"
},
{
  name: "\u4e73\u817a\u7ea4\u7ef4\u7624",
  pinyin1: "ruxianxianweiliu",
  pinyin2: "rxxwl"
},
{
  name: "\u4e73\u817a\u708e",
  pinyin1: "ruxianyan",
  pinyin2: "rxy"
},
{
  name: "\u4e73\u817a\u589e\u751f",
  pinyin1: "ruxianzengsheng",
  pinyin2: "rxzs"
},
{
  name: "\u4e73\u817a\u80bf\u7624",
  pinyin1: "ruxianzhongliu",
  pinyin2: "rxzl"
},
{
  name: "\u8925\u75ae",
  pinyin1: "ruchuang",
  pinyin2: "rc"
},
{
  name: "\u8f6f\u9aa8\u7624",
  pinyin1: "ruanguliu",
  pinyin2: "rgl"
},
{
  name: "\u5f31\u89c6",
  pinyin1: "ruoshi",
  pinyin2: "rs"
},
{
  name: "\u4e09\u53c9\u795e\u7ecf\u75db",
  pinyin1: "sanchashenjingtong",
  pinyin2: "scsjt"
},
{
  name: "\u4e09\u9ad8\u75c7",
  pinyin1: "sangaozheng",
  pinyin2: "sgz"
},
{
  name: "\u6563\u5149",
  pinyin1: "sanguang",
  pinyin2: "sg"
},
{
  name: "\u7619\u75d2\u75c7",
  pinyin1: "saoyangzheng",
  pinyin2: "syz"
},
{
  name: "\u759d\u6c14",
  pinyin1: "shanqi",
  pinyin2: "sq"
},
{
  name: "\u4e0a\u7751\u4e0b\u5782",
  pinyin1: "shangjianxiachui",
  pinyin2: "sjxc"
},
{
  name: "\u70e7\u4f24",
  pinyin1: "shaoshang",
  pinyin2: "ss"
},
{
  name: "\u70e7\u4f24\u6574\u5f62",
  pinyin1: "shaoshangzhengxing",
  pinyin2: "sszx"
},
{
  name: "\u820c\u764c",
  pinyin1: "sheai",
  pinyin2: "sa"
},
{
  name: "\u820c\u7cfb\u5e26\u8fc7\u77ed",
  pinyin1: "shexidaiguoduan",
  pinyin2: "sxdgd"
},
{
  name: "\u795e\u7ecf\u5b98\u80fd\u75c7",
  pinyin1: "shenjingguannengzheng",
  pinyin2: "sjgnz"
},
{
  name: "\u795e\u7ecf\u5361\u538b\u7efc\u5408\u5f81",
  pinyin1: "shenjingkayazonghezheng",
  pinyin2: "sjkyzhz"
},
{
  name: "\u795e\u7ecf\u6027\u76ae\u708e",
  pinyin1: "shenjingxingpiyan",
  pinyin2: "sjxpy"
},
{
  name: "\u80be\u75c5",
  pinyin1: "shenbing",
  pinyin2: "sb"
},
{
  name: "\u80be\u75c5\u7efc\u5408\u5f81",
  pinyin1: "shenbingzonghezheng",
  pinyin2: "sbzhz"
},
{
  name: "\u80be\u529f\u80fd\u8870\u7aed",
  pinyin1: "shengongnengshuaijie",
  pinyin2: "sgnsj"
},
{
  name: "\u80be\u79ef\u6c34",
  pinyin1: "shenjishui",
  pinyin2: "sjs"
},
{
  name: "\u80be\u7ed3\u77f3",
  pinyin1: "shenjieshi",
  pinyin2: "sjs"
},
{
  name: "\u80be\u56ca\u80bf",
  pinyin1: "shennangzhong",
  pinyin2: "snz"
},
{
  name: "\u80be\u4e0a\u817a\u80bf\u7624",
  pinyin1: "shenshangxianzhongliu",
  pinyin2: "ssxzl"
},
{
  name: "\u80be\u5c0f\u7403\u80be\u708e",
  pinyin1: "shenxiaoqiushenyan",
  pinyin2: "sxqsy"
},
{
  name: "\u80be\u708e",
  pinyin1: "shenyan",
  pinyin2: "sy"
},
{
  name: "\u80be\u80bf\u7624",
  pinyin1: "shenzhongliu",
  pinyin2: "szl"
},
{
  name: "\u751f\u6b96\u5668\u7ed3\u6838",
  pinyin1: "shengzhiqijiehe",
  pinyin2: "szqjh"
},
{
  name: "\u751f\u6b96\u5668\u75b1\u75b9",
  pinyin1: "shengzhiqipaozhen",
  pinyin2: "szqpz"
},
{
  name: "\u751f\u6b96\u7ec6\u80de\u7624",
  pinyin1: "shengzhixibaoliu",
  pinyin2: "szxbl"
},
{
  name: "\u58f0\u5e26\u606f\u8089",
  pinyin1: "shengdaixirou",
  pinyin2: "sdxr"
},
{
  name: "\u5931\u7720",
  pinyin1: "shimian",
  pinyin2: "sm"
},
{
  name: "\u6e7f\u75b9",
  pinyin1: "shizhen",
  pinyin2: "sz"
},
{
  name: "\u5341\u4e8c\u6307\u80a0\u6e83\u75a1",
  pinyin1: "shierzhichangkuiyang",
  pinyin2: "sezcky"
},
{
  name: "\u98df\u9053\u764c",
  pinyin1: "shidaoai",
  pinyin2: "sda"
},
{
  name: "\u89c6\u7f51\u819c\u75c5",
  pinyin1: "shiwangmobing",
  pinyin2: "swmb"
},
{
  name: "\u89c6\u7f51\u819c\u6bcd\u7ec6\u80de\u7624",
  pinyin1: "shiwangmomuxibaoliu",
  pinyin2: "swmmxbl"
},
{
  name: "\u89c6\u7f51\u819c\u8131\u843d",
  pinyin1: "shiwangmotuoluo",
  pinyin2: "swmtl"
},
{
  name: "\u5ba4\u95f4\u9694\u7f3a\u635f",
  pinyin1: "shijiangequesun",
  pinyin2: "sjgqs"
},
{
  name: "\u624b\u5916\u4f24",
  pinyin1: "shouwaishang",
  pinyin2: "sws"
},
{
  name: "\u624b\u7663",
  pinyin1: "shouxuan",
  pinyin2: "sx"
},
{
  name: "\u624b\u8db3\u53e3\u75c5",
  pinyin1: "shouzukoubing",
  pinyin2: "szkb"
},
{
  name: "\u8f93\u5375\u7ba1\u5835\u585e",
  pinyin1: "shuluanguandusai",
  pinyin2: "slgds"
},
{
  name: "\u8f93\u5c3f\u7ba1\u7ed3\u77f3",
  pinyin1: "shuniaoguanjieshi",
  pinyin2: "sngjs"
},
{
  name: "\u7761\u7720\u547c\u5438\u6682\u505c\u7efc\u5408\u75c7",
  pinyin1: "shuimianhuxizantingzonghezheng",
  pinyin2: "smhxztzhz"
},
{
  name: "\u80ce\u513f\u5148\u5929\u7578\u5f62",
  pinyin1: "taierxiantianjixing",
  pinyin2: "textjx"
},
{
  name: "\u80ce\u513f\u5148\u5fc3\u75c5\u8bca\u65ad",
  pinyin1: "taierxianxinbingzhenduan",
  pinyin2: "texxbzd"
},
{
  name: "\u80ce\u505c",
  pinyin1: "taiting",
  pinyin2: "tt"
},
{
  name: "\u592a\u7530\u75e3",
  pinyin1: "taitianzhi",
  pinyin2: "ttz"
},
{
  name: "\u7cd6\u5c3f\u75c5",
  pinyin1: "tangniaobing",
  pinyin2: "tnb"
},
{
  name: "\u7cd6\u5c3f\u75c5\u795e\u7ecf\u75c5\u53d8",
  pinyin1: "tangniaobingshenjingbingbian",
  pinyin2: "tnbsjbb"
},
{
  name: "\u7cd6\u5c3f\u75c5\u80be\u75c5",
  pinyin1: "tangniaobingshenbing",
  pinyin2: "tnbsb"
},
{
  name: "\u7cd6\u5c3f\u75c5\u89c6\u7f51\u819c\u75c5\u53d8",
  pinyin1: "tangniaobingshiwangmobingbian",
  pinyin2: "tnbswmbb"
},
{
  name: "\u7cd6\u5c3f\u75c5\u8db3",
  pinyin1: "tangniaobingzu",
  pinyin2: "tnbz"
},
{
  name: "\u70eb\u4f24",
  pinyin1: "tangshang",
  pinyin2: "ts"
},
{
  name: "\u7279\u7eb3\u7efc\u5408\u5f81",
  pinyin1: "tenazonghezheng",
  pinyin2: "tnzhz"
},
{
  name: "\u75bc\u75db",
  pinyin1: "tengtong",
  pinyin2: "tt"
},
{
  name: "\u4f53\u68c0",
  pinyin1: "tijian",
  pinyin2: "tj"
},
{
  name: "\u4f53\u7663",
  pinyin1: "tixuan",
  pinyin2: "tx"
},
{
  name: "\u542c\u795e\u7ecf\u7624",
  pinyin1: "tingshenjingliu",
  pinyin2: "tsjl"
},
{
  name: "\u75db\u98ce",
  pinyin1: "tongfeng",
  pinyin2: "tf"
},
{
  name: "\u75db\u7ecf",
  pinyin1: "tongjing",
  pinyin2: "tj"
},
{
  name: "\u5934\u75db",
  pinyin1: "toutong",
  pinyin2: "tt"
},
{
  name: "\u5934\u7663",
  pinyin1: "touxuan",
  pinyin2: "tx"
},
{
  name: "\u5934\u6655",
  pinyin1: "touyun",
  pinyin2: "ty"
},
{
  name: "\u8131\u53d1",
  pinyin1: "tuofa",
  pinyin2: "tf"
},
{
  name: "\u5916\u9634\u5c16\u9510\u6e7f\u75a3",
  pinyin1: "waiyinjianruishiyou",
  pinyin2: "wyjrsy"
},
{
  name: "\u5916\u9634\u7619\u75d2",
  pinyin1: "waiyinsaoyang",
  pinyin2: "wysy"
},
{
  name: "\u7f51\u763e",
  pinyin1: "wangyin",
  pinyin2: "wy"
},
{
  name: "\u80c3\u764c",
  pinyin1: "weiai",
  pinyin2: "wa"
},
{
  name: "\u80c3\u75c5",
  pinyin1: "weibing",
  pinyin2: "wb"
},
{
  name: "\u80c3\u51fa\u8840",
  pinyin1: "weichuxue",
  pinyin2: "wcx"
},
{
  name: "\u80c3\u6e83\u75a1",
  pinyin1: "weikuiyang",
  pinyin2: "wky"
},
{
  name: "\u80c3\u708e",
  pinyin1: "weiyan",
  pinyin2: "wy"
},
{
  name: "\u819d\u5173\u8282\u534a\u6708\u677f\u635f\u4f24",
  pinyin1: "xiguanjiebanyuebansunshang",
  pinyin2: "xgjbybss"
},
{
  name: "\u819d\u5173\u8282\u97e7\u5e26\u635f\u4f24",
  pinyin1: "xiguanjierendaisunshang",
  pinyin2: "xgjrdss"
},
{
  name: "\u819d\u5173\u8282\u635f\u4f24",
  pinyin1: "xiguanjiesunshang",
  pinyin2: "xgjss"
},
{
  name: "\u4e60\u60ef\u6027\u6d41\u4ea7",
  pinyin1: "xiguanxingliuchan",
  pinyin2: "xgxlc"
},
{
  name: "\u7cfb\u7edf\u6027\u7ea2\u6591\u72fc\u75ae",
  pinyin1: "xitongxinghongbanlangchuang",
  pinyin2: "xtxhblc"
},
{
  name: "\u7ec6\u83cc\u6027\u75e2\u75be",
  pinyin1: "xijunxingliji",
  pinyin2: "xjxlj"
},
{
  name: "\u4e0b\u80a2\u9759\u8109\u8840\u6813",
  pinyin1: "xiazhijingmaixueshuan",
  pinyin2: "xzjmxs"
},
{
  name: "\u4e0b\u80a2\u6dcb\u5df4\u6c34\u80bf",
  pinyin1: "xiazhilinbashuizhong",
  pinyin2: "xzlbsz"
},
{
  name: "\u590f\u5b63\u76ae\u708e",
  pinyin1: "xiajipiyan",
  pinyin2: "xjpy"
},
{
  name: "\u5148\u5929\u6027\u5e76\u6307\u591a\u6307\u7578\u5f62",
  pinyin1: "xiantianxingbingzhiduozhijixing",
  pinyin2: "xtxbzdzjx"
},
{
  name: "\u5148\u5929\u6027\u80ba\u56ca\u6027\u75c5",
  pinyin1: "xiantianxingfeinangxingbing",
  pinyin2: "xtxfnxb"
},
{
  name: "\u5148\u5929\u6027\u9aa8\u4e0e\u5173\u8282\u7578\u5f62",
  pinyin1: "xiantianxingguyuguanjiejixing",
  pinyin2: "xtxgygjjx"
},
{
  name: "\u5148\u5929\u6027\u808c\u6027\u659c\u9888",
  pinyin1: "xiantianxingjixingxiejing",
  pinyin2: "xtxjxxj"
},
{
  name: "\u5148\u5929\u6027\u5de8\u7ed3\u80a0",
  pinyin1: "xiantianxingjujiechang",
  pinyin2: "xtxjjc"
},
{
  name: "\u5148\u5929\u6027\u9a6c\u8e44\u5185\u7ffb\u8db3",
  pinyin1: "xiantianxingmatineifanzu",
  pinyin2: "xtxmtnfz"
},
{
  name: "\u5148\u5929\u6027\u6ccc\u5c3f\u7cfb\u7578\u5f62",
  pinyin1: "xiantianxingminiaoxijixing",
  pinyin2: "xtxmnxjx"
},
{
  name: "\u5148\u5929\u6027\u65e0\u9634\u9053",
  pinyin1: "xiantianxingwuyindao",
  pinyin2: "xtxwyd"
},
{
  name: "\u5148\u5929\u6027\u819d\u5173\u8282\u7578\u5f62",
  pinyin1: "xiantianxingxiguanjiejixing",
  pinyin2: "xtxxgjjx"
},
{
  name: "\u5148\u5929\u6027\u5fc3\u810f\u75c5",
  pinyin1: "xiantianxingxinzangbing",
  pinyin2: "xtxxzb"
},
{
  name: "\u5148\u5929\u6027\u8db3\u7578\u5f62",
  pinyin1: "xiantianxingzujixing",
  pinyin2: "xtxzjx"
},
{
  name: "\u5148\u5146\u6d41\u4ea7",
  pinyin1: "xianzhaoliuchan",
  pinyin2: "xzlc"
},
{
  name: "\u7ea4\u7ef4\u7624",
  pinyin1: "xianweiliu",
  pinyin2: "xwl"
},
{
  name: "\u9c9c\u7ea2\u6591\u75e3",
  pinyin1: "xianhongbanzhi",
  pinyin2: "xhbz"
},
{
  name: "\u9730\u7c92\u80bf",
  pinyin1: "xianlizhong",
  pinyin2: "xlz"
},
{
  name: "\u6d88\u5316\u4e0d\u826f",
  pinyin1: "xiaohuabuliang",
  pinyin2: "xhbl"
},
{
  name: "\u6d88\u5316\u9053\u51fa\u8840",
  pinyin1: "xiaohuadaochuxue",
  pinyin2: "xhdcx"
},
{
  name: "\u5c0f\u513f\u9f3b\u708e",
  pinyin1: "xiaoerbiyan",
  pinyin2: "xeby"
},
{
  name: "\u5c0f\u513f\u80a0\u708e",
  pinyin1: "xiaoerchangyan",
  pinyin2: "xecy"
},
{
  name: "\u5c0f\u513f\u766b\u75eb",
  pinyin1: "xiaoerdianxian",
  pinyin2: "xedx"
},
{
  name: "\u5c0f\u513f\u591a\u52a8\u75c7",
  pinyin1: "xiaoerduodongzheng",
  pinyin2: "xeddz"
},
{
  name: "\u5c0f\u513f\u8033\u804b",
  pinyin1: "xiaoererlong",
  pinyin2: "xeel"
},
{
  name: "\u5c0f\u513f\u80ba\u708e",
  pinyin1: "xiaoerfeiyan",
  pinyin2: "xefy"
},
{
  name: "\u5c0f\u513f\u80ba\u708e\u652f\u539f\u4f53\u80ba\u708e",
  pinyin1: "xiaoerfeiyanzhiyuantifeiyan",
  pinyin2: "xefyzytfy"
},
{
  name: "\u5c0f\u513f\u8179\u6cfb",
  pinyin1: "xiaoerfuxie",
  pinyin2: "xefx"
},
{
  name: "\u5c0f\u513f\u611f\u5192",
  pinyin1: "xiaoerganmao",
  pinyin2: "xegm"
},
{
  name: "\u5c0f\u513f\u611f\u67d3\u6027\u5fc3\u5185\u819c\u708e",
  pinyin1: "xiaoerganranxingxinneimoyan",
  pinyin2: "xegrxxnmy"
},
{
  name: "\u5c0f\u513f\u9aa8\u6298",
  pinyin1: "xiaoerguzhe",
  pinyin2: "xegz"
},
{
  name: "\u5c0f\u513f\u6025\u6027\u5589\u708e",
  pinyin1: "xiaoerjixinghouyan",
  pinyin2: "xejxhy"
},
{
  name: "\u5c0f\u513f\u7532\u72b6\u817a\u75be\u75c5",
  pinyin1: "xiaoerjiazhuangxianjibing",
  pinyin2: "xejzxjb"
},
{
  name: "\u5c0f\u513f\u54b3\u55fd",
  pinyin1: "xiaoerkesou",
  pinyin2: "xeks"
},
{
  name: "\u5c0f\u513f\u7c7b\u98ce\u6e7f\u75c5",
  pinyin1: "xiaoerleifengshibing",
  pinyin2: "xelfsb"
},
{
  name: "\u5c0f\u513f\u8111\u762b",
  pinyin1: "xiaoernaotan",
  pinyin2: "xent"
},
{
  name: "\u5c0f\u513f\u5f31\u89c6",
  pinyin1: "xiaoerruoshi",
  pinyin2: "xers"
},
{
  name: "\u5c0f\u513f\u759d\u6c14",
  pinyin1: "xiaoershanqi",
  pinyin2: "xesq"
},
{
  name: "\u5c0f\u513f\u80be\u75c5",
  pinyin1: "xiaoershenbing",
  pinyin2: "xesb"
},
{
  name: "\u5c0f\u513f\u80be\u75c5\u7efc\u5408\u5f81",
  pinyin1: "xiaoershenbingzonghezheng",
  pinyin2: "xesbzhz"
},
{
  name: "\u5c0f\u513f\u80be\u79ef\u6c34",
  pinyin1: "xiaoershenjishui",
  pinyin2: "xesjs"
},
{
  name: "\u5c0f\u513f\u6e7f\u75b9",
  pinyin1: "xiaoershizhen",
  pinyin2: "xesz"
},
{
  name: "\u5c0f\u513f\u80c3\u708e",
  pinyin1: "xiaoerweiyan",
  pinyin2: "xewy"
},
{
  name: "\u5c0f\u513f\u5148\u5929\u6027\u9acb\u5173\u8282\u8131\u4f4d",
  pinyin1: "xiaoerxiantianxingkuanguanjietuowei",
  pinyin2: "xextxkgjtw"
},
{
  name: "\u5c0f\u513f\u817a\u6837\u4f53\u80a5\u5927",
  pinyin1: "xiaoerxianyangtifeida",
  pinyin2: "xexytfd"
},
{
  name: "\u5c0f\u513f\u6d88\u5316\u4e0d\u826f",
  pinyin1: "xiaoerxiaohuabuliang",
  pinyin2: "xexhbl"
},
{
  name: "\u5c0f\u513f\u54ee\u5598",
  pinyin1: "xiaoerxiaochuan",
  pinyin2: "xexc"
},
{
  name: "\u5c0f\u513f\u659c\u89c6",
  pinyin1: "xiaoerxieshi",
  pinyin2: "xexs"
},
{
  name: "\u5c0f\u513f\u5fc3\u808c\u708e",
  pinyin1: "xiaoerxinjiyan",
  pinyin2: "xexjy"
},
{
  name: "\u5c0f\u513f\u5fc3\u5f8b\u5931\u5e38",
  pinyin1: "xiaoerxinlvshichang",
  pinyin2: "xexlsc"
},
{
  name: "\u5c0f\u513f\u8840\u5c3f",
  pinyin1: "xiaoerxueniao",
  pinyin2: "xexn"
},
{
  name: "\u5c0f\u513f\u538c\u98df",
  pinyin1: "xiaoeryanshi",
  pinyin2: "xeys"
},
{
  name: "\u5c0f\u513f\u9057\u5c3f",
  pinyin1: "xiaoeryiniao",
  pinyin2: "xeyn"
},
{
  name: "\u5c0f\u513f\u652f\u6c14\u7ba1\u80ba\u708e",
  pinyin1: "xiaoerzhiqiguanfeiyan",
  pinyin2: "xezqgfy"
},
{
  name: "\u5c0f\u513f\u652f\u6c14\u7ba1\u708e",
  pinyin1: "xiaoerzhiqiguanyan",
  pinyin2: "xezqgy"
},
{
  name: "\u5c0f\u513f\u7d2b\u765c\u6027\u80be\u708e",
  pinyin1: "xiaoerzidianxingshenyan",
  pinyin2: "xezdxsy"
},
{
  name: "\u5c0f\u7751\u88c2",
  pinyin1: "xiaojianlie",
  pinyin2: "xjl"
},
{
  name: "\u5c0f\u4e09\u9633",
  pinyin1: "xiaosanyang",
  pinyin2: "xsy"
},
{
  name: "\u54ee\u5598",
  pinyin1: "xiaochuan",
  pinyin2: "xc"
},
{
  name: "\u659c\u89c6",
  pinyin1: "xieshi",
  pinyin2: "xs"
},
{
  name: "\u5fc3\u808c\u75c5",
  pinyin1: "xinjibing",
  pinyin2: "xjb"
},
{
  name: "\u5fc3\u808c\u6897\u6b7b",
  pinyin1: "xinjigengsi",
  pinyin2: "xjgs"
},
{
  name: "\u5fc3\u808c\u7f3a\u8840",
  pinyin1: "xinjiquexue",
  pinyin2: "xjqx"
},
{
  name: "\u5fc3\u808c\u708e",
  pinyin1: "xinjiyan",
  pinyin2: "xjy"
},
{
  name: "\u5fc3\u808c\u81f4\u5bc6\u5316\u4e0d\u5168",
  pinyin1: "xinjizhimihuabuquan",
  pinyin2: "xjzmhbq"
},
{
  name: "\u5fc3\u7ede\u75db",
  pinyin1: "xinjiaotong",
  pinyin2: "xjt"
},
{
  name: "\u5fc3\u7406\u969c\u788d",
  pinyin1: "xinlizhangai",
  pinyin2: "xlza"
},
{
  name: "\u5fc3\u7406\u54a8\u8be2",
  pinyin1: "xinlizixun",
  pinyin2: "xlzx"
},
{
  name: "\u5fc3\u5f8b\u5931\u5e38",
  pinyin1: "xinlvshichang",
  pinyin2: "xlsc"
},
{
  name: "\u5fc3\u8870",
  pinyin1: "xinshuai",
  pinyin2: "xs"
},
{
  name: "\u5fc3\u810f\u74e3\u819c\u6027\u75be\u75c5",
  pinyin1: "xinzangbanmoxingjibing",
  pinyin2: "xzbmxjb"
},
{
  name: "\u65b0\u751f\u513f\u80ba\u708e",
  pinyin1: "xinshengerfeiyan",
  pinyin2: "xsefy"
},
{
  name: "\u65b0\u751f\u513f\u9ec4\u75b8",
  pinyin1: "xinshengerhuangdan",
  pinyin2: "xsehd"
},
{
  name: "\u65b0\u751f\u513f\u75be\u75c5",
  pinyin1: "xinshengerjibing",
  pinyin2: "xsejb"
},
{
  name: "\u65b0\u751f\u513f\u7f3a\u6c27\u7f3a\u8840\u6027\u8111\u75c5",
  pinyin1: "xinshengerqueyangquexuexingnaobing",
  pinyin2: "xseqyqxxnb"
},
{
  name: "\u6027\u75c5",
  pinyin1: "xingbing",
  pinyin2: "xb"
},
{
  name: "\u6027\u529f\u80fd\u969c\u788d",
  pinyin1: "xinggongnengzhangai",
  pinyin2: "xgnza"
},
{
  name: "\u6027\u65e9\u719f",
  pinyin1: "xingzaoshu",
  pinyin2: "xzs"
},
{
  name: "\u80f8\u90e8\u521b\u4f24",
  pinyin1: "xiongbuchuangshang",
  pinyin2: "xbcs"
},
{
  name: "\u80f8\u819c\u708e",
  pinyin1: "xiongmoyan",
  pinyin2: "xmy"
},
{
  name: "\u80f8\u8154\u79ef\u6db2",
  pinyin1: "xiongqiangjiye",
  pinyin2: "xqjy"
},
{
  name: "\u7663",
  pinyin1: "xuan",
  pinyin2: "x"
},
{
  name: "\u5b66\u4e60\u969c\u788d",
  pinyin1: "xuexizhangai",
  pinyin2: "xxza"
},
{
  name: "\u8840\u7ba1\u7624",
  pinyin1: "xueguanliu",
  pinyin2: "xgl"
},
{
  name: "\u8840\u7ba1\u708e",
  pinyin1: "xueguanyan",
  pinyin2: "xgy"
},
{
  name: "\u8840\u6e05\u9634\u6027\u810a\u67f1\u5173\u8282\u75c5",
  pinyin1: "xueqingyinxingjizhuguanjiebing",
  pinyin2: "xqyxjzgjb"
},
{
  name: "\u8840\u5438\u866b\u75c5",
  pinyin1: "xuexichongbing",
  pinyin2: "xxcb"
},
{
  name: "\u8840\u5c0f\u677f\u51cf\u5c11\u6027\u7d2b\u765c",
  pinyin1: "xuexiaobanjianshaoxingzidian",
  pinyin2: "xxbjsxzd"
},
{
  name: "\u8840\u80f8",
  pinyin1: "xuexiong",
  pinyin2: "xx"
},
{
  name: "\u7259\u9f7f\u7f8e\u767d",
  pinyin1: "yachimeibai",
  pinyin2: "ycmb"
},
{
  name: "\u7259\u9f7f\u79cd\u690d",
  pinyin1: "yachizhongzhi",
  pinyin2: "yczz"
},
{
  name: "\u7259\u988c\u7578\u5f62",
  pinyin1: "yahejixing",
  pinyin2: "yhjx"
},
{
  name: "\u7259\u9ad3\u708e",
  pinyin1: "yasuiyan",
  pinyin2: "ysy"
},
{
  name: "\u7259\u4f53\u75c5",
  pinyin1: "yatibing",
  pinyin2: "ytb"
},
{
  name: "\u7259\u75db",
  pinyin1: "yatong",
  pinyin2: "yt"
},
{
  name: "\u7259\u9f88\u840e\u7f29",
  pinyin1: "yayinweisuo",
  pinyin2: "yyws"
},
{
  name: "\u7259\u9f88\u708e",
  pinyin1: "yayinyan",
  pinyin2: "yyy"
},
{
  name: "\u7259\u5468\u75c5",
  pinyin1: "yazhoubing",
  pinyin2: "yzb"
},
{
  name: "\u7259\u5468\u708e",
  pinyin1: "yazhouyan",
  pinyin2: "yzy"
},
{
  name: "\u4e9a\u5065\u5eb7",
  pinyin1: "yajiankang",
  pinyin2: "yjk"
},
{
  name: "\u54bd\u90e8\u80bf\u7624",
  pinyin1: "yanbuzhongliu",
  pinyin2: "ybzl"
},
{
  name: "\u54bd\u708e",
  pinyin1: "yanyan",
  pinyin2: "yy"
},
{
  name: "\u70df\u8349\u4f9d\u8d56",
  pinyin1: "yancaoyilai",
  pinyin2: "ycyl"
},
{
  name: "\u773c\u90e8\u6574\u5f62",
  pinyin1: "yanbuzhengxing",
  pinyin2: "ybzx"
},
{
  name: "\u773c\u5e95\u75c5",
  pinyin1: "yandibing",
  pinyin2: "ydb"
},
{
  name: "\u773c\u7751\u95ed\u5408\u4e0d\u5168",
  pinyin1: "yanjianbihebuquan",
  pinyin2: "yjbhbq"
},
{
  name: "\u773c\u7751\u5f02\u5e38",
  pinyin1: "yanjianyichang",
  pinyin2: "yjyc"
},
{
  name: "\u773c\u7736\u80bf\u7624",
  pinyin1: "yankuangzhongliu",
  pinyin2: "ykzl"
},
{
  name: "\u773c\u5916\u4f24",
  pinyin1: "yanwaishang",
  pinyin2: "yws"
},
{
  name: "\u773c\u80bf\u7624",
  pinyin1: "yanzhongliu",
  pinyin2: "yzl"
},
{
  name: "\u7f8a\u6c34\u5f02\u5e38",
  pinyin1: "yangshuiyichang",
  pinyin2: "ysyc"
},
{
  name: "\u9633\u75ff",
  pinyin1: "yangwei",
  pinyin2: "yw"
},
{
  name: "\u75d2\u75b9",
  pinyin1: "yangzhen",
  pinyin2: "yz"
},
{
  name: "\u8170\u808c\u52b3\u635f",
  pinyin1: "yaojilaosun",
  pinyin2: "yjls"
},
{
  name: "\u8170\u75db",
  pinyin1: "yaotong",
  pinyin2: "yt"
},
{
  name: "\u8170\u817f\u75db",
  pinyin1: "yaotuitong",
  pinyin2: "ytt"
},
{
  name: "\u8170\u690e\u7ba1\u72ed\u7a84",
  pinyin1: "yaozhuiguanxiazhai",
  pinyin2: "yzgxz"
},
{
  name: "\u8170\u690e\u95f4\u76d8\u7a81\u51fa",
  pinyin1: "yaozhuijianpantuchu",
  pinyin2: "yzjptc"
},
{
  name: "\u814b\u81ed",
  pinyin1: "yechou",
  pinyin2: "yc"
},
{
  name: "\u4e00\u6c27\u5316\u78b3\u4e2d\u6bd2",
  pinyin1: "yiyanghuatanzhongdu",
  pinyin2: "yyhtzd"
},
{
  name: "\u80f0\u817a\u764c",
  pinyin1: "yixianai",
  pinyin2: "yxa"
},
{
  name: "\u80f0\u817a\u708e",
  pinyin1: "yixianyan",
  pinyin2: "yxy"
},
{
  name: "\u9057\u4f20\u4ee3\u8c22\u75c5",
  pinyin1: "yichuandaixiebing",
  pinyin2: "ycdxb"
},
{
  name: "\u4e59\u809d",
  pinyin1: "yigan",
  pinyin2: "yg"
},
{
  name: "\u5f02\u5e38\u598a\u5a20",
  pinyin1: "yichangrenshen",
  pinyin2: "ycrs"
},
{
  name: "\u6291\u90c1\u75c7",
  pinyin1: "yiyuzheng",
  pinyin2: "yyz"
},
{
  name: "\u6613\u6813\u75c7",
  pinyin1: "yishuanzheng",
  pinyin2: "ysz"
},
{
  name: "\u9634\u9053\u708e",
  pinyin1: "yindaoyan",
  pinyin2: "ydy"
},
{
  name: "\u94f6\u5c51\u75c5",
  pinyin1: "yinxiebing",
  pinyin2: "yxb"
},
{
  name: "\u5f15\u4ea7",
  pinyin1: "yinchan",
  pinyin2: "yc"
},
{
  name: "\u9690\u777e",
  pinyin1: "yingao",
  pinyin2: "yg"
},
{
  name: "\u5a74\u513f\u5582\u517b",
  pinyin1: "yingerweiyang",
  pinyin2: "yewy"
},
{
  name: "\u5a74\u5e7c\u513f\u9634\u9053\u708e",
  pinyin1: "yingyoueryindaoyan",
  pinyin2: "yyeydy"
},
{
  name: "\u8425\u517b\u4e0d\u826f",
  pinyin1: "yingyangbuliang",
  pinyin2: "yybl"
},
{
  name: "\u8425\u517b\u7f3a\u4e4f\u75c7",
  pinyin1: "yingyangquefazheng",
  pinyin2: "yyqfz"
},
{
  name: "\u786c\u76ae\u75c5",
  pinyin1: "yingpibing",
  pinyin2: "ypb"
},
{
  name: "\u75a3",
  pinyin1: "you",
  pinyin2: "y"
},
{
  name: "\u5706\u9525\u89d2\u819c",
  pinyin1: "yuanzhuijiaomo",
  pinyin2: "yzjm"
},
{
  name: "\u8fdc\u89c6",
  pinyin1: "yuanshi",
  pinyin2: "ys"
},
{
  name: "\u6708\u7ecf\u5931\u8c03",
  pinyin1: "yuejingshidiao",
  pinyin2: "yjsd"
},
{
  name: "\u8fd0\u52a8\u521b\u4f24",
  pinyin1: "yundongchuangshang",
  pinyin2: "ydcs"
},
{
  name: "\u8fd0\u52a8\u795e\u7ecf\u5143\u75c5",
  pinyin1: "yundongshenjingyuanbing",
  pinyin2: "ydsjyb"
},
{
  name: "\u6655\u52a8\u75c5",
  pinyin1: "yundongbing",
  pinyin2: "ydb"
},
{
  name: "\u518d\u751f\u969c\u788d\u6027\u8d2b\u8840",
  pinyin1: "zaishengzhangaixingpinxue",
  pinyin2: "zszaxpx"
},
{
  name: "\u65e9\u4ea7\u513f\u89c6\u7f51\u819c\u75c5\u53d8",
  pinyin1: "zaochanershiwangmobingbian",
  pinyin2: "zceswmbb"
},
{
  name: "\u65e9\u6cc4",
  pinyin1: "zaoxie",
  pinyin2: "zx"
},
{
  name: "\u8e81\u72c2\u75c7",
  pinyin1: "zaokuangzheng",
  pinyin2: "zkz"
},
{
  name: "\u8e81\u90c1\u75c7",
  pinyin1: "zaoyuzheng",
  pinyin2: "zyz"
},
{
  name: "\u7c98\u8fde\u6027\u80a0\u6897\u963b",
  pinyin1: "zhanlianxingchanggengzu",
  pinyin2: "zlxcgz"
},
{
  name: "\u9635\u53d1\u6027\u5ba4\u4e0a\u6027\u5fc3\u52a8\u8fc7\u901f",
  pinyin1: "zhenfaxingshishangxingxindongguosu",
  pinyin2: "zfxssxxdgs"
},
{
  name: "\u652f\u6c14\u7ba1\u6269\u5f20",
  pinyin1: "zhiqiguankuozhang",
  pinyin2: "zqgkz"
},
{
  name: "\u652f\u6c14\u7ba1\u708e",
  pinyin1: "zhiqiguanyan",
  pinyin2: "zqgy"
},
{
  name: "\u8102\u80aa\u809d",
  pinyin1: "zhifanggan",
  pinyin2: "zfg"
},
{
  name: "\u8102\u6ea2\u6027\u76ae\u708e",
  pinyin1: "zhiyixingpiyan",
  pinyin2: "zyxpy"
},
{
  name: "\u76f4\u80a0\u764c",
  pinyin1: "zhichangai",
  pinyin2: "zca"
},
{
  name: "\u76f4\u80a0\u8131\u5782",
  pinyin1: "zhichangtuochui",
  pinyin2: "zctc"
},
{
  name: "\u76f4\u80a0\u606f\u8089",
  pinyin1: "zhichangxirou",
  pinyin2: "zcxr"
},
{
  name: "\u804c\u573a\u5fc3\u7406\u95ee\u9898",
  pinyin1: "zhichangxinliwenti",
  pinyin2: "zcxlwt"
},
{
  name: "\u75d4\u75ae",
  pinyin1: "zhichuang",
  pinyin2: "zc"
},
{
  name: "\u75e3",
  pinyin1: "zhi",
  pinyin2: "z"
},
{
  name: "\u4e2d\u6bd2",
  pinyin1: "zhongdu",
  pinyin2: "zd"
},
{
  name: "\u4e2d\u8033\u708e",
  pinyin1: "zhongeryan",
  pinyin2: "zey"
},
{
  name: "\u4e2d\u6d46",
  pinyin1: "zhongjiang",
  pinyin2: "zj"
},
{
  name: "\u4e2d\u6e17",
  pinyin1: "zhongshen",
  pinyin2: "zs"
},
{
  name: "\u91cd\u75c7\u808c\u65e0\u529b",
  pinyin1: "zhongzhengjiwuli",
  pinyin2: "zzjwl"
},
{
  name: "\u4e3b\u52a8\u8109\u7624",
  pinyin1: "zhudongmailiu",
  pinyin2: "zdml"
},
{
  name: "\u690e\u7ba1\u5185\u80bf\u7624",
  pinyin1: "zhuiguanneizhongliu",
  pinyin2: "zgnzl"
},
{
  name: "\u9525\u4f53\u5916\u7cfb\u75be\u75c5",
  pinyin1: "zhuitiwaixijibing",
  pinyin2: "ztwxjb"
},
{
  name: "\u5b50\u5bab\u808c\u7624",
  pinyin1: "zigongjiliu",
  pinyin2: "zgjl"
},
{
  name: "\u5b50\u5bab\u5185\u819c\u764c",
  pinyin1: "zigongneimoai",
  pinyin2: "zgnma"
},
{
  name: "\u5b50\u5bab\u5185\u819c\u606f\u8089",
  pinyin1: "zigongneimoxirou",
  pinyin2: "zgnmxr"
},
{
  name: "\u5b50\u5bab\u5185\u819c\u5f02\u4f4d\u75c7",
  pinyin1: "zigongneimoyiweizheng",
  pinyin2: "zgnmywz"
},
{
  name: "\u5b50\u5bab\u8131\u5782",
  pinyin1: "zigongtuochui",
  pinyin2: "zgtc"
},
{
  name: "\u5b50\u5bab\u817a\u808c\u75c7",
  pinyin1: "zigongxianjizheng",
  pinyin2: "zgxjz"
},
{
  name: "\u7d2b\u765c\u6027\u80be\u708e",
  pinyin1: "zidianxingshenyan",
  pinyin2: "zdxsy"
},
{
  name: "\u81ea\u95ed\u75c7",
  pinyin1: "zibizheng",
  pinyin2: "zbz"
},
{
  name: "\u81ea\u8eab\u514d\u75ab\u6027\u809d\u75c5",
  pinyin1: "zishenmianyixingganbing",
  pinyin2: "zsmyxgb"
},
{
  name: "\u7eb5\u9694\u80bf\u7624",
  pinyin1: "zonggezhongliu",
  pinyin2: "zgzl"
},
{
  name: "\u8db3\u90e8\u9aa8\u6298",
  pinyin1: "zubuguzhe",
  pinyin2: "zbgz"
},
{
  name: "\u963b\u751f\u9f7f",
  pinyin1: "zushengchi",
  pinyin2: "zsc"
},
{
  name: "\u5750\u9aa8\u795e\u7ecf\u75db",
  pinyin1: "zuogushenjingtong",
  pinyin2: "zgsjt"
}];

