import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Creación de sitios web estáticos y dinámicos, integraciones, diseño responsivo y mantenimiento. También desarrollo aplicaciones web a medida, optimizo el rendimiento web, implemento medidas de seguridad . Además, ofrezco consultoría, capacitación y soporte técnico. ¡Contáctame para impulsar tus proyectos web!.</p>
                    <a href="https://www.linkedin.com/in/juan-sebastián-torres-jerez-6766a0307/" className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</a>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;