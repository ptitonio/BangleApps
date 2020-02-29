
//-----------------------------------------------------------------------------------------
//                           Le Feu et  Flammes  ;   Cartes sont 1 Ã  26
const _Flammes = [
// -- Foyn ----------- Nom ------------------ Titre ------------------------------- Col --- No -----
     undefined
   , {foy: "VOKO"    , nom: "ANCETRE"       , tit: "Le rappel Ã  l'ordre"          , col: 1, num:   1 }
   , {foy: "BISO"    , nom: "TEMPETE"       , tit: "Le tourbillon chaotique"      , col: 2, num:   2 }
   , {foy: "TREYKO"  , nom: "MONTAGNE"      , tit: "La difficultÃ© laborieuse"     , col: 1, num:   3 }
   , {foy: "MANDASO" , nom: "LABYRINTHE"    , tit: "L'errance perpÃ©tuelle"        , col: 2, num:   4 }
   , {foy: "NAMORKO" , nom: "TIGRE"         , tit: "La prÃ©dation implacable"      , col: 1, num:   5 }
   , {foy: "WEKSO"   , nom: "MASQUE"        , tit: "L'emprise du rÃ´le"            , col: 2, num:   6 }
   , {foy: "LUKO"    , nom: "DRAGON"        , tit: "La fureur explosive"          , col: 1, num:   7 }
   , {foy: "TORSO"   , nom: "TOUR"          , tit: "La retraite misanthrope"      , col: 2, num:   8 }
   , {foy: "WARKO"   , nom: "ROSE"          , tit: "La sÃ©duction de l'Ã©phÃ©mÃ¨re"   , col: 1, num:   9 }
   , {foy: "FAYSO"   , nom: "EPEE"          , tit: "Le pouvoir des Â«armesÂ»"     , col: 2, num:  10 }
   , {foy: "ELKO"    , nom: "IDOLE"         , tit: "Le pouvoir de fascination"    , col: 1, num:  11 }
   , {foy: "ATSO"    , nom: "ELIXIR"        , tit: "Le calcul de l'optimal"       , col: 2, num:  12 }
   , {foy: "FOYN"    , nom: "PHENIX"        , tit: "La rÃ©invention de soi"        , col: 5, num:  13 }
   , {foy: "MIKLI"   , nom: "ETREINTE"      , tit: "L'improvisation sensuelle"    , col: 4, num:  14 }
   , {foy: "LOYDI"   , nom: "VIVANTS"       , tit: "La circulation de l'amour"    , col: 3, num:  15 }
   , {foy: "KILI"    , nom: "LICORNE"       , tit: "La sublime mÃ©diatrice"        , col: 4, num:  16 }
   , {foy: "FADI"    , nom: "ARBRE"         , tit: "Le dÃ©ploiement pÃ©renne"       , col: 3, num:  17 }
   , {foy: "GERLI"   , nom: "JARDIN"        , tit: "L'intimitÃ© accueillante"      , col: 4, num:  18 }
   , {foy: "KLAYDI"  , nom: "PERLE"         , tit: "L'imagination crÃ©atrice"      , col: 3, num:  19 }
   , {foy: "OKLI"    , nom: "OEIL"           , tit: "La lumiÃ¨re de l'esprit"       , col: 4, num:  20 }
   , {foy: "HUNDI"   , nom: "MIEL"          , tit: "La douceur dÃ©lectable"        , col: 3, num:  21 }
   , {foy: "NEBLI"   , nom: "OR"            , tit: "Le bonheur solaire"           , col: 4, num:  22 }
   , {foy: "PSAODI"  , nom: "SOURCE"        , tit: "La fÃ©conditÃ© jaillissante"    , col: 3, num:  23 }
   , {foy: "YULI"    , nom: "TORTUE"        , tit: "La rÃ©sistance sereine"        , col: 4, num:  24 }
   , {foy: "ANADI"   , nom: "ENFANT"        , tit: "L'Ã©merveillement joueur"      , col: 3, num:  25 }
   , {foy: "MATKA"   , nom: "VOYAGE"        , tit: "L'Ã©mancipation primordiale"   , col: 6, num:  26 }
   , {foy: "VODIN"   , nom: "ANCETRE FOU"   , tit: "La transmission bienveillante", col: 3, num:  -1 }
   , {foy: "BILIN"   , nom: "TEMPETE FOLLE" , tit: "Le renversement salutaire"    , col: 4, num:  -2 }
   , {foy: "TREYDIN" , nom: "MONTAGNE FOLLE", tit: "Le dÃ©passement de soi"        , col: 3, num:  -3 }
   , {foy: "MANDALIN", nom: "LABYRINTHE FOU", tit: "La quÃÂªte d'issue"             , col: 4, num:  -4 }
   , {foy: "NAMORDIN", nom: "TIGRE FOU"     , tit: "L'action suprÃÂªme"             , col: 3, num:  -5 }
   , {foy: "WEKLIN"  , nom: "MASQUE FOU"    , tit: "Le second degrÃ© facÃ©tieux"    , col: 4, num:  -6 }
   , {foy: "LUDIN"   , nom: "DRAGON FOU"    , tit: "L'ange gardien gÃ©nÃ©reux"      , col: 3, num:  -7 }
   , {foy: "TORLIN"  , nom: "TOUR FOLLE"    , tit: "Le recueillement sur soi"     , col: 4, num:  -8 }
   , {foy: "WARDIN"  , nom: "ROSE FOLLE"    , tit: "La prÃ©sence amoureuse"        , col: 3, num:  -9 }
   , {foy: "FAYLIN"  , nom: "EPEE FOLLE"    , tit: "La justice souveraine"        , col: 4, num: -10 }
   , {foy: "ELDIN"   , nom: "IDOLE FOLLE"   , tit: "La puissance charismatique"   , col: 3, num: -11 }
   , {foy: "ATLIN"   , nom: "ELIXIR FOU"    , tit: "L'art de l'invention"         , col: 4, num: -12 }
   , {foy: "MIKSON"  , nom: "ETREINTE FOLLE", tit: "La fusion aliÃ©nante"          , col: 2, num: -14 }
   , undefined
   , {foy: "LOYKON"  , nom: "VIVANTS FOUS"  , tit: "La communautÃ© excluante"      , col: 1, num: -15 }
   , {foy: "KISON"   , nom: "LICORNE FOLLE" , tit: "L'obsession perfectionniste"  , col: 2, num: -16 }
   , {foy: "FAKON"   , nom: "ARBRE FOU"     , tit: "La frustration Ã©gocentrÃ©e"    , col: 1, num: -17 }
   , {foy: "GERSON"  , nom: "JARDIN FOU"    , tit: "Le contrÃ´le Ã©touffant"        , col: 2, num: -18 }
   , {foy: "KLAYKON" , nom: "PERLE FOLLE"   , tit: "L'illusion complaisante"      , col: 1, num: -19 }
   , {foy: "OKSON"   , nom: "OEil FOU"      , tit: "La curiositÃ© intrusive"       , col: 2, num: -20 }
   , {foy: "HUNKON"  , nom: "MIEL FOU"      , tit: "Le confort engourdissant"     , col: 1, num: -21 }
   , {foy: "NEBSON"  , nom: "OR FOU"        , tit: "L'ambition frÃ©nÃ©tique"        , col: 2, num: -22 }
   , {foy: "PSAOKON" , nom: "SOURCE FOLLE"  , tit: "La lÃ¢che dispersion"          , col: 1, num: -23 }
   , {foy: "YUSON"   , nom: "TORTUE FOLLE"  , tit: "Le manque d'intrÃ©piditÃ©"      , col: 2, num: -24 }
   , {foy: "ANAKON"  , nom: "ENFANT FOU"    , tit: "L'immaturitÃ© capricieuse"     , col: 1, num: -25 }
   , undefined
];


