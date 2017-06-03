var notAPrimitive = {property1:"foo",
                     property2:5,
                     anotherObject:{propertyA:"I am nested"}
                    }; //Fancy Object Literal Notation

document.getElementById("result1").textContent = typeof(notAPrimitive);
document.getElementById("result2").textContent = typeof(notAPrimitive.property1);
document.getElementById("result3").textContent = typeof(notAPrimitive.property2);
document.getElementById("result4").textContent = typeof(notAPrimitive.anotherObject);