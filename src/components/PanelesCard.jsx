import { useState, useEffect } from 'react';
import styles from './Card.module.css';

const PanelesCard = ({ paneles }) => {
  const [panelSeleccionadoId, setPanelSeleccionadoId] = useState('');

  useEffect(() => {
    if (paneles && paneles.length > 0) {
      setPanelSeleccionadoId(paneles[0].id);
    } else {
      setPanelSeleccionadoId('');
    }
  }, [paneles]);

  const handleSeleccionPanel = (event) => {
    setPanelSeleccionadoId(event.target.value);
  };

  const panelActivo = paneles.find(p => p.id === panelSeleccionadoId);

  return (
    <div className={styles.card}>
      <h3>Paneles creados</h3>
      <p>Total: {paneles.length}</p>
      <select 
        className={styles.dropdownSelect} 
        onChange={handleSeleccionPanel} 
        value={panelSeleccionadoId}
        disabled={paneles.length === 0}
      >
        {paneles.length > 0 ? (
          paneles.map(p => (
            <option key={p.id} value={p.id}>{p.nombre}</option>
          ))
        ) : (
          <option>No hay paneles para este proyecto</option>
        )}
      </select>


      {panelActivo && (

         <>
    <p className={`${styles.detalleFila} ${styles.conBordeSuperior}`}>
      <span className={styles.detalleEtiqueta}>Nombre del panel:</span>
      <span className={styles.detalleValor}>{panelActivo.nombre}</span>
    </p>
          <p className={styles.detalleFila}>
      <span className={styles.detalleEtiqueta}>Descripción del panel:</span>
      <span className={styles.detalleValor}>{panelActivo.descripcion}</span>
    </p>
    <p className={styles.detalleFila}>
      <span className={styles.detalleEtiqueta}>Fecha de creación:</span>
      <span className={styles.detalleValor}>{panelActivo.fechaCreacion}</span>
    </p>
    <p className={styles.detalleFila}>
      <span className={styles.detalleEtiqueta}>Fecha de última modificación:</span>
      <span className={styles.detalleValor}>{panelActivo.fechaModificacion}</span>
    </p>
    <p className={styles.detalleFila}>
      <span className={styles.detalleEtiqueta}>Autor:</span>
      <span className={styles.detalleValor}>{panelActivo.autor}</span>
    </p>

        </>
      )}
    </div>
  );
};

export default PanelesCard;