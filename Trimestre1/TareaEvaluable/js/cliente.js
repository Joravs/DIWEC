export class Cliente{
    constructor(nombre,apellido){
        this.nombre=nombre?nombre:this.nombre;
        this.apellido=apellido?apellido:this.apellido;
    }
    setNombre(nombre){
        this.nombre=nombre?nombre:this.nombre;
    }
    setApellido(apellido){
        this.apellido=apellido?apellido:this.apellido;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
}