// getFlareColor.js

// THE COLOR HELPER (The Artist)
function getFlareColor(flux)
{
    if (flux >= 1e-4)
    {
        // X-Class (Danger)
        return "red";
    }
    
    if (flux >= 1e-5)
    {
        // M-Class (Warning)
        return "orange";
    }
    
    if (flux >= 1e-6)
    {
        // C-Class (Active)
        return "yellow";
    }
    
    // B/A-Class (Quiet)
    return "lime";
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

