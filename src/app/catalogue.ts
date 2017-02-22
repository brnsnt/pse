export class Catalogue {
    tag: string;
    name: string;
    //TODO check special case, mdcs, partitions domain in DRGs catalogue. What's this?
    domain: string;

    //TODO get dynamic
    //TODO check: ADRGS version === DRGs Versions ??
    version: string;
}

export const CATALOGUES: Catalogue[] = [
    {tag: 'DRGs', name: 'Diagnosis Related Groups', domain:'drgs', version:'V3.0'},
    {tag: 'ADRGs', name: 'Base DRG', domain:'adrgs', version:'V3.0'},
    {tag: 'CHOPs', name: 'Swiss Surgery Classification' , domain:'chops' , version:'CHOP_2017'},
    {tag: 'ICDs', name: 'International Classification of Diseases', domain:'icds', version:'ICD10-2008'}
];