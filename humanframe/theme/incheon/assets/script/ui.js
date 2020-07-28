$(document).ready(function() {
    // �앹뾽    
    /*
    if(wdMobile2()) {
        $('.wrapper').before( $('.mainPopupWrap'));
        console.log("test");
        if( $('.mainPopupWrap').is(":visible")){
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    }
    $('.mainPopup .btnClosePopup').click(function(){
        $('.mainPopupWrap').hide();
        $('body').removeClass('fixed');
		 return false;
    });
   
   $(".main-gnb-wrap .btn-view-other-field").on('click',function(){
        if( $(this).hasClass("on") ){
            $(this).removeClass('on');
            $(".type-quick-link-wrap").removeClass('on');
            return false;
        } else {
            $(this).addClass('on');
            $(".type-quick-link-wrap").addClass('on');
            return false;
        }
    });
    */
    $(".main-gnb-wrap .gnb-field > a").on('click',function(){
        if( $(".main-gnb-wrap .gnb-field").hasClass("on") ){
            $(".main-gnb-wrap .gnb-field").removeClass("on")
            $(".type-quick-link-wrap").removeClass('on');
            $(".main-gnb-wrap .btn-view-other-field").removeClass('on');
            $(".main-gnb-wrap .btn-view-other-field").find("span").text("�ㅻⅨ遺꾩빞 蹂닿린");
            return false;
        } else {
            $(".main-gnb-wrap .gnb-field").addClass("on")
            $(".type-quick-link-wrap").addClass('on');
            $(".main-gnb-wrap .btn-view-other-field").addClass('on');
            $(".main-gnb-wrap .btn-view-other-field").find("span").text("�ㅻⅨ遺꾩빞 �リ린");
            return false;
        }
        return false;
    });

    $(".main-news-tab > li:nth-child(1)").addClass('on');
    $(".main-news-tab > li .tab a").click(function(){
        $(".main-news-tab > li").removeClass('on');
        $(this).parent().parent('li').toggleClass('on');
        var linkUrl = $(this).attr('href');
		var findString = "#";

		if(linkUrl.indexOf(findString) == 0) {
			return false;
		}
		else {
			return true;
		}
    });    

    //�쒖옣��     
    /*
    $(".main-mayor-wrap").click(function(){
        var linkMayor = $('.btn-link-mayor').attr('href');
        //location.href = linkMayor;
        window.open(linkMayor);
    });   */ 


    // �댁뒪 �щ씪�대뱶
    function newsSlideCount(event){
        var item = event.item.index-1;
        if(item == -1){
            $('.main-event-slide-wrap .count-wrap .current').text(1);
        } else{
            if(item == 0){
                $('.main-event-slide-wrap .count-wrap .current').text(event.item.count);
            }else{
                $('.main-event-slide-wrap .count-wrap .current').text(item);
            }
        }
    }
    if( $('.main-event-slide-wrap .main-event-slide.owl-carousel .item').length > 0){
       var slideTotal = $('.main-event-slide-wrap .main-event-slide.owl-carousel .item').size();
        //console.log(slideTotal);
        $('.main-event-slide-wrap .count-wrap .total').text(slideTotal);
        var mainEventSlide = $('.main-event-slide.owl-carousel');
        mainEventSlide.owlCarousel({
            items:1,
            nav:false,
            dots:false,
            loop:true,
            rewind: true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            onChanged:newsSlideCount
        });

        $(".main-event-slide-wrap .main-event-slide.owl-carousel .owl-item").each(function(){
    		if( $(this).hasClass("active") ){
    			//$(this).attr("tabIndex","0");
    			$(this).find("a").attr("tabIndex","0");
    		}else{
    			//$(this).attr("tabIndex","-1");
    			$(this).find("a").attr("tabIndex","-1");
    		}
    	});
        mainEventSlide.on('changed.owl.carousel',function(property){
    		var current = property.item.index;
            $(property.target).find(".owl-item").find("a").attr("tabIndex","-1");
            $(property.target).find(".owl-item").attr("aria-hidden","true");
    		$(property.target).find(".owl-item").eq(current).find("a").attr("tabIndex","0");
    		$(property.target).find(".owl-item").eq(current).attr("aria-hidden","false");
    		//var src = $(property.target).find(".owl-item").eq(current).find("img").attr('src');
    		//console.log('Image current is ' + src);
    	});

        $('.main-event-slide-button > .play').hide();
        $('.main-event-slide-button > .play').on('click',function(){
            $(this).hide();
            $('.main-event-slide-button >.stop').show().focus();
            mainEventSlide.trigger('play.owl.autoplay',[1000]);
            return false;
        })
        $('.main-event-slide-button > .stop').on('click',function(){
            $(this).hide();
            $('.main-event-slide-button >.play').show().focus();
            mainEventSlide.trigger('stop.owl.autoplay');
            return false;
        })
        $('.main-event-slide-wrap .slide-nav-wrap > .owl-prev').on('click',function(){
            mainEventSlide.trigger('prev.owl.carousel');
            return false;
        })
        $('.main-event-slide-wrap .slide-nav-next > .owl-next').on('click',function(){
            mainEventSlide.trigger('next.owl.carousel');
            return false;
        })
    }   


    // �듦퀎濡� 蹂대뒗 �몄쿇 �щ씪�대뱶
    if( $('.stats-slide.owl-carousel .item').length > 0 ){
        var mainStatsSlide = $('.stats-slide.owl-carousel');
            mainStatsSlide.owlCarousel({
                items:1,
                nav:false,
                dots:false,
                loop:true,
                rewind: true,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true
            });

            $(".stats-slide.owl-carousel .owl-item").each(function(){
            	if( $(this).hasClass("active") ){
        			$(this).attr("tabindex","0");
        			//$(this).find("a").attr("tabindex","0");
        		}else if( $(this).hasClass("cloned") ){
        			$(this).attr("tabindex","-1");
        			//$(this).find("a").attr("tabindex","-1");
        		}else {
        			$(this).attr("tabindex","-1");
        			//$(this).find("a").attr("tabindex","-1");
        		}
        	});
            mainStatsSlide.on('changed.owl.carousel',function(property){
        		var current = property.item.index;
        		$(property.target).find(".owl-item").attr("tabindex","-1");
        		$(property.target).find(".owl-item").eq(current).attr("tabindex","0");
        		$(property.target).find(".owl-item").eq(current).attr("aria-hidden","false");
        	});

            $('.stats-slide-button > .play').hide();
            $('.stats-slide-button > .play').on('click',function(){
                $(this).hide();
                $('.stats-slide-button > .stop').show().focus();
                mainStatsSlide.trigger('play.owl.autoplay',[1000]);
                return false;
            })
            $('.stats-slide-button > .stop').on('click',function(){
                $(this).hide();
                $('.stats-slide-button > .play').show().focus();
                mainStatsSlide.trigger('stop.owl.autoplay');
                return false;
            })
            $('.st-slide-wrap .slide-nav-wrap > .owl-prev').on('click',function(){
            	mainStatsSlide.trigger('prev.owl.carousel');
	            return false;
	        })
	        $('.st-slide-wrap .slide-nav-wrap > .owl-next').on('click',function(){
	        	mainStatsSlide.trigger('next.owl.carousel');
	            return false;
	        })
    }

    //留덉씠�섏씠吏� �� 200109
    /*
    $('.mypage-depth button').on('click', function() {
        var attr = ($(this).attr('aria-expanded') === 'true') ? 'false' : 'true';
        $(this).attr('aria-expanded', attr).closest('.mypage-depth').toggleClass('active');
    });*/

    //mainSectionH();
    emjoSlide();


    /*메인SNS */
    $('.sns-tab').click(function(){
        $('.sns-tab').removeClass('on');
        $(this).addClass('on');
        $('.sns-list > ul > li > ul').removeClass('on');
        $(this).siblings('ul').addClass('on');
    });


});
$(window).resize(function() {
    //mainSectionH();
    emjoSlide();
});
/*
function fn_search(kwd){
	event.stopPropagation();
	var kwd = $(".search > #search").val();
	if(kwd == ""){
		alert("寃��됱뼱瑜� �낅젰�댁＜�몄슂.");
		return false;
	}else{
		$("#search-label-main").hide();
		$("form[name='searchFrm']").submit();
	}
}*/

