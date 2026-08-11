// getSunData.js

// Keep track of the latest timestamp we have drawn on screen
let lastSeenTime = "";

function getSunData()
{
    let url = 'https://services.swpc.noaa.gov/json/goes/primary/xrays-6-hour.json';

    fetch(url)
        .then(function(response)
        {
            return response.json();
        })
        .then(function(sun_data)
        {
            // Update raw json container
            ge('sunDataDiv').textContent = JSON.stringify(sun_data, null, 2);

            for (let x = 0; x < sun_data.length; x++)
            {
                let entryTime = sun_data[x].time_tag;
                let energyBand = sun_data[x].energy;

                // ONLY process the official Long Band (0.1-0.8nm) AND check our deduplicator
                if (energyBand === '0.1-0.8nm' && entryTime > lastSeenTime)
                {
                    let fluxConversion = formatFlareRating(sun_data[x].flux);
                    let flareColor = getFlareColor(sun_data[x].flux);

                    let flareAndTime = {
                        magnitude: fluxConversion,
                        time: entryTime,
                        color: flareColor
                    };

                    flaresArray.push(flareAndTime);

                    let entry = ce('div');
                    entry.textContent = fluxConversion + ' - (' + entryTime + ')';
                    entry.style.color = flareColor;

                    ge('flareAndColorDiv').append(entry);

                    // Update our tracker
                    lastSeenTime = entryTime;
                }
            }
        })
        .catch(function(error)
        {
            console.log("Fetch error: " + error);
        });
}

/*

function getSunDataWithClear()
{
    let url = 'https://services.swpc.noaa.gov/json/goes/primary/xrays-6-hour.json';

    fetch(url)
        .then(function(response)
        {
            return response.json();
        })
        .then(function(sun_data)
        {
            // Update the raw JSON text area
            ge('sunDataDiv').textContent = JSON.stringify(sun_data, null, 2);

            let flaresArray = [];

            // Wipe the display div clean before appending new data
            if (ge('flareAndColorDiv'))
            {
                ge('flareAndColorDiv').textContent = ''; 
            }

            for (let x = 0; x < sun_data.length; x++)
            {
                let fluxConversion = formatFlareRating(sun_data[x].flux);
                let flareColor = getFlareColor(sun_data[x].flux);

                let flareAndTime = {
                    magnitude: fluxConversion,
                    time: sun_data[x].time_tag,
                    color: flareColor
                };

                flaresArray.push(flareAndTime);

                let entry = ce('div');
                entry.textContent = fluxConversion + ' - (' + sun_data[x].time_tag + ')';
                entry.style.color = flareColor;

                // Because we cleared the div above, this will now start fresh at the top
                ge('flareAndColorDiv').append(entry);
            }
            
            // Update the array display
            ge('flareDataDiv').textContent = JSON.stringify(flaresArray, null, 2);
        })
        .catch(function(error)
        {
            console.log("Failed to fetch sun data: " + error);
        });
}

*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

