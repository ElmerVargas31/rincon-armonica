/*
    Estudiante: Elmer Vargas Salazar
    Módulo: Empleo de Normas de Accesibilidad Web
*/

$(document).ready(function () {

    /*---- 1) Desplegar Menú Principal (Responsive)----*/

    var despliegue = false;

    $("#btn_menu").click(function () {
        if(despliegue == false){
            $(".menu2").css("display","block");
            $("#btn_menu").html("<i class='fas fa-times fa-2x'></i><p>Cerrar</p>");
            despliegue = true;
        }else{
            $(".menu2").css("display","none");
            $("#btn_menu").html("<i class='fas fa-bars fa-2x'></i><p>Menú</p>");
            despliegue = false;
        }
    });

    /*---- 2) Efectos de Accesibilidad ----*/

    /*I - Mostrar y Ocultar Panel de Accesibilidad*/
    var panel = false;
    $("#btn_acce").click(function (){ 
        if(panel==false){
            $("#btn_acce").css({"background-color":"var(--color-cafe)","color":"#fff"});
            $("#panel_acce").css("left","0");
            panel=true;
        }else{
            $("#btn_acce").css({"background-color":"#fff","color":"var(--color-cafe)"});
            $("#panel_acce").css("left","-40%");
            panel=false;
        }
    });

    /* II- Aumento y Decremento de letra */

    //Vínculos Menú
    var tam_links = 22;
    $("#let_gra").click(function (){
        $(".menu ul li a").css("font-size",tam_links+=2);
        if(tam_links>26){
            $(".menu ul li a").css("font-size",tam_links-=2);
        }
    })
    $("#let_peq").click(function (){
        $(".menu ul li a").css("font-size",tam_links-=2);
        if(tam_links<22){
            $(".menu ul li a").css("font-size",tam_links+=2);
        }
    })
    
    //Textos
    var tamano_p = 16;
    $("#let_gra").click(function (){ 
        $("p,.flex li,table,figcaption").css("font-size",tamano_p+=2);
        if(tamano_p>20){
            $("p,.flex li,table,figcaption").css("font-size",tamano_p-=2);
        }
    });
    $("#let_peq").click(function (){ 
        $("p,.flex li,table,figcaption").css("font-size",tamano_p-=2);
        if(tamano_p<16){
            $("p,.flex li,table,figcaption").css("font-size",tamano_p+=2);
        }
    });

    //Títulos h1 - h2
    var tamano_h1 = 40;
    var h1_panel = 25;
    $("#let_gra").click(function (){ 
        $("main h1").css("font-size",tamano_h1+=2);
        if(tamano_h1>44){
            $("h1").css("font-size",tamano_h1-=2);
        } 
        $("#panel_acce h1").css("font-size",h1_panel+=2);
        if(h1_panel>29){
            $("#panel_acce h1").css("font-size",h1_panel-=2);
        }    
    });
    $("#let_peq").click(function (){ 
        $("main h1").css("font-size",tamano_h1-=2);
        if(tamano_h1<40){
            $("h1").css("font-size",tamano_h1+=2);
        }
        $("#panel_acce h1").css("font-size",h1_panel-=2);
        if(h1_panel<25){
            $("#panel_acce h1").css("font-size",h1_panel+=2);
        }     
    });

    var tamano_h2 = 30;
    var h2_tarj = 25;
    $("#let_gra").click(function (){ 
        $(".cont_informacion h2").css("font-size",tamano_h2+=2);
        if(tamano_h2>34){
            $(".cont_informacion h2").css("font-size",tamano_h2-=2);
        }      
        $(".tarj h2").css("font-size",h2_tarj+=2);
        if(h2_tarj>29){
            $(".tarj h2").css("font-size",h2_tarj-=2);
        }
    });
    $("#let_peq").click(function (){ 
        $(".cont_informacion h2").css("font-size",tamano_h2-=2);
        if(tamano_h2<30){
            $(".cont_informacion h2").css("font-size",tamano_h2+=2);
        }
        $(".tarj h2").css("font-size",h2_tarj-=2);
        if(h2_tarj<25){
            $(".tarj h2").css("font-size",h2_tarj+=2);
        }  
    });

    /* III- Espaciado entre letras */
    var bandera1 = false;
    $("#espa").click(function (){
        if(bandera1==false){
            $("#espa").css({"background-color":"var(--color-cafe)","color":"#fff"});
            $(".menu,main,footer").css("letter-spacing","2px");
            bandera1=true;
        }else{
            $("#espa").css({"background-color":"#fff","color":"var(--color-cafe)"});
            $(".menu,main,footer").css("letter-spacing","0px");
            bandera1=false;
        }
    })

    /*IV- Subrayados*/
    var bandera2, bandera3 = false;
    $("#sub_vinc").click(function (){
        if(bandera2==false){
            $("#sub_vinc").css({"background-color":"var(--color-cafe)","color":"#fff"});
            $("nav ul li a, #btn_menu, .fila_tarj a, #play, #pause, #hosting, #ancla,#btn_acce,#panel_acce a").css("text-decoration","underline");
            bandera2=true;
        }else{
            $("#sub_vinc").css({"background-color":"#fff","color":"var(--color-cafe)"});
            $("nav ul li a, #btn_menu, .fila_tarj a, #play, #pause, #hosting, #ancla,#btn_acce,#panel_acce a").css("text-decoration","none");
            bandera2=false;
        }
    })
    $("#sub_titu").click(function (){
        if(bandera3==false){
            $("#sub_titu").css({"background-color":"var(--color-cafe)","color":"#fff"});
            $("h1,h2").css("text-decoration","underline");
            bandera3=true;
        }else{
            $("#sub_titu").css({"background-color":"#fff","color":"var(--color-cafe)"});
            $("h1,h2").css("text-decoration","none");
            bandera3=false;
        }
    })

    /* V- Cambio de Colores */
    $("#invertir").click(function (){ 
        $("html").css("filter","invert(100%)"); 
    });
    $("#BN").click(function (){ 
        $("html").css("filter","grayscale(100%)"); 
    });
    $("#rest_color").click(function (){ 
        $("html").css("filter","grayscale(0%)"); 
    });
        
    /*---- 3) Parallax Animación Bloques----*/
    $(window).on('scroll', function () {
        if($(window).scrollTop()>=230){
            $(".cont_informacion").css("opacity","1");
        }else{
            $(".cont_informacion").css("opacity","0");
        }

        if($(window).scrollTop()>=1500){
            $(".cont_tarjetas").css("opacity","1");
        }else{
            $(".cont_tarjetas").css("opacity","0");
        }

        if($(window).scrollTop()>=2000){
            $(".cont_multi").css("opacity","1");
        }else{
            $(".cont_multi").css("opacity","0");
        }
    });

}); //Fin Ready