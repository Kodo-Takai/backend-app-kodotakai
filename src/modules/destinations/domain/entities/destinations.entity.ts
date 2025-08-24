export class DestinationsEntity {
    constructor(
        public id:string,
        public name:string,
        public description:string,
        public location:string,
        public latitude:number,
        public longitude:number,
        public createdAt:Date,
        public updatedAt:Date|null
    ){}
}