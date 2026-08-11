import React from 'react'

const Challenge10 = () => {
    let place = "US";
    let department = { [getStudentPlace()]: "India", [place + "Department"]: "English", standard: 100 };
    function getStudentPlace() { return place; };
    let divisions = "standard";

    let { [getStudentPlace()]: placeDetails, [place + "Department"]: departmentDetails,
        [divisions]: standard } = department;
    console.log(placeDetails + "&" + departmentDetails + "&" + standard);

    //My Answer: US & English & 100
    //Actual Answer: India & English & 100
    
    //Reason: whatever is stored in the Key section of array
    //  is set in details sections (placeDetails,
    // departmentDetails, etc.. hence its India & English 
    // & 100)
    return (
        <div>

        </div>
    )
}

export default Challenge10
