(window.webpackJsonpfbapp=window.webpackJsonpfbapp||[]).push([[0],[,,,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){var n;n=function(e){e.easing.jswing=e.easing.swing;var a=Math.pow,t=Math.sqrt,n=Math.sin,l=Math.cos,s=Math.PI,c=1.70158,r=1.525*c,i=2*s/3,m=2*s/4.5;function o(e){var a=7.5625,t=2.75;return e<1/t?a*e*e:e<2/t?a*(e-=1.5/t)*e+.75:e<2.5/t?a*(e-=2.25/t)*e+.9375:a*(e-=2.625/t)*e+.984375}e.extend(e.easing,{def:"easeOutQuad",swing:function(a){return e.easing[e.easing.def](a)},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return 1-(1-e)*(1-e)},easeInOutQuad:function(e){return e<.5?2*e*e:1-a(-2*e+2,2)/2},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1-a(1-e,3)},easeInOutCubic:function(e){return e<.5?4*e*e*e:1-a(-2*e+2,3)/2},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1-a(1-e,4)},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-a(-2*e+2,4)/2},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1-a(1-e,5)},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1-a(-2*e+2,5)/2},easeInSine:function(e){return 1-l(e*s/2)},easeOutSine:function(e){return n(e*s/2)},easeInOutSine:function(e){return-(l(s*e)-1)/2},easeInExpo:function(e){return 0===e?0:a(2,10*e-10)},easeOutExpo:function(e){return 1===e?1:1-a(2,-10*e)},easeInOutExpo:function(e){return 0===e?0:1===e?1:e<.5?a(2,20*e-10)/2:(2-a(2,-20*e+10))/2},easeInCirc:function(e){return 1-t(1-a(e,2))},easeOutCirc:function(e){return t(1-a(e-1,2))},easeInOutCirc:function(e){return e<.5?(1-t(1-a(2*e,2)))/2:(t(1-a(-2*e+2,2))+1)/2},easeInElastic:function(e){return 0===e?0:1===e?1:-a(2,10*e-10)*n((10*e-10.75)*i)},easeOutElastic:function(e){return 0===e?0:1===e?1:a(2,-10*e)*n((10*e-.75)*i)+1},easeInOutElastic:function(e){return 0===e?0:1===e?1:e<.5?-a(2,20*e-10)*n((20*e-11.125)*m)/2:a(2,-20*e+10)*n((20*e-11.125)*m)/2+1},easeInBack:function(e){return 2.70158*e*e*e-c*e*e},easeOutBack:function(e){return 1+2.70158*a(e-1,3)+c*a(e-1,2)},easeInOutBack:function(e){return e<.5?a(2*e,2)*(7.189819*e-r)/2:(a(2*e-2,2)*((r+1)*(2*e-2)+r)+2)/2},easeInBounce:function(e){return 1-o(1-e)},easeOutBounce:o,easeInOutBounce:function(e){return e<.5?(1-o(1-2*e))/2:(1+o(2*e-1))/2}})},"object"===typeof e.exports?n(t(1)):n(window.jQuery)},function(e,a){var t;(t=window.jQuery).extend(t.easing,{easeIn:function(e,a,n,l,s){return t.easing.easeInQuad(e,a,n,l,s)},easeOut:function(e,a,n,l,s){return t.easing.easeOutQuad(e,a,n,l,s)},easeInOut:function(e,a,n,l,s){return t.easing.easeInOutQuad(e,a,n,l,s)},expoin:function(e,a,n,l,s){return t.easing.easeInExpo(e,a,n,l,s)},expoout:function(e,a,n,l,s){return t.easing.easeOutExpo(e,a,n,l,s)},expoinout:function(e,a,n,l,s){return t.easing.easeInOutExpo(e,a,n,l,s)},bouncein:function(e,a,n,l,s){return t.easing.easeInBounce(e,a,n,l,s)},bounceout:function(e,a,n,l,s){return t.easing.easeOutBounce(e,a,n,l,s)},bounceinout:function(e,a,n,l,s){return t.easing.easeInOutBounce(e,a,n,l,s)},elasin:function(e,a,n,l,s){return t.easing.easeInElastic(e,a,n,l,s)},elasout:function(e,a,n,l,s){return t.easing.easeOutElastic(e,a,n,l,s)},elasinout:function(e,a,n,l,s){return t.easing.easeInOutElastic(e,a,n,l,s)},backin:function(e,a,n,l,s){return t.easing.easeInBack(e,a,n,l,s)},backout:function(e,a,n,l,s){return t.easing.easeOutBack(e,a,n,l,s)},backinout:function(e,a,n,l,s){return t.easing.easeInOutBack(e,a,n,l,s)}})},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(9),c=t.n(s),r=(t(16),t(10)),i=t(2),m=t(3),o=t(5),u=t(4),d=t(6),E=(t(17),t(8),t(18),t(19),function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},"\u672a\u6765\u4e4b\u5730"),l.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"\u83dc\u5355",l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav text-uppercase ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#services"},"\u6289\u62e9")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"\u5173\u4e8e\u6211\u4eec")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#contact"},"\u8054\u7cfb\u6211\u4eec"))))))}),g=function(){return l.a.createElement("header",{className:"masthead"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"intro-text",style:{background:"#00000066"}},l.a.createElement("div",{className:"intro-lead-in",style:{textShadow:"4px 4px 2px black"}},"\u76f8\u4fe1\u60a8\u5185\u5fc3\u7684\u6289\u62e9"),l.a.createElement("div",{className:"intro-heading text-uppercase",style:{textShadow:"4px 4px 2px black"}},"Future Borderland"),l.a.createElement("a",{className:"btn btn-primary btn-lg text-uppercase js-scroll-trigger",href:"#services"},"\u8d70\u8fdb\u6559\u4f1a"))))},f=function(){return l.a.createElement("section",{className:"page-section",id:"services"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},"\u6289\u62e9"),l.a.createElement("h3",{className:"section-subheading text-muted"},"\u5f53\u60a8\u8def\u8fc7\u6b64\u798f\u5730\uff0c\u60a8\u5c31\u662f\u6211\u4eec\u6700\u5f3a\u6709\u529b\u7684\u540e\u63f4"))),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("a",{className:"portfolio-link","data-toggle":"modal",href:"#portfolioModal1"},l.a.createElement("span",{className:"fa-stack fa-4x"},l.a.createElement("i",{className:"fas fa-circle fa-stack-2x text-primary"}),l.a.createElement("i",{className:"fas fa-american-sign-language-interpreting fa-stack-1x fa-inverse"}))),l.a.createElement("h4",{className:"service-heading"},"\u5165\u4f1a\u6d4b\u8bd5\uff08WIP\uff09"),l.a.createElement("p",{className:"text-muted"},"\u6d4b\u8bd5\u9898\u4e2d\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u8bfb\u53d6\u60a8\u9690\u79c1\u7684\u63d0\u95ee\uff0c\u5982\u679c\u4e0d\u60f3\u56de\u7b54\u53ef\u4ee5\u9009\u62e9\u8df3\u8fc7\u3002\u4e00\u517110\u9053\u9898\uff0c\u7ed3\u679c\u4f1a\u7531\u5c0f\u7ec4\u4eba\u4e8b\u7ec4\u7edf\u4e00\u8fdb\u884c\u56de\u590d\u3002")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("span",{className:"fa-stack fa-4x"},l.a.createElement("i",{className:"fas fa-circle fa-stack-2x text-primary"}),l.a.createElement("i",{className:"fas fa-bible fa-stack-1x fa-inverse"})),l.a.createElement("h4",{className:"service-heading"},"\u9605\u8bfb\u8bba\u6587\uff08TBD\uff09"),l.a.createElement("p",{className:"text-muted"},'\u5728\u6b64\u5904\u60a8\u5c06\u4f1a\u5f97\u77e5"\u672a\u6765\u4e4b\u5730"\u662f\u5728\u5177\u4f53\u7814\u7a76\u7684\u4e8b\u7269\u548c\u65b9\u5411')),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("span",{className:"fa-stack fa-4x"},l.a.createElement("i",{className:"fas fa-circle fa-stack-2x text-primary"}),l.a.createElement("i",{className:"fas fa-award fa-stack-1x fa-inverse"})),l.a.createElement("h4",{className:"service-heading"},"\u56e2\u961f\u6210\u5c31\uff08TBD\uff09"),l.a.createElement("p",{className:"text-muted"},'\u6b64\u5904\u60a8\u5c06\u4e86\u89e3\u5230"\u672a\u6765\u4e4b\u5730"\u56e2\u961f\u81f3\u4eca\u4e3a\u6b62\u6240\u83b7\u5f97\u7684\u6240\u6709\u6b8a\u8363')))))},N=function(){return l.a.createElement("section",{className:"page-section",id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},"\u5173\u4e8e"),l.a.createElement("h3",{className:"section-subheading text-muted"},"\u7ec4\u7ec7\u7684\u5efa\u7acb\u548c\u4e3b\u8981\u7814\u7a76\u53d1\u5c55\u65b9\u5411\u548c\u5bf9\u672a\u6765\u7684\u5c55\u671b"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("ul",{className:"timeline"},l.a.createElement("li",null,l.a.createElement("div",{className:"timeline-image"},l.a.createElement("img",{className:"rounded-circle img-fluid",src:"../img/about/1.jpg",alt:""})),l.a.createElement("div",{className:"timeline-panel"},l.a.createElement("div",{className:"timeline-heading"},l.a.createElement("h4",null,"2019\u5e747\u67081\u65e5"),l.a.createElement("h4",{className:"subheading"},"\u7ec4\u7ec7\u6b63\u5f0f\u6210\u7acb")),l.a.createElement("div",{className:"timeline-body"},l.a.createElement("p",{className:"text-muted"},"\uff08TBD\uff09")))),l.a.createElement("li",{className:"timeline-inverted"},l.a.createElement("div",{className:"timeline-image"},l.a.createElement("img",{className:"rounded-circle img-fluid",src:"img/about/2.jpg",alt:""})),l.a.createElement("div",{className:"timeline-panel"},l.a.createElement("div",{className:"timeline-heading"},l.a.createElement("h4",null,"2019\u5e749\u6708"),l.a.createElement("h4",{className:"subheading"},"\u91cd\u8981\u51b3\u5b9a")),l.a.createElement("div",{className:"timeline-body"},l.a.createElement("p",{className:"text-muted"},'\u7ec4\u7ec7\u51b3\u5b9a\u5f00\u59cb\u4e3b\u8981\u63a2\u8ba8\u548c\u7814\u7a76 "\u8d85\u4eba\u5de5\u667a\u80fd" + "\u751f\u547d\u57fa\u56e0\u5de5\u7a0b" + "\u5b87\u5b99\u822a\u5929" \u4e09\u5927\u677f\u5757\u65b9\u5411\u6280\u672f')))),l.a.createElement("li",null,l.a.createElement("div",{className:"timeline-image"},l.a.createElement("img",{className:"rounded-circle img-fluid",src:"img/about/3.jpg",alt:""})),l.a.createElement("div",{className:"timeline-panel"},l.a.createElement("div",{className:"timeline-heading"},l.a.createElement("h4",null,"2020\u5e749\u6708"),l.a.createElement("h4",{className:"subheading"},'\u51c6\u5907\u5411\u793e\u4f1a\u63a8\u5e7f"\u672a\u6765\u4e4b\u5730"\u7ec4\u7ec7\uff0c\u5e7f\u7eb3\u8d24\u624d\u4e49\u58eb')),l.a.createElement("div",{className:"timeline-body"},l.a.createElement("p",{className:"text-muted"},"\u5728\u4e00\u5e74\u4e4b\u5185\u53d6\u5f97\u4e00\u5b9a\u6210\u5c31\u4e4b\u540e\uff0c\u7ec4\u7ec7\u5c06\u4f1a\u5f00\u59cb\u5bf9\u5916\u63a8\u5e7f\u5e76\u4e14\u8fdb\u884c\u7b2c\u4e00\u6b21\u5bf9\u5916\u6f14\u8bb2")))),l.a.createElement("li",{className:"timeline-inverted"},l.a.createElement("div",{className:"timeline-image"},l.a.createElement("img",{className:"rounded-circle img-fluid",src:"img/about/4.jpg",alt:""})),l.a.createElement("div",{className:"timeline-panel"},l.a.createElement("div",{className:"timeline-heading"},l.a.createElement("h4",null,"2022\u5e74\u4e0a\u534a\u5e74"),l.a.createElement("h4",{className:"subheading"},"\u6210\u7acb\u7279\u5b9a\u6280\u672f\u6388\u6743\u7ec4\u7ec7")),l.a.createElement("div",{className:"timeline-body"},l.a.createElement("p",{className:"text-muted"},"\u7ec4\u7ec7\u5185\u6280\u672f\u5f00\u59cb\u7d2f\u79ef\u5e76\u4e14\u6709\u4e00\u5b9a\u89c4\u6a21\uff0c\u7ec4\u7ec7\u9700\u8981\u4e00\u4e2a\u826f\u597d\u7684\u56e2\u961f\u53bb\u7ef4\u62a4\u5185\u90e8\u6280\u672f\u4eba\u5458\u7684\u77e5\u8bc6\u4ea7\u6743\u548c\u5bf9\u5c06\u6765\u7684\u89c4\u5212\u3002\u4ece\u6b64\u7ec4\u7ec7\u8f6c\u5411\u4e00\u4e2a\u4ee5\u6280\u672f\u6838\u5fc3\u4e3a\u7ade\u4e89\u529b\u7684\u77e5\u8bc6\u4ea7\u6743\u7ef4\u7cfb\u5355\u4f4d")))),l.a.createElement("li",null,l.a.createElement("div",{className:"timeline-image"},l.a.createElement("img",{className:"rounded-circle img-fluid",src:"img/about/4.jpg",alt:""})),l.a.createElement("div",{className:"timeline-panel"},l.a.createElement("div",{className:"timeline-heading"},l.a.createElement("h4",null,"2022\u5e74\u4e0b\u534a\u5e74"),l.a.createElement("h4",{className:"subheading"},"\u7ec4\u7ec7\u5f00\u59cb\u5bf9\u751f\u547d\u79d1\u5b66\u548c\u5b87\u5b99\u822a\u5929\u9886\u57df\u8fdb\u884c\u62db\u63fd\u4eba\u624d")),l.a.createElement("div",{className:"timeline-body"},l.a.createElement("p",{className:"text-muted"},"\uff08TBD\uff09")))),l.a.createElement("li",{className:"timeline-inverted"},l.a.createElement("div",{className:"timeline-image"},l.a.createElement("img",{className:"rounded-circle img-fluid",src:"img/about/4.jpg",alt:""})),l.a.createElement("div",{className:"timeline-panel"},l.a.createElement("div",{className:"timeline-heading"},l.a.createElement("h4",null,"2119\u5e74\u4e0b\u534a\u5e74"),l.a.createElement("h4",{className:"subheading"},"Project Relic\u5f00\u59cb\u5b9e\u8df5")),l.a.createElement("div",{className:"timeline-body"},l.a.createElement("p",{className:"text-muted"},"\uff08TBD\uff09")))),l.a.createElement("li",null,l.a.createElement("div",{className:"timeline-image"},l.a.createElement("img",{className:"rounded-circle img-fluid",src:"img/about/4.jpg",alt:""})),l.a.createElement("div",{className:"timeline-panel"},l.a.createElement("div",{className:"timeline-heading"},l.a.createElement("h4",null,"\u4e0d\u8bba\u4f55\u65f6\u4f55\u5730"),l.a.createElement("h4",{className:"subheading"},"\u6211\u4eec\u671f\u5f85\u4f60\u4eec\u7684\u52a0\u5165")))))))))},p=function(){return l.a.createElement("div",{className:"portfolio-modal modal fade",id:"portfolioModal1",tabIndex:"-1",role:"dialog","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"close-modal","data-dismiss":"modal"},l.a.createElement("div",{className:"lr"},l.a.createElement("div",{className:"rl"}))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8 mx-auto"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("h2",{className:"text-uppercase"},"\u672a\u6765\u4e4b\u5730\u5165\u4f1a\u6d4b\u8bd5"),l.a.createElement("p",{className:"item-intro text-muted"},"\u6211\u4eec\u9700\u8981\u5fe0\u8bda\u7684\u3001\u6709\u4fe1\u4ef0\u7684\uff0c\u4f1f\u5927\u7684\u60a8\uff01"),l.a.createElement("p",null,"1. \u5982\u679c\u4f60\u660e\u5929\u5c06\u8981\u56de\u5230\u8fc7\u53bb\uff0c\u4f60\u6700\u60f3\u4f1a\u89c1\u7684\u4eba\u662f\u8c01\uff1f"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"list-group list-group-horizontal-xl",id:"list-tab",role:"tablist"},l.a.createElement("a",{className:"list-group-item list-group-item-action active",id:"list-home-list","data-toggle":"list",href:"#list-home",role:"tab","aria-controls":"home"},"\u8fc7\u53bb\u7684\u4f60"),l.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-profile-list","data-toggle":"list",href:"#list-profile",role:"tab","aria-controls":"profile"},"\u524d\u5973\u53cb"),l.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-messages-list","data-toggle":"list",href:"#list-messages",role:"tab","aria-controls":"messages"},"\u81ea\u5df1\u7684\u7236\u4eb2"),l.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-settings-list","data-toggle":"list",href:"#list-settings",role:"tab","aria-controls":"settings"},"\u4e00\u4e2a\u6709\u94b1\u4eba")))),l.a.createElement("div",{className:"btn-group mt-5",role:"group"},l.a.createElement("button",{className:"btn btn-danger","data-dismiss":"modal",type:"button"},l.a.createElement("i",{className:"fas fa-times"}),"\u6b8b\u5fcd\u79bb\u53bb"),l.a.createElement("button",{className:"btn btn-success ml-5","data-dismiss":"modal",type:"button"},l.a.createElement("i",{className:"fas fa-check"}),"\u63d0\u4ea4")))))))))},v=function(){return l.a.createElement("section",{className:"page-section",id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},"\u8054\u7cfb\u6211\u4eec"),l.a.createElement("h3",{className:"section-subheading text-muted"},"\u7559\u4e0b\u60a8\u7684\u540d\u5b57\uff0c\u90ae\u7bb1\u548c\u610f\u89c1\u3002\u6211\u4eec\u5c06\u4f1a\u5728\u540e\u7eed\u7684\u65f6\u95f4\u5185\u4ed4\u7ec6\u7814\u8bfb\u4f60\u7684\u610f\u89c1\u5e76\u4e14\u7ed9\u4e0e\u60a8\u53cd\u9988"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("form",{id:"contactForm",name:"sentMessage",noValidate:"novalidate"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control",id:"name",type:"text",placeholder:"\u4f60\u7684\u540d\u5b57 *",required:"required","data-validation-required-message":"Please enter your name."}),l.a.createElement("p",{className:"help-block text-danger"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control",id:"email",type:"email",placeholder:"\u90ae\u7bb1\u5730\u5740 *",required:"required","data-validation-required-message":"Please enter your email address."}),l.a.createElement("p",{className:"help-block text-danger"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:"form-control",id:"message",placeholder:"\u610f\u89c1 *",required:"required","data-validation-required-message":"Please enter a message."}),l.a.createElement("p",{className:"help-block text-danger"}))),l.a.createElement("div",{className:"clearfix"}),l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("div",{id:"success"}),l.a.createElement("button",{id:"sendMessageButton",className:"btn btn-primary btn-xl text-uppercase",type:"submit"},"\u63d0\u4ea4\uff08TBD\uff09"))))))))},h=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(g,null),l.a.createElement(f,null),l.a.createElement(N,null),l.a.createElement(v,null),l.a.createElement(p,null))}}]),a}(n.Component),b=t(1),x=t.n(b);t(20);window.jQuery=x.a,window.$=x.a,t(22),t(23);var O=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={tbData:[{name:"Charlie",job:"Janitor"},{name:"Mac",job:"Bouncer"},{name:"Dee",job:"Aspring actress"},{name:"Dennis",job:"Bartender"}]},t.removeData=function(e){var a=t.state.tbData;t.setState({tbData:a.filter(function(a,t){return t!==e})})},t.handleSubmit=function(e){t.setState({tbData:[].concat(Object(r.a)(t.state.tbData),[e])})},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){x()('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=x()(this.hash);if((e=e.length?e:x()("[name="+this.hash.slice(1)+"]")).length)return x()("html, body").animate({scrollTop:e.offset().top-54},1e3,"easeInOutExpo"),!1}}),x()(".js-scroll-trigger").click(function(){x()(".navbar-collapse").collapse("hide")}),x()("body").scrollspy({target:"#mainNav",offset:56});var e=function(){x()("#mainNav").offset().top>100?x()("#mainNav").addClass("navbar-shrink"):x()("#mainNav").removeClass("navbar-shrink")};e(),x()(window).scroll(e)}},{key:"render",value:function(){return l.a.createElement("div",{id:"page-top"},l.a.createElement("div",null,l.a.createElement(h,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.97cd9c9b.chunk.js.map