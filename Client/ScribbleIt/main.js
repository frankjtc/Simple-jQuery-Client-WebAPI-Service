$(document).ready(function () {
    setInterval('swapImages()', 5000);   
});

function swapImages()
{       
    var $active = $('#myGallery .active');       
    var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery div:first');

    var $index = $active.index();
    var $activePage = $('#paging img').eq($index);
    var $nextPage = ($active.next().length > 0) ? $('#paging img').eq($index + 1) : $('#paging img').eq(0);

    $active.fadeOut('slow', function(){       
		$active.removeClass('active');       
		$next.fadeIn().addClass('active');
		$activePage.attr("src", "images/paging.png");
		$nextPage.attr("src", "images/paging_selected.png");
    });     
}

$(function() {
    $("#paging img").click(function () {
        var $index = $('#paging img').index(this);
        var $activeImg = $('#myGallery .active');
        var $selectedImg = $('#myGallery div').eq($index);
        var $activePage = $('#paging img');
        var $selectedPage = $('#paging img').eq($index);
       
        $activeImg.fadeOut('slow', function () {
            $activeImg.removeClass('active');
            $selectedImg.fadeIn().addClass('active');
            $activePage.attr("src", "images/paging.png");
            $selectedPage.attr("src", "images/paging_selected.png");
        });

    });
});