$(document).ready(function() {
    //ProgressBar
    $('.progressbar2_1').animate({ width: '60%' }, 1500);
    $('.progressbar2_2').animate({ width: '65%' }, 1500);
    $('.progressbar2_3').animate({ width: '80%' }, 1500);
    $('.progressbar2_4').animate({ width: '60%' }, 1500);

    $('.muctieunghenghiep #muctieunghenghiep').click(function() {
        $('.muctieunghenghiep .infottnn').slideToggle();
    });

    $('#kynang').click(function() {
        $('.kynang #infokynang').slideToggle();
    });

    $('.sothich #sothich').click(function() {
        $('.sothich .infosothich').slideToggle();
    });

    $('.hocvan #hocvan').click(function() {
        $('.hocvan .infohocvan').slideToggle();
    });

    $('.project #project').click(function() {
        $('.project .infoproject').slideToggle();
    });

    $('.chungnhan #chungnhan').click(function() {
        $('.chungnhan .infochungnhan').slideToggle();
    });

    $('.hoatdong #hoatdong').click(function() {
        $('.hoatdong .infohoatdong').slideToggle();
    });

    $('.aboutme #aboutme').click(function() {
        $('.aboutme .infoaboutme').slideToggle();
    });
});