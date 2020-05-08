export const JSXComponent = props => (
    <div className={props.className} onClick={props.onClick}>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);
