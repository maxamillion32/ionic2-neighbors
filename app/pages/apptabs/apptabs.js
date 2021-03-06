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
var ionic_angular_1 = require('ionic-angular');
var page1_1 = require('../events/events.page');
var page2_1 = require('../chat/chat.page');
var page3_1 = require('../neighbors/neighbors.page');
var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = page1_1.EventsPage;
        this.tab2Root = page2_1.ChatPage;
        this.tab3Root = page3_1.NeighborsPage;
    }
    TabsPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/apptabs/apptabs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
