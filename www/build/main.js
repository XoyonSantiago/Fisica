webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaidaLibreAlturaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// importamos para que aparesca el cargar

// tambien importe para el alerta si esta vacio el campo de tiempo

/**
 * Generated class for the CaidaLibreAlturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaidaLibreAlturaPage = /** @class */ (function () {
    function CaidaLibreAlturaPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    CaidaLibreAlturaPage.prototype.CalculoVFinal = function () {
        var _this = this;
        var ALtura;
        var velInicial = parseFloat(this.VelocidadInicial); // los parseamos para poder hacer poeraciones
        var tiemp = parseFloat(this.tiempo);
        var gravedad = 9.81;
        // para las restrincciones
        var paso = false;
        if (this.tiempo == null) {
            var alertaerrortiempo = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'Obligatorio llenar el campo TIEMPO.',
                buttons: ['Aceptar'],
                cssClass: 'estiloBotonesEmergentes'
            });
            alertaerrortiempo.present();
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.tiempo = '';
            this.VelocidadInicial = null;
            this.tiempo = null;
            paso = false;
        }
        else if (tiemp < 0) {
            // si el tiempo ingresado es negativo
            var alertaerrortiempo = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'El campo tiempo debe contener valor positivo.',
                buttons: ['Aceptar']
            });
            alertaerrortiempo.present();
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.tiempo = '';
            this.VelocidadInicial = null;
            this.tiempo = null;
            paso = false;
        }
        else {
            paso = true;
        }
        // restrinccion para velocidad inicial
        if (this.VelocidadInicial == null) {
            velInicial = 0;
        }
        else if (velInicial < 0) {
            // si el tiempo ingresado es negativo
            var alertaerrortiempo = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'La velocidad inicial debe ser positiva.',
                buttons: ['Aceptar']
            });
            alertaerrortiempo.present();
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.tiempo = '';
            this.VelocidadInicial = null;
            this.tiempo = null;
            paso = false;
        }
        // ------------------------------ calculo  ---------------------------
        // formula h=(Vo t + (1/2 g  t^2))
        if (paso == true) {
            // calculo 
            ALtura = (velInicial * tiemp + (0.5 * (gravedad * (tiemp * tiemp))));
            var resultado = ALtura.toFixed(2); // aca usamos 3 decimales
            var loader = this.loadingCtrl.create({
                content: "Porcesando Calculo...",
                duration: 100,
            });
            loader.present()
                .then(function () {
                var calculo = _this.alertCtrl.create({
                    title: 'RESULTADO',
                    subTitle: 'La Velocidad Final es: ' + resultado + ' m',
                    buttons: ['Aceptar'],
                });
                calculo.present();
            });
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.tiempo = '';
            this.VelocidadInicial = null;
            this.tiempo = null;
            paso = false;
        }
    };
    CaidaLibreAlturaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaidaLibreAlturaPage');
    };
    CaidaLibreAlturaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-caida-libre-altura',template:/*ion-inline-start:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\caida-libre-altura\caida-libre-altura.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Caida Libre</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="fondo">\n\n  <ion-card color="blanco" class="cuadroblanco">\n    <ion-card-header class="nelson" text-center>\n      <br>\n      Altura\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n\n        <ion-item color="blanco">\n          <ion-label floating>Velocidad Inicial (m/s)</ion-label>\n          <ion-input type="tel" [(ngModel)]="VelocidadInicial"></ion-input>\n        </ion-item>\n\n        <ion-item color="blanco">\n          <ion-label floating>Tiempo (seg.)</ion-label>\n          <ion-input type="tel" [(ngModel)]="tiempo"></ion-input>\n        </ion-item>\n\n        <ion-item color="blanco">\n        </ion-item>\n      </ion-list>\n\n      <div class="centrado">\n        <button ion-button color="secondary" (click)="CalculoVFinal()" round icon-start>\n          <ion-icon name="arrow-round-forward" is-active="false"></ion-icon>\n          Calcular\n        </button>\n      </div>\n      <br>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\caida-libre-altura\caida-libre-altura.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CaidaLibreAlturaPage);
    return CaidaLibreAlturaPage;
}());

