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
    root.clickYuedu()
} else if ($("#lsBxWrap").length) {
    let textareEle = document.getElementsByTagName("textarea")
    root.autoTextarea(textareEle[0])
} else if (document.getElementById("notSend")) {
    console.log("发送公告")

    var html = `
    `
    $(".list-item").eq(2).after(html)
    // 全选老师
    root.selectAllTc()
    // 反选老师
    root.ReSelectTc()
    // 单选老师
    root.singleSelectTc()

    // 获取所有数据
    setTimeout(() => {
        let data = $(".form_item").serializeArray()
        console.log(data)
    }, 5000);
    
}