var button = document.getElementById("start");
button.addEventListener("click", trka, false);

 async function trka() {
    var brojach = 0;
    var zajak= 1;
    var zhelka = 1;

    var i = Math.floor(Math.random() * 10) + 1;
    var img2 = "<p>";
    var img2 = "<p>";

    while (zajak < 70 && zhelka < 70) {
         await vreme();
        var n1 = zajak;
        var n2 = zhelka;
        if (i < 10 && i >= 9) {
            zhelka = zajak + 3;
            zajak = zajak;
        }
        if (i < 9 && i >= 7) {
            zhelka = zhelka + 3;
            zhelka = zhelka + 9;
        }
        if (i == 6) {
            zhelka = zhelka + 3;
            zajak = zajak - 12;
        }
        if (i < 6 && i >= 4) {
            zhelka = zhelka - 6;
            zajak = zajak + 1;
        } 
        if (i == 3) {
            zhelka = zhelka + 1;
            zajak = zajak + 1;
        }
        if (i < 2  && i >= 1) {
            zhelka = zhelka + 1;
            rabbit = rabbit - 2;
        }
        if (zajak < 1) {
             zajak = 1; 
            }
        if (zhelka < 1) { 
            zhelka = 1;
         }
        if (zajak >= 70) {
             zajak = 70; 
            } 
        if (zhelka >= 70) { 
            zhelka = 70;
         }
         brojach++;

        for (var i = 1; i <= 70; i++) {
            if (i == zajak) {
                img1 += "<img src=\"zajak.jpg.jpg\"class=\"slika\">";
            }else {
                    img1 += "<i class= \"glyphicon glyphicon-stop\"></i>" + "  ";
			}
            if (i == zhelka) {
                img2 += "<img src=\"zhelka.jpg\"class=\"slika\">";
            } else {
                    img2 += "<i class= \"glyphicon glyphicon-stop\"></i>" + "  ";
                }
            }

        img1 += "</p>";
        img2 += "</p>";
        document.getElementById("zajak").innerHTML = img1;
        document.getElementById("zelka").innerHTML = img2;

        if (zajak == zhelka) {
            window.alert("OUCH!!!"); button: false; 
        }
        i = Math.floor(Math.random() * 10) + 1;
        img1 = "<p>";
        img2 = "<p>";

    }

    if (zajak == 70) { 
    kraj(function(){ window.alert("Zajakot e pobednik\n" + "TIME:"+ " " + brojach +" " + "seconds"); }, 100); 
    kraj(()=> window.close,1000);
}
    if (zhelka == 70) {
    kraj(function(){ window.alert("Zhelkata e pobednik\n"+"TIME:"+" " +brojach +" " + "seconds"); }, 100);
    kraj(()=> window.close,1000);
}
}

function vreme() {
    return new Promise(resolve => kraj(resolve, 1000));
}