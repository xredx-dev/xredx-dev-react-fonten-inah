import React from "react";
import IMG from "../img/logo.png";
import IMG1 from "../img/c.png";
import IMG2 from "../img/v.png";
import IMG3 from "../img/f.png";
import IMG4 from "../img/r.png";
import IMG6 from "../img/fa.png";
import IMG7 from "../img/ee.png";
import IMG8 from "../img/ep.png";

const Table2 = () => {
    return (
    <>
        <div class="overflow-x-auto w-full">
        <table>
        <tr>
            <th>
                <img src={IMG} href="logo" />
            </th>
            <th>
                <h1>
                <div class="font-bold">
                INSTITUTO NACIONAL DE ANTROPOLOGIA E HISTORIA
                </div>
                </h1>
            </th>
            <th></th>
            <td>
                Bienvenido:
                <br />
                <span class="badge badge-ghost badge-sm">
                Ortega Cuapio Norma
                </span>
            </td>
            <td>
                Unidad Administrativa:
                <br />
                <span class="badge badge-ghost badge-sm">8115000</span>
            </td>
        </tr>
        </table>
        <table>
            <tr>
            <td>
                <div class="font-bold">Buscar:</div>
            </td>
            <td>
                {" "}
                <input type="text" name="nya" id="nya" />
            </td>
            </tr>
        </table>

        <table>
            <button class="btn btn-ghost btn-xs">General</button>|
            <button class="btn btn-ghost btn-xs">Reportes</button>|
            <button class="btn btn-ghost btn-xs">Ayuda</button>|
        </table>

        <table>
            <td>
                <img
                style={{
                resizeMode: "contain",
                height: 20,
                width: 20,
                }}
                src={IMG1}
                href="c"
            />
            </td>
            <td>
            <button class="btn btn-ghost btn-xs">Cambiar Responsable</button>|
            </td>
            <td>
            <img
                style={{
                resizeMode: "contain",
                height: 20,
                width: 20,
                }}
                src={IMG2}
                href="v"
            />
            </td>
            <td>
            <button class="btn btn-ghost btn-xs">Ver cedula</button>|
            </td>
            <td>
                <img
                    style={{
                    resizeMode: "contain",
                    height: 20,
                    width: 20,
                    }}
                    src={IMG3}
                href="f"
                />
            </td>
            <td>
            <button class="btn btn-ghost btn-xs">Fotografia</button>|
            </td>
            <td>
                <img
                    style={{
                    resizeMode: "contain",
                    height: 20,
                    width: 20,
                }}
                    src={IMG4}
                    href="r"
                />
            </td>
            <td>
                <button class="btn btn-ghost btn-xs">Resguardo</button>|
            </td>
            <td>
                <img
                    style={{
                    resizeMode: "contain",
                    height: 20,
                    width: 20,
                }}
                    src={IMG4}
                    href="r"
                />
            </td>
            <td>
            <button class="btn btn-ghost btn-xs">Plano</button>|
            </td>
            <td>
                <img
                    style={{
                    resizeMode: "contain",
                    height: 20,
                    width: 20,
                    }}
                    src={IMG6}
                    href="f"
                />
            </td>
            <td>
                <button class="btn btn-ghost btn-xs">Factura</button>|
            </td>
            <td>
                <img
                    style={{
                resizeMode: "contain",
                height: 20,
                width: 20,
                }}
                    src={IMG7}
                    href="ee"
                />
            </td>
            <td>
            <button class="btn btn-ghost btn-xs">Exportar a excel</button>|
            </td>
            <td>
                <img
                    style={{
                    resizeMode: "contain",
                    height: 20,
                    width: 20,
                    }}
                src={IMG8}
                href="ep"
                />
            </td>
            <td>
                <button class="btn btn-ghost btn-xs">Exportar a PDF</button>|
            </td>
        </table>

        <table class="table w-full">
            <thead>
                <tr>
                    <th>Selec.</th>
                    <th>No.inventario</th>
                    <th>Descripcion</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Serie</th>
                    <th>Valor</th>
                    <th>Expediente</th>
                    <th>Nombre</th>
                    <th>Centro de Costos</th>
                    <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <td>
                        <div>
                            <div class="font-bold">10205545654</div>
                          {/* <div class="text-sm opacity-50">United States</div> */}
                        </div>
                    </td>
                <td>
                Monitor de color 21
                <br />
                {/* <span class="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                    <td>Honeywell</td>
                    <td>HMC21</td>
                    <td>32656546</td>
                    <td>$9530.00</td>
                    <td>4965</td>
                    <td>Rosas Rosales Armando</td>
                    <td>300001</td>
                    <td>Centro INAH Estado de Mexico</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
    );
};

export default Table2;
