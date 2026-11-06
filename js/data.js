/* Green Atlantic PVC — CAD library and moulding data.
   f: path to the drawing (kept at the same address it had on the old site, so
      existing links and QR codes keep working).
   d: how the preview is drawn —
      ["img", file]                     catalog profile drawing (profiles/*.png)
      ["board", thick, width, detail]   board section to scale; detail: "siding" | "fin" | "both" | "notch" | "drip" | ""
      ["sheet", thick, kind]            sheet section; kind: "" | "beaded" | "vented"
      ["corner", thick, leg, rabbet]    folded corner board
      ["ext", leg, angle]               extruded outside corner
      ["inside", angle]                 extruded inside corner
      ["photo", file]                   real product photo (img/*.jpg)
      ["outline"]                       plain PDF tile — no accurate preview yet
   On the live site, cad-thumbs/index.js (made by the GitHub "Copy old CAD files"
   step) adds a thumbnail of the real drawing for every card that is not a
   catalog profile drawing. */
window.GA_CAD = [
  /* Sealed edge trim */
  {g:"trim",n:'1" x 3" Trim',s:'3/4" x 2 1/2" actual',f:"wp-content/uploads/2020/11/1x3Trim.pdf",d:["board",.75,2.5]},
  {g:"trim",n:'1" x 4" Trim',s:'3/4" x 3 1/2" actual',f:"wp-content/uploads/2020/11/1x4Trim.pdf",d:["board",.75,3.5]},
  {g:"trim",n:'1" x 5" Trim',s:'3/4" x 4 1/2" actual',f:"wp-content/uploads/2020/11/1x5Trim.pdf",d:["board",.75,4.5]},
  {g:"trim",n:'1" x 6" Trim',s:'3/4" x 5 1/2" actual',f:"wp-content/uploads/2020/11/1x6Trim.pdf",d:["board",.75,5.5]},
  {g:"trim",n:'1" x 8" Trim',s:'3/4" x 7 1/4" actual',f:"wp-content/uploads/2020/11/1x8Trim.pdf",d:["board",.75,7.25]},
  {g:"trim",n:'1" x 10" Trim',s:'3/4" x 9 1/4" actual',f:"wp-content/uploads/2020/11/1x10Trim.pdf",d:["board",.75,9.25]},
  {g:"trim",n:'1" x 12" Trim',s:'3/4" x 11 1/4" actual',f:"wp-content/uploads/2020/11/1x12Trim.pdf",d:["board",.75,11.25]},
  {g:"trim",n:'1" x 16" Trim',s:'3/4" x 15 1/4" actual',f:"wp-content/uploads/2020/11/1x16Trim.pdf",d:["board",.75,15.25]},
  {g:"trim",n:'5/4" x 4" Trim',s:'1" x 3 1/2" actual',f:"wp-content/uploads/2020/11/54x4Trim.pdf",d:["board",1,3.5]},
  {g:"trim",n:'5/4" x 5" Trim',s:'1" x 4 1/2" actual',f:"wp-content/uploads/2020/11/54x5Trim.pdf",d:["board",1,4.5]},
  {g:"trim",n:'5/4" x 6" Trim',s:'1" x 5 1/2" actual',f:"wp-content/uploads/2020/11/54x6Trim.pdf",d:["board",1,5.5]},
  {g:"trim",n:'5/4" x 8" Trim',s:'1" x 7 1/4" actual',f:"wp-content/uploads/2020/11/54x8Trim.pdf",d:["board",1,7.25]},
  {g:"trim",n:'5/4" x 10" Trim',s:'1" x 9 1/4" actual',f:"wp-content/uploads/2020/11/54x10Trim.pdf",d:["board",1,9.25]},
  {g:"trim",n:'5/4" x 12" Trim',s:'1" x 11 1/4" actual',f:"wp-content/uploads/2020/11/54x12Trim.pdf",d:["board",1,11.25]},
  {g:"trim",n:'5/4" x 16" Trim',s:'1" x 15 1/4" actual',f:"wp-content/uploads/2020/11/54x16Trim.pdf",d:["board",1,15.25]},
  {g:"trim",n:'6/4" x 4" Trim',s:'1 1/4" x 3 1/2" actual',f:"wp-content/uploads/2025/06/trim-17.pdf",d:["board",1.25,3.5]},
  {g:"trim",n:'6/4" x 6" Trim',s:'1 1/4" x 5 1/2" actual',f:"wp-content/uploads/2025/06/trim-18.pdf",d:["board",1.25,5.5]},
  {g:"trim",n:'6/4" x 8" Trim',s:'1 1/4" x 7 1/4" actual',f:"wp-content/uploads/2025/06/trim-19.pdf",d:["board",1.25,7.25]},
  {g:"trim",n:'6/4" x 10" Trim',s:'1 1/4" x 9 1/4" actual',f:"wp-content/uploads/2025/06/trim-20.pdf",d:["board",1.25,9.25]},
  {g:"trim",n:'6/4" x 12" Trim',s:'1 1/4" x 11 1/4" actual',f:"wp-content/uploads/2025/06/trim-21.pdf",d:["board",1.25,11.25]},
  /* Sheets */
  {g:"sheet",n:'1/4" x 4\' Sheet',s:"10' and 20' lengths",f:"wp-content/uploads/2025/06/sheets_05.pdf",d:["sheet",.25]},
  {g:"sheet",n:'3/8" x 4\' Sheet',s:"10' and 20' lengths",f:"wp-content/uploads/2023/11/sheets_01.pdf",d:["sheet",.375]},
  {g:"sheet",n:'1/2" x 4\' Sheet',s:"10' and 20' lengths",f:"wp-content/uploads/2023/11/sheets_02.pdf",d:["sheet",.5]},
  {g:"sheet",n:'5/8" x 4\' Sheet',s:"10' and 20' lengths",f:"wp-content/uploads/2025/06/sheets_06.pdf",d:["sheet",.625]},
  {g:"sheet",n:'3/4" x 4\' Sheet',s:"10' and 20' lengths",f:"wp-content/uploads/2023/11/sheets_03.pdf",d:["sheet",.75]},
  {g:"sheet",n:'1" x 4\' Sheet',s:"10' and 20' lengths",f:"wp-content/uploads/2023/11/sheets_04.pdf",d:["sheet",1]},
  {g:"sheet",n:'1 1/4" x 4\' Sheet',s:"10' and 20' lengths",f:"wp-content/uploads/2025/06/sheets_07.pdf",d:["sheet",1.25]},
  /* Mouldings, beadboard and corners — outlines from the Green Atlantic sample board, at true scale */
  {g:"crown",c:"GASC",n:"Super Crown",s:"3 5/8\" solid crown",f:null,d:["img","gasc"]},
  {g:"crown",c:"GA51",n:"2 1/4\" Crown",s:"9/16\" x 2 1/4\" x 18'",f:"wp-content/uploads/2025/01/916x214Crown.pdf",d:["img","ga51"]},
  {g:"crown",c:"GA49",n:"3 5/8\" Crown",s:"9/16\" x 3 5/8\" x 18'",f:"wp-content/uploads/2025/01/916x358Crown.pdf",d:["img","ga49"]},
  {g:"crown",c:"GA47",n:"4 5/8\" Crown",s:"5/8\" x 4 5/8\" x 18'",f:"wp-content/uploads/2025/01/58x458Crown.pdf",d:["img","ga47"]},
  {g:"crown",c:"GA45",n:"5 1/2\" Crown",s:"9/16\" x 5 1/2\" x 18'",f:"wp-content/uploads/2025/01/916x512Crown.pdf",d:["img","ga45"]},
  {g:"crown",c:"GAPC",n:"Pediment Crown",s:"2\" x 2 7/8\" x 18'",f:"wp-content/uploads/2025/01/CAD-pediment-crown.pdf",d:["img","gapc"]},
  {g:"crown",c:"GA68",n:"Rams Crown",s:"1 13/32\" x 2 1/16\" x 18'",f:"wp-content/uploads/2025/01/CAD-rams-crown.pdf",d:["img","ga68"]},
  {g:"crown",c:"GAIR",n:"Imperial Rake",s:"1 3/8\" x 2 3/4\"",f:"wp-content/uploads/2021/02/CAD-imperial-rake.pdf",d:["img","gair"]},
  {g:"crown",c:"GA75",n:"Bed",s:"9/16\" x 1 5/8\" x 18'",f:"wp-content/uploads/2025/01/916x158Bed.pdf",d:["img","ga75"]},
  {g:"crown",c:"GA217",n:"Band",s:"5/8\" x 1 3/4\" x 18'",f:"wp-content/uploads/2025/01/58x134BaseCap.pdf",d:["img","ga217"]},
  {g:"crown",c:"GA164",n:"Base Cap",s:"11/16\" x 1 1/8\" x 18'",f:"wp-content/uploads/2025/06/1116x118Panel.pdf",d:["img","ga164"]},
  {g:"crown",c:"GA093",n:"Cove",s:"3/4\" x 3/4\" x 18'",f:"wp-content/uploads/2025/01/34x34Cove.pdf",d:["img","ga093"]},
  {g:"crown",c:"GA105",n:"Quarter Round",s:"3/4\" x 3/4\" x 18'",f:"wp-content/uploads/2025/01/34x34QuarterRound.pdf",d:["img","ga105"]},
  {g:"crown",c:"GACS",n:"Colonial Shoe",s:"11/16\" x 1 1/2\" x 18'",f:"wp-content/uploads/2025/02/colonial-shoe.pdf",d:["img","gacs"]},
  {g:"crown",c:"GA356",n:"Colonial Base",s:"1/2\" x 4 1/4\"",f:null,d:["img","ga356"]},
  {g:"casing",c:"GA7467",n:"Casing / Lineal",s:"1 1/8\" x 3 1/2\" x 18'",f:"wp-content/uploads/2025/06/ga7467-casing.pdf",d:["img","ga7467"]},
  {g:"casing",c:"GA7966",n:"Casing / Lineal",s:"1 1/8\" x 5 1/2\" x 18'",f:"wp-content/uploads/2025/06/ga7966-casing.pdf",d:["img","ga7966"]},
  {g:"casing",c:"GA2590",n:"Backband Casing",s:"1 3/16\" x 4 1/2\"",f:"wp-content/uploads/2025/02/backband-casing.pdf",d:["img","ga2590"]},
  {g:"casing",c:"GA180",n:"Brick Mould",s:"1 1/4\" x 2\" x 18'",f:"wp-content/uploads/2025/01/114x2BrickMould.pdf",d:["img","ga180"]},
  {g:"casing",c:"GA183",n:"Brick Mould with J",s:"1 1/4\" x 3\" x 18'",f:"wp-content/uploads/2025/06/ga183-brick-mould-wj.pdf",d:["img","ga183"]},
  {g:"casing",c:"",n:"Garage Door Thermostop",s:"7/16\" x 2\" x 18'",f:"wp-content/uploads/2025/02/garage-door-thermostop.pdf",d:["img","gagdt"]},
  {g:"casing",c:"GA6930",n:"Historic Sill",s:"1 3/4\" x 2 1/32\" x 18'",f:"wp-content/uploads/2025/01/CAD-historic-sill.pdf",d:["img","ga6930"]},
  {g:"casing",c:"GA937",n:"Sill Nose, Small",s:"1 3/8\" x 1 5/16\"",f:"wp-content/uploads/2025/01/138x1516SillNose.pdf",d:["img","ga937"]},
  {g:"casing",c:"GA7974",n:"Sill Nose, Medium",s:"1 1/4\" x 2 1/16\" x 18'",f:"wp-content/uploads/2025/10/ga-7974-sill-nose.pdf",d:["img","ga7974"]},
  {g:"casing",c:"GA948",n:"Sill",s:"1 1/4\" x 4 5/16\" x 18'",f:"wp-content/uploads/2025/02/sill.pdf",d:["img","ga948"]},
  {g:"casing",c:"GA197",n:"Drip Cap",s:"11/16\" x 1 5/8\" x 18'",f:"wp-content/uploads/2025/01/1116x158DripCap-1.pdf",d:["img","ga197"]},
  {g:"casing",c:"GA287",n:"Rake",s:"1 1/16\" x 2\" x 18'",f:"wp-content/uploads/2025/10/ga-287-rake-moulding.pdf",d:["img","ga287"]},
  {g:"casing",c:"GA210",n:"Shingle",s:"11/16\" x 1 5/8\" x 18'",f:"wp-content/uploads/2025/02/shingle.pdf",d:["img","ga210"]},
  {g:"casing",c:"GAWT",n:"Water Table",s:"2\" x 2 3/4\" x 18'",f:"wp-content/uploads/2025/02/water-table.pdf",d:["img","gawt"]},
  {g:"casing",c:"GAFA",n:"Flat Astragal",s:"13/32\" x 2 3/8\" x 18'",f:"wp-content/uploads/2025/02/cad-dimensions_06.pdf",d:["img","gafa"]},
  {g:"casing",c:"GASB",n:"Square Baluster",s:"1 1/2\" x 1 1/2\"",f:"wp-content/uploads/2025/02/baluster.pdf",d:["img","gasb"]},
  {g:"bead",c:"GABP",n:"Beaded Planking",s:"3/8\" x 5 1/2\" x 18'",f:"wp-content/uploads/2025/01/38x512BeadedPlanking.pdf",d:["img","gabp"]},
  {g:"bead",c:"GA001",n:"Bead Board",s:"1/2\" x 5 1/8\" x 18'",f:"wp-content/uploads/2025/01/12x518BeadBoard.pdf",d:["img","ga001"]},
  {g:"bead",c:"GA002",n:"Stealth Bead Board",s:"1/2\" x 6\" x 18' and 24'",f:"wp-content/uploads/2025/01/CAD-stealth-beadboard.pdf",d:["img","ga002"]},
  {g:"bead",c:"",n:"Beaded Sheet",s:"1/2\" x 4', 10' and 20'",f:"wp-content/uploads/2021/01/beadboard-sheet.pdf",d:["outline"]},
  {g:"corner",c:"GAC4",n:"4\" Corner Board",s:"15/16\" x 3 1/2\", 20'",f:"wp-content/uploads/2021/01/corner-4-1.pdf",d:["img","gac4"]},
  {g:"corner",c:"GAC4R",n:"4\" Corner Board with Siding Rabbet",s:"3 1/2\" face, 20'",f:"wp-content/uploads/2025/10/90-4-outside-corner.pdf",d:["img","gac4r"]},
  {g:"corner",c:"GAC6",n:"6\" Corner Board",s:"15/16\" x 5 1/2\", 20'",f:"wp-content/uploads/2025/10/90-6-outside-square.pdf",d:["img","gac6"]},
  {g:"corner",c:"GAC6R",n:"6\" Corner Board with Siding Rabbet",s:"5 1/2\" face, 20'",f:"wp-content/uploads/2025/10/90-6-outside-corner.pdf",d:["img","gac6r"]},
  {g:"corner",c:"GATC",n:"1\" Trim Corner",s:"90\u00b0, 18'",f:"wp-content/uploads/2025/10/90-trim-corner.pdf",d:["img","gatc"]},
  {g:"corner",c:"GAC4E",n:"4\" Extruded Outside Corner",s:"3 1/2\" face, 20'",f:"wp-content/uploads/2025/11/4-extruded-outside-corner.pdf",d:["img","gac4e"]},
  {g:"corner",c:"GAC6E",n:"6\" Extruded Outside Corner",s:"5 1/2\" face, 20'",f:"wp-content/uploads/2025/11/6-extruded-outside-corner.pdf",d:["img","gac6e"]},
  {g:"corner",c:"GAC6OC45",n:"45\u00b0 6\" Extruded Outside Corner",s:"5 1/2\" x 5 1/2\", 20'",f:"wp-content/uploads/2025/10/ga-202-45-outside-corner.pdf",d:["img","gac6oc45"]},
  {g:"corner",c:"GA203",n:"90\u00b0 Inside Corner",s:"1 1/2\" x 1 1/2\", 20'",f:"wp-content/uploads/2025/10/ga-203-90-inside-corner.pdf",d:["outline"]},
  {g:"corner",c:"GA204",n:"45\u00b0 Inside Corner",s:"1 1/2\" x 1 1/2\", 20'",f:"wp-content/uploads/2025/10/ga-204-45-inside-corner.pdf",d:["outline"]},
  /* Specialty, soffit and water management */
  {g:"special",n:'1" x 8" Skirtboard',s:'3/4" x 7 1/4"',f:"wp-content/uploads/2021/01/skirtboard-1x8-1.pdf",d:["outline"]},
  {g:"special",n:'1" x 10" Skirtboard',s:'3/4" x 9 1/4"',f:"wp-content/uploads/2021/01/skirtboard-1x10-1.pdf",d:["outline"]},
  {g:"special",n:'5/4" x 6" Skirtboard',s:'1" x 5 1/2"',f:"wp-content/uploads/2021/01/skirtboard-6.pdf",d:["outline"]},
  {g:"special",n:'5/4" x 8" Skirtboard',s:'1" x 7 1/4"',f:"wp-content/uploads/2021/01/skirtboard-8.pdf",d:["outline"]},
  {g:"special",n:'1/2" x 12" Vented Soffit',s:"10' lengths",f:"wp-content/uploads/2025/06/soffit-12.pdf",d:["outline"]},
  {g:"special",n:'1/2" x 16" Vented Soffit',s:"10' lengths",f:"wp-content/uploads/2025/06/soffit-16.pdf",d:["outline"]},
  {g:"special",n:'1/2" x 24" Vented Soffit',s:"10' lengths",f:"wp-content/uploads/2025/06/soffit-24.pdf",d:["outline"]},
  {g:"special",n:"Notched Fascia",s:'3/4" x 7 1/4" x 18\'',f:"wp-content/uploads/2021/01/fascia_board_8.pdf",d:["outline"]},
  {g:"special",n:"Frieze Board",s:'1" x 5 1/2" x 18\'',f:"wp-content/uploads/2021/01/frieze-board_6.pdf",d:["outline"]},
  {g:"special",n:"Concealed Edge Trim",s:"See drawing",f:"wp-content/uploads/2021/01/concealed-edge.pdf",d:["outline"]},
  {g:"special",n:"Concealed Edge Trim, Rabbeted for Nailing Fin",s:"See drawing",f:"wp-content/uploads/2021/04/trim-with-nailing-fin.pdf",d:["outline"]},
  {g:"special",n:"Sealed Edge Trim, Rabbeted for Nailing Fin",s:"See drawing",f:"wp-content/uploads/2021/04/trim-for-nailing-fin.pdf",d:["outline"]}
];
window.GA_GROUPS = {trim:"Sealed edge trim",sheet:"Sheets",crown:"Crown, bed and panel",casing:"Sill, casing and detail",bead:"Beadboard",corner:"Corners",special:"Specialty, soffit and skirt"};
/* Mouldings at true scale (inches), for the profile board on the home page */
window.GA_PROFILES = [{"c":"GASC","n":"Super Crown","img":"gasc","w":3.08,"h":2.147,"g":"crown"},{"c":"GA51","n":"2 1/4\" Crown","img":"ga51","w":2.327,"h":0.64,"g":"crown"},{"c":"GA49","n":"3 5/8\" Crown","img":"ga49","w":3.687,"h":0.673,"g":"crown"},{"c":"GA47","n":"4 5/8\" Crown","img":"ga47","w":4.707,"h":0.7,"g":"crown"},{"c":"GA45","n":"5 1/2\" Crown","img":"ga45","w":5.587,"h":0.72,"g":"crown"},{"c":"GAPC","n":"Pediment Crown","img":"gapc","w":2.953,"h":2.067,"g":"crown"},{"c":"GA68","n":"Rams Crown","img":"ga68","w":2.12,"h":1.48,"g":"crown"},{"c":"GAIR","n":"Imperial Rake","img":"gair","w":2.833,"h":1.46,"g":"crown"},{"c":"GA75","n":"Bed","img":"ga75","w":1.827,"h":0.633,"g":"crown"},{"c":"GA217","n":"Band","img":"ga217","w":1.833,"h":0.707,"g":"crown"},{"c":"GA164","n":"Base Cap","img":"ga164","w":1.207,"h":0.76,"g":"crown"},{"c":"GA093","n":"Cove","img":"ga093","w":0.827,"h":0.833,"g":"crown"},{"c":"GA105","n":"Quarter Round","img":"ga105","w":0.833,"h":0.833,"g":"crown"},{"c":"GACS","n":"Colonial Shoe","img":"gacs","w":1.58,"h":0.793,"g":"crown"},{"c":"GA356","n":"Colonial Base","img":"ga356","w":4.322,"h":0.574,"g":"crown"},{"c":"GA7467","n":"Casing / Lineal","img":"ga7467","w":4.587,"h":1.273,"g":"casing"},{"c":"GA7966","n":"Casing / Lineal","img":"ga7966","w":6.58,"h":1.247,"g":"casing"},{"c":"GA180","n":"Brick Mould","img":"ga180","w":2.08,"h":1.34,"g":"casing"},{"c":"GA183","n":"Brick Mould with J","img":"ga183","w":3.08,"h":1.353,"g":"casing"},{"c":"GA6930","n":"Historic Sill","img":"ga6930","w":1.833,"h":2.107,"g":"casing"},{"c":"GA937","n":"Sill Nose, Small","img":"ga937","w":1.413,"h":1.36,"g":"casing"},{"c":"GA7974","n":"Sill Nose, Medium","img":"ga7974","w":1.953,"h":1.28,"g":"casing"},{"c":"GA948","n":"Sill","img":"ga948","w":5.027,"h":1.273,"g":"casing"},{"c":"GA197","n":"Drip Cap","img":"ga197","w":1.707,"h":0.773,"g":"casing"},{"c":"GA287","n":"Rake","img":"ga287","w":2.093,"h":1.147,"g":"casing"},{"c":"GA210","n":"Shingle","img":"ga210","w":1.68,"h":0.773,"g":"casing"},{"c":"GAWT","n":"Water Table","img":"gawt","w":2.067,"h":2.833,"g":"casing"},{"c":"GAFA","n":"Flat Astragal","img":"gafa","w":2.46,"h":1.073,"g":"casing"},{"c":"GASB","n":"Square Baluster","img":"gasb","w":1.587,"h":1.587,"g":"casing"},{"c":"GABP","n":"Beaded Planking","img":"gabp","w":5.553,"h":0.46,"g":"bead"},{"c":"GA001","n":"Bead Board","img":"ga001","w":5.2,"h":0.58,"g":"bead"},{"c":"GA002","n":"Stealth Bead Board","img":"ga002","w":6.1,"h":0.58,"g":"bead"},{"c":"GA6930B","n":"Historic Sill, black","img":"ga6930b","w":1.847,"h":2.107,"k":1,"g":"casing"},{"c":"GA68B","n":"Rams Crown, black","img":"ga68b","w":2.127,"h":1.487,"k":1,"g":"crown"},{"c":"GA49B","n":"3 5/8\" Crown, black","img":"ga49b","w":3.687,"h":0.68,"k":1,"g":"crown"},{"c":"GA164B","n":"Base Cap, black","img":"ga164b","w":1.207,"h":0.753,"k":1,"g":"crown"},{"c":"GA002B","n":"Stealth Bead Board, black","img":"ga002b","w":6.107,"h":0.58,"k":1,"g":"bead"}];
window.GA_DOCS = [
  {n:"Product Catalog",t:"24 pages. Every product, size, length and profile.",f:"docs/green-atlantic-catalog.pdf"},
  {n:"Code Compliance Research Report CCRR-0420",t:"Intertek evaluation against the IBC and IRC.",f:"docs/green-atlantic-ccrr-0420.pdf"},
  {n:"Warranty",t:"Limited warranty terms.",f:"wp-content/uploads/2025/01/warranty-2025_01.pdf"},
  {n:"Trim and Moulding Installation Guide",t:"Fastening, gapping, joints and finishing.",f:"wp-content/uploads/2020/11/install-trim-moulding.pdf"},
  {n:"Bead Board Installation Guide",t:"Porch ceilings and wainscot.",f:"wp-content/uploads/2020/11/install-bead-board.pdf"},
  {n:"Storage and Handling Guide",t:"Sheets, trim boards and mouldings.",f:"wp-content/uploads/2020/11/storage-guide.pdf"},
  {n:"Typical Properties",t:"Physical and thermal data with test methods.",f:"wp-content/uploads/2020/12/spec-sheet.pdf"},
  {n:"Safety Data Sheet",t:"Material safety information.",f:"wp-content/uploads/2020/11/material-safety-data-sheet.pdf"}
];
