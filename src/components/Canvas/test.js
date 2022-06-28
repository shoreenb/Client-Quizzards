import './'
import './Hooks';
import 'index.js';
import Canvas from './index';




it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Canvas></Canvas>, div)
})

describe('body', () => {
    it('modal has a title', () => {
      let heading = document.getElementsByClassName('modal-title')
      expect(heading).toBeTruthy()
    })

    it('canvas is present', () => {
        const login = document.querySelector('canvas')
        const div = document.createElement("div");
        ReactDOM.render(<Canvas></Canvas>)
        // expect(login.textContent).toContain('canvas')
    })
})