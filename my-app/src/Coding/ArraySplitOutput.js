import React from 'react'

const Challenge16 = () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.copyWithin(3, 1, -1)
    // Copy elements from index 1 to -1, and 
    // place them at index 3

    console.log(result); // c) [1,2,3,2,3]
    //reason its not [1,2,3,2,3,4] as 4 is removed
    //  as copywithin keeps same arraylength

    //arr.copyWithin(target, start, end)
    // parameters: 
    // 1. target-Index where copied elements should be 
    // placed
    // 2. start(optional): the index from which 
    // elements start to be copied (default 0)
    // 3. end(optional): index before which copying
    //  stops (default: arr.length)

    return (
        <div>

        </div>
    )
}

export default Challenge16
