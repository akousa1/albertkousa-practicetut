import React from 'react'
import sideImg from "../../images/side.jpg"
import { side, socialIcon } from '../../data/data'
import { FiDownloadCloud } from 'react-icons/fi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const Progress = ({ done, title, back }) => {
    return (
        <div className="progress">
            <div
                className={`progress_done ${back}`}
                style={{ opacity: 1, width: `${done}%` }}>
            </div>
            <div className="progress_num">
                <h4>{done}.</h4>
            </div>
            <div className="progress_title">
                <h4>{title}.</h4>
            </div>
        </div>
    )
}

export default function SideContent() {
    return (
        <section className='sideContent'>
            <div className="sideContent_top">
                <div className="sidecontent_top_img">
                    <img src={sideImg} alt="Profile" />
                    <h3>Linda M. Bellamy</h3>
                    <span>Sr. Developer</span>
                </div>
            </div>
            <div className="sidecontent_top_social">
                {socialIcon.map((icons) => {
                    return (
                        <div className={icons.class}>
                            <span>{icons.icon}</span>
                        </div>
                    )
                })}
            </div>
            <div className="sidecontent_bottom">
                <div className="sidecontent_bottom_skill">
                    {side.map((item) => {
                        return (
                            <div className="sideContent_skill_box">
                                <Progress title={item.text} done={item.num} back={item.class} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="sidecontent_button_buttonGroup">
                <button className="sm_button">
                    <span>
                        <FiDownloadCloud className='button_bicon' />
                    </span>
                </button>
                <button className="button">
                    <span>
                        <RiMoneyDollarCircleLine className='button_bicon' />
                        <span>HIRE ME</span>
                    </span>
                </button>
            </div>
        </section>
    )
}
