import React, { useEffect, useRef, useState } from 'react'

// const useDebounce = (text, delay) => {
//     const [debounced, setDebounced] = useState(text);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setDebounced(text)
//         }, delay);

//         return () => {
//             clearTimeout(timer)
//         }
//     }, [text, delay]);
//     return debounced;
// }

const Interview3 = ({ maxLength = 10 }) => {
    // const fruits = [
    //     "Apple",
    //     "Apricot",
    //     "Banana",
    //     "BlueBerry",
    //     "Cherry",
    //     "Date",
    //     "Dragonfruit",
    //     "Elderberry",
    //     "fig",
    //     "grape",
    //     "grapefruit"
    // ];
    // const [searchFruitValue, setSearchFruitValue] = useState("");
    // const [fruitsData, setFruitsData] = useState(fruits);
    // const filteredFruitsData = fruitsData.filter(
    //     (fruit) => fruit.toLocaleLowerCase().includes(searchFruitValue)
    // )
    // console.log(searchFruitValue)

    // const [text, setText] = useState("");
    // const debouncedText = useDebounce(text, 1000);
    const [input, changeInput] = useState("");
    const inputRef = useRef(null);
    const carretPositionRef = useRef(0);

    const inputChange = (e) => {
        const target = e.target;
        const currentValue = target.value;
        const selectionStart = target.selectionStart;
        const numbers = currentValue.replace(/[^0-9]/g, "");
        const size = numbers.length;
        if (size > maxLength) return;

        const formattedValue = [];
        for (let i = 0; i < size; i++) {
            if (size > 3 && i === 0) {
                formattedValue.push("{");
            }

            formattedValue.push(numbers[i]);

            if (size > 6 && i === 5) {
                formattedValue.push("-")
            }

            if (size > 3 && i === 2) {
                formattedValue.push("}")
            }
        }
        const diff = formattedValue.length = currentValue.length;
        if (selectionStart) {
            carretPositionRef.current = selectionStart + diff;
        }

        changeInput(formattedValue.join(""));
    };

    useEffect(() => {
        if (!inputRef.current) {
            inputRef.current.setSelectionRange(
                carretPositionRef.current,
                carretPositionRef.current
            )
        }
    }, [input])

    return (
        <div>
            {/* 1. Map elements and desplay all as H1 */}
            {/* {fruits.map((fruit) => {
                return (
                    <h1>{fruit}</h1>
                )
            })} */}

            {/* 2.Using Input below, make the search 
            display list of fruits based on what was typed */}
            {/* <input
                type="text"
                placeholder='Search here...'
                value={searchFruitValue}
                onChange={(e) => { setSearchFruitValue(e.target.value) }}
            />

            {filteredFruitsData.map((fruit, index) => {
                return (
                    <div key={index}>
                        <h1>{fruit}</h1>
                    </div>
                )
            })
            } */}

            {/* 3. UseDebounce to make text input appear 1 second after typed */}
            {/* <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Type Something'
                style={{ marginRight: "10px" }}
            />
            <p>Debounced Value: {debouncedText}</p> */}

            {/* 4.Create Phone number input component handling user input into phone numbers */}
            <input
                value={input}
                onChange={inputChange}
                ref={inputRef}
                data-testid="phone-number-input"
            />
        </div>
    )
}
export const ThirdQuestion = () => {
    return(
    <div>
        <Interview3 maxLength={10}/>
    </div>
    )
}

export default Interview3
