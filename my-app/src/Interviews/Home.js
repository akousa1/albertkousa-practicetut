import React, { useEffect, useState } from 'react'

async function getVehicleTypes() {
    return new Promise((resolve, reject) => {
        resolve([
            { id: 1, label: "Car" },
            { id: 2, label: "Truck" },
            { id: 3, label: "Bus" },

        ])
    })
}

const Home = () => {
    const [spoint, setSpoint] = useState("");
    const [destinationList, setDestinationList] = useState([{
        id: String(Math.random()), //uuid
        value: ""
    }]);
    const [vehicleType, setVehicleType] = useState("");
    const [vehicleTypeList, setVehicleTypeList] = useState([]);
    const [expenseName, setExpenseName] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        getVehicleTypes().then((vehicleTypes) => {
            setVehicleTypeList(vehicleTypes);
        });
    }, []);

    function handleAmount(e) {
        e.preventDefault()
        setTotalAmount(destinationList.length * 250 + (Math.random() *1000))
    }


    const onAddDestination = () => {
        setDestinationList([
            ...destinationList,
            { id: String(Math.random()), value: "" }
        ]);
    };

    console.log(vehicleTypeList);
    useEffect(() => {
        setExpenseName("Travel from " + spoint + " - " + destinationList.map((dest) => dest.value).join(" - "));
    }, [spoint, destinationList, vehicleTypeList, expenseName])
    return (
        <div>
            <h1>Travel Cost Calculation</h1>
            <form onSubmit={handleAmount}>
                <div>
                    <label htmlFor='starting_point'>Starting Point</label>
                    <br />
                    <input
                        type="text"
                        name="starting_point"
                        placeholder='Berlin'
                        value={spoint}
                        onChange={(e) => setSpoint(e.target.value)}
                    />
                </div>
                {destinationList.map((destination) => {
                    const onChange = (e) => {
                        const destinationIndex = destinationList.findIndex((dest) => dest.id === destination.id);
                        const newDestination = {
                            ...destination,
                            value: e.target.value
                        };
                        const newDestinationList = [...destinationList];
                        newDestinationList[destinationIndex] = newDestination;
                        setDestinationList(newDestinationList);
                    };


                    return (
                        <div key={destination.id}>
                            <label htmlFor={`destination-${destination.id}`}>Destination</label>
                            <br />
                            <input
                                type="text"
                                name={`destination-${destination.id}`}
                                placeholder='London'
                                value={destination.value}
                                onChange={onChange}
                            />
                        </div>
                    );
                })}

                <button onClick={onAddDestination} type='button'>+ Add Additional Destination</button>
                <div>
                    <label htmlFor='Vehicle Type'>Vehicle Type</label>
                    <br />
                    <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                        {vehicleTypeList.map((vehicleType) => {
                            return (<option key={vehicleType.id} value={vehicleType.label}>{vehicleType.label}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="expense_name">Expense Name</label>
                    <br />
                    <input
                        type="text"
                        placeholder=''
                        name='expense_name'
                        value={expenseName}
                    />
                </div>
                <div>
                    <p>Total Amount: ${totalAmount}</p>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Home;
