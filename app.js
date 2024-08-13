// PUT YOUR CODE HERE
let boxTl = gsap.timeline({repeat: -1, paused: true})

boxTl.from('.red', {x: -600, y: -600, duration: .8})
      .from('.green', {x: 600, y: -600, duration: .8}, '-=.3')
      .from('.blue', {x: 600, y: 600, duration: .8}, '-=.3')
      .from('.yellow', {x: -600, y: 600, duration: .8}, '-=.3')

      .to('.red', {x: '100vw', left: -200, borderRadius: '50%', backgroundColor: 'green', duration: 1})
      .to('.green', {y: '100vh', top: -200, borderRadius: '50%', backgroundColor: 'blue', duration: 1}, '<')
      .to('.blue', {x: 0, left: 0, borderRadius: '50%', backgroundColor: 'yellow', duration: 1}, '<')
      .to('.yellow', {y: 0, top: 0, borderRadius: '50%', backgroundColor: 'red', duration: 1}, '<')

      .to('.red', {left: 200})
      .to('.green', {right: -200}, '<')
      .to('.blue', {left: -200}, '<')
      .to('.yellow', {left: -200}, '<')

boxTl.play()