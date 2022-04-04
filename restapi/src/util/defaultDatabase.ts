import {ProductModel} from "../products/productModel";
import {ROLES, UserModel} from "../users/userModel";

export default async function create() {
    let juego1: string[] = ["deportes"];

    let juego2: string[] = ["deportes"];
    let juego3: string[] = ["acción", "aventuras", "estrategia"];
    let juego4: string[] = ["acción", "aventuras", "estrategia"];
    let juego5: string[] = ["estrategia", "acción"];
    let juego6: string[] = ["estrategia", "acción"];
    let juego8: string[] = ["estrategia", "acción"];
    let juego9: string[] = ["estrategia", "acción"];

    await ProductModel.deleteMany({});
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=17-q7wnweGzvXgl2NDx77sAnN2bvxpCDv ' , name: 'Fifa 20', price:'20', stock:'2',description:'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993', categories:juego1})
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1TgfqeGI_DClH9GRSrLS29cvAuvgpBxJ3 ', name: 'Fifa 19', price:'30', stock:'67', description:'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993',  categories:juego2 })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=14M-3I8AHvy2e5kju1uhSAPR_BuBvPGHs ', name: 'Elden ring', price:'80', stock:'4', description:' rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment',  categories:juego3  })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1ZJwE7fE-NoqkvCwrm0XgWdsP5P6t8xWw ', name: 'World of Warcraft', price:'29', stock:'2' , description:' rol multijugador masivo en línea desarrollado por Blizzard Entertainment.',  categories:juego4 })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=16i_-Op9_aurvgDR49AOBzhp85J-GBnjE ', name:'League of Leguends', price:'50', stock:'2', description:'Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games',  categories:juego5  })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1dJ56UG_vcqbsKz8WFQ18WAsW7oEfCGz6 ', name:'God of War', price:'30', stock:'8', description:' serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment',  categories:juego6  })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1RwYHUq0MTPV7RQCCkX1LKqpbyptVOrad ', name:'Battlefield 2042', price:'36', stock:'10', description:' videojuego de disparos y acción bélica en primera persona', categories:juego8  })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1aUIkNF0ZMJV0CAynt-TE_bFw-ySFcMXx ', name:'Dying Light', price:'6', stock:'3', description:' serie de videojuegos de acción', categories:juego9  })


    await UserModel.deleteMany({});
    await UserModel.create({password:'123', email:'a@gmail.com', role:ROLES.NORMAL})
    await UserModel.create({password:'123', email:'b@gmail.com', role:ROLES.ADMIN})
}

