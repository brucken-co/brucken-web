// Casos de uso exibidos em /cases/. Clientes anonimizados até a validação com cada um.
import type * as icons from 'lucide-static';

export interface Case {
    id: string;
    icon: keyof typeof icons;
    title: string;
    client: string;
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
        client: 'Empresa de benefícios',
        product: 'Crédito consignado para trabalhadores CLT',
        solution: { name: 'Consultoria de crédito', slug: 'consultoria-de-credito' },
        summary:
            'Uma empresa de benefícios desenvolveu, com a Brücken, um produto de crédito consignado para trabalhadores CLT.',
        context:
            'A empresa de benefícios queria oferecer crédito consignado aos trabalhadores CLT atendidos pela sua plataforma, conduzindo a operação com o próprio time interno.',
        work: [
            'Desenvolvemos as políticas de crédito do produto de consignado.',
            'Direcionamos o time interno do cliente, que ficou responsável pela operação.',
        ],
        role: 'A Brücken atuou como consultoria: as políticas e a direção vieram da Brücken; a operação ficou com o time do cliente.',
    },
    {
        id: 'credito-para-motoristas',
        icon: 'Car',
        title: 'Crédito para motoristas',
        client: 'Operação de crédito para motoristas',
        product: 'Crédito para motoristas',
        solution: { name: 'Full service', slug: 'full-service' },
        sector: { name: 'Gig economy', slug: 'gig-economy' },
        summary:
            'Um produto de crédito para motoristas com o software de decisão e as políticas de crédito criados pela Brücken.',
        context:
            'O cliente queria oferecer crédito a motoristas sem precisar construir internamente a tecnologia de decisão nem a política de crédito.',
        work: [
            'Criamos o software de decisão de crédito usado na operação.',
            'Desenvolvemos as políticas de crédito para motoristas.',
        ],
        role: 'A Brücken atuou no formato full service, entregando a tecnologia de decisão e a política de crédito.',
    },
];
