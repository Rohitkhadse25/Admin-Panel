import './Home.css'
import React from 'react'
import FeatureInfo from '../Component/topbar/Featureinfo/FeatureInfo'
import Charts from '../Component/topbar/Charts/Charts'
import {userData} from "../../src/DummyData"
import WidgetSm from '../WidgetSm/WidgetSm'
import WidgetLg from '../WidgetSm/WidgetLg'
const Home = () => {
    return (
        <div className="home">
            
        <FeatureInfo />
        <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
        <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
        </div>
        </div>
    )
}

export default Home
