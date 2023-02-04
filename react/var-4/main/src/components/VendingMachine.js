import { useState, useEffect } from 'react'
import Product from './Product'
import ProductStore from '../stores/ProductStore'

const store = new ProductStore()

const VendingMachine = () => {
	const [products, setProducts] = useState([])
	const [tokens, setTokens] = useState(0)

	const addToken = () => {
	}

	const buyProduct = (price) => {
	}

	useEffect(() => {
	}, [])

	return (
		<div>
			{products.map((el, index) => <Product key={index} name={el.name} price={el.price} onBuy={buyProduct}  />)}
			<div>Tokens: {tokens}</div>
			<input type="button" value="add token" onClick={addToken} />
		</div>
	)
}

export default VendingMachine