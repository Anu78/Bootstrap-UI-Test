var span_text = document.getElementById("notif_count");
var notif_count = 10;
var notif_label = document.getElementById("notif_label");

function increment_notif() {
  notif_count++;
  span_text.textContent = notif_count.toString();
  notif_label.textContent = "You have " + notif_count.toString() + " unread notifications";
}

function showNotifications() {
  console.log("You have " + notif_count + " unread notifications");
}
