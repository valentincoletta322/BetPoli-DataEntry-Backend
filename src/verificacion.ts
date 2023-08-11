import jwt from "jsonwebtoken";

const claveSecreta = "betpoli"

export function generarClave(username: String): string{
    let sign = {
        "mail": mail
    }
    let firma = jwt.sign(sign, claveSecreta);

    return firma;
}

export function verificarClave(req: any, res: any, next: any){
    const clave = req.headers.authorization;

    if (!clave) {
        return res.status(401).send('No autorizado: No token provided.');
    }

    try {
        jwt.verify(clave, claveSecreta);
        const payload: any = jwt.verify(clave, claveSecreta);
        const nombreGenerado: string = payload.mail;

        const nombreSolicitud: string = req.body.mail;

        if (nombreGenerado !== nombreSolicitud) {
            return res.status(401).send('Unauthorized: Invalid token.');
        }
        console.log("Verificación exitosa");
        next();
    }
    catch (err) {
        return res.status(401).send('Unauthorized: Invalid token.');
    }
}
