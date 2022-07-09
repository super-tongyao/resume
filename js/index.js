var imgMarginRight = 5;

$(window).preloader({
    delay: 1000
});

$(function () {
    $(".fancybox").fancybox();

    initImgListWidth()
})

$(".img-body").mouseover(function () {
    $(this).children(".left").css("display", "block");
    $(this).children(".right").css("display", "block");

})

$(".img-body").mouseout(function () {
    $(this).children(".left").css("display", "none");
    $(this).children(".right").css("display", "none");
})

$(".back-to-top").click(function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})


function initImgListWidth() {

    var imgList = $(".img-list");
    var imgMarginRight = 12;
    for (var i = 0; i < imgList.length; i++) {
        width = ($(imgList[i]).children("a").width() + imgMarginRight) * $(imgList[i]).children(".img-list a").length
        $(imgList[i]).css(
            "width",
            width + "px"
        )
    }

}