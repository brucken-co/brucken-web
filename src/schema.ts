// Dados estruturados (JSON-LD) das páginas internas
import { site } from './site';

const abs = (path: string) => new URL(path, site.url).href;

export function breadcrumbSchema(items: { label: string; href?: string }[], currentPath: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            item: abs(item.href ?? currentPath),
        })),
    };
}

export function faqSchema(items: { q: string; a: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };
}

export function serviceSchema(name: string, description: string, path: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url: abs(path),
        areaServed: 'BR',
        provider: { '@type': 'Organization', name: site.name, url: `${site.url}/` },
    };
}
