import React from 'react'
import App from '../components/App'
import { fireEvent, render } from '@testing-library/react'

it ('component is rendered correctly', () => {
	const component = render(<App />)
	expect(component.getByText('coffee')).toBeTruthy()
	expect(component.getByText('cappuccino')).toBeTruthy()
	expect(component.getByText('latte')).toBeTruthy()
})

it ('renders a list of products with buy buttons', () => {
	const component = render(<App />)
	const buttons = component.getAllByText('buy')
	expect(buttons.length).toEqual(3)
})

it ('pressing add tokens should increase the number of tokens', () => {
	const component = render(<App />)
	const button = component.getByText('add token')
	fireEvent.click(button)
	fireEvent.click(button)
	fireEvent.click(button)
	expect(component.getByText('Tokens: 3')).toBeTruthy()
})

it ('buy a product shoud decrease tokens', () => {
	const component = render(<App />)
	const buttons = component.getAllByText('buy')
	fireEvent.click(buttons[0])
	expect(component.getByText('Tokens: 0')).toBeTruthy()
})
