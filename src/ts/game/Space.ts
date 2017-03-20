namespace App.Game {

    export enum Border {
        NONE,
        WALL,
        BLOCKING,
        DIFFICULT,
        IMPASSABLE
    }

    export class Space {
        public readonly top: Border;
        public readonly left: Border;
        public readonly bottom: Border;
        public readonly right: Border;
        public readonly terrain: string;
        public readonly x: number;
        public readonly y: number;
        public readonly rotation: number;
        public readonly deploymentZoneColor: string | null;

        constructor(
            x: number,
            y: number,
            topBorder: string,
            leftBorder: string,
            bottomBorder: string,
            rightBorder: string,
            rotation: number,
            terrain: string,
            deploymentZoneColor: string | null) {

            this.x = x;
            this.y = y;
            this.terrain = terrain;
            this.top = this.toBorder(topBorder);
            this.left = this.toBorder(leftBorder);
            this.bottom = this.toBorder(bottomBorder);
            this.right = this.toBorder(rightBorder);
            this.rotation = rotation;
            this.deploymentZoneColor = deploymentZoneColor;
        }

        private toBorder(value: string): Border {

            if (!value) {
                return Border.NONE;
            }

            switch (value) {
                case "wall":
                    return Border.WALL;
                case "blocking_terrain":
                    return Border.BLOCKING;
                case "difficult_terrain":
                    return Border.DIFFICULT;
                case "impassable_terrain":
                    return Border.IMPASSABLE;
            }
            throw new Error(`Unknown border; ${value}`);
        }
    }
}