document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    console.log('message sent')
    const iframes = document.getElementsByTagName('iframe')
    console.log(iframes)
    iframes[0].contentWindow.postMessage('hello there!', '*')
  }, 3000)

  window.addEventListener(
    'message',
    (event) => {
      const { type, data } = event.data

      if (type === 'connection done') {
        console.log('connection done')
      } else if (type === 'synth started') {
        console.log('synth started')

        const container = document.getElementsByClassName(
          'interactive_module_1'
        )[0]

        const error = document.createElement('div')
        error.classList.add('error')
        error.innerText = 'synth started, you gained 1 point'
        container.appendChild(error)
      } else if (type === 'synth stopped') {
        console.log('synth stopped')

        const container = document.getElementsByClassName(
          'interactive_module_1'
        )[0]

        container.innerHTML = ''

        const success = document.createElement('div')
        success.classList.add('success')
        success.innerText = 'synth stopped'
        container.appendChild(success)
      }
    },
    false
  )
})
