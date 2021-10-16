//detect browser, kill IE!!!!
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))$(".ie").fadeIn('fast')

//check mix-blend-mode support
if('CSS' in window && 'supports' in window.CSS) {
    var support = window.CSS.supports('mix-blend-mode','multiply');
        support = support?'mix-blend-mode':'no-blend';
        $('.wedge').addClass(support);
}

for(i=0;i<data.length;i++){
    var section = '<div index="'+i+'" id="slide'+(i+1)+'" class="container slide question"><div class="content"><h3 class="statement">'+data[i].statement+'<hr></h3><div class="gallery"><img alt="" src="'+data[i].image+'"/></div><div class="cube"><div class="flippety"><div class="btnGroup"><button value="T" class="btn btn-2 btn-2c">I agree</button><button value="F" class="btn btn-2 btn-2c">I disagree</button><button value="N" class="btn btn-2 btn-2c">I\'m not sure</button></div></div><div class="flop"><div class="board"><h3>Well done!</h3><span class="answered">You answered: <span></span></span><p class="text">'+data[i].feedback+'</p></div></div></div></div></div>'
    $("#statements").append(section)
}


//bottom learning lab footer
var scene = document.getElementById('learningLab');
var parallax = new Parallax(scene);


var totalQNum = $(".question").length

var readyGo = function(slideId){
//    console.log(slideId)
    if(slideId!='next')
        $('html,body').animate({scrollTop: $("#"+slideId).offset().top},800,function(){
        });
    else
        $('html,body').animate({scrollTop:$(window).scrollTop()+ $(window).height()*0.15},150,function(){
        });  
}


//make the choice
$(".question button").click(function(){
    $(".next").remove()
    $(this).parents(".content").addClass("done")
    var $feedback = $(this).parents(".cube").addClass("done").find(".flop")
    var choice = $(this).attr("value")
    var index = parseInt($(this).parents(".question").attr("index"))
    console.log(choice,index)
    data[index].chosen = choice
    $feedback.find(".answered span").text($(this).text())
    if (index <19) $("#statements").css("height",100*(index+2)+"vh")
//    else $("#statements").css("height",100*(index+2)+20+"vh")
    if(choice == data[index].answer){
        $feedback.find('.board').addClass('well-done').find("h3").text("Well done!")
    }else{
        $feedback.find('.board').addClass('think-again').find("h3").text("Think again...")
    }
    if(choice == "N"){
        $feedback.find('.board').addClass('think-about-it').find("h3").text("Think about it...")
    }

    $feedback.find(".text").text(data[index]["feedback-"+choice]);
    if(index+1>=data.length){
        $feedback.append("<div style='margin-top:15px;text-align:center'><button id='resultBtn' onclick='showResult()' class='btn btn-2 btn-2c'>See my results</button></div>")
    }else{
        var next = "slide"+(index+1).toString()
        console.log(next)
        $feedback.append('<div class="next"><a class="readyGo" onclick="readyGo(\'next\')"><h1>Next</h1><img alt="arrow down" src="img/arrow_down_grey.svg" width="50"></a></div>')
        setTimeout(function(){
            $(".next").addClass('shown')
        },500)
    }
})



// snap to container when reaching the end of it
$('.question').waypoint(function(direction) {
    var $this =this.adapter.$element
    var index = parseInt($this.attr("index"))

    footerCtrl(direction,index)

//    console.log(direction,$this.attr('id'),index,$this.offset().top)

    if(index>=0){
        if(data[parseInt(index)].chosen==null){
            if(direction == 'down'){
                disable_scroll();
                $(".progBar").css("width",(index+1)/data.length*100+"%")

                $('html, body').stop().animate({ 
                    scrollTop: $this.offset().top
                },800, function() {
                    enable_scroll();
                });
            }
        }
        updateSecBar(data[index].secNum, index)
    }else{
        if(direction == 'down'){
            disable_scroll();

            $('html, body').stop().animate({ 
                scrollTop: $this.offset().top
            },800, function() {
                enable_scroll();
            });
        }
    }

}, { offset: '90%' });


