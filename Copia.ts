import { Libro } from './Libro';
export class Copia {
    private fecha : string;
    private id:number=0;
    private estado:string="";
    private libros:any[]=[];

    constructor(id:number, estado:string, Libro:Libro){
        this.id=id;
        this.estado=estado;
    }

    public get_id():number {
        return this.id;
    }

    public get_estado():string {
        return this.estado;
    }

    public set_id(id:number){
        this.id = id;
    }

    public set_estado(estado:string){
        this.estado = estado;
    }
    
}