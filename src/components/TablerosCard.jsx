import { useState, useEffect } from 'react';
import styles from './Card.module.css';

const TablerosCard = ({ tableros }) => {
  const [tableroSeleccionadoId, setTableroSeleccionadoId] = useState('');


  useEffect(() => {
    if (tableros && tableros.length > 0) {
      setTableroSeleccionadoId(tableros[0].id);
    } else {
      setTableroSeleccionadoId('');
    }
  }, [tableros]);

  const handleSeleccionTablero = (event) => {
    setTableroSeleccionadoId(event.target.value);
  };

  const tableroActivo = tableros.find(t => t.id === tableroSeleccionadoId);

  return (
    <div className={styles.card}>
      <h3>Tableros creados</h3>
      <p>Total: {tableros.length}</p>
      <select 
        className={styles.dropdownSelect} 
        onChange={handleSeleccionTablero} 
        value={tableroSeleccionadoId}
        disabled={tableros.length === 0}
      >
        {tableros.length > 0 ? (
          tableros.map(t => (
            <option key={t.id} value={t.id}>{t.nombre}</option>
          ))
        ) : (
          <option>No hay tableros para este proyecto</option>
        )}
      </select>

      {}
      {tableroActivo && (
        <>
    <p className={`${styles.detalleFila} ${styles.conBordeSuperior}`}>
       <span className={styles.detalleEtiqueta}>Nombre del panel:</span>
       <span className={styles.detalleValor}>{tableroActivo.nombre}</span>
     </p>
           <p className={styles.detalleFila}>
       <span className={styles.detalleEtiqueta}>Descripción del panel:</span>
       <span className={styles.detalleValor}>{tableroActivo.descripcion}</span>
     </p>
     <p className={styles.detalleFila}>
       <span className={styles.detalleEtiqueta}>Fecha de creación:</span>
       <span className={styles.detalleValor}>{tableroActivo.fechaCreacion}</span>
     </p>
     <p className={styles.detalleFila}>
       <span className={styles.detalleEtiqueta}>Fecha de última modificación:</span>
       <span className={styles.detalleValor}>{tableroActivo.fechaModificacion}</span>
     </p>
     <p className={styles.detalleFila}>
       <span className={styles.detalleEtiqueta}>Autor:</span>
       <span className={styles.detalleValor}>{tableroActivo.autor}</span>
     </p>
 

        </>
      )}
    </div>
  );
};

export default TablerosCard;