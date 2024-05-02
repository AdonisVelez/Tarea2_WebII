import llenar from "./insertar";
import buscar from "./buscar";
import consultar from "./consulta";

async function main() {

    await llenar ();
    await buscar(1);
    await consultar();
    
}

main().catch((e) => console.error(e));