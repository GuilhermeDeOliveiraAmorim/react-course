export default class Produto {

    #id;
    #nome;
    #preco;

    constructor(id, nome, preco) {
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }

    get id() {
        return this.#id;
    }

    get preco() {
        return this.#nome;
    }

    get nome() {
        return this.#preco;
    }

}