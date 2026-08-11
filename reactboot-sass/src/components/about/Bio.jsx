import React from 'react'

export default function Bio({ items, Heading }) {
    return (
        <>
            <Heading title="Short Bio" />
            <div className="about_details-bio">
                {items.bio.map((val)=>(
                    <>
                        <div className="about_details_bio_box">
                            <div className="about-details_bio_box_item">
                                <p>{val.para1}</p>
                            </div>
                            <div className="about-details_bio_box_item">
                                <p>{val.para2}</p>
                            </div>
                            <div className="about-details_bio_box_item">
                                <p>{val.para3}</p>
                            </div>
                            <div className="about-details_bio_box_item">
                                <img src={val.images} alt='About'>{val.image}</img>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
