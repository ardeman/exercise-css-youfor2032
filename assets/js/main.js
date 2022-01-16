$(document).ready(() => {
    $(".slides").slick({
        dots: true,
        slidesToShow: 7,
        infinite: false,
        responsive:[
            {
                breakpoint: 1536,
                settings:{
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 1280,
                settings:{
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 376,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    });
});
