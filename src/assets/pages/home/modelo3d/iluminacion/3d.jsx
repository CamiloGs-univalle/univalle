import Header from "../../../../../components/Header/Header"; // Importa el componente Header desde la ruta especificada
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import "./3d.css"; // Importa los estilos para el componente desde Recycling.css
import Earth3d from "../home/modelo3d/elements3d/eart3d";

// Definición del componente funcional RecyCling
const Earth = () => {
  return (
    <>
      {/* Renderiza el componente Header en la parte superior */}
      <Header />
      
      {/* Contenedor para el modelo 3D con clase 'container-3d' */}
      <div className="container-3d">
        {/* Canvas que actúa como el área para renderizar el contenido 3D */}
        <Canvas
          camera={{
            position: [0, 0, 10], // Posición inicial de la cámara para que el modelo se vea completo
            fov: 70, // Campo de visión (Field of View) de la cámara, 70 grados
          }}>
          
          {/* Controles para poder rotar el modelo 3D automáticamente */}
          <OrbitControls
            autoRotate={true} // El modelo rotará automáticamente
          />
          
          {/* Luz ambiental que ilumina el modelo de manera uniforme */}
          <ambientLight />
          
          {/* Luz direccional que ilumina desde una posición específica con una intensidad alta */}
          <directionalLight position={[10, 10, 10]} intensity={5} />
          
          {/* Renderiza el modelo TrashCan, que contiene el modelo 3D */}
          <Earth3d/>

        </Canvas>
      </div>
    </>
  );
};

export default Earth;