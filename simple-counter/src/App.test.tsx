import { render, screen } from '@testing-library/react';
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
