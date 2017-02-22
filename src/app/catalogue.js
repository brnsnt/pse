"use strict";
var Catalogue = (function () {
    function Catalogue() {
    }
    return Catalogue;
}());
exports.Catalogue = Catalogue;
exports.CATALOGUES = [
    { tag: 'DRGs', name: 'Diagnosis Related Groups', domain: 'drgs', version: 'V3.0' },
    { tag: 'ADRGs', name: 'Base DRG', domain: 'adrgs', version: 'V3.0' },
    { tag: 'CHOPs', name: 'Swiss Surgery Classification', domain: 'chops', version: 'CHOP_2017' },
    { tag: 'ICDs', name: 'International Classification of Diseases', domain: 'icds', version: 'ICD10-2008' }
];
//# sourceMappingURL=catalogue.js.map