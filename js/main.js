function onBallClick(elBall) {
      var ballSize = elBall.offsetHeight
        
    elBall.style.height = `${ballSize+50}px`
    elBall.innerText = `${ballSize+50}`   
}