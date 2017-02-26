/**
 * Model for a catalogue from the api.
 */
export class Catalogue {
  tag: string;
  name: string;
  domain: string;
  versions: string[];
}

export const CATALOGUES: Catalogue[] = [
  {
    tag: 'DRGs',
    name: 'Diagnosis Related Groups',
    domain: 'drgs',
    versions: ["V1.0", "V2.0", "V3.0", "V4.0", "V5.0", "V6.0"]
  },
  {
    tag: 'ADRGs',
    name: 'Base DRG',
    domain: 'adrgs',
    versions: ["V1.0", "V2.0", "V3.0", "V4.0", "V5.0", "V6.0"]
  },
  {
    tag: 'CHOPs',
    name: 'Swiss Surgery Classification',
    domain: 'chops',
    versions: ["CHOP_2011","CHOP_2012","CHOP_2013","CHOP_2014","CHOP_2015","CHOP_2016","CHOP_2017"]
  },
  {
    tag: 'ICDs',
    name: 'International Classification of Diseases',
    domain: 'icds',
    versions: ["ICD10-2008", "ICD10-2010", "ICD10-2016", "ICD10-GM-2008", "ICD10-GM-2010", "ICD10-GM-2011",
      "ICD10-GM-2012", "ICD10-GM-2013", "ICD10-GM-2014", "ICD10-GM-2015", "ICD10-GM-2016"]
  }
];
