export class Telefono{

    constructor(
        private _tipo : string,
        private _numero : number
    ){}

    public setTipo(tipo : string):void{
        this._tipo = tipo
    }

    public getTipo() : string{
        return this._tipo
    }

    public setNumero(numero : number) : void{
        this._numero = numero
    }

    public getNumero():number{
        return this._numero
    }

    public getTelefono() : string{
        const telefono = ' Mi numero es ' + this.getNumero() + ' y es un ' + this.getTipo() + ' '
        return telefono
    }
}
