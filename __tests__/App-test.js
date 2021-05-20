import mockStore from 'redux-mock-store';
import * as actions from '../store/BooksActions';
import { AddNewBook } from '../screens/addNewBook';
import { App } from '../App';
import { render, fireEvent, getByTestId} from 'react-testing-library';

const store = mockStore();
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  store.clearActions();

});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Adding a new book in store updates the store', () => {

  const mockBook = {
      "Name": "This is a test name",
      "Description": "This is a test description",
  }
  store.dispatch(actions.addBook(mockBook));
  expect(store.getActions()).toMatchSnapshot();
});

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));


it("Changing a name via the input field changes the name state value", () => {
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];

  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  afterEach(() => {
    jest.clearAllMocks();
  });

  const { container, rerender } = render(<AddNewBook />);
  const inputName = getByTestId(container, "inputName");
  const newName = "New One";
  fireEvent.change(inputName, { target: { value: newName } });
  expect(setState).toHaveBeenCalledWith(newName);

  rerender(<App />);
});

// User Interation TEst

test('after adding new book, input values erase, and are empty', () => {
  const { container } = render(
    <AddNewBook />
  );

  fireEvent.changeText(
    getByPlaceholder('Add book name'),
    'Book name test'
  );
  fireEvent.changeText(
    getByPlaceholder('Add book description'),
    'My oook description'
  );
  fireEvent.press(addNewBookButton('addNewBookButton'));

  const inputName = getByPlaceholder('Add book name');
  const inputName1 = getByPlaceholder('Add book description'),;

  expect(inputName).toHaveLenght(0);
  expect(inputName1).toHaveLenght(0);

});