import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Carrega o script do badge MonteSite
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden fixed inset-0">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Container principal sem scroll */}
      <div className="pt-20 h-full flex flex-col overflow-hidden">
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
        
        {/* Badge MonteSite - carregado automaticamente */}
        <div id="montesite-footer-badge" className="h-[63px] w-full"></div>
      </div>
    </div>
  );
};

export default Vitrine;
