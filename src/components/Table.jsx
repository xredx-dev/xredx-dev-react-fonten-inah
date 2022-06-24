import React from 'react'
import LG from '../img/lg.jpg'


const Table = () => {
return (
    <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
    
    <thead>
        <tr>
            <th>No. Inv.</th>
            <th>Descripcion</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Serie</th>
            <th>Valor</th>
            <th>Expediente(folio)</th>
            <th>Nombre</th>
            <th>Localidad</th>
            <th>Centro de Cosotos</th>
            <th>Status</th>
            <th>Foto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <td>Pantalla</td>
            <td>LG</td>
            <td>smart</td>
            <th>s-400</th>
            <th>$4000</th>
            <th>F-2550</th>
            <th>pantalla-LG</th>
            <th>Edo Mex</th>
            <th>Toluca</th>
            <th>Activo</th>
            <th>
            <label for="my-modal-5" class="btn modal-button">Foto</label>

<input type="checkbox" id="my-modal-5" class="modal-toggle" />
<div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <h3 class="font-bold text-lg">Foto de pantalla</h3>
            <figure>
                <img src={LG} alt="lg" />
            </figure>
            <div class="modal-action">
            <label for="my-modal-5" class="btn">Cerrar</label>
        </div>
    </div>
</div>
            </th>
        </tr>
        <tr>
            <th>2</th>
            <td>Pantalla</td>
            <td>LG</td>
            <td>smart</td>
            <th>s-400</th>
            <th>$4000</th>
            <th>F-2550</th>
            <th>pantalla-LG</th>
            <th>Edo Mex</th>
            <th>Toluca</th>
            <th>Activo</th>
            <th>
            <label for="my-modal-5" class="btn modal-button">Foto</label>

                    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                    <div class="modal">
                    <div class="modal-box">
                            <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                            <figure>
                                <img src={LG} alt="lg" />
                            </figure>
                            <div class="modal-action">
                                <label for="my-modal" class="btn">Cerrar</label>
                            </div>
                        </div>
                    </div>
            </th>
        </tr>
        </tbody>
    </table>
</div>
)
}

export default Table