function updateLanguageReadyURL(){if(null!=course){document.getElementById("languageready-url").href="https://www.dlsweb.rmit.edu.au/slc/OfficialLanguageReady?course="+course}}var ua=window.navigator.userAgent,msie=ua.indexOf("MSIE ");(msie>0||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".ie").fadeIn("fast");var course=null;if(""!=window.location.search&&(course=window.location.search.substring(1).split("=")[1]),"CSS"in window&&"supports"in window.CSS){var support=window.CSS.supports("mix-blend-mode","multiply");support=support?"mix-blend-mode":"no-blend",$(".wedge").addClass(support)}for(i=0;i<data.length;i++){var section="";section+='<div index="'+i+'" id="slide'+(i+1)+'" class="container slide question">',section+='<div class="content"><h3 class="statement">'+data[i].statement,i!=data.length-1?(section+='<hr></h3><div class="gallery"><img alt="" src="'+data[i].image+'"/></div>',section+='<div class="cube"><div class="flippety"><div class="btnGroup"><button value="T" class="btn btn-2 btn-2c">I agree</button>',section+='<button value="F" class="btn btn-2 btn-2c">I disagree</button><button value="N" class="btn btn-2 btn-2c">I\'m not sure</button></div></div>',section+='<div class="flop"><div class="board"><h3>Well done!</h3><span class="answered">You answered: <span></span></span>',section+='<p class="text">'+data[i].feedback+"</p></div></div>"):(section+='</h3><span class="thanks">Thank you for taking the quiz.<br></span>',section+='<div class="email-container"><input placeholder="s1234567@student.rmit.edu.au" type="email" id="email-address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$" />',section+='<button type="button" id="submit-email" class="btn btn-go-red">Submit</button></div>',section+='<button type="button" id="see-my-results" class="btn btn-go-grey no-email skip-email" onClick="showResult();">Skip and see my results</button></div>'),section+="</div></div></div>",$("#statements").append(section)}var scene=document.getElementById("learningLab"),parallax=new Parallax(scene),totalQNum=$(".question").length,readyGo=function(e){"next"!=e?$("html, body").animate({scrollTop:$("#"+e).offset().top},800,function(){}):$("html, body").animate({scrollTop:$(window).scrollTop()+.15*$(window).height()},150,function(){})};$(".question button").click(function(){$(".next").remove(),$(this).parents(".content").addClass("done");var e=$(this).parents(".cube").addClass("done").find(".flop"),t=$(this).attr("value"),s=parseInt($(this).parents(".question").attr("index"));if(data[s].chosen=t,e.find(".answered span").text($(this).text()),s<20&&$("#statements").css("height",100*(s+2)+"vh"),t===data[s].answer?e.find(".board").addClass("well-done").find("h3").text("Well done!"):e.find(".board").addClass("think-again").find("h3").text("Think again..."),"N"===t&&e.find(".board").addClass("think-about-it").find("h3").text("Consider..."),e.find(".text").text(data[s]["feedback-"+t]),s+1>=data.length)e.append("<div style='margin-top:15px;text-align:center'><button id='resultBtn' onclick='showResult()' class='btn btn-2 btn-2c'>See my results</button></div>");else{(s+1).toString();e.append('<div class="next"><a class="readyGo" onclick="readyGo(\'next\')"><h1>Next</h1><img alt="arrow down" src="img/arrow_down_grey.svg" width="50"></a></div>'),setTimeout(function(){$(".next").addClass("shown")},500)}}),$(".question").waypoint(function(e){var t=this.adapter.$element,s=parseInt(t.attr("index"));footerCtrl(e,s),s>=0?(null==data[parseInt(s)].chosen&&"down"==e&&(disable_scroll(),$(".progBar").css("width",(s+1)/data.length*100+"%"),$("html, body").stop().animate({scrollTop:t.offset().top},800,function(){enable_scroll()})),updateSecBar(data[s].secNum,s)):"down"==e&&(disable_scroll(),$("html, body").stop().animate({scrollTop:t.offset().top},800,function(){enable_scroll()}))},{offset:"90%"});var footerCtrl=function(e,t){t>=0&&"down"==e&&t<20?setTimeout(function(){$("footer").addClass("active")},800):$("footer").removeClass("active")},updateSecBar=function(e,t){$("#sec-now").text(sections[e].toUpperCase()),odometer.innerHTML=t+1},errorMessage=!1,userEmail="";$("#submit-email").on("click",function(){var e=document.getElementById("email-address").value;userEmail=e;var t=document.getElementById("see-my-results");data[20].chosen=e,!function(e){return/\S+@\S+\.\S+/.test(e)}(e)?(errorMessage||$("#submit-email").after('<p class="error-message">Please enter a valid email address.</p>'),errorMessage=!0):(t.innerHTML="See my results",$("#see-my-results").removeClass("skip-email"),$("#see-my-results").removeClass("no-email"),$(this).parent().remove(),$(".thanks").fadeIn(),postToGoogle(),updateLanguageReadyURL())}),$("#email-address").keydown(function(){document.getElementsByClassName("error-message").length&&($(".error-message").remove(),errorMessage=!1)}),$("#see-my-results").on("click",function(){$(this).hasClass("skip-email")&&($("#email-address").prop("disabled",!0).css("background-color","#eee"),$("#submit-email").prop("disabled",!0).css("background-color","#ccc"))});var showResult=function(){footerCtrl("down",20);for(var e=["studySkills","reading","writing","criticalThinking"],t=calcResult(),s="",a="",n=0;n<t.length;n++){var o=t[n];o<.25?(s='<s class="fill"/><s class="no-fill"/><s class="no-fill"/><s class="no-fill"/>',a='<span style="color:#DC2D27">I need to work on this</span>'):o>=.25&&o<.5?(s='<s class="fill"/><s class="fill"/><s class="no-fill"/><s class="no-fill"/>',a='I am <span style="color:#ECA453">somewhat prepared</span>'):o>=.5&&o<.75?(s='<s class="fill"/><s class="fill"/><s class="fill"/><s class="no-fill"/>',a='I am <span style="color:#505EAA">prepared</span>'):o>=.75&&o<=1&&(s='<s class="fill"/><s class="fill"/><s class="fill"/><s class="fill"/>',a='I am <span style="color:#39B54A">well-prepared</span>'),$("#"+e[n]).html(s),$("#"+e[n]+"Total").html(a)}$("#resultBtn").fadeOut(),$("#result").show(),$("footer").removeClass("active"),$("html,body").animate({scrollTop:$("#result").offset().top},800,function(){}),$("#see-my-results").hasClass("no-email")&&(postToGoogle(),updateLanguageReadyURL())},calcResult=function(){for(var e=0,t=0,s=0,a=0,n=0,o=0,l=0,i=0,r=0;r<data.length;r++)0===data[r].secNum?(n++,data[r].chosen===data[r].answer&&e++):1===data[r].secNum?(o++,data[r].chosen===data[r].answer&&t++):2===data[r].secNum?(l++,data[r].chosen===data[r].answer&&s++):(i++,data[r].chosen===data[r].answer&&a++);return[e/n,t/o,s/l,a/i]},postToGoogle=function(){for(var e=["entry.1585701585","entry.1859586492","entry.1630540999","entry.1517360090","entry.1453193561","entry.318125574","entry.63379097","entry.1478646061","entry.848259681","entry.1087848373","entry.182088895","entry.363923022","entry.383864981","entry.1547589618","entry.363275225","entry.1329980524","entry.298968978","entry.1022232156","entry.1670315646","entry.764397551","entry.1982290246","entry.1763941927"],t={},s=0;s<data.length;s++){var a=e[s],n=data[s].chosen;"T"===n?n="Agree":"F"===n?n="Disagree":(n="Not sure",s==data.length-1&&(n=userEmail)),t[a]=n}/^\w{4}\d{4}$/.test(course)&&(t[e[21]]=course,console.log("Course code in googleFormData(): "+t[e[21]])),$.ajax({url:"https://docs.google.com/forms/d/1OZFSbMAvjRbXkT2rOp35Ct22NCxjV4GOAp8aygXXDQw/formResponse",data:t,type:"POST",dataType:"xml",statusCode:{0:function(){},200:function(){}}})};