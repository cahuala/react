type ContentProps = {
  tableData: TableOrder;
  showPosItemModal: (event: React.MouseEvent<HTMLButtonElement>, food: Food) => void;
}
type TableOrder ={
  id?: string
  orderId?: string
  category?: {
    type?: string | ""
    text?: string
    icon?: string
  }[]
  food?:Food[]
  order?:{}[]
  orderHistory?: string
}
type Food={
  id?: string
  title?: string
  description?: string
  price?: number
  available?: boolean
  type?: string
  image?: string
  hide?: boolean
  size?: string
}

export function Content({tableData, showPosItemModal}: ContentProps) {
  return (
    <div className="pos-content">
					<div className="pos-content-container h-100">
						<div className="product-row">
							{tableData && tableData.food ? (tableData.food.map((food:any, index) => (
								<div className={'product-container'+ ((food.hide) ? ' d-none' : '')} key={index}>
									<a href="#/" className={'product'+ ((!food.available) ? ' not-available': '')} onClick={(event:any) => showPosItemModal(event, food)}>
										<div className="img" style={{backgroundImage: 'url('+ food.image +')'}}></div>
										<div className="text">
											<div className="title">{food.title}</div>
											<div className="desc">{food.description}</div>
											<div className="price">{food.price}</div>
										</div>
										{!food.available && (<div className="not-available-text"><div>Not Available</div></div>)}
									</a>
								</div>
							))) : (
								<div className="py-3">
									No records found
								</div>
							)}
						</div>
					</div>
				</div>
  );
}