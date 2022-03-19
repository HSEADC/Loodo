document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    console.log('Connecting...')
    const iframes = document.getElementsByTagName('iframe')
    console.log(iframes)
    iframes[0].contentWindow.postMessage('hello there!', '*')
  }, 3000)

  window.addEventListener(
    'message',
    (event) => {
      const { type, data } = event.data

      if (type === 'Connection done') {
        console.log('Connection done')
      } else if (type === 'synth started') {
        console.log('synth started')

        // const container = document.getElementsByClassName(
        //   'interactive_module_1'
        // )[0]
        //
        // const error = document.createElement('div')
        // error.classList.add('error')
        // error.innerText = 'synth started, you gained 1 point'
        // container.appendChild(error)
      } else if (type === 'success') {
        console.log('You done the task succesefully')

        const container = document.getElementsByClassName('support_module')[0]

        container.innerHTML = ''

        console.log(data)

        const success = document.createElement('div')
        success.classList.add('SuccessBlock')
        success.innerText = 'Молодец! ты заработал ' + data.points + ' очков'
        container.appendChild(success)
      } else if (type === '') {
      }
    },
    false
  )
})
