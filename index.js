function receivesAFunction(cb) {
    console.log(cb());
}

function returnsANamedFunction() {
    return function myNewCar() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {
    }
}
