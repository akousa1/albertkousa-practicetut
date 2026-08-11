import React, { useState, useEffect } from "react";
// import { useGettUsersQuery } from "../services/users";
import { FaRegUser, FaMapMarkedAlt } from "react-icons/fa";
import {
    BsEnvelope,
    BsCalendar2Range,
    BsTelephone,
    BsLock,
} from "react-icons/bs";

const UsersComp = () => {
    const [person, setPerson] = useState("Mary");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("I am");
    const defaultImage = "https://randomuser.me/api/portraits/women/65.jpg";
    // const { data, isLoading, refetch } = useGettUsersQuery();

    // useEffect(() => {
    //     if (data) {
    //         const randomPerson = data.results[0];
    //         const { phone, email } = randomPerson;
    //         const { large: image } = randomPerson.picture;
    //         const { password } = randomPerson.login;
    //         const { first, last } = randomPerson.name;
    //         const {
    //             dob: { age },
    //         } = randomPerson;
    //         const {
    //             street: { number, name },
    //         } = randomPerson.location;
    //         const newPerson = {
    //             phone,
    //             email,
    //             image,
    //             password,
    //             age,
    //             street: `${number} ${name}`,
    //             name: `${first} ${last}`
    //         };
    //         setPerson(newPerson);
    //         setTitle("Name");
    //         setValue(newPerson.name);
    //     }
    // }, [data]);

    const handleValue = (e) => {
        if (e.target.classList.contains("icon")) {
            const newValue = e.target.dataset.label;
            setTitle(newValue);
            setValue(person[newValue]);
        }
    };
    return (
        <>
            <div className="container">
                <div className="card-container">
                    <div className="card-mage-container">
                        <img
                            src={(person && person.image) || defaultImage}
                            alt="defaultvalueImage"
                        />
                    </div>
                    <div className="card-button">
                        <h4>My {title}</h4>
                        <h1>{value}</h1>
                        <button className="icon" data-label="name" onMouseOver={handleValue}
                        >
                            <FaRegUser size={30} />
                        </button>
                        <button className="icon" data-label="email" onMouseOver={handleValue}>
                            <BsEnvelope size={30} />
                        </button>
                        <button className="icon" data-label="age" onMouseOver={handleValue}>
                            <BsCalendar2Range size={30} />
                        </button>
                        <button className="icon" data-label="street" onMouseOver={handleValue}>
                            <FaMapMarkedAlt size={30} />
                        </button>
                        <button className="icon" data-label="phone" onMouseOver={handleValue}>
                            <BsTelephone size={30} />
                        </button>
                        <button
                            className="icon"
                            data-label="password"
                            onMouseOver={handleValue}
                        >
                            <BsLock size={30} />
                        </button>
                        <button className="random=btn" >
                            Random User
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersComp
