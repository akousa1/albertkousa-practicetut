import React from 'react'

const Interview2 = () => {
    // var a = 12;
    // console.log(a * 12); //144 as 12 * 12
    // console.log(a ** 12);//8916100448256 as 12^12

    // function hello(){
    //    console.log(hello.abc)
    // }
    // hello(); //undefined as hello.abc has not been set any value

    // hello.abc = 400;
    // hello.abc= 600;

    // hello(); //600 as hello.abc has set the most recent value of 600

    // console.log({} == {})// false since JavaScript compares objects by reference, not value.
    // console.log({} === {})// false since JavaScript compares objects by reference, not value.

    // let a = {
    //     name: "Albert"
    // }
    // let b = {
    //     ...a
    // }
    // b.name = "Kousa";

    // console.log(a.name)// Albert as b creates
    //  a shallow copy of a but b.name is 
    // separate object hence a.name will stay
    //  the same. 

    // let a = 10;

    // let b = new Number(10);

    // let c = 10;

    // console.log(a === b)// false as "new" will make b into object hence types are different
    // console.log(b === c)// false as "new" will make b into object hence types are different

    // function test(record) {
    //     if (record == { age: 28 }) {
    //         console.log("youre an adult")
    //     }
    //     else if (record === { age: 28 }) {
    //         console.log("youre still an adult")
    //     }
    //     else {
    //         console.log("no record")
    //     }
    // }
    // test({ age: 28 })//no record as both will
    //  be false comparing via reference 
    // not value as objects do are always
    //  different

    // console.log(+true) //1 as + will convert to integer
    // console.log(!"hi") //false

    // var a ={};
    // var b= {key:"b"}
    // var c= {key:"c"}

    // a[b] = 600;
    // b[c] = 700;
    // b[b] = 400; // if we add this it will be 600, 600, 400, 400


    // console.log("1",a[c]); // 600 as we have already set a[object] as 600
    // console.log("2",a[b]); //600 as thats value already shown
    // console.log("3",b[b]); //700 as b[object] is already 700 hence will stay the same
    // console.log("4",b[c]); // 700

    let str = "abcdef";
    let str2 = 123;
    // Convert str2 to a string
    let numStr = str2.toString();
    // Create the merged output
    let result = "";
    let i = 0, j = 0;

    // Merge the characters from both strings
    while (i < str.length || j < numStr.length) {
        if (i < str.length) result += str[i++];
        if (j < numStr.length) result += numStr[j++];
    }

    console.log(result); // Output: "a1b2c3def"


    //str = abc
    //str2 = 123456

    return (
        <div>

        </div>
    )
}

export default Interview2
