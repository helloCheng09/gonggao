// let $ = window.Zepto
// let $scope = $(window.document)
let root = window.notice;
console.log($)

/*************************************************************** */

// 校长 查看公告详情 
if ($("#xzNotDetWrap").length) {
    root.toggleTag()
} else if ($("#teaNotListWrap").length) {
    // 教师 查看公告列表 

} else if ($("#jsNotDetWrap").length) {
    let textareEle = document.getElementsByTagName("textarea")
    root.autoTextarea(textareEle[0])
    // 教师 查看公告详情 
    console.log("jjsjs")
    root.initYuedu()
    root.showForm()
    root.closeForm()
}