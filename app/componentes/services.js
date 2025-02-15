import './styles_components/services.css'

export default function Services({icon, service_name}) {
  return (
    <div className="service">
      <div className="icon"><img src={icon}/></div>
      <div className="service-name">{service_name}</div>
    </div>
  );
}
