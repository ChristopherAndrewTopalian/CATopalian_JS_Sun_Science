// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    // get sun data
    getSunData();

    // SUN POSITION updates slider
    let now = new Date();
    let hour = now.getHours();
    ge('sunSlider').value = hour;
    ge('sunSlider').title = hour;

    // every 10 minutes get sun data
    let timer001 = setInterval(function()
    {
        try
        {
            clickSound();
        }
        catch(error)
        {
            console.log("Audio error ignored: " + error);
        }
        getSunData();
    }, 10 * 60 * 1000); // every 10 minutes

    let sunTimer = setInterval(function()
    {
        // SUN POSITION updates slider
        let now = new Date();
        let hour = now.getHours();
        ge('sunSlider').value = hour;
        ge('sunSlider').title = hour;

    }, 1 * 60 * 1000); // every 1 minute
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

