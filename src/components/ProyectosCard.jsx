import { useState, useEffect } from 'react'; 
import styles from './Card.module.css';

const ProyectosCard = ({ proyectos, onSeleccion, proyectoSeleccionadoId }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const proyectosFiltrados = proyectos.filter(proyecto =>
    proyecto.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  useEffect(() => {
    const seleccionEsInvalida = proyectoSeleccionadoId && !proyectosFiltrados.some(p => p.id === proyectoSeleccionadoId);

    if (seleccionEsInvalida && proyectosFiltrados.length > 0) {
      onSeleccion({ target: { value: proyectosFiltrados[0].id } });
    }
  }, [proyectosFiltrados, proyectoSeleccionadoId, onSeleccion]); 
  return (
    <div className={styles.card}>
      <h3>Proyectos Disponibles</h3>
      
      <input
        type="text"
        placeholder="Buscar proyecto por nombre..."
        className={styles.searchInput}
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
      />

      <select 
        className={styles.dropdownSelect} 
        onChange={onSeleccion}
        value={proyectoSeleccionadoId}
        disabled={proyectosFiltrados.length === 0}
      >
        {proyectosFiltrados.length > 0 ? (
          proyectosFiltrados.map(p => (
            <option key={p.id} value={p.id}>
              {p.titulo}
            </option>
          ))
        ) : (
          <option value="">No se encontraron proyectos</option>
        )}
      </select>
    </div>
  );
};

export default ProyectosCard;