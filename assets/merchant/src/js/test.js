10 Best Design Logo: Top Web Design Awards -
  return new RegExp("^[".concat(n.join(""), "]+$")).test(t)
}
})
define("dashboard/utils/validations/pan_validations", ["exports", "field-kit"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isSquareGiftcard = r, e.isNotSquareGiftcard = function(e) {
    return !r(e)
  }, e.isDinersClubCard = o, e.isValidCard = function(e) {
    return (t.CardUtils.validCardLength(e) || r(e) || o(e)) && t.CardUtils.luhnCheck(e)
  }
  var n = ["778273", "778332"],
    a = ["36", "38", "39"],
    s = ["300", "301", "302", "303", "304", "305"],
    i = ["3095"]

  function r(e) {
    return !Ember.isBlank(e) && (16 === e.length && n.includes(e.substr(0, 6)))
  }

  function o(e) {
    return !Ember.isBlank(e) && (14 === e.length && (a.includes(e.substr(0, 2)) || s.includes(e.substr(0, 3)) || i.includes(e.substr(0, 4))))
  }
}), define("dashboard/utils/validations/validations", ["exports", "dashboard/app_instance"], function(e, t) {
  function n(e) {
    var t = e.filter(function(e) {
      return e.isNotDefined()
    })
    return t.forEach(function(e) {
      return e.setProperties({
        invalidStartTime: !0,
        invalidEndTime: !0
      })
    }), Ember.isEmpty(t)
  }

  function a(e) {
    var t = e.filter(function(t) {
      return e.any(function(e) {
        return t.doesOverlapWith(e) && !(t === e)
      })
    })
    return t.forEach(function(e) {
      return e.setProperties({
        invalidStartTime: !0,
        invalidEndTime: !0
      })
    }), Ember.isEmpty(t)
  }

  function s(e) {
    var t = e && e.type
    return Boolean(!t || t.match("image/jpeg") || t.match("image/png") || t.match("image/jpg"))
  }

  function i(e) {
    return /^\s*(p(\s|\.)*o(\s|\.)*box(\s|\.)*|gpo\s*box|box|caller|call\s*box|apartado|aptdo|buzon)/i.test(e)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isEmail = function(e) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
  }, e.isPhone = function(e) {
    var n = (0, t.appContainer)().lookup("formats:current")
    return new RegExp(n.phone.regexp).test(e && e.replace(/[^\d]/g, ""))
  }, e.isTrue = function(e) {
    return Boolean(e)
  }, e.isFalse = function(e) {
    return !e
  }, e.isNotNegative = function(e) {
    return e >= 0
  }, e.isPositive = function(e) {
    return e > 0
  }, e.isInRange = function(e, t, n) {
    return Ember.isPresent(e) && e >= t && e <= n
  }, e.isTin = function(e) {
    return /^((\d{9})|(\d{3}-\d{2}-\d{4})|(\d{2}-\d{7}))$/.test(e)
  }, e.isTinName = function(e) {
    return /^[a-z0-9 \-&]+$/i.test(e)
  }, e.isValidHours = function(e) {
    return n(e) && a(e)
  }, e.hoursAreAllDefined = n, e.hoursDoNotOverlap = a, e.isValidNonGifImage = s, e.isValidImage = function(e) {
    if (s(e)) return !0
    var t = e && e.type
    return Boolean(!t || t.match("image/gif"))
  }, e.isAlphanumericSpace = function(e) {
    return /^[a-z0-9 ]+$/i.test(e)
  }, e.isValidMerchantSlug = function(e) {
    return /^[a-z0-9\-_]+$/i.test(e)
  }, e.isValidFractionalQuantity = function(e) {
    return Boolean(String(e).match(/^\d+(\.\d+)?$/)) && parseFloat(e) > 0
  }, e.isPoBox = i, e.isNotPoBox = function(e) {
    return !i(e)
  }, e.isUsPostalCode = function(e) {
    return /^\d{5}(?:[-\s]?\d{4})?$/.test(e)
  }
}), define("dashboard/utils/wait-for-animation", ["exports", "dashboard/utils/wait-until"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.waitForSheetAnimation = function() {
    var e = document.querySelector(n)
    if (!e) return Ember.RSVP.resolve()
    return (0, t.default)(function() {
      return !!Ember.testing || e && !e.hasAttribute(a)
    })
  }
  var n = ".sheet-layout",
    a = "data-sheet-is-transitioning"
}), define("dashboard/utils/wait-until", ["exports"], function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function(e) {
    var a = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).timeout
    return new Ember.RSVP.Promise(function(s, i) {
      var r = 0;
      (function o(l) {
        var d = t[l]
        void 0 === d && (d = n)
        setTimeout(function() {
          var t
          r += d
          try {
            t = e()
          } catch (e) {
            i(e)
          }
          t ? s(t) : a && r >= a ? i() : o(l + 1)
        }, d)
      })(0)
    })
  }
  var t = [0, 10, 20, 50, 70],
    n = 100
}), define("dashboard/utils/week_tick_formatter", ["exports", "moment", "i18n"], function(e, t, n) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function(e, n) {
    var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
    return function(l, d) {
      var u = (0, t.default)(l),
        c = u.clone().endOf("week")
      if (c.date() <= a) {
        if (o && c.month() % i != 0) return ""
        var m = c.month() === s && !o
        return r(e, u, c, m)
      }
      var p = d === n - 1
      return p && c.isSame(c.clone().endOf("month")) ? r(e, u, c, !1) : ""
    }
  }
  var a = 7,
    s = 0,
    i = 3

  function r(e, t, a, s) {
    var i = s ? "dateYearLastShort" : "monthDayShort"
    return (0, n.t)("common.dateRange", {
      beginDate: e.dateTime(t.toDate(), i),
      endDate: e.dateTime(a.toDate(), i)
    })
  }
}), define("dashboard/utils/window", ["exports", "@dashboard/junk-drawer/utils/keys"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.reload = function() {
    window.location.reload()
  }, e.redirect = function(e) {
    window.location.href = e
  }, e.goBack = function() {
    window.history.go(-1)
  }, e.open = function() {
    var e;
    (e = window).open.apply(e, arguments)
  }, e.openPopup = function(e) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      o = r = (0, t.extend)({}, s, r),
      l = o.width,
      d = o.height
    void 0 !== r.left && null !== r.left || (r.left = window.screen.width / 2 - (l / 2 + n))
    void 0 !== r.top && null !== r.top || (r.top = window.screen.height / 2 - (d / 2 + a))
    void 0 !== r.screenX && null !== r.screenX || (r.screenX = r.left)
    void 0 !== r.screenY && null !== r.screenY || (r.screenY = r.top)
    var u = ""
    for (var c in r) {
      var m = r[c]
      u += "".concat(c, "=").concat(m, ",")
    }
    window.open(e, i, u)
  }, e.getPerformanceObject = function() {
    return window.performance
  }, e.pushState = function() {
    var e
    return (e = window.history).pushState.apply(e, arguments)
  }, e.print = function() {
    window.print()
  }, e.navigator = function() {
    return window.navigator
  }
  var n = 10,
    a = 50,
    s = {
      status: !1,
      resizable: !0,
      toolbar: !1,
      menubar: !1,
      scrollbars: !1,
      location: !1,
      directories: !1,
      height: 325,
      width: 625
    }
}), define("dashboard/utils/zero-pad", ["exports", "@dashboard/i18n/utils/zero-pad"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  }), Object.defineProperty(e, "zeropad2", {
    enumerable: !0,
    get: function() {
      return t.zeropad2
    }
  })
}), define("dashboard/validators/alias", ["exports", "ember-cp-validations/validators/alias"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/belongs-to", ["exports", "ember-cp-validations/validators/belongs-to"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/collection", ["exports", "ember-cp-validations/validators/collection"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/confirmation", ["exports", "ember-cp-validations/validators/confirmation"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/date", ["exports", "ember-cp-validations/validators/date"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/dependent", ["exports", "ember-cp-validations/validators/dependent"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/ds-error", ["exports", "ember-cp-validations/validators/ds-error"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/exclusion", ["exports", "ember-cp-validations/validators/exclusion"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/format", ["exports", "ember-cp-validations/validators/format"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/has-many", ["exports", "ember-cp-validations/validators/has-many"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/inclusion", ["exports", "ember-cp-validations/validators/inclusion"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/inline", ["exports", "ember-cp-validations/validators/inline"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/invoices/is-not-before", ["exports", "ember-cp-validations/validators/base", "moment"], function(e, t, n) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0
  var a = t.default.extend({
    validate: function(e, t) {
      var a = t.notBefore,
        s = t.message
      return !(0, n.default)(e).isBefore(a) || s
    }
  })
  e.default = a
}), define("dashboard/validators/invoices/validate-every", ["exports", "ember-cp-validations/validators/base"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0
  var n = t.default.extend({
    validate: function(e, t) {
      var n = t.message,
        a = t.validateWith
      return !(!Ember.isEmpty(e) && !e.every(a)) || n
    }
  })
  e.default = n
}), define("dashboard/validators/length", ["exports", "ember-cp-validations/validators/length"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/messages", ["exports", "ember-cp-validations/validators/messages"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/number", ["exports", "ember-cp-validations/validators/number"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/presence", ["exports", "ember-cp-validations/validators/presence"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/validators/taxes/is-not-girl-scout-update", ["exports", "ember-cp-validations/validators/base"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0
  var n = t.default.extend({
    validate: function(e, t, n) {
      var a = t.message,
        s = n.updateRequest.name
      return !n.updateRequest.tin || (![s.match(/\bgs/i), s.match(/girl/i) && s.match(/scout/i), s.match(/\btroop/i) && !s.match(/\bbs/i) && !s.match(/\bboy/i)].some(function(e) {
        return Boolean(e)
      }) || (!s.match(/[0-9]{3,}/) || {
        isValid: !1,
        message: a
      }))
    }
  })
  n.reopenClass({
    getDependentsFor: function() {
      return ["model.updateRequest.name", "model.updateRequest.tin"]
    }
  })
  var a = n
  e.default = a
}), define("dashboard/validators/test-function", ["exports", "@dashboard/junk-drawer/validators/test-function"], function(e, t) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t.default
    }
  })
}), define("dashboard/config/environment", [], function() {
  try {
    var e = "dashboard/config/environment",
      t = document.querySelector('meta[name="' + e + '"]').getAttribute("content"),
      n = {
        default: JSON.parse(decodeURIComponent(t))
      }
    return Object.defineProperty(n, "__esModule", {
      value: !0
    }), n
  } catch (t) {
    throw new Error('Could not read config from meta tag with name "' + e + '".')
  }
}), runningTests || require("dashboard/app").default.create({
  name: "Dashboard",
  rootElement: "#dashboard-container",
  version: "0.0.0+4f6e6502"
})​
//# sourceMappingURL=/dashboard/assets/dashboard-e9a1d2ebc7721caef80d7310b6fe5e78.map
