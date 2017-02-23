export class Catalogue {
    tag: string;
    name: string;
    domain: string;

    //TODO get dynamic
    version: string;
}

export const CATALOGUES: Catalogue[] = [
    {tag: 'DRGs', name: 'Diagnosis Related Groups', domain:'drgs', version:'V3.0'},
    {tag: 'ADRGs', name: 'Base DRG', domain:'adrgs', version:'V3.0'},
    {tag: 'CHOPs', name: 'Swiss Surgery Classification' , domain:'chops' , version:'CHOP_2017'},
    {tag: 'ICDs', name: 'International Classification of Diseases', domain:'icds', version:'ICD10-GM-2016'}
];