var Cart = (num) => {
  this.num = Math.abs(num);
  this.pair = num % 2 == 0;
  this.choc = (num >= 1 && num <= 13);
  this.charme = (num >= 13 && num <= 25);
};

var Flam = (num) => {
  this.cart = new Cart(Math.abs(num));
  this.num = num;
  if (num>0) {
    this.choc = this.cart.choc;
    this.charme = this.cart.charme;
    this.ombre = undefined;
  } else {
    this.choc = !this.cart.choc;
    this.charme = !this.cart.charme;
    this.ombre = 99;
  }
};

//------------------ Ombre & disjonction -----------------------
Flam.prototype.disjoncte = function(numOmb) {
  var ombre = new Cart(numOmb);
  var cart= this.cart;
  var num = cart.num;
  if (   ((num % 13 != 0)) // exclut cartes 13 et 26
      && (   ombre.num == 26
          || ombre.num == 13 && cart.choc
          || cart.pair == ombre.pair && cart.choc == ombre.choc
         )
     ) { num = -num;
         this.num = num;
         this.choc = !cart.choc; 
         this.charme = !cart.charme; 
         this.ombre = numOmb;}
    return num;
};

Flam.prototype.reInit = function() {
  var cart = this.cart;
  this.num = cart.num;
  this.choc = cart.choc;
  this.charme = cart.charme;
  this.ombre = undefined;
  return this.num;
};

//------------------ Les Imcompatibles -----------------------
Flam.prototype.incompatible = function(flm) {
     if ( (!this.ombre && !flm.ombre && this.num+flm.num == 26)
     || ( this.ombre && flm.ombre && Math.abs(this.num-flm.num) == 13)
      ) return true; else return false ;
};

