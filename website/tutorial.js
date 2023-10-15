let items = (2 + 2);
let item_cost = (2095 * 2) + (799 * 2);
let shipping = (499 + 499);
let sub_total = item_cost + shipping;
let tax = Math.round(sub_total * 0.1);
let total = sub_total + tax;
  /* this 
  is a multi-line 
  comment
  */

  // this is a sigal line comment

console.log(
`Items ${items}: $${item_cost / 100}
Shipping: $${shipping / 100}
Sub-total: $${sub_total / 100}
Estimated Tax: $${tax / 100}
Order Total: $${total / 100}
`);
