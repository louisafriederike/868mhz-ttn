      var audio = document.getElementById("myAudio");
      const audioSource = document.getElementById("audioSource");
      var progressBarFill = document.querySelector(".custom-progress-bar-fill");
      var codeWordInput = document.getElementById("codeWordInput");
      var isPlaying = false;

      function togglePlay() {
          if (isPlaying) {
              stopAudio();
          } else {
              playAudio();
          }
      }

      function playAudio() {
          isPlaying = true;
          audio.play();
          updatePlayButtonText();
      }

      function stopAudio() {
          isPlaying = false;
          audio.pause();
          updatePlayButtonText();
      }

      function updatePlayButtonText() {
          var playButton = document.getElementById("startButton");
          playButton.textContent = isPlaying ? "⏸" : "⏵";
      }

      function replayAudio() {
          audio.currentTime = 0;
          playAudio();
      }

      function seek(event) {
          var percent = event.offsetX / this.offsetWidth;
          audio.currentTime = percent * audio.duration;
      }

          audio.addEventListener("timeupdate", function() {
          var progress = (audio.currentTime / audio.duration) * 100;
          progressBarFill.style.width = progress + "%";
      });

      audio.addEventListener("ended", function() {
          isPlaying = false;
          updatePlayButtonText();
      });
    function loadAudio(src) {
        audioSource.src = src;
        audio.load(); // Reloads new audio source
        audio.play();
        isPlaying = true;
        updatePlayButtonText();
    }