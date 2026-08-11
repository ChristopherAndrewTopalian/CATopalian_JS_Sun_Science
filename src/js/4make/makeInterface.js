// makeInterface.js

function makeInterface()
{
    ba(makeTitleOfApp());

    ba(ce('hr'));

    let sunLabel = ce('div');
    sunLabel.textContent = 'Position of the Sun in the Sky';
    ba(sunLabel);

    let sunSlider = ce('input');
    sunSlider.type = 'range';
    sunSlider.id = 'sunSlider';
    sunSlider.min = 0;
    sunSlider.max = 23;
    sunSlider.value = 0;
    sunSlider.style.width = '100%';
    sunSlider.title = sunSlider.value;
    ba(sunSlider);

    ba(ce('hr'));

    // ALL WEATHER DATA AS ONE OBJECT
    let allSunDetails = ce('details');
    ba(allSunDetails);

    let allSunSummary = ce('summary');
    allSunSummary.textContent = 'ALL DATA';
    allSunSummary.onclick = function()
    {
        clickSound();
    };
    allSunDetails.append(allSunSummary);

    let sunDataDiv = ce('pre');
    sunDataDiv.style.border = 'solid 1px rgb(255, 255, 255)';
    sunDataDiv.id = 'sunDataDiv';
    sunDataDiv.style.width = '300px';
    sunDataDiv.style.height = '200px';
    sunDataDiv.style.overflowY = 'scroll';
    sunDataDiv.style.padding = '4px 8px';
    allSunDetails.append(sunDataDiv);

    //-//

    ba(ce('hr'));

    //-//

    // WEATHER DATA - PIECE BY PIECE

    let flareDetails = ce('details');
    ba(flareDetails);

    let flareSummary = ce('summary');
    flareSummary.textContent = 'X-RAY EVENTS';
    flareSummary.onclick = function()
    {
        clickSound();
    };
    flareDetails.append(flareSummary);

    let flareAndColorDiv = ce('div');
    flareAndColorDiv.id = 'flareAndColorDiv';
    flareAndColorDiv.style.display = 'flex';
    flareAndColorDiv.style.flexDirection = 'column';
    flareDetails.append(flareAndColorDiv);
    
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

