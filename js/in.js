
$(function(){

var kolor = '#1543ad';

        setTimeout(function() {
            $('#load').hide();
            $('#main').removeClass("cos");
                }, 1200);
        
        
           $(function () {
            $('#mycp').colorpicker();
            
            });

            $('.niebieski').click(function(){
                $('#widok3').hide();
                $('html').addClass('niebieski');
                $('#divx').toggleClass('togglex');
                // $('html').addClass('animated jello');
                $(document).toggleFullScreen();
        
            });

            $('.zielony').click(function(){
                $('#widok3').hide();
                $('html').addClass('zielony');
                $('#divx').toggleClass('togglex');
                // $('html').addClass('animated jello');
                $(document).toggleFullScreen();
        
            });

            $('.czerwony').click(function(){
                $('#widok3').hide();
                $('html').addClass('czerwony');
                $('#divx').toggleClass('togglex');
                // $('html').addClass('animated jello');
                $(document).toggleFullScreen();
        
            });

            $('.zolty').click(function(){
                $('#widok3').hide();
                $('html').addClass('zolty');
                $('#divx').toggleClass('togglex');
                // $('html').addClass('animated jello');
                $(document).toggleFullScreen();
        
            });

            $('.bialy').click(function(){
                $('#widok3').hide();
                $('html').addClass('bialy');
                $('#divx').toggleClass('togglex');
                // $('html').addClass('animated jello');
                $(document).toggleFullScreen();
        
            });

            $('.czarny').click(function(){
                $('#widok3').hide();
                $('html').addClass('czarny');
                $('#divx').toggleClass('togglex');
                // $('html').addClass('animated jello');
                $(document).toggleFullScreen();
        
            });

            $('.szary').click(function(){
                $('#widok3').hide();
                $('html').addClass('szary');
                $('#divx').toggleClass('togglex');
                // $('html').addClass('animated jello');
                $(document).toggleFullScreen();
        
            });

            $('.brazowy').click(function(){
                $('#widok3').hide();
                $('html').addClass('brazowy');
                $('#divx').toggleClass('togglex');
                // $('html').addClass('animated jello');
                $(document).toggleFullScreen();
        
            });

            $('#closebtn').on("click", function(){
                $('#widok3').show();
                $('html').removeClass();
                $('#divx').addClass('togglex');
                $(document).toggleFullScreen();
                
            });

      
});