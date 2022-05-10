import React from "react";
import mountain from "../images/mountain.png";
import path from "../images/location-dot-solid.svg";


export default function Body(props) {
    // console.log("data", data);
    console.log("props", props)
    console.log("check title : ", props.items.title);
    return (
        <div className="container">
            <div className="item main-img" >
                <img src={props.items.imageUrl} />
            </div>

            <div className="item location">
                <img src={path} />
                <span>{props.items.location}</span>
                <a href={props.items.googleMapsUrl} className="maps">View on Google Maps</a>


            </div>
            <div className="item description">
                <p className="titlename">{props.items.title}</p>
                <span>{props.items.startDate} - {props.items.endDate}</span>
                <p className="description">{props.items.description}</p>

            </div>
        </div>
    )
}