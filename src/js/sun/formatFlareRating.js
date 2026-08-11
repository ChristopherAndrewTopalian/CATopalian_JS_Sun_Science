// formatFlareRating.js

function formatFlareRating(flux)
{
    if (flux <= 0)
    {
        return "---";
    }

    if (flux >= 1e-4)
    {
        return "X" + (flux / 1e-4).toFixed(2); // show 2 decimals for precision
    }

    if (flux >= 1e-5)
    {
        return "M" + (flux / 1e-5).toFixed(1);
    }

    if (flux >= 1e-6)
    {
        return "C" + (flux / 1e-6).toFixed(1);
    }

    if (flux >= 1e-7)
    {
        return "B" + (flux / 1e-7).toFixed(1);
    }

    return "A" + (flux / 1e-8).toFixed(1);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

