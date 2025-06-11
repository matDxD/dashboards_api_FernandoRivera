import { useState } from 'react';
import styles from './DetalleProyecto.module.css';

const DetalleProyecto = ({ proyecto }) => {
  const [orden, setOrden] = useState('default');

  if (!proyecto) {
    return (
      <div className={styles.contenedor}>
        <p className={styles.mensajeVacio}>Seleccione un proyecto para ver sus detalles.</p>
      </div>
    );
  }

  const camposDelProyecto = [
    { etiqueta: 'Título del proyecto', valor: proyecto.titulo, id: 'titulo' },
    { etiqueta: 'Descripción del proyecto', valor: proyecto.descripcion || 'No registra', id: 'descripcion' },
    { etiqueta: 'Fuentes de datos disponibles', valor: proyecto.fuentesDisponibles, id: 'fuentes' },
    { etiqueta: 'Fecha de creación', valor: proyecto.fechaCreacion, id: 'fecha' },
    { etiqueta: 'Autor', valor: proyecto.autor, id: 'autor' },
  ];

  let camposMostrados = [...camposDelProyecto];
  if (orden === 'asc') {
    camposMostrados.sort((a, b) => String(a.valor).localeCompare(String(b.valor)));
  } else if (orden === 'desc') {
    camposMostrados.sort((a, b) => String(b.valor).localeCompare(String(a.valor)));
  }
  
  const cambiarOrden = () => {
    if (orden === 'default' || orden === 'desc') {
      setOrden('asc');
    } else {
      setOrden('desc');
    }
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.detalleHeader}>
        <h4>Detalles del Proyecto</h4>
        <button onClick={cambiarOrden} className={styles.botonOrdenar}>
          {orden === 'asc' ? 'Ordenar Z-A' : 'Ordenar A-Z'}
        </button>
      </div>

      {camposMostrados.map(campo => (
        <div className={styles.fila} key={campo.id}>
          <span className={styles.etiqueta}>{campo.etiqueta}:</span>
          <span className={styles.valor}>{campo.valor}</span>
        </div>
      ))}
    </div>
  );
};

export default DetalleProyecto;