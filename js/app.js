require.register("config.jsenv",function(e,t,r){r.exports={BUILD:"git-ea0a7ae"}});var toString$={}.toString;PDFJS.workerSrc="/pdf.worker.js",angular.module("App",["app.templates","ngMaterial","ui.router","pdf","angular-files-model","filereader","ngStorage","ui.sortable","ngAnimate"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,r){return e.state("about",{url:"/about",templateUrl:"app/partials/about.html",controller:"About"}),t.otherwise("/about"),r.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location","$window","$anchorScroll"].concat(function(e,t,r,n){return e.$state=t,e.$stateParam=r,e.config_build=require("config.jsenv").BUILD,e.$on("$stateChangeSuccess",function(e,t){var r;return r=t.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:n.$$path,title:r}):void 0})})).controller({AppCtrl:["$scope","$location","$rootScope","$sce","$mdSidenav"].concat(function(e,t,r,n,o){return e.$location=t,e.$watch("$location.path()",function(t){return t||(t="/"),e.activeNavId=t,e}),e.getClass=function(t){return e.activeNavId.substring(0,t.length===t)?"active":""},e.hover=function(){return o("left").open()}})}).controller({About:["$rootScope","$http","$scope","$mdSidenav","$localStorage"].concat(function(e,t,r,n){return e.activeTab="about",e.pdfUrl="/",r.toggleLeft=function(){return n("left").toggle()}})}).controller({PDFPlayerCtrl:["$rootScope","$scope","$interval"].concat(function(e,t,r){var n;return n=15e3,t.$parent.ready=!1,e.started=!1,e.pageProgress=0,e.slideProgress=5,t.$parent.onLoad=function(){return t.$parent.ready=!0},t.start=function(){return t.page=1,e.started=!0,e.pageProgress=0,r(function(){return $(".md-bar2").css({transition:"all "+n/1e3+"s linear"}),e.pageProgress=100},100,1),e.stop=r(function(){return t.page+=1,t.page>t.pageCount?(e.started=!1,t.$parent.ready=!1,r.cancel(e.stop)):(t.goNext(),e.slideProgress+=100/t.pageCount,$(".md-bar2").css({transition:""}),e.pageProgress=0,r(function(){return $(".md-bar2").css({transition:"all "+n/1e3+"s linear"}),e.pageProgress=100},100,1))},n,t.pageCount)},t.end=function(){return e.hasPDF=!1},t.$watch("page > pageCount",function(e){return e?t.end():void 0})})}).controller({LeftCtrl:["$rootScope","$scope","$timeout","$interval","$mdSidenav","$log","FileReader","$localStorage"].concat(function(e,t,r,n,o,a,i,l){return t.files=l.files||[],t.trigger=function(n){return t.close(),t.reset(),r(function(r){return console.log(r),"File"===toString$.call(n).slice(8,-1)?void i.readAsDataURL(n,t).then(function(t){return e.pdfUrl=t,e.hasPDF=!0}):(e.pdfUrl=n.link,e.hasPDF=!0)},200)},t.dropbox=function(){return Dropbox.choose({success:function(r){return console.log(JSON.stringify(r)),t.$apply(function(){return l.files=e.files=t.files=r})},linkType:"direct",multiselect:!0,extensions:[".pdf"]})},t.$watch("localFiles",function(r){var n,o,a,i;if(null!=r&&r.length){for(l.files=[],n=[],o=0,a=r.length;a>o;++o)i=r[o],n.push(i);return t.files=n,e.files=t.files}}),t.reset=function(){return e.hasPDF=!1,e.stop?n.cancel(e.stop):void 0},t.close=function(){return o("left").close()}})});