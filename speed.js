function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint) {
        console.log( "Ok");

    }
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);

        if (points >= 12){
            console.log ( " License Suspendend");}
            else{
                console.log("points", points);

            }}

    }



checkSpeed(10);

    

    