function fn_siteMap(){

	$.ajax({
		type : "post"
		,url: "/mf/SiteMap/getSiteMap"
		,data: {
			"siteNo" : 14
			,"menuNo" : 80
			,"ignoreType" : "MF"
		}
		,dataType: 'json'
		, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
		, async : false
		, success: function(data) {
			$(".sitemap-wrap").empty();
			for(var idx=0; idx<data.siteMap.length; idx++){
				var item = data.siteMap[idx];

				if(item.menuNo == '1265') {
					// �댁슜�덈궡 �댄썑 硫붾돱 �꾩떆泥섎━
					break;
				}

				var html2 = "";
				var html3 = "";
				var html4 = "";

				if(item.levelNo == "2"){
					html2 += "<dl><dt>" + item.menuNm + "</dt>";
					html2 += "<dd id = 'menu"+item.menuNo+"'>";
					html2 += "</dd></dl>";
					$(".sitemap-wrap").append(html2);
				}

				if(item.levelNo == "3"){
					html3 += "<div class='link-wrap' id='"+item.menuNo+"'>";
					if (item.linkUrl != "") {
						html3 += "<p class ='title'><a href='"+item.linkUrl+"' target='_blank'>"+item.menuNm+"</a></p>";
					} else {
					html3 += "<p class ='title'><a href='"+item.menuUri+"'>"+item.menuNm+"</a></p>";
					}
					html3 += "</div>";
					$("#menu"+item.upperMenuNo).append(html3);
				}

				if(item.levelNo == "4"){
					if (item.linkUrl != "") {
						html4 += "<p class ='sub-menu'><a href='"+item.linkUrl+"' target='_blank'>"+item.menuNm+"</a></p>";
					} else {
					html4 += "<p class ='sub-menu'><a href='"+item.menuUri+"'>"+item.menuNm+"</a></p>";
					}
					$("#"+item.upperMenuNo).append(html4);
				}

			}
			ui.popup.open('popupContent', this );
			$('.main .all-menu').attr('data-popup','popupContent');         //�묎렐��: �꾩껜硫붾돱�덉씠�� �リ린�� �ъ빱�� 吏��뺤쐞�� attr 異붽�
			//$('#wrapper').attr('tabindex','-1');
		},
		error: function(data, status, err) {
			console.log('error forward : ' + data);
		}
	});

}

