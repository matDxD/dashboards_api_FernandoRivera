
import { useState, useEffect } from 'react';
import styles from './Card.module.css';

const FuentesCard = ({ fuentes }) => {
  const [fuenteSeleccionadaId, setFuenteSeleccionadaId] = useState('');


  useEffect(() => {
    if (fuentes && fuentes.length > 0) {
      setFuenteSeleccionadaId(fuentes[0].id);
    } else {
      setFuenteSeleccionadaId('');
    }
  }, [fuentes]);

  const handleSeleccionFuente = (event) => {
    setFuenteSeleccionadaId(event.target.value);
  };

  const fuenteActiva = fuentes.find(f => f.id === fuenteSeleccionadaId);

  return (
    <div className={styles.card}>
      <h3>Fuentes de datos</h3>
      <p>Total: {fuentes.length}</p>
      <select 
        className={styles.dropdownSelect} 
        onChange={handleSeleccionFuente} 
        value={fuenteSeleccionadaId}
        disabled={fuentes.length === 0}
      >
        {fuentes.length > 0 ? (
          fuentes.map(f => (
            <option key={f.id} value={f.id}>{f.nombre}</option>
          ))
        ) : (
          <option>No hay fuentes para este proyecto</option>
        )}
      </select>


      {fuenteActiva && (
        <>
          <p className={`${styles.detalleFila} ${styles.conBordeSuperior}`}>
            <span className={styles.detalleEtiqueta}>Nombre de la fuente:</span>
            <span className={styles.detalleValor}>{fuenteActiva.nombre}</span>
          </p>
          <p className={styles.detalleFila}>
            <span className={styles.detalleEtiqueta}>Cantidad :</span>
            <span className={styles.detalleValor}>{fuenteActiva.cantidad}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default FuentesCard;