import './styles_components/forms_section.css'

export default function Forms_section({ clases, title, text,frame }) {
    return (
        <div className={clases}>
            <div className="service-text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="forms-container">

                {frame}

            </div>
        </div>
    )
}