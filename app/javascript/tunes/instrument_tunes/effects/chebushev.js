import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const chebyshevSettings = {
  wet: 0,
  order: 50,
  oversample: 'none'
}
const chebyshevNode = new Tone.Chebyshev(chebyshevSettings)

const chebyshevInstrument = {
  id: generateUniqId(),
  name: 'Chebyshev',
  type: 'Chebyshev',
  node: chebyshevNode,
  settings: chebyshevSettings
}
export { chebyshevInstrument }
