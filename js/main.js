
$(document).ready(function() {
    $('#header').localScroll();
    
    $(window).scroll(function() {
        var theta = $(window).scrollTop() / 50 % Math.PI;
        $('#circle').css({ transform: 'rotate(' + theta + 'rad)' });
    });
    
    if (Modernizr.mq('(min-width: 1280px)')) {
        $(".rrr").click(function(){
            $("#logo").velocity({marginLeft:"-45px"}, 2000);
            $("#world").velocity({marginLeft:"-150px"}, 2000);
        });
        $(".rrc").click(function(){
            $("#logo").velocity({marginLeft:"-410px"}, 2000);
            $("#world").velocity({marginLeft:"-480px"}, 2000);
        });
        $(".rrl").click(function(){
            $("#logo").velocity({marginLeft:"250px"}, 2000);
            $("#world").velocity({marginLeft:"180px"}, 2000);
        });
    }
    if (Modernizr.mq('(min-width:1024px) and (max-width: 1279px)')) {
        $(".rrr").click(function(){
            $(".rl").velocity({opacity:"0"},1000);
            $(".lr").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-80px"}, 2000);
            $("#world").velocity({marginLeft:"-150px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".rrc").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-410px"}, 2000);
            $("#world").velocity({marginLeft:"-480px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".rrl").click(function(){
            $(".rr").velocity({opacity:"0"},1000);
            $(".rl").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"250px"}, 2000);
            $("#world").velocity({marginLeft:"180px"}, 2000);
            $(".lr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".rlr").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-410px"}, 2000);
            $("#world").velocity({marginLeft:"-480px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".rlc").click(function(){
            $(".rr").velocity({opacity:"0"},1000);
            $(".rl").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"250px"}, 2000);
            $("#world").velocity({marginLeft:"180px"}, 2000);
            $(".lr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".rll").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-410px"}, 2000);
            $("#world").velocity({marginLeft:"-480px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".lrr").click(function(){
            $(".rl").velocity({opacity:"0"},1000);
            $(".lr").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-80px"}, 2000);
            $("#world").velocity({marginLeft:"-150px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".lrc").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-410px"}, 2000);
            $("#world").velocity({marginLeft:"-480px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".lrl").click(function(){
            $(".rr").velocity({opacity:"0"},1000);
            $(".rl").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"250px"}, 2000);
            $("#world").velocity({marginLeft:"180px"}, 2000);
            $(".lr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".llr").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-410px"}, 2000);
            $("#world").velocity({marginLeft:"-480px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".llc").click(function(){
            $(".rr").velocity({opacity:"0"},1000);
            $(".rl").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"250px"}, 2000);
            $("#world").velocity({marginLeft:"180px"}, 2000);
            $(".lr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".lll").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-410px"}, 2000);
            $("#world").velocity({marginLeft:"-480px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
    }

});
