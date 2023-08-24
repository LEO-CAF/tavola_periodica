/* ------------------------------ GRUPPI ------------------------------ */

for(let i=1; i<=18; i++){
    $("nav .gruppo"+i).hover(
        function(){
            $("main").addClass("highlighting-group");
            $("main .gruppo"+i).addClass("element-group-highlight");
        },
        function(){
            $("main .gruppo"+i).removeClass("element-group-highlight");
            $("main").removeClass("highlighting-group");
        }
    );
}



/* ------------------------------ PERIODI ------------------------------ */

let items1=["periodo1", "periodo2", "periodo3", "periodo4", "periodo5", "periodo6", "periodo7", "lantanidi", "attinidi"];
for(let i of items1){
    $("nav ."+i).hover(
        function(){
            $("main").addClass("highlighting-group");
            $("main ."+i).addClass("element-group-highlight");
        },
        function(){
            $("main ."+i).removeClass("element-group-highlight");
            $("main").removeClass("highlighting-group");
        }
    );
}



/* ------------------------------ CATEGORIE ------------------------------ */

let items2=["metalli_alcalini", "metalli_alcalino_terrosi", "metalli_del_blocco_d", "metalli_del_blocco_p", "lantanidi", "attinidi", "semimetalli", "non_metalli", "alogeni", "gas_nobili", "altro"];
for(let i of items2){
    $("nav ."+i).hover(
        function(){
            $("main").addClass("highlighting-group");
            $("main ."+i).addClass("element-group-highlight");
        },
        function(){
            $("main ."+i).removeClass("element-group-highlight");
            $("main").removeClass("highlighting-group");
        }
    );
}



/* ------------------------------ CELLE ------------------------------ */

$("main #box div").hover(
    function(){
        $(this).addClass("element-highlight");
    },
    function(){
        $(this).removeClass("element-highlight");
    }
);



/* ------------------------------ PRESENTAZIONI ------------------------------ */

$("main #box div").click(
    function(){
        if($(this).hasClass("metalli_alcalini") || $(this).hasClass("metalli_alcalino_terrosi")){
            window.open("presentazione/1.html");
        }
        if($(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo3") || $(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo4") || $(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo5") || $(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo6") || $(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo7")){
            window.open("presentazione/2.html");
        }
        if($(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo8") || $(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo9") || $(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo10") || $(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo11") || $(this).hasClass("metalli_del_blocco_d") && $(this).hasClass("gruppo12")){
            window.open("presentazione/3.html");
        }
        if($(this).hasClass("metalli_del_blocco_p")){
            window.open("presentazione/4.html");
        }
        if($(this).hasClass("semimetalli")){
            window.open("presentazione/5.html");
        }
        if($(this).hasClass("non_metalli") || $(this).hasClass("alogeni")){
            window.open("presentazione/6.html");
        }
        if($(this).hasClass("gas_nobili")){
            window.open("presentazione/7.html");
        }
        if($(this).hasClass("lantanidi") || $(this).hasClass("attinidi")){
            window.open("presentazione/8.html");
        }
    }
);



/* ------------------------------ LOGO ------------------------------ */

$("nav #logo").click(
    function(){
        window.open("https://www.antoniopesenti.edu.it/")
    }
);



/* ------------------------------ FOOTER ------------------------------ */

$("footer").click(
    function(){
        window.open("https://github.com/LEO-CAF/tavola_periodica")
    }
);