var $container = $('#teamContainer');
var soldiers;

$(document).ready(function(){




function init(){        
        
   $.getJSON('data/soldiers.json', function(data) {
  soldiers = data.soldiers;
 // crateSoldiersLists(soldiers);
  $("#soldierTemplate").tmpl(soldiers).appendTo( "#teamContainer" );		
 /* $.each(data.soldiers, function(i, soldier) {
   
    items.push('<li id="' + i + '">' + soldier.name + '</li>');
    $.each(soldier.weapons, function(i, weapon) {
     items.push('<li id="' + i + '">' + weapon.model + '</li>');
    });
  });
 
  $('<ul/>', {
    'class': 'soldiers',
    html: items.join('')
  }).appendTo('body');
  
  */
});


}

init();

function crateSoldiersLists(data){
	
		
	//	$("#soldierTemplate").tmpl(data).appendTo( "#teamContainer" );		
  // $('#teamContainer').append($('<li>',{html: value.name + value.aka }).addClass('element '+ value.role).hide().delay(300*index).fadeIn(300));

	
}

function crateSolderDettails(data){
	
	
	
	
	}








        
});




$(window).load(function(){
	 function q() {
        $("#header #back").animate({
            opacity: 1
        }, 600);
        $("#header #layer1").css("marginTop", -300).delay(500).animate({
            marginTop: 0,
            opacity: 1
        }, 600, "easeInQuad");
        $("#header #layer2").css("marginTop", 200).delay(1E3).animate({
            marginTop: 0,
            opacity: 1
        }, 400, "easeInQuad");
        $("#header #layer3").css("marginTop", 200).delay(1200).animate({
            marginTop: 0,
            opacity: 1
        }, 400, "easeInQuad")
    }
    function r(a) {
        "#" != a ? k ? ($projectHolder.children("div").animate({
            opacity: 0
        }, 300, function () {
            $(this).remove()
        }), $("html, body").animate({
            scrollTop: $projectHolder.offset().top - 20
        }, 300, "easeInQuad"), $loader.delay(600).fadeIn(150), setTimeout(function () {
            s(a)
        }, 459)) : ($projectHolder.css("height", 500), $folioMenu.animate({
            marginTop: 590
        }, 300, "easeInQuad"), $projectHolder.slideDown(300, "easeInQuad"), $("html, body").animate({
            scrollTop: $projectHolder.offset().top - 20
        }, 500, "easeInQuad"), $loader.delay(300).fadeIn(150), k = !0, setTimeout(function () {
            s(a)
        }, 450)) : (k = !1, $projectHolder.children("div").animate({
            opacity: 0
        }, 300, function () {
            $projectHolder.slideUp(300, "easeOutQuad");
            $folioMenu.animate({
                marginTop: 0
            }, 300, "easeOutQuad");
            $(this).remove()
        }))
    }
    function s(a) {
        $("body").append('<div id="tempLoading" style="display:none;"></div>');
        $("#tempLoading").load(a + " #portfolioBox", function () {
            var a = $("#tempLoading").html();
            $projectHolder.append(a);
            a = $projectHolder.height();
            $projectHolder.css("height", "auto");
            var l = $projectHolder.outerHeight(),
                b = $projectHolder.height();
            $projectHolder.css("height", a);
            $("#portfolioSlider").slides({
                effect: "fade",
                crossfade: !0,
                container: "slidesContainer",
                animationStart: function () {
                    $("#portfolioSlider .caption").stop().fadeOut(200)
                },
                animationComplete: function () {
                    $("#portfolioSlider .caption").stop().fadeIn(200)
                },
                slidesLoaded: function () {
                    $("#portfolioSlider .caption").stop().fadeIn(200)
                }
            });
            $(".portfolioNavigation").find("a").click(function () {
                r($(this).attr("href"));
                return !1
            });
            $folioMenu.animate({
                marginTop: l + 90
            }, 400, "easeInQuad");
            $projectHolder.animate({
                height: b
            }, 400, "easeInQuad");
            $loader.fadeOut(100);
            $projectHolder.children("div").delay(400).animate({
                opacity: 1
            }, 600);
            $("#tempLoading").remove()
        })
    }
    function f() {
        m.isotope();
        $("#menu").css("marginTop", -Math.round($("#menu").height() / 2));
        var a = $projectHolder.height();
        $projectHolder.css("height", "auto");
        var c = $projectHolder.outerHeight(),
            l = $projectHolder.height();
        $projectHolder.css("height", a);
        300 <= c && ($folioMenu.css("marginTop", c + 90), $projectHolder.css("height", l));
        $folioMenu.css("marginLeft", Math.round(($folioMenu.parent().width() - $folioMenu.outerWidth()) / 2));
        0 < b ? $("#menu ul").css({
            marginLeft: -Math.round($("#menu ul").width() / 2),
            paddingLeft: "50%"
        }) : $("#menu ul").css({
            marginLeft: "auto",
            paddingLeft: 0
        })
    }
    function t() {
        return 0 < $("html").scrollTop() ? $("html").scrollTop() : $("body").scrollTop()
    }
    function u(a) {
        g(a.find("canvas.hex")[0].getContext("2d"), a.find("img")[0], 0);
        j || g(a.find("canvas.circ")[0].getContext("2d"), a.find("img")[0], 0);
        if (!j) {
            var c = a.find("canvas.bang")[0].getContext("2d");
            a.find("img");
            c.clearRect(0, 0, 200, 195);
            c.save();
            c.beginPath();
            c.moveTo(108.5, 4);
            c.arcTo(186, 49.5, 186, 73.5, 24);
            c.arcTo(186, 144.5, 162, 168.5, 24);
            c.arcTo(99.5, 198, 89.5, 192, 24);
            c.arcTo(13, 148.5, 13, 120.5, 24);
            c.arcTo(13, 51.5, 37, 30.5, 24);
            c.arcTo(93.5, 2, 109.5, 2, 24);
            c.closePath();
            c.clip();
            c.fillStyle = "rgba(0,0,0,.85)";
            c.fill();
            c.restore()
        }
        a.find("img").css("display", "none");
        a.data({
            step: 0
        });
        j || a.hover(function () {
            var c = a.find("canvas.hex")[0].getContext("2d"),
                b = a.find("img")[0],
                d = a.data("step"),
                e = $(this);
            Jacked.special(this, {
                callback: function (a, f) {
                    d = 70 * f;
                    g(c, b, d);
                    e.data("step", d)
                }
            })
        }, function () {
            var c = a.find("canvas.hex")[0].getContext("2d"),
                b = a.find("img")[0],
                d = a.data("step"),
                e = $(this);
            Jacked.special(this, {
                callback: function (a, f) {
                    d = 70 - 70 * f;
                    g(c, b, d);
                    e.data("step", d)
                }
            })
        })
    }
    function g(a, c, b) {
        a.clearRect(0, 0, 200, 195);
        a.save();
        a.beginPath();
        a.moveTo(108.5, 4);
        a.arcTo(186, 49.5, 186, 73.5, 24);
        a.arcTo(186 - b / 2, 144.5 - b / 2, 162 - b, 168.5 - b / 2, 24);
        a.arcTo(99.5 - b, 198 - b / 2 - b / 8.75, 89.5 - b, 192 - b / 2, 24);
        a.arcTo(13, 148.5, 13, 120.5, 24);
        a.arcTo(13, 51.5, 37, 30.5, 24);
        a.arcTo(93.5, 2, 109.5, 2, 24);
        a.closePath();
        a.clip();
        a.drawImage(c, 0, 0);
        a.restore()
    }
    var j = "ontouchstart" in window;


    $container.isotope ({
      itemSelector: '.element',
      masonry: {
        columnWidth: 250
                          }
	/*					  ,
      animationEngine: 'jquery'
    
	*/
	});
	
		// filter items when filter link is clicked
$('#filters li').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});


$('#teamContainer').find('li').each(function () {
	 $(this).find("img")[0].complete ? ($(this).append('<canvas class="hex" width="200" height="195"></canvas><canvas class="circ" width="200" height="195"></canvas><canvas class="bang" width="200" height="195"></canvas><span class="icon"></span>'), u($(this))) : $(this).find("img").load(function () {
            $(this).parent().append('<canvas class="hex" width="200" height="195"></canvas><canvas class="circ" width="200" height="195"></canvas><canvas class="bang" width="200" height="195"></canvas><span class="icon"></span>');
           
		});
	});

	
});