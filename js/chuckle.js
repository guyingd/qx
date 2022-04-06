let kk = {};
kk.showRightMenu = function(isTrue, x=0, y=0){
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top',x+'px').css('left',y+'px');

    if(isTrue){
        $rightMenu.show();
    }else{
        $rightMenu.hide();
    }
}
$.extend({
    message: function(a) {
        var b = {
            title: "",
            message: "操作成功",
            time: "3000",
            type: "success",
            showClose: !0,
            autoClose: !0,
            onClose: function() {}
        };
        "string" == typeof a && (b.message = a), "object" == typeof a && (b = $.extend({}, b, a));
        var c, d, e, f = b.showClose ? '<div class="c-message--close">×</div>' : "",
            g = "" !== b.title ? '<h2 class="c-message__title">' + b.title + "</h2>" : "",
            h = '<div class="c-message animated animated-lento slideInRight"><i class=" c-message--icon c-message--' + b.type + '"></i><div class="el-notification__group">' + g + '<div class="el-notification__content">' + b.message + "</div>" + f + "</div></div>",
            i = $("body"),
            j = $(h);
        d = function() {
            j.addClass("slideOutRight"), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                e()
            })
        }, e = function() {
            j.remove(), b.onClose(b), clearTimeout(c)
        }, $(".c-message").remove(), i.append(j), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            j.removeClass("messageFadeInDown")
        }), i.on("click", ".c-message--close", function(a) {
            d()
        }), b.autoClose && (c = setTimeout(function() {
            d()
        }, b.time))
    }
}),
document.onkeydown = function(e) {
    if (123 == e.keyCode || e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode) || (e.ctrlKey && 85 === e.keyCode)) return $.message({
        message: "不能打开控制台喔!把F12键扣掉吧。",
        title: "哒咩哒咩！",
        type: "error",
        autoHide: !1,
        time: "2800"
    }), event.keyCode = 0, event.returnValue = !1, !1
},
function() {
    function e() {
        var e = new Date;
        if (new Date - e > 10) {
            try {
                document.getElementsByTagName("html")[0].innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
            } catch (e) {}
            return document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>', !0
        }
        return !1
    }

    function t() {
        for (; e();) e()
    }
    e() ? t() : window.onblur = function() {
        setTimeout(function() {
            t()
        }, 500)
    }
}(),
function() {
    var e = /x/;
    e.toString = function() {
        try {
            document.getElementsByTagName("html")[0].innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
        } catch (e) {}
        return document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>', "禁止打开控制台！"
    }
}(),
function() {
    var e = document.createElement("div");
    Object.defineProperty(e, "id", {
        get: function() {
            try {
                document.getElementsByTagName("html")[0].innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
            } catch (e) {}
            document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
        }
    }), console.log(e)
}()
kk.switchDarkMode = function(){
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};
kk.switchReadMode = function(){
    const $body = document.body
    $body.classList.add('read-mode')
    const newEle = document.createElement('button')
    newEle.type = 'button'
    newEle.className = 'fas fa-sign-out-alt exit-readmode'
    $body.appendChild(newEle)

    function clickFn () {
        $body.classList.remove('read-mode')
        newEle.remove()
        newEle.removeEventListener('click', clickFn)
    }

    newEle.addEventListener('click', clickFn)
}
kk.switchTheme=function(load=false){
    //空字符串表示butterfly原版主题（即不加载css）
    //FallGuys.css是我自己的魔改主题，需替换
    let themes = [''];
    let vTheme = parseInt(localStorage.getItem('visitor-theme'));
    if(!vTheme){
        vTheme = load?0:1;
    }else{
        vTheme += load?0:1;
        vTheme%=themes.length;
    }
    localStorage.setItem('visitor-theme',vTheme)
    let themesrc = ''
    if(themes[vTheme]){
        themesrc += window.location.origin+'/css/dorakika/'+themes[vTheme];
    }
    //css引入时link标签添加属性tag="theme"
    $(document.head).find('[tag="theme"]')[0].href = themesrc;
};

//复制选中文字
kk.copySelect = function(){
    document.execCommand('Copy',false,null);
}

//回到顶部
kk.scrollToTop = function(){
    btf.scrollToDest(0, 500);
}

// 菜单的show/hide
let rmWidth = $('#rightMenu').width();
let rmHeight = $('#rightMenu').height();
window.oncontextmenu = function(event){
    $('.rightMenu-group.hide').hide();
        if(document.getSelection().toString()){
            $('#menu-text').show();
        }
    let pageX = event.clientX + 10;	//加10是为了防止显示时鼠标遮在菜单上
    let pageY = event.clientY;

    // 菜单默认显示在鼠标右下方，当鼠标靠右或靠下时，将菜单显示在鼠标左方\上方
    if(pageX + rmWidth > window.innerWidth){
        pageX -= rmWidth;
    }
    if(pageY + rmHeight > window.innerHeight){
        pageY -= rmHeight;
    }
    
    kk.showRightMenu(true, pageY, pageX);
    return false;
};

window.addEventListener('click',function(){kk.showRightMenu(false);});	//隐藏菜单

//菜单功能绑定
$('#menu-backward').on('click',function(){window.history.back();});
$('#menu-forward').on('click',function(){window.history.forward();});
$('#menu-refresh').on('click',function(){window.location.reload();});
$('#menu-darkmode').on('click',kk.switchDarkMode);
$('#menu-top').on('click',kk.scrollToTop);
$('#menu-readmode').on('click',kk.switchReadMode);
$('#menu-home').on('click',function(){window.location.href = window.location.origin;});
$('#menu-themeChange').on('click',function(){kk.switchTheme();});

window.addEventListener('load',function(){kk.switchTheme(true);});	//页面加载时，通过缓存加载主题