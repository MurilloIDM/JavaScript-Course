let tvUm = {
    marca: "LG",
    modelo: "18ATD45",
    tamanho: "55\'",
    valor: 3450.00,
    tvOn: function(estado) {
        if (estado == 1) {
            return 'Bem vindo ao Sistema LG Entrenenimento! Aproveite..';
        } else {
            return 'Ligue sua tevelisão';
        }
    }
};

tvUm.marca = 'Toshiba';
console.log(tvUm.marca);

