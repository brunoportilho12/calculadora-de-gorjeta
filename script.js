function calculateTip(event) {
    event.preventDefault(); 
    const bill = parseFloat(document.getElementById('bill').value);
    const quality = parseFloat(document.getElementById('qualidade').value);
    const people = parseInt(document.getElementById('people').value);
    const tip = (bill * quality) / people;
    document.getElementById('tip').innerText = tip.toFixed(2);
    document.getElementById('total').style.display = 'block';
    document.getElementById('each').style.display = 'block';
  }
  
     
     document.getElementById('tipsForm').addEventListener('submit', calculateTip);
