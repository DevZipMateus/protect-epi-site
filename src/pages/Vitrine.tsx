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
        <div className="h-[63px] w-full bg-white border-t border-border flex items-center justify-center">
          <a 
            href="https://montesite.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Desenvolvido por</span>
            <span className="font-semibold text-foreground">Monte Site</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;
