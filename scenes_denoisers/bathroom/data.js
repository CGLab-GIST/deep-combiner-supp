const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/40spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/36spp_nfor_ours.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/52spp_kpcn_origin.png"
                },
                {
                    "title": "Ours for KPCN",
                    "version": "-",
                    "image": "images/48spp_kpcn_ours.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "Reference.png"
                }
            ]
        },
        {
            "title": "Equal-time comparison (long-term)",
            "elements": [
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/298spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/292spp_nfor_ours.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/312spp_kpcn_origin.png"
                },
                {
                    "title": "Ours for KPCN",
                    "version": "-",
                    "image": "images/308spp_kpcn_ours.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "Reference.png"
                }
            ]
        }
    ],
    "stats": [
        {
            "title": "equal-time comparison (short-term)",
            "labels": [
                "NFOR",
                "Ours for NFOR",
                "KPCN",
                "Ours for KPCN"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "40",
                        "36",
                        "52",
                        "48"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "48.5",
                        "47.8",
                        "45.5",
                        "44.3"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.005486",
                        "0.003486",
                        "0.046099",
                        "0.003903"
                    ]
                }
            ]
        }
    ],
	"stats2": [
        {
            "title": "equal-time comparison (long-term)",
            "labels": [
                "NFOR",
                "Ours for NFOR",
                "KPCN",
                "Ours for KPCN"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "298",
                        "292",
                        "312",
                        "308"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "243.2",
                        "242.6",
                        "251.5",
                        "250.4"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.001961",
                        "0.001277",
                        "0.035847",
                        "0.001772"
                    ]
                }
            ]
        }
    ]
}