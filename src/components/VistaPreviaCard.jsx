import styles from './VistaPreviaCard.module.css';

const VistaPreviaCard = ({ proyecto }) => {
  if (!proyecto || !proyecto.imagenProyectoUrl) {
    return (
      <div className={styles.card}>
        <p>No hay vista previa disponible.</p>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <img 
        src={proyecto.imagenProyectoUrl} 
        alt={`Vista previa de ${proyecto.titulo}`} 
        className={styles.imagen}
      />
    </div>
  );
};

export default VistaPreviaCard;