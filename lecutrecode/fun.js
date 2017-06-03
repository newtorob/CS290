square(2);

function square(x) {
  return x * x;
}

square(8);
callSquare(10);

function callSquare(x){
    return square(x);
}