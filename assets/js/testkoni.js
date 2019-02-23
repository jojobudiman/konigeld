function animator() {
	var e, t;
	$(".animated").each(function() {
		var n = $(this);
		if (n.visible(true)) {
			if (n.data("animtype") == "animate-progress") {
				n.css("opacity", 1);
				n.addClass("animatedVisi");
				n.css("opacity", 1);
				n.css("width", n.attr("aria-valuenow"));
				return
			}
			e = n.data("animdelay");
			if (!e) {
				e = 0
			}
			n.css("-webkit-animation-delay", e);
			n.css("-moz-animation-delay", e);
			n.css("-o-animation-delay", e);
			n.css("animation-delay", e);
			t = n.data("animspeed");
			if (!t) {
				t = .5
			}
			n.css("-webkit-animation-duration", t);
			n.css("-moz-animation-duration", t);
			n.css("-o-animation-duration", t);
			n.css("animation-duration", t);
			if (n.data("animtype")) {
				n.addClass(n.data("animtype"))
			}
			n.addClass("animatedVisi")
		} else if (n.data("animrepeat") == "1") {
			n.removeClass(n.data("animtype"));
			n.removeClass("animatedVisi")
		}
	})
}

function revslider_showDoubleJqueryError(e) {
	var t = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	t += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	t += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	t += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
	t = "<span style='font-size:16px;color:#BC0C06;'>" + t + "</span>";
	jQuery(e).show().html(t)
}

function hideLoading() {
	$(".loading-container").remove();
	$(".hide-until-loading").removeClass("hide-until-loading")
}

function easyTabsZeina(e, t) {
	var n = $(e);
	$(".tab-container").css("visibility", "visible");
	t = t || {};
	t["animationSpeed"] = t["animationSpeed"] || "fast";
	n.easytabs(t).bind("easytabs:midTransition", function() {
		var e = $(this),
			t = e.find("a.active"),
			n = t.offset();
		e.find(".section-tab-arrow").css("left", n.left + t.outerWidth() / 2 - 7 + "px")
	});
	n.trigger("easytabs:midTransition");
	$(window).load(function() {
		n.trigger("easytabs:midTransition")
	})
}

function contactusMap() {
	var e, t, n;
	var e = new google.maps.LatLng(-37.81759, 144.965188);
	t = {
		zoom: 11,
		center: e,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("contact_map"), t);
	n = new google.maps.Marker({
		position: e,
		map: map,
		title: "Envato"
	})
}

function embed_video_processing() {
	var e = '<iframe src="http://www.youtube.com/embed/{{id}}" frameborder="0" allowfullscreen=""  width="100%" height="100%" allowfullscreen></iframe>',
		t = '<iframe src="http://player.vimeo.com/video/{{id}}?color=ffffff" frameborder="0" allowfullscreen=""  width="100%" height="360"></iframe>',
		n = '<iframe src="https://w.soundcloud.com/player/?url={{id}}" frameborder="0" allowfullscreen=""  width="100%" height="166"></iframe>',
		r, i;
	$(".blog-post-youtube,.blog-post-vimeo,.blog-post-soundcloud").each(function() {
		i = false;
		if ($(this).hasClass("blog-post-youtube")) {
			i = getYoutubeId($(this).attr("href"));
			r = e
		} else if ($(this).hasClass("blog-post-vimeo")) {
			i = getVimeoId($(this).attr("href"));
			r = t
		} else if ($(this).hasClass("blog-post-soundcloud")) {
			i = $(this).attr("href");
			r = n
		}
		if (i !== false) {
			$(this).replaceWith(r.replace("{{id}}", i))
		}
	})
}

function getYoutubeId(e) {
	var t = /^.*((youtu.[\w]{1,3}\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var n = e.match(t);
	if (n && n[7].length == 11) {
		return n[7]
	} else {
		return false
	}
}

function getVimeoId(e) {
	var t = /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
	var n = e.match(t);
	if (n) {
		return n[2]
	} else {
		return false
	}
}

function zeinaAccordion(e) {
	$(document).on("click", e + " .accordion-row .title," + e + " .accordion-row .open-icon", function() {
		var e = this,
			t = $(this).parents(".accordion"),
			n, r = $(this),
			i = r.parent(),
			s, o, u, a, f, r = i.parent(),
			l = t.data("toggle") == "on" ? true : false;
		if (l === true) {
			o = i.find(".open-icon");
			u = i.find(".desc");
			a = i.find(".title");
			if (i.find(".close-icon").length > 0) {
				u.slideUp("fast");
				o.removeClass("close-icon");
				a.removeClass("active")
			} else {
				u.slideDown("fast");
				o.addClass("close-icon");
				a.addClass("active")
			}
		} else {
			r.find(".accordion-row").each(function() {
				s = $(this);
				o = s.find(".open-icon");
				u = s.find(".desc");
				a = s.find(".title");
				if (i[0] != this) {
					u.slideUp("fast");
					o.removeClass("close-icon");
					a.removeClass("active")
				} else {
					u.slideDown("fast");
					o.addClass("close-icon");
					a.addClass("active")
				}
			})
		}
	});
	$(e).each(function() {
		var e = $(this),
			t, n, r, i, s = parseInt(e.data("active-index")),
			s = s < 0 ? false : s;
		if (s !== false) {
			i = e.find(".accordion-row").eq(s);
			t = i.find(".open-icon");
			n = i.find(".desc");
			r = i.find(".title");
			n.slideDown("fast");
			t.addClass("close-icon");
			r.addClass("active")
		}
	})
}

function stickyMenu() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 126) {
			$("#header").addClass("sticky-header");
			$("#wrapper").addClass("sticky-wrapper");
			$(".sticky-navigation,#to-top-button").fadeIn()
		} else {
			$("#header").removeClass("sticky-header");
			$("#wrapper").removeClass("sticky-wrapper");
			$(".sticky-navigation,#to-top-button").fadeOut()
		}
	})
}

function centeringBullets() {
	$(".simplebullets,.slider-fixed-frame .home-bullets").each(function() {
		var e = $(this),
			t = e.width();
		e.css("margin-left", -(t / 2) + "px")
	})
}(function(e, t, n) {
	function f(e) {
		var t = {},
			r = /^jQuery\d+$/;
		n.each(e.attributes, function(e, n) {
			if (n.specified && !r.test(n.name)) {
				t[n.name] = n.value
			}
		});
		return t
	}

	function l(e, r) {
		var i = this,
			s = n(i);
		if (i.value == s.attr("placeholder") && s.hasClass("placeholder")) {
			if (s.data("placeholder-password")) {
				s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
				if (e === true) {
					return s[0].value = r
				}
				s.focus()
			} else {
				i.value = "";
				s.removeClass("placeholder");
				i == t.activeElement && i.select()
			}
		}
	}

	function c() {
		var e, t = this,
			r = n(t),
			i = r,
			s = this.id;
		if (t.value == "") {
			if (t.type == "password") {
				if (!r.data("placeholder-textinput")) {
					try {
						e = r.clone().attr({
							type: "text"
						})
					} catch (o) {
						e = n("<input>").attr(n.extend(f(this), {
							type: "text"
						}))
					}
					e.removeAttr("name").data({
						"placeholder-password": true,
						"placeholder-id": s
					}).bind("focus.placeholder", l);
					r.data({
						"placeholder-textinput": e,
						"placeholder-id": s
					}).before(e)
				}
				r = r.removeAttr("id").hide().prev().attr("id", s).show()
			}
			r.addClass("placeholder");
			r[0].value = r.attr("placeholder")
		} else {
			r.removeClass("placeholder")
		}
	}
	var r = "placeholder" in t.createElement("input"),
		i = "placeholder" in t.createElement("textarea"),
		s = n.fn,
		o = n.valHooks,
		u, a;
	if (r && i) {
		a = s.placeholder = function() {
			return this
		};
		a.input = a.textarea = true
	} else {
		a = s.placeholder = function() {
			var e = this;
			e.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
				"focus.placeholder": l,
				"blur.placeholder": c
			}).data("placeholder-enabled", true).trigger("blur.placeholder");
			return e
		};
		a.input = r;
		a.textarea = i;
		u = {
			get: function(e) {
				var t = n(e);
				return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
			},
			set: function(e, r) {
				var i = n(e);
				if (!i.data("placeholder-enabled")) {
					return e.value = r
				}
				if (r == "") {
					e.value = r;
					if (e != t.activeElement) {
						c.call(e)
					}
				} else if (i.hasClass("placeholder")) {
					l.call(e, true, r) || (e.value = r)
				} else {
					e.value = r
				}
				return i
			}
		};
		r || (o.input = u);
		i || (o.textarea = u);
		n(function() {
			n(t).delegate("form", "submit.placeholder", function() {
				var e = n(".placeholder", this).each(l);
				setTimeout(function() {
					e.each(c)
				}, 10)
			})
		});
		n(e).bind("beforeunload.placeholder", function() {
			n(".placeholder").each(function() {
				this.value = ""
			})
		})
	}
})(this, document, jQuery);
var Handlebars = {};
(function(e, t) {
	e.VERSION = "1.0.0";
	e.COMPILER_REVISION = 4;
	e.REVISION_CHANGES = {
		1: "<= 1.0.rc.2",
		2: "== 1.0.0-rc.3",
		3: "== 1.0.0-rc.4",
		4: ">= 1.0.0"
	};
	e.helpers = {};
	e.partials = {};
	var n = Object.prototype.toString,
		r = "[object Function]",
		i = "[object Object]";
	e.registerHelper = function(t, r, s) {
		if (n.call(t) === i) {
			if (s || r) {
				throw new e.Exception("Arg not supported with multiple helpers")
			}
			e.Utils.extend(this.helpers, t)
		} else {
			if (s) {
				r.not = s
			}
			this.helpers[t] = r
		}
	};
	e.registerPartial = function(t, r) {
		if (n.call(t) === i) {
			e.Utils.extend(this.partials, t)
		} else {
			this.partials[t] = r
		}
	};
	e.registerHelper("helperMissing", function(e) {
		if (arguments.length === 2) {
			return t
		} else {
			throw new Error("Missing helper: '" + e + "'")
		}
	});
	e.registerHelper("blockHelperMissing", function(t, i) {
		var s = i.inverse || function() {},
			o = i.fn;
		var u = n.call(t);
		if (u === r) {
			t = t.call(this)
		}
		if (t === true) {
			return o(this)
		} else if (t === false || t == null) {
			return s(this)
		} else if (u === "[object Array]") {
			if (t.length > 0) {
				return e.helpers.each(t, i)
			} else {
				return s(this)
			}
		} else {
			return o(t)
		}
	});
	e.K = function() {};
	e.createFrame = Object.create || function(t) {
		e.K.prototype = t;
		var n = new e.K;
		e.K.prototype = null;
		return n
	};
	e.logger = {
		DEBUG: 0,
		INFO: 1,
		WARN: 2,
		ERROR: 3,
		level: 3,
		methodMap: {
			0: "debug",
			1: "info",
			2: "warn",
			3: "error"
		},
		log: function(t, n) {
			if (e.logger.level <= t) {
				var r = e.logger.methodMap[t];
				if (typeof console !== "undefined" && console[r]) {
					console[r].call(console, n)
				}
			}
		}
	};
	e.log = function(t, n) {
		e.logger.log(t, n)
	};
	e.registerHelper("each", function(t, i) {
		var s = i.fn,
			o = i.inverse;
		var u = 0,
			a = "",
			f;
		var l = n.call(t);
		if (l === r) {
			t = t.call(this)
		}
		if (i.data) {
			f = e.createFrame(i.data)
		}
		if (t && typeof t === "object") {
			if (t instanceof Array) {
				for (var c = t.length; u < c; u++) {
					if (f) {
						f.index = u
					}
					a = a + s(t[u], {
						data: f
					})
				}
			} else {
				for (var h in t) {
					if (t.hasOwnProperty(h)) {
						if (f) {
							f.key = h
						}
						a = a + s(t[h], {
							data: f
						});
						u++
					}
				}
			}
		}
		if (u === 0) {
			a = o(this)
		}
		return a
	});
	e.registerHelper("if", function(t, i) {
		var s = n.call(t);
		if (s === r) {
			t = t.call(this)
		}
		if (!t || e.Utils.isEmpty(t)) {
			return i.inverse(this)
		} else {
			return i.fn(this)
		}
	});
	e.registerHelper("unless", function(t, n) {
		return e.helpers["if"].call(this, t, {
			fn: n.inverse,
			inverse: n.fn
		})
	});
	e.registerHelper("with", function(t, i) {
		var s = n.call(t);
		if (s === r) {
			t = t.call(this)
		}
		if (!e.Utils.isEmpty(t)) return i.fn(t)
	});
	e.registerHelper("log", function(t, n) {
		var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
		e.log(r, t)
	});
	var s = function() {
		function n() {
			this.yy = {}
		}
		var e = {
			trace: function() {},
			yy: {},
			symbols_: {
				error: 2,
				root: 3,
				program: 4,
				EOF: 5,
				simpleInverse: 6,
				statements: 7,
				statement: 8,
				openInverse: 9,
				closeBlock: 10,
				openBlock: 11,
				mustache: 12,
				partial: 13,
				CONTENT: 14,
				COMMENT: 15,
				OPEN_BLOCK: 16,
				inMustache: 17,
				CLOSE: 18,
				OPEN_INVERSE: 19,
				OPEN_ENDBLOCK: 20,
				path: 21,
				OPEN: 22,
				OPEN_UNESCAPED: 23,
				CLOSE_UNESCAPED: 24,
				OPEN_PARTIAL: 25,
				partialName: 26,
				params: 27,
				hash: 28,
				dataName: 29,
				param: 30,
				STRING: 31,
				INTEGER: 32,
				BOOLEAN: 33,
				hashSegments: 34,
				hashSegment: 35,
				ID: 36,
				EQUALS: 37,
				DATA: 38,
				pathSegments: 39,
				SEP: 40,
				$accept: 0,
				$end: 1
			},
			terminals_: {
				2: "error",
				5: "EOF",
				14: "CONTENT",
				15: "COMMENT",
				16: "OPEN_BLOCK",
				18: "CLOSE",
				19: "OPEN_INVERSE",
				20: "OPEN_ENDBLOCK",
				22: "OPEN",
				23: "OPEN_UNESCAPED",
				24: "CLOSE_UNESCAPED",
				25: "OPEN_PARTIAL",
				31: "STRING",
				32: "INTEGER",
				33: "BOOLEAN",
				36: "ID",
				37: "EQUALS",
				38: "DATA",
				40: "SEP"
			},
			productions_: [0, [3, 2],
				[4, 2],
				[4, 3],
				[4, 2],
				[4, 1],
				[4, 1],
				[4, 0],
				[7, 1],
				[7, 2],
				[8, 3],
				[8, 3],
				[8, 1],
				[8, 1],
				[8, 1],
				[8, 1],
				[11, 3],
				[9, 3],
				[10, 3],
				[12, 3],
				[12, 3],
				[13, 3],
				[13, 4],
				[6, 2],
				[17, 3],
				[17, 2],
				[17, 2],
				[17, 1],
				[17, 1],
				[27, 2],
				[27, 1],
				[30, 1],
				[30, 1],
				[30, 1],
				[30, 1],
				[30, 1],
				[28, 1],
				[34, 2],
				[34, 1],
				[35, 3],
				[35, 3],
				[35, 3],
				[35, 3],
				[35, 3],
				[26, 1],
				[26, 1],
				[26, 1],
				[29, 2],
				[21, 1],
				[39, 3],
				[39, 1]
			],
			performAction: function(t, n, r, i, s, o, u) {
				var a = o.length - 1;
				switch (s) {
					case 1:
						return o[a - 1];
						break;
					case 2:
						this.$ = new i.ProgramNode([], o[a]);
						break;
					case 3:
						this.$ = new i.ProgramNode(o[a - 2], o[a]);
						break;
					case 4:
						this.$ = new i.ProgramNode(o[a - 1], []);
						break;
					case 5:
						this.$ = new i.ProgramNode(o[a]);
						break;
					case 6:
						this.$ = new i.ProgramNode([], []);
						break;
					case 7:
						this.$ = new i.ProgramNode([]);
						break;
					case 8:
						this.$ = [o[a]];
						break;
					case 9:
						o[a - 1].push(o[a]);
						this.$ = o[a - 1];
						break;
					case 10:
						this.$ = new i.BlockNode(o[a - 2], o[a - 1].inverse, o[a - 1], o[a]);
						break;
					case 11:
						this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a - 1].inverse, o[a]);
						break;
					case 12:
						this.$ = o[a];
						break;
					case 13:
						this.$ = o[a];
						break;
					case 14:
						this.$ = new i.ContentNode(o[a]);
						break;
					case 15:
						this.$ = new i.CommentNode(o[a]);
						break;
					case 16:
						this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
						break;
					case 17:
						this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
						break;
					case 18:
						this.$ = o[a - 1];
						break;
					case 19:
						this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], o[a - 2][2] === "&");
						break;
					case 20:
						this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], true);
						break;
					case 21:
						this.$ = new i.PartialNode(o[a - 1]);
						break;
					case 22:
						this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
						break;
					case 23:
						break;
					case 24:
						this.$ = [
							[o[a - 2]].concat(o[a - 1]), o[a]
						];
						break;
					case 25:
						this.$ = [
							[o[a - 1]].concat(o[a]), null
						];
						break;
					case 26:
						this.$ = [
							[o[a - 1]], o[a]
						];
						break;
					case 27:
						this.$ = [
							[o[a]], null
						];
						break;
					case 28:
						this.$ = [
							[o[a]], null
						];
						break;
					case 29:
						o[a - 1].push(o[a]);
						this.$ = o[a - 1];
						break;
					case 30:
						this.$ = [o[a]];
						break;
					case 31:
						this.$ = o[a];
						break;
					case 32:
						this.$ = new i.StringNode(o[a]);
						break;
					case 33:
						this.$ = new i.IntegerNode(o[a]);
						break;
					case 34:
						this.$ = new i.BooleanNode(o[a]);
						break;
					case 35:
						this.$ = o[a];
						break;
					case 36:
						this.$ = new i.HashNode(o[a]);
						break;
					case 37:
						o[a - 1].push(o[a]);
						this.$ = o[a - 1];
						break;
					case 38:
						this.$ = [o[a]];
						break;
					case 39:
						this.$ = [o[a - 2], o[a]];
						break;
					case 40:
						this.$ = [o[a - 2], new i.StringNode(o[a])];
						break;
					case 41:
						this.$ = [o[a - 2], new i.IntegerNode(o[a])];
						break;
					case 42:
						this.$ = [o[a - 2], new i.BooleanNode(o[a])];
						break;
					case 43:
						this.$ = [o[a - 2], o[a]];
						break;
					case 44:
						this.$ = new i.PartialNameNode(o[a]);
						break;
					case 45:
						this.$ = new i.PartialNameNode(new i.StringNode(o[a]));
						break;
					case 46:
						this.$ = new i.PartialNameNode(new i.IntegerNode(o[a]));
						break;
					case 47:
						this.$ = new i.DataNode(o[a]);
						break;
					case 48:
						this.$ = new i.IdNode(o[a]);
						break;
					case 49:
						o[a - 2].push({
							part: o[a],
							separator: o[a - 1]
						});
						this.$ = o[a - 2];
						break;
					case 50:
						this.$ = [{
							part: o[a]
						}];
						break
				}
			},
			table: [{
				3: 1,
				4: 2,
				5: [2, 7],
				6: 3,
				7: 4,
				8: 6,
				9: 7,
				11: 8,
				12: 9,
				13: 10,
				14: [1, 11],
				15: [1, 12],
				16: [1, 13],
				19: [1, 5],
				22: [1, 14],
				23: [1, 15],
				25: [1, 16]
			}, {
				1: [3]
			}, {
				5: [1, 17]
			}, {
				5: [2, 6],
				7: 18,
				8: 6,
				9: 7,
				11: 8,
				12: 9,
				13: 10,
				14: [1, 11],
				15: [1, 12],
				16: [1, 13],
				19: [1, 19],
				20: [2, 6],
				22: [1, 14],
				23: [1, 15],
				25: [1, 16]
			}, {
				5: [2, 5],
				6: 20,
				8: 21,
				9: 7,
				11: 8,
				12: 9,
				13: 10,
				14: [1, 11],
				15: [1, 12],
				16: [1, 13],
				19: [1, 5],
				20: [2, 5],
				22: [1, 14],
				23: [1, 15],
				25: [1, 16]
			}, {
				17: 23,
				18: [1, 22],
				21: 24,
				29: 25,
				36: [1, 28],
				38: [1, 27],
				39: 26
			}, {
				5: [2, 8],
				14: [2, 8],
				15: [2, 8],
				16: [2, 8],
				19: [2, 8],
				20: [2, 8],
				22: [2, 8],
				23: [2, 8],
				25: [2, 8]
			}, {
				4: 29,
				6: 3,
				7: 4,
				8: 6,
				9: 7,
				11: 8,
				12: 9,
				13: 10,
				14: [1, 11],
				15: [1, 12],
				16: [1, 13],
				19: [1, 5],
				20: [2, 7],
				22: [1, 14],
				23: [1, 15],
				25: [1, 16]
			}, {
				4: 30,
				6: 3,
				7: 4,
				8: 6,
				9: 7,
				11: 8,
				12: 9,
				13: 10,
				14: [1, 11],
				15: [1, 12],
				16: [1, 13],
				19: [1, 5],
				20: [2, 7],
				22: [1, 14],
				23: [1, 15],
				25: [1, 16]
			}, {
				5: [2, 12],
				14: [2, 12],
				15: [2, 12],
				16: [2, 12],
				19: [2, 12],
				20: [2, 12],
				22: [2, 12],
				23: [2, 12],
				25: [2, 12]
			}, {
				5: [2, 13],
				14: [2, 13],
				15: [2, 13],
				16: [2, 13],
				19: [2, 13],
				20: [2, 13],
				22: [2, 13],
				23: [2, 13],
				25: [2, 13]
			}, {
				5: [2, 14],
				14: [2, 14],
				15: [2, 14],
				16: [2, 14],
				19: [2, 14],
				20: [2, 14],
				22: [2, 14],
				23: [2, 14],
				25: [2, 14]
			}, {
				5: [2, 15],
				14: [2, 15],
				15: [2, 15],
				16: [2, 15],
				19: [2, 15],
				20: [2, 15],
				22: [2, 15],
				23: [2, 15],
				25: [2, 15]
			}, {
				17: 31,
				21: 24,
				29: 25,
				36: [1, 28],
				38: [1, 27],
				39: 26
			}, {
				17: 32,
				21: 24,
				29: 25,
				36: [1, 28],
				38: [1, 27],
				39: 26
			}, {
				17: 33,
				21: 24,
				29: 25,
				36: [1, 28],
				38: [1, 27],
				39: 26
			}, {
				21: 35,
				26: 34,
				31: [1, 36],
				32: [1, 37],
				36: [1, 28],
				39: 26
			}, {
				1: [2, 1]
			}, {
				5: [2, 2],
				8: 21,
				9: 7,
				11: 8,
				12: 9,
				13: 10,
				14: [1, 11],
				15: [1, 12],
				16: [1, 13],
				19: [1, 19],
				20: [2, 2],
				22: [1, 14],
				23: [1, 15],
				25: [1, 16]
			}, {
				17: 23,
				21: 24,
				29: 25,
				36: [1, 28],
				38: [1, 27],
				39: 26
			}, {
				5: [2, 4],
				7: 38,
				8: 6,
				9: 7,
				11: 8,
				12: 9,
				13: 10,
				14: [1, 11],
				15: [1, 12],
				16: [1, 13],
				19: [1, 19],
				20: [2, 4],
				22: [1, 14],
				23: [1, 15],
				25: [1, 16]
			}, {
				5: [2, 9],
				14: [2, 9],
				15: [2, 9],
				16: [2, 9],
				19: [2, 9],
				20: [2, 9],
				22: [2, 9],
				23: [2, 9],
				25: [2, 9]
			}, {
				5: [2, 23],
				14: [2, 23],
				15: [2, 23],
				16: [2, 23],
				19: [2, 23],
				20: [2, 23],
				22: [2, 23],
				23: [2, 23],
				25: [2, 23]
			}, {
				18: [1, 39]
			}, {
				18: [2, 27],
				21: 44,
				24: [2, 27],
				27: 40,
				28: 41,
				29: 48,
				30: 42,
				31: [1, 45],
				32: [1, 46],
				33: [1, 47],
				34: 43,
				35: 49,
				36: [1, 50],
				38: [1, 27],
				39: 26
			}, {
				18: [2, 28],
				24: [2, 28]
			}, {
				18: [2, 48],
				24: [2, 48],
				31: [2, 48],
				32: [2, 48],
				33: [2, 48],
				36: [2, 48],
				38: [2, 48],
				40: [1, 51]
			}, {
				21: 52,
				36: [1, 28],
				39: 26
			}, {
				18: [2, 50],
				24: [2, 50],
				31: [2, 50],
				32: [2, 50],
				33: [2, 50],
				36: [2, 50],
				38: [2, 50],
				40: [2, 50]
			}, {
				10: 53,
				20: [1, 54]
			}, {
				10: 55,
				20: [1, 54]
			}, {
				18: [1, 56]
			}, {
				18: [1, 57]
			}, {
				24: [1, 58]
			}, {
				18: [1, 59],
				21: 60,
				36: [1, 28],
				39: 26
			}, {
				18: [2, 44],
				36: [2, 44]
			}, {
				18: [2, 45],
				36: [2, 45]
			}, {
				18: [2, 46],
				36: [2, 46]
			}, {
				5: [2, 3],
				8: 21,
				9: 7,
				11: 8,
				12: 9,
				13: 10,
				14: [1, 11],
				15: [1, 12],
				16: [1, 13],
				19: [1, 19],
				20: [2, 3],
				22: [1, 14],
				23: [1, 15],
				25: [1, 16]
			}, {
				14: [2, 17],
				15: [2, 17],
				16: [2, 17],
				19: [2, 17],
				20: [2, 17],
				22: [2, 17],
				23: [2, 17],
				25: [2, 17]
			}, {
				18: [2, 25],
				21: 44,
				24: [2, 25],
				28: 61,
				29: 48,
				30: 62,
				31: [1, 45],
				32: [1, 46],
				33: [1, 47],
				34: 43,
				35: 49,
				36: [1, 50],
				38: [1, 27],
				39: 26
			}, {
				18: [2, 26],
				24: [2, 26]
			}, {
				18: [2, 30],
				24: [2, 30],
				31: [2, 30],
				32: [2, 30],
				33: [2, 30],
				36: [2, 30],
				38: [2, 30]
			}, {
				18: [2, 36],
				24: [2, 36],
				35: 63,
				36: [1, 64]
			}, {
				18: [2, 31],
				24: [2, 31],
				31: [2, 31],
				32: [2, 31],
				33: [2, 31],
				36: [2, 31],
				38: [2, 31]
			}, {
				18: [2, 32],
				24: [2, 32],
				31: [2, 32],
				32: [2, 32],
				33: [2, 32],
				36: [2, 32],
				38: [2, 32]
			}, {
				18: [2, 33],
				24: [2, 33],
				31: [2, 33],
				32: [2, 33],
				33: [2, 33],
				36: [2, 33],
				38: [2, 33]
			}, {
				18: [2, 34],
				24: [2, 34],
				31: [2, 34],
				32: [2, 34],
				33: [2, 34],
				36: [2, 34],
				38: [2, 34]
			}, {
				18: [2, 35],
				24: [2, 35],
				31: [2, 35],
				32: [2, 35],
				33: [2, 35],
				36: [2, 35],
				38: [2, 35]
			}, {
				18: [2, 38],
				24: [2, 38],
				36: [2, 38]
			}, {
				18: [2, 50],
				24: [2, 50],
				31: [2, 50],
				32: [2, 50],
				33: [2, 50],
				36: [2, 50],
				37: [1, 65],
				38: [2, 50],
				40: [2, 50]
			}, {
				36: [1, 66]
			}, {
				18: [2, 47],
				24: [2, 47],
				31: [2, 47],
				32: [2, 47],
				33: [2, 47],
				36: [2, 47],
				38: [2, 47]
			}, {
				5: [2, 10],
				14: [2, 10],
				15: [2, 10],
				16: [2, 10],
				19: [2, 10],
				20: [2, 10],
				22: [2, 10],
				23: [2, 10],
				25: [2, 10]
			}, {
				21: 67,
				36: [1, 28],
				39: 26
			}, {
				5: [2, 11],
				14: [2, 11],
				15: [2, 11],
				16: [2, 11],
				19: [2, 11],
				20: [2, 11],
				22: [2, 11],
				23: [2, 11],
				25: [2, 11]
			}, {
				14: [2, 16],
				15: [2, 16],
				16: [2, 16],
				19: [2, 16],
				20: [2, 16],
				22: [2, 16],
				23: [2, 16],
				25: [2, 16]
			}, {
				5: [2, 19],
				14: [2, 19],
				15: [2, 19],
				16: [2, 19],
				19: [2, 19],
				20: [2, 19],
				22: [2, 19],
				23: [2, 19],
				25: [2, 19]
			}, {
				5: [2, 20],
				14: [2, 20],
				15: [2, 20],
				16: [2, 20],
				19: [2, 20],
				20: [2, 20],
				22: [2, 20],
				23: [2, 20],
				25: [2, 20]
			}, {
				5: [2, 21],
				14: [2, 21],
				15: [2, 21],
				16: [2, 21],
				19: [2, 21],
				20: [2, 21],
				22: [2, 21],
				23: [2, 21],
				25: [2, 21]
			}, {
				18: [1, 68]
			}, {
				18: [2, 24],
				24: [2, 24]
			}, {
				18: [2, 29],
				24: [2, 29],
				31: [2, 29],
				32: [2, 29],
				33: [2, 29],
				36: [2, 29],
				38: [2, 29]
			}, {
				18: [2, 37],
				24: [2, 37],
				36: [2, 37]
			}, {
				37: [1, 65]
			}, {
				21: 69,
				29: 73,
				31: [1, 70],
				32: [1, 71],
				33: [1, 72],
				36: [1, 28],
				38: [1, 27],
				39: 26
			}, {
				18: [2, 49],
				24: [2, 49],
				31: [2, 49],
				32: [2, 49],
				33: [2, 49],
				36: [2, 49],
				38: [2, 49],
				40: [2, 49]
			}, {
				18: [1, 74]
			}, {
				5: [2, 22],
				14: [2, 22],
				15: [2, 22],
				16: [2, 22],
				19: [2, 22],
				20: [2, 22],
				22: [2, 22],
				23: [2, 22],
				25: [2, 22]
			}, {
				18: [2, 39],
				24: [2, 39],
				36: [2, 39]
			}, {
				18: [2, 40],
				24: [2, 40],
				36: [2, 40]
			}, {
				18: [2, 41],
				24: [2, 41],
				36: [2, 41]
			}, {
				18: [2, 42],
				24: [2, 42],
				36: [2, 42]
			}, {
				18: [2, 43],
				24: [2, 43],
				36: [2, 43]
			}, {
				5: [2, 18],
				14: [2, 18],
				15: [2, 18],
				16: [2, 18],
				19: [2, 18],
				20: [2, 18],
				22: [2, 18],
				23: [2, 18],
				25: [2, 18]
			}],
			defaultActions: {
				17: [2, 1]
			},
			parseError: function(t, n) {
				throw new Error(t)
			},
			parse: function(t) {
				function v(e) {
					r.length = r.length - 2 * e;
					i.length = i.length - e;
					s.length = s.length - e
				}

				function m() {
					var e;
					e = n.lexer.lex() || 1;
					if (typeof e !== "number") {
						e = n.symbols_[e] || e
					}
					return e
				}
				var n = this,
					r = [0],
					i = [null],
					s = [],
					o = this.table,
					u = "",
					a = 0,
					f = 0,
					l = 0,
					c = 2,
					h = 1;
				this.lexer.setInput(t);
				this.lexer.yy = this.yy;
				this.yy.lexer = this.lexer;
				this.yy.parser = this;
				if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
				var p = this.lexer.yylloc;
				s.push(p);
				var d = this.lexer.options && this.lexer.options.ranges;
				if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
				var g, y, b, w, E, S, x = {},
					T, N, C, k;
				while (true) {
					b = r[r.length - 1];
					if (this.defaultActions[b]) {
						w = this.defaultActions[b]
					} else {
						if (g === null || typeof g == "undefined") {
							g = m()
						}
						w = o[b] && o[b][g]
					}
					if (typeof w === "undefined" || !w.length || !w[0]) {
						var L = "";
						if (!l) {
							k = [];
							for (T in o[b])
								if (this.terminals_[T] && T > 2) {
									k.push("'" + this.terminals_[T] + "'")
								}
							if (this.lexer.showPosition) {
								L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'"
							} else {
								L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'")
							}
							this.parseError(L, {
								text: this.lexer.match,
								token: this.terminals_[g] || g,
								line: this.lexer.yylineno,
								loc: p,
								expected: k
							})
						}
					}
					if (w[0] instanceof Array && w.length > 1) {
						throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g)
					}
					switch (w[0]) {
						case 1:
							r.push(g);
							i.push(this.lexer.yytext);
							s.push(this.lexer.yylloc);
							r.push(w[1]);
							g = null;
							if (!y) {
								f = this.lexer.yyleng;
								u = this.lexer.yytext;
								a = this.lexer.yylineno;
								p = this.lexer.yylloc;
								if (l > 0) l--
							} else {
								g = y;
								y = null
							}
							break;
						case 2:
							N = this.productions_[w[1]][1];
							x.$ = i[i.length - N];
							x._$ = {
								first_line: s[s.length - (N || 1)].first_line,
								last_line: s[s.length - 1].last_line,
								first_column: s[s.length - (N || 1)].first_column,
								last_column: s[s.length - 1].last_column
							};
							if (d) {
								x._$.range = [s[s.length - (N || 1)].range[0], s[s.length - 1].range[1]]
							}
							S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
							if (typeof S !== "undefined") {
								return S
							}
							if (N) {
								r = r.slice(0, -1 * N * 2);
								i = i.slice(0, -1 * N);
								s = s.slice(0, -1 * N)
							}
							r.push(this.productions_[w[1]][0]);
							i.push(x.$);
							s.push(x._$);
							C = o[r[r.length - 2]][r[r.length - 1]];
							r.push(C);
							break;
						case 3:
							return true
					}
				}
				return true
			}
		};
		var t = function() {
			var e = {
				EOF: 1,
				parseError: function(t, n) {
					if (this.yy.parser) {
						this.yy.parser.parseError(t, n)
					} else {
						throw new Error(t)
					}
				},
				setInput: function(e) {
					this._input = e;
					this._more = this._less = this.done = false;
					this.yylineno = this.yyleng = 0;
					this.yytext = this.matched = this.match = "";
					this.conditionStack = ["INITIAL"];
					this.yylloc = {
						first_line: 1,
						first_column: 0,
						last_line: 1,
						last_column: 0
					};
					if (this.options.ranges) this.yylloc.range = [0, 0];
					this.offset = 0;
					return this
				},
				input: function() {
					var e = this._input[0];
					this.yytext += e;
					this.yyleng++;
					this.offset++;
					this.match += e;
					this.matched += e;
					var t = e.match(/(?:\r\n?|\n).*/g);
					if (t) {
						this.yylineno++;
						this.yylloc.last_line++
					} else {
						this.yylloc.last_column++
					}
					if (this.options.ranges) this.yylloc.range[1]++;
					this._input = this._input.slice(1);
					return e
				},
				unput: function(e) {
					var t = e.length;
					var n = e.split(/(?:\r\n?|\n)/g);
					this._input = e + this._input;
					this.yytext = this.yytext.substr(0, this.yytext.length - t - 1);
					this.offset -= t;
					var r = this.match.split(/(?:\r\n?|\n)/g);
					this.match = this.match.substr(0, this.match.length - 1);
					this.matched = this.matched.substr(0, this.matched.length - 1);
					if (n.length - 1) this.yylineno -= n.length - 1;
					var i = this.yylloc.range;
					this.yylloc = {
						first_line: this.yylloc.first_line,
						last_line: this.yylineno + 1,
						first_column: this.yylloc.first_column,
						last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
					};
					if (this.options.ranges) {
						this.yylloc.range = [i[0], i[0] + this.yyleng - t]
					}
					return this
				},
				more: function() {
					this._more = true;
					return this
				},
				less: function(e) {
					this.unput(this.match.slice(e))
				},
				pastInput: function() {
					var e = this.matched.substr(0, this.matched.length - this.match.length);
					return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
				},
				upcomingInput: function() {
					var e = this.match;
					if (e.length < 20) {
						e += this._input.substr(0, 20 - e.length)
					}
					return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
				},
				showPosition: function() {
					var e = this.pastInput();
					var t = (new Array(e.length + 1)).join("-");
					return e + this.upcomingInput() + "\n" + t + "^"
				},
				next: function() {
					if (this.done) {
						return this.EOF
					}
					if (!this._input) this.done = true;
					var e, t, n, r, i, s;
					if (!this._more) {
						this.yytext = "";
						this.match = ""
					}
					var o = this._currentRules();
					for (var u = 0; u < o.length; u++) {
						n = this._input.match(this.rules[o[u]]);
						if (n && (!t || n[0].length > t[0].length)) {
							t = n;
							r = u;
							if (!this.options.flex) break
						}
					}
					if (t) {
						s = t[0].match(/(?:\r\n?|\n).*/g);
						if (s) this.yylineno += s.length;
						this.yylloc = {
							first_line: this.yylloc.last_line,
							last_line: this.yylineno + 1,
							first_column: this.yylloc.last_column,
							last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
						};
						this.yytext += t[0];
						this.match += t[0];
						this.matches = t;
						this.yyleng = this.yytext.length;
						if (this.options.ranges) {
							this.yylloc.range = [this.offset, this.offset += this.yyleng]
						}
						this._more = false;
						this._input = this._input.slice(t[0].length);
						this.matched += t[0];
						e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]);
						if (this.done && this._input) this.done = false;
						if (e) return e;
						else return
					}
					if (this._input === "") {
						return this.EOF
					} else {
						return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
							text: "",
							token: null,
							line: this.yylineno
						})
					}
				},
				lex: function() {
					var t = this.next();
					if (typeof t !== "undefined") {
						return t
					} else {
						return this.lex()
					}
				},
				begin: function(t) {
					this.conditionStack.push(t)
				},
				popState: function() {
					return this.conditionStack.pop()
				},
				_currentRules: function() {
					return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
				},
				topState: function() {
					return this.conditionStack[this.conditionStack.length - 2]
				},
				pushState: function(t) {
					this.begin(t)
				}
			};
			e.options = {};
			e.performAction = function(t, n, r, i) {
				var s = i;
				switch (r) {
					case 0:
						n.yytext = "\\";
						return 14;
						break;
					case 1:
						if (n.yytext.slice(-1) !== "\\") this.begin("mu");
						if (n.yytext.slice(-1) === "\\") n.yytext = n.yytext.substr(0, n.yyleng - 1), this.begin("emu");
						if (n.yytext) return 14;
						break;
					case 2:
						return 14;
						break;
					case 3:
						if (n.yytext.slice(-1) !== "\\") this.popState();
						if (n.yytext.slice(-1) === "\\") n.yytext = n.yytext.substr(0, n.yyleng - 1);
						return 14;
						break;
					case 4:
						n.yytext = n.yytext.substr(0, n.yyleng - 4);
						this.popState();
						return 15;
						break;
					case 5:
						return 25;
						break;
					case 6:
						return 16;
						break;
					case 7:
						return 20;
						break;
					case 8:
						return 19;
						break;
					case 9:
						return 19;
						break;
					case 10:
						return 23;
						break;
					case 11:
						return 22;
						break;
					case 12:
						this.popState();
						this.begin("com");
						break;
					case 13:
						n.yytext = n.yytext.substr(3, n.yyleng - 5);
						this.popState();
						return 15;
						break;
					case 14:
						return 22;
						break;
					case 15:
						return 37;
						break;
					case 16:
						return 36;
						break;
					case 17:
						return 36;
						break;
					case 18:
						return 40;
						break;
					case 19:
						break;
					case 20:
						this.popState();
						return 24;
						break;
					case 21:
						this.popState();
						return 18;
						break;
					case 22:
						n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"');
						return 31;
						break;
					case 23:
						n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\'/g, "'");
						return 31;
						break;
					case 24:
						return 38;
						break;
					case 25:
						return 33;
						break;
					case 26:
						return 33;
						break;
					case 27:
						return 32;
						break;
					case 28:
						return 36;
						break;
					case 29:
						n.yytext = n.yytext.substr(1, n.yyleng - 2);
						return 36;
						break;
					case 30:
						return "INVALID";
						break;
					case 31:
						return 5;
						break
				}
			};
			e.rules = [/^(?:\\\\(?=(\{\{)))/, /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[}\/ ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:-?[0-9]+(?=[}\s]))/, /^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
			e.conditions = {
				mu: {
					rules: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
					inclusive: false
				},
				emu: {
					rules: [3],
					inclusive: false
				},
				com: {
					rules: [4],
					inclusive: false
				},
				INITIAL: {
					rules: [0, 1, 2, 31],
					inclusive: true
				}
			};
			return e
		}();
		e.lexer = t;
		n.prototype = e;
		e.Parser = n;
		return new n
	}();
	e.Parser = s;
	e.parse = function(t) {
		if (t.constructor === e.AST.ProgramNode) {
			return t
		}
		e.Parser.yy = e.AST;
		return e.Parser.parse(t)
	};
	e.AST = {};
	e.AST.ProgramNode = function(t, n) {
		this.type = "program";
		this.statements = t;
		if (n) {
			this.inverse = new e.AST.ProgramNode(n)
		}
	};
	e.AST.MustacheNode = function(e, t, n) {
		this.type = "mustache";
		this.escaped = !n;
		this.hash = t;
		var r = this.id = e[0];
		var i = this.params = e.slice(1);
		var s = this.eligibleHelper = r.isSimple;
		this.isHelper = s && (i.length || t)
	};
	e.AST.PartialNode = function(e, t) {
		this.type = "partial";
		this.partialName = e;
		this.context = t
	};
	e.AST.BlockNode = function(t, n, r, i) {
		var s = function(t, n) {
			if (t.original !== n.original) {
				throw new e.Exception(t.original + " doesn't match " + n.original)
			}
		};
		s(t.id, i);
		this.type = "block";
		this.mustache = t;
		this.program = n;
		this.inverse = r;
		if (this.inverse && !this.program) {
			this.isInverse = true
		}
	};
	e.AST.ContentNode = function(e) {
		this.type = "content";
		this.string = e
	};
	e.AST.HashNode = function(e) {
		this.type = "hash";
		this.pairs = e
	};
	e.AST.IdNode = function(t) {
		this.type = "ID";
		var n = "",
			r = [],
			i = 0;
		for (var s = 0, o = t.length; s < o; s++) {
			var u = t[s].part;
			n += (t[s].separator || "") + u;
			if (u === ".." || u === "." || u === "this") {
				if (r.length > 0) {
					throw new e.Exception("Invalid path: " + n)
				} else if (u === "..") {
					i++
				} else {
					this.isScoped = true
				}
			} else {
				r.push(u)
			}
		}
		this.original = n;
		this.parts = r;
		this.string = r.join(".");
		this.depth = i;
		this.isSimple = t.length === 1 && !this.isScoped && i === 0;
		this.stringModeValue = this.string
	};
	e.AST.PartialNameNode = function(e) {
		this.type = "PARTIAL_NAME";
		this.name = e.original
	};
	e.AST.DataNode = function(e) {
		this.type = "DATA";
		this.id = e
	};
	e.AST.StringNode = function(e) {
		this.type = "STRING";
		this.original = this.string = this.stringModeValue = e
	};
	e.AST.IntegerNode = function(e) {
		this.type = "INTEGER";
		this.original = this.integer = e;
		this.stringModeValue = Number(e)
	};
	e.AST.BooleanNode = function(e) {
		this.type = "BOOLEAN";
		this.bool = e;
		this.stringModeValue = e === "true"
	};
	e.AST.CommentNode = function(e) {
		this.type = "comment";
		this.comment = e
	};
	var o = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
	e.Exception = function(e) {
		var t = Error.prototype.constructor.apply(this, arguments);
		for (var n = 0; n < o.length; n++) {
			this[o[n]] = t[o[n]]
		}
	};
	e.Exception.prototype = new Error;
	e.SafeString = function(e) {
		this.string = e
	};
	e.SafeString.prototype.toString = function() {
		return this.string.toString()
	};
	var u = {
		"&": "&",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#x27;",
		"`": "&#x60;"
	};
	var a = /[&<>"'`]/g;
	var f = /[&<>"'`]/;
	var l = function(e) {
		return u[e] || "&"
	};
	e.Utils = {
		extend: function(e, t) {
			for (var n in t) {
				if (t.hasOwnProperty(n)) {
					e[n] = t[n]
				}
			}
		},
		escapeExpression: function(t) {
			if (t instanceof e.SafeString) {
				return t.toString()
			} else if (t == null || t === false) {
				return ""
			}
			t = t.toString();
			if (!f.test(t)) {
				return t
			}
			return t.replace(a, l)
		},
		isEmpty: function(e) {
			if (!e && e !== 0) {
				return true
			} else if (n.call(e) === "[object Array]" && e.length === 0) {
				return true
			} else {
				return false
			}
		}
	};
	var c = e.Compiler = function() {};
	var h = e.JavaScriptCompiler = function() {};
	c.prototype = {
		compiler: c,
		disassemble: function() {
			var e = this.opcodes,
				t, n = [],
				r, i;
			for (var s = 0, o = e.length; s < o; s++) {
				t = e[s];
				if (t.opcode === "DECLARE") {
					n.push("DECLARE " + t.name + "=" + t.value)
				} else {
					r = [];
					for (var u = 0; u < t.args.length; u++) {
						i = t.args[u];
						if (typeof i === "string") {
							i = '"' + i.replace("\n", "\\n") + '"'
						}
						r.push(i)
					}
					n.push(t.opcode + " " + r.join(" "))
				}
			}
			return n.join("\n")
		},
		equals: function(e) {
			var t = this.opcodes.length;
			if (e.opcodes.length !== t) {
				return false
			}
			for (var n = 0; n < t; n++) {
				var r = this.opcodes[n],
					i = e.opcodes[n];
				if (r.opcode !== i.opcode || r.args.length !== i.args.length) {
					return false
				}
				for (var s = 0; s < r.args.length; s++) {
					if (r.args[s] !== i.args[s]) {
						return false
					}
				}
			}
			t = this.children.length;
			if (e.children.length !== t) {
				return false
			}
			for (n = 0; n < t; n++) {
				if (!this.children[n].equals(e.children[n])) {
					return false
				}
			}
			return true
		},
		guid: 0,
		compile: function(e, t) {
			this.children = [];
			this.depths = {
				list: []
			};
			this.options = t;
			var n = this.options.knownHelpers;
			this.options.knownHelpers = {
				helperMissing: true,
				blockHelperMissing: true,
				each: true,
				"if": true,
				unless: true,
				"with": true,
				log: true
			};
			if (n) {
				for (var r in n) {
					this.options.knownHelpers[r] = n[r]
				}
			}
			return this.program(e)
		},
		accept: function(e) {
			return this[e.type](e)
		},
		program: function(e) {
			var t = e.statements,
				n;
			this.opcodes = [];
			for (var r = 0, i = t.length; r < i; r++) {
				n = t[r];
				this[n.type](n)
			}
			this.isSimple = i === 1;
			this.depths.list = this.depths.list.sort(function(e, t) {
				return e - t
			});
			return this
		},
		compileProgram: function(e) {
			var t = (new this.compiler).compile(e, this.options);
			var n = this.guid++,
				r;
			this.usePartial = this.usePartial || t.usePartial;
			this.children[n] = t;
			for (var i = 0, s = t.depths.list.length; i < s; i++) {
				r = t.depths.list[i];
				if (r < 2) {
					continue
				} else {
					this.addDepth(r - 1)
				}
			}
			return n
		},
		block: function(e) {
			var t = e.mustache,
				n = e.program,
				r = e.inverse;
			if (n) {
				n = this.compileProgram(n)
			}
			if (r) {
				r = this.compileProgram(r)
			}
			var i = this.classifyMustache(t);
			if (i === "helper") {
				this.helperMustache(t, n, r)
			} else if (i === "simple") {
				this.simpleMustache(t);
				this.opcode("pushProgram", n);
				this.opcode("pushProgram", r);
				this.opcode("emptyHash");
				this.opcode("blockValue")
			} else {
				this.ambiguousMustache(t, n, r);
				this.opcode("pushProgram", n);
				this.opcode("pushProgram", r);
				this.opcode("emptyHash");
				this.opcode("ambiguousBlockValue")
			}
			this.opcode("append")
		},
		hash: function(e) {
			var t = e.pairs,
				n, r;
			this.opcode("pushHash");
			for (var i = 0, s = t.length; i < s; i++) {
				n = t[i];
				r = n[1];
				if (this.options.stringParams) {
					if (r.depth) {
						this.addDepth(r.depth)
					}
					this.opcode("getContext", r.depth || 0);
					this.opcode("pushStringParam", r.stringModeValue, r.type)
				} else {
					this.accept(r)
				}
				this.opcode("assignToHash", n[0])
			}
			this.opcode("popHash")
		},
		partial: function(e) {
			var t = e.partialName;
			this.usePartial = true;
			if (e.context) {
				this.ID(e.context)
			} else {
				this.opcode("push", "depth0")
			}
			this.opcode("invokePartial", t.name);
			this.opcode("append")
		},
		content: function(e) {
			this.opcode("appendContent", e.string)
		},
		mustache: function(e) {
			var t = this.options;
			var n = this.classifyMustache(e);
			if (n === "simple") {
				this.simpleMustache(e)
			} else if (n === "helper") {
				this.helperMustache(e)
			} else {
				this.ambiguousMustache(e)
			}
			if (e.escaped && !t.noEscape) {
				this.opcode("appendEscaped")
			} else {
				this.opcode("append")
			}
		},
		ambiguousMustache: function(e, t, n) {
			var r = e.id,
				i = r.parts[0],
				s = t != null || n != null;
			this.opcode("getContext", r.depth);
			this.opcode("pushProgram", t);
			this.opcode("pushProgram", n);
			this.opcode("invokeAmbiguous", i, s)
		},
		simpleMustache: function(e) {
			var t = e.id;
			if (t.type === "DATA") {
				this.DATA(t)
			} else if (t.parts.length) {
				this.ID(t)
			} else {
				this.addDepth(t.depth);
				this.opcode("getContext", t.depth);
				this.opcode("pushContext")
			}
			this.opcode("resolvePossibleLambda")
		},
		helperMustache: function(e, t, n) {
			var r = this.setupFullMustacheParams(e, t, n),
				i = e.id.parts[0];
			if (this.options.knownHelpers[i]) {
				this.opcode("invokeKnownHelper", r.length, i)
			} else if (this.options.knownHelpersOnly) {
				throw new Error("You specified knownHelpersOnly, but used the unknown helper " + i)
			} else {
				this.opcode("invokeHelper", r.length, i)
			}
		},
		ID: function(e) {
			this.addDepth(e.depth);
			this.opcode("getContext", e.depth);
			var t = e.parts[0];
			if (!t) {
				this.opcode("pushContext")
			} else {
				this.opcode("lookupOnContext", e.parts[0])
			}
			for (var n = 1, r = e.parts.length; n < r; n++) {
				this.opcode("lookup", e.parts[n])
			}
		},
		DATA: function(t) {
			this.options.data = true;
			if (t.id.isScoped || t.id.depth) {
				throw new e.Exception("Scoped data references are not supported: " + t.original)
			}
			this.opcode("lookupData");
			var n = t.id.parts;
			for (var r = 0, i = n.length; r < i; r++) {
				this.opcode("lookup", n[r])
			}
		},
		STRING: function(e) {
			this.opcode("pushString", e.string)
		},
		INTEGER: function(e) {
			this.opcode("pushLiteral", e.integer)
		},
		BOOLEAN: function(e) {
			this.opcode("pushLiteral", e.bool)
		},
		comment: function() {},
		opcode: function(e) {
			this.opcodes.push({
				opcode: e,
				args: [].slice.call(arguments, 1)
			})
		},
		declare: function(e, t) {
			this.opcodes.push({
				opcode: "DECLARE",
				name: e,
				value: t
			})
		},
		addDepth: function(e) {
			if (isNaN(e)) {
				throw new Error("EWOT")
			}
			if (e === 0) {
				return
			}
			if (!this.depths[e]) {
				this.depths[e] = true;
				this.depths.list.push(e)
			}
		},
		classifyMustache: function(e) {
			var t = e.isHelper;
			var n = e.eligibleHelper;
			var r = this.options;
			if (n && !t) {
				var i = e.id.parts[0];
				if (r.knownHelpers[i]) {
					t = true
				} else if (r.knownHelpersOnly) {
					n = false
				}
			}
			if (t) {
				return "helper"
			} else if (n) {
				return "ambiguous"
			} else {
				return "simple"
			}
		},
		pushParams: function(e) {
			var t = e.length,
				n;
			while (t--) {
				n = e[t];
				if (this.options.stringParams) {
					if (n.depth) {
						this.addDepth(n.depth)
					}
					this.opcode("getContext", n.depth || 0);
					this.opcode("pushStringParam", n.stringModeValue, n.type)
				} else {
					this[n.type](n)
				}
			}
		},
		setupMustacheParams: function(e) {
			var t = e.params;
			this.pushParams(t);
			if (e.hash) {
				this.hash(e.hash)
			} else {
				this.opcode("emptyHash")
			}
			return t
		},
		setupFullMustacheParams: function(e, t, n) {
			var r = e.params;
			this.pushParams(r);
			this.opcode("pushProgram", t);
			this.opcode("pushProgram", n);
			if (e.hash) {
				this.hash(e.hash)
			} else {
				this.opcode("emptyHash")
			}
			return r
		}
	};
	var p = function(e) {
		this.value = e
	};
	h.prototype = {
		nameLookup: function(e, t) {
			if (/^[0-9]+$/.test(t)) {
				return e + "[" + t + "]"
			} else if (h.isValidJavaScriptVariableName(t)) {
				return e + "." + t
			} else {
				return e + "['" + t + "']"
			}
		},
		appendToBuffer: function(e) {
			if (this.environment.isSimple) {
				return "return " + e + ";"
			} else {
				return {
					appendToBuffer: true,
					content: e,
					toString: function() {
						return "buffer += " + e + ";"
					}
				}
			}
		},
		initializeBuffer: function() {
			return this.quotedString("")
		},
		namespace: "Handlebars",
		compile: function(t, n, r, i) {
			this.environment = t;
			this.options = n || {};
			e.log(e.logger.DEBUG, this.environment.disassemble() + "\n\n");
			this.name = this.environment.name;
			this.isChild = !!r;
			this.context = r || {
				programs: [],
				environments: [],
				aliases: {}
			};
			this.preamble();
			this.stackSlot = 0;
			this.stackVars = [];
			this.registers = {
				list: []
			};
			this.compileStack = [];
			this.inlineStack = [];
			this.compileChildren(t, n);
			var s = t.opcodes,
				o;
			this.i = 0;
			for (g = s.length; this.i < g; this.i++) {
				o = s[this.i];
				if (o.opcode === "DECLARE") {
					this[o.name] = o.value
				} else {
					this[o.opcode].apply(this, o.args)
				}
			}
			return this.createFunctionContext(i)
		},
		nextOpcode: function() {
			var e = this.environment.opcodes;
			return e[this.i + 1]
		},
		eat: function() {
			this.i = this.i + 1
		},
		preamble: function() {
			var e = [];
			if (!this.isChild) {
				var t = this.namespace;
				var n = "helpers = this.merge(helpers, " + t + ".helpers);";
				if (this.environment.usePartial) {
					n = n + " partials = this.merge(partials, " + t + ".partials);"
				}
				if (this.options.data) {
					n = n + " data = data || {};"
				}
				e.push(n)
			} else {
				e.push("")
			}
			if (!this.environment.isSimple) {
				e.push(", buffer = " + this.initializeBuffer())
			} else {
				e.push("")
			}
			this.lastContext = 0;
			this.source = e
		},
		createFunctionContext: function(t) {
			var n = this.stackVars.concat(this.registers.list);
			if (n.length > 0) {
				this.source[1] = this.source[1] + ", " + n.join(", ")
			}
			if (!this.isChild) {
				for (var r in this.context.aliases) {
					if (this.context.aliases.hasOwnProperty(r)) {
						this.source[1] = this.source[1] + ", " + r + "=" + this.context.aliases[r]
					}
				}
			}
			if (this.source[1]) {
				this.source[1] = "var " + this.source[1].substring(2) + ";"
			}
			if (!this.isChild) {
				this.source[1] += "\n" + this.context.programs.join("\n") + "\n"
			}
			if (!this.environment.isSimple) {
				this.source.push("return buffer;")
			}
			var i = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
			for (var s = 0, o = this.environment.depths.list.length; s < o; s++) {
				i.push("depth" + this.environment.depths.list[s])
			}
			var u = this.mergeSource();
			if (!this.isChild) {
				var a = e.COMPILER_REVISION,
					f = e.REVISION_CHANGES[a];
				u = "this.compilerInfo = [" + a + ",'" + f + "'];\n" + u
			}
			if (t) {
				i.push(u);
				return Function.apply(this, i)
			} else {
				var l = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + u + "}";
				e.log(e.logger.DEBUG, l + "\n\n");
				return l
			}
		},
		mergeSource: function() {
			var e = "",
				n;
			for (var r = 0, i = this.source.length; r < i; r++) {
				var s = this.source[r];
				if (s.appendToBuffer) {
					if (n) {
						n = n + "\n    + " + s.content
					} else {
						n = s.content
					}
				} else {
					if (n) {
						e += "buffer += " + n + ";\n  ";
						n = t
					}
					e += s + "\n  "
				}
			}
			return e
		},
		blockValue: function() {
			this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
			var e = ["depth0"];
			this.setupParams(0, e);
			this.replaceStack(function(t) {
				e.splice(1, 0, t);
				return "blockHelperMissing.call(" + e.join(", ") + ")"
			})
		},
		ambiguousBlockValue: function() {
			this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
			var e = ["depth0"];
			this.setupParams(0, e);
			var t = this.topStack();
			e.splice(1, 0, t);
			e[e.length - 1] = "options";
			this.source.push("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
		},
		appendContent: function(e) {
			this.source.push(this.appendToBuffer(this.quotedString(e)))
		},
		append: function() {
			this.flushInline();
			var e = this.popStack();
			this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }");
			if (this.environment.isSimple) {
				this.source.push("else { " + this.appendToBuffer("''") + " }")
			}
		},
		appendEscaped: function() {
			this.context.aliases.escapeExpression = "this.escapeExpression";
			this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
		},
		getContext: function(e) {
			if (this.lastContext !== e) {
				this.lastContext = e
			}
		},
		lookupOnContext: function(e) {
			this.push(this.nameLookup("depth" + this.lastContext, e, "context"))
		},
		pushContext: function() {
			this.pushStackLiteral("depth" + this.lastContext)
		},
		resolvePossibleLambda: function() {
			this.context.aliases.functionType = '"function"';
			this.replaceStack(function(e) {
				return "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e
			})
		},
		lookup: function(e) {
			this.replaceStack(function(t) {
				return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
			})
		},
		lookupData: function(e) {
			this.push("data")
		},
		pushStringParam: function(e, t) {
			this.pushStackLiteral("depth" + this.lastContext);
			this.pushString(t);
			if (typeof e === "string") {
				this.pushString(e)
			} else {
				this.pushStackLiteral(e)
			}
		},
		emptyHash: function() {
			this.pushStackLiteral("{}");
			if (this.options.stringParams) {
				this.register("hashTypes", "{}");
				this.register("hashContexts", "{}")
			}
		},
		pushHash: function() {
			this.hash = {
				values: [],
				types: [],
				contexts: []
			}
		},
		popHash: function() {
			var e = this.hash;
			this.hash = t;
			if (this.options.stringParams) {
				this.register("hashContexts", "{" + e.contexts.join(",") + "}");
				this.register("hashTypes", "{" + e.types.join(",") + "}")
			}
			this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
		},
		pushString: function(e) {
			this.pushStackLiteral(this.quotedString(e))
		},
		push: function(e) {
			this.inlineStack.push(e);
			return e
		},
		pushLiteral: function(e) {
			this.pushStackLiteral(e)
		},
		pushProgram: function(e) {
			if (e != null) {
				this.pushStackLiteral(this.programExpression(e))
			} else {
				this.pushStackLiteral(null)
			}
		},
		invokeHelper: function(e, t) {
			this.context.aliases.helperMissing = "helpers.helperMissing";
			var n = this.lastHelper = this.setupHelper(e, t, true);
			var r = this.nameLookup("depth" + this.lastContext, t, "context");
			this.push(n.name + " || " + r);
			this.replaceStack(function(e) {
				return e + " ? " + e + ".call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")"
			})
		},
		invokeKnownHelper: function(e, t) {
			var n = this.setupHelper(e, t);
			this.push(n.name + ".call(" + n.callParams + ")")
		},
		invokeAmbiguous: function(e, t) {
			this.context.aliases.functionType = '"function"';
			this.pushStackLiteral("{}");
			var n = this.setupHelper(0, e, t);
			var r = this.lastHelper = this.nameLookup("helpers", e, "helper");
			var i = this.nameLookup("depth" + this.lastContext, e, "context");
			var s = this.nextStack();
			this.source.push("if (" + s + " = " + r + ") { " + s + " = " + s + ".call(" + n.callParams + "); }");
			this.source.push("else { " + s + " = " + i + "; " + s + " = typeof " + s + " === functionType ? " + s + ".apply(depth0) : " + s + "; }")
		},
		invokePartial: function(e) {
			var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
			if (this.options.data) {
				t.push("data")
			}
			this.context.aliases.self = "this";
			this.push("self.invokePartial(" + t.join(", ") + ")")
		},
		assignToHash: function(e) {
			var t = this.popStack(),
				n, r;
			if (this.options.stringParams) {
				r = this.popStack();
				n = this.popStack()
			}
			var i = this.hash;
			if (n) {
				i.contexts.push("'" + e + "': " + n)
			}
			if (r) {
				i.types.push("'" + e + "': " + r)
			}
			i.values.push("'" + e + "': (" + t + ")")
		},
		compiler: h,
		compileChildren: function(e, t) {
			var n = e.children,
				r, i;
			for (var s = 0, o = n.length; s < o; s++) {
				r = n[s];
				i = new this.compiler;
				var u = this.matchExistingProgram(r);
				if (u == null) {
					this.context.programs.push("");
					u = this.context.programs.length;
					r.index = u;
					r.name = "program" + u;
					this.context.programs[u] = i.compile(r, t, this.context);
					this.context.environments[u] = r
				} else {
					r.index = u;
					r.name = "program" + u
				}
			}
		},
		matchExistingProgram: function(e) {
			for (var t = 0, n = this.context.environments.length; t < n; t++) {
				var r = this.context.environments[t];
				if (r && r.equals(e)) {
					return t
				}
			}
		},
		programExpression: function(e) {
			this.context.aliases.self = "this";
			if (e == null) {
				return "self.noop"
			}
			var t = this.environment.children[e],
				n = t.depths.list,
				r;
			var i = [t.index, t.name, "data"];
			for (var s = 0, o = n.length; s < o; s++) {
				r = n[s];
				if (r === 1) {
					i.push("depth0")
				} else {
					i.push("depth" + (r - 1))
				}
			}
			return (n.length === 0 ? "self.program(" : "self.programWithDepth(") + i.join(", ") + ")"
		},
		register: function(e, t) {
			this.useRegister(e);
			this.source.push(e + " = " + t + ";")
		},
		useRegister: function(e) {
			if (!this.registers[e]) {
				this.registers[e] = true;
				this.registers.list.push(e)
			}
		},
		pushStackLiteral: function(e) {
			return this.push(new p(e))
		},
		pushStack: function(e) {
			this.flushInline();
			var t = this.incrStack();
			if (e) {
				this.source.push(t + " = " + e + ";")
			}
			this.compileStack.push(t);
			return t
		},
		replaceStack: function(e) {
			var t = "",
				n = this.isInline(),
				r;
			if (n) {
				var i = this.popStack(true);
				if (i instanceof p) {
					r = i.value
				} else {
					var s = this.stackSlot ? this.topStackName() : this.incrStack();
					t = "(" + this.push(s) + " = " + i + "),";
					r = this.topStack()
				}
			} else {
				r = this.topStack()
			}
			var o = e.call(this, r);
			if (n) {
				if (this.inlineStack.length || this.compileStack.length) {
					this.popStack()
				}
				this.push("(" + t + o + ")")
			} else {
				if (!/^stack/.test(r)) {
					r = this.nextStack()
				}
				this.source.push(r + " = (" + t + o + ");")
			}
			return r
		},
		nextStack: function() {
			return this.pushStack()
		},
		incrStack: function() {
			this.stackSlot++;
			if (this.stackSlot > this.stackVars.length) {
				this.stackVars.push("stack" + this.stackSlot)
			}
			return this.topStackName()
		},
		topStackName: function() {
			return "stack" + this.stackSlot
		},
		flushInline: function() {
			var e = this.inlineStack;
			if (e.length) {
				this.inlineStack = [];
				for (var t = 0, n = e.length; t < n; t++) {
					var r = e[t];
					if (r instanceof p) {
						this.compileStack.push(r)
					} else {
						this.pushStack(r)
					}
				}
			}
		},
		isInline: function() {
			return this.inlineStack.length
		},
		popStack: function(e) {
			var t = this.isInline(),
				n = (t ? this.inlineStack : this.compileStack).pop();
			if (!e && n instanceof p) {
				return n.value
			} else {
				if (!t) {
					this.stackSlot--
				}
				return n
			}
		},
		topStack: function(e) {
			var t = this.isInline() ? this.inlineStack : this.compileStack,
				n = t[t.length - 1];
			if (!e && n instanceof p) {
				return n.value
			} else {
				return n
			}
		},
		quotedString: function(e) {
			return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
		},
		setupHelper: function(e, t, n) {
			var r = [];
			this.setupParams(e, r, n);
			var i = this.nameLookup("helpers", t, "helper");
			return {
				params: r,
				name: i,
				callParams: ["depth0"].concat(r).join(", "),
				helperMissingParams: n && ["depth0", this.quotedString(t)].concat(r).join(", ")
			}
		},
		setupParams: function(e, t, n) {
			var r = [],
				i = [],
				s = [],
				o, u, a;
			r.push("hash:" + this.popStack());
			u = this.popStack();
			a = this.popStack();
			if (a || u) {
				if (!a) {
					this.context.aliases.self = "this";
					a = "self.noop"
				}
				if (!u) {
					this.context.aliases.self = "this";
					u = "self.noop"
				}
				r.push("inverse:" + u);
				r.push("fn:" + a)
			}
			for (var f = 0; f < e; f++) {
				o = this.popStack();
				t.push(o);
				if (this.options.stringParams) {
					s.push(this.popStack());
					i.push(this.popStack())
				}
			}
			if (this.options.stringParams) {
				r.push("contexts:[" + i.join(",") + "]");
				r.push("types:[" + s.join(",") + "]");
				r.push("hashContexts:hashContexts");
				r.push("hashTypes:hashTypes")
			}
			if (this.options.data) {
				r.push("data:data")
			}
			r = "{" + r.join(",") + "}";
			if (n) {
				this.register("options", r);
				t.push("options")
			} else {
				t.push(r)
			}
			return t.join(", ")
		}
	};
	var d = ("break else new var" + " case finally return void" + " catch for switch while" + " continue function this with" + " default if throw" + " delete in try" + " do instanceof typeof" + " abstract enum int short" + " boolean export interface static" + " byte extends long super" + " char final native synchronized" + " class float package throws" + " const goto private transient" + " debugger implements protected volatile" + " double import public let yield").split(" ");
	var v = h.RESERVED_WORDS = {};
	for (var m = 0, g = d.length; m < g; m++) {
		v[d[m]] = true
	}
	h.isValidJavaScriptVariableName = function(e) {
		if (!h.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e)) {
			return true
		}
		return false
	};
	e.precompile = function(t, n) {
		if (t == null || typeof t !== "string" && t.constructor !== e.AST.ProgramNode) {
			throw new e.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t)
		}
		n = n || {};
		if (!("data" in n)) {
			n.data = true
		}
		var r = e.parse(t);
		var i = (new c).compile(r, n);
		return (new h).compile(i, n)
	};
	e.compile = function(n, r) {
		function s() {
			var i = e.parse(n);
			var s = (new c).compile(i, r);
			var o = (new h).compile(s, r, t, true);
			return e.template(o)
		}
		if (n == null || typeof n !== "string" && n.constructor !== e.AST.ProgramNode) {
			throw new e.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + n)
		}
		r = r || {};
		if (!("data" in r)) {
			r.data = true
		}
		var i;
		return function(e, t) {
			if (!i) {
				i = s()
			}
			return i.call(this, e, t)
		}
	};
	e.VM = {
		template: function(t) {
			var n = {
				escapeExpression: e.Utils.escapeExpression,
				invokePartial: e.VM.invokePartial,
				programs: [],
				program: function(t, n, r) {
					var i = this.programs[t];
					if (r) {
						i = e.VM.program(t, n, r)
					} else if (!i) {
						i = this.programs[t] = e.VM.program(t, n)
					}
					return i
				},
				merge: function(t, n) {
					var r = t || n;
					if (t && n) {
						r = {};
						e.Utils.extend(r, n);
						e.Utils.extend(r, t)
					}
					return r
				},
				programWithDepth: e.VM.programWithDepth,
				noop: e.VM.noop,
				compilerInfo: null
			};
			return function(r, i) {
				i = i || {};
				var s = t.call(n, e, r, i.helpers, i.partials, i.data);
				var o = n.compilerInfo || [],
					u = o[0] || 1,
					a = e.COMPILER_REVISION;
				if (u !== a) {
					if (u < a) {
						var f = e.REVISION_CHANGES[a],
							l = e.REVISION_CHANGES[u];
						throw "Template was precompiled with an older version of Handlebars than the current runtime. " + "Please update your precompiler to a newer version (" + f + ") or downgrade your runtime to an older version (" + l + ")."
					} else {
						throw "Template was precompiled with a newer version of Handlebars than the current runtime. " + "Please update your runtime to a newer version (" + o[1] + ")."
					}
				}
				return s
			}
		},
		programWithDepth: function(e, t, n) {
			var r = Array.prototype.slice.call(arguments, 3);
			var i = function(e, i) {
				i = i || {};
				return t.apply(this, [e, i.data || n].concat(r))
			};
			i.program = e;
			i.depth = r.length;
			return i
		},
		program: function(e, t, n) {
			var r = function(e, r) {
				r = r || {};
				return t(e, r.data || n)
			};
			r.program = e;
			r.depth = 0;
			return r
		},
		noop: function() {
			return ""
		},
		invokePartial: function(n, r, i, s, o, u) {
			var a = {
				helpers: s,
				partials: o,
				data: u
			};
			if (n === t) {
				throw new e.Exception("The partial " + r + " could not be found")
			} else if (n instanceof Function) {
				return n(i, a)
			} else if (!e.compile) {
				throw new e.Exception("The partial " + r + " could not be compiled when running in runtime-only mode")
			} else {
				o[r] = e.compile(n, {
					data: u !== t
				});
				return o[r](i, a)
			}
		}
	};
	e.template = e.VM.template;
})(Handlebars);
jQuery(document).ready(function(e) {
	var t = "hide-cart-control";
	e("#show_hide_skin_chooser").click(function(n) {
		n.preventDefault();
		var r = e("#cart-control-container");
		if (r.hasClass(t)) {
			r.removeClass(t)
		} else {
			r.addClass(t)
		}
		return false
	});
	e("#divider-mode").change(function() {
		var t = e("option:selected", this).val();
		e(".top-header").attr("class", "top-header " + t)
	})
});
(function(e, t, n, r) {
	function o(t, n) {
		this.element = t;
		this.options = e.extend({}, s, n);
		this._defaults = s;
		this._name = i;
		this.$el = e(t);
		this.init();
		this.$timeoutRef = new Array
	}

	function a() {
		return "U" + ++u
	}

	function f(e) {
		var t = e.split("/");
		return t[t.length - 1]
	}
	var i = "AXMenu",
		s = {
			showArrowIcon: true,
			firstLevelArrowIcon: '<i class="icon-chevron-down"></i>',
			menuArrowIcon: '<i class="icon-caret-up icon-arrow-menu"></i>',
			subMenuArrowIcon: '<i class="icon-chevron-right icon-arrow-submenu"></i>',
			activeLinkClass: "activelink"
		};
	o.prototype = {
		init: function() {
			this.currentPageLink = t.location.href;
			this.pageName = f(this.currentPageLink);
			this.addFirstLevelArrowIcon(this.$el, this.options);
			this.startEventListener(this.$el, this.options);
			this.addArrowIcon(this.$el, this.options);
			this.addSubArrowIcon(this.$el, this.options);
			this.setSelectedElementLink(this.$el)
		},
		startEventListener: function(n, r) {
			var i = this;
			var s = t.location.href;
			n.find("li").mouseenter(function() {
				var r = e(this).find("ul:first").first(),
					s = e(this).first(),
					o;
				o = r.next() ? r.next().first() : false;
				var u;
				if (!r.data("zeina-id")) {
					r.data("zeina-id", a())
				}
				u = r.data("zeina-id");
				t.clearTimeout(i.$timeoutRef[u]);
				s.unbind("mouseleave");
				n.find("ul").css("z-index", 1);
				if (r[0] && r[0].nodeName.toLowerCase() === "ul") {
					r.addClass("show-sub-menu");
					r.css("z-index", 2);
					if (o) {
						o.addClass("show-sub-menu")
					}
					s.mouseleave(function() {
						r.removeClass("show-sub-menu");
						if (o[0] && o[0].nodeName.toLowerCase() === "i") {
							o.removeClass("show-sub-menu")
						}
					})
				}
			})
		},
		addArrowIcon: function(t, n) {
			var r = this.options;
			if (n["showArrowIcon"] === true) {
				t.find(">li").each(function() {
					e(this).find("ul:first").each(function() {
						e(this).parent().append(r["menuArrowIcon"])
					})
				})
			}
		},
		addSubArrowIcon: function(t, n) {
			var r = this.options,
				i = this;
			if (n["showArrowIcon"] === true) {
				t.find("ul a").each(function() {
					var t = e(this);
					if (t.next()[0] && t.next()[0].nodeName.toLowerCase() === "ul") {
						t.append(r["subMenuArrowIcon"])
					}
				})
			}
		},
		addFirstLevelArrowIcon: function(t, n) {
			var r = this.options,
				i = this;
			if (n["showArrowIcon"] === true) {
				t.find(">li>a").each(function() {
					var t = e(this);
					if (t.next()[0] && t.next()[0].nodeName.toLowerCase() === "ul") {
						t.find("span.label-nav").append(r["firstLevelArrowIcon"])
					}
				})
			}
		},
		setSelectedElementLink: function(t) {
			var n = this.options,
				r, i, s, o = this;
			var u = false;
			e(t).find("a").each(function() {
				s = e(this);
				r = s.attr("href");
				if (e.trim(r) != "" && o.pageName == f(r)) {
					u = true;
					s.addClass(o.options["activeLinkClass"]);
					s.parentsUntil(t).each(function() {
						e(this).find(">a").addClass(o.options["activeLinkClass"])
					})
				}
			})
		}
	};
	e.fn[i] = function(t) {
		return this.each(function() {
			if (!e.data(this, "plugin_" + i)) {
				e.data(this, "plugin_" + i, new o(this, t))
			}
		})
	};
	var u = 0
})(jQuery, window, document);
$(window).ready(animator);
$(window).load(animator);
$(window).scroll(function(e) {
	animator()
});
(function(e) {
	e.fn.visible = function(t) {
		var n = e(this),
			r = e(window),
			i = r.scrollTop(),
			s = i + r.height(),
			o = n.offset().top,
			u = o + n.height(),
			a = t === true ? u : o,
			f = t === true ? o : u;
		return f <= s && a >= i
	}
})(jQuery);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
	"use strict";

	function t() {
		var e = document.createElement("bootstrap"),
			t = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var n in t)
			if (void 0 !== e.style[n]) return {
				end: t[n]
			};
		return !1
	}
	e.fn.emulateTransitionEnd = function(t) {
		var n = !1,
			r = this;
		e(this).one(e.support.transition.end, function() {
			n = !0
		});
		var i = function() {
			n || e(r).trigger(e.support.transition.end)
		};
		return setTimeout(i, t), this
	}, e(function() {
		e.support.transition = t()
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var n = e(this),
				i = n.data("bs.alert");
			i || n.data("bs.alert", i = new r(this)), "string" == typeof t && i[t].call(n)
		})
	}
	var n = '[data-dismiss="alert"]',
		r = function(t) {
			e(t).on("click", n, this.close)
		};
	r.VERSION = "3.1.1", r.prototype.close = function(t) {
		function n() {
			s.detach().trigger("closed.bs.alert").remove()
		}
		var r = e(this),
			i = r.attr("data-target");
		i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
		var s = e(i);
		t && t.preventDefault(), s.length || (s = r.hasClass("alert") ? r : r.parent()), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one(e.support.transition.end, n).emulateTransitionEnd(150) : n())
	};
	var i = e.fn.alert;
	e.fn.alert = t, e.fn.alert.Constructor = r, e.fn.alert.noConflict = function() {
		return e.fn.alert = i, this
	}, e(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var r = e(this),
				i = r.data("bs.button"),
				s = "object" == typeof t && t;
			i || r.data("bs.button", i = new n(this, s)), "toggle" == t ? i.toggle() : t && i.setState(t)
		})
	}
	var n = function(t, r) {
		this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, r), this.isLoading = !1
	};
	n.VERSION = "3.1.1", n.DEFAULTS = {
		loadingText: "loading..."
	}, n.prototype.setState = function(t) {
		var n = "disabled",
			r = this.$element,
			i = r.is("input") ? "val" : "html",
			s = r.data();
		t += "Text", null == s.resetText && r.data("resetText", r[i]()), r[i](null == s[t] ? this.options[t] : s[t]), setTimeout(e.proxy(function() {
			"loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
		}, this), 0)
	}, n.prototype.toggle = function() {
		var e = !0,
			t = this.$element.closest('[data-toggle="buttons"]');
		if (t.length) {
			var n = this.$element.find("input");
			"radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
		}
		e && this.$element.toggleClass("active")
	};
	var r = e.fn.button;
	e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
		return e.fn.button = r, this
	}, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
		var r = e(n.target);
		r.hasClass("btn") || (r = r.closest(".btn")), t.call(r, "toggle"), n.preventDefault()
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var r = e(this),
				i = r.data("bs.carousel"),
				s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t),
				o = "string" == typeof t ? t : s.slide;
			i || r.data("bs.carousel", i = new n(this, s)), "number" == typeof t ? i.to(t) : o ? i[o]() : s.interval && i.pause().cycle()
		})
	}
	var n = function(t, n) {
		this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
	};
	n.VERSION = "3.1.1", n.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0
	}, n.prototype.cycle = function(t) {
		return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
	}, n.prototype.getActiveIndex = function() {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(".item"), this.$items.index(this.$active)
	}, n.prototype.to = function(t) {
		var n = this,
			r = this.getActiveIndex();
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			n.to(t)
		}) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(this.$items[t]))
	}, n.prototype.pause = function(t) {
		return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, n.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, n.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, n.prototype.slide = function(t, n) {
		var r = this.$element.find(".item.active"),
			i = n || r[t](),
			s = this.interval,
			o = "next" == t ? "left" : "right",
			u = "next" == t ? "first" : "last",
			f = this;
		if (!i.length) {
			if (!this.options.wrap) return;
			i = this.$element.find(".item")[u]()
		}
		if (i.hasClass("active")) return this.sliding = !1;
		var l = i[0],
			c = e.Event("slide.bs.carousel", {
				relatedTarget: l,
				direction: o
			});
		if (this.$element.trigger(c), !c.isDefaultPrevented()) {
			this.sliding = !0, s && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
				var t = e(f.$indicators.children()[f.getActiveIndex()]);
				t && t.addClass("active")
			}));
			var h = e.Event("slid.bs.carousel", {
				relatedTarget: l,
				direction: o
			});
			return e.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), r.one(e.support.transition.end, function() {
				i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), f.sliding = !1, setTimeout(function() {
					f.$element.trigger(h)
				}, 0)
			}).emulateTransitionEnd(1e3 * r.css("transition-duration").slice(0, -1))) : (r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
		}
	};
	var r = e.fn.carousel;
	e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
		return e.fn.carousel = r, this
	}, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
		var r, i = e(this),
			s = e(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
			o = e.extend({}, s.data(), i.data()),
			u = i.attr("data-slide-to");
		u && (o.interval = !1), t.call(s, o), (u = i.attr("data-slide-to")) && s.data("bs.carousel").to(u), n.preventDefault()
	}), e(window).on("load", function() {
		e('[data-ride="carousel"]').each(function() {
			var n = e(this);
			t.call(n, n.data())
		})
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var r = e(this),
				i = r.data("bs.collapse"),
				s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
			!i && s.toggle && "show" == t && (t = !t), i || r.data("bs.collapse", i = new n(this, s)), "string" == typeof t && i[t]()
		})
	}
	var n = function(t, r) {
		this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
	};
	n.VERSION = "3.1.1", n.DEFAULTS = {
		toggle: !0
	}, n.prototype.dimension = function() {
		var e = this.$element.hasClass("width");
		return e ? "width" : "height"
	}, n.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var n = e.Event("show.bs.collapse");
			if (this.$element.trigger(n), !n.isDefaultPrevented()) {
				var r = this.$parent && this.$parent.find("> .panel > .in");
				if (r && r.length) {
					var i = r.data("bs.collapse");
					if (i && i.transitioning) return;
					t.call(r, "hide"), i || r.data("bs.collapse", null)
				}
				var s = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
				var o = function(t) {
					return t && t.target != this.$element[0] ? void this.$element.one(e.support.transition.end, e.proxy(o, this)) : (this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, void this.$element.off(e.support.transition.end + ".bs.collapse").trigger("shown.bs.collapse"))
				};
				if (!e.support.transition) return o.call(this);
				var u = e.camelCase(["scroll", s].join("-"));
				this.$element.on(e.support.transition.end + ".bs.collapse", e.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][u])
			}
		}
	}, n.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var t = e.Event("hide.bs.collapse");
			if (this.$element.trigger(t), !t.isDefaultPrevented()) {
				var n = this.dimension();
				this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var r = function(t) {
					return t && t.target != this.$element[0] ? void this.$element.one(e.support.transition.end, e.proxy(r, this)) : (this.transitioning = 0, void this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse"))
				};
				return e.support.transition ? void this.$element[n](0).one(e.support.transition.end, e.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
			}
		}
	}, n.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	var r = e.fn.collapse;
	e.fn.collapse = t, e.fn.collapse.Constructor = n, e.fn.collapse.noConflict = function() {
		return e.fn.collapse = r, this
	}, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
		var r, i = e(this),
			s = i.attr("data-target") || n.preventDefault() || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
			o = e(s),
			u = o.data("bs.collapse"),
			f = u ? "toggle" : i.data(),
			l = i.attr("data-parent"),
			c = l && e(l);
		u && u.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), t.call(o, f)
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		t && 3 === t.which || (e(i).remove(), e(s).each(function() {
			var r = n(e(this)),
				i = {
					relatedTarget: this
				};
			r.hasClass("open") && (r.trigger(t = e.Event("hide.bs.dropdown", i)), t.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
		}))
	}

	function n(t) {
		var n = t.attr("data-target");
		n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
		var r = n && e(n);
		return r && r.length ? r : t.parent()
	}

	function r(t) {
		return this.each(function() {
			var n = e(this),
				r = n.data("bs.dropdown");
			r || n.data("bs.dropdown", r = new o(this)), "string" == typeof t && r[t].call(n)
		})
	}
	var i = ".dropdown-backdrop",
		s = '[data-toggle="dropdown"]',
		o = function(t) {
			e(t).on("click.bs.dropdown", this.toggle)
		};
	o.VERSION = "3.1.1", o.prototype.toggle = function(r) {
		var i = e(this);
		if (!i.is(".disabled, :disabled")) {
			var s = n(i),
				o = s.hasClass("open");
			if (t(), !o) {
				"ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
				var u = {
					relatedTarget: this
				};
				if (s.trigger(r = e.Event("show.bs.dropdown", u)), r.isDefaultPrevented()) return;
				i.trigger("focus"), s.toggleClass("open").trigger("shown.bs.dropdown", u)
			}
			return !1
		}
	}, o.prototype.keydown = function(t) {
		if (/(38|40|27)/.test(t.keyCode)) {
			var r = e(this);
			if (t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled")) {
				var i = n(r),
					o = i.hasClass("open");
				if (!o || o && 27 == t.keyCode) return 27 == t.which && i.find(s).trigger("focus"), r.trigger("click");
				var u = " li:not(.divider):visible a",
					l = i.find('[role="menu"]' + u + ', [role="listbox"]' + u);
				if (l.length) {
					var h = l.index(l.filter(":focus"));
					38 == t.keyCode && h > 0 && h--, 40 == t.keyCode && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
				}
			}
		}
	};
	var u = e.fn.dropdown;
	e.fn.dropdown = r, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
		return e.fn.dropdown = u, this
	}, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
		e.stopPropagation()
	}).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
}(jQuery), + function(e) {
	"use strict";

	function t(t, r) {
		return this.each(function() {
			var i = e(this),
				s = i.data("bs.modal"),
				o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
			s || i.data("bs.modal", s = new n(this, o)), "string" == typeof t ? s[t](r) : o.show && s.show(r)
		})
	}
	var n = function(t, n) {
		this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	n.VERSION = "3.1.1", n.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, n.prototype.toggle = function(e) {
		return this.isShown ? this.hide() : this.show(e)
	}, n.prototype.show = function(t) {
		var n = this,
			r = e.Event("show.bs.modal", {
				relatedTarget: t
			});
		this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
			var r = e.support.transition && n.$element.hasClass("fade");
			n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
			var i = e.Event("shown.bs.modal", {
				relatedTarget: t
			});
			r ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
				n.$element.trigger("focus").trigger(i)
			}).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(i)
		}))
	}, n.prototype.hide = function(t) {
		t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	}, n.prototype.enforceFocus = function() {
		e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
			this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
		}, this))
	}, n.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
			27 == e.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, n.prototype.hideModal = function() {
		var e = this;
		this.$element.hide(), this.backdrop(function() {
			e.$element.trigger("hidden.bs.modal")
		})
	}, n.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, n.prototype.backdrop = function(t) {
		var n = this,
			r = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var i = e.support.transition && r;
			if (this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
					e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
				}, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
			i ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var s = function() {
				n.removeBackdrop(), t && t()
			};
			e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, s).emulateTransitionEnd(150) : s()
		} else t && t()
	}, n.prototype.checkScrollbar = function() {
		document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
	}, n.prototype.setScrollbar = function() {
		var e = parseInt(this.$body.css("padding-right") || 0);
		this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
	}, n.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", "")
	}, n.prototype.measureScrollbar = function() {
		var e = document.createElement("div");
		e.className = "modal-scrollbar-measure", this.$body.append(e);
		var t = e.offsetWidth - e.clientWidth;
		return this.$body[0].removeChild(e), t
	};
	var r = e.fn.modal;
	e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
		return e.fn.modal = r, this
	}, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
		var r = e(this),
			i = r.attr("href"),
			s = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
			o = s.data("bs.modal") ? "toggle" : e.extend({
				remote: !/#/.test(i) && i
			}, s.data(), r.data());
		r.is("a") && n.preventDefault(), t.call(s, o, this), s.one("hide.bs.modal", function() {
			r.is(":visible") && r.trigger("focus")
		})
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var r = e(this),
				i = r.data("bs.tooltip"),
				s = "object" == typeof t && t;
			(i || "destroy" != t) && (i || r.data("bs.tooltip", i = new n(this, s)), "string" == typeof t && i[t]())
		})
	}
	var n = function(e, t) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
	};
	n.VERSION = "3.1.1", n.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, n.prototype.init = function(t, n, r) {
		this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
		for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
			var o = i[s];
			if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
			else if ("manual" != o) {
				var u = "hover" == o ? "mouseenter" : "focusin",
					f = "hover" == o ? "mouseleave" : "focusout";
				this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, e.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = e.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, n.prototype.getDefaults = function() {
		return n.DEFAULTS
	}, n.prototype.getOptions = function(t) {
		return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
			show: t.delay,
			hide: t.delay
		}), t
	}, n.prototype.getDelegateOptions = function() {
		var t = {},
			n = this.getDefaults();
		return this._options && e.each(this._options, function(e, r) {
			n[e] != r && (t[e] = r)
		}), t
	}, n.prototype.enter = function(t) {
		var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
		return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
			"in" == n.hoverState && n.show()
		}, n.options.delay.show)) : n.show()
	}, n.prototype.leave = function(t) {
		var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
		return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
			"out" == n.hoverState && n.hide()
		}, n.options.delay.hide)) : n.hide()
	}, n.prototype.show = function() {
		var t = e.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			if (this.$element.trigger(t), t.isDefaultPrevented()) return;
			var n = this,
				r = this.tip(),
				i = this.getUID(this.type);
			this.setContent(), r.attr("id", i), this.$element.attr("aria-describedby", i), this.options.animation && r.addClass("fade");
			var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
				o = /\s?auto?\s?/i,
				u = o.test(s);
			u && (s = s.replace(o, "") || "top"), r.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
			var f = this.getPosition(),
				l = r[0].offsetWidth,
				c = r[0].offsetHeight;
			if (u) {
				var h = s,
					p = this.$element.parent(),
					d = this.getPosition(p);
				s = "bottom" == s && f.top + f.height + c - d.scroll > d.height ? "top" : "top" == s && f.top - d.scroll - c < 0 ? "bottom" : "right" == s && f.right + l > d.width ? "left" : "left" == s && f.left - l < d.left ? "right" : s, r.removeClass(h).addClass(s)
			}
			var v = this.getCalculatedOffset(s, f, l, c);
			this.applyPlacement(v, s), this.hoverState = null;
			var m = function() {
				n.$element.trigger("shown.bs." + n.type)
			};
			e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, m).emulateTransitionEnd(150) : m()
		}
	}, n.prototype.applyPlacement = function(t, n) {
		var r = this.tip(),
			i = r[0].offsetWidth,
			s = r[0].offsetHeight,
			o = parseInt(r.css("margin-top"), 10),
			u = parseInt(r.css("margin-left"), 10);
		isNaN(o) && (o = 0), isNaN(u) && (u = 0), t.top = t.top + o, t.left = t.left + u, e.offset.setOffset(r[0], e.extend({
			using: function(e) {
				r.css({
					top: Math.round(e.top),
					left: Math.round(e.left)
				})
			}
		}, t), 0), r.addClass("in");
		var f = r[0].offsetWidth,
			l = r[0].offsetHeight;
		"top" == n && l != s && (t.top = t.top + s - l);
		var c = this.getViewportAdjustedDelta(n, t, f, l);
		c.left ? t.left += c.left : t.top += c.top;
		var h = c.left ? 2 * c.left - i + f : 2 * c.top - s + l,
			p = c.left ? "left" : "top",
			d = c.left ? "offsetWidth" : "offsetHeight";
		r.offset(t), this.replaceArrow(h, r[0][d], p)
	}, n.prototype.replaceArrow = function(e, t, n) {
		this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
	}, n.prototype.setContent = function() {
		var e = this.tip(),
			t = this.getTitle();
		e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
	}, n.prototype.hide = function() {
		function t() {
			"in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
		}
		var n = this,
			r = this.tip(),
			i = e.Event("hide.bs." + this.type);
		return this.$element.removeAttr("aria-describedby"), this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
	}, n.prototype.fixTitle = function() {
		var e = this.$element;
		(e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
	}, n.prototype.hasContent = function() {
		return this.getTitle()
	}, n.prototype.getPosition = function(t) {
		t = t || this.$element;
		var n = t[0],
			r = "BODY" == n.tagName;
		return e.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
			scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
			width: r ? e(window).width() : t.outerWidth(),
			height: r ? e(window).height() : t.outerHeight()
		}, r ? {
			top: 0,
			left: 0
		} : t.offset())
	}, n.prototype.getCalculatedOffset = function(e, t, n, r) {
		return "bottom" == e ? {
			top: t.top + t.height,
			left: t.left + t.width / 2 - n / 2
		} : "top" == e ? {
			top: t.top - r,
			left: t.left + t.width / 2 - n / 2
		} : "left" == e ? {
			top: t.top + t.height / 2 - r / 2,
			left: t.left - n
		} : {
			top: t.top + t.height / 2 - r / 2,
			left: t.left + t.width
		}
	}, n.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
		var i = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return i;
		var s = this.options.viewport && this.options.viewport.padding || 0,
			o = this.getPosition(this.$viewport);
		if (/right|left/.test(e)) {
			var u = t.top - s - o.scroll,
				a = t.top + s - o.scroll + r;
			u < o.top ? i.top = o.top - u : a > o.top + o.height && (i.top = o.top + o.height - a)
		} else {
			var f = t.left - s,
				l = t.left + s + n;
			f < o.left ? i.left = o.left - f : l > o.width && (i.left = o.left + o.width - l)
		}
		return i
	}, n.prototype.getTitle = function() {
		var e, t = this.$element,
			n = this.options;
		return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
	}, n.prototype.getUID = function(e) {
		do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
		return e
	}, n.prototype.tip = function() {
		return this.$tip = this.$tip || e(this.options.template)
	}, n.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, n.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	}, n.prototype.enable = function() {
		this.enabled = !0
	}, n.prototype.disable = function() {
		this.enabled = !1
	}, n.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, n.prototype.toggle = function(t) {
		var n = this;
		t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
	}, n.prototype.destroy = function() {
		clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	};
	var r = e.fn.tooltip;
	e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
		return e.fn.tooltip = r, this
	}
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var r = e(this),
				i = r.data("bs.popover"),
				s = "object" == typeof t && t;
			(i || "destroy" != t) && (i || r.data("bs.popover", i = new n(this, s)), "string" == typeof t && i[t]())
		})
	}
	var n = function(e, t) {
		this.init("popover", e, t)
	};
	if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
	n.VERSION = "3.1.1", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
		return n.DEFAULTS
	}, n.prototype.setContent = function() {
		var e = this.tip(),
			t = this.getTitle(),
			n = this.getContent();
		e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
	}, n.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, n.prototype.getContent = function() {
		var e = this.$element,
			t = this.options;
		return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
	}, n.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, n.prototype.tip = function() {
		return this.$tip || (this.$tip = e(this.options.template)), this.$tip
	};
	var r = e.fn.popover;
	e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
		return e.fn.popover = r, this
	}
}(jQuery), + function(e) {
	"use strict";

	function t(n, r) {
		var i, s = e.proxy(this.process, this);
		this.$element = e(e(n).is("body") ? window : n), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scrollspy", s), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || (i = e(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
	}

	function n(n) {
		return this.each(function() {
			var r = e(this),
				i = r.data("bs.scrollspy"),
				s = "object" == typeof n && n;
			i || r.data("bs.scrollspy", i = new t(this, s)), "string" == typeof n && i[n]()
		})
	}
	t.VERSION = "3.1.1", t.DEFAULTS = {
		offset: 10
	}, t.prototype.refresh = function() {
		var t = this.$element[0] == window ? "offset" : "position";
		this.offsets = e([]), this.targets = e([]);
		var n = this;
		this.$body.find(this.selector).filter(":visible").map(function() {
			var r = e(this),
				i = r.data("target") || r.attr("href"),
				s = /^#./.test(i) && e(i);
			return s && s.length && s.is(":visible") && [
				[s[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]
			] || null
		}).sort(function(e, t) {
			return e[0] - t[0]
		}).each(function() {
			n.offsets.push(this[0]), n.targets.push(this[1])
		})
	}, t.prototype.process = function() {
		var e, t = this.$scrollElement.scrollTop() + this.options.offset,
			n = this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight),
			r = this.options.offset + n - this.$scrollElement.height(),
			i = this.offsets,
			s = this.targets,
			o = this.activeTarget;
		if (t >= r) return o != (e = s.last()[0]) && this.activate(e);
		if (o && t <= i[0]) return o != (e = s[0]) && this.activate(e);
		for (e = i.length; e--;) o != s[e] && t >= i[e] && (!i[e + 1] || t <= i[e + 1]) && this.activate(s[e])
	}, t.prototype.activate = function(t) {
		this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
		var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
			r = e(n).parents("li").addClass("active");
		r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
	};
	var r = e.fn.scrollspy;
	e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
		return e.fn.scrollspy = r, this
	}, e(window).on("load.bs.scrollspy.data-api", function() {
		e('[data-spy="scroll"]').each(function() {
			var t = e(this);
			n.call(t, t.data())
		})
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var r = e(this),
				i = r.data("bs.tab");
			i || r.data("bs.tab", i = new n(this)), "string" == typeof t && i[t]()
		})
	}
	var n = function(t) {
		this.element = e(t)
	};
	n.VERSION = "3.1.1", n.prototype.show = function() {
		var t = this.element,
			n = t.closest("ul:not(.dropdown-menu)"),
			r = t.data("target");
		if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
			var i = n.find(".active:last a")[0],
				s = e.Event("show.bs.tab", {
					relatedTarget: i
				});
			if (t.trigger(s), !s.isDefaultPrevented()) {
				var o = e(r);
				this.activate(t.closest("li"), n), this.activate(o, o.parent(), function() {
					t.trigger({
						type: "shown.bs.tab",
						relatedTarget: i
					})
				})
			}
		}
	}, n.prototype.activate = function(t, n, r) {
		function i() {
			s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
		}
		var s = n.find("> .active"),
			o = r && e.support.transition && s.hasClass("fade");
		o ? s.one(e.support.transition.end, i).emulateTransitionEnd(150) : i(), s.removeClass("in")
	};
	var r = e.fn.tab;
	e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
		return e.fn.tab = r, this
	}, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
		n.preventDefault(), t.call(e(this), "show")
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var r = e(this),
				i = r.data("bs.affix"),
				s = "object" == typeof t && t;
			i || r.data("bs.affix", i = new n(this, s)), "string" == typeof t && i[t]()
		})
	}
	var n = function(t, r) {
		this.options = e.extend({}, n.DEFAULTS, r), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
	};
	n.VERSION = "3.1.1", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
		offset: 0,
		target: window
	}, n.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(n.RESET).addClass("affix");
		var e = this.$target.scrollTop(),
			t = this.$element.offset();
		return this.pinnedOffset = t.top - e
	}, n.prototype.checkPositionWithEventLoop = function() {
		setTimeout(e.proxy(this.checkPosition, this), 1)
	}, n.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var t = e(document).height(),
				r = this.$target.scrollTop(),
				i = this.$element.offset(),
				s = this.options.offset,
				o = s.top,
				u = s.bottom;
			"object" != typeof s && (u = o = s), "function" == typeof o && (o = s.top(this.$element)), "function" == typeof u && (u = s.bottom(this.$element));
			var f = null != this.unpin && r + this.unpin <= i.top ? !1 : null != u && i.top + this.$element.height() >= t - u ? "bottom" : null != o && o >= r ? "top" : !1;
			if (this.affixed !== f) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (f ? "-" + f : ""),
					h = e.Event(l + ".bs.affix");
				this.$element.trigger(h), h.isDefaultPrevented() || (this.affixed = f, this.unpin = "bottom" == f ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(e.Event(l.replace("affix", "affixed"))), "bottom" == f && this.$element.offset({
					top: t - this.$element.height() - u
				}))
			}
		}
	};
	var r = e.fn.affix;
	e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
		return e.fn.affix = r, this
	}, e(window).on("load", function() {
		e('[data-spy="affix"]').each(function() {
			var n = e(this),
				r = n.data();
			r.offset = r.offset || {}, r.offsetBottom && (r.offset.bottom = r.offsetBottom), r.offsetTop && (r.offset.top = r.offsetTop), t.call(n, r)
		})
	})
}(jQuery);
! function(e) {
	"use strict";

	function t(e, t) {
		return e.toUpperCase().indexOf(t.toUpperCase()) > -1
	}

	function n(t) {
		var n = [{
			re: /[\xC0-\xC6]/g,
			ch: "A"
		}, {
			re: /[\xE0-\xE6]/g,
			ch: "a"
		}, {
			re: /[\xC8-\xCB]/g,
			ch: "E"
		}, {
			re: /[\xE8-\xEB]/g,
			ch: "e"
		}, {
			re: /[\xCC-\xCF]/g,
			ch: "I"
		}, {
			re: /[\xEC-\xEF]/g,
			ch: "i"
		}, {
			re: /[\xD2-\xD6]/g,
			ch: "O"
		}, {
			re: /[\xF2-\xF6]/g,
			ch: "o"
		}, {
			re: /[\xD9-\xDC]/g,
			ch: "U"
		}, {
			re: /[\xF9-\xFC]/g,
			ch: "u"
		}, {
			re: /[\xC7-\xE7]/g,
			ch: "c"
		}, {
			re: /[\xD1]/g,
			ch: "N"
		}, {
			re: /[\xF1]/g,
			ch: "n"
		}];
		return e.each(n, function() {
			t = t.replace(this.re, this.ch)
		}), t
	}

	function r(t, n) {
		var r = arguments,
			s = t,
			t = r[0],
			n = r[1];
		[].shift.apply(r), "undefined" == typeof t && (t = s);
		var o, u = this.each(function() {
			var s = e(this);
			if (s.is("select")) {
				var u = s.data("selectpicker"),
					f = "object" == typeof t && t;
				if (u) {
					if (f)
						for (var l in f) f.hasOwnProperty(l) && (u.options[l] = f[l])
				} else {
					var h = e.extend({}, i.DEFAULTS, e.fn.selectpicker.defaults || {}, s.data(), f);
					s.data("selectpicker", u = new i(this, h, n))
				}
				"string" == typeof t && (o = u[t] instanceof Function ? u[t].apply(u, r) : u.options[t])
			}
		});
		return "undefined" != typeof o ? o : u
	}
	e.expr[":"].icontains = function(n, r, i) {
		return t(e(n).text(), i[3])
	}, e.expr[":"].aicontains = function(n, r, i) {
		return t(e(n).data("normalizedText") || e(n).text(), i[3])
	};
	var i = function(t, n, r) {
		r && (r.stopPropagation(), r.preventDefault()), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = n, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = i.prototype.val, this.render = i.prototype.render, this.refresh = i.prototype.refresh, this.setStyle = i.prototype.setStyle, this.selectAll = i.prototype.selectAll, this.deselectAll = i.prototype.deselectAll, this.destroy = i.prototype.remove, this.remove = i.prototype.remove, this.show = i.prototype.show, this.hide = i.prototype.hide, this.init()
	};
	i.VERSION = "1.6.2", i.DEFAULTS = {
		noneSelectedText: "Nothing selected",
		noneResultsText: "No results match",
		countSelectedText: function(e) {
			return 1 == e ? "{0} item selected" : "{0} items selected"
		},
		maxOptionsText: function(e, t) {
			var n = [];
			return n[0] = 1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", n[1] = 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)", n
		},
		selectAllText: "Select All",
		deselectAllText: "Deselect All",
		multipleSeparator: ", ",
		style: "btn-default",
		size: "auto",
		title: null,
		selectedTextFormat: "values",
		width: !1,
		container: !1,
		hideDisabled: !1,
		showSubtext: !1,
		showIcon: !0,
		showContent: !0,
		dropupAuto: !0,
		header: !1,
		liveSearch: !1,
		actionsBox: !1,
		iconBase: "glyphicon",
		tickIcon: "glyphicon-ok",
		maxOptions: !1,
		mobile: !1,
		selectOnTab: !1,
		dropdownAlignRight: !1,
		searchAccentInsensitive: !1
	}, i.prototype = {
		constructor: i,
		init: function() {
			var t = this,
				n = this.$element.attr("id");
			this.$element.hide(), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof n && (this.$button.attr("data-id", n), e('label[for="' + n + '"]').click(function(e) {
				e.preventDefault(), t.$button.focus()
			})), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile()
		},
		createDropdown: function() {
			var t = this.multiple ? " show-tick" : "",
				n = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
				r = this.autofocus ? " autofocus" : "",
				i = this.$element.parents().hasClass("form-group-lg") ? " btn-lg" : this.$element.parents().hasClass("form-group-sm") ? " btn-sm" : "",
				s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
				o = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>' : "",
				u = this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">' + this.options.selectAllText + '</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
				f = '<div class="btn-group bootstrap-select' + t + n + '"><button type="button" class="btn dropdown-toggle selectpicker' + i + '" data-toggle="dropdown"' + r + '><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">' + s + o + u + '<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';
			return e(f)
		},
		createView: function() {
			var e = this.createDropdown(),
				t = this.createLi();
			return e.find("ul").append(t), e
		},
		reloadLi: function() {
			this.destroyLi();
			var e = this.createLi();
			this.$menu.find("ul").append(e)
		},
		destroyLi: function() {
			this.$menu.find("li").remove()
		},
		createLi: function() {
			var t = this,
				r = [],
				i = 0,
				s = function(e, t, n) {
					return "<li" + ("undefined" != typeof n ? ' class="' + n + '"' : "") + ("undefined" != typeof t | null === t ? ' data-original-index="' + t + '"' : "") + ">" + e + "</li>"
				},
				o = function(r, i, s, o) {
					var u = n(e.trim(e("<div/>").html(r).text()).replace(/\s\s+/g, " "));
					return '<a tabindex="0"' + ("undefined" != typeof i ? ' class="' + i + '"' : "") + ("undefined" != typeof s ? ' style="' + s + '"' : "") + ("undefined" != typeof o ? 'data-optgroup="' + o + '"' : "") + ' data-normalized-text="' + u + '">' + r + '<span class="' + t.options.iconBase + " " + t.options.tickIcon + ' check-mark"></span></a>'
				};
			return this.$element.find("option").each(function() {
				var n = e(this),
					u = n.attr("class") || "",
					l = n.attr("style"),
					c = n.data("content") ? n.data("content") : n.html(),
					h = "undefined" != typeof n.data("subtext") ? '<small class="muted text-muted">' + n.data("subtext") + "</small>" : "",
					p = "undefined" != typeof n.data("icon") ? '<span class="' + t.options.iconBase + " " + n.data("icon") + '"></span> ' : "",
					v = n.is(":disabled") || n.parent().is(":disabled"),
					m = n[0].index;
				if ("" !== p && v && (p = "<span>" + p + "</span>"), n.data("content") || (c = p + '<span class="text">' + c + h + "</span>"), !t.options.hideDisabled || !v)
					if (n.parent().is("optgroup") && n.data("divider") !== !0) {
						if (0 === n.index()) {
							i += 1;
							var y = n.parent().attr("label"),
								w = "undefined" != typeof n.parent().data("subtext") ? '<small class="muted text-muted">' + n.parent().data("subtext") + "</small>" : "",
								E = n.parent().data("icon") ? '<span class="' + t.options.iconBase + " " + n.parent().data("icon") + '"></span> ' : "";
							y = E + '<span class="text">' + y + w + "</span>", 0 !== m && r.length > 0 && r.push(s("", null, "divider")), r.push(s(y, null, "dropdown-header"))
						}
						r.push(s(o(c, "opt " + u, l, i), m))
					} else r.push(n.data("divider") === !0 ? s("", m, "divider") : n.data("hidden") === !0 ? s(o(c, u, l), m, "hide is-hidden") : s(o(c, u, l), m))
			}), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e(r.join(""))
		},
		findLis: function() {
			return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
		},
		render: function(t) {
			var n = this;
			t !== !1 && this.$element.find("option").each(function(t) {
				n.setDisabled(t, e(this).is(":disabled") || e(this).parent().is(":disabled")), n.setSelected(t, e(this).is(":selected"))
			}), this.tabIndex();
			var r = this.options.hideDisabled ? ":not([disabled])" : "",
				i = this.$element.find("option:selected" + r).map(function() {
					var t, r = e(this),
						i = r.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + r.data("icon") + '"></i> ' : "";
					return t = n.options.showSubtext && r.attr("data-subtext") && !n.multiple ? ' <small class="muted text-muted">' + r.data("subtext") + "</small>" : "", r.data("content") && n.options.showContent ? r.data("content") : "undefined" != typeof r.attr("title") ? r.attr("title") : i + r.html() + t
				}).toArray(),
				s = this.multiple ? i.join(this.options.multipleSeparator) : i[0];
			if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
				var o = this.options.selectedTextFormat.split(">");
				if (o.length > 1 && i.length > o[1] || 1 == o.length && i.length >= 2) {
					r = this.options.hideDisabled ? ", [disabled]" : "";
					var u = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + r).length,
						f = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(i.length, u) : this.options.countSelectedText;
					s = f.replace("{0}", i.length.toString()).replace("{1}", u.toString())
				}
			}
			this.options.title = this.$element.attr("title"), "static" == this.options.selectedTextFormat && (s = this.options.title), s || (s = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", e.trim(e("<div/>").html(s).text()).replace(/\s\s+/g, " ")), this.$newElement.find(".filter-option").html(s)
		},
		setStyle: function(e, t) {
			this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi, ""));
			var n = e ? e : this.options.style;
			"add" == t ? this.$button.addClass(n) : "remove" == t ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style), this.$button.addClass(n))
		},
		liHeight: function() {
			if (this.options.size !== !1) {
				var e = this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus", !1).end().appendTo("body"),
					t = e.addClass("open").find("> .dropdown-menu"),
					n = t.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(),
					r = this.options.header ? t.find(".popover-title").outerHeight() : 0,
					i = this.options.liveSearch ? t.find(".bs-searchbox").outerHeight() : 0,
					s = this.options.actionsBox ? t.find(".bs-actionsbox").outerHeight() : 0;
				e.remove(), this.$newElement.data("liHeight", n).data("headerHeight", r).data("searchHeight", i).data("actionsHeight", s)
			}
		},
		setSize: function() {
			this.findLis();
			var t, n, r, i = this,
				s = this.$menu,
				o = s.find(".inner"),
				u = this.$newElement.outerHeight(),
				f = this.$newElement.data("liHeight"),
				l = this.$newElement.data("headerHeight"),
				c = this.$newElement.data("searchHeight"),
				h = this.$newElement.data("actionsHeight"),
				p = this.$lis.filter(".divider").outerHeight(!0),
				d = parseInt(s.css("padding-top")) + parseInt(s.css("padding-bottom")) + parseInt(s.css("border-top-width")) + parseInt(s.css("border-bottom-width")),
				v = this.options.hideDisabled ? ", .disabled" : "",
				m = e(window),
				g = d + parseInt(s.css("margin-top")) + parseInt(s.css("margin-bottom")) + 2,
				y = function() {
					n = i.$newElement.offset().top - m.scrollTop(), r = m.height() - n - u
				};
			if (y(), this.options.header && s.css("padding-top", 0), "auto" == this.options.size) {
				var b = function() {
					var e, u = i.$lis.not(".hide");
					y(), t = r - g, i.options.dropupAuto && i.$newElement.toggleClass("dropup", n > r && t - g < s.height()), i.$newElement.hasClass("dropup") && (t = n - g), e = u.length + u.filter(".dropdown-header").length > 3 ? 3 * f + g - 2 : 0, s.css({
						"max-height": t + "px",
						overflow: "hidden",
						"min-height": e + l + c + h + "px"
					}), o.css({
						"max-height": t - l - c - h - d + "px",
						"overflow-y": "auto",
						"min-height": Math.max(e - d, 0) + "px"
					})
				};
				b(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", b), e(window).off("resize.getSize").on("resize.getSize", b), e(window).off("scroll.getSize").on("scroll.getSize", b)
			} else if (this.options.size && "auto" != this.options.size && s.find("li" + v).length > this.options.size) {
				var w = this.$lis.not(".divider" + v).find(" > *").slice(0, this.options.size).last().parent().index(),
					E = this.$lis.slice(0, w + 1).filter(".divider").length;
				t = f * this.options.size + E * p + d, i.options.dropupAuto && this.$newElement.toggleClass("dropup", n > r && t < s.height()), s.css({
					"max-height": t + l + c + h + "px",
					overflow: "hidden"
				}), o.css({
					"max-height": t - d + "px",
					"overflow-y": "auto"
				})
			}
		},
		setWidth: function() {
			if ("auto" == this.options.width) {
				this.$menu.css("min-width", "0");
				var e = this.$newElement.clone().appendTo("body"),
					t = e.find("> .dropdown-menu").css("width"),
					n = e.css("width", "auto").find("> button").css("width");
				e.remove(), this.$newElement.css("width", Math.max(parseInt(t), parseInt(n)) + "px")
			} else "fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
			this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
		},
		selectPosition: function() {
			var t, n, r = this,
				i = "<div />",
				s = e(i),
				o = function(e) {
					s.addClass(e.attr("class").replace(/form-control/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), n = e.hasClass("dropup") ? 0 : e[0].offsetHeight, s.css({
						top: t.top + n,
						left: t.left,
						width: e[0].offsetWidth,
						position: "absolute"
					})
				};
			this.$newElement.on("click", function() {
				r.isDisabled() || (o(e(this)), s.appendTo(r.options.container), s.toggleClass("open", !e(this).hasClass("open")), s.append(r.$menu))
			}), e(window).resize(function() {
				o(r.$newElement)
			}), e(window).on("scroll", function() {
				o(r.$newElement)
			}), e("html").on("click", function(t) {
				e(t.target).closest(r.$newElement).length < 1 && s.removeClass("open")
			})
		},
		setSelected: function(e, t) {
			this.findLis(), this.$lis.filter('[data-original-index="' + e + '"]').toggleClass("selected", t)
		},
		setDisabled: function(e, t) {
			this.findLis(), t ? this.$lis.filter('[data-original-index="' + e + '"]').addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : this.$lis.filter('[data-original-index="' + e + '"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0)
		},
		isDisabled: function() {
			return this.$element.is(":disabled")
		},
		checkDisabled: function() {
			var e = this;
			this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), -1 == this.$button.attr("tabindex") && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function() {
				return !e.isDisabled()
			})
		},
		tabIndex: function() {
			this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
		},
		clickListener: function() {
			var t = this;
			this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(e) {
				e.stopPropagation()
			}), this.$newElement.on("click", function() {
				t.setSize(), t.options.liveSearch || t.multiple || setTimeout(function() {
					t.$menu.find(".selected a").focus()
				}, 10)
			}), this.$menu.on("click", "li a", function(n) {
				var r = e(this),
					i = r.parent().data("originalIndex"),
					s = t.$element.val(),
					o = t.$element.prop("selectedIndex");
				if (t.multiple && n.stopPropagation(), n.preventDefault(), !t.isDisabled() && !r.parent().hasClass("disabled")) {
					var u = t.$element.find("option"),
						f = u.eq(i),
						l = f.prop("selected"),
						c = f.parent("optgroup"),
						h = t.options.maxOptions,
						p = c.data("maxOptions") || !1;
					if (t.multiple) {
						if (f.prop("selected", !l), t.setSelected(i, !l), r.blur(), h !== !1 || p !== !1) {
							var d = h < u.filter(":selected").length,
								v = p < c.find("option:selected").length;
							if (h && d || p && v)
								if (h && 1 == h) u.prop("selected", !1), f.prop("selected", !0), t.$menu.find(".selected").removeClass("selected"), t.setSelected(i, !0);
								else if (p && 1 == p) {
								c.find("option:selected").prop("selected", !1), f.prop("selected", !0);
								var m = r.data("optgroup");
								t.$menu.find(".selected").has('a[data-optgroup="' + m + '"]').removeClass("selected"), t.setSelected(i, !0)
							} else {
								var g = "function" == typeof t.options.maxOptionsText ? t.options.maxOptionsText(h, p) : t.options.maxOptionsText,
									y = g[0].replace("{n}", h),
									w = g[1].replace("{n}", p),
									E = e('<div class="notify"></div>');
								g[2] && (y = y.replace("{var}", g[2][h > 1 ? 0 : 1]), w = w.replace("{var}", g[2][p > 1 ? 0 : 1])), f.prop("selected", !1), t.$menu.append(E), h && d && (E.append(e("<div>" + y + "</div>")), t.$element.trigger("maxReached.bs.select")), p && v && (E.append(e("<div>" + w + "</div>")), t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
									t.setSelected(i, !1)
								}, 10), E.delay(750).fadeOut(300, function() {
									e(this).remove()
								})
							}
						}
					} else u.prop("selected", !1), f.prop("selected", !0), t.$menu.find(".selected").removeClass("selected"), t.setSelected(i, !0);
					t.multiple ? t.options.liveSearch && t.$searchbox.focus() : t.$button.focus(), (s != t.$element.val() && t.multiple || o != t.$element.prop("selectedIndex") && !t.multiple) && t.$element.change()
				}
			}), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(e) {
				e.target == this && (e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus())
			}), this.$menu.on("click", "li.divider, li.dropdown-header", function(e) {
				e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
			}), this.$menu.on("click", ".popover-title .close", function() {
				t.$button.focus()
			}), this.$searchbox.on("click", function(e) {
				e.stopPropagation()
			}), this.$menu.on("click", ".actions-btn", function(n) {
				t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), n.preventDefault(), n.stopPropagation(), e(this).is(".bs-select-all") ? t.selectAll() : t.deselectAll(), t.$element.change()
			}), this.$element.change(function() {
				t.render(!1)
			})
		},
		liveSearchListener: function() {
			var t = this,
				r = e('<li class="no-results"></li>');
			this.$newElement.on("click.dropdown.data-api", function() {
				t.$menu.find(".active").removeClass("active"), t.$searchbox.val() && (t.$searchbox.val(""), t.$lis.not(".is-hidden").removeClass("hide"), r.parent().length && r.remove()), t.multiple || t.$menu.find(".selected").addClass("active"), setTimeout(function() {
					t.$searchbox.focus()
				}, 10)
			}), this.$searchbox.on("input propertychange", function() {
				t.$searchbox.val() ? (t.options.searchAccentInsensitive ? t.$lis.not(".is-hidden").removeClass("hide").find("a").not(":aicontains(" + n(t.$searchbox.val()) + ")").parent().addClass("hide") : t.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains(" + t.$searchbox.val() + ")").parent().addClass("hide"), t.$menu.find("li").filter(":visible:not(.no-results)").length ? r.parent().length && r.remove() : (r.parent().length && r.remove(), r.html(t.options.noneResultsText + ' "' + t.$searchbox.val() + '"').show(), t.$menu.find("li").last().after(r))) : (t.$lis.not(".is-hidden").removeClass("hide"), r.parent().length && r.remove()), t.$menu.find("li.active").removeClass("active"), t.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(), e(this).focus()
			})
		},
		val: function(e) {
			return "undefined" != typeof e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val()
		},
		selectAll: function() {
			this.findLis(), this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click()
		},
		deselectAll: function() {
			this.findLis(), this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click()
		},
		keydown: function(t) {
			var r, i, s, o, u, f, l, h, p, d = e(this),
				v = d.is("input") ? d.parent().parent() : d.parent(),
				m = v.data("this"),
				g = {
					32: " ",
					48: "0",
					49: "1",
					50: "2",
					51: "3",
					52: "4",
					53: "5",
					54: "6",
					55: "7",
					56: "8",
					57: "9",
					59: ";",
					65: "a",
					66: "b",
					67: "c",
					68: "d",
					69: "e",
					70: "f",
					71: "g",
					72: "h",
					73: "i",
					74: "j",
					75: "k",
					76: "l",
					77: "m",
					78: "n",
					79: "o",
					80: "p",
					81: "q",
					82: "r",
					83: "s",
					84: "t",
					85: "u",
					86: "v",
					87: "w",
					88: "x",
					89: "y",
					90: "z",
					96: "0",
					97: "1",
					98: "2",
					99: "3",
					100: "4",
					101: "5",
					102: "6",
					103: "7",
					104: "8",
					105: "9"
				};
			if (m.options.liveSearch && (v = d.parent().parent()), m.options.container && (v = m.$menu), r = e("[role=menu] li a", v), p = m.$menu.parent().hasClass("open"), !p && /([0-9]|[A-z])/.test(String.fromCharCode(t.keyCode)) && (m.options.container ? m.$newElement.trigger("click") : (m.setSize(), m.$menu.parent().addClass("open"), p = !0), m.$searchbox.focus()), m.options.liveSearch && (/(^9$|27)/.test(t.keyCode.toString(10)) && p && 0 === m.$menu.find(".active").length && (t.preventDefault(), m.$menu.parent().removeClass("open"), m.$button.focus()), r = e("[role=menu] li:not(.divider):not(.dropdown-header):visible", v), d.val() || /(38|40)/.test(t.keyCode.toString(10)) || 0 === r.filter(".active").length && (r = m.$newElement.find("li").filter(m.options.searchAccentInsensitive ? ":aicontains(" + n(g[t.keyCode]) + ")" : ":icontains(" + g[t.keyCode] + ")"))), r.length) {
				if (/(38|40)/.test(t.keyCode.toString(10))) i = r.index(r.filter(":focus")), o = r.parent(":not(.disabled):visible").first().index(), u = r.parent(":not(.disabled):visible").last().index(), s = r.eq(i).parent().nextAll(":not(.disabled):visible").eq(0).index(), f = r.eq(i).parent().prevAll(":not(.disabled):visible").eq(0).index(), l = r.eq(s).parent().prevAll(":not(.disabled):visible").eq(0).index(), m.options.liveSearch && (r.each(function(t) {
					e(this).is(":not(.disabled)") && e(this).data("index", t)
				}), i = r.index(r.filter(".active")), o = r.filter(":not(.disabled):visible").first().data("index"), u = r.filter(":not(.disabled):visible").last().data("index"), s = r.eq(i).nextAll(":not(.disabled):visible").eq(0).data("index"), f = r.eq(i).prevAll(":not(.disabled):visible").eq(0).data("index"), l = r.eq(s).prevAll(":not(.disabled):visible").eq(0).data("index")), h = d.data("prevIndex"), 38 == t.keyCode && (m.options.liveSearch && (i -= 1), i != l && i > f && (i = f), o > i && (i = o), i == h && (i = u)), 40 == t.keyCode && (m.options.liveSearch && (i += 1), -1 == i && (i = 0), i != l && s > i && (i = s), i > u && (i = u), i == h && (i = o)), d.data("prevIndex", i), m.options.liveSearch ? (t.preventDefault(), d.is(".dropdown-toggle") || (r.removeClass("active"), r.eq(i).addClass("active").find("a").focus(), d.focus())) : r.eq(i).focus();
				else if (!d.is("input")) {
					var y, b, w = [];
					r.each(function() {
						e(this).parent().is(":not(.disabled)") && e.trim(e(this).text().toLowerCase()).substring(0, 1) == g[t.keyCode] && w.push(e(this).parent().index())
					}), y = e(document).data("keycount"), y++, e(document).data("keycount", y), b = e.trim(e(":focus").text().toLowerCase()).substring(0, 1), b != g[t.keyCode] ? (y = 1, e(document).data("keycount", y)) : y >= w.length && (e(document).data("keycount", 0), y > w.length && (y = 1)), r.eq(w[y - 1]).focus()
				}(/(13|32)/.test(t.keyCode.toString(10)) || /(^9$)/.test(t.keyCode.toString(10)) && m.options.selectOnTab) && p && (/(32)/.test(t.keyCode.toString(10)) || t.preventDefault(), m.options.liveSearch ? /(32)/.test(t.keyCode.toString(10)) || (m.$menu.find(".active a").click(), d.focus()) : e(":focus").click(), e(document).data("keycount", 0)), (/(^9$|27)/.test(t.keyCode.toString(10)) && p && (m.multiple || m.options.liveSearch) || /(27)/.test(t.keyCode.toString(10)) && !p) && (m.$menu.parent().removeClass("open"), m.$button.focus())
			}
		},
		mobile: function() {
			this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
		},
		refresh: function() {
			this.$lis = null, this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
		},
		update: function() {
			this.reloadLi(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
		},
		hide: function() {
			this.$newElement.hide()
		},
		show: function() {
			this.$newElement.show()
		},
		remove: function() {
			this.$newElement.remove(), this.$element.remove()
		}
	};
	var s = e.fn.selectpicker;
	e.fn.selectpicker = r, e.fn.selectpicker.Constructor = i, e.fn.selectpicker.noConflict = function() {
		return e.fn.selectpicker = s, this
	}, e(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", i.prototype.keydown).on("focusin.modal", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", function(e) {
		e.stopPropagation()
	}), e(window).on("load.bs.select.data-api", function() {
		e(".selectpicker").each(function() {
			var t = e(this);
			r.call(t, t.data())
		})
	})
}(jQuery);
(function(e, t) {
	function r() {
		return new Date(Date.UTC.apply(Date, arguments))
	}

	function i() {
		var e = new Date;
		return r(e.getFullYear(), e.getMonth(), e.getDate())
	}

	function s(e) {
		return function() {
			return this[e].apply(this, arguments)
		}
	}

	function f(t, n) {
		function u(e, t) {
			return t.toLowerCase()
		}
		var r = e(t).data(),
			i = {},
			s, o = new RegExp("^" + n.toLowerCase() + "([A-Z])");
		n = new RegExp("^" + n.toLowerCase());
		for (var a in r)
			if (n.test(a)) {
				s = a.replace(o, u);
				i[s] = r[a]
			}
		return i
	}

	function l(t) {
		var n = {};
		if (!d[t]) {
			t = t.split("-")[0];
			if (!d[t]) return
		}
		var r = d[t];
		e.each(p, function(e, t) {
			if (t in r) n[t] = r[t]
		});
		return n
	}
	var n = e(window);
	var o = function() {
		var t = {
			get: function(e) {
				return this.slice(e)[0]
			},
			contains: function(e) {
				var t = e && e.valueOf();
				for (var n = 0, r = this.length; n < r; n++)
					if (this[n].valueOf() === t) return n;
				return -1
			},
			remove: function(e) {
				this.splice(e, 1)
			},
			replace: function(t) {
				if (!t) return;
				if (!e.isArray(t)) t = [t];
				this.clear();
				this.push.apply(this, t)
			},
			clear: function() {
				this.splice(0)
			},
			copy: function() {
				var e = new o;
				e.replace(this);
				return e
			}
		};
		return function() {
			var n = [];
			n.push.apply(n, arguments);
			e.extend(n, t);
			return n
		}
	}();
	var u = function(t, n) {
		this.dates = new o;
		this.viewDate = i();
		this.focusDate = null;
		this._process_options(n);
		this.element = e(t);
		this.isInline = false;
		this.isInput = this.element.is("input");
		this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : false;
		this.hasInput = this.component && this.element.find("input").length;
		if (this.component && this.component.length === 0) this.component = false;
		this.picker = e(v.template);
		this._buildEvents();
		this._attachEvents();
		if (this.isInline) {
			this.picker.addClass("datepicker-inline").appendTo(this.element)
		} else {
			this.picker.addClass("datepicker-dropdown dropdown-menu")
		}
		if (this.o.rtl) {
			this.picker.addClass("datepicker-rtl")
		}
		this.viewMode = this.o.startView;
		if (this.o.calendarWeeks) this.picker.find("tfoot th.today").attr("colspan", function(e, t) {
			return parseInt(t) + 1
		});
		this._allow_update = false;
		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
		this.fillDow();
		this.fillMonths();
		this._allow_update = true;
		this.update();
		this.showMode();
		if (this.isInline) {
			this.show()
		}
	};
	u.prototype = {
		constructor: u,
		_process_options: function(t) {
			this._o = e.extend({}, this._o, t);
			var n = this.o = e.extend({}, this._o);
			var r = n.language;
			if (!d[r]) {
				r = r.split("-")[0];
				if (!d[r]) r = h.language
			}
			n.language = r;
			switch (n.startView) {
				case 2:
				case "decade":
					n.startView = 2;
					break;
				case 1:
				case "year":
					n.startView = 1;
					break;
				default:
					n.startView = 0
			}
			switch (n.minViewMode) {
				case 1:
				case "months":
					n.minViewMode = 1;
					break;
				case 2:
				case "years":
					n.minViewMode = 2;
					break;
				default:
					n.minViewMode = 0
			}
			n.startView = Math.max(n.startView, n.minViewMode);
			if (n.multidate !== true) {
				n.multidate = Number(n.multidate) || false;
				if (n.multidate !== false) n.multidate = Math.max(0, n.multidate);
				else n.multidate = 1
			}
			n.multidateSeparator = String(n.multidateSeparator);
			n.weekStart %= 7;
			n.weekEnd = (n.weekStart + 6) % 7;
			var i = v.parseFormat(n.format);
			if (n.startDate !== -Infinity) {
				if (!!n.startDate) {
					if (n.startDate instanceof Date) n.startDate = this._local_to_utc(this._zero_time(n.startDate));
					else n.startDate = v.parseDate(n.startDate, i, n.language)
				} else {
					n.startDate = -Infinity
				}
			}
			if (n.endDate !== Infinity) {
				if (!!n.endDate) {
					if (n.endDate instanceof Date) n.endDate = this._local_to_utc(this._zero_time(n.endDate));
					else n.endDate = v.parseDate(n.endDate, i, n.language)
				} else {
					n.endDate = Infinity
				}
			}
			n.daysOfWeekDisabled = n.daysOfWeekDisabled || [];
			if (!e.isArray(n.daysOfWeekDisabled)) n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/);
			n.daysOfWeekDisabled = e.map(n.daysOfWeekDisabled, function(e) {
				return parseInt(e, 10)
			});
			var s = String(n.orientation).toLowerCase().split(/\s+/g),
				o = n.orientation.toLowerCase();
			s = e.grep(s, function(e) {
				return /^auto|left|right|top|bottom$/.test(e)
			});
			n.orientation = {
				x: "auto",
				y: "auto"
			};
			if (!o || o === "auto");
			else if (s.length === 1) {
				switch (s[0]) {
					case "top":
					case "bottom":
						n.orientation.y = s[0];
						break;
					case "left":
					case "right":
						n.orientation.x = s[0];
						break
				}
			} else {
				o = e.grep(s, function(e) {
					return /^left|right$/.test(e)
				});
				n.orientation.x = o[0] || "auto";
				o = e.grep(s, function(e) {
					return /^top|bottom$/.test(e)
				});
				n.orientation.y = o[0] || "auto"
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(e) {
			for (var n = 0, r, i, s; n < e.length; n++) {
				r = e[n][0];
				if (e[n].length === 2) {
					i = t;
					s = e[n][1]
				} else if (e[n].length === 3) {
					i = e[n][1];
					s = e[n][2]
				}
				r.on(s, i)
			}
		},
		_unapplyEvents: function(e) {
			for (var n = 0, r, i, s; n < e.length; n++) {
				r = e[n][0];
				if (e[n].length === 2) {
					s = t;
					i = e[n][1]
				} else if (e[n].length === 3) {
					s = e[n][1];
					i = e[n][2]
				}
				r.off(i, s)
			}
		},
		_buildEvents: function() {
			if (this.isInput) {
				this._events = [
					[this.element, {
						focus: e.proxy(this.show, this),
						keyup: e.proxy(function(t) {
							if (e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update()
						}, this),
						keydown: e.proxy(this.keydown, this)
					}]
				]
			} else if (this.component && this.hasInput) {
				this._events = [
					[this.element.find("input"), {
						focus: e.proxy(this.show, this),
						keyup: e.proxy(function(t) {
							if (e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update()
						}, this),
						keydown: e.proxy(this.keydown, this)
					}],
					[this.component, {
						click: e.proxy(this.show, this)
					}]
				]
			} else if (this.element.is("div")) {
				this.isInline = true
			} else {
				this._events = [
					[this.element, {
						click: e.proxy(this.show, this)
					}]
				]
			}
			this._events.push([this.element, "*", {
				blur: e.proxy(function(e) {
					this._focused_from = e.target
				}, this)
			}], [this.element, {
				blur: e.proxy(function(e) {
					this._focused_from = e.target
				}, this)
			}]);
			this._secondaryEvents = [
				[this.picker, {
					click: e.proxy(this.click, this)
				}],
				[e(window), {
					resize: e.proxy(this.place, this)
				}],
				[e(document), {
					"mousedown touchstart": e.proxy(function(e) {
						if (!(this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length)) {
							this.hide()
						}
					}, this)
				}]
			]
		},
		_attachEvents: function() {
			this._detachEvents();
			this._applyEvents(this._events)
		},
		_detachEvents: function() {
			this._unapplyEvents(this._events)
		},
		_attachSecondaryEvents: function() {
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents)
		},
		_detachSecondaryEvents: function() {
			this._unapplyEvents(this._secondaryEvents)
		},
		_trigger: function(t, n) {
			var r = n || this.dates.get(-1),
				i = this._utc_to_local(r);
			this.element.trigger({
				type: t,
				date: i,
				dates: e.map(this.dates, this._utc_to_local),
				format: e.proxy(function(e, t) {
					if (arguments.length === 0) {
						e = this.dates.length - 1;
						t = this.o.format
					} else if (typeof e === "string") {
						t = e;
						e = this.dates.length - 1
					}
					t = t || this.o.format;
					var n = this.dates.get(e);
					return v.formatDate(n, t, this.o.language)
				}, this)
			})
		},
		show: function() {
			if (!this.isInline) this.picker.appendTo("body");
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger("show")
		},
		hide: function() {
			if (this.isInline) return;
			if (!this.picker.is(":visible")) return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();
			if (this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val())) this.setValue();
			this._trigger("hide")
		},
		remove: function() {
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput) {
				delete this.element.data().date
			}
		},
		_utc_to_local: function(e) {
			return e && new Date(e.getTime() + e.getTimezoneOffset() * 6e4)
		},
		_local_to_utc: function(e) {
			return e && new Date(e.getTime() - e.getTimezoneOffset() * 6e4)
		},
		_zero_time: function(e) {
			return e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
		},
		_zero_utc_time: function(e) {
			return e && new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
		},
		getDates: function() {
			return e.map(this.dates, this._utc_to_local)
		},
		getUTCDates: function() {
			return e.map(this.dates, function(e) {
				return new Date(e)
			})
		},
		getDate: function() {
			return this._utc_to_local(this.getUTCDate())
		},
		getUTCDate: function() {
			return new Date(this.dates.get(-1))
		},
		setDates: function() {
			var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, t);
			this._trigger("changeDate");
			this.setValue()
		},
		setUTCDates: function() {
			var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, e.map(t, this._utc_to_local));
			this._trigger("changeDate");
			this.setValue()
		},
		setDate: s("setDates"),
		setUTCDate: s("setUTCDates"),
		setValue: function() {
			var e = this.getFormattedDate();
			if (!this.isInput) {
				if (this.component) {
					this.element.find("input").val(e).change()
				}
			} else {
				this.element.val(e).change()
			}
		},
		getFormattedDate: function(n) {
			if (n === t) n = this.o.format;
			var r = this.o.language;
			return e.map(this.dates, function(e) {
				return v.formatDate(e, n, r)
			}).join(this.o.multidateSeparator)
		},
		setStartDate: function(e) {
			this._process_options({
				startDate: e
			});
			this.update();
			this.updateNavArrows()
		},
		setEndDate: function(e) {
			this._process_options({
				endDate: e
			});
			this.update();
			this.updateNavArrows()
		},
		setDaysOfWeekDisabled: function(e) {
			this._process_options({
				daysOfWeekDisabled: e
			});
			this.update();
			this.updateNavArrows()
		},
		place: function() {
			if (this.isInline) return;
			var t = this.picker.outerWidth(),
				r = this.picker.outerHeight(),
				i = 10,
				s = n.width(),
				o = n.height(),
				u = n.scrollTop();
			var a = parseInt(this.element.parents().filter(function() {
				return e(this).css("z-index") !== "auto"
			}).first().css("z-index")) + 10;
			var f = this.component ? this.component.parent().offset() : this.element.offset();
			var l = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var c = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var h = f.left,
				p = f.top;
			this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom " + "datepicker-orient-right datepicker-orient-left");
			if (this.o.orientation.x !== "auto") {
				this.picker.addClass("datepicker-orient-" + this.o.orientation.x);
				if (this.o.orientation.x === "right") h -= t - c
			} else {
				this.picker.addClass("datepicker-orient-left");
				if (f.left < 0) h -= f.left - i;
				else if (f.left + t > s) h = s - t - i
			}
			var d = this.o.orientation.y,
				v, m;
			if (d === "auto") {
				v = -u + f.top - r;
				m = u + o - (f.top + l + r);
				if (Math.max(v, m) === m) d = "top";
				else d = "bottom"
			}
			this.picker.addClass("datepicker-orient-" + d);
			if (d === "top") p += l;
			else p -= r + parseInt(this.picker.css("padding-top"));
			this.picker.css({
				top: p,
				left: h,
				zIndex: a
			})
		},
		_allow_update: true,
		update: function() {
			if (!this._allow_update) return;
			var t = this.dates.copy(),
				n = [],
				r = false;
			if (arguments.length) {
				e.each(arguments, e.proxy(function(e, t) {
					if (t instanceof Date) t = this._local_to_utc(t);
					n.push(t)
				}, this));
				r = true
			} else {
				n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val();
				if (n && this.o.multidate) n = n.split(this.o.multidateSeparator);
				else n = [n];
				delete this.element.data().date
			}
			n = e.map(n, e.proxy(function(e) {
				return v.parseDate(e, this.o.format, this.o.language)
			}, this));
			n = e.grep(n, e.proxy(function(e) {
				return e < this.o.startDate || e > this.o.endDate || !e
			}, this), true);
			this.dates.replace(n);
			if (this.dates.length) this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate) this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate) this.viewDate = new Date(this.o.endDate);
			if (r) {
				this.setValue()
			} else if (n.length) {
				if (String(t) !== String(this.dates)) this._trigger("changeDate")
			}
			if (!this.dates.length && t.length) this._trigger("clearDate");
			this.fill()
		},
		fillDow: function() {
			var e = this.o.weekStart,
				t = "<tr>";
			if (this.o.calendarWeeks) {
				var n = '<th class="cw">&nbsp;</th>';
				t += n;
				this.picker.find(".datepicker-days thead tr:first-child").prepend(n)
			}
			while (e < this.o.weekStart + 7) {
				t += '<th class="dow">' + d[this.o.language].daysMin[e++ % 7] + "</th>"
			}
			t += "</tr>";
			this.picker.find(".datepicker-days thead").append(t)
		},
		fillMonths: function() {
			var e = "",
				t = 0;
			while (t < 12) {
				e += '<span class="month">' + d[this.o.language].monthsShort[t++] + "</span>"
			}
			this.picker.find(".datepicker-months td").html(e)
		},
		setRange: function(t) {
			if (!t || !t.length) delete this.range;
			else this.range = e.map(t, function(e) {
				return e.valueOf()
			});
			this.fill()
		},
		getClassNames: function(t) {
			var n = [],
				r = this.viewDate.getUTCFullYear(),
				i = this.viewDate.getUTCMonth(),
				s = new Date;
			if (t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < i) {
				n.push("old")
			} else if (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > i) {
				n.push("new")
			}
			if (this.focusDate && t.valueOf() === this.focusDate.valueOf()) n.push("focused");
			if (this.o.todayHighlight && t.getUTCFullYear() === s.getFullYear() && t.getUTCMonth() === s.getMonth() && t.getUTCDate() === s.getDate()) {
				n.push("today")
			}
			if (this.dates.contains(t) !== -1) n.push("active");
			if (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
				n.push("disabled")
			}
			if (this.range) {
				if (t > this.range[0] && t < this.range[this.range.length - 1]) {
					n.push("range")
				}
				if (e.inArray(t.valueOf(), this.range) !== -1) {
					n.push("selected")
				}
			}
			return n
		},
		fill: function() {
			var n = new Date(this.viewDate),
				i = n.getUTCFullYear(),
				s = n.getUTCMonth(),
				o = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				u = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				a = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				f = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				l = d[this.o.language].today || d["en"].today || "",
				c = d[this.o.language].clear || d["en"].clear || "",
				h;
			this.picker.find(".datepicker-days thead th.datepicker-switch").text(d[this.o.language].months[s] + " " + i);
			this.picker.find("tfoot th.today").text(l).toggle(this.o.todayBtn !== false);
			this.picker.find("tfoot th.clear").text(c).toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var p = r(i, s - 1, 28),
				m = v.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
			p.setUTCDate(m);
			p.setUTCDate(m - (p.getUTCDay() - this.o.weekStart + 7) % 7);
			var g = new Date(p);
			g.setUTCDate(g.getUTCDate() + 42);
			g = g.valueOf();
			var y = [];
			var b;
			while (p.valueOf() < g) {
				if (p.getUTCDay() === this.o.weekStart) {
					y.push("<tr>");
					if (this.o.calendarWeeks) {
						var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
							E = new Date(Number(w) + (7 + 4 - w.getUTCDay()) % 7 * 864e5),
							S = new Date(Number(S = r(E.getUTCFullYear(), 0, 1)) + (7 + 4 - S.getUTCDay()) % 7 * 864e5),
							x = (E - S) / 864e5 / 7 + 1;
						y.push('<td class="cw">' + x + "</td>")
					}
				}
				b = this.getClassNames(p);
				b.push("day");
				if (this.o.beforeShowDay !== e.noop) {
					var T = this.o.beforeShowDay(this._utc_to_local(p));
					if (T === t) T = {};
					else if (typeof T === "boolean") T = {
						enabled: T
					};
					else if (typeof T === "string") T = {
						classes: T
					};
					if (T.enabled === false) b.push("disabled");
					if (T.classes) b = b.concat(T.classes.split(/\s+/));
					if (T.tooltip) h = T.tooltip
				}
				b = e.unique(b);
				y.push('<td class="' + b.join(" ") + '"' + (h ? ' title="' + h + '"' : "") + ">" + p.getUTCDate() + "</td>");
				if (p.getUTCDay() === this.o.weekEnd) {
					y.push("</tr>")
				}
				p.setUTCDate(p.getUTCDate() + 1)
			}
			this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
			var N = this.picker.find(".datepicker-months").find("th:eq(1)").text(i).end().find("span").removeClass("active");
			e.each(this.dates, function(e, t) {
				if (t.getUTCFullYear() === i) N.eq(t.getUTCMonth()).addClass("active")
			});
			if (i < o || i > a) {
				N.addClass("disabled")
			}
			if (i === o) {
				N.slice(0, u).addClass("disabled")
			}
			if (i === a) {
				N.slice(f + 1).addClass("disabled")
			}
			y = "";
			i = parseInt(i / 10, 10) * 10;
			var C = this.picker.find(".datepicker-years").find("th:eq(1)").text(i + "-" + (i + 9)).end().find("td");
			i -= 1;
			var k = e.map(this.dates, function(e) {
					return e.getUTCFullYear()
				}),
				L;
			for (var A = -1; A < 11; A++) {
				L = ["year"];
				if (A === -1) L.push("old");
				else if (A === 10) L.push("new");
				if (e.inArray(i, k) !== -1) L.push("active");
				if (i < o || i > a) L.push("disabled");
				y += '<span class="' + L.join(" ") + '">' + i + "</span>";
				i += 1
			}
			C.html(y)
		},
		updateNavArrows: function() {
			if (!this._allow_update) return;
			var e = new Date(this.viewDate),
				t = e.getUTCFullYear(),
				n = e.getUTCMonth();
			switch (this.viewMode) {
				case 0:
					if (this.o.startDate !== -Infinity && t <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth()) {
						this.picker.find(".prev").css({
							visibility: "hidden"
						})
					} else {
						this.picker.find(".prev").css({
							visibility: "visible"
						})
					}
					if (this.o.endDate !== Infinity && t >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth()) {
						this.picker.find(".next").css({
							visibility: "hidden"
						})
					} else {
						this.picker.find(".next").css({
							visibility: "visible"
						})
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && t <= this.o.startDate.getUTCFullYear()) {
						this.picker.find(".prev").css({
							visibility: "hidden"
						})
					} else {
						this.picker.find(".prev").css({
							visibility: "visible"
						})
					}
					if (this.o.endDate !== Infinity && t >= this.o.endDate.getUTCFullYear()) {
						this.picker.find(".next").css({
							visibility: "hidden"
						})
					} else {
						this.picker.find(".next").css({
							visibility: "visible"
						})
					}
					break
			}
		},
		click: function(t) {
			t.preventDefault();
			var n = e(t.target).closest("span, td, th"),
				i, s, o;
			if (n.length === 1) {
				switch (n[0].nodeName.toLowerCase()) {
					case "th":
						switch (n[0].className) {
							case "datepicker-switch":
								this.showMode(1);
								break;
							case "prev":
							case "next":
								var u = v.modes[this.viewMode].navStep * (n[0].className === "prev" ? -1 : 1);
								switch (this.viewMode) {
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, u);
										this._trigger("changeMonth", this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, u);
										if (this.viewMode === 1) this._trigger("changeYear", this.viewDate);
										break
								}
								this.fill();
								break;
							case "today":
								var a = new Date;
								a = r(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0);
								this.showMode(-2);
								var f = this.o.todayBtn === "linked" ? null : "view";
								this._setDate(a, f);
								break;
							case "clear":
								var l;
								if (this.isInput) l = this.element;
								else if (this.component) l = this.element.find("input");
								if (l) l.val("").change();
								this.update();
								this._trigger("changeDate");
								if (this.o.autoclose) this.hide();
								break
						}
						break;
					case "span":
						if (!n.is(".disabled")) {
							this.viewDate.setUTCDate(1);
							if (n.is(".month")) {
								o = 1;
								s = n.parent().find("span").index(n);
								i = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(s);
								this._trigger("changeMonth", this.viewDate);
								if (this.o.minViewMode === 1) {
									this._setDate(r(i, s, o))
								}
							} else {
								o = 1;
								s = 0;
								i = parseInt(n.text(), 10) || 0;
								this.viewDate.setUTCFullYear(i);
								this._trigger("changeYear", this.viewDate);
								if (this.o.minViewMode === 2) {
									this._setDate(r(i, s, o))
								}
							}
							this.showMode(-1);
							this.fill()
						}
						break;
					case "td":
						if (n.is(".day") && !n.is(".disabled")) {
							o = parseInt(n.text(), 10) || 1;
							i = this.viewDate.getUTCFullYear();
							s = this.viewDate.getUTCMonth();
							if (n.is(".old")) {
								if (s === 0) {
									s = 11;
									i -= 1
								} else {
									s -= 1
								}
							} else if (n.is(".new")) {
								if (s === 11) {
									s = 0;
									i += 1
								} else {
									s += 1
								}
							}
							this._setDate(r(i, s, o))
						}
						break
				}
			}
			if (this.picker.is(":visible") && this._focused_from) {
				e(this._focused_from).focus()
			}
			delete this._focused_from
		},
		_toggle_multidate: function(e) {
			var t = this.dates.contains(e);
			if (!e) {
				this.dates.clear()
			} else if (t !== -1) {
				this.dates.remove(t)
			} else {
				this.dates.push(e)
			}
			if (typeof this.o.multidate === "number")
				while (this.dates.length > this.o.multidate) this.dates.remove(0)
		},
		_setDate: function(e, t) {
			if (!t || t === "date") this._toggle_multidate(e && new Date(e));
			if (!t || t === "view") this.viewDate = e && new Date(e);
			this.fill();
			this.setValue();
			this._trigger("changeDate");
			var n;
			if (this.isInput) {
				n = this.element
			} else if (this.component) {
				n = this.element.find("input")
			}
			if (n) {
				n.change()
			}
			if (this.o.autoclose && (!t || t === "date")) {
				this.hide()
			}
		},
		moveMonth: function(e, n) {
			if (!e) return t;
			if (!n) return e;
			var r = new Date(e.valueOf()),
				i = r.getUTCDate(),
				s = r.getUTCMonth(),
				o = Math.abs(n),
				u, a;
			n = n > 0 ? 1 : -1;
			if (o === 1) {
				a = n === -1 ? function() {
					return r.getUTCMonth() === s
				} : function() {
					return r.getUTCMonth() !== u
				};
				u = s + n;
				r.setUTCMonth(u);
				if (u < 0 || u > 11) u = (u + 12) % 12
			} else {
				for (var f = 0; f < o; f++) r = this.moveMonth(r, n);
				u = r.getUTCMonth();
				r.setUTCDate(i);
				a = function() {
					return u !== r.getUTCMonth()
				}
			}
			while (a()) {
				r.setUTCDate(--i);
				r.setUTCMonth(u)
			}
			return r
		},
		moveYear: function(e, t) {
			return this.moveMonth(e, t * 12)
		},
		dateWithinRange: function(e) {
			return e >= this.o.startDate && e <= this.o.endDate
		},
		keydown: function(e) {
			if (this.picker.is(":not(:visible)")) {
				if (e.keyCode === 27) this.show();
				return
			}
			var t = false,
				n, r, s, o = this.focusDate || this.viewDate;
			switch (e.keyCode) {
				case 27:
					if (this.focusDate) {
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill()
					} else this.hide();
					e.preventDefault();
					break;
				case 37:
				case 39:
					if (!this.o.keyboardNavigation) break;
					n = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey) {
						r = this.moveYear(this.dates.get(-1) || i(), n);
						s = this.moveYear(o, n);
						this._trigger("changeYear", this.viewDate)
					} else if (e.shiftKey) {
						r = this.moveMonth(this.dates.get(-1) || i(), n);
						s = this.moveMonth(o, n);
						this._trigger("changeMonth", this.viewDate)
					} else {
						r = new Date(this.dates.get(-1) || i());
						r.setUTCDate(r.getUTCDate() + n);
						s = new Date(o);
						s.setUTCDate(o.getUTCDate() + n)
					}
					if (this.dateWithinRange(r)) {
						this.focusDate = this.viewDate = s;
						this.setValue();
						this.fill();
						e.preventDefault()
					}
					break;
				case 38:
				case 40:
					if (!this.o.keyboardNavigation) break;
					n = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey) {
						r = this.moveYear(this.dates.get(-1) || i(), n);
						s = this.moveYear(o, n);
						this._trigger("changeYear", this.viewDate)
					} else if (e.shiftKey) {
						r = this.moveMonth(this.dates.get(-1) || i(), n);
						s = this.moveMonth(o, n);
						this._trigger("changeMonth", this.viewDate)
					} else {
						r = new Date(this.dates.get(-1) || i());
						r.setUTCDate(r.getUTCDate() + n * 7);
						s = new Date(o);
						s.setUTCDate(o.getUTCDate() + n * 7)
					}
					if (this.dateWithinRange(r)) {
						this.focusDate = this.viewDate = s;
						this.setValue();
						this.fill();
						e.preventDefault()
					}
					break;
				case 32:
					break;
				case 13:
					o = this.focusDate || this.dates.get(-1) || this.viewDate;
					this._toggle_multidate(o);
					t = true;
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(":visible")) {
						e.preventDefault();
						if (this.o.autoclose) this.hide()
					}
					break;
				case 9:
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break
			}
			if (t) {
				if (this.dates.length) this._trigger("changeDate");
				else this._trigger("clearDate");
				var u;
				if (this.isInput) {
					u = this.element
				} else if (this.component) {
					u = this.element.find("input")
				}
				if (u) {
					u.change()
				}
			}
		},
		showMode: function(e) {
			if (e) {
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + e))
			}
			this.picker.find(">div").hide().filter(".datepicker-" + v.modes[this.viewMode].clsName).css("display", "block");
			this.updateNavArrows()
		}
	};
	var a = function(t, n) {
		this.element = e(t);
		this.inputs = e.map(n.inputs, function(e) {
			return e.jquery ? e[0] : e
		});
		delete n.inputs;
		e(this.inputs).datepicker(n).bind("changeDate", e.proxy(this.dateUpdated, this));
		this.pickers = e.map(this.inputs, function(t) {
			return e(t).data("datepicker")
		});
		this.updateDates()
	};
	a.prototype = {
		updateDates: function() {
			this.dates = e.map(this.pickers, function(e) {
				return e.getUTCDate()
			});
			this.updateRanges()
		},
		updateRanges: function() {
			var t = e.map(this.dates, function(e) {
				return e.valueOf()
			});
			e.each(this.pickers, function(e, n) {
				n.setRange(t)
			})
		},
		dateUpdated: function(t) {
			if (this.updating) return;
			this.updating = true;
			var n = e(t.target).data("datepicker"),
				r = n.getUTCDate(),
				i = e.inArray(t.target, this.inputs),
				s = this.inputs.length;
			if (i === -1) return;
			e.each(this.pickers, function(e, t) {
				if (!t.getUTCDate()) t.setUTCDate(r)
			});
			if (r < this.dates[i]) {
				while (i >= 0 && r < this.dates[i]) {
					this.pickers[i--].setUTCDate(r)
				}
			} else if (r > this.dates[i]) {
				while (i < s && r > this.dates[i]) {
					this.pickers[i++].setUTCDate(r)
				}
			}
			this.updateDates();
			delete this.updating
		},
		remove: function() {
			e.map(this.pickers, function(e) {
				e.remove()
			});
			delete this.element.data().datepicker
		}
	};
	var c = e.fn.datepicker;
	e.fn.datepicker = function(n) {
		var r = Array.apply(null, arguments);
		r.shift();
		var i;
		this.each(function() {
			var s = e(this),
				o = s.data("datepicker"),
				c = typeof n === "object" && n;
			if (!o) {
				var p = f(this, "date"),
					d = e.extend({}, h, p, c),
					v = l(d.language),
					m = e.extend({}, h, v, p, c);
				if (s.is(".input-daterange") || m.inputs) {
					var g = {
						inputs: m.inputs || s.find("input").toArray()
					};
					s.data("datepicker", o = new a(this, e.extend(m, g)))
				} else {
					s.data("datepicker", o = new u(this, m))
				}
			}
			if (typeof n === "string" && typeof o[n] === "function") {
				i = o[n].apply(o, r);
				if (i !== t) return false
			}
		});
		if (i !== t) return i;
		else return this
	};
	var h = e.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: e.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: "mm/dd/yyyy",
		keyboardNavigation: true,
		language: "en",
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ",",
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var p = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
	e.fn.datepicker.Constructor = u;
	var d = e.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};
	var v = {
		modes: [{
			clsName: "days",
			navFnc: "Month",
			navStep: 1
		}, {
			clsName: "months",
			navFnc: "FullYear",
			navStep: 1
		}, {
			clsName: "years",
			navFnc: "FullYear",
			navStep: 10
		}],
		isLeapYear: function(e) {
			return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
		},
		getDaysInMonth: function(e, t) {
			return [31, v.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(e) {
			var t = e.replace(this.validParts, "\0").split("\0"),
				n = e.match(this.validParts);
			if (!t || !t.length || !n || n.length === 0) {
				throw new Error("Invalid date format.")
			}
			return {
				separators: t,
				parts: n
			}
		},
		parseDate: function(n, i, s) {
			function w() {
				var e = this.slice(0, a[c].length),
					t = a[c].slice(0, e.length);
				return e === t
			}
			if (!n) return t;
			if (n instanceof Date) return n;
			if (typeof i === "string") i = v.parseFormat(i);
			var o = /([\-+]\d+)([dmwy])/,
				a = n.match(/([\-+]\d+)([dmwy])/g),
				f, l, c;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)) {
				n = new Date;
				for (c = 0; c < a.length; c++) {
					f = o.exec(a[c]);
					l = parseInt(f[1]);
					switch (f[2]) {
						case "d":
							n.setUTCDate(n.getUTCDate() + l);
							break;
						case "m":
							n = u.prototype.moveMonth.call(u.prototype, n, l);
							break;
						case "w":
							n.setUTCDate(n.getUTCDate() + l * 7);
							break;
						case "y":
							n = u.prototype.moveYear.call(u.prototype, n, l);
							break
					}
				}
				return r(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0)
			}
			a = n && n.match(this.nonpunctuation) || [];
			n = new Date;
			var h = {},
				p = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
				m = {
					yyyy: function(e, t) {
						return e.setUTCFullYear(t)
					},
					yy: function(e, t) {
						return e.setUTCFullYear(2e3 + t)
					},
					m: function(e, t) {
						if (isNaN(e)) return e;
						t -= 1;
						while (t < 0) t += 12;
						t %= 12;
						e.setUTCMonth(t);
						while (e.getUTCMonth() !== t) e.setUTCDate(e.getUTCDate() - 1);
						return e
					},
					d: function(e, t) {
						return e.setUTCDate(t)
					}
				},
				g, y;
			m["M"] = m["MM"] = m["mm"] = m["m"];
			m["dd"] = m["d"];
			n = r(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0);
			var b = i.parts.slice();
			if (a.length !== b.length) {
				b = e(b).filter(function(t, n) {
					return e.inArray(n, p) !== -1
				}).toArray()
			}
			if (a.length === b.length) {
				var E;
				for (c = 0, E = b.length; c < E; c++) {
					g = parseInt(a[c], 10);
					f = b[c];
					if (isNaN(g)) {
						switch (f) {
							case "MM":
								y = e(d[s].months).filter(w);
								g = e.inArray(y[0], d[s].months) + 1;
								break;
							case "M":
								y = e(d[s].monthsShort).filter(w);
								g = e.inArray(y[0], d[s].monthsShort) + 1;
								break
						}
					}
					h[f] = g
				}
				var S, x;
				for (c = 0; c < p.length; c++) {
					x = p[c];
					if (x in h && !isNaN(h[x])) {
						S = new Date(n);
						m[x](S, h[x]);
						if (!isNaN(S)) n = S
					}
				}
			}
			return n
		},
		formatDate: function(t, n, r) {
			if (!t) return "";
			if (typeof n === "string") n = v.parseFormat(n);
			var i = {
				d: t.getUTCDate(),
				D: d[r].daysShort[t.getUTCDay()],
				DD: d[r].days[t.getUTCDay()],
				m: t.getUTCMonth() + 1,
				M: d[r].monthsShort[t.getUTCMonth()],
				MM: d[r].months[t.getUTCMonth()],
				yy: t.getUTCFullYear().toString().substring(2),
				yyyy: t.getUTCFullYear()
			};
			i.dd = (i.d < 10 ? "0" : "") + i.d;
			i.mm = (i.m < 10 ? "0" : "") + i.m;
			t = [];
			var s = e.extend([], n.separators);
			for (var o = 0, u = n.parts.length; o <= u; o++) {
				if (s.length) t.push(s.shift());
				t.push(i[n.parts[o]])
			}
			return t.join("")
		},
		headTemplate: "<thead>" + "<tr>" + '<th class="prev">&laquo;</th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next">&raquo;</th>' + "</tr>" + "</thead>",
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: "<tfoot>" + "<tr>" + '<th colspan="7" class="today"></th>' + "</tr>" + "<tr>" + '<th colspan="7" class="clear"></th>' + "</tr>" + "</tfoot>"
	};
	v.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table>" + "</div>" + "</div>";
	e.fn.datepicker.DPGlobal = v;
	e.fn.datepicker.noConflict = function() {
		e.fn.datepicker = c;
		return this
	};
	e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
		var n = e(this);
		if (n.data("datepicker")) return;
		t.preventDefault();
		n.datepicker("show")
	});
	e(function() {
		e('[data-provide="datepicker-inline"]').datepicker()
	})
})(window.jQuery);
document.createElement("header");
document.createElement("nav");
document.createElement("section");
document.createElement("article");
document.createElement("aside");
document.createElement("footer");
if (!Object.create) {
	Object.create = function() {
		function e() {}
		return function(t) {
			if (arguments.length != 1) {
				throw new Error("Object.create implementation only accepts one parameter.")
			}
			e.prototype = t;
			return new e
		}
	}()
}(function(e) {
	e.fn.appear = function(t, n) {
		var r = e.extend({
			data: undefined,
			one: true,
			accX: 0,
			accY: 0
		}, n);
		return this.each(function() {
			var n = e(this);
			n.appeared = false;
			if (!t) {
				n.trigger("appear", r.data);
				return
			}
			var i = e(window);
			var s = function() {
				if (!n.is(":visible")) {
					n.appeared = false;
					return
				}
				var e = i.scrollLeft();
				var t = i.scrollTop();
				var s = n.offset();
				var o = s.left;
				var u = s.top;
				var a = r.accX;
				var f = r.accY;
				var l = n.height();
				var c = i.height();
				var h = n.width();
				var p = i.width();
				if (u + l + f >= t && u <= t + c + f && o + h + a >= e && o <= e + p + a) {
					if (!n.appeared) n.trigger("appear", r.data)
				} else {
					n.appeared = false
				}
			};
			var o = function() {
				n.appeared = true;
				if (r.one) {
					i.unbind("scroll", s);
					var o = e.inArray(s, e.fn.appear.checks);
					if (o >= 0) e.fn.appear.checks.splice(o, 1)
				}
				t.apply(this, arguments)
			};
			if (r.one) n.one("appear", r.data, o);
			else n.bind("appear", r.data, o);
			i.scroll(s);
			e.fn.appear.checks.push(s);
			s()
		})
	};
	e.extend(e.fn.appear, {
		checks: [],
		timeout: null,
		checkAll: function() {
			var t = e.fn.appear.checks.length;
			if (t > 0)
				while (t--) e.fn.appear.checks[t]()
		},
		run: function() {
			if (e.fn.appear.timeout) clearTimeout(e.fn.appear.timeout);
			e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
		}
	});
	e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, n) {
		var r = e.fn[n];
		if (r) {
			e.fn[n] = function() {
				var t = r.apply(this, arguments);
				e.fn.appear.run();
				return t
			}
		}
	})
})(jQuery);
(function(e) {
	var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var n = function(e) {
		e = e.replace(/\x0d\x0a/g, "\n");
		var t = "";
		for (var n = 0; n < e.length; n++) {
			var r = e.charCodeAt(n);
			if (r < 128) {
				t += String.fromCharCode(r)
			} else if (r > 127 && r < 2048) {
				t += String.fromCharCode(r >> 6 | 192);
				t += String.fromCharCode(r & 63 | 128)
			} else {
				t += String.fromCharCode(r >> 12 | 224);
				t += String.fromCharCode(r >> 6 & 63 | 128);
				t += String.fromCharCode(r & 63 | 128)
			}
		}
		return t
	};
	var r = function(e) {
		var t = "";
		var n = 0;
		var r = c1 = c2 = 0;
		while (n < e.length) {
			r = e.charCodeAt(n);
			if (r < 128) {
				t += String.fromCharCode(r);
				n++
			} else if (r > 191 && r < 224) {
				c2 = e.charCodeAt(n + 1);
				t += String.fromCharCode((r & 31) << 6 | c2 & 63);
				n += 2
			} else {
				c2 = e.charCodeAt(n + 1);
				c3 = e.charCodeAt(n + 2);
				t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
				n += 3
			}
		}
		return t
	};
	e.extend({
		base64Encode: function(e) {
			var r = "";
			var i, s, o, u, a, f, l;
			var c = 0;
			e = n(e);
			while (c < e.length) {
				i = e.charCodeAt(c++);
				s = e.charCodeAt(c++);
				o = e.charCodeAt(c++);
				u = i >> 2;
				a = (i & 3) << 4 | s >> 4;
				f = (s & 15) << 2 | o >> 6;
				l = o & 63;
				if (isNaN(s)) {
					f = l = 64
				} else if (isNaN(o)) {
					l = 64
				}
				r = r + t.charAt(u) + t.charAt(a) + t.charAt(f) + t.charAt(l)
			}
			return r
		},
		base64Decode: function(e) {
			var n = "";
			var i, s, o;
			var u, a, f, l;
			var c = 0;
			e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
			while (c < e.length) {
				u = t.indexOf(e.charAt(c++));
				a = t.indexOf(e.charAt(c++));
				f = t.indexOf(e.charAt(c++));
				l = t.indexOf(e.charAt(c++));
				i = u << 2 | a >> 4;
				s = (a & 15) << 4 | f >> 2;
				o = (f & 3) << 6 | l;
				n = n + String.fromCharCode(i);
				if (f != 64) {
					n = n + String.fromCharCode(s)
				}
				if (l != 64) {
					n = n + String.fromCharCode(o)
				}
			}
			n = r(n);
			return n
		}
	})
})(jQuery);
(function(e) {
	"use strict";

	function t(e) {
		return (e || "").toLowerCase()
	}
	var n = "20130409";
	e.fn.cycle = function(n) {
		var r;
		return 0 !== this.length || e.isReady ? this.each(function() {
			var r, s, o, u, a = e(this),
				f = e.fn.cycle.log;
			if (!a.data("cycle.opts")) {
				(a.data("cycle-log") === !1 || n && n.log === !1 || s && s.log === !1) && (f = e.noop), f("--c2 init--"), r = a.data();
				for (var l in r) r.hasOwnProperty(l) && /^cycle[A-Z]+/.test(l) && (u = r[l], o = l.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), f(o + ":", u, "(" + typeof u + ")"), r[o] = u);
				s = e.extend({}, e.fn.cycle.defaults, r, n || {}), s.timeoutId = 0, s.paused = s.paused || !1, s.container = a, s._maxZ = s.maxZ, s.API = e.extend({
					_container: a
				}, e.fn.cycle.API), s.API.log = f, s.API.trigger = function(e, t) {
					return s.container.trigger(e, t), s.API
				}, a.data("cycle.opts", s), a.data("cycle.API", s.API), s.API.trigger("cycle-bootstrap", [s, s.API]), s.API.addInitialSlides(), s.API.preInitSlideshow(), s.slides.length && s.API.initSlideshow()
			}
		}) : (r = {
			s: this.selector,
			c: this.context
		}, e.fn.cycle.log("requeuing slideshow (dom not ready)"), e(function() {
			e(r.s, r.c).cycle(n)
		}), this)
	}, e.fn.cycle.API = {
		opts: function() {
			return this._container.data("cycle.opts")
		},
		addInitialSlides: function() {
			var t = this.opts(),
				n = t.slides;
			t.slideCount = 0, t.slides = e(), n = n.jquery ? n : t.container.find(n), t.random && n.sort(function() {
				return Math.random() - .5
			}), t.API.add(n)
		},
		preInitSlideshow: function() {
			var t = this.opts();
			t.API.trigger("cycle-pre-initialize", [t]);
			var n = e.fn.cycle.transitions[t.fx];
			n && e.isFunction(n.preInit) && n.preInit(t), t._preInitialized = !0
		},
		postInitSlideshow: function() {
			var t = this.opts();
			t.API.trigger("cycle-post-initialize", [t]);
			var n = e.fn.cycle.transitions[t.fx];
			n && e.isFunction(n.postInit) && n.postInit(t)
		},
		initSlideshow: function() {
			var t, n = this.opts(),
				r = n.container;
			n.API.calcFirstSlide(), "static" == n.container.css("position") && n.container.css("position", "relative"), e(n.slides[n.currSlide]).css("opacity", 1).show(), n.API.stackSlides(n.slides[n.currSlide], n.slides[n.nextSlide], !n.reverse), n.pauseOnHover && (n.pauseOnHover !== !0 && (r = e(n.pauseOnHover)), r.hover(function() {
				n.API.pause(!0)
			}, function() {
				n.API.resume(!0)
			})), n.timeout && (t = n.API.getSlideOpts(n.nextSlide), n.API.queueTransition(t, t.timeout + n.delay)), n._initialized = !0, n.API.updateView(!0), n.API.trigger("cycle-initialized", [n]), n.API.postInitSlideshow()
		},
		pause: function(t) {
			var n = this.opts(),
				r = n.API.getSlideOpts(),
				i = n.hoverPaused || n.paused;
			t ? n.hoverPaused = !0 : n.paused = !0, i || (n.container.addClass("cycle-paused"), n.API.trigger("cycle-paused", [n]).log("cycle-paused"), r.timeout && (clearTimeout(n.timeoutId), n.timeoutId = 0, n._remainingTimeout -= e.now() - n._lastQueue, (0 > n._remainingTimeout || isNaN(n._remainingTimeout)) && (n._remainingTimeout = void 0)))
		},
		resume: function(e) {
			var t = this.opts(),
				n = !t.hoverPaused && !t.paused;
			e ? t.hoverPaused = !1 : t.paused = !1, n || (t.container.removeClass("cycle-paused"), t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout), t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed"))
		},
		add: function(t, n) {
			var r, i = this.opts(),
				s = i.slideCount,
				o = !1;
			"string" == e.type(t) && (t = e.trim(t)), e(t).each(function() {
				var t, r = e(this);
				n ? i.container.prepend(r) : i.container.append(r), i.slideCount++, t = i.API.buildSlideOpts(r), i.slides = n ? e(r).add(i.slides) : i.slides.add(r), i.API.initSlide(t, r, --i._maxZ), r.data("cycle.opts", t), i.API.trigger("cycle-slide-added", [i, t, r])
			}), i.API.updateView(!0), o = i._preInitialized && 2 > s && i.slideCount >= 1, o && (i._initialized ? i.timeout && (r = i.slides.length, i.nextSlide = i.reverse ? r - 1 : 1, i.timeoutId || i.API.queueTransition(i)) : i.API.initSlideshow())
		},
		calcFirstSlide: function() {
			var e, t = this.opts();
			e = parseInt(t.startingSlide || 0, 10), (e >= t.slides.length || 0 > e) && (e = 0), t.currSlide = e, t.reverse ? (t.nextSlide = e - 1, 0 > t.nextSlide && (t.nextSlide = t.slides.length - 1)) : (t.nextSlide = e + 1, t.nextSlide == t.slides.length && (t.nextSlide = 0))
		},
		calcNextSlide: function() {
			var e, t = this.opts();
			t.reverse ? (e = 0 > t.nextSlide - 1, t.nextSlide = e ? t.slideCount - 1 : t.nextSlide - 1, t.currSlide = e ? 0 : t.nextSlide + 1) : (e = t.nextSlide + 1 == t.slides.length, t.nextSlide = e ? 0 : t.nextSlide + 1, t.currSlide = e ? t.slides.length - 1 : t.nextSlide - 1)
		},
		calcTx: function(t, n) {
			var r, i = t;
			return n && i.manualFx && (r = e.fn.cycle.transitions[i.manualFx]), r || (r = e.fn.cycle.transitions[i.fx]), r || (r = e.fn.cycle.transitions.fade, i.API.log('Transition "' + i.fx + '" not found.  Using fade.')), r
		},
		prepareTx: function(e, t) {
			var n, r, i, s, o, u = this.opts();
			return 2 > u.slideCount ? (u.timeoutId = 0, void 0) : (!e || u.busy && !u.manualTrump || (u.API.stopTransition(), u.busy = !1, clearTimeout(u.timeoutId), u.timeoutId = 0), u.busy || (0 !== u.timeoutId || e) && (r = u.slides[u.currSlide], i = u.slides[u.nextSlide], s = u.API.getSlideOpts(u.nextSlide), o = u.API.calcTx(s, e), u._tx = o, e && void 0 !== s.manualSpeed && (s.speed = s.manualSpeed), u.nextSlide != u.currSlide && (e || !u.paused && !u.hoverPaused && u.timeout) ? (u.API.trigger("cycle-before", [s, r, i, t]), o.before && o.before(s, r, i, t), n = function() {
				u.busy = !1, u.container.data("cycle.opts") && (o.after && o.after(s, r, i, t), u.API.trigger("cycle-after", [s, r, i, t]), u.API.queueTransition(s), u.API.updateView(!0))
			}, u.busy = !0, o.transition ? o.transition(s, r, i, t, n) : u.API.doTransition(s, r, i, t, n), u.API.calcNextSlide(), u.API.updateView()) : u.API.queueTransition(s)), void 0)
		},
		doTransition: function(t, n, r, i, s) {
			var o = t,
				u = e(n),
				a = e(r),
				f = function() {
					a.animate(o.animIn || {
						opacity: 1
					}, o.speed, o.easeIn || o.easing, s)
				};
			a.css(o.cssBefore || {}), u.animate(o.animOut || {}, o.speed, o.easeOut || o.easing, function() {
				u.css(o.cssAfter || {}), o.sync || f()
			}), o.sync && f()
		},
		queueTransition: function(t, n) {
			var r = this.opts(),
				i = void 0 !== n ? n : t.timeout;
			return 0 === r.nextSlide && 0 === --r.loop ? (r.API.log("terminating; loop=0"), r.timeout = 0, i ? setTimeout(function() {
				r.API.trigger("cycle-finished", [r])
			}, i) : r.API.trigger("cycle-finished", [r]), r.nextSlide = r.currSlide, void 0) : (i && (r._lastQueue = e.now(), void 0 === n && (r._remainingTimeout = t.timeout), r.paused || r.hoverPaused || (r.timeoutId = setTimeout(function() {
				r.API.prepareTx(!1, !r.reverse)
			}, i))), void 0)
		},
		stopTransition: function() {
			var e = this.opts();
			e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger("cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e)
		},
		advanceSlide: function(e) {
			var t = this.opts();
			return clearTimeout(t.timeoutId), t.timeoutId = 0, t.nextSlide = t.currSlide + e, 0 > t.nextSlide ? t.nextSlide = t.slides.length - 1 : t.nextSlide >= t.slides.length && (t.nextSlide = 0), t.API.prepareTx(!0, e >= 0), !1
		},
		buildSlideOpts: function(n) {
			var r, i, s = this.opts(),
				o = n.data() || {};
			for (var u in o) o.hasOwnProperty(u) && /^cycle[A-Z]+/.test(u) && (r = o[u], i = u.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), s.API.log("[" + (s.slideCount - 1) + "]", i + ":", r, "(" + typeof r + ")"), o[i] = r);
			o = e.extend({}, e.fn.cycle.defaults, s, o), o.slideNum = s.slideCount;
			try {
				delete o.API, delete o.slideCount, delete o.currSlide, delete o.nextSlide, delete o.slides
			} catch (a) {}
			return o
		},
		getSlideOpts: function(t) {
			var n = this.opts();
			void 0 === t && (t = n.currSlide);
			var r = n.slides[t],
				i = e(r).data("cycle.opts");
			return e.extend({}, n, i)
		},
		initSlide: function(t, n, r) {
			var i = this.opts();
			n.css(t.slideCss || {}), r > 0 && n.css("zIndex", r), isNaN(t.speed) && (t.speed = e.fx.speeds[t.speed] || e.fx.speeds._default), t.sync || (t.speed = t.speed / 2), n.addClass(i.slideClass)
		},
		updateView: function(e) {
			var t = this.opts();
			if (t._initialized) {
				var n = t.API.getSlideOpts(),
					r = t.slides[t.currSlide];
				!e && (t.API.trigger("cycle-update-view-before", [t, n, r]), 0 > t.updateView) || (t.slideActiveClass && t.slides.removeClass(t.slideActiveClass).eq(t.currSlide).addClass(t.slideActiveClass), e && t.hideNonActive && t.slides.filter(":not(." + t.slideActiveClass + ")").hide(), t.API.trigger("cycle-update-view", [t, n, r, e]), t.API.trigger("cycle-update-view-after", [t, n, r]))
			}
		},
		getComponent: function(t) {
			var n = this.opts(),
				r = n[t];
			return "string" == typeof r ? /^\s*[\>|\+|~]/.test(r) ? n.container.find(r) : e(r) : r.jquery ? r : e(r)
		},
		stackSlides: function(t, n, r) {
			var i = this.opts();
			t || (t = i.slides[i.currSlide], n = i.slides[i.nextSlide], r = !i.reverse), e(t).css("zIndex", i.maxZ);
			var s, o = i.maxZ - 2,
				u = i.slideCount;
			if (r) {
				for (s = i.currSlide + 1; u > s; s++) e(i.slides[s]).css("zIndex", o--);
				for (s = 0; i.currSlide > s; s++) e(i.slides[s]).css("zIndex", o--)
			} else {
				for (s = i.currSlide - 1; s >= 0; s--) e(i.slides[s]).css("zIndex", o--);
				for (s = u - 1; s > i.currSlide; s--) e(i.slides[s]).css("zIndex", o--)
			}
			e(n).css("zIndex", i.maxZ - 1)
		},
		getSlideIndex: function(e) {
			return this.opts().slides.index(e)
		}
	}, e.fn.cycle.log = function() {
		window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
	}, e.fn.cycle.version = function() {
		return "Cycle2: " + n
	}, e.fn.cycle.transitions = {
		custom: {},
		none: {
			before: function(e, t, n, r) {
				e.API.stackSlides(n, t, r), e.cssBefore = {
					opacity: 1,
					display: "block"
				}
			}
		},
		fade: {
			before: function(t, n, r, i) {
				var s = t.API.getSlideOpts(t.nextSlide).slideCss || {};
				t.API.stackSlides(n, r, i), t.cssBefore = e.extend(s, {
					opacity: 0,
					display: "block"
				}), t.animIn = {
					opacity: 1
				}, t.animOut = {
					opacity: 0
				}
			}
		},
		fadeout: {
			before: function(t, n, r, i) {
				var s = t.API.getSlideOpts(t.nextSlide).slideCss || {};
				t.API.stackSlides(n, r, i), t.cssBefore = e.extend(s, {
					opacity: 1,
					display: "block"
				}), t.animOut = {
					opacity: 0
				}
			}
		},
		scrollHorz: {
			before: function(e, t, n, r) {
				e.API.stackSlides(t, n, r);
				var i = e.container.css("overflow", "hidden").width();
				e.cssBefore = {
					left: r ? i : -i,
					top: 0,
					opacity: 1,
					display: "block"
				}, e.cssAfter = {
					zIndex: e._maxZ - 2,
					left: 0
				}, e.animIn = {
					left: 0
				}, e.animOut = {
					left: r ? -i : i
				}
			}
		}
	}, e.fn.cycle.defaults = {
		allowWrap: !0,
		autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
		delay: 0,
		easing: null,
		fx: "fade",
		hideNonActive: !0,
		loop: 0,
		manualFx: void 0,
		manualSpeed: void 0,
		manualTrump: !0,
		maxZ: 100,
		pauseOnHover: !1,
		reverse: !1,
		slideActiveClass: "cycle-slide-active",
		slideClass: "cycle-slide",
		slideCss: {
			position: "absolute",
			top: 0,
			left: 0
		},
		slides: "> img",
		speed: 500,
		startingSlide: 0,
		sync: !0,
		timeout: 4e3,
		updateView: -1
	}, e(document).ready(function() {
		e(e.fn.cycle.defaults.autoSelector).cycle()
	})
})(jQuery),
function(e) {
	"use strict";

	function t(t, r) {
		var i, s, o, u = r.autoHeight;
		if ("container" == u) s = e(r.slides[r.currSlide]).outerHeight(), r.container.height(s);
		else if (r._autoHeightRatio) r.container.height(r.container.width() / r._autoHeightRatio);
		else if ("calc" === u || "number" == e.type(u) && u >= 0) {
			if (o = "calc" === u ? n(t, r) : u >= r.slides.length ? 0 : u, o == r._sentinelIndex) return;
			r._sentinelIndex = o, r._sentinel && r._sentinel.remove(), i = e(r.slides[o].cloneNode(!0)), i.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), i.css({
				position: "static",
				visibility: "hidden",
				display: "block"
			}).prependTo(r.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), i.find("*").css("visibility", "hidden"), r._sentinel = i
		}
	}

	function n(t, n) {
		var r = 0,
			i = -1;
		return n.slides.each(function(t) {
			var n = e(this).height();
			n > i && (i = n, r = t)
		}), r
	}

	function r(t, n, r, i) {
		var s = e(i).outerHeight(),
			o = n.sync ? n.speed / 2 : n.speed;
		n.container.animate({
			height: s
		}, o)
	}

	function i(n, o) {
		o._autoHeightOnResize && (e(window).off("resize orientationchange", o._autoHeightOnResize), o._autoHeightOnResize = null), o.container.off("cycle-slide-added cycle-slide-removed", t), o.container.off("cycle-destroyed", i), o.container.off("cycle-before", r), o._sentinel && (o._sentinel.remove(), o._sentinel = null)
	}
	e.extend(e.fn.cycle.defaults, {
		autoHeight: 0
	}), e(document).on("cycle-initialized", function(n, o) {
		function u() {
			t(n, o)
		}
		var a, f = o.autoHeight,
			l = e.type(f),
			c = null;
		("string" === l || "number" === l) && (o.container.on("cycle-slide-added cycle-slide-removed", t), o.container.on("cycle-destroyed", i), "container" == f ? o.container.on("cycle-before", r) : "string" === l && /\d+\:\d+/.test(f) && (a = f.match(/(\d+)\:(\d+)/), a = a[1] / a[2], o._autoHeightRatio = a), "number" !== l && (o._autoHeightOnResize = function() {
			clearTimeout(c), c = setTimeout(u, 50)
		}, e(window).on("resize orientationchange", o._autoHeightOnResize)), setTimeout(u, 30))
	})
}(jQuery),
function(e) {
	"use strict";
	e.extend(e.fn.cycle.defaults, {
		caption: "> .cycle-caption",
		captionTemplate: "{{slideNum}} / {{slideCount}}",
		overlay: "> .cycle-overlay",
		overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
		captionModule: "caption"
	}), e(document).on("cycle-update-view", function(t, n, r, i) {
		"caption" === n.captionModule && e.each(["caption", "overlay"], function() {
			var e = this,
				t = r[e + "Template"],
				o = n.API.getComponent(e);
			o.length && t ? (o.html(n.API.tmpl(t, r, n, i)), o.show()) : o.hide()
		})
	}), e(document).on("cycle-destroyed", function(t, n) {
		var r;
		e.each(["caption", "overlay"], function() {
			var e = this,
				t = n[e + "Template"];
			n[e] && t && (r = n.API.getComponent("caption"), r.empty())
		})
	})
}(jQuery),
function(e) {
	"use strict";
	var t = e.fn.cycle;
	e.fn.cycle = function(n) {
		var r, i, s, o = e.makeArray(arguments);
		return "number" == e.type(n) ? this.cycle("goto", n) : "string" == e.type(n) ? this.each(function() {
			var u;
			return r = n, s = e(this).data("cycle.opts"), void 0 === s ? (t.log('slideshow must be initialized before sending commands; "' + r + '" ignored'), void 0) : (r = "goto" == r ? "jump" : r, i = s.API[r], e.isFunction(i) ? (u = e.makeArray(o), u.shift(), i.apply(s.API, u)) : (t.log("unknown command: ", r), void 0))
		}) : t.apply(this, arguments)
	}, e.extend(e.fn.cycle, t), e.extend(t.API, {
		next: function() {
			var e = this.opts();
			if (!e.busy || e.manualTrump) {
				var t = e.reverse ? -1 : 1;
				e.allowWrap === !1 && e.currSlide + t >= e.slideCount || (e.API.advanceSlide(t), e.API.trigger("cycle-next", [e]).log("cycle-next"))
			}
		},
		prev: function() {
			var e = this.opts();
			if (!e.busy || e.manualTrump) {
				var t = e.reverse ? 1 : -1;
				e.allowWrap === !1 && 0 > e.currSlide + t || (e.API.advanceSlide(t), e.API.trigger("cycle-prev", [e]).log("cycle-prev"))
			}
		},
		destroy: function() {
			this.stop();
			var t = this.opts(),
				n = e.isFunction(e._data) ? e._data : e.noop;
			clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stop(), t.API.trigger("cycle-destroyed", [t]).log("cycle-destroyed"), t.container.removeData(), n(t.container[0], "parsedAttrs", !1), t.retainStylesOnDestroy || (t.container.removeAttr("style"), t.slides.removeAttr("style"), t.slides.removeClass("cycle-slide-active")), t.slides.each(function() {
				e(this).removeData(), n(this, "parsedAttrs", !1)
			})
		},
		jump: function(e) {
			var t, n = this.opts();
			if (!n.busy || n.manualTrump) {
				var r = parseInt(e, 10);
				if (isNaN(r) || 0 > r || r >= n.slides.length) return n.API.log("goto: invalid slide index: " + r), void 0;
				if (r == n.currSlide) return n.API.log("goto: skipping, already on slide", r), void 0;
				n.nextSlide = r, clearTimeout(n.timeoutId), n.timeoutId = 0, n.API.log("goto: ", r, " (zero-index)"), t = n.currSlide < n.nextSlide, n.API.prepareTx(!0, t)
			}
		},
		stop: function() {
			var t = this.opts(),
				n = t.container;
			clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stopTransition(), t.pauseOnHover && (t.pauseOnHover !== !0 && (n = e(t.pauseOnHover)), n.off("mouseenter mouseleave")), t.API.trigger("cycle-stopped", [t]).log("cycle-stopped")
		},
		reinit: function() {
			var e = this.opts();
			e.API.destroy(), e.container.cycle()
		},
		remove: function(t) {
			for (var n, r, i = this.opts(), s = [], o = 1, u = 0; i.slides.length > u; u++) n = i.slides[u], u == t ? r = n : (s.push(n), e(n).data("cycle.opts").slideNum = o, o++);
			r && (i.slides = e(s), i.slideCount--, e(r).remove(), t == i.currSlide && i.API.advanceSlide(1), i.API.trigger("cycle-slide-removed", [i, t, r]).log("cycle-slide-removed"), i.API.updateView())
		}
	}), e(document).on("click.cycle", "[data-cycle-cmd]", function(t) {
		t.preventDefault();
		var n = e(this),
			r = n.data("cycle-cmd"),
			i = n.data("cycle-context") || ".cycle-slideshow";
		e(i).cycle(r, n.data("cycle-arg"))
	})
}(jQuery),
function(e) {
	"use strict";

	function t(t, n) {
		var r;
		return t._hashFence ? (t._hashFence = !1, void 0) : (r = window.location.hash.substring(1), t.slides.each(function(s) {
			return e(this).data("cycle-hash") == r ? (n === !0 ? t.startingSlide = s : (t.nextSlide = s, t.API.prepareTx(!0, !1)), !1) : void 0
		}), void 0)
	}
	e(document).on("cycle-pre-initialize", function(n, r) {
		t(r, !0), r._onHashChange = function() {
			t(r, !1)
		}, e(window).on("hashchange", r._onHashChange)
	}), e(document).on("cycle-update-view", function(e, t, n) {
		n.hash && (t._hashFence = !0, window.location.hash = n.hash)
	}), e(document).on("cycle-destroyed", function(t, n) {
		n._onHashChange && e(window).off("hashchange", n._onHashChange)
	})
}(jQuery),
function(e) {
	"use strict";
	e.extend(e.fn.cycle.defaults, {
		loader: !1
	}), e(document).on("cycle-bootstrap", function(t, n) {
		function r(t, r) {
			function o(t) {
				var o;
				"wait" == n.loader ? (a.push(t), 0 === l && (a.sort(u), i.apply(n.API, [a, r]), n.container.removeClass("cycle-loading"))) : (o = e(n.slides[n.currSlide]), i.apply(n.API, [t, r]), o.show(), n.container.removeClass("cycle-loading"))
			}

			function u(e, t) {
				return e.data("index") - t.data("index")
			}
			var a = [];
			if ("string" == e.type(t)) t = e.trim(t);
			else if ("array" === e.type(t))
				for (var f = 0; t.length > f; f++) t[f] = e(t[f])[0];
			t = e(t);
			var l = t.length;
			l && (t.hide().appendTo("body").each(function(t) {
				function u() {
					0 === --f && (--l, o(c))
				}
				var f = 0,
					c = e(this),
					h = c.is("img") ? c : c.find("img");
				return c.data("index", t), h = h.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'), h.length ? (f = h.length, h.each(function() {
					this.complete ? u() : e(this).load(function() {
						u()
					}).error(function() {
						0 === --f && (n.API.log("slide skipped; img not loaded:", this.src), 0 === --l && "wait" == n.loader && i.apply(n.API, [a, r]))
					})
				}), void 0) : (--l, a.push(c), void 0)
			}), l && n.container.addClass("cycle-loading"))
		}
		var i;
		n.loader && (i = n.API.add, n.API.add = r)
	})
}(jQuery),
function(e) {
	"use strict";

	function t(t, n, r) {
		var i, s = t.API.getComponent("pager");
		s.each(function() {
			var s = e(this);
			if (n.pagerTemplate) {
				var o = t.API.tmpl(n.pagerTemplate, n, t, r[0]);
				i = e(o).appendTo(s)
			} else i = s.children().eq(t.slideCount - 1);
			i.on(t.pagerEvent, function(e) {
				e.preventDefault(), t.API.page(s, e.currentTarget)
			})
		})
	}

	function n(e, t) {
		var n = this.opts();
		if (!n.busy || n.manualTrump) {
			var r = e.children().index(t),
				i = r,
				s = i > n.currSlide;
			n.currSlide != i && (n.nextSlide = i, n.API.prepareTx(!0, s), n.API.trigger("cycle-pager-activated", [n, e, t]))
		}
	}
	e.extend(e.fn.cycle.defaults, {
		pager: "> .cycle-pager",
		pagerActiveClass: "cycle-pager-active",
		pagerEvent: "click.cycle",
		pagerTemplate: "<span>&bull;</span>"
	}), e(document).on("cycle-bootstrap", function(e, n, r) {
		r.buildPagerLink = t
	}), e(document).on("cycle-slide-added", function(e, t, r, s) {
		t.pager && (t.API.buildPagerLink(t, r, s), t.API.page = n)
	}), e(document).on("cycle-slide-removed", function(t, n, r) {
		if (n.pager) {
			var i = n.API.getComponent("pager");
			i.each(function() {
				var t = e(this);
				e(t.children()[r]).remove()
			})
		}
	}), e(document).on("cycle-update-view", function(t, n) {
		var r;
		n.pager && (r = n.API.getComponent("pager"), r.each(function() {
			e(this).children().removeClass(n.pagerActiveClass).eq(n.currSlide).addClass(n.pagerActiveClass)
		}))
	}), e(document).on("cycle-destroyed", function(e, t) {
		var n = t.API.getComponent("pager");
		n && (n.children().off(t.pagerEvent), t.pagerTemplate && n.empty())
	})
}(jQuery),
function(e) {
	"use strict";
	e.extend(e.fn.cycle.defaults, {
		next: "> .cycle-next",
		nextEvent: "click.cycle",
		disabledClass: "disabled",
		prev: "> .cycle-prev",
		prevEvent: "click.cycle",
		swipe: !1
	}), e(document).on("cycle-initialized", function(e, t) {
		if (t.API.getComponent("next").on(t.nextEvent, function(e) {
				e.preventDefault(), t.API.next()
			}), t.API.getComponent("prev").on(t.prevEvent, function(e) {
				e.preventDefault(), t.API.prev()
			}), t.swipe) {
			var n = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
				r = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
			t.container.on(n, function() {
				t.API.next()
			}), t.container.on(r, function() {
				t.API.prev()
			})
		}
	}), e(document).on("cycle-update-view", function(e, t) {
		if (!t.allowWrap) {
			var n = t.disabledClass,
				r = t.API.getComponent("next"),
				i = t.API.getComponent("prev"),
				s = t._prevBoundry || 0,
				o = t._nextBoundry || t.slideCount - 1;
			t.currSlide == o ? r.addClass(n).prop("disabled", !0) : r.removeClass(n).prop("disabled", !1), t.currSlide === s ? i.addClass(n).prop("disabled", !0) : i.removeClass(n).prop("disabled", !1)
		}
	}), e(document).on("cycle-destroyed", function(e, t) {
		t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
	})
}(jQuery),
function(e) {
	"use strict";
	e.extend(e.fn.cycle.defaults, {
		progressive: !1
	}), e(document).on("cycle-pre-initialize", function(t, n) {
		if (n.progressive) {
			var r, i, s = n.API,
				o = s.next,
				u = s.prev,
				a = s.prepareTx,
				f = e.type(n.progressive);
			if ("array" == f) r = n.progressive;
			else if (e.isFunction(n.progressive)) r = n.progressive(n);
			else if ("string" == f) {
				if (i = e(n.progressive), r = e.trim(i.html()), !r) return;
				if (/^(\[)/.test(r)) try {
					r = e.parseJSON(r)
				} catch (l) {
					return s.log("error parsing progressive slides", l), void 0
				} else r = r.split(RegExp(i.data("cycle-split") || "\n")), r[r.length - 1] || r.pop()
			}
			a && (s.prepareTx = function(e, t) {
				var i, s;
				return e || 0 === r.length ? (a.apply(n.API, [e, t]), void 0) : (t && n.currSlide == n.slideCount - 1 ? (s = r[0], r = r.slice(1), n.container.one("cycle-slide-added", function(e, t) {
					setTimeout(function() {
						t.API.advanceSlide(1)
					}, 50)
				}), n.API.add(s)) : t || 0 !== n.currSlide ? a.apply(n.API, [e, t]) : (i = r.length - 1, s = r[i], r = r.slice(0, i), n.container.one("cycle-slide-added", function(e, t) {
					setTimeout(function() {
						t.currSlide = 1, t.API.advanceSlide(-1)
					}, 50)
				}), n.API.add(s, !0)), void 0)
			}), o && (s.next = function() {
				var e = this.opts();
				if (r.length && e.currSlide == e.slideCount - 1) {
					var t = r[0];
					r = r.slice(1), e.container.one("cycle-slide-added", function(e, t) {
						o.apply(t.API), t.container.removeClass("cycle-loading")
					}), e.container.addClass("cycle-loading"), e.API.add(t)
				} else o.apply(e.API)
			}), u && (s.prev = function() {
				var e = this.opts();
				if (r.length && 0 === e.currSlide) {
					var t = r.length - 1,
						n = r[t];
					r = r.slice(0, t), e.container.one("cycle-slide-added", function(e, t) {
						t.currSlide = 1, t.API.advanceSlide(-1), t.container.removeClass("cycle-loading")
					}), e.container.addClass("cycle-loading"), e.API.add(n, !0)
				} else u.apply(e.API)
			})
		}
	})
}(jQuery),
function(e) {
	"use strict";
	e.extend(e.fn.cycle.defaults, {
		tmplRegex: "{{((.)?.*?)}}"
	}), e.extend(e.fn.cycle.API, {
		tmpl: function(t, n) {
			var r = RegExp(n.tmplRegex || e.fn.cycle.defaults.tmplRegex, "g"),
				i = e.makeArray(arguments);
			return i.shift(), t.replace(r, function(t, n) {
				var r, o, u, a, f = n.split(".");
				for (r = 0; i.length > r; r++)
					if (u = i[r]) {
						if (f.length > 1)
							for (a = u, o = 0; f.length > o; o++) u = a, a = a[f[o]] || n;
						else a = u[n];
						if (e.isFunction(a)) return a.apply(u, i);
						if (void 0 !== a && null !== a && a != n) return a
					}
				return n
			})
		}
	})
}(jQuery);
(function(e) {
	"use strict";
	e(document).on("cycle-bootstrap", function(e, t, n) {
		if (t.fx !== "carousel") return;
		n.getSlideIndex = function(e) {
			var t = this.opts()._carouselWrap.children();
			var n = t.index(e);
			return n % t.length
		};
		n.next = function() {
			var e = t.reverse ? -1 : 1;
			if (t.allowWrap === false && t.currSlide + e > t.slideCount - t.carouselVisible) return;
			t.API.advanceSlide(e);
			t.API.trigger("cycle-next", [t]).log("cycle-next")
		}
	});
	e.fn.cycle.transitions.carousel = {
		preInit: function(t) {
			t.hideNonActive = false;
			t.container.on("cycle-destroyed", e.proxy(this.onDestroy, t.API));
			t.API.stopTransition = this.stopTransition;
			for (var n = 0; n < t.startingSlide; n++) {
				t.container.append(t.slides[0])
			}
		},
		postInit: function(t) {
			var n, r, i, s, o;
			var u = t.carouselVertical;
			if (t.carouselVisible && t.carouselVisible > t.slideCount) t.carouselVisible = t.slideCount - 1;
			var a = t.carouselVisible || t.slides.length;
			var f = {
				display: u ? "block" : "inline-block",
				position: "static"
			};
			t.container.css({
				position: "relative",
				overflow: "hidden"
			});
			t.slides.css(f);
			t._currSlide = t.currSlide;
			o = e('<div class="cycle-carousel-wrap"></div>').prependTo(t.container).css({
				margin: 0,
				padding: 0,
				top: 0,
				left: 0,
				position: "absolute"
			}).append(t.slides);
			t._carouselWrap = o;
			if (!u) o.css("white-space", "nowrap");
			if (t.allowWrap !== false) {
				for (r = 0; r < (t.carouselVisible === undefined ? 2 : 1); r++) {
					for (n = 0; n < t.slideCount; n++) {
						o.append(t.slides[n].cloneNode(true))
					}
					n = t.slideCount;
					while (n--) {
						o.prepend(t.slides[n].cloneNode(true))
					}
				}
				o.find(".cycle-slide-active").removeClass("cycle-slide-active");
				t.slides.eq(t.startingSlide).addClass("cycle-slide-active")
			}
			if (t.pager && t.allowWrap === false) {
				s = t.slideCount - a;
				e(t.pager).children().filter(":gt(" + s + ")").hide()
			}
			t._nextBoundry = t.slideCount - t.carouselVisible;
			this.prepareDimensions(t)
		},
		prepareDimensions: function(t) {
			var n, r, i, s;
			var o = t.carouselVertical;
			var u = t.carouselVisible || t.slides.length;
			if (t.carouselFluid && t.carouselVisible) {
				if (!t._carouselResizeThrottle) {
					this.fluidSlides(t)
				}
			} else if (t.carouselVisible && t.carouselSlideDimension) {
				n = u * t.carouselSlideDimension;
				t.container[o ? "height" : "width"](n)
			} else if (t.carouselVisible) {
				n = u * e(t.slides[0])[o ? "outerHeight" : "outerWidth"](true);
				t.container[o ? "height" : "width"](n)
			}
			r = t.carouselOffset || 0;
			if (t.allowWrap !== false) {
				if (t.carouselSlideDimension) {
					r -= (t.slideCount + t.currSlide) * t.carouselSlideDimension
				} else {
					s = t._carouselWrap.children();
					for (var a = 0; a < t.slideCount + t.currSlide; a++) {
						r -= e(s[a])[o ? "outerHeight" : "outerWidth"](true)
					}
				}
			}
			t._carouselWrap.css(o ? "top" : "left", r)
		},
		fluidSlides: function(t) {
			function o() {
				clearTimeout(n);
				n = setTimeout(u, 20)
			}

			function u() {
				t._carouselWrap.stop(false, true);
				var e = t.container.width() / t.carouselVisible;
				e = Math.ceil(e - i);
				t._carouselWrap.children().width(e);
				if (t._sentinel) t._sentinel.width(e);
				s(t)
			}
			var n;
			var r = t.slides.eq(0);
			var i = r.outerWidth() - r.width();
			var s = this.prepareDimensions;
			e(window).on("resize", o);
			t._carouselResizeThrottle = o;
			u()
		},
		transition: function(t, n, r, i, s) {
			var o, u = {};
			var a = t.nextSlide - t.currSlide;
			var f = t.carouselVertical;
			var l = t.speed;
			if (t.allowWrap === false) {
				i = a > 0;
				var c = t._currSlide;
				var h = t.slideCount - t.carouselVisible;
				if (a > 0 && t.nextSlide > h && c == h) {
					a = 0
				} else if (a > 0 && t.nextSlide > h) {
					a = t.nextSlide - c - (t.nextSlide - h)
				} else if (a < 0 && t.currSlide > h && t.nextSlide > h) {
					a = 0
				} else if (a < 0 && t.currSlide > h) {
					a += t.currSlide - h
				} else c = t.currSlide;
				o = this.getScroll(t, f, c, a);
				t.API.opts()._currSlide = t.nextSlide > h ? h : t.nextSlide
			} else {
				if (i && t.nextSlide === 0) {
					o = this.getDim(t, t.currSlide, f);
					s = this.genCallback(t, i, f, s)
				} else if (!i && t.nextSlide == t.slideCount - 1) {
					o = this.getDim(t, t.currSlide, f);
					s = this.genCallback(t, i, f, s)
				} else {
					o = this.getScroll(t, f, t.currSlide, a)
				}
			}
			u[f ? "top" : "left"] = i ? "-=" + o : "+=" + o;
			if (t.throttleSpeed) l = o / e(t.slides[0])[f ? "height" : "width"]() * t.speed;
			t._carouselWrap.animate(u, l, t.easing, s)
		},
		getDim: function(t, n, r) {
			var i = e(t.slides[n]);
			return i[r ? "outerHeight" : "outerWidth"](true)
		},
		getScroll: function(e, t, n, r) {
			var i, s = 0;
			if (r > 0) {
				for (i = n; i < n + r; i++) s += this.getDim(e, i, t)
			} else {
				for (i = n; i > n + r; i--) s += this.getDim(e, i, t)
			}
			return s
		},
		genCallback: function(t, n, r, i) {
			return function() {
				var n = e(t.slides[t.nextSlide]).position();
				var s = 0 - n[r ? "top" : "left"] + (t.carouselOffset || 0);
				t._carouselWrap.css(t.carouselVertical ? "top" : "left", s);
				i()
			}
		},
		stopTransition: function() {
			var e = this.opts();
			e.slides.stop(false, true);
			e._carouselWrap.stop(false, true)
		},
		onDestroy: function(t) {
			var n = this.opts();
			if (n._carouselResizeThrottle) e(window).off("resize", n._carouselResizeThrottle);
			n.slides.prependTo(n.container);
			n._carouselWrap.remove()
		}
	}
})(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(e, t, n, r, i) {
		return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
	},
	easeInQuad: function(e, t, n, r, i) {
		return r * (t /= i) * t + n
	},
	easeOutQuad: function(e, t, n, r, i) {
		return -r * (t /= i) * (t - 2) + n
	},
	easeInOutQuad: function(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return r / 2 * t * t + n;
		return -r / 2 * (--t * (t - 2) - 1) + n
	},
	easeInCubic: function(e, t, n, r, i) {
		return r * (t /= i) * t * t + n
	},
	easeOutCubic: function(e, t, n, r, i) {
		return r * ((t = t / i - 1) * t * t + 1) + n
	},
	easeInOutCubic: function(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
		return r / 2 * ((t -= 2) * t * t + 2) + n
	},
	easeInQuart: function(e, t, n, r, i) {
		return r * (t /= i) * t * t * t + n
	},
	easeOutQuart: function(e, t, n, r, i) {
		return -r * ((t = t / i - 1) * t * t * t - 1) + n
	},
	easeInOutQuart: function(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
		return -r / 2 * ((t -= 2) * t * t * t - 2) + n
	},
	easeInQuint: function(e, t, n, r, i) {
		return r * (t /= i) * t * t * t * t + n
	},
	easeOutQuint: function(e, t, n, r, i) {
		return r * ((t = t / i - 1) * t * t * t * t + 1) + n
	},
	easeInOutQuint: function(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
		return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
	},
	easeInSine: function(e, t, n, r, i) {
		return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
	},
	easeOutSine: function(e, t, n, r, i) {
		return r * Math.sin(t / i * (Math.PI / 2)) + n
	},
	easeInOutSine: function(e, t, n, r, i) {
		return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
	},
	easeInExpo: function(e, t, n, r, i) {
		return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
	},
	easeOutExpo: function(e, t, n, r, i) {
		return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
	},
	easeInOutExpo: function(e, t, n, r, i) {
		if (t == 0) return n;
		if (t == i) return n + r;
		if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
		return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
	},
	easeInCirc: function(e, t, n, r, i) {
		return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
	},
	easeOutCirc: function(e, t, n, r, i) {
		return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
	},
	easeInOutCirc: function(e, t, n, r, i) {
		if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
		return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
	},
	easeInElastic: function(e, t, n, r, i) {
		var s = 1.70158;
		var o = 0;
		var u = r;
		if (t == 0) return n;
		if ((t /= i) == 1) return n + r;
		if (!o) o = i * .3;
		if (u < Math.abs(r)) {
			u = r;
			var s = o / 4
		} else var s = o / (2 * Math.PI) * Math.asin(r / u);
		return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
	},
	easeOutElastic: function(e, t, n, r, i) {
		var s = 1.70158;
		var o = 0;
		var u = r;
		if (t == 0) return n;
		if ((t /= i) == 1) return n + r;
		if (!o) o = i * .3;
		if (u < Math.abs(r)) {
			u = r;
			var s = o / 4
		} else var s = o / (2 * Math.PI) * Math.asin(r / u);
		return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
	},
	easeInOutElastic: function(e, t, n, r, i) {
		var s = 1.70158;
		var o = 0;
		var u = r;
		if (t == 0) return n;
		if ((t /= i / 2) == 2) return n + r;
		if (!o) o = i * .3 * 1.5;
		if (u < Math.abs(r)) {
			u = r;
			var s = o / 4
		} else var s = o / (2 * Math.PI) * Math.asin(r / u);
		if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
		return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
	},
	easeInBack: function(e, t, n, r, i, s) {
		if (s == undefined) s = 1.70158;
		return r * (t /= i) * t * ((s + 1) * t - s) + n
	},
	easeOutBack: function(e, t, n, r, i, s) {
		if (s == undefined) s = 1.70158;
		return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
	},
	easeInOutBack: function(e, t, n, r, i, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
		return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
	},
	easeInBounce: function(e, t, n, r, i) {
		return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
	},
	easeOutBounce: function(e, t, n, r, i) {
		if ((t /= i) < 1 / 2.75) {
			return r * 7.5625 * t * t + n
		} else if (t < 2 / 2.75) {
			return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
		} else if (t < 2.5 / 2.75) {
			return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
		} else {
			return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
		}
	},
	easeInOutBounce: function(e, t, n, r, i) {
		if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
		return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
	}
});
(function(e) {
	e.easytabs = function(t, n) {
		var r = this,
			i = e(t),
			s = {
				animate: true,
				panelActiveClass: "active",
				tabActiveClass: "active",
				defaultTab: "li:first-child",
				animationSpeed: "normal",
				tabs: "> ul > li",
				updateHash: true,
				cycle: false,
				collapsible: false,
				collapsedClass: "collapsed",
				collapsedByDefault: true,
				uiTabs: false,
				transitionIn: "fadeIn",
				transitionOut: "fadeOut",
				transitionInEasing: "swing",
				transitionOutEasing: "swing",
				transitionCollapse: "slideUp",
				transitionUncollapse: "slideDown",
				transitionCollapseEasing: "swing",
				transitionUncollapseEasing: "swing",
				containerClass: "",
				tabsClass: "",
				tabClass: "",
				panelClass: "",
				cache: true,
				event: "click",
				panelContext: i
			},
			o, u, a, f, l, c = {
				fast: 200,
				normal: 400,
				slow: 600
			},
			h;
		r.init = function() {
			r.settings = h = e.extend({}, s, n);
			h.bind_str = h.event + ".easytabs";
			if (h.uiTabs) {
				h.tabActiveClass = "ui-tabs-selected";
				h.containerClass = "ui-tabs ui-widget ui-widget-content ui-corner-all";
				h.tabsClass = "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";
				h.tabClass = "ui-state-default ui-corner-top";
				h.panelClass = "ui-tabs-panel ui-widget-content ui-corner-bottom"
			}
			if (h.collapsible && n.defaultTab !== undefined && n.collpasedByDefault === undefined) {
				h.collapsedByDefault = false
			}
			if (typeof h.animationSpeed === "string") {
				h.animationSpeed = c[h.animationSpeed]
			}
			e("a.anchor").remove().prependTo("body");
			i.data("easytabs", {});
			r.setTransitions();
			r.getTabs();
			d();
			v();
			g();
			E();
			S();
			i.attr("data-easytabs", true)
		};
		r.setTransitions = function() {
			a = h.animate ? {
				show: h.transitionIn,
				hide: h.transitionOut,
				speed: h.animationSpeed,
				collapse: h.transitionCollapse,
				uncollapse: h.transitionUncollapse,
				halfSpeed: h.animationSpeed / 2
			} : {
				show: "show",
				hide: "hide",
				speed: 0,
				collapse: "hide",
				uncollapse: "show",
				halfSpeed: 0
			}
		};
		r.getTabs = function() {
			var t;
			r.tabs = i.find(h.tabs), r.panels = e(), r.tabs.each(function() {
				var n = e(this),
					i = n.children("a"),
					s = n.children("a").data("target");
				if (!i.length) {
					return
				}
				n.data("easytabs", {});
				if (s !== undefined && s !== null) {
					n.data("easytabs").ajax = i.attr("href")
				} else {
					s = i.attr("href")
				}
				var o = s ? s.match(/#([^\?]+)/) : [];
				if (o && o.length > 0) {
					s = s.match(/#([^\?]+)/)[1];
					t = h.panelContext.find("#" + s)
				} else {
					t = []
				}
				if (t.length > 0) {
					t.data("easytabs", {
						position: t.css("position"),
						visibility: t.css("visibility")
					});
					t.not(h.panelActiveClass).hide();
					r.panels = r.panels.add(t);
					n.data("easytabs").panel = t
				} else {
					r.tabs = r.tabs.not(n);
					if ("console" in window) {
						console.warn("Warning: tab without matching panel for selector '#" + s + "' removed from set")
					}
				}
			})
		};
		r.selectTab = function(e, t) {
			var n = window.location,
				i = n.hash.match(/^[^\?]*/)[0],
				s = e.parent().data("easytabs").panel,
				o = e.parent().data("easytabs").ajax;
			if (h.collapsible && !l && (e.hasClass(h.tabActiveClass) || e.hasClass(h.collapsedClass))) {
				r.toggleTabCollapse(e, s, o, t)
			} else if (!e.hasClass(h.tabActiveClass) || !s.hasClass(h.panelActiveClass)) {
				y(e, s, o, t)
			} else if (!h.cache) {
				y(e, s, o, t)
			}
		};
		r.toggleTabCollapse = function(e, t, n, s) {
			r.panels.stop(true, true);
			if (p(i, "easytabs:before", [e, t, h])) {
				r.tabs.filter("." + h.tabActiveClass).removeClass(h.tabActiveClass).children().removeClass(h.tabActiveClass);
				if (e.hasClass(h.collapsedClass)) {
					if (n && (!h.cache || !e.parent().data("easytabs").cached)) {
						i.trigger("easytabs:ajax:beforeSend", [e, t]);
						t.load(n, function(n, r, s) {
							e.parent().data("easytabs").cached = true;
							i.trigger("easytabs:ajax:complete", [e, t, n, r, s])
						})
					}
					e.parent().removeClass(h.collapsedClass).addClass(h.tabActiveClass).children().removeClass(h.collapsedClass).addClass(h.tabActiveClass);
					t.addClass(h.panelActiveClass)[a.uncollapse](a.speed, h.transitionUncollapseEasing, function() {
						i.trigger("easytabs:midTransition", [e, t, h]);
						if (typeof s == "function") s()
					})
				} else {
					e.addClass(h.collapsedClass).parent().addClass(h.collapsedClass);
					t.removeClass(h.panelActiveClass)[a.collapse](a.speed, h.transitionCollapseEasing, function() {
						i.trigger("easytabs:midTransition", [e, t, h]);
						if (typeof s == "function") s()
					})
				}
			}
		};
		r.matchTab = function(e) {
			return r.tabs.find("[href='" + e + "'],[data-target='" + e + "']").first()
		};
		r.matchInPanel = function(e) {
			return e && r.validId(e) ? r.panels.filter(":has(" + e + ")").first() : []
		};
		r.validId = function(e) {
			return e.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)
		};
		r.selectTabFromHashChange = function() {
			var e = window.location.hash.match(/^[^\?]*/)[0],
				t = r.matchTab(e),
				n;
			if (h.updateHash) {
				if (t.length) {
					l = true;
					r.selectTab(t)
				} else {
					n = r.matchInPanel(e);
					if (n.length) {
						e = "#" + n.attr("id");
						t = r.matchTab(e);
						l = true;
						r.selectTab(t)
					} else if (!o.hasClass(h.tabActiveClass) && !h.cycle) {
						if (e === "" || r.matchTab(f).length || i.closest(e).length) {
							l = true;
							r.selectTab(u)
						}
					}
				}
			}
		};
		r.cycleTabs = function(t) {
			if (h.cycle) {
				t = t % r.tabs.length;
				$tab = e(r.tabs[t]).children("a").first();
				l = true;
				r.selectTab($tab, function() {
					setTimeout(function() {
						r.cycleTabs(t + 1)
					}, h.cycle)
				})
			}
		};
		r.publicMethods = {
			select: function(t) {
				var n;
				if ((n = r.tabs.filter(t)).length === 0) {
					if ((n = r.tabs.find("a[href='" + t + "']")).length === 0) {
						if ((n = r.tabs.find("a" + t)).length === 0) {
							if ((n = r.tabs.find("[data-target='" + t + "']")).length === 0) {
								if ((n = r.tabs.find("a[href$='" + t + "']")).length === 0) {
									e.error("Tab '" + t + "' does not exist in tab set")
								}
							}
						}
					}
				} else {
					n = n.children("a").first()
				}
				r.selectTab(n)
			}
		};
		var p = function(t, n, r) {
			var i = e.Event(n);
			t.trigger(i, r);
			return i.result !== false
		};
		var d = function() {
			i.addClass(h.containerClass);
			r.tabs.parent().addClass(h.tabsClass);
			r.tabs.addClass(h.tabClass);
			r.panels.addClass(h.panelClass)
		};
		var v = function() {
			var t = window.location.hash.match(/^[^\?]*/)[0],
				n = r.matchTab(t).parent(),
				i;
			if (n.length === 1) {
				o = n;
				h.cycle = false
			} else {
				i = r.matchInPanel(t);
				if (i.length) {
					t = "#" + i.attr("id");
					o = r.matchTab(t).parent()
				} else {
					o = r.tabs.parent().find(h.defaultTab);
					if (o.length === 0) {
						e.error("The specified default tab ('" + h.defaultTab + "') could not be found in the tab set ('" + h.tabs + "') out of " + r.tabs.length + " tabs.")
					}
				}
			}
			u = o.children("a").first();
			m(n)
		};
		var m = function(t) {
			var n, r;
			if (h.collapsible && t.length === 0 && h.collapsedByDefault) {
				o.addClass(h.collapsedClass).children().addClass(h.collapsedClass)
			} else {
				n = e(o.data("easytabs").panel);
				r = o.data("easytabs").ajax;
				if (r && (!h.cache || !o.data("easytabs").cached)) {
					i.trigger("easytabs:ajax:beforeSend", [u, n]);
					n.load(r, function(e, t, r) {
						o.data("easytabs").cached = true;
						i.trigger("easytabs:ajax:complete", [u, n, e, t, r])
					})
				}
				o.data("easytabs").panel.show().addClass(h.panelActiveClass);
				o.addClass(h.tabActiveClass).children().addClass(h.tabActiveClass)
			}
			i.trigger("easytabs:initialised", [u, n])
		};
		var g = function() {
			r.tabs.children("a").bind(h.bind_str, function(t) {
				h.cycle = false;
				l = false;
				r.selectTab(e(this));
				t.preventDefault ? t.preventDefault() : t.returnValue = false
			})
		};
		var y = function(e, t, n, s) {
			r.panels.stop(true, true);
			if (p(i, "easytabs:before", [e, t, h])) {
				var o = r.panels.filter(":visible"),
					u = t.parent(),
					c, d, v, m, g = window.location.hash.match(/^[^\?]*/)[0];
				if (h.animate) {
					c = b(t);
					d = o.length ? w(o) : 0;
					v = c - d
				}
				f = g;
				m = function() {
					i.trigger("easytabs:midTransition", [e, t, h]);
					if (h.animate && h.transitionIn == "fadeIn") {
						if (v < 0) u.animate({
							height: u.height() + v
						}, a.halfSpeed).css({
							"min-height": ""
						})
					}
					if (h.updateHash && !l) {
						window.location.hash = "#" + t.attr("id")
					} else {
						l = false
					}
					t[a.show](a.speed, h.transitionInEasing, function() {
						u.css({
							height: "",
							"min-height": ""
						});
						i.trigger("easytabs:after", [e, t, h]);
						if (typeof s == "function") {
							s()
						}
					})
				};
				if (n && (!h.cache || !e.parent().data("easytabs").cached)) {
					i.trigger("easytabs:ajax:beforeSend", [e, t]);
					t.load(n, function(n, r, s) {
						e.parent().data("easytabs").cached = true;
						i.trigger("easytabs:ajax:complete", [e, t, n, r, s])
					})
				}
				if (h.animate && h.transitionOut == "fadeOut") {
					if (v > 0) {
						u.animate({
							height: u.height() + v
						}, a.halfSpeed)
					} else {
						u.css({
							"min-height": u.height()
						})
					}
				}
				r.tabs.filter("." + h.tabActiveClass).removeClass(h.tabActiveClass).children().removeClass(h.tabActiveClass);
				r.tabs.filter("." + h.collapsedClass).removeClass(h.collapsedClass).children().removeClass(h.collapsedClass);
				e.parent().addClass(h.tabActiveClass).children().addClass(h.tabActiveClass);
				r.panels.filter("." + h.panelActiveClass).removeClass(h.panelActiveClass);
				t.addClass(h.panelActiveClass);
				if (o.length) {
					o[a.hide](a.speed, h.transitionOutEasing, m)
				} else {
					t[a.uncollapse](a.speed, h.transitionUncollapseEasing, m)
				}
			}
		};
		var b = function(t) {
			if (t.data("easytabs") && t.data("easytabs").lastHeight) {
				return t.data("easytabs").lastHeight
			}
			var n = t.css("display"),
				r, i;
			try {
				r = e("<div></div>", {
					position: "absolute",
					visibility: "hidden",
					overflow: "hidden"
				})
			} catch (s) {
				r = e("<div></div>", {
					visibility: "hidden",
					overflow: "hidden"
				})
			}
			i = t.wrap(r).css({
				position: "relative",
				visibility: "hidden",
				display: "block"
			}).outerHeight();
			t.unwrap();
			t.css({
				position: t.data("easytabs").position,
				visibility: t.data("easytabs").visibility,
				display: n
			});
			t.data("easytabs").lastHeight = i;
			return i
		};
		var w = function(e) {
			var t = e.outerHeight();
			if (e.data("easytabs")) {
				e.data("easytabs").lastHeight = t
			} else {
				e.data("easytabs", {
					lastHeight: t
				})
			}
			return t
		};
		var E = function() {
			if (typeof e(window).hashchange === "function") {
				e(window).hashchange(function() {
					r.selectTabFromHashChange()
				})
			} else if (e.address && typeof e.address.change === "function") {
				e.address.change(function() {
					r.selectTabFromHashChange()
				})
			}
		};
		var S = function() {
			var e;
			if (h.cycle) {
				e = r.tabs.index(o);
				setTimeout(function() {
					r.cycleTabs(e + 1)
				}, h.cycle)
			}
		};
		r.init()
	};
	e.fn.easytabs = function(t) {
		var n = arguments;
		return this.each(function() {
			var r = e(this),
				i = r.data("easytabs");
			if (undefined === i) {
				i = new e.easytabs(this, t);
				r.data("easytabs", i)
			}
			if (typeof i != "undefined" && i.publicMethods[t]) {
				return i.publicMethods[t](Array.prototype.slice.call(n, 1))
			}
		})
	}
})(jQuery);
(function(e, t, n) {
	"use strict";
	t.infinitescroll = function(n, r, i) {
		this.element = t(i);
		if (!this._create(n, r)) {
			this.failed = true
		}
	};
	t.infinitescroll.defaults = {
		loading: {
			finished: n,
			finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
			img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
			msg: null,
			msgText: "<em>Loading the next set of posts...</em>",
			selector: null,
			speed: "fast",
			start: n
		},
		state: {
			isDuringAjax: false,
			isInvalidPage: false,
			isDestroyed: false,
			isDone: false,
			isPaused: false,
			isBeyondMaxPage: false,
			currPage: 1
		},
		debug: false,
		behavior: n,
		binder: t(e),
		nextSelector: "div.navigation a:first",
		navSelector: "div.navigation",
		contentSelector: null,
		extraScrollPx: 150,
		itemSelector: "div.post",
		animate: false,
		pathParse: n,
		dataType: "html",
		appendCallback: true,
		bufferPx: 40,
		errorCallback: function() {},
		infid: 0,
		pixelsFromNavToBottom: n,
		path: n,
		prefill: false,
		maxPage: n
	};
	t.infinitescroll.prototype = {
		_binding: function(t) {
			var r = this,
				i = r.options;
			i.v = "2.0b2.120520";
			if (!!i.behavior && this["_binding_" + i.behavior] !== n) {
				this["_binding_" + i.behavior].call(this);
				return
			}
			if (t !== "bind" && t !== "unbind") {
				this._debug("Binding value  " + t + " not valid");
				return false
			}
			if (t === "unbind") {
				this.options.binder.unbind("smartscroll.infscr." + r.options.infid)
			} else {
				this.options.binder[t]("smartscroll.infscr." + r.options.infid, function() {
					r.scroll()
				})
			}
			this._debug("Binding", t)
		},
		_create: function(i, s) {
			var o = t.extend(true, {}, t.infinitescroll.defaults, i);
			this.options = o;
			var u = t(e);
			var a = this;
			if (!a._validate(i)) {
				return false
			}
			var f = t(o.nextSelector).attr("href");
			if (f === false) {
				this._debug("Navigation selector not found");
				return false
			}
			o.path = o.path || this._determinepath(f);
			o.contentSelector = o.contentSelector || this.element;
			o.loading.selector = o.loading.selector || o.contentSelector;
			o.loading.msg = o.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + o.loading.img + '" /><div>' + o.loading.msgText + "</div></div>");
			(new Image).src = o.loading.img;
			if (o.pixelsFromNavToBottom === n) {
				o.pixelsFromNavToBottom = t(document).height() - t(o.navSelector).offset().top;
				this._debug("pixelsFromNavToBottom: " + o.pixelsFromNavToBottom)
			}
			var l = this;
			o.loading.start = o.loading.start || function() {
				t(o.navSelector).hide();
				o.loading.msg.appendTo(o.loading.selector).fadeIn(o.loading.speed, t.proxy(function() {
					this.beginAjax(o)
				}, l))
			};
			o.loading.finished = o.loading.finished || function() {
				if (!o.state.isBeyondMaxPage) o.loading.msg.fadeOut(o.loading.speed)
			};
			o.callback = function(e, r, i) {
				if (!!o.behavior && e["_callback_" + o.behavior] !== n) {
					e["_callback_" + o.behavior].call(t(o.contentSelector)[0], r, i)
				}
				if (s) {
					s.call(t(o.contentSelector)[0], r, o, i)
				}
				if (o.prefill) {
					u.bind("resize.infinite-scroll", e._prefill)
				}
			};
			if (i.debug) {
				if (Function.prototype.bind && (typeof console === "object" || typeof console === "function") && typeof console.log === "object") {
					["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(e) {
						console[e] = this.call(console[e], console)
					}, Function.prototype.bind)
				}
			}
			this._setup();
			if (o.prefill) {
				this._prefill()
			}
			return true
		},
		_prefill: function() {
			function s() {
				return r.options.contentSelector.height() <= i.height()
			}
			var r = this;
			var i = t(e);
			this._prefill = function() {
				if (s()) {
					r.scroll()
				}
				i.bind("resize.infinite-scroll", function() {
					if (s()) {
						i.unbind("resize.infinite-scroll");
						r.scroll()
					}
				})
			};
			this._prefill()
		},
		_debug: function() {
			if (true !== this.options.debug) {
				return
			}
			if (typeof console !== "undefined" && typeof console.log === "function") {
				if (Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === "string") {
					console.log(Array.prototype.slice.call(arguments).toString())
				} else {
					console.log(Array.prototype.slice.call(arguments))
				}
			} else if (!Function.prototype.bind && typeof console !== "undefined" && typeof console.log === "object") {
				Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
			}
		},
		_determinepath: function(t) {
			var r = this.options;
			if (!!r.behavior && this["_determinepath_" + r.behavior] !== n) {
				return this["_determinepath_" + r.behavior].call(this, t)
			}
			if (!!r.pathParse) {
				this._debug("pathParse manual");
				return r.pathParse(t, this.options.state.currPage + 1)
			} else if (t.match(/^(.*?)\b2\b(.*?$)/)) {
				t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1)
			} else if (t.match(/^(.*?)2(.*?$)/)) {
				if (t.match(/^(.*?page=)2(\/.*|$)/)) {
					t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
					return t
				}
				t = t.match(/^(.*?)2(.*?$)/).slice(1)
			} else {
				if (t.match(/^(.*?page=)1(\/.*|$)/)) {
					t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
					return t
				} else {
					this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
					r.state.isInvalidPage = true
				}
			}
			this._debug("determinePath", t);
			return t
		},
		_error: function(t) {
			var r = this.options;
			if (!!r.behavior && this["_error_" + r.behavior] !== n) {
				this["_error_" + r.behavior].call(this, t);
				return
			}
			if (t !== "destroy" && t !== "end") {
				t = "unknown"
			}
			this._debug("Error", t);
			if (t === "end" || r.state.isBeyondMaxPage) {
				this._showdonemsg()
			}
			r.state.isDone = true;
			r.state.currPage = 1;
			r.state.isPaused = false;
			r.state.isBeyondMaxPage = false;
			this._binding("unbind")
		},
		_loadcallback: function(i, s, o) {
			var u = this.options,
				a = this.options.callback,
				f = u.state.isDone ? "done" : !u.appendCallback ? "no-append" : "append",
				l;
			if (!!u.behavior && this["_loadcallback_" + u.behavior] !== n) {
				this["_loadcallback_" + u.behavior].call(this, i, s);
				return
			}
			switch (f) {
				case "done":
					this._showdonemsg();
					return false;
				case "no-append":
					if (u.dataType === "html") {
						s = "<div>" + s + "</div>";
						s = t(s).find(u.itemSelector)
					}
					break;
				case "append":
					var c = i.children();
					if (c.length === 0) {
						return this._error("end")
					}
					l = document.createDocumentFragment();
					while (i[0].firstChild) {
						l.appendChild(i[0].firstChild)
					}
					this._debug("contentSelector", t(u.contentSelector)[0]);
					t(u.contentSelector)[0].appendChild(l);
					s = c.get();
					break
			}
			u.loading.finished.call(t(u.contentSelector)[0], u);
			if (u.animate) {
				var h = t(e).scrollTop() + t(u.loading.msg).height() + u.extraScrollPx + "px";
				t("html,body").animate({
					scrollTop: h
				}, 800, function() {
					u.state.isDuringAjax = false
				})
			}
			if (!u.animate) {
				u.state.isDuringAjax = false
			}
			a(this, s, o);
			if (u.prefill) {
				this._prefill()
			}
		},
		_nearbottom: function() {
			var i = this.options,
				s = 0 + t(document).height() - i.binder.scrollTop() - t(e).height();
			if (!!i.behavior && this["_nearbottom_" + i.behavior] !== n) {
				return this["_nearbottom_" + i.behavior].call(this)
			}
			this._debug("math:", s, i.pixelsFromNavToBottom);
			return s - i.bufferPx < i.pixelsFromNavToBottom
		},
		_pausing: function(t) {
			var r = this.options;
			if (!!r.behavior && this["_pausing_" + r.behavior] !== n) {
				this["_pausing_" + r.behavior].call(this, t);
				return
			}
			if (t !== "pause" && t !== "resume" && t !== null) {
				this._debug("Invalid argument. Toggling pause value instead")
			}
			t = t && (t === "pause" || t === "resume") ? t : "toggle";
			switch (t) {
				case "pause":
					r.state.isPaused = true;
					break;
				case "resume":
					r.state.isPaused = false;
					break;
				case "toggle":
					r.state.isPaused = !r.state.isPaused;
					break
			}
			this._debug("Paused", r.state.isPaused);
			return false
		},
		_setup: function() {
			var t = this.options;
			if (!!t.behavior && this["_setup_" + t.behavior] !== n) {
				this["_setup_" + t.behavior].call(this);
				return
			}
			this._binding("bind");
			return false
		},
		_showdonemsg: function() {
			var r = this.options;
			if (!!r.behavior && this["_showdonemsg_" + r.behavior] !== n) {
				this["_showdonemsg_" + r.behavior].call(this);
				return
			}
			r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({
				opacity: 1
			}, 2e3, function() {
				t(this).parent().fadeOut(r.loading.speed)
			});
			r.errorCallback.call(t(r.contentSelector)[0], "done")
		},
		_validate: function(n) {
			for (var r in n) {
				if (r.indexOf && r.indexOf("Selector") > -1 && t(n[r]).length === 0) {
					this._debug("Your " + r + " found no elements.");
					return false
				}
			}
			return true
		},
		bind: function() {
			this._binding("bind")
		},
		destroy: function() {
			this.options.state.isDestroyed = true;
			this.options.loading.finished();
			return this._error("destroy")
		},
		pause: function() {
			this._pausing("pause")
		},
		resume: function() {
			this._pausing("resume")
		},
		beginAjax: function(r) {
			var i = this,
				s = r.path,
				o, u, a, f;
			r.state.currPage++;
			if (r.maxPage != n && r.state.currPage > r.maxPage) {
				r.state.isBeyondMaxPage = true;
				this.destroy();
				return
			}
			o = t(r.contentSelector).is("table, tbody") ? t("<tbody/>") : t("<div/>");
			u = typeof s === "function" ? s(r.state.currPage) : s.join(r.state.currPage);
			i._debug("heading into ajax", u);
			a = r.dataType === "html" || r.dataType === "json" ? r.dataType : "html+callback";
			if (r.appendCallback && r.dataType === "html") {
				a += "+callback"
			}
			switch (a) {
				case "html+callback":
					i._debug("Using HTML via .load() method");
					o.load(u + " " + r.itemSelector, n, function(t) {
						i._loadcallback(o, t, u)
					});
					break;
				case "html":
					i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
					t.ajax({
						url: u,
						dataType: r.dataType,
						complete: function(t, n) {
							f = typeof t.isResolved !== "undefined" ? t.isResolved() : n === "success" || n === "notmodified";
							if (f) {
								i._loadcallback(o, t.responseText, u)
							} else {
								i._error("end")
							}
						}
					});
					break;
				case "json":
					i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
					t.ajax({
						dataType: "json",
						type: "GET",
						url: u,
						success: function(e, t, s) {
							f = typeof s.isResolved !== "undefined" ? s.isResolved() : t === "success" || t === "notmodified";
							if (r.appendCallback) {
								if (r.template !== n) {
									var a = r.template(e);
									o.append(a);
									if (f) {
										i._loadcallback(o, a)
									} else {
										i._error("end")
									}
								} else {
									i._debug("template must be defined.");
									i._error("end")
								}
							} else {
								if (f) {
									i._loadcallback(o, e, u)
								} else {
									i._error("end")
								}
							}
						},
						error: function() {
							i._debug("JSON ajax request failed.");
							i._error("end")
						}
					});
					break
			}
		},
		retrieve: function(r) {
			r = r || null;
			var i = this,
				s = i.options;
			if (!!s.behavior && this["retrieve_" + s.behavior] !== n) {
				this["retrieve_" + s.behavior].call(this, r);
				return
			}
			if (s.state.isDestroyed) {
				this._debug("Instance is destroyed");
				return false
			}
			s.state.isDuringAjax = true;
			s.loading.start.call(t(s.contentSelector)[0], s)
		},
		scroll: function() {
			var t = this.options,
				r = t.state;
			if (!!t.behavior && this["scroll_" + t.behavior] !== n) {
				this["scroll_" + t.behavior].call(this);
				return
			}
			if (r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) {
				return
			}
			if (!this._nearbottom()) {
				return
			}
			this.retrieve()
		},
		toggle: function() {
			this._pausing()
		},
		unbind: function() {
			this._binding("unbind")
		},
		update: function(n) {
			if (t.isPlainObject(n)) {
				this.options = t.extend(true, this.options, n)
			}
		}
	};
	t.fn.infinitescroll = function(n, r) {
		var i = typeof n;
		switch (i) {
			case "string":
				var s = Array.prototype.slice.call(arguments, 1);
				this.each(function() {
					var e = t.data(this, "infinitescroll");
					if (!e) {
						return false
					}
					if (!t.isFunction(e[n]) || n.charAt(0) === "_") {
						return false
					}
					e[n].apply(e, s)
				});
				break;
			case "object":
				this.each(function() {
					var e = t.data(this, "infinitescroll");
					if (e) {
						e.update(n)
					} else {
						e = new t.infinitescroll(n, r, this);
						if (!e.failed) {
							t.data(this, "infinitescroll", e)
						}
					}
				});
				break
		}
		return this
	};
	var r = t.event,
		i;
	r.special.smartscroll = {
		setup: function() {
			t(this).bind("scroll", r.special.smartscroll.handler)
		},
		teardown: function() {
			t(this).unbind("scroll", r.special.smartscroll.handler)
		},
		handler: function(e, n) {
			var r = this,
				s = arguments;
			e.type = "smartscroll";
			if (i) {
				clearTimeout(i)
			}
			i = setTimeout(function() {
				t(r).trigger("smartscroll", s)
			}, n === "execAsap" ? 0 : 100)
		}
	};
	t.fn.smartscroll = function(e) {
		return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
	}
})(window, jQuery);
(function(e) {
	function t() {}

	function n(e) {
		function n(t) {
			t.prototype.option || (t.prototype.option = function(t) {
				e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
			})
		}

		function i(t, n) {
			e.fn[t] = function(i) {
				if ("string" == typeof i) {
					for (var u = r.call(arguments, 1), a = 0, f = this.length; f > a; a++) {
						var l = this[a],
							c = e.data(l, t);
						if (c)
							if (e.isFunction(c[i]) && "_" !== i.charAt(0)) {
								var h = c[i].apply(c, u);
								if (void 0 !== h) return h
							} else s("no such method '" + i + "' for " + t + " instance");
						else s("cannot call methods on " + t + " prior to initialization; " + "attempted to call '" + i + "'")
					}
					return this
				}
				return this.each(function() {
					var r = e.data(this, t);
					r ? (r.option(i), r._init()) : (r = new n(this, i), e.data(this, t, r))
				})
			}
		}
		if (e) {
			var s = "undefined" == typeof console ? t : function(e) {
				console.error(e)
			};
			return e.bridget = function(e, t) {
				n(t), i(e, t)
			}, e.bridget
		}
	}
	var r = Array.prototype.slice;
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n(e.jQuery)
})(window),
function(e) {
	function t(t) {
		var n = e.event;
		return n.target = n.target || n.srcElement || t, n
	}
	var n = document.documentElement,
		r = function() {};
	n.addEventListener ? r = function(e, t, n) {
		e.addEventListener(t, n, !1)
	} : n.attachEvent && (r = function(e, n, r) {
		e[n + r] = r.handleEvent ? function() {
			var n = t(e);
			r.handleEvent.call(r, n)
		} : function() {
			var n = t(e);
			r.call(e, n)
		}, e.attachEvent("on" + n, e[n + r])
	});
	var i = function() {};
	n.removeEventListener ? i = function(e, t, n) {
		e.removeEventListener(t, n, !1)
	} : n.detachEvent && (i = function(e, t, n) {
		e.detachEvent("on" + t, e[t + n]);
		try {
			delete e[t + n]
		} catch (r) {
			e[t + n] = void 0
		}
	});
	var s = {
		bind: r,
		unbind: i
	};
	"function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : e.eventie = s
}(this),
function(e) {
	function t(e) {
		"function" == typeof e && (t.isReady ? e() : s.push(e))
	}

	function n(e) {
		var n = "readystatechange" === e.type && "complete" !== i.readyState;
		if (!t.isReady && !n) {
			t.isReady = !0;
			for (var r = 0, o = s.length; o > r; r++) {
				var u = s[r];
				u()
			}
		}
	}

	function r(r) {
		return r.bind(i, "DOMContentLoaded", n), r.bind(i, "readystatechange", n), r.bind(e, "load", n), t
	}
	var i = e.document,
		s = [];
	t.isReady = !1, "function" == typeof define && define.amd ? (t.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], r)) : e.docReady = r(e.eventie)
}(this),
function() {
	function e() {}

	function t(e, t) {
		for (var n = e.length; n--;)
			if (e[n].listener === t) return n;
		return -1
	}

	function n(e) {
		return function() {
			return this[e].apply(this, arguments)
		}
	}
	var r = e.prototype,
		i = this,
		s = i.EventEmitter;
	r.getListeners = function(e) {
		var t, n, r = this._getEvents();
		if (e instanceof RegExp) {
			t = {};
			for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
		} else t = r[e] || (r[e] = []);
		return t
	}, r.flattenListeners = function(e) {
		var t, n = [];
		for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
		return n
	}, r.getListenersAsObject = function(e) {
		var t, n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n), t || n
	}, r.addListener = function(e, n) {
		var r, i = this.getListenersAsObject(e),
			s = "object" == typeof n;
		for (r in i) i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(s ? n : {
			listener: n,
			once: !1
		});
		return this
	}, r.on = n("addListener"), r.addOnceListener = function(e, t) {
		return this.addListener(e, {
			listener: t,
			once: !0
		})
	}, r.once = n("addOnceListener"), r.defineEvent = function(e) {
		return this.getListeners(e), this
	}, r.defineEvents = function(e) {
		for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
		return this
	}, r.removeListener = function(e, n) {
		var r, i, s = this.getListenersAsObject(e);
		for (i in s) s.hasOwnProperty(i) && (r = t(s[i], n), -1 !== r && s[i].splice(r, 1));
		return this
	}, r.off = n("removeListener"), r.addListeners = function(e, t) {
		return this.manipulateListeners(!1, e, t)
	}, r.removeListeners = function(e, t) {
		return this.manipulateListeners(!0, e, t)
	}, r.manipulateListeners = function(e, t, n) {
		var r, i, s = e ? this.removeListener : this.addListener,
			o = e ? this.removeListeners : this.addListeners;
		if ("object" != typeof t || t instanceof RegExp)
			for (r = n.length; r--;) s.call(this, t, n[r]);
		else
			for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
		return this
	}, r.removeEvent = function(e) {
		var t, n = typeof e,
			r = this._getEvents();
		if ("string" === n) delete r[e];
		else if (e instanceof RegExp)
			for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
		else delete this._events;
		return this
	}, r.removeAllListeners = n("removeEvent"), r.emitEvent = function(e, t) {
		var n, r, i, s, o = this.getListenersAsObject(e);
		for (i in o)
			if (o.hasOwnProperty(i))
				for (r = o[i].length; r--;) n = o[i][r], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
		return this
	}, r.trigger = n("emitEvent"), r.emit = function(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	}, r.setOnceReturnValue = function(e) {
		return this._onceReturnValue = e, this
	}, r._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, r._getEvents = function() {
		return this._events || (this._events = {})
	}, e.noConflict = function() {
		return i.EventEmitter = s, e
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
		return e
	}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}.call(this),
	function(e) {
		function t(e) {
			if (e) {
				if ("string" == typeof r[e]) return e;
				e = e.charAt(0).toUpperCase() + e.slice(1);
				for (var t, s = 0, u = n.length; u > s; s++)
					if (t = n[s] + e, "string" == typeof r[t]) return t
			}
		}
		var n = "Webkit Moz ms Ms O".split(" "),
			r = document.documentElement.style;
		"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
			return t
		}) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
	}(window),
	function(e) {
		function t(e) {
			var t = parseFloat(e),
				n = -1 === e.indexOf("%") && !isNaN(t);
			return n && t
		}

		function n() {
			for (var e = {
					width: 0,
					height: 0,
					innerWidth: 0,
					innerHeight: 0,
					outerWidth: 0,
					outerHeight: 0
				}, t = 0, n = o.length; n > t; t++) {
				var r = o[t];
				e[r] = 0
			}
			return e
		}

		function r(e) {
			function r(e) {
				if ("string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
					var r = s(e);
					if ("none" === r.display) return n();
					var i = {};
					i.width = e.offsetWidth, i.height = e.offsetHeight;
					for (var l = i.isBorderBox = !(!f || !r[f] || "border-box" !== r[f]), c = 0, h = o.length; h > c; c++) {
						var d = o[c],
							v = r[d];
						v = u(e, v);
						var m = parseFloat(v);
						i[d] = isNaN(m) ? 0 : m
					}
					var g = i.paddingLeft + i.paddingRight,
						y = i.paddingTop + i.paddingBottom,
						b = i.marginLeft + i.marginRight,
						w = i.marginTop + i.marginBottom,
						E = i.borderLeftWidth + i.borderRightWidth,
						S = i.borderTopWidth + i.borderBottomWidth,
						x = l && a,
						T = t(r.width);
					T !== !1 && (i.width = T + (x ? 0 : g + E));
					var N = t(r.height);
					return N !== !1 && (i.height = N + (x ? 0 : y + S)), i.innerWidth = i.width - (g + E), i.innerHeight = i.height - (y + S), i.outerWidth = i.width + b, i.outerHeight = i.height + w, i
				}
			}

			function u(e, t) {
				if (i || -1 === t.indexOf("%")) return t;
				var n = e.style,
					r = n.left,
					s = e.runtimeStyle,
					o = s && s.left;
				return o && (s.left = e.currentStyle.left), n.left = t, t = n.pixelLeft, n.left = r, o && (s.left = o), t
			}
			var a, f = e("boxSizing");
			return function() {
				if (f) {
					var e = document.createElement("div");
					e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[f] = "border-box";
					var n = document.body || document.documentElement;
					n.appendChild(e);
					var r = s(e);
					a = 200 === t(r.width), n.removeChild(e)
				}
			}(), r
		}
		var i = e.getComputedStyle,
			s = i ? function(e) {
				return i(e, null)
			} : function(e) {
				return e.currentStyle
			},
			o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("get-style-property")) : e.getSize = r(e.getStyleProperty)
	}(window),
	function(e, t) {
		function n(e, t) {
			return e[u](t)
		}

		function r(e) {
			if (!e.parentNode) {
				var t = document.createDocumentFragment();
				t.appendChild(e)
			}
		}

		function i(e, t) {
			r(e);
			for (var n = e.parentNode.querySelectorAll(t), i = 0, s = n.length; s > i; i++)
				if (n[i] === e) return !0;
			return !1
		}

		function s(e, t) {
			return r(e), n(e, t)
		}
		var o, u = function() {
			if (t.matchesSelector) return "matchesSelector";
			for (var e = ["webkit", "moz", "ms", "o"], n = 0, r = e.length; r > n; n++) {
				var i = e[n],
					s = i + "MatchesSelector";
				if (t[s]) return s
			}
		}();
		if (u) {
			var a = document.createElement("div"),
				f = n(a, "div");
			o = f ? n : s
		} else o = i;
		"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
			return o
		}) : window.matchesSelector = o
	}(this, Element.prototype),
	function(e) {
		function t(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function n(e) {
			for (var t in e) return !1;
			return t = null, !0
		}

		function r(e) {
			return e.replace(/([A-Z])/g, function(e) {
				return "-" + e.toLowerCase()
			})
		}

		function i(e, i, s) {
			function u(e, t) {
				e && (this.element = e, this.layout = t, this.position = {
					x: 0,
					y: 0
				}, this._create())
			}
			var a = s("transition"),
				f = s("transform"),
				l = a && f,
				c = !!s("perspective"),
				h = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "otransitionend",
					transition: "transitionend"
				}[a],
				p = ["transform", "transition", "transitionDuration", "transitionProperty"],
				d = function() {
					for (var e = {}, t = 0, n = p.length; n > t; t++) {
						var r = p[t],
							i = s(r);
						i && i !== r && (e[r] = i)
					}
					return e
				}();
			t(u.prototype, e.prototype), u.prototype._create = function() {
				this._transn = {
					ingProperties: {},
					clean: {},
					onEnd: {}
				}, this.css({
					position: "absolute"
				})
			}, u.prototype.handleEvent = function(e) {
				var t = "on" + e.type;
				this[t] && this[t](e)
			}, u.prototype.getSize = function() {
				this.size = i(this.element)
			}, u.prototype.css = function(e) {
				var t = this.element.style;
				for (var n in e) {
					var r = d[n] || n;
					t[r] = e[n]
				}
			}, u.prototype.getPosition = function() {
				var e = o(this.element),
					t = this.layout.options,
					n = t.isOriginLeft,
					r = t.isOriginTop,
					i = parseInt(e[n ? "left" : "right"], 10),
					s = parseInt(e[r ? "top" : "bottom"], 10);
				i = isNaN(i) ? 0 : i, s = isNaN(s) ? 0 : s;
				var u = this.layout.size;
				i -= n ? u.paddingLeft : u.paddingRight, s -= r ? u.paddingTop : u.paddingBottom, this.position.x = i, this.position.y = s
			}, u.prototype.layoutPosition = function() {
				var e = this.layout.size,
					t = this.layout.options,
					n = {};
				t.isOriginLeft ? (n.left = this.position.x + e.paddingLeft + "px", n.right = "") : (n.right = this.position.x + e.paddingRight + "px", n.left = ""), t.isOriginTop ? (n.top = this.position.y + e.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + e.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
			};
			var v = c ? function(e, t) {
				return "translate3d(" + e + "px, " + t + "px, 0)"
			} : function(e, t) {
				return "translate(" + e + "px, " + t + "px)"
			};
			u.prototype._transitionTo = function(e, t) {
				this.getPosition();
				var n = this.position.x,
					r = this.position.y,
					i = parseInt(e, 10),
					s = parseInt(t, 10),
					o = i === this.position.x && s === this.position.y;
				if (this.setPosition(e, t), o && !this.isTransitioning) return this.layoutPosition(), void 0;
				var u = e - n,
					a = t - r,
					f = {},
					l = this.layout.options;
				u = l.isOriginLeft ? u : -u, a = l.isOriginTop ? a : -a, f.transform = v(u, a), this.transition({
					to: f,
					onTransitionEnd: {
						transform: this.layoutPosition
					},
					isCleaning: !0
				})
			}, u.prototype.goTo = function(e, t) {
				this.setPosition(e, t), this.layoutPosition()
			}, u.prototype.moveTo = l ? u.prototype._transitionTo : u.prototype.goTo, u.prototype.setPosition = function(e, t) {
				this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
			}, u.prototype._nonTransition = function(e) {
				this.css(e.to), e.isCleaning && this._removeStyles(e.to);
				for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
			}, u.prototype._transition = function(e) {
				if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(e), void 0;
				var t = this._transn;
				for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
				for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
				if (e.from) {
					this.css(e.from);
					var r = this.element.offsetHeight;
					r = null
				}
				this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
			};
			var m = f && r(f) + ",opacity";
			u.prototype.enableTransition = function() {
				this.isTransitioning || (this.css({
					transitionProperty: m,
					transitionDuration: this.layout.options.transitionDuration
				}), this.element.addEventListener(h, this, !1))
			}, u.prototype.transition = u.prototype[a ? "_transition" : "_nonTransition"], u.prototype.onwebkitTransitionEnd = function(e) {
				this.ontransitionend(e)
			}, u.prototype.onotransitionend = function(e) {
				this.ontransitionend(e)
			};
			var g = {
				"-webkit-transform": "transform",
				"-moz-transform": "transform",
				"-o-transform": "transform"
			};
			u.prototype.ontransitionend = function(e) {
				if (e.target === this.element) {
					var t = this._transn,
						r = g[e.propertyName] || e.propertyName;
					if (delete t.ingProperties[r], n(t.ingProperties) && this.disableTransition(), r in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[r]), r in t.onEnd) {
						var i = t.onEnd[r];
						i.call(this), delete t.onEnd[r]
					}
					this.emitEvent("transitionEnd", [this])
				}
			}, u.prototype.disableTransition = function() {
				this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
			}, u.prototype._removeStyles = function(e) {
				var t = {};
				for (var n in e) t[n] = "";
				this.css(t)
			};
			var y = {
				transitionProperty: "",
				transitionDuration: ""
			};
			return u.prototype.removeTransitionStyles = function() {
				this.css(y)
			}, u.prototype.removeElem = function() {
				this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
			}, u.prototype.remove = function() {
				if (!a || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
				var e = this;
				this.on("transitionEnd", function() {
					return e.removeElem(), !0
				}), this.hide()
			}, u.prototype.reveal = function() {
				delete this.isHidden, this.css({
					display: ""
				});
				var e = this.layout.options;
				this.transition({
					from: e.hiddenStyle,
					to: e.visibleStyle,
					isCleaning: !0
				})
			}, u.prototype.hide = function() {
				this.isHidden = !0, this.css({
					display: ""
				});
				var e = this.layout.options;
				this.transition({
					from: e.visibleStyle,
					to: e.hiddenStyle,
					isCleaning: !0,
					onTransitionEnd: {
						opacity: function() {
							this.isHidden && this.css({
								display: "none"
							})
						}
					}
				})
			}, u.prototype.destroy = function() {
				this.css({
					position: "",
					left: "",
					right: "",
					top: "",
					bottom: "",
					transition: "",
					transform: ""
				})
			}, u
		}
		var s = e.getComputedStyle,
			o = s ? function(e) {
				return s(e, null)
			} : function(e) {
				return e.currentStyle
			};
		"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], i) : (e.Outlayer = {}, e.Outlayer.Item = i(e.EventEmitter, e.getSize, e.getStyleProperty))
	}(window),
	function(e) {
		function t(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function n(e) {
			return "[object Array]" === c.call(e)
		}

		function r(e) {
			var t = [];
			if (n(e)) t = e;
			else if (e && "number" == typeof e.length)
				for (var r = 0, i = e.length; i > r; r++) t.push(e[r]);
			else t.push(e);
			return t
		}

		function i(e, t) {
			var n = p(t, e); - 1 !== n && t.splice(n, 1)
		}

		function s(e) {
			return e.replace(/(.)([A-Z])/g, function(e, t, n) {
				return t + "-" + n
			}).toLowerCase()
		}

		function o(n, o, c, p, v, m) {
			function g(e, n) {
				if ("string" == typeof e && (e = u.querySelector(e)), !e || !h(e)) return a && a.error("Bad " + this.constructor.namespace + " element: " + e), void 0;
				this.element = e, this.options = t({}, this.constructor.defaults), this.option(n);
				var r = ++y;
				this.element.outlayerGUID = r, b[r] = this, this._create(), this.options.isInitLayout && this.layout()
			}
			var y = 0,
				b = {};
			return g.namespace = "outlayer", g.Item = m, g.defaults = {
				containerStyle: {
					position: "relative"
				},
				isInitLayout: !0,
				isOriginLeft: !0,
				isOriginTop: !0,
				isResizeBound: !0,
				isResizingContainer: !0,
				transitionDuration: "0.4s",
				hiddenStyle: {
					opacity: 0,
					transform: "scale(0.001)"
				},
				visibleStyle: {
					opacity: 1,
					transform: "scale(1)"
				}
			}, t(g.prototype, c.prototype), g.prototype.option = function(e) {
				t(this.options, e)
			}, g.prototype._create = function() {
				this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
			}, g.prototype.reloadItems = function() {
				this.items = this._itemize(this.element.children)
			}, g.prototype._itemize = function(e) {
				for (var t = this._filterFindItemElements(e), n = this.constructor.Item, r = [], i = 0, s = t.length; s > i; i++) {
					var o = t[i],
						u = new n(o, this);
					r.push(u)
				}
				return r
			}, g.prototype._filterFindItemElements = function(e) {
				e = r(e);
				for (var t = this.options.itemSelector, n = [], i = 0, s = e.length; s > i; i++) {
					var o = e[i];
					if (h(o))
						if (t) {
							v(o, t) && n.push(o);
							for (var u = o.querySelectorAll(t), a = 0, f = u.length; f > a; a++) n.push(u[a])
						} else n.push(o)
				}
				return n
			}, g.prototype.getItemElements = function() {
				for (var e = [], t = 0, n = this.items.length; n > t; t++) e.push(this.items[t].element);
				return e
			}, g.prototype.layout = function() {
				this._resetLayout(), this._manageStamps();
				var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
				this.layoutItems(this.items, e), this._isLayoutInited = !0
			}, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
				this.getSize()
			}, g.prototype.getSize = function() {
				this.size = p(this.element)
			}, g.prototype._getMeasurement = function(e, t) {
				var n, r = this.options[e];
				r ? ("string" == typeof r ? n = this.element.querySelector(r) : h(r) && (n = r), this[e] = n ? p(n)[t] : r) : this[e] = 0
			}, g.prototype.layoutItems = function(e, t) {
				e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
			}, g.prototype._getItemsForLayout = function(e) {
				for (var t = [], n = 0, r = e.length; r > n; n++) {
					var i = e[n];
					i.isIgnored || t.push(i)
				}
				return t
			}, g.prototype._layoutItems = function(e, t) {
				function n() {
					r.emitEvent("layoutComplete", [r, e])
				}
				var r = this;
				if (!e || !e.length) return n(), void 0;
				this._itemsOn(e, "layout", n);
				for (var i = [], s = 0, o = e.length; o > s; s++) {
					var u = e[s],
						a = this._getItemLayoutPosition(u);
					a.item = u, a.isInstant = t || u.isLayoutInstant, i.push(a)
				}
				this._processLayoutQueue(i)
			}, g.prototype._getItemLayoutPosition = function() {
				return {
					x: 0,
					y: 0
				}
			}, g.prototype._processLayoutQueue = function(e) {
				for (var t = 0, n = e.length; n > t; t++) {
					var r = e[t];
					this._positionItem(r.item, r.x, r.y, r.isInstant)
				}
			}, g.prototype._positionItem = function(e, t, n, r) {
				r ? e.goTo(t, n) : e.moveTo(t, n)
			}, g.prototype._postLayout = function() {
				this.resizeContainer()
			}, g.prototype.resizeContainer = function() {
				if (this.options.isResizingContainer) {
					var e = this._getContainerSize();
					e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
				}
			}, g.prototype._getContainerSize = l, g.prototype._setContainerMeasure = function(e, t) {
				if (void 0 !== e) {
					var n = this.size;
					n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
				}
			}, g.prototype._itemsOn = function(e, t, n) {
				function r() {
					return i++, i === s && n.call(o), !0
				}
				for (var i = 0, s = e.length, o = this, u = 0, a = e.length; a > u; u++) {
					var f = e[u];
					f.on(t, r)
				}
			}, g.prototype.ignore = function(e) {
				var t = this.getItem(e);
				t && (t.isIgnored = !0)
			}, g.prototype.unignore = function(e) {
				var t = this.getItem(e);
				t && delete t.isIgnored
			}, g.prototype.stamp = function(e) {
				if (e = this._find(e)) {
					this.stamps = this.stamps.concat(e);
					for (var t = 0, n = e.length; n > t; t++) {
						var r = e[t];
						this.ignore(r)
					}
				}
			}, g.prototype.unstamp = function(e) {
				if (e = this._find(e))
					for (var t = 0, n = e.length; n > t; t++) {
						var r = e[t];
						i(r, this.stamps), this.unignore(r)
					}
			}, g.prototype._find = function(e) {
				return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = r(e)) : void 0
			}, g.prototype._manageStamps = function() {
				if (this.stamps && this.stamps.length) {
					this._getBoundingRect();
					for (var e = 0, t = this.stamps.length; t > e; e++) {
						var n = this.stamps[e];
						this._manageStamp(n)
					}
				}
			}, g.prototype._getBoundingRect = function() {
				var e = this.element.getBoundingClientRect(),
					t = this.size;
				this._boundingRect = {
					left: e.left + t.paddingLeft + t.borderLeftWidth,
					top: e.top + t.paddingTop + t.borderTopWidth,
					right: e.right - (t.paddingRight + t.borderRightWidth),
					bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
				}
			}, g.prototype._manageStamp = l, g.prototype._getElementOffset = function(e) {
				var t = e.getBoundingClientRect(),
					n = this._boundingRect,
					r = p(e),
					i = {
						left: t.left - n.left - r.marginLeft,
						top: t.top - n.top - r.marginTop,
						right: n.right - t.right - r.marginRight,
						bottom: n.bottom - t.bottom - r.marginBottom
					};
				return i
			}, g.prototype.handleEvent = function(e) {
				var t = "on" + e.type;
				this[t] && this[t](e)
			}, g.prototype.bindResize = function() {
				this.isResizeBound || (n.bind(e, "resize", this), this.isResizeBound = !0)
			}, g.prototype.unbindResize = function() {
				this.isResizeBound && n.unbind(e, "resize", this), this.isResizeBound = !1
			}, g.prototype.onresize = function() {
				function e() {
					t.resize(), delete t.resizeTimeout
				}
				this.resizeTimeout && clearTimeout(this.resizeTimeout);
				var t = this;
				this.resizeTimeout = setTimeout(e, 100)
			}, g.prototype.resize = function() {
				this.isResizeBound && this.needsResizeLayout() && this.layout()
			}, g.prototype.needsResizeLayout = function() {
				var e = p(this.element),
					t = this.size && e;
				return t && e.innerWidth !== this.size.innerWidth
			}, g.prototype.addItems = function(e) {
				var t = this._itemize(e);
				return t.length && (this.items = this.items.concat(t)), t
			}, g.prototype.appended = function(e) {
				var t = this.addItems(e);
				t.length && (this.layoutItems(t, !0), this.reveal(t))
			}, g.prototype.prepended = function(e) {
				var t = this._itemize(e);
				if (t.length) {
					var n = this.items.slice(0);
					this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
				}
			}, g.prototype.reveal = function(e) {
				var t = e && e.length;
				if (t)
					for (var n = 0; t > n; n++) {
						var r = e[n];
						r.reveal()
					}
			}, g.prototype.hide = function(e) {
				var t = e && e.length;
				if (t)
					for (var n = 0; t > n; n++) {
						var r = e[n];
						r.hide()
					}
			}, g.prototype.getItem = function(e) {
				for (var t = 0, n = this.items.length; n > t; t++) {
					var r = this.items[t];
					if (r.element === e) return r
				}
			}, g.prototype.getItems = function(e) {
				if (e && e.length) {
					for (var t = [], n = 0, r = e.length; r > n; n++) {
						var i = e[n],
							s = this.getItem(i);
						s && t.push(s)
					}
					return t
				}
			}, g.prototype.remove = function(e) {
				e = r(e);
				var t = this.getItems(e);
				if (t && t.length) {
					this._itemsOn(t, "remove", function() {
						this.emitEvent("removeComplete", [this, t])
					});
					for (var n = 0, s = t.length; s > n; n++) {
						var o = t[n];
						o.remove(), i(o, this.items)
					}
				}
			}, g.prototype.destroy = function() {
				var e = this.element.style;
				e.height = "", e.position = "", e.width = "";
				for (var t = 0, n = this.items.length; n > t; t++) {
					var r = this.items[t];
					r.destroy()
				}
				this.unbindResize(), delete this.element.outlayerGUID, f && f.removeData(this.element, this.constructor.namespace)
			}, g.data = function(e) {
				var t = e && e.outlayerGUID;
				return t && b[t]
			}, g.create = function(e, n) {
				function r() {
					g.apply(this, arguments)
				}
				return Object.create ? r.prototype = Object.create(g.prototype) : t(r.prototype, g.prototype), r.prototype.constructor = r, r.defaults = t({}, g.defaults), t(r.defaults, n), r.prototype.settings = {}, r.namespace = e, r.data = g.data, r.Item = function() {
					m.apply(this, arguments)
				}, r.Item.prototype = new m, o(function() {
					for (var t = s(e), n = u.querySelectorAll(".js-" + t), i = "data-" + t + "-options", o = 0, l = n.length; l > o; o++) {
						var c, h = n[o],
							p = h.getAttribute(i);
						try {
							c = p && JSON.parse(p)
						} catch (d) {
							a && a.error("Error parsing " + i + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + d);
							continue
						}
						var v = new r(h, c);
						f && f.data(h, e, v)
					}
				}), f && f.bridget && f.bridget(e, r), r
			}, g.Item = m, g
		}
		var u = e.document,
			a = e.console,
			f = e.jQuery,
			l = function() {},
			c = Object.prototype.toString,
			h = "object" == typeof HTMLElement ? function(e) {
				return e instanceof HTMLElement
			} : function(e) {
				return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
			},
			p = Array.prototype.indexOf ? function(e, t) {
				return e.indexOf(t)
			} : function(e, t) {
				for (var n = 0, r = e.length; r > n; n++)
					if (e[n] === t) return n;
				return -1
			};
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], o) : e.Outlayer = o(e.eventie, e.docReady, e.EventEmitter, e.getSize, e.matchesSelector, e.Outlayer.Item)
	}(window),
	function(e) {
		function t(e) {
			function t() {
				e.Item.apply(this, arguments)
			}
			t.prototype = new e.Item, t.prototype._create = function() {
				this.id = this.layout.itemGUID++, e.Item.prototype._create.call(this), this.sortData = {}
			}, t.prototype.updateSortData = function() {
				if (!this.isIgnored) {
					this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
					var e = this.layout.options.getSortData,
						t = this.layout._sorters;
					for (var n in e) {
						var r = t[n];
						this.sortData[n] = r(this.element, this)
					}
				}
			};
			var n = t.prototype.destroy;
			return t.prototype.destroy = function() {
				n.apply(this, arguments), this.css({
					display: ""
				})
			}, t
		}
		"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
	}(window),
	function(e) {
		function t(e, t) {
			function n(e) {
				this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
			}
			return function() {
				function e(e) {
					return function() {
						return t.prototype[e].apply(this.isotope, arguments)
					}
				}
				for (var r = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], s = 0, o = r.length; o > s; s++) {
					var u = r[s];
					n.prototype[u] = e(u)
				}
			}(), n.prototype.needsVerticalResizeLayout = function() {
				var t = e(this.isotope.element),
					n = this.isotope.size && t;
				return n && t.innerHeight !== this.isotope.size.innerHeight
			}, n.prototype._getMeasurement = function() {
				this.isotope._getMeasurement.apply(this, arguments)
			}, n.prototype.getColumnWidth = function() {
				this.getSegmentSize("column", "Width")
			}, n.prototype.getRowHeight = function() {
				this.getSegmentSize("row", "Height")
			}, n.prototype.getSegmentSize = function(e, t) {
				var n = e + t,
					r = "outer" + t;
				if (this._getMeasurement(n, r), !this[n]) {
					var i = this.getFirstItemSize();
					this[n] = i && i[r] || this.isotope.size["inner" + t]
				}
			}, n.prototype.getFirstItemSize = function() {
				var t = this.isotope.filteredItems[0];
				return t && t.element && e(t.element)
			}, n.prototype.layout = function() {
				this.isotope.layout.apply(this.isotope, arguments)
			}, n.prototype.getSize = function() {
				this.isotope.getSize(), this.size = this.isotope.size
			}, n.modes = {}, n.create = function(e, t) {
				function r() {
					n.apply(this, arguments)
				}
				return r.prototype = new n, t && (r.options = t), r.prototype.namespace = e, n.modes[e] = r, r
			}, n
		}
		"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
	}(window),
	function(e) {
		function t(e, t) {
			var r = e.create("masonry");
			return r.prototype._resetLayout = function() {
				this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
				var e = this.cols;
				for (this.colYs = []; e--;) this.colYs.push(0);
				this.maxY = 0
			}, r.prototype.measureColumns = function() {
				if (this.getContainerWidth(), !this.columnWidth) {
					var e = this.items[0],
						n = e && e.element;
					this.columnWidth = n && t(n).outerWidth || this.containerWidth
				}
				this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
			}, r.prototype.getContainerWidth = function() {
				var e = this.options.isFitWidth ? this.element.parentNode : this.element,
					n = t(e);
				this.containerWidth = n && n.innerWidth
			}, r.prototype._getItemLayoutPosition = function(e) {
				e.getSize();
				var t = e.size.outerWidth % this.columnWidth,
					r = t && 1 > t ? "round" : "ceil",
					s = Math[r](e.size.outerWidth / this.columnWidth);
				s = Math.min(s, this.cols);
				for (var o = this._getColGroup(s), u = Math.min.apply(Math, o), a = n(o, u), f = {
						x: this.columnWidth * a,
						y: u
					}, l = u + e.size.outerHeight, c = this.cols + 1 - o.length, h = 0; c > h; h++) this.colYs[a + h] = l;
				return f
			}, r.prototype._getColGroup = function(e) {
				if (2 > e) return this.colYs;
				for (var t = [], n = this.cols + 1 - e, r = 0; n > r; r++) {
					var i = this.colYs.slice(r, r + e);
					t[r] = Math.max.apply(Math, i)
				}
				return t
			}, r.prototype._manageStamp = function(e) {
				var n = t(e),
					r = this._getElementOffset(e),
					i = this.options.isOriginLeft ? r.left : r.right,
					s = i + n.outerWidth,
					o = Math.floor(i / this.columnWidth);
				o = Math.max(0, o);
				var u = Math.floor(s / this.columnWidth);
				u -= s % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
				for (var a = (this.options.isOriginTop ? r.top : r.bottom) + n.outerHeight, f = o; u >= f; f++) this.colYs[f] = Math.max(a, this.colYs[f])
			}, r.prototype._getContainerSize = function() {
				this.maxY = Math.max.apply(Math, this.colYs);
				var e = {
					height: this.maxY
				};
				return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
			}, r.prototype._getContainerFitWidth = function() {
				for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
				return (this.cols - e) * this.columnWidth - this.gutter
			}, r.prototype.needsResizeLayout = function() {
				var e = this.containerWidth;
				return this.getContainerWidth(), e !== this.containerWidth
			}, r
		}
		var n = Array.prototype.indexOf ? function(e, t) {
			return e.indexOf(t)
		} : function(e, t) {
			for (var n = 0, r = e.length; r > n; n++) {
				var i = e[n];
				if (i === t) return n
			}
			return -1
		};
		"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : e.Masonry = t(e.Outlayer, e.getSize)
	}(window),
	function(e) {
		function t(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function n(e, n) {
			var r = e.create("masonry"),
				i = r.prototype._getElementOffset,
				s = r.prototype.layout,
				o = r.prototype._getMeasurement;
			t(r.prototype, n.prototype), r.prototype._getElementOffset = i, r.prototype.layout = s, r.prototype._getMeasurement = o;
			var u = r.prototype.measureColumns;
			r.prototype.measureColumns = function() {
				this.items = this.isotope.filteredItems, u.call(this)
			};
			var a = r.prototype._manageStamp;
			return r.prototype._manageStamp = function() {
				this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, a.apply(this, arguments)
			}, r
		}
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], n) : n(e.Isotope.LayoutMode, e.Masonry)
	}(window),
	function(e) {
		function t(e) {
			var t = e.create("fitRows");
			return t.prototype._resetLayout = function() {
				this.x = 0, this.y = 0, this.maxY = 0
			}, t.prototype._getItemLayoutPosition = function(e) {
				e.getSize(), 0 !== this.x && e.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
				var t = {
					x: this.x,
					y: this.y
				};
				return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += e.size.outerWidth, t
			}, t.prototype._getContainerSize = function() {
				return {
					height: this.maxY
				}
			}, t
		}
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : t(e.Isotope.LayoutMode)
	}(window),
	function(e) {
		function t(e) {
			var t = e.create("vertical", {
				horizontalAlignment: 0
			});
			return t.prototype._resetLayout = function() {
				this.y = 0
			}, t.prototype._getItemLayoutPosition = function(e) {
				e.getSize();
				var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
					n = this.y;
				return this.y += e.size.outerHeight, {
					x: t,
					y: n
				}
			}, t.prototype._getContainerSize = function() {
				return {
					height: this.y
				}
			}, t
		}
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : t(e.Isotope.LayoutMode)
	}(window),
	function(e) {
		function t(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function n(e) {
			return "[object Array]" === l.call(e)
		}

		function r(e) {
			var t = [];
			if (n(e)) t = e;
			else if (e && "number" == typeof e.length)
				for (var r = 0, i = e.length; i > r; r++) t.push(e[r]);
			else t.push(e);
			return t
		}

		function i(e, t) {
			var n = c(t, e); - 1 !== n && t.splice(n, 1)
		}

		function s(e, n, s, a, l) {
			function c(e, t) {
				return function(n, r) {
					for (var i = 0, s = e.length; s > i; i++) {
						var o = e[i],
							u = n.sortData[o],
							a = r.sortData[o];
						if (u > a || a > u) {
							var f = void 0 !== t[o] ? t[o] : t,
								l = f ? 1 : -1;
							return (u > a ? 1 : -1) * l
						}
					}
					return 0
				}
			}
			var h = e.create("isotope", {
				layoutMode: "masonry",
				isJQueryFiltering: !0,
				sortAscending: !0
			});
			h.Item = a, h.LayoutMode = l, h.prototype._create = function() {
				this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
				for (var t in l.modes) this._initLayoutMode(t)
			}, h.prototype.reloadItems = function() {
				this.itemGUID = 0, e.prototype.reloadItems.call(this)
			}, h.prototype._itemize = function() {
				for (var t = e.prototype._itemize.apply(this, arguments), n = 0, r = t.length; r > n; n++) {
					var i = t[n];
					i.id = this.itemGUID++
				}
				return this._updateItemsSortData(t), t
			}, h.prototype._initLayoutMode = function(e) {
				var n = l.modes[e],
					r = this.options[e] || {};
				this.options[e] = n.options ? t(n.options, r) : r, this.modes[e] = new n(this)
			}, h.prototype.layout = function() {
				return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
			}, h.prototype._layout = function() {
				var e = this._getIsInstant();
				this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
			}, h.prototype.arrange = function(e) {
				this.option(e), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
			}, h.prototype._init = h.prototype.arrange, h.prototype._getIsInstant = function() {
				var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
				return this._isInstant = e, e
			}, h.prototype._filter = function(e) {
				function t() {
					c.reveal(i), c.hide(s)
				}
				var n = this.options.filter;
				n = n || "*";
				for (var r = [], i = [], s = [], o = this._getFilterTest(n), u = 0, a = e.length; a > u; u++) {
					var f = e[u];
					if (!f.isIgnored) {
						var l = o(f);
						l && r.push(f), l && f.isHidden ? i.push(f) : l || f.isHidden || s.push(f)
					}
				}
				var c = this;
				return this._isInstant ? this._noTransition(t) : t(), r
			}, h.prototype._getFilterTest = function(e) {
				return o && this.options.isJQueryFiltering ? function(t) {
					return o(t.element).is(e)
				} : "function" == typeof e ? function(t) {
					return e(t.element)
				} : function(t) {
					return s(t.element, e)
				}
			}, h.prototype.updateSortData = function(e) {
				this._getSorters(), e = r(e);
				var t = this.getItems(e);
				t = t.length ? t : this.items, this._updateItemsSortData(t)
			}, h.prototype._getSorters = function() {
				var e = this.options.getSortData;
				for (var t in e) {
					var n = e[t];
					this._sorters[t] = d(n)
				}
			}, h.prototype._updateItemsSortData = function(e) {
				for (var t = 0, n = e.length; n > t; t++) {
					var r = e[t];
					r.updateSortData()
				}
			};
			var d = function() {
				function e(e) {
					if ("string" != typeof e) return e;
					var n = u(e).split(" "),
						r = n[0],
						i = r.match(/^\[(.+)\]$/),
						s = i && i[1],
						o = t(s, r),
						a = h.sortDataParsers[n[1]];
					return e = a ? function(e) {
						return e && a(o(e))
					} : function(e) {
						return e && o(e)
					}
				}

				function t(e, t) {
					var n;
					return n = e ? function(t) {
						return t.getAttribute(e)
					} : function(e) {
						var n = e.querySelector(t);
						return n && f(n)
					}
				}
				return e
			}();
			h.sortDataParsers = {
				parseInt: function(e) {
					return parseInt(e, 10)
				},
				parseFloat: function(e) {
					return parseFloat(e)
				}
			}, h.prototype._sort = function() {
				var e = this.options.sortBy;
				if (e) {
					var t = [].concat.apply(e, this.sortHistory),
						n = c(t, this.options.sortAscending);
					this.filteredItems.sort(n), e !== this.sortHistory[0] && this.sortHistory.unshift(e)
				}
			}, h.prototype._mode = function() {
				var e = this.options.layoutMode,
					t = this.modes[e];
				if (!t) throw Error("No layout mode: " + e);
				return t.options = this.options[e], t
			}, h.prototype._resetLayout = function() {
				e.prototype._resetLayout.call(this), this._mode()._resetLayout()
			}, h.prototype._getItemLayoutPosition = function(e) {
				return this._mode()._getItemLayoutPosition(e)
			}, h.prototype._manageStamp = function(e) {
				this._mode()._manageStamp(e)
			}, h.prototype._getContainerSize = function() {
				return this._mode()._getContainerSize()
			}, h.prototype.needsResizeLayout = function() {
				return this._mode().needsResizeLayout()
			}, h.prototype.appended = function(e) {
				var t = this.addItems(e);
				if (t.length) {
					var n = this._filterRevealAdded(t);
					this.filteredItems = this.filteredItems.concat(n)
				}
			}, h.prototype.prepended = function(e) {
				var t = this._itemize(e);
				if (t.length) {
					var n = this.items.slice(0);
					this.items = t.concat(n), this._resetLayout(), this._manageStamps();
					var r = this._filterRevealAdded(t);
					this.layoutItems(n), this.filteredItems = r.concat(this.filteredItems)
				}
			}, h.prototype._filterRevealAdded = function(e) {
				var t = this._noTransition(function() {
					return this._filter(e)
				});
				return this.layoutItems(t, !0), this.reveal(t), e
			}, h.prototype.insert = function(e) {
				var t = this.addItems(e);
				if (t.length) {
					var n, r, i = t.length;
					for (n = 0; i > n; n++) r = t[n], this.element.appendChild(r.element);
					var s = this._filter(t);
					for (this._noTransition(function() {
							this.hide(s)
						}), n = 0; i > n; n++) t[n].isLayoutInstant = !0;
					for (this.arrange(), n = 0; i > n; n++) delete t[n].isLayoutInstant;
					this.reveal(s)
				}
			};
			var v = h.prototype.remove;
			return h.prototype.remove = function(e) {
				e = r(e);
				var t = this.getItems(e);
				if (v.call(this, e), t && t.length)
					for (var n = 0, s = t.length; s > n; n++) {
						var o = t[n];
						i(o, this.filteredItems)
					}
			}, h.prototype.shuffle = function() {
				for (var e = 0, t = this.items.length; t > e; e++) {
					var n = this.items[e];
					n.sortData.random = Math.random()
				}
				this.options.sortBy = "random", this._sort(), this._layout()
			}, h.prototype._noTransition = function(e) {
				var t = this.options.transitionDuration;
				this.options.transitionDuration = 0;
				var n = e.call(this);
				return this.options.transitionDuration = t, n
			}, h.prototype.getFilteredItemElements = function() {
				for (var e = [], t = 0, n = this.filteredItems.length; n > t; t++) e.push(this.filteredItems[t].element);
				return e
			}, h
		}
		var o = e.jQuery,
			u = String.prototype.trim ? function(e) {
				return e.trim()
			} : function(e) {
				return e.replace(/^\s+|\s+$/g, "")
			},
			a = document.documentElement,
			f = a.textContent ? function(e) {
				return e.textContent
			} : function(e) {
				return e.innerText
			},
			l = Object.prototype.toString,
			c = Array.prototype.indexOf ? function(e, t) {
				return e.indexOf(t)
			} : function(e, t) {
				for (var n = 0, r = e.length; r > n; n++)
					if (e[n] === t) return n;
				return -1
			};
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], s) : e.Isotope = s(e.Outlayer, e.getSize, e.matchesSelector, e.Isotope.Item, e.Isotope.LayoutMode)
	}(window);
(function() {
	function e() {}

	function t(e, t) {
		for (var n = e.length; n--;)
			if (e[n].listener === t) return n;
		return -1
	}

	function n(e) {
		return function() {
			return this[e].apply(this, arguments)
		}
	}
	var r = e.prototype,
		i = this,
		s = i.EventEmitter;
	r.getListeners = function(e) {
		var t, n, r = this._getEvents();
		if ("object" == typeof e) {
			t = {};
			for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
		} else t = r[e] || (r[e] = []);
		return t
	}, r.flattenListeners = function(e) {
		var t, n = [];
		for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
		return n
	}, r.getListenersAsObject = function(e) {
		var t, n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n), t || n
	}, r.addListener = function(e, n) {
		var r, i = this.getListenersAsObject(e),
			s = "object" == typeof n;
		for (r in i) i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(s ? n : {
			listener: n,
			once: !1
		});
		return this
	}, r.on = n("addListener"), r.addOnceListener = function(e, t) {
		return this.addListener(e, {
			listener: t,
			once: !0
		})
	}, r.once = n("addOnceListener"), r.defineEvent = function(e) {
		return this.getListeners(e), this
	}, r.defineEvents = function(e) {
		for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
		return this
	}, r.removeListener = function(e, n) {
		var r, i, s = this.getListenersAsObject(e);
		for (i in s) s.hasOwnProperty(i) && (r = t(s[i], n), -1 !== r && s[i].splice(r, 1));
		return this
	}, r.off = n("removeListener"), r.addListeners = function(e, t) {
		return this.manipulateListeners(!1, e, t)
	}, r.removeListeners = function(e, t) {
		return this.manipulateListeners(!0, e, t)
	}, r.manipulateListeners = function(e, t, n) {
		var r, i, s = e ? this.removeListener : this.addListener,
			o = e ? this.removeListeners : this.addListeners;
		if ("object" != typeof t || t instanceof RegExp)
			for (r = n.length; r--;) s.call(this, t, n[r]);
		else
			for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
		return this
	}, r.removeEvent = function(e) {
		var t, n = typeof e,
			r = this._getEvents();
		if ("string" === n) delete r[e];
		else if ("object" === n)
			for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
		else delete this._events;
		return this
	}, r.removeAllListeners = n("removeEvent"), r.emitEvent = function(e, t) {
		var n, r, i, s, o = this.getListenersAsObject(e);
		for (i in o)
			if (o.hasOwnProperty(i))
				for (r = o[i].length; r--;) n = o[i][r], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
		return this
	}, r.trigger = n("emitEvent"), r.emit = function(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	}, r.setOnceReturnValue = function(e) {
		return this._onceReturnValue = e, this
	}, r._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, r._getEvents = function() {
		return this._events || (this._events = {})
	}, e.noConflict = function() {
		return i.EventEmitter = s, e
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
		return e
	}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
	function(e) {
		function t(t) {
			var n = e.event;
			return n.target = n.target || n.srcElement || t, n
		}
		var n = document.documentElement,
			r = function() {};
		n.addEventListener ? r = function(e, t, n) {
			e.addEventListener(t, n, !1)
		} : n.attachEvent && (r = function(e, n, r) {
			e[n + r] = r.handleEvent ? function() {
				var n = t(e);
				r.handleEvent.call(r, n)
			} : function() {
				var n = t(e);
				r.call(e, n)
			}, e.attachEvent("on" + n, e[n + r])
		});
		var i = function() {};
		n.removeEventListener ? i = function(e, t, n) {
			e.removeEventListener(t, n, !1)
		} : n.detachEvent && (i = function(e, t, n) {
			e.detachEvent("on" + t, e[t + n]);
			try {
				delete e[t + n]
			} catch (r) {
				e[t + n] = void 0
			}
		});
		var s = {
			bind: r,
			unbind: i
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
	}(this),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, r) {
			return t(e, n, r)
		}) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
	}(window, function(e, t, n) {
		function r(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function i(e) {
			return "[object Array]" === h.call(e)
		}

		function s(e) {
			var t = [];
			if (i(e)) t = e;
			else if ("number" == typeof e.length)
				for (var n = 0, r = e.length; r > n; n++) t.push(e[n]);
			else t.push(e);
			return t
		}

		function o(e, t, n) {
			if (!(this instanceof o)) return new o(e, t);
			"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = r({}, this.options), "function" == typeof t ? n = t : r(this.options, t), n && this.on("always", n), this.getImages(), f && (this.jqDeferred = new f.Deferred);
			var i = this;
			setTimeout(function() {
				i.check()
			})
		}

		function u(e) {
			this.img = e
		}

		function a(e) {
			this.src = e, p[e] = this
		}
		var f = e.jQuery,
			l = e.console,
			c = l !== void 0,
			h = Object.prototype.toString;
		o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function() {
			this.images = [];
			for (var e = 0, t = this.elements.length; t > e; e++) {
				var n = this.elements[e];
				"IMG" === n.nodeName && this.addImage(n);
				var r = n.nodeType;
				if (r && (1 === r || 9 === r || 11 === r))
					for (var i = n.querySelectorAll("img"), s = 0, o = i.length; o > s; s++) {
						var u = i[s];
						this.addImage(u)
					}
			}
		}, o.prototype.addImage = function(e) {
			var t = new u(e);
			this.images.push(t)
		}, o.prototype.check = function() {
			function e(e, i) {
				return t.options.debug && c && l.log("confirm", e, i), t.progress(e), n++, n === r && t.complete(), !0
			}
			var t = this,
				n = 0,
				r = this.images.length;
			if (this.hasAnyBroken = !1, !r) return this.complete(), void 0;
			for (var i = 0; r > i; i++) {
				var s = this.images[i];
				s.on("confirm", e), s.check()
			}
		}, o.prototype.progress = function(e) {
			this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
			var t = this;
			setTimeout(function() {
				t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
			})
		}, o.prototype.complete = function() {
			var e = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var t = this;
			setTimeout(function() {
				if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
					var n = t.hasAnyBroken ? "reject" : "resolve";
					t.jqDeferred[n](t)
				}
			})
		}, f && (f.fn.imagesLoaded = function(e, t) {
			var n = new o(this, e, t);
			return n.jqDeferred.promise(f(this))
		}), u.prototype = new t, u.prototype.check = function() {
			var e = p[this.img.src] || new a(this.img.src);
			if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
			if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
			var t = this;
			e.on("confirm", function(e, n) {
				return t.confirm(e.isLoaded, n), !0
			}), e.check()
		}, u.prototype.confirm = function(e, t) {
			this.isLoaded = e, this.emit("confirm", this, t)
		};
		var p = {};
		return a.prototype = new t, a.prototype.check = function() {
			if (!this.isChecked) {
				var e = new Image;
				n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
			}
		}, a.prototype.handleEvent = function(e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, a.prototype.onload = function(e) {
			this.confirm(!0, "onload"), this.unbindProxyEvents(e)
		}, a.prototype.onerror = function(e) {
			this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
		}, a.prototype.confirm = function(e, t) {
			this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
		}, a.prototype.unbindProxyEvents = function(e) {
			n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
		}, o
	});
(function(e) {
	function t() {
		var e = location.href;
		hashtag = e.indexOf("#prettyPhoto") !== -1 ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : false;
		return hashtag
	}

	function n() {
		if (typeof theRel == "undefined") return;
		location.hash = theRel + "/" + rel_index + "/"
	}

	function r() {
		if (location.href.indexOf("#prettyPhoto") !== -1) location.hash = "prettyPhoto"
	}

	function i(e, t) {
		e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var n = "[\\?&]" + e + "=([^&#]*)";
		var r = new RegExp(n);
		var i = r.exec(t);
		return i == null ? "" : i[1]
	}
	e.prettyPhoto = {
		version: "3.1.5"
	};
	e.fn.prettyPhoto = function(s) {
		function g() {
			e(".pp_loaderIcon").hide();
			projectedTop = scroll_pos["scrollTop"] + (d / 2 - a["containerHeight"] / 2);
			if (projectedTop < 0) projectedTop = 0;
			$ppt.fadeTo(settings.animation_speed, 1);
			$pp_pic_holder.find(".pp_content").animate({
				height: a["contentHeight"],
				width: a["contentWidth"]
			}, settings.animation_speed);
			$pp_pic_holder.animate({
				top: projectedTop,
				left: v / 2 - a["containerWidth"] / 2 < 0 ? 0 : v / 2 - a["containerWidth"] / 2,
				width: a["containerWidth"]
			}, settings.animation_speed, function() {
				$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]);
				$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
				if (isSet && S(pp_images[set_position]) == "image") {
					$pp_pic_holder.find(".pp_hoverContainer").show()
				} else {
					$pp_pic_holder.find(".pp_hoverContainer").hide()
				}
				if (settings.allow_expand) {
					if (a["resized"]) {
						e("a.pp_expand,a.pp_contract").show()
					} else {
						e("a.pp_expand").hide()
					}
				}
				if (settings.autoplay_slideshow && !m && !f) e.prettyPhoto.startSlideshow();
				settings.changepicturecallback();
				f = true
			});
			C();
			s.ajaxcallback()
		}

		function y(t) {
			$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
			$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
				e(".pp_loaderIcon").show();
				t()
			})
		}

		function b(t) {
			t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
		}

		function w(e, t) {
			resized = false;
			E(e, t);
			imageWidth = e, imageHeight = t;
			if ((p > v || h > d) && doresize && settings.allow_resize && !u) {
				resized = true, fitting = false;
				while (!fitting) {
					if (p > v) {
						imageWidth = v - 200;
						imageHeight = t / e * imageWidth
					} else if (h > d) {
						imageHeight = d - 200;
						imageWidth = e / t * imageHeight
					} else {
						fitting = true
					}
					h = imageHeight, p = imageWidth
				}
				if (p > v || h > d) {
					w(p, h)
				}
				E(imageWidth, imageHeight)
			}
			return {
				width: Math.floor(imageWidth),
				height: Math.floor(imageHeight),
				containerHeight: Math.floor(h),
				containerWidth: Math.floor(p) + settings.horizontal_padding * 2,
				contentHeight: Math.floor(l),
				contentWidth: Math.floor(c),
				resized: resized
			}
		}

		function E(t, n) {
			t = parseFloat(t);
			n = parseFloat(n);
			$pp_details = $pp_pic_holder.find(".pp_details");
			$pp_details.width(t);
			detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
			$pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
				position: "absolute",
				top: -1e4
			});
			detailsHeight += $pp_details.height();
			detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight;
			$pp_details.remove();
			$pp_title = $pp_pic_holder.find(".ppt");
			$pp_title.width(t);
			titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
			$pp_title = $pp_title.clone().appendTo(e("body")).css({
				position: "absolute",
				top: -1e4
			});
			titleHeight += $pp_title.height();
			$pp_title.remove();
			l = n + detailsHeight;
			c = t;
			h = l + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
			p = t
		}

		function S(e) {
			if (e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i)) {
				return "youtube"
			} else if (e.match(/vimeo\.com/i)) {
				return "vimeo"
			} else if (e.match(/\b.mov\b/i)) {
				return "quicktime"
			} else if (e.match(/\b.swf\b/i)) {
				return "flash"
			} else if (e.match(/\biframe=true\b/i)) {
				return "iframe"
			} else if (e.match(/\bajax=true\b/i)) {
				return "ajax"
			} else if (e.match(/\bcustom=true\b/i)) {
				return "custom"
			} else if (e.substr(0, 1) == "#") {
				return "inline"
			} else {
				return "image"
			}
		}

		function x() {
			if (doresize && typeof $pp_pic_holder != "undefined") {
				scroll_pos = T();
				contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();
				projectedTop = d / 2 + scroll_pos["scrollTop"] - contentHeight / 2;
				if (projectedTop < 0) projectedTop = 0;
				if (contentHeight > d) return;
				$pp_pic_holder.css({
					top: projectedTop,
					left: v / 2 + scroll_pos["scrollLeft"] - contentwidth / 2
				})
			}
		}

		function T() {
			if (self.pageYOffset) {
				return {
					scrollTop: self.pageYOffset,
					scrollLeft: self.pageXOffset
				}
			} else if (document.documentElement && document.documentElement.scrollTop) {
				return {
					scrollTop: document.documentElement.scrollTop,
					scrollLeft: document.documentElement.scrollLeft
				}
			} else if (document.body) {
				return {
					scrollTop: document.body.scrollTop,
					scrollLeft: document.body.scrollLeft
				}
			}
		}

		function N() {
			d = e(window).height(), v = e(window).width();
			if (typeof $pp_overlay != "undefined") $pp_overlay.height(e(document).height()).width(v)
		}

		function C() {
			if (isSet && settings.overlay_gallery && S(pp_images[set_position]) == "image") {
				itemWidth = 52 + 5;
				navWidth = settings.theme == "facebook" || settings.theme == "pp_default" ? 50 : 30;
				itemsPerPage = Math.floor((a["containerWidth"] - 100 - navWidth) / itemWidth);
				itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length;
				totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;
				if (totalPage == 0) {
					navWidth = 0;
					$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()
				} else {
					$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()
				}
				galleryWidth = itemsPerPage * itemWidth;
				fullGalleryWidth = pp_images.length * itemWidth;
				$pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");
				goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage;
				e.prettyPhoto.changeGalleryPage(goToPage);
				$pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")
			} else {
				$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
			}
		}

		function k(t) {
			if (settings.social_tools) facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
			settings.markup = settings.markup.replace("{pp_social}", "");
			e("body").append(settings.markup);
			$pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay");
			if (isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var n = 0; n < pp_images.length; n++) {
					if (!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)) {
						classname = "default";
						img_src = ""
					} else {
						classname = "";
						img_src = pp_images[n]
					}
					toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>"
				}
				toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
				$pp_pic_holder.find("#pp_full_res").after(toInject);
				$pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li");
				$pp_gallery.find(".pp_arrow_next").click(function() {
					e.prettyPhoto.changeGalleryPage("next");
					e.prettyPhoto.stopSlideshow();
					return false
				});
				$pp_gallery.find(".pp_arrow_previous").click(function() {
					e.prettyPhoto.changeGalleryPage("previous");
					e.prettyPhoto.stopSlideshow();
					return false
				});
				$pp_pic_holder.find(".pp_content").hover(function() {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
				}, function() {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
				});
				itemWidth = 52 + 5;
				$pp_gallery_li.each(function(t) {
					e(this).find("a").click(function() {
						e.prettyPhoto.changePage(t);
						e.prettyPhoto.stopSlideshow();
						return false
					})
				})
			}
			if (settings.slideshow) {
				$pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');
				$pp_pic_holder.find(".pp_nav .pp_play").click(function() {
					e.prettyPhoto.startSlideshow();
					return false
				})
			}
			$pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
			$pp_overlay.css({
				opacity: 0,
				height: e(document).height(),
				width: e(window).width()
			}).bind("click", function() {
				if (!settings.modal) e.prettyPhoto.close()
			});
			e("a.pp_close").bind("click", function() {
				e.prettyPhoto.close();
				return false
			});
			if (settings.allow_expand) {
				e("a.pp_expand").bind("click", function(t) {
					if (e(this).hasClass("pp_expand")) {
						e(this).removeClass("pp_expand").addClass("pp_contract");
						doresize = false
					} else {
						e(this).removeClass("pp_contract").addClass("pp_expand");
						doresize = true
					}
					y(function() {
						e.prettyPhoto.open()
					});
					return false
				})
			}
			$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
				e.prettyPhoto.changePage("previous");
				e.prettyPhoto.stopSlideshow();
				return false
			});
			$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
				e.prettyPhoto.changePage("next");
				e.prettyPhoto.stopSlideshow();
				return false
			});
			x()
		}
		s = jQuery.extend({
			hook: "data-rel",
			animation_speed: "fast",
			ajaxcallback: function() {},
			slideshow: 5e3,
			autoplay_slideshow: false,
			opacity: .8,
			show_title: true,
			allow_resize: true,
			allow_expand: true,
			default_width: 500,
			default_height: 344,
			counter_separator_label: "/",
			theme: "pp_default",
			horizontal_padding: 20,
			hideflash: false,
			wmode: "opaque",
			autoplay: true,
			modal: false,
			deeplinking: true,
			overlay_gallery: true,
			overlay_gallery_max: 30,
			keyboard_shortcuts: true,
			changepicturecallback: function() {},
			callback: function() {},
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: "",
			social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
		}, s);
		var o = this,
			u = false,
			a, f, l, c, h, p, d = e(window).height(),
			v = e(window).width(),
			m;
		doresize = true, scroll_pos = T();
		e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
			x();
			N()
		});
		if (s.keyboard_shortcuts) {
			e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
				if (typeof $pp_pic_holder != "undefined") {
					if ($pp_pic_holder.is(":visible")) {
						switch (t.keyCode) {
							case 37:
								e.prettyPhoto.changePage("previous");
								t.preventDefault();
								break;
							case 39:
								e.prettyPhoto.changePage("next");
								t.preventDefault();
								break;
							case 27:
								if (!settings.modal) e.prettyPhoto.close();
								t.preventDefault();
								break
						}
					}
				}
			})
		}
		e.prettyPhoto.initialize = function() {
			settings = s;
			if (settings.theme == "pp_default") settings.horizontal_padding = 16;
			theRel = e(this).attr(settings.hook);
			galleryRegExp = /\[(?:.*)\]/;
			isSet = galleryRegExp.exec(theRel) ? true : false;
			pp_images = isSet ? jQuery.map(o, function(t, n) {
				if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("href")
			}) : e.makeArray(e(this).attr("href"));
			pp_titles = isSet ? jQuery.map(o, function(t, n) {
				if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : ""
			}) : e.makeArray(e(this).find("img").attr("alt"));
			pp_descriptions = isSet ? jQuery.map(o, function(t, n) {
				if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("title") ? e(t).attr("title") : ""
			}) : e.makeArray(e(this).attr("title"));
			if (pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
			set_position = jQuery.inArray(e(this).attr("href"), pp_images);
			rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this));
			k(this);
			if (settings.allow_resize) e(window).bind("scroll.prettyphoto", function() {
				x()
			});
			e.prettyPhoto.open();
			return false
		};
		e.prettyPhoto.open = function(t) {
			if (typeof settings == "undefined") {
				settings = s;
				pp_images = e.makeArray(arguments[0]);
				pp_titles = arguments[1] ? e.makeArray(arguments[1]) : e.makeArray("");
				pp_descriptions = arguments[2] ? e.makeArray(arguments[2]) : e.makeArray("");
				isSet = pp_images.length > 1 ? true : false;
				set_position = arguments[3] ? arguments[3] : 0;
				k(t.target)
			}
			if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden");
			b(e(pp_images).size());
			e(".pp_loaderIcon").show();
			if (settings.deeplinking) n();
			if (settings.social_tools) {
				facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
				$pp_pic_holder.find(".pp_social").html(facebook_like_link)
			}
			if ($ppt.is(":hidden")) $ppt.css("opacity", 0).show();
			$pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity);
			$pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size());
			if (typeof pp_descriptions[set_position] != "undefined" && pp_descriptions[set_position] != "") {
				$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))
			} else {
				$pp_pic_holder.find(".pp_description").hide()
			}
			movie_width = parseFloat(i("width", pp_images[set_position])) ? i("width", pp_images[set_position]) : settings.default_width.toString();
			movie_height = parseFloat(i("height", pp_images[set_position])) ? i("height", pp_images[set_position]) : settings.default_height.toString();
			u = false;
			if (movie_height.indexOf("%") != -1) {
				movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150);
				u = true
			}
			if (movie_width.indexOf("%") != -1) {
				movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150);
				u = true
			}
			$pp_pic_holder.fadeIn(function() {
				settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined" ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;");
				imgPreloader = "";
				skipInjection = false;
				switch (S(pp_images[set_position])) {
					case "image":
						imgPreloader = new Image;
						nextImage = new Image;
						if (isSet && set_position < e(pp_images).size() - 1) nextImage.src = pp_images[set_position + 1];
						prevImage = new Image;
						if (isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];
						$pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
						imgPreloader.onload = function() {
							a = w(imgPreloader.width, imgPreloader.height);
							g()
						};
						imgPreloader.onerror = function() {
							alert("Image cannot be loaded. Make sure the path is correct and image exist.");
							e.prettyPhoto.close()
						};
						imgPreloader.src = pp_images[set_position];
						break;
					case "youtube":
						a = w(movie_width, movie_height);
						movie_id = i("v", pp_images[set_position]);
						if (movie_id == "") {
							movie_id = pp_images[set_position].split("youtu.be/");
							movie_id = movie_id[1];
							if (movie_id.indexOf("?") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("?"));
							if (movie_id.indexOf("&") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("&"))
						}
						movie = "http://www.youtube.com/embed/" + movie_id;
						i("rel", pp_images[set_position]) ? movie += "?rel=" + i("rel", pp_images[set_position]) : movie += "?rel=1";
						if (settings.autoplay) movie += "&autoplay=1";
						toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
						break;
					case "vimeo":
						a = w(movie_width, movie_height);
						movie_id = pp_images[set_position];
						var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
						var n = movie_id.match(t);
						movie = "http://player.vimeo.com/video/" + n[3] + "?title=0&byline=0&portrait=0";
						if (settings.autoplay) movie += "&autoplay=1;";
						vimeo_width = a["width"] + "/embed/?moog_width=" + a["width"];
						toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, a["height"]).replace(/{path}/g, movie);
						break;
					case "quicktime":
						a = w(movie_width, movie_height);
						a["height"] += 15;
						a["contentHeight"] += 15;
						a["containerHeight"] += 15;
						toInject = settings.quicktime_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
						break;
					case "flash":
						a = w(movie_width, movie_height);
						flash_vars = pp_images[set_position];
						flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
						filename = pp_images[set_position];
						filename = filename.substring(0, filename.indexOf("?"));
						toInject = settings.flash_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
						break;
					case "iframe":
						a = w(movie_width, movie_height);
						frame_url = pp_images[set_position];
						frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
						toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{path}/g, frame_url);
						break;
					case "ajax":
						doresize = false;
						a = w(movie_width, movie_height);
						doresize = true;
						skipInjection = true;
						e.get(pp_images[set_position], function(e) {
							toInject = settings.inline_markup.replace(/{content}/g, e);
							$pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
							g()
						});
						break;
					case "custom":
						a = w(movie_width, movie_height);
						toInject = settings.custom_markup;
						break;
					case "inline":
						myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
							width: settings.default_width
						}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();
						doresize = false;
						a = w(e(myClone).width(), e(myClone).height());
						doresize = true;
						e(myClone).remove();
						toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html());
						break
				}
				if (!imgPreloader && !skipInjection) {
					$pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
					g()
				}
			});
			return false
		};
		e.prettyPhoto.changePage = function(t) {
			currentGalleryPage = 0;
			if (t == "previous") {
				set_position--;
				if (set_position < 0) set_position = e(pp_images).size() - 1
			} else if (t == "next") {
				set_position++;
				if (set_position > e(pp_images).size() - 1) set_position = 0
			} else {
				set_position = t
			}
			rel_index = set_position;
			if (!doresize) doresize = true;
			if (settings.allow_expand) {
				e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")
			}
			y(function() {
				e.prettyPhoto.open()
			})
		};
		e.prettyPhoto.changeGalleryPage = function(e) {
			if (e == "next") {
				currentGalleryPage++;
				if (currentGalleryPage > totalPage) currentGalleryPage = 0
			} else if (e == "previous") {
				currentGalleryPage--;
				if (currentGalleryPage < 0) currentGalleryPage = totalPage
			} else {
				currentGalleryPage = e
			}
			slide_speed = e == "next" || e == "previous" ? settings.animation_speed : 0;
			slide_to = currentGalleryPage * itemsPerPage * itemWidth;
			$pp_gallery.find("ul").animate({
				left: -slide_to
			}, slide_speed)
		};
		e.prettyPhoto.startSlideshow = function() {
			if (typeof m == "undefined") {
				$pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
					e.prettyPhoto.stopSlideshow();
					return false
				});
				m = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)
			} else {
				e.prettyPhoto.changePage("next")
			}
		};
		e.prettyPhoto.stopSlideshow = function() {
			$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
				e.prettyPhoto.startSlideshow();
				return false
			});
			clearInterval(m);
			m = undefined
		};
		e.prettyPhoto.close = function() {
			if ($pp_overlay.is(":animated")) return;
			e.prettyPhoto.stopSlideshow();
			$pp_pic_holder.stop().find("object,embed").css("visibility", "hidden");
			e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
				e(this).remove()
			});
			$pp_overlay.fadeOut(settings.animation_speed, function() {
				if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
				e(this).remove();
				e(window).unbind("scroll.prettyphoto");
				r();
				settings.callback();
				doresize = true;
				f = false;
				delete settings
			})
		};
		if (!pp_alreadyInitialized && t()) {
			pp_alreadyInitialized = true;
			hashIndex = t();
			hashRel = hashIndex;
			hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1);
			hashRel = hashRel.substring(0, hashRel.indexOf("/"));
			setTimeout(function() {
				e("a[" + s.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
			}, 50)
		}
		return this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
	};
})(jQuery);
var pp_alreadyInitialized = false;
(function(e) {
	"use strict";
	e.fn.scrollPoint = function(t) {
		var n = e(window);
		t = e.extend({
			up: false,
			down: false,
			offsetUp: 0,
			offsetDown: 0
		}, t);
		return this.each(function() {
			function u(t, n) {
				var r, i = e.Event(t);
				for (r in n) {
					i[r] = n[r]
				}
				o.trigger(i)
			}

			function a() {
				var e = n.scrollTop(),
					t = s,
					o = {
						isUp: e <= r,
						isDown: e >= i,
						isIn: false
					};
				s = o.isIn = !o.isUp && !o.isDown;
				if (t !== s) {
					u("scrollPoint" + (s ? "Enter" : "Leave"), o)
				}
				u("scrollPointMove", o)
			}
			var r = t.up,
				i = t.down,
				s = false,
				o = e(this);
			if (!r && r !== 0) {
				r = o.offset().top
			}
			if (!i && i !== 0) {
				i = r + o.outerHeight()
			}
			r -= t.offsetUp;
			i -= t.offsetDown;
			n.scroll(a)
		})
	}
})(jQuery);
(function(e) {
	function r(e) {
		if (e in t.style) return e;
		var n = ["Moz", "Webkit", "O", "ms"];
		var r = e.charAt(0).toUpperCase() + e.substr(1);
		if (e in t.style) {
			return e
		}
		for (var i = 0; i < n.length; ++i) {
			var s = n[i] + r;
			if (s in t.style) {
				return s
			}
		}
	}

	function i() {
		t.style[n.transform] = "";
		t.style[n.transform] = "rotateY(90deg)";
		return t.style[n.transform] !== ""
	}

	function f(e) {
		if (typeof e === "string") {
			this.parse(e)
		}
		return this
	}

	function l(e, t, n) {
		if (t === true) {
			e.queue(n)
		} else if (t) {
			e.queue(t, n)
		} else {
			n()
		}
	}

	function c(t) {
		var n = [];
		e.each(t, function(t) {
			t = e.camelCase(t);
			t = e.transit.propertyMap[t] || e.cssProps[t] || t;
			t = d(t);
			if (e.inArray(t, n) === -1) {
				n.push(t)
			}
		});
		return n
	}

	function h(t, n, r, i) {
		var s = c(t);
		if (e.cssEase[r]) {
			r = e.cssEase[r]
		}
		var o = "" + m(n) + " " + r;
		if (parseInt(i, 10) > 0) {
			o += " " + m(i)
		}
		var u = [];
		e.each(s, function(e, t) {
			u.push(t + " " + o)
		});
		return u.join(", ")
	}

	function p(t, r) {
		if (!r) {
			e.cssNumber[t] = true
		}
		e.transit.propertyMap[t] = n.transform;
		e.cssHooks[t] = {
			get: function(e) {
				var n = $(e).css("transit:transform");
				return n.get(t)
			},
			set: function(e, n) {
				var r = $(e).css("transit:transform");
				r.setFromString(t, n);
				$(e).css({
					"transit:transform": r
				})
			}
		}
	}

	function d(e) {
		return e.replace(/([A-Z])/g, function(e) {
			return "-" + e.toLowerCase()
		})
	}

	function v(e, t) {
		if (typeof e === "string" && !e.match(/^[\-0-9\.]+$/)) {
			return e
		} else {
			return "" + e + t
		}
	}

	function m(t) {
		var n = t;
		if (typeof n === "string" && !n.match(/^[\-0-9\.]+/)) {
			n = e.fx.speeds[n] || e.fx.speeds._default
		}
		return v(n, "ms")
	}
	e.transit = {
		version: "0.9.9",
		propertyMap: {
			marginLeft: "margin",
			marginRight: "margin",
			marginBottom: "margin",
			marginTop: "margin",
			paddingLeft: "padding",
			paddingRight: "padding",
			paddingBottom: "padding",
			paddingTop: "padding"
		},
		enabled: true,
		useTransitionEnd: false
	};
	var t = document.createElement("div");
	var n = {};
	var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
	n.transition = r("transition");
	n.transitionDelay = r("transitionDelay");
	n.transform = r("transform");
	n.transformOrigin = r("transformOrigin");
	n.transform3d = i();
	var o = {
		transition: "transitionEnd",
		MozTransition: "transitionend",
		OTransition: "oTransitionEnd",
		WebkitTransition: "webkitTransitionEnd",
		msTransition: "MSTransitionEnd"
	};
	var u = n.transitionEnd = o[n.transition] || null;
	for (var a in n) {
		if (n.hasOwnProperty(a) && typeof e.support[a] === "undefined") {
			e.support[a] = n[a]
		}
	}
	t = null;
	e.cssEase = {
		_default: "ease",
		"in": "ease-in",
		out: "ease-out",
		"in-out": "ease-in-out",
		snap: "cubic-bezier(0,1,.5,1)",
		easeInCubic: "cubic-bezier(.55, .055, .675, .19)",
		easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
		easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
		easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
		easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
		easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
		easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
		easeOutExpo: "cubic-bezier(.19,1,.22,1)",
		easeInOutExpo: "cubic-bezier(1,0,0,1)",
		easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
		easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
		easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
		easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
		easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
		easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
		easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
		easeOutQuint: "cubic-bezier(.23,1,.32,1)",
		easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
		easeInSine: "cubic-bezier(.47,0,.745,.715)",
		easeOutSine: "cubic-bezier(.39,.575,.565,1)",
		easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
		easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
		easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
		easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
	};
	e.cssHooks["transit:transform"] = {
		get: function(e) {
			return $(e).data("transform") || new f
		},
		set: function(e, t) {
			var r = t;
			if (!(r instanceof f)) {
				r = new f(r)
			}
			if (n.transform === "WebkitTransform" && !s) {
				e.style[n.transform] = r.toString(true)
			} else {
				e.style[n.transform] = r.toString()
			}
			$(e).data("transform", r)
		}
	};
	e.cssHooks.transform = {
		set: e.cssHooks["transit:transform"].set
	};
	if (e.fn.jquery < "1.8") {
		e.cssHooks.transformOrigin = {
			get: function(e) {
				return e.style[n.transformOrigin]
			},
			set: function(e, t) {
				e.style[n.transformOrigin] = t
			}
		};
		e.cssHooks.transition = {
			get: function(e) {
				return e.style[n.transition]
			},
			set: function(e, t) {
				e.style[n.transition] = t
			}
		}
	}
	p("scale");
	p("translate");
	p("rotate");
	p("rotateX");
	p("rotateY");
	p("rotate3d");
	p("perspective");
	p("skewX");
	p("skewY");
	p("x", true);
	p("y", true);
	f.prototype = {
		setFromString: function(e, t) {
			var n = typeof t === "string" ? t.split(",") : t.constructor === Array ? t : [t];
			n.unshift(e);
			f.prototype.set.apply(this, n)
		},
		set: function(e) {
			var t = Array.prototype.slice.apply(arguments, [1]);
			if (this.setter[e]) {
				this.setter[e].apply(this, t)
			} else {
				this[e] = t.join(",")
			}
		},
		get: function(e) {
			if (this.getter[e]) {
				return this.getter[e].apply(this)
			} else {
				return this[e] || 0
			}
		},
		setter: {
			rotate: function(e) {
				this.rotate = v(e, "deg")
			},
			rotateX: function(e) {
				this.rotateX = v(e, "deg")
			},
			rotateY: function(e) {
				this.rotateY = v(e, "deg")
			},
			scale: function(e, t) {
				if (t === undefined) {
					t = e
				}
				this.scale = e + "," + t
			},
			skewX: function(e) {
				this.skewX = v(e, "deg")
			},
			skewY: function(e) {
				this.skewY = v(e, "deg")
			},
			perspective: function(e) {
				this.perspective = v(e, "px")
			},
			x: function(e) {
				this.set("translate", e, null)
			},
			y: function(e) {
				this.set("translate", null, e)
			},
			translate: function(e, t) {
				if (this._translateX === undefined) {
					this._translateX = 0
				}
				if (this._translateY === undefined) {
					this._translateY = 0
				}
				if (e !== null && e !== undefined) {
					this._translateX = v(e, "px")
				}
				if (t !== null && t !== undefined) {
					this._translateY = v(t, "px")
				}
				this.translate = this._translateX + "," + this._translateY
			}
		},
		getter: {
			x: function() {
				return this._translateX || 0
			},
			y: function() {
				return this._translateY || 0
			},
			scale: function() {
				var e = (this.scale || "1,1").split(",");
				if (e[0]) {
					e[0] = parseFloat(e[0])
				}
				if (e[1]) {
					e[1] = parseFloat(e[1])
				}
				return e[0] === e[1] ? e[0] : e
			},
			rotate3d: function() {
				var e = (this.rotate3d || "0,0,0,0deg").split(",");
				for (var t = 0; t <= 3; ++t) {
					if (e[t]) {
						e[t] = parseFloat(e[t])
					}
				}
				if (e[3]) {
					e[3] = v(e[3], "deg")
				}
				return e
			}
		},
		parse: function(e) {
			var t = this;
			e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, n, r) {
				t.setFromString(n, r)
			})
		},
		toString: function(e) {
			var t = [];
			for (var r in this) {
				if (this.hasOwnProperty(r)) {
					if (!n.transform3d && (r === "rotateX" || r === "rotateY" || r === "perspective" || r === "transformOrigin")) {
						continue
					}
					if (r[0] !== "_") {
						if (e && r === "scale") {
							t.push(r + "3d(" + this[r] + ",1)")
						} else if (e && r === "translate") {
							t.push(r + "3d(" + this[r] + ",0)")
						} else {
							t.push(r + "(" + this[r] + ")")
						}
					}
				}
			}
			return t.join(" ")
		}
	};
	e.fn.transition = e.fn.transit = function(t, r, i, s) {
		var o = this;
		var a = 0;
		var f = true;
		var c = e.extend(true, {}, t);
		if (typeof r === "function") {
			s = r;
			r = undefined
		}
		if (typeof r === "object") {
			i = r.easing;
			a = r.delay || 0;
			f = r.queue || true;
			s = r.complete;
			r = r.duration
		}
		if (typeof i === "function") {
			s = i;
			i = undefined
		}
		if (typeof c.easing !== "undefined") {
			i = c.easing;
			delete c.easing
		}
		if (typeof c.duration !== "undefined") {
			r = c.duration;
			delete c.duration
		}
		if (typeof c.complete !== "undefined") {
			s = c.complete;
			delete c.complete
		}
		if (typeof c.queue !== "undefined") {
			f = c.queue;
			delete c.queue
		}
		if (typeof c.delay !== "undefined") {
			a = c.delay;
			delete c.delay
		}
		if (typeof r === "undefined") {
			r = e.fx.speeds._default
		}
		if (typeof i === "undefined") {
			i = e.cssEase._default
		}
		r = m(r);
		var p = h(c, r, i, a);
		var d = e.transit.enabled && n.transition;
		var v = d ? parseInt(r, 10) + parseInt(a, 10) : 0;
		if (v === 0) {
			var g = function(e) {
				o.css(c);
				if (s) {
					s.apply(o)
				}
				if (e) {
					e()
				}
			};
			l(o, f, g);
			return o
		}
		var y = {};
		var b = function(r) {
			var i = false;
			var a = function() {
				if (i) {
					o.unbind(u, a)
				}
				if (v > 0) {
					o.each(function() {
						this.style[n.transition] = y[this] || null
					})
				}
				if (typeof s === "function") {
					s.apply(o)
				}
				if (typeof r === "function") {
					r()
				}
			};
			if (v > 0 && u && e.transit.useTransitionEnd) {
				i = true;
				o.bind(u, a)
			} else {
				window.setTimeout(a, v)
			}
			o.each(function() {
				if (v > 0) {
					this.style[n.transition] = p
				}
				$(this).css(t)
			})
		};
		var w = function(e) {
			this.offsetWidth;
			b(e)
		};
		l(o, f, w);
		return this
	};
	e.transit.getTransitionValue = h
})(jQuery);
(function(e, t) {
	jQuery.easing["jswing"] = jQuery.easing["swing"];
	jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function(e, t, n, r, i) {
			return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
		},
		easeInQuad: function(e, t, n, r, i) {
			return r * (t /= i) * t + n
		},
		easeOutQuad: function(e, t, n, r, i) {
			return -r * (t /= i) * (t - 2) + n
		},
		easeInOutQuad: function(e, t, n, r, i) {
			if ((t /= i / 2) < 1) return r / 2 * t * t + n;
			return -r / 2 * (--t * (t - 2) - 1) + n
		},
		easeInCubic: function(e, t, n, r, i) {
			return r * (t /= i) * t * t + n
		},
		easeOutCubic: function(e, t, n, r, i) {
			return r * ((t = t / i - 1) * t * t + 1) + n
		},
		easeInOutCubic: function(e, t, n, r, i) {
			if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
			return r / 2 * ((t -= 2) * t * t + 2) + n
		},
		easeInQuart: function(e, t, n, r, i) {
			return r * (t /= i) * t * t * t + n
		},
		easeOutQuart: function(e, t, n, r, i) {
			return -r * ((t = t / i - 1) * t * t * t - 1) + n
		},
		easeInOutQuart: function(e, t, n, r, i) {
			if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
			return -r / 2 * ((t -= 2) * t * t * t - 2) + n
		},
		easeInQuint: function(e, t, n, r, i) {
			return r * (t /= i) * t * t * t * t + n
		},
		easeOutQuint: function(e, t, n, r, i) {
			return r * ((t = t / i - 1) * t * t * t * t + 1) + n
		},
		easeInOutQuint: function(e, t, n, r, i) {
			if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
			return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
		},
		easeInSine: function(e, t, n, r, i) {
			return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
		},
		easeOutSine: function(e, t, n, r, i) {
			return r * Math.sin(t / i * (Math.PI / 2)) + n
		},
		easeInOutSine: function(e, t, n, r, i) {
			return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
		},
		easeInExpo: function(e, t, n, r, i) {
			return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
		},
		easeOutExpo: function(e, t, n, r, i) {
			return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
		},
		easeInOutExpo: function(e, t, n, r, i) {
			if (t == 0) return n;
			if (t == i) return n + r;
			if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
			return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
		},
		easeInCirc: function(e, t, n, r, i) {
			return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
		},
		easeOutCirc: function(e, t, n, r, i) {
			return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
		},
		easeInOutCirc: function(e, t, n, r, i) {
			if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
			return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
		},
		easeInElastic: function(e, t, n, r, i) {
			var s = 1.70158;
			var o = 0;
			var u = r;
			if (t == 0) return n;
			if ((t /= i) == 1) return n + r;
			if (!o) o = i * .3;
			if (u < Math.abs(r)) {
				u = r;
				var s = o / 4
			} else var s = o / (2 * Math.PI) * Math.asin(r / u);
			return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
		},
		easeOutElastic: function(e, t, n, r, i) {
			var s = 1.70158;
			var o = 0;
			var u = r;
			if (t == 0) return n;
			if ((t /= i) == 1) return n + r;
			if (!o) o = i * .3;
			if (u < Math.abs(r)) {
				u = r;
				var s = o / 4
			} else var s = o / (2 * Math.PI) * Math.asin(r / u);
			return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
		},
		easeInOutElastic: function(e, t, n, r, i) {
			var s = 1.70158;
			var o = 0;
			var u = r;
			if (t == 0) return n;
			if ((t /= i / 2) == 2) return n + r;
			if (!o) o = i * .3 * 1.5;
			if (u < Math.abs(r)) {
				u = r;
				var s = o / 4
			} else var s = o / (2 * Math.PI) * Math.asin(r / u);
			if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
			return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
		},
		easeInBack: function(e, t, n, r, i, s) {
			if (s == undefined) s = 1.70158;
			return r * (t /= i) * t * ((s + 1) * t - s) + n
		},
		easeOutBack: function(e, t, n, r, i, s) {
			if (s == undefined) s = 1.70158;
			return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
		},
		easeInOutBack: function(e, t, n, r, i, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
			return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
		},
		easeInBounce: function(e, t, n, r, i) {
			return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
		},
		easeOutBounce: function(e, t, n, r, i) {
			if ((t /= i) < 1 / 2.75) {
				return r * 7.5625 * t * t + n
			} else if (t < 2 / 2.75) {
				return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
			} else if (t < 2.5 / 2.75) {
				return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
			} else {
				return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
			}
		},
		easeInOutBounce: function(e, t, n, r, i) {
			if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
			return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
		}
	});
	e.waitForImages = {
		hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
	};
	e.expr[":"].uncached = function(t) {
		var n = document.createElement("img");
		n.src = t.src;
		return e(t).is('img[src!=""]') && !n.complete
	};
	e.fn.waitForImages = function(t, n, r) {
		if (e.isPlainObject(arguments[0])) {
			n = t.each;
			r = t.waitForAll;
			t = t.finished
		}
		t = t || e.noop;
		n = n || e.noop;
		r = !!r;
		if (!e.isFunction(t) || !e.isFunction(n)) {
			throw new TypeError("An invalid callback was supplied.")
		}
		return this.each(function() {
			var i = e(this),
				s = [];
			if (r) {
				var o = e.waitForImages.hasImageProperties || [],
					u = /url\((['"]?)(.*?)\1\)/g;
				i.find("*").each(function() {
					var t = e(this);
					if (t.is("img:uncached")) {
						s.push({
							src: t.attr("src"),
							element: t[0]
						})
					}
					e.each(o, function(e, n) {
						var r = t.css(n);
						if (!r) {
							return true
						}
						var i;
						while (i = u.exec(r)) {
							s.push({
								src: i[2],
								element: t[0]
							})
						}
					})
				})
			} else {
				i.find("img:uncached").each(function() {
					s.push({
						src: this.src,
						element: this
					})
				})
			}
			var a = s.length,
				f = 0;
			if (a == 0) {
				t.call(i[0])
			}
			e.each(s, function(r, s) {
				var o = new Image;
				e(o).bind("load error", function(e) {
					f++;
					n.call(s.element, f, a, e.type == "load");
					if (f == a) {
						t.call(i[0]);
						return false
					}
				});
				o.src = s.src
			})
		})
	};
	e.fn.swipe = function(t) {
		if (!this) return false;
		var n = {
			fingers: 1,
			threshold: 75,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			click: null,
			triggerOnTouchEnd: true,
			allowPageScroll: "auto"
		};
		var r = "left";
		var i = "right";
		var s = "up";
		var o = "down";
		var u = "none";
		var a = "horizontal";
		var f = "vertical";
		var l = "auto";
		var c = "start";
		var h = "move";
		var p = "end";
		var d = "cancel";
		var v = "ontouchstart" in window,
			m = v ? "touchstart" : "mousedown",
			g = v ? "touchmove" : "mousemove",
			y = v ? "touchend" : "mouseup",
			b = "touchcancel";
		var w = "start";
		if (t.allowPageScroll == undefined && (t.swipe != undefined || t.swipeStatus != undefined)) t.allowPageScroll = u;
		if (t) e.extend(n, t);
		return this.each(function() {
			function t() {
				var e = S();
				if (e <= 45 && e >= 0) return r;
				else if (e <= 360 && e >= 315) return r;
				else if (e >= 135 && e <= 225) return i;
				else if (e > 45 && e < 135) return o;
				else return s
			}

			function S() {
				var e = P.x - H.x;
				var t = H.y - P.y;
				var n = Math.atan2(t, e);
				var r = Math.round(n * 180 / Math.PI);
				if (r < 0) r = 360 - Math.abs(r);
				return r
			}

			function x() {
				return Math.round(Math.sqrt(Math.pow(H.x - P.x, 2) + Math.pow(H.y - P.y, 2)))
			}

			function T(e, t) {
				if (n.allowPageScroll == u) {
					e.preventDefault()
				} else {
					var c = n.allowPageScroll == l;
					switch (t) {
						case r:
							if (n.swipeLeft && c || !c && n.allowPageScroll != a) e.preventDefault();
							break;
						case i:
							if (n.swipeRight && c || !c && n.allowPageScroll != a) e.preventDefault();
							break;
						case s:
							if (n.swipeUp && c || !c && n.allowPageScroll != f) e.preventDefault();
							break;
						case o:
							if (n.swipeDown && c || !c && n.allowPageScroll != f) e.preventDefault();
							break
					}
				}
			}

			function N(e, t) {
				if (n.swipeStatus) n.swipeStatus.call(M, e, t, direction || null, distance || 0);
				if (t == d) {
					if (n.click && (D == 1 || !v) && (isNaN(distance) || distance == 0)) n.click.call(M, e, e.target)
				}
				if (t == p) {
					if (n.swipe) {
						n.swipe.call(M, e, direction, distance)
					}
					switch (direction) {
						case r:
							if (n.swipeLeft) n.swipeLeft.call(M, e, direction, distance);
							break;
						case i:
							if (n.swipeRight) n.swipeRight.call(M, e, direction, distance);
							break;
						case s:
							if (n.swipeUp) n.swipeUp.call(M, e, direction, distance);
							break;
						case o:
							if (n.swipeDown) n.swipeDown.call(M, e, direction, distance);
							break
					}
				}
			}

			function C(e) {
				D = 0;
				P.x = 0;
				P.y = 0;
				H.x = 0;
				H.y = 0;
				B.x = 0;
				B.y = 0
			}

			function k(e) {
				e.preventDefault();
				distance = x();
				direction = t();
				if (n.triggerOnTouchEnd) {
					w = p;
					if ((D == n.fingers || !v) && H.x != 0) {
						if (distance >= n.threshold) {
							N(e, w);
							C(e)
						} else {
							w = d;
							N(e, w);
							C(e)
						}
					} else {
						w = d;
						N(e, w);
						C(e)
					}
				} else if (w == h) {
					w = d;
					N(e, w);
					C(e)
				}
				O.removeEventListener(g, L, false);
				O.removeEventListener(y, k, false)
			}

			function L(e) {
				if (w == p || w == d) return;
				var r = v ? e.touches[0] : e;
				H.x = r.pageX;
				H.y = r.pageY;
				direction = t();
				if (v) {
					D = e.touches.length
				}
				w = h;
				T(e, direction);
				if (D == n.fingers || !v) {
					distance = x();
					if (n.swipeStatus) N(e, w, direction, distance);
					if (!n.triggerOnTouchEnd) {
						if (distance >= n.threshold) {
							w = p;
							N(e, w);
							C(e)
						}
					}
				} else {
					w = d;
					N(e, w);
					C(e)
				}
			}

			function A(e) {
				var t = v ? e.touches[0] : e;
				w = c;
				if (v) {
					D = e.touches.length
				}
				distance = 0;
				direction = null;
				if (D == n.fingers || !v) {
					P.x = H.x = t.pageX;
					P.y = H.y = t.pageY;
					if (n.swipeStatus) N(e, w)
				} else {
					C(e)
				}
				O.addEventListener(g, L, false);
				O.addEventListener(y, k, false)
			}
			var O = this;
			var M = e(this);
			var _ = null;
			var D = 0;
			var P = {
				x: 0,
				y: 0
			};
			var H = {
				x: 0,
				y: 0
			};
			var B = {
				x: 0,
				y: 0
			};
			try {
				this.addEventListener(m, A, false);
				this.addEventListener(b, C)
			} catch (j) {}
		})
	}
})(jQuery);
(function(e, t) {
	function n(e) {
		var t = [],
			n;
		var r = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_");
		for (var i = 0; i < r.length; i++) {
			r[i] = r[i].replace("%3D", "=");
			n = r[i].split("=");
			t.push(n[0]);
			t[n[0]] = n[1]
		}
		return t
	}

	function r(t, n) {
		t.find(".defaultimg").each(function(r) {
			v(e(this), n);
			n.height = Math.round(n.startheight * (n.width / n.startwidth));
			t.height(n.height);
			v(e(this), n);
			try {
				t.parent().find(".tp-bannershadow").css({
					width: n.width
				})
			} catch (s) {}
			var o = t.find(">ul >li:eq(" + n.act + ") .slotholder");
			var u = t.find(">ul >li:eq(" + n.next + ") .slotholder");
			w(t, n);
			u.find(".defaultimg").css({
				opacity: 0
			});
			o.find(".defaultimg").css({
				opacity: 1
			});
			E(t, n);
			var a = t.find(">ul >li:eq(" + n.next + ")");
			t.find(".tp-caption").each(function() {
				e(this).stop(true, true)
			});
			M(a, n);
			i(n, t)
		})
	}

	function i(e, t) {
		e.cd = 0;
		if (e.videoplaying != true) {
			var n = t.find(".tp-bannertimer");
			if (n.length > 0) {
				n.stop();
				n.css({
					width: "0%"
				});
				n.animate({
					width: "100%"
				}, {
					duration: e.delay - 100,
					queue: false,
					easing: "linear"
				})
			}
			clearTimeout(e.thumbtimer);
			e.thumbtimer = setTimeout(function() {
				a(t);
				d(t, e)
			}, 200)
		}
	}

	function s(e, t) {
		e.cd = 0;
		var n = t.find(".tp-bannertimer");
		if (n.length > 0) {
			n.stop(true, true);
			n.css({
				width: "0%"
			})
		}
		clearTimeout(e.thumbtimer)
	}

	function o(e, t) {
		e.cd = 0;
		S(t, e);
		var n = t.find(".tp-bannertimer");
		if (n.length > 0) {
			n.stop();
			n.css({
				width: "0%"
			});
			n.animate({
				width: "100%"
			}, {
				duration: e.delay - 100,
				queue: false,
				easing: "linear"
			})
		}
	}

	function u(n, r) {
		var i = n.parent();
		if (r.navigationType == "thumb" || r.navsecond == "both") {
			i.append('<div class="tp-bullets tp-thumbs ' + r.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')
		}
		var s = i.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
		var u = s.parent();
		u.width(r.thumbWidth * r.thumbAmount);
		u.height(r.thumbHeight);
		u.parent().width(r.thumbWidth * r.thumbAmount);
		u.parent().height(r.thumbHeight);
		n.find(">ul:first >li").each(function(e) {
			var r = n.find(">ul:first >li:eq(" + e + ")");
			if (r.data("thumb") != t) var i = r.data("thumb");
			else var i = r.find("img:first").attr("src");
			s.append('<div class="bullet thumb"><img src="' + i + '"></div>');
			var o = s.find(".bullet:first")
		});
		var l = 100;
		s.find(".bullet").each(function(t) {
			var i = e(this);
			if (t == r.slideamount - 1) i.addClass("last");
			if (t == 0) i.addClass("first");
			i.width(r.thumbWidth);
			i.height(r.thumbHeight);
			if (l > i.outerWidth(true)) l = i.outerWidth(true);
			i.click(function() {
				if (r.transition == 0 && i.index() != r.act) {
					r.next = i.index();
					o(r, n)
				}
			})
		});
		var c = l * n.find(">ul:first >li").length;
		var h = s.parent().width();
		r.thumbWidth = l;
		if (h < c) {
			e(document).mousemove(function(t) {
				e("body").data("mousex", t.pageX)
			});
			s.parent().mouseenter(function() {
				var t = e(this);
				t.addClass("over");
				var r = t.offset();
				var i = e("body").data("mousex") - r.left;
				var s = t.width();
				var o = t.find(".bullet:first").outerWidth(true);
				var u = o * n.find(">ul:first >li").length;
				var a = u - s + 15;
				var l = a / s;
				i = i - 30;
				var c = 0 - i * l;
				if (c > 0) c = 0;
				if (c < 0 - u + s) c = 0 - u + s;
				f(t, c, 200)
			});
			s.parent().mousemove(function() {
				var t = e(this);
				var r = t.offset();
				var i = e("body").data("mousex") - r.left;
				var s = t.width();
				var o = t.find(".bullet:first").outerWidth(true);
				var u = o * n.find(">ul:first >li").length;
				var a = u - s + 15;
				var l = a / s;
				i = i - 30;
				var c = 0 - i * l;
				if (c > 0) c = 0;
				if (c < 0 - u + s) c = 0 - u + s;
				f(t, c, 0)
			});
			s.parent().mouseleave(function() {
				var t = e(this);
				t.removeClass("over");
				a(n)
			})
		}
	}

	function a(e) {
		var t = e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
		var n = t.parent();
		var r = n.offset();
		var i = n.find(".bullet:first").outerWidth(true);
		var s = n.find(".bullet.selected").index() * i;
		var o = n.width();
		var i = n.find(".bullet:first").outerWidth(true);
		var u = i * e.find(">ul:first >li").length;
		var a = u - o;
		var l = a / o;
		var c = 0 - s;
		if (c > 0) c = 0;
		if (c < 0 - u + o) c = 0 - u + o;
		if (!n.hasClass("over")) {
			f(n, c, 200)
		}
	}

	function f(e, t, n) {
		e.stop();
		e.find(".tp-thumbcontainer").animate({
			left: t + "px"
		}, {
			duration: n,
			queue: false
		})
	}

	function l(t, n) {
		if (n.navigationType == "bullet" || n.navigationType == "both") {
			t.parent().append('<div class="tp-bullets simplebullets ' + n.navigationStyle + '"></div>')
		}
		var r = t.parent().find(".tp-bullets");
		t.find(">ul:first >li").each(function(e) {
			var n = t.find(">ul:first >li:eq(" + e + ") img:first").attr("src");
			r.append('<div class="bullet"></div>');
			var i = r.find(".bullet:first")
		});
		r.find(".bullet").each(function(r) {
			var i = e(this);
			if (r == n.slideamount - 1) i.addClass("last");
			if (r == 0) i.addClass("first");
			i.click(function() {
				var e = false;
				if (n.navigationArrows == "withbullet" || n.navigationArrows == "nexttobullets") {
					if (i.index() - 1 == n.act) e = true
				} else {
					if (i.index() == n.act) e = true
				}
				if (n.transition == 0 && !e) {
					if (n.navigationArrows == "withbullet" || n.navigationArrows == "nexttobullets") {
						n.next = i.index() - 1
					} else {
						n.next = i.index()
					}
					o(n, t)
				}
			})
		});
		r.append('<div class="tpclear"></div>');
		d(t, n)
	}

	function c(e, n) {
		var r = e.find(".tp-bullets");
		var i = "";
		var s = n.navigationStyle;
		if (n.navigationArrows == "none") i = "visibility:none";
		n.soloArrowStyle = "default";
		if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets") s = n.soloArrowStyle;
		e.parent().append('<div style="' + i + '" class="tp-leftarrow tparrows ' + s + '"></div>');
		e.parent().append('<div style="' + i + '" class="tp-rightarrow tparrows ' + s + '"></div>');
		e.parent().find(".tp-rightarrow").click(function() {
			if (n.transition == 0) {
				if (e.data("showus") != t && e.data("showus") != -1) n.next = e.data("showus") - 1;
				else n.next = n.next + 1;
				e.data("showus", -1);
				if (n.next >= n.slideamount) n.next = 0;
				if (n.next < 0) n.next = 0;
				if (n.act != n.next) o(n, e)
			}
		});
		e.parent().find(".tp-leftarrow").click(function() {
			if (n.transition == 0) {
				n.next = n.next - 1;
				n.leftarrowpressed = 1;
				if (n.next < 0) n.next = n.slideamount - 1;
				o(n, e)
			}
		});
		d(e, n)
	}

	function h(e, t) {
		if (t.touchenabled == "on") e.swipe({
			data: e,
			swipeRight: function() {
				if (t.transition == 0) {
					t.next = t.next - 1;
					t.leftarrowpressed = 1;
					if (t.next < 0) t.next = t.slideamount - 1;
					o(t, e)
				}
			},
			swipeLeft: function() {
				if (t.transition == 0) {
					t.next = t.next + 1;
					if (t.next == t.slideamount) t.next = 0;
					o(t, e)
				}
			},
			allowPageScroll: "auto"
		})
	}

	function p(e, t) {
		var n = e.parent().find(".tp-bullets");
		var r = e.parent().find(".tparrows");
		if (n == null) {
			e.append('<div class=".tp-bullets"></div>');
			var n = e.parent().find(".tp-bullets")
		}
		if (r == null) {
			e.append('<div class=".tparrows"></div>');
			var r = e.parent().find(".tparrows")
		}
		e.data("hidethumbs", t.hideThumbs);
		n.addClass("hidebullets");
		r.addClass("hidearrows");
		n.hover(function() {
			n.addClass("hovered");
			clearTimeout(e.data("hidethumbs"));
			n.removeClass("hidebullets");
			r.removeClass("hidearrows")
		}, function() {
			n.removeClass("hovered");
			if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hidethumbs", setTimeout(function() {
				n.addClass("hidebullets");
				r.addClass("hidearrows")
			}, t.hideThumbs))
		});
		r.hover(function() {
			n.addClass("hovered");
			clearTimeout(e.data("hidethumbs"));
			n.removeClass("hidebullets");
			r.removeClass("hidearrows")
		}, function() {
			n.removeClass("hovered")
		});
		e.on("mouseenter", function() {
			e.addClass("hovered");
			clearTimeout(e.data("hidethumbs"));
			n.removeClass("hidebullets");
			r.removeClass("hidearrows")
		});
		e.on("mouseleave", function() {
			e.removeClass("hovered");
			if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hidethumbs", setTimeout(function() {
				n.addClass("hidebullets");
				r.addClass("hidearrows")
			}, t.hideThumbs))
		})
	}

	function d(e, t) {
		var n = e.parent();
		var r = n.find(".tp-bullets");
		var i = n.find(".tp-leftarrow");
		var s = n.find(".tp-rightarrow");
		if (t.navigationType == "thumb" && t.navigationArrows == "nexttobullets") t.navigationArrows = "solo";
		if (t.navigationArrows == "nexttobullets") {
			i.prependTo(r).css({
				"float": "left"
			});
			s.insertBefore(r.find(".tpclear")).css({
				"float": "left"
			})
		}
		if (t.navigationArrows != "none" && t.navigationArrows != "nexttobullets") {
			i.css({
				position: "absolute"
			});
			s.css({
				position: "absolute"
			});
			if (t.soloArrowLeftValign == "center") i.css({
				top: "50%",
				marginTop: t.soloArrowLeftVOffset - Math.round(i.innerHeight() / 2) + "px"
			});
			if (t.soloArrowLeftValign == "bottom") i.css({
				bottom: 0 + t.soloArrowLeftVOffset + "px"
			});
			if (t.soloArrowLeftValign == "top") i.css({
				top: 0 + t.soloArrowLeftVOffset + "px"
			});
			if (t.soloArrowLeftHalign == "center") i.css({
				left: "50%",
				marginLeft: t.soloArrowLeftHOffset - Math.round(i.innerWidth() / 2) + "px"
			});
			if (t.soloArrowLeftHalign == "left") i.css({
				left: 0 + t.soloArrowLeftHOffset + "px"
			});
			if (t.soloArrowLeftHalign == "right") i.css({
				right: 0 + t.soloArrowLeftHOffset + "px"
			});
			if (t.soloArrowRightValign == "center") s.css({
				top: "50%",
				marginTop: t.soloArrowRightVOffset - Math.round(s.innerHeight() / 2) + "px"
			});
			if (t.soloArrowRightValign == "bottom") s.css({
				bottom: 0 + t.soloArrowRightVOffset + "px"
			});
			if (t.soloArrowRightValign == "top") s.css({
				top: 0 + t.soloArrowRightVOffset + "px"
			});
			if (t.soloArrowRightHalign == "center") s.css({
				left: "50%",
				marginLeft: t.soloArrowRightHOffset - Math.round(s.innerWidth() / 2) + "px"
			});
			if (t.soloArrowRightHalign == "left") s.css({
				left: 0 + t.soloArrowRightHOffset + "px"
			});
			if (t.soloArrowRightHalign == "right") s.css({
				right: 0 + t.soloArrowRightHOffset + "px"
			});
			if (i.position() != null) i.css({
				top: Math.round(parseInt(i.position().top, 0)) + "px"
			});
			if (s.position() != null) s.css({
				top: Math.round(parseInt(s.position().top, 0)) + "px"
			})
		}
		if (t.navigationArrows == "none") {
			i.css({
				visibility: "hidden"
			});
			s.css({
				visibility: "hidden"
			})
		}
		if (t.navigationVAlign == "center") r.css({
			top: "50%",
			marginTop: t.navigationVOffset - Math.round(r.innerHeight() / 2) + "px"
		});
		if (t.navigationVAlign == "bottom") r.css({
			bottom: 0 + t.navigationVOffset + "px"
		});
		if (t.navigationVAlign == "top") r.css({
			top: 0 + t.navigationVOffset + "px"
		});
		if (t.navigationHAlign == "center") r.css({
			left: "50%",
			marginLeft: t.navigationHOffset - Math.round(r.innerWidth() / 2) + "px"
		});
		if (t.navigationHAlign == "left") r.css({
			left: 0 + t.navigationHOffset + "px"
		});
		if (t.navigationHAlign == "right") r.css({
			right: 0 + t.navigationHOffset + "px"
		})
	}

	function v(n, r) {
		r.width = parseInt(r.container.width(), 0);
		r.height = parseInt(r.container.height(), 0);
		r.bw = r.width / r.startwidth;
		if (r.fullScreen == "on") {
			r.height = r.bw * r.startheight
		}
		r.bh = r.height / r.startheight;
		if (r.bh > 1) {
			r.bh = 1;
			r.bw = 1
		}
		if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
			if (n.data("orgw") != t && n.data("orgw") != 0) {
				n.width(n.data("orgw"));
				n.height(n.data("orgh"))
			}
		}
		var i = r.width / n.width();
		var s = r.height / n.height();
		r.fw = i;
		r.fh = s;
		if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
			if (n.data("orgw") == t || n.data("orgw") == 0) {
				n.data("orgw", n.width());
				n.data("orgh", n.height())
			}
		}
		if (r.fullWidth == "on" && r.fullScreen != "on") {
			var o = r.container.parent().width();
			var u = r.container.parent().height();
			var a = u / n.data("orgh");
			var f = o / n.data("orgw");
			if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
				n.width(n.width() * a);
				n.height(u)
			}
			if (n.width() < o) {
				n.width(o + 50);
				var f = n.width() / n.data("orgw");
				n.height(n.data("orgh") * f)
			}
			if (n.width() > o) {
				n.data("fxof", o / 2 - n.width() / 2);
				n.css({
					position: "absolute",
					left: n.data("fxof") + "px"
				})
			}
			if (n.height() <= u) {
				n.data("fyof", 0);
				n.data("fxof", o / 2 - n.width() / 2);
				n.css({
					position: "absolute",
					top: n.data("fyof") + "px",
					left: n.data("fxof") + "px"
				})
			}
			if (n.height() > u && n.data("fullwidthcentering") == "on") {
				n.data("fyof", u / 2 - n.height() / 2);
				n.data("fxof", o / 2 - n.width() / 2);
				n.css({
					position: "absolute",
					top: n.data("fyof") + "px",
					left: n.data("fxof") + "px"
				})
			}
		} else if (r.fullScreen == "on") {
			var o = r.container.parent().width();
			var u = e(window).height();
			var l = u / 2 - r.startheight * r.bh / 2;
			if (l < 0) u = r.startheight * r.bh;
			if (r.fullScreenOffsetContainer != t) {
				try {
					u = u - e(r.fullScreenOffsetContainer).outerHeight(true)
				} catch (c) {}
			}
			r.container.parent().height(u);
			r.container.css({
				height: "100%"
			});
			r.height = u;
			var a = u / n.data("orgh");
			var f = o / n.data("orgw");
			if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
				n.width(n.width() * a);
				n.height(u)
			}
			if (n.width() < o) {
				n.width(o + 50);
				var f = n.width() / n.data("orgw");
				n.height(n.data("orgh") * f)
			}
			if (n.width() > o) {
				n.data("fxof", o / 2 - n.width() / 2);
				n.css({
					position: "absolute",
					left: n.data("fxof") + "px"
				})
			}
			if (n.height() <= u) {
				n.data("fyof", 0);
				n.data("fxof", o / 2 - n.width() / 2);
				n.css({
					position: "absolute",
					top: n.data("fyof") + "px",
					left: n.data("fxof") + "px"
				})
			}
			if (n.height() > u && n.data("fullwidthcentering") == "on") {
				n.data("fyof", u / 2 - n.height() / 2);
				n.data("fxof", o / 2 - n.width() / 2);
				n.css({
					position: "absolute",
					top: n.data("fyof") + "px",
					left: n.data("fxof") + "px"
				})
			}
		} else {
			if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
				n.width(r.width);
				n.height(n.height() * i)
			}
			if (n.height() < r.height && n.height() != 0 && n.height() != null) {
				if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
					n.height(r.height);
					n.width(n.data("orgw") * s)
				}
			}
		}
		n.data("neww", n.width());
		n.data("newh", n.height());
		if (r.fullWidth == "on") {
			r.slotw = Math.ceil(n.width() / r.slots)
		} else {
			r.slotw = Math.ceil(r.width / r.slots)
		}
		if (r.fullSreen == "on") r.sloth = Math.ceil(e(window).height() / r.slots);
		else r.sloth = Math.ceil(r.height / r.slots)
	}

	function m(n, r) {
		n.find(".tp-caption").each(function() {
			e(this).addClass(e(this).data("transition"));
			e(this).addClass("start")
		});
		n.find(">ul:first").css({
			overflow: "hidden",
			width: "100%",
			height: "100%",
			maxHeight: n.parent().css("maxHeight")
		});
		n.find(">ul:first >li").each(function(n) {
			var r = e(this);
			r.css({
				width: "100%",
				height: "100%",
				overflow: "hidden"
			});
			if (r.data("link") != t) {
				var i = r.data("link");
				var s = "_self";
				var o = 2;
				if (r.data("slideindex") == "back") o = 0;
				var u = r.data("linktoslide");
				if (r.data("target") != t) s = r.data("target");
				if (i == "slide") {
					r.append('<div class="tp-caption sft slidelink" style="z-index:' + o + ';" data-x="0" data-y="0" data-linktoslide="' + u + '" data-start="0"><a><div></div></a></div>')
				} else {
					u = "no";
					r.append('<div class="tp-caption sft slidelink" style="z-index:' + o + ';" data-x="0" data-y="0" data-linktoslide="' + u + '" data-start="0"><a target="' + s + '" href="' + i + '"><div></div></a></div>')
				}
			}
		});
		n.parent().css({
			overflow: "visible"
		});
		n.find(">ul:first >li >img").each(function(n) {
			var i = e(this);
			i.addClass("defaultimg");
			if (i.data("lazyload") != t && i.data("lazydone") != 1) {} else {
				v(i, r);
				v(i, r)
			}
			i.wrap('<div class="slotholder"></div>');
			i.css({
				opacity: 0
			});
			i.data("li-id", n)
		})
	}

	function g(e, n, r) {
		var i = e;
		var s = i.find("img");
		v(s, n);
		var o = s.attr("src");
		var u = s.css("background-color");
		var a = s.data("neww");
		var f = s.data("newh");
		var l = s.data("fxof");
		if (l == t) l = 0;
		var c = s.data("fyof");
		if (s.data("fullwidthcentering") != "on" || c == t) c = 0;
		var h = 0;
		if (!r) var h = 0 - n.slotw;
		for (var p = 0; p < n.slots; p++) i.append('<div class="slot" style="position:absolute;top:' + (0 + c) + "px;left:" + (l + p * n.slotw) + "px;overflow:hidden;width:" + n.slotw + "px;height:" + f + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + h + "px;width:" + n.slotw + "px;height:" + f + 'px;overflow:hidden;"><img style="background-color:' + u + ";position:absolute;top:0px;left:" + (0 - p * n.slotw) + "px;width:" + a + "px;height:" + f + 'px" src="' + o + '"></div></div>')
	}

	function y(e, n, r) {
		var i = e;
		var s = i.find("img");
		v(s, n);
		var o = s.attr("src");
		var u = s.css("background-color");
		var a = s.data("neww");
		var f = s.data("newh");
		var l = s.data("fxof");
		if (l == t) l = 0;
		var c = s.data("fyof");
		if (s.data("fullwidthcentering") != "on" || c == t) c = 0;
		var h = 0;
		if (!r) var h = 0 - n.sloth;
		for (var p = 0; p < n.slots + 2; p++) i.append('<div class="slot" style="position:absolute;' + "top:" + (c + p * n.sloth) + "px;" + "left:" + l + "px;" + "overflow:hidden;" + "width:" + a + "px;" + "height:" + n.sloth + 'px"' + '><div class="slotslide" style="position:absolute;' + "top:" + h + "px;" + "left:0px;width:" + a + "px;" + "height:" + n.sloth + "px;" + 'overflow:hidden;"><img style="position:absolute;' + "background-color:" + u + ";" + "top:" + (0 - p * n.sloth) + "px;" + "left:0px;width:" + a + "px;" + "height:" + f + 'px" src="' + o + '"></div></div>')
	}

	function b(e, n, r) {
		var i = e;
		var s = i.find("img");
		v(s, n);
		var o = s.attr("src");
		var u = s.css("background-color");
		var a = s.data("neww");
		var f = s.data("newh");
		var l = s.data("fxof");
		if (l == t) l = 0;
		var c = s.data("fyof");
		if (s.data("fullwidthcentering") != "on" || c == t) c = 0;
		var h = 0;
		var p = 0;
		if (n.sloth > n.slotw) p = n.sloth;
		else p = n.slotw;
		if (!r) {
			var h = 0 - p
		}
		n.slotw = p;
		n.sloth = p;
		var d = 0;
		var m = 0;
		for (var g = 0; g < n.slots; g++) {
			m = 0;
			for (var y = 0; y < n.slots; y++) {
				i.append('<div class="slot" ' + 'style="position:absolute;' + "top:" + (c + m) + "px;" + "left:" + (l + d) + "px;" + "width:" + p + "px;" + "height:" + p + "px;" + 'overflow:hidden;">' + '<div class="slotslide" data-x="' + d + '" data-y="' + m + '" ' + 'style="position:absolute;' + "top:" + 0 + "px;" + "left:" + 0 + "px;" + "width:" + p + "px;" + "height:" + p + "px;" + 'overflow:hidden;">' + '<img style="position:absolute;' + "top:" + (0 - m) + "px;" + "left:" + (0 - d) + "px;" + "width:" + a + "px;" + "height:" + f + "px" + "background-color:" + u + ';"' + 'src="' + o + '"></div></div>');
				m = m + p
			}
			d = d + p
		}
	}

	function w(n, r, i) {
		if (i == t) i == 80;
		setTimeout(function() {
			n.find(".slotholder .slot").each(function() {
				clearTimeout(e(this).data("tout"));
				e(this).remove()
			});
			r.transition = 0
		}, i)
	}

	function E(e, t) {
		var n = e.find(">li:eq(" + t.act + ")");
		var r = e.find(">li:eq(" + t.next + ")");
		var i = r.find(".tp-caption");
		if (i.find("iframe") == 0) {
			if (i.hasClass("hcenter")) i.css({
				height: t.height + "px",
				top: "0px",
				left: t.width / 2 - i.outerWidth() / 2 + "px"
			});
			else if (i.hasClass("vcenter")) i.css({
				width: t.width + "px",
				left: "0px",
				top: t.height / 2 - i.outerHeight() / 2 + "px"
			})
		}
	}

	function S(e, n) {
		try {
			var r = e.find(">ul:first-child >li:eq(" + n.act + ")")
		} catch (o) {
			var r = e.find(">ul:first-child >li:eq(1)")
		}
		n.lastslide = n.act;
		var u = e.find(">ul:first-child >li:eq(" + n.next + ")");
		var a = u.find(".defaultimg");
		if (a.data("lazyload") != t && a.data("lazydone") != 1) {
			a.attr("src", u.find(".defaultimg").data("lazyload")), a.data("lazydone", 1);
			a.data("orgw", 0);
			e.find(".tp-loader").fadeIn(300);
			setTimeout(function() {
				s(n, e)
			}, 180);
			u.waitForImages(function() {
				i(n, e);
				v(a, n);
				d(e, n);
				v(a, n);
				x(e, n);
				e.find(".tp-loader").fadeOut(300)
			})
		} else {
			x(e, n)
		}
	}

	function x(n, r) {
		n.trigger("revolution.slide.onbeforeswap");
		r.transition = 1;
		r.videoplaying = false;
		try {
			var i = n.find(">ul:first-child >li:eq(" + r.act + ")")
		} catch (s) {
			var i = n.find(">ul:first-child >li:eq(1)")
		}
		r.lastslide = r.act;
		var o = n.find(">ul:first-child >li:eq(" + r.next + ")");
		var u = i.find(".slotholder");
		var f = o.find(".slotholder");
		i.css({
			visibility: "visible"
		});
		o.css({
			visibility: "visible"
		});
		if (r.ie) {
			if (p == "boxfade") p = "boxslide";
			if (p == "slotfade-vertical") p = "slotzoom-vertical";
			if (p == "slotfade-horizontal") p = "slotzoom-horizontal"
		}
		if (o.data("delay") != t) {
			r.cd = 0;
			r.delay = o.data("delay")
		} else {
			r.delay = r.origcd
		}
		i.css({
			left: "0px",
			top: "0px"
		});
		o.css({
			left: "0px",
			top: "0px"
		});
		if (o.data("differentissplayed") == "prepared") {
			o.data("differentissplayed", "done");
			o.data("transition", o.data("savedtransition"));
			o.data("slotamount", o.data("savedslotamount"));
			o.data("masterspeed", o.data("savedmasterspeed"))
		}
		if (o.data("fstransition") != t && o.data("differentissplayed") != "done") {
			o.data("savedtransition", o.data("transition"));
			o.data("savedslotamount", o.data("slotamount"));
			o.data("savedmasterspeed", o.data("masterspeed"));
			o.data("transition", o.data("fstransition"));
			o.data("slotamount", o.data("fsslotamount"));
			o.data("masterspeed", o.data("fsmasterspeed"));
			o.data("differentissplayed", "prepared")
		}
		var l = 0;
		var c = o.data("transition").split(",");
		var h = o.data("nexttransid");
		if (h == t) {
			h = 0;
			o.data("nexttransid", h)
		} else {
			h = h + 1;
			if (h == c.length) h = 0;
			o.data("nexttransid", h)
		}
		var p = c[h];
		if (p == "boxslide") l = 0;
		else if (p == "boxfade") l = 1;
		else if (p == "slotslide-horizontal") l = 2;
		else if (p == "slotslide-vertical") l = 3;
		else if (p == "curtain-1") l = 4;
		else if (p == "curtain-2") l = 5;
		else if (p == "curtain-3") l = 6;
		else if (p == "slotzoom-horizontal") l = 7;
		else if (p == "slotzoom-vertical") l = 8;
		else if (p == "slotfade-horizontal") l = 9;
		else if (p == "slotfade-vertical") l = 10;
		else if (p == "fade") l = 11;
		else if (p == "slideleft") l = 12;
		else if (p == "slideup") l = 13;
		else if (p == "slidedown") l = 14;
		else if (p == "slideright") l = 15;
		else if (p == "papercut") l = 16;
		else if (p == "3dcurtain-horizontal") l = 17;
		else if (p == "3dcurtain-vertical") l = 18;
		else if (p == "cubic" || p == "cube") l = 19;
		else if (p == "flyin") l = 20;
		else if (p == "turnoff") l = 21;
		else {
			l = Math.round(Math.random() * 21);
			o.data("slotamount", Math.round(Math.random() * 12 + 4))
		}
		if (p == "random-static") {
			l = Math.round(Math.random() * 16);
			if (l > 15) l = 15;
			if (l < 0) l = 0
		}
		if (p == "random-premium") {
			l = Math.round(Math.random() * 6 + 16);
			if (l > 21) l = 21;
			if (l < 16) l = 16
		}
		var d = -1;
		if (r.leftarrowpressed == 1 || r.act > r.next) d = 1;
		if (p == "slidehorizontal") {
			l = 12;
			if (r.leftarrowpressed == 1) l = 15
		}
		if (p == "slidevertical") {
			l = 13;
			if (r.leftarrowpressed == 1) l = 14
		}
		r.leftarrowpressed = 0;
		if (l > 21) l = 21;
		if (l < 0) l = 0;
		if ((r.ie || r.ie9) && l > 18) {
			l = Math.round(Math.random() * 16);
			o.data("slotamount", Math.round(Math.random() * 12 + 4))
		}
		if (r.ie && (l == 17 || l == 16 || l == 2 || l == 3 || l == 9 || l == 10)) l = Math.round(Math.random() * 3 + 12);
		if (r.ie9 && l == 3) l = 4;
		var v = 300;
		if (o.data("masterspeed") != t && o.data("masterspeed") > 99 && o.data("masterspeed") < 4001) v = o.data("masterspeed");
		n.parent().find(".bullet").each(function() {
			var t = e(this);
			t.removeClass("selected");
			if (r.navigationArrows == "withbullet" || r.navigationArrows == "nexttobullets") {
				if (t.index() - 1 == r.next) t.addClass("selected")
			} else {
				if (t.index() == r.next) t.addClass("selected")
			}
		});
		n.find(">li").each(function() {
			var t = e(this);
			if (t.index != r.act && t.index != r.next) t.css({
				"z-index": 16
			})
		});
		i.css({
			"z-index": 18
		});
		o.css({
			"z-index": 20
		});
		o.css({
			opacity: 0
		});
		if (i.index() != o.index()) {
			D(i, r)
		}
		M(o, r);
		if (o.data("slotamount") == t || o.data("slotamount") < 1) {
			r.slots = Math.round(Math.random() * 12 + 4);
			if (p == "boxslide") r.slots = Math.round(Math.random() * 6 + 3)
		} else {
			r.slots = o.data("slotamount")
		}
		if (o.data("rotate") == t) r.rotate = 0;
		else if (o.data("rotate") == 999) r.rotate = Math.round(Math.random() * 360);
		else r.rotate = o.data("rotate");
		if (!e.support.transition || r.ie || r.ie9) r.rotate = 0;
		if (r.firststart == 1) {
			i.css({
				opacity: 0
			});
			r.firststart = 0
		}
		if (l == 0) {
			v = v + 100;
			if (r.slots > 10) r.slots = 10;
			o.css({
				opacity: 1
			});
			b(u, r, true);
			b(f, r, false);
			f.find(".defaultimg").css({
				opacity: 0
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				if (r.ie9) s.transition({
					top: 0 - r.sloth,
					left: 0 - r.slotw
				}, 0);
				else s.transition({
					top: 0 - r.sloth,
					left: 0 - r.slotw,
					rotate: r.rotate
				}, 0);
				setTimeout(function() {
					s.transition({
						top: 0,
						left: 0,
						scale: 1,
						rotate: 0
					}, v * 1.5, function() {
						if (t == r.slots * r.slots - 1) {
							w(n, r);
							f.find(".defaultimg").css({
								opacity: 1
							});
							if (o.index() != i.index()) u.find(".defaultimg").css({
								opacity: 0
							});
							r.act = r.next;
							a(n)
						}
					})
				}, t * 15)
			})
		}
		if (l == 1) {
			if (r.slots > 5) r.slots = 5;
			o.css({
				opacity: 1
			});
			b(f, r, false);
			f.find(".defaultimg").css({
				opacity: 0
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				s.css({
					opacity: 0
				});
				s.find("img").css({
					opacity: 0
				});
				if (r.ie9) s.find("img").transition({
					top: Math.random() * r.slotw - r.slotw + "px",
					left: Math.random() * r.slotw - r.slotw + "px"
				}, 0);
				else s.find("img").transition({
					top: Math.random() * r.slotw - r.slotw + "px",
					left: Math.random() * r.slotw - r.slotw + "px",
					rotate: r.rotate
				}, 0);
				var l = Math.random() * 1e3 + (v + 200);
				if (t == r.slots * r.slots - 1) l = 1500;
				s.find("img").transition({
					opacity: 1,
					top: 0 - s.data("y") + "px",
					left: 0 - s.data("x") + "px",
					rotate: 0
				}, l);
				s.transition({
					opacity: 1
				}, l, function() {
					if (t == r.slots * r.slots - 1) {
						w(n, r);
						f.find(".defaultimg").css({
							opacity: 1
						});
						if (o.index() != i.index()) u.find(".defaultimg").css({
							opacity: 0
						});
						r.act = r.next;
						a(n)
					}
				})
			})
		}
		if (l == 2) {
			v = v + 200;
			o.css({
				opacity: 1
			});
			g(u, r, true);
			g(f, r, false);
			f.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".slotslide").each(function() {
				var t = e(this);
				t.transit({
					left: r.slotw + "px",
					rotate: 0 - r.rotate
				}, v, function() {
					w(n, r);
					f.find(".defaultimg").css({
						opacity: 1
					});
					if (o.index() != i.index()) u.find(".defaultimg").css({
						opacity: 0
					});
					r.act = r.next;
					a(n)
				})
			});
			f.find(".slotslide").each(function() {
				var t = e(this);
				if (r.ie9) t.transit({
					left: 0 - r.slotw + "px"
				}, 0);
				else t.transit({
					left: 0 - r.slotw + "px",
					rotate: r.rotate
				}, 0);
				t.transit({
					left: "0px",
					rotate: 0
				}, v, function() {
					w(n, r);
					f.find(".defaultimg").css({
						opacity: 1
					});
					if (o.index() != i.index()) u.find(".defaultimg").css({
						opacity: 0
					});
					if (r.ie) u.find(".defaultimg").css({
						opacity: 1
					});
					r.act = r.next;
					a(n)
				})
			})
		}
		if (l == 3) {
			v = v + 200;
			o.css({
				opacity: 1
			});
			y(u, r, true);
			y(f, r, false);
			f.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".slotslide").each(function() {
				var t = e(this);
				t.transit({
					top: r.sloth + "px",
					rotate: r.rotate
				}, v, function() {
					w(n, r);
					f.find(".defaultimg").css({
						opacity: 1
					});
					if (o.index() != i.index()) u.find(".defaultimg").css({
						opacity: 0
					});
					r.act = r.next;
					a(n)
				})
			});
			f.find(".slotslide").each(function() {
				var t = e(this);
				if (r.ie9) t.transit({
					top: 0 - r.sloth + "px"
				}, 0);
				else t.transit({
					top: 0 - r.sloth + "px",
					rotate: r.rotate
				}, 0);
				t.transit({
					top: "0px",
					rotate: 0
				}, v, function() {
					w(n, r);
					f.find(".defaultimg").css({
						opacity: 1
					});
					if (o.index() != i.index()) u.find(".defaultimg").css({
						opacity: 0
					});
					r.act = r.next;
					a(n)
				})
			})
		}
		if (l == 4) {
			o.css({
				opacity: 1
			});
			g(u, r, true);
			g(f, r, true);
			f.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".slotslide").each(function(t) {
				var n = e(this);
				n.transit({
					top: 0 + r.height + "px",
					opacity: 1,
					rotate: r.rotate
				}, v + t * (70 - r.slots))
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				if (r.ie9) s.transition({
					top: 0 - r.height + "px",
					opacity: 0
				}, 0);
				else s.transition({
					top: 0 - r.height + "px",
					opacity: 0,
					rotate: r.rotate
				}, 0);
				s.transition({
					top: "0px",
					opacity: 1,
					rotate: 0
				}, v + t * (70 - r.slots), function() {
					if (t == r.slots - 1) {
						w(n, r);
						f.find(".defaultimg").css({
							opacity: 1
						});
						if (o.index() != i.index()) u.find(".defaultimg").css({
							opacity: 0
						});
						r.act = r.next;
						a(n)
					}
				})
			})
		}
		if (l == 5) {
			o.css({
				opacity: 1
			});
			g(u, r, true);
			g(f, r, true);
			f.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".slotslide").each(function(t) {
				var n = e(this);
				n.transition({
					top: 0 + r.height + "px",
					opacity: 1,
					rotate: r.rotate
				}, v + (r.slots - t) * (70 - r.slots))
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				if (r.ie9) s.transition({
					top: 0 - r.height + "px",
					opacity: 0
				}, 0);
				else s.transition({
					top: 0 - r.height + "px",
					opacity: 0,
					rotate: r.rotate
				}, 0);
				s.transition({
					top: "0px",
					opacity: 1,
					rotate: 0
				}, v + (r.slots - t) * (70 - r.slots), function() {
					if (t == 0) {
						w(n, r);
						f.find(".defaultimg").css({
							opacity: 1
						});
						if (o.index() != i.index()) u.find(".defaultimg").css({
							opacity: 0
						});
						r.act = r.next;
						a(n)
					}
				})
			})
		}
		if (l == 6) {
			o.css({
				opacity: 1
			});
			if (r.slots < 2) r.slots = 2;
			g(u, r, true);
			g(f, r, true);
			f.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".slotslide").each(function(t) {
				var n = e(this);
				if (t < r.slots / 2) var i = (t + 2) * 60;
				else var i = (2 + r.slots - t) * 60;
				n.transition({
					top: 0 + r.height + "px",
					opacity: 1
				}, v + i)
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				if (r.ie9) s.transition({
					top: 0 - r.height + "px",
					opacity: 0
				}, 0);
				else s.transition({
					top: 0 - r.height + "px",
					opacity: 0,
					rotate: r.rotate
				}, 0);
				if (t < r.slots / 2) var l = (t + 2) * 60;
				else var l = (2 + r.slots - t) * 60;
				s.transition({
					top: "0px",
					opacity: 1,
					rotate: 0
				}, v + l, function() {
					if (t == Math.round(r.slots / 2)) {
						w(n, r);
						f.find(".defaultimg").css({
							opacity: 1
						});
						if (o.index() != i.index()) u.find(".defaultimg").css({
							opacity: 0
						});
						r.act = r.next;
						a(n)
					}
				})
			})
		}
		if (l == 7) {
			v = v * 3;
			o.css({
				opacity: 1
			});
			g(u, r, true);
			g(f, r, true);
			f.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".slotslide").each(function() {
				var t = e(this).find("img");
				t.transition({
					left: 0 - r.slotw / 2 + "px",
					top: 0 - r.height / 2 + "px",
					width: r.slotw * 2 + "px",
					height: r.height * 2 + "px",
					opacity: 0,
					rotate: r.rotate
				}, v, function() {
					w(n, r);
					f.find(".defaultimg").css({
						opacity: 1
					});
					if (o.index() != i.index()) u.find(".defaultimg").css({
						opacity: 0
					});
					r.act = r.next;
					a(n)
				})
			});
			/						/;
			f.find(".slotslide").each(function(t) {
				var s = e(this).find("img");
				if (r.ie9) s.transition({
					left: 0 + "px",
					top: 0 + "px",
					opacity: 0
				}, 0);
				else s.transition({
					left: 0 + "px",
					top: 0 + "px",
					opacity: 0,
					rotate: r.rotate
				}, 0);
				s.transition({
					left: 0 - t * r.slotw + "px",
					top: 0 + "px",
					width: f.find(".defaultimg").data("neww") + "px",
					height: f.find(".defaultimg").data("newh") + "px",
					opacity: 1,
					rotate: 0
				}, v, function() {
					w(n, r);
					f.find(".defaultimg").css({
						opacity: 1
					});
					if (o.index() != i.index()) u.find(".defaultimg").css({
						opacity: 0
					});
					r.act = r.next;
					a(n)
				})
			})
		}
		if (l == 8) {
			v = v * 3;
			o.css({
				opacity: 1
			});
			y(u, r, true);
			y(f, r, true);
			f.find(".defaultimg").css({
				opacity: 0
			});
			u.find(".slotslide").each(function() {
				var t = e(this).find("img");
				t.transition({
					left: 0 - r.width / 2 + "px",
					top: 0 - r.sloth / 2 + "px",
					width: r.width * 2 + "px",
					height: r.sloth * 2 + "px",
					opacity: 0,
					rotate: r.rotate
				}, v, function() {
					w(n, r);
					f.find(".defaultimg").css({
						opacity: 1
					});
					if (o.index() != i.index()) u.find(".defaultimg").css({
						opacity: 0
					});
					r.act = r.next;
					a(n)
				})
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this).find("img");
				if (r.ie9) s.transition({
					left: 0 + "px",
					top: 0 + "px",
					opacity: 0
				}, 0);
				else s.transition({
					left: 0 + "px",
					top: 0 + "px",
					opacity: 0,
					rotate: r.rotate
				}, 0);
				s.transition({
					left: 0 + "px",
					top: 0 - t * r.sloth + "px",
					width: f.find(".defaultimg").data("neww") + "px",
					height: f.find(".defaultimg").data("newh") + "px",
					opacity: 1,
					rotate: 0
				}, v, function() {
					w(n, r);
					f.find(".defaultimg").css({
						opacity: 1
					});
					if (o.index() != i.index()) u.find(".defaultimg").css({
						opacity: 0
					});
					r.act = r.next;
					a(n)
				})
			})
		}
		if (l == 9) {
			o.css({
				opacity: 1
			});
			r.slots = r.width / 20;
			g(f, r, true);
			f.find(".defaultimg").css({
				opacity: 0
			});
			var m = 0;
			f.find(".slotslide").each(function(t) {
				var n = e(this);
				m++;
				n.transition({
					opacity: 0,
					x: 0,
					y: 0
				}, 0);
				n.data("tout", setTimeout(function() {
					n.transition({
						x: 0,
						y: 0,
						opacity: 1
					}, v)
				}, t * 4))
			});
			setTimeout(function() {
				w(n, r);
				f.find(".defaultimg").css({
					opacity: 1
				});
				if (o.index() != i.index()) u.find(".defaultimg").css({
					opacity: 0
				});
				if (r.ie) u.find(".defaultimg").css({
					opacity: 1
				});
				r.act = r.next;
				a(n)
			}, v + m * 4)
		}
		if (l == 10) {
			o.css({
				opacity: 1
			});
			r.slots = r.height / 20;
			y(f, r, true);
			f.find(".defaultimg").css({
				opacity: 0
			});
			var m = 0;
			f.find(".slotslide").each(function(t) {
				var n = e(this);
				m++;
				n.transition({
					opacity: 0,
					x: 0,
					y: 0
				}, 0);
				n.data("tout", setTimeout(function() {
					n.transition({
						x: 0,
						y: 0,
						opacity: 1
					}, v)
				}, t * 4))
			});
			setTimeout(function() {
				w(n, r);
				f.find(".defaultimg").css({
					opacity: 1
				});
				if (o.index() != i.index()) u.find(".defaultimg").css({
					opacity: 0
				});
				if (r.ie) u.find(".defaultimg").css({
					opacity: 1
				});
				r.act = r.next;
				a(n)
			}, v + m * 4)
		}
		if (l == 11) {
			o.css({
				opacity: 1
			});
			r.slots = 1;
			g(f, r, true);
			f.find(".defaultimg").css({
				opacity: 0,
				position: "relative"
			});
			var m = 0;
			f.find(".slotslide").each(function(t) {
				var n = e(this);
				m++;
				if (r.ie9 || r.ie) {
					if (r.ie) o.css({
						opacity: "0"
					});
					n.css({
						opacity: 0
					})
				} else n.transition({
					opacity: 0,
					rotate: r.rotate
				}, 0);
				setTimeout(function() {
					if (r.ie9 || r.ie) {
						if (r.ie) o.animate({
							opacity: 1
						}, {
							duration: v
						});
						else n.transition({
							opacity: 1
						}, v)
					} else {
						n.transition({
							opacity: 1,
							rotate: 0
						}, v)
					}
				}, 10)
			});
			setTimeout(function() {
				w(n, r);
				f.find(".defaultimg").css({
					opacity: 1
				});
				if (o.index() != i.index()) u.find(".defaultimg").css({
					opacity: 0
				});
				if (r.ie) u.find(".defaultimg").css({
					opacity: 1
				});
				r.act = r.next;
				a(n)
			}, v + 15)
		}
		if (l == 12 || l == 13 || l == 14 || l == 15) {
			v = v * 3;
			o.css({
				opacity: 1
			});
			r.slots = 1;
			g(f, r, true);
			g(u, r, true);
			u.find(".defaultimg").css({
				opacity: 0
			});
			f.find(".defaultimg").css({
				opacity: 0
			});
			var E = r.width;
			var S = r.height;
			var x = f.find(".slotslide");
			if (r.fullWidth == "on" || r.fullSreen == "on") {
				E = x.width();
				S = x.height()
			}
			if (l == 12)
				if (r.ie9) {
					x.transition({
						left: E + "px"
					}, 0)
				} else {
					x.transition({
						left: E + "px",
						rotate: r.rotate
					}, 0)
				}
			else if (l == 15)
				if (r.ie9) x.transition({
					left: 0 - E + "px"
				}, 0);
				else x.transition({
					left: 0 - E + "px",
					rotate: r.rotate
				}, 0);
			else if (l == 13)
				if (r.ie9) x.transition({
					top: S + "px"
				}, 0);
				else x.transition({
					top: S + "px",
					rotate: r.rotate
				}, 0);
			else if (l == 14)
				if (r.ie9) x.transition({
					top: 0 - S + "px"
				}, 0);
				else x.transition({
					top: 0 - S + "px",
					rotate: r.rotate
				}, 0);
			x.transition({
				left: "0px",
				top: "0px",
				opacity: 1,
				rotate: 0
			}, v, function() {
				w(n, r, 0);
				if (o.index() != i.index()) u.find(".defaultimg").css({
					opacity: 0
				});
				f.find(".defaultimg").css({
					opacity: 1
				});
				r.act = r.next;
				a(n)
			});
			var T = u.find(".slotslide");
			if (l == 12) T.transition({
				left: 0 - E + "px",
				opacity: 1,
				rotate: 0
			}, v);
			else if (l == 15) T.transition({
				left: E + "px",
				opacity: 1,
				rotate: 0
			}, v);
			else if (l == 13) T.transition({
				top: 0 - S + "px",
				opacity: 1,
				rotate: 0
			}, v);
			else if (l == 14) T.transition({
				top: S + "px",
				opacity: 1,
				rotate: 0
			}, v)
		}
		if (l == 16) {
			i.css({
				position: "absolute",
				"z-index": 20
			});
			o.css({
				position: "absolute",
				"z-index": 15
			});
			i.wrapInner('<div class="tp-half-one"></div>');
			i.find(".tp-half-one").clone(true).appendTo(i).addClass("tp-half-two");
			i.find(".tp-half-two").removeClass("tp-half-one");
			i.find(".tp-half-two").wrapInner('<div class="tp-offset"></div>');
			var E = r.width;
			var S = r.height;
			if (r.fullWidth == "on" || r.fullSreen == "on") {
				E = r.container.parent().width();
				S = r.container.parent().height()
			}
			var N = i.find(".defaultimg");
			if (N.length > 0 && N.data("fullwidthcentering") == "on") {
				var C = S / 2;
				var k = N.position().top
			} else {
				var C = S / 2;
				var k = 0
			}
			i.find(".tp-half-one").css({
				width: E + "px",
				height: k + C + "px",
				overflow: "hidden",
				position: "absolute",
				top: "0px",
				left: "0px"
			});
			i.find(".tp-half-two").css({
				width: E + "px",
				height: k + C + "px",
				overflow: "hidden",
				position: "absolute",
				top: k + C + "px",
				left: "0px"
			});
			i.find(".tp-half-two .tp-offset").css({
				position: "absolute",
				top: 0 - C - k + "px",
				left: "0px"
			});
			if (!e.support.transition) {
				i.find(".tp-half-one").animate({
					opacity: 0,
					top: 0 - S / 2 + "px"
				}, {
					duration: 500,
					queue: false
				});
				i.find(".tp-half-two").animate({
					opacity: 0,
					top: S + "px"
				}, {
					duration: 500,
					queue: false
				})
			} else {
				var L = Math.round(Math.random() * 40 - 20);
				var A = Math.round(Math.random() * 40 - 20);
				var O = Math.random() * 1 + 1;
				var _ = Math.random() * 1 + 1;
				i.find(".tp-half-one").transition({
					opacity: 1,
					scale: O,
					rotate: L,
					y: 0 - S / 1.4 + "px"
				}, 800, "in");
				i.find(".tp-half-two").transition({
					opacity: 1,
					scale: _,
					rotate: A,
					y: 0 + S / 1.4 + "px"
				}, 800, "in");
				if (i.html() != null) o.transition({
					scale: .8,
					x: r.width * .1,
					y: S * .1,
					rotate: L
				}, 0).transition({
					rotate: 0,
					scale: 1,
					x: 0,
					y: 0
				}, 600, "snap")
			}
			f.find(".defaultimg").css({
				opacity: 1
			});
			setTimeout(function() {
				i.css({
					position: "absolute",
					"z-index": 18
				});
				o.css({
					position: "absolute",
					"z-index": 20
				});
				f.find(".defaultimg").css({
					opacity: 1
				});
				u.find(".defaultimg").css({
					opacity: 0
				});
				if (i.find(".tp-half-one").length > 0) {
					i.find(".tp-half-one >img, .tp-half-one >div").unwrap()
				}
				i.find(".tp-half-two").remove();
				r.transition = 0;
				r.act = r.next
			}, 800);
			o.css({
				opacity: 1
			})
		}
		if (l == 17) {
			v = v + 100;
			if (r.slots > 10) r.slots = 10;
			o.css({
				opacity: 1
			});
			y(u, r, true);
			y(f, r, false);
			f.find(".defaultimg").css({
				opacity: 0
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				s.transition({
					opacity: 0,
					rotateY: 350,
					rotateX: 40,
					perspective: "1400px"
				}, 0);
				setTimeout(function() {
					s.transition({
						opacity: 1,
						top: 0,
						left: 0,
						scale: 1,
						perspective: "150px",
						rotate: 0,
						rotateY: 0,
						rotateX: 0
					}, v * 2, function() {
						if (t == r.slots - 1) {
							w(n, r);
							f.find(".defaultimg").css({
								opacity: 1
							});
							if (o.index() != i.index()) u.find(".defaultimg").css({
								opacity: 0
							});
							r.act = r.next;
							a(n)
						}
					})
				}, t * 100)
			})
		}
		if (l == 18) {
			v = v + 100;
			if (r.slots > 10) r.slots = 10;
			o.css({
				opacity: 1
			});
			g(u, r, true);
			g(f, r, false);
			f.find(".defaultimg").css({
				opacity: 0
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				s.transition({
					rotateX: 10,
					rotateY: 310,
					perspective: "1400px",
					rotate: 0,
					opacity: 0
				}, 0);
				setTimeout(function() {
					s.transition({
						top: 0,
						left: 0,
						scale: 1,
						perspective: "150px",
						rotate: 0,
						rotateY: 0,
						rotateX: 0,
						opacity: 1
					}, v * 2, function() {
						if (t == r.slots - 1) {
							w(n, r);
							f.find(".defaultimg").css({
								opacity: 1
							});
							if (o.index() != i.index()) u.find(".defaultimg").css({
								opacity: 0
							});
							r.act = r.next;
							a(n)
						}
					})
				}, t * 100)
			})
		}
		if (l == 19) {
			v = v + 100;
			if (r.slots > 10) r.slots = 10;
			o.css({
				opacity: 1
			});
			g(u, r, true);
			g(f, r, false);
			f.find(".defaultimg").css({
				opacity: 0
			});
			var P = o.css("z-index");
			var H = i.css("z-index");
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				s.parent().css({
					overflow: "visible"
				});
				s.css({
					background: "#333"
				});
				if (d == 1) s.transition({
					opacity: 0,
					left: 0,
					top: r.height / 2,
					rotate3d: "1, 0, 0, -90deg "
				}, 0);
				else s.transition({
					opacity: 0,
					left: 0,
					top: 0 - r.height / 2,
					rotate3d: "1, 0, 0, 90deg "
				}, 0);
				setTimeout(function() {
					s.transition({
						opacity: 1,
						top: 0,
						perspective: r.height * 2,
						rotate3d: " 1, 0, 0, 0deg "
					}, v * 2, function() {
						if (t == r.slots - 1) {
							w(n, r);
							f.find(".defaultimg").css({
								opacity: 1
							});
							if (o.index() != i.index()) u.find(".defaultimg").css({
								opacity: 0
							});
							r.act = r.next;
							a(n)
						}
					})
				}, t * 150)
			});
			u.find(".slotslide").each(function(t) {
				var n = e(this);
				n.parent().css({
					overflow: "visible"
				});
				n.css({
					background: "#333"
				});
				n.transition({
					top: 0,
					rotate3d: "1, 0, 0, 0deg"
				}, 0);
				u.find(".defaultimg").css({
					opacity: 0
				});
				setTimeout(function() {
					if (d == 1) n.transition({
						opacity: .6,
						left: 0,
						perspective: r.height * 2,
						top: 0 - r.height / 2,
						rotate3d: "1, 0, 0, 90deg"
					}, v * 2, function() {});
					else n.transition({
						opacity: .6,
						left: 0,
						perspective: r.height * 2,
						top: 0 + r.height / 2,
						rotate3d: "1, 0, 0, -90deg"
					}, v * 2, function() {})
				}, t * 150)
			})
		}
		if (l == 20) {
			v = v + 100;
			if (r.slots > 10) r.slots = 10;
			o.css({
				opacity: 1
			});
			y(u, r, true);
			y(f, r, false);
			f.find(".defaultimg").css({
				opacity: 0
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				s.parent().css({
					overflow: "visible"
				});
				if (d == 1) s.transition({
					scale: .8,
					top: 0,
					left: 0 - r.width,
					rotate3d: "2, 5, 0, 110deg"
				}, 0);
				else s.transition({
					scale: .8,
					top: 0,
					left: 0 + r.width,
					rotate3d: "2, 5, 0, -110deg"
				}, 0);
				setTimeout(function() {
					s.transition({
						scale: .8,
						left: 0,
						perspective: r.width,
						rotate3d: "1, 5, 0, 0deg"
					}, v * 2, "ease").transition({
						scale: 1
					}, 200, "out", function() {
						if (t == r.slots - 1) {
							w(n, r);
							f.find(".defaultimg").css({
								opacity: 1
							});
							if (o.index() != i.index()) u.find(".defaultimg").css({
								opacity: 0
							});
							r.act = r.next;
							a(n)
						}
					})
				}, t * 100)
			});
			u.find(".slotslide").each(function(t) {
				var n = e(this);
				n.transition({
					scale: .5,
					left: 0,
					rotate3d: "1, 5, 0, 5deg"
				}, 300, "in-out");
				u.find(".defaultimg").css({
					opacity: 0
				});
				setTimeout(function() {
					if (d == 1) n.transition({
						top: 0,
						left: r.width / 2,
						perspective: r.width,
						rotate3d: "0, -3, 0, 70deg",
						opacity: 0
					}, v * 2, "out", function() {});
					else n.transition({
						top: 0,
						left: 0 - r.width / 2,
						perspective: r.width,
						rotate3d: "0, -3, 0, -70deg",
						opacity: 0
					}, v * 2, "out", function() {})
				}, t * 100)
			})
		}
		if (l == 21) {
			v = v + 100;
			if (r.slots > 10) r.slots = 10;
			o.css({
				opacity: 1
			});
			y(u, r, true);
			y(f, r, false);
			f.find(".defaultimg").css({
				opacity: 0
			});
			f.find(".slotslide").each(function(t) {
				var s = e(this);
				if (d == 1) s.transition({
					top: 0,
					left: 0 - r.width,
					rotate3d: "0, 1, 0, 90deg"
				}, 0);
				else s.transition({
					top: 0,
					left: 0 + r.width,
					rotate3d: "0, 1, 0, -90deg"
				}, 0);
				setTimeout(function() {
					s.transition({
						left: 0,
						perspective: r.width * 2,
						rotate3d: "0, 0, 0, 0deg"
					}, v * 2, function() {
						if (t == r.slots - 1) {
							w(n, r);
							f.find(".defaultimg").css({
								opacity: 1
							});
							if (o.index() != i.index()) u.find(".defaultimg").css({
								opacity: 0
							});
							r.act = r.next;
							a(n)
						}
					})
				}, t * 100)
			});
			u.find(".slotslide").each(function(t) {
				var n = e(this);
				n.transition({
					left: 0,
					rotate3d: "0, 0, 0, 0deg"
				}, 0);
				u.find(".defaultimg").css({
					opacity: 0
				});
				setTimeout(function() {
					if (d == 1) n.transition({
						top: 0,
						left: r.width / 2,
						perspective: r.width,
						rotate3d: "0, 1, 0, -90deg"
					}, v * 1.5, function() {});
					else n.transition({
						top: 0,
						left: 0 - r.width / 2,
						perspective: r.width,
						rotate3d: "0, 1, 0, +90deg"
					}, v * 1.5, function() {})
				}, t * 100)
			})
		}
		var B = {};
		B.slideIndex = r.next + 1;
		n.trigger("revolution.slide.onchange", B);
		setTimeout(function() {
			n.trigger("revolution.slide.onafterswap")
		}, v);
		n.trigger("revolution.slide.onvideostop")
	}

	function T() {}

	function N(t) {
		if (t.data == YT.PlayerState.PLAYING) {
			var n = e("body").find(".tp-bannertimer");
			var r = n.data("opt");
			n.stop();
			r.videoplaying = true;
			r.videostartednow = 1
		} else {
			var n = e("body").find(".tp-bannertimer");
			var r = n.data("opt");
			if (t.data != -1) {
				if (r.conthover == 0) n.animate({
					width: "100%"
				}, {
					duration: r.delay - r.cd - 100,
					queue: false,
					easing: "linear"
				});
				r.videoplaying = false;
				r.videostoppednow = 1
			}
		}
		if (t.data == 0 && r.nextslideatend == true) r.container.revnext()
	}

	function C(e) {
		e.target.playVideo()
	}

	function k(e, t, n) {
		if (e.addEventListener) {
			e.addEventListener(t, n, false)
		} else {
			e.attachEvent(t, n, false)
		}
	}

	function L(t) {
		var n = $f(t);
		n.addEvent("ready", function(t) {
			n.addEvent("play", function(t) {
				var n = e("body").find(".tp-bannertimer");
				var r = n.data("opt");
				n.stop();
				r.videoplaying = true
			});
			n.addEvent("finish", function(t) {
				var n = e("body").find(".tp-bannertimer");
				var r = n.data("opt");
				if (r.conthover == 0) n.animate({
					width: "100%"
				}, {
					duration: r.delay - r.cd - 100,
					queue: false,
					easing: "linear"
				});
				r.videoplaying = false;
				r.videostartednow = 1;
				if (r.nextslideatend == true) r.container.revnext()
			});
			n.addEvent("pause", function(t) {
				var n = e("body").find(".tp-bannertimer");
				var r = n.data("opt");
				if (r.conthover == 0) n.animate({
					width: "100%"
				}, {
					duration: r.delay - r.cd - 100,
					queue: false,
					easing: "linear"
				});
				r.videoplaying = false;
				r.videostoppednow = 1
			})
		})
	}

	function A(t) {
		var n = $f(t);
		n.addEvent("ready", function(e) {
			n.api("play")
		});
		n.addEvent("play", function(t) {
			var n = e("body").find(".tp-bannertimer");
			var r = n.data("opt");
			n.stop();
			r.videoplaying = true
		});
		n.addEvent("finish", function(t) {
			var n = e("body").find(".tp-bannertimer");
			var r = n.data("opt");
			if (r.conthover == 0) n.animate({
				width: "100%"
			}, {
				duration: r.delay - r.cd - 100,
				queue: false,
				easing: "linear"
			});
			r.videoplaying = false;
			r.videostartednow = 1;
			if (r.nextslideatend == true) r.container.revnext()
		});
		n.addEvent("pause", function(t) {
			var n = e("body").find(".tp-bannertimer");
			var r = n.data("opt");
			if (r.conthover == 0) n.animate({
				width: "100%"
			}, {
				duration: r.delay - r.cd - 100,
				queue: false,
				easing: "linear"
			});
			r.videoplaying = false;
			r.videostoppednow = 1
		})
	}

	function O(t) {
		t.on("play", function() {
			var t = e("body").find(".tp-bannertimer");
			var n = t.data("opt");
			t.stop();
			try {
				n.videoplaying = true
			} catch (r) {}
		});
		t.on("pause", function() {
			var t = e("body").find(".tp-bannertimer");
			var n = t.data("opt");
			if (n.conthover == 0) t.animate({
				width: "100%"
			}, {
				duration: n.delay - n.cd - 100,
				queue: false,
				easing: "linear"
			});
			n.videoplaying = false;
			n.videostoppednow = 1
		});
		t.on("ended", function() {
			var t = e("body").find(".tp-bannertimer");
			var n = t.data("opt");
			if (n.conthover == 0) t.animate({
				width: "100%"
			}, {
				duration: n.delay - n.cd - 100,
				queue: false,
				easing: "linear"
			});
			n.videoplaying = false;
			n.videostoppednow = 1;
			if (n.nextslideatend == true) n.container.revnext()
		})
	}

	function M(n, r, i) {
		var s = 0;
		var o = 0;
		n.find(".tp-caption").each(function(i) {
			s = r.width / 2 - r.startwidth / 2;
			if (r.bh > 1) {
				r.bw = 1;
				r.bh = 1
			}
			if (r.bw > 1) {
				r.bw = 1;
				r.bh = 1
			}
			var u = r.bw;
			var a = r.bh;
			if (r.fullScreen == "on") o = r.height / 2 - r.startheight * r.bh / 2;
			if (o < 0) o = 0;
			var f = n.find(".tp-caption:eq(" + i + ")");
			var l = 0;
			if (r.width < r.hideCaptionAtLimit && f.data("captionhidden") == "on") {
				f.addClass("tp-hidden-caption");
				l = 1
			} else {
				if (r.width < r.hideAllCaptionAtLilmit) {
					f.addClass("tp-hidden-caption");
					l = 1
				} else {
					f.removeClass("tp-hidden-caption")
				}
			}
			f.stop(true, true);
			if (l == 0) {
				if (f.data("linktoslide") != t) {
					f.css({
						cursor: "pointer"
					});
					if (f.data("linktoslide") != "no") {
						f.click(function() {
							var t = e(this);
							var n = t.data("linktoslide");
							if (n != "next" && n != "prev") {
								r.container.data("showus", n);
								r.container.parent().find(".tp-rightarrow").click()
							} else if (n == "next") r.container.parent().find(".tp-rightarrow").click();
							else if (n == "prev") r.container.parent().find(".tp-leftarrow").click()
						})
					}
				}
				if (f.hasClass("coloredbg")) s = 0;
				if (s < 0) s = 0;
				clearTimeout(f.data("timer"));
				clearTimeout(f.data("timer-end"));
				var c = "iframe" + Math.round(Math.random() * 1e3 + 1);
				if (f.find("iframe").length > 0) {
					f.find("iframe").each(function() {
						var n = e(this);
						if (n.attr("src").toLowerCase().indexOf("youtube") >= 0) {
							r.nextslideatend = f.data("nextslideatend");
							if (!n.hasClass("HasListener")) {
								try {
									n.attr("id", c);
									var i;
									if (f.data("autoplay") == true) i = new YT.Player(c, {
										events: {
											onStateChange: N,
											onReady: C
										}
									});
									else i = new YT.Player(c, {
										events: {
											onStateChange: N
										}
									});
									n.addClass("HasListener");
									f.data("player", i);
									if (f.data("autoplay") == true) {
										var s = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
										setTimeout(function() {
											s.stop();
											r.videoplaying = true
										}, 200)
									}
								} catch (o) {}
							} else {
								if (f.data("autoplay") == true) {
									var i = f.data("player");
									i.playVideo();
									var s = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
									setTimeout(function() {
										s.stop();
										r.videoplaying = true
									}, 200)
								}
							}
						} else {
							if (n.attr("src").toLowerCase().indexOf("vimeo") >= 0) {
								r.nextslideatend = f.data("nextslideatend");
								if (!n.hasClass("HasListener")) {
									n.addClass("HasListener");
									n.attr("id", c);
									var u = n.attr("src");
									var a = {},
										l = u,
										h = /([^&=]+)=([^&]*)/g,
										p;
									while (p = h.exec(l)) {
										a[decodeURIComponent(p[1])] = decodeURIComponent(p[2])
									}
									if (a["player_id"] != t) {
										u = u.replace(a["player_id"], c)
									} else {
										u = u + "&player_id=" + c
									}
									try {
										u = u.replace("api=0", "api=1")
									} catch (o) {}
									u = u + "&api=1";
									n.attr("src", u);
									var i = f.find("iframe")[0];
									if (f.data("autoplay") == true) {
										$f(i).addEvent("ready", A);
										var s = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
										setTimeout(function() {
											s.stop();
											r.videoplaying = true
										}, 200)
									} else {
										$f(i).addEvent("ready", L)
									}
								} else {
									if (f.data("autoplay") == true) {
										var n = f.find("iframe");
										var d = n.attr("id");
										var v = $f(d);
										v.api("pause");
										var s = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
										setTimeout(function() {
											s.stop();
											r.videoplaying = true
										}, 200)
									}
								}
							}
						}
					})
				}
				if (f.find("video").length > 0) {
					f.find("video").each(function(n) {
						var i = e(this).parent();
						if (i.hasClass("video-js")) {
							r.nextslideatend = f.data("nextslideatend");
							if (!i.hasClass("HasListener")) {
								i.addClass("HasListener");
								var s = "videoid_" + Math.round(Math.random() * 1e3 + 1);
								i.attr("id", s);
								videojs(s).ready(function() {
									O(this)
								})
							} else {
								s = i.attr("id")
							}
							if (f.data("autoplay") == true) {
								var o = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
								setTimeout(function() {
									o.stop();
									r.videoplaying = true
								}, 200);
								videojs(s).ready(function() {
									var e = this;
									i.data("timerplay", setTimeout(function() {
										e.play()
									}, f.data("start")))
								})
							}
							if (i.data("ww") == t) i.data("ww", i.width());
							if (i.data("hh") == t) i.data("hh", i.height());
							videojs(s).ready(function() {
								if (!f.hasClass("fullscreenvideo")) {
									var e = videojs(s);
									try {
										e.width(i.data("ww") * r.bw);
										e.height(i.data("hh") * r.bh)
									} catch (t) {}
								}
							})
						}
					})
				}
				if (f.hasClass("randomrotate") && (r.ie || r.ie9)) f.removeClass("randomrotate").addClass("sfb");
				f.removeClass("noFilterClass");
				var h = 0;
				var p = 0;
				if (f.find("img").length > 0) {
					var d = f.find("img");
					if (d.data("ww") == t) d.data("ww", d.width());
					if (d.data("hh") == t) d.data("hh", d.height());
					var v = d.data("ww");
					var m = d.data("hh");
					d.width(v * r.bw);
					d.height(m * r.bh);
					h = d.width();
					p = d.height()
				} else {
					if (f.find("iframe").length > 0) {
						var d = f.find("iframe");
						if (f.data("ww") == t) {
							f.data("ww", d.width())
						}
						if (f.data("hh") == t) f.data("hh", d.height());
						var v = f.data("ww");
						var m = f.data("hh");
						var g = f;
						if (g.data("fsize") == t) g.data("fsize", parseInt(g.css("font-size"), 0) || 0);
						if (g.data("pt") == t) g.data("pt", parseInt(g.css("paddingTop"), 0) || 0);
						if (g.data("pb") == t) g.data("pb", parseInt(g.css("paddingBottom"), 0) || 0);
						if (g.data("pl") == t) g.data("pl", parseInt(g.css("paddingLeft"), 0) || 0);
						if (g.data("pr") == t) g.data("pr", parseInt(g.css("paddingRight"), 0) || 0);
						if (g.data("mt") == t) g.data("mt", parseInt(g.css("marginTop"), 0) || 0);
						if (g.data("mb") == t) g.data("mb", parseInt(g.css("marginBottom"), 0) || 0);
						if (g.data("ml") == t) g.data("ml", parseInt(g.css("marginLeft"), 0) || 0);
						if (g.data("mr") == t) g.data("mr", parseInt(g.css("marginRight"), 0) || 0);
						if (g.data("bt") == t) g.data("bt", parseInt(g.css("borderTop"), 0) || 0);
						if (g.data("bb") == t) g.data("bb", parseInt(g.css("borderBottom"), 0) || 0);
						if (g.data("bl") == t) g.data("bl", parseInt(g.css("borderLeft"), 0) || 0);
						if (g.data("br") == t) g.data("br", parseInt(g.css("borderRight"), 0) || 0);
						if (g.data("lh") == t) g.data("lh", parseInt(g.css("lineHeight"), 0) || 0);
						var y = r.width;
						var b = r.height;
						if (y > r.startwidth) y = r.startwidth;
						if (b > r.startheight) b = r.startheight;
						if (!f.hasClass("fullscreenvideo")) f.css({
							"font-size": g.data("fsize") * r.bw + "px",
							"padding-top": g.data("pt") * r.bh + "px",
							"padding-bottom": g.data("pb") * r.bh + "px",
							"padding-left": g.data("pl") * r.bw + "px",
							"padding-right": g.data("pr") * r.bw + "px",
							"margin-top": g.data("mt") * r.bh + "px",
							"margin-bottom": g.data("mb") * r.bh + "px",
							"margin-left": g.data("ml") * r.bw + "px",
							"margin-right": g.data("mr") * r.bw + "px",
							"border-top": g.data("bt") * r.bh + "px",
							"border-bottom": g.data("bb") * r.bh + "px",
							"border-left": g.data("bl") * r.bw + "px",
							"border-right": g.data("br") * r.bw + "px",
							"line-height": g.data("lh") * r.bh + "px",
							height: m * r.bh + "px",
							"white-space": "nowrap"
						});
						else f.css({
							width: r.startwidth * r.bw,
							height: r.startheight * r.bh
						});
						d.width(v * r.bw);
						d.height(m * r.bh);
						h = d.width();
						p = d.height()
					} else {
						f.find(".tp-resizeme, .tp-resizeme *").each(function() {
							_(e(this), r)
						});
						_(f, r);
						p = f.outerHeight(true);
						h = f.outerWidth(true);
						var w = f.outerHeight();
						var E = f.css("backgroundColor");
						f.find(".frontcorner").css({
							borderWidth: w + "px",
							left: 0 - w + "px",
							borderRight: "0px solid transparent",
							borderTopColor: E
						});
						f.find(".frontcornertop").css({
							borderWidth: w + "px",
							left: 0 - w + "px",
							borderRight: "0px solid transparent",
							borderBottomColor: E
						});
						f.find(".backcorner").css({
							borderWidth: w + "px",
							right: 0 - w + "px",
							borderLeft: "0px solid transparent",
							borderBottomColor: E
						});
						f.find(".backcornertop").css({
							borderWidth: w + "px",
							right: 0 - w + "px",
							borderLeft: "0px solid transparent",
							borderTopColor: E
						})
					}
				}
				if (f.data("voffset") == t) f.data("voffset", 0);
				if (f.data("hoffset") == t) f.data("hoffset", 0);
				var S = f.data("voffset") * u;
				var x = f.data("hoffset") * u;
				var T = r.startwidth * u;
				var k = r.startheight * u;
				if (f.data("x") == "center" || f.data("xcenter") == "center") {
					f.data("xcenter", "center");
					f.data("x", (T / 2 - f.outerWidth(true) / 2) / u + x)
				}
				if (f.data("x") == "left" || f.data("xleft") == "left") {
					f.data("xleft", "left");
					f.data("x", 0 / u + x)
				}
				if (f.data("x") == "right" || f.data("xright") == "right") {
					f.data("xright", "right");
					f.data("x", (T - f.outerWidth(true) + x) / u)
				}
				if (f.data("y") == "center" || f.data("ycenter") == "center") {
					f.data("ycenter", "center");
					f.data("y", (k / 2 - f.outerHeight(true) / 2) / r.bh + S)
				}
				if (f.data("y") == "top" || f.data("ytop") == "top") {
					f.data("ytop", "top");
					f.data("y", 0 / r.bh + S)
				}
				if (f.data("y") == "bottom" || f.data("ybottom") == "bottom") {
					f.data("ybottom", "bottom");
					f.data("y", (k - f.outerHeight(true) + S) / u)
				}
				if (f.hasClass("fade")) {
					f.css({
						opacity: 0,
						left: u * f.data("x") + s + "px",
						top: r.bh * f.data("y") + o + "px"
					})
				}
				if (f.hasClass("randomrotate")) {
					f.css({
						left: u * f.data("x") + s + "px",
						top: a * f.data("y") + o + "px"
					});
					var M = Math.random() * 2 + 1;
					var D = Math.round(Math.random() * 200 - 100);
					var H = Math.round(Math.random() * 200 - 100);
					var B = Math.round(Math.random() * 200 - 100);
					f.data("repx", H);
					f.data("repy", B);
					f.data("repo", f.css("opacity"));
					f.data("rotate", D);
					f.data("scale", M);
					f.transition({
						opacity: 0,
						scale: M,
						rotate: D,
						x: H,
						y: B,
						duration: "0ms"
					})
				} else {
					if (r.ie || r.ie9) {} else {
						if (f.find("iframe").length == 0) f.transition({
							scale: 1,
							rotate: 0
						})
					}
				}
				if (f.hasClass("lfr")) {
					f.css({
						opacity: 1,
						left: 15 + r.width + "px",
						top: r.bh * f.data("y") + o + "px"
					})
				}
				if (f.hasClass("lfl")) {
					f.css({
						opacity: 1,
						left: -15 - h + "px",
						top: r.bh * f.data("y") + o + "px"
					})
				}
				if (f.hasClass("sfl")) {
					f.css({
						opacity: 0,
						left: u * f.data("x") - 50 + s + "px",
						top: r.bh * f.data("y") + o + "px"
					})
				}
				if (f.hasClass("sfr")) {
					f.css({
						opacity: 0,
						left: u * f.data("x") + 50 + s + "px",
						top: r.bh * f.data("y") + o + "px"
					})
				}
				if (f.hasClass("lft")) {
					f.css({
						opacity: 1,
						left: u * f.data("x") + s + "px",
						top: -25 - p + "px"
					})
				}
				if (f.hasClass("lfb")) {
					f.css({
						opacity: 1,
						left: u * f.data("x") + s + "px",
						top: 25 + r.height + "px"
					})
				}
				if (f.hasClass("sft")) {
					f.css({
						opacity: 0,
						left: u * f.data("x") + s + "px",
						top: r.bh * f.data("y") + o - 50 + "px"
					})
				}
				if (f.hasClass("sfb")) {
					f.css({
						opacity: 0,
						left: u * f.data("x") + s + "px",
						top: r.bh * f.data("y") + o + 50 + "px"
					})
				}
				f.data("timer", setTimeout(function() {
					var n = f.data("easing");
					if (n == t) n = "linear";
					f.css({
						visibility: "visible"
					});
					if (f.hasClass("fade")) {
						f.data("repo", f.css("opacity"));
						f.transition({
							opacity: 1,
							duration: f.data("speed")
						})
					}
					if (f.hasClass("randomrotate")) {
						n = n.replace("Elastic", "Back");
						n = n.replace("Bounce", "Back");
						f.transition({
							opacity: 1,
							scale: 1,
							left: u * f.data("x") + s + "px",
							top: a * f.data("y") + o + "px",
							rotate: 0,
							x: 0,
							y: 0,
							duration: f.data("speed"),
							easing: n
						});
						if (r.ie) f.addClass("noFilterClass")
					}
					if (f.hasClass("lfr") || f.hasClass("lfl") || f.hasClass("sfr") || f.hasClass("sfl") || f.hasClass("lft") || f.hasClass("lfb") || f.hasClass("sft") || f.hasClass("sfb")) {
						f.data("repx", f.position().left);
						f.data("repy", f.position().top);
						f.data("repo", f.css("opacity"));
						if (n.indexOf("Bounce") >= 0 || n.indexOf("Elastic") >= 0) f.animate({
							opacity: 1,
							left: u * f.data("x") + s + "px",
							top: r.bh * f.data("y") + o + "px"
						}, {
							duration: f.data("speed"),
							easing: n,
							complete: function() {
								if (r.ie) e(this).addClass("noFilterClass")
							}
						});
						else f.transition({
							opacity: 1,
							left: u * f.data("x") + s + "px",
							top: r.bh * f.data("y") + o + "px",
							duration: f.data("speed"),
							easing: n
						})
					}
				}, f.data("start")));
				if (f.data("end") != t) f.data("timer-end", setTimeout(function() {
					if ((r.ie || r.ie9) && (f.hasClass("randomrotate") || f.hasClass("randomrotateout"))) {
						f.removeClass("randomrotate").removeClass("randomrotateout").addClass("fadeout")
					}
					P(f, r)
				}, f.data("end")))
			}
		});
		var u = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
		u.data("opt", r)
	}

	function _(e, n) {
		if (e.data("fsize") == t) e.data("fsize", parseInt(e.css("font-size"), 0) || 0);
		if (e.data("pt") == t) e.data("pt", parseInt(e.css("paddingTop"), 0) || 0);
		if (e.data("pb") == t) e.data("pb", parseInt(e.css("paddingBottom"), 0) || 0);
		if (e.data("pl") == t) e.data("pl", parseInt(e.css("paddingLeft"), 0) || 0);
		if (e.data("pr") == t) e.data("pr", parseInt(e.css("paddingRight"), 0) || 0);
		if (e.data("mt") == t) e.data("mt", parseInt(e.css("marginTop"), 0) || 0);
		if (e.data("mb") == t) e.data("mb", parseInt(e.css("marginBottom"), 0) || 0);
		if (e.data("ml") == t) e.data("ml", parseInt(e.css("marginLeft"), 0) || 0);
		if (e.data("mr") == t) e.data("mr", parseInt(e.css("marginRight"), 0) || 0);
		if (e.data("bt") == t) e.data("bt", parseInt(e.css("borderTopWidth"), 0) || 0);
		if (e.data("bb") == t) e.data("bb", parseInt(e.css("borderBottomWidth"), 0) || 0);
		if (e.data("bl") == t) e.data("bl", parseInt(e.css("borderLeftWidth"), 0) || 0);
		if (e.data("br") == t) e.data("br", parseInt(e.css("borderRightWidth"), 0) || 0);
		if (e.data("lh") == t) e.data("lh", parseInt(e.css("lineHeight"), 0) || 0);
		if (e.data("minwidth") == t) e.data("minwidth", parseInt(e.css("minWidth"), 0) || 0);
		if (e.data("minheight") == t) e.data("minheight", parseInt(e.css("minHeight"), 0) || 0);
		if (e.data("maxwidth") == t) e.data("maxwidth", parseInt(e.css("maxWidth"), 0) || "none");
		if (e.data("maxheight") == t) e.data("maxheight", parseInt(e.css("maxHeight"), 0) || "none");
		e.css({
			"font-size": Math.round(e.data("fsize") * n.bw) + "px",
			"padding-top": Math.round(e.data("pt") * n.bh) + "px",
			"padding-bottom": Math.round(e.data("pb") * n.bh) + "px",
			"padding-left": Math.round(e.data("pl") * n.bw) + "px",
			"padding-right": Math.round(e.data("pr") * n.bw) + "px",
			"margin-top": e.data("mt") * n.bh + "px",
			"margin-bottom": e.data("mb") * n.bh + "px",
			"margin-left": e.data("ml") * n.bw + "px",
			"margin-right": e.data("mr") * n.bw + "px",
			borderTopWidth: Math.round(e.data("bt") * n.bh) + "px",
			borderBottomWidth: Math.round(e.data("bb") * n.bh) + "px",
			borderLeftWidth: Math.round(e.data("bl") * n.bw) + "px",
			borderRightWidth: Math.round(e.data("br") * n.bw) + "px",
			"line-height": Math.round(e.data("lh") * n.bh) + "px",
			"white-space": "nowrap",
			minWidth: e.data("minwidth") * n.bw + "px",
			minHeight: e.data("minheight") * n.bh + "px"
		});
		if (e.data("maxheight") != "none") e.css({
			maxHeight: e.data("maxheight") * n.bh + "px"
		});
		if (e.data("maxwidth") != "none") e.css({
			maxWidth: e.data("maxwidth") * n.bw + "px"
		})
	}

	function D(t, n) {
		t.find(".tp-caption").each(function(r) {
			var i = t.find(".tp-caption:eq(" + r + ")");
			i.stop(true, true);
			clearTimeout(i.data("timer"));
			clearTimeout(i.data("timer-end"));
			var s = i.data("easing");
			s = "easeInOutSine";
			var o = i.data("repx");
			var u = i.data("repy");
			var a = i.data("repo");
			var f = i.data("rotate");
			var l = i.data("scale");
			if (i.find("iframe").length > 0) {
				try {
					var c = i.find("iframe");
					var h = c.attr("id");
					var p = $f(h);
					p.api("pause")
				} catch (d) {}
				try {
					var v = i.data("player");
					v.stopVideo()
				} catch (d) {}
			}
			if (i.find("video").length > 0) {
				try {
					i.find("video").each(function(t) {
						var n = e(this).parent();
						var r = n.attr("id");
						clearTimeout(n.data("timerplay"));
						videojs(r).ready(function() {
							var e = this;
							e.pause()
						})
					})
				} catch (d) {}
			}
			try {
				P(i, n)
			} catch (d) {}
		})
	}

	function P(n, r) {
		if (n.hasClass("randomrotate") && (r.ie || r.ie9)) n.removeClass("randomrotate").addClass("sfb");
		if (n.hasClass("randomrotateout") && (r.ie || r.ie9)) n.removeClass("randomrotateout").addClass("stb");
		var i = n.data("endspeed");
		if (i == t) i = n.data("speed");
		var s = n.data("repx");
		var o = n.data("repy");
		var u = n.data("repo");
		if (r.ie) {
			n.css({
				opacity: "inherit",
				filter: "inherit"
			})
		}
		if (n.hasClass("ltr") || n.hasClass("ltl") || n.hasClass("str") || n.hasClass("stl") || n.hasClass("ltt") || n.hasClass("ltb") || n.hasClass("stt") || n.hasClass("stb")) {
			s = n.position().left;
			o = n.position().top;
			if (n.hasClass("ltr")) s = r.width + 60;
			else if (n.hasClass("ltl")) s = 0 - n.width() - 60;
			else if (n.hasClass("ltt")) o = 0 - n.height() - 60;
			else if (n.hasClass("ltb")) o = r.height + 60;
			else if (n.hasClass("str")) {
				s = s + 50;
				u = 0
			} else if (n.hasClass("stl")) {
				s = s - 50;
				u = 0
			} else if (n.hasClass("stt")) {
				o = o - 50;
				u = 0
			} else if (n.hasClass("stb")) {
				o = o + 50;
				u = 0
			}
			var a = n.data("endeasing");
			if (a == t) a = "linear";
			if (a.indexOf("Bounce") >= 0 || a.indexOf("Elastic") >= 0) n.animate({
				opacity: u,
				left: s + "px",
				top: o + "px"
			}, {
				duration: n.data("endspeed"),
				easing: a,
				complete: function() {
					e(this).css({
						visibility: "hidden"
					})
				}
			});
			else n.transition({
				opacity: u,
				left: s + "px",
				top: o + "px",
				duration: n.data("endspeed"),
				easing: a
			});
			if (r.ie) n.removeClass("noFilterClass")
		} else if (n.hasClass("randomrotateout")) {
			n.transition({
				opacity: 0,
				scale: Math.random() * 2 + .3,
				left: Math.random() * r.width + "px",
				top: Math.random() * r.height + "px",
				rotate: Math.random() * 40,
				duration: i,
				easing: a,
				complete: function() {
					e(this).css({
						visibility: "hidden"
					})
				}
			});
			if (r.ie) n.removeClass("noFilterClass")
		} else if (n.hasClass("fadeout")) {
			if (r.ie) n.removeClass("noFilterClass");
			n.transition({
				opacity: 0,
				duration: 200
			})
		} else if (n.hasClass("lfr") || n.hasClass("lfl") || n.hasClass("sfr") || n.hasClass("sfl") || n.hasClass("lft") || n.hasClass("lfb") || n.hasClass("sft") || n.hasClass("sfb")) {
			if (n.hasClass("lfr")) s = r.width + 60;
			else if (n.hasClass("lfl")) s = 0 - n.width() - 60;
			else if (n.hasClass("lft")) o = 0 - n.height() - 60;
			else if (n.hasClass("lfb")) o = r.height + 60;
			var a = n.data("endeasing");
			if (a == t) a = "linear";
			if (a.indexOf("Bounce") >= 0 || a.indexOf("Elastic") >= 0) n.animate({
				opacity: u,
				left: s + "px",
				top: o + "px"
			}, {
				duration: n.data("endspeed"),
				easing: a,
				complete: function() {
					e(this).css({
						visibility: "hidden"
					})
				}
			});
			else n.transition({
				opacity: u,
				left: s + "px",
				top: o + "px",
				duration: n.data("endspeed"),
				easing: a
			});
			if (r.ie) n.removeClass("noFilterClass")
		} else if (n.hasClass("fade")) {
			n.transition({
				opacity: 0,
				duration: i
			});
			if (r.ie) n.removeClass("noFilterClass")
		} else if (n.hasClass("randomrotate")) {
			n.transition({
				opacity: 0,
				scale: Math.random() * 2 + .3,
				left: Math.random() * r.width + "px",
				top: Math.random() * r.height + "px",
				rotate: Math.random() * 40,
				duration: i,
				easing: a
			});
			if (r.ie) n.removeClass("noFilterClass")
		}
	}

	function H(t, n) {
		t.children().each(function() {
			try {
				e(this).die("click")
			} catch (t) {}
			try {
				e(this).die("mouseenter")
			} catch (t) {}
			try {
				e(this).die("mouseleave")
			} catch (t) {}
			try {
				e(this).unbind("hover")
			} catch (t) {}
		});
		try {
			t.die("click", "mouseenter", "mouseleave")
		} catch (r) {}
		clearInterval(n.cdint);
		t = null
	}

	function B(n, r) {
		r.cd = 0;
		r.loop = 0;
		if (r.stopAfterLoops != t && r.stopAfterLoops > -1) r.looptogo = r.stopAfterLoops;
		else r.looptogo = 9999999;
		if (r.stopAtSlide != t && r.stopAtSlide > -1) r.lastslidetoshow = r.stopAtSlide;
		else r.lastslidetoshow = 999;
		r.stopLoop = "off";
		if (r.looptogo == 0) r.stopLoop = "on";
		if (r.slideamount > 1 && !(r.stopAfterLoops == 0 && r.stopAtSlide == 1)) {
			var i = n.find(".tp-bannertimer");
			if (i.length > 0) {
				i.css({
					width: "0%"
				});
				i.animate({
					width: "100%"
				}, {
					duration: r.delay - 100,
					queue: false,
					easing: "linear"
				})
			}
			i.data("opt", r);
			r.cdint = setInterval(function() {
				if (e("body").find(n).length == 0) H(n, r);
				if (n.data("conthover-changed") == 1) {
					r.conthover = n.data("conthover");
					n.data("conthover-changed", 0)
				}
				if (r.conthover != 1 && r.videoplaying != true && r.width > r.hideSliderAtLimit) r.cd = r.cd + 100;
				if (r.fullWidth != "on")
					if (r.width > r.hideSliderAtLimit) n.parent().removeClass("tp-hide-revslider");
					else n.parent().addClass("tp-hide-revslider");
				if (r.videostartednow == 1) {
					n.trigger("revolution.slide.onvideoplay");
					r.videostartednow = 0
				}
				if (r.videostoppednow == 1) {
					n.trigger("revolution.slide.onvideostop");
					r.videostoppednow = 0
				}
				if (r.cd >= r.delay) {
					r.cd = 0;
					r.act = r.next;
					r.next = r.next + 1;
					if (r.next > n.find(">ul >li").length - 1) {
						r.next = 0;
						r.looptogo = r.looptogo - 1;
						if (r.looptogo <= 0) {
							r.stopLoop = "on"
						}
					}
					if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1) {
						clearInterval(r.cdint);
						n.find(".tp-bannertimer").css({
							visibility: "hidden"
						});
						n.trigger("revolution.slide.onstop")
					}
					S(n, r);
					if (i.length > 0) {
						i.css({
							width: "0%"
						});
						i.animate({
							width: "100%"
						}, {
							duration: r.delay - 100,
							queue: false,
							easing: "linear"
						})
					}
				}
			}, 100);
			n.hover(function() {
				if (r.onHoverStop == "on") {
					r.conthover = 1;
					i.stop();
					n.trigger("revolution.slide.onpause")
				}
			}, function() {
				if (n.data("conthover") != 1) {
					n.trigger("revolution.slide.onresume");
					r.conthover = 0;
					if (r.onHoverStop == "on" && r.videoplaying != true) {
						i.animate({
							width: "100%"
						}, {
							duration: r.delay - r.cd - 100,
							queue: false,
							easing: "linear"
						})
					}
				}
			})
		}
	}
	e.fn.extend({
		revolution: function(i) {
			e.fn.revolution.defaults = {
				delay: 9e3,
				startheight: 500,
				startwidth: 960,
				hideThumbs: 200,
				thumbWidth: 100,
				thumbHeight: 50,
				thumbAmount: 5,
				navigationType: "bullet",
				navigationArrows: "withbullet",
				navigationStyle: "round",
				navigationHAlign: "center",
				navigationVAlign: "bottom",
				navigationHOffset: 0,
				navigationVOffset: 20,
				soloArrowLeftHalign: "left",
				soloArrowLeftValign: "center",
				soloArrowLeftHOffset: 20,
				soloArrowLeftVOffset: 0,
				soloArrowRightHalign: "right",
				soloArrowRightValign: "center",
				soloArrowRightHOffset: 20,
				soloArrowRightVOffset: 0,
				touchenabled: "on",
				onHoverStop: "on",
				stopAtSlide: -1,
				stopAfterLoops: -1,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				hideSliderAtLimit: 0,
				shadow: 1,
				fullWidth: "off",
				fullScreen: "off"
			};
			i = e.extend({}, e.fn.revolution.defaults, i);
			return this.each(function() {
				var s = i;
				var o = e(this);
				if (!o.hasClass("revslider-initialised")) {
					o.addClass("revslider-initialised");
					if (o.attr("id") == t) o.attr("id", "revslider-" + Math.round(Math.random() * 1e3 + 5));
					s.firefox13 = false;
					s.ie = !e.support.opacity;
					s.ie9 = document.documentMode == 9;
					var a = e.fn.jquery.split("."),
						f = parseFloat(a[0]),
						d = parseFloat(a[1]),
						v = parseFloat(a[2] || "0");
					if (f == 1 && d < 7) {
						o.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + a + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")
					}
					if (f > 1) s.ie = false;
					if (!e.support.transition) e.fn.transition = e.fn.animate;
					e.cssEase["Bounce"] = "cubic-bezier(0,1,0.5,1.3)";
					o.find(".caption").each(function() {
						e(this).addClass("tp-caption")
					});
					var g = 0;
					var y = 0;
					var b = 0;
					o.find(".tp-caption iframe").each(function(t) {
						try {
							if (e(this).attr("src").indexOf("you") > 0 && g == 0) {
								g = 1;
								var n = document.createElement("script");
								n.src = "http://www.youtube.com/player_api";
								var r = document.getElementsByTagName("script")[0];
								r.parentNode.insertBefore(n, r)
							}
						} catch (i) {}
					});
					o.find(".tp-caption iframe").each(function(t) {
						try {
							if (e(this).attr("src").indexOf("vim") > 0 && y == 0) {
								y = 1;
								var n = document.createElement("script");
								n.src = "http://a.vimeocdn.com/js/froogaloop2.min.js";
								var r = document.getElementsByTagName("script")[0];
								r.parentNode.insertBefore(n, r)
							}
						} catch (i) {}
					});
					o.find(".tp-caption video").each(function(t) {
						try {
							if (e(this).hasClass("video-js") && b == 0) {
								b = 1;
								var n = document.createElement("script");
								n.src = s.videoJsPath + "video.js";
								var r = document.getElementsByTagName("script")[0];
								r.parentNode.insertBefore(n, r);
								e("head").append('<link rel="stylesheet" type="text/css" href="' + s.videoJsPath + 'video-js.min.css" media="screen" />');
								e("head").append('<script> videojs.options.flash.swf = "' + s.videoJsPath + 'video-js.swf";</script>')
							}
						} catch (i) {}
					});
					if (s.shuffle == "on") {
						for (var w = 0; w < o.find(">ul:first-child >li").length; w++) {
							var E = Math.round(Math.random() * o.find(">ul:first-child >li").length);
							o.find(">ul:first-child >li:eq(" + E + ")").prependTo(o.find(">ul:first-child"))
						}
					}
					s.slots = 4;
					s.act = -1;
					s.next = 0;
					if (s.startWithSlide != t) s.next = s.startWithSlide;
					var x = n("#")[0];
					if (x.length < 9) {
						if (x.split("slide").length > 1) {
							var T = parseInt(x.split("slide")[1], 0);
							if (T < 1) T = 1;
							if (T > o.find(">ul:first >li").length) T = o.find(">ul:first >li").length;
							s.next = T - 1
						}
					}
					s.origcd = s.delay;
					s.firststart = 1;
					if (s.navigationHOffset == t) s.navOffsetHorizontal = 0;
					if (s.navigationVOffset == t) s.navOffsetVertical = 0;
					o.append('<div class="tp-loader"></div>');
					if (o.find(".tp-bannertimer").length == 0) o.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
					var N = o.find(".tp-bannertimer");
					if (N.length > 0) {
						N.css({
							width: "0%"
						})
					}
					o.addClass("tp-simpleresponsive");
					s.container = o;
					s.slideamount = o.find(">ul:first >li").length;
					if (o.height() == 0) o.height(s.startheight);
					if (s.startwidth == t || s.startwidth == 0) s.startwidth = o.width();
					if (s.startheight == t || s.startheight == 0) s.startheight = o.height();
					s.width = o.width();
					s.height = o.height();
					s.bw = s.startwidth / o.width();
					s.bh = s.startheight / o.height();
					if (s.width != s.startwidth) {
						s.height = Math.round(s.startheight * (s.width / s.startwidth));
						o.height(s.height)
					}
					if (s.shadow != 0) {
						o.parent().append('<div class="tp-bannershadow tp-shadow' + s.shadow + '"></div>');
						o.parent().find(".tp-bannershadow").css({
							width: s.width
						})
					}
					o.find("ul").css({
						display: "none"
					});
					if (s.lazyLoad != "on") {
						o.waitForImages(function() {
							o.find("ul").css({
								display: "block"
							});
							m(o, s);
							if (s.slideamount > 1) l(o, s);
							if (s.slideamount > 1) u(o, s);
							if (s.slideamount > 1) c(o, s);
							e("#unvisible_button").click(function() {
								s.navigationArrows = e(".selectnavarrows").val();
								s.navigationType = e(".selectnavtype").val();
								s.navigationStyle = e(".selectnavstyle").val();
								s.soloArrowStyle = "default";
								e(".tp-bullets").remove();
								e(".tparrows").remove();
								if (s.slideamount > 1) l(o, s);
								if (s.slideamount > 1) u(o, s);
								if (s.slideamount > 1) c(o, s)
							});
							h(o, s);
							if (s.hideThumbs > 0) p(o, s);
							o.waitForImages(function() {
								o.find(".tp-loader").fadeOut(600);
								setTimeout(function() {
									S(o, s);
									if (s.slideamount > 1) B(o, s);
									o.trigger("revolution.slide.onloaded")
								}, 600)
							})
						})
					} else {
						var C = o.find("ul >li >img").first();
						if (C.data("lazyload") != t) C.attr("src", C.data("lazyload"));
						C.data("lazydone", 1);
						C.parent().waitForImages(function() {
							o.find("ul").css({
								display: "block"
							});
							m(o, s);
							if (s.slideamount > 1) l(o, s);
							if (s.slideamount > 1) u(o, s);
							if (s.slideamount > 1) c(o, s);
							h(o, s);
							if (s.hideThumbs > 0) p(o, s);
							C.parent().waitForImages(function() {
								o.find(".tp-loader").fadeOut(600);
								setTimeout(function() {
									S(o, s);
									if (s.slideamount > 1) B(o, s);
									o.trigger("revolution.slide.onloaded")
								}, 600)
							})
						})
					}
					e(window).resize(function() {
						if (e("body").find(o) != 0)
							if (o.outerWidth(true) != s.width) {
								r(o, s)
							}
					});
					o.find(".tp-scrollbelowslider").on("click", function() {
						var t = 0;
						try {
							t = e("body").find(s.fullScreenOffsetContainer).height()
						} catch (n) {}
						try {
							t = t - e(this).data("scrolloffset")
						} catch (n) {}
						e("body,html").animate({
							scrollTop: o.offset().top + o.find(">ul >li").height() - t + "px"
						}, {
							duration: 400
						})
					})
				}
			})
		},
		revscroll: function(t) {
			return this.each(function() {
				var n = e(this);
				e("body,html").animate({
					scrollTop: n.offset().top + n.find(">ul >li").height() - t + "px"
				}, {
					duration: 400
				})
			})
		},
		revpause: function(t) {
			return this.each(function() {
				var t = e(this);
				t.data("conthover", 1);
				t.data("conthover-changed", 1);
				t.trigger("revolution.slide.onpause");
				var n = t.parent().find(".tp-bannertimer");
				n.stop()
			})
		},
		revresume: function(t) {
			return this.each(function() {
				var t = e(this);
				t.data("conthover", 0);
				t.data("conthover-changed", 1);
				t.trigger("revolution.slide.onresume");
				var n = t.parent().find(".tp-bannertimer");
				var r = n.data("opt");
				n.animate({
					width: "100%"
				}, {
					duration: r.delay - r.cd - 100,
					queue: false,
					easing: "linear"
				})
			})
		},
		revnext: function(t) {
			return this.each(function() {
				var t = e(this);
				t.parent().find(".tp-rightarrow").click()
			})
		},
		revprev: function(t) {
			return this.each(function() {
				var t = e(this);
				t.parent().find(".tp-leftarrow").click()
			})
		},
		revmaxslide: function(t) {
			return e(this).find(">ul:first-child >li").length
		},
		revcurrentslide: function(t) {
			var n = e(this);
			var r = n.parent().find(".tp-bannertimer");
			var i = r.data("opt");
			return i.act
		},
		revlastslide: function(t) {
			var n = e(this);
			var r = n.parent().find(".tp-bannertimer");
			var i = r.data("opt");
			return i.lastslide
		},
		revshowslide: function(t) {
			return this.each(function() {
				var n = e(this);
				n.data("showus", t);
				n.parent().find(".tp-rightarrow").click()
			})
		}
	})
})(jQuery);
(function(e) {
	function t(e, t) {
		return typeof e == "function" ? e.call(t) : e
	}

	function n(e) {
		while (e = e.parentNode) {
			if (e == document) return true
		}
		return false
	}

	function r(t, n) {
		this.$element = e(t);
		this.options = n;
		this.enabled = true;
		this.fixTitle()
	}
	r.prototype = {
		show: function() {
			var n = this.getTitle();
			if (n && this.enabled) {
				var r = this.tip();
				r.find(".tipsy-inner")[this.options.html ? "html" : "text"](n);
				r[0].className = "tipsy";
				r.remove().css({
					top: 0,
					left: 0,
					visibility: "hidden",
					display: "block"
				}).prependTo(document.body);
				var i = e.extend({}, this.$element.offset(), {
					width: this.$element[0].offsetWidth,
					height: this.$element[0].offsetHeight
				});
				var s = r[0].offsetWidth,
					o = r[0].offsetHeight,
					u = t(this.options.gravity, this.$element[0]);
				var a;
				switch (u.charAt(0)) {
					case "n":
						a = {
							top: i.top + i.height + this.options.offset,
							left: i.left + i.width / 2 - s / 2
						};
						break;
					case "s":
						a = {
							top: i.top - o - this.options.offset,
							left: i.left + i.width / 2 - s / 2
						};
						break;
					case "e":
						a = {
							top: i.top + i.height / 2 - o / 2,
							left: i.left - s - this.options.offset
						};
						break;
					case "w":
						a = {
							top: i.top + i.height / 2 - o / 2,
							left: i.left + i.width + this.options.offset
						};
						break
				}
				if (u.length == 2) {
					if (u.charAt(1) == "w") {
						a.left = i.left + i.width / 2 - 15
					} else {
						a.left = i.left + i.width / 2 - s + 15
					}
				}
				r.css(a).addClass("tipsy-" + u);
				r.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + u.charAt(0);
				if (this.options.className) {
					r.addClass(t(this.options.className, this.$element[0]))
				}
				if (this.options.fade) {
					r.stop().css({
						opacity: 0,
						display: "block",
						visibility: "visible"
					}).animate({
						opacity: this.options.opacity
					})
				} else {
					r.css({
						visibility: "visible",
						opacity: this.options.opacity
					})
				}
			}
		},
		hide: function() {
			if (this.options.fade) {
				this.tip().stop().fadeOut(function() {
					e(this).remove()
				})
			} else {
				this.tip().remove()
			}
		},
		fixTitle: function() {
			var e = this.$element;
			if (e.attr("title") || typeof e.attr("data-original-title") != "string") {
				e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
			}
		},
		getTitle: function() {
			var e, t = this.$element,
				n = this.options;
			this.fixTitle();
			var e, n = this.options;
			if (typeof n.title == "string") {
				e = t.attr(n.title == "title" ? "data-original-title" : n.title)
			} else if (typeof n.title == "function") {
				e = n.title.call(t[0])
			}
			e = ("" + e).replace(/(^\s*|\s*$)/, "");
			return e || n.fallback
		},
		tip: function() {
			if (!this.$tip) {
				this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
				this.$tip.data("tipsy-pointee", this.$element[0])
			}
			return this.$tip
		},
		validate: function() {
			if (!this.$element[0].parentNode) {
				this.hide();
				this.$element = null;
				this.options = null
			}
		},
		enable: function() {
			this.enabled = true
		},
		disable: function() {
			this.enabled = false
		},
		toggleEnabled: function() {
			this.enabled = !this.enabled
		}
	};
	e.fn.tipsy = function(t) {
		function i(n) {
			var i = e.data(n, "tipsy");
			if (!i) {
				i = new r(n, e.fn.tipsy.elementOptions(n, t));
				e.data(n, "tipsy", i)
			}
			return i
		}

		function s() {
			var e = i(this);
			e.hoverState = "in";
			if (t.delayIn == 0) {
				e.show()
			} else {
				e.fixTitle();
				setTimeout(function() {
					if (e.hoverState == "in") e.show()
				}, t.delayIn)
			}
		}

		function o() {
			var e = i(this);
			e.hoverState = "out";
			if (t.delayOut == 0) {
				e.hide()
			} else {
				setTimeout(function() {
					if (e.hoverState == "out") e.hide()
				}, t.delayOut)
			}
		}
		if (t === true) {
			return this.data("tipsy")
		} else if (typeof t == "string") {
			var n = this.data("tipsy");
			if (n) n[t]();
			return this
		}
		t = e.extend({}, e.fn.tipsy.defaults, t);
		if (!t.live) this.each(function() {
			i(this)
		});
		if (t.trigger != "manual") {
			var u = t.live ? "live" : "bind",
				a = t.trigger == "hover" ? "mouseenter" : "focus",
				f = t.trigger == "hover" ? "mouseleave" : "blur";
			this[u](a, s)[u](f, o)
		}
		return this
	};
	e.fn.tipsy.defaults = {
		className: null,
		delayIn: 0,
		delayOut: 0,
		fade: false,
		fallback: "",
		gravity: "n",
		html: false,
		live: false,
		offset: 0,
		opacity: .8,
		title: "title",
		trigger: "hover"
	};
	e.fn.tipsy.revalidate = function() {
		e(".tipsy").each(function() {
			var t = e.data(this, "tipsy-pointee");
			if (!t || !n(t)) {
				e(this).remove()
			}
		})
	};
	e.fn.tipsy.elementOptions = function(t, n) {
		return e.metadata ? e.extend({}, n, e(t).metadata()) : n
	};
	e.fn.tipsy.autoNS = function() {
		return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
	};
	e.fn.tipsy.autoWE = function() {
		return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
	};
	e.fn.tipsy.autoBounds = function(t, n) {
		return function() {
			var r = {
					ns: n[0],
					ew: n.length > 1 ? n[1] : false
				},
				i = e(document).scrollTop() + t,
				s = e(document).scrollLeft() + t,
				o = e(this);
			if (o.offset().top < i) r.ns = "n";
			if (o.offset().left < s) r.ew = "w";
			if (e(window).width() + e(document).scrollLeft() - o.offset().left < t) r.ew = "e";
			if (e(window).height() + e(document).scrollTop() - o.offset().top < t) r.ns = "s";
			return r.ns + (r.ew ? r.ew : "")
		}
	}
})(jQuery);
! function(e, t) {
	"use strict";
	e.fn.chained = function(n) {
		return this.each(function() {
			function r() {
				var r = !0,
					o = e("option:selected", i).val();
				e(i).html(s.html());
				var u = "";
				e(n).each(function() {
					var n = e("option:selected", this).val();
					n && (u.length > 0 && (u += t.Zepto ? "\\\\" : "\\"), u += n)
				});
				var l;
				l = e.isArray(n) ? e(n[0]).first() : e(n).first();
				var h = e("option:selected", l).val();
				e("option", i).each(function() {
					e(this).hasClass(u) && e(this).val() === o ? (e(this).prop("selected", !0), r = !1) : e(this).hasClass(u) || e(this).hasClass(h) || "" === e(this).val() || e(this).remove()
				}), 1 === e("option", i).size() && "" === e(i).val() ? e(i).prop("disabled", !0) : e(i).prop("disabled", !1), r && e(i).trigger("change")
			}
			var i = this,
				s = e(i).clone();
			e(n).each(function() {
				e(this).bind("change", function() {
					r()
				}), e("option:selected", this).length || e("option", this).first().attr("selected", "selected"), r()
			})
		})
	}, e.fn.chainedTo = e.fn.chained, e.fn.chained.defaults = {}
}(window.jQuery || window.Zepto, window, document);
! function(e) {
	"use strict";
	e.fn.remoteChained = function(t, n, r) {
		var i;
		return "object" == typeof t && "undefined" != typeof t.url ? i = e.extend({}, e.fn.remoteChained.defaults, t) : (i = e.extend({}, e.fn.remoteChained.defaults, r), i.parents = t, i.url = n), this.each(function() {
			function t(t) {
				var r = e(":selected", n).val();
				e("option", n).remove();
				var i = [];
				if (e.isArray(t)) i = t;
				else
					for (var s in t) t.hasOwnProperty(s) && i.push([s, t[s]]);
				for (var o = 0; o !== i.length; o++) {
					var u = i[o][0],
						f = i[o][1];
					if ("selected" !== u) {
						var l = e("<option />").val(u).append(f);
						e(n).append(l)
					} else r = f
				}
				e(n).children().each(function() {
					e(this).val() === r && e(this).attr("selected", "selected")
				}), 1 === e("option", n).size() && "" === e(n).val() ? e(n).prop("disabled", !0) : e(n).prop("disabled", !1)
			}
			var n = this,
				r = !1;
			e(i.parents).each(function() {
				e(this).bind("change", function() {
					var s = {};
					e(i.parents).each(function() {
						var t = e(this).attr(i.attribute),
							r = e(":selected", this).val();
						s[t] = r, i.depends && e(i.depends).each(function() {
							if (n !== this) {
								var t = e(this).attr(i.attribute),
									r = e(this).val();
								s[t] = r
							}
						})
					}), r && e.isFunction(r.abort) && (r.abort(), r = !1), i.clear && (i.loading ? t.call(n, {
						"": i.loading
					}) : e("option", n).remove(), e(n).trigger("change")), r = e.getJSON(i.url, s, function(r) {
						t.call(n, r), e(n).trigger("change")
					})
				}), i.bootstrap && (t.call(n, i.bootstrap), i.bootstrap = null)
			})
		})
	}, e.fn.remoteChainedTo = e.fn.remoteChained, e.fn.remoteChained.defaults = {
		attribute: "name",
		depends: null,
		bootstrap: null,
		loading: null,
		clear: !1
	}
}(window.jQuery || window.Zepto, window, document);
window.ParsleyExtend = window.ParsleyExtend || {}, window.ParsleyExtend = $.extend(window.ParsleyExtend, {
	asyncSupport: !0,
	asyncValidators: $.extend({
		"default": {
			fn: function(e) {
				return "resolved" === e.state()
			},
			url: !1
		},
		reverse: {
			fn: function(e) {
				return "rejected" === e.state()
			},
			url: !1
		}
	}, window.ParsleyExtend.asyncValidators),
	addAsyncValidator: function(e, t, n) {
		return this.asyncValidators[e.toLowerCase()] = {
			fn: t,
			url: n || !1
		}, this
	},
	asyncValidate: function() {
		return "ParsleyForm" === this.__class__ ? this._asyncValidateForm.apply(this, arguments) : this._asyncValidateField.apply(this, arguments)
	},
	asyncIsValid: function() {
		return "ParsleyField" === this.__class__ ? this._asyncIsValidField.apply(this, arguments) : this._asyncIsValidForm.apply(this, arguments)
	},
	onSubmitValidate: function(e) {
		var t = this;
		if (!0 !== e.parsley) return this.submitEvent = $.extend(!0, {}, e), e instanceof $.Event && (e.stopImmediatePropagation(), e.preventDefault()), this._asyncValidateForm(void 0, e).done(function() {
			t.submitEvent.isDefaultPrevented() || t.$element.trigger($.extend($.Event("submit"), {
				parsley: !0
			}))
		})
	},
	eventValidate: function(e) {
		(new RegExp("key")).test(e.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.asyncValidate())
	},
	_asyncValidateForm: function(e) {
		var t = this,
			n = [];
		this._refreshFields(), $.emit("parsley:form:validate", this);
		for (var r = 0; r < this.fields.length; r++) e && e !== this.fields[r].options.group || n.push(this.fields[r]._asyncValidateField());
		return $.when.apply($, n).always(function() {
			$.emit("parsley:form:validated", t)
		})
	},
	_asyncIsValidForm: function(e, t) {
		var n = [];
		this._refreshFields();
		for (var r = 0; r < this.fields.length; r++) e && e !== this.fields[r].options.group || n.push(this.fields[r]._asyncIsValidField(t));
		return $.when.apply($, n)
	},
	_asyncValidateField: function(e) {
		var t = this;
		return $.emit("parsley:field:validate", this), this._asyncIsValidField(e).done(function() {
			$.emit("parsley:field:success", t)
		}).fail(function() {
			$.emit("parsley:field:error", t)
		}).always(function() {
			$.emit("parsley:field:validated", t)
		})
	},
	_asyncIsValidField: function(e, t) {
		var n = $.Deferred();
		return !1 === this.isValid(e, t) ? n.rejectWith(this) : "undefined" != typeof this.constraintsByName.remote ? this._remote(n) : n.resolveWith(this), n.promise()
	},
	_remote: function(e) {
		var t, n, r = this,
			i = {},
			s = this.options.remoteValidator || (!0 === this.options.remoteReverse ? "reverse" : "default");
		if (s = s.toLowerCase(), "undefined" == typeof this.asyncValidators[s]) throw new Error("Calling an undefined async validator: `" + s + "`");
		i[this.$element.attr("name") || this.$element.attr("id")] = this.getValue(), t = $.extend(!0, {}, {
			url: this.asyncValidators[s].url || this.options.remote,
			data: i,
			type: "GET"
		}, this.options.remoteOptions || {}), n = $.param(t), "undefined" == typeof this._remoteCache && (this._remoteCache = {}), this._remoteCache[n] || (this._xhr && "pending" === this._xhr.state() && this._xhr.abort(), this._xhr = $.ajax(t), this._remoteCache[n] = this._xhr), this._remoteCache[n].done(function(t, n, i) {
			r._handleRemoteResult(s, i, e)
		}).fail(function(t, n) {
			"abort" !== n && r._handleRemoteResult(s, t, e)
		})
	},
	_handleRemoteResult: function(e, t, n) {
		return "function" == typeof this.asyncValidators[e].fn && this.asyncValidators[e].fn(t) ? void n.resolveWith(this) : (this.validationResult = [new window.ParsleyValidator.Validator.Violation(this.constraintsByName.remote, this.getValue(), null)], void n.rejectWith(this))
	}
}), window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.validators = window.ParsleyConfig.validators || {}, window.ParsleyConfig.validators.remote = {
	fn: function() {
		return !0
	},
	priority: -1
}, ! function(e) {
	var t = {
			attr: function(e, t, n) {
				var r, i = {},
					s = new RegExp("^" + t, "i");
				if ("undefined" == typeof e || "undefined" == typeof e[0]) return {};
				for (var o in e[0].attributes)
					if (r = e[0].attributes[o], "undefined" != typeof r && null !== r && r.specified && s.test(r.name)) {
						if ("undefined" != typeof n && (new RegExp(n + "$", "i")).test(r.name)) return !0;
						i[this.camelize(r.name.replace(t, ""))] = this.deserializeValue(r.value)
					}
				return "undefined" == typeof n ? i : !1
			},
			setAttr: function(e, t, n, r) {
				e[0].setAttribute(this.dasherize(t + n), String(r))
			},
			get: function(e, t) {
				for (var n = 0, r = (t || "").split("."); this.isObject(e) || this.isArray(e);)
					if (e = e[r[n++]], n === r.length) return e;
				return void 0
			},
			hash: function(e) {
				return String(Math.random()).substring(2, e ? e + 2 : 9)
			},
			isArray: function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			},
			isObject: function(e) {
				return e === Object(e)
			},
			deserializeValue: function(t) {
				var n;
				try {
					return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : isNaN(n = Number(t)) ? /^[\[\{]/.test(t) ? e.parseJSON(t) : t : n) : t
				} catch (r) {
					return t
				}
			},
			camelize: function(e) {
				return e.replace(/-+(.)?/g, function(e, t) {
					return t ? t.toUpperCase() : ""
				})
			},
			dasherize: function(e) {
				return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
			}
		},
		n = {
			namespace: "data-parsley-",
			inputs: "input, textarea, select",
			excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
			priorityEnabled: !0,
			uiEnabled: !0,
			validationThreshold: 3,
			focus: "first",
			trigger: !1,
			errorClass: "parsley-error",
			successClass: "parsley-success",
			classHandler: function() {},
			errorsContainer: function() {},
			errorsWrapper: '<ul class="parsley-errors-list"></ul>',
			errorTemplate: "<li></li>"
		},
		r = function() {};
	r.prototype = {
			asyncSupport: !1,
			actualizeOptions: function() {
				return this.options = this.OptionsFactory.get(this), this
			},
			validateThroughValidator: function(e, t, n) {
				return window.ParsleyValidator.validate.apply(window.ParsleyValidator, [e, t, n])
			},
			subscribe: function(t, n) {
				return e.listenTo(this, t.toLowerCase(), n), this
			},
			unsubscribe: function(t) {
				return e.unsubscribeTo(this, t.toLowerCase()), this
			},
			reset: function() {
				if ("ParsleyForm" !== this.__class__) return e.emit("parsley:field:reset", this);
				for (var t = 0; t < this.fields.length; t++) e.emit("parsley:field:reset", this.fields[t]);
				e.emit("parsley:form:reset", this)
			},
			destroy: function() {
				if ("ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void e.emit("parsley:field:destroy", this);
				for (var t = 0; t < this.fields.length; t++) this.fields[t].destroy();
				this.$element.removeData("Parsley"), e.emit("parsley:form:destroy", this)
			}
		},
		function(e) {
			var t = function(e) {
				return this.__class__ = "Validator", this.__version__ = "0.5.8", this.options = e || {}, this.bindingKey = this.options.bindingKey || "_validatorjsConstraint", this
			};
			t.prototype = {
				constructor: t,
				validate: function(e, t, n) {
					if ("string" != typeof e && "object" != typeof e) throw new Error("You must validate an object or a string");
					return "string" == typeof e || o(e) ? this._validateString(e, t, n) : this.isBinded(e) ? this._validateBindedObject(e, t) : this._validateObject(e, t, n)
				},
				bind: function(e, t) {
					if ("object" != typeof e) throw new Error("Must bind a Constraint to an object");
					return e[this.bindingKey] = new n(t), this
				},
				unbind: function(e) {
					return "undefined" == typeof e._validatorjsConstraint ? this : (delete e[this.bindingKey], this)
				},
				isBinded: function(e) {
					return "undefined" != typeof e[this.bindingKey]
				},
				getBinded: function(e) {
					return this.isBinded(e) ? e[this.bindingKey] : null
				},
				_validateString: function(e, t, n) {
					var s, u = [];
					o(t) || (t = [t]);
					for (var a = 0; a < t.length; a++) {
						if (!(t[a] instanceof i)) throw new Error("You must give an Assert or an Asserts array to validate a string");
						s = t[a].check(e, n), s instanceof r && u.push(s)
					}
					return u.length ? u : !0
				},
				_validateObject: function(e, t, r) {
					if ("object" != typeof t) throw new Error("You must give a constraint to validate an object");
					return t instanceof n ? t.check(e, r) : (new n(t)).check(e, r)
				},
				_validateBindedObject: function(e, t) {
					return e[this.bindingKey].check(e, t)
				}
			}, t.errorCode = {
				must_be_a_string: "must_be_a_string",
				must_be_an_array: "must_be_an_array",
				must_be_a_number: "must_be_a_number",
				must_be_a_string_or_array: "must_be_a_string_or_array"
			};
			var n = function(e, t) {
				if (this.__class__ = "Constraint", this.options = t || {}, this.nodes = {}, e) try {
					this._bootstrap(e)
				} catch (n) {
					throw new Error("Should give a valid mapping object to Constraint", n, e)
				}
				return this
			};
			n.prototype = {
				constructor: n,
				check: function(e, t) {
					var n, r = {};
					for (var u in this.options.strict ? this.nodes : e)
						if (this.options.strict ? this.has(u, e) : this.has(u)) n = this._check(u, e[u], t), (o(n) && n.length > 0 || !o(n) && !s(n)) && (r[u] = n);
						else if (this.options.strict) try {
						(new i).HaveProperty(u).validate(e)
					} catch (a) {
						r[u] = a
					}
					return s(r) ? !0 : r
				},
				add: function(e, t) {
					if (t instanceof i || o(t) && t[0] instanceof i) return this.nodes[e] = t, this;
					if ("object" == typeof t && !o(t)) return this.nodes[e] = t instanceof n ? t : new n(t), this;
					throw new Error("Should give an Assert, an Asserts array, a Constraint", t)
				},
				has: function(e, t) {
					return t = "undefined" != typeof t ? t : this.nodes, "undefined" != typeof t[e]
				},
				get: function(e, t) {
					return this.has(e) ? this.nodes[e] : t || null
				},
				remove: function(e) {
					var t = [];
					for (var n in this.nodes) n !== e && (t[n] = this.nodes[n]);
					return this.nodes = t, this
				},
				_bootstrap: function(e) {
					if (e instanceof n) return this.nodes = e.nodes;
					for (var t in e) this.add(t, e[t])
				},
				_check: function(e, t, r) {
					if (this.nodes[e] instanceof i) return this._checkAsserts(t, [this.nodes[e]], r);
					if (o(this.nodes[e])) return this._checkAsserts(t, this.nodes[e], r);
					if (this.nodes[e] instanceof n) return this.nodes[e].check(t, r);
					throw new Error("Invalid node", this.nodes[e])
				},
				_checkAsserts: function(e, t, n) {
					for (var r, i = [], s = 0; s < t.length; s++) r = t[s].check(e, n), "undefined" != typeof r && !0 !== r && i.push(r);
					return i
				}
			};
			var r = function(e, t, n) {
				if (this.__class__ = "Violation", !(e instanceof i)) throw new Error("Should give an assertion implementing the Assert interface");
				this.assert = e, this.value = t, "undefined" != typeof n && (this.violation = n)
			};
			r.prototype = {
				show: function() {
					var e = {
						assert: this.assert.__class__,
						value: this.value
					};
					return this.violation && (e.violation = this.violation), e
				},
				__toString: function() {
					return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
				},
				getViolation: function() {
					var e, t;
					for (e in this.violation) t = this.violation[e];
					return {
						constraint: e,
						expected: t
					}
				}
			};
			var i = function(e) {
				return this.__class__ = "Assert", this.__parentClass__ = this.__class__, this.groups = [], "undefined" != typeof e && this.addGroup(e), this
			};
			i.prototype = {
				construct: i,
				check: function(e, t) {
					if (!(t && !this.hasGroup(t) || !t && this.hasGroups())) try {
						return this.validate(e, t)
					} catch (n) {
						return n
					}
				},
				hasGroup: function(e) {
					return o(e) ? this.hasOneOf(e) : "Any" === e ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(e) : "Default" === e
				},
				hasOneOf: function(e) {
					for (var t = 0; t < e.length; t++)
						if (this.hasGroup(e[t])) return !0;
					return !1
				},
				hasGroups: function() {
					return this.groups.length > 0
				},
				addGroup: function(e) {
					return o(e) ? this.addGroups(e) : (this.hasGroup(e) || this.groups.push(e), this)
				},
				removeGroup: function(e) {
					for (var t = [], n = 0; n < this.groups.length; n++) e !== this.groups[n] && t.push(this.groups[n]);
					return this.groups = t, this
				},
				addGroups: function(e) {
					for (var t = 0; t < e.length; t++) this.addGroup(e[t]);
					return this
				},
				HaveProperty: function(e) {
					return this.__class__ = "HaveProperty", this.node = e, this.validate = function(e) {
						if ("undefined" == typeof e[this.node]) throw new r(this, e, {
							value: this.node
						});
						return !0
					}, this
				},
				Blank: function() {
					return this.__class__ = "Blank", this.validate = function(e) {
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if ("" !== e.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new r(this, e);
						return !0
					}, this
				},
				Callback: function(e) {
					if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof e) throw new Error("Callback must be instanciated with a function");
					return this.fn = e, this.validate = function(e) {
						var t = this.fn.apply(this, [e].concat(this.arguments));
						if (!0 !== t) throw new r(this, e, {
							result: t
						});
						return !0
					}, this
				},
				Choice: function(e) {
					if (this.__class__ = "Choice", !o(e) && "function" != typeof e) throw new Error("Choice must be instanciated with an array or a function");
					return this.list = e, this.validate = function(e) {
						for (var t = "function" == typeof this.list ? this.list() : this.list, n = 0; n < t.length; n++)
							if (e === t[n]) return !0;
						throw new r(this, e, {
							choices: t
						})
					}, this
				},
				Collection: function(e) {
					return this.__class__ = "Collection", this.constraint = "undefined" != typeof e ? new n(e) : !1, this.validate = function(e, n) {
						var i, u = new t,
							a = 0,
							f = {},
							l = this.groups.length ? this.groups : n;
						if (!o(e)) throw new r(this, array, {
							value: t.errorCode.must_be_an_array
						});
						for (var c = 0; c < e.length; c++) i = this.constraint ? u.validate(e[c], this.constraint, l) : u.validate(e[c], l), s(i) || (f[a] = i), a++;
						return s(f) ? !0 : f
					}, this
				},
				Count: function(e) {
					return this.__class__ = "Count", this.count = e, this.validate = function(e) {
						if (!o(e)) throw new r(this, e, {
							value: t.errorCode.must_be_an_array
						});
						var n = "function" == typeof this.count ? this.count(e) : this.count;
						if (isNaN(Number(n))) throw new Error("Count must be a valid interger", n);
						if (n !== e.length) throw new r(this, e, {
							count: n
						});
						return !0
					}, this
				},
				Email: function() {
					return this.__class__ = "Email", this.validate = function(e) {
						var n = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if (!n.test(e)) throw new r(this, e);
						return !0
					}, this
				},
				Eql: function(e) {
					if (this.__class__ = "Eql", "undefined" == typeof e) throw new Error("Equal must be instanciated with an Array or an Object");
					return this.eql = e, this.validate = function(e) {
						var t = "function" == typeof this.eql ? this.eql(e) : this.eql;
						if (!u.eql(t, e)) throw new r(this, e, {
							eql: t
						});
						return !0
					}, this
				},
				EqualTo: function(e) {
					if (this.__class__ = "EqualTo", "undefined" == typeof e) throw new Error("EqualTo must be instanciated with a value or a function");
					return this.reference = e, this.validate = function(e) {
						var t = "function" == typeof this.reference ? this.reference(e) : this.reference;
						if (t !== e) throw new r(this, e, {
							value: t
						});
						return !0
					}, this
				},
				GreaterThan: function(e) {
					if (this.__class__ = "GreaterThan", "undefined" == typeof e) throw new Error("Should give a threshold value");
					return this.threshold = e, this.validate = function(e) {
						if ("" === e || isNaN(Number(e))) throw new r(this, e, {
							value: t.errorCode.must_be_a_number
						});
						if (this.threshold >= e) throw new r(this, e, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				GreaterThanOrEqual: function(e) {
					if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof e) throw new Error("Should give a threshold value");
					return this.threshold = e, this.validate = function(e) {
						if ("" === e || isNaN(Number(e))) throw new r(this, e, {
							value: t.errorCode.must_be_a_number
						});
						if (this.threshold > e) throw new r(this, e, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				InstanceOf: function(e) {
					if (this.__class__ = "InstanceOf", "undefined" == typeof e) throw new Error("InstanceOf must be instanciated with a value");
					return this.classRef = e, this.validate = function(e) {
						if (!0 != e instanceof this.classRef) throw new r(this, e, {
							classRef: this.classRef
						});
						return !0
					}, this
				},
				IPv4: function() {
					return this.__class__ = "IPv4", this.validate = function(e) {
						var n = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if (!n.test(e)) throw new r(this, e);
						return !0
					}, this
				},
				Length: function(e) {
					if (this.__class__ = "Length", !e.min && !e.max) throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
					return this.min = e.min, this.max = e.max, this.validate = function(e) {
						if ("string" != typeof e && !o(e)) throw new r(this, e, {
							value: t.errorCode.must_be_a_string_or_array
						});
						if ("undefined" != typeof this.min && this.min === this.max && e.length !== this.min) throw new r(this, e, {
							min: this.min,
							max: this.max
						});
						if ("undefined" != typeof this.max && e.length > this.max) throw new r(this, e, {
							max: this.max
						});
						if ("undefined" != typeof this.min && e.length < this.min) throw new r(this, e, {
							min: this.min
						});
						return !0
					}, this
				},
				LessThan: function(e) {
					if (this.__class__ = "LessThan", "undefined" == typeof e) throw new Error("Should give a threshold value");
					return this.threshold = e, this.validate = function(e) {
						if ("" === e || isNaN(Number(e))) throw new r(this, e, {
							value: t.errorCode.must_be_a_number
						});
						if (this.threshold <= e) throw new r(this, e, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				LessThanOrEqual: function(e) {
					if (this.__class__ = "LessThanOrEqual", "undefined" == typeof e) throw new Error("Should give a threshold value");
					return this.threshold = e, this.validate = function(e) {
						if ("" === e || isNaN(Number(e))) throw new r(this, e, {
							value: t.errorCode.must_be_a_number
						});
						if (this.threshold < e) throw new r(this, e, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				Mac: function() {
					return this.__class__ = "Mac", this.validate = function(e) {
						var n = /^(?:[0-9A-F]{2}:){5}[0-9A-F]{2}$/i;
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if (!n.test(e)) throw new r(this, e);
						return !0
					}, this
				},
				NotNull: function() {
					return this.__class__ = "NotNull", this.validate = function(e) {
						if (null === e || "undefined" == typeof e) throw new r(this, e);
						return !0
					}, this
				},
				NotBlank: function() {
					return this.__class__ = "NotBlank", this.validate = function(e) {
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if ("" === e.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new r(this, e);
						return !0
					}, this
				},
				Null: function() {
					return this.__class__ = "Null", this.validate = function(e) {
						if (null !== e) throw new r(this, e);
						return !0
					}, this
				},
				Range: function(e, t) {
					if (this.__class__ = "Range", "undefined" == typeof e || "undefined" == typeof t) throw new Error("Range assert expects min and max values");
					return this.min = e, this.max = t, this.validate = function(e) {
						try {
							return "string" == typeof e && isNaN(Number(e)) || o(e) ? (new i).Length({
								min: this.min,
								max: this.max
							}).validate(e) : (new i).GreaterThanOrEqual(this.min).validate(e) && (new i).LessThanOrEqual(this.max).validate(e), !0
						} catch (t) {
							throw new r(this, e, t.violation)
						}
						return !0
					}, this
				},
				Regexp: function(e, n) {
					if (this.__class__ = "Regexp", "undefined" == typeof e) throw new Error("You must give a regexp");
					return this.regexp = e, this.flag = n || "", this.validate = function(e) {
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if (!(new RegExp(this.regexp, this.flag)).test(e)) throw new r(this, e, {
							regexp: this.regexp,
							flag: this.flag
						});
						return !0
					}, this
				},
				Required: function() {
					return this.__class__ = "Required", this.validate = function(e) {
						if ("undefined" == typeof e) throw new r(this, e);
						try {
							"string" == typeof e ? (new i).NotNull().validate(e) && (new i).NotBlank().validate(e) : !0 === o(e) && (new i).Length({
								min: 1
							}).validate(e)
						} catch (t) {
							throw new r(this, e)
						}
						return !0
					}, this
				},
				Unique: function(e) {
					return this.__class__ = "Unique", "object" == typeof e && (this.key = e.key), this.validate = function(e) {
						var n, i = [];
						if (!o(e)) throw new r(this, e, {
							value: t.errorCode.must_be_an_array
						});
						for (var s = 0; s < e.length; s++)
							if (n = "object" == typeof e[s] ? e[s][this.key] : e[s], "undefined" != typeof n) {
								if (-1 !== i.indexOf(n)) throw new r(this, e, {
									value: n
								});
								i.push(n)
							}
						return !0
					}, this
				}
			}, e.Assert = i, e.Validator = t, e.Violation = r, e.Constraint = n, Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
				if (null === this) throw new TypeError;
				var t = Object(this),
					n = t.length >>> 0;
				if (0 === n) return -1;
				var r = 0;
				if (arguments.length > 1 && (r = Number(arguments[1]), r != r ? r = 0 : 0 !== r && 1 / 0 != r && r != -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= n) return -1;
				for (var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0); n > i; i++)
					if (i in t && t[i] === e) return i;
				return -1
			});
			var s = function(e) {
					for (var t in e) return !1;
					return !0
				},
				o = function(e) {
					return "[object Array]" === Object.prototype.toString.call(e)
				},
				u = {
					eql: function(e, t) {
						if (e === t) return !0;
						if ("undefined" != typeof Buffer && Buffer.isBuffer(e) && Buffer.isBuffer(t)) {
							if (e.length !== t.length) return !1;
							for (var n = 0; n < e.length; n++)
								if (e[n] !== t[n]) return !1;
							return !0
						}
						return e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : "object" != typeof e && "object" != typeof t ? e == t : this.objEquiv(e, t)
					},
					isUndefinedOrNull: function(e) {
						return null === e || "undefined" == typeof e
					},
					isArguments: function(e) {
						return "[object Arguments]" == Object.prototype.toString.call(e)
					},
					keys: function(e) {
						if (Object.keys) return Object.keys(e);
						var t = [];
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
						return t
					},
					objEquiv: function(e, t) {
						if (this.isUndefinedOrNull(e) || this.isUndefinedOrNull(t)) return !1;
						if (e.prototype !== t.prototype) return !1;
						if (this.isArguments(e)) return this.isArguments(t) ? eql(pSlice.call(e), pSlice.call(t)) : !1;
						try {
							var n, r, i = this.keys(e),
								s = this.keys(t);
							if (i.length !== s.length) return !1;
							for (i.sort(), s.sort(), r = i.length - 1; r >= 0; r--)
								if (i[r] != s[r]) return !1;
							for (r = i.length - 1; r >= 0; r--)
								if (n = i[r], !this.eql(e[n], t[n])) return !1;
							return !0
						} catch (o) {
							return !1
						}
					}
				};
			"function" == typeof define && define.amd && define("validator", [], function() {
				return e
			})
		}("undefined" == typeof exports ? this["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = {} : exports);
	var i = function(e, t) {
		this.__class__ = "ParsleyValidator", this.Validator = Validator, this.locale = "en", this.init(e || {}, t || {})
	};
	i.prototype = {
		init: function(t, n) {
			this.catalog = n;
			for (var r in t) this.addValidator(r, t[r].fn, t[r].priority);
			e.emit("parsley:validator:init")
		},
		setLocale: function(e) {
			if ("undefined" == typeof this.catalog[e]) throw new Error(e + " is not available in the catalog");
			return this.locale = e, this
		},
		addCatalog: function(e, t, n) {
			return "object" == typeof t && (this.catalog[e] = t), !0 === n ? this.setLocale(e) : this
		},
		addMessage: function(e, t, n) {
			return void 0 === typeof this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t.toLowerCase()] = n, this
		},
		validate: function() {
			return (new this.Validator.Validator).validate.apply(new Validator.Validator, arguments)
		},
		addValidator: function(t, n, r) {
			return this.validators[t.toLowerCase()] = function(t) {
				return e.extend((new Validator.Assert).Callback(n, t), {
					priority: r
				})
			}, this
		},
		updateValidator: function(e, t, n) {
			return addValidator(e, t, n)
		},
		removeValidator: function(e) {
			return delete this.validators[e], this
		},
		getErrorMessage: function(e) {
			var t;
			return t = "type" === e.name ? this.catalog[this.locale][e.name][e.requirements] : this.formatMessage(this.catalog[this.locale][e.name], e.requirements), "" !== t ? t : this.catalog[this.locale].defaultMessage
		},
		formatMessage: function(e, t) {
			if ("object" == typeof t) {
				for (var n in t) e = this.formatMessage(e, t[n]);
				return e
			}
			return "string" == typeof e ? e.replace(new RegExp("%s", "i"), t) : ""
		},
		validators: {
			notblank: function() {
				return e.extend((new Validator.Assert).NotBlank(), {
					priority: 2
				})
			},
			required: function() {
				return e.extend((new Validator.Assert).Required(), {
					priority: 512
				})
			},
			type: function(t) {
				var n;
				switch (t) {
					case "email":
						n = (new Validator.Assert).Email();
						break;
					case "number":
						n = (new Validator.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
						break;
					case "integer":
						n = (new Validator.Assert).Regexp("^-?\\d+$");
						break;
					case "digits":
						n = (new Validator.Assert).Regexp("^\\d+$");
						break;
					case "alphanum":
						n = (new Validator.Assert).Regexp("^\\w+$", "i");
						break;
					case "url":
						n = (new Validator.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
						break;
					default:
						throw new Error("validator type `" + t + "` is not supported")
				}
				return e.extend(n, {
					priority: 256
				})
			},
			pattern: function(t) {
				var n = "";
				return /^\/.*\/(?:[gimy]*)$/.test(t) && (n = t.replace(/.*\/([gimy]*)$/, "$1"), t = t.replace(new RegExp("^/(.*?)/" + n + "$"), "$1")), e.extend((new Validator.Assert).Regexp(t, n), {
					priority: 64
				})
			},
			minlength: function(t) {
				return e.extend((new Validator.Assert).Length({
					min: t
				}), {
					priority: 30,
					requirementsTransformer: function() {
						return "string" != typeof t || isNaN(t) ? t : parseInt(t, 10)
					}
				})
			},
			maxlength: function(t) {
				return e.extend((new Validator.Assert).Length({
					max: t
				}), {
					priority: 30,
					requirementsTransformer: function() {
						return "string" != typeof t || isNaN(t) ? t : parseInt(t, 10)
					}
				})
			},
			length: function(t) {
				return e.extend((new Validator.Assert).Length({
					min: t[0],
					max: t[1]
				}), {
					priority: 32
				})
			},
			mincheck: function(e) {
				return this.minlength(e)
			},
			maxcheck: function(e) {
				return this.maxlength(e)
			},
			check: function(e) {
				return this.length(e)
			},
			min: function(t) {
				return e.extend((new Validator.Assert).GreaterThanOrEqual(t), {
					priority: 30,
					requirementsTransformer: function() {
						return "string" != typeof t || isNaN(t) ? t : parseInt(t, 10)
					}
				})
			},
			max: function(t) {
				return e.extend((new Validator.Assert).LessThanOrEqual(t), {
					priority: 30,
					requirementsTransformer: function() {
						return "string" != typeof t || isNaN(t) ? t : parseInt(t, 10)
					}
				})
			},
			range: function(t) {
				return e.extend((new Validator.Assert).Range(t[0], t[1]), {
					priority: 32,
					requirementsTransformer: function() {
						for (var e = 0; e < t.length; e++) t[e] = "string" != typeof t[e] || isNaN(t[e]) ? t[e] : parseInt(t[e], 10);
						return t
					}
				})
			},
			equalto: function(t) {
				return e.extend((new Validator.Assert).EqualTo(t), {
					priority: 256,
					requirementsTransformer: function() {
						return e(t).length ? e(t).val() : t
					}
				})
			}
		}
	};
	var s = function() {
		this.__class__ = "ParsleyUI"
	};
	s.prototype = {
		listen: function() {
			return e.listen("parsley:form:init", this, this.setupForm), e.listen("parsley:field:init", this, this.setupField), e.listen("parsley:field:validated", this, this.reflow), e.listen("parsley:form:validated", this, this.focus), e.listen("parsley:field:reset", this, this.reset), e.listen("parsley:form:destroy", this, this.destroy), e.listen("parsley:field:destroy", this, this.destroy), this
		},
		reflow: function(e) {
			if ("undefined" != typeof e._ui && !1 !== e._ui.active) {
				var t = this._diff(e.validationResult, e._ui.lastValidationResult);
				e._ui.lastValidationResult = e.validationResult, e._ui.validatedOnce = !0, this.manageStatusClass(e), this.manageErrorsMessages(e, t), this.actualizeTriggers(e), (t.kept.length || t.added.length) && "undefined" == typeof e._ui.failedOnce && this.manageFailingFieldTrigger(e)
			}
		},
		getErrorsMessages: function(e) {
			if (!0 === e.validationResult) return [];
			for (var t = [], n = 0; n < e.validationResult.length; n++) t.push(this._getErrorMessage(e, e.validationResult[n].assert));
			return t
		},
		manageStatusClass: function(e) {
			!0 === e.validationResult ? this._successClass(e) : e.validationResult.length > 0 ? this._errorClass(e) : this._resetClass(e)
		},
		manageErrorsMessages: function(t, n) {
			if ("undefined" == typeof t.options.errorsMessagesDisabled) {
				if ("undefined" != typeof t.options.errorMessage) return n.added.length || n.kept.length ? (0 === t._ui.$errorsWrapper.find(".parsley-custom-error-message").length && t._ui.$errorsWrapper.append(e(t.options.errorTemplate).addClass("parsley-custom-error-message")), t._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(t.options.errorMessage)) : t._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
				for (var r = 0; r < n.removed.length; r++) this.removeError(t, n.removed[r].assert.name, !0);
				for (r = 0; r < n.added.length; r++) this.addError(t, n.added[r].assert.name, void 0, n.added[r].assert, !0);
				for (r = 0; r < n.kept.length; r++) this.updateError(t, n.kept[r].assert.name, void 0, n.kept[r].assert, !0)
			}
		},
		addError: function(t, n, r, i, s) {
			t._ui.$errorsWrapper.addClass("filled").append(e(t.options.errorTemplate).addClass("parsley-" + n).html(r || this._getErrorMessage(t, i))), !0 !== s && this._errorClass(t)
		},
		updateError: function(e, t, n, r, i) {
			e._ui.$errorsWrapper.addClass("filled").find(".parsley-" + t).html(n || this._getErrorMessage(e, r)), !0 !== i && this._errorClass(e)
		},
		removeError: function(e, t, n) {
			e._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + t).remove(), !0 !== n && this.manageStatusClass(e)
		},
		focus: function(e) {
			if (!0 === e.validationResult || "none" === e.options.focus) return e._focusedField = null;
			e._focusedField = null;
			for (var t = 0; t < e.fields.length; t++)
				if (!0 !== e.fields[t].validationResult && e.fields[t].validationResult.length > 0 && "undefined" == typeof e.fields[t].options.noFocus) {
					if ("first" === e.options.focus) return e._focusedField = e.fields[t].$element, e._focusedField.focus();
					e._focusedField = e.fields[t].$element
				}
			return null === e._focusedField ? null : e._focusedField.focus()
		},
		_getErrorMessage: function(e, t) {
			var n = t.name + "Message";
			return "undefined" != typeof e.options[n] ? window.ParsleyValidator.formatMessage(e.options[n], t.requirements) : window.ParsleyValidator.getErrorMessage(t)
		},
		_diff: function(e, t, n) {
			for (var r = [], i = [], s = 0; s < e.length; s++) {
				for (var o = !1, u = 0; u < t.length; u++)
					if (e[s].assert.name === t[u].assert.name) {
						o = !0;
						break
					}
				o ? i.push(e[s]) : r.push(e[s])
			}
			return {
				kept: i,
				added: r,
				removed: n ? [] : this._diff(t, e, !0).added
			}
		},
		setupForm: function(t) {
			t.$element.on("submit.Parsley", !1, e.proxy(t.onSubmitValidate, t)), !1 !== t.options.uiEnabled && t.$element.attr("novalidate", "")
		},
		setupField: function(t) {
			var n = {
				active: !1
			};
			!1 !== t.options.uiEnabled && (n.active = !0, t.$element.attr(t.options.namespace + "id", t.__id__), n.$errorClassHandler = this._manageClassHandler(t), n.errorsWrapperId = "parsley-id-" + ("undefined" != typeof t.options.multiple ? "multiple-" + t.options.multiple : t.__id__), n.$errorsWrapper = e(t.options.errorsWrapper).attr("id", n.errorsWrapperId), n.lastValidationResult = [], n.validatedOnce = !1, n.validationInformationVisible = !1, t._ui = n, this._insertErrorWrapper(t), this.actualizeTriggers(t))
		},
		_manageClassHandler: function(t) {
			if ("string" == typeof t.options.classHandler && e(t.options.classHandler).length) return e(t.options.classHandler);
			var n = t.options.classHandler(t);
			return "undefined" != typeof n && n.length ? n : "undefined" == typeof t.options.multiple || t.$element.is("select") ? t.$element : t.$element.parent()
		},
		_insertErrorWrapper: function(t) {
			var n;
			if ("string" == typeof t.options.errorsContainer) {
				if (e(t.options.errorsContainer + "").length) return e(t.options.errorsContainer).append(t._ui.$errorsWrapper);
				window.console && window.console.warn && window.console.warn("The errors container `" + t.options.errorsContainer + "` does not exist in DOM")
			}
			return "function" == typeof t.options.errorsContainer && (n = t.options.errorsContainer(t)), "undefined" != typeof n && n.length ? n.append(t._ui.$errorsWrapper) : "undefined" == typeof t.options.multiple ? t.$element.after(t._ui.$errorsWrapper) : t.$element.parent().after(t._ui.$errorsWrapper)
		},
		actualizeTriggers: function(t) {
			var n = this;
			if (t.options.multiple ? e("[" + t.options.namespace + 'multiple="' + t.options.multiple + '"]').each(function() {
					e(this).off(".Parsley")
				}) : t.$element.off(".Parsley"), !1 !== t.options.trigger) {
				var r = t.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
				"" !== r && (t.options.multiple ? e("[" + t.options.namespace + 'multiple="' + t.options.multiple + '"]').each(function() {
					e(this).on(r.split(" ").join(".Parsley ") + ".Parsley", !1, e.proxy("function" == typeof t.eventValidate ? t.eventValidate : n.eventValidate, t))
				}) : t.$element.on(r.split(" ").join(".Parsley ") + ".Parsley", !1, e.proxy("function" == typeof t.eventValidate ? t.eventValidate : this.eventValidate, t)))
			}
		},
		eventValidate: function(e) {
			(new RegExp("key")).test(e.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
		},
		manageFailingFieldTrigger: function(t) {
			return t._ui.failedOnce = !0, t.options.multiple && e("[" + t.options.namespace + 'multiple="' + t.options.multiple + '"]').each(function() {
				return (new RegExp("change", "i")).test(e(this).parsley().options.trigger || "") ? void 0 : e(this).on("change.ParsleyFailedOnce", !1, e.proxy(t.validate, t))
			}), t.$element.is("select") && !(new RegExp("change", "i")).test(t.options.trigger || "") ? t.$element.on("change.ParsleyFailedOnce", !1, e.proxy(t.validate, t)) : (new RegExp("keyup", "i")).test(t.options.trigger || "") ? void 0 : t.$element.on("keyup.ParsleyFailedOnce", !1, e.proxy(t.validate, t))
		},
		reset: function(t) {
			t.$element.off(".Parsley"), t.$element.off(".ParsleyFailedOnce"), "undefined" != typeof t._ui && "ParsleyForm" !== t.__class__ && (t._ui.$errorsWrapper.children().each(function() {
				e(this).remove()
			}), this._resetClass(t), t._ui.validatedOnce = !1, t._ui.lastValidationResult = [], t._ui.validationInformationVisible = !1)
		},
		destroy: function(e) {
			this.reset(e), "ParsleyForm" !== e.__class__ && (e._ui.$errorsWrapper.remove(), delete e._ui)
		},
		_successClass: function(e) {
			e._ui.validationInformationVisible = !0, e._ui.$errorClassHandler.removeClass(e.options.errorClass).addClass(e.options.successClass)
		},
		_errorClass: function(e) {
			e._ui.validationInformationVisible = !0, e._ui.$errorClassHandler.removeClass(e.options.successClass).addClass(e.options.errorClass)
		},
		_resetClass: function(e) {
			e._ui.$errorClassHandler.removeClass(e.options.successClass).removeClass(e.options.errorClass)
		}
	};
	var o = function(n, r, i, s) {
		this.__class__ = "OptionsFactory", this.__id__ = t.hash(4), this.formOptions = null, this.fieldOptions = null, this.staticOptions = e.extend(!0, {}, n, r, i, {
			namespace: s
		})
	};
	o.prototype = {
		get: function(e) {
			if ("undefined" == typeof e.__class__) throw new Error("Parsley Instance expected");
			switch (e.__class__) {
				case "Parsley":
					return this.staticOptions;
				case "ParsleyForm":
					return this.getFormOptions(e);
				case "ParsleyField":
				case "ParsleyFieldMultiple":
					return this.getFieldOptions(e);
				default:
					throw new Error("Instance " + e.__class__ + " is not supported")
			}
		},
		getFormOptions: function(n) {
			return this.formOptions = t.attr(n.$element, this.staticOptions.namespace), e.extend({}, this.staticOptions, this.formOptions)
		},
		getFieldOptions: function(n) {
			return this.fieldOptions = t.attr(n.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof n.parent && (this.formOptions = this.getFormOptions(n.parent)), e.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
		}
	};
	var u = function(n, r) {
		if (this.__class__ = "ParsleyForm", this.__id__ = t.hash(4), "OptionsFactory" !== t.get(r, "__class__")) throw new Error("You must give an OptionsFactory instance");
		this.OptionsFactory = r, this.$element = e(n), this.validationResult = null, this.options = this.OptionsFactory.get(this)
	};
	u.prototype = {
		onSubmitValidate: function(t) {
			return this.validate(void 0, void 0, t), !1 === this.validationResult && t instanceof e.Event && (t.stopImmediatePropagation(), t.preventDefault()), this
		},
		validate: function(t, n, r) {
			this.submitEvent = r, this.validationResult = !0;
			var i = [];
			this._refreshFields(), e.emit("parsley:form:validate", this);
			for (var s = 0; s < this.fields.length; s++) t && t !== this.fields[s].options.group || (i = this.fields[s].validate(n), !0 !== i && i.length > 0 && this.validationResult && (this.validationResult = !1));
			return e.emit("parsley:form:validated", this), this.validationResult
		},
		isValid: function(e, t) {
			this._refreshFields();
			for (var n = 0; n < this.fields.length; n++)
				if ((!e || e === this.fields[n].options.group) && !1 === this.fields[n].isValid(t)) return !1;
			return !0
		},
		_refreshFields: function() {
			return this.actualizeOptions()._bindFields()
		},
		_bindFields: function() {
			var e = this;
			return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function() {
				var t = new window.Parsley(this, {}, e);
				"ParsleyField" !== t.__class__ && "ParsleyFieldMultiple" !== t.__class__ || t.$element.is(t.options.excluded) || "undefined" == typeof e.fieldsMappedById[t.__class__ + "-" + t.__id__] && (e.fieldsMappedById[t.__class__ + "-" + t.__id__] = t, e.fields.push(t))
			}), this
		}
	};
	var a = function(n, r, i, s, o) {
			if (!(new RegExp("ParsleyField")).test(t.get(n, "__class__"))) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
			if ("function" != typeof window.ParsleyValidator.validators[r] && "Assert" !== window.ParsleyValidator.validators[r](i).__parentClass__) throw new Error("Valid validator expected");
			var u = function(e, n) {
				return "undefined" != typeof e.options[n + "Priority"] ? e.options[n + "Priority"] : t.get(window.ParsleyValidator.validators[n](i), "priority") || 2
			};
			return s = s || u(n, r), "function" == typeof window.ParsleyValidator.validators[r](i).requirementsTransformer && (i = window.ParsleyValidator.validators[r](i).requirementsTransformer()), e.extend(window.ParsleyValidator.validators[r](i), {
				name: r,
				requirements: i,
				priority: s,
				groups: [s],
				isDomConstraint: o || t.attr(n.$element, n.options.namespace, r)
			})
		},
		f = function(n, r, i) {
			this.__class__ = "ParsleyField", this.__id__ = t.hash(4), this.$element = e(n), "undefined" != typeof i ? (this.parent = i, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) : (this.OptionsFactory = r, this.options = this.OptionsFactory.get(this)), this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
		};
	f.prototype = {
		validate: function(t) {
			return this.value = this.getValue(), e.emit("parsley:field:validate", this), e.emit("parsley:field:" + (this.isValid(t, this.value) ? "success" : "error"), this), e.emit("parsley:field:validated", this), this.validationResult
		},
		isValid: function(e, t) {
			this.refreshConstraints();
			var n = this._getConstraintsSortedPriorities();
			if (t = t || this.getValue(), 0 === t.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== e) return this.validationResult = [];
			if (!1 === this.options.priorityEnabled) return !0 === (this.validationResult = this.validateThroughValidator(t, this.constraints, "Any"));
			for (var r = 0; r < n.length; r++)
				if (!0 !== (this.validationResult = this.validateThroughValidator(t, this.constraints, n[r]))) return !1;
			return !0
		},
		getValue: function() {
			var e;
			return e = "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof e || null === e ? "" : !0 === this.options.trimValue ? e.replace(/^\s+|\s+$/g, "") : e
		},
		refreshConstraints: function() {
			return this.actualizeOptions()._bindConstraints()
		},
		addConstraint: function(e, t, n, r) {
			if (e = e.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[e]) {
				var i = new a(this, e, t, n, r);
				"undefined" !== this.constraintsByName[i.name] && this.removeConstraint(i.name), this.constraints.push(i), this.constraintsByName[i.name] = i
			}
			return this
		},
		removeConstraint: function(e) {
			for (var t = 0; t < this.constraints.length; t++)
				if (e === this.constraints[t].name) {
					this.constraints.splice(t, 1);
					break
				}
			return this
		},
		updateConstraint: function(e, t, n) {
			return this.removeConstraint(e).addConstraint(e, t, n)
		},
		_bindConstraints: function() {
			for (var e = [], t = 0; t < this.constraints.length; t++) !1 === this.constraints[t].isDomConstraint && e.push(this.constraints[t]);
			this.constraints = e;
			for (var n in this.options) this.addConstraint(n, this.options[n]);
			return this._bindHtml5Constraints()
		},
		_bindHtml5Constraints: function() {
			(this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0);
			var e = this.$element.attr("type");
			return "undefined" == typeof e ? this : "number" === e ? this.addConstraint("type", "integer", void 0, !0) : (new RegExp(e, "i")).test("email url range") ? this.addConstraint("type", e, void 0, !0) : this
		},
		_isRequired: function() {
			return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
		},
		_getConstraintsSortedPriorities: function() {
			for (var e = [], t = 0; t < this.constraints.length; t++) - 1 === e.indexOf(this.constraints[t].priority) && e.push(this.constraints[t].priority);
			return e.sort(function(e, t) {
				return t - e
			}), e
		}
	};
	var l = function() {
		this.__class__ = "ParsleyFieldMultiple"
	};
	l.prototype = {
		addElement: function(e) {
			return this.$elements.push(e), this
		},
		refreshConstraints: function() {
			var e;
			if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
			for (var t = 0; t < this.$elements.length; t++) {
				e = this.$elements[t].data("ParsleyFieldMultiple").refreshConstraints().constraints;
				for (var n = 0; n < e.length; n++) this.addConstraint(e[n].name, e[n].requirements, e[n].priority, e[n].isDomConstraint)
			}
			return this
		},
		getValue: function() {
			if ("undefined" != typeof this.options.value) return this.options.value;
			if (this.$element.is("input[type=radio]")) return e("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
			if (this.$element.is("input[type=checkbox]")) {
				var t = [];
				return e("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function() {
					t.push(e(this).val())
				}), t.length ? t : []
			}
			return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
		},
		_init: function(e) {
			return this.$elements = [this.$element], this.options.multiple = e, this
		}
	};
	var c = e({}),
		h = {};
	e.listen = function(e) {
		if ("undefined" == typeof h[e] && (h[e] = []), "function" == typeof arguments[1]) return h[e].push({
			fn: arguments[1]
		});
		if ("object" == typeof arguments[1] && "function" == typeof arguments[2]) return h[e].push({
			fn: arguments[2],
			ctxt: arguments[1]
		});
		throw new Error("Wrong parameters")
	}, e.listenTo = function(e, t, n) {
		if ("undefined" == typeof h[t] && (h[t] = []), !(e instanceof f || e instanceof u)) throw new Error("Must give Parsley instance");
		if ("string" != typeof t || "function" != typeof n) throw new Error("Wrong parameters");
		h[t].push({
			instance: e,
			fn: n
		})
	}, e.unsubscribe = function(e, t) {
		if ("undefined" != typeof h[e]) {
			if ("string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
			for (var n = 0; n < h[e].length; n++)
				if (h[e][n].fn === t) return h[e].splice(n, 1)
		}
	}, e.unsubscribeTo = function(e, t) {
		if ("undefined" != typeof h[t]) {
			if (!(e instanceof f || e instanceof u)) throw new Error("Must give Parsley instance");
			for (var n = 0; n < h[t].length; n++)
				if ("undefined" != typeof h[t][n].instance && h[t][n].instance.__id__ === e.__id__) return h[t].splice(n, 1)
		}
	}, e.unsubscribeAll = function(e) {
		"undefined" != typeof h[e] && delete h[e]
	}, e.emit = function(e, t) {
		if ("undefined" != typeof h[e])
			for (var n = 0; n < h[e].length; n++)
				if ("undefined" != typeof h[e][n].instance) {
					if (t instanceof f || t instanceof u)
						if (h[e][n].instance.__id__ !== t.__id__) {
							if (h[e][n].instance instanceof u && t instanceof f)
								for (var r = 0; r < h[e][n].instance.fields.length; r++)
									if (h[e][n].instance.fields[r].__id__ === t.__id__) {
										h[e][n].fn.apply(c, Array.prototype.slice.call(arguments, 1));
										continue
									}
						} else h[e][n].fn.apply(c, Array.prototype.slice.call(arguments, 1))
				} else h[e][n].fn.apply("undefined" != typeof h[e][n].ctxt ? h[e][n].ctxt : c, Array.prototype.slice.call(arguments, 1))
	}, e.subscribed = function() {
		return h
	}, window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n.en = e.extend(window.ParsleyConfig.i18n.en || {}, {
		defaultMessage: "This value seems to be invalid.",
		type: {
			email: "This value should be a valid email.",
			url: "This value should be a valid url.",
			number: "This value should be a valid number.",
			integer: "This value should be a valid integer.",
			digits: "This value should be digits.",
			alphanum: "This value should be alphanumeric."
		},
		notblank: "This value should not be blank.",
		required: "This value is required.",
		pattern: "This value seems to be invalid.",
		min: "This value should be greater than or equal to %s.",
		max: "This value should be lower than or equal to %s.",
		range: "This value should be between %s and %s.",
		minlength: "This value is too short. It should have %s characters or more.",
		maxlength: "This value is too long. It should have %s characters or less.",
		length: "This value length is invalid. It should be between %s and %s characters long.",
		mincheck: "You must select at least %s choices.",
		maxcheck: "You must select %s choices or less.",
		check: "You must select between %s and %s choices.",
		equalto: "This value should be the same."
	}), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
	var p = function(n, r, i) {
		if (this.__class__ = "Parsley", this.__version__ = "2.0.0", this.__id__ = t.hash(4), "undefined" == typeof n) throw new Error("You must give an element");
		if ("undefined" != typeof i && "ParsleyForm" !== i.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
		return this.init(e(n), r, i)
	};
	p.prototype = {
		init: function(e, r, i) {
			if (!e.length) throw new Error("You must bind Parsley on an existing element.");
			if (this.$element = e, this.$element.data("Parsley")) {
				var s = this.$element.data("Parsley");
				return "undefined" != typeof i && (s.parent = i), s
			}
			return this.OptionsFactory = new o(n, t.get(window, "ParsleyConfig") || {}, r, this.getNamespace(r)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || t.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ? this.handleMultiple(i) : this.bind("parsleyField", i) : this
		},
		isMultiple: function() {
			return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
		},
		handleMultiple: function(n) {
			var r, i, s, o = this;
			if (this.options = e.extend(this.options, n ? n.OptionsFactory.get(n) : {}, t.attr(this.$element, this.options.namespace)), this.options.multiple ? i = this.options.multiple : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? i = r = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (i = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.bind("parsleyFieldMultiple", n, i || this.__id__);
			if ("undefined" == typeof i) return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
			if (i = i.replace(/(:|\.|\[|\]|\$)/g, ""), "undefined" != typeof r && e('input[name="' + r + '"]').each(function() {
					e(this).is("input[type=radio], input[type=checkbox]") && e(this).attr(o.options.namespace + "multiple", i)
				}), e("[" + this.options.namespace + "multiple=" + i + "]").length)
				for (var u = 0; u < e("[" + this.options.namespace + "multiple=" + i + "]").length; u++)
					if ("undefined" != typeof e(e("[" + this.options.namespace + "multiple=" + i + "]").get(u)).data("Parsley")) {
						s = e(e("[" + this.options.namespace + "multiple=" + i + "]").get(u)).data("Parsley"), this.$element.data("ParsleyFieldMultiple") || (s.addElement(this.$element), this.$element.attr(this.options.namespace + "id", s.__id__));
						break
					}
			return this.bind("parsleyField", n, i, !0), s || this.bind("parsleyFieldMultiple", n, i)
		},
		getNamespace: function(e) {
			return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof t.get(e, "namespace") ? e.namespace : "undefined" != typeof t.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : n.namespace
		},
		bind: function(n, i, s, o) {
			var a;
			switch (n) {
				case "parsleyForm":
					a = e.extend(new u(this.$element, this.OptionsFactory), new r, window.ParsleyExtend)._bindFields();
					break;
				case "parsleyField":
					a = e.extend(new f(this.$element, this.OptionsFactory, i), new r, window.ParsleyExtend);
					break;
				case "parsleyFieldMultiple":
					a = e.extend(new f(this.$element, this.OptionsFactory, i), new r, new l, window.ParsleyExtend)._init(s);
					break;
				default:
					throw new Error(n + "is not a supported Parsley type")
			}
			return "undefined" != typeof s && t.setAttr(this.$element, this.options.namespace, "multiple", s), "undefined" != typeof o ? (this.$element.data("ParsleyFieldMultiple", a), a) : ((new RegExp("ParsleyF", "i")).test(a.__class__) && (this.$element.data("Parsley", a), e.emit("parsley:" + ("parsleyForm" === n ? "form" : "field") + ":init", a)), a)
		}
	}, e.fn.parsley = e.fn.psly = function(t) {
		if (this.length > 1) {
			var n = [];
			return this.each(function() {
				n.push(e(this).parsley(t))
			}), n
		}
		return e(this).length ? new p(this, t) : void(window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
	}, window.ParsleyUI = "function" == typeof t.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new s).listen(), "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}), window.Parsley = window.psly = p, window.ParsleyUtils = t, window.ParsleyValidator = new i(window.ParsleyConfig.validators, window.ParsleyConfig.i18n), !1 !== t.get(window, "ParsleyConfig.autoBind") && e(document).ready(function() {
		e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley()
	}), "function" == typeof define && define.amd && define("parsley", function() {
		return window.Parsley
	})
}(window.jQuery);
! function(e) {
	var t = {
			attr: function(e, t, n) {
				var r, i = {},
					s = new RegExp("^" + t, "i");
				if ("undefined" == typeof e || "undefined" == typeof e[0]) return {};
				for (var o in e[0].attributes)
					if (r = e[0].attributes[o], "undefined" != typeof r && null !== r && r.specified && s.test(r.name)) {
						if ("undefined" != typeof n && (new RegExp(n + "$", "i")).test(r.name)) return !0;
						i[this.camelize(r.name.replace(t, ""))] = this.deserializeValue(r.value)
					}
				return "undefined" == typeof n ? i : !1
			},
			setAttr: function(e, t, n, r) {
				e[0].setAttribute(this.dasherize(t + n), String(r))
			},
			get: function(e, t) {
				for (var n = 0, r = (t || "").split("."); this.isObject(e) || this.isArray(e);)
					if (e = e[r[n++]], n === r.length) return e;
				return void 0
			},
			hash: function(e) {
				return String(Math.random()).substring(2, e ? e + 2 : 9)
			},
			isArray: function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			},
			isObject: function(e) {
				return e === Object(e)
			},
			deserializeValue: function(t) {
				var n;
				try {
					return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : isNaN(n = Number(t)) ? /^[\[\{]/.test(t) ? e.parseJSON(t) : t : n) : t
				} catch (r) {
					return t
				}
			},
			camelize: function(e) {
				return e.replace(/-+(.)?/g, function(e, t) {
					return t ? t.toUpperCase() : ""
				})
			},
			dasherize: function(e) {
				return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
			}
		},
		n = {
			namespace: "data-parsley-",
			inputs: "input, textarea, select",
			excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
			priorityEnabled: !0,
			uiEnabled: !0,
			validationThreshold: 3,
			focus: "first",
			trigger: !1,
			errorClass: "parsley-error",
			successClass: "parsley-success",
			classHandler: function() {},
			errorsContainer: function() {},
			errorsWrapper: '<ul class="parsley-errors-list"></ul>',
			errorTemplate: "<li></li>"
		},
		r = function() {};
	r.prototype = {
			asyncSupport: !1,
			actualizeOptions: function() {
				return this.options = this.OptionsFactory.get(this), this
			},
			validateThroughValidator: function(e, t, n) {
				return window.ParsleyValidator.validate.apply(window.ParsleyValidator, [e, t, n])
			},
			subscribe: function(t, n) {
				return e.listenTo(this, t.toLowerCase(), n), this
			},
			unsubscribe: function(t) {
				return e.unsubscribeTo(this, t.toLowerCase()), this
			},
			reset: function() {
				if ("ParsleyForm" !== this.__class__) return e.emit("parsley:field:reset", this);
				for (var t = 0; t < this.fields.length; t++) e.emit("parsley:field:reset", this.fields[t]);
				e.emit("parsley:form:reset", this)
			},
			destroy: function() {
				if ("ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void e.emit("parsley:field:destroy", this);
				for (var t = 0; t < this.fields.length; t++) this.fields[t].destroy();
				this.$element.removeData("Parsley"), e.emit("parsley:form:destroy", this)
			}
		},
		function(e) {
			var t = function(e) {
				return this.__class__ = "Validator", this.__version__ = "0.5.8", this.options = e || {}, this.bindingKey = this.options.bindingKey || "_validatorjsConstraint", this
			};
			t.prototype = {
				constructor: t,
				validate: function(e, t, n) {
					if ("string" != typeof e && "object" != typeof e) throw new Error("You must validate an object or a string");
					return "string" == typeof e || o(e) ? this._validateString(e, t, n) : this.isBinded(e) ? this._validateBindedObject(e, t) : this._validateObject(e, t, n)
				},
				bind: function(e, t) {
					if ("object" != typeof e) throw new Error("Must bind a Constraint to an object");
					return e[this.bindingKey] = new n(t), this
				},
				unbind: function(e) {
					return "undefined" == typeof e._validatorjsConstraint ? this : (delete e[this.bindingKey], this)
				},
				isBinded: function(e) {
					return "undefined" != typeof e[this.bindingKey]
				},
				getBinded: function(e) {
					return this.isBinded(e) ? e[this.bindingKey] : null
				},
				_validateString: function(e, t, n) {
					var s, u = [];
					o(t) || (t = [t]);
					for (var a = 0; a < t.length; a++) {
						if (!(t[a] instanceof i)) throw new Error("You must give an Assert or an Asserts array to validate a string");
						s = t[a].check(e, n), s instanceof r && u.push(s)
					}
					return u.length ? u : !0
				},
				_validateObject: function(e, t, r) {
					if ("object" != typeof t) throw new Error("You must give a constraint to validate an object");
					return t instanceof n ? t.check(e, r) : (new n(t)).check(e, r)
				},
				_validateBindedObject: function(e, t) {
					return e[this.bindingKey].check(e, t)
				}
			}, t.errorCode = {
				must_be_a_string: "must_be_a_string",
				must_be_an_array: "must_be_an_array",
				must_be_a_number: "must_be_a_number",
				must_be_a_string_or_array: "must_be_a_string_or_array"
			};
			var n = function(e, t) {
				if (this.__class__ = "Constraint", this.options = t || {}, this.nodes = {}, e) try {
					this._bootstrap(e)
				} catch (n) {
					throw new Error("Should give a valid mapping object to Constraint", n, e)
				}
				return this
			};
			n.prototype = {
				constructor: n,
				check: function(e, t) {
					var n, r = {};
					for (var u in this.options.strict ? this.nodes : e)
						if (this.options.strict ? this.has(u, e) : this.has(u)) n = this._check(u, e[u], t), (o(n) && n.length > 0 || !o(n) && !s(n)) && (r[u] = n);
						else if (this.options.strict) try {
						(new i).HaveProperty(u).validate(e)
					} catch (a) {
						r[u] = a
					}
					return s(r) ? !0 : r
				},
				add: function(e, t) {
					if (t instanceof i || o(t) && t[0] instanceof i) return this.nodes[e] = t, this;
					if ("object" == typeof t && !o(t)) return this.nodes[e] = t instanceof n ? t : new n(t), this;
					throw new Error("Should give an Assert, an Asserts array, a Constraint", t)
				},
				has: function(e, t) {
					return t = "undefined" != typeof t ? t : this.nodes, "undefined" != typeof t[e]
				},
				get: function(e, t) {
					return this.has(e) ? this.nodes[e] : t || null
				},
				remove: function(e) {
					var t = [];
					for (var n in this.nodes) n !== e && (t[n] = this.nodes[n]);
					return this.nodes = t, this
				},
				_bootstrap: function(e) {
					if (e instanceof n) return this.nodes = e.nodes;
					for (var t in e) this.add(t, e[t])
				},
				_check: function(e, t, r) {
					if (this.nodes[e] instanceof i) return this._checkAsserts(t, [this.nodes[e]], r);
					if (o(this.nodes[e])) return this._checkAsserts(t, this.nodes[e], r);
					if (this.nodes[e] instanceof n) return this.nodes[e].check(t, r);
					throw new Error("Invalid node", this.nodes[e])
				},
				_checkAsserts: function(e, t, n) {
					for (var r, i = [], s = 0; s < t.length; s++) r = t[s].check(e, n), "undefined" != typeof r && !0 !== r && i.push(r);
					return i
				}
			};
			var r = function(e, t, n) {
				if (this.__class__ = "Violation", !(e instanceof i)) throw new Error("Should give an assertion implementing the Assert interface");
				this.assert = e, this.value = t, "undefined" != typeof n && (this.violation = n)
			};
			r.prototype = {
				show: function() {
					var e = {
						assert: this.assert.__class__,
						value: this.value
					};
					return this.violation && (e.violation = this.violation), e
				},
				__toString: function() {
					return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
				},
				getViolation: function() {
					var e, t;
					for (e in this.violation) t = this.violation[e];
					return {
						constraint: e,
						expected: t
					}
				}
			};
			var i = function(e) {
				return this.__class__ = "Assert", this.__parentClass__ = this.__class__, this.groups = [], "undefined" != typeof e && this.addGroup(e), this
			};
			i.prototype = {
				construct: i,
				check: function(e, t) {
					if (!(t && !this.hasGroup(t) || !t && this.hasGroups())) try {
						return this.validate(e, t)
					} catch (n) {
						return n
					}
				},
				hasGroup: function(e) {
					return o(e) ? this.hasOneOf(e) : "Any" === e ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(e) : "Default" === e
				},
				hasOneOf: function(e) {
					for (var t = 0; t < e.length; t++)
						if (this.hasGroup(e[t])) return !0;
					return !1
				},
				hasGroups: function() {
					return this.groups.length > 0
				},
				addGroup: function(e) {
					return o(e) ? this.addGroups(e) : (this.hasGroup(e) || this.groups.push(e), this)
				},
				removeGroup: function(e) {
					for (var t = [], n = 0; n < this.groups.length; n++) e !== this.groups[n] && t.push(this.groups[n]);
					return this.groups = t, this
				},
				addGroups: function(e) {
					for (var t = 0; t < e.length; t++) this.addGroup(e[t]);
					return this
				},
				HaveProperty: function(e) {
					return this.__class__ = "HaveProperty", this.node = e, this.validate = function(e) {
						if ("undefined" == typeof e[this.node]) throw new r(this, e, {
							value: this.node
						});
						return !0
					}, this
				},
				Blank: function() {
					return this.__class__ = "Blank", this.validate = function(e) {
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if ("" !== e.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new r(this, e);
						return !0
					}, this
				},
				Callback: function(e) {
					if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof e) throw new Error("Callback must be instanciated with a function");
					return this.fn = e, this.validate = function(e) {
						var t = this.fn.apply(this, [e].concat(this.arguments));
						if (!0 !== t) throw new r(this, e, {
							result: t
						});
						return !0
					}, this
				},
				Choice: function(e) {
					if (this.__class__ = "Choice", !o(e) && "function" != typeof e) throw new Error("Choice must be instanciated with an array or a function");
					return this.list = e, this.validate = function(e) {
						for (var t = "function" == typeof this.list ? this.list() : this.list, n = 0; n < t.length; n++)
							if (e === t[n]) return !0;
						throw new r(this, e, {
							choices: t
						})
					}, this
				},
				Collection: function(e) {
					return this.__class__ = "Collection", this.constraint = "undefined" != typeof e ? new n(e) : !1, this.validate = function(e, n) {
						var i, u = new t,
							a = 0,
							f = {},
							l = this.groups.length ? this.groups : n;
						if (!o(e)) throw new r(this, array, {
							value: t.errorCode.must_be_an_array
						});
						for (var c = 0; c < e.length; c++) i = this.constraint ? u.validate(e[c], this.constraint, l) : u.validate(e[c], l), s(i) || (f[a] = i), a++;
						return s(f) ? !0 : f
					}, this
				},
				Count: function(e) {
					return this.__class__ = "Count", this.count = e, this.validate = function(e) {
						if (!o(e)) throw new r(this, e, {
							value: t.errorCode.must_be_an_array
						});
						var n = "function" == typeof this.count ? this.count(e) : this.count;
						if (isNaN(Number(n))) throw new Error("Count must be a valid interger", n);
						if (n !== e.length) throw new r(this, e, {
							count: n
						});
						return !0
					}, this
				},
				Email: function() {
					return this.__class__ = "Email", this.validate = function(e) {
						var n = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if (!n.test(e)) throw new r(this, e);
						return !0
					}, this
				},
				Eql: function(e) {
					if (this.__class__ = "Eql", "undefined" == typeof e) throw new Error("Equal must be instanciated with an Array or an Object");
					return this.eql = e, this.validate = function(e) {
						var t = "function" == typeof this.eql ? this.eql(e) : this.eql;
						if (!u.eql(t, e)) throw new r(this, e, {
							eql: t
						});
						return !0
					}, this
				},
				EqualTo: function(e) {
					if (this.__class__ = "EqualTo", "undefined" == typeof e) throw new Error("EqualTo must be instanciated with a value or a function");
					return this.reference = e, this.validate = function(e) {
						var t = "function" == typeof this.reference ? this.reference(e) : this.reference;
						if (t !== e) throw new r(this, e, {
							value: t
						});
						return !0
					}, this
				},
				GreaterThan: function(e) {
					if (this.__class__ = "GreaterThan", "undefined" == typeof e) throw new Error("Should give a threshold value");
					return this.threshold = e, this.validate = function(e) {
						if ("" === e || isNaN(Number(e))) throw new r(this, e, {
							value: t.errorCode.must_be_a_number
						});
						if (this.threshold >= e) throw new r(this, e, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				GreaterThanOrEqual: function(e) {
					if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof e) throw new Error("Should give a threshold value");
					return this.threshold = e, this.validate = function(e) {
						if ("" === e || isNaN(Number(e))) throw new r(this, e, {
							value: t.errorCode.must_be_a_number
						});
						if (this.threshold > e) throw new r(this, e, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				InstanceOf: function(e) {
					if (this.__class__ = "InstanceOf", "undefined" == typeof e) throw new Error("InstanceOf must be instanciated with a value");
					return this.classRef = e, this.validate = function(e) {
						if (!0 != e instanceof this.classRef) throw new r(this, e, {
							classRef: this.classRef
						});
						return !0
					}, this
				},
				IPv4: function() {
					return this.__class__ = "IPv4", this.validate = function(e) {
						var n = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if (!n.test(e)) throw new r(this, e);
						return !0
					}, this
				},
				Length: function(e) {
					if (this.__class__ = "Length", !e.min && !e.max) throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
					return this.min = e.min, this.max = e.max, this.validate = function(e) {
						if ("string" != typeof e && !o(e)) throw new r(this, e, {
							value: t.errorCode.must_be_a_string_or_array
						});
						if ("undefined" != typeof this.min && this.min === this.max && e.length !== this.min) throw new r(this, e, {
							min: this.min,
							max: this.max
						});
						if ("undefined" != typeof this.max && e.length > this.max) throw new r(this, e, {
							max: this.max
						});
						if ("undefined" != typeof this.min && e.length < this.min) throw new r(this, e, {
							min: this.min
						});
						return !0
					}, this
				},
				LessThan: function(e) {
					if (this.__class__ = "LessThan", "undefined" == typeof e) throw new Error("Should give a threshold value");
					return this.threshold = e, this.validate = function(e) {
						if ("" === e || isNaN(Number(e))) throw new r(this, e, {
							value: t.errorCode.must_be_a_number
						});
						if (this.threshold <= e) throw new r(this, e, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				LessThanOrEqual: function(e) {
					if (this.__class__ = "LessThanOrEqual", "undefined" == typeof e) throw new Error("Should give a threshold value");
					return this.threshold = e, this.validate = function(e) {
						if ("" === e || isNaN(Number(e))) throw new r(this, e, {
							value: t.errorCode.must_be_a_number
						});
						if (this.threshold < e) throw new r(this, e, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				Mac: function() {
					return this.__class__ = "Mac", this.validate = function(e) {
						var n = /^(?:[0-9A-F]{2}:){5}[0-9A-F]{2}$/i;
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if (!n.test(e)) throw new r(this, e);
						return !0
					}, this
				},
				NotNull: function() {
					return this.__class__ = "NotNull", this.validate = function(e) {
						if (null === e || "undefined" == typeof e) throw new r(this, e);
						return !0
					}, this
				},
				NotBlank: function() {
					return this.__class__ = "NotBlank", this.validate = function(e) {
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if ("" === e.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new r(this, e);
						return !0
					}, this
				},
				Null: function() {
					return this.__class__ = "Null", this.validate = function(e) {
						if (null !== e) throw new r(this, e);
						return !0
					}, this
				},
				Range: function(e, t) {
					if (this.__class__ = "Range", "undefined" == typeof e || "undefined" == typeof t) throw new Error("Range assert expects min and max values");
					return this.min = e, this.max = t, this.validate = function(e) {
						try {
							return "string" == typeof e && isNaN(Number(e)) || o(e) ? (new i).Length({
								min: this.min,
								max: this.max
							}).validate(e) : (new i).GreaterThanOrEqual(this.min).validate(e) && (new i).LessThanOrEqual(this.max).validate(e), !0
						} catch (t) {
							throw new r(this, e, t.violation)
						}
						return !0
					}, this
				},
				Regexp: function(e, n) {
					if (this.__class__ = "Regexp", "undefined" == typeof e) throw new Error("You must give a regexp");
					return this.regexp = e, this.flag = n || "", this.validate = function(e) {
						if ("string" != typeof e) throw new r(this, e, {
							value: t.errorCode.must_be_a_string
						});
						if (!(new RegExp(this.regexp, this.flag)).test(e)) throw new r(this, e, {
							regexp: this.regexp,
							flag: this.flag
						});
						return !0
					}, this
				},
				Required: function() {
					return this.__class__ = "Required", this.validate = function(e) {
						if ("undefined" == typeof e) throw new r(this, e);
						try {
							"string" == typeof e ? (new i).NotNull().validate(e) && (new i).NotBlank().validate(e) : !0 === o(e) && (new i).Length({
								min: 1
							}).validate(e)
						} catch (t) {
							throw new r(this, e)
						}
						return !0
					}, this
				},
				Unique: function(e) {
					return this.__class__ = "Unique", "object" == typeof e && (this.key = e.key), this.validate = function(e) {
						var n, i = [];
						if (!o(e)) throw new r(this, e, {
							value: t.errorCode.must_be_an_array
						});
						for (var s = 0; s < e.length; s++)
							if (n = "object" == typeof e[s] ? e[s][this.key] : e[s], "undefined" != typeof n) {
								if (-1 !== i.indexOf(n)) throw new r(this, e, {
									value: n
								});
								i.push(n)
							}
						return !0
					}, this
				}
			}, e.Assert = i, e.Validator = t, e.Violation = r, e.Constraint = n, Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
				if (null === this) throw new TypeError;
				var t = Object(this),
					n = t.length >>> 0;
				if (0 === n) return -1;
				var r = 0;
				if (arguments.length > 1 && (r = Number(arguments[1]), r != r ? r = 0 : 0 !== r && 1 / 0 != r && r != -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= n) return -1;
				for (var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0); n > i; i++)
					if (i in t && t[i] === e) return i;
				return -1
			});
			var s = function(e) {
					for (var t in e) return !1;
					return !0
				},
				o = function(e) {
					return "[object Array]" === Object.prototype.toString.call(e)
				},
				u = {
					eql: function(e, t) {
						if (e === t) return !0;
						if ("undefined" != typeof Buffer && Buffer.isBuffer(e) && Buffer.isBuffer(t)) {
							if (e.length !== t.length) return !1;
							for (var n = 0; n < e.length; n++)
								if (e[n] !== t[n]) return !1;
							return !0
						}
						return e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : "object" != typeof e && "object" != typeof t ? e == t : this.objEquiv(e, t)
					},
					isUndefinedOrNull: function(e) {
						return null === e || "undefined" == typeof e
					},
					isArguments: function(e) {
						return "[object Arguments]" == Object.prototype.toString.call(e)
					},
					keys: function(e) {
						if (Object.keys) return Object.keys(e);
						var t = [];
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
						return t
					},
					objEquiv: function(e, t) {
						if (this.isUndefinedOrNull(e) || this.isUndefinedOrNull(t)) return !1;
						if (e.prototype !== t.prototype) return !1;
						if (this.isArguments(e)) return this.isArguments(t) ? eql(pSlice.call(e), pSlice.call(t)) : !1;
						try {
							var n, r, i = this.keys(e),
								s = this.keys(t);
							if (i.length !== s.length) return !1;
							for (i.sort(), s.sort(), r = i.length - 1; r >= 0; r--)
								if (i[r] != s[r]) return !1;
							for (r = i.length - 1; r >= 0; r--)
								if (n = i[r], !this.eql(e[n], t[n])) return !1;
							return !0
						} catch (o) {
							return !1
						}
					}
				};
			"function" == typeof define && define.amd && define("validator", [], function() {
				return e
			})
		}("undefined" == typeof exports ? this["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = {} : exports);
	var i = function(e, t) {
		this.__class__ = "ParsleyValidator", this.Validator = Validator, this.locale = "en", this.init(e || {}, t || {})
	};
	i.prototype = {
		init: function(t, n) {
			this.catalog = n;
			for (var r in t) this.addValidator(r, t[r].fn, t[r].priority);
			e.emit("parsley:validator:init")
		},
		setLocale: function(e) {
			if ("undefined" == typeof this.catalog[e]) throw new Error(e + " is not available in the catalog");
			return this.locale = e, this
		},
		addCatalog: function(e, t, n) {
			return "object" == typeof t && (this.catalog[e] = t), !0 === n ? this.setLocale(e) : this
		},
		addMessage: function(e, t, n) {
			return void 0 === typeof this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t.toLowerCase()] = n, this
		},
		validate: function() {
			return (new this.Validator.Validator).validate.apply(new Validator.Validator, arguments)
		},
		addValidator: function(t, n, r) {
			return this.validators[t.toLowerCase()] = function(t) {
				return e.extend((new Validator.Assert).Callback(n, t), {
					priority: r
				})
			}, this
		},
		updateValidator: function(e, t, n) {
			return addValidator(e, t, n)
		},
		removeValidator: function(e) {
			return delete this.validators[e], this
		},
		getErrorMessage: function(e) {
			var t;
			return t = "type" === e.name ? this.catalog[this.locale][e.name][e.requirements] : this.formatMessage(this.catalog[this.locale][e.name], e.requirements), "" !== t ? t : this.catalog[this.locale].defaultMessage
		},
		formatMessage: function(e, t) {
			if ("object" == typeof t) {
				for (var n in t) e = this.formatMessage(e, t[n]);
				return e
			}
			return "string" == typeof e ? e.replace(new RegExp("%s", "i"), t) : ""
		},
		validators: {
			notblank: function() {
				return e.extend((new Validator.Assert).NotBlank(), {
					priority: 2
				})
			},
			required: function() {
				return e.extend((new Validator.Assert).Required(), {
					priority: 512
				})
			},
			type: function(t) {
				var n;
				switch (t) {
					case "email":
						n = (new Validator.Assert).Email();
						break;
					case "number":
						n = (new Validator.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
						break;
					case "integer":
						n = (new Validator.Assert).Regexp("^-?\\d+$");
						break;
					case "digits":
						n = (new Validator.Assert).Regexp("^\\d+$");
						break;
					case "alphanum":
						n = (new Validator.Assert).Regexp("^\\w+$", "i");
						break;
					case "url":
						n = (new Validator.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
						break;
					default:
						throw new Error("validator type `" + t + "` is not supported")
				}
				return e.extend(n, {
					priority: 256
				})
			},
			pattern: function(t) {
				var n = "";
				return /^\/.*\/(?:[gimy]*)$/.test(t) && (n = t.replace(/.*\/([gimy]*)$/, "$1"), t = t.replace(new RegExp("^/(.*?)/" + n + "$"), "$1")), e.extend((new Validator.Assert).Regexp(t, n), {
					priority: 64
				})
			},
			minlength: function(t) {
				return e.extend((new Validator.Assert).Length({
					min: t
				}), {
					priority: 30,
					requirementsTransformer: function() {
						return "string" != typeof t || isNaN(t) ? t : parseInt(t, 10)
					}
				})
			},
			maxlength: function(t) {
				return e.extend((new Validator.Assert).Length({
					max: t
				}), {
					priority: 30,
					requirementsTransformer: function() {
						return "string" != typeof t || isNaN(t) ? t : parseInt(t, 10)
					}
				})
			},
			length: function(t) {
				return e.extend((new Validator.Assert).Length({
					min: t[0],
					max: t[1]
				}), {
					priority: 32
				})
			},
			mincheck: function(e) {
				return this.minlength(e)
			},
			maxcheck: function(e) {
				return this.maxlength(e)
			},
			check: function(e) {
				return this.length(e)
			},
			min: function(t) {
				return e.extend((new Validator.Assert).GreaterThanOrEqual(t), {
					priority: 30,
					requirementsTransformer: function() {
						return "string" != typeof t || isNaN(t) ? t : parseInt(t, 10)
					}
				})
			},
			max: function(t) {
				return e.extend((new Validator.Assert).LessThanOrEqual(t), {
					priority: 30,
					requirementsTransformer: function() {
						return "string" != typeof t || isNaN(t) ? t : parseInt(t, 10)
					}
				})
			},
			range: function(t) {
				return e.extend((new Validator.Assert).Range(t[0], t[1]), {
					priority: 32,
					requirementsTransformer: function() {
						for (var e = 0; e < t.length; e++) t[e] = "string" != typeof t[e] || isNaN(t[e]) ? t[e] : parseInt(t[e], 10);
						return t
					}
				})
			},
			equalto: function(t) {
				return e.extend((new Validator.Assert).EqualTo(t), {
					priority: 256,
					requirementsTransformer: function() {
						return e(t).length ? e(t).val() : t
					}
				})
			}
		}
	};
	var s = function() {
		this.__class__ = "ParsleyUI"
	};
	s.prototype = {
		listen: function() {
			return e.listen("parsley:form:init", this, this.setupForm), e.listen("parsley:field:init", this, this.setupField), e.listen("parsley:field:validated", this, this.reflow), e.listen("parsley:form:validated", this, this.focus), e.listen("parsley:field:reset", this, this.reset), e.listen("parsley:form:destroy", this, this.destroy), e.listen("parsley:field:destroy", this, this.destroy), this
		},
		reflow: function(e) {
			if ("undefined" != typeof e._ui && !1 !== e._ui.active) {
				var t = this._diff(e.validationResult, e._ui.lastValidationResult);
				e._ui.lastValidationResult = e.validationResult, e._ui.validatedOnce = !0, this.manageStatusClass(e), this.manageErrorsMessages(e, t), this.actualizeTriggers(e), (t.kept.length || t.added.length) && "undefined" == typeof e._ui.failedOnce && this.manageFailingFieldTrigger(e)
			}
		},
		getErrorsMessages: function(e) {
			if (!0 === e.validationResult) return [];
			for (var t = [], n = 0; n < e.validationResult.length; n++) t.push(this._getErrorMessage(e, e.validationResult[n].assert));
			return t
		},
		manageStatusClass: function(e) {
			!0 === e.validationResult ? this._successClass(e) : e.validationResult.length > 0 ? this._errorClass(e) : this._resetClass(e)
		},
		manageErrorsMessages: function(t, n) {
			if ("undefined" == typeof t.options.errorsMessagesDisabled) {
				if ("undefined" != typeof t.options.errorMessage) return n.added.length || n.kept.length ? (0 === t._ui.$errorsWrapper.find(".parsley-custom-error-message").length && t._ui.$errorsWrapper.append(e(t.options.errorTemplate).addClass("parsley-custom-error-message")), t._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(t.options.errorMessage)) : t._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
				for (var r = 0; r < n.removed.length; r++) this.removeError(t, n.removed[r].assert.name, !0);
				for (r = 0; r < n.added.length; r++) this.addError(t, n.added[r].assert.name, void 0, n.added[r].assert, !0);
				for (r = 0; r < n.kept.length; r++) this.updateError(t, n.kept[r].assert.name, void 0, n.kept[r].assert, !0)
			}
		},
		addError: function(t, n, r, i, s) {
			t._ui.$errorsWrapper.addClass("filled").append(e(t.options.errorTemplate).addClass("parsley-" + n).html(r || this._getErrorMessage(t, i))), !0 !== s && this._errorClass(t)
		},
		updateError: function(e, t, n, r, i) {
			e._ui.$errorsWrapper.addClass("filled").find(".parsley-" + t).html(n || this._getErrorMessage(e, r)), !0 !== i && this._errorClass(e)
		},
		removeError: function(e, t, n) {
			e._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + t).remove(), !0 !== n && this.manageStatusClass(e)
		},
		focus: function(e) {
			if (!0 === e.validationResult || "none" === e.options.focus) return e._focusedField = null;
			e._focusedField = null;
			for (var t = 0; t < e.fields.length; t++)
				if (!0 !== e.fields[t].validationResult && e.fields[t].validationResult.length > 0 && "undefined" == typeof e.fields[t].options.noFocus) {
					if ("first" === e.options.focus) return e._focusedField = e.fields[t].$element, e._focusedField.focus();
					e._focusedField = e.fields[t].$element
				}
			return null === e._focusedField ? null : e._focusedField.focus()
		},
		_getErrorMessage: function(e, t) {
			var n = t.name + "Message";
			return "undefined" != typeof e.options[n] ? window.ParsleyValidator.formatMessage(e.options[n], t.requirements) : window.ParsleyValidator.getErrorMessage(t)
		},
		_diff: function(e, t, n) {
			for (var r = [], i = [], s = 0; s < e.length; s++) {
				for (var o = !1, u = 0; u < t.length; u++)
					if (e[s].assert.name === t[u].assert.name) {
						o = !0;
						break
					}
				o ? i.push(e[s]) : r.push(e[s])
			}
			return {
				kept: i,
				added: r,
				removed: n ? [] : this._diff(t, e, !0).added
			}
		},
		setupForm: function(t) {
			t.$element.on("submit.Parsley", !1, e.proxy(t.onSubmitValidate, t)), !1 !== t.options.uiEnabled && t.$element.attr("novalidate", "")
		},
		setupField: function(t) {
			var n = {
				active: !1
			};
			!1 !== t.options.uiEnabled && (n.active = !0, t.$element.attr(t.options.namespace + "id", t.__id__), n.$errorClassHandler = this._manageClassHandler(t), n.errorsWrapperId = "parsley-id-" + ("undefined" != typeof t.options.multiple ? "multiple-" + t.options.multiple : t.__id__), n.$errorsWrapper = e(t.options.errorsWrapper).attr("id", n.errorsWrapperId), n.lastValidationResult = [], n.validatedOnce = !1, n.validationInformationVisible = !1, t._ui = n, this._insertErrorWrapper(t), this.actualizeTriggers(t))
		},
		_manageClassHandler: function(t) {
			if ("string" == typeof t.options.classHandler && e(t.options.classHandler).length) return e(t.options.classHandler);
			var n = t.options.classHandler(t);
			return "undefined" != typeof n && n.length ? n : "undefined" == typeof t.options.multiple || t.$element.is("select") ? t.$element : t.$element.parent()
		},
		_insertErrorWrapper: function(t) {
			var n;
			if ("string" == typeof t.options.errorsContainer) {
				if (e(t.options.errorsContainer + "").length) return e(t.options.errorsContainer).append(t._ui.$errorsWrapper);
				window.console && window.console.warn && window.console.warn("The errors container `" + t.options.errorsContainer + "` does not exist in DOM")
			}
			return "function" == typeof t.options.errorsContainer && (n = t.options.errorsContainer(t)), "undefined" != typeof n && n.length ? n.append(t._ui.$errorsWrapper) : "undefined" == typeof t.options.multiple ? t.$element.after(t._ui.$errorsWrapper) : t.$element.parent().after(t._ui.$errorsWrapper)
		},
		actualizeTriggers: function(t) {
			var n = this;
			if (t.options.multiple ? e("[" + t.options.namespace + 'multiple="' + t.options.multiple + '"]').each(function() {
					e(this).off(".Parsley")
				}) : t.$element.off(".Parsley"), !1 !== t.options.trigger) {
				var r = t.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
				"" !== r && (t.options.multiple ? e("[" + t.options.namespace + 'multiple="' + t.options.multiple + '"]').each(function() {
					e(this).on(r.split(" ").join(".Parsley ") + ".Parsley", !1, e.proxy("function" == typeof t.eventValidate ? t.eventValidate : n.eventValidate, t))
				}) : t.$element.on(r.split(" ").join(".Parsley ") + ".Parsley", !1, e.proxy("function" == typeof t.eventValidate ? t.eventValidate : this.eventValidate, t)))
			}
		},
		eventValidate: function(e) {
			(new RegExp("key")).test(e.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
		},
		manageFailingFieldTrigger: function(t) {
			return t._ui.failedOnce = !0, t.options.multiple && e("[" + t.options.namespace + 'multiple="' + t.options.multiple + '"]').each(function() {
				return (new RegExp("change", "i")).test(e(this).parsley().options.trigger || "") ? void 0 : e(this).on("change.ParsleyFailedOnce", !1, e.proxy(t.validate, t))
			}), t.$element.is("select") && !(new RegExp("change", "i")).test(t.options.trigger || "") ? t.$element.on("change.ParsleyFailedOnce", !1, e.proxy(t.validate, t)) : (new RegExp("keyup", "i")).test(t.options.trigger || "") ? void 0 : t.$element.on("keyup.ParsleyFailedOnce", !1, e.proxy(t.validate, t))
		},
		reset: function(t) {
			t.$element.off(".Parsley"), t.$element.off(".ParsleyFailedOnce"), "undefined" != typeof t._ui && "ParsleyForm" !== t.__class__ && (t._ui.$errorsWrapper.children().each(function() {
				e(this).remove()
			}), this._resetClass(t), t._ui.validatedOnce = !1, t._ui.lastValidationResult = [], t._ui.validationInformationVisible = !1)
		},
		destroy: function(e) {
			this.reset(e), "ParsleyForm" !== e.__class__ && (e._ui.$errorsWrapper.remove(), delete e._ui)
		},
		_successClass: function(e) {
			e._ui.validationInformationVisible = !0, e._ui.$errorClassHandler.removeClass(e.options.errorClass).addClass(e.options.successClass)
		},
		_errorClass: function(e) {
			e._ui.validationInformationVisible = !0, e._ui.$errorClassHandler.removeClass(e.options.successClass).addClass(e.options.errorClass)
		},
		_resetClass: function(e) {
			e._ui.$errorClassHandler.removeClass(e.options.successClass).removeClass(e.options.errorClass)
		}
	};
	var o = function(n, r, i, s) {
		this.__class__ = "OptionsFactory", this.__id__ = t.hash(4), this.formOptions = null, this.fieldOptions = null, this.staticOptions = e.extend(!0, {}, n, r, i, {
			namespace: s
		})
	};
	o.prototype = {
		get: function(e) {
			if ("undefined" == typeof e.__class__) throw new Error("Parsley Instance expected");
			switch (e.__class__) {
				case "Parsley":
					return this.staticOptions;
				case "ParsleyForm":
					return this.getFormOptions(e);
				case "ParsleyField":
				case "ParsleyFieldMultiple":
					return this.getFieldOptions(e);
				default:
					throw new Error("Instance " + e.__class__ + " is not supported")
			}
		},
		getFormOptions: function(n) {
			return this.formOptions = t.attr(n.$element, this.staticOptions.namespace), e.extend({}, this.staticOptions, this.formOptions)
		},
		getFieldOptions: function(n) {
			return this.fieldOptions = t.attr(n.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof n.parent && (this.formOptions = this.getFormOptions(n.parent)), e.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
		}
	};
	var u = function(n, r) {
		if (this.__class__ = "ParsleyForm", this.__id__ = t.hash(4), "OptionsFactory" !== t.get(r, "__class__")) throw new Error("You must give an OptionsFactory instance");
		this.OptionsFactory = r, this.$element = e(n), this.validationResult = null, this.options = this.OptionsFactory.get(this)
	};
	u.prototype = {
		onSubmitValidate: function(t) {
			return this.validate(void 0, void 0, t), !1 === this.validationResult && t instanceof e.Event && (t.stopImmediatePropagation(), t.preventDefault()), this
		},
		validate: function(t, n, r) {
			this.submitEvent = r, this.validationResult = !0;
			var i = [];
			this._refreshFields(), e.emit("parsley:form:validate", this);
			for (var s = 0; s < this.fields.length; s++) t && t !== this.fields[s].options.group || (i = this.fields[s].validate(n), !0 !== i && i.length > 0 && this.validationResult && (this.validationResult = !1));
			return e.emit("parsley:form:validated", this), this.validationResult
		},
		isValid: function(e, t) {
			this._refreshFields();
			for (var n = 0; n < this.fields.length; n++)
				if ((!e || e === this.fields[n].options.group) && !1 === this.fields[n].isValid(t)) return !1;
			return !0
		},
		_refreshFields: function() {
			return this.actualizeOptions()._bindFields()
		},
		_bindFields: function() {
			var e = this;
			return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function() {
				var t = new window.Parsley(this, {}, e);
				"ParsleyField" !== t.__class__ && "ParsleyFieldMultiple" !== t.__class__ || t.$element.is(t.options.excluded) || "undefined" == typeof e.fieldsMappedById[t.__class__ + "-" + t.__id__] && (e.fieldsMappedById[t.__class__ + "-" + t.__id__] = t, e.fields.push(t))
			}), this
		}
	};
	var a = function(n, r, i, s, o) {
			if (!(new RegExp("ParsleyField")).test(t.get(n, "__class__"))) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
			if ("function" != typeof window.ParsleyValidator.validators[r] && "Assert" !== window.ParsleyValidator.validators[r](i).__parentClass__) throw new Error("Valid validator expected");
			var u = function(e, n) {
				return "undefined" != typeof e.options[n + "Priority"] ? e.options[n + "Priority"] : t.get(window.ParsleyValidator.validators[n](i), "priority") || 2
			};
			return s = s || u(n, r), "function" == typeof window.ParsleyValidator.validators[r](i).requirementsTransformer && (i = window.ParsleyValidator.validators[r](i).requirementsTransformer()), e.extend(window.ParsleyValidator.validators[r](i), {
				name: r,
				requirements: i,
				priority: s,
				groups: [s],
				isDomConstraint: o || t.attr(n.$element, n.options.namespace, r)
			})
		},
		f = function(n, r, i) {
			this.__class__ = "ParsleyField", this.__id__ = t.hash(4), this.$element = e(n), "undefined" != typeof i ? (this.parent = i, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) : (this.OptionsFactory = r, this.options = this.OptionsFactory.get(this)), this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
		};
	f.prototype = {
		validate: function(t) {
			return this.value = this.getValue(), e.emit("parsley:field:validate", this), e.emit("parsley:field:" + (this.isValid(t, this.value) ? "success" : "error"), this), e.emit("parsley:field:validated", this), this.validationResult
		},
		isValid: function(e, t) {
			this.refreshConstraints();
			var n = this._getConstraintsSortedPriorities();
			if (t = t || this.getValue(), 0 === t.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== e) return this.validationResult = [];
			if (!1 === this.options.priorityEnabled) return !0 === (this.validationResult = this.validateThroughValidator(t, this.constraints, "Any"));
			for (var r = 0; r < n.length; r++)
				if (!0 !== (this.validationResult = this.validateThroughValidator(t, this.constraints, n[r]))) return !1;
			return !0
		},
		getValue: function() {
			var e;
			return e = "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof e || null === e ? "" : !0 === this.options.trimValue ? e.replace(/^\s+|\s+$/g, "") : e
		},
		refreshConstraints: function() {
			return this.actualizeOptions()._bindConstraints()
		},
		addConstraint: function(e, t, n, r) {
			if (e = e.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[e]) {
				var i = new a(this, e, t, n, r);
				"undefined" !== this.constraintsByName[i.name] && this.removeConstraint(i.name), this.constraints.push(i), this.constraintsByName[i.name] = i
			}
			return this
		},
		removeConstraint: function(e) {
			for (var t = 0; t < this.constraints.length; t++)
				if (e === this.constraints[t].name) {
					this.constraints.splice(t, 1);
					break
				}
			return this
		},
		updateConstraint: function(e, t, n) {
			return this.removeConstraint(e).addConstraint(e, t, n)
		},
		_bindConstraints: function() {
			for (var e = [], t = 0; t < this.constraints.length; t++) !1 === this.constraints[t].isDomConstraint && e.push(this.constraints[t]);
			this.constraints = e;
			for (var n in this.options) this.addConstraint(n, this.options[n]);
			return this._bindHtml5Constraints()
		},
		_bindHtml5Constraints: function() {
			(this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0);
			var e = this.$element.attr("type");
			return "undefined" == typeof e ? this : "number" === e ? this.addConstraint("type", "integer", void 0, !0) : (new RegExp(e, "i")).test("email url range") ? this.addConstraint("type", e, void 0, !0) : this
		},
		_isRequired: function() {
			return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
		},
		_getConstraintsSortedPriorities: function() {
			for (var e = [], t = 0; t < this.constraints.length; t++) - 1 === e.indexOf(this.constraints[t].priority) && e.push(this.constraints[t].priority);
			return e.sort(function(e, t) {
				return t - e
			}), e
		}
	};
	var l = function() {
		this.__class__ = "ParsleyFieldMultiple"
	};
	l.prototype = {
		addElement: function(e) {
			return this.$elements.push(e), this
		},
		refreshConstraints: function() {
			var e;
			if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
			for (var t = 0; t < this.$elements.length; t++) {
				e = this.$elements[t].data("ParsleyFieldMultiple").refreshConstraints().constraints;
				for (var n = 0; n < e.length; n++) this.addConstraint(e[n].name, e[n].requirements, e[n].priority, e[n].isDomConstraint)
			}
			return this
		},
		getValue: function() {
			if ("undefined" != typeof this.options.value) return this.options.value;
			if (this.$element.is("input[type=radio]")) return e("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
			if (this.$element.is("input[type=checkbox]")) {
				var t = [];
				return e("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function() {
					t.push(e(this).val())
				}), t.length ? t : []
			}
			return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
		},
		_init: function(e) {
			return this.$elements = [this.$element], this.options.multiple = e, this
		}
	};
	var c = e({}),
		h = {};
	e.listen = function(e) {
		if ("undefined" == typeof h[e] && (h[e] = []), "function" == typeof arguments[1]) return h[e].push({
			fn: arguments[1]
		});
		if ("object" == typeof arguments[1] && "function" == typeof arguments[2]) return h[e].push({
			fn: arguments[2],
			ctxt: arguments[1]
		});
		throw new Error("Wrong parameters")
	}, e.listenTo = function(e, t, n) {
		if ("undefined" == typeof h[t] && (h[t] = []), !(e instanceof f || e instanceof u)) throw new Error("Must give Parsley instance");
		if ("string" != typeof t || "function" != typeof n) throw new Error("Wrong parameters");
		h[t].push({
			instance: e,
			fn: n
		})
	}, e.unsubscribe = function(e, t) {
		if ("undefined" != typeof h[e]) {
			if ("string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
			for (var n = 0; n < h[e].length; n++)
				if (h[e][n].fn === t) return h[e].splice(n, 1)
		}
	}, e.unsubscribeTo = function(e, t) {
		if ("undefined" != typeof h[t]) {
			if (!(e instanceof f || e instanceof u)) throw new Error("Must give Parsley instance");
			for (var n = 0; n < h[t].length; n++)
				if ("undefined" != typeof h[t][n].instance && h[t][n].instance.__id__ === e.__id__) return h[t].splice(n, 1)
		}
	}, e.unsubscribeAll = function(e) {
		"undefined" != typeof h[e] && delete h[e]
	}, e.emit = function(e, t) {
		if ("undefined" != typeof h[e])
			for (var n = 0; n < h[e].length; n++)
				if ("undefined" != typeof h[e][n].instance) {
					if (t instanceof f || t instanceof u)
						if (h[e][n].instance.__id__ !== t.__id__) {
							if (h[e][n].instance instanceof u && t instanceof f)
								for (var r = 0; r < h[e][n].instance.fields.length; r++)
									if (h[e][n].instance.fields[r].__id__ === t.__id__) {
										h[e][n].fn.apply(c, Array.prototype.slice.call(arguments, 1));
										continue
									}
						} else h[e][n].fn.apply(c, Array.prototype.slice.call(arguments, 1))
				} else h[e][n].fn.apply("undefined" != typeof h[e][n].ctxt ? h[e][n].ctxt : c, Array.prototype.slice.call(arguments, 1))
	}, e.subscribed = function() {
		return h
	}, window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n.en = e.extend(window.ParsleyConfig.i18n.en || {}, {
		defaultMessage: "This value seems to be invalid.",
		type: {
			email: "This value should be a valid email.",
			url: "This value should be a valid url.",
			number: "This value should be a valid number.",
			integer: "This value should be a valid integer.",
			digits: "This value should be digits.",
			alphanum: "This value should be alphanumeric."
		},
		notblank: "This value should not be blank.",
		required: "This value is required.",
		pattern: "This value seems to be invalid.",
		min: "This value should be greater than or equal to %s.",
		max: "This value should be lower than or equal to %s.",
		range: "This value should be between %s and %s.",
		minlength: "This value is too short. It should have %s characters or more.",
		maxlength: "This value is too long. It should have %s characters or less.",
		length: "This value length is invalid. It should be between %s and %s characters long.",
		mincheck: "You must select at least %s choices.",
		maxcheck: "You must select %s choices or less.",
		check: "You must select between %s and %s choices.",
		equalto: "This value should be the same."
	}), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
	var p = function(n, r, i) {
		if (this.__class__ = "Parsley", this.__version__ = "2.0.0", this.__id__ = t.hash(4), "undefined" == typeof n) throw new Error("You must give an element");
		if ("undefined" != typeof i && "ParsleyForm" !== i.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
		return this.init(e(n), r, i)
	};
	p.prototype = {
		init: function(e, r, i) {
			if (!e.length) throw new Error("You must bind Parsley on an existing element.");
			if (this.$element = e, this.$element.data("Parsley")) {
				var s = this.$element.data("Parsley");
				return "undefined" != typeof i && (s.parent = i), s
			}
			return this.OptionsFactory = new o(n, t.get(window, "ParsleyConfig") || {}, r, this.getNamespace(r)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || t.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ? this.handleMultiple(i) : this.bind("parsleyField", i) : this
		},
		isMultiple: function() {
			return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
		},
		handleMultiple: function(n) {
			var r, i, s, o = this;
			if (this.options = e.extend(this.options, n ? n.OptionsFactory.get(n) : {}, t.attr(this.$element, this.options.namespace)), this.options.multiple ? i = this.options.multiple : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? i = r = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (i = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.bind("parsleyFieldMultiple", n, i || this.__id__);
			if ("undefined" == typeof i) return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
			if (i = i.replace(/(:|\.|\[|\]|\$)/g, ""), "undefined" != typeof r && e('input[name="' + r + '"]').each(function() {
					e(this).is("input[type=radio], input[type=checkbox]") && e(this).attr(o.options.namespace + "multiple", i)
				}), e("[" + this.options.namespace + "multiple=" + i + "]").length)
				for (var u = 0; u < e("[" + this.options.namespace + "multiple=" + i + "]").length; u++)
					if ("undefined" != typeof e(e("[" + this.options.namespace + "multiple=" + i + "]").get(u)).data("Parsley")) {
						s = e(e("[" + this.options.namespace + "multiple=" + i + "]").get(u)).data("Parsley"), this.$element.data("ParsleyFieldMultiple") || (s.addElement(this.$element), this.$element.attr(this.options.namespace + "id", s.__id__));
						break
					}
			return this.bind("parsleyField", n, i, !0), s || this.bind("parsleyFieldMultiple", n, i)
		},
		getNamespace: function(e) {
			return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof t.get(e, "namespace") ? e.namespace : "undefined" != typeof t.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : n.namespace
		},
		bind: function(n, i, s, o) {
			var a;
			switch (n) {
				case "parsleyForm":
					a = e.extend(new u(this.$element, this.OptionsFactory), new r, window.ParsleyExtend)._bindFields();
					break;
				case "parsleyField":
					a = e.extend(new f(this.$element, this.OptionsFactory, i), new r, window.ParsleyExtend);
					break;
				case "parsleyFieldMultiple":
					a = e.extend(new f(this.$element, this.OptionsFactory, i), new r, new l, window.ParsleyExtend)._init(s);
					break;
				default:
					throw new Error(n + "is not a supported Parsley type")
			}
			return "undefined" != typeof s && t.setAttr(this.$element, this.options.namespace, "multiple", s), "undefined" != typeof o ? (this.$element.data("ParsleyFieldMultiple", a), a) : ((new RegExp("ParsleyF", "i")).test(a.__class__) && (this.$element.data("Parsley", a), e.emit("parsley:" + ("parsleyForm" === n ? "form" : "field") + ":init", a)), a)
		}
	}, e.fn.parsley = e.fn.psly = function(t) {
		if (this.length > 1) {
			var n = [];
			return this.each(function() {
				n.push(e(this).parsley(t))
			}), n
		}
		return e(this).length ? new p(this, t) : void(window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
	}, window.ParsleyUI = "function" == typeof t.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new s).listen(), "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}), window.Parsley = window.psly = p, window.ParsleyUtils = t, window.ParsleyValidator = new i(window.ParsleyConfig.validators, window.ParsleyConfig.i18n), !1 !== t.get(window, "ParsleyConfig.autoBind") && e(document).ready(function() {
		e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley()
	}), "function" == typeof define && define.amd && define("parsley", function() {
		return window.Parsley
	})
}(window.jQuery);
(function(e) {
	var t = {};
	try {
		if (!e && module && module.exports) {
			var e = require("jquery"),
				n = require("jsdom").jsdom;
			e = e(n().parentWindow)
		}
	} catch (r) {}(function(e, t) {
		"use strict";
		var n = {};
		t.forbiddenSequences = ["0123456789", "abcdefghijklmnopqrstuvxywz", "qwertyuiop", "asdfghjkl", "zxcvbnm", "!@#$%^&*()_+"];
		n.wordNotEmail = function(e, t, n) {
			if (t.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i)) {
				e.instances.errors.push(e.ui.spanError(e, "email_as_password"));
				return n
			}
		};
		n.wordLength = function(e, t, n) {
			var r = t.length,
				i = Math.pow(r, e.rules.raisePower);
			if (r < e.common.minChar) {
				i = i + n;
				e.instances.errors.push(e.ui.spanError(e, "password_too_short"))
			}
			return i
		};
		n.wordSimilarToUsername = function(t, n, r) {
			var i = e(t.common.usernameField).val();
			if (i && n.toLowerCase().match(i.toLowerCase())) {
				t.instances.errors.push(t.ui.spanError(t, "same_as_username"));
				return r
			}
			return false
		};
		n.wordTwoCharacterClasses = function(e, t, n) {
			if (t.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) || t.match(/([a-zA-Z])/) && t.match(/([0-9])/) || t.match(/(.[!,@,#,$,%,\^,&,*,?,_,~])/) && t.match(/[a-zA-Z0-9_]/)) {
				return n
			}
			e.instances.errors.push(e.ui.spanError(e, "two_character_classes"));
			return false
		};
		n.wordRepetitions = function(e, t, n) {
			if (t.match(/(.)\1\1/)) {
				e.instances.errors.push(e.ui.spanError(e, "repeated_character"));
				return n
			}
			return false
		};
		n.wordSequences = function(n, r, i) {
			var s = false,
				o;
			if (r.length > 2) {
				e.each(t.forbiddenSequences, function(t, n) {
					var i = [n, n.split("").reverse().join("")];
					e.each(i, function(e, t) {
						for (o = 0; o < r.length - 2; o += 1) {
							if (t.indexOf(r.toLowerCase().substring(o, o + 3)) > -1) {
								s = true
							}
						}
					})
				});
				if (s) {
					n.instances.errors.push(n.ui.spanError(n, "sequence_found"));
					return i
				}
			}
			return false
		};
		n.wordLowercase = function(e, t, n) {
			return t.match(/[a-z]/) && n
		};
		n.wordUppercase = function(e, t, n) {
			return t.match(/[A-Z]/) && n
		};
		n.wordOneNumber = function(e, t, n) {
			return t.match(/\d+/) && n
		};
		n.wordThreeNumbers = function(e, t, n) {
			return t.match(/(.*[0-9].*[0-9].*[0-9])/) && n
		};
		n.wordOneSpecialChar = function(e, t, n) {
			return t.match(/.[!,@,#,$,%,\^,&,*,?,_,~]/) && n
		};
		n.wordTwoSpecialChar = function(e, t, n) {
			return t.match(/(.*[!,@,#,$,%,\^,&,*,?,_,~].*[!,@,#,$,%,\^,&,*,?,_,~])/) && n
		};
		n.wordUpperLowerCombo = function(e, t, n) {
			return t.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && n
		};
		n.wordLetterNumberCombo = function(e, t, n) {
			return t.match(/([a-zA-Z])/) && t.match(/([0-9])/) && n
		};
		n.wordLetterNumberCharCombo = function(e, t, n) {
			return t.match(/([a-zA-Z0-9].*[!,@,#,$,%,\^,&,*,?,_,~])|([!,@,#,$,%,\^,&,*,?,_,~].*[a-zA-Z0-9])/) && n
		};
		t.validation = n;
		t.executeRules = function(n, r) {
			var i = 0;
			e.each(n.rules.activated, function(s, o) {
				if (o) {
					var u = n.rules.scores[s],
						a = t.validation[s],
						f;
					if (!e.isFunction(a)) {
						a = n.rules.extra[s]
					}
					if (e.isFunction(a)) {
						f = a(n, r, u);
						if (f) {
							i += f
						}
					}
				}
			});
			return i
		}
	})(e, t);
	try {
		if (module && module.exports) {
			module.exports = t
		}
	} catch (r) {}
	var i = {};
	i.common = {};
	i.common.minChar = 6;
	i.common.usernameField = "#username";
	i.common.onLoad = undefined;
	i.common.onKeyUp = undefined;
	i.common.zxcvbn = false;
	i.common.debug = false;
	i.rules = {};
	i.rules.extra = {};
	i.rules.scores = {
		wordNotEmail: -100,
		wordLength: -50,
		wordSimilarToUsername: -100,
		wordSequences: -50,
		wordTwoCharacterClasses: 2,
		wordRepetitions: -25,
		wordLowercase: 1,
		wordUppercase: 3,
		wordOneNumber: 3,
		wordThreeNumbers: 5,
		wordOneSpecialChar: 3,
		wordTwoSpecialChar: 5,
		wordUpperLowerCombo: 2,
		wordLetterNumberCombo: 2,
		wordLetterNumberCharCombo: 2
	};
	i.rules.activated = {
		wordNotEmail: true,
		wordLength: true,
		wordSimilarToUsername: true,
		wordSequences: true,
		wordTwoCharacterClasses: false,
		wordRepetitions: false,
		wordLowercase: true,
		wordUppercase: true,
		wordOneNumber: true,
		wordThreeNumbers: true,
		wordOneSpecialChar: true,
		wordTwoSpecialChar: true,
		wordUpperLowerCombo: true,
		wordLetterNumberCombo: true,
		wordLetterNumberCharCombo: true
	};
	i.rules.raisePower = 1.4;
	i.ui = {};
	i.ui.bootstrap2 = false;
	i.ui.showProgressBar = true;
	i.ui.showPopover = false;
	i.ui.showStatus = false;
	i.ui.spanError = function(e, t) {
		"use strict";
		var n = e.ui.errorMessages[t];
		return '<span style="color: #d52929">' + n + "</span>"
	};
	i.ui.errorMessages = {
		password_too_short: "The Password is too short",
		email_as_password: "Do not use your email as your password",
		same_as_username: "Your password cannot contain your username",
		two_character_classes: "Use different character classes",
		repeated_character: "Too many repetitions",
		sequence_found: "Your password contains sequences"
	};
	i.ui.verdicts = ["Weak", "Normal", "Medium", "Strong", "Very Strong"];
	i.ui.showVerdicts = true;
	i.ui.showVerdictsInsideProgressBar = false;
	i.ui.showErrors = false;
	i.ui.container = undefined;
	i.ui.viewports = {
		progress: undefined,
		verdict: undefined,
		errors: undefined
	};
	i.ui.scores = [14, 26, 38, 50];
	var s = {};
	(function(e, t) {
		"use strict";
		var n = ["danger", "warning", "success"],
			r = ["error", "warning", "success"];
		t.getContainer = function(t, n) {
			var r;
			r = e(t.ui.container);
			if (!(r && r.length === 1)) {
				r = n.parent()
			}
			return r
		};
		t.findElement = function(e, t, n) {
			if (t) {
				return e.find(t).find(n)
			}
			return e.find(n)
		};
		t.getUIElements = function(e, n) {
			var r, i;
			if (e.instances.viewports) {
				return e.instances.viewports
			}
			r = t.getContainer(e, n);
			i = {};
			i.$progressbar = t.findElement(r, e.ui.viewports.progress, "div.progress");
			if (e.ui.showVerdictsInsideProgressBar) {
				i.$verdict = i.$progressbar.find("span.password-verdict")
			}
			if (!e.ui.showPopover) {
				if (!e.ui.showVerdictsInsideProgressBar) {
					i.$verdict = t.findElement(r, e.ui.viewports.verdict, "span.password-verdict")
				}
				i.$errors = t.findElement(r, e.ui.viewports.errors, "ul.error-list")
			}
			e.instances.viewports = i;
			return i
		};
		t.initProgressBar = function(n, r) {
			var i = t.getContainer(n, r),
				s = "<div class='progress'><div class='";
			if (!n.ui.bootstrap2) {
				s += "progress-"
			}
			s += "bar'>";
			if (n.ui.showVerdictsInsideProgressBar) {
				s += "<span class='password-verdict'></span>"
			}
			s += "</div></div>";
			if (n.ui.viewports.progress) {
				i.find(n.ui.viewports.progress).append(s)
			} else {
				e(s).insertAfter(r)
			}
		};
		t.initHelper = function(n, r, i, s) {
			var o = t.getContainer(n, r);
			if (s) {
				o.find(s).append(i)
			} else {
				e(i).insertAfter(r)
			}
		};
		t.initVerdict = function(e, n) {
			t.initHelper(e, n, "<span class='password-verdict'></span>", e.ui.viewports.verdict)
		};
		t.initErrorList = function(e, n) {
			t.initHelper(e, n, "<ul class='error-list'></ul>", e.ui.viewports.errors)
		};
		t.initPopover = function(e, t) {
			t.popover("destroy");
			t.popover({
				html: true,
				placement: "bottom",
				trigger: "manual",
				content: " "
			})
		};
		t.initUI = function(e, n) {
			if (e.ui.showPopover) {
				t.initPopover(e, n)
			} else {
				if (e.ui.showErrors) {
					t.initErrorList(e, n)
				}
				if (e.ui.showVerdicts && !e.ui.showVerdictsInsideProgressBar) {
					t.initVerdict(e, n)
				}
			}
			if (e.ui.showProgressBar) {
				t.initProgressBar(e, n)
			}
		};
		t.possibleProgressBarClasses = ["danger", "warning", "success"];
		t.updateProgressBar = function(r, i, s, o) {
			var u = t.getUIElements(r, i).$progressbar,
				a = u.find(".progress-bar"),
				f = "progress-";
			if (r.ui.bootstrap2) {
				a = u.find(".bar");
				f = ""
			}
			e.each(t.possibleProgressBarClasses, function(e, t) {
				a.removeClass(f + "bar-" + t)
			});
			a.addClass(f + "bar-" + n[s]);
			a.css("width", o + "%")
		};
		t.updateVerdict = function(e, n, r) {
			var i = t.getUIElements(e, n).$verdict;
			i.text(r)
		};
		t.updateErrors = function(n, r) {
			var i = t.getUIElements(n, r).$errors,
				s = "";
			e.each(n.instances.errors, function(e, t) {
				s += "<li>" + t + "</li>"
			});
			i.html(s)
		};
		t.updatePopover = function(t, n, r) {
			var i = n.data("bs.popover"),
				s = "",
				o = true;
			if (t.ui.showVerdicts && r.length > 0) {
				s = "<h5><span class='password-verdict'>" + r + "</span></h5>";
				o = false
			}
			if (t.ui.showErrors) {
				s += "<div><ul class='error-list'>";
				e.each(t.instances.errors, function(e, t) {
					s += "<li>" + t + "</li>";
					o = false
				});
				s += "</ul></div>"
			}
			if (o) {
				n.popover("hide");
				return
			}
			if (t.ui.bootstrap2) {
				i = n.data("popover")
			}
			if (i.$arrow && i.$arrow.parents("body").length > 0) {
				n.find("+ .popover .popover-content").html(s)
			} else {
				i.options.content = s;
				n.popover("show")
			}
		};
		t.updateFieldStatus = function(t, n, i) {
			var s = t.ui.bootstrap2 ? ".control-group" : ".form-group",
				o = n.parents(s).first();
			e.each(r, function(e, n) {
				if (!t.ui.bootstrap2) {
					n = "has-" + n
				}
				o.removeClass(n)
			});
			i = r[i];
			if (!t.ui.bootstrap2) {
				i = "has-" + i
			}
			o.addClass(i)
		};
		t.percentage = function(e, t) {
			var n = Math.floor(100 * e / t);
			n = n < 0 ? 0 : n;
			n = n > 100 ? 100 : n;
			return n
		};
		t.updateUI = function(e, n, r) {
			var i, s, o;
			if (r <= 0) {
				i = 0;
				o = ""
			} else if (r < e.ui.scores[0]) {
				i = 0;
				o = e.ui.verdicts[0]
			} else if (r < e.ui.scores[1]) {
				i = 0;
				o = e.ui.verdicts[1]
			} else if (r < e.ui.scores[2]) {
				i = 1;
				o = e.ui.verdicts[2]
			} else if (r < e.ui.scores[3]) {
				i = 1;
				o = e.ui.verdicts[3]
			} else {
				i = 2;
				o = e.ui.verdicts[4]
			}
			if (e.ui.showProgressBar) {
				s = t.percentage(r, e.ui.scores[3]);
				t.updateProgressBar(e, n, i, s);
				if (e.ui.showVerdictsInsideProgressBar) {
					t.updateVerdict(e, n, o)
				}
			}
			if (e.ui.showStatus) {
				t.updateFieldStatus(e, n, i)
			}
			if (e.ui.showPopover) {
				t.updatePopover(e, n, o)
			} else {
				if (e.ui.showVerdicts && !e.ui.showVerdictsInsideProgressBar) {
					t.updateVerdict(e, n, o)
				}
				if (e.ui.showErrors) {
					t.updateErrors(e, n)
				}
			}
		}
	})(e, s);
	var o = {};
	(function(e, n) {
		"use strict";
		var r, o;
		r = function(n) {
			var r = e(n.target),
				i = r.data("pwstrength-bootstrap"),
				o = r.val(),
				u, a;
			i.instances.errors = [];
			if (i.common.zxcvbn) {
				u = e(i.common.usernameField).val();
				if (u && u.length > 0) {
					a = zxcvbn(o, [u]).entropy
				} else {
					a = zxcvbn(o).entropy
				}
			} else {
				a = t.executeRules(i, o)
			}
			s.updateUI(i, r, a);
			if (i.common.debug) {
				console.log(a)
			}
			if (e.isFunction(i.common.onKeyUp)) {
				i.common.onKeyUp(n)
			}
		};
		n.init = function(t) {
			this.each(function(n, o) {
				var u = e.extend(true, {}, i),
					a = e.extend(true, u, t),
					f = e(o);
				a.instances = {};
				f.data("pwstrength-bootstrap", a);
				f.on("keyup", r);
				s.initUI(a, f);
				if (f.val().trim()) {
					f.trigger("keyup")
				}
				if (e.isFunction(a.common.onLoad)) {
					a.common.onLoad()
				}
			});
			return this
		};
		n.destroy = function() {
			this.each(function(t, n) {
				var r = e(n),
					i = r.data("pwstrength-bootstrap"),
					o = s.getUIElements(i, r);
				o.$progressbar.remove();
				o.$verdict.remove();
				o.$errors.remove();
				r.removeData("pwstrength-bootstrap")
			})
		};
		n.forceUpdate = function() {
			this.each(function(e, t) {
				var n = {
					target: t
				};
				r(n)
			})
		};
		n.addRule = function(t, n, r, i) {
			this.each(function(s, o) {
				var u = e(o).data("pwstrength-bootstrap");
				u.rules.activated[t] = i;
				u.rules.scores[t] = r;
				u.rules.extra[t] = n
			})
		};
		o = function(t, n, r) {
			this.each(function(i, s) {
				e(s).data("pwstrength-bootstrap").rules[n][t] = r
			})
		};
		n.changeScore = function(e, t) {
			o.call(this, e, "scores", t)
		};
		n.ruleActive = function(e, t) {
			o.call(this, e, "activated", t)
		};
		e.fn.pwstrength = function(t) {
			var r;
			if (n[t]) {
				r = n[t].apply(this, Array.prototype.slice.call(arguments, 1))
			} else if (typeof t === "object" || !t) {
				r = n.init.apply(this, arguments)
			} else {
				e.error("Method " + t + " does not exist on jQuery.pwstrength-bootstrap")
			}
			return r
		}
	})(e, o)
})(jQuery);
(function(e, t) {
	if (typeof exports === "object" && exports) {
		t(exports)
	} else {
		var n = {};
		t(n);
		if (typeof define === "function" && define.amd) {
			define(n)
		} else {
			e.Mustache = n
		}
	}
})(this, function(e) {
	function n(e, n) {
		return t.call(e, n)
	}

	function i(e) {
		return !n(r, e)
	}

	function u(e) {
		return typeof e === "function"
	}

	function a(e) {
		return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
	}

	function l(e) {
		return String(e).replace(/[&<>"'\/]/g, function(e) {
			return f[e]
		})
	}

	function c(e) {
		if (!o(e) || e.length !== 2) {
			throw new Error("Invalid tags: " + e)
		}
		return [new RegExp(a(e[0]) + "\\s*"), new RegExp("\\s*" + a(e[1]))]
	}

	function g(t, n) {
		function E() {
			if (l && !g) {
				while (f.length) {
					delete u[f.pop()]
				}
			} else {
				f = []
			}
			l = false;
			g = false
		}
		n = n || e.tags;
		t = t || "";
		if (typeof n === "string") {
			n = n.split(p)
		}
		var r = c(n);
		var s = new w(t);
		var o = [];
		var u = [];
		var f = [];
		var l = false;
		var g = false;
		var S, x, T, N, C, k;
		while (!s.eos()) {
			S = s.pos;
			T = s.scanUntil(r[0]);
			if (T) {
				for (var L = 0, A = T.length; L < A; ++L) {
					N = T.charAt(L);
					if (i(N)) {
						f.push(u.length)
					} else {
						g = true
					}
					u.push(["text", N, S, S + 1]);
					S += 1;
					if (N === "\n") {
						E()
					}
				}
			}
			if (!s.scan(r[0])) break;
			l = true;
			x = s.scan(m) || "name";
			s.scan(h);
			if (x === "=") {
				T = s.scanUntil(d);
				s.scan(d);
				s.scanUntil(r[1])
			} else if (x === "{") {
				T = s.scanUntil(new RegExp("\\s*" + a("}" + n[1])));
				s.scan(v);
				s.scanUntil(r[1]);
				x = "&"
			} else {
				T = s.scanUntil(r[1])
			}
			if (!s.scan(r[1])) {
				throw new Error("Unclosed tag at " + s.pos)
			}
			C = [x, T, S, s.pos];
			u.push(C);
			if (x === "#" || x === "^") {
				o.push(C)
			} else if (x === "/") {
				k = o.pop();
				if (!k) {
					throw new Error('Unopened section "' + T + '" at ' + S)
				}
				if (k[1] !== T) {
					throw new Error('Unclosed section "' + k[1] + '" at ' + S)
				}
			} else if (x === "name" || x === "{" || x === "&") {
				g = true
			} else if (x === "=") {
				r = c(n = T.split(p))
			}
		}
		k = o.pop();
		if (k) {
			throw new Error('Unclosed section "' + k[1] + '" at ' + s.pos)
		}
		return b(y(u))
	}

	function y(e) {
		var t = [];
		var n, r;
		for (var i = 0, s = e.length; i < s; ++i) {
			n = e[i];
			if (n) {
				if (n[0] === "text" && r && r[0] === "text") {
					r[1] += n[1];
					r[3] = n[3]
				} else {
					t.push(n);
					r = n
				}
			}
		}
		return t
	}

	function b(e) {
		var t = [];
		var n = t;
		var r = [];
		var i, s;
		for (var o = 0, u = e.length; o < u; ++o) {
			i = e[o];
			switch (i[0]) {
				case "#":
				case "^":
					n.push(i);
					r.push(i);
					n = i[4] = [];
					break;
				case "/":
					s = r.pop();
					s[5] = i[2];
					n = r.length > 0 ? r[r.length - 1][4] : t;
					break;
				default:
					n.push(i)
			}
		}
		return t
	}

	function w(e) {
		this.string = e;
		this.tail = e;
		this.pos = 0
	}

	function E(e, t) {
		this.view = e == null ? {} : e;
		this.cache = {
			".": this.view
		};
		this.parent = t
	}

	function S() {
		this.cache = {}
	}
	var t = RegExp.prototype.test;
	var r = /\S/;
	var s = Object.prototype.toString;
	var o = Array.isArray || function(e) {
		return s.call(e) === "[object Array]"
	};
	var f = {
		"&": "&",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
		"/": "&#x2F;"
	};
	var h = /\s*/;
	var p = /\s+/;
	var d = /\s*=/;
	var v = /\s*\}/;
	var m = /#|\^|\/|>|\{|&|=|!/;
	w.prototype.eos = function() {
		return this.tail === ""
	};
	w.prototype.scan = function(e) {
		var t = this.tail.match(e);
		if (t && t.index === 0) {
			var n = t[0];
			this.tail = this.tail.substring(n.length);
			this.pos += n.length;
			return n
		}
		return ""
	};
	w.prototype.scanUntil = function(e) {
		var t = this.tail.search(e),
			n;
		switch (t) {
			case -1:
				n = this.tail;
				this.tail = "";
				break;
			case 0:
				n = "";
				break;
			default:
				n = this.tail.substring(0, t);
				this.tail = this.tail.substring(t)
		}
		this.pos += n.length;
		return n
	};
	E.prototype.push = function(e) {
		return new E(e, this)
	};
	E.prototype.lookup = function(e) {
		var t;
		if (e in this.cache) {
			t = this.cache[e]
		} else {
			var n = this;
			while (n) {
				if (e.indexOf(".") > 0) {
					t = n.view;
					var r = e.split("."),
						i = 0;
					while (t != null && i < r.length) {
						t = t[r[i++]]
					}
				} else {
					t = n.view[e]
				}
				if (t != null) break;
				n = n.parent
			}
			this.cache[e] = t
		}
		if (u(t)) {
			t = t.call(this.view)
		}
		return t
	};
	S.prototype.clearCache = function() {
		this.cache = {}
	};
	S.prototype.parse = function(e, t) {
		var n = this.cache;
		var r = n[e];
		if (r == null) {
			r = n[e] = g(e, t)
		}
		return r
	};
	S.prototype.render = function(e, t, n) {
		var r = this.parse(e);
		var i = t instanceof E ? t : new E(t);
		return this.renderTokens(r, i, n, e)
	};
	S.prototype.renderTokens = function(t, n, r, i) {
		function f(e) {
			return a.render(e, n, r)
		}
		var s = "";
		var a = this;
		var l, c;
		for (var h = 0, p = t.length; h < p; ++h) {
			l = t[h];
			switch (l[0]) {
				case "#":
					c = n.lookup(l[1]);
					if (!c) continue;
					if (o(c)) {
						for (var d = 0, v = c.length; d < v; ++d) {
							s += this.renderTokens(l[4], n.push(c[d]), r, i)
						}
					} else if (typeof c === "object" || typeof c === "string") {
						s += this.renderTokens(l[4], n.push(c), r, i)
					} else if (u(c)) {
						if (typeof i !== "string") {
							throw new Error("Cannot use higher-order sections without the original template")
						}
						c = c.call(n.view, i.slice(l[3], l[5]), f);
						if (c != null) s += c
					} else {
						s += this.renderTokens(l[4], n, r, i)
					}
					break;
				case "^":
					c = n.lookup(l[1]);
					if (!c || o(c) && c.length === 0) {
						s += this.renderTokens(l[4], n, r, i)
					}
					break;
				case ">":
					if (!r) continue;
					c = u(r) ? r(l[1]) : r[l[1]];
					if (c != null) s += this.renderTokens(this.parse(c), n, r, c);
					break;
				case "&":
					c = n.lookup(l[1]);
					if (c != null) s += c;
					break;
				case "name":
					c = n.lookup(l[1]);
					if (c != null) s += e.escape(c);
					break;
				case "text":
					s += l[1];
					break
			}
		}
		return s
	};
	e.name = "mustache.js";
	e.version = "0.8.1";
	e.tags = ["{{", "}}"];
	var x = new S;
	e.clearCache = function() {
		return x.clearCache()
	};
	e.parse = function(e, t) {
		return x.parse(e, t)
	};
	e.render = function(e, t, n) {
		return x.render(e, t, n)
	};
	e.to_html = function(t, n, r, i) {
		var s = e.render(t, n, r);
		if (u(i)) {
			i(s)
		} else {
			return s
		}
	};
	e.escape = l;
	e.Scanner = w;
	e.Context = E;
	e.Writer = S
});
"use strict";
jQuery(document).ready(function(e) {
	if (Function("/*@cc_on return document.documentMode===10@*/")()) {
		document.documentElement.className += " ie10"
	}
	e(".testimonial-item").css("visibility", "visible");
	easyTabsZeina(".tab-container", {
		animationSpeed: "fast",
		defaultTab: "li:first-child",
		tabs: "ul>li"
	});
	e(".searchbox .searchbox-icon,.searchbox .searchbox-inputtext").bind("click", function() {
		var t = e(".searchbox .searchbox-inputtext");
		t.css("width", "120px");
		t.focus();
		e(".searchbox", this).addClass("searchbox-focus")
	});
	e(".top-bar .searchbox-inputtext,body").bind("blur", function() {
		var t = e(".searchbox .searchbox-inputtext");
		t.css("width", "0px");
		e(".searchbox", this).removeClass("searchbox-focus")
	});
	e(".accordion .accordion-row:first-child .title").trigger("click");
	if (document.getElementById("contact_map")) {
		google.maps.event.addDomListener(window, "load", contactusMap)
	}
	e("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: "fast",
		slideshow: 5e3,
		autoplay_slideshow: false,
		opacity: .8
	});
	e(".navigation").AXMenu({
		showArrowIcon: true,
		firstLevelArrowIcon: "",
		menuArrowIcon: ""
	});
	e(".header .mobile-nav ").append(e(".navigation").html());
	e(".header .mobile-nav li").bind("click", function(t) {
		var n = e(this);
		var r = n.find(">ul");
		var i = n.find(">a");
		if (r.length === 0 && i[0].nodeName.toLowerCase() === "a") {
			window.location.href = i.attr("href")
		} else {
			r.toggle(0, function() {
				if (e(this).css("display") === "block") {
					i.find(".icon-chevron-down").removeClass("icon-chevron-down").addClass("icon-chevron-up")
				} else {
					i.find(".icon-chevron-up").removeClass("icon-chevron-up").addClass("icon-chevron-down")
				}
			})
		}
		t.stopPropagation();
		return false
	});
	e(".mobile-menu-button").click(function() {
		e(".mobile-nav").toggle()
	});
	e(".header .mobile-nav .icon-chevron-right").each(function() {
		e(this).removeClass("icon-chevron-right").addClass("icon-chevron-down")
	});
	e(".rev-slider-fixed,.rev-slider-full").css("visibility", "visible");
	e(".rev-slider-banner-fixed").revolution({
		delay: 5e3,
		startwidth: 926,
		startheight: 430,
		onHoverStop: "on",
		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 3,
		hideThumbs: 0,
		navigationType: "bullet",
		navigationArrows: "solo",
		navigationStyle: "round",
		navigationHAlign: "center",
		navigationVAlign: "bottom",
		navigationHOffset: 30,
		navigationVOffset: -40,
		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 5,
		soloArrowLeftVOffset: 0,
		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 5,
		soloArrowRightVOffset: 0,
		touchenabled: "on",
		stopAtSlide: -1,
		stopAfterLoops: -1,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		hideSliderAtLimit: 0,
		fullWidth: "off",
		fullScreen: "off",
		fullScreenOffsetContainer: "#topheader-to-offset",
		shadow: 0
	});
	e(".rev-slider-banner-full").revolution({
		delay: 5e3,
		startwidth: 1170,
		startheight: 500,
		onHoverStop: "on",
		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 3,
		hideThumbs: 0,
		navigationType: "none",
		navigationArrows: "solo",
		navigationStyle: "bullets",
		navigationHAlign: "center",
		navigationVAlign: "bottom",
		navigationHOffset: 30,
		navigationVOffset: 30,
		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,
		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,
		touchenabled: "on",
		stopAtSlide: -1,
		stopAfterLoops: -1,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		hideSliderAtLimit: 0,
		fullWidth: "on",
		fullScreen: "off",
		fullScreenOffsetContainer: "#topheader-to-offset",
		shadow: 0
	});
	zeinaAccordion(".accordion", true);
	e("body").append('<div id="to-top-button"> <i class="fa fa-angle-up"></i> </div>');
	e("#to-top-button").click(function() {
		e("body,html").animate({
			scrollTop: 0
		})
	});
	e(".alert a.alert-remove").click(function() {
		e(this).parents(".alert").first().fadeOut();
		return false
	});
	e(window).resize(function() {
		centeringBullets();
		e(".tab-container").trigger("easytabs:midTransition");
		e("#masonry-elements,.portfolio-items").isotope("reLayout");
		setTimeout(function() {
			e("#masonry-elements,.portfolio-items").isotope("reLayout")
		}, 500)
	});
	e("input, textarea").placeholder();
	embed_video_processing();
	e(".social-media-icon,.tool-tip").tipsy({
		gravity: "s",
		fade: true,
		offset: 5
	});
	e(".item_img_overlay_content .social-media-icon,.top-bar .social-media-icon").unbind("mouseenter");
	e(".message-box ,.callout-box").each(function() {
		var t = e(this);
		var n = t.find(".btn");
		t.append('<a href="' + n.attr("href") + '" class="' + n.attr("class") + ' btn-mobile">' + n.html() + "</a>")
	});
	stickyMenu();
	if (e("html").hasClass("lt-ie9")) {
		e(".breadcrumbs li:last-child").addClass("last-child");
		e(".navigation > li:last-child").addClass("last-child-nav");
		e(".flickr_badge_wrapper .flickr_badge_image").addClass("flicker-ie");
		e(".flickr_badge_wrapper .flickr_badge_image:nth-child(3n+1)").addClass("last-child-flicker");
		e(".content-style3 ").css("width", "100%").css("width", "-=28px");
		e(".section-subscribe input[type=text]").css("width", "100%").css("width", "-=40px");
		e(".blog-search .blog-search-input").css("width", "100%").css("width", "-=40px");
		e(".tab").click(function() {
			setTimeout(function() {
				e(".content-style3 ").css("width", "100%").css("width", "-=28px");
				e(".section-subscribe input[type=text]").css("width", "100%").css("width", "-=40px")
			}, 500)
		});
		setInterval(function() {
			e("#masonry-elements,.portfolio-items").isotope("reLayout")
		}, 1e3)
	}
	centeringBullets();
	var t = e(".portfolio-items");
	if (e("html").hasClass("lt-ie9")) {
		t.isotope({
			itemSelector: ".portfolio-items .thumb-label-item",
			masonry: {
				columnWidth: e(".isotope-item:first").width(),
				gutterWidth: 6
			},
			filter: "*",
			transformsEnabled: false,
			layoutMode: "masonry",
			animationEngine: "css"
		})
	} else {
		t.isotope({
			itemSelector: ".portfolio-items .thumb-label-item",
			masonry: {
				columnWidth: e(".isotope-item:first").width(),
				gutterWidth: 6
			},
			filter: "*",
			transformsEnabled: false,
			layoutMode: "masonry"
		})
	}
	e(".portfolio-filter-container.local-filter a").click(function() {
		t.isotope({
			filter: this.getAttribute("data-filter")
		});
		return false
	});
	var n = null;
	e(".portfolio-filter.local-filter a").click(function() {
		if (n === null) {
			e(".portfolio-filter a").removeClass("portfolio-selected")
		} else {
			e(n).removeClass("portfolio-selected")
		}
		n = this;
		e(this).addClass("portfolio-selected")
	})
});
var loaded = false,
	timeout = 2e4;
setTimeout(function() {
	if (!loaded) {
		hideLoading()
	}
}, timeout);
$(window).load(function() {
	loaded = true;
	centeringBullets();
	hideLoading();
	var e = $("#masonry-elements");
	e.isotope({
		transformsEnabled: false,
		masonry: {
			columnWidth: 270,
			gutterWidth: 15
		}
	});
	e.infinitescroll({
		navSelector: "#masonry-elements-nav",
		nextSelector: "#masonry-elements-nav a:first",
		itemSelector: ".feature",
		loading: {
			finishedMsg: "No more pages to load.",
			img: "images/loading.gif",
			selector: "#loading",
			speed: "normal"
		},
		maxPage: 3
	}, function(t) {
		embed_video_processing();
		var n = $(t);
		e.append(n);
		e.isotope("appended", n);
		e.find(".cycle-slideshow").cycle({})
	});
	$("#masonry-elements,.portfolio-items").isotope("reLayout")
});
var map;
(function() {
	function e(e) {
		this.path = e;
		var t = this.path.split("."),
			n = t.slice(0, t.length - 1).join("."),
			r = t[t.length - 1];
		this.at_2x_path = n + "@2x." + r
	}

	function t(t) {
		this.el = t, this.path = new e(this.el.getAttribute("src"));
		var n = this;
		this.path.check_2x_variant(function(e) {
			e && n.swap()
		})
	}
	var n = typeof exports == "undefined" ? window : exports;
	n.RetinaImagePath = e, e.confirmed_paths = [], e.prototype.is_external = function() {
		return !!this.path.match(/^https?\:/i) && !this.path.match("//" + document.domain)
	}, e.prototype.check_2x_variant = function(t) {
		var n, r = this;
		if (this.is_external()) return t(!1);
		if (this.at_2x_path in e.confirmed_paths) return t(!0);
		n = new XMLHttpRequest, n.open("HEAD", this.at_2x_path), n.onreadystatechange = function() {
			return n.readyState != 4 ? t(!1) : n.status >= 200 && n.status <= 399 ? (e.confirmed_paths.push(r.at_2x_path), t(!0)) : t(!1)
		}, n.send()
	}, n.RetinaImage = t, t.prototype.swap = function(e) {
		function t() {
			n.el.complete ? (n.el.setAttribute("width", n.el.offsetWidth), n.el.setAttribute("height", n.el.offsetHeight), n.el.setAttribute("src", e)) : setTimeout(t, 5)
		}
		typeof e == "undefined" && (e = this.path.at_2x_path);
		var n = this;
		t()
	}, n.devicePixelRatio > 1 && (window.onload = function() {
		var e = document.getElementsByTagName("img"),
			n = [],
			r, i;
		for (r = 0; r < e.length; r++) i = e[r], n.push(new t(i))
	})
})()
