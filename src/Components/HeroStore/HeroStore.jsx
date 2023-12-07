import React from "react";

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://us.123rf.com/450wm/pitinan/pitinan1704/pitinan170400318/76219931-fondo-borroso-de-centro-comercial-en-ropa-de-mujer-y-%C3%A1rea-de-moda.jpg')",
          height: 400,
          backgroundSize: '100%'
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-black">
            <h1 className="mb-3">Forza - Ind</h1>
            <h4 className="mb-3">Somos proveedores de la mejor indumentaria del momento!</h4>
            <a className="btn btn-dark btn-lg" href="#catalogo" role="button">
              Ver tienda
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
