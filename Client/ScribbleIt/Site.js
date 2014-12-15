$(document).ready(function () {
    //setInterval('swapImages()', 4000);   
});

//function swapImages()
//{       
//    var $active = $('#myGallery .active');       
//    var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery div:first');       
//    $active.fadeOut('slow', function(){       
//		$active.removeClass('active');       
//		$next.fadeIn().addClass('active');
//    });
//}

$(function () {
$('#paging img').click(function () {
    //alert("yo");
    var $active = $('#myGallery .active');
    var $next = $('#myGallery').find("#img4")
    $active.fadeOut('slow', function () {
        $active.removeClass('active');
        $next.fadeIn().addClass('active');
        });
    });
});

//$(function () {
//    $("#nextImg").click(function () {
//        selectImage($this);
//    });
//});

//function selectImage($this) {
//    var $active = $('#myGallery .active');
//    //var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery div:first');
//    var $next = $('#second .active');
//    $active.fadeOut('slow', function () {
//        $active.removeClass('active');
//        $next.fadeIn().addClass('active');
//    });
//}

//My dialog jQuery UI function, to collect the user's info
$(function () {
    $("#openNotify").click(function () {
        $("#dialog").dialog("open");
    });

    $("#dialog").dialog({
        autoOpen: false,
        buttons: {
            Submit: function () {
                var fName = $("#firstName").val();
                var lName = $("#lastName").val();
                var mail = $("#email").val();

                var emailCool = validateEmail(mail);
                var fNameCool = validateEmpty(fName);
                var lNameCool = validateEmpty(lName)

                if (!emailCool) {
                    $("#emailWarn").removeClass("error").addClass("error_show");
                }
                else{$("#emailWarn").addClass("error");}

                if (!fNameCool) {
                    $("#fNameWarn").removeClass("error").addClass("error_show");
                }
                else{$("#fNameWarn").addClass("error");}

                if (!lNameCool) {
                    $("#lNameWarn").removeClass("error").addClass("error_show");
                }
                else{$("#lNameWarn").addClass("error");}

                if(emailCool && fNameCool && lNameCool) {
                        var userInfo = { firstName: fName, lastName: lName, email: mail };

                        $.ajax({
                            type: "POST",
                            data: JSON.stringify(userInfo),
                            url: "http://localhost:49444/api/User",
                            contentType: "application/json"
                        });

                       alert("Thanks " + fName + " " + lName + ", we'll notify you to the email: " + mail);
                       $(this).dialog("close");
                    }
               
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        }
    });

});

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test($email) || $email.length<1) {
        return false;
    } else {
        return true;
    }
}

function validateEmpty($name) {
    if ($name.length < 1) {
        return false;
    } else {
        return true;
    }
}