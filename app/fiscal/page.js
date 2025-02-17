'use client'

import './fiscal.css'

import Forms_section from "../componentes/forms_section"
import Services_details from '../componentes/services_details'
import Items from '../componentes/auxiliar/item_list'
import Sub_list from '../componentes/auxiliar/sub_list'

export default function Fiscal() {
    return (
        <div>
            <Forms_section
                clases={"forms_section-container auditoria-bg"}
                title={"Fiscal"}
                text={"Proveemos servicios Fiscales que asegurarán el cumplimiento de las diversas disposiciones fiscales vigentes."}
                frame={<iframe width="100%" height="100%" src="https://forms.office.com/Pages/ResponsePage.aspx?id=8bAQ5LbKZEuf_ndrdMEtjNbErItQrkRGj28nyVVghtlUNzNBSFdOSjRCWVhKOUpBU0dVU1JIRElERS4u&embed=true"> </iframe>}
            />

            <Services_details
                ico={"./fiscal_ico.png"}
                img={'fiscal_details.jpg'}
                list1={<Items item={"Elaboración de declaraciones mensuales y anuales de impuestos federales, con preparación de papeles de trabajo correspondien"} />}
                list2={<Items item={"Contabilidad electrónica"}
                    list3={<Items item="Atención de requerimientos e invitaciones de las autoridades para cumplir con las obligaciones fiscales" />}
                />}
                list4={<Items item="Diagnóstico y revisión del cumplimiento de las disposiciones fiscales vigentes" />}
                list5={<Items item="Optimización en el pago de contribuciones" />}
                list6={<Items item="Análisis de operaciones para la emisión de opinión y recomendaciones" />}
                list7={<Items item="Revisión de CFDI´s:" />}
                list8={<Sub_list
                    item1={<Items item={"Conciliación y validación de CFDI´s emitidos a empleados (Nómina)"} />}
                    item2={<Items item={"Conciliación y validación de CFDI´s emitidos a clientes y comparación vs declaraciones y contabilidad  electrónica"} />}
                    item3={<Items item={"Conciliación y validación de CFDI´s emitidos por proveedores y comparación vs declaraciones   y contabilidad electrónica"} />}
                    item4={<Items item={"Conciliación y validación de CFDI´s emitidos por proveedores y comparación vs listas negras"} />}
                />}
            />
        </div>
    )
}