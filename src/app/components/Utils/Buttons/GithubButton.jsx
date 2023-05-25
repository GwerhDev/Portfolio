import React from 'react'
import githubIcon from "../../../../assets/images/png/github-icon.png";

export const GithubButton = (props) => {
    const { url } = props;
    return (
        <a href={ url } target="_blank" rel="noreferrer">
            <img src={ githubIcon } alt="github" />
        </a>
    )
}
