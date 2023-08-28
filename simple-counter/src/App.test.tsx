import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('counter starts at 0', () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘리멘트에 접근
  const counterEle = screen.getByTestId('counter');
  // id가 count인 ele의 text가 0인지 확인
  expect(counterEle).toHaveTextContent('0');
});

test('minus button has correct text', () => {
  render(<App />);
  const minusEle = screen.getByTestId('minus-button');
  expect(minusEle).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);
  const plusEle = screen.getByTestId('plus-button');
  expect(plusEle).toHaveTextContent('+');
});

test('when plus button is clicked, counter increases', () => {
  render(<App />);
  const plusEle = screen.getByTestId('plus-button');
  fireEvent.click(plusEle);
  const counterEle = screen.getByTestId('counter');
  expect(counterEle).toHaveTextContent('1');
});

test('when minus button is clicked, counter decreases', () => {
  render(<App />);
  const minusEle = screen.getByTestId('minus-button');
  fireEvent.click(minusEle);
  const counterEle = screen.getByTestId('counter');
  expect(counterEle).toHaveTextContent('-1');
});

test('on/off button has blue color', () => {
  render(<App />);
  const onOffEle = screen.getByTestId('on/off-button');
  expect(onOffEle).toHaveStyle('background-color: blue');
});

test('Prevent the -,+ button from being clicked when the on/off button is clicked', () => {
  render(<App />);
  const onOffEle = screen.getByTestId('on/off-button');
  fireEvent.click(onOffEle);
  const plusEle = screen.getByTestId('plus-button');
  expect(plusEle).toBeDisabled();
});
