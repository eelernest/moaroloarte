'use client'

import './asesoria.css'

import Forms_section from "../componentes/forms_section"
import Services_details from '../componentes/services_details'
import Items from '../componentes/auxiliar/item_list'
import More_info from '../componentes/more_info'

export default function Asesoria() {
    return (
        <div>
            <Forms_section
                clases={"forms_section-container asesoria-bg"}
                title={"Asesoría Financiera y Contable"}
                text={"Nuestro equipo provee estrategias y servicios a cada cliente en cada fase del ciclo económico de sus negocios. Contamos con amplio desarrollo de estrategias financieras que ayudan a agregar valor a los accionistas."}
                frame={<iframe width="100%" height="100%" src="https://forms.office.com/Pages/ResponsePage.aspx?id=8bAQ5LbKZEuf_ndrdMEtjNbErItQrkRGj28nyVVghtlURDhNQVgxVFhBTE84SjI3NFFaS0xPNk1PQy4u&embed=true" > </iframe>}    
            />
            <Services_details
            ico={'./production_ico.webp'}
            img={'./asesoria_details.jpg'}
            list1={<Items item={"Primera adopción de las Normas Internacionales de Información financiera."} />}
            list2={<Items item={"Adopción de nuevas normas contables."} />}
            list3={<Items item={"Conciliación y/o conversión de estados financieros de un marco contable a otro (i.e. NIF vs US GAAP, NIF vs IFRS)."} />}
            list4={<Items item={"Cierres contables y definición del proceso para producir información financiera confiable en fechas razonables."} />}
            list5={<Items item={"Consolidación de información financiera y reportes a Entidades Controladoras."} />}
            list6={<Items item={"Compilación de estados financieros."} />}
            list7={<Items item={"Depuración de saldos y cuentas."} />}
            list8={<Items item={"Asesoría contable relacionada con instrumentos financieros derivados."} />}
            />

            <More_info
            title={"Preparados para el presente y futuro"}
            description={"Nuestro equipo provee estrategias y servicios a cada cliente en cada fase del ciclo económico de sus negocios. Contamos con amplio desarrollo de estrategias financieras que ayudan a agregar valor a los accionistas."}
            />
        </div>
    )
}