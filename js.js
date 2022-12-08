$(function () {
    // 頁面初始cover
    // let op = document.querySelector("#windowcover")
    // op.style.opacity = 1;
    // op.onclick = function () {
    //     setInterval(() => {
    //         this.style.opacity *= 0.5;
    //         if (this.style.opacity <= 0.01) {
    //             this.style.display = 'none';
    //         }
    //     }, 400);
    // }

    $('#windowcover').on('click', function () {
        $(this).css('opacity', '0')
        setTimeout(() => {
            $(this).css('display', 'none')
        }, 2000)
    })



    //新幻燈
    var stop = 0
    $('#slidetext').on('click', function () {
        $(this).css('animation-play-state', 'paused')
        if (stop == 1) {
            $(this).css('animation-play-state', 'running')
            stop %= 1
            stop -= 1
        }
        stop += 1
        console.log(stop)
    })
    $('#slidebox').on('mouseover', function () {
        $(this).css('animation-play-state', 'paused')
    })
    $('#slidebox').on('mouseout', function () {
        $(this).css('animation-play-state', 'running')
    })
    //圖標點擊
    $('#title_img').on('click', function () {
        $('#shopping').css('bottom', '20px')
        $('#nomal').css('display', 'block')
        $('#butterfly').css('display', 'none')
        $('#plant_2').css('display', 'none')
        $('#plant_3').css('display', 'none')
        $('#plant_4').css('display', 'none')
    })
    //六個按鍵
    $('#call').on('click', function () {
        $('#shopping').css('bottom', '20px')
        $('#nomal').css('display', 'block')
        $('#butterfly').css('display', 'none')
        $('#plant_2').css('display', 'none')
        $('#plant_3').css('display', 'none')
        $('#plant_4').css('display', 'none')
    })
    $('#host').on('click', function () {
        $('#shopping').css('bottom', '20px')
        $('#nomal').css('display', 'block')
        $('#butterfly').css('display', 'none')
        $('#plant_2').css('display', 'none')
        $('#plant_3').css('display', 'none')
        $('#plant_4').css('display', 'none')
    })
    $('#show_1').on('click', function () {
        $('#shopping').css('bottom', '12vh')
        $('#butterfly').css('display', 'block')
        $('#plant_2').css('display', 'none')
        $('#plant_3').css('display', 'none')
        $('#nomal').css('display', 'none')
        $('#plant_4').css('display', 'none')
        if (screen.width < 810) {
            $('.hide').css('display', 'inline')
        }
    })
    $('#show_2').on('click', function () {
        $('#shopping').css('bottom', '12vh')
        $('#butterfly').css('display', 'none')
        $('#plant_3').css('display', 'none')
        $('#plant_2').css('display', 'block')
        $('#nomal').css('display', 'none')
        $('#plant_4').css('display', 'none')
    })
    $('#show_3').on('click', function () {
        $('#shopping').css('bottom', '12vh')
        $('#butterfly').css('display', 'none')
        $('#plant_3').css('display', 'block')
        $('#plant_2').css('display', 'none')
        $('#nomal').css('display', 'none')
        $('#plant_4').css('display', 'none')
    })
    $('#show_4').on('click', function () {
        $('#shopping').css('bottom', '12vh')
        $('#butterfly').css('display', 'none')
        $('#plant_3').css('display', 'none')
        $('#plant_4').css('display', 'block')
        $('#plant_2').css('display', 'none')
        $('#nomal').css('display', 'none')
    })

    //幻燈片
    // var i = -1
    // setInterval(() => {
    //     //012
    //     i += 1
    //     i = i % 3
    //     var x = document.getElementById(`slide${i}`)
    //     x.style.opacity = '1';
    // }, 2000)
    // var f = 0
    // setInterval(() => {
    //     //120
    //     f += 1
    //     f = f % 3
    //     var y = document.getElementById(`slide${f}`)
    //     y.style.opacity = '0'
    // }, 2000)
    // var s = 1
    // setInterval(() => {
    //     s += 1
    //     s = s % 3
    //     var z = document.getElementById(`slide${s}`)
    //     z.style.opacity = '0'
    // }, 2000)

    // model圖
    var modal = document.getElementById("myModal");
    var img = document.getElementById("shopimg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    $('.productimg').on('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    })
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
    //首頁 捲動特效
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        $("span.qScrollTop").text(scrollVal); //監控span
        if (scrollVal > 200) {
            $('#storybox').css('animation-name', 'mai')
                .css('animation-duration', '0.6s')
        }
        if (scrollVal < 200) {
            $('#storybox').css('animation-name', 'mal')
                .css('animation-duration', '0.6s')
        }
        if (scrollVal > 400) {
            $('#storybox>div').css('animation-name', 'flyaway')
                .css('animation-duration', '0.6s')
                .css('opacity', '0')
        }
        if (scrollVal < 400) {
            $('#storybox>div').css('animation-name', 'flyback')
                .css('animation-duration', '0.6s')
                .css('opacity', '1')
        }
        if (scrollVal > 550) {
            $('#productback').css('height', '0vh')
            $('#productback span').css('bottom', '22vh').css('opacity', '0')
        }
        if (scrollVal < 550) {
            $('#productback').css('height', '400px')
            $('#productback span').css('bottom', '0px').css('opacity', '1')
        }
        if (scrollVal < 720) {
            $('#self').css('opacity', '0').css('right', '50px')
        }
        if (scrollVal > 720) {
            $('#self').css('opacity', '1').css('right', '0px')
        }
        if (scrollVal < 920) {
            $('#callus').css('opacity', '0').css('bottom', '50px')
        }
        if (scrollVal > 920) {
            $('#callus').css('opacity', '1').css('bottom', '0px')
        }
        if (scrollVal < 1400) {
            $('#shopping').css('bottom', '20px')
        }
        if (scrollVal > 1400) {
            $('#shopping').css('bottom', '12vh')
        }
    });

    // setInterval(()=>{
    //     $('#storybox>div').css('animation-name','mai')
    // },1000)
    // 蘭花的文字呈現

    $('.hide').on('click', function () {
        $("#butterfly_text p").toggle(500);     //.text('')
        $('.hide').css('display', 'none')
        $('.appear').css('display', 'inline')
    })
    $('.appear').on('click', function () {
        if (screen.width < 810) {
            $("#butterfly_text p").toggle(500);
            //.html('<p><b>蝴蝶蘭：</b><br>台灣因熱帶地區加上海島型氣候種種因素，為蝴蝶蘭塑造了一個相當適合生長的環境，也因此我們的蝴蝶蘭配種及品種改良技術都相當的發達，讓我們可以在市面上看到各式顏色大小的蝴蝶蘭。</p>')
            $('.appear').css('display', 'none')
            $('.hide').css('display', 'inline')
        } else {
            $("#butterfly_text p").toggle(500);
            //.html('<p><b>蝴蝶蘭：</b><br>台灣因熱帶地區加上海島型氣候種種因素，為蝴蝶蘭塑造了一個相當適合生長的環境，也因此我們的蝴蝶蘭配種及品種改良技術都相當的發達，讓我們可以在市面上看到各式顏色大小的蝴蝶蘭。</p>')
            $('.appear').css('display', 'none')
        }
    })

    // 花束的移動
    var move = 0
    $('.flo').on('click', function () {
        if (window.innerWidth > 810) {
            move += 17.4
            $('.flo').css('right', `${move}vw`)
            if (move >= 80) { move = 0 }
        }
        if (window.innerWidth <= 810) {
            move += this.width
            $('.flo').css('right', `${move}px`)
            if (move >= (this.width) * 5) { move = 0 }
        }
    })
    // 盆栽的移動
    var fir = 1
    var sec = 0
    var thi = -1
    var sho = 2
        $('#plant_4').on('click', function () {
            if (fir > 8) { fir = 1 }
            if (sec > 8) { sec = fir - 1 }
            if (thi > 8) { thi = sec - 1 }
            if (sho > 8) { sho = 1 }
            if(screen.width<451){
            $(`#g${fir}`).css('right', '25vw').css('top', '5vh').css('left', '0')
            fir += 1
            $(`#g${sec}`).css('left', '25vw').css('top', '5vh').css('right', '0')
            sec += 1
        }else{
            $(`#g${fir}`).css('right', '15vw').css('top', '5vh').css('left', '0')
            fir += 1
            $(`#g${sec}`).css('left', '15vw').css('top', '5vh').css('right', '0')
            sec += 1
        }
            $(`#g${thi}`).css('left', '0').css('top', '0').css('right', '0').css('filter', 'blur(0px) brightness(100%)')
            thi += 1
            $(`#g${sho}`).css('z-index', '3').css('transform', 'scale(1.1,1.1)')
            sho += 1
            setTimeout(() => {
                $(`#g${fir - 1}`).css('z-index', '0').css('transform', 'scale(0.9,0.9)').css('filter', 'blur(0px) brightness(150%)')
            }, 300)
            // console.log(fir - 1, sec - 1, thi - 1, sho - 1)

        })
})


