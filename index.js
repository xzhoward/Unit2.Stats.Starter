function calculateStats() {
  let input = document.getElementById("numberInput").value;
  
  if (!input) {
      alert("Please enter some numbers.");
      return;
  }

  let numbers = input.split(',').map(num => Number(num.trim())).filter(num => !isNaN(num));

  if (numbers.length === 0) {
      alert("Invalid input. Please enter valid numbers.");
      return;
  }

  let sum = 0, min = numbers[0], max = numbers[0];

  for (let num of numbers) {
      sum += num;
      if (num < min) min = num;
      if (num > max) max = num;
  }

  let avg = sum / numbers.length;

  document.getElementById("results").innerHTML = `
      <p><strong>Sum:</strong> ${sum}</p>
      <p><strong>Average:</strong> ${avg.toFixed(2)}</p>
      <p><strong>Minimum:</strong> ${min}</p>
      <p><strong>Maximum:</strong> ${max}</p>
  `;
}
