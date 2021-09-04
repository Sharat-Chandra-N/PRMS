import React from 'react'
import timelineElements from '../components/timeline'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import {ReactComponent as WorkIcon} from "../components/work.svg"
import './TimeLineElement.css'

import 'react-vertical-timeline-component/style.min.css'

function TimeLineElements() {

    let workIconStyles = {background : "#06D6A0"}
    let schoolIconStyles = {background : "#f9c74f"}

    return (
        <div className="timeline-component">
            <h1 className="main-header">TimeLine</h1>
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "work";

                        return(
                        <VerticalTimelineElement 
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                            <p className="description">{element.description}</p>
                        </VerticalTimelineElement>
                    )})
                }
            </VerticalTimeline>
        </div>
    )
}

export default TimeLineElements
