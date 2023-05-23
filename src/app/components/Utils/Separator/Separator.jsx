import React from 'react'
import separator from "../../../../assets/images/png/separator-image.png"
import s from "./css/Separator.module.css"

export const Separator = (props) => {
    const { marginTop, width } = props
    return (
        <img className={s.separator} src={separator} alt="" width= {width?? "500"} style={{ marginTop }}/>
    )
}
