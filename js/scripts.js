$(function(){
    /* LIMPA INPUT HOME */
    var news = "Insira seu e-mail aqui...";
    $("#nossaNewsletter input").focus(function(){
        if( $(this).val() == "Insira seu e-mail aqui..."){
            $(this).val("");
        }else{
            
        }
    });
    $("#nossaNewsletter input").blur(function(){
        if(news == " " || $(this).val().length == 0){
            $(this).val(news);
        }
    });
    /* / LIMPA INPUT HOME */
    
    /* SLIDER HOME */
    var maxCliques = $("#sliderHome li").length;
    var nCliqueHome = 0;
    
    function validaSetasHome(){
        if( maxCliques < 2  ){
            $("#setaProx").hide();
            $("#setaAnt").hide();
        }else if( nCliqueHome == 0 ){
            $("#setaProx").show();
            $("#setaAnt").hide();
        }else if( nCliqueHome == maxCliques-1 ){
            $("#setaProx").hide();
            $("#setaAnt").show();
        }else{
            $("#setaProx").show();
            $("#setaAnt").show();
        }
    }
    validaSetasHome();
    
    $("#guardaSliderHome #setaProx").click(function(){
        nCliqueHome++;
        validaSetasHome();
        $("#sliderHome li").fadeOut(500);
        $("#sliderHome li").eq(nCliqueHome).fadeIn(500);
    });
    $("#guardaSliderHome #setaAnt").click(function(){
        nCliqueHome--;
        validaSetasHome();
        $("#sliderHome li").fadeOut(500);
        $("#sliderHome li").eq(nCliqueHome).fadeIn(500);
    });
    $("#sliderHome li").eq(0).show();
    /* / SLIDER HOME */
    
    /* ABAS CONTATO */
    $("#guardaAbas a").click(function(){
        var ind = $("#guardaAbas a").index(this);
        $("#guardaAbas a").removeClass('marcado');
        $(this).addClass('marcado');
        $(".conteudoAba").slideUp(500);
        $(".conteudoAba").eq(ind).slideDown(500);
    });
    $("#guardaAbas a").eq(0).trigger('click');
    /* / ABAS CONTATO */
    
    /* PRODUTOS */
    var qtdThumb = $("#guardaThumbs li").length;
    var nClique = 0;
    
    function validaSetas(){
        if( qtdThumb > 1 ){
            if( nClique == 0 ){
                $("#esquerdaProduto").removeClass('mostrar');
                $("#direitaProduto").addClass('mostrar');
            }else if( nClique == qtdThumb-1 ){
                $("#esquerdaProduto").addClass('mostrar');
                $("#direitaProduto").removeClass('mostrar');
            }else{
                $("#esquerdaProduto").addClass('mostrar');
                $("#direitaProduto").addClass('mostrar');
            }
        }
    }
    
    $("#imagemColecao").hover(function(){
        validaSetas();
        $(".mostrar").show();
    },function(){
        validaSetas();
        $(".mostrar").hide();
    });
    
    $("#esquerdaProduto").click(function(){
        nClique--;
        $("#guardaThumbs a").eq(nClique).trigger('click');
        validaSetas();
        $(".setas").hide();
        $(".mostrar").show();
    });
    $("#direitaProduto").click(function(){
        nClique++;
        $("#guardaThumbs a").eq(nClique).trigger('click');
        validaSetas();
        $(".setas").hide();
        $(".mostrar").show();
    });
    
    $("#guardaThumbs a").click(function(){
        $("#guardaThumbs a").removeClass("marcado");
        $(this).addClass("marcado");
        $("#imagemProdutoColecao").fadeOut(300);
        $("#imagemProdutoColecao").attr('src', $(this).find('img').attr('src').split('-thumb.jpg').join('.jpg') ).fadeIn(300);
        nClique = $("#guardaThumbs a").index(this);
        validaSetas();
    });
    $("#guardaThumbs a").eq(nClique).trigger('click');
    /* / PRODUTOS */
});