// This is a JavaScript file
/*----------------------------------------------------------------------------------------------------

contactListはオブジェクト

アカウントはそれぞれ
UserName : useName
Phone Number : phone
Mail Address : mail
LINE ID : line
twitter ID : twitter
facebook ID : facebook
instagram ID : instagram
で保存されています

ex) var contactList = JSON.parse(localStorage.getItem("contactList"));
    console.log(contactList.phone);

----------------------------------------------------------------------------------------------------*/
$(function(){
    $(document).on('ready', function(){
        //alert("準備完了");
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        if(contactList == null) {
            contactList = new Object();
            contactList.userName = null;
            contactList.phone = null;
            contactList.mail = null;
            contactList.line = null;
            contactList.twitter = null;
            contactList.facebook = null;
            contactList.instagram = null;
            localStorage.setItem("contactList", JSON.stringify(contactList));
        }
        if(contactList.userName) {
            $('.user-infomation').children('p').text(contactList.userName);
            $('#user-name-text').attr('placeholder', contactList.userName);
            $('.user-infomation').css('color', 'black');
        } else {
            $('#user-name-text').attr('placeholder', 'ユーザ名は必須項目です');
        }
        if(contactList.phone) {
            $('#phone-text').attr('placeholder', contactList.phone);
        }
        if(contactList.mail) {
            $('#mail-text').attr('placeholder', contactList.mail);
        }
        if(contactList.line) {
            $('#line-text').attr('placeholder', contactList.line);
        }
        if(contactList.twitter) {
            $('#twitter-text').attr('placeholder', contactList.twitter);
        }
        if(contactList.facebook) {
            $('facebook-text').attr('placeholder', contactList.facebook);
        }
        if(contactList.instagram) {
            $('#instagram-text').attr('placeholder', contactList.instagram);
        }
    });
});

function userNameEdit(){
    console.log($('#user-name-text').val());
    if($('#user-name-text').val() != ""){
        alert($('#user-name-text').val());
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        contactList.userName = $('#user-name-text').val();
        localStorage.setItem("contactList", JSON.stringify(contactList));
        document.querySelector('#navigator').popPage();
    }
}
function phoneEdit(){
    console.log($('#phone-text').val());
    if($('#phone-text').val() != ""){
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        contactList.phone = $('#phone-text').val();
        localStorage.setItem("contactList", JSON.stringify(contactList));
        document.querySelector('#navigator').popPage();
    }
}
function mailEdit(){
    console.log($('#mail-text').val());
    if($('#mail-text').val() != ""){
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        contactList.mail = $('#mail-text').val();
        localStorage.setItem("contactList", JSON.stringify(contactList));
        document.querySelector('#navigator').popPage();
    }
}
function lineEdit(){
    console.log($('#line-text').val());
    if($('#line-text').val() != ""){
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        contactList.line = $('#line-text').val();
        localStorage.setItem("contactList", JSON.stringify(contactList));
        document.querySelector('#navigator').popPage();
    }
}
function twitterEdit(){
    console.log($('#twitter-text').val());
    if($('#twitter-text').val() != ""){
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        contactList.twitter = $('#twitter-text').val();
        localStorage.setItem("contactList", JSON.stringify(contactList));
        document.querySelector('#navigator').popPage();
    }
}
function facebookEdit(){
    console.log($('#facebook-text').val());
    if($('#facebook-text').val() != ""){
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        contactList.facebook = $('#facebook-text').val();
        localStorage.setItem("contactList", JSON.stringify(contactList));
        document.querySelector('#navigator').popPage();
    }
}
function instagramEdit(){
    console.log($('#instagram-text').val());
    if($('#instagram-text').val() != ""){
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        contactList.instagram = $('#instagram-text').val();
        localStorage.setItem("contactList", JSON.stringify(contactList));
        document.querySelector('#navigator').popPage();
    }
}

/*ons.ready(function(){
    nav.on("postpush",function(e){
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        if(contactList.phone) {
            alert(contactList.phone);
            $('#phone').attr('placeholder', contactList.phone);
        }
    });
    $(function(){
        $(document).on('ready', function(){
            var contactList = JSON.parse(localStorage.getItem("contactList"));
            if(contactList.phone) {
                alert(contactList.phone);
                $('input').attr('placeholder', contactList.phone);
            }
            if(contactList.mail) {
                $('#mail-text').attr('placeholder', contactList.mail);
            }
            if(contactList.line) {
                $('#line-text').attr('placeholder', contactList.line);
            }
            if(contactList.twitter) {
                $('#twitter-text').attr('placeholder', contactList.twitter);
            }
            if(contactList.facebook) {
                $('facebook-text').attr('placeholder', contactList.facebook);
            }
            if(contactList.instagram) {
                $('#instagram-text').attr('placeholder', contactList.instagram);
            }
        });
    }); 
})*/