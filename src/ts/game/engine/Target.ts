namespace App.Game.Engine {

    export enum TargetType {
        SPACE, FIGURE
    }

    export abstract class AbilityTarget {
        public readonly x: number;
        public readonly y: number;
        public readonly type: TargetType;

        constructor(x: number, y: number, type: TargetType) {
            this.x = x;
            this.y = y;
            this.type = type;
        }
    }

    export class UnitTarget extends AbilityTarget {

        public readonly unit: Unit;

        constructor(unit: Unit) {
            super(unit.x, unit.y, TargetType.FIGURE);
            this.unit = unit;
        }
    }

    export class SpaceTarget extends AbilityTarget {

        public readonly space: Space;

        constructor(space: Space) {
            super(space.x, space.y, TargetType.SPACE);
            this.space = space;
        }
    }
}