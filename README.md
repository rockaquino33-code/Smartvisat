# Elisa — PWA (melhorias sugeridas)

Instruções rápidas de integração:

1. Coloque os arquivos no root do seu site/repositório:
   - index.html
   - styles.css
   - manifest.json
   - sw.js
   - offline.html
   - assets/icons/* (substitua pelos seus ícones 192x192 e 512x512)

2. O Service Worker (sw.js) precisa estar no mesmo nível do `start_url`/scope desejado (o root `/` é mais simples) e o site deve ser servido via HTTPS (ou localhost para desenvolvimento).

3. Teste local:
   - Usar `npx serve` ou `http-server` para testar em localhost e abrir o DevTools -> Application -> Service Workers / Manifest / Progressive Web App.
   - No Chrome, você verá o prompt "Install" quando o `beforeinstallprompt` for acionado; no iOS é necessário "Adicionar à Tela de Início" manualmente.

4. Boas práticas e próximos passos para tornar "mais nativo":
   - Fornecer ícones multi-resolução (png, maskable icons).
   - Implementar deep links e rotas internas (start_url com parâmetros).
   - Adicionar suporte a notificações push (FCM + Push API) e background sync.
   - Suporte a credenciais/offline-first para dados dinâmicos usando IndexedDB e estratégia Stale-While-Revalidate.
   - Implementar pré-carregamento e skeleton UI para sensação de performance nativa.
   - Para iOS: manter meta tags apple-touch-icon e usar `viewport-fit=cover` e padding com `env(safe-area-inset-*)`.
   - Testar em dispositivos reais (iOS/Android) e ajustar UI para gestos e feedback tátil.

Se quiser, eu posso:
- Gerar um conjunto de ícones (vários tamanhos) automaticamente a partir de uma imagem base.
- Criar o branch e abrir o PR no repositório por você (diga qual branch prefere).
- Implementar features adicionais: push notifications, login offline-first, sync com Background Sync API.