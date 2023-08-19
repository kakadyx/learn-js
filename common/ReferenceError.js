// примеры появления ReferenceError
{
    console.log(arbuz); // т.к. у нас не объявлен arbuz выпадает ReferenceError
}

{
    function abrikos () {
        console.log(blitz);
    }
    abrikos() // выпадает RefError, т.к. на момент вызова функции переменная blitz ещё не объявлена
    let blitz;
}

{
    console.log(a); // RefError при любом объявлении кроме var
    let a = 1;
}

{
    {
        const a = 15;
    }
    console.log(a) // тоже RefError, т.к. a не существует в данном блоке
}