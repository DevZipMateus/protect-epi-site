import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Espaçamento para compensar o header fixo */}
      <div className="pt-20 h-full flex flex-col">
        {/* Iframe - altura calculada dinamicamente */}
        <iframe 
          src="https://protectepi.egestor.com.br/vitrine/" 
          className="w-full"
          style={{ 
            height: 'calc(100vh - 80px - 63px)',
            border: 'none'
          }}
          title="Demonstração de Vitrine"
        />
        
        {/* Badge inferior - 63px */}
        <div className="h-[63px] w-full bg-[#1A1F2C] flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#gradient1)" />
              <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" fill="url(#gradient2)" />
              <defs>
                <linearGradient id="gradient1" x1="2" y1="7" x2="22" y2="7" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#D946EF" />
                </linearGradient>
                <linearGradient id="gradient2" x1="2" y1="14.5" x2="22" y2="14.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-sm text-white font-medium">
              Desenvolvido por <span className="font-bold">Monte Site</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;
