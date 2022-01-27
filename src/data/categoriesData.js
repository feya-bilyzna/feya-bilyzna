const categoriesData = {
    categories: {
        brands: {
            name: 'Бренды',
            route: '/brands',
            imageUrl: 'https://bn1301files.storage.live.com/y4mVzB5pUrJQHJbdxQFo26-YDR1PVQZHF2RZaVr6rq9ETKXy99cf7xUTfHpgRjq2ZP_tf-P5GD4RUiz2qbwU6I7ft-uCurNItL0HpztXhjLh76PKdeXHbaFWHrWwlPkBTYnB1g13jJEi3eNLb_96kdPUio4G305hBzUQ82CFvHkIEdHW6ale8RkvJ1_pNbu4XTC?width=512&height=512&cropmode=none',
            subcategories: [
                {
                    name: 'Anfen',
                    route: '/brands/anfen',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mI3K_VZRux1ztrUlEBnv75c2UxzRS5dZoG8S6yGpfTq8R3n7hwiC4zusRsH_OVyIq4lMFEYXmfaRJjrvuXcEYopF8sHkAaya0V-RNls0U8u0THFVAqgZQMtBfsBPccSpyUx4QclR5daEig2Zyb8AL1nTa59fHhCjT8cBeKz4Xua72_2oekSNVtPDtK75kwUjO?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Diorella',
                    route: '/brands/diorella',
                    imageUrl: 'https://bn1301files.storage.live.com/y4m-alQRMakCIsNLYPa56FrdBP2xo0xzyC_3ZT_QBqgFMy49Niw3pCHl0iF0rNthmCiotx3ECdIMXK1DG-dL1shBzjoNL1RdY6B0C8IC25a4hYWvwCx9L4VFCbTYu5IRoKpYd-qm_cnh4pb2NTbHEQj4MYYtQCdARe0RmjHg4fPj1Yj_HWoc1p8a6VyiNCvTnvN?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Finikin',
                    route: '/brands/finikin',
                    imageUrl: 'https://bn1301files.storage.live.com/y4m7XpPK78vhWZ0FFi9vRIVTfGY6aoWriDWzsN_iIojKlwAUa6AmUu6YsP_6Ea9w18XFVkyYfZEMz66Hnkb6i_dZEpCEUDbeyX13OuU7MOWuI1SUr2sTdiYmMeuAMODuvyVeiFjNny0bc564qK_SJMpfm1J4USjUWQQZi2nrbJ_yQLJemp55Gfgzvl0htUol2s-?width=512&height=512&cropmode=none',
                },
                {
                    name: 'FNNISS',
                    route: '/brands/fniss',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mqkpzHIuZebLawM-GdNv5yBTBHUus6vi2H0AXh3DXKU0O31fjut9b4QtwX3e7l2nTufVsYR1oM2Zmcyhoh4xQ-Cs6qTfMGay5aVxU3IOUvJRbH8vpcGMBy79VzF7FLXCI6ldFB1szQM4WEL2rdXDLwkRHTj_clV2LA3pyc32oWU7V57wwvF8YRSNSEHE5b8sj?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Lanny mode',
                    route: '/brands/lanny-mode',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mTqtTqukTyQn5Yehke9KIzwQjqRhAVcnSznbS1m5-2TdJsa7gOewLjMdAGGdDaO8pwrP2YwXRq4wsTkC2TzFlGeb2MaBXChAVEFAZlHFNG2aLYKNcF2TxpIdynK9ow3jl4xim2yrBPHU0-jrBNLpyTVhleYj1dx60q7QIG55XecguWZivZBR6IJzmT8CuBnKh?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Venus',
                    route: '/brands/venus',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mUH-uz3aLgEtKb4ayeQJve9lpXNlucCppMzQbJdg1zMzkgXHsUIUWTkBLZmHGnKh9KU1ewPI7EjQ7MadbUFIi5irxLPKVOelykeVMjvgQnXExFWrHFG8bgV1Fg1lcjfeDzjP5OBfJj0KX6XbKLTRzzJ4hm54IIr0ImpHJ2lfoZJB4e00m5KSOF7gPUXK3ym9W?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Acousma',
                    route: '/brands/acousma',
                    imageUrl: 'https://bnz05pap002files.storage.live.com/y4mLXb1PGxZZAjM06itAAJPmS1VoSEIC-A3Ca0OTy3scla-01O_qhZgep86LahLLhouOLDwMMNcmcM3UkPOkswC5kwR0MwUzuYW4ttb-aolIdL0j2NhPymtPa4wdDBwqfbGS7Rrhs-6J5tMvY0tTzlWwwPl04QIOoJmaA7KCj3isMgPy5D9Mme7a_InIKIerXlh?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Anttifu',
                    route: '/brands/anttifu',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mFjRmBLo6-ucyA_8AHF2PDp--QhTyn8S_MVOMQtq3Ix49FFo0KBQOxsiyCNnzA7iP-rl8rjRKKs2vaQgUjPPHHZgTUqY9a0rGACK40hH-uvAo02dN0cY7lrAYbuPe-Q1iRCG7TmMyjXWDKnLbUvX0D9zG7nUTRS-oTpZI_F9dImxYqcTNy8Z7jUnNkROdwSft?width=466&height=466&cropmode=none',
                },
                {
                    name: 'Annajolly',
                    route: '/brands/annajolly',
                    imageUrl: 'https://bn1301files.storage.live.com/y4muWAk2zYechCVtme4D9svJ2ZcCJJYGVJXwaoK7q811Mx16q0KXqurldPSVxxtdnyquSYu7zLdyvEZyZXcJOhmps1rghkSv_zH8J7njZm5rwJ3Yxi7CYDFYpkeP_kq2pafiGLzNn_bbCEifex0GKGmjeRD4gaUtl-1TmrpeMg5aSbk6Sqvy0w1Uz_76AF1PTzC?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Beisdanna',
                    route: '/brands/beisdanna',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mwKIOBDOY5TYqWw5t40_IwHz62dkD_tWRzVs8xJyfAzXsiz-FScPqoQ_tou0NJ3uKMv6RgvowuvmhrjCO0xr4pZ3QU35DxlGOpJR1OHgEWCyAhvr02bERN-CJSq_3Ho1LCNzYeuH4P_EQesxT5wp1KJXpN7t0cM2jmNAsVt4ZoorthOFmuBSu4kuvOwDdm8Aj?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Biweier',
                    route: '/brands/biweier',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mTfqCnJ1FkLs0FXvsgsMSyCs_MG2Jojx2io-RfcU2yFMvkgSkwOjcmQ4JrNHmRoyBUgbcgADdS4oT9vuBP8IcPzUWuJWDtNIHmeEjW_lWpldANYGnoNmpTZJxjqM1lq8RdfIsNR7XRQDP_uQ8gQblQi3vLveckF8kw3iV5yXhjWWwJTVg-SkwT2G3Dmwn7tcu?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Blue Rose',
                    route: '/brands/blue-rose',
                    imageUrl: 'https://bnz05pap002files.storage.live.com/y4mYLKPY7SGZvc0yLLiQpmI18Uqm0UMIWqFeyBVRoM0T8VYushhhOGasbw6b6gDCde3UfbfodJR7kER9rRhINImm_AUqWFnj12hIaBlvECwX6Fe1XyWzhj3_F6VsU51yCb-sDtS_6DcdyzqWqkv6wnv3o47QcoV3sO2z3KE1j4X76P1rSMaQwDGZeTNspPrzmLV?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Calvin Klein',
                    route: '/brands/calvin-klein',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mF4L31RcQ82iG76-9gNVPE71xsYgTrwl1cp-xsbk5vOoJN-f4CRLiqOKN1bxLH7uaHHk-7V8PGF1azGw9MOe1xjhW15HqDpg4KhNFoQZ761WFcBP3tp5e0l5d6S63Tx8aw4woewUc_DoWHfA44aBrmWdFYuDdsO7BrN1Wlpdkd8Axu7fOT2xwNA8VokZbNcwj?width=443&height=443&cropmode=none',
                },
                {
                    name: 'Coeur Joie',
                    route: '/brands/coeur-joie',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mJPpO_yr18lU1RGwvTeuxFTMuGegsJjyu-N1V3s9w3c87WrFdj8Uw0PS3sfp0MXSg59bqabDIkfmGJSxtwpwbxdEUH1nKcMsBpGtYLOXgHyKW-rEN73snC-oZknpLZTwLMQAsqgHj_UpheqUtE2X0qxXE-fX7OKHsHyHasWCWH6aAsp774ErOW4AqI7iz1JUe?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Diana',
                    route: '/brands/diana',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mFi_L5XsIRoBOXxuA93LkfcKxpx1D3dxWvxpbEBEU6C16oM258TYZEDCL_lLeAXibZHES_1Djlflw_FFOmnUwXw082lN2yzV6ylV29Rr2L_MHXC1vinTNMffKf4pAzHhwFTAFrsHQgKSy_LtUGWRp03DHhqe3CN9SQ0BLwWywGQn-PBdDHKTSlzL5YviDB13X?width=593&height=593&cropmode=none',
                },
                {
                    name: 'Donafen',
                    route: '/brands/donafen',
                    imageUrl: 'https://bn1301files.storage.live.com/y4m9rF-INAfCQ0mvr-p-li5ZoRXmgJ39K12Fc6GgB8rGrhDB6BhUs50PEAfBSi8iWzgpI1ru3xrNyVjAR4uvacM_Igj6wUjjsU_VezqFzBjSbUO9LPckpyAGr98dBAFMqPrxC67mX07ws__vrU7oJqrdo1O8cEMcBjfA1quLvH-TSL9vGl6SRlY20ZriCiVM-bO?width=512&height=512&cropmode=none',
                },
                {
                    name: 'FINETOO',
                    route: '/brands/finetoo',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mmOz1i8HCPVFHU16p1XzYJRMB4BXuNSqTlzj9sUsqZN1pc0TMBUj7-Lr3uceTHWGkjOlhh71I6_z7JOjfK6j0JxEHKgFL7cNc9T8oanIhuhTgmgGSUO5-VFvjl395ucooPqWTSU-_Bt4O-d4Q53vUBZ-Sef6Y3YXsdCP8g-B5fkyT0gYl8E1IGJxl1lCBr6fD?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Guo. L.Y',
                    route: '/brands/guo-l-y',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mXofmOE_PC6GLzYEeSdvAcN-ofWlDUFnQge93NB1JwOi8M6EF08yq2sB2mLK-8zr926j6M0vOYYiCFxonJaMbqdAMafJVhHFfJWd7NTe1swaWSYrgZoMvbM_0OpxTvs_jt7IXJvR-dI_Qt42TNw_lMsqekxxFHbqKAtDh2GQUn4bb9pW-NArYajrBVc_y0MCU?width=512&height=512&cropmode=none',
                },
                {
                    name: 'HY',
                    route: '/brands/hy',
                    imageUrl: 'https://bn1301files.storage.live.com/y4makd4QzIRLSF2LFU8aEg1PugPPHVsv9nvT9SYTsUmoUAlMG_nZSxHfDUheoy3a39vi9BGlmGb4-ESV6lsa-MzKEmWtr_LO-dtbPh_J0z1zGg9fWYk4rEQCFMaWKMTefa7oFnwoxMFHiwAk009ZnxP0a60TLMexL5n03xAcZ0HQbqxOb3rOw-xUtb09g3WjnaU?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Kable',
                    route: '/brands/kable',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mhYbN83mzhuTgZZZLO1Fdi1q7G2ryBoNf34AVqj6W2CgqIuufJEBqtQY1ItO2viaWNP7mM_3PePWjZ284PXv6ncOytXJrotKk8KaxT9Q-UaEyqk6GcUIFAXgRQFPbeZRRRM7Su3IDOojDLdgMlEFLgpoGPuMO-AHs4DTFg7h9T4WymfOVFFcgAh3c8zoVfjGx?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Kesell',
                    route: '/brands/kesell',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mZD6buPR8EKOV17NMF_1ubfnejDRONzZODu1AbXoU5KKem_vrY4epzcMv2C3trZK63V0qg7vq33UdZJK_x5iV1eDYMA8qAqtvmuqphOXm_LDyjS6hn18FzliEfHgQp5JWeWhrfvuVQjyX2pK1L2mdlz3KmEJt63ieyJDGo6e_P9rLOWcMBOWPuy0HwrjFNAPf?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Lavivas',
                    route: '/brands/lavivas',
                    imageUrl: 'https://bnz05pap002files.storage.live.com/y4mGxV-W3CsGUMoH3TVV90_Td3KXax53eSFWEcd0TF7t0xvhMIsIbSBC5ZHuAnz4fdoqskxG3yDRQNqnbQVTOTPe9DL8l6mmtAUkmmA19nVfIBylF7hJ3i0Q0agwUIltrJ0Gi67-krYA4R_UUtSAqti2jpU8dW6VIvdY8jy4rZ4gqYCM02ysvoSCz8xHQfsy4DH?width=500&height=500&cropmode=none',
                },
                {
                    name: 'Lavolle',
                    route: '/brands/lavolle',
                    imageUrl: 'https://bn1301files.storage.live.com/y4m2pcQRffyIRllFk3h8gnXXxmqUZfbsIcRanYuhQEu63I_1YLNkDNogOmqnW1mlDpTPVgEB992c61UCJ8Shpab1SzVcpKStp5ug5ZykN75Pv5t_CPWtj-eRuWzZIWSzWPNh_7cSr-AEY2W-gYf02a3FXqkhQp-I35F8CEtI_BROun_mj1UWDmjVOAjRMlRj7Sj?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Lue rrose',
                    route: '/brands/lue-rrose',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mOj-KkCJ-yhjr_2IBhXUh5qwW9xe9S3t0wzsHvtzAjUgApmBj4I9BKY6_3gr9rBnzNNB7e0nXOekakaxV2gZwzlAjhRxI6rtJ8FlKhrRo6o7lN6kh-sf_djmTO_Nxkj2yMoiEtnl85ydJgnoaI85Zgm06Lic43K9ytwFzbGt4POKLUPqj53a3LZ4bYQR_D1I4?width=512&height=512&cropmode=none',
                },
                {
                    name: 'LuLoLa',
                    route: '/brands/lulola',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mgX42FDQ4qWVJsNAclJBgduYQt1XDgTP-ynysERtf7E5DELrbfMjVeMj-C-DICSVJ0aDPfCQ0NgmSTUs3VHhTgos3pHZFVw9TPMx4URFoiymIwBjH53pKOCHDz02FFPTemQRvUVEM63dFptxoGIkwFxjmFUTYJOAAUwM82C2FQDauRsaRWvTRQcZGOcqkqK5Q?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Masdana',
                    route: '/brands/masdana',
                    imageUrl: 'https://bnz05pap002files.storage.live.com/y4mfCE9qDbAzWCBa_8TSn8ETz356MPJ8Rhr5yIStWN4UGC1z1iqDWAWfEN593ENyGI_85ViOg5dtvlXyrhKM3D6PW64KcoliCWVHUOIJpjULfM4PomZ0X9iDY1aLZ13p_gXqEAblBoE0tNL3DEmRhA4hr1ipr9qksRbMxJRGdY7kjS3iQzMiJScqNu3-3wvH61o?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Milasi',
                    route: '/brands/milasi',
                    imageUrl: 'https://bn1301files.storage.live.com/y4maTkl1DlI5XFAqKCU_x6ZrXWcOjNK2OPWx1-yXtEuBr7N706OzLIX3zWQvyRv5-byQ4ffGr0QR4fLtmusK_T7CATA6VGW56sPibfKK7yZrsesdbQleQIrfhnvSvMwzasQDUsJ2nQO8aC9sNWb6HqzSqLZXbeTtOeGfgonLPrFqp6fV_5HYWS-AnLuyXePyS5x?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Milavitsa',
                    route: '/brands/milavitsa',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mTLm62KTNS8FoAqtkAefoZIpghBm7S4Pf-IR4sgH1RcRAA_CGLXgKNnlGIlPiNhHlspwNeZHiBfC9MRcA_aln9IEed45O1s8t_nCEnVZmsWXAeAWvq-3rLLyY2Fk_YDVEmxAWiGzPtcdw0hp6KvApnu2rd2rOmz7pgCnmY2EGnCEvNZJA4SWHPFdcQ8CjYbxo?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Porlloma',
                    route: '/brands/porlloma',
                    imageUrl: 'https://bnz05pap002files.storage.live.com/y4mUvb_Hl7eOzMStq_vkfTxSEivFjQnHgHwNOlXuDvtpVf-ggApyhIVIdENam5FOvPgQzFscn94_u-_n8wXhfor6DP8rcdTgfcbLZvDacDEh06Y7ITJGGwMtNb0jNgYua-OU3Yi1tE1ILoEnUq4F3v3C3piRiL3sYo7N3SPZ16R1LHFbo1CojSSLAlXt1Qxia_d?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Weiyesi',
                    route: '/brands/weiyesi',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mckVwNCzTuTV_YFbtEBvR1okQiR1Ol2Z2YhSUkXMLHNVfQavmLMdEH0q-taW9T_1LnIzqPpN2UED4_XoakLvcyjBted0gUJ74ffNZpkAL4aM_mcwzAjyBJLMitMk7EShP0Z53TuBBJRDi-vAXwkqRfsE4QKWzX9XvL1WVkhU03WSnpTrlEcQzoZDFa9pZeOK8?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Yenvy',
                    route: '/brands/yenvy',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mnFkYZ4gYW-c_iDb7c2hOBFoyVPIr33ACQHo-Q935FmOg_08YGSN5um7aXezJVbp7F1SRgjYtiKEAzMfGXjEfm4HxZ9fxYBd0qW1_5Ivg3EaXcQYw9frphW9Fz7qRjp9fYTsZ0xRxh_xawl8bjFcB-LY-gRJ2lr4tU1hyac0t4hEutdfCWsRxAuGu0ZYUbJKk?width=445&height=445&cropmode=none',
                },
                {
                    name: 'Люся',
                    route: '/brands/lusya',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mu0sd0rrQ8tcQPlTFB9jMlqEaMq4E0aFJjpnhtZVmS2qMOYnxOfSlr6mpjsAhMyqR4fcHMYm2FqBAuHay0Dl7xCC2YuD0En_p6fhSF0XF-vwe-EdpDT2pcKBBzOfBRfsHSO6cDdPWHkPRJZx6wNDr9KQtnpaE9yMlpHMES-gv_16Rw6NCG6Ku5jizAAshtCKo?width=512&height=512&cropmode=none',
                },
            ]
        },
        bras: {
            name: 'Бюстгальтеры',
            filters: ['bandSize', 'cupSize'],       
            route: '/bras',
            imageUrl: 'https://bn1301files.storage.live.com/y4mFleOB3cpgYwcrOK_1kzu9ETv_NFHkQidCUmFEsYteEk8Tv3IvQfuyoUmf-vcMeh3jXW0ossUR2kSPBAh9qaMp_bXyPeITh1qvEQ0V7VYaQn3fYPwuC_O29W4sNCmVos9hayyfAFsii7yoYxrSPualr1efligqonvXzgJkqTtoJ6xPgDQiJLztowzKcYlML8M?width=660&height=599&cropmode=none',
            subcategories: [
                {
                    name: 'С поролоном',
                    route: '/bras/foam',
                    sizeTable: "bras",
                    imageUrl: 'https://bn1301files.storage.live.com/y4mL8WRZc9YEFJN1eh65fd7J08dD1axYwEwrF4jDOVy2VjxstfjsTItdyRGkKZXpbdPblT7N6oaFvWXBPfovHuq_fUywO1kVmi-7TymsVGy9uGPT2kzQcoZd56M5KkCbu_7lpqv_lv5JTBJBhYDSgmPdEIPg3hW78yUwCVXw5etzXRL6VrdJp354jZbTdBbr39C?width=660&height=660&cropmode=none',
                },
                {
                    name: 'Пуш-ап',
                    route: '/bras/push-up',
                    sizeTable: "bras",
                    imageUrl: 'https://bn1301files.storage.live.com/y4meGtNDJum0YZ7nVgpYDsUCpisnK9tU-iHZo073WO6QkM2nX-fZMxej0pS8VqboYg_ebYRtJm_tToBFKssbmWNeKGD5UDyiE2Cl4oJ6sCijYUyZooqzJKfYU08q7itel1R0Egmz056rmWnG51Z4wZ887eExP4Tlcq4AvwrGJmml1azMiBnUNw8Uab-ISQJF3WH?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Полупоролон',
                    route: '/bras/semi-foam',
                    sizeTable: "bras",
                    imageUrl: 'https://bn1301files.storage.live.com/y4mijsiqrUbtjQh78IwBhqY8WDFRw1x-2cNEzYX1Dk05qRKKd5Cl3bv-DbnMVBf4ah9nSgIg5jK7dbVGGj48ZMCZsE06Pl1Qb9ofY82lPsG6iPrz77IUltCCPxCb0oTmbHZZKT7VA0GsyXT2iUuoQn8mUlIS2RAUEVfxRPWMi6nsjZbq7v9H06E2VFSfbXOhRUr?width=660&height=660&cropmode=none',
                },
                {
                    name: 'Тонкий поролон',
                    route: '/bras/thin-foam',
                    sizeTable: "bras",
                    imageUrl: 'https://bnz05pap002files.storage.live.com/y4mhmE24RZY6zDZXX_EGq3NpzokCqe7WHBjgONk7cM7cyxrpkuIn9pikPbnPzYSLkIkOOi6c7oY2451l9bdJ3N4QtBUQt46dCKjsawcx0xAMj69uqrgGt0_UtZ_h3cEQZ2xbMmAKn90ucl8ZQbiAtPl8nSzkhDImjxZjGvNUEZUG6JC-_Ulu_HUmJgpF7CPgJNN?width=660&height=660&cropmode=none',
                },
                {
                    name: 'Без косточек',
                    route: '/bras/bralette',
                    sizeTable: "bras",
                    imageUrl: 'https://bn1301files.storage.live.com/y4mV4IhnbidFOvQ9bP4szVMirrnbMi0gqNZA2ZigCoOV_-TvJ9L5jK_4DJvAIY2aDeq82WzpnqagwKnMxqOo3xIBG3ySYzwYMqzY3KU2-lavjqabQhKIs6FpYZXuC40Lhc0xsqazug-yfVLfoayz9Zmfz0zYjswMAVAFXQcQ7lZY2Sp5vrUgaCZuItgpef3qODG?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Без поролона',
                    route: '/bras/no-foam',
                    sizeTable: "bras",
                    imageUrl: 'https://bn1301files.storage.live.com/y4mfh2wBHcJZd28b5VqXDhkoRiTrivWqVcaycDX7wzPqzVPGcy3sGOVxPBW-CXZ28YzC7OAwygl8s48UOFlWe6iA-la82i-T_ejxkDbB9Cs0TwymsVTCM61r4mLTH80qy25UGuefIdjiN2HiC8aaaPBpwHmICPqDu4LmCBO2GaKveL8olk7rPX23E1uENntsV_z?width=660&height=660&cropmode=none',
                },
                {
                    name: 'Для кормления',
                    route: '/bras/nursing',
                    sizeTable: "bras",
                    imageUrl: 'https://bn1301files.storage.live.com/y4m-X7h5Axa2pfQ-hzCQKHIzgqQaDM48EUsTZ0YueHv6IzREWzQhwXwoApzrjETHShGD2lbX69tUQH7ud2HjVShEsEHvKCBM80btl5mieEiAGwTyNP2D9IYnM070SQ-Zpkp9Z1LPXkA_J7MaUxpm1ye0OURgSbBvCuPzs3hIneoLZcp8WeDp30RWFabTdwdUplH?width=660&height=660&cropmode=none',
                },
                {
                    name: 'Бюстье',
                    route: '/bras/bustier',
                    sizeTable: "bras",
                    imageUrl: 'https://bn1301files.storage.live.com/y4mOXDCSyNL2Cgk8bjgdDiX05sPYYvdae0UN7Odz_Syykl2f_S3dlJlvdboEUs1bNuA0XUFWfutLzJKrk7Vq7Ua4wPTzp5ylrLBDArOi-YvwuEAq3KI6dTVAeDwCQ2_Qtg-A9gVnZW1HOiFrbdUuSnb_08mKJXISM9M5imTA1xW5dCMtLyfcz2Yy5kja-rR111u?width=660&height=660&cropmode=none',
                },
            ]
        },
        knickers: {
            name: 'Трусики',
            filters: ['size'],  
            route: '/knickers',
            imageUrl: 'https://bn1301files.storage.live.com/y4m8cBK3gqpgrVXucdheNtz_woglhja9jfUmV7kNVMQ9UXIQYdHCOyNGnPD5vf5tDIRdN3eNlEjo2Sq-3FKxFAzNpsfFru7bs3Q-RKzmY1NzlnPKXviZMUZkGQizXoLdZZZbro_8qDkbdpUzb1THSde5_95wD-mRmEPWvZPjDWWjgpo8eKkt4r0Ao0ex-qp-kTs?width=660&height=660&cropmode=none',
            subcategories: [
                {
                    name: 'Бикини',
                    route: '/knickers/bikini',
                    sizeTable: "knickers",
                    imageUrl: 'https://bn1301files.storage.live.com/y4mVZL8UBnKNJSWL5SADtO23VyyaiOnDmPQfpjWB5so0tFSEXhwOCIIMtQ2JTErvnRWXe5nyzP18lUAbjQVCdg2wCbzZO3nZ7MDt_1Oli0jnxM6MPZi_-3r9dPpGB4pYE1v-X-Q3USj3m2qjMwx_LgDexPtppJGAWPbZVjIm9o884yi04SjzIoKKxUHdMX-Nqg2?width=660&height=660&cropmode=none',
                },
                {
                    name: 'Безшовные',
                    route: '/knickers/bodyshort',
                    sizeTable: "knickers",
                    imageUrl: 'https://bn1301files.storage.live.com/y4mYudnLA663uTfRbvgx8rM3FlcNnVSyfv1DnS4F3SzF3h8nfJsA-bVJ-7-I7g2cM-50uzljHqtk3I4pxvIMDEB2SNC_t8Vyg14D5MOBtNHHYWpz12Wrm0Wi0Hozl-kWpuwglXZJEytM9b4fyZWa4wpae0rP4CnRmBVhMPub5J5iCE3rw7E2V7V5-wyzhkKAusE?width=652&height=652&cropmode=none',
                },
                {
                    name: 'Бразильяны',
                    route: '/knickers/brazilian',
                    sizeTable: "knickers",
                    imageUrl: 'https://bn1301files.storage.live.com/y4m6jmwfYC-vON2eY0-n4NZkLxhT0axo6v58A1hLcjrweqrLXFakmtn2L9eqO--WFJS336LdJPafpOK7_fr3HqIw7A2jT6YfLHfqbyqqQH30qpAmxOWCi_bRWugGH6IzQwwKOrUSeMTOI9f9EHbaB-Dr5Qn5r_1XsFgj38BZd472NeMgiwK5iO4uh7VisziRNGN?width=512&height=512&cropmode=none',
                },
                {
                    name: 'Норма, Слипы',
                    route: '/knickers/brief',
                    sizeTable: "knickers",
                    imageUrl: 'https://bn1301files.storage.live.com/y4mqVaVWI8MVRd5jNeQfNS1kCSMeVz-x_4sgzeg08IPjrdM_pG6eemXONOeKvHR4-jD5CEg5uzFrUJ96-tN47uvwJ2CP0Ic6yF83WRuh6R2P-DoDji4Im-9IJxQ1A5e-JRiDy85dkD1h_WKMmBSHDA5foWjX3fOAjNKOX-4f5-0vcWlhA1mUfimngoWBmcpPxE-?width=660&height=660&cropmode=none',
                },
                {
                    name: 'Стринги',
                    route: '/knickers/g-string',
                    sizeTable: "knickers",
                    imageUrl: 'https://bn1301files.storage.live.com/y4mNqe25WmKu_9S8hm3nbjkJ0vqnUjhZQasBATJdnBnAp_JLa3he3Em54b7sCRVTdERYKLMU9haUUC-Wd7UHPQciXnhD4gf0hKOJ0BFCteMpSZIifM-sgXynT9IXP5NpXjjcS-sITf28GRRCHt-s0c9Bxc0Jt7nlM8l4IgflxSHsVF_z0V7lrqE3d4NfmKzGvab?width=660&height=660&cropmode=none',
                },
                {
                    name: 'Батальные',
                    sizeTable: "knickers",
                    route: '/knickers/hipster',
                    imageUrl: 'https://bn1301files.storage.live.com/y4m_WSDir5a3dSR-5nRPd8DHcbIS7SzQcC3HXMA5If35G2Wbh6t-CyGwV9v8035pUaDRkONwQLx4j7C7a270mXiEpS5ile1abhD3inkMOzvO2DgyZ3oktHZrHzOJhQeiez56ypyu8KGI8lltV5Vn6fRJrnPI3IHGYuIoA-od6uNcHKGo1YvZu6GpQen6X4DwEE4?width=660&height=660&cropmode=none',
                },
                {
                    name: 'Шорты/Панталоны',
                    sizeTable: "knickers",
                    route: '/knickers/shorts-trousers',
                    imageUrl: "https://am3pap001files.storage.live.com/y4mxi5AfqWPi6_Z1u0vuP-UkqEmCoAYjxj4KtwiIS4ZT6REACoqD299WImMM858Z-32pUz_c-c5bq1Zf-bgKnWiRhgPaH4H6KokRvLihxk8nFVwPHTSubs0mYIPQjXLmtBzPLBpMqewvCOLXAe9DsUKjCywTsywjD4ay4S0iEDA4VIV0uDCMf7ViZS5jlpSTMiR?width=720&height=720&cropmode=none"
                },
                {
                    name: 'Корректирующее',
                    sizeTable: "knickers",
                    route: '/knickers/shapewear',
                    imageUrl: 'https://bn1301files.storage.live.com/y4mV8BmA4dF2wOm0JwRRn0Ob_rlhSnnVFDlFFANSv7b0Wqh8Wdvt5GgZM-hPQdblUC8SrsOwouo0Ay7FuyyWmgdfy9dbJdhGAoFBAXwaLC2_awWc_lo_eFUZ3mN3T4eL5iOOaZOMD44VCiM4SIieLcfYaH4GBmV21ct2D0Lpr4rnOyIbfdeN9_nxg_n-MVI35Hq?width=518&height=518&cropmode=none',
                },
            ]
        },
    },
    uncategorizedSubcategories: {
        sportsBra: {
            name: 'Топики',
            route: '/sports-bra',
            imageUrl: 'https://bn1301files.storage.live.com/y4mjtIBgA8foW5G-ugyflAUiN2TXxQBVkVGMMOm_MgPmDu_C68g3xONgCoHcfwOhf1im-AjL7VMPgiaulNjcXfZbeRoUd1vzMXw7xo-ilQVSvXMWpRqx7m9wjC8Uwa-aKWC8fgMyV8B3dYc4hNsoVHaxSGNqeB-RTfNZIrHLpLXsGPe7jiJwplnWcIjKX8_3uOp?width=660&height=660&cropmode=none',
        },
        underwearSet: {
            name: 'Комплекты',
            route: '/underwear-set',
            imageUrl: 'https://bn1301files.storage.live.com/y4mLRI7Uak5tFZo8aD6CH2YeA32-y6w0H1jx-mcj6CKuEkwn21UBMxwNTHFFAxwWuAmGrF2IQ_qIvxtW_Yd-1pt0upEBpM1haFYTya7K46sw-KWLHGIKcqkODSRU61fWkJ-q8exZx4O99c1zL3V97zxGOkFFDLyDYMWKFyYzhZXZyWQx1ByWeKojancpMtHjaNB?width=660&height=660&cropmode=none',
        },
        swimwear: {
            name: 'Купальники',
            route: '/swimwear',
            imageUrl: 'https://bn1301files.storage.live.com/y4mnbpQHkfGaQkk4H7OZqMBtjgIzdTaGfuQcBP-bt2mNRmBHC5JoXzbVTO-lTYaSD7wJ6-rJbrjulgNUjijGDMTX1MT7K5qJhytdYBMsPfgjzM453v2vRNQ7w5GhQFLBfvZ3XFBT0U_r-4nyNOgg5IDP3FHwPAAqMcV3Mw7nfb82YJWRbtf0gtbcUDoAh6tB_Lh?width=660&height=660&cropmode=none',
        },
        wedding: {
            name: 'Свадебное',
            route: '/wedding',
            imageUrl: 'https://bnz05pap002files.storage.live.com/y4m2CRkfVibrWH3ypqB__QnSqfN93HVCx7X5WvajbzSnBxqo97VsSfeEyjWieRHNLvp-XnbEO9KqGuHacLSgqg4tdpWZsshBguHEypWf6x5G5OnnMBfkNiOBheHcEHai41dPsyXyikNkZnyxbjQwf_Kpnt9VP3uhrcMbUDt5cigX5B2KXhLLO2ZbnhqEpR79zJR?width=1000&height=1000&cropmode=none',
        },
        accessories: {
            name: 'Аксессуары',
            route: '/accessories',
            imageUrl: 'https://bnz05pap002files.storage.live.com/y4mOPb6iyZ0z334L3vYSPKIDJWs8hz4BwB6xqS1LqxdRBPwyfLex9efCTLOa7MuDs2Q5vCcwjlppGHWoEx2gBn43wWGDWgz-duKoGRO9JqEU3xeJ2dIKPSVEOYaREE6nx7SDm5VSmC2X4s8u75ZNDQimuECHD-pFriL4i7Y98hsGVixuAsp4v3qbVGM3Ii-sSvZ?width=782&height=782&cropmode=none',
        },
        other: {
            name: 'Разное',
            route: '/other',
            imageUrl: 'https://bn1301files.storage.live.com/y4mcO7B_h1N1WdCZrwchGrNzuJKgHIoRbSiO1w6uRTz5hoPePjglyD6QRxR4jaNvGlJ3yrO3KPDxiepppdfuswUSjJGlOxPIWs9ifq2HlCRVpLkjLXJ8qfngZkdT2WmL9vo19fnRCpz4kuuAhtZYejc_St9ioU3LmBwsf16DE8uMzcYbS-XbWvxCYXjcOLpx_Do?width=660&height=660&cropmode=none',
        },
        sale: {
            name: 'Распродажа',
            route: '/sale',
            imageUrl: 'https://bnz05pap002files.storage.live.com/y4m66VjO6IxvdK3O9DSnN53i2pc7yqx1B7bEdIiCanUn7f4CyZcEZFI8vOf2O7uEyD129d8ZXZl29m-wLajL0JzfENgCsPCRY0TxbxSvgeJCnvOcZigvt7BGIb7-OnFGnaHlm84eoRGA7ZkY1vDvC7bNa3I-1cDGCLZNIuZKs4ddGBwVzhAxHDZ6KcF81Mlw720?width=567&height=569&cropmode=none',
        },
    }
}

export default categoriesData
