import React from "react";

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://www.themanual.com/wp-content/uploads/sites/9/2019/07/wellend-boardshort.jpg?resize=1200%2C630&p=1')",
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