//------------------- Les Intensificateurs -------------------
Flam.prototype.boostee = function(flm) {
  if (isNaN(this.ombre) != isNaN(flm.ombre)) {  // polaritÃ© diffÃ©rente 
    if (this.cart.pair == flm.cart.pair) 
      return (this.cart.num + flm.cart.num == 26) ; 
    else 
      return (Math.abs(this.cart.num - flm.cart.num) == 13)  ;
  } else
    return false;
};

//------------------- Les repondantes -------------------
Flam.prototype.repondante = function(flm) {
  if (isNaN(this.ombre) == isNaN(flm.ombre))  {  // polaritÃ© Ã©gale 
    if (this.cart.choc && flm.cart.choc) 
      return (this.cart.num + flm.cart.num == 13) ; 
    else if (this.cart.charme && flm.cart.charme)
            return (this.cart.num + flm.cart.num == 39) ;
  }
  return false;
};

//------------------- Les complÃ©mentaires -------------------
Flam.prototype.complement = function(flm) {
  if(   (isNaN(this.ombre) != isNaN(flm.ombre)) // polaritÃ© difÃ©rente 
     && (this.choc != flm.choc)
     && (this.cart.pair != flm.cart.pair)
     )  {  
    if (this.cart.choc && flm.cart.choc) 
      return (this.cart.num + flm.cart.num == 13) ; 
    else if (this.cart.charme && flm.cart.charme)
            return (this.cart.num + flm.cart.num == 39) ;
  }
  return false;
};

// -----------------------------------------------------------------
//	                         Le Monde et Dimensions
const _Dimensions = [
// ---Code ---- Foyn -------- Foy ------ Nom ------------- Titre ------------------------------- Pos --- K --- Flux Horiz - Flux Vert -- CaseAdja. ----- No ----
     {} 
   , {cod: 'A', foy: "AKA"  , fy: "AL" , nom: "Aventure"  ,tit: "L'action improvisÃ©e"           ,pos: 2, k: 3, fhz: [8, 6], fvt: [5, 9], adj: [1,3,5  ], num: 1 }
   , {cod: 'B', foy: "KAYB" , fy: "BU" , nom: "Besoin"    ,tit: "Les ressources nÃ©cessaires"    ,pos: 9, k: 2, fhz: [4, 9], fvt: [6, 7], adj: [6,8    ], num: 2 }
   , {cod: 'C', foy: "CEKA" , fy: "CAL", nom: "ComplicitÃ©",tit: "Les liens tissÃ©s"              ,pos: 4, k: 3, fhz: [8, 4], fvt: [5, 7], adj: [1,5,7  ], num: 3 }
   , {cod: 'D', foy: "DUKA" , fy: "DZU", nom: "DÃ©sir"     ,tit: "La mythologie intime"          ,pos: 7, k: 2, fhz: [9, 2], fvt: [8, 3], adj: [4,8    ], num: 4 }
   , {cod: 'E', foy: "KAE"  , fy: "ER" , nom: "Energie"   ,tit: "Le dÃ©ploiement de la prÃ©sence" ,pos: 5, k: 4, fhz: [3, 7], fvt: [1, 9], adj: [2,4,6,8], num: 5 }
   , {cod: 'F', foy: "KAAF" , fy: "FU" , nom: "Fruit"     ,tit: "L'aboutissement effectif"      ,pos: 3, k: 2, fhz: [8, 1], fvt: [7, 2], adj: [2,6    ], num: 6 }
   , {cod: 'G', foy: "KAG"  , fy: "GAL", nom: "Guerre"    ,tit: "Le dÃ©fi obstinÃ©"               ,pos: 6, k: 3, fhz: [3, 5], fvt: [6, 2], adj: [3,5,9  ], num: 7 }
   , {cod: 'H', foy: "HUKA" , fy: "HU" , nom: "Harmonie"  ,tit: "La position/perception sociale",pos: 1, k: 2, fhz: [1, 6], fvt: [3, 4], adj: [2,4    ], num: 8 }
   , {cod: 'I', foy: "IKA"  , fy: "YAL", nom: "Intuition" ,tit: "La conscience Ã©motionnelle"    ,pos: 8, k: 3, fhz: [4, 2], fvt: [1, 5], adj: [5,7,9  ], num: 9 }
];

function reducNbr(n){
  n = Math.abs(n);
  if (n < 10) return n;
  if (n < 19) return n - 9;
  return n - 18;
}

function dimOppose(dim) {
    if (dim) return 10 - dim ;
}

function isDimNat(dim,flm) {
  return (dimNat(flm) == dim ); 
}

function dimNat(flm) {
  if (flm.num==26) return undefined;  
  let dim = reducNbr(flm.num);
    if (flm.ombre) return dimOppose(dim);
    else return dim;
}

