export class Direccion{
    
    constructor(
        private _calle : string,
        private _numero : number,
        private _piso :  number,
        private _letra : string,
        private _codigoPostal : number,
        private _poblacion : string,
        private _provincia : string 
    ){}

    public setCalle(calle : string) : void{
        this._calle = calle
    }

    public getCalle() : string{
        return this._calle
    }

    public setNumero(numero : number) : void{
        this._numero = numero
    }

    public getNumero() : number{
        return this._numero
    }

    public setPiso(piso : number) : void{
        this._piso = piso
    }

    public getPiso() : number{
        return this._piso
    }

    public setLetra(letra : string) : void{
        this._letra = letra
    }

    public getLetra() : string{
        return this._letra
    }

    public setCodigoPostal(codigo : number) : void{
        this._codigoPostal = codigo
    }

    public getCodigoPostal() : number{
        return this._codigoPostal
    }

    public setPoblacion(poblacion : string) : void{
        this._poblacion = poblacion
    }

    public getPoblacion() : string{
        return this._poblacion
    }

    public setProvincia(provincia : string) : void{
        this._provincia = provincia
    }

    public getProvincia() : string{
        return this._provincia
    }


    getDireccion() : string{
        const direccion = 'Mi calle es ' + this.getCalle() + ' con el numero ' + this.getNumero() + ' ' + this.getPiso() + ' ' +  this.getLetra() + ' con el codigo postal ' + this.getCodigoPostal() + ' en la población ' + this.getPoblacion() + ' en ' + this.getProvincia()

        console.log(direccion)
        return direccion
    }
}

