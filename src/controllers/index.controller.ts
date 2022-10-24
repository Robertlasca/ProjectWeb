import { Request, Response } from "express";

export function indexResponse(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("index", data);
}



export function mainResponse(req: Request, res: Response): Response {
  const html = 
  '<h1> Spu un titutlo </h1> <input>';
  return res.send(html);
}

export function main2Response(req: Request, res: Response):Response{
  return res.send("Hola, ¡Soy el main 2!")
}

export function sumaParametrosResponse(req: Request, res: Response): Response {
  const argumentos = req.query;
  const { numeroA, otroNumero } = argumentos;
  if (numeroA !== undefined && otroNumero !== undefined) {
    const suma = Number(numeroA) + Number(otroNumero);
    return res.status(200).send(`Soy la suma ${suma}`);
  } else {
    return res.status(400).send("No puedo Marta");
  }
}

export function sumaParametrosFijosResponse(req: Request, res: Response): Response {
  const argumentos = req.params;

  const { numeroA, numeroB } = argumentos;
  if (numeroA !== undefined && numeroB !== undefined) {
    const suma = Number(numeroA) + Number(numeroB);
    return res.status(200).send(`Soy la suma ${suma}`);
  } else {
    return res.status(400).send("No puedo Marta");
  }
}
/*
export function sumaParametrosResponse(req: Request, res: Response): Response {
  return res.send("Hola, ¡Soy el main 2!");
  const  argumentos= req.query;
 console.log(argumentos);
 
}

export function factorialNumeroResponse(req: Request, res: Response): Response {
  const argumentos = req.params;
  const {numero} = argumentos;

  let resultado = 1;
  const dato = Number(numero);
  if (dato>0) {
    for (let i = dato; i > 0; i--) {
      resultado *= i;
    }
    return res.status(200).send(`El factorial del numero es: ${resultado}`)
  
  }
  else {
  return res.status(404).send(`El servidor no pudo interpretar la solicitud dada una sintaxis inválida`)
}
}

export function formulaGeneralResponse(req: Request, res: Response): Response {
  const argumentos = req.params;
  const {a,b,c} = argumentos;

  const n1 = Number(a);
  const n2 = Number(b);
  const n3= Number(c);

  const numero= (n2*n2)-(4*n1*n3);
  console.log("l num"+numero);

  const resultadoPositivo=(-n2+(Math.sqrt(Math.pow(n2,2)-(4*n1*n3))))/(2*n1);
  const resultadoNegativo=(-n2-(Math.sqrt(Math.pow(n2,2)-(4*n1*n3))))/(2*n1);  

  if(numero>0 ||numero<0){

  if(numero!==0){
    return res.status(200).send(`TIENE DOS SOLUCIONES, de x1 es: ${resultadoPositivo} `+ `, y de x2 es: ${resultadoNegativo}`)
  }
  if(numero===0){
    return res.status(200).send(`tIENE UNA SOLUCION:  ${resultadoNegativo}`)
  }
  else{
    return res.status(200).send(`tIENE 0 SOLUCIONES`)
  }

}
else{
  return res.status(400).send(`PARAMETROS NO VALIDOS`)
}
}*/