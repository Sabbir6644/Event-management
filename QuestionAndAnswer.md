###### Question 1

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined

<i>When you try to log greetign to the console, JavaScript encounters an error because it doesn't recognize greetign as a defined variable. The correct variable name is greeting, and since you didn't assign any value to it, it remains undefined.</i>

</p>
</details>

###### Question 2

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  C: `"12"`

<i>The first argument, 1, is a number.
The second argument, "2", is a string.
JavaScript tries to perform type coercion to make both operands compatible for addition. It converts the number 1 to a string and then concatenates the two strings. As a result, string "12" as the output, not a numerical sum.</i>

</p>
</details>

###### Question 3

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>An array food is defined with four emoji elements.
An object info is created with a property favoriteFood assigned the value of the first element of the food array, which is "🍕".
Then, the line info.favoriteFood = "🍝" updates the value of the favoriteFood property of the info object to "🍝". However, this update does not affect the original food array.

So, when you console.log(food), it will output the original array, which is A: ['🍕', '🍫', '🥑', '🍔']. There is no change to the food array in this code snippet.
</i>

</p>
</details>

###### Question 4

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>There is a function sayHi(name) that takes a parameter name and returns a string with a greeting.
The function is called with sayHi() without providing any argument.
When you call a function with missing arguments, like sayHi() without providing a name, the parameter name inside the function becomes undefined. Therefore, the function returns a string that includes undefined, resulting in the output "Hi there, undefined" when you console.log the result.</i>

</p>
</details>

###### Question 5

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>For the first element, num is 0, which is falsy, so the condition is not met, and count remains 0.
For the second element, num is 1, which is truthy, so the condition is met, and count is incremented by 1, becoming 1.
For the third element, num is 2, which is also truthy, so count is again incremented by 1, becoming 2.
For the fourth element, num is 3, which is also truthy, so count is incremented by 1 once more, becoming 3.
After all iterations, the value of count is 3, so when you console.log(count), it will output 3.
</i>

</p>
</details>
