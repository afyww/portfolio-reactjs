import './App.css'
import TypewriterComponent from 'typewriter-effect';
import Contactcard from './Contactcard';

const Contactsection = () => {
    return (
        <section id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 h-screen md:h-screen xl:h-screen 2xl:h-screen">
                <div className="my-auto">
                    <h1 className="text-6xl text-white font-extrabold text-center">
                        <TypewriterComponent
                            options={{
                                strings: [
                                    "Contact",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </h1>
                </div>
                <div className="md:my-auto xl:my-auto">
                    <Contactcard />
                </div>
            </div>
        </section >
    )
}

export default Contactsection