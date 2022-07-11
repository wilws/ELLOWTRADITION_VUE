import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';


export default {
    namespaced: true,
    state(){
        return{
            products:[
                
                {
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
                    "__v": 0
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
                    "__v": 0
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
                    "__v": 0
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
                    "__v": 0
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
                    "__v": 0
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
                    "__v": 0
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
                    "__v": 0
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
                    "__v": 0
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
                    "__v": 0
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
                    "__v": 0
                },
                {
                    // Product 11
                    "_id": "40",
                    "name": "Räuchermänner Maler",
                    "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                    "price": {
                        "$numberDecimal": "500"
                    },
                    "status": true,
                    "imageUrl1": "EWT14122701R04_01.jpg",
                    "imageUrl2": "EWT14122701R04_02.jpg",
                    "imageUrl3": "EWT14122701R04_03.jpg",
                    "imageUrl4": "EWT14122701R04_04.jpg",
                    "imageUrl5": "EWT14122701R04_05.jpg",
                    "createdAt": "2022-06-14T22:08:57.065Z",
                    "updatedAt": "2022-06-14T22:08:57.065Z",
                    "__v": 0
                },
                {
                    // Product 12
                    "_id": "41",
                    "name": "Räuchermänner Musikant mit Bass",
                    "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                    "price": {
                        "$numberDecimal": "500"
                    },
                    "status": true,
                    "imageUrl1": "DSCF8544.jpg",
                    "imageUrl2": "DSCF8540.jpg",
                    "imageUrl3": "DSCF8548.jpg",
                    "imageUrl4": "DSCF8560.jpg",
                    "imageUrl5": "DSCF8566.jpg",
                    "createdAt": "2022-06-14T22:08:57.065Z",
                    "updatedAt": "2022-06-14T22:08:57.065Z",
                    "__v": 0
                },
                {
                    // Product 13
                    "_id": "42",
                    "name": "Räuchermänner Musikant mit Saxophon",
                    "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                    "price": {
                        "$numberDecimal": "500"
                    },
                    "status": true,
                    "imageUrl1": "DSCF8528.jpg",
                    "imageUrl2": "DSCF8512.jpg",
                    "imageUrl3": "DSCF8517.jpg",
                    "imageUrl4": "DSCF8521.jpg",
                    "imageUrl5": "DSCF8507.jpg",
                    "createdAt": "2022-06-14T22:08:57.065Z",
                    "updatedAt": "2022-06-14T22:08:57.065Z",
                    "__v": 0
                },
                {
                    // Product 14
                    "_id": "48",
                    "name": "Räuchermänner Schnapsbrenner",
                    "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                    "price": {
                        "$numberDecimal": "500"
                    },
                    "status": true,
                    "imageUrl1": "DSCF9152.jpg",
                    "imageUrl2": "DSCF9138.jpg",
                    "imageUrl3": "DSCF9141.jpg",
                    "imageUrl4": "DSCF9147.jpg",
                    "imageUrl5": "DSCF9130.jpg",
                    "createdAt": "2022-06-14T22:08:57.065Z",
                    "updatedAt": "2022-06-14T22:08:57.065Z",
                    "__v": 0
                },
                {
                    // Product 15
                    "_id": "54",
                    "name": "Räuchermänner Zauberer",
                    "description":"idea about the story or the history behind it? This time it will be different - we will tell you the story. Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along with their historical significance.Let story to decorate your room",
                    "price": {
                        "$numberDecimal": "500"
                    },
                    "status": true,
                    "imageUrl1": "DSCF9234.jpg",
                    "imageUrl2": "DSCF9226.jpg",
                    "imageUrl3": "DSCF9225.jpg",
                    "imageUrl4": "DSCF9238.jpg",
                    "imageUrl5": "DSCF9249.jpg",
                    "createdAt": "2022-06-14T22:08:57.065Z",
                    "updatedAt": "2022-06-14T22:08:57.065Z",
                    "__v": 0
                },
            ]




            
        }
    },
    mutations,
    actions,
    getters
};