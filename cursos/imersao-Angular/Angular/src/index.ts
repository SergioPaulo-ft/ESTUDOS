
// objetos
let produto:   object = {
    name: "Sergio",
    cidade: "Santo André",
    idade: 22,
};

// declara os tipos de variáveis
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

// usa modelo de tipos para criar essa variável
let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 99.90,
    unidades: 5,
};

// usando arrays
let dados: string[] = ["Sergio", "felipe", "zeca"];
let dados2: Array<string> = [];
let infos: (string | number)[] = ["Sergio", 22, "Santo André - SP"];

// Tuplas: te obriga a respeitar a ordem dos tipos respectivamente
let boleto: [string, number, number] = ["agua conta", 199.9, 32313215];

// usa as mesma propiedades do js
const metodo = infos.map((item) => item);

// date
let aniversario: Date = new Date("2024-04-18 06:00");
console.log(aniversario.toString());

// funções
function addNumber(x: number, y: number): number {
    return x + y;
}
let soma: number = addNumber(5, 10);

// função assíncrona
async function getDatabase(id: number): Promise<string> {
    return "sergião" + id;
}

// interfaces
interface Robot {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot: Robot = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    },
};

class Pessoa implements Robot {
    id: number | string;
    name: string;

    constructor(id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `Hello, I'm ${this.name}`;
    }
}

const p = new Pessoa(1, "Spdograu");
console.log(p.sayHello());

// classes
//superclass = classe pai
class Character {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`attack with ${this.strength} points`);
    }
}

//Subclass = classe filha 
class Magician extends Character{
    magicPoints:number;
    constructor(
        name: string, 
        strength: number, 
        skill: number,
        magicPoints:number
    ){
        //super(chama classe pai)
        super(name,strength,skill) 
        this.magicPoints = magicPoints;
    }
}


const p1 = new Character("eu", 98, 5);

const p2 = new Magician("Mago", 29, 30,100);
p1.attack()


//modificadores de acesso ::::::::::::::::::
/*
    data modifiers
    public
    private
    protected
*/

//generic <T> =  deixo uma tipagem dinamica que eu possa modificar posteriormente 
function concatArray<T>(...itens: T[]): T[] { 
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([2,1,5,8,74,8,9],[1,2,3,4,5,6],[45,45,6848,4]);
const stgArray = concatArray<string[]>(["sdfsdfs"],["sdkhsd dddd"],["ddfdkljkljo"]);

console.log(numArray);
console.log(stgArray);

//decorators

function ExibirNome(target:any){
    console.log(target);
}

@ExibirNome
class Funcionarios {}

function minLength(length:number){
    return (target:any, key:string)=>{
        console.log(target[key])
 
    }
}
class Api{
    @minLength(3)
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

const api = new Api("Eu mesmo");
