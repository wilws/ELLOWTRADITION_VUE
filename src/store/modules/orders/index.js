import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";


export default {
    namespaced: true,
    state(){
        return{
            invoices:[
                {
                    _id:'1',
                    products:[{
                        // Product 1
                        "_id": "45",
                        "name": "Räuchermänner Nachwachter",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "DSCF9124.jpg",
                        "imageUrl2": "DSCF9119.jpg",
                        "imageUrl3": "DSCF9112.jpg",
                        "imageUrl4": "DSCF9106.jpg",
                        "imageUrl5": "DSCF9102.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
    
                    {
                        // Product 2
                        "_id": "EWT14122701R14",
                        "name": "Räuchermänner Arzt",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "EWT14122701R14_03.jpg",
                        "imageUrl2": "EWT14122701R14_02.jpg",
                        "imageUrl3": "EWT14122701R14_01.jpg",
                        "imageUrl4": "EWT14122701R14_04.jpg",
                        "imageUrl5": "EWT14122701R14_05.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
    
                    {
                        // Product 3
                        "_id": "32",
                        "name": "Räuchermänner Bankier",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "DSCF8839.jpg",
                        "imageUrl2": "DSCF8840.jpg",
                        "imageUrl3": "DSCF8846.jpg",
                        "imageUrl4": "DSCF8849.jpg",
                        "imageUrl5": "DSCF8857.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
    
                    {
                        // Product 4
                        "_id": "33",
                        "name": "_äuchermänner Bauer mit Tauben",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "DSCF9186.jpg",
                        "imageUrl2": "DSCF9172.jpg",
                        "imageUrl3": "DSCF9178.jpg",
                        "imageUrl4": "DSCF9163.jpg",
                        "imageUrl5": "DSCF9213.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
    
                    {
                        // Product 5
                        "_id": "34",
                        "name": "Räuchermänner Der wilde Jäger Friedrich Geschichte aus dem struwwelpeter",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "EWT14122701R02_01.jpg",
                        "imageUrl2": "EWT14122701R02_02.jpg",
                        "imageUrl3": "EWT14122701R02_03.jpg",
                        "imageUrl4": "EWT14122701R02_04.jpg",
                        "imageUrl5": "EWT14122701R02_05.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
    
                    {
                        // Product 6
                        "_id": "EWT14122701R15",
                        "name": "Räuchermänner Drehorgelspieler mit musikwerk",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "EWT14122701R15_01.jpg",
                        "imageUrl2": "EWT14122701R15_02.jpg",
                        "imageUrl3": "EWT14122701R15_03.jpg",
                        "imageUrl4": "EWT14122701R15_04.jpg",
                        "imageUrl5": "EWT14122701R15_05.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
    
                    {
                        // Product 7
                        "_id": "36",
                        "name": "Räuchermänner Feuerwehrmann",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "DSCF8938.jpg",
                        "imageUrl2": "DSCF8928.jpg",
                        "imageUrl3": "DSCF8943.jpg",
                        "imageUrl4": "DSCF8951.jpg",
                        "imageUrl5": "DSCF8959.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
                    {
                        // Product 8
                        "_id": "37",
                        "name": "Räuchermänner Fotograft, natur",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "DSCF9059.jpg",
                        "imageUrl2": "DSCF9054.jpg",
                        "imageUrl3": "DSCF9064.jpg",
                        "imageUrl4": "DSCF9071.jpg",
                        "imageUrl5": "DSCF9089.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
                    {
                        // Product 9
                        "_id": "38",
                        "name": "Räuchermänner Friseur",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "DSCF8876.jpg",
                        "imageUrl2": "DSCF8871.jpg",
                        "imageUrl3": "DSCF8891.jpg",
                        "imageUrl4": "DSCF8903.jpg",
                        "imageUrl5": "DSCF8921.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
                    {
                        // Product 10
                        "_id": "39",
                        "name": "Räuchermänner Lehrer mit Tafel",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "EWT14122701R19_01.jpg",
                        "imageUrl2": "EWT14122701R19_02.jpg",
                        "imageUrl3": "EWT14122701R19_03.jpg",
                        "imageUrl4": "EWT14122701R19_04.jpg",
                        "imageUrl5": "EWT14122701R19_05.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },],
                    total: 500,
                    createdAt:"2022-06-14T22:08:57.065+00:00",
                },
                {
                    _id:'2',
                    products:[{
                        // Product 1
                        "_id": "45",
                        "name": "Räuchermänner Nachwachter",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "DSCF9124.jpg",
                        "imageUrl2": "DSCF9119.jpg",
                        "imageUrl3": "DSCF9112.jpg",
                        "imageUrl4": "DSCF9106.jpg",
                        "imageUrl5": "DSCF9102.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
    
                    {
                        // Product 2
                        "_id": "EWT14122701R14",
                        "name": "Räuchermänner Arzt",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "EWT14122701R14_03.jpg",
                        "imageUrl2": "EWT14122701R14_02.jpg",
                        "imageUrl3": "EWT14122701R14_01.jpg",
                        "imageUrl4": "EWT14122701R14_04.jpg",
                        "imageUrl5": "EWT14122701R14_05.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
    
                    {
                        // Product 3
                        "_id": "32",
                        "name": "Räuchermänner Bankier",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "DSCF8839.jpg",
                        "imageUrl2": "DSCF8840.jpg",
                        "imageUrl3": "DSCF8846.jpg",
                        "imageUrl4": "DSCF8849.jpg",
                        "imageUrl5": "DSCF8857.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
                    ],
                    total: 500,
                    createdAt:"2022-06-14T22:08:57.065+00:00",
                },
                {
                    _id:'3',
                    products:[{
                        // Product 1
                        "_id": "45",
                        "name": "Räuchermänner Nachwachter",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "DSCF9124.jpg",
                        "imageUrl2": "DSCF9119.jpg",
                        "imageUrl3": "DSCF9112.jpg",
                        "imageUrl4": "DSCF9106.jpg",
                        "imageUrl5": "DSCF9102.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
    
                    {
                        // Product 2
                        "_id": "EWT14122701R14",
                        "name": "Räuchermänner Arzt",
                        "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                        "price": {
                            "$numberDecimal": "500"
                        },
                        "status": true,
                        "imageUrl1": "EWT14122701R14_03.jpg",
                        "imageUrl2": "EWT14122701R14_02.jpg",
                        "imageUrl3": "EWT14122701R14_01.jpg",
                        "imageUrl4": "EWT14122701R14_04.jpg",
                        "imageUrl5": "EWT14122701R14_05.jpg",
                        "createdAt": "2022-06-14T22:08:57.065Z",
                        "updatedAt": "2022-06-14T22:08:57.065Z",
                        "__v": 0,
                        "quantity":4,
                        "subtotal":2000
                    },
                    ],
                    total: 500,
                    createdAt:"2022-06-14T22:08:57.065+00:00",
                },
                {
                    _id:'4',
                    products:[
                        {
                            // Product 2
                            "_id": "EWT14122701R14",
                            "name": "Räuchermänner Arzt",
                            "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                            "price": {
                                "$numberDecimal": "500"
                            },
                            "status": true,
                            "imageUrl1": "EWT14122701R14_03.jpg",
                            "imageUrl2": "EWT14122701R14_02.jpg",
                            "imageUrl3": "EWT14122701R14_01.jpg",
                            "imageUrl4": "EWT14122701R14_04.jpg",
                            "imageUrl5": "EWT14122701R14_05.jpg",
                            "createdAt": "2022-06-14T22:08:57.065Z",
                            "updatedAt": "2022-06-14T22:08:57.065Z",
                            "__v": 0,
                            "quantity":4,
                            "subtotal":2000
                        },
                    ],
                    total: 500,
                    createdAt:"2022-06-14T22:08:57.065+00:00",
                },
            ],
            isSet:false,
        }
    },
    actions,
    getters,
    mutations
}