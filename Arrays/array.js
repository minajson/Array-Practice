
var player1 ={
    name: "JuanPablo",
    normKill: 5,
    assist: 12,
    damage: 300,
    healing: 0,
    streak: 4,
    envKill: 1
};

var player2 = {
    name: "Profix",
    normKill: 2,
    assist: 14,
    damage: 600,
    strak: 0,
    envkill: 0
};

function scoring(array) {
    array.forEach(player => {
        player.score =
        (player.normKill || 0) * 100 +
        (player.assist || 0) * 50 +
        (player.damage || 0) * 0.5 +
        (player.healing || 0) * 1 +
        Math.pow(2, player.dtresk || 0) +
        (player.envKill || 0) * 500;
    });
    array.sort((a, b) => b.score - a.score);
    return array.map(p => p.name);
}
console.log(scoring([player1, player2]));
