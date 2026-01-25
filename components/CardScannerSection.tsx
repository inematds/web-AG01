import React from 'react';
import CardScanner from './CardScanner';

const CardScannerSection: React.FC = () => {
    return (
        <section className="relative bg-black py-12">
            {/* Heading Section */}
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                    Pare de Perder Tempo com
                    <br />
                    <span className="bg-gradient-to-r from-[#BFF549] via-[#FACC15] to-[#BFF549] bg-clip-text text-transparent">
                        Métodos Ultrapassados
                    </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto">
                    Analisamos seu perfil e revelamos o caminho mais eficiente para dominar IA e Robótica — sem tentativa e erro.
                </p>
            </div>

            {/* Card Scanner Component */}
            <CardScanner />
        </section>
    );
};

export default CardScannerSection;
