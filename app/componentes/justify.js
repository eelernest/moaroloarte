import "./styles_components/justify.css";

export default function Justify({ico,title,parrafo}){
    return(
        <div className="justify_style">
            <div className="justify-ico"><img src={ico}/></div>
            <div className="title">{title}</div>
            <div className="parrafo">{parrafo}</div>
        </div>
    )
}