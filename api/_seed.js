// Dati iniziali importati dal foglio Excel "SCHEDA PRODUZIONE luglio26-2027" (giugno-novembre 2026).
// Le registrazioni con id "r-2026-11-..." sono le stesse che nella versione precedente avevano id "imp-0xx".
export const SEED = {
"campagne": [
{
"id": "lug-ago-2026",
"titolo": "Lug–Ago 2026",
"vendite": "settembre–ottobre 2026",
"ordine": 202607,
"attiva": false,
"dal": "2026-06-01",
"al": "2026-08-31",
"target": {
"achillea-crithmifolia": 90,
"antennaria-dioica-rubra": 30,
"anthemis-maritima": 15,
"arctotheca-calendula": 15,
"cotula-lineariloba": 30,
"dymondia-margaretae": 30,
"erigeron-karvinskianus": 30,
"falkia-repens": 60,
"frankenia-laevis": 150,
"lippia-nodiflora-var-canescens-al84": 750,
"lippia-nodiflora-var-canescens-al60": 60,
"lippia-nodiflora-var-non-canescens": 30,
"pilosella-bdg": 30,
"thymus-ciliatus": 60,
"thymus-serpyllum-elfin": 90,
"thymus-serpyllum-magic-carpet": 90,
"verbena-hybrida": 630,
"verbena-peruviana": 90,
"zoysia-tenuifolia": 330,
"trifoglio-nanissimo-bdg": 30,
"hieracium-auranticum": 30
},
"riporto": {}
},
{
"id": "set-ott-2026",
"titolo": "Set–Ott 2026",
"vendite": "novembre 2026–febbraio 2027",
"ordine": 202609,
"attiva": false,
"dal": "2026-09-01",
"al": "2026-10-31",
"target": {
"achillea-crithmifolia": 60,
"antennaria-dioica-rubra": 30,
"anthemis-maritima": null,
"arctotheca-calendula": null,
"cotula-lineariloba": 30,
"dymondia-margaretae": null,
"erigeron-karvinskianus": 30,
"falkia-repens": 60,
"frankenia-laevis": 60,
"lippia-nodiflora-var-canescens-al84": 450,
"lippia-nodiflora-var-canescens-al60": 30,
"lippia-nodiflora-var-non-canescens": null,
"pilosella-bdg": null,
"thymus-ciliatus": 30,
"thymus-serpyllum-elfin": 30,
"thymus-serpyllum-magic-carpet": 30,
"verbena-hybrida": 450,
"verbena-peruviana": null,
"zoysia-tenuifolia": 180,
"trifoglio-nanissimo-bdg": null,
"hieracium-auranticum": null
},
"riporto": {
"achillea-crithmifolia": 33,
"cotula-lineariloba": 27,
"erigeron-karvinskianus": 1,
"frankenia-laevis": 20,
"lippia-nodiflora-var-canescens-al60": 40,
"verbena-hybrida": 130
}
},
{
"id": "nov-dic-2026",
"titolo": "Nov–Dic 2026",
"vendite": "marzo–aprile 2027",
"ordine": 202611,
"attiva": true,
"dal": "2026-11-01",
"al": "2026-12-31",
"target": {
"achillea-crithmifolia": 400,
"antennaria-dioica-rubra": 60,
"anthemis-maritima": 30,
"arctotheca-calendula": 30,
"cotula-lineariloba": 120,
"dymondia-margaretae": 30,
"erigeron-karvinskianus": 30,
"falkia-repens": 200,
"frankenia-laevis": 200,
"lippia-nodiflora-var-canescens-al84": 800,
"lippia-nodiflora-var-canescens-al60": 150,
"pilosella-bdg": 60,
"thymus-ciliatus": 60,
"thymus-serpyllum-elfin": 400,
"thymus-serpyllum-magic-carpet": 400,
"verbena-hybrida": 1200,
"verbena-peruviana": 150,
"zoysia-tenuifolia": 400,
"trifoglio-nanissimo-bdg": 30,
"hieracium-auranticum": 30
},
"riporto": {
"achillea-crithmifolia": 134,
"antennaria-dioica-rubra": 28,
"cotula-lineariloba": 21,
"erigeron-karvinskianus": 2,
"falkia-repens": 5,
"lippia-nodiflora-var-canescens-al84": 6,
"lippia-nodiflora-var-canescens-al60": 40,
"thymus-ciliatus": 30,
"thymus-serpyllum-elfin": 31,
"thymus-serpyllum-magic-carpet": 21,
"verbena-hybrida": 56,
"zoysia-tenuifolia": 63
}
}
],
"varieta": [
{
"id": "achillea-crithmifolia",
"nome": "Achillea crithmifolia",
"ordine": 0
},
{
"id": "antennaria-dioica-rubra",
"nome": "Antennaria dioica 'Rubra'",
"ordine": 1
},
{
"id": "anthemis-maritima",
"nome": "Anthemis maritima",
"ordine": 2
},
{
"id": "arctotheca-calendula",
"nome": "Arctotheca calendula",
"ordine": 3
},
{
"id": "cotula-lineariloba",
"nome": "Cotula lineariloba",
"ordine": 4
},
{
"id": "dymondia-margaretae",
"nome": "Dymondia margaretae",
"ordine": 5
},
{
"id": "erigeron-karvinskianus",
"nome": "Erigeron karvinskianus",
"ordine": 6
},
{
"id": "falkia-repens",
"nome": "Falkia repens",
"ordine": 7
},
{
"id": "frankenia-laevis",
"nome": "Frankenia laevis",
"ordine": 8
},
{
"id": "lippia-nodiflora-var-canescens-al84",
"nome": "Lippia nodiflora var. canescens AL84",
"ordine": 9
},
{
"id": "lippia-nodiflora-var-canescens-al60",
"nome": "Lippia nodiflora var. canescens AL60",
"ordine": 10
},
{
"id": "lippia-nodiflora-var-non-canescens",
"nome": "Lippia nodiflora var. non canescens",
"ordine": 11
},
{
"id": "pilosella-bdg",
"nome": "Pilosella BDG",
"ordine": 12
},
{
"id": "thymus-ciliatus",
"nome": "Thymus ciliatus",
"ordine": 13
},
{
"id": "thymus-serpyllum-elfin",
"nome": "Thymus serpyllum 'Elfin'",
"ordine": 14
},
{
"id": "thymus-serpyllum-magic-carpet",
"nome": "Thymus serpyllum 'Magic Carpet'",
"ordine": 15
},
{
"id": "verbena-hybrida",
"nome": "Verbena hybrida",
"ordine": 16
},
{
"id": "verbena-peruviana",
"nome": "Verbena peruviana",
"ordine": 17
},
{
"id": "zoysia-tenuifolia",
"nome": "Zoysia tenuifolia",
"ordine": 18
},
{
"id": "trifoglio-nanissimo-bdg",
"nome": "Trifoglio nanissimo BDG",
"ordine": 19
},
{
"id": "hieracium-auranticum",
"nome": "Hieracium auranticum",
"ordine": 20
}
],
"registrazioni": [
{
"id": "r-2026-07-16-falkia-repens",
"campagna": "lug-ago-2026",
"varieta": "falkia-repens",
"data": "2026-07-16",
"qta": 60,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-16-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-07-16",
"qta": 18,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-17-achillea-crithmifolia",
"campagna": "lug-ago-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-07-17",
"qta": 38,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-18-frankenia-laevis",
"campagna": "lug-ago-2026",
"varieta": "frankenia-laevis",
"data": "2026-07-18",
"qta": 72,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-18-lippia-nodiflora-var-non-canescens",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-non-canescens",
"data": "2026-07-18",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-20-erigeron-karvinskianus",
"campagna": "lug-ago-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-07-20",
"qta": 6,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-20-thymus-serpyllum-elfin",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-07-20",
"qta": 9,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-21-erigeron-karvinskianus",
"campagna": "lug-ago-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-07-21",
"qta": 6,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-21-thymus-serpyllum-elfin",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-07-21",
"qta": 37,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-23-thymus-serpyllum-magic-carpet",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-07-23",
"qta": 40,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-23-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-07-23",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-24-pilosella-bdg",
"campagna": "lug-ago-2026",
"varieta": "pilosella-bdg",
"data": "2026-07-24",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-24-thymus-serpyllum-magic-carpet",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-07-24",
"qta": 27,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-24-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-07-24",
"qta": 53,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-25-anthemis-maritima",
"campagna": "lug-ago-2026",
"varieta": "anthemis-maritima",
"data": "2026-07-25",
"qta": 3,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-25-arctotheca-calendula",
"campagna": "lug-ago-2026",
"varieta": "arctotheca-calendula",
"data": "2026-07-25",
"qta": 4,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-25-cotula-lineariloba",
"campagna": "lug-ago-2026",
"varieta": "cotula-lineariloba",
"data": "2026-07-25",
"qta": 11,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-27-erigeron-karvinskianus",
"campagna": "lug-ago-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-07-27",
"qta": 13,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-27-lippia-nodiflora-var-canescens-al60",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al60",
"data": "2026-07-27",
"qta": 8,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-27-thymus-ciliatus",
"campagna": "lug-ago-2026",
"varieta": "thymus-ciliatus",
"data": "2026-07-27",
"qta": 24,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-28-achillea-crithmifolia",
"campagna": "lug-ago-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-07-28",
"qta": 3,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-28-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-07-28",
"qta": 55,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-28-lippia-nodiflora-var-canescens-al60",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al60",
"data": "2026-07-28",
"qta": 10,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-29-dymondia-margaretae",
"campagna": "lug-ago-2026",
"varieta": "dymondia-margaretae",
"data": "2026-07-29",
"qta": 16,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-29-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-07-29",
"qta": 60,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-29-verbena-peruviana",
"campagna": "lug-ago-2026",
"varieta": "verbena-peruviana",
"data": "2026-07-29",
"qta": 15,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-30-antennaria-dioica-rubra",
"campagna": "lug-ago-2026",
"varieta": "antennaria-dioica-rubra",
"data": "2026-07-30",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-30-dymondia-margaretae",
"campagna": "lug-ago-2026",
"varieta": "dymondia-margaretae",
"data": "2026-07-30",
"qta": 9,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-30-frankenia-laevis",
"campagna": "lug-ago-2026",
"varieta": "frankenia-laevis",
"data": "2026-07-30",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-30-trifoglio-nanissimo-bdg",
"campagna": "lug-ago-2026",
"varieta": "trifoglio-nanissimo-bdg",
"data": "2026-07-30",
"qta": 10,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-31-arctotheca-calendula",
"campagna": "lug-ago-2026",
"varieta": "arctotheca-calendula",
"data": "2026-07-31",
"qta": 5,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-31-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-07-31",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-31-thymus-serpyllum-elfin",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-07-31",
"qta": 8,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-07-31-hieracium-auranticum",
"campagna": "lug-ago-2026",
"varieta": "hieracium-auranticum",
"data": "2026-07-31",
"qta": 16,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-01-hieracium-auranticum",
"campagna": "lug-ago-2026",
"varieta": "hieracium-auranticum",
"data": "2026-08-01",
"qta": 14,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-03-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-08-03",
"qta": 68,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-03-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-08-03",
"qta": 16,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-04-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-08-04",
"qta": 39,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-04-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-08-04",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-05-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-08-05",
"qta": 60,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-06-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-08-06",
"qta": 15,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-06-thymus-serpyllum-magic-carpet",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-08-06",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-07-frankenia-laevis",
"campagna": "lug-ago-2026",
"varieta": "frankenia-laevis",
"data": "2026-08-07",
"qta": 17,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-07-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-08-07",
"qta": 47,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-08-cotula-lineariloba",
"campagna": "lug-ago-2026",
"varieta": "cotula-lineariloba",
"data": "2026-08-08",
"qta": 7,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-08-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-08-08",
"qta": 39,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-10-frankenia-laevis",
"campagna": "lug-ago-2026",
"varieta": "frankenia-laevis",
"data": "2026-08-10",
"qta": 7,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-10-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-08-10",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-11-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-08-11",
"qta": 21,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-11-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-08-11",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-12-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-08-12",
"qta": 23,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-13-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-08-13",
"qta": 11,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-13-pilosella-bdg",
"campagna": "lug-ago-2026",
"varieta": "pilosella-bdg",
"data": "2026-08-13",
"qta": 10,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-13-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-08-13",
"qta": 10,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-13-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-08-13",
"qta": 40,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-14-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-08-14",
"qta": 86,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-17-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-08-17",
"qta": 50,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-18-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-08-18",
"qta": 40,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-19-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-08-19",
"qta": 60,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-20-achillea-crithmifolia",
"campagna": "lug-ago-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-08-20",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-21-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-08-21",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-22-cotula-lineariloba",
"campagna": "lug-ago-2026",
"varieta": "cotula-lineariloba",
"data": "2026-08-22",
"qta": 15,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-22-lippia-nodiflora-var-canescens-al60",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al60",
"data": "2026-08-22",
"qta": 40,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-24-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-08-24",
"qta": 35,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-25-thymus-serpyllum-magic-carpet",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-08-25",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-25-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-08-25",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-26-cotula-lineariloba",
"campagna": "lug-ago-2026",
"varieta": "cotula-lineariloba",
"data": "2026-08-26",
"qta": 4,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-26-thymus-serpyllum-magic-carpet",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-08-26",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-26-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-08-26",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-27-cotula-lineariloba",
"campagna": "lug-ago-2026",
"varieta": "cotula-lineariloba",
"data": "2026-08-27",
"qta": 8,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-27-frankenia-laevis",
"campagna": "lug-ago-2026",
"varieta": "frankenia-laevis",
"data": "2026-08-27",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-08-27-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-08-27",
"qta": 40,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-02-thymus-ciliatus",
"campagna": "set-ott-2026",
"varieta": "thymus-ciliatus",
"data": "2026-09-02",
"qta": 23,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-03-achillea-crithmifolia",
"campagna": "set-ott-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-09-03",
"qta": 9,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-03-antennaria-dioica-rubra",
"campagna": "set-ott-2026",
"varieta": "antennaria-dioica-rubra",
"data": "2026-09-03",
"qta": 25,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-03-thymus-ciliatus",
"campagna": "set-ott-2026",
"varieta": "thymus-ciliatus",
"data": "2026-09-03",
"qta": 7,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-04-achillea-crithmifolia",
"campagna": "set-ott-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-09-04",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-04-antennaria-dioica-rubra",
"campagna": "set-ott-2026",
"varieta": "antennaria-dioica-rubra",
"data": "2026-09-04",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-04-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-09-04",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-05-falkia-repens",
"campagna": "set-ott-2026",
"varieta": "falkia-repens",
"data": "2026-09-05",
"qta": 18,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-07-falkia-repens",
"campagna": "set-ott-2026",
"varieta": "falkia-repens",
"data": "2026-09-07",
"qta": 17,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-07-thymus-serpyllum-elfin",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-09-07",
"qta": 8,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-07-verbena-peruviana",
"campagna": "set-ott-2026",
"varieta": "verbena-peruviana",
"data": "2026-09-07",
"qta": 15,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-08-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-09-08",
"qta": 40,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-08-thymus-serpyllum-elfin",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-09-08",
"qta": 18,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-09-frankenia-laevis",
"campagna": "set-ott-2026",
"varieta": "frankenia-laevis",
"data": "2026-09-09",
"qta": 10,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-09-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-09-09",
"qta": 48,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-09-thymus-serpyllum-elfin",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-09-09",
"qta": 8,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-10-achillea-crithmifolia",
"campagna": "set-ott-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-09-10",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-10-cotula-lineariloba",
"campagna": "set-ott-2026",
"varieta": "cotula-lineariloba",
"data": "2026-09-10",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-10-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-09-10",
"qta": 36,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-16-arctotheca-calendula",
"campagna": "set-ott-2026",
"varieta": "arctotheca-calendula",
"data": "2026-09-16",
"qta": 16,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-16-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-09-16",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-17-achillea-crithmifolia",
"campagna": "set-ott-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-09-17",
"qta": 8,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-17-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-09-17",
"qta": 40,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-19-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-09-19",
"qta": 75,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-22-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-09-22",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-22-verbena-hybrida",
"campagna": "set-ott-2026",
"varieta": "verbena-hybrida",
"data": "2026-09-22",
"qta": 14,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-23-thymus-ciliatus",
"campagna": "set-ott-2026",
"varieta": "thymus-ciliatus",
"data": "2026-09-23",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-23-verbena-hybrida",
"campagna": "set-ott-2026",
"varieta": "verbena-hybrida",
"data": "2026-09-23",
"qta": 66,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-24-thymus-ciliatus",
"campagna": "set-ott-2026",
"varieta": "thymus-ciliatus",
"data": "2026-09-24",
"qta": 10,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-24-thymus-serpyllum-magic-carpet",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-09-24",
"qta": 5,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-24-verbena-hybrida",
"campagna": "set-ott-2026",
"varieta": "verbena-hybrida",
"data": "2026-09-24",
"qta": 60,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-25-antennaria-dioica-rubra",
"campagna": "set-ott-2026",
"varieta": "antennaria-dioica-rubra",
"data": "2026-09-25",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-25-thymus-serpyllum-magic-carpet",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-09-25",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-26-frankenia-laevis",
"campagna": "set-ott-2026",
"varieta": "frankenia-laevis",
"data": "2026-09-26",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-26-verbena-peruviana",
"campagna": "set-ott-2026",
"varieta": "verbena-peruviana",
"data": "2026-09-26",
"qta": 10,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-29-antennaria-dioica-rubra",
"campagna": "set-ott-2026",
"varieta": "antennaria-dioica-rubra",
"data": "2026-09-29",
"qta": 9,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-29-pilosella-bdg",
"campagna": "set-ott-2026",
"varieta": "pilosella-bdg",
"data": "2026-09-29",
"qta": 9,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-09-29-zoysia-tenuifolia",
"campagna": "set-ott-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-09-29",
"qta": 61,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-01-verbena-peruviana",
"campagna": "set-ott-2026",
"varieta": "verbena-peruviana",
"data": "2026-10-01",
"qta": 26,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-02-pilosella-bdg",
"campagna": "set-ott-2026",
"varieta": "pilosella-bdg",
"data": "2026-10-02",
"qta": 8,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-02-verbena-peruviana",
"campagna": "set-ott-2026",
"varieta": "verbena-peruviana",
"data": "2026-10-02",
"qta": 26,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-03-achillea-crithmifolia",
"campagna": "set-ott-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-10-03",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-03-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-10-03",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-06-lippia-nodiflora-var-canescens-al60",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al60",
"data": "2026-10-06",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-06-pilosella-bdg",
"campagna": "set-ott-2026",
"varieta": "pilosella-bdg",
"data": "2026-10-06",
"qta": 5,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-06-thymus-serpyllum-magic-carpet",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-10-06",
"qta": 16,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-07-erigeron-karvinskianus",
"campagna": "set-ott-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-10-07",
"qta": 6,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-07-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-10-07",
"qta": 60,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-07-pilosella-bdg",
"campagna": "set-ott-2026",
"varieta": "pilosella-bdg",
"data": "2026-10-07",
"qta": 3,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-08-erigeron-karvinskianus",
"campagna": "set-ott-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-10-08",
"qta": 6,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-08-falkia-repens",
"campagna": "set-ott-2026",
"varieta": "falkia-repens",
"data": "2026-10-08",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-08-thymus-serpyllum-magic-carpet",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-10-08",
"qta": 4,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-14-erigeron-karvinskianus",
"campagna": "set-ott-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-10-14",
"qta": 3,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-14-thymus-serpyllum-elfin",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-10-14",
"qta": 13,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-15-thymus-serpyllum-elfin",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-10-15",
"qta": 14,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-15-verbena-hybrida",
"campagna": "set-ott-2026",
"varieta": "verbena-hybrida",
"data": "2026-10-15",
"qta": 57,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-16-achillea-crithmifolia",
"campagna": "set-ott-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-10-16",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-16-cotula-lineariloba",
"campagna": "set-ott-2026",
"varieta": "cotula-lineariloba",
"data": "2026-10-16",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-16-verbena-hybrida",
"campagna": "set-ott-2026",
"varieta": "verbena-hybrida",
"data": "2026-10-16",
"qta": 53,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-20-erigeron-karvinskianus",
"campagna": "set-ott-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-10-20",
"qta": 16,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-20-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-10-20",
"qta": 68,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-21-achillea-crithmifolia",
"campagna": "set-ott-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-10-21",
"qta": 25,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-21-verbena-hybrida",
"campagna": "set-ott-2026",
"varieta": "verbena-hybrida",
"data": "2026-10-21",
"qta": 34,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-22-anthemis-maritima",
"campagna": "set-ott-2026",
"varieta": "anthemis-maritima",
"data": "2026-10-22",
"qta": 7,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-22-arctotheca-calendula",
"campagna": "set-ott-2026",
"varieta": "arctotheca-calendula",
"data": "2026-10-22",
"qta": 11,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-22-verbena-hybrida",
"campagna": "set-ott-2026",
"varieta": "verbena-hybrida",
"data": "2026-10-22",
"qta": 92,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-23-arctotheca-calendula",
"campagna": "set-ott-2026",
"varieta": "arctotheca-calendula",
"data": "2026-10-23",
"qta": 9,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-23-verbena-peruviana",
"campagna": "set-ott-2026",
"varieta": "verbena-peruviana",
"data": "2026-10-23",
"qta": 18,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-24-verbena-peruviana",
"campagna": "set-ott-2026",
"varieta": "verbena-peruviana",
"data": "2026-10-24",
"qta": 20,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-24-zoysia-tenuifolia",
"campagna": "set-ott-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-10-24",
"qta": 15,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-26-zoysia-tenuifolia",
"campagna": "set-ott-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-10-26",
"qta": 72,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-27-zoysia-tenuifolia",
"campagna": "set-ott-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-10-27",
"qta": 49,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-28-lippia-nodiflora-var-canescens-al84",
"campagna": "set-ott-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-10-28",
"qta": 9,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-28-thymus-serpyllum-magic-carpet",
"campagna": "set-ott-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-10-28",
"qta": 6,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-28-zoysia-tenuifolia",
"campagna": "set-ott-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-10-28",
"qta": 46,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-29-achillea-crithmifolia",
"campagna": "set-ott-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-10-29",
"qta": 38,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-30-achillea-crithmifolia",
"campagna": "set-ott-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-10-30",
"qta": 33,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-10-31-dymondia-margaretae",
"campagna": "set-ott-2026",
"varieta": "dymondia-margaretae",
"data": "2026-10-31",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-02-falkia-repens",
"campagna": "nov-dic-2026",
"varieta": "falkia-repens",
"data": "2026-11-02",
"qta": 25,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-03-erigeron-karvinskianus",
"campagna": "nov-dic-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-11-03",
"qta": 4,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-03-falkia-repens",
"campagna": "nov-dic-2026",
"varieta": "falkia-repens",
"data": "2026-11-03",
"qta": 36,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-03-lippia-nodiflora-var-canescens-al60",
"campagna": "nov-dic-2026",
"varieta": "lippia-nodiflora-var-canescens-al60",
"data": "2026-11-03",
"qta": 33,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-04-erigeron-karvinskianus",
"campagna": "nov-dic-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-11-04",
"qta": 4,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-04-thymus-serpyllum-elfin",
"campagna": "nov-dic-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-11-04",
"qta": 7,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-04-verbena-hybrida",
"campagna": "nov-dic-2026",
"varieta": "verbena-hybrida",
"data": "2026-11-04",
"qta": 78,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-04-verbena-peruviana",
"campagna": "nov-dic-2026",
"varieta": "verbena-peruviana",
"data": "2026-11-04",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-05-thymus-serpyllum-elfin",
"campagna": "nov-dic-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-11-05",
"qta": 34,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-05-verbena-hybrida",
"campagna": "nov-dic-2026",
"varieta": "verbena-hybrida",
"data": "2026-11-05",
"qta": 54,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-06-lippia-nodiflora-var-canescens-al84",
"campagna": "nov-dic-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-11-06",
"qta": 60,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-07-lippia-nodiflora-var-canescens-al84",
"campagna": "nov-dic-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-11-07",
"qta": 60,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-09-anthemis-maritima",
"campagna": "nov-dic-2026",
"varieta": "anthemis-maritima",
"data": "2026-11-09",
"qta": 10,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-09-cotula-lineariloba",
"campagna": "nov-dic-2026",
"varieta": "cotula-lineariloba",
"data": "2026-11-09",
"qta": 28,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-09-verbena-peruviana",
"campagna": "nov-dic-2026",
"varieta": "verbena-peruviana",
"data": "2026-11-09",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-10-thymus-ciliatus",
"campagna": "nov-dic-2026",
"varieta": "thymus-ciliatus",
"data": "2026-11-10",
"qta": 40,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-10-thymus-serpyllum-magic-carpet",
"campagna": "nov-dic-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-11-10",
"qta": 43,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-10-verbena-peruviana",
"campagna": "nov-dic-2026",
"varieta": "verbena-peruviana",
"data": "2026-11-10",
"qta": 4,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-11-antennaria-dioica-rubra",
"campagna": "nov-dic-2026",
"varieta": "antennaria-dioica-rubra",
"data": "2026-11-11",
"qta": 35,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-11-falkia-repens",
"campagna": "nov-dic-2026",
"varieta": "falkia-repens",
"data": "2026-11-11",
"qta": 5,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-11-zoysia-tenuifolia",
"campagna": "nov-dic-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-11-11",
"qta": 119,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-12-frankenia-laevis",
"campagna": "nov-dic-2026",
"varieta": "frankenia-laevis",
"data": "2026-11-12",
"qta": 5,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-12-verbena-hybrida",
"campagna": "nov-dic-2026",
"varieta": "verbena-hybrida",
"data": "2026-11-12",
"qta": 205,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-12-zoysia-tenuifolia",
"campagna": "nov-dic-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-11-12",
"qta": 39,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-13-achillea-crithmifolia",
"campagna": "nov-dic-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-11-13",
"qta": 52,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-13-frankenia-laevis",
"campagna": "nov-dic-2026",
"varieta": "frankenia-laevis",
"data": "2026-11-13",
"qta": 85,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-13-lippia-nodiflora-var-canescens-al84",
"campagna": "nov-dic-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-11-13",
"qta": 117,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-13-verbena-hybrida",
"campagna": "nov-dic-2026",
"varieta": "verbena-hybrida",
"data": "2026-11-13",
"qta": 18,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-14-anthemis-maritima",
"campagna": "nov-dic-2026",
"varieta": "anthemis-maritima",
"data": "2026-11-14",
"qta": 16,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-14-arctotheca-calendula",
"campagna": "nov-dic-2026",
"varieta": "arctotheca-calendula",
"data": "2026-11-14",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-14-lippia-nodiflora-var-canescens-al84",
"campagna": "nov-dic-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-11-14",
"qta": 139,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-14-lippia-nodiflora-var-canescens-al60",
"campagna": "nov-dic-2026",
"varieta": "lippia-nodiflora-var-canescens-al60",
"data": "2026-11-14",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-14-pilosella-bdg",
"campagna": "nov-dic-2026",
"varieta": "pilosella-bdg",
"data": "2026-11-14",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-14-thymus-serpyllum-magic-carpet",
"campagna": "nov-dic-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-11-14",
"qta": 44,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-16-dymondia-margaretae",
"campagna": "nov-dic-2026",
"varieta": "dymondia-margaretae",
"data": "2026-11-16",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-16-falkia-repens",
"campagna": "nov-dic-2026",
"varieta": "falkia-repens",
"data": "2026-11-16",
"qta": 58,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-16-thymus-serpyllum-elfin",
"campagna": "nov-dic-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-11-16",
"qta": 15,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-17-cotula-lineariloba",
"campagna": "nov-dic-2026",
"varieta": "cotula-lineariloba",
"data": "2026-11-17",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-17-erigeron-karvinskianus",
"campagna": "nov-dic-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-11-17",
"qta": 5,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-17-falkia-repens",
"campagna": "nov-dic-2026",
"varieta": "falkia-repens",
"data": "2026-11-17",
"qta": 32,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-17-verbena-hybrida",
"campagna": "nov-dic-2026",
"varieta": "verbena-hybrida",
"data": "2026-11-17",
"qta": 39,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-17-trifoglio-nanissimo-bdg",
"campagna": "nov-dic-2026",
"varieta": "trifoglio-nanissimo-bdg",
"data": "2026-11-17",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-18-erigeron-karvinskianus",
"campagna": "nov-dic-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-11-18",
"qta": 13,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-18-verbena-hybrida",
"campagna": "nov-dic-2026",
"varieta": "verbena-hybrida",
"data": "2026-11-18",
"qta": 44,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-18-zoysia-tenuifolia",
"campagna": "nov-dic-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-11-18",
"qta": 71,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-19-anthemis-maritima",
"campagna": "nov-dic-2026",
"varieta": "anthemis-maritima",
"data": "2026-11-19",
"qta": 4,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-19-erigeron-karvinskianus",
"campagna": "nov-dic-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-11-19",
"qta": 8,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-19-verbena-peruviana",
"campagna": "nov-dic-2026",
"varieta": "verbena-peruviana",
"data": "2026-11-19",
"qta": 28,
"nota": "",
"autore": "import"
},
{
"id": "r-2026-11-19-zoysia-tenuifolia",
"campagna": "nov-dic-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-11-19",
"qta": 121,
"nota": "",
"autore": "import"
},
{
"id": "p-giu-2026-anthemis-maritima",
"campagna": "lug-ago-2026",
"varieta": "anthemis-maritima",
"data": "2026-06-30",
"periodo": "Giugno 2026 (totale, senza dettaglio giornaliero)",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "p-giu-2026-arctotheca-calendula",
"campagna": "lug-ago-2026",
"varieta": "arctotheca-calendula",
"data": "2026-06-30",
"periodo": "Giugno 2026 (totale, senza dettaglio giornaliero)",
"qta": 6,
"nota": "",
"autore": "import"
},
{
"id": "p-giu-2026-cotula-lineariloba",
"campagna": "lug-ago-2026",
"varieta": "cotula-lineariloba",
"data": "2026-06-30",
"periodo": "Giugno 2026 (totale, senza dettaglio giornaliero)",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "p-giu-2026-dymondia-margaretae",
"campagna": "lug-ago-2026",
"varieta": "dymondia-margaretae",
"data": "2026-06-30",
"periodo": "Giugno 2026 (totale, senza dettaglio giornaliero)",
"qta": 5,
"nota": "",
"autore": "import"
},
{
"id": "p-giu-2026-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-06-30",
"periodo": "Giugno 2026 (totale, senza dettaglio giornaliero)",
"qta": 90,
"nota": "",
"autore": "import"
},
{
"id": "p-giu-2026-lippia-nodiflora-var-canescens-al60",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al60",
"data": "2026-06-30",
"periodo": "Giugno 2026 (totale, senza dettaglio giornaliero)",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "p-giu-2026-thymus-serpyllum-magic-carpet",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-magic-carpet",
"data": "2026-06-30",
"periodo": "Giugno 2026 (totale, senza dettaglio giornaliero)",
"qta": 30,
"nota": "",
"autore": "import"
},
{
"id": "p-giu-2026-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-06-30",
"periodo": "Giugno 2026 (totale, senza dettaglio giornaliero)",
"qta": 180,
"nota": "",
"autore": "import"
},
{
"id": "p-giu-2026-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-06-30",
"periodo": "Giugno 2026 (totale, senza dettaglio giornaliero)",
"qta": 25,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-achillea-crithmifolia",
"campagna": "lug-ago-2026",
"varieta": "achillea-crithmifolia",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 52,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-erigeron-karvinskianus",
"campagna": "lug-ago-2026",
"varieta": "erigeron-karvinskianus",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 6,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-frankenia-laevis",
"campagna": "lug-ago-2026",
"varieta": "frankenia-laevis",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 34,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-lippia-nodiflora-var-canescens-al84",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al84",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 236,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-lippia-nodiflora-var-canescens-al60",
"campagna": "lug-ago-2026",
"varieta": "lippia-nodiflora-var-canescens-al60",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 12,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-thymus-ciliatus",
"campagna": "lug-ago-2026",
"varieta": "thymus-ciliatus",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 36,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-thymus-serpyllum-elfin",
"campagna": "lug-ago-2026",
"varieta": "thymus-serpyllum-elfin",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 36,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-verbena-hybrida",
"campagna": "lug-ago-2026",
"varieta": "verbena-hybrida",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 211,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-verbena-peruviana",
"campagna": "lug-ago-2026",
"varieta": "verbena-peruviana",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 90,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-zoysia-tenuifolia",
"campagna": "lug-ago-2026",
"varieta": "zoysia-tenuifolia",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 50,
"nota": "",
"autore": "import"
},
{
"id": "p-lug-1-15-2026-trifoglio-nanissimo-bdg",
"campagna": "lug-ago-2026",
"varieta": "trifoglio-nanissimo-bdg",
"data": "2026-07-15",
"periodo": "1–15 luglio 2026 (totale, senza dettaglio giornaliero)",
"qta": 20,
"nota": "",
"autore": "import"
}
],
"giornate": {
"2026-09-22": {
"ore": null,
"taleatori": [],
"riempitori": [],
"nota": "Thymus serpyllum 'Magic Carpet': 14 semi (non conteggiati come talee)"
}
}
};
