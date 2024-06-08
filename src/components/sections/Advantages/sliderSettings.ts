export const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1.05,
     
          }
        },
        {
            breakpoint: 610,
            settings: {
              slidesToShow: 1.4,
       
            }
          },
          {
            breakpoint: 790,
            settings: {
              slidesToShow: 2.04,
       
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2.3,
       
            },
            
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3.05,
       
            },
            
          },
          {
            breakpoint: 1536,
            settings: {
              slidesToShow: 4.05,
       
            },
            
          },
    ]  
  };