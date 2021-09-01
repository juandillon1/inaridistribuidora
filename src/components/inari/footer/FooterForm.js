import React from 'react'

export const FooterForm = () => {
    return (
        <div>
            <span>Nombre</span>
            <form className="formfooter__center">
                <div className="form-group">
                    <input type="text" name="nombre"/>
                </div>
                <div className="form-group">
                    <input type="text" name="nombre"/>
                </div>
                <div className="form-group">
                    <input type="text" name="nombre"/>
                </div>
                <button className="btn btn-success">Enviar</button>
            </form>
        </div>
    )
}