/*
function mainSectionH(){
    //main section height
    if( $('html').hasClass('pc-view') & (window.innerHeight < 1400 ) & (window.innerHeight > 780 )){
        //console.log("1024*1280");
        var mainWindowH = window.innerHeight;
        var footerH =  $('.footer').outerHeight();
        $('.main .main-visual-section').each(function(){
            var mainSection01H = $('.main-section01').outerHeight();
            var mainBandPopupH = $('.popup-band-top').outerHeight();
            if( $('html').hasClass('pc-view') ){
            	if( window.innerHeight > 900 ){
            		mainVisualH = mainWindowH - mainSection01H - 50 - mainBandPopupH;
            		//console.log("920�댁긽:"+ mainWindowH);
            	} else {
            		mainVisualH = mainWindowH - mainSection01H - 50;
            		//console.log("920誘몃쭔:"+ mainWindowH);
            	}
            } else if( $('html').hasClass('mobile-view') ){
                mainVisualH = mainWindowH - mainSection01H - 110;
            }
            if( $(this).outerHeight() < mainVisualH ){
                //$(this).height(mainVisualH);
                $(this).find('.main-content-wrap').height(mainVisualH);
            } else {
                $(this).find('.main-content-wrap').height(mainVisualH);
            }
        });

        $('.incheon.main .main-section02').each(function(){
            if( $(this).outerHeight() < mainWindowH ){
                var mainSection02Pd = mainWindowH/2 - $(this).outerHeight()/2;
                $(this).css("height", mainWindowH);
                $(this).css("padding-top", mainSection02Pd);
                $(this).css("padding-bottom", mainSection02Pd);
            } else{

            }
        });
        $('.incheon.main .main-section03').each(function(){
            var mainSection03H = mainWindowH - footerH;
            if( $(this).outerHeight() < mainSection03H ){
                var mainSection03Pd = mainSection03H/2 - $(this).outerHeight()/2;
                $(this).css("height", mainSection03H);
                $(this).css("padding-top", mainSection03Pd);
                $(this).css("padding-bottom", mainSection03Pd);
            }
        });
    //} else if( $('html').hasClass('dv-mobile') ){
    } else {
        //console.log("1280�댁긽orpc�꾨떂");
        $('.main .main-content-section').each(function(){
            $(this).css("height", "");
            $(this).css("padding-top", "0");
            $(this).css("padding-bottom", "0");
        });
    }
}
*/
function emjoSlide(){
    var ww = $(window).width();
    var mobileSlide = $('.mobile-slide');
    if(ww > 820){
        if (typeof mobileSlide.data('owl.carousel') != 'undefined') {
            mobileSlide.data('owl.carousel').destroy();
        }
        mobileSlide.removeClass('owl-carousel');
    } else{
        mobileSlide.addClass('owl-carousel');
        if($('.mobile-slide.owl-carousel .item').length > 0){
                mobileSlide.owlCarousel({
                    items:1,
                    nav:false,
                    loop:true,
                    rewind: true,
                    autoplay:true,
                    autoplayTimeout:3000,
                    autoplayHoverPause:true
                });
                $('.mobile-slide-button > .owl-prev').on('click',function(){
                    mobileSlide.trigger('prev.owl.carousel');
                    return false;
                })
                $('.mobile-slide-button > .owl-next').on('click',function(){
                    mobileSlide.trigger('next.owl.carousel');
                    return false;
            })
        }
    }
}