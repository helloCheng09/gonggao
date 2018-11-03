(function ($, root) {

    // 判断老师是否阅读
    let initYuedu = () => {
        let status = $("#yueBtn").attr("yuedu-status")
        if (status == 0) {
            let htmlNot = `
                    <div class="not-yet">
                        <img src="../img/nochecked.png" class="yuedu-img">
                        <label for="btn">未阅读</label>
                    </div>
                `
            $("#yueBtn").append(htmlNot)
            console.log("初始化阅读11")
        } else {
            let htmlDone = `
                    <div class="had-checked">
                        <img src="../img/checked.png" class="yuedu-img">
                        <label for="btn">已阅读</label>
                    </div>
                `
            $("#yueBtn").append(htmlDone)
            console.log("初始化阅读2")
        }
        console.log("初始化阅读")
        root.clickYuedu()
    }


    root.initYuedu = initYuedu



}($, window.notice || (window.notice = {})));