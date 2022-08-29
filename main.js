let q = document.querySelectorAll(".q");
let a = document.querySelectorAll(".a");
// console.log(q);
// console.log(a);



q.forEach(function (ele) {
    // console.log(ele);

    ele.onclick = function () {
        // console.log(this);

        // لو هسيب إجابه كل سؤال مفتوحه واللي بعدها تفتح عادي

        // if (ele.nextElementSibling.classList.contains("hide")) {
        //     // console.log("true");
        //     ele.nextElementSibling.classList.remove("hide")
        // } else {
        //     ele.nextElementSibling.classList.add("hide")

        // }
        ////////////////////////////////
        //كل  إجابه بتفتح بتقفل إللى قبلها
        if (ele.nextElementSibling.classList.contains("hide")) {
            // console.log("true");  
            a.forEach(function (e) {
                e.classList.add("hide")
            })

            ele.nextElementSibling.classList.remove("hide");
        } else {
            ele.nextElementSibling.classList.add("hide");

        }
    }

})
