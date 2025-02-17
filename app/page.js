"use client";

import Link from "next/link";
import Justify from "./componentes/justify";
import Services from "./componentes/services";

import "./page.css";

export default function Home() {
  return (
    <div className="main-container">
      <div className="about-container">
        <div className="about">
          <h1>NUESTRA FIRMA</h1>
          <p>
            Molar Oloarte y Asociados, S.C. es una firma de contadores públicos
            y asesores financieros en expansión en México.
          </p>
          <p>
            Nuestros servicios están lidereados por socios con una larga
            trayectoria en firmas internacionales, así como en el sector
            privado.
          </p>
          <Link className="link" href="/store"><button>Conoce nestros Servicios</button></Link>
        </div>
      </div>
      <div className="justify">
        <h2>¿Por qué Molar Oloarte y Asociados, S.C.?</h2>
        <div className="justify-container">
          <Justify
            ico="./handshake.png"
            title="CUMPLIMOS EXPETATIVAS"
            parrafo="Una comunicación efectiva, el cumplimiento de fechas compromiso para la emisión de nuestros informes, nuestras recomendaciones de valor nos hace un equipo de trabajo con amplia experiencia en diversas industrias."
          />
          <Justify
            ico="./balance.png"
            title="NORMATIVIDAD"
            parrafo="Para cumplir con nuestro compromiso con la calidad, en Molar Oloarte y Asociados, S.C. tenemos implementados procedimientos y procesos de control de calidad de conformidad con la normatividad vigente."
          />
          <Justify
            ico="./networking.png"
            title="MULTIDISCIPLINARIO"
            parrafo="Durante la prestación de nuestros servicios consultamos con los expertos que sea necesario con conocimiento en otras áreas y/o la industria para contar un punto de vista adicional en asuntos significativos relacionados con los servicios, además de trabajar con firmas aliadas de expertos en el ámbito legal, precios de transferencia y fiscal."
          />
        </div>
      </div>
      <div className="info-container">
        <p>
          Molar Oloarte y Asociados, S.C. (MOA) es una firma miembro de Fusion
          International en México. Los servicios profesionales son
          proporcionados por MOA. MOA es una firma en expansión de servicios
          profesionales en México, ofreciendo servicios de Auditoría, Impuestos,
          Asesoría en Riesgos y Servicios de Consultoría.
        </p>
        <br />
        <p>
          Fusion International presta servicios profesionales de
          auditoría,impuestos, asesoría en riesgos y consultoría relacionados
          connuestros clientes públicos y privados de diversas industrias.
          Conuna red global de firmas miembro en más de 20 países,
          FusionInternational brinda capacidades de clase mundial y servicio de
          altacalidad a sus clientes, aportando la experiencia necesaria
          parahacer frente a los retos más complejos de los negocios.
        </p>
        <br />
        <p>
          Losprofesionales de Fusion International están unidos por una
          culturade atención personalizada a nuestros clientes.
          www.fusionint.com
        </p>
      </div>
      <div className="services-container">
        <h2>NUESTROS SERVICIOS</h2>
        <div className="services-list">

          <Link className="link" href={"/asesoria"}>
            <Services
              icon="./circle-1.png"
              service_name="Asesoría financiera y contable"
            />
          </Link>

          <Link className="link" href={"/auditoria"}>
            <Services icon="./circle-2.png" service_name="Auditoría" />
          </Link>

          <Link className="link" href={"/fiscal"}>
            <Services icon="./circle-3.png" service_name="Fiscal" />
          </Link>
          
          <Link className="link" href={"/procesos"}>
            <Services
              icon="./circle-4.png"
              service_name="Subcontratación de procesos de negocios"
            />
          </Link>

        </div>
      </div>
      <div className="personal-container">
        <div className="personal-info">
          <h1>C.P.C. Rafael Molar Oloarte</h1>
          <br />
          <div className="subtitle">Socio de Auditoría</div>
          <br />
          <p>
            Rafael es Contador Público Certificado, con más de 25 años de
            experiencia auditando compañías en las industrias de Bienes Raíces,
            Construcción, Aerolíneas y Comercio Electrónico. Con una trayectoria
            de 23 años en Deloitte, los últimos siete como socio de auditoría.
            Entre los principales clientes atendidos: OHL México, Mercado Libre,
            Microsoft México, Torre Mayor, Hines, ICA, Aeropuerto de Toluca,
            Interjet, Muebles Dico, Fondo Mexicano para la Conservación de la
            Naturaleza. Procesos de oferta pública de OHL México. Comisario de
            entidades y participación en comités de auditoría.
          </p>
          <br />
          <p>
            Cuenta con experiencia y amplios conocimientos en auditoría de
            estados financieros preparados bajo Normas de Información Financiera
            Mexicanas; Normas Internacionales de Información Financiera y
            Principios de Contabilidad Generalmente Aceptados en Estados Unidos.
          </p>
          <br />
          <p>
            Participó en un programa de desarrollo global en Filadelfia, Estados
            Unidos de 2002 a 2004 atendiendo compañías públicas y privadas.
            Asimismo, es miembro del Colegio de Contadores Públicos de México y
            del Instituto Mexicano de Contadores Públicos.
          </p>
        </div>
        <div className="personal-photo">
          <img src="./profile_photo.jpg" />
        </div>
      </div>
      <div className="question-container">
        <div className="question">
          ¿Requieres de una asesoría de nuestro Equipo?
        </div>
        <button>Contáctanos</button>
      </div>
    </div>
  );
}
