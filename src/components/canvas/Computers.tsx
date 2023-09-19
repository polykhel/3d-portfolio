import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import Loader from '../Loader.tsx';

interface ComputerProps {
    isMobile: boolean;
}

const Computers = ({isMobile}: ComputerProps) => {
    const computer = useGLTF('./desktop_pc/scene.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={1.5} groundColor="black"/>
            <pointLight intensity={1}/>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}
                       intensity={1000}
                       castShadow={true} shadow-mapSize={1024}/>
            <primitive object={computer.scene}
                       scale={isMobile ? 0.95 : 1}
                       position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                       rotation={[-0.01, -0.2, -0.1]}/>
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsMobile(event.matches);
        }

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])

    return (
        <Canvas frameloop="demand"
                shadows
                camera={{position: [20, 3, 5], fov: 50}}
                gl={{preserveDrawingBuffer: true}}>
            <Suspense fallback={<Loader/>}>
                <OrbitControls enableZoom={false}
                               maxPolarAngle={Math.PI / 2}
                               minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    );
};

export default ComputersCanvas;