//footer controller
var footerCtrl = function(direction, index){
    if(index>=0&&direction=='down'&&index<20){
        setTimeout(function(){
            $("footer").addClass('active');
        },800)
    }else{
        $("footer").removeClass('active')
    }
}

var updateSecBar = function(secNum,index){
    $("#sec-now").text(sections[secNum].toUpperCase())

    odometer.innerHTML = (index+1);

}

var showResult =function(){
    footerCtrl('down',20)
    var short = ["ss","rd","wt","ct"]
    var results = calcResult()
    var stars = "", text = ""
    for(var i=0;i<results.length; i++){
        var res = results[i]
        if(0.75<res && res<=1){  
            stars = '<s class="fill"/><s class="fill"/><s class="fill"/><s class="fill"/>'
            text = "I am <span style='color:#39B54A'>well-prepared</span>"
        }else if(0.5<res && res<=0.75){
            stars = '<s class="fill"/><s class="fill"/><s class="fill"/><s class="no-fill"/>'
            text = "I am <span style='color:#505EAA'>prepared</span>"
        }else if(0.25<res && res<=0.5){
            stars = '<s class="fill"/><s class="fill"/><s class="no-fill"/><s class="no-fill"/>'
            text = "I am <span style='color:#ECA453'>somewhat prepared</span>"
        }else{
            stars = '<s class="fill"/><s class="no-fill"/><s class="no-fill"/><s class="no-fill"/>'
            text = "<span style='color:#DC2D27'>I need to work on this</span>"
        }
        console.log(res,stars)
        $("#"+short[i]).html(stars)
        $("#"+short[i]+"t").html(text)
    }

    $("#resultBtn").fadeOut();
    $("#result").show();
    $("footer").removeClass('active')
    $('html,body').animate({scrollTop: $("#result").offset().top},800,function(){});
    postToGoogle()
}


var calcResult = function(){
    var ss=0, rd=0, wt=0, ct=0
    var sst=0, rdt=0, wtt=0, ctt=0
    for(var i=0; i<data.length; i++){
        if(data[i].secNum==0){
            sst++
            if(data[i].chosen == data[i].answer){ss++}
        }else if(data[i].secNum==1){
            rdt++
            if(data[i].chosen == data[i].answer){rd++}
        }else if(data[i].secNum==2){
            wtt++
            if(data[i].chosen == data[i].answer){wt++}
        }else{
            ctt++
            if(data[i].chosen == data[i].answer){ct++}
        }
    }
    console.log(ss/sst,rd/rdt,wt/wtt,ct/ctt)
    return [ss/sst,rd/rdt,wt/wtt,ct/ctt]
}



var postToGoogle = function(){
    var entries = ['entry.1585701585','entry.1859586492','entry.1630540999','entry.1517360090','entry.1453193561','entry.318125574','entry.63379097','entry.1478646061','entry.848259681','entry.1087848373','entry.182088895','entry.363923022','entry.383864981','entry.1547589618','entry.363275225','entry.1329980524','entry.298968978','entry.1022232156','entry.1670315646','entry.764397551']

    var parcle = {}

    for(var i=0; i<data.length; i++){
        var e = entries[i]
        var c = data[i].chosen
        if(c=='T') c="Agree";
        else if(c=='F') c="Disagree";
        else c="Not sure";
        parcle[e] = c;
    }

    console.log(parcle)
    $.ajax({
        url: "https://docs.google.com/forms/d/1OZFSbMAvjRbXkT2rOp35Ct22NCxjV4GOAp8aygXXDQw/formResponse",
        data: parcle,
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                //Success message
                console.log("Success! Data: 0 ");
            },
            200: function() {
                console.log("Success! Data: 200");
            }
        }
    });
}

