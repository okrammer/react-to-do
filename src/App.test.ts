import ReactDOM from 'react-dom';
import AppStore from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppStore / >, div);
    ReactDOM.unmountComponentAtNode(div);
});
