// Conteúdo das páginas de soluções (/solucoes/[slug]) e dos cards da home
import type * as icons from 'lucide-static';

export interface Solution {
    slug: string;
    icon: keyof typeof icons;
    tag: string;
    name: string;
    title: string;
    metaDescription: string;
    summary: string;
    highlights: string[];
    lead: string;
    forWho: string[];
    included: { title: string; text: string }[];
    faq: { q: string; a: string }[];
}

export const solutions: Solution[] = [
    {
        slug: 'consultoria-de-credito',
        icon: 'ClipboardCheck',
        tag: 'Consultoria',
        name: 'Consultoria de crédito',
        title: 'Consultoria de crédito para estruturar sua operação',
        metaDescription:
            'Consultoria de crédito da Brücken: diagnóstico, política de concessão, modelagem de risco, precificação e régua de cobrança a partir dos dados da sua plataforma.',
        summary: 'Estruturamos sua operação de crédito a partir dos seus dados e do momento do seu negócio.',
        highlights: [
            'Diagnóstico e política de concessão',
            'Modelagem e critérios de risco',
            'Precificação e régua de cobrança',
        ],
        lead:
            'Estruturamos sua operação de crédito a partir dos seus dados e do momento do seu negócio: quem pode receber crédito, quanto, em que condições e como cobrar.',
        forWho: [
            'Plataformas que querem começar a oferecer crédito e precisam de uma política desde o início',
            'Operações que já concedem crédito e querem revisar critérios, preços ou cobrança',
            'Empresas que preferem validar a estratégia antes de automatizar as decisões',
        ],
        included: [
            {
                title: 'Diagnóstico',
                text: 'Avaliamos os dados disponíveis, o perfil da sua base de clientes e o objetivo do negócio com o crédito.',
            },
            {
                title: 'Política de concessão',
                text: 'Critérios de elegibilidade, limites e prazos, documentados para que sua equipe e seus parceiros sigam a mesma regra.',
            },
            {
                title: 'Modelagem e critérios de risco',
                text: 'Como medir e segmentar o risco combinando os dados da sua plataforma com informações de bureaus de crédito.',
            },
            {
                title: 'Precificação',
                text: 'Condições coerentes com o risco de cada perfil e com a sua estratégia comercial.',
            },
            {
                title: 'Régua de cobrança',
                text: 'Etapas, canais e prazos de cobrança para recuperar valores com o menor atrito possível com o cliente.',
            },
        ],
        faq: [
            {
                q: 'Preciso já ter uma operação de crédito?',
                a: 'Não. A consultoria serve tanto para estruturar uma operação do zero quanto para revisar uma operação que já existe.',
            },
            {
                q: 'A consultoria inclui tecnologia?',
                a: 'A consultoria entrega a estratégia e a política de crédito. Para automatizar as decisões, a política pode rodar no nosso motor de decisão — ou no formato full service, em que também cuidamos da gestão da operação.',
            },
            {
                q: 'Que dados são usados?',
                a: 'Os dados que a sua plataforma já tem sobre os seus clientes — como histórico de vendas, pedidos ou faturamento —, combinados com bureaus de crédito quando a política pede.',
            },
        ],
    },
    {
        slug: 'motor-de-decisao',
        icon: 'Cpu',
        tag: 'Tecnologia',
        name: 'Motor de decisão',
        title: 'Motor de decisão de crédito embarcado via API',
        metaDescription:
            'Motor de decisão de crédito da Brücken: engine embarcada na sua plataforma via API REST, decisões em menos de 300 ms, integração com bureaus e política sob seu controle.',
        summary: 'Nossa engine roda dentro da sua plataforma via API. Você define a política; nós executamos cada decisão.',
        highlights: [
            'Engine embarcada via API REST',
            'Decisões em tempo real (< 300 ms)',
            'Integração com bureaus e fontes próprias',
        ],
        lead:
            'Nossa engine de decisão roda dentro da sua plataforma via API. Você define a política de crédito; nós executamos cada decisão em tempo real, com velocidade, precisão e rastreabilidade.',
        forWho: [
            'Plataformas que já têm uma política de crédito e querem automatizar as decisões',
            'Times de produto que querem oferecer crédito dentro da própria experiência, com a própria marca',
            'Operações que precisam combinar dados internos com informações de bureaus',
        ],
        included: [
            {
                title: 'Engine embarcada via API REST',
                text: 'Sua plataforma envia o pedido de crédito e recebe a decisão com as condições definidas pela política.',
            },
            {
                title: 'Decisões em tempo real',
                text: 'Menos de 300 ms por decisão, para que o crédito apareça no momento em que o cliente precisa dele.',
            },
            {
                title: 'Integração com dados e bureaus',
                text: 'Conectamos suas fontes via API ou troca de arquivos e consultamos bureaus de crédito quando a política pede.',
            },
            {
                title: 'Política sob seu controle',
                text: 'As regras são suas: você decide critérios, limites e condições, e o motor executa.',
            },
            {
                title: 'Rastreabilidade',
                text: 'Cada decisão fica registrada, para auditoria, análise e evolução da política.',
            },
        ],
        faq: [
            {
                q: 'Preciso mudar como armazeno meus dados?',
                a: 'Não. Conectamos o motor às suas fontes via API ou transferência de arquivos, do jeito que elas existem hoje.',
            },
            {
                q: 'Quanto tempo leva cada decisão?',
                a: 'Menos de 300 ms.',
            },
            {
                q: 'Quem define as regras de crédito?',
                a: 'Você. O motor executa a sua política. Se quiser apoio para desenhá-la, a consultoria de crédito cuida disso.',
            },
            {
                q: 'O cliente final vê a marca Brücken?',
                a: 'O pedido de crédito acontece dentro da sua plataforma, com a sua marca. A decisão roda nos bastidores.',
            },
        ],
    },
    {
        slug: 'full-service',
        icon: 'Layers',
        tag: 'Tecnologia + gestão',
        name: 'Full service',
        title: 'Full service: sua operação de crédito de ponta a ponta',
        metaDescription:
            'Full service da Brücken: motor de decisão e gestão da operação de crédito de ponta a ponta, com monitoramento da carteira e calibração contínua dos modelos de risco.',
        summary: 'Motor de decisão e gestão da operação juntos, para quem quer oferecer crédito sem montar um time interno.',
        highlights: [
            'Motor + gestão ponta a ponta',
            'Monitoramento da carteira e indicadores',
            'Calibração contínua dos modelos',
        ],
        lead:
            'Motor de decisão e gestão da operação de crédito juntos, de ponta a ponta. Para quem quer uma nova linha de receita com crédito sem montar um time interno.',
        forWho: [
            'Plataformas que querem oferecer crédito sem contratar um time de risco',
            'Empresas que preferem focar no próprio negócio e delegar a operação de crédito',
            'Operações que precisam de acompanhamento contínuo da carteira',
        ],
        included: [
            {
                title: 'Motor de decisão',
                text: 'A mesma engine embarcada via API, com decisões em tempo real e integração com bureaus.',
            },
            {
                title: 'Gestão de ponta a ponta',
                text: 'Da qualidade dos dados à calibração do motor, cuidamos da complexidade da operação.',
            },
            {
                title: 'Monitoramento da carteira',
                text: 'Acompanhamento contínuo da carteira e dos indicadores de crédito.',
            },
            {
                title: 'Calibração dos modelos',
                text: 'Ajuste contínuo dos modelos de risco conforme a carteira e o mercado mudam.',
            },
            {
                title: 'Evolução da política',
                text: 'Revisamos a estratégia de crédito com você, para que ela acompanhe o crescimento do negócio.',
            },
        ],
        faq: [
            {
                q: 'Qual a diferença para o motor de decisão?',
                a: 'No motor de decisão, você opera a política e nós fornecemos a infraestrutura. No full service, além do motor, cuidamos da gestão: monitoramento da carteira, calibração dos modelos e evolução da política.',
            },
            {
                q: 'Preciso ter um time de crédito?',
                a: 'Não. O full service foi pensado justamente para quem quer oferecer crédito sem montar um time interno.',
            },
            {
                q: 'Posso começar com outro formato e migrar depois?',
                a: 'Sim. Adaptamos o formato ao momento do seu negócio — da estratégia de crédito à automação completa das decisões.',
            },
        ],
    },
];
