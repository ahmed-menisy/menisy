!function(e){"use strict";jQuery(document).on("ready",function(){    function t(){e("#animated-text-service").typed({stringsElement:e("#typed-strings-service"),typeSpeed:90,startDelay:0,backSpeed:0,shuffle:!0,backDelay:500,loop:!0,loopCount:!1,showCursor:!0,attr:null,contentType:"html"})}function a(){e("#animated-text-landing").typed({stringsElement:e("#typed-strings-landing"),typeSpeed:90,startDelay:0,backSpeed:0,shuffle:!0,backDelay:500,loop:!0,loopCount:!1,showCursor:!0,attr:null,contentType:"html"})}function n(){e("#animated-text-place").typed({stringsElement:e("#typed-strings-place"),typeSpeed:90,startDelay:0,backSpeed:0,shuffle:!0,backDelay:500,loop:!0,loopCount:!1,showCursor:!0,attr:null,contentType:"html"})}function i(){e("#animated-text-soon").typed({stringsElement:e("#typed-strings-soon"),typeSpeed:90,startDelay:0,backSpeed:0,shuffle:!0,backDelay:500,loop:!0,loopCount:!1,showCursor:!0,attr:null,contentType:"html"})}function s(){e("#animated-text-team").typed({stringsElement:e("#typed-strings-team"),typeSpeed:90,startDelay:0,backSpeed:0,shuffle:!0,backDelay:500,loop:!0,loopCount:!1,showCursor:!0,attr:null,contentType:"html"})}function l(){e("#home-slider").find(".content").height(e(window)[0].innerHeight)}function o(t){e(t).hasClass("hidden")&&e(".counter-numbers").countTo("restart")}function r(t){new Audio("https://notificationsounds.com/message-tones/your-turn-491/download/mp3").play(),e('<div id="quick-notification" class="notification-wrapper animated fadeOutRight delay8s"><div class="notification animated fadeInRight"><div class="icon animated rollIn"><i class="ion-android-notifications"></i></div><div class="message animated fadeInLeft delay0-4s">+html(text)+</div></div></div>').appendTo("body").find(".message").html(t).delay(8200).fadeOut(600,function(){e("#quick-notification").remove()})}l(),e("button.full-screen").on("click",function(){var e;e=e||document.documentElement,document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)})    ;var d,c,u,p,m=new Swiper(".swiper-container-gallery",{pagination:".swiper-pagination-gallery",a11y:!0,observer:!0,speed:1e3,freeMode:!1,observeParents:!0,keyboardControl:!0,paginationClickable:!0}),$=new Swiper("#edu-slider",{pagination:".swiper-pagination-edu",a11y:!0,observer:!0,speed:1e3,observeParents:!0,keyboardControl:!0,autoHeight:!0,paginationClickable:!0});new Swiper("#exp-slider",{pagination:".swiper-pagination-exp",a11y:!0,observer:!0,speed:1e3,observeParents:!0,keyboardControl:!0,autoHeight:!0,paginationClickable:!0}),new Swiper("#clients-slider",{pagination:".swiper-pagination-clients",a11y:!0,observer:!0,speed:1e3,observeParents:!0,keyboardControl:!0,autoHeight:!0,paginationClickable:!0});var f=new Swiper("#achievement-slider",{a11y:!0,observer:!0,observeParents:!0,speed:1e3,keyboardControl:!0,autoHeight:!0,paginationClickable:!0});e("#ah-one").on("click",function(){f.slideTo(0,900)}),e("#ah-two").on("click",function(){f.slideTo(1,900)}),e("#ah-three").on("click",function(){f.slideTo(2,900)}),e("#ah-four").on("click",function(){f.slideTo(3,900)}),e("#ah-five").on("click",function(){f.slideTo(4,900)}),e("#ah-six").on("click",function(){f.slideTo(5,900)});var v="form#mc-form",h="#mc-subscribe";function g(){e(v).ajaxChimp({url:"http://trimatrixlab.us14.list-manage.com/subscribe/post?u=1534b72985e1d9ad8605bccdb&id=750451a215",callback:b}),e(v).on("submit",function(t){e(h).addClass("btn-progress"),e(h).attr("disabled","disabled")})}function b(t){var a;try{var n=t.msg.split(" - ",2);a=void 0===n[1]?t.msg:parseInt(n[0],10).toString()===n[0]?n[1]:t.msg}catch(i){a=t.msg}r(a),"success"===t.result?(e(v)[0].reset(),e(h).removeClass("btn-progress"),e(h).removeAttr("disabled","disabled")):(e(h).removeClass("btn-progress"),e(h).removeAttr("disabled","disabled"))}function C(){m.update(!0),$.update(!0)}function y(t,a){var n="#btm-tile",i="#btm-launcher",s="#tile-menu",l="#launcher-menu",o="div#intro",r="section.section",d="div.section-intro",c="#btm-launcher",u="#btm-tile",p="div.side-panel";e(n).find("button").prop("disabled",!0),e(i).find("button").prop("disabled",!0),e('[data-toggle="tooltip"]').tooltip("hide"),e(s).addClass("fadeOut"),e(l).addClass("fadeOut"),setTimeout(function(){e(s).addClass("hidden"),e(l).addClass("hidden")},900),e(t).hasClass("hidden")?(e(".loading-center button").remove(),e("#"+a).clone().insertAfter(".loader-content").delay(3e3).queue(function(){e(this).remove(),e(this).dequeue()}),e(p).addClass("fadeOutRightBig"),setTimeout(function(){e(p).addClass("hidden").removeClass("fadeOutRightBig")},400),e(o).fadeIn().removeClass("fadeOut"),setTimeout(function(){e(o).addClass("fadeOut").delay(500).fadeOut()},1800),e(d).addClass("slideOutUp"),e(c).addClass("slideOutDown"),e(u).addClass("slideOutDown"),setTimeout(function(){e(r).addClass("animated fadeOut")},700),setTimeout(function(){e(r).addClass("hidden").removeClass("animated fadeOut"),e(d).addClass("hidden").removeClass("slideOutUp"),e(c).addClass("hidden").removeClass("slideOutDown"),e(u).addClass("hidden").removeClass("slideOutDown")},1200),setTimeout(function(){var a,s;e(t).removeClass("hidden"),e(t).find(d).removeClass("hidden"),e(c).removeClass("hidden"),e(u).removeClass("hidden"),C(),e(t).find("#map").length&&(a={lat:-25.363,lng:131.044},s=new google.maps.Map(document.getElementById("map"),{zoom:4,center:a}),new google.maps.Marker({position:a,map:s,icon:"img/svg/map-marker.svg",title:"Location!"})),e(n).find("button").prop("disabled",!1),e(i).find("button").prop("disabled",!1)},1500)):(e(n).find("button").prop("disabled",!1),e(i).find("button").prop("disabled",!1))}e(window).on("resize",function(){l(),C()}),e("div#intro").hide(),e("nav.nav-launcher,nav.nav-tile,#launcher-menu,#tile-menu").addClass("hidden"),e('div[class*="-home-holder"]').addClass("hidden"),e("button#menu-tile-btn").on("click",function(){var t="#tile-menu";e(t).hasClass("hidden")?e(t).removeClass("fadeOut hidden"):(e(t).addClass("fadeOut"),setTimeout(function(){e(t).addClass("hidden")},900))}),e("#tile-menu").find(".slide-flex").css({display:"flex","justify-content":"center","align-items":"center","flex-direction":"column",height:"100%"}),e("#big-tile-slider").pogoSlider({autoplayTimeout:4e3,autoplay:!0,displayProgress:!1,preserveTargetSize:!1,targetWidth:1e3,generateNav:!1,generateButtons:!1,targetHeight:300,responsive:!1,pauseOnHover:!0}).data("plugin_pogoSlider"),e("button#menu-launcher-btn").on("click",function(){var t="#launcher-menu";e(t).hasClass("hidden")?e(t).removeClass("fadeOut hidden"):(e(t).addClass("fadeOut"),setTimeout(function(){e(t).addClass("hidden")},900)),d.update(!0)}),d=new Swiper("#launcher-slider",{speed:600,observer:!0,observeParents:!0,a11y:!0,slidesPerView:1,paginationClickable:!0,onInit:function(){e("#launcher-slider").find(".swiper-slide-next").find(".overlay-btn").fadeOut()},onSlideChangeStart:function(){e("#launcher-slider .swiper-slide-next,#launcher-slider .swiper-slide-prev").find(".overlay-btn").fadeOut()},onSlideChangeEnd:function(){e("#launcher-slider").find(".swiper-slide-active").find(".overlay-btn").fadeIn()},pagination:".swiper-pagination-launcher",keyboardControl:!0}),e('[data-toggle="tooltip"]').tooltip({trigger:"focus hover"}),e("#animated-text-me").typed({stringsElement:e("#typed-strings-me"),typeSpeed:90,startDelay:0,backSpeed:0,shuffle:!0,backDelay:500,loop:!0,loopCount:!1,showCursor:!0,attr:null,contentType:"html"}),e("#animated-text-gallery").typed({stringsElement:e("#typed-strings-gallery"),typeSpeed:90,startDelay:0,backSpeed:0,shuffle:!0,backDelay:500,loop:!0,loopCount:!1,showCursor:!0,attr:null,contentType:"html"}),e("button#side-tile,button.social-centre-launcher").on("click",function(){var t=".side-panel";e(t).hasClass("hidden")?e(t).removeClass("fadeOutRightBig hidden"):(e(t).addClass("fadeOutRightBig"),setTimeout(function(){e(t).addClass("hidden")},400))}),e("body,.timeline-image,.interest-image,.project-preview,.gear-preview,.whats-hot-preview,.screenshot-preview,.product-preview,.services-image,.details-image,.desktop,.swiper-slide,.about-image,.feature-image,.place-preview-image,.coming-preview,.error-preview,.clients-block,.gallery-preview,.bg-data-call").each(function(){e(this).attr("data-image-bg")&&e(this).attr("data-image-overlay")&&e(this).css({background:"linear-gradient("+e(this).data("image-overlay")+","+e(this).data("image-overlay")+"), url("+e(this).data("image-bg")+") center center / cover no-repeat"}),e(this).attr("data-solid-bg")&&e(this).css({background:e(this).data("solid-bg")}),e(this).attr("data-gradient-color-one")&&e(this).attr("data-gradient-color-two")&&e(this).attr("data-gradient-color-three")&&e(this).css({background:"linear-gradient(220deg,"+e(this).data("gradient-color-one")+","+e(this).data("gradient-color-two")+","+e(this).data("gradient-color-three")+")","background-size":"600% 600%","-webkit-animation":"gradientWave 38s ease infinite",animation:"gradientWave 38s ease infinite"})}),c=!0,setInterval(function t(){if(!1!==c){var a=e(".clients-logos").find("img:first-child");a.animate({"margin-left":"-150px"},2e3,function(){a.remove().css({"margin-left":"0px"}),e(".clients-logos").find("img:last").after(a)})}},1800),e(document).on({mouseenter:function(){c=!1},mouseleave:function(){c=!0}},".clients-logos"),e(".popup-image").magnificPopup({type:"image",tLoading:"",image:{titleSrc:function(e){return e.el.attr("title")+"<small>"+e.el.attr("data-subtitle")+"</small>"}},removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")},open:function(){e(".mfp-title").addClass("animated fadeInLeft delay0-5s")}},closeOnContentClick:!0,midClick:!0}),e(".popup-modal").magnificPopup({type:"inline",preloader:!1,removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}},midClick:!0}),e("a.gallery-link").on("click",function(){e(this).next().magnificPopup("open")}),e(".gallery").each(function(){e(this).magnificPopup({delegate:"a",type:"image",tLoading:"",gallery:{enabled:!0,navigateByImgClick:!0},image:{titleSrc:function(e){return e.el.attr("title")+"<small>"+e.el.attr("data-subtitle")+"</small>"}},fixedContentPos:!1,mainClass:"mfp-zoom-in",removalDelay:160,callbacks:{open:function(){e(".mfp-title").addClass("animated fadeInLeft delay0-5s"),e.magnificPopup.instance.next=function(){var t=this;t.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){e.magnificPopup.proto.next.call(t)},120)},e.magnificPopup.instance.prev=function(){var t=this;t.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){e.magnificPopup.proto.prev.call(t)},120)}},imageLoadComplete:function(){var e=this;setTimeout(function(){e.wrap.addClass("mfp-image-loaded")},16)}},closeOnContentClick:!0,midClick:!0})}),e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-zoom-in",removalDelay:160,preloader:!1,fixedContentPos:!1}),p="#send-button",e(u="form#mail-form").on("submit",function(t){t.preventDefault();var a=e(this);e(p).addClass("btn-progress"),e(p).attr("disabled","disabled");var n=a.serialize();""===e("#g-recaptcha-response").val()?(event.preventDefault(),r("Please Submit Re-captcha"),e(p).removeClass("btn-progress"),e(p).removeAttr("disabled","disabled")):e.ajax({type:"POST",url:"php/mail_handler.php",data:n}).done(function(){e(p).removeClass("btn-progress"),r("Message Sent. Thanks for your Message, I will contact you soon."),e(u)[0].reset(),grecaptcha.reset(),e(p).removeAttr("disabled","disabled")}).fail(function(){e(p).removeClass("btn-progress").fadeIn(500),r("Sending Failed. Please Try Again"),e(p).removeAttr("disabled","disabled")})}),e("body").on("click","button",function(){var t=this.id;if("tile-cv-home"==t||"launcher-cv-home"==t||"cv-btm-nav-home"==t||e(this).hasClass("cv-close")||"cv-btm-tile-home"==t)y("#cv-home",t);else if("tile-cv-about"==t||"launcher-cv-about"==t||"cv-btm-nav-me"==t)y("#cv-about",t);else if("tile-cv-skills"==t||"launcher-cv-skills"==t||"cv-btm-nav-skills"==t){var a,n="#cv-skills";y(n,t),o(n),e(a=n).hasClass("hidden")&&(e(a).find(".skills-bar").css({width:0}),e(a).find(".skills-bar").each(function(){e(this).animate({width:e(this).attr("data-percent")},5e3,"swing")}))}else if("tile-cv-education"==t||"launcher-cv-education"==t||"cv-btm-nav-edu"==t||"cv-btm-tile-edu"==t)y("#cv-education",t);else if("tile-cv-experience"==t||"launcher-cv-experience"==t||"cv-btm-nav-exp"==t)y("#cv-experience",t);else if("tile-cv-portfolios"==t||"launcher-cv-portfolios"==t||"cv-btm-nav-port"==t||"cv-btm-tile-port"==t)y("#cv-portfolios",t);else if("tile-cv-testimonials"==t||"launcher-cv-testimonials"==t||"cv-btm-tile-testi"==t){var i="#cv-testimonials";y(i,t),o(i)}else"tile-cv-interest"==t||"launcher-cv-interest"==t?y("#cv-interest",t):"tile-cv-achievements"==t||"launcher-cv-achievements"==t?y("#cv-achievements",t):"tile-cv-extra"==t||"launcher-cv-extra"==t?y("#cv-extra",t):"tile-cv-blog"==t||"launcher-cv-blog"==t||"cv-btm-nav-blog"==t?y("#cv-blog",t):"tile-cv-map"==t||"launcher-cv-map"==t?y("#cv-map",t):("tile-cv-contact"==t||"launcher-cv-contact"==t||"cv-btm-nav-cont"==t||"cv-btm-tile-contact"==t)&&y("#cv-contact",t)}),jQuery(window).on("load",function(){e("section.section").addClass("hidden"),e("div#pre-loader").addClass("animated fadeOut").delay(200).fadeOut(),e('section[id$="-home"],nav[class*="nav-"]').removeClass("hidden"),e('div[class*="-home-holder"]').removeClass("hidden"),setTimeout(function(){},6e3)}),  let audio = new Audio("../../alsna.mp3"), $("body , html").one("click", () => { audio.volume = 0.5; audio.autoplay = true; audio.play(); $(this).off("click"); })     })}(jQuery),localStorage.setItem("darkmode",!0);const options={bottom:"64px",right:"32px",left:"unset",time:"0.5s",mixColor:"#fff",backgroundColor:"#fff",buttonColorDark:"#200f2c",buttonColorLight:"#fff",saveInCookies:!0,label:"\uD83C\uDF13",autoMatchOsTheme:!0},darkmode=new Darkmode(options);darkmode.showWidget();
