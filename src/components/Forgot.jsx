import React from 'react'
import IMG from '../img/forgot.png'

const Forgot = () => {
    return (
    <div>
        <div class="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={IMG} alt="Logo"/>
            </figure>
        <div class="card-body">

            <button class="btn btn-primary">Enviar</button>
        </div>
    </div>
</div>
    )
}

export default Forgot