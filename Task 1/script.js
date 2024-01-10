function getloc(){
    navigator.geolocation.watchPosition(showposition,handleError,options);
}

function showposition(position){
    // console.log(position);
    let lat = position.coords.latitude ;
    let long = position.coords.longitude ;
    // console.log(lat,long);
    location.assign("https://maps.google.com/maps?q=" + lat + ",+" + long);
    
}

function handleError(x){
    switch(x){
        case 0 :
            console.log("unknown error" + x.message);
            break;
        case 1 :
            console.log("permission denied" + x.message);
            break;
        case 2 :
            console.log("position unavailable" + x.message);
            break;
        case 3 :
            console.log("Time out" + x.message);
            break;    
    }
}

let options = {
    enablehighAccuracy : false,
    timeout : Infinity,
}

function clearpos(){
    navigator.geolocation.clearWatch();
}
 // method
function openwind(){
    win = open('./page1.html', "", 'width = 100 , height = 100');
    win.focus();
}