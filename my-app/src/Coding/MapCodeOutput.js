import React from 'react'

const MapCodeOutput = () => {
    const mapData = new Map();
    mapData['name'] = 'Test';
    // console.log(mapData) //Map[0] {name: 'Test', size: 0}
    // this is 0 as this way of setting property doesnt 
    // interact with Map Data Structure
    
    mapData.set('subject', 'Javascript')
    // console.log(mapData) //Map(1) {'subject' => 'Javascript'}
    //will update map size to 1 as this is the correct way 
    // of setting the mapdata

    console.log(mapData.has('name')); //false
    console.log(mapData.has('subject')); //true
    console.log(mapData.size) //1

    //True, True, 2
    //False, True, 1 =>correct answer
    //True, False, 1
    //False, False, 0

    //Map Object hold key-value pairs and remembers the 
    // original insertion order of the keys. Any value may be
    //  used as used as a key or value.

    //key in map may only occur once
    return (
        <div>

        </div>
    )
}

export default MapCodeOutput
