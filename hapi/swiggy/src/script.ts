import { AddressService } from "@services/address";
import { MenuService } from "@services/menu";
import { RestaurantService } from "@services/restaurant";
import request from "request";

const data = {
    "45246858": {
        "id": 45246858,
        "name": "Mutton Whopper",
        "category": "Whopper",
        "description": "Flame grilled signature Mutton patty Whopper",
        "cloudinaryImageId": "md9oorm6eku5e4nktmuy",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 25900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 29508329,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30656931,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672587,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 29508332,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "45246860": {
        "id": 45246860,
        "name": "Chicken Whopper Double Patty",
        "category": "Whopper",
        "description": "Our signature Whopper with 7 layers between the buns. Flame Grilled chicken Double Patty, fresh onion, crispy lettuce, juicy tomatoes, tangy gherkins, creamy and smoky sauces with xxl buns. It?s Not A Burger, it?s a Whopper.",
        "cloudinaryImageId": "yunqfmtdzalinraramvn",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 29508333,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30656949,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672609,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 29508336,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "45246861": {
        "id": 45246861,
        "name": "Mutton Whopper Double Patty",
        "category": "Whopper",
        "description": "Two much mutton as delicious flame-grilled patties, farm-fresh veggies and mayo is what makes this Mutton Double Whopper a feast for the beast.",
        "cloudinaryImageId": "vpagxvdbrm0j4hkpgyuu",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 38900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 29508323,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30656904,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672548,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 29508326,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "45246871": {
        "id": 45246871,
        "name": "Crispy Veg Burger",
        "category": "Burgers & Wraps",
        "description": "Our best-selling burger with crispy veg patty, fresh onion and our signature sauce.",
        "cloudinaryImageId": "hghmixgqwyacf1zlyvo0",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 5500,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30212779,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657274,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672891,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30212788,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "45246875": {
        "id": 45246875,
        "name": "Chicken Tandoor Grill Burger",
        "category": "New Kings Collection Burgers",
        "description": "Desiness Alert! Flame grilled Tandoori Chicken, mint sauce with fresh onion  with our unique corn dust buns. An indulgent treat from our King's Collection!",
        "cloudinaryImageId": "wtgw4taqy7gncc7j4deb",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 29508343,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657010,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672691,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 29508346,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "45246876": {
        "id": 45246876,
        "name": "Crispy Veg Combo",
        "category": "Meal Combos",
        "description": "Our best-selling burger with crispy veg patty, fresh onion and our signature sauce. Comes with Fries + Exclusive Pepsi can.",
        "cloudinaryImageId": "ednjwb82asw7mbkkipef",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18300,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30212799,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657699,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673124,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30212804,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 21004190,
                        "name": "Chocolate Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004191,
                        "name": "Mango Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "45246882": {
        "id": 45246882,
        "name": "Chicken Tandoor Grill - Combo",
        "category": "Meal Combos",
        "description": "Desiness Alert! Flame grilled Tandoori Chicken, mint sauce with fresh onion  with our unique corn dust buns. An indulgent treat from our King's Collection! Comes with Fries + Exclusive Pepsi can.",
        "cloudinaryImageId": "wrtlm1nljdjwdptikivt",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 28700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 29508351,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657559,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673038,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 29508355,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 21004190,
                        "name": "Chocolate Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004191,
                        "name": "Mango Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "45246884": {
        "id": 45246884,
        "name": "Hashbrown",
        "category": "Sides",
        "description": "What every potato wants to be.",
        "cloudinaryImageId": "acabmj60n7dctjg9un5q",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 4900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30773417,
                "group_name": "Hi Fries!",
                "choices": [
                    {
                        "id": 17621104,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 17621105,
                        "name": "Creamy Italian Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "45246886": {
        "id": 45246886,
        "name": "Chicken Wings Fried Two Pieces",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 7900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "45246887": {
        "id": 45246887,
        "name": "Chicken Wings Grilled Four Pieces",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "45246891": {
        "id": 45246891,
        "name": "Veggie Strips (5 Pieces)",
        "category": "Sides",
        "description": "Vegetarian's favourite finger food.",
        "cloudinaryImageId": "aodzevst0hqvlrgqumif",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 4900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "45295004": {
        "id": 45295004,
        "name": "Fiery Chicken Burger",
        "category": "New Kings Collection Burgers",
        "description": "Too Hot to Handle. Our Spicy & Crunchy Chicken Patty topped with crispy lettuce, juicy tomatoes and creamy sauce with our unique corn dust buns. An indulgent treat from our King's Collection!",
        "cloudinaryImageId": "q3bvvbhx8egl4rzr8yzw",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 17900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30353068,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657041,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672715,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30353072,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "45295113": {
        "id": 45295113,
        "name": "Fiery Chicken - Combo",
        "category": "Meal Combos",
        "description": "Too Hot to Handle. Our Spicy & Crunchy Chicken Patty topped with crispy lettuce, juicy tomatoes and creamy sauce with our unique corn dust buns. An indulgent treat from our King's Collection! Comes with fries + Pepsi",
        "cloudinaryImageId": "izasr9xt1tbnsofyoyif",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 30700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 26004743,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657509,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673008,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 26004746,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 21004190,
                        "name": "Chocolate Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004191,
                        "name": "Mango Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "49152716": {
        "id": 49152716,
        "name": "Chicken Twisted Whopper",
        "category": "Whopper",
        "description": "It's sweet yet spicy, spicy yet sweet. Our Limited Time Twisted Chicken Whopper with crunchy chips, flame grilled chicken patty, cheese slice, tangy jalapenos, sweet spicy sauces, juicy tomatoes, crispy lettuce, xxl buns.",
        "cloudinaryImageId": "lqxc12b5hn4efzzfrzts",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30639321,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30656958,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672628,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 29508338,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "49152718": {
        "id": 49152718,
        "name": "Mutton Twisted Whopper",
        "category": "Whopper",
        "description": "It's sweet yet spicy, spicy yet sweet. Our Limited Time Twisted Mutton Whopper with crunchy chips, flame grilled mutton patty, cheese slice, tangy jalapenos, sweet spicy sauces, juicy tomatoes, crispy lettuce, xxl buns.",
        "cloudinaryImageId": "l5einjsjrzffrei0q2ub",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 30900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30639281,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30656916,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672565,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 29508328,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "49152789": {
        "id": 49152789,
        "name": "Veg Twisted Whopper Combo",
        "category": "Meal Combos",
        "description": "",
        "cloudinaryImageId": "x83zemdtltorewknrlmp",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 32700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 27902902,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657716,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673134,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "49152795": {
        "id": 49152795,
        "name": "Chicken Twisted Whopper Combo",
        "category": "Meal Combos",
        "description": "",
        "cloudinaryImageId": "b2iliuyw8mo22lpwwsbj",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 33700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 29508370,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657724,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673145,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "49152798": {
        "id": 49152798,
        "name": "Mutton Twisted Whopper Combo",
        "category": "Meal Combos",
        "description": "",
        "cloudinaryImageId": "mjxbabj01dd3u2zdiqtx",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 43700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 29508372,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657736,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673149,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "49191581": {
        "id": 49191581,
        "name": "Pepsi can 330 ml",
        "category": "Beverages",
        "description": "",
        "cloudinaryImageId": "oap6ssftyuzf6wgsmmnu",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "50059635": {
        "id": 50059635,
        "name": "Regular Fries",
        "category": "Sides",
        "description": "",
        "cloudinaryImageId": "cvd8m9tfxadrmhd54w52",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 7000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "50312885": {
        "id": 50312885,
        "name": "Cheesy Fries",
        "category": "Sides",
        "description": "Crispy french fries, loads of cheese, yum!",
        "cloudinaryImageId": "owfixesuqjm7uzxhzhrv",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "50312887": {
        "id": 50312887,
        "name": "Creamy Italian  Fries",
        "category": "Sides",
        "description": "The lip-smacking duo of creamy classic mayo and tangy tomato herb mayo make these fries very hard to resist!",
        "cloudinaryImageId": "b3hgwlbtnnuovkb4rvcv",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "50719929": {
        "id": 50719929,
        "name": "King Fries",
        "category": "Sides",
        "description": "",
        "cloudinaryImageId": "cvd8m9tfxadrmhd54w52",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "50719930": {
        "id": 50719930,
        "name": "Medium Fries",
        "category": "Sides",
        "description": "",
        "cloudinaryImageId": "cvd8m9tfxadrmhd54w52",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 8000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "51884398": {
        "id": 51884398,
        "name": "Peri Peri Fries",
        "category": "Sides",
        "description": "Crispy fries with peri peri spice. Hot indeed.",
        "cloudinaryImageId": "mgipyyoulmma7rjwofoj",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variantsV2": {
            "variant_groups": [
                {
                    "group_id": "6820107",
                    "name": "Customized",
                    "variations": [
                        {
                            "name": "Regular",
                            "price": 9000,
                            "default": 1,
                            "id": "22985046",
                            "inStock": 1,
                            "isVeg": 1,
                            "variant_group_id": "6820107",
                            "order": 100000
                        },
                        {
                            "name": "Medium",
                            "price": 10000,
                            "default": 0,
                            "id": "22985047",
                            "inStock": 1,
                            "isVeg": 1,
                            "variant_group_id": "6820107",
                            "order": 99999
                        },
                        {
                            "name": "King",
                            "price": 11000,
                            "default": 0,
                            "id": "22985048",
                            "inStock": 1,
                            "isVeg": 1,
                            "variant_group_id": "6820107",
                            "order": 99998
                        }
                    ]
                }
            ],
            "pricing_models": [
                {
                    "variations": [
                        {
                            "group_id": "6820107",
                            "variation_id": "22985046"
                        }
                    ],
                    "price": 9000,
                    "addon_combinations": []
                },
                {
                    "variations": [
                        {
                            "group_id": "6820107",
                            "variation_id": "22985047"
                        }
                    ],
                    "price": 10000,
                    "addon_combinations": []
                },
                {
                    "variations": [
                        {
                            "group_id": "6820107",
                            "variation_id": "22985048"
                        }
                    ],
                    "price": 11000,
                    "addon_combinations": []
                }
            ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "defaultPrice": 9000,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "53137148": {
        "id": 53137148,
        "name": "Mutton Whopper - Combo",
        "category": "Meal Combos",
        "description": "Make room for our fully loaded Whopper with a juicy, flame-grilled Mutton Patty, tangy pickles, fresh veggies, mayo and ketchup served in fresh 5\" buns. Comes with Fries + Exclusive Pepsi can.",
        "cloudinaryImageId": "czhhuqsa6b7wy2jbl87z",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 38700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 29508347,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657474,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30672990,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 29508350,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 21004190,
                        "name": "Chocolate Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004191,
                        "name": "Mango Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "56801101": {
        "id": 56801101,
        "name": "Chicken Wings Fried - Fifteen Pieces",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 52900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "56801102": {
        "id": 56801102,
        "name": "Chicken Wings Fried - Ten Pieces",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "hzvmaejj8mzq2aupkfp2",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 34900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "56801103": {
        "id": 56801103,
        "name": "Chicken Wings Fried - Four pieces",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "57240017": {
        "id": 57240017,
        "name": "Veg Whopper + Veg Whopper",
        "category": "Friends & Family Combo",
        "description": "",
        "cloudinaryImageId": "fipo5vwmd6yqun8lfqpy",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 29800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "58830523": {
        "id": 58830523,
        "name": "Chicken Fries (5 Pieces)",
        "category": "Sides",
        "description": "",
        "cloudinaryImageId": "tqhq4zd5sxa6qdc8yhwj",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 7900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "60206366": {
        "id": 60206366,
        "name": "Chicken Wings Grilled - Fifteen Pcs",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 52900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "60206371": {
        "id": 60206371,
        "name": "Chicken Wings - Five Pcs Fried + Ten Pcs Grilled",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 52900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "60206372": {
        "id": 60206372,
        "name": "Chicken WIngs - 5 Pcs Grilled + 10 Pcs Fries",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 52900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "60206378": {
        "id": 60206378,
        "name": "Chicken Wings Grilled - Ten Pcs",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 34900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "60206379": {
        "id": 60206379,
        "name": "Chicken Wings - five Pcs Fried + Five Pcs Grilled",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 34900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "60206381": {
        "id": 60206381,
        "name": "Chicken Wings Grilled - Two Pieces",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 7900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "60206382": {
        "id": 60206382,
        "name": "Chicken Wings Fried - Four Pcs",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "xkl6yq42u3xabampktne",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "62372259": {
        "id": 62372259,
        "name": "Lite Whopper Jr Chicken",
        "category": "Burgers & Wraps",
        "description": "Our signature Whopper with 7 layers between the buns in a convenient size. Flame Grilled chicken Patty, fresh onion, crispy lettuce, juicy tomatoes, tangy gherkins, creamy and smoky sauces.",
        "cloudinaryImageId": "imehwx5nybd2mvbdspag",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 12900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30639547,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657180,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672824,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30639561,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "62372260": {
        "id": 62372260,
        "name": "Lite Whopper Jr Veg",
        "category": "Burgers & Wraps",
        "description": "Our signature Whopper with 7 layers between the buns in a convenient size. Extra crunchy veg Patty, fresh onion, crispy lettuce, juicy tomatoes, tangy gherkins, creamy and smoky sauces.",
        "cloudinaryImageId": "y9paueit9iwqcdwv62kf",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 11900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30639567,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657202,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672841,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30639578,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "62372264": {
        "id": 62372264,
        "name": "BK Classic Veg Burger",
        "category": "Burgers & Wraps",
        "description": "Our tribute to classic american taste. BK veg patty, garden fresh crispy lettuce, juicy tomato & our signature sauce.",
        "cloudinaryImageId": "uvfehwtz2fceyrtfjsoc",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 8900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 24536694,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657346,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672925,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 23665416,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "62383532": {
        "id": 62383532,
        "name": "2 Lite Whopper Jr Veg Burgers +1KingFries +5pcs Veggie Strips+ 2Pepsi Can",
        "category": "Friends & Family Combo",
        "description": "2Lite Whopper Jr Veg  +1King Fries +5pcs Veggie Strips+ 2Pepsi Can",
        "cloudinaryImageId": "bvkxnwahoriichd275qn",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 49200,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "62383537": {
        "id": 62383537,
        "name": "Lite Whopper Jr Veg +Lite Whopper Jr Veg",
        "category": "Friends & Family Combo",
        "description": "",
        "cloudinaryImageId": "hpcdhhgbwzeoaxn98yvj",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 23800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "62383540": {
        "id": 62383540,
        "name": "BK Classic Veg + BK Classic Veg",
        "category": "Friends & Family Combo",
        "description": "",
        "cloudinaryImageId": "v99k9tdwffmnnwcfihpf",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 17800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "62383552": {
        "id": 62383552,
        "name": "Lite Whopper Jr Chicken Combo",
        "category": "Meal Combos",
        "description": "Our signature Whopper with 7 layers between the buns in a convenient size. Flame Grilled chicken Patty, fresh onion, crispy lettuce, juicy tomatoes, tangy gherkins, creamy and smoky sauces. Comes with Fries + Pepsi",
        "cloudinaryImageId": "sc1czg1hfpwx5h7a0x6u",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 25700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 29508362,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657584,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673052,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 29508365,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 21004190,
                        "name": "Chocolate Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004191,
                        "name": "Mango Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "62383556": {
        "id": 62383556,
        "name": "Lite Whopper Jr Veg Combo",
        "category": "Meal Combos",
        "description": "Our signature Whopper with 7 layers between the buns in a convenient size. Extra crunchy veg Patty, fresh onion, crispy lettuce, juicy tomatoes, tangy gherkins, creamy and smoky sauces. Comes with Fries + Pepsi",
        "cloudinaryImageId": "f4johpvsrvtsrv2x8frm",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30592991,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657608,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673066,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30592995,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 21004190,
                        "name": "Chocolate Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004191,
                        "name": "Mango Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "62383564": {
        "id": 62383564,
        "name": "BK Classic Veg Combo",
        "category": "Meal Combos",
        "description": "Our tribute to classic american taste. BK veg patty, garden fresh crispy lettuce, juicy tomato & our signature sauce. Comes with Fries + Pepsi",
        "cloudinaryImageId": "zsuzmh6jyiqebimkoqjo",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 27825616,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657684,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673109,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 27825622,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 21004190,
                        "name": "Chocolate Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004191,
                        "name": "Mango Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "62743703": {
        "id": 62743703,
        "name": "Cheese Melt down combo",
        "category": "Meal Combos",
        "description": "Cheese oozing spicy veg patty, veggies and creamy sauce. An indulgent treat from our King's Collection! Comes with Fries + Pepsi",
        "cloudinaryImageId": "szsxpbajsufqwezwxgvh",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 30700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 27825602,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657534,
                "group_name": "Make it a combo!",
                "choices": [
                    {
                        "id": 21004317,
                        "name": "Regular Fries + Chocolate Thick Shake",
                        "price": 4100,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004318,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004319,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 4000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004320,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 0,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21004321,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 1,
                "order": 99999
            },
            {
                "group_id": 30673023,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    },
                    {
                        "id": 21052909,
                        "name": "Regular Peri Peri Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99995,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 27825606,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 21004190,
                        "name": "Chocolate Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004191,
                        "name": "Mango Thick Shake",
                        "price": 13900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "62743707": {
        "id": 62743707,
        "name": "Cheese Melt Down Burger",
        "category": "New Kings Collection Burgers",
        "description": "Cheese oozing spicy veg patty, veggies and creamy sauce. An indulgent treat from our King's Collection!",
        "cloudinaryImageId": "ccibgiyjjyodbshn94fc",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 17900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 26004736,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657025,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672702,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 26004739,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "62969307": {
        "id": 62969307,
        "name": "Chicken Whopper + Chicken Whopper",
        "category": "Friends & Family Combo",
        "description": "",
        "cloudinaryImageId": "yn8qemarnba8st8woxrx",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 33800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "63308042": {
        "id": 63308042,
        "name": "Veg Whopper Double Patty",
        "category": "Whopper",
        "description": "Our signature Whopper with 7 layers between the buns. Extra crunchy veg Double Patty, fresh onion, crispy lettuce, juicy tomatoes, tangy gherkins, creamy and smoky sauces with xxl buns. It?s Not A Burger, it?s a Whopper.",
        "cloudinaryImageId": "fldievsdtqrjpirqopsr",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30592981,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30656976,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672650,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30592989,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "63308515": {
        "id": 63308515,
        "name": "Crispy Veg Double Patty + Crispy Veg Double Patty",
        "category": "Friends & Family Combo",
        "description": "",
        "cloudinaryImageId": "l1kgpsel7dfarr6eaarh",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "63308518": {
        "id": 63308518,
        "name": "Crispy Veg Double Patty Burger",
        "category": "Burgers & Wraps",
        "description": "",
        "cloudinaryImageId": "phm3t2g7v0lpczvtu6g7",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 7500,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30212762,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657250,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672873,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30212771,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "63857796": {
        "id": 63857796,
        "name": "Crispy Veg with Cheese Burger",
        "category": "Burgers & Wraps",
        "description": "Our best-selling burger with cheese slice, crispy veg patty, fresh onion and our signature sauce.",
        "cloudinaryImageId": "wr3o7gmsgcuf1x4zwcax",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 7500,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30657373,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30672937,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30212792,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "63857798": {
        "id": 63857798,
        "name": "Fiery Chicken with Cheese Burger",
        "category": "Burgers & Wraps",
        "description": "Too Hot to Handle. Our Spicy & Crunchy Chicken Patty topped with crispy lettuce, juicy tomatoes, Cheese Slice and creamy sauce with our unique corn dust buns. An indulgent treat from our King's Collection!",
        "cloudinaryImageId": "xnqsowkaqtdo6zcsjvdq",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30657394,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30672951,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 27796009,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "64776309": {
        "id": 64776309,
        "name": "1 Chicken Whopper + 1 Chocolate Thick Shake",
        "category": "Friends & Family Combo",
        "description": "1 Chicken Whopper + 1 Chocolate Thick Shake",
        "cloudinaryImageId": "lpbkwf9gjxjlddamqmcw",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 30800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "64776310": {
        "id": 64776310,
        "name": "1 Veg Whopper + 1 Chocolate Thick Shake",
        "category": "Friends & Family Combo",
        "description": "1 Veg Whopper + 1 Chocolate Thick Shake",
        "cloudinaryImageId": "ddtsthzckasbpadrpzxo",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 28800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "64776312": {
        "id": 64776312,
        "name": "1 Crispy Veg + 1 Chocolate Thick Shake",
        "category": "Friends & Family Combo",
        "description": "1 Crispy Veg + 1 Chocolate Thick Shake",
        "cloudinaryImageId": "vxxsejmswaok1m17t7mx",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19400,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "64776313": {
        "id": 64776313,
        "name": "2 Lite Whopper Jr Chicken + 1 King Fries+ 1 Chicken Fries",
        "category": "Friends & Family Combo",
        "description": "2 Lite Whopper Jr Chicken + 1 King Fries+ 1 Chicken Fries",
        "cloudinaryImageId": "iyahqu1imociols1kp2v",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 42700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "64776315": {
        "id": 64776315,
        "name": "2 Lite Whopper Jr Veg + 1 King Fries + 1 Veggie strips",
        "category": "Friends & Family Combo",
        "description": "2 Lite Whopper Jr Veg + 1 KingFries + 1 Veggie strips",
        "cloudinaryImageId": "ftrpon30vmbqfaduatil",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 37700,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "64776316": {
        "id": 64776316,
        "name": "2Crispy Veg Double Patty + 1King Fries + 1Veggie strips",
        "category": "Friends & Family Combo",
        "description": "2Crispy Veg Double Patty + 1King Fries + 1Veggie strips",
        "cloudinaryImageId": "pohyxhppuvjo5plgdvlz",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 28900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "64776317": {
        "id": 64776317,
        "name": "2 Chicken Whopper + 1 King Fries + 1 Chicken fries + 2 Pepsi Can",
        "category": "Friends & Family Combo",
        "description": "",
        "cloudinaryImageId": "elmh8a1ch6qyghkrjidm",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 62200,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "64776318": {
        "id": 64776318,
        "name": "2 Chicken Whopper + 2 Crispy Chicken + 5pc- Chicken Sticks + 1 King Fries + 4 Pepsi",
        "category": "Friends & Family Combo",
        "description": "2 Chicken Whopper + 2 Crispy Chicken + 5pc- Chicken Sticks + 1 King Fries + 4 Pepsi",
        "cloudinaryImageId": "ocpjolqnwv6fd0m0mwoi",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 89400,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "65224611": {
        "id": 65224611,
        "name": "2 BK Classic Veg + 2 Lite Whopper Jr Veg + 2 King Fries+ Veggie Strips + 4 Pepsi can",
        "category": "Friends & Family Combo",
        "description": "2 BK Classic Veg + 2 Lite Whopper Jr Veg + 2 King Fries+ Veggie Strips + 4 Pepsi can",
        "cloudinaryImageId": "bbkhnrap6d7vjredwiky",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 87400,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "66185792": {
        "id": 66185792,
        "name": "2 BK Classic Veg Burgers +1King Fries+ 5pcs Veggie strips+ 2Pepsi Can",
        "category": "Friends & Family Combo",
        "description": "2BK Classic veg +1King Fries+ 5pcs Veggie strips+ 2Pepsi Can",
        "cloudinaryImageId": "loqq5uhk62gsifvvs145",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 43200,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "66463446": {
        "id": 66463446,
        "name": "Chicken Tandoor grill Double Patty",
        "category": "Burgers & Wraps",
        "description": "",
        "cloudinaryImageId": "j4cmlcqrvslpquwphwjn",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30639710,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657420,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672962,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 27796012,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "66542399": {
        "id": 66542399,
        "name": "Boneless Wings Large",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "qefyb4gxjhh0i9iz6ozu",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "66542401": {
        "id": 66542401,
        "name": "Boneless Wings Regular",
        "category": "Chicken Wings",
        "description": "",
        "cloudinaryImageId": "qefyb4gxjhh0i9iz6ozu",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "ribbon": {
            "text": "Must Try",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
        },
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67048437": {
        "id": 67048437,
        "name": "Twisted Veg Whopper",
        "category": "Whopper",
        "description": "It's sweet yet spicy, spicy yet sweet. Our Limited Time Twisted Veg Whopper with crunchy chips, extra crunchy veg patty, cheese slice, tangy jalapenos, sweet spicy sauces, juicy tomatoes, crispy lettuce, xxl buns.",
        "cloudinaryImageId": "jorydjpcrmttpnk6bb0h",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30639348,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30656987,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672674,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 27795996,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "67125388": {
        "id": 67125388,
        "name": "2Tikki Twist+2Veg Makhani Burst + 2King Peri Peri Fries+1Veggie Strips+3Pepsi+1 Choco Shake",
        "category": "Friends & Family Combo",
        "description": "",
        "cloudinaryImageId": "paj7umd9jaxdvgrwuklz",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 78000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67837538": {
        "id": 67837538,
        "name": "Veg Crunchy Volcano",
        "category": "Burgers & Wraps",
        "description": "Be ready for a crunchy, saucy, explosion. A crunchy volcano shell filled with beans & veg mix, chef's secret sauce, fresh onion & crisp lettuce.",
        "cloudinaryImageId": "ljhtdtkkjocyjmczu994",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30657055,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30672723,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30408562,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67837540": {
        "id": 67837540,
        "name": "Tikki Twist Burger",
        "category": "Burgers & Wraps",
        "description": "Tikki bhi, Twist bhi! Our new signature burger with spicy sauce, juicy tomato, mix veg patty & a crunchy twist!",
        "cloudinaryImageId": "qzwtru5hg5ernybd2m6b",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30408567,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657073,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672735,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30408572,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67837541": {
        "id": 67837541,
        "name": "Veg Makhani Burst Burger",
        "category": "Burgers & Wraps",
        "description": "Enjoy rich makhani flavour with mix veg patty topped up with fresh onion.",
        "cloudinaryImageId": "rnljd0ea2zwgfbhkzwwh",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "addons": [
            {
                "group_id": 30408573,
                "group_name": "SAY CHEESE!",
                "choices": [
                    {
                        "id": 17621097,
                        "name": "Extra Cheese",
                        "price": 2000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 100000
            },
            {
                "group_id": 30657090,
                "group_name": "Make it a combo",
                "choices": [
                    {
                        "id": 21004186,
                        "name": "King Fries + Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21004187,
                        "name": "King Peri Peri Fries + Pepsi Can [330 Ml]",
                        "price": 16800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21004188,
                        "name": "Regular Fries + Pepsi Can [330 Ml]",
                        "price": 12800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21004189,
                        "name": "Regular Peri Peri fries + Black Pepsi Can [330 Ml]",
                        "price": 14800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99999
            },
            {
                "group_id": 30672748,
                "group_name": "Choose Your Fries",
                "choices": [
                    {
                        "id": 21009441,
                        "name": "King Fries",
                        "price": 9000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 21009442,
                        "name": "Cheesy Fries",
                        "price": 9900,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    },
                    {
                        "id": 21009443,
                        "name": "King Peri Peri Fries",
                        "price": 11000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99998,
                        "default": 0
                    },
                    {
                        "id": 21009444,
                        "name": "Medium Fries",
                        "price": 8000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99997,
                        "default": 0
                    },
                    {
                        "id": 21009445,
                        "name": "Regular Fries",
                        "price": 7000,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99996,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99998
            },
            {
                "group_id": 30408576,
                "group_name": "CHOOSE YOUR BEVERAGES",
                "choices": [
                    {
                        "id": 17621092,
                        "name": "Pepsi Can - 330 ML",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 100000,
                        "default": 0
                    },
                    {
                        "id": 18503407,
                        "name": "Pepsi Can Black - 330 Ml",
                        "price": 5800,
                        "inStock": 1,
                        "isVeg": 1,
                        "order": 99999,
                        "default": 0
                    }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1,
                "minAddons": 0,
                "order": 99997
            }
        ],
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67953442": {
        "id": 67953442,
        "name": "2 Crispy Veg Double Patty +  1 King Peri Peri Fries",
        "category": "Swiggy Exclusive Combo ( Flat Rs 50 OFF)",
        "description": "Save Rs 50 | 2 Crispy Veg Double Patty +  1 King Peri Peri Fries",
        "cloudinaryImageId": "lhdabuzeq6szvtmm9ys1",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67953443": {
        "id": 67953443,
        "name": "2 Lite Jr Whopper Veg + 1 King Fries",
        "category": "Swiggy Exclusive Combo ( Flat Rs 50 OFF)",
        "description": "Save Rs 50 | 2 Lite Jr Whopper Veg + 1 King Fries",
        "cloudinaryImageId": "xwxfsivl0w7ngyma0i5q",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 25800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67953445": {
        "id": 67953445,
        "name": "2 Lite Whopper Jr Chicken + 1 King Fries",
        "category": "Swiggy Exclusive Combo ( Flat Rs 50 OFF)",
        "description": "Save Rs 50 | 2 Lite Whopper Jr Chicken + 1 King Fries",
        "cloudinaryImageId": "vhr9uohv2ittkzsxypcy",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 27800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67953446": {
        "id": 67953446,
        "name": "2 Veg Whopper + 1 King Fries",
        "category": "Swiggy Exclusive Combo ( Flat Rs 50 OFF)",
        "description": "Save Rs 50 | 2 Veg Whopper + 1 King Fries",
        "cloudinaryImageId": "iywp68pgokp30lpke521",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 33800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67953447": {
        "id": 67953447,
        "name": "2 Cheese Meltdown + 1 King Fries",
        "category": "Swiggy Exclusive Combo ( Flat Rs 50 OFF)",
        "description": "Save Rs 50 | 2 Cheese Meltdown + 1 King Fries",
        "cloudinaryImageId": "vvxt0vts0z3kyqrumquw",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 37800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67953448": {
        "id": 67953448,
        "name": "2 Chicken Whopper + 1 King Peri Peri Fries",
        "category": "Swiggy Exclusive Combo ( Flat Rs 50 OFF)",
        "description": "Save Rs 50 | 2 Chicken Whopper + 1 King Peri Peri Fries",
        "cloudinaryImageId": "xonlynfzcxdwbgkbjp2o",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 39800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67953449": {
        "id": 67953449,
        "name": "2 Fiery Chicken + 1 King Fries",
        "category": "Swiggy Exclusive Combo ( Flat Rs 50 OFF)",
        "description": "Save Rs 50 | 2 Fiery Chicken + 1 King Fries",
        "cloudinaryImageId": "ifwdqrqszpjn1u9xp7ut",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 39800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "67971759": {
        "id": 67971759,
        "name": "The Doosra Combo- Veg",
        "category": "Cricket Mania Combos",
        "description": "2 Crispy Veg Double Patty+1 King Peri Peri Fries+ 1 Veggie Strips+ 2 Pepsi Can",
        "cloudinaryImageId": "mbcvdftlozaswqjrwele",
        "recommended": 1,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 42400,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "67971761": {
        "id": 67971761,
        "name": "Perfect Partnership Combo - Veg",
        "category": "Cricket Mania Combos",
        "description": "2Veg Whopper+1King Peri Peri Fries+1Veggie Strips +1Choc Shake +1Pepsi Can",
        "cloudinaryImageId": "w60lgntpqz2tyqkesx1o",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 65400,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "67971764": {
        "id": 67971764,
        "name": "Perfect Partnership Combo - Non Veg",
        "category": "Cricket Mania Combos",
        "description": "2Chicken Whopper +1King Peri Peri Fries+1Chicken Fries +1Choc Shake +1Pepsi Can",
        "cloudinaryImageId": "b4hachpgjajdsjyg98ma",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 72400,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "NONVEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "67971766": {
        "id": 67971766,
        "name": "Hit The Deck Combo- Veg",
        "category": "Cricket Mania Combos",
        "description": "1 Classic Veg + 2Crispy Veg Double + 2Reg Fries + 1 Veggie Strips + 2Pepsi",
        "cloudinaryImageId": "sbi2wji4w14dmcj7hnqf",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 53300,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "67971778": {
        "id": 67971778,
        "name": "Super Over Combo- Veg",
        "category": "Cricket Mania Combos",
        "description": "2 Classic Veg + 2Crispy Veg 2 Reg Fries + 2Veggie Strips + 3 Pepsi",
        "cloudinaryImageId": "dnbsd7s03jvwuuh57r01",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 67800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "67971785": {
        "id": 67971785,
        "name": "After Match Party Combo- Veg",
        "category": "Cricket Mania Combos",
        "description": "3 Classic Veg + 2Crispy Veg Double + 1Jr Whopper2 KingFries + 1 Peri Peri Fries + 2Veggie Strips + 4 Pepsi",
        "cloudinaryImageId": "gj0cqgce9jcfghtr1kcu",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 109300,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "68478889": {
        "id": 68478889,
        "name": "Cappuccino",
        "category": "Beverages",
        "description": "",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "68572334": {
        "id": 68572334,
        "name": "Veg Makhani Burst + Lite Whopper Jr Veg",
        "category": "Friends & Family Combo",
        "description": "",
        "cloudinaryImageId": "vrs4vlu7go8nr7q4mcwb",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "68572335": {
        "id": 68572335,
        "name": "Tikki Twist Burger + Lite Whopper jr veg",
        "category": "Friends & Family Combo",
        "description": "",
        "cloudinaryImageId": "dpv5exuk0xmasae5pns4",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15900,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "68572337": {
        "id": 68572337,
        "name": "Tikki Twist Burger + Crispy Veg Double Patty + 1 King Peri Peri fries + 2 Veggie Strips",
        "category": "Friends & Family Combo",
        "description": "",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 33300,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    },
    "68860429": {
        "id": 68860429,
        "name": "Paneer Overload Burger + Cheese Melt Down Burger",
        "category": "Friends & Family Combo",
        "description": "1 Paneer Overload + 1 Cheese Meltdown",
        "cloudinaryImageId": "jsl5kajz6wyi5n3bssto",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 34800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "68860430": {
        "id": 68860430,
        "name": "1 Paneer Overload Burger + 1 Chocolate Thick Shake",
        "category": "Friends & Family Combo",
        "description": "1 Paneer Overload Burger + 1 Chocolate Thick Shake",
        "cloudinaryImageId": "jadqnn0hygog7597xk63",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 31800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "offerTags": [
            {
                "title": "60% OFF",
                "subTitle": "USE DEAL60",
                "textColor": "#DB6742",
                "backGroundColor": "#FAE8E3"
            }
        ],
        "itemNudgeType": ""
    },
    "68860431": {
        "id": 68860431,
        "name": "1Paneer Overload Burger + 1 Lite Whopper Jr Veg + 1 King Fries",
        "category": "Friends & Family Combo",
        "description": "1 Paneer Overload Burger + 1 Lite Whopper Jr Veg + 1 King Fries",
        "cloudinaryImageId": "ocbtjmgcr9j4ohpwqfuy",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 37800,
        "variants_new": {
            "exclude_list": [],
            "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "216675",
        "showMC": 0,
        "attributes": {
            "portionSize": "",
            "vegClassifier": "VEG",
            "accompaniments": ""
        },
        "itemNudgeType": ""
    }
}

const restaurantsData: any = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "81897",
        "name": "Wow Chow",
        "uuid": "67beee6c-5441-4bd3-a4a3-74ef7714afb2",
        "city": "7",
        "area": "Rajarhat",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "droyaqaqxrhv37b5ehix",
        "cuisines": [
          "Chinese",
          "Tibetan",
          "Fast Food"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "36 MINS",
        "lastMileTravel": 2.302000045776367,
        "slugs": {
          "restaurant": "wow-chow-new-town-newtown",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "Shop 28, NKDA Market, Unitech Gate 1, New Town Action Area 3, New Town, Kolkata",
        "locality": "Unitech Gate 1",
        "parentId": 10505,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=3209733~p=1~eid=00000179-3936-fec1-171f-94ae0081016a",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.3 kms",
        "hasSurge": false,
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "301010",
        "name": "Kolkata@99",
        "uuid": "21bc5450-3d0f-4aa6-b2c9-ecf2802a8c25",
        "city": "7",
        "area": "Salt Lake",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ptx2rjik3s57qhc6wz9o",
        "cuisines": [
          "Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 42,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "42 MINS",
        "lastMileTravel": 3.197999954223633,
        "slugs": {
          "restaurant": "kolkata@99-salt-lake-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "Govinda Bhavan,2nd floor, near IAM",
        "locality": "Salt Lake",
        "parentId": 0,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.1 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "71744",
        "name": "Hungerpangs",
        "uuid": "f09bd708-83b9-47ee-a39e-56d5cf5101d8",
        "city": "7",
        "area": "Salt Lake",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "y8whmbvnyrflobjb5wrw",
        "cuisines": [
          "American",
          "Beverages",
          "Chinese",
          "Continental",
          "Desserts",
          "Fast Food",
          "Italian",
          "Snacks",
          "Tibetan",
          "Starts at Rs.79",
          "Ice Cream"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 62,
        "minDeliveryTime": 56,
        "maxDeliveryTime": 56,
        "slaString": "62 MINS",
        "lastMileTravel": 7.60699987411499,
        "slugs": {
          "restaurant": "hungerpangs-sector-1-salt-lake-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "26/P, Duttabari Road, Sector 1, Salt Lake, Kolkata",
        "locality": "Eastern Metropolis Bypass",
        "parentId": 3097,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "7.6 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "297602",
        "name": "PARATHE WALA",
        "uuid": "80806711-c2c6-4d13-8ec8-13f1a2e56fab",
        "city": "7",
        "area": "Sector V Salt Lake",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "skhwipdb8egfpfkvz82h",
        "cuisines": [
          "Fast Food",
          "North Indian"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 50,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "slaString": "50 MINS",
        "lastMileTravel": 3.634999990463257,
        "slugs": {
          "restaurant": "parathe-wala-koramangala-koramangala",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "N 15, G.Floor, SECTOR 5,SALT LAKE CITY , Kolkata 700091, WARD NO-23, BIDHANNAGAR-RAJARHAT MUNICIPAL CORPORATION, North Twenty Four Parganas, West Bengal ",
        "locality": "Koramangala",
        "parentId": 0,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=3207592~p=4~eid=00000179-3936-fec1-171f-94af00810409",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.6 kms",
        "hasSurge": false,
        "promoted": true,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "54319",
        "name": "Burger In Law",
        "uuid": "9b5c7221-3859-4457-b040-a1a2cf980990",
        "city": "7",
        "area": "Salt Lake",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "xcidaxubb5lkxnwbzq6q",
        "cuisines": [
          "American",
          "Fast Food",
          "Beverages"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 47,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "slaString": "47 MINS",
        "lastMileTravel": 3.197999954223633,
        "slugs": {
          "restaurant": "burger-in-law-sector-5-sector-v-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "NP 14, Govind bhawan, Sector 5 , kolkata -700102, Near Midland Park",
        "locality": "Near Midland Park",
        "parentId": 7451,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.1 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "5381",
        "name": "Santa Delivers",
        "uuid": "994ba767-0a8a-47a1-bd2e-98e56871b080",
        "city": "7",
        "area": "Sector V Salt Lake",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "cyxdmgk2mniw1tzoqqg8",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Kebabs",
          "Biryani"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 44,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "44 MINS",
        "lastMileTravel": 3.197999954223633,
        "slugs": {
          "restaurant": "santa-delivers-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "NP 14, Govind bhawan, Sector 5 , kolkata -700102, Near Midland Park",
        "locality": "Near Midland Park",
        "parentId": 3042,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.1 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "30880",
        "name": "Hatti Punjab Di",
        "uuid": "f04a839b-ac97-48c8-8af4-778af7d7a2b1",
        "city": "7",
        "area": "Sector V Salt Lake",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "ip8vbkd00oh9vbonzrwc",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Chinese",
          "Punjabi",
          "Thalis",
          "Desserts"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 48,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "slaString": "48 MINS",
        "lastMileTravel": 3.634999990463257,
        "slugs": {
          "restaurant": "hatti-punjab-di-koramangala-1st-block-koramangala",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "N 15, G.Floor, SECTOR 5,SALT LAKE CITY , Kolkata 700091, WARD NO-23, BIDHANNAGAR-RAJARHAT MUNICIPAL CORPORATION, North Twenty Four Parganas, West Bengal ",
        "locality": "Koramangala",
        "parentId": 0,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=3221116~p=7~eid=00000179-3936-fec1-171f-94b000810743",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.6 kms",
        "hasSurge": false,
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "320853",
        "name": "Pocket meal@99",
        "uuid": "9a44730e-d615-493f-a4f7-3fd47cfa1ea9",
        "city": "7",
        "area": "Salt Lake",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "mj7eypgvypx6oj6weiek",
        "cuisines": [
          "Thalis",
          "Combo",
          "Indian",
          "Chinese"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "38 MINS",
        "lastMileTravel": 3.197999954223633,
        "slugs": {
          "restaurant": "pocket-meal@99-salt-lake-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "NP-14, govinda bhavan, 2nd floor, salt lake sector -v, kolkata-700102",
        "locality": "salt lake sector -v",
        "parentId": 0,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.1 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "79670",
        "name": "Tea Junction",
        "uuid": "66f3c937-36c3-4bf9-b1e2-c4929ec850fc",
        "city": "7",
        "area": "Lake Town",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "sie8zg6bqtuskudploo1",
        "cuisines": [
          "Beverages",
          "Snacks",
          "Desserts"
        ],
        "tags": [],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 68,
        "minDeliveryTime": 62,
        "maxDeliveryTime": 62,
        "slaString": "68 MINS",
        "lastMileTravel": 8.838000297546387,
        "slugs": {
          "restaurant": "tea-junction-lake-town-lake-town",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "Jaya And Mini Cinema Hall, P- 225 A LAKE TOWN NORTH 24 PARAGANAS Lake Town",
        "locality": "Jaya And Mini Cinema Hall",
        "parentId": 4311,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "8.8 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.5",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "206747",
        "name": "Hangry Baba",
        "uuid": "8e10dd18-4a16-4a4a-8387-01a83d09cdfb",
        "city": "7",
        "area": "Rajarhat",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "satobxlnlz66nzdq4uwe",
        "cuisines": [
          "Chinese",
          "Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 42,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "42 MINS",
        "lastMileTravel": 2.302000045776367,
        "slugs": {
          "restaurant": "hangry-baba-salt-lake-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "Uniworld City, Newtown, Kolkata, West Bengal 700135",
        "locality": "Uniworld City",
        "parentId": 0,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=3211052~p=10~eid=00000179-3936-fec1-171f-94b100810a7b",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.3 kms",
        "hasSurge": false,
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "77722",
        "name": "The Biryani Inc.",
        "uuid": "4a28bf34-bbe2-41d0-80d8-caa63410a248",
        "city": "7",
        "area": "Sector V Salt Lake",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "dgzpjfhnsa4ishadnihq",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Kebabs",
          "North Indian"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 49,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "slaString": "49 MINS",
        "lastMileTravel": 3.240000009536743,
        "slugs": {
          "restaurant": "the-biryani-inc-sector-v-sector-v-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "NP-14, Sector 5, Salt Lake, Kolkata",
        "locality": "Near Midland Park",
        "parentId": 7461,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.2 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "318446",
        "name": "Chit Chaat",
        "uuid": "e35352f6-e93e-48b4-8b08-290da0c86db5",
        "city": "7",
        "area": "Rajarhat",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "onthaembyystaimmckhz",
        "cuisines": [
          "Fast Food"
        ],
        "tags": [],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 41,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "41 MINS",
        "lastMileTravel": 2.302000045776367,
        "slugs": {
          "restaurant": "chit-chaat-rajarhat-rajarhat",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "Shop No A - 32, NKDA MARKET opposite Unitech Gate - One, Newtown, Kolkata,North Twenty Four Parganas,700156",
        "locality": "Rajarhat",
        "parentId": 0,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            },
            {
              "meta": "40% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            },
            {
              "meta": "40% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            },
            {
              "meta": "40% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=3204498~p=13~eid=00000179-3936-fec1-171f-94b200810d53",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.3 kms",
        "hasSurge": false,
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "242966",
        "name": "La Pino'z Pizza",
        "uuid": "168f2243-3735-42e9-82b4-6c37fd24bf8a",
        "city": "7",
        "area": "Sector V Salt Lake",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "k0gyqmca6shldqm7msy8",
        "cuisines": [
          "Fast Food",
          "Italian",
          "Snacks"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 46,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "46 MINS",
        "lastMileTravel": 4.385000228881836,
        "slugs": {
          "restaurant": "la-pino'z-sector-v-salt-lake-sector-v-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "SHOP NO 3 GROUND FLOOR  NETGURU BUILDING  E2 4 BLOCK GP SECTOR V  SALT LAKE  BIDHANNAGAR  KOLKATA   700091",
        "locality": "Sector V Salt Lake",
        "parentId": 0,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "4.3 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "31199",
        "name": "Burger Home",
        "uuid": "a97ce6ff-42d5-435b-acd1-7a564cbe50ea",
        "city": "7",
        "area": "Rajarhat",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "lcfofbsnrik7aa6gp6fm",
        "cuisines": [
          "Fast Food"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "38 MINS",
        "lastMileTravel": 2.302000045776367,
        "slugs": {
          "restaurant": "burger-home-rajarhat-rajarhat",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "Shop A -13, NKDA Market, Opposite Unitech Gate no.1, Kolkata- 700156",
        "locality": "Opposite Unitech Gate No.1",
        "parentId": 1861,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.3 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.5",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "57642",
        "name": "Royal India Restaurant",
        "uuid": "d954ef9b-5e4e-4261-a7e3-9e4331a6d56e",
        "city": "7",
        "area": "Sector V Salt Lake",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "u7oxl82fop8szegm5u3f",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Tandoor ",
          "indian",
          "",
          "North Indian"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 40,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "40 MINS",
        "lastMileTravel": 2.7269999980926514,
        "slugs": {
          "restaurant": "royal-india-restaurant-sector-5-salt-lake-sector-v-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "Np-214 opposite technopolis, Near induslnd ATM Sector 5 salt lake",
        "locality": "Opposite Technopolis",
        "parentId": 0,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Free Delivery",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "SUPER"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    }
  ]


async function addItems(){
    const items: any = Object.values(data);
    const x  = await MenuService.addMenuItems(items.map(item => ({
        name: item.name,
        category: item.category,
        description: item.description,
        picture: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.cloudinaryImageId}`,
        price: item.price/100,
        restaurant_id: "216675"
    })))
    console.log(x)
}

const getLocation = async (address) => {
    const uri = encodeURI(address)
    const x = await new Promise((resolve, reject) => {
        request(`https://geocode.xyz/${uri}?json=1 `, (error, response, b) => {
          if (error) {
            return reject(error);
          }
          return resolve(b);
        });
      });
      console.log(x)
      return x
}

async function addRestaurant(){
    
    const addresses = await AddressService.addAddresses(restaurantsData.map((restaurant,index) => ({
        address1: restaurant.data.address,
        area: { 
            name: restaurant.data.area,
            pincode: `7001${Math.floor(Math.random()*70)}`,
            slug:  restaurant.data.area,
        },
        city: "Kolkata",
        landmark: restaurant.data.locality,
        location: {
            latitude: 22.580341,
            longitude: 88.437841
        }
        
    })))
    const x  = await RestaurantService.addRestaurants(restaurantsData.map((restaurant,index) => ({
        "id": restaurant.data.id,
        address_id: addresses[index].id, 
        "name": restaurant.data.name,
        "ratings": restaurant.data.avgRating,
        "totalRatings": +restaurant.data.totalRatings,
        "cuisines": restaurant.data.cuisines,
        "costForTwo": restaurant.data.costForTwo,
        "picture": `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.data.cloudinaryImageId}`,
    })))
    console.log(x)
}
addItems()
addRestaurant()