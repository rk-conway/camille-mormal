const track=document.querySelector('.image-track');

window.onmousedown=(e)=>{
    // console.log(e);
    track.dataset.mouseDownAt=e.clientX;
    
}
window.onmouseup=()=>{
    track.dataset.mouseDownAt="0";
    track.dataset.prevPercentage=track.dataset.percentage;
    // console.log(track.dataset.prevPercentage,track.dataset.percentage);
}

window.onmousemove=e=>{
    if(track.dataset.mouseDownAt==="0") return;
    const mouseDelta=parseFloat(track.dataset.mouseDownAt) - e.clientX;
    let maxDelta=window.innerWidth/2;
    const percentage=(mouseDelta/maxDelta)*-100;
    const nextPercentage=parseFloat(track.dataset.prevPercentage)+percentage;
    track.dataset.percentage=nextPercentage;
    // Math.max(nextPercentage,0);
    // Math.max(nextPercentage,-100);
    // if(nextPercentage>-100 && nextPercentage<0){
    //     track.style.transform=`translate(${nextPercentage}%, -50%)`;
    // }
        // track.style.transform=`translate(${nextPercentage}%, -50%)`;
        track.animate({
            transform:`translate(${nextPercentage}%, -50%)`
        },{duration: 1200, fill:"forwards"})

        for(const image of track.getElementsByTagName("img")){
            // image.style.objectPosition=`${nextPercentage+100}%  50%`;
            image.animate({
                objectPosition: `${nextPercentage+100}%  50%`
            },{duration:1200, fill: "forwards"})
        }
}