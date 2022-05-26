import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesContainer() {

    const particlesInit = async (main) => {
        //console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        //console.log(container);
    };

    const options = {
        fpsLimit: 60,
        particles: {
            number: {
                value: 20,
            },
            color: {
                value: '#f5f5f5'
            },
            shape: {
                type: 'polygon',
                polygon: {
                    nb_sides: 5
                },
            },
            opacity: {
                value: 0.3,
                random: true,
            },
            size: {
                value: 10,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    size_min: 4,
                    sync: false
                }
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'top-right',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
            }
        },
        fullScreen:false
    }

    return (<Particles  id="tsparticles" 
                        options={options} 
                        init={particlesInit} 
                        loaded={particlesLoaded} 
                        style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                            }}
                        />)
}

export default ParticlesContainer;