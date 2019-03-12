(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-grid-module"],{

/***/ "./src/app/layout/grid/grid-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/grid/grid-routing.module.ts ***!
  \****************************************************/
/*! exports provided: GridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridRoutingModule", function() { return GridRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ "./src/app/layout/grid/grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]
    }
];
var GridRoutingModule = /** @class */ (function () {
    function GridRoutingModule() {
    }
    GridRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GridRoutingModule);
    return GridRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/grid/grid.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/grid/grid.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <div fxFlex>\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            100%\n        </mat-card>\n    </div>\n</div>\n\n<div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div fxFlex *ngFor=\"let i of [50, 50]\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            {{i}}%\n        </mat-card>\n    </div>\n</div>\n\n<div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33, 33.33, 33.33]\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            {{i}}%\n        </mat-card>\n    </div>\n</div>\n\n<div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div [fxFlex]=\"i\" *ngFor=\"let i of [25, 25, 25, 25]\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            {{i}}%\n        </mat-card>\n    </div>\n</div>\n\n<div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div [fxFlex]=\"i\" *ngFor=\"let i of [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5]\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            {{i}}%\n        </mat-card>\n    </div>\n</div>\n\n<div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div [fxFlex]=\"15\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            15%\n        </mat-card>\n    </div>\n    <div [fxFlex]=\"25\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            25%\n        </mat-card>\n    </div>\n    <div [fxFlex]=\"60\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            60%\n        </mat-card>\n    </div>\n</div>\n\n<!-- <div fxFlexFill [fxLayout]=\"'row wrap'\" fxLayoutGap=\"20px grid\">\n    <div fxFlex=\"25\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            A\n        </mat-card>\n    </div>\n    <div fxFlex=\"25\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            B\n        </mat-card>\n    </div>\n    <div fxFlex=\"25\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            C\n        </mat-card>\n    </div>\n    <div fxFlex=\"25\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            D\n        </mat-card>\n    </div>\n    <div fxFlex=\"25\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            E\n        </mat-card>\n    </div>\n    <div fxFlex=\"25\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            F\n        </mat-card>\n    </div>\n    <div fxFlex=\"25\">\n        <mat-card fxFlexFill fxLayoutAlign=\"center center\">\n            G\n        </mat-card>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/layout/grid/grid.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/grid/grid.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/grid/grid.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/grid/grid.component.ts ***!
  \***********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () { };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/layout/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/layout/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/layout/grid/grid.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/grid/grid.module.ts ***!
  \********************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-routing.module */ "./src/app/layout/grid/grid-routing.module.ts");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid.component */ "./src/app/layout/grid/grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _grid_routing_module__WEBPACK_IMPORTED_MODULE_4__["GridRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"]]
        })
    ], GridModule);
    return GridModule;
}());



/***/ })

}]);
//# sourceMappingURL=grid-grid-module.js.map