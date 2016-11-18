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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var MovieService = (function () {
    function MovieService(_http) {
        this._http = _http;
        this._serviceurl = 'https://api.themoviedb.org/3/movie/';
        this._appKey = '?api_key=674ef557cedbaa3e8be1c5bd71f395d7';
    }
    MovieService.prototype.getMoviedata = function (id) {
        return this._http.get(this._serviceurl + id + this._appKey).map(function (response) { return response.json(); })
            .do(function (data) { return console.log('check data:' + JSON.stringify(data)); }).
            catch(this.HandleError);
    };
    MovieService.prototype.HandleError = function (error) {
        console.erro('got in error');
        console.erro(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error ');
    };
    MovieService.prototype.getMovieCredit = function (id) {
        return this._http.get(this._serviceurl + id + '/credits' + this._appKey).map(function (response) { return response.json().cast; })
            .do(function (data) { return console.log('check data:' + JSON.stringify(data)); }).
            catch(this.HandleError);
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=Movie.Service.js.map