//# sourceMappingURL=caida-libre-altura.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaidaLibrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__caida_libre_tabs_caida_libre_tabs__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// importamos para que aparesca el cargar

// tambien importe para el alerta si esta vacio el campo de tiempo


var CaidaLibrePage = /** @class */ (function () {
    function CaidaLibrePage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        // aca importamos el tamb para movernos
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__caida_libre_tabs_caida_libre_tabs__["a" /* CaidaLibreTabsPage */];
    }
    CaidaLibrePage.prototype.CalculoVFinal = function () {
        var _this = this;
        var velocidadFinal;
        var velInicial = parseFloat(this.VelocidadInicial); // los parseamos para poder hacer poeraciones
        var tiemp = parseFloat(this.tiempo);
        var gravedad = 9.81;
        // para las restrincciones
        var paso = false;
        if (this.tiempo == null) {
            var alertaerrortiempo = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'Obligatorio llenar el campo TIEMPO.',
                buttons: ['Aceptar'],
                cssClass: 'estiloBotonesEmergentes'
            });
            alertaerrortiempo.present();
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.tiempo = '';
            this.VelocidadInicial = null;
            this.tiempo = null;
            paso = false;
        }
        else if (tiemp < 0) {
            // si el tiempo ingresado es negativo
            var alertaerrortiempo = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'El campo tiempo debe contener valor positivo.',
                buttons: ['Aceptar']
            });
            alertaerrortiempo.present();
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.tiempo = '';
            this.VelocidadInicial = null;
            this.tiempo = null;
            paso = false;
        }
        else {
            paso = true;
        }
        // restrinccion para velocidad inicial
        if (this.VelocidadInicial == null) {
            velInicial = 0;
        }
        else if (velInicial < 0) {
            // si el tiempo ingresado es negativo
            var alertaerrortiempo = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'La velocidad inicial debe ser positiva.',
                buttons: ['Aceptar']
            });
            alertaerrortiempo.present();
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.tiempo = '';
            this.VelocidadInicial = null;
            this.tiempo = null;
            paso = false;
        }
        // ------------------------------ calculo  ---------------------------
        if (paso == true) {
            // calculo 
            velocidadFinal = (velInicial + (gravedad * tiemp));
            var resultado = velocidadFinal.toFixed(2); // aca usamos 3 decimales
            var loader = this.loadingCtrl.create({
                content: "Porcesando Calculo...",
                duration: 100,
            });
            loader.present()
                .then(function () {
                var calculo = _this.alertCtrl.create({
                    title: 'RESULTADO',
                    subTitle: 'La Velocidad Final es: ' + resultado + ' m/s',
                    buttons: ['Aceptar'],
                });
                calculo.present();
            });
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.tiempo = '';
            this.VelocidadInicial = null;
            this.tiempo = null;
            paso = false;
        }
    };
    CaidaLibrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaidaLibrePage');
    };
    CaidaLibrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-caida-libre',template:/*ion-inline-start:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\caida-libre\caida-libre.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Caida Libre</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="fondo"> \n  \n    <ion-card color="blanco" class="cuadroblanco">\n      <ion-card-header class="nelson" text-center>\n        <br>\n        Velocidad Final\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-list>\n    \n          <ion-item color="blanco">\n            <ion-label floating>Velocidad Inicial (m/s)</ion-label>\n            <ion-input type="tel" [(ngModel)]="VelocidadInicial"></ion-input>\n          </ion-item>\n    \n          <ion-item color="blanco">\n            <ion-label floating>Tiempo (seg.)</ion-label>\n            <ion-input type="tel"  [(ngModel)]="tiempo" ></ion-input>\n          </ion-item>\n    \n          <ion-item color="blanco">\n          </ion-item>\n        </ion-list>\n        \n        <div class="centrado">\n          <button ion-button color="secondary" (click)="CalculoVFinal()" round icon-start>\n            <ion-icon name="arrow-round-forward" is-active="false"></ion-icon>\n             Calcular\n          </button>\n        </div>\n        <br>\n      </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\caida-libre\caida-libre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CaidaLibrePage);
    return CaidaLibrePage;
}());

