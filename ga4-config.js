/**
 * ⚠️ CONFIGURAÇÃO GOOGLE ANALYTICS 4 - EDITÁVEL
 * 
 * Este arquivo centraliza a configuração do GA4.
 * Edite apenas este arquivo ao invés de modificar todas as páginas.
 */

// ✅ SUBSTITUA PELO SEU MEASUREMENT ID REAL
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// ✅ CONFIGURAÇÕES PERSONALIZÁVEIS
const GA4_CONFIG = {
    // Configurações básicas
    measurement_id: GA4_MEASUREMENT_ID,
    
    // Configurações de privacidade (LGPD)
    anonymize_ip: true,
    allow_google_signals: false, // true para remarketing
    
    // Configurações de eventos
    enhanced_measurements: true,
    send_page_view: true,
    
    // Custom dimensions (Content Groups)
    content_groups: {
        1: 'Ferramentas Online', // Sempre fixo
        2: function() {
            // Detecta categoria dinamicamente
            if (window.location.pathname.includes('/sorteio/')) return 'Sorteios';
            if (window.location.pathname.includes('/numeros/')) return 'Números da Sorte';
            if (window.location.pathname.includes('/contador/')) return 'Contadores';
            if (window.location.pathname.includes('/blog/')) return 'Blog';
            return 'Geral';
        }
    }
};

// ✅ FUNÇÃO PARA APLICAR CONFIGURAÇÃO
function initializeGA4() {
    if (typeof gtag === 'undefined') {
        console.warn('⚠️ Google Analytics não carregado. Verifique se o script está incluído.');
        return;
    }
    
    // Configuração principal
    gtag('config', GA4_CONFIG.measurement_id, {
        page_title: document.title,
        page_location: window.location.href,
        content_group1: GA4_CONFIG.content_groups[1],
        content_group2: typeof GA4_CONFIG.content_groups[2] === 'function' ? 
            GA4_CONFIG.content_groups[2]() : GA4_CONFIG.content_groups[2],
        send_page_view: GA4_CONFIG.send_page_view,
        anonymize_ip: GA4_CONFIG.anonymize_ip,
        allow_google_signals: GA4_CONFIG.allow_google_signals
    });
    
    console.log('✅ Google Analytics 4 inicializado:', GA4_CONFIG.measurement_id);
    console.log('📊 Categoria:', typeof GA4_CONFIG.content_groups[2] === 'function' ? 
        GA4_CONFIG.content_groups[2]() : GA4_CONFIG.content_groups[2]);
}

// ✅ EXPORTAR CONFIGURAÇÕES
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GA4_CONFIG, initializeGA4 };
}

// Auto-inicializar quando carregado
if (typeof window !== 'undefined') {
    // Aguardar gtag estar disponível
    const checkGtag = setInterval(() => {
        if (typeof gtag !== 'undefined') {
            clearInterval(checkGtag);
            initializeGA4();
        }
    }, 100);
    
    // Timeout de segurança
    setTimeout(() => {
        clearInterval(checkGtag);
        if (typeof gtag === 'undefined') {
            console.error('❌ Google Analytics não carregou em 5 segundos');
        }
    }, 5000);
}