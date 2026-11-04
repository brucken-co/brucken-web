// Casos de uso exibidos em /cases/. Cliente só é identificado depois de autorizar a divulgação.
import type * as icons from 'lucide-static';

export interface Case {
    id: string;
    icon: keyof typeof icons;
    title: string;
    client: string;
    clientLogo?: string;
    clientUrl?: string;
    product: string;
    solution: { name: string; slug: string };
    sector?: { name: string; slug: string };
    summary: string;
    context: string;
    work: string[];
    role: string;
}

export const cases: Case[] = [
    {
        id: 'credito-consignado-clt',
        icon: 'BriefcaseBusiness',
        title: 'Crédito consignado para trabalhadores CLT',
        client: 'Caju Benefícios',
        clientLogo: '/images/clientes/caju.svg',
        clientUrl: 'https://www.caju.com.br/',
        product: 'Crédito consignado para trabalhadores CLT',
        solution: { name: 'Consultoria de crédito', slug: 'consultoria-de-credito' },
        summary:
            'A Caju Benefícios desenvolveu, com a Brücken, um produto de crédito consignado para trabalhadores CLT.',
        context:
            'A Caju centraliza benefícios, despesas e gestão de pessoas em uma única plataforma. A empresa queria oferecer crédito consignado aos trabalhadores CLT atendidos por ela, conduzindo a operação com o próprio time interno.',
        work: [
            'Desenvolvemos as políticas de crédito e precificação do produto de consignado.',
            'Direcionamos o time interno do cliente, com foco em definição de processos, planejamento do time analítico, metodologia de monitoramento e de avaliação de rentabilidade.',
        ],
        role: 'A Brücken atuou como consultoria: as políticas e a direção vieram da Brücken; a operação ficou com o time do cliente.',
    },
    {
        id: 'credito-para-motoristas',
        icon: 'Car',
        title: 'Crédito para motoristas',
        client: 'Giros',
        clientLogo: '/images/clientes/giros.svg',
        clientUrl: 'https://giros.app/',
        product: 'Crédito para motoristas',
        solution: { name: 'Full service', slug: 'full-service' },
        sector: { name: 'Gig economy', slug: 'gig-economy' },
        summary:
            'A Giros oferece crédito a motoristas de aplicativo com o software de decisão e as políticas de crédito criados pela Brücken.',
        context:
            'A Giros oferece crédito a motoristas de aplicativo, entregadores e motoristas de frete usando os ganhos nas corridas como comprovante de renda, sem holerite, com parcela semanal por Pix Automático. Para isso, precisava de uma tecnologia de decisão e de uma política de crédito feitas para esse público.',
        work: [
            'Criamos o software de decisão de crédito usado na operação.',
            'Desenvolvemos as políticas de crédito para motoristas.',
        ],
        role: 'A Brücken atuou no formato full service, entregando a tecnologia de decisão e a política de crédito.',
    },
];