//# sourceMappingURL=caida-libre.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaidaLibreTiempoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// importamos para que aparesca el cargar

// tambien importe para el alerta si esta vacio el campo de tiempo

var CaidaLibreTiempoPage = /** @class */ (function () {
    function CaidaLibreTiempoPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    CaidaLibreTiempoPage.prototype.Tiempo = function () {
        var _this = this;
        var velInicial = parseFloat(this.VelocidadInicial); // los parseamos para poder hacer poeraciones
        var velFinal = parseFloat(this.VelocidadFinal);
        var tiempo = parseFloat(this.tiempooo);
        var gravedad = 9.81;
        // para las restrincciones
        var paso = false;
        if (this.VelocidadFinal == null) {
            var alertaerrortiempo = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'Obligatorio llenar el campo Velocidad Final.',
                buttons: ['Aceptar'],
                cssClass: 'estiloBotonesEmergentes'
            });
            alertaerrortiempo.present();
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.VelocidadFinal = '';
            this.VelocidadInicial = null;
            this.VelocidadFinal = null;
            paso = false;
        }
        else if (velFinal < 0) {
            // si el tiempo ingresado es negativo
            var alertaerrortiempo = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'El campo Velocidad Final debe contener valor positivo.',
                buttons: ['Aceptar']
            });
            alertaerrortiempo.present();
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.VelocidadFinal = '';
            this.VelocidadInicial = null;
            this.VelocidadFinal = null;
            paso = false;
        }
        else {
            paso = true;
        }
        // restrinccion para velocidad inicial
        if (this.VelocidadInicial == null) {
            velInicial = 0;
        }
        else if (velInicial < 0) {
            // si el tiempo ingresado es negativo
            var alertaerrortiempo = this.alertCtrl.create({
                title: 'ERROR!',
                subTitle: 'La velocidad inicial debe ser positiva.',
                buttons: ['Aceptar']
            });
            alertaerrortiempo.present();
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.VelocidadFinal = '';
            this.VelocidadInicial = null;
            this.VelocidadFinal = null;
            paso = false;
        }
        // ------------------------------ calculo  ---------------------------
        // formula t = ((Vf - Vo)/g)
        if (paso == true) {
            // calculo 
            tiempo = ((velFinal - velInicial) / gravedad);
            var resultado = tiempo.toFixed(2); // aca usamos 3 decimales
            var loader = this.loadingCtrl.create({
                content: "Porcesando Calculo...",
                duration: 100,
            });
            loader.present()
                .then(function () {
                var calculo = _this.alertCtrl.create({
                    title: 'RESULTADO',
                    subTitle: 'El tiempo es: ' + resultado + ' s',
                    buttons: ['Aceptar'],
                });
                calculo.present();
            });
            // limpio los inputs y vuelvo a null velocidad inicia por defecto
            this.VelocidadInicial = '';
            this.VelocidadFinal = '';
            this.VelocidadInicial = null;
            this.VelocidadFinal = null;
            paso = false;
        }
    };
    CaidaLibreTiempoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaidaLibreTiempoPage');
    };
    CaidaLibreTiempoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-caida-libre-tiempo',template:/*ion-inline-start:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\caida-libre-tiempo\caida-libre-tiempo.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Caida Libre</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="fondo">\n\n  <ion-card color="blanco" class="cuadroblanco">\n    <ion-card-header class="nelson" text-center>\n      <br>\n      Tiempo\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n\n        <ion-item color="blanco">\n          <ion-label floating>Velocidad Inicial (m/s)</ion-label>\n          <ion-input type="tel" [(ngModel)]="VelocidadInicial"></ion-input>\n        </ion-item>\n\n        <ion-item color="blanco">\n          <ion-label floating>Velocidad Final (m/s)</ion-label>\n          <ion-input type="tel" [(ngModel)]="VelocidadFinal"></ion-input>\n        </ion-item>\n\n        <ion-item color="blanco">\n          <ion-label floating>Tiempo (s)</ion-label>\n          <ion-input type="tel" [(ngModel)]="tiempooo"></ion-input>\n        </ion-item>\n\n        <ion-item color="blanco">\n        </ion-item>\n      </ion-list>\n\n      <div class="centrado">\n        <button ion-button color="secondary" (click)="Tiempo()" round icon-start>\n          <ion-icon name="arrow-round-forward" is-active="false"></ion-icon>\n          Calcular\n        </button>\n      </div>\n      <br>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\caida-libre-tiempo\caida-libre-tiempo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CaidaLibreTiempoPage);
    return CaidaLibreTiempoPage;
}());

