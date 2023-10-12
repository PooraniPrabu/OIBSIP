var myVideo=document.getElementById("video");

function PP(){
    if(myVideo.paused){
        myVideo.play();
    }
    else{
        myVideo.pause();

    }
}
// for screen size.

function BIG(){
    myVideo.width = 600;

}

function Normal(){
    myVideo.width = 500; 
}