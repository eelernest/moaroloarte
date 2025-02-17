'use client'

import './procesos.css'

import Forms_section from "../componentes/forms_section"
import More_info from '../componentes/more_info'

export default function Procesos() {
    return (
        <div>
            <Forms_section
                clases={"forms_section-container asesoria-bg"}
                title={"Subcontratación de Procesos de Negocio"}
                text={"Proveemos servicios enfocados en ayudar a las empresas a administrar en todos los niveles de su organización temas financieros de impacto en el crecimiento de su negocio, buscando el logro de sus objetivos"}
                frame={<iframe width="100%" height="100%" src="https://forms.office.com/Pages/ResponsePage.aspx?id=8bAQ5LbKZEuf_ndrdMEtjNbErItQrkRGj28nyVVghtlUOUVCNDJUVEJaVUxJNEk2WkE1MDE3VUJSRC4u&embed=true"> </iframe>}
            />
            <More_info
                title={"Validación para dar certeza"}
                description={"Mas Info"}
            />
        </div>
    )
}