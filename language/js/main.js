function updateStudyReadyURL() { if (null != course) { document.getElementById("studyready-url").href = "https://www.dlsweb.rmit.edu.au/slc/OfficialStudyReady?course=" + course } } var ua = window.navigator.userAgent, msie = ua.indexOf("MSIE "); (msie > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".ie").fadeIn("fast"), $(".fullscreen button").click(function () { $(".fullscreen").fadeOut() }); var course = null; "" != window.location.search && (course = window.location.search.substring(1).split("=")[1]), $(window).scroll(function () { $("#page-wrapper").css("background", "rgba(36, 36, 36, " + $(window).scrollTop() / 400 + ")"), $(".floating-animation").css("opacity", 1 - $(window).scrollTop() / 400) }); for (var scene = document.getElementById("learningLab"), parallax = new Parallax(scene), totalQNum = $(".question").length, readyGo = function (e) { "next" != e ? $("html, body").animate({ scrollTop: $("#" + e).offset().top }, 800, function () { }) : $("html, body").animate({ scrollTop: $(window).scrollTop() + $(window).height() }, 800, function () { }) }, curIndex = 0, disabled = !1, j = 0; j < questions.length; j++) { for (var html = '<div index="' + j + '" id="slide' + (j + 1) + '" class="container slide question"><form id="form-' + j + '" class="content statements question-form">', i = 0; i < questions[j].statements.length; i++)4 == j ? (html += '<div class="email-content"><h1 class="header">You\'\ re done!</h1><p>' + questions[j].statements[i] + "</p>", html += '<p class="thanks">Thank you for taking the quiz.</p></div>', html += '', html += '<br><br><br><button type="button" id="see-my-results" class="btn btn-go-grey no-email skip-email" onClick="showResult();">Show me my results</button>') : html += '<input type="radio" id="' + sections[j] + "-" + i + '" name="' + sections[j] + '" value="' + i + '" /><label onclick="makeChoice(this)" class="state-radio" value="' + i + '" for="' + sections[j] + "-" + i + '">' + questions[j].statements[i] + "</label>"; html += "</form></div>", $("#statements").append(html) } var questionNumber = 0, makeChoice = function (e) { var s = $(e).parents(".slide"); if (!s.hasClass("done")) { $(e).addClass("checked"), s.addClass("done"); var t = $(e).attr("value"); if (questions[curIndex].answered = t, curIndex + 1 >= questions.length) { var a = parseInt($(e).parents(".question").attr("index")); questions[curIndex].answered = t, curIndex + 1 >= questions.length && a == questions.length - 1 && (s.append('<div class="next-button-container"><a class="btn-go btn-go-red result-btn" onClick="showResult()"><h2>See my results</h2></a></div>'), setTimeout(function () { $(".result-btn").addClass("shown").click(function () { $(this).fadeOut() }) }, 300)) } else 0 == s.find(".next-btn").length && (s.append('<div class="next-button-container"><a class="btn-go btn-go-red next-btn" onClick="readyGo(\'next\')"><h2>Next</h2></a></div>'), setTimeout(function () { $(".next-btn").addClass("shown").click(function () { $(this).fadeOut() }), $("#statements").css("height", 100 * (curIndex + 2) + "vh"), curIndex++ }, 300)); disabled || $("#form-" + curIndex).children("input").prop("disabled", !0) } }; $(".question").waypoint(function (e) { var s = this.adapter.$element, t = parseInt(s.attr("index")); t >= 0 && t < 5 ? (headerCtrl(e, t), s.hasClass("done") || ("down" == e && (disable_scroll(), $("html, body").stop().animate({ scrollTop: s.offset().top }, 800, function () { enable_scroll(), $(".next-btn").fadeOut() })), updateSecBar(t))) : "down" == e && (disable_scroll(), $("html, body").stop().animate({ scrollTop: s.offset().top }, 800, function () { enable_scroll() })) }, { offset: "90%" }); var headerCtrl = function (e, s) { s >= 0 && "down" == e && s < questions.length ? setTimeout(function () { $("header").addClass("active"), $("footer").addClass("active") }, 800) : ($("header").removeClass("active"), $("footer").removeClass("active")) }, updateSecBar = function (e) { $(".category-list li").removeClass("active"), $(".category-list li:nth-child(" + (e + 1) + ")").addClass("active"), odometer.innerHTML = e + 1 }, showResult = function () { document.getElementById("see-my-results"); headerCtrl("down", 5), $(".category-list li").removeClass("active"), $(".category-list li:last-child").addClass("active"), $(".table tr").each(function (e) { var s = $(this).find(".stars"), t = $(this).find(".feedback"), a = parseInt(questions[e].answered), n = ""; switch (a) { case 0: n = '<s class="fill"></s><s class="no-fill"></s><s class="no-fill"></s><s class="no-fill"></s>'; break; case 1: n = '<s class="fill"></s><s class="fill"></s><s class="no-fill"></s><s class="no-fill"></s>'; break; case 2: n = '<s class="fill"></s><s class="fill"></s><s class="fill"></s><s class="no-fill"></s>'; break; case 3: n = '<s class="fill"></s><s class="fill"></s><s class="fill"></s><s class="fill"></s>'; break; default: n = "" }s.html(n), t.html(results[a].feedback[e]) }), $("#result").show(), $("html, body").animate({ scrollTop: $("#result").offset().top }, 800, function () { }), $("#see-my-results").hasClass("no-email") && (postToGoogle(), updateStudyReadyURL()) }, errorMessage = !1; $("#submit-email").on("click", function () { var e = document.getElementById("email-address").value, s = document.getElementById("see-my-results"); questions[4].answered = e, !function (e) { return /\S+@\S+\.\S+/.test(e) }(e) ? (errorMessage || $("#submit-email").after('<p class="error-message">Please enter a valid email address.</p>'), errorMessage = !0) : (s.innerHTML = "See my results", $("#see-my-results").removeClass("skip-email"), $("#see-my-results").removeClass("no-email"), $(this).parent().remove(), $(".thanks").fadeIn(), postToGoogle(), updateStudyReadyURL()) }), $("#email-address").keydown(function () { document.getElementsByClassName("error-message").length && ($(".error-message").remove(), errorMessage = !1) }), $("#see-my-results").on("click", function () { $(this).hasClass("skip-email") && ($("#email-address").prop("disabled", !0).css("background-color", "#eee"), $("#submit-email").prop("disabled", !0).css("background-color", "#ccc")) }); var postToGoogle = function () { for (var e = ["entry.1944961977", "entry.993067948", "entry.1077964422", "entry.422152634", "entry.1247171634", "entry.847018478"], s = {}, t = 0; t < questions.length; t++) { var a = e[t], n = questions[t].statements[questions[t].answered]; s[a] = 4 != t ? n : questions[t].answered } /^\w{4}\d{4}$/.test(course) && (s[e[5]] = course), $.ajax({ url: "https://docs.google.com/forms/d/1tV5wRBQxQZTZRO200jNApO5wDHijBDIFr3zuJrXNSUI/formResponse", data: s, type: "POST", dataType: "xml", statusCode: { 0: function () { }, 200: function () { } } }) };