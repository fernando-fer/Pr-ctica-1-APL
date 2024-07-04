/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');






const DOCUMENT_ID = "bienvenida"; // Verifica que este ID coincida con el documento APL en la consola de desarrolladores

const datasource = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://www.expedia.mx/stories/wp-content/uploads/2021/11/viajar-en-2020-cdmx.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Bienvenidos a ciudad de mexico"
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
            "hintText": "Una de las ciudades más grandes del mundo, "
        }
    }
};

const DOCUMENT_ID2 = "Turistico";

const datasource2 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://traveler.marriott.com/es/wp-content/uploads/sites/2/2018/05/GI-638921937-Mexico-City-Zocalo-1920x1080-1.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Algunos lugares turísticos en la ciudad son el Ángel de la Independencia, el Museo Nacional de Antropología y el Palacio de Bellas Artes. También puedes visitar el Templo Mayor y Xochimilco para disfrutar de un paseo en trajinera.'"
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
            "hintText": ""
        }
    }
};

const DOCUMENT_ID3 = "comidaAPL";

const datasource3 = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://losviajesdeclaudia.com/wp-content/uploads/2023/04/restaurantes-romanticos-en-ciudad-de-mexico-huset.jpg",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "Platillos tipicos de la ciudad",
            "listItems": [
                {
                    "primaryText": "Tacos al pastor",
                    "secondaryText": "con piña y cilantrito",
                    "thumbnailImage": "https://mvsnoticias.com/u/fotografias/m/2023/3/30/f960x540-530232_604307_5050.jpg"
                },
                {
                    "primaryText": "Quesadillas ",
                    "secondaryText": "con queso",
                    "thumbnailImage": "https://elpoderdelconsumidor.org/wp-content/uploads/2022/02/quesadillas-d-maiz-con-queso-y-flor-d-calabaza-b.jpg"
                },
                {
                    "primaryText": "pozole",
                    "secondaryText": "delicioso",
                    "thumbnailImage": "https://cdn.nutritionstudies.org/wp-content/uploads/2023/10/red-posole-with-mushroom-1024x683.jpg"
                }
            ]
        }
    }
};


const DOCUMENT_ID4 = "trajeAPL";

const datasource4 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://i0.wp.com/ruraltv.com.mx/wp-content/uploads/2015/06/Charro4.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "El traje típico de la Ciudad de México se puede considerar el traje de charro, que se compone de pantalón ajustado, chaqueta corta, botas, y un sombrero de ala ancha. Es conocido por sus detalles ornamentales y es un símbolo de la cultura mexicana.'"
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
            "hintText": ""
        }
    }
};



const DOCUMENT_ID5 = "personajesAPL";

const datasource5 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://foodandpleasure.com/wp-content/uploads/2022/07/museos-mexico-bellasartes-wiki.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Algunos personajes famosos de la Ciudad de México incluyen a Frida Kahlo, Diego Rivera, y Octavio Paz. Estos individuos han dejado una marca importante en la cultura y las artes de México."
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
            "hintText": ""
        }
    }
};



const DOCUMENT_ID6 = "musicaAPL";

const datasource6 = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://labarbada.store/videos/nando.m4a"
            ],
            "backgroundImage": "https://i.pinimg.com/736x/a8/ec/62/a8ec62a97985f847accfaefbe40e9991.jpg",
            "coverImageSource": "https://cdn1.matadornetwork.com/blogs/2/2016/12/shutterstock_753265876.jpg",
            "headerTitle": "musica para escuchar",
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "Mariachi Vargas de Tecalitlán ",
            "secondaryText": "musica tipica",
            "sliderType": "determinate"
        }
    }
};



const DOCUMENT_ID7 = "Descripcionciudad";

const datasource7 = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://www.cronica.com.mx/uploads/2021/09/21/615245b8e42e4.jpeg",
            "displayFullscreen": false,
            "headerTitle": "Video de bienvenida de la ciudad de mexico",
            "headerSubtitle": "",
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "videoControlType": "skip",
            "videoSources": [
                "https://labarbada.store/videos/CiudadMexico.mp4"
            ],
            "sliderType": "determinate"
        }
    }
};


const DOCUMENT_ID8 = "escuelaBienvenida";

