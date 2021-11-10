const filterSortData = {
    sorts: [
        "Новинки",
        "Цена по возрастанию",
        "Цена по убыванию"
    ],
    filters: {
        cupleSizes: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
        ],
        bandSizes: [
            "70",
            "75",
            "80",
            "85",
            "90",
            "95",
            "100",
            "105"
        ],
        colors: [
            { color: "red", link: "https://bn1301files.storage.live.com/y4mFs0PlgEsWEnfHoH6nLfKIZnU6_0g2KuxfXHbgdx-lp4Es3P9BKDlOVfp6q1HnQOemKooE-9tGoON38KJqQy4GXGPVTTYXQvN05y6w1-FO8w19RaeD-EVY-N4Tx9hO9RXnzNzpTWr4qIxu73iyUZ7nrN7cFK3w5IvfK-cbmydztb0NcNgGoz-nbHeyDFvJ49R?width=40&height=40&cropmode=none" },
            { color: "pink", link: "https://bn1301files.storage.live.com/y4m-4s2lGepQ9LuXGdPvTm-m-yoTbeJy-oa9WGF2ZSOR9kIaNnX8GDGy4YSOuLatzfMDnl23_F2zH51njLRwQv_pwy7hKbIEfanQl8YqOW91m-zXCvF_Djk_7ldeQan8gyrKR65ACi0zaD2qc5QmebiPNvztWKz66Hl6fUaakK1HpVYS5gCIrycU0C_Xv5BuAGP?width=40&height=40&cropmode=none" },
            { color: "purple", link: "https://bn1301files.storage.live.com/y4mbRd52ELWoQkzAH2w8aAYoq3ctDZkA_Fc-Rd0FY8i2UpUsBN445iif5TKRbqq-SR-3Sr5a9TVYqq981EDIqRMN_Y-8XXzP-MILxeRMW0ISgD87URAtMANyjLVi0o_bvFB9KtASbT4GbzZelqd3rr04WkhuZUdDTuauzI2xwDPPpBonlPJLlVqD87S5R7fBcvA?width=40&height=40&cropmode=none" },
            { color: "deep-purple", link: "https://bn1301files.storage.live.com/y4mCI8seIvD6Wrt0gWEdZXiG29EpEKCPYIpr-z30ctYuvULeqAlCZ3LH4WJbPO0OX5GKrVUTNTYegof7Ac0QY3nse2G9pLYiRsqexcgiWoKgozngatcRK9tLY4GTpadiN6Gpwv8oBrdKl93LEA_Hbh7izIyYY1KRmK-g6QgEJfP08fPIa2Rb3lHVp5B7Fq-IXi-?width=40&height=40&cropmode=none" },
            { color: "indigo", link: "https://bn1301files.storage.live.com/y4m-t8Vg3TErYUB3X2Ol9qlVm5CLTmWqkDUjNp3mz2Hnfleg0vwJXiGp0eP82w5vG7gZvqMCpXk7hT_UgczTgM4cgqBHc_NWL6MXmj4p3RyWfwimeA6l__VsSHyo-hs0hxLHGFGIXICWoftCq_PdmUEavDBcuYWoa4xTDLC9kUwIkzbJl8Q24AqVbn0RVf5sPVC?width=40&height=40&cropmode=none" },
            { color: "blue", link: "https://bn1301files.storage.live.com/y4mdI6iGTi74mAgaOOHui8gwcnvIHmZQrrI0En39gJ9vnEQci8XJHfNdQWY_SWfSN4At5iQtKtSjRHg9FwcizNclcdtIWAMgYjlahx2odOnPCdOd6iVKZy2eL6tqWDu2X4Qh4uPAAxZ5kjnIioAbJNKU2KBb3E7fsTcQaAP2gyceEREppsGyWfOHxPnFsUMxONw?width=40&height=40&cropmode=none" },
            { color: "light-blue", link: "https://bn1301files.storage.live.com/y4mG_LmbrOA-MR5nBhAlo_Ei17O0x_dXJh0O5jqDaG6BZMQJuej5uPOFS9hAsgd8WQUMN-CK-W7CrTeWgUt2hiMpD6OKeBqFUK17e0-fEs3SMgSR64m6SIkWfOagrNigL2cXJMED0lny03A2GheiBhc6WmSNDertYHA-2ZJQcuLEZYX1ksAKs2ZbjpYS_tv9jED?width=40&height=40&cropmode=none" },
            { color: "cyan", link: "https://bn1301files.storage.live.com/y4mszmlBLd9u4MhKFYeYL4fVKQbpTib0HKQRmENFgcQp8uNGZu4FgzT2uJz8mXDtV-nJJqNg7zmge7Do3AkCgEXSCbZl_nZjPTWs6jdSFMsNAGp2OkBSZvH_RWK4Va40Xrq_ZrQ90pwUb4KMF8LLb3v7jG87uu5Wy3Y5socOsTdIvrbv7NgVyrkRFu4-w4fl9As?width=40&height=40&cropmode=none" },
            { color: "teal", link: "https://bn1301files.storage.live.com/y4msucqb4IXB433VCOPLb9krzAZKyzdsiONZNtdmwbs_-VR0BK6brcjtRasuEGSuMjLdrf8ZDJGIBtek7olzoa_cDHjpFzVI2O0nfw3FHkO7am2_dVdIk3JWyrjBwQiy7LTRygNHi5nKrMTfQf5e91ks5VTOMywOwKm1NbE9IZs0jeYJDDwc5YWfsyoUFVqtRYO?width=40&height=40&cropmode=none" },
            { color: "green", link: "https://bn1301files.storage.live.com/y4msF5bZ9_Cb4QAGxjay3P_S5MFxdyp25f_oLD6ez-Xw_EXY_z9IS5eNNe6h6khuGiyvCwQH-RDge5bE-NOur_iSpsjVOHGFBTzqayT9jRaiUuuj6KuT06S5DzI9KIx7nSF6pX8wrwOyFBGeWocZZJFFKcPFBDJyN4SGsd7fk27BYGyWM_dRakBMgSRdtT59Mlw?width=40&height=40&cropmode=none" },
            { color: "light-green", link: "https://bn1301files.storage.live.com/y4mbv5wgRQEgfDgywBtAD18Ly9LNj64kny8GuSR5Z3Hg89cN4szZxPlO189W8_dJCZF3Xn2r0ciKksMp2XctVAZW0gw9SdbttEZGrXpe_33y4VHMqtFdscHqVCGMHh7HCJutGK9xm08uQtqdanGLMAXm9wY0p-B6iXZ9ypUKHBeSohMyPA8U63X_xu3OXG1EZMW?width=40&height=40&cropmode=none" },
            { color: "lime", link: "https://bn1301files.storage.live.com/y4mBQhhilEOZg98VpgtB_ybU4HoPZDTSPzkJ9xNYj20AwmepKrDIhlMrPvZWL9geY8AwYeWTLJdHrh4zss1HSG6b2fzOCYuDEQl93VVl0qx2ZUZflch8e8lcwOPrnQ_iegb93VIDjoPzTFHmwixp8y1pyAqtfgLhwaa7YvZp-j_YKFwtOyi0KOPcpSBeWN9bNE-?width=40&height=40&cropmode=none" },
            { color: "yellow", link: "https://bn1301files.storage.live.com/y4mU5kuh4M-pFlPKyYSzsqFLSFaqm9JFkbHrS2bjoZ_cdDkW927VUr9t4FeViJvZyNAM7DG7tfUjmO3qLhcnTEiR0NqAZLjTi3RHLP1mSxKwzs1ZkFwpv046Fw4PPgxd6gy2DZ4ywf9mtI7w7Cbvh_Uf0kPKgMPs_Fz1o9ZTo_ZzAQ_F4IU8HeAB7mXNNYJSLFX?width=40&height=40&cropmode=none" },
            { color: "amber", link: "https://bn1301files.storage.live.com/y4mk0qzGXggqH0c_TPUSyviO4JRAZQVQuH_HPUdVmUM7pHSu4M1J547DzXJxiVb3Ic9yiCTR6XxbDy53tdFK1f8uF5x8UH5tSfLCzSST5nM2Xx6SN_F3rnRm82DEndt49AyloLvDAFOplPL6xDmdz0GvHl2KM1UR8ZeMnEYrofhwWpMctF-5yzl_mXzn2JiAhC6?width=40&height=40&cropmode=none" },
            { color: "orange", link: "https://bn1301files.storage.live.com/y4maKVg3KeAZxvCzY41s0Eoh3SrmjMrPsn9v43xk7fVZOKcqHT28N0iYxn6IAG7hFOq-VxbFhz14klFq_fXVJTT3T2jD_QzVswUj9Cvce7eqhvql81BRdvRD0RJqDiimD-WnW7-M03yvQGMv_sdrtP3kxYJ36yxEstCcIy7XavYWBkWcglCJ_lUvS8kIni9GrHT?width=40&height=40&cropmode=none" },
            { color: "deep-orange", link: "https://bn1301files.storage.live.com/y4mB0lJxmkoQpVMTPMBaMoHdEEHQHfA6I4EtGzqTcg21sGlwhSwvpwUr_qb_m7fctXl5dfCu2O6DEoxd3Z0BN7E5zUhjLeKEjFeyUNlwz4Jav3wDKLjpwR3d10FjEFJy7cy2yz-Fvl9mUKbX9zUbOZadUJEMg2AjvO__7pK2xjzRSKnIn0EcPMs41gYhtwhKtPZ?width=40&height=40&cropmode=none" },
            { color: "brown", link: "https://bn1301files.storage.live.com/y4m8upE-Ey16zwi6UwMz9Te4f07VOWUi_YAm_UhAXJ_qdo7eobRudVl-yw8bxWOPX6DYGQWrMXFgjLnBriVuZum9luxiSTq_jL-29WNLVkwWnl5ThgCeEBlVdVytyheR3zNgwziatsf2ma72vDXNGi2deOLA_nQ5p10Q2N1dVpm9Wg5C88oH1goe2Qa8w0Bgvjo?width=40&height=40&cropmode=none" },
            { color: "grey", link: "https://bn1301files.storage.live.com/y4mGaqBr7ivt3suJr6xlnfFqG6lhb0hvG-nIJlByLUB70nhcaQDHCJ4t8gXAYx3tDZOtMKdrl_VEknphK5gY6dv0T6miFmJZcmOMd3FK3hK8KOB-MkwSpAwDp3szybwh_KHEHXNPqiI8mGRJC4x0ZYfd-vS-hag72PPHzFZ1EjAB6OyKUBq7OSPfP8BfZI5T4-H?width=40&height=40&cropmode=none" },
            { color: "blue-grey", link: "https://bn1301files.storage.live.com/y4mpu4uHmEgyTSK_3leFNEsfqa40AGgUUmv8ORItDU50zahsL-YwXenXmgLlCUZ8yOdOAtEV6rs2wpQCnLcu7zQvea68dJ4FLq3sc6z-qtcYqc7RaGh-jqF4EHKLDFkrW4uQc0CiQ3WGVqLZFYUBv_s8jSadlMqLQ5hL_oWFoq30ApKNzrqQrbDVzPbmrAactSb?width=40&height=40&cropmode=none" },
            { color: "black", link: "https://bn1301files.storage.live.com/y4m6bt9Mq57UvO-ZYMVXwwo3RsP5ykUA1z0N_XPdzYkjgaCkQGmoJC35FmjC2epETAlywyNm2HeB4z8XC-QOlwjUW5d2BBXBFe_cf_XsrMz6Z4nedSPwbFK47zWZDcQsS2LSkQXEavVYyfGOhoLFpVvWeHWzQ4FkmskeVsIkiqYDKwLBIFhNu-VDYYVu3mdnoAq?width=40&height=40&cropmode=none" },
            { color: "white", link: "https://bn1301files.storage.live.com/y4m9F9GU4zGUyR1YwDUWnXveiR71ITtSZ9SUl4pvc3HVDgkQW7qAlMt5mD0vF6kDjUgFPNsQQDFMszS2FHow6efIdHjuzTeDSnb5ZA7OzFuAr2xSfysc2TPqjn4NBdqmB_vmkIJD3EClq1D2HdVPAHUJeZ_QPwqX3OQ8zp5OC2LkPtxq_aZhLduoldkLqRchF0m?width=40&height=40&cropmode=none" },
        ]
    }
}

export default filterSortData
