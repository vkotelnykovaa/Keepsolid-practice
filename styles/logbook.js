function saveLog() {
   const entry = document.getElementById("log-entry").value;
   const logDiv = document.getElementById("saved-logs");
    
   if (entry) {
        const logItem = document.createElement("p");
        logItem.textContent = entry;
        logDiv.appendChild(logItem);
    }
}