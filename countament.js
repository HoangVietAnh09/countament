let cnt = document.getElementById("countLabel").textContent;
cnt = Number(cnt);
document.getElementById("increaseBtn").onclick = function(){
    cnt += 1;
    document.getElementById("countLabel").textContent = cnt;
}
document.getElementById("resetBtn").onclick = function(){
    cnt = 0;
    document.getElementById("countLabel").textContent = cnt;
}
document.getElementById("decreaseBtn").onclick = function(){
    if(cnt !== 0){
        cnt -= 1;
        document.getElementById("countLabel").textContent = cnt;
    }
   
}

