function inf() {
    let btn = document.querySelectorAll(".more label")
    let pr = document.querySelectorAll(".more p")
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
            pr[i].classList.toggle("moreP")
            btn[i].classList.toggle("dirctionLabel")
        })
    }

}
inf()

// function images  -----------
function logimg() {
    var addallimg = document.querySelectorAll(".div_log img")
    for (let m = 0; m < addallimg.length; m++) {
        if (!addallimg[m].classList.contains('active')) {
            addallimg[m].style.display = 'none'
        }
        changeImages(addallimg)
    }

    function changeImages(addallimg) {
        let index = 0;
        setInterval(function() {
            addallimg[index].style.display = 'none'
            index++;
            if (index >= addallimg.length) {
                index = 0;
            }
            addallimg[index].style.display = 'flex'

        }, 5000)

    }
}
logimg()

// function images-- -- -- -- --