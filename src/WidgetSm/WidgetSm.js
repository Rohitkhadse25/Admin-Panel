import "./WidgetSm.css"
import React from 'react'
import {Visibility} from '@mui/icons-material';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
            New Join Member</span>
            <ul className="widgetSmList">
            <li className="widgetSmListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC927v3KL6U4GXYccs-1O3t2fk5Bh82AW7YS_YweJ2155piBfAGv8ALuUrscI6bUQ3Cqk&usqp=CAU" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
            <span className="widgetSmUserName">Christian ronaldo</span>
            <span className="widgetSmUSerTitle">Software developer</span>
            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>Display
            </button>
            </li>
            <li className="widgetSmListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydf8x6usY0wKoZsxVSuDy7s4b1IadzhPnuq5AFp65LJT5P0cSF8Q1lxzja19yasIctXM&usqp=CAU" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
            <span className="widgetSmUserName">Messy</span>
            <span className="widgetSmUSerTitle">Software developer</span>
            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>Display
            </button>
            </li>
            <li className="widgetSmListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRjANjFgytHoUo9AcKt2EUgfFW-vWqlhv0JjiG4QAoddXDytKr9SQYO_w-eFC4pwB6zI&usqp=CAU" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
            <span className="widgetSmUserName">David Warner</span>
            <span className="widgetSmUSerTitle">Software developer</span>
            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>Display
            </button>
            </li>
            <li className="widgetSmListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC12BMCq8uCmq2nNnfTr4866iP1dnw722lNQHtj19P-DvwPt_WzelDIazFnFGI_LZbECw&usqp=CAU" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
            <span className="widgetSmUserName">Steve Smith</span>
            <span className="widgetSmUSerTitle">Software developer</span>
            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>Display
            </button>
            </li>
            <li className="widgetSmListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VQmJ1kZduIxvbWulvD-C4NEZuScfHBRJUJ2bAF8IOpSXAX9Qgzl1GeUKQadSt3ESepI&usqp=CAU" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
            <span className="widgetSmUserName">Josh Hazelwood</span>
            <span className="widgetSmUSerTitle">Software developer</span>
            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>Display
            </button>
            </li>
            </ul>
        </div>
    )
}

export default WidgetSm
