import React from "react";
import logo from "../img/logo_inah.png";
const table2 = () => {
return (
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                
                <li><a>Cambiar Responsable</a></li>
                <li tabindex="0">
            
            <a class="justify-between">
            Exportar
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ul class="p-2">
                <li><a>Ecxel</a></li>
                <li><a>PDF</a></li>
            </ul>
        </li>
        <li><a>Factura</a></li>
        <li><a>Resguardo</a></li>

      </ul>
    </div>
    <img src={logo} alt="logo" style={{width :'16rem'}} />
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>Cambiar responsable</a></li>
      <li tabindex="0">
        <a>
          Exportar
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2">
          <li><a>Ecxel</a></li>
          <li><a>PDF</a></li>
        </ul>
      </li>
      <li><a>Factura</a></li>
        <li><a>Resguardo</a></li>
    </ul>
  </div>
  <div class="navbar-end">
  <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Perfil
          </a>
        </li>
        <li><a>Cerrar sesion</a></li>
      </ul>
    </div>
  </div>
</div>
    
    );
};

export default table2;


