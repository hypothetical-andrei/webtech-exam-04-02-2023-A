import { EventEmitter } from 'fbemitter'

class ProductStore {
	constructor(){
		this.products = [{
			id : 1,
			name : 'coffee',
			price : 3
		},{
			id : 2,
			name : 'cappuccino',
			price: 3
		},{
			id : 3,
			name : 'latte',
			price: 3
		}]
		this.emitter = new EventEmitter()
	}

	getAll(){
		return this.products
	}
}

export default ProductStore