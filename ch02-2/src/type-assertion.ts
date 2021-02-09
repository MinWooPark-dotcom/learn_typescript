// import INameable from './INameable'
interface INameable {
    name: string
};

let obj: object = {name: 'Jack'}

let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2) 