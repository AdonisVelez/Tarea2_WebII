// Archivo: servicio.ts
async function obtenerDatos() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('No se pudo obtener los datos');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  obtenerDatos();
  