(function ($, root) {
    let curIndex = 0

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
    root.toggleTag = toggleTag

    console.log(88)
}($, window.notice || (window.notice = {})))