webpackJsonp([1,5],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_score_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(themeService, scoreService) {
        this.themeService = themeService;
        this.scoreService = scoreService;
        this.difficultyLevels = [
            "easy",
            "intermediate",
            "hard"
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all the possible themes for the game 
        this.themesSub = this.themeService.getThemes().subscribe(function (themes) {
            _this.themes = themes;
            _this.setSelectedTheme(themes[0]);
        }, function (err) { return console.log(err); });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        //focus on our name input
        document.getElementById('enterName').focus();
    };
    HomeComponent.prototype.setSelectedTheme = function (theme) {
        if (theme === void 0) { theme = {}; }
        this.selectedTheme = theme;
        this.themeService.setTheme(theme);
    };
    HomeComponent.prototype.setUserName = function (name) {
        if (name === void 0) { name = "unknown"; }
        this.scoreService.setName(name);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe from all of our observables
        this.themesSub.unsubscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(316),
        styles: [__webpack_require__(306)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__theme_service__["a" /* ThemeService */],
            __WEBPACK_IMPORTED_MODULE_2__results_score_service__["a" /* ScoreService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme_service__["a" /* ThemeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__results_score_service__["a" /* ScoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__results_score_service__["a" /* ScoreService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



"";
// Import RxJS required methods


var ThemeService = (function () {
    function ThemeService(http) {
        this.http = http;
        this.themesUrl = "http://localhost:3004/api/allThemes";
    }
    ThemeService.prototype.setTheme = function (theme) {
        if (theme === void 0) { theme = {}; }
        this.theme = theme;
    };
    ThemeService.prototype.getTheme = function () {
        return this.theme || { "id": 1, "name": "nature" };
    };
    ThemeService.prototype.getThemes = function () {
        return this.http.get(this.themesUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server Error'); });
    };
    return ThemeService;
}());
ThemeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ThemeService);

var _a;
//# sourceMappingURL=theme.service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__score_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = (function () {
    function ResultsComponent(scoreService) {
        this.scoreService = scoreService;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ResultsComponent.prototype.getData = function () {
        this.score = this.scoreService.getScore();
        this.name = this.scoreService.getName();
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__(317),
        styles: [__webpack_require__(307)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__score_service__["a" /* ScoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__score_service__["a" /* ScoreService */]) === "function" && _a || Object])
], ResultsComponent);

var _a;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



"";
// Import RxJS required methods


