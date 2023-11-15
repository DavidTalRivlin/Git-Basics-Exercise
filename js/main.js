function onBallClick(elBall,max) {
      var ballSize = elBall.offsetHeight

      if (ballSize > max) {
            elBall.style.height = '100px'
            elBall.innerText = '100'
      } else {
            var num = getRandomIntInclusive(20,61)
            elBall.style.height = `${ballSize + num}px`
            elBall.innerText = `${ballSize + num}`
            elBall.style.backgroundColor = (getRandomColor())
      }
}

