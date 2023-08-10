export class Usuario{
    nombre: String;
    apellido: String;
    // DNI: String;
    fechaNac: Date;
    fotoDoc: String;
    mail: String;
    contraseña: String;
    estado: String;

    constructor(contraseña: String, nombre: String, mail: String, /*DNI: String*/,
        fechaNac: Date, estado: String, apellido: String, fotoDoc: String){
        this.contraseña = contraseña;
        this.nombre = nombre;
        this.mail = mail;
        // this.DNI = DNI;
        this.fechaNac = fechaNac;
        this.estado = estado;
        this.apellido = apellido;
        this.fotoDoc = fotoDoc;
    }
}
