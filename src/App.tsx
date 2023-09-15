import Logo from './components/common/logo'
import Container from './components/common/container'
import Tooltip from './components/common/tooltip'

function App() {
  return (
    <Container>
      <Logo />
      <>
        <Tooltip text="This is a tooltip">
          <button>Hover me</button>
        </Tooltip>
        <Tooltip text="This is a tooltip">
          <div>Hover me</div>
        </Tooltip>
      </>
      <>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore.</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore.</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore.</h3>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore.</h4>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore.</h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore.</h6>
      </>
      <>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vero facilis aliquid ducimus magni quasi blanditiis adipisci suscipit cupiditate quos.</p>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        <br />
        <dt>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci esse reiciendis, nisi tenetur nam quibusdam ex vitae fugiat sequi dicta itaque exercitationem fugit dolores harum cupiditate nostrum ipsa vel nihil.</dt>
        <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla quas officia! Unde saepe necessitatibus sequi quas rerum aliquid natus distinctio alias placeat? Deleniti rerum explicabo aliquam, illum iste nesciunt.</dd>
        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam magni velit.</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti magni tenetur placeat necessitatibus. Eius deserunt dignissimos odit magnam provident sunt fuga consequuntur iure. Accusantium dicta earum tenetur sunt modi. </p>
      </>
    </Container>
  )
}

export default App
