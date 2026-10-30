// Conteúdo das páginas de setores (/setores/[slug]) e dos cards da home
import type * as icons from 'lucide-static';

export interface Sector {
    slug: string;
    icon: keyof typeof icons;
    name: string;
    title: string;
    metaDescription: string;
    summary: string;
    lead: string;
    useCases: { title: string; text: string }[];
    signals: string[];
    faq: { q: string; a: string }[];
}

export const sectors: Sector[] = [
    {
        slug: 'varejo-e-marketplace',
        icon: 'Store',
        name: 'Varejo e marketplace',
        title: 'Crédito para varejo e marketplaces',
        metaDescription:
            'Crédito embarcado para varejo e marketplaces: capital de giro para lojistas e compra a prazo para clientes, decididos com o histórico de vendas da sua plataforma.',
        summary:
            'Parcelamento e capital de giro para lojistas e compradores, com base no histórico de vendas na sua plataforma.',
        lead:
            'Ofereça capital de giro a quem vende e compra a prazo a quem compra, usando o histórico de vendas e pedidos que já está na sua plataforma.',
        useCases: [
            {
                title: 'Capital de giro para lojistas',
                text: 'Crédito para estoque e operação, com limites definidos a partir do desempenho de vendas de cada lojista.',
            },
            {
                title: 'Compra a prazo para clientes',
                text: 'Parcelamento e prazo para compradores recorrentes, decididos no momento da compra.',
            },
            {
                title: 'Limites que acompanham o histórico',
                text: 'Conforme o cliente vende ou compra mais, a política pode rever limites e condições.',
            },
        ],
        signals: [
            'Histórico de vendas e faturamento na plataforma',
            'Recorrência e volume de pedidos',
            'Tempo de relacionamento com a plataforma',
            'Cancelamentos e devoluções',
            'Informações de bureaus de crédito',
        ],
        faq: [
            {
                q: 'Que tipo de crédito posso oferecer?',
                a: 'Os usos mais comuns são capital de giro para quem vende e compra a prazo para quem compra. A política de crédito define o produto, os limites e os prazos para a sua base.',
            },
            {
                q: 'Onde o crédito aparece para o cliente?',
                a: 'Dentro da sua plataforma, com a sua marca, no ponto da jornada que fizer sentido — por exemplo, no checkout ou no painel do lojista.',
            },
        ],
    },
    {
        slug: 'erp-e-saas',
        icon: 'MonitorCog',
        name: 'ERP e SaaS',
        title: 'Crédito para ERPs e plataformas SaaS',
        metaDescription:
            'Crédito embarcado para ERPs e SaaS: ofereça crédito dentro do sistema usando faturamento e fluxo de caixa que seus clientes já registram.',
        summary:
            'Crédito oferecido dentro do sistema, usando faturamento e fluxo de caixa que seus clientes já registram.',
        lead:
            'Ofereça crédito dentro do sistema que seus clientes já usam todos os dias, a partir do faturamento e do fluxo de caixa que eles registram nele.',
        useCases: [
            {
                title: 'Capital de giro',
                text: 'Crédito para a empresa cliente, oferecido no próprio sistema, com limites baseados na movimentação registrada.',
            },
            {
                title: 'Antecipação de recebíveis',
                text: 'Antecipação de valores a receber que já estão registrados no sistema.',
            },
            {
                title: 'Crédito no momento da necessidade',
                text: 'A oferta aparece no fluxo de trabalho do cliente, quando o sistema identifica a necessidade de caixa.',
            },
        ],
        signals: [
            'Faturamento e notas emitidas',
            'Contas a receber e a pagar',
            'Fluxo de caixa registrado no sistema',
            'Tempo de uso do sistema',
            'Informações de bureaus de crédito',
        ],
        faq: [
            {
                q: 'Preciso mudar a forma como o sistema guarda os dados?',
                a: 'Não. Conectamos às suas fontes via API ou transferência de arquivos, do jeito que elas existem hoje.',
            },
            {
                q: 'Como os dados dos meus clientes são protegidos?',
                a: 'O tratamento de dados pessoais segue a LGPD e a nossa Política de Privacidade.',
            },
        ],
    },
    {
        slug: 'gig-economy',
        icon: 'Bike',
        name: 'Gig economy',
        title: 'Crédito para plataformas de gig economy',
        metaDescription:
            'Crédito embarcado para plataformas de gig economy: antecipação e crédito para motoristas e entregadores com base no histórico de ganhos na plataforma.',
        summary:
            'Antecipação e crédito para motoristas e entregadores, a partir do histórico de ganhos na plataforma.',
        lead:
            'Ofereça antecipação e crédito para motoristas, entregadores e outros profissionais, a partir do histórico de ganhos que eles já têm na sua plataforma.',
        useCases: [
            {
                title: 'Antecipação de ganhos',
                text: 'Acesso antecipado a valores que o profissional já tem a receber pela plataforma.',
            },
            {
                title: 'Crédito para trabalhar',
                text: 'Crédito para manutenção do veículo, equipamentos e outras necessidades ligadas à atividade.',
            },
            {
                title: 'Limites que acompanham a atividade',
                text: 'A política pode rever limites e condições conforme o histórico do profissional na plataforma.',
            },
        ],
        signals: [
            'Histórico de ganhos e repasses',
            'Frequência e regularidade da atividade',
            'Tempo de atuação na plataforma',
            'Informações de bureaus de crédito',
        ],
        faq: [
            {
                q: 'Onde o crédito aparece para o profissional?',
                a: 'Dentro do aplicativo da sua plataforma, com a sua marca. A decisão roda nos bastidores.',
            },
            {
                q: 'Quem define as regras de crédito?',
                a: 'A política de crédito é sua. Podemos ajudar a desenhá-la com a consultoria de crédito, ou cuidar da operação inteira no formato full service.',
            },
        ],
    },
];
