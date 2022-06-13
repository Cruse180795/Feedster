$(document).ready(() => {
	

    function handleNavMenu(){

        const $navMenu = $('.nav-menu');
        const $menu = $('.menu');

        $menu.on('mouseover', () =>{
            $navMenu.show();
        });
    
        $navMenu.on('mouseleave', () =>{
            $navMenu.hide();
        });
    }

    function buttonHover(){
        const $btn = $('.btn');

        $btn.on('mouseover', (event) =>{
            $(event.currentTarget).addClass('btn-hover');
        }).on('mouseleave', (event) =>{
            $(event.currentTarget).removeClass('btn-hover');
        });
    }

    function limitWordCount(){
        const $postText = $('.postText');
        
        $postText.on('keyup', (event) =>{
            const post = $(event.currentTarget).val();
            const charactersRemaining = 140 - post.length;
            const $wordCount = $('.wordcount');

            if(charactersRemaining <=0){
                $wordCount.addClass('red');
                
            }
            else{
                $wordCount.removeClass('red');
            }

            $postText.focus();
            $('.characters').html(charactersRemaining);
        })
    }

    handleNavMenu();
    buttonHover();
    limitWordCount()

}); 