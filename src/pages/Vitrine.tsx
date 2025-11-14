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
        
        {/* Badge inferior - 63px - Estilo Lovable */}
        <div className="h-[63px] w-full bg-[#1A1F2C] flex items-center justify-center">
          <a 
            href="https://montesite.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
          >
            <span>Desenvolvido por</span>
            <span className="font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              Monte Site
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;
