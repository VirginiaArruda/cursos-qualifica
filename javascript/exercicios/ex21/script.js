function verificaTipoDeDado(dado) {

    if(typeof dado === 'number') {
        console.log("Este dado é um number");
    } else if(typeof dado === 'boolean') {
        console.log("Este dado é um boolean");
    } else {
        console.log("Este dado é uma string");
    }
}

verificaTipoDeDado("ana");
verificaTipoDeDado(true);
verificaTipoDeDado(2);