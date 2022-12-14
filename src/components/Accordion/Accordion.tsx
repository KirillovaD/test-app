import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props:AccordionPropsType) {
    console.log("Rendering Accordion");
    if (props.collapsed){
        return <div>
            <AccordionTitle title = {props.titleValue}/>
        </div>
    } else if(!props.collapsed){
        return <div>
            <AccordionTitle title = {props.titleValue}/>
            <AccordionBody/>
        </div>
    }

}
type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Rendering AccordionTitle");
    return <h3> {props.title}</h3>

}

function AccordionBody() {
    console.log("Rendering AccordionBody");
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;