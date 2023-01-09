var app = new Vue({
  el: '#app',
  data: {
    modelhead: 'imge/Shirt_new/Maniquin/head.png',
    collarbutton: '',
    collarbuttonhole: '',
    collarbuttonthread: '',
    modelpant: 'imge/Shirt_new/Maniquin/pant/head-101.png',
    customcollar: '',
    collar:
      'imge/Shirt_new/2.shirt-collar/shirt-collar_button-down/shirt-collar_button-down-102.png',
    ffcuff: '',
    cuff: 'imge/Shirt_new/4.shirt-cuff/shirt-cuff_double-button_angled-102.png',
    shirtfullfit: '',
    shirtfit:
      'imge/Shirt_new/1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit-102.png',
    sleeve: '',
    tuck: '',
    placket: '',
    ffplacket: '',
    chestpocket:
      'imge/Shirt_new/3.shirt-pocket/shirt-pocket_angle-corner_1-pocket/shirt-pocket_angle-corner_1-pocket-102.png',
    chestpocketbutton: '',
    chestpocketbuttonthread: '',
    shirtbutton:
      'imge/Shirt_new/5.shirt-placket/shirt-placket_french-front/shirt-button/shirt-button-101.png',
    ffshirtbutton: '',
    ffshirtbuttonhole: '',
    ffshirtbuttonthread: '',
    shirtbuttonhole:
      'imge/Shirt_new/5.shirt-placket/shirt-placket_french-front/shirt-button-hole/shirt-button-hole-102.png',
    shirtbuttonthread:
      'imge/Shirt_new/5.shirt-placket/shirt-placket_french-front/shirt-button-thread/shirt-button-thread-102.png',
    bcollar: '',
    bcuff: 'imge/shirt/back/sleevebutton/sleeves_long+cuffs_style_squared.png',
    btuck: 'imge/shirt/back/tuck/fit_fit+inside.png',
    collarPicked: '',
    customcollarPicked: '',
    cuffPicked: '',
    customcuffPicked: '',
    sleevePicked: '',
    tuckPicked: '',
    chestpocketPicked: '',
    fitPicked: '',
    placketPicked: '',

    collarvariants: [
      {
        variantId: 'cl1',
        variantType: 'Button Down',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_button-down/shirt-collar_button-down-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/05_shirt-collar_button-down-01.png',
        variantImageCB:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_button-down/shirt-button/shirt-button.png',
        variantImageCBH:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_button-down/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_button-down/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cl2',
        variantType: 'Cutaway',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_cutaway/shirt-collar_cutaway-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/10_shirt-collar_cutaway-01.png',
        variantImageCB:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_cutaway/shirt-button/shirt-button.png',
        variantImageCBH:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_cutaway/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_cutaway/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cl3',
        variantType: 'Mandarin',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_mandarin/shirt-collar_mandarin-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/11_shirt-collar_mandarin-01.png',
        variantImageCB:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_mandarin/shirt-button/shirt-button.png',
        variantImageCBH:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_mandarin/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_mandarin/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cl4',
        variantType: 'Pinned',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_pinned/shirt-collar_pinned-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/06_shirt-collar_pinned-01.png',
        variantImageCB:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_pinned/shirt-button/shirt-button.png',
        variantImageCBH:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_pinned/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_pinned/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cl5',
        variantType: 'Point',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_point/shirt-collar_point-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/04_shirt-collar_point-01.png',
        variantImageCB:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_point/shirt-button/shirt-button.png',
        variantImageCBH:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_point/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_point/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cl6',
        variantType: 'Round',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_round/shirt-collar_round-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/09_shirt-collar_round-01.png',
        variantImageCB:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_round/shirt-button/shirt-button.png',
        variantImageCBH:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_round/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_round/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cl7',
        variantType: 'Semi Spread',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_semi-spread/shirt-collar_semi-spread-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/08_shirt-collar_semi-spread-01.png',
        variantImageCB:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_semi-spread/shirt-button/shirt-button.png',
        variantImageCBH:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_semi-spread/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_semi-spread/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cl8',
        variantType: 'Spread',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_spread/shirt-collar_spread-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/07_shirt-collar_spread-01.png',
        variantImageCB:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_spread/shirt-button/shirt-button.png',
        variantImageCBH:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_spread/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_spread/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cl9',
        variantType: 'Wing',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_wing/shirt-collar_wing-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/12_shirt-collar_wing-01.png',
        variantImageCB:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_wing/shirt-button/shirt-button.png',
        variantImageCBH:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_wing/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_wing/shirt-button-thread/shirt-button-thread-102.png',
      },
    ],

    cuffvariants: [
      {
        variantId: 'cf1',
        variantType: 'Double Button Angled',
        variantImage:
          'imge/Shirt_new/4.shirt-cuff/shirt-cuff_double-button_angled-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/32_shirt-cuff_double-button_angled-01.png',
      },
      {
        variantId: 'cf2',
        variantType: 'Double Button Rounded',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/31_shirt-cuff_double-button_rounded-01.png',
      },
      {
        variantId: 'cf3',
        variantType: 'Double Button Squared',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/33_shirt-cuff_double-button_squred-01.png',
      },
      {
        variantId: 'cf4',
        variantType: 'French Single Squared',
        variantImage:
          'imge/Shirt_new/4.shirt-cuff/shirt-cuff_French_single_squred-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/36_shirt-cuff_French_single-button_squred-01.png',
      },
      {
        variantId: 'cf5',
        variantType: 'French Single Button Angled',
        variantImage:
          'imge/Shirt_new/4.shirt-cuff/shirt-cuff_French_single_squred-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/32_shirt-cuff_double-button_angled-01.png',
      },
      {
        variantId: 'cf6',
        variantType: 'French Single Button Round',
        variantImage:
          'imge/Shirt_new/4.shirt-cuff/shirt-cuff_French_single_squred-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/32_shirt-cuff_double-button_angled-01.png',
      },
      {
        variantId: 'cf7',
        variantType: 'Single Button Angled',
        variantImage:
          'imge/Shirt_new/4.shirt-cuff/shirt-cuff_French_single_squred-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/29_shirt-cuff_single-button_angled-01.png',
      },
      {
        variantId: 'cf8',
        variantType: 'Single Button Rounded',
        variantImage:
          'imge/Shirt_new/4.shirt-cuff/shirt-cuff_French_single_squred-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/28_shirt-cuff_single-button_rounded-01.png',
      },
      {
        variantId: 'cf9',
        variantType: 'Single Button Squared',
        variantImage:
          'imge/Shirt_new/4.shirt-cuff/shirt-cuff_French_single_squred-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/30_shirt-cuff_single-button_squred-01.png',
      },
    ],

    sleevevariants: [
      {
        variantId: 'sv1',
        variantType: 'Full',
        variantImage:
          'imge/Shirt_new/4.shirt-cuff/shirt-cuff_double-button_angled-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/07 Shirt-SLEEVE_Final/44_shirt-sleev_full-01.png',
      },
      {
        variantId: 'sv2',
        variantType: 'Half',
        variantImage:
          'imge/Shirt_new/7.shirt-sleev/shirt-sleeve_half/shirt-sleeve_half-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/07 Shirt-SLEEVE_Final/45_shirt-sleev_half-01.png',
      },
    ],

    fitvariants: [
      {
        variantId: 'ft1',
        variantType: 'Regular',
        variantImage:
          'imge/Shirt_new/1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/01 Shirt-FITTINGS/01_shirt-fitting_slim-fit.jpg',
      },
      {
        variantId: 'ft2',
        variantType: 'Slim',
        variantImage:
          'imge/Shirt_new/1.shirt-fitting/shirt-fitting_slim-fit/shirt-fitting_slim-fit-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/01 Shirt-FITTINGS/02_shirt-fitting_regular-fit.jpg',
      },
    ],

    placketvariants: [
      {
        variantId: 'pk1',
        variantType: 'Standard Front',
        variantImage: '',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/05 Shirt-PLACKETs_Final/38_shirt-placket_standard-front-01.png',
      },

      {
        variantId: 'pk2',
        variantType: 'French Front',
        variantImage:
          'imge/Shirt_new/5.shirt-placket/shirt-placket_french-front/shirt-placket_french-front-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/05 Shirt-PLACKETs_Final/39_shirt-placket_french-front-01.png',
      },

      {
        variantId: 'pk3',
        variantType: 'Hidden',
        variantImage:
          'imge/Shirt_new/5.shirt-placket/shirt-placket_hidden-front/shirt-placket_hidden-front-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/05 Shirt-PLACKETs_Final/40_shirt-placket_hidden-front-01.png',
      },
    ],

    tuckvariants: [
      {
        variantId: 'tc1',
        variantType: 'Classic Curved Hem',
        variantImage:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-bottom_classic-curved-hem-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/06 Shirt-CUSTOM BOTTOM_HEM_Final/42_shirt-bottom_classic-curved-hem-01.png',
        variantImageP:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-button-placket/placket-102.png',
        variantImageBB:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-button/shirt-button-101.png',
        variantImageBBH:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-button-hole/shirt-button-hole-102.png',
        variantImageBBT:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'tc2',
        variantType: 'Side Cut Hem',
        variantImage:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-bottom_side-cut-hem-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/06 Shirt-CUSTOM BOTTOM_HEM_Final/43_shirt-bottom_half-sleeve-hem-01.png',
        variantImageP:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-button-placket/shirt-button-placket-102.png',
        variantImageBB:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-button/shirt-button-101.png',
        variantImageBBH:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-button-hole/shirt-button-hole-102.png',
        variantImageBBT:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'tc3',
        variantType: 'Straight Cut Hem',
        variantImage:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-bottom_side-cut-hem-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/06 Shirt-CUSTOM BOTTOM_HEM_Final/41_shirt-bottom_straight-cut-hem-01.png',
        variantImageP:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_straight-cut-hem/shirt-button-placket/shirt-button-placket-102.png',
        variantImageBB:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_straight-cut-hem/shirt-button/shirt-button-101.png',
        variantImageBBH:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_straight-cut-hem/shirt-button-hole/shirt-button-hole-102.png',
        variantImageBBT:
          'imge/Shirt_new/6.shirt-bottom-hem/shirt-bottom_straight-cut-hem/shirt-button-thread/shirt-button-thread-102.png',
      },
    ],

    customcollarvariants: [
      {
        variantId: 'csf4',
        variantType: 'none',
        variantImage:
          'imge/Shirt_new/2.shirt-collar/shirt-collar_point/shirt-collar_point-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/09 Shirt-CUSTOMIZE COLLAR_Final/52_shirt-customize-collar_none-01.png',
        variantImageCB: '',
        variantImageCBH: '',
        variantImageCBT: '',
      },
      {
        variantId: 'csf1',
        variantType: 'all fabrics',
        variantImage:
          'imge/Shirt_new/9.shirt-customize-collar/shirt-customize-collar_all fabrics/shirt-customize-collar_all fabrics-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/09 Shirt-CUSTOMIZE COLLAR_Final/49_shirt-customize-collar_all fabrics-01.png',
        variantImageCB:
          'imge/Shirt_new/9.shirt-customize-collar/shirt-customize-collar_all fabrics/shirt-button/shirt-button-101.png',
        variantImageCBH:
          'imge/Shirt_new/9.shirt-customize-collar/shirt-customize-collar_all fabrics/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_new/9.shirt-customize-collar/shirt-customize-collar_all fabrics/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'csf2',
        variantType: 'inner fabric',
        variantImage:
          'imge/Shirt_new/9.shirt-customize-collar/shirt-customize-collar_inner-fabric/shirt-customize-collar_inner-fabric-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/09 Shirt-CUSTOMIZE COLLAR_Final/51_shirt-customize-collar_inner-fabric-01.png',
        variantImageCB: '',
        variantImageCBH: '',
        variantImageCBT: '',
      },
      {
        variantId: 'csf3',
        variantType: 'outer fabric',
        variantImage:
          'imge/Shirt_new/9.shirt-customize-collar/shirt-customize-collar_outer-fabric/shirt-customize-collar_outer-fabric-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/09 Shirt-CUSTOMIZE COLLAR_Final/50_shirt-customize-collar_outer-fabric-01.png',
        variantImageCB: '',
        variantImageCBH: '',
        variantImageCBT: '',
      },
    ],

    customcuffvariants: [
      {
        variantId: 'csc4',
        variantType: 'none',
        variantImage:
          'imge/Shirt_new/4.shirt-cuff/shirt-cuff_double-button_angled-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/10 Shirt-CUSTOMIZE CUFFS_Final/56_shirt-customize-cuff_none-01.png',
      },
      {
        variantId: 'csc1',
        variantType: 'all fabrics',
        variantImage:
          'imge/Shirt_new/10.shirt-customize-cuff/shirt-customize-cuff_all-fabric/shirt-customize-cuff_all-fabric-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/10 Shirt-CUSTOMIZE CUFFS_Final/53_shirt-customize-cuff_all-fabric-01.png',
      },
      {
        variantId: 'csc2',
        variantType: 'inner fabric',
        variantImage:
          'imge/Shirt_new/10.shirt-customize-cuff/shirt-customize-cuff_inner-fabric/shirt-customize-cuff_inner-fabric-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/10 Shirt-CUSTOMIZE CUFFS_Final/55_shirt-customize-cuff_inner-fabric-01.png',
      },
      {
        variantId: 'csc3',
        variantType: 'outer fabric',
        variantImage:
          'imge/Shirt_new/10.shirt-customize-cuff/shirt-customize-cuff_outer-fabric/shirt-customize-cuff_outer-fabric-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/10 Shirt-CUSTOMIZE CUFFS_Final/54_shirt-customize-cuff_outer-fabric-01.png',
      },
    ],

    chestpocketvariants: [
      {
        variantId: 'cp1',
        variantType: 'Angle Corner 1 Pocket',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_angle-corner_1-pocket/shirt-pocket_angle-corner_1-pocket-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/14_shirt-pocket_angle-corner_1-pocket-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp2',
        variantType: 'Angle Corner 1 Pockets With Flap',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_angle-corner_1-pocket_with-flap/shirt-pocket_angle-corner_1-pocket_with-flap-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/20_shirt-pocket_angle-corner_1-pocket_with-flap-01.png',
        variantImageB:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_angle-corner_1-pocket_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_angle-corner_1-pocket_with-flap/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cp3',
        variantType: 'Angle Corner 2 Pockets',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_angle-corner_2-pockets/shirt-pocket_angle-corner_2-pockets-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/17_shirt-pocket_angle-corner_2-pockets-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp4',
        variantType: 'Angle Corner 2 Pockets With Flap',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_angle-corner_2-pockets_with-flap/shirt-pocket_angle-corner_2-pockets_with-flap-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/23_shirt-pocket_angle-corner_2-pockets_with-flap-01.png',
        variantImageB:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_angle-corner_2-pockets_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_angle-corner_2-pockets_with-flap/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cp5',
        variantType: 'No Pocket',
        variantImage: '',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/27_shirt-pocket_No Pocket-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp6',
        variantType: 'Regular Point 2 Pockets',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_regular point_2-pockets/shirt-pocket_regular point_2-pockets-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/16_shirt-pocket_regula- point_2-pockets-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp7',
        variantType: 'Regular Point 1 Pocket',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_regular-point_1-pocket/shirt-pocket_regular-point_1-pocket-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/13_shirt-pocket_regular-point_1-pocket-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp8',
        variantType: 'Regular Point 1 Pocket With Flap',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_regular-point_1-pocket_with-flap/shirt-pocket_regular-point_1-pocket_with-flap-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/19_shirt-pocket_regular-point_1-pocket_with-flap-01.png',
        variantImageB:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_regular-point_1-pocket_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_regular-point_1-pocket_with-flap/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cp9',
        variantType: 'Regular Point 2 Pockets with Flap ',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_regular-point_2-pockets_with-flap/shirt-pocket_regular-point_2-pockets_with-flap-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/22_shirt-pocket_regular-point_2-pockets_with-flap-01.png',
        variantImageB:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_regular-point_2-pockets_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_regular-point_2-pockets_with-flap/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cp10',
        variantType: 'Round 1 Pocket',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_round_1-pocket/shirt-pocket_round_1-pocket-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/15_shirt-pocket_round_1-pocket-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp11',
        variantType: 'Round 1 Pocket With Flap',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_round_1-pocket_with-flap/shirt-pocket_round_1-pocket_with-flap-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/21_shirt-pocket_round_1-pocket_with-flap-01.png',
        variantImageB:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_Round_1-pocket_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_Round_1-pocket_with-flap/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cp12',
        variantType: 'Round 2 Pockets With Flap',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_Round_2-pocket_with-flap/shirt-pocket_Round_2-pocket_with-flap-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/24_shirt-pocket_Round_2-pocket_with-flap-01.png',
        variantImageB:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_Round_2-pocket_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_Round_2-pocket_with-flap/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cp13',
        variantType: 'Round 2 Pockets',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_round_2-pockets/shirt-pocket_round_2-pockets-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/18_shirt-pocket_round_2-pockets-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp14',
        variantType: 'Western 2 Pockets',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_western_2_pockets/shirt-pocket_western_2_pockets-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/26_shirt-pocket_western_2_pockets-01.png',
        variantImageB:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_western_2_pockets/shirt-button/shirt-button.png',
        variantImageBT:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket_western_2_pockets/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'cp15',
        variantType: 'Western 1 Pocket',
        variantImage:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket-western_1-pocket/shirt-pocket-western_1-pocket-102.png',
        variantImageL:
          'imge/Shirt_new/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/25_shirt-pocket-western_1-pocket-01.png',
        variantImageB:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket-western_1-pocket/shirt-button/shirt-button.png',
        variantImageBT:
          'imge/Shirt_new/3.shirt-pocket/shirt-pocket-western_1-pocket/shirt-button-thread/shirt-button-thread-102.png',
      },
    ],
  },

  methods: {
    updateProductFit(variantImage) {
      this.shirtfit = variantImage
    },
    updateProductCustomCuff(variantImage) {
      this.ffcuff = variantImage
      document.getElementById('defaultcuff').style.display = 'none'
      document.getElementById('customcuff').style.display = 'block'
    },
    updateProductCollar(variantImage) {
      document.getElementById('customcollar').style.display = 'none'
      document.getElementById('collar').style.display = 'block'
      this.collar = variantImage
      this.modelhead = 'imge/Shirt_new/Maniquin/head.png'
    },
    updateProductCollarB(variantImageCB) {
      this.collarbutton = variantImageCB
    },
    updateProductCollarBH(variantImageCBH) {
      this.collarbuttonhole = variantImageCBH
    },
    updateProductCollarBT(variantImageCBT) {
      this.collarbuttonthread = variantImageCBT
    },
    updateProductCustomCollar(variantImage) {
      document.getElementById('collar').style.display = 'none'
      document.getElementById('customcollar').style.display = 'block'
      this.customcollar = variantImage
      if (document.getElementById('csf4').checked) {
        this.modelhead = 'imge/Shirt_new/Maniquin/head.png'
      } else {
        this.modelhead = ''
      }
    },
    updateProductCustomCollarB(variantImageCB) {
      this.collarbutton = variantImageCB
    },
    updateProductCustomCollarBH(variantImageCBH) {
      this.collarbuttonhole = variantImageCBH
    },
    updateProductCustomCollarBT(variantImageCBT) {
      this.collarbuttonthread = variantImageCBT
    },
    updateProductPocket(variantImage) {
      this.chestpocket = variantImage
    },
    updateProductPocketB(variantImageB) {
      this.chestpocketbutton = variantImageB
    },
    updateProductPocketBT(variantImageBT) {
      this.chestpocketbuttonthread = variantImageBT
    },
    updateProductSleeve(variantImage) {
      this.sleeve = variantImage
      this.cuff = ''
      this.ffcuff = ''
    },
    updateProductCuff(variantImage) {
      this.cuff = variantImage
      document.getElementById('defaultcuff').style.display = 'block'
      document.getElementById('customcuff').style.display = 'none'
    },
    updateProductPlacket(variantImage) {
      this.placket = variantImage
      if (document.getElementById('pk3').checked) {
        this.shirtbutton = ''
        this.shirtbuttonthread = ''
        this.shirtbuttonhole = ''
      } else {
        this.shirtbutton =
          'imge/Shirt_new/5.shirt-placket/shirt-placket_french-front/shirt-button/shirt-button-101.png'
        this.shirtbuttonthread =
          'imge/Shirt_new/5.shirt-placket/shirt-placket_french-front/shirt-button-hole/shirt-button-hole-102.png'
        this.shirtbuttonhole =
          'imge/Shirt_new/5.shirt-placket/shirt-placket_french-front/shirt-button-thread/shirt-button-thread-102.png'
      }
    },
    updateProductTuck(
      variantImage,
      variantImageBB,
      variantImageP,
      variantImageBBT,
      variantImageBBH
    ) {
      document.getElementById('untuck').style.display = 'block'
      document.getElementById('tuck').style.display = 'none'
      this.shirtfullfit = variantImage
      this.modelpant = 'imge/Shirt_new/6.shirt-bottom-hem/Maniquin/pant-101.png'
      if (document.getElementById('pk3').checked) {
        this.ffshirtbutton = ''
        this.ffshirtbuttonthread = ''
        this.ffshirtbuttonhole = ''
        this.ffplacket = variantImageP
      } else {
        this.ffshirtbutton = variantImageBB
        this.ffshirtbuttonthread = variantImageBBT
        this.ffshirtbuttonhole = variantImageBBH
        this.ffplacket = variantImageP
      }
    },

    updateProduct() {
      document.getElementById('defaultcuff').style.display = 'block'
      document.getElementById('customcuff').style.display = 'none'
      document.getElementById('customcollar').style.display = 'none'
      document.getElementById('tuck').style.display = 'block'
      document.getElementById('untuck').style.display = 'none'
      document.getElementById('collar').style.display = 'block'
      this.modelpant = 'imge/Shirt_new/Maniquin/pant/head-101.png'
      this.modelhead = 'imge/Shirt_new/Maniquin/head.png'
      this.shirtfullfit = ''
      this.ffplacket = ''
      this.ffshirtbutton = ''
      this.ffshirtbuttonthread = ''
      this.ffshirtbuttonhole = ''
      if (document.getElementById('pk3').checked) {
        this.placket =
          'imge/Shirt_new/5.shirt-placket/shirt-placket_hidden-front/shirt-placket_hidden-front-102.png'
      }

      //method end
    },

    modalFunction() {
      this.fitPicked = $("input[name='fit']:checked").val()
      this.customcuffPicked = $("input[name='customcuff']:checked").val()
      this.cuffPicked = $("input[name='cuff']:checked").val()
      this.sleevePicked = $("input[name='sleeve']:checked").val()
      this.tuckPicked = $("input[name='tuck']:checked").val()
      this.chestpocketPicked = $("input[name='chestpocket']:checked").val()
      this.collarPicked = $("input[name='collar']:checked").val()
      this.customcollarPicked = $("input[name='customcollar']:checked").val()
      this.placketPicked = $("input[name='placket']:checked").val()
    },
  },
})
