// Routing i use anime.js just for animation 😫

function play() {
    anime({
        targets: '.loading',
        translateY: [0, 500],
        rotateY: [0, 360],
        scale: [1, 0],
        easing: 'easeInOutQuad',
        duration: 2500
    });
    anime({
        targets: '.main',
        translateY: [-500, 0],
        rotateY: [360, 0],
        scale: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2500
    });

    setTimeout(function () {
        document.querySelector('.loading').innerHTML = null;
    }, 2500);
}

function yesOne() {
    anime({
        targets: '.main',
        rotate: [0, 360],
        opacity: [1, 0],
        duration: 1500,
        easing: 'easeInOutCubic'
    });
    anime({
        targets: '.row2p1',
        translateY: 0,
        rotate: [0, 360],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeInOutCubic'
    });

}

function noOne() {
    anime({
        targets: '.main',
        rotateY: [0, 180],
        opacity: [1, 0],
        duration: 1500,
        easing: 'easeInOutCubic'
    });
    anime({
        targets: '.row2p2',
        rotateY: [180, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeInOutCubic'
    });

}

function yesTwo() {
    anime({
        targets: '.row2p1',
        translateY: [0, 400],
        opacity: [1, 0],
        easing: 'easeInOutQuad',
        duration: 1500
    });
    anime({
        targets: '.row3p1',
        translateY: [-400, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1500
    });

}

function noTwo() {
    anime({
        targets: '.row2p1',
        translateX: [0, 300],
        opacity: [1, 0],
        rotateZ: [0, 180],
        duration: 1500,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.no2-r1',
        translateX: [-300, 0],
        opacity: [0, 1],
        rotateZ: [-180, 0],
        duration: 1500,
        easing: 'easeInOutQuad'
    });

}

function row2yes2() {
    var tl = anime.timeline({
        duration: 1000,
        easing: 'linear',
    });
    tl
        .add({
            targets: '.row2p2',
            rotateX: [0, 90]
        })
        .add({
            targets: '.yes2-r1',
            rotateX: [90, 0],
            translateY: 0
        });

}

function row2no2() {
    anime({
        targets: '.row2p2',
        scale: [1, 0],
        translateY: [0, -300],
        opacity: [1, 0],
        duration: 1000,
        easing: 'linear',
    });
    anime({
        targets: '.row3p2',
        opacity: [0, 1],
        scale: [0, 1],
        translateY: [300, 0],
        duration: 1000,
        easing: 'linear',
    });

}

function goodyes() {
    anime({
        targets: '.yes2-r1',
        translateX: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p1',
        translateX: [-150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}

function badyes() {
    anime({
        targets: '.yes2-r1',
        translateY: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p2',
        translateY: [-150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}

function ohyes() {
    anime({
        targets: '.no2-r1',
        translateX: [0, 150],
        opacity: [1, 0],
        rotate: [0, 180],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p4',
        translateX: [-150, 0],
        rotate: [-180, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}

function ohno() {
    anime({
        targets: '.no2-r1',
        translateX: [0, -150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p3',
        translateX: [150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}


function button1() {
    anime({
        targets: '.row3p1',
        rotate: [0, 180],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p4',
        rotate: [-180, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}


function button2() {
    anime({
        targets: '.row3p1',
        translateX: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p3',
        translateX: [-150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}


function button3() {
    anime({
        targets: '.row3p2',
        translateX: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p4',
        translateX: [-150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}

function button4() {
    anime({
        targets: '.row3p2',
        translateX: 0,
        rotateZ: [0, 180],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p3',
        translateX: 0,
        rotateZ: [-180, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}

function button5() {
    anime({
        targets: '.row4p1',
        translateY: [0, 150],
        scaleY: [1, 0],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row5p2',
        translateY: [-150, 0],
        opacity: [0, 1],
        scaleY: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}

function button6() {
    anime({
        targets: '.row4p2',
        scaleZ: [1, 0],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p1',
        scaleZ: [0, 1],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });
    setTimeout(function () {
        document.querySelector('.row4p2').classList.add('none');
    }, 1000);
}
var a = "cr";


function button7() {
    anime({
        targets: '.row4p2',
        translateZ: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row4p3',
        translateZ: [-150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}

function button8() {
    anime({
        targets: '.row4p3',
        perspective: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row5p1',
        perspective: [150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}

function button9() {
    anime({
        targets: '.row4p4',
        rotateX: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row5p2',
        rotateX: [-150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });

}

function button10() {
    anime({
        targets: '.row5p1',
        translateX: [0, 150],
        opacity: [1, 0],
        scale: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row5p2',
        translateX: [-150, 0],
        scale: [0, 1],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });
}

function button11() {
    anime({
        targets: '.row5p1',
        translateX: 0,
        rotateY: [0, 180],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row6p2',
        translateX: 0,
        opacity: [0, 1],
        rotateY: [-180, 0],
        easing: 'linear',
        duration: 1000
    });
}
var d = "Yu";

function button12() {
    anime({
        targets: '.row5p2',
        translateX: [0, -150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row6p1',
        translateX: [150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });
}

function button13() {
    anime({
        targets: '.row6p1',
        translateY: [0, -150],
        scaleX: [1, 0],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row7p1',
        translateY: [150, 0],
        opacity: [0, 1],
        scaleX: [0, 1],
        easing: 'linear',
        duration: 1000
    });
}
var g = "ru";

function button14() {
    anime({
        targets: '.row6p1',
        translateX: [0, -150],
        translateY: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row7p2',
        translateX: [150, 0],
        translateY: [-150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });
}
var b = "ed";


function button15() {
    anime({
        targets: '.row6p2',
        translateX: [0, -150],
        translateY: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row7p3',
        translateX: [150, 0],
        translateY: [-150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });
}

var f = "te";

function button16() {
    anime({
        targets: '.row6p2',
        translateX: [0, -150],
        translateY: [0, 150],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.row7p4',
        translateX: [150, 0],
        translateY: [-150, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000
    });
}

var c = "it";

function button17() {
    anime({
        targets: '.row7p1',
        translateX: 0,
        translateY: 0,
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.happy-end',
        translateX: 0,
        translateY: [-900, 0],
        opacity: 1,
        easing: 'easeOutBack',
        duration: 1000
    });

    happyendingnjirt();
}

function button18() {
    anime({
        targets: '.row7p2',
        translateX: 0,
        translateY: 0,
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.happy-end',
        translateX: 0,
        translateY: [-900, 0],
        opacity: 1,
        easing: 'easeOutBack',
        duration: 1000
    });

    happyendingnjirt();
}


function button19() {
    anime({
        targets: '.row7p3',
        translateX: 0,
        translateY: 0,
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000
    });
    anime({
        targets: '.happy-end',
        translateX: 0,
        translateY: [-900, 0],
        opacity: 1,
        easing: 'easeOutBack',
        duration: 1000
    });

    happyendingnjirt();
}
var e = "ki";

function sadendasu() {
    anime({
        targets: '.bad-end',
        translateY: 0,
        duration: 1,
        easing: 'linear',
    });

    anime({
        targets: '.brokenheart',
        scale: [1, 1.1],
        autoplay: true,
        duration: 2000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutBack'
    })
}

// Some adsitional features 😜

function hideme() {
    setTimeout(function () {
        anime({
            targets: '.image',
            opacity: [1, 0],
            duration: 4000,
        })
    }, 3000);
    setTimeout(function(){
        $('.image').remove();
    },6000);

    anime({
        targets: '.love',
        translateX: [function () {
            return anime.random(0, 600);
        }, function () {
            return anime.random(1, 600);
        }, ],
        translateY: [function () {
            return anime.random(0, 1);
        }, function () {
            return anime.random(-400, -700)
        }],
        opacity: [{
                value: 1,
                duration: 4000,
            },
            {
                value: 0,
                duration: 1000,
                delay: 0
            }
        ],
        duration: 5000,
        delay: function () {
            return anime.random(100, 400);
        },
        easing: 'linear',
    });
}

function happyendingnjirt() {
    setTimeout(function () {
        anime({
            targets: '.lopelope span',
            translateX: [-70, 0],
            translateY: [70, 0],
            scale: [0, 1],
            rotate: [45, 0],
            opacity: [0, 1],
            duration: 1500,
            easing: "easeOutElastic",
            delay: anime.stagger(100),
        });
        anime({
            targets: '.image',
            scale: [1, 1.1],
            duration: 5000,
            easing: 'easeOutElastic',
            opacity: [0, 1],
            delay: 1500
        });
        anime({
            targets: '.image img',
            scale: [1, 1.1],
            duration: 5000,
            easing: 'easeInOutElastic',
            direction: 'alternate',
            loop: true,
            delay: 6500
        });
        anime({
            targets: '.jam',
            translateY: [-100, 0],
            opacity: [0,1],
            duration: 2000,
            easing: 'easeInOutElastic',
            delay: 2500
        });
        anime({
            targets: '.greeting',
            translateY: [100, 0],
            opacity: [0,1],
            duration: 2000,
            easing: 'easeInOutElastic',
            delay: 1000
        });

    }, 1300);
}
var dcxx = a + b + c + " " + d + e + f + g;

$(".lopelope").each(function () {
    var spliter = $(this).text().split("");
    $(this).empty();
    for (var i = 0; i < spliter.length; i++) {
        var chars = spliter[i];
        $(this).append("<span>" + chars + "</span>");
    }
});


function date() {
    var date = new Date;
    var hour = date.getHours();
    if (18 < hour) {
        var time = "malam";
    } else if (13 < hour) {
        var time = "sore";
    } else if (9 < hour) {
        var time = "siang";
    } else {
        var time = "pagi";
    }
    document.querySelector('.time').innerHTML = time;
};
date();

setInterval(
    function times() {
        var date = new Date();
        var hour = date.getHours().toString();
        var minu = date.getMinutes().toString();

        if (hour.length < 2) {
            hour = "0" + hour
        };
        if (minu.length < 2) {
            minu = "0" + minu
        };

        document.querySelector('.times').innerHTML = hour + " : " + minu;
        document.querySelector('.timesa').innerHTML = hour + " : " + minu;
    }, 1000);
teks = ["Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!", "Happy birthday! I hope all your birthday wishes and dreams come true.", "A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!", "Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!", "May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!", "Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!", "This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people I’ve ever known.", "May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday.", "Count not the candles…see the lights they give. Count not the years, but the life you live. Wishing you a wonderful time ahead. Happy birthday."];

document.querySelector('.wrapper').innerHTML += dcxx;

class TypeWriter {
    constructor(txtElement, wait = 3000) {
        this.txtElement = txtElement;
        this.words = teks;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 1000);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        document.getElementById('idsendirian').innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 50;

        if (this.isDeleting) {
            typeSpeed /= 8;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = 5000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 1500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.greetingText');
    new TypeWriter(txtElement);
}

// Copas from andika sujandi see on facebook

function mytanggal() {
    var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
    var now = new Date();
    var dayName = hari[now.getDay()];
    var monthName = bulan[now.getMonth()];
    tanggal = (dayName + ', ' + now.getDate() + ' ' + monthName);
    $('.tanggal').text(tanggal);
}
mytanggal();

console.log("Hy User Terimakasih telah mencoba atau melihat project gabut saya kalian boleh saja repost nih halaman cuman tolong jangan remove credit gua lah cuk T-T capek aku buatnya");