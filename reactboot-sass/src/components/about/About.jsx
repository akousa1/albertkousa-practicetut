import React from 'react'
import { about } from '../../data/data'
import Info from './Info'
import  Heading  from "../../common/Heading"
import  Bio  from "./Bio";
import  Services  from './Services';
import  Price  from './Price';
import { Slider } from "./Slider"
export default function About() {
    return (
        <>
            <section className="about">
                <div className="container">
                    {about.map((items) => {
                        return (
                            <>
                                <div className="about-details">
                                    <Info items={items} Heading={Heading} />
                                    <Bio items={items} Heading={Heading} />
                                </div>
                                <Services items={items} Heading={Heading} />
                                <Slider items={items} Heading={Heading} />
                                <Price items={items} Heading={Heading} />
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
