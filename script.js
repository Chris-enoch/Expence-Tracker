let totalBudget = 0;
let totalExpenses = 0;

document.getElementById('add-expense').addEventListener('click', function() {
    const budget = parseFloat(document.getElementById('budget').value);
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (!isNaN(budget)) {
        totalBudget = budget;
        document.getElementById('total-budget').textContent = totalBudget.toFixed(2);
    }

    if (expenseName && !isNaN(expenseAmount)) {
        totalExpenses += expenseAmount;
        document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);

        const moneyLeft = totalBudget - totalExpenses;
        document.getElementById('money-left').textContent = moneyLeft.toFixed(2);

        const savings = moneyLeft > 0 ? moneyLeft : 0;
        document.getElementById('savings').textContent = savings.toFixed(2);

        const expenseItem = document.createElement('li');
        expenseItem.textContent = `${expenseName}: ₹${expenseAmount.toFixed(2)}`;
        document.getElementById('expense-list').appendChild(expenseItem);

        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    }
});
