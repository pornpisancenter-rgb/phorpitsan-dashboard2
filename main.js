let totalSales = 0, cash = 0, transfer = 0, debt = 0;

salesData.forEach(d => {
  cash += d.cash;
  transfer += d.transfer;
  debt += d.debt;
  totalSales += d.cash + d.transfer;
});

document.getElementById('totalSales').innerText = totalSales;
document.getElementById('cash').innerText = cash;
document.getElementById('transfer').innerText = transfer;
document.getElementById('debt').innerText = debt;

new Chart(document.getElementById('salesChart'), {
  type: 'bar',
  data: {
    labels: salesData.map(d => d.date),
    datasets: [{
      label: 'ยอดขาย',
      data: salesData.map(d => d.cash + d.transfer)
    }]
  }
});
