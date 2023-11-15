function onBallClick(elBall) {
      var ballSize = elBall.offsetHeight

      if (ballSize > 350) {
            elBall.style.height = '100px'
            elBall.innerText = '100'
      } else {
            elBall.style.height = `${ballSize + 50}px`
            elBall.innerText = `${ballSize + 50}`
      }
}