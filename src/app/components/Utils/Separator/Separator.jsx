import s from "./Separator.module.css"
import React from 'react'
import separator from "../../../../assets/images/png/separator-image.png"

export const Separator = (props) => {
  const { marginTop, width } = props || {};
  return (
    <img className={s.separator} src={separator} alt="" width={width ?? "300"} style={{ marginTop }} />
  )
}
