const timeElement = document.getElementById("clock");
  const timeIntro = document.getElementById("clock").innerText
  function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Format the string with leading zeroes
      const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      const day = now.getDay()
      const month = now.getMonth()
      const date = now.getDate()
      const year = now.getFullYear()
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      let intro = ""
      if (hours < 12) {
        intro = "good morning, it is"
      }
      else if (hours >= 12 && hours < 19) {
        intro ="good afternoon, it is"
      }
      else {
        intro = "good evening, it is"
      }

      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      timeElement.innerText = `${intro} ${days[day]} on ${months[month]} ${date}, ${year}, and the time is ${clockStr}.`
  }
  const perf = () => {
    const duration = performance.getEntriesByType("navigation")[0].duration;
    if (!duration) setTimeout(perf, 0);
    else document.getElementById("loading-time").innerText = `||| Page loaded in ${Math.round(duration * 10) / 10} ms.`;
  }

  window.addEventListener('DOMContentLoaded', perf);

  
  updateTime();
  setInterval(updateTime, 1000);