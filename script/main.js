function ChangeImage(name){
    let Myimage;
    if (name == "hakuba"){
        Myimage = ["img/snow1.jpg", 
                   "img/snow2.jpg",
                   "img/snow3.jpg",
                   "img/snow4.jpg",
                   "img/snow5.jpg",
                   "img/snow6.jpg"];
    }else {
        Myimage = ["img/FB.jpg"];
    }

    let num = Math.floor(Math.random() * Myimage.length);
    let target = document.getElementById(name);

    target.classList.add('fade-out');
    setTimeout(
        function (){
            target.src = Myimage[num];
            target.classList.remove('fade-out');
        }, 500);
}

document.getElementById('hakuba').classList.remove('fade-out');