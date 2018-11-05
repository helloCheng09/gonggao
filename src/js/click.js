(function ($, root) {
    let curIndex = 0
    // 校长列表展示已阅读和反馈
    function toggleTag() {
        $(".tag-item").on("click", function () {
            let ele = $(this)
            let index = $(this).index()
            if (index != curIndex) {
                $(".tag-item").removeClass("selected")
                ele.addClass("selected")
                $(".panel-chayue ul").eq(curIndex).hide(200, function () {
                    console.log("隐藏")
                })
                setTimeout(() => {
                    $(".panel-chayue ul").eq(index).show(function () {
                        console.log("展示")
                    })
                }, 300);
                curIndex = index
            }

        })
    }

    // 教师公告详情 点击已阅读
    let clickYuedu = () => {
        let status
        // $("#yueBtn").find(".yuedu-img").on("click", function () {
        status = $("#yueBtn").attr("yuedu-status")
        if (status == 0) {
            $("#yueBtn").attr("yuedu-status", "1")
            $("#yueBtn").empty()
            root.appeal(idYuedu, urlYuedu)
            // root.initYuedu()
            console.log("初次阅读")
        }
        // })
    }

    // /public/yz/img
    function appeal(notice_id, urlYuedu) {
        if (1) {
            $.post(urlYuedu, {
                notice_id: notice_id
            }, function (obj) {
                if (obj['status'] == 'true') {
                    console.log("obj")
                    $("#yueBtn").empty()
                    var html =
                        `  <div class="had-checked">
                                <img src="../img/checked.png" class="yuedu-img">
                                <label for="btn">已阅读</label>
                            </div>
                         `;
                    $("#yueBtn").append(html)
                    $("#yueBtn").attr("yuedu-status", "1")
                } else {
                    Alert('提交失败');
                }
            }, 'json');
        } else {
            return false;
        }
    }
    // 教师 点击回复公告
    let showForm = () => {
        $(".btn-respone").on("click", function () {
            $("#responeForm").css("display", "block")
            status = $("#yueBtn").attr("yuedu-status")
            console.log("已阅读")
            if (status == 0) {
                root.appeal(idYuedu, urlYuedu)
                // root.initYuedu()
            } else {
                return false
            }
        })
    }

    // 关闭弹窗
    let closeForm = () => {
        $(".click-block").on("click", function () {
            $(".respone-form").hide()
        })
    }

    root.closeForm = closeForm
    root.showForm = showForm
    root.clickYuedu = clickYuedu
    root.toggleTag = toggleTag
    root.appeal = appeal

    console.log(88)
}($, window.notice || (window.notice = {})));