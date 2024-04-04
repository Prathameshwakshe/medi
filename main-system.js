var customerCount = 0;
var totalSale = 0;
var todaySale = 0;

function addMedicine() {
  var name = document.getElementById("medicineName").value;
  var Quantity = document.getElementById("medicineQuantity").value;
  var frequency = document.getElementById("medicineDate").value;
  var Customer = document.getElementById("CustomerName").value;
  var saleAmount = parseFloat(document.getElementById("saleAmount").value);
  var medicineItem = document.createElement("li");
  var CustomerName = document.createElement("li");
  medicineItem.textContent = name + " - Quantity " + Quantity + " Date " + frequency;
  CustomerName.textContent = Customer;
  document.getElementById("medicineList").appendChild(medicineItem);
  document.getElementById("Customer-List").appendChild(CustomerName);

  totalSale += saleAmount;
  todaySale += saleAmount;
  customerCount++; // Increment customer count

  updateCustomerCount();
  updateTotalSale();
  updateTodaySale();

  document.getElementById("medicineForm").reset();
}

function updateCustomerCount() {
  document.getElementById("customerCount").textContent = "Total Customers: " + customerCount;
}

function updateTotalSale() {
  document.getElementById("totalSale").textContent = "Total Sale: ₹" + totalSale.toFixed(2);
}

function updateTodaySale() {
  document.getElementById("todaySale").textContent = "Today's Sale: ₹" + todaySale.toFixed(2);
}
