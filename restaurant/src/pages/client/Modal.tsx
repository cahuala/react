type ModalProps={
	modalData:Food;
	modalQuantity:number;
	handleSizeChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
	deductModalQty: (event: React.MouseEvent<HTMLButtonElement>) => void;
	addModalQty:(event: React.MouseEvent<HTMLButtonElement>) => void;
	addToCart:(event: React.MouseEvent<HTMLButtonElement>) => void;
	handleAddonChange:(event: React.MouseEvent<HTMLButtonElement>) => void;
}
type Food = {
	id?: string;
	name?: string;
	title?:string;
	description?: string;
	price?: number;
	available?: boolean;
	type?: string;
	image?: string;
	hide?: boolean;
	size?: string;
	options?:optionsModal;
};

type optionsModal={
	size:Size[]
	addon:Addon[]
}
type Size={
	text?:string
	price?:number
}
type Addon={
	text?:string
	price?:number
}
export function ModalOrder({ modalData, modalQuantity,
	deductModalQty,addModalQty,
	addToCart, handleSizeChange,
	handleAddonChange}:ModalProps) {
	return (
		<div className="modal modal-pos fade" id="modalPosItem">
		<div className="modal-dialog modal-lg">
			<div className="modal-content border-0">
				{modalData && (
					<div>
						<div className="p-0">
							<button data-bs-dismiss="modal" className="btn-close position-absolute top-0 end-0 m-4">&nbsp;</button>
							<div className="modal-pos-product">
								<div className="modal-pos-product-img">
									<div className="img" style={{backgroundImage: 'url('+ modalData.image +')'}}></div>
								</div>
								<div className="modal-pos-product-info">
									<div className="fs-4 fw-bold">{ modalData?.title }</div>
									<div className="fs-6 text-body text-opacity-50 mb-2">
										{ modalData.description }
									</div>
									<div className="fs-3 fw-bolder mb-3">{ modalData.price }</div>
									<div className="option-row">
										<div className="d-flex mb-3">
											<button className="btn btn-default d-flex align-items-center" onClick={(event) => deductModalQty(event)}><i className="fa fa-minus"></i></button>
											<input type="text" className="form-control w-30px fw-bold fs-5 px-0 mx-2 text-center border-0" name="qty" value={modalQuantity} readOnly />
											<button className="btn btn-default d-flex align-items-center" onClick={(event) => addModalQty(event)}><i className="fa fa-plus"></i></button>
										</div>
									</div>
									<hr />
									{modalData && modalData.options && modalData.options.size && (
										<div className="mb-2">
											<div className="fw-bold">Size:</div>
											<div className="option-list">
												{modalData.options.size.map((size, index) => (
													<div className="option" key={index}>
														<input type="radio" id={'size' + index} name="size" className="option-input" defaultValue={size.text} onChange={(event:any) => handleSizeChange(event)} defaultChecked={((index === 0) ? true : false)} />
														<label className="option-label" htmlFor={'size' + index}>
															<span className="option-text">{size.text}</span>
															<span className="option-price">+{size.price}</span>
														</label>
													</div>
												))}
											</div>
										</div>
									)}
									{modalData && modalData.options && modalData.options.addon && (
										<div className="mb-2">
											<div className="fw-bold">Add On:</div>
											<div className="option-list">
												{modalData.options.addon.map((addon, index) => (
													<div className="option" key={index}>
														<input type="checkbox" name="addon" className="option-input" onChange={(event:any) => handleAddonChange(event)} value={addon.text} id={'addon'+ index} />
														<label className="option-label" htmlFor={'addon'+ index}>
															<span className="option-text">{addon.text}</span>
															<span className="option-price">+{addon.price}</span>
														</label>
													</div>
												))}
											</div>
										</div>
									)}
									<hr />
									
									<div className="row gx-3">
										<div className="col-4">
											<a href="#/" className="btn btn-default fs-14px rounded-3 fw-bold mb-0 d-block py-3" data-bs-dismiss="modal">Cancelar</a>
										</div>
										<div className="col-8">
											<a href="#/" className="btn btn-theme fs-14px rounded-3 fw-bold d-flex justify-content-center align-items-center py-3 m-0" onClick={(event:any) => addToCart(event)}>Add to cart <i className="fa fa-plus ms-3"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	</div>
	)
}
