# 📊 Configuração Google Analytics 4 - Passo a Passo

## 🚀 Como Configurar o Google Analytics 4

### **Passo 1: Criar Conta no Google Analytics**

1. **Acesse**: https://analytics.google.com
2. **Clique em**: "Começar a medir"
3. **Preencha**:
   - Nome da conta: `Hub de Ferramentas`
   - Nome da propriedade: `hubdeferramentas.com`
   - Setor: `Ferramentas e Utilitários Online`
   - Fuso horário: `Brasil - São Paulo`
   - Moeda: `Real brasileiro (BRL)`

### **Passo 2: Configurar Fluxo de Dados**

4. **Selecione**: "Web"
5. **Insira**:
   - URL do website: `https://hubdeferramentas.com` (ou seu domínio)
   - Nome do fluxo: `Website Principal`
6. **Copie o MEASUREMENT ID** (formato: `G-XXXXXXXXXX`)

### **Passo 3: Implementar no Site**

7. **Edite o arquivo**: `ga4-config.js`
8. **Substitua a linha**:
   ```javascript
   // ANTES:
   const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   
   // DEPOIS (com seu ID real):
   const GA4_MEASUREMENT_ID = 'G-1A2B3C4D5E';
   ```

9. **Atualize as páginas HTML**:
   - Substitua `G-XXXXXXXXXX` pelo seu ID real em todas as páginas
   - Páginas para atualizar:
     - `/index.html`
     - `/numeros/index.html` 
     - `/blog/index.html`
     - `/sorteio/roleta.html`
     - (E outras páginas que tenham o Analytics)

### **Passo 4: Verificar Instalação**

10. **Teste no navegador**:
    - Abra seu site
    - Pressione `F12` para abrir Developer Tools
    - Vá na aba `Console`
    - Procure por: `✅ Google Analytics 4 inicializado`

11. **Verificar no GA4**:
    - Volte ao Google Analytics
    - Vá em `Tempo real` > `Visão geral`
    - Você deve ver sua visita aparecendo

## 🎯 Configurações Avançadas Recomendadas

### **Eventos Personalizados Configurados**

O sistema já trackeia automaticamente:

- ✅ **tool_click** - Cliques em ferramentas
- ✅ **tool_usage** - Uso de botões principais  
- ✅ **scroll_depth** - Profundidade de scroll (25%, 50%, 75%, 100%)
- ✅ **time_on_page** - Tempo na página

### **Content Groups Configurados**

- **Grupo 1**: `Ferramentas Online` (fixo)
- **Grupo 2**: Categoria dinâmica:
  - `Sorteios` - páginas `/sorteio/*`
  - `Números da Sorte` - páginas `/numeros/*`
  - `Contadores` - páginas `/contador/*`
  - `Blog` - páginas `/blog/*`
  - `Geral` - outras páginas

### **Metas Recomendadas**

Configure essas metas no GA4:

1. **Tool Usage** (Uso de Ferramentas)
   - Evento: `tool_usage`
   - Conversão: Sim

2. **High Engagement** (Alto Engajamento)
   - Evento: `scroll_depth`
   - Parâmetro: `value >= 75`

3. **Time on Site** (Tempo no Site)
   - Evento: `time_on_page`
   - Parâmetro: `value >= 60` (1 minuto)

## 📈 Relatórios Importantes para Monitorar

### **1. Relatório de Público**
- **Onde**: Relatórios > Público > Dados demográficos
- **Por que**: Entender quem usa suas ferramentas

### **2. Relatório de Aquisição**
- **Onde**: Relatórios > Aquisição > Visão geral
- **Por que**: Como os usuários chegam (Google, direto, redes sociais)

### **3. Relatório de Engajamento**
- **Onde**: Relatórios > Engajamento > Páginas e telas
- **Por que**: Quais ferramentas são mais populares

### **4. Relatório de Conversões**
- **Onde**: Relatórios > Conversões > Eventos
- **Por que**: Quantas pessoas realmente usam as ferramentas

## 🔗 Próximo Passo: Google Search Console

Após configurar o Analytics:

1. **Acesse**: https://search.google.com/search-console
2. **Adicione propriedade**: `hubdeferramentas.com`
3. **Verifique via Google Analytics** (mais fácil)
4. **Envie o sitemap**: `https://hubdeferramentas.com/sitemap.xml`

## ⚠️ Troubleshooting

### **Não aparece dados em Tempo Real**
- Verifique se substituiu `G-XXXXXXXXXX` pelo ID real
- Confirme se não há AdBlock ativo
- Aguarde até 5 minutos para dados aparecerem

### **Console mostra erros**
- Verifique se o arquivo `ga4-config.js` carregou
- Confirme se gtag.js carregou sem erros de rede
- Teste em navegador anônimo

### **Eventos não aparecem**
- Os eventos customizados levam ~24h para aparecer nos relatórios
- Use `Tempo real` > `Eventos` para testar imediatamente

---

## ✅ Checklist Final

- [ ] Conta GA4 criada
- [ ] Measurement ID copiado
- [ ] Arquivo `ga4-config.js` atualizado
- [ ] Páginas HTML atualizadas com ID real
- [ ] Teste no navegador realizado
- [ ] Dados aparecendo em Tempo Real
- [ ] Search Console configurado
- [ ] Sitemap enviado

**🎉 PARABÉNS! Google Analytics 4 configurado com sucesso!**