//# sourceMappingURL=caida-libre-tiempo.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnergiaCineticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// importamos para que aparesca el cargar

// tambien importe para el alerta si esta vacio el campo de tiempo

var EnergiaCineticaPage = /** @class */ (function () {
    function EnergiaCineticaPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    EnergiaCineticaPage.prototype.calculoEnergia = function () {
        var _this = this;
        var masa = parseFloat(this.masa);
        var velocidad = parseFloat(this.velocidad);
        var EnergiaCinetica = parseFloat(this.EnergiaCinetica);
        var velocidadDos = parseFloat(this.velocidadDos);
        // var EcDos: number;
        var CambioEnergia;
        var ResultadoVelocidad;
        // validacion
        if (this.masa == null && this.velocidad == null) {
        }
        if (this.masa > 0 && this.velocidad > 0) {
            // si los valores
            if (this.velocidadDos == null) {
                velocidadDos = 0;
            }
            if (this.EnergiaCinetica == null) {
                EnergiaCinetica = 0;
            }
            // todos los calculos
            // calculo de Ec
            EnergiaCinetica = (1 / 2 * masa) * (velocidad * velocidad);
            // calculo de Ec2
            velocidadDos = (1 / 2 * masa) * (velocidadDos * velocidadDos);
            // cambio en energia cinetica    Ec = Ecfinal - Ecinicial
            CambioEnergia = EnergiaCinetica - velocidadDos;
            // velocidad
            ResultadoVelocidad = Math.sqrt((EnergiaCinetica * 2) / masa);
            var loader = this.loadingCtrl.create({
                content: "Porcesando Calculo...",
                duration: 100,
            });
            loader.present()
                .then(function () {
                var calculo = _this.alertCtrl.create({
                    title: 'RESULTADO',
                    subTitle: 'La Energía Cinética (Ec) es: ' + EnergiaCinetica + 'J\n' +
                        'El Trabajo (W) es: ' + CambioEnergia + 'J\n' +
                        'La velocidad es: ' + ResultadoVelocidad + 'm/s',
                    buttons: ['Aceptar'],
                });
                calculo.present();
            });
            //limpio los inputs y las variables
            this.masa = '';
            this.velocidad = '';
            this.EnergiaCinetica = '';
            this.velocidadDos = '';
            this.masa = null;
            this.velocidad = null;
            this.EnergiaCinetica = null;
            this.velocidadDos = null;
        }
        else if (this.masa > 0 && this.EnergiaCinetica > 0) {
            // codigo para calcular velocidad
            ResultadoVelocidad = Math.sqrt((EnergiaCinetica * 2) / masa);
            var loader = this.loadingCtrl.create({
                content: "Porcesando Calculo...",
                duration: 100,
            });
            loader.present()
                .then(function () {
                var calculo = _this.alertCtrl.create({
                    title: 'Calculo Velocidad',
                    subTitle: 'La velocidad es: ' + ResultadoVelocidad + 'm/s',
                    buttons: ['Aceptar'],
                });
                calculo.present();
            });
            //limpio los inputs y las variables
            this.masa = '';
            this.velocidad = '';
            this.EnergiaCinetica = '';
            this.velocidadDos = '';
            this.masa = null;
            this.velocidad = null;
            this.EnergiaCinetica = null;
            this.velocidadDos = null;
            // terminar if
        }
        else if (this.velocidad > 0 && this.velocidadDos > 0) {
            // codigo para calcular trabajo con dos velocidades
            ResultadoVelocidad = velocidadDos - velocidad;
            var loader = this.loadingCtrl.create({
                content: "Porcesando Calculo...",
                duration: 100,
            });
            loader.present()
                .then(function () {
                var calculo = _this.alertCtrl.create({
                    title: 'Calculo Trabajo W',
                    subTitle: 'El trabajo es: ' + ResultadoVelocidad + 'J',
                    buttons: ['Aceptar'],
                });
                calculo.present();
            });
            //limpio los inputs y las variables
            this.masa = '';
            this.velocidad = '';
            this.EnergiaCinetica = '';
            this.velocidadDos = '';
            this.masa = null;
            this.velocidad = null;
            this.EnergiaCinetica = null;
            this.velocidadDos = null;
            // terminar if
        }
        else if (this.masa == 0 || this.EnergiaCinetica == 0) {
            // no se realizo ningun calculo
            // minimo debe estar lleno y masa como requisito 
            var loader = this.loadingCtrl.create({
                content: "Porcesando Calculo...",
                duration: 100,
            });
            loader.present()
                .then(function () {
                var calculo = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Ingrese Numero Mayor a 0',
                    buttons: ['Aceptar'],
                });
                calculo.present();
            });
        }
        else {
            // no se realizo ningun calculo
            // minimo debe estar lleno y masa como requisito 
            var loader = this.loadingCtrl.create({
                content: "Porcesando Calculo...",
                duration: 100,
            });
            loader.present()
                .then(function () {
                var calculo = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Debe llenar Campos necesarios',
                    buttons: ['Aceptar'],
                });
                calculo.present();
            });
        }
    };
    EnergiaCineticaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnergiaCineticaPage');
    };
    EnergiaCineticaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-energia-cinetica',template:/*ion-inline-start:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\energia-cinetica\energia-cinetica.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <!--el color="primary" sirve -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Energía Cinética</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="fondo">\n  <ion-card color="blanco" class="cuadroblanco">\n    <ion-card-header class="nelson" text-center>\n      <br>\n      Ingrese Datos\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n\n        <ion-item color="blanco">\n          <ion-label floating>Masa m (kg)</ion-label>\n          <ion-input type="tel" [(ngModel)]="masa"></ion-input>\n        </ion-item>\n\n        <ion-item color="blanco">\n          <ion-label floating>Velocidad v (m/s)</ion-label>\n          <ion-input type="tel" [(ngModel)]="velocidad"></ion-input>\n        </ion-item>\n\n        <ion-item color="blanco">\n          <ion-label floating>Energía Cinética Ec (J)</ion-label>\n          <ion-input type="tel" [(ngModel)]="EnergiaCinetica"></ion-input>\n        </ion-item>\n\n        <ion-item color="blanco">\n          <ion-label floating>Velocidad 2 v (m/s)</ion-label>\n          <ion-input type="tel" [(ngModel)]="velocidadDos"></ion-input>\n        </ion-item>\n\n        <ion-item color="blanco">\n        </ion-item>\n      </ion-list>\n\n      <div class="centrado">\n        <button ion-button color="secondary" (click)="calculoEnergia()" round icon-start>\n          <ion-icon name="arrow-round-forward" is-active="false"></ion-icon>\n          Calcular\n        </button>\n      </div>\n      <br>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\energia-cinetica\energia-cinetica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EnergiaCineticaPage);
    return EnergiaCineticaPage;
}());

