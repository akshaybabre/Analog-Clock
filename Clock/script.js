function setTime() {
    const now = new Date();
    
    // Calculate degrees for each hand
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;
  
    // Calculate degrees (accounting for previous unit's position)
    const secondsDegrees = (seconds / 60) * 360;
    const minutesDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hoursDegrees = ((hours + minutes / 60) / 12) * 360;
  
    // Update hand positions
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
  
    // Apply transforms
    secondHand.style.transform = `translate(-50%, 0) rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `translate(-50%, 0) rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `translate(-50%, 0) rotate(${hoursDegrees}deg)`;
    
    // Update digital time
    const digitalTime = document.querySelector('.digital-time');
    digitalTime.textContent = now.toLocaleTimeString();
  }
  
  // Initial call
  setTime();
  
  // Update every second
  setInterval(setTime, 1000);