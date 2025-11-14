import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Iframe - altura calculada dinamicamente */}
      <iframe 
        src="https://protectepi.egestor.com.br/vitrine/" 
        className="w-full flex-1"
        style={{ 
          height: 'calc(100vh - 80px - 63px)',
          border: 'none'
        }}
        title="Demonstração de Vitrine"
      />
      
      {/* Badge inferior - 63px */}
      <div className="h-[63px] w-full" />
    </div>
  );
};

export default Vitrine;
