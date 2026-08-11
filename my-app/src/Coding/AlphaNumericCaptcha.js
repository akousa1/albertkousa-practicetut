import React from 'react'

const Challenge6 = () => {
    //Question: Generate Random AlphaNumeric captcha using
    //  Javascript
    function generateRandom() {
        const chars = "0123456789ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let strlength = 7;

        let result = '';

        for (let i=0; i<strlength; i++){
            let randNum = Math.floor(Math.random() * chars.length);

            result += chars.substring(randNum, randNum +1)
        } 
        //this will loop 7 times picking 7 random characters in 
        // a new created string in a random order so every time
        //  function called, a new combination will appear

        document.getElementById('randomStr').innerHTML = result;
    }
    return (
        <div>
            <button onClick={generateRandom}>Click for string</button>
            <h1 id='randomStr'/>
        </div>
    )
}

export default Challenge6
