var videos_mp4 = [
    './media/bg_lab.mp4',
];

var videos_webm = [
    './media/bg_lab_VP8_001.webm',
];

var posters = [
	'./media/bg_lab.webp',
];

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie(cname,cvalue) {
    var cook = getCookie(cname);
    if (cook != cvalue) {
        return true;
    } else {
        return false;
    }
}

function setBGselection() {
	var sel = document.getElementById("bg_sel").value;
	if (sel != "") {
		setCookie('bg_selection',sel,7);
		location.reload();
	}
}

function setBGtype() {
	var sel = document.getElementById("bg_typ").value;
	if (sel != "") {
		setCookie('bg_type',sel,7);
		location.reload();
	}
}


$(function(){
	$("#sidebar").load("./sidebar.html"); 
	$("#pagebar").load("./pagebar.html"); 
});

var bg_type=""
var index="";
var addition="";

bg_type = 0; //getCookie("bg_type");
index = 0; //getCookie("bg_selection");

if (bg_type == "video") {
	if (index == "" || index == "random") {
		index=Math.floor(Math.random() * videos_mp4.length);
	}
	if (index != "project_nitro") {
		addition='<video id="bgvid" muted autoplay loop><source src="' + videos_mp4[index] + '" type="video/mp4"><source src="' + videos_webm[index] + '" type="video/webm"></video>';
	}
	else {
		addition='<video id="bgvid" muted autoplay loop><source src="/media/project_nitro_bg.mp4" type="video/mp4"><source src="/media/project_nitro_bg.webm" type="video/webm"></video>';
	}
}
else {
	if (index == "" || index == "random") {
		index=Math.floor(Math.random() * posters.length);
	}
	if (index != "project_nitro") {
		addition='<style> body { background-color: #000000; background-image:url(' + posters[index] + '); background-repeat: no-repeat; background-size: 100% 100%; background-attachment: fixed; } </style>';
	}
	else {
		addition='<style> body { background-color: #000000; background-image:url(/media/project_nitro_bg.png); background-repeat: no-repeat; background-size: 100% 100%; background-attachment: fixed; } </style>';
	}
}

if(window.location.href.indexOf("project_nitro") > -1) {
	if (bg_type == "video") {
		addition='<video id="bgvid" muted autoplay loop><source src="/media/project_nitro_bg.mp4" type="video/mp4"><source src="/media/project_nitro_bg.webm" type="video/webm"></video>';
	}
	else {
		addition='<style> body { background-color: #000000; background-image:url(/media/project_nitro_bg.png); background-repeat: no-repeat; background-size: 100% 100%; background-attachment: fixed; } </style>';
	}
}

document.write(addition);
document.close(addition);