/// <reference path="../modules/App.ts"/>

namespace App.Ng {

    export class SkirmishSetupController {

        public static readonly NAME = "skirmishSetupController";
        public static readonly PATH = "/skirmish/:id/setup";
        public static readonly HTML_NAME = "skirmish-setup";

        private readonly $scope: any;

        constructor($scope: SkirmishSetupController.IScope,
            $routeParams: SkirmishSetupController.IRouteParams,
            armyCache: App.Ng.ArmyCache) {
                
            this.$scope = $scope;
            this.$scope.skirmishId = $routeParams.id;
            this.$scope.armies = armyCache.armies;
            this.$scope.firstArmy = armyCache.armies[0].id.toString();
            this.$scope.secondArmy = this.$scope.firstArmy;
        }
    }

    export module SkirmishSetupController {
        export interface IRouteParams {
            id: string;
        }

        export interface IScope {
            armies: Array<App.Model.IArmy>;
            skirmishId: string;
            firstArmy: number;
            secondArmy: number;
        }
    }
}

App.Ng.module.controller(
    App.Ng.SkirmishSetupController.NAME,
    [
        '$scope',
        '$routeParams',
        App.Ng.ArmyCache.NAME,
        App.Ng.SkirmishSetupController]
);
