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
        <div className="h-[63px] w-full bg-[#E5E5E5] flex items-center justify-center">
          <p className="text-sm text-black">
            Desenvolvido por <span className="font-semibold text-[#0000FF]">MonteSite</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;