const datasource8 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://lajornadahidalgo.com/wp-content/uploads/2024/06/Escuela-Secundaria-General-Heroe-Antonio-Reyes.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Bienvenido ala escuela esghar"
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
            "hintText": ""
        }
    }
};





const DOCUMENT_ID10 = "ayudaAPL";

const datasource10 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://media.timeout.com/images/103022108/750/422/image.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Nesesitas ayuda para conocer la ciudad"
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
            "hintText": "Fundación: 13 de marzo de 1325 Superficie: 1.485 km² Elevación: 2.240 m"
        }
    }
};



const DOCUMENT_ID11 = "errorAPL";

const datasource11 = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://humanidades.com/wp-content/uploads/2023/08/ciudad-de-mexico.jpg",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "Error en la aplicacion web",
            "listItems": [
                {
                    "primaryText": "error de acceso",
                    "secondaryText": "problemas con las credenciales de usuario",
                    "thumbnailImage": "https://www.infobae.com/new-resizer/8eotg9n7RJj0vu8xHWrtPtcQq-Y=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/5L5TD74Z7RH7NC5SE7FZ3G6UYU.jpg"
                },
                {
                    "primaryText": "error de la aplicacion",
                    "secondaryText": "falta de la informacion",
                    "thumbnailImage": "https://fotografias.lasexta.com/clipping/cmsimages01/2023/02/03/B03AD43C-1839-49C4-B771-68A7C9CCA118/conexion-movil-funciona-bien-principales-telecos-estan-teniendo-problemas-sus-redes_98.jpg?crop=1300,731,x0,y9&width=1900&height=1069&optimize=high&format=webply"
                },
                {
                    "primaryText": "error para consultar la informacion",
                    "secondaryText": "problemas  de la informacion",
                    "thumbnailImage": "https://www.lavanguardia.com/files/image_948_465/uploads/2018/10/24/5fa4453959d90.jpeg"
                }
            ]
        }
    }
};



const DOCUMENT_ID12 = "cancelarAPL";

const datasource12 = {
    "detailImageRightData": {
        "type": "object",
        "objectId": "detailImageRightSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://digbza2f4g9qo.cloudfront.net/-/media/IndyCar/News/Standard/2017/11/11-30-Mexico-City-Statement.jpg?vs=1&d=20171130T220957Z",
                    "size": "large"
                }
            ]
        },
        "title": "",
        "subtitle": "",
        "image": {
            "contentDescription": "",
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "",
                    "size": "large"
                }
            ]
        },
        "textContent": {
            "primaryText": {
                "type": "PlainText",
                "text": "Cancelar "
            },
            "rating": {
                "text": ""
            },
            "locationText": {
                "type": "PlainText",
                "text": "quieres cancelar la opcion"
            },
            "secondaryText": {
                "type": "PlainText",
                "text": "Operación cancelada. Si necesitas ayuda con algo más, solo pídemelo."
            }
        },
        "buttons": [
            {
                "text": "Borrar"
            },
            {
                "text": "Cancelar"
            }
        ],
        "logoUrl": ""
    }
};



const DOCUMENT_ID13 = "salirAPL";

const datasource13 = {
    "detailImageRightData": {
        "type": "object",
        "objectId": "detailImageRightSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://cdn1.matadornetwork.com/blogs/2/2017/10/Real-de-Catorce-Mexico.jpg",
                    "size": "large"
                }
            ]
        },
        "title": "",
        "subtitle": "",
        "image": {
            "contentDescription": "",
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://significado.com/wp-content/uploads/Salir.jpg",
                    "size": "large"
                }
            ]
        },
        "textContent": {
            "primaryText": {
                "type": "PlainText",
                "text": "SALIR"
            },
            "rating": {
                "text": ""
            },
            "locationText": {
                "type": "PlainText",
                "text": "Quieres salir de la aplicacion solo da clic en salir o si quieres cerra sesion "
            },
            "secondaryText": {
                "type": "PlainText",
                "text": ""
            }
        },
        "buttons": [
            {
                "text": "Salir"
            },
            {
                "text": "Cerrar sesion"
            }
        ],
        "logoUrl": ""
    }
};





