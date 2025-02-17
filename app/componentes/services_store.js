'use client'

import "./styles_components/services_store.css";

import Link from "next/link";

export default function Services_store({ img, title, text }) {
  return (
      <div className="service-card">
        <div className="image-top">
          <img src={img} />
        </div>
        <h2 className="card-title">{title}</h2>
        <div className="card-text">{text}</div>
      </div>
  );
}