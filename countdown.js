const countdownDate = new Date('October 20, 2023 00:00:00').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  if (days==-1){
    document.getElementById('days').textContent="শুভ ষষ্ঠী";
    document.getElementById('day').textContent="শারদীয়ার প্রীতি ও শুভেচ্ছা";
  }
  else if (days==-2){
    document.getElementById('days').textContent="শুভ মহাসপ্তমী";
    document.getElementById('day').textContent="শারদীয়ার প্রীতি ও শুভেচ্ছা";
  }
  else if (days==-3){
    document.getElementById('days').textContent="শুভ মহাষ্টমী";
    document.getElementById('day').textContent="শারদীয়ার প্রীতি ও শুভেচ্ছা";
  }
  else if (days==-4){
    document.getElementById('days').textContent="শুভ মহানবমী";
    document.getElementById('day').textContent="শারদীয়ার প্রীতি ও শুভেচ্ছা";
  }
  else if (days==-5){
    document.getElementById('days').textContent="শুভ বিজয়া";
    document.getElementById('day').textContent="শারদীয়ার প্রীতি ও শুভেচ্ছা";
  }
  else{
    document.getElementById('days').textContent = days;
  if (days<2){
    document.getElementById('day').textContent="Day";
  }
  else{
    document.getElementById('day').textContent="Days";
  }
  document.getElementById('hours').textContent = hours;
  if (hours<2){
    document.getElementById('hrs').textContent="Hour";
  }
  else{
    document.getElementById('hrs').textContent="Hours";
  }
  document.getElementById('minutes').textContent = minutes;
  if (minutes<2){
    document.getElementById('min').textContent="Minute";
  }
  else{
    document.getElementById('min').textContent="Minutes";
  }
  document.getElementById('seconds').textContent = seconds;
  if (seconds<2){
    document.getElementById('secs').textContent="Second";
  }
  else{
    document.getElementById('secs').textContent="Seconds";
  }
  }
};

updateCountdown();
setInterval(updateCountdown, 1000);
