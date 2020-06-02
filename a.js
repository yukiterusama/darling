// function getLoading(imgUrl){

//     Image.prototype.onChangeSize;
//     Image.prototype.load = function(url){
//         var _this = this,
//             req   = ((XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
//         req.open('GET', url, true);
//         req.responseType = 'arraybuffer';
//         req.onload = function(e) {
//           if(req.response) {
//             var blob = new Blob([req.response]);
//             _this.src = window.URL.createObjectURL(blob);
//           }
//         }
//         req.onprogress = function(e) {
//           if(_this.onChangeSize) {
//             _this.onChangeSize(e.loaded, e.total);
//           }
//         }
//         req.send();
//     }
//     var img = new Image();
//     img.onChangeSize = function(loaded, total) {
//         var loadingPercentage = parseInt((loaded / total) * 100);
//         $(".progress").css("width", loadingPercentage + "vw");
//         $(".body").css("background", "src"+img);
//     }
//     img.onload = function() {
      
//     }
//     img.load(imgUrl);

// }

// getLoading("media/UwU.png");


        ;(function(){
          function id(v){ return document.getElementById(v); };
          function loadbar() {
            var ovrl = id("overlay"),
                prog = id("progress"),
                stat = id("progstat"),
                img = document.images,
                c = 0,
                tot = img.length;
            if(tot == 0) return doneLoading();

            function imgLoaded(){
              c += 1;
              var perc = ((100/tot*c) << 0) +"%";
              prog.style.width = perc;
              stat.innerHTML = "Loading "+ perc;
              if(c===tot) return doneLoading();
            }
            function doneLoading(){
              ovrl.style.opacity = 0;
              setTimeout(function(){ 
                ovrl.style.display = "none";
              }, 1200);
            }
            for(var i=0; i<tot; i++) {
              var tImg     = new Image();
              tImg.onload  = imgLoaded;
              tImg.onerror = imgLoaded;
              tImg.src     = img[i].src;
            }    
          }
          document.addEventListener('DOMContentLoaded', loadbar, false);
        }());