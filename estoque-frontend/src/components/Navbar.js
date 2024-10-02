import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/SGE.png";
import { useState } from "react";

const navigation = [{ name: "Home", href: "/", current: true }];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const [ isRegister, setIsRegister] = useState(false);

	const handleLogin = () => {
		setIsRegister(false);
	};

	return (
		<Disclosure as="nav" className="bg-gray-50 font-league-spartan">
			<div className="mx-0 max-w-100 px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex items-center justify-start flex-1">
						<div className="flex items-center">
							{/* Ícone e Logo */}
							<img alt="Your Company" src={logo} className="h-16 w-auto" />
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										aria-current={item.current ? "page" : undefined}
										className={classNames(
											item.current
												? "bg-gray-50 text-black hover:bg-gray-100"
												: "text-gray-400 hover:bg-gray-300 hover:text-white",
											"rounded-full px-3 py-2 text-xl font-semibold",
										)}
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>

					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						{/* Botão de Notificações */}
						<button
							type="button"
							className="relative rounded-full bg-gray-950 p-1 text-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-gray-400"
						>
							<span className="absolute -inset-1.5" />
							<span className="sr-only">View notifications</span>
							<BellIcon aria-hidden="true" className="h-6 w-6" />
						</button>

						{/* Dropdown de Perfil */}
						<Menu as="div" className="relative ml-3">
							<div>
								<MenuButton className="relative flex rounded-full bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400">
									<span className="absolute -inset-1.5" />
									<span className="sr-only">Open user menu</span>
									<img
										alt=""
										src="https://plus.unsplash.com/premium_vector-1723276520843-4a7b1f939a95?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										className="h-8 w-8 rounded-full"
									/>
								</MenuButton>
							</div>
							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
							>
								<MenuItem>
									<a
										href="/login"
										className="block px-4 py-2 text-lg font-semibold text-black hover:bg-gray-200"
										onClick={handleLogin}
									>
										Login
									</a>
								</MenuItem>
							</MenuItems>
						</Menu>
					</div>
				</div>
			</div>

			<DisclosurePanel className="sm:hidden">
				<div className="space-y-1 px-2 pb-3 pt-2">
					{navigation.map((item) => (
						<DisclosureButton
							key={item.name}
							as="a"
							href={item.href}
							aria-current={item.current ? "page" : undefined}
							className={classNames(
								item.current
									? "bg-gray-900 text-white"
									: "text-gray-300 hover:bg-gray-700 hover:text-white",
								"block rounded-md px-3 py-2 text-base font-medium",
							)}
						>
							{item.name}
						</DisclosureButton>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
}