var FlashCardService = (function () {
    function FlashCardService(http) {
        this.http = http;
        this.flashCardsUrl = "http://localhost:3000/flashcards/";
    }
    FlashCardService.prototype.getThemeFlashCards = function (id) {
        if (id === void 0) { id = 1; }
        return this.http.get(this.flashCardsUrl + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server Error'); });
    };
    FlashCardService.prototype.getAllFlashCards = function () {
        return this.http.get(this.flashCardsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server Error'); });
    };
    return FlashCardService;
}());
FlashCardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FlashCardService);

var _a;
//# sourceMappingURL=flash-card.service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flash_card_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_score_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_theme_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SurveyComponent = (function () {
    function SurveyComponent(route, router, flashCardService, scoreService, themeService) {
        this.route = route;
        this.router = router;
        this.flashCardService = flashCardService;
        this.scoreService = scoreService;
        this.themeService = themeService;
        this.flashCardResult = {};
        // we do not want to show the flash card till we have the data
        this.displayFlashCard = false;
        this.flashCardIndex = 0; // start at the first index
    }
    SurveyComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.displayFlashCard = true;
        this.theme = this.themeService.getTheme();
        this.score = this.scoreService.getScore();
        // get the flashcard data
        this.getData();
    };
    SurveyComponent.prototype.getData = function () {
        var _this = this;
        this.flashCardSub = this.flashCardService.getThemeFlashCards(this.theme.id).subscribe(function (flashCards) {
            _this.flashCards = flashCards;
            _this.flashCard = flashCards.cards[_this.flashCardIndex];
            _this.numberOfFlashCards = flashCards.cards.length;
            _this.loading = false;
        }, function (err) { return console.log(err); });
    };
    SurveyComponent.prototype.submitAnswer = function (result) {
        var _this = this;
        // did we answer correct?
        this.flashCardResult.correct = result;
        // if we got the wong answer we need to find out the right answer 
        if (!this.flashCardResult.correct) {
            // find the mofo 
            var correctAnswer = this.flashCard.possibleAnswers.find(function (item) {
                if (item.id == _this.flashCard.correctAnswer)
                    return item;
            });
            this.flashCardResult.correctAnswer = correctAnswer;
        }
        else {
            // add to the score
            this.scoreService.updateScore(100);
            this.score = this.scoreService.getScore();
        }
        // hide our flashCard and show the result card
        this.displayFlashCard = false;
    };
    SurveyComponent.prototype.nextQuestion = function () {
        // update our index
        this.flashCardIndex++;
        // is this the last card?
        if (this.flashCardIndex >= this.numberOfFlashCards) {
            // send user to results, since they have seen all the flash cards
            this.router.navigate(['/results']);
        }
        else {
            // get our new flashCard
            this.flashCard = this.flashCards.cards[this.flashCardIndex];
        }
        // hide our result card and show the question
        this.displayFlashCard = true;
    };
    SurveyComponent.prototype.ngOnDestroy = function () {
        // unsubscribe from all of our observables
        this.flashCardSub.unsubscribe();
    };
    return SurveyComponent;
}());
SurveyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-survey',
        template: __webpack_require__(320),
        styles: [__webpack_require__(310)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__flash_card_service__["a" /* FlashCardService */],
            __WEBPACK_IMPORTED_MODULE_3__results_score_service__["a" /* ScoreService */],
            __WEBPACK_IMPORTED_MODULE_4__home_theme_service__["a" /* ThemeService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__flash_card_service__["a" /* FlashCardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__flash_card_service__["a" /* FlashCardService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__results_score_service__["a" /* ScoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__results_score_service__["a" /* ScoreService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__home_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__home_theme_service__["a" /* ThemeService */]) === "function" && _e || Object])
], SurveyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=survey.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 201;


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(223);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(315),
        styles: [__webpack_require__(305)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__survey_survey_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__results_results_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["a" /* ClarityModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_7__survey_survey_module__["a" /* SurveyModule */],
            __WEBPACK_IMPORTED_MODULE_8__results_results_module__["a" /* ResultsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["a" /* ClarityModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__home_routing_module__["a" /* HomeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results_component__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'results',
        component: __WEBPACK_IMPORTED_MODULE_2__results_results_component__["a" /* ResultsComponent */]
    }
];
var ResultsRoutingModule = (function () {
    function ResultsRoutingModule() {
    }
    return ResultsRoutingModule;
}());
ResultsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ResultsRoutingModule);

//# sourceMappingURL=results-routing.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_routing_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__score_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ResultsModule = (function () {
    function ResultsModule() {
    }
    return ResultsModule;
}());
ResultsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__results_routing_module__["a" /* ResultsRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__results_results_component__["a" /* ResultsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__score_service__["a" /* ScoreService */]
        ]
    })
], ResultsModule);

//# sourceMappingURL=results.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashCardResultComponent = (function () {
    function FlashCardResultComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    FlashCardResultComponent.prototype.ngOnInit = function () {
    };
    FlashCardResultComponent.prototype.playAudio = function (id) {
        var audio = document.getElementById(id);
        audio.play();
    };
    FlashCardResultComponent.prototype.close = function () {
        // update our parent
        this.change.emit();
    };
    return FlashCardResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], FlashCardResultComponent.prototype, "flashCardResult", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], FlashCardResultComponent.prototype, "change", void 0);
FlashCardResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-flash-card-result',
        template: __webpack_require__(318),
        styles: [__webpack_require__(308)]
    }),
    __metadata("design:paramtypes", [])
], FlashCardResultComponent);

var _a;
//# sourceMappingURL=flash-card-result.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashCardComponent = (function () {
    function FlashCardComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    FlashCardComponent.prototype.ngOnInit = function () {
    };
    FlashCardComponent.prototype.playAudio = function (id) {
        var audio = document.getElementById(id);
        audio.play();
    };
    FlashCardComponent.prototype.submitAnswer = function (index) {
        if (index === void 0) { index = -1; }
        var result;
        // did the user select the correct answer
        result = (index === this.flashCard.correctAnswer) ? true : false;
        // update our parent
        this.change.emit(result);
    };
    return FlashCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], FlashCardComponent.prototype, "flashCard", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], FlashCardComponent.prototype, "change", void 0);
FlashCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-flash-card',
        template: __webpack_require__(319),
        styles: [__webpack_require__(309)]
    }),
    __metadata("design:paramtypes", [])
], FlashCardComponent);

var _a;
//# sourceMappingURL=flash-card.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_survey_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'survey',
        component: __WEBPACK_IMPORTED_MODULE_2__survey_survey_component__["a" /* SurveyComponent */],
    }
];
var SurveyRoutingModule = (function () {
    function SurveyRoutingModule() {
    }
    return SurveyRoutingModule;
}());
SurveyRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], SurveyRoutingModule);

