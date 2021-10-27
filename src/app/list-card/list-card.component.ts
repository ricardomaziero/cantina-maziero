import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Filtrar(tipo:string): Array<Item> {
    return this.ListaItens.filter(i => i.Categoria === tipo);
  }

  ListaItens: Array<Item> = [
    new Item("Spaghetti a Bolognese", "Spaghetti ao molho bolonhesa (carne de vaca moída, tomate e" +
    "( outros vegetais)", 20.00,"Pratos",
    "assets/img/pratos/spaghetti a bolognese.jpg"),

    new Item("Spaghetti a Carbonara", "Spaghetti ao tradicional molho carbonara" +
    "(Clássico absoluto, carbonara leva bacon, ovos, queijo parmesão"+
    ", vinho na hora de dourar o bacon.)", 22.00,"Pratos", "assets/img/pratos/spaghetti a carbonara.jpg"),

    new Item("Risoto", "Composto primordialmente por arroz, frito levemente com cebolas " +
    "(e outros legumes) na manteiga.)", 18.00,"Pratos", "assets/img/pratos/risoto.jpg"),

    new Item("Lasagna", "Tradicional massa em folhas preparada ao forno, com queijo, molho e carne", 25.00,
    "Pratos", "assets/img/pratos/lasanha.jpg"),

    new Item("Bruschetta", "Porção de entrada de pão rústico fatiado e temperado", 16.00,
    "Pratos", "assets/img/pratos/bruschetta.jpg"),

    new Item("Tortelinni", "Porção de pasteizinhos servidos com caldo de galinha ou carne de vaca", 20.00,
    "Pratos", "assets/img/pratos/tortellini.jpg"),

    new Item("Gnocchi", "Tradicional massa de batatas ao molho sugo / bolonhesa / branco", 23.00,
    "Pratos", "assets/img/pratos/gnocchi.jpg"),

    new Item("Cannolli", "Feito com uma massa doce frita, recheado com um creme a base de queijo ricota ou" +
    " mascarpone com ingredientes como baunilha, pistache, chocolate ou frutas cristalizadas", 10.00,
    "Sobremesas", "assets/img/sobremesas/cannolli.jpg"),

    new Item("Pignoli", "Preparada com pasta de amêndoas, açúcar e ovo. O diferencial está nas sementes" +
    " colocadas no topo de cada cookie, trazendo um sabor e crocância super especiais.", 8.00,
    "Sobremesas", "assets/img/sobremesas/pignoli.jpg"),

    new Item("Zeppole", "Parecida com uma rosquinha doce, os zeppole são feitos com massa choux e recheio" +
    " de creme de confeiteiro.", 12.00, "Sobremesas", "assets/img/sobremesas/zeppole.jpg"),

    new Item("Água Mineral", "Água mineral 500ml", 2.50, "Bebidas", "assets/img/bebidas/aguaMineral.jpg"),

    new Item("Coca-Cola", "Coca-Cola 350ml", 5.00, "Bebidas", "assets/img/bebidas/cocacola.jpg"),

    new Item("Fanta Laranja", "Fanta Laranja 350ml", 5.00, "Bebidas", "assets/img/bebidas/fanta.jpg"),

    new Item("Fanta Uva", "Fanta Uva 350ml", 5.00, "Bebidas", "assets/img/bebidas/fantaUva.jpg"),

    new Item("Fanta Guaraná", "Fanta Guaraná 350ml", 5.00, "Bebidas", "assets/img/bebidas/fantaGuarana.jpg"),

    new Item("Sucos Naturais", "Suco natural 500ml (consulte sabores)", 7.00, "Bebidas", "assets/img/bebidas/suco.jpg"),

    new Item("Café", "Café italiano", 2.50, "Bebidas", "assets/img/bebidas/cafe.jpg"),



    ];
}

class Item{
  Nome:string;
  Info:string;
  Valor:number;
  Categoria:string;
  IMG:string;

  constructor(Nome:string, Info:string, Valor:number, Categoria:string, IMG:string){
    this.Nome = Nome;
    this.Info = Info;
    this.Valor = Valor;
    this.Categoria = Categoria;
    this.IMG = IMG;
  }
  }

