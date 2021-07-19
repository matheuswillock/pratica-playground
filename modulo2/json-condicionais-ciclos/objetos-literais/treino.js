function Ninja(nomeNinja, classeNinja, aldeiaNinja, statusNinja) {
    this.nome = nomeNinja;
    this.classe = classeNinja;
    this.aldeia = aldeiaNinja;
    this.status = statusNinja;
}

let naruto = new Ninja('Naruto', 'Ninjutsu/taijutsu', 'Konoha', 'Hokage')
// console.log(naruto)
let sasuke = new Ninja('Sasuke', 'Ninjutsu/taijutsu/Genjutsu', 'Konoha', 'Hokage das sombras')
// console.log(sasuke)
let sakura = new Ninja('Sakura', 'Ninjutsu/taijutsu', 'Konoha', 'Diretora médica de Konoha')
// console.log(sakura)
let kakashi = new Ninja('Kakashi', 'Ninjutsu', 'Konoha', 'Hokage (aposentado)')
// console.log(kakashi)
let minato = new Ninja('minato', 'Ninjutsu', 'Konoha', 'Hokage (falecido)')
// console.log(minato)
let shikamaru = new Ninja('Shikamaru', 'Ninjutsu', 'Konoha', 'Conselheiro do Hokage')
// console.log(shikamaru)

const ninjasKonoha = [naruto, sasuke, shikamaru, kakashi, sakura, minato]

console.log(ninjasKonoha)