function rnd(n) {
  return Math.ceil(Math.random()*n);
}


function genList(n) {
  let lst=[];
  for (let i=1; i<=n; i++) { lst.push(i); }
  return lst;
}

// Melange un tableau
// source: https://javascript.info/array-methods
function shuffleList(lst) {
  for (let i = lst.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = lst[i]; lst[i] = lst[j]; lst[j] = t;
  }
  return lst;
}

function tirage(feu) {
  feu = shuffleList(feu);
  let flm = new Flam(feu.splice(rnd(feu.length-1),1)[0]);
  flm.disjoncte(feu[feu.length-1]);
  return flm;
}

function profil() {
  let feu = genList(26);
  let lDim = shuffleList(genList(9));
  let monde =[0];
  lDim.forEach( dim =>{ monde.push(tirage(feu));} );
  return monde;
}

function lumiere() {
  let feu = genList(26);
  let lDim = shuffleList(genList(9));
  let monde = [0];
  lDim.forEach( 
    dim =>{ 
      let flh=_Dimensions[dim].fhz;
      let flv=_Dimensions[dim].fvt;
      if (    (monde[flh[0]]==undefined || monde[flh[1]]==undefined) 
          && (monde[flv[0]]==undefined || monde[flv[1]]==undefined))
        monde[dim]=(tirage(feu));
      else
        monde[dim]=(undefined);
        } );
  return monde;
}

function ouverture() {
  var feu = genList(26);
  let lDim = shuffleList(genList(9));
  let monde = new Array(10);
  let flams = [];

  // tirage 3 flammes
  for (let i=1; i<4; i++) {
    feu = shuffleList(feu);
    let flm = new Flam(feu.splice(rnd(feu.length-1),1)[0]);
    flams.push(flm);
  }
  // comparaison des flammes avec l'ombre
  let omb = feu[feu.length-1];
  for (let i=0; i<3; i++) {
    flams[i].disjoncte(omb);
  }

  // ----- insÃ¨re une flamme dans sa Dimension natuelle libre 
  //       ou une autre dimension libre
  flams.forEach( flm => {
        let dim = dimNat(flm);
        while (!dim || monde[dim] && lDim != []) {dim = lDim.pop(); }
        if (dim) monde[dim]=flm;
      } );
  
  return monde;
}

//-------------------------------------------------------------------- 
//			  			Affichage graphique
//---------------------------------------------------------------------

function affCell(cel,txt,h,jst,col,bkg) {
  let x, y; 
  const mrg = 5, cW0 = 80, cH0 =80;
   const cW=cW0-2, cH=cH0-2;
  cel --;
  const x0 = (cel % 3)*80;
  const y0 = Math.floor(cel /3)*80;
  g.setFont("Vector",h);
  const w = g.stringWidth(txt);
  if (bkg) {
    g.setColor(bkg);
    g.fillRect(x0+1,y0+1,x0+78,y0+78);
  }
  switch (jst) {
    case 'mi':   // milieu
      x = Math.floor((cH - w) / 2);
      y = Math.floor((cW - h) / 2); 
      break;
    case 'hg':  // Haut Gauche
      x = mrg;          y = mrg;  break;
    case 'hd':  // Haut droit
      x = cH - mrg - w; y = mrg; break;
    case 'bg':  // Bas Gauche
      x = mrg;          y = cW - mrg - h; break;
    case 'bd':  // Bas droit
      x = cH - mrg - w; y = cW - mrg - h; break;
  }
  g.setColor(col);
  g.drawString(txt,x+x0,y+y0);

}

// drawing world
function drawWorld(monde) {
  console.log(monde);
  // the Grid
  g.clear(); 
  g.setColor(0xFFE0);
  g.drawLine(0,80,240,80);
  g.drawLine(0,160,240,160);
  g.drawLine(80,0,80,240);
  g.drawLine(160,0,160,240);
  //Empty dimension
  var txt, ndx, flm;
  for (let i=1; i<10; i++){
    txt = _Dimensions.find(dim=>dim.pos==i).cod;
    ndx = _Dimensions.find(dim=>dim.pos==i).num;
    flm = monde[ndx];
    affCell(i,txt,72,'mi',0x0004);
    if (flm) {
      affCell(i,flm.num,25,'mi',0xF800);
      if (flm.ombre) affCell(i,"("+flm.ombre+")",17,'bd',0x07FF);
      if (isDimNat(ndx,flm)) affCell(i,"*",21,'hg',0x07E0); 
    }
  }
}

setWatch( () => { Bangle.buzz(); drawWorld(profil()); }
         , BTN1, {repeat:true});
setWatch( () => { Bangle.buzz(); drawWorld(lumiere()); }
         , BTN2, {repeat:true});
setWatch( () => { Bangle.buzz(); drawWorld(ouverture()); }
         , BTN3, {repeat:true});

