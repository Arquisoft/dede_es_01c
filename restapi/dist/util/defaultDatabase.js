"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = require("../products/productModel");
const userModel_1 = require("../users/userModel");
function create() {
    return __awaiter(this, void 0, void 0, function* () {
        let juego1 = ["deportes"];
        let juego2 = ["deportes"];
        let juego3 = ["acción", "aventuras", "estrategia"];
        let juego4 = ["acción", "aventuras", "estrategia"];
        let juego5 = ["estrategia", "acción"];
        let juego6 = ["estrategia", "acción"];
        let juego8 = ["estrategia", "acción"];
        let juego9 = ["estrategia", "acción"];
        let juego10 = ["estrategia", "aventuras"];
        let juego11 = ["accion", "aventuras"];
        let juego12 = ["deportes"];
        let juego13 = ["acción", "aventuras"];
        let juego14 = ["deportes"];
        let juego15 = ["estrategia", "aventuras"];
        let juego16 = ["estrategia", "aventuras", "accion"];
        let juego17 = ["disparos"];
        let juego18 = ["simulacion"];
        let juego19 = ["simulacion"];
        let juego20 = ["deportes"];

        yield productModel_1.ProductModel.deleteMany({});
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=15YbSwC0XyAWKpxQANq3YbIZBUm5YY--5', name: 'Fifa 20', price: '20', stock: '2', description: 'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993', categories: juego1 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1vLpKO1Vd9HgJ0j1NQsrvyidlxMHZPRA-', name: 'Fifa 19', price: '30', stock: '67', description: 'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993', categories: juego2 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1uPsQkxuSttWE4-_uHvOhkanlZLF-RLMb', name: 'Elden ring', price: '80', stock: '4', description: ' rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment', categories: juego3 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=10wG_nWYtlVgLnQFEIybwHD8l3ycTcqIk', name: 'World of Warcraft', price: '29', stock: '2', description: ' rol multijugador masivo en línea desarrollado por Blizzard Entertainment.', categories: juego4 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R', name: 'League of Leguends', price: '50', stock: '2', description: 'Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games', categories: juego5 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1IZA82snexAD6qpokj5jzYiML4WprAHys', name: 'God of War', price: '30', stock: '8', description: ' serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment', categories: juego6 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1X68RR3eLIPUna7H9H2OEmjstE_pdPwmA', name: 'Battlefield 2042', price: '36', stock: '10', description: ' videojuego de disparos y acción bélica en primera persona', categories: juego8 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=17T2Ikaoq47h4Qj-SsfRQoqlnBjRJOQFJ', name: 'Dying Light', price: '6', stock: '3', description: ' serie de videojuegos de acción', categories: juego9 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=13HyCiWP3UfPYtulmBz2GOYVLOY3tLmbG', name: 'Age of Empires', price: '8', stock: '99', description: 'es un juego de estrategia en tiempo real desarrollado por Relic Entertainment', categories: juego10 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1_8q98NtevJs9KebqNrpD0-aBrph3f89U', name: 'Assassins Creed: Valhalla', price: '30', stock: '99', description: 'es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft', categories: juego11 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1ooWq8FWS3Qy3nHSZ28K9Y2Rzd-hfrhwu', name: 'NBA 2K22', price: '65', stock: '99', description: 'NBA 2K22 es un videojuego de simulación de baloncesto de 2021 desarrollado por Visual Concepts', categories: juego12 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1ehFIESOG396RdbgNv2zMzJoyqycSlULr', name: 'Batman: Arkham Origins', price: '70', stock: '99', description: 'es un videojuego que fue desarrollado por Warner Bros. Games Montreal y lanzado por Warner Bros', categories: juego13 })
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1Hy1_41wnW-qfcc2GPLWKxYAws4pd_ugF', name: 'WWE 2K22', price: '65', stock: '99', description: 'WWE 2K22 es un videojuego de lucha libre profesional que fue desarrollado por Visual Concepts y publicado por 2K Sports', categories: juego14 })
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1gGNLHFkDatDTMfy5Tj2h8Y-fWfLuIu-4', name: 'Civilization VI', price: '66', stock: '99', description: 'es un videojuego de estrategia por turnos perteneciente a la serie Civilization', categories: juego15 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1CZooRBTJ9vebM4croj-yyje5luXA7Dzi', name: 'Dark Souls II', price: '70', stock: '99', description: ' es un videojuego de rol de acción que tiene lugar en un mundo abierto, desarrollado para Microsoft Windows', categories: juego16 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1dfUs7Mm1Byhkqs_FTwKAdnVmcPta3Bv4', name: 'Far Cry 6', price: '80', stock: '99', description: ' es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft', categories: juego17 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1PomJe8ghIWTIyDfW4xx0Gsijif64DGBG', name: 'Farming Simulator', price: '69', stock: '99', description: ' farming Simulator ofrece más profundidad y el mayor grado de libertad para el jugador en la historia de la serie', categories: juego18 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1CbCduxx05tD__Fh4UDSLnU0PNpr2fTYh', name: 'Microsoft Flight Simulator', price: '80', stock: '99', description: ' microsoft Flight Simulator es una serie de simuladores de vuelo creada por SubLOGIC en 1979 ', categories: juego19 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1HF1P6M7RJRdndh9fVT-IjIINIxuLGOUD', name: 'Forza Horizon 5', price: '60', stock: '99', description: ' es un videojuego de carreras multijugador en línea desarrollado por Playground Games  ', categories: juego20 });


        yield userModel_1.UserModel.deleteMany({});
        yield userModel_1.UserModel.create({ password: '123', email: 'a@gmail.com', role: userModel_1.ROLES.NORMAL });
        yield userModel_1.UserModel.create({ password: '123', email: 'b@gmail.com', role: userModel_1.ROLES.ADMIN });
    });
}
exports.default = create;
//# sourceMappingURL=defaultDatabase.js.map