export class Correo{
    constructor(
        private _tipo : string,
        private _direccion : string
    ){}

    public setTipo( tipo : string ):void{
        this._tipo = tipo
    }

    public getTipo() : string{
        return this._tipo
    }

    public setDireccion( direccion : string):void{
        this._direccion = direccion
    }

    public getDireccion():string{
        return this._direccion
    }

    public getCorreo():string{
        let correo = ' Mi correo es ' + this.getTipo() + ' y es ' + this.getDireccion() + ' '
        return correo
    }
}

