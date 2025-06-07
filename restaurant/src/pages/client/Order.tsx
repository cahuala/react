/** @format */

import PerfectScrollbar from 'react-perfect-scrollbar';
type OrderProps = {
	tableData: TableOrder;
	dismissMobileSidebar: (event?: React.MouseEvent) => void;
	orderData: Order[];
	toggleConfirmation: (
		event: React.MouseEvent<HTMLButtonElement>,
		id: string,
		confirmation: boolean
	) => void;
	getSubTotalPrice: () => string;
	getTaxesPrice: () => string;
	getTotalPrice: () => string;
	addQty: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
	removeOrder: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
	getOrderTotal: () => number;
	getOrderHistoryTotal: () => number;
	deductQty: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
};
type TableOrder = {
	id?: string;
	orderId?: string;
	tableNo?: string;
	orderNo?: string;
	category?: {
		type?: string | '';
		text?: string;
		icon?: string;
	}[];
	food?: Food[];
	order?: {}[];
	orderHistory?: string;
};
type Food = {
	id?: string;
	name?: string;
	description?: string;
	price?: number;
	available?: boolean;
	type?: string;
	image?: string;
	hide?: boolean;
	size?: string;
};
type Order = {
	id?: string;
	orderId?: string;
	price?: number;
	food?: Food[];
	orderHistory?: string;
	quantity?: number;
}[];

export function Order({
	tableData,
	dismissMobileSidebar,
	orderData,
	toggleConfirmation,
	getSubTotalPrice,
	getTaxesPrice,
	getTotalPrice,
	addQty,
	removeOrder,
	deductQty,
	getOrderTotal,
	getOrderHistoryTotal,
}: OrderProps) {
	return (
		<div className="pos-sidebar" id="pos-sidebar">
			<div className="h-100 d-flex flex-column p-0">
				<div className="pos-sidebar-header">
					<div className="back-btn">
						<button
							type="button"
							onClick={dismissMobileSidebar}
							className="btn">
							<i className="fa fa-chevron-left"></i>
						</button>
					</div>
					<div className="icon">
						<i className="fa fa-plate-wheat"></i>
					</div>
					<div className="title">
						Mesa {tableData && tableData?.tableNo && tableData?.tableNo}
					</div>
					<div className="order">
						Pedido:{' '}
						<b>{tableData && tableData?.orderNo && tableData?.orderNo}</b>
					</div>
				</div>

				<div className="pos-sidebar-nav">
					<ul className="nav nav-tabs nav-fill">
						<li className="nav-item">
							<a
								className="nav-link active"
								href="#/"
								data-bs-toggle="tab"
								data-bs-target="#newOrderTab">
								Novo Pedido ({getOrderTotal()})
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="#/"
								data-bs-toggle="tab"
								data-bs-target="#orderHistoryTab">
								Histórico de Pedidos ({getOrderHistoryTotal()})
							</a>
						</li>
					</ul>
				</div>

				<PerfectScrollbar className="pos-sidebar-body tab-content h-100">
					<div className="tab-pane fade h-100 show active" id="newOrderTab">
						{orderData && orderData.length > 0 ? (
							<div className="pos-table">
								{orderData.map((order: any, index) => (
									<div className="row pos-table-row" key={index}>
										<div className="col-9">
											<div className="pos-product-thumb">
												<div
													className="img"
													style={{
														backgroundImage: 'url(' + order.image + ')',
													}}></div>
												<div className="info">
													<div className="title">{order.title}</div>
													<div className="single-price">AOA{order.price}</div>
													<div className="desc">
														{order.options &&
															order.options.map((option: any, index: any) => (
																<div key={index}>
																	- {option.key}: {option.value}
																</div>
															))}
													</div>
													<div className="input-group qty">
														<div className="input-group-append">
															<a
																href="#/"
																className="btn btn-default"
																onClick={(event: any) =>
																	deductQty(event, order.id)
																}>
																<i className="fa fa-minus"></i>
															</a>
														</div>
														<input
															type="text"
															className="form-control"
															value={order.quantity}
															readOnly
														/>
														<div className="input-group-prepend">
															<a
																href="#/"
																className="btn btn-default"
																onClick={(event: any) =>
																	addQty(event, order.id)
																}>
																<i className="fa fa-plus"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-3 total-price d-flex flex-column">
											<div>AOA{(order.price * order.quantity).toFixed(2)}</div>
											<div className="text-end mt-auto">
												<button
													onClick={(event) =>
														toggleConfirmation(event, order.id, true)
													}
													className="btn btn-sm btn-outline-gray-500">
													<i className="fa fa-trash"></i>
												</button>
											</div>
										</div>
										{order.confirmation && (
											<div className="pos-remove-confirmation">
												<div className="text-center mx-auto">
													<div>
														<i className="far fa-trash-can fa-2x text-body text-opacity-50"></i>
													</div>
													<div className="mt-1 mb-2">
														Confirme para remover este Item{' '}
													</div>
													<div>
														<button
															onClick={(event) =>
																toggleConfirmation(event, order.id, false)
															}
															className="btn btn-default w-60px me-2">
															Não
														</button>
														<button
															onClick={(event) => removeOrder(event, order.id)}
															className="btn btn-danger w-60px">
															Sim
														</button>
													</div>
												</div>
											</div>
										)}
									</div>
								))}
							</div>
						) : (
							<div className="h-100 d-flex align-items-center justify-content-center text-center p-20">
								<div>
									<div className="mb-3 mt-n5">
										<svg
											width="6em"
											height="6em"
											viewBox="0 0 16 16"
											className="text-gray-300"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
											/>
											<path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
										</svg>
									</div>
									<h4>No order found</h4>
								</div>
							</div>
						)}
					</div>

					<div className="tab-pane fade h-100" id="orderHistoryTab">
						<div className="h-100 d-flex align-items-center justify-content-center text-center p-20">
							<div>
								<div className="mb-3 mt-n5">
									<svg
										width="6em"
										height="6em"
										viewBox="0 0 16 16"
										className="text-gray-300"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
										/>
										<path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
									</svg>
								</div>
								<h5>No order history found</h5>
							</div>
						</div>
					</div>
				</PerfectScrollbar>

				<div className="pos-sidebar-footer">
					<div className="d-flex align-items-center mb-2">
						<div>Subtotal</div>
						<div className="flex-1 text-end h6 mb-0">
							AOA{getSubTotalPrice()}
						</div>
					</div>
					<div className="d-flex align-items-center">
						<div>Taxas (6%)</div>
						<div className="flex-1 text-end h6 mb-0">AOA{getTaxesPrice()}</div>
					</div>
					<hr className="opacity-1 my-10px" />
					<div className="d-flex align-items-center mb-2">
						<div>Total</div>
						<div className="flex-1 text-end h4 mb-0">AOA{getTotalPrice()}</div>
					</div>
					<div className="d-flex align-items-center mt-3">
						<button className="btn btn-default rounded-3 text-center me-10px w-70px">
							<i className="fa fa-bell d-block fs-18px my-1"></i> Serviço
						</button>
						<button className="btn btn-default rounded-3 text-center me-10px w-70px">
							<i className="fa fa-receipt d-block fs-18px my-1"></i> Factura
						</button>
						<button className="btn btn-theme rounded-3 text-center flex-1">
							<i className="fa fa-shopping-cart d-block fs-18px my-1"></i>{' '}
							Enviar Pedido
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
