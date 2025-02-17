"use client";

import './store.css'

import Services_store from '../componentes/services_store';

export default function Store() {
  return (
    <div className="stores-container">
      <div className='stores-head'>
        <h2 className="services-title">NUESTROS SERVICIOS</h2>
      </div>
      <div className='store-services-container'>
        <Services_store
          img={"/asesoria.jpeg"}
          title={"Asesoría Financiera y Contable"}
          text={"Nuestro equipo provee estrategias y servicios a cada cliente en cada fase del ciclo económico de sus negocios. Contamos con amplio desarrollo de estrategias financieras que ayudan a agregar valor a los accionistas."}
        />
        <Services_store
        img={"/negocio.jpeg"}
        title={"Subcontratación de Procesos de Negocio"}
        text={"Proveemos servicios enfocados en ayudar a las empresas a administrar en todos los niveles de su organización temas financieros de impacto en el crecimiento de su negocio, buscando el logro de sus objetivos."}
        />
        <Services_store
        img={"/auditoria.webp"}
        title={"Auditoría"}
        text={"Proveemos servicios de Auditoría y Atestiguamiento orientados a validar información financiera para uso de la alta dirección, consejos de administración, inversionistas, instituciones de crédito, entre otros."}
        />
        <Services_store
        img={"/fiscal.png"}
        title={"Fiscal"}
        text={"Proveemos servicios Fiscales que asegurarán el cumplimiento de las diversas disposiciones fiscales vigentes."}
        />

      </div>
        
    </div>
  )
}
