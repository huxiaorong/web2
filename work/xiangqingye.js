var pitch3 = document.getElementById("pitch3");
var pitch5 = document.getElementById("pitch5");
var pitch4 = document.getElementById("pitch4");
pitch3.onclick= function(){
	console.log("1");
	if(pitch4.innerHTML==1){
	    pitch3.setAttribute("style","color: #aca7a2;");
	    pitch5.setAttribute("style","color: #000;");
	}
	else{
	    var i =pitch4.innerHTML;
	    i--;
	    pitch4.innerHTML=i;
	    pitch3.setAttribute("style","color: #000;");
	    pitch5.setAttribute("style","color: #000;");
	    if(pitch4.innerHTML==1){
	        pitch3.setAttribute("style","color: #aca7a2;");
	        pitch5.setAttribute("style","color: #000;");
	    }
	}
    
}
pitch5.onclick= function(){
    if(pitch4.innerHTML==5){
    	pitch5.style.cursor = "not-allowed";
        pitch5.setAttribute("style","color: #aca7a2;");
        pitch3.setAttribute("style","color: #000;");
    }
    else{
        var i =pitch4.innerHTML;
        i++;
        pitch4.innerHTML=i;
        pitch5.setAttribute("style","color: #000;");
        pitch3.setAttribute("style","color: #000;");
        if(pitch4.innerHTML==5){
            pitch5.setAttribute("style","color: #aca7a2;");
        }
    }
}
var deal4 = document.getElementById('deal4');
var deal7 = document.getElementById('deal7');
console.log(deal4.firstElementChild.nextElementSibling);
console.log( deal4.lastElementChild);
deal4.firstElementChild.nextElementSibling.setAttribute("onclick","bit()");
deal4.lastElementChild.setAttribute("onclick","bit1()");
function bit(){
    console.log(1);
    deal4.firstElementChild.nextElementSibling.setAttribute("id","img1");
    if(deal4.lastElementChild.hasAttribute("id")){
        deal4.lastElementChild.removeAttribute("id");
    }
    deal7.innerHTML = '"150ml"';
}
function bit1(){
    console.log(2);
    deal4.lastElementChild.setAttribute("id","img1");
    if(deal4.firstElementChild.nextElementSibling.hasAttribute("id")){
        deal4.firstElementChild.nextElementSibling.removeAttribute("id");
    }
    deal7.innerHTML = '"200ml"';
}
window.onload=function () {
	
	var box11=document.getElementsByClassName('box11')[0];
	window.onscroll=function(){
		var st =document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			box11.style.position='fixed';
		}else{
			box11.style.position='static';
		}
	}
}
