import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="bg-slate-900 text-white py-16 text-center px-4 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-600 blur-[100px]"></div>
                <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500 blur-[80px]"></div>
             </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 relative z-10">{title}</h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg relative z-10">{subtitle}</p>
        </div>
    );
};

export default SectionHeader;