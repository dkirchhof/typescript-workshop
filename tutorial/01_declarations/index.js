// 'param' is defined but never used
function fun(param) {

  // 'one' is assigned a value but never used
  var one = '1'

  // Unexpected constant condition
  // Expected a conditional expression and instead saw an assignment
  // 'three' is not defined => Laufzeitfehler
  if (three = '3') {

    // 'four' is assigned a value but never used
    var four = '4'
  }
}

fun('2')
