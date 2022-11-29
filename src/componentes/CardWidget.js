


import '../componentes/CardWidget.css'


const CardWidget = () =>{
    return( 
   <div>   
<button type="button" className="btnCarrito btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<ion-icon name="bag-handle-outline"></ion-icon>
</button>


<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Tu compra</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       Tus productos
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary">Comprar</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default CardWidget ;