//# sourceMappingURL=energia-cinetica.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/caida-libre-altura/caida-libre-altura.module": [
		273,
		4
	],
	"../pages/caida-libre-tabs/caida-libre-tabs.module": [
		274,
		3
	],
	"../pages/caida-libre-tiempo/caida-libre-tiempo.module": [
		275,
		2
	],
	"../pages/caida-libre/caida-libre.module": [
		277,
		1
	],
	"../pages/energia-cinetica/energia-cinetica.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// importamos para que aparesca el cargar

// tambien importe para el alerta si esta vacio el campo de tiempo

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.openUrlFacebook = function () {
        window.open('https://www.facebook.com/edysantiago.saputxoyon', '_system');
    };
    HomePage.prototype.openUrlLindedin = function () {
        window.open('https://www.linkedin.com/in/saputxoyonsantiago/', '_system');
    };
    HomePage.prototype.openUrlIntagram = function () {
        window.open('https://www.instagram.com/santi_sx/', '_system');
    };
    HomePage.prototype.openUrlGoogle = function () {
        var calculo = this.alertCtrl.create({
            title: 'Contacto',
            subTitle: 'xoyonsantiago@gmail.com',
            buttons: ['Aceptar'],
        });
        calculo.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <!--el color="primary" sirve -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Info. Grupo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding class="fondo">\n  <div id="bubbles">\n    <div class="bubble x1"></div>\n    <div class="bubble x2"></div>\n    <div class="bubble x3"></div>\n    <div class="bubble x4"></div>\n    <div class="bubble x5"></div>\n    <!--marce-->\n    <div class="bubble x7"></div>\n    <div class="bubble x8"></div>\n    <!--coloque aca el No 10 porque si lo coloco al final se distorciona la imagen-->\n    <!--santi-->\n    <div class="bubble x10"></div>\n    <div class="bubble x9"></div>\n\n  </div>\n \n</ion-content>\n\n\n<ion-footer>\n  <!--div para cambiar el alto del slider-->\n  <div class="header-banner">\n    <ion-slides pager class="home-slide" autoplay="3000">\n      <!--el loop sive para que cambie y se mantenga cambian los slides-->\n  \n  \n      <ion-slide>\n        <ion-card color="blanco" class="cuadroblancoHome">\n          <ion-card-header>\n            <br>\n            <h2>Nombre: Edy Santiago Saput Xoyón</h2>\n            <p>Carné: 1990-17-13701</p>\n            <p>Curso: Fisica</p>\n            <p>Sección: "A"</p>\n          </ion-card-header>\n  \n          <ion-card-content>\n            <!--aca va informacion-->\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n  \n      <ion-slide>\n        <ion-card color="blanco" class="cuadroblancoHome">\n          <ion-card-header>\n            <br>\n            <h2>Nombre: Fredy Misael Pixola Mendez</h2>\n            <p>Carné: 1990-17-18076</p>\n            <p>Curso: Fisica</p>\n            <p>Sección: "A"</p>\n          </ion-card-header>\n        \n          <ion-card-content>\n            <!--aca va informacion-->\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n  \n      <ion-slide>\n        <ion-card color="blanco" class="cuadroblancoHome">\n          <ion-card-header>\n            <br>\n            <h2>Otro Integrante</h2>\n          </ion-card-header>\n  \n          <ion-card-content>\n            <!--aca va informacion-->\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n  \n    </ion-slides>\n  </div>\n\n  <br>\n  <br>\n  <br>\n    <ion-fab right bottom>\n      <button ion-fab color="light">\n        <ion-icon name="md-share"></ion-icon>\n      </button>\n      <ion-fab-list side="left">\n        \n        <button ion-fab (click)="openUrlFacebook()">\n          <ion-icon name="logo-facebook"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-linkedin" (click)="openUrlLindedin()"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-instagram" (click)="openUrlIntagram()"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-googleplus" (click)="openUrlGoogle()"></ion-icon>\n        </button>\n      </ion-fab-list>\n    </ion-fab>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_caida_libre_caida_libre__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_caida_libre_altura_caida_libre_altura__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_caida_libre_tabs_caida_libre_tabs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_caida_libre_tiempo_caida_libre_tiempo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_energia_cinetica_energia_cinetica__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// aca se declaran todas las paginas 


// importamos todos nuestros componentes de caida libre




// componentes de nergia cinetica



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_caida_libre_caida_libre__["a" /* CaidaLibrePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_caida_libre_altura_caida_libre_altura__["a" /* CaidaLibreAlturaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_caida_libre_tabs_caida_libre_tabs__["a" /* CaidaLibreTabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_caida_libre_tiempo_caida_libre_tiempo__["a" /* CaidaLibreTiempoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_energia_cinetica_energia_cinetica__["a" /* EnergiaCineticaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/caida-libre-altura/caida-libre-altura.module#CaidaLibreAlturaPageModule', name: 'CaidaLibreAlturaPage', segment: 'caida-libre-altura', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/caida-libre-tabs/caida-libre-tabs.module#CaidaLibreTabsPageModule', name: 'CaidaLibreTabsPage', segment: 'caida-libre-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/caida-libre-tiempo/caida-libre-tiempo.module#CaidaLibreTiempoPageModule', name: 'CaidaLibreTiempoPage', segment: 'caida-libre-tiempo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/energia-cinetica/energia-cinetica.module#EnergiaCineticaPageModule', name: 'EnergiaCineticaPage', segment: 'energia-cinetica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/caida-libre/caida-libre.module#CaidaLibrePageModule', name: 'CaidaLibrePage', segment: 'caida-libre', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_caida_libre_caida_libre__["a" /* CaidaLibrePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_caida_libre_altura_caida_libre_altura__["a" /* CaidaLibreAlturaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_caida_libre_tabs_caida_libre_tabs__["a" /* CaidaLibreTabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_caida_libre_tiempo_caida_libre_tiempo__["a" /* CaidaLibreTiempoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_energia_cinetica_energia_cinetica__["a" /* EnergiaCineticaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_caida_libre_tabs_caida_libre_tabs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_energia_cinetica_energia_cinetica__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// importamos todas nuestras paginas de caida libre

// importamos nuestra pagina de energia cinetica

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        /* { title: 'Caida Libre', component: CaidaLibrePage},
              el item para la caida libre es por medio de tabs para movilizarse
          */
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Caida Libre', component: __WEBPACK_IMPORTED_MODULE_5__pages_caida_libre_tabs_caida_libre_tabs__["a" /* CaidaLibreTabsPage */] },
            { title: 'Energia Cinetica', component: __WEBPACK_IMPORTED_MODULE_6__pages_energia_cinetica_energia_cinetica__["a" /* EnergiaCineticaPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav  [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaidaLibreTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__caida_libre_caida_libre__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__caida_libre_altura_caida_libre_altura__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__caida_libre_tiempo_caida_libre_tiempo__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CaidaLibreTabsPage = /** @class */ (function () {
    function CaidaLibreTabsPage(navCtrl, navParams, platform, statusBar, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // aca hice el tab
        this.IrAVFinal = __WEBPACK_IMPORTED_MODULE_4__caida_libre_caida_libre__["a" /* CaidaLibrePage */];
        this.IrAAltura = __WEBPACK_IMPORTED_MODULE_5__caida_libre_altura_caida_libre_altura__["a" /* CaidaLibreAlturaPage */];
        this.IrATiempo = __WEBPACK_IMPORTED_MODULE_6__caida_libre_tiempo_caida_libre_tiempo__["a" /* CaidaLibreTiempoPage */];
    }
    CaidaLibreTabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaidaLibreTabsPage');
    };
    CaidaLibreTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-caida-libre-tabs',template:/*ion-inline-start:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\caida-libre-tabs\caida-libre-tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="IrAVFinal" tabTitle="Velocidad Final"></ion-tab>\n  <ion-tab [root]="IrATiempo" tabTitle="Tiempo" ></ion-tab>\n  <ion-tab [root]="IrAAltura" tabTitle="Altura" ></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\SANTIAGO\Desktop\Ingenieria\Ciclo_lll\Fisica_I\Programa\App-Fisica\src\pages\caida-libre-tabs\caida-libre-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], CaidaLibreTabsPage);
    return CaidaLibreTabsPage;
}());

//# sourceMappingURL=caida-libre-tabs.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map