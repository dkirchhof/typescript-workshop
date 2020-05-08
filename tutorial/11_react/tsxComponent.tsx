import * as React from "react";

interface IProps {
    className?: string;

    title: string;
    subtitle?: string;

    onClick: () => void;
}

export const TSXComponent = (props: IProps) => (
    <div className={props.className} onClick={props.onClick}>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);
