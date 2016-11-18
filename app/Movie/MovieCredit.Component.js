"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Movie_Service_1 = require('app/Service/Movie.Service');
var MovieCreditComponent = (function () {
    function MovieCreditComponent(_movieService) {
        this._movieService = _movieService;
    }
    MovieCreditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._movieService.getMovieCredit(284052).subscribe(function (movie) { return _this.movieCredit = movie; }, function (error) { return _this.errorMessage = error; });
        //console.log(this.movieCredit);
    };
    MovieCreditComponent = __decorate([
        core_1.Component({
            selector: 'at-movieCredit',
            templateUrl: 'app/Movie/MovieCredit.Component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof Movie_Service_1.MovieService !== 'undefined' && Movie_Service_1.MovieService) === 'function' && _a) || Object])
    ], MovieCreditComponent);
    return MovieCreditComponent;
    var _a;
}());
exports.MovieCreditComponent = MovieCreditComponent;
//# sourceMappingURL=MovieCredit.component.js.map