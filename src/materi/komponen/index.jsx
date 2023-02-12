import React from "react";
import Atas from "./pembahasan/atas";
import Content from "./pembahasan/content";
import Mybio from "./pembahasan/mybio";


export default class Komponen extends React.Component {
    render() {
        return(
            <div>
                <Atas/>
                <Content/>
                <Mybio/>
            </div>
        )
    }
}