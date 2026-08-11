import React, { useEffect } from 'react';

const PromisesOutput = () => {
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            resolve('resolve');
            reject('reject'); // Not called
        });

        const res = promise
            .then(result => console.log('fulfilled ' + result))
            .catch(error => console.log('error ' + error));

        console.log(res); // Will log: Promise { <pending> } initially
        // then fulfilled resolve
    }, []);

    return <div></div>;
};

export default PromisesOutput;
