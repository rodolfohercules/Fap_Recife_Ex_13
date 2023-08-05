const prompt = require(`prompt-sync`)();

const name = prompt('Insira seu nome completo: ');
let ageYearOfBirth = parseInt(prompt('Insira seu ano de nascimento: '));

while (true) {
    try {
        if (ageYearOfBirth == ``) throw 'Está vazio';
        if (isNaN(ageYearOfBirth)) throw 'Não é um número';
        if (ageYearOfBirth < 1922 || ageYearOfBirth > 2021) throw 'Ano de nascimento inválido';
        break;
    }
    catch (err) {
        console.log(err);
    }
    ageYearOfBirth = parseInt(prompt('Insira seu ano de nascimento: '));
}

const ageNextYear = (ageYearOfBirth - 2022);
console.log(`Seu nome é ${name} e você completará ${ageNextYear} anos em 2022.`);
