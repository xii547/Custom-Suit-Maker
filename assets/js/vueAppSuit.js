var app = new Vue({
  el: '#app',
  data: {
    sdata: '',
    styles:
      'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_notch.png',
    bstyles: 'imge/back/neck.png',
    fittings: '',
    bfittings: '',
    stylesx: '',
    lapels: '',
    sleeves: 'imge/front/front/interior+sleeves.png',
    bsleeves: 'imge/back/sleeves+buttons_0.png',
    bottom:
      'imge/front/front/bottom_single_breasted+length_long+hemline_open.png',
    bbottom: 'imge/back/bottom+length_long+back_style_center_vent.png',
    bsbuttons: '',
    pockets: '',
    pocketsx: '',
    breastpockets: '',
    stylePicked: '',
    lapelPicked: '',
    fittingPicked: '',
    bpocketPicked: '',
    bsbuttonPicked: '',
    ventPicked: '',
    pocketPicked: '',
    ilining: '',
    iliningfilter: '',
    accentbutton: '',
    afont: '',
    mthread: '',
    squarecolor: '',
    breastpocketsquare: '',
    bthread: '',
    btnthread: '',
    bhole: '',
    btnlapel: '',
    inputMessage: '',

    custombutton: '',

    btnthreadvariants: [
      {
        variantId: 'id1',
        variantImage: 'thread1.png',
        variantImage5:
          'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
        variantType: '#EBBE10',
      },
      {
        variantId: 'id2',
        variantImage: 'thread2.png',
        variantImage5:
          'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
        variantType: '#DBD7D2',
      },
    ],
    bholevariants: [
      {
        variantId: 'id1',
        variantImage: 'lapel1.png',
        variantImage2: 'hole1.png',
        variantImage4:
          'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
        variantType: '#EBBE10',
      },
      {
        variantId: 'id2',
        variantImage: 'lapel2.png',
        variantImage2: 'hole2.png',
        variantImage4:
          'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
        variantType: '#DBD7D2',
      },
      // {
      //   variantId: 'id3',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#000000',
      // },
      // {
      //   variantId: 'id4',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#b80e58',
      // },
      // {
      //   variantId: 'id5',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#0ba133',
      // },
      // {
      //   variantId: 'id6',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#c20000',
      // },
      // {
      //   variantId: 'id7',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#ff7912',
      // },
      // {
      //   variantId: 'id8',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#5f1970',
      // },
      // {
      //   variantId: 'id9',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#b8f2f2',
      // },
      // {
      //   variantId: 'id10',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#4477cf',
      // },
    ],
    mthreadvariants: [
      {
        variantId: 'id1',
        variantImage2:
          'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
        variantType: '#ffffff',
      },
      {
        variantId: 'id2',
        variantImage2:
          'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
        variantType: '#b3b3b3',
      },
      // {
      //   variantId: 'id3',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#000000',
      // },
      // {
      //   variantId: 'id4',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#b80e58',
      // },
      // {
      //   variantId: 'id5',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#0ba133',
      // },
      // {
      //   variantId: 'id6',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#c20000',
      // },
      // {
      //   variantId: 'id7',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#ff7912',
      // },
      // {
      //   variantId: 'id8',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#5f1970',
      // },
      // {
      //   variantId: 'id9',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#b8f2f2',
      // },
      // {
      //   variantId: 'id10',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/threads/shadow_extras_thread.png',
      //   variantType: '#4477cf',
      // },
    ],

    breastpocketsquarevariants: [
      {
        variantId: 'bsq1',
        variantImage: 'imge/accent/handkerchief/1.png',
        variantType: '#164185',
      },
      {
        variantId: 'bsq2',
        variantImage: 'imge/accent/handkerchief/2.png',
        variantType: '#BA1C19',
      },
      {
        variantId: 'bsq3',
        variantImage: 'imge/accent/handkerchief/3.png',
        variantType: '#DEDEDE',
      },
      {
        variantId: 'bsq4',
        variantImage: 'imge/accent/handkerchief/4.png',
        variantType: '#1E2945',
      },
      {
        variantId: 'bsq5',
        variantImage: 'imge/accent/handkerchief/5.png',
        variantType: '#343331',
      },
      {
        variantId: 'bsq6',
        variantImage: 'imge/accent/handkerchief/6.png',
        variantType: '#F2BD3B',
      },
      {
        variantId: 'bsq7',
        variantImage: 'imge/accent/handkerchief/7.png',
        variantType: '#847966',
      },
      {
        variantId: 'bsq8',
        variantImage: 'imge/accent/handkerchief/8.png',
        variantType: '#C0DDE1',
      },
      {
        variantId: 'bsq9',
        variantImage: 'imge/accent/handkerchief/9.png',
        variantType: '#DD5B65',
      },
    ],
    custombuttonvariants: [
      {
        variantId: 'cbv1',
        variantImage: 'button1.png',
        variantImage2:
          'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/1.png',
        variantType: '#164185',
      },
      {
        variantId: 'cbv2',
        variantImage: 'button2.png',
        variantImage2:
          'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/2.png',
        variantType: '#BA1C19',
      },
      // {
      //   variantId: 'cbv3',
      //   variantImage: 'imge/accent/handkerchief/3.png',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/3.png',
      //   variantType: '#DEDEDE',
      // },
      // {
      //   variantId: 'cbv4',
      //   variantImage: 'imge/accent/handkerchief/4.png',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/4.png',
      //   variantType: '#1E2945',
      // },
      // {
      //   variantId: 'cbv5',
      //   variantImage: 'imge/accent/handkerchief/5.png',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/5.png',
      //   variantType: '#343331',
      // },
      // {
      //   variantId: 'cbv6',
      //   variantImage: 'imge/accent/handkerchief/6.png',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/4.png',
      //   variantType: '#F2BD3B',
      // },
      // {
      //   variantId: 'cbv7',
      //   variantImage: 'imge/accent/handkerchief/7.png',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/50.png',
      //   variantType: '#847966',
      // },
      // {
      //   variantId: 'cbv8',
      //   variantImage: 'imge/accent/handkerchief/8.png',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/51.png',
      //   variantType: '#C0DDE1',
      // },
      // {
      //   variantId: 'cbv9',
      //   variantImage: 'imge/accent/handkerchief/8.png',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/52.png',
      //   variantType: '#DD5B65',
      // },
      // {
      //   variantId: 'cbv10',
      //   variantImage: 'imge/accent/handkerchief/9.png',
      //   variantImage2:
      //     'https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/53.png',
      //   variantType: '#DD5B65',
      // },
    ],
    iliningvariants: [
      {
        variantId: 'il1',
        variantType: 'BY DEFAULT',
        variantImage2:
          'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_notch.png',
      },
      {
        variantId: 'il2',
        variantType: 'CUSTOM COLOR',
        variantImage2:
          'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_notch.png',
      },
      {
        variantId: 'il3',
        variantType: 'UNLINED',
        variantImage2:
          'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png',
      },
      {
        variantId: 'il4',
        variantType: 'QUILTED LINING',
        variantImage2:
          'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_notch.png',
      },
    ],
    iliningfiltervariants: [
      {
        variantId: 'ilf1',
        variantType: 'type1',
      },
      {
        variantId: 'ilf2',
        variantType: 'type2',
      },
      {
        variantId: 'ilf3',
        variantType: 'type3',
      },
      {
        variantId: 'ilf4',
        variantType: 'type4',
      },
    ],
    afontvariants: [
      {
        variantId: 'af1',
        variantImage2: 'imge/accent/font/bold_script.png',
        variantType: 'Bold Script',
      },
      {
        variantId: 'af2',
        variantImage2: 'imge/accent/font/times_roman.png',
        variantType: 'arial',
      },
      {
        variantId: 'af3',
        variantImage2: 'imge/accent/font/block.png',
        variantType: 'Block',
      },
      {
        variantId: 'af4',
        variantImage2: 'imge/accent/font/calligraphy.png',
        variantType: 'Calligraphy',
      },
    ],
    abuttonvariants: [
      {
        variantId: 'ab1',
        variantType: 'BY DEFAULT',
        variantImage2: '',
      },
      {
        variantId: 'ab2',
        variantType: 'CUSTOM',
        variantImage2: '',
      },
    ],
    pocketsquarevariants: [
      {
        variantId: 'ps1',
        variantType: 'WITHOUT',
        variantImage: '',
      },
      {
        variantId: 'ps2',
        variantType: 'CUSTOM',
        variantImage: '',
      },
    ],
    bthreadvariants: [
      {
        variantId: 'bt1',
        variantType: 'BY DEFAULT',
        variantImage2: '',
      },
      {
        variantId: 'bt2',
        variantType: 'ALL (+6€)',
        variantImage2: '',
      },
      {
        variantId: 'bt3',
        variantType: 'LAPEL ONLY (+6€)',
        variantImage2: '',
      },
    ],
    stylevariants: [
      {
        variantId: 's1',
        variantType: 'Single Breasted 1 Button',
        variantImage2:
          'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_notch.png',
      },
      {
        variantId: 's2',
        variantType: 'Single Breasted 2 Button',
        variantImage2:
          'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_notch.png',
      },
      {
        variantId: 's3',
        variantType: 'Single Breasted 3 Button',
        variantImage2:
          'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png',
      },
      {
        variantId: 's4',
        variantType: 'Double Breasted 2 Button',
        variantImage2:
          'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_notch.png',
      },
      {
        variantId: 's5',
        variantType: 'Double Breasted 4 Button',
        variantImage2:
          'imge/front/front/neck_double_breasted+buttons_4+lapel_medium+style_lapel_notch.png',
      },
      {
        variantId: 's6',
        variantType: 'Double Breasted 6 Button',
        variantImage2:
          'imge/front/front/neck_double_breasted+buttons_6+lapel_medium+style_lapel_notch.png',
      },
    ],

    fittingvariants: [
      {
        variantId: 'f1',
        variantType: 'Slim Fit',
      },
      {
        variantId: 'f2',
        variantType: 'Regular Fit',
      },
    ],

    bfittingvariants: [
      {
        variantId: 'bf1',
        variantType: 'Slim Fit',
      },
      {
        variantId: 'bf2',
        variantType: 'Regular Fit',
      },
    ],

    lapelvariants: [
      {
        variantId: 'l1',
        variantType: 'Notch',
        variantImage2: '',
      },
      {
        variantId: 'l2',
        variantType: 'Peak',
        variantImage2: '',
      },
      {
        variantId: 'l3',
        variantType: 'Shawl',
        variantImage2: '',
      },
    ],

    pocketvariants: [
      {
        variantId: 'p1',
        variantType: 'No Pockets',
      },
      {
        variantId: 'p2',
        variantType: 'With Flap',
      },
      {
        variantId: 'p3',
        variantType: 'Double Welted',
      },
      {
        variantId: 'p4',
        variantType: 'Patched',
      },
      {
        variantId: 'p5',
        variantType: 'With Flap X3',
      },
      {
        variantId: 'p6',
        variantType: 'Double Welted X3',
      },
    ],

    breastpocketvariants: [
      {
        variantId: 'bp1',
        variantType: 'No',
        variantImage2: '',
      },
      {
        variantId: 'bp2',
        variantType: 'Yes',
        variantImage2: 'imge/front/front/breast_pocket_classic.png',
      },
      {
        variantId: 'bp3',
        variantType: 'Patched',
        variantImage2: 'imge/front/front/breast_pocket_patched_1.png',
      },
      {
        variantId: 'bp4',
        variantType: 'Patched X2',
        variantImage2: 'imge/front/front/breast_pocket_patched_2.png',
      },
    ],

    sleevebuttonvariants: [
      {
        variantId: 'sb1',
        variantType: 'No Button',
        variantImage: '',
      },
      {
        variantId: 'sb2',
        variantType: '2 Button',
        variantImage: 'imge/back/sleeves+buttons_2.png',
      },
      {
        variantId: 'sb3',
        variantType: '3 Buttons',
        variantImage: 'imge/back/sleeves+buttons_3.png',
      },
      {
        variantId: 'sb4',
        variantType: '4 Buttons',
        variantImage: 'imge/back/sleeves+buttons_4.png',
      },
    ],

    ventvariants: [
      {
        variantId: 'v1',
        variantType: 'Center Vent',
        variantImage: 'imge/back/bottom+length_long+back_style_center_vent.png',
      },
      {
        variantId: 'v2',
        variantType: 'Side Vents',
        variantImage: 'imge/back/bottom+length_long+back_style_side_vents.png',
      },
    ],
  },

  methods: {
    updateProduct(variantImage) {
      var x = document.getElementsByClassName('Svariant')
      var y = document.getElementsByClassName('Lvariant')
      var i

      if (y[0].checked && x[0].checked) {
        this.styles =
          'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_notch.png'
      } else if (y[1].checked && x[0].checked) {
        this.styles =
          'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_peak.png'
      } else if (y[2].checked && x[0].checked) {
        this.styles =
          'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[1].checked) {
        this.styles =
          'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_notch.png'
      } else if (y[1].checked && x[1].checked) {
        this.styles =
          'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_peak.png'
      } else if (y[2].checked && x[1].checked) {
        this.styles =
          'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[2].checked) {
        this.styles =
          'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png'
      } else if (y[1].checked && x[2].checked) {
        this.styles =
          'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_peak.png'
      } else if (y[2].checked && x[2].checked) {
        this.styles =
          'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[3].checked) {
        this.styles =
          'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_notch.png'
      } else if (y[1].checked && x[3].checked) {
        this.styles =
          'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_peak.png'
      } else if (y[2].checked && x[3].checked) {
        this.styles =
          'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[4].checked) {
        this.styles =
          'imge/front/front/neck_double_breasted+buttons_4+lapel_medium+style_lapel_notch.png'
      } else if (y[1].checked && x[4].checked) {
        this.styles =
          'imge/front/front/neck_double_breasted+buttons_4+lapel_medium+style_lapel_peak.png'
      } else if (y[2].checked && x[4].checked) {
        this.styles =
          'imge/front/front/neck_double_breasted+buttons_4+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[5].checked) {
        this.styles =
          'imge/front/front/neck_double_breasted+buttons_6+lapel_medium+style_lapel_notch.png'
      } else if (y[1].checked && x[5].checked) {
        this.styles =
          'imge/front/front/neck_double_breasted+buttons_6+lapel_medium+style_lapel_peak.png'
      } else if (y[2].checked && x[5].checked) {
        this.styles =
          'imge/front/front/neck_double_breasted+buttons_6+lapel_medium+style_lapel_round.png'
      }

      // fittings

      if (document.getElementById('f1').checked) {
        this.fittings = ''
        this.bfittings = ''
      } else if (document.getElementById('f2').checked) {
        this.fittings = 'imge/front/front/body_baggy.png'
        this.bfittings = 'imge/back/body_baggy.png'
      }

      //bottom

      for (i = 0; i < 3; i++) {
        if (x[i].checked) {
          this.bottom =
            'imge/front/front/bottom_single_breasted+length_long+hemline_open.png'
        }
      }
      for (i = 3; i < 6; i++) {
        if (x[i].checked) {
          this.bottom =
            'imge/front/front/bottom_double_breasted+length_long.png'
        }
      }

      // pockets

      if (document.getElementById('p5').checked) {
        this.pockets = 'imge/front/front/hip_pockets_with_flap+fit_slim.png'
        this.pocketsx =
          'imge/front/front/hip_pockets_with_flap_slanted+fit_slim+third.png'
      } else if (document.getElementById('p6').checked) {
        this.pocketsx =
          'imge/front/front/hip_pockets_double_welt+fit_slim+third.png'
        this.pockets = 'imge/front/front/hip_pockets_double_welt+fit_slim.png'
      } else if (document.getElementById('p1').checked) {
        this.pockets = ''
        this.pocketsx = ''
      } else if (document.getElementById('p2').checked) {
        this.pockets = 'imge/front/front/hip_pockets_with_flap+fit_slim.png'
        this.pocketsx = ''
      } else if (document.getElementById('p3').checked) {
        this.pockets = 'imge/front/front/hip_pockets_double_welt+fit_slim.png'
        this.pocketsx = ''
      } else if (document.getElementById('p4').checked) {
        this.pockets = 'imge/front/front/hip_pockets_patched+fit_slim.png'
        this.pocketsx = ''
      }

      //breastpockets

      if (document.getElementById('bp2').checked) {
        this.breastpockets = 'imge/front/front/breast_pocket_classic.png'
      } else if (document.getElementById('bp3').checked) {
        this.breastpockets = 'imge/front/front/breast_pocket_patched_1.png'
      } else if (document.getElementById('bp4').checked) {
        this.breastpockets = 'imge/front/front/breast_pocket_patched_2.png'
      } else if (document.getElementById('bp1').checked) {
        this.breastpockets = ''
      }

      this.sdata = this.updateProductACN(this.sdata)
      this.sdata2 = this.updateProductBCN(this.sdata2)
      this.sdata3 = this.updateProductDCN(this.sdata3)
      this.sdata4 = this.updateProductCCN(this.sdata4)
      var cbuttonV = $("input[name='custombuttonsuit']:checked").val()
      var bholeV = $("input[name='bhole']:checked").val()
      var btnthreadV = $("input[name='btnthread']:checked").val()
      var lapelV = $("input[name='bhole']:checked").attr('id')
      this.custombutton = this.sdata + cbuttonV
      this.bhole = this.sdata2 + bholeV
      this.btnthread = this.sdata3 + btnthreadV
      this.btnlapel = this.sdata4 + lapelV
      //accent
      if (document.getElementById('bt3').checked) {
        this.bhole = ''
        this.btnlapel = this.sdata4 + 'lapel1.png'
      }
      if (document.getElementById('bt1').checked) {
        this.bhole = ''
        this.btnlapel = ''
        this.btnthread = ''
      }
      if (document.getElementById('ab2').checked) {
        this.custombutton = this.sdata + 'button1.png'
      } else if (document.getElementById('ab2').checked == false) {
        this.custombutton = ''
      }

      if (
        document.getElementById('bt2').checked == false ||
        document.getElementById('bt3').checked == false
      ) {
        this.bhole = ''
        this.btnlapel = ''
        this.btnthread = ''
      } else if (document.getElementById('bt2').checked) {
        this.bhole = this.sdata2 + 'hole1.png'

        this.btnthread = this.sdata3 + 'thread1.png'
      }

      //method end
    },

    updateProductV(variantImage) {
      this.bbottom = variantImage
    },

    updateProductB(variantImage) {
      this.bsbuttons = variantImage
    },
    updateProductSQ(variantImage) {
      this.breastpocketsquare = variantImage
    },
    updateProductPS(variantImage) {
      this.breastpocketsquare = variantImage
    },

    updateProductACN(variantImage) {
      if (document.getElementById('s1').checked) {
        this.sdata = 'imge/accent/single1button/'
      } else if (document.getElementById('s2').checked) {
        this.sdata = 'imge/accent/single2button/'
      } else if (document.getElementById('s3').checked) {
        this.sdata = 'imge/accent/single3button/'
      } else if (document.getElementById('s4').checked) {
        this.sdata = 'imge/accent/double2button/'
      } else if (document.getElementById('s5').checked) {
        this.sdata = 'imge/accent/double4button/'
      } else if (document.getElementById('s6').checked) {
        this.sdata = 'imge/accent/double6button/'
      }

      this.custombutton = this.sdata + variantImage

      return this.sdata
    },
    updateProductBCN(variantImage2) {
      if (document.getElementById('s1').checked) {
        this.sdata2 = 'imge/accent/single1button/'
      } else if (document.getElementById('s2').checked) {
        this.sdata2 = 'imge/accent/single2button/'
      } else if (document.getElementById('s3').checked) {
        this.sdata2 = 'imge/accent/single3button/'
      } else if (document.getElementById('s4').checked) {
        this.sdata2 = 'imge/accent/double2button/'
      } else if (document.getElementById('s5').checked) {
        this.sdata2 = 'imge/accent/double4button/'
      } else if (document.getElementById('s6').checked) {
        this.sdata2 = 'imge/accent/double6button/'
      }

      this.bhole = this.sdata2 + variantImage2
      if (document.getElementById('bt3').checked) {
        this.bhole = ''
      }
      // if (document.getElementById('bt1').checked) {
      //   this.bhole = ''
      //   this.btnlapel = ''
      //   this.btnthread = ''
      // }

      return this.sdata2
    },
    updateProductCCN(variantImage) {
      if (document.getElementById('s1').checked) {
        this.sdata4 = 'imge/accent/single1button/'
      } else if (document.getElementById('s2').checked) {
        this.sdata4 = 'imge/accent/single2button/'
      } else if (document.getElementById('s3').checked) {
        this.sdata4 = 'imge/accent/single3button/'
      } else if (document.getElementById('s4').checked) {
        this.sdata4 = 'imge/accent/double2button/'
      } else if (document.getElementById('s5').checked) {
        this.sdata4 = 'imge/accent/double4button/'
      } else if (document.getElementById('s6').checked) {
        this.sdata4 = 'imge/accent/double6button/'
      }

      this.btnlapel = this.sdata4 + variantImage
      // if (document.getElementById('bt3').checked) {
      //   this.bhole = ''
      // } else if (document.getElementById('bt1').checked) {
      //   this.bhole = ''
      //   this.btnlapel = ''
      //   this.btnthread = ''
      // }

      return this.sdata4
    },
    updateProductDCN(variantImage) {
      if (document.getElementById('s1').checked) {
        this.sdata3 = 'imge/accent/single1button/'
      } else if (document.getElementById('s2').checked) {
        this.sdata3 = 'imge/accent/single2button/'
      } else if (document.getElementById('s3').checked) {
        this.sdata3 = 'imge/accent/single3button/'
      } else if (document.getElementById('s4').checked) {
        this.sdata3 = 'imge/accent/double2button/'
      } else if (document.getElementById('s5').checked) {
        this.sdata3 = 'imge/accent/double4button/'
      } else if (document.getElementById('s6').checked) {
        this.sdata3 = 'imge/accent/double6button/'
      }

      this.btnthread = this.sdata3 + variantImage

      return this.sdata3
    },
    updateProductIN(variantType) {
      document.getElementById('initialText').style.fontFamily = variantType
    },
    updateProductINC(variantType) {
      document.getElementById('initialText').style.webkitTextFillColor =
        variantType
    },
    modalFunction() {
      this.stylePicked = $("input[name='styles']:checked").val()
      this.lapelPicked = $("input[name='lapels']:checked").val()
      this.fittingPicked = $("input[name='fittings']:checked").val()
      this.bpocketPicked = $("input[name='breastpockets']:checked").val()
      this.pocketPicked = $("input[name='pockets']:checked").val()
      this.bsbuttonPicked = $("input[name='sleevebuttons']:checked").val()
      this.ventPicked = $("input[name='vents']:checked").val()
    },
  },
})