const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido, puedes preguntar por lugares bonitos en la Ciudad de México o por lugares turísticos en la ciudad. ¿Qué te gustaría saber?';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const IntenmexicoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intenmexico';
    },
    handle(handlerInput) {
        const speakOutput = 'La Ciudad de México es una metrópolis vibrante con una rica historia y cultura. Algunos lugares bonitos para visitar son el Bosque de Chapultepec, el Centro Histórico con el Zócalo y la Catedral, y el Museo Frida Kahlo en Coyoacán. También puedes disfrutar de la arquitectura moderna en Paseo de la Reforma y la vida nocturna en la colonia Roma y Condesa.';
         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID7, datasource7);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const IntenturisticoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intenturistico';
    },
    handle(handlerInput) {
        const speakOutput = 'Algunos lugares turísticos en la ciudad son el Ángel de la Independencia, el Museo Nacional de Antropología y el Palacio de Bellas Artes. También puedes visitar el Templo Mayor y Xochimilco para disfrutar de un paseo en trajinera.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID2, datasource2);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const IntenttrajeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intenttraje';
    },
    handle(handlerInput) {
        const speakOutput = 'El traje típico de la Ciudad de México se puede considerar el traje de charro, que se compone de pantalón ajustado, chaqueta corta, botas, y un sombrero de ala ancha.';
         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID4, datasource4);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const IntentcomidaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentcomida';
    },
    handle(handlerInput) {
        const speakOutput = 'La comida típica de la Ciudad de México incluye platillos deliciosos como los tacos al pastor, las quesadillas, y el pozole.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID3, datasource3);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const IntentmusicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentmusica';
    },
    handle(handlerInput) {
        const speakOutput = 'La Ciudad de México es conocida por su rica tradición musical, que incluye géneros como el mariachi, el bolero y la música de banda.';
          if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID6, datasource6);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const IntentpersonajesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentpersonajes';
    },
    handle(handlerInput) {
        const speakOutput = 'Algunos personajes famosos de la Ciudad de México incluyen a Frida Kahlo, Diego Rivera, y Octavio Paz. Estos individuos han dejado una marca importante en la cultura y las artes de México.';
         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID5, datasource5);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};


const IntentescuelaBienvenidaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentBienvenida';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola bienvenido ala escuela secundaria general Antonio Reyes esghar.';
         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID8, datasource8);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};


const IntentescuelaAyudaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentayuda';
    },
    handle(handlerInput) {
        const speakOutput = 'Para conocer la Ciudad de México, te recomiendo visitar algunos de sus lugares más emblemáticos. Comienza con el Zócalo, la plaza principal, donde puedes ver la Catedral Metropolitana y el Palacio Nacional. No te pierdas el Museo Frida Kahlo en Coyoacán y el Museo de Antropología en Chapultepec. Pasea por la avenida Paseo de la Reforma y disfruta del Bosque de Chapultepec, un gran parque urbano. También puedes explorar los mercados locales como el Mercado de San Juan para probar comida típica. Si necesitas más ayuda, solo pregúntame.';

         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID10, datasource10);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};



const IntentescuelaErrorIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentError';
    },
    handle(handlerInput) {
        const speakOutput = 'Tienes error en la aplicacion consulta con nuestro equipo de soporte';

         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID11, datasource11);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};



const IntentescuelaCancelarIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentcancelar';
    },
    handle(handlerInput) {
        const speakOutput = 'Operación cancelada. Si necesitas ayuda con algo más, solo pídemelo.';

         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID12, datasource12);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};


const IntentescuelaSalirIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentsalir';
    },
    handle(handlerInput) {
        const speakOutput = 'Gracias por usar la aplicación da la opcion salir o cierra sesion para salir completamente de la aplicacion. ¡Hasta pronto!.';

         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID13, datasource13);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};









const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes preguntar por lugares bonitos en la Ciudad de México o por lugares turísticos en la ciudad. ¿Cómo puedo ayudarte?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no sé sobre eso. Por favor intenta otra vez.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        IntenmexicoIntentHandler,
        IntenturisticoIntentHandler,
        IntentcomidaIntentHandler,
        IntenttrajeIntentHandler,
        IntentpersonajesIntentHandler,
        IntentmusicaIntentHandler,
        IntentescuelaBienvenidaIntentHandler,
        IntentescuelaAyudaIntentHandler,
        IntentescuelaErrorIntentHandler,
        IntentescuelaCancelarIntentHandler,
        IntentescuelaSalirIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler // Make sure this is the last intent handler added
    )
    .addErrorHandlers(
        ErrorHandler
    )
    .lambda();
