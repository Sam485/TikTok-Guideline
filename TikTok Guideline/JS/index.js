let clear=document.getElementById("check");
let clear1=document.getElementById("check1");
let text=document.getElementById("Reviews");
var Para;

function Clear(){
    clear.remove();
    clear1.remove();
}

let ck=document.getElementById("check").onclick=function btn(){
        text.textContent="សូមអរគុណចំពោះការគាំទ្ររបស់អ្នក។!😊";
        Clear();
}

let ck1=document.getElementById("check1").onclick=function btn1(){
    text.textContent="ជ្រើសរើសម្តងទៀត!🤬";
}
