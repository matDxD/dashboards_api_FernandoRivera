import { useState } from 'react';
import { proyectosData, panelesData, fuentesData, tablerosData } from '../data/mockData.js';
import ProyectosCard from '../components/ProyectosCard';
import PanelesCard from '../components/PanelesCard';
import FuentesCard from '../components/FuentesCard';
import TablerosCard from '../components/TablerosCard';
import DetalleProyecto from '../components/DetalleProyecto';
import VistaPreviaCard from '../components/VistaPreviaCard';
import styles from './OverviewPage.module.css';

const OverviewPage = () => {
  const [proyectoSeleccionadoId, setProyectoSeleccionadoId] = useState(proyectosData[0]?.id || '');

  const handleSeleccionProyecto = (event) => {
    setProyectoSeleccionadoId(event.target.value);
  };

  const proyectoActivo = proyectosData.find(p => p.id === proyectoSeleccionadoId);
  const panelesFiltrados = panelesData.filter(p => p.proyectoId === proyectoSeleccionadoId);
  const fuentesFiltradas = fuentesData.filter(f => f.proyectoId === proyectoSeleccionadoId);
  const tablerosFiltrados = tablerosData.filter(t => t.proyectoId === proyectoSeleccionadoId);

  return (
    <div className={styles.pageContainer}>
   
      <h1 className={styles.pageTitle}>Proyectos</h1>
      <div className={styles.layoutSuperior}>
        <ProyectosCard 
          proyectos={proyectosData}
          proyectoSeleccionadoId={proyectoSeleccionadoId}
          onSeleccion={handleSeleccionProyecto}
        />
      
        <div className={styles.columnaDerechaSuperior}>
          <DetalleProyecto proyecto={proyectoActivo} />
          <VistaPreviaCard proyecto={proyectoActivo} />
        </div>
      </div>

      
      <h2 className={styles.subHeader}>Resumen del proyecto</h2>
      <div className={styles.layoutInferior}>
        <FuentesCard fuentes={fuentesFiltradas} />
        <PanelesCard paneles={panelesFiltrados} />
        <TablerosCard tableros={tablerosFiltrados} />
      </div>
    </div>
  );
};

export default OverviewPage;