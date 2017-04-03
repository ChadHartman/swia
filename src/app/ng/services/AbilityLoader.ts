namespace App.Ng {

    export class AbilityLoader {

        public static readonly NAME = "abilityLoader";

        public loadRequestListener: AbilityLoader.IRequestListener | null;

        constructor() {
            this.loadRequestListener = null;
        }

        public load(id: string): boolean {
            if (this.loadRequestListener === null) {
                throw new Error('loadRequestListener not set')
            }
            return this.loadRequestListener.requestScript(`/assets/js/ability/${id}.js`);
        }
    }

    export module AbilityLoader {
        export interface IRequestListener {
            requestScript(src: string): boolean;
        }
    }
}

App.Ng.module.factory(App.Ng.AbilityLoader.NAME, [
    function () {
        return new App.Ng.AbilityLoader();
    }]
);