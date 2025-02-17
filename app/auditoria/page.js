'use client'

import './auditoria.css'

import Forms_section from "../componentes/forms_section"
import Services_details from '../componentes/services_details'
import Items from '../componentes/auxiliar/item_list'
import More_info from '../componentes/more_info'

export default function Auditoria() {
    return (
        <div>
            <Forms_section
                clases={"forms_section-container auditoria-bg"}
                title={"Auditoria"}
                text={"Proveemos servicios de Auditoría y atestiguamiento orientados a validar información financiera para uso de la alta dirección, consejos de administración, inversionistas, instituciones de crédito, entre otros."}
                frame={<iframe width="100%" height="100%" src="https://forms.office.com/Pages/ResponsePage.aspx?id=8bAQ5LbKZEuf_ndrdMEtjNbErItQrkRGj28nyVVghtlUQVRaWDRQSFBSNTBGSzVPWUFaR0hDWVNVNS4u&embed=true"> </iframe>}
            />
            <Services_details
                img={'./auditoria_details.jpg'}
                ico={'./auditoria_ico.webp'}
                list1={<Items item={"Informe de auditoría sobre estados financieros preparados bajo IFRS, US GAAP y NIF’s."} />}
                list2={<Items item={"Informes de exámenes y revisiones de atestiguamiento (sobre información financiera proforma, sobre control interno relacionado con la preparación de información financiera, sobre el cumplimiento de disposiciones específica."} />}
                list3={<Items item={"Informes sobre la revisión de estados financieros."} />}
                list4={<Items item={"Informes sobre la información financiera intermedia realizada por el auditor de la Entidad."} />}
                list5={<Items item={"Informes sobre la aplicación de procedimientos convenidos."} />}
                list6={<Items item={"Informes sobre trabajos para compilar información financiera."} />}
                list7={<Items item={"Informe del comisario sobre estados financieros auditados."} />}
                list8={<Items item={"Informe sobre la situación fiscal del contribuyente (SIPRED)"} />}
            />
            <More_info
                title={"Validación para dar certezaPreparados para el presente y futuro"}
                description={"Mas Info"}
            />

        </div>
    )
}