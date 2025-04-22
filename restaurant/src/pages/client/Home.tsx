import React, { useEffect, useContext, useState, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { AppSettings } from '../../configs/app-setting-context';
import { Modal } from 'bootstrap';
import PosMenu from './Category';
import { Content } from './Content';
import { Order } from './Order';
import { ModalOrder } from './Modal';

type TableOrder = {
	id?: string;
	orderId?: string;
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
type Order = {
	id?: string;
	orderId?: string;
	price?: number;
	food?: Food[];
	orderHistory?: string;
	quantity?: number;
}[];


export function Home() {
	const context = useContext(AppSettings);
	const [posMobileSidebarToggled, setPosMobileSidebarToggled] = useState(false);
	const [categoryType, setCategoryType] = useState('all');
	const [tableData, setTableData] = useState<TableOrder>({
		id: '',
		orderId: '',
		category: [],
		food: [],
		order: [],
		orderHistory: '',
	});

	const [orderData, setOrderData] = useState<Order[]>([]);
	// Initialize with an empty array

	const [orderHistoryData, setOrderHistoryData] = useState([]);

	const [modal, setModal] = useState<Modal | null>(null);
	const [modalData, setModalData] = useState<Food>({});
	const [modalQuantity, setModalQuantity] = useState<number>(1);
	const [modalSelectedSize, setModalSelectedSize] = useState<string>('');
	const [modalSelectedAddon, setModalSelectedAddon] = useState<any>([]);

	const toggleMobileSidebar = useCallback((event?: React.MouseEvent) => {
		event?.preventDefault();
		setPosMobileSidebarToggled(true);
	}, []);

	const dismissMobileSidebar = useCallback((event?: React.MouseEvent) => {
		event?.preventDefault();
		setPosMobileSidebarToggled(false);
	}, []);

	const showType = (
		event: React.MouseEvent<HTMLButtonElement>,
		type: string
	) => {
		event.preventDefault();

		if (tableData?.food) {
			// Atualizar apenas o array 'food'
			const updatedFood = tableData.food.map((item) => ({
				...item,
				hide: !(item.type === type || type === 'all'),
			}));

			setTableData({ ...tableData, food: updatedFood }); // Apenas atualizando 'food'
			setCategoryType(type);
		}
	};

	const showPosItemModal = (
		event: React.MouseEvent<HTMLButtonElement>,
		food: Food
	) => {
		event.preventDefault();

		if (food.available) {
			setModalData(food);
			setModalQuantity(1);
			setModalSelectedAddon([]);

			modal?.show();
		}
	};

	const getOrderTotal = () => {
		return orderData ? orderData.length : 0;
	};

	const getOrderHistoryTotal = () => {
		return orderHistoryData ? orderHistoryData.length : 0;
	};
	const deductQty = (
		event: React.MouseEvent<HTMLButtonElement>,
		id: string
	) => {
		event.preventDefault();

		if (orderData) {
			const newData = orderData?.map((obj: any) => {
				if (obj?.id === id && obj.quantity !== undefined) {
					let newQty = parseInt(obj.quantity.toString()) - 1;

					if (newQty < 1) {
						newQty = 1;
					}

					return { ...obj, quantity: newQty };
				}

				return obj;
			});

			setOrderData(newData);
		}
	};
	const addQty = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
		event.preventDefault();

		if (orderData) {
			const newData = orderData.map((obj: any) => {
				if (obj?.id === id && obj.quantity !== undefined) {
					const newQty = parseInt(obj.quantity.toString()) + 1;
					return { ...obj, quantity: newQty };
				}

				return obj;
			});

			setOrderData(newData);
		}
	};
	const getSubTotalPrice = (): string => {
		if (!Array.isArray(orderData)) return '0.00';

		const value = orderData
			.map(
				(item: any) => (Number(item.price) || 0) * (Number(item.quantity) || 0)
			)
			.reduce((acc, curr) => acc + curr, 0);

		return value.toFixed(2);
	};

	const TAX_RATE = 0.06;

	const getTaxesPrice = (): string => {
		const value =
			orderData?.reduce((total: number, item: any) => {
				const price = parseFloat(item?.price?.toString() || '0');
				const quantity = parseInt(item?.quantity?.toString() || '0');
				return total + price * quantity * TAX_RATE;
			}, 0) || 0;

		return value.toFixed(2);
	};

	const getTotalPrice = (): string => {
		const value =
			orderData?.reduce((total: number, item: any) => {
				const price = parseFloat(item?.price?.toString() || '0');
				const quantity = parseInt(item?.quantity?.toString() || '0');
				const tax = price * quantity * TAX_RATE;
				return total + price * quantity + tax;
			}, 0) || 0;

		return value.toFixed(2);
	};
	const toggleConfirmation = (
		event: React.MouseEvent<HTMLButtonElement>,
		id: string,
		value: boolean
	) => {
		event.preventDefault();

		if (!orderData) return;

		const newData = orderData.map((obj: any) =>
			obj.id === id ? { ...obj, confirmation: value } : obj
		);
		setOrderData(newData);
	};
	const removeOrder = (
		event: React.MouseEvent<HTMLButtonElement>,
		id: string
	) => {
		event.preventDefault();

		if (!orderData) return;

		setOrderData(orderData.filter((order: any) => order.id !== id));
	};
	const addModalQty = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setModalQuantity((prevQty: number) => prevQty + 1);
	};

	const deductModalQty = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setModalQuantity((prevQty) => Math.max(1, prevQty - 1));
	};
	const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setModalSelectedSize(event.target.checked ? event.target.value : '');
	};
	const handleAddonChange = () => {
		const selectedAddons = Array.from(
			document.querySelectorAll<HTMLInputElement>('input[name="addon"]:checked')
		).map((elm) => elm.value);

		setModalSelectedAddon(selectedAddons);
	};
	const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		modal?.hide();

		const options = [
			...(modalSelectedSize ? [{ key: 'size', value: modalSelectedSize }] : []),
			...modalSelectedAddon.map((addon: any) => ({
				key: 'addon',
				value: addon,
			})),
		];
		setTimeout(() => {
			setOrderData((prevOrderData: any) => [
				...prevOrderData,
				{
					id: prevOrderData?.length + 1,
					image: modalData?.image,
					title: modalData?.name,
					price: modalData?.price,
					quantity: modalQuantity,
					options,
				},
			]);
		}, 500);
	};
	useEffect(() => {
		context.handleSetAppHeaderNone(true);
		context.handleSetAppSidebarNone(true);
		context.handleSetAppContentFullHeight(true);
		context.handleSetAppContentClass('p-0');

		const modalElement = document.getElementById('modalPosItem');

		if (modalElement) {
			setModal(new Modal(modalElement));
		}

		fetch('/assets/data/pos/customer-order.json')
			.then((res) => res.json())
			.then((result) => {
				setTableData(result);
				setOrderData(result.order);
				setOrderHistoryData(result.history);
			});

		return function cleanUp() {
			context.handleSetAppHeaderNone(false);
			context.handleSetAppSidebarNone(false);
			context.handleSetAppContentFullHeight(false);
			context.handleSetAppContentClass('');
		};

		// eslint-disable-next-line
	}, []);

	return (
		<>
		<div
			className={
				'pos pos-with-menu pos-with-sidebar ' +
				(posMobileSidebarToggled ? 'pos-mobile-sidebar-toggled' : '')
			}
			id="pos">
			<PosMenu
				tableData={tableData}
				categoryType={categoryType}
				showType={showType}
			/>
			<Content tableData={tableData} showPosItemModal={showPosItemModal} />

			<Order
				tableData={tableData}
				dismissMobileSidebar={dismissMobileSidebar}
				orderData={orderData}
				toggleConfirmation={toggleConfirmation}
				getSubTotalPrice={getSubTotalPrice}
				getTaxesPrice={getTaxesPrice}
				getTotalPrice={getTotalPrice}
				addQty={addQty}
				removeOrder={removeOrder}
				getOrderTotal={getOrderTotal}
				getOrderHistoryTotal={getOrderHistoryTotal}
				deductQty={deductQty}
			/>
		</div>

		<a href="#/" className="pos-mobile-sidebar-toggler" onClick={toggleMobileSidebar}>
			<Icon className="iconify display-6" icon="solar:bag-smile-bold-duotone" />
			<span className="badge">{getOrderTotal()}</span>
		</a>
		<ModalOrder modalData={modalData} 
		modalQuantity={modalQuantity}
		deductModalQty={deductModalQty}
		addModalQty={addModalQty}
		addToCart={addToCart} 
		handleSizeChange={handleSizeChange}
		handleAddonChange={handleAddonChange}
		/>
		</>
	);
}
