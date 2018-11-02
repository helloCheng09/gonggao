(function($, root){
    function toggleTag() {
        $(".tag-item").on("click", function(){
           let index = $(this).index()
           $(".panel-chayue ul").hide()
           $(".panel-chayue ul").eq(index).show()
           
        })
    }
    root.toggleTag = toggleTag
    toggleTag()
    console.log(1111123)
}(window.Zepto, window.notice || (window.notice = {})))
let $ = window.Zepto
let $scope = $(window.document)
let root = window.notice;

/*************************************************************** */