//# sourceMappingURL=survey-routing.module.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_routing_module__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flash_card_flash_card_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flash_card_result_flash_card_result_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__survey_survey_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flash_card_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SurveyModule = (function () {
    function SurveyModule() {
    }
    return SurveyModule;
}());
SurveyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["a" /* ClarityModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__survey_routing_module__["a" /* SurveyRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__flash_card_flash_card_component__["a" /* FlashCardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__survey_survey_component__["a" /* SurveyComponent */], __WEBPACK_IMPORTED_MODULE_5__flash_card_result_flash_card_result_component__["a" /* FlashCardResultComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__flash_card_service__["a" /* FlashCardService */],
        ]
    })
], SurveyModule);

//# sourceMappingURL=survey.module.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".home {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%; }\n  .home .menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #ECF0F1;\n    height: 80vh;\n    width: 80vw;\n    max-height: 50rem;\n    max-width: 80rem; }\n    .home .menu .title {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .home .menu .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .home .menu .container clr-dropdown, .home .menu .container button {\n        margin: 1rem 0; }\n    .home .menu h1 {\n      margin: 0; }\n    .home .menu input {\n      height: 100%;\n      width: 100%;\n      background: none;\n      border: none;\n      font-size: 2.4rem;\n      line-height: 0;\n      text-align: left;\n      padding: 0;\n      padding-left: 1rem; }\n      .home .menu input:hover, .home .menu input:focus {\n        outline: none;\n        border-bottom: 1px solid #2980B9; }\n    .home .menu button {\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".results {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%; }\n  .results h1, .results h2 {\n    color: #fff; }\n  .results .title {\n    margin-top: 10vh; }\n    .results .title h1 {\n      font-size: 15rem; }\n  .results .score h2 {\n    font-size: 12rem; }\n  .results .footer {\n    margin-bottom: 10vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".flashCardResult {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .flashCardResult clr-icon.thumbs {\n    color: #fff;\n    margin-bottom: 2rem; }\n  .flashCardResult .correct {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .flashCardResult .correct .score {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #fff; }\n      .flashCardResult .correct .score span {\n        font-size: 10rem; }\n  .flashCardResult .wrong {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .flashCardResult .wrong .answer {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #fff; }\n      .flashCardResult .wrong .answer h4 {\n        color: #fff; }\n      .flashCardResult .wrong .answer .headphones {\n        margin-top: 1rem;\n        cursor: pointer; }\n  .flashCardResult button {\n    margin-top: 2rem;\n    width: 60vw;\n    max-width: 30rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".flash-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 60vh;\n  width: 80vw;\n  max-height: 60rem;\n  max-width: 80rem;\n  background-color: #ECF0F1; }\n  .flash-card clr-icon {\n    cursor: pointer; }\n  .flash-card .title {\n    text-align: center; }\n  .flash-card .answer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .flash-card .answer ul {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      list-style: none; }\n      .flash-card .answer ul li {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-preferred-size: 50%;\n            flex-basis: 50%;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  .flash-card .footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .flash-card .footer clr-icon {\n      margin-right: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".survey {\n  height: 100%; }\n  .survey .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin-top: 1rem;\n    color: #fff; }\n    .survey .info .score {\n      margin-left: 2rem; }\n    .survey .info .theme {\n      margin-right: 2rem; }\n  .survey .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n\n  <div class=\"menu\">\n    <form class=\"title\" #homeForm=\"ngForm\">\n      <h1>Welcome</h1>\n      <input \n          id=\"enterName\" \n          name=\"name\"\n          (blur)=\"setUserName(userName)\" \n          [(ngModel)]=\"userName\" \n          placeholder=\"Enter name\">\n    </form>\n    <div class=\"container\" *ngIf=\"themes\">\n      <clr-dropdown>\n        <button class=\"btn btn-outline-primary\" clrDropdownToggle>\n          {{ selectedTheme }}\n          <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n        <clr-dropdown-menu>\n          <a *ngFor=\"let theme of themes\" (click)=\"setSelectedTheme(theme)\" clrDropdownItem>{{ theme}}</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n      <clr-dropdown>\n        <button class=\"btn btn-outline-primary\" clrDropdownToggle>\n          {{ selectedTheme }}\n          <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n        <clr-dropdown-menu>\n          <a *ngFor=\"let theme of themes\" (click)=\"setSelectedTheme(theme)\" clrDropdownItem>{{ theme}}</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n      <button class=\"btn btn-danger\" routerLink=\"/results\">Leaderboards</button>\n      <button class=\"btn btn-success\" routerLink=\"/survey\">Start</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<div class=\"results\">\n\n  <div class=\"title\">\n    <h1>Results</h1>\n  </div>\n  \n  <div class=\"score\">\n    <h2>{{ score }}</h2>\n  </div>\n\n  <div class=\"footer\">\n    <button disabled class=\"btn btn-success\">LeaderBoards</button>\n    <button routerLink=\"/home\" class=\"btn btn-success\">Home</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<div class=\"flashCardResult\">\n\n  <div class=\"correct\" *ngIf=\"flashCardResult.correct\">\n    <clr-icon class=\"thumbs\" shape=\"thumbs-up\" size=\"100\"></clr-icon>\n    <div class=\"score\">\n      <clr-icon shape=\"plus\" size=\"100\"></clr-icon>\n      <span>100</span>\n    </div>\n  </div>\n\n  <div class=\"wrong\" *ngIf=\"!flashCardResult.correct\">\n    <clr-icon class=\"thumbs\" shape=\"thumbs-down\" size=\"100\"></clr-icon>\n    <div class=\"answer\">\n      <h4>the correct answer is:</h4>\n      <p>{{ flashCardResult.correctAnswer.answerText }}</p>\n      <clr-icon (click)=\"playAudio('audio')\" class=\"headphones\" size=\"24\" shape=\"headphones\"></clr-icon>\n        <audio id=\"audio\" [src]=\"'./assets/sounds/' + flashCardResult.correctAnswer.audioUrl\"></audio>\n    </div>\n  </div>\n\n  <button (click)=\"close()\" class=\"btn btn-success\">Next</button>\n</div>\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<div class=\"flash-card\">\n  <div class=\"title\">\n    <h2>{{ flashCard.questionText }}</h2>\n  </div>\n  <div class=\"answer\">\n    <ul>\n      <li *ngFor=\"let answer of flashCard.possibleAnswers\">\n        <button (click)=\"submitAnswer(answer.id)\" class=\"btn btn-success\">\n          ({{ answer.id}}) {{ answer.answerText}} \n        </button>\n        <audio [id]=\"$index + 'audio'\" [src]=\"'./assets/sounds/' + answer.audioUrl\">\n        </audio>\n        <clr-icon (click)=\"playAudio($index + 'audio')\" size=\"24\" shape=\"headphones\">\n        </clr-icon>\n      </li>\n    </ul>\n  </div>\n  <div class=\"footer\">\n    <clr-icon (click)=\"playAudio('titleAudio')\" size=\"24\" shape=\"headphones\">\n    </clr-icon>\n    <audio id=\"titleAudio\" [src]=\"'./assets/sounds/' + flashCard.audioUrl\">\n    </audio>\n  </div>\n</div>\n"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<div class=\"survey\">\n  <div class=\"info\">\n    <div class=\"score\">\n      Score: {{ score }} \n    </div>\n    <div class=\"status\" *ngIf=\"!loading\">\n      {{ flashCardIndex + 1 }} / {{ numberOfFlashCards }}\n    </div>\n    <div class=\"theme\">\n      <span>Theme: {{ theme.name }}</span>\n    </div>\n  </div>\n  <div class=\"container\" *ngIf=\"!loading\">\n    <app-flash-card \n      *ngIf=\"displayFlashCard\" \n      [flashCard]=\"flashCard\" \n      (change)=\"submitAnswer($event)\">\n    </app-flash-card>\n    <app-flash-card-result \n      *ngIf=\"!displayFlashCard\"\n      [flashCardResult]=\"flashCardResult\" \n      (change)=\"nextQuestion($event)\">\n    </app-flash-card-result>\n  </div>\n</div>\n"

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(202);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


"";
// Import RxJS required methods


var ScoreService = (function () {
    function ScoreService(http) {
        this.http = http;
        this.score = 0;
    }
    ScoreService.prototype.setName = function (userName) {
        if (userName === void 0) { userName = "unknown"; }
        this.name = userName;
    };
    ScoreService.prototype.getName = function () {
        return this.name;
    };
    ScoreService.prototype.updateScore = function (increament) {
        if (increament === void 0) { increament = 0; }
        this.score += increament;
    };
    ScoreService.prototype.getScore = function () {
        return this.score;
    };
    return ScoreService;
}());
ScoreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ScoreService);

var _a;
//# sourceMappingURL=score.service.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.bundle.js.map