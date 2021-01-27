import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

require('dotenv').config({path:".env.dev"})
Enzyme.configure({
    adapter : new Adapter()
})