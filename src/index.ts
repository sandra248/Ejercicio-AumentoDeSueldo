let sueldo: number = Number(prompt("Ingresar el Sueldo"));
let aumento: number;

if (sueldo <= 15000) {
  aumento = 0.2 * sueldo;
  console.log("El aumento es:", aumento);
} else {
  if (15001 <= sueldo && sueldo <= 20000) {
    aumento = 0.1 * sueldo;
    console.log("El aumento es:", aumento);
  } else {
    if (20001 <= sueldo && sueldo <= 25000) {
      aumento = 0.05 * sueldo;
      console.log("El aumento es:", aumento);
    } else {
      aumento = 0;
      console.log("El aumento es:", aumento);
    }
  }
}
