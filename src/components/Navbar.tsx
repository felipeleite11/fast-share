'use client'

import React, { useContext } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { SessionContext } from '@/contexts/Session'
import { User } from '@/types/User'

interface DropdownProps {
	user: User
}

const defaultAvatar = 'https://minio.robot.rio.br/api/v1/buckets/fast-share/objects/download?preview=true&prefix=ZG8tdXRpbGl6YWRvci5wbmc='

export function Navbar() {
	const { user } = useContext(SessionContext)

	return (
		<nav className="bg-transparent  h-20 flex justify-between place-items-center">
			<h1 className="border-yellow-500 h-full px-8 flex items-center text-lg font-semibold">
				Fast Share
			</h1>

			<div className="px-8 flex flex-col">
				<div className={twMerge(
					'group',
					'h-11 w-11 rounded-full flex justify-center items-center',
					'bg-gradient-to-tl from-sky-500 to-orange-500',
					'hover:scale-105 hover:shadow-md transition-transform'
				)}>
					<Image 
						className="rounded-full h-10 w-10 cursor-pointer"
						alt={user.name}
						src={user.avatar || defaultAvatar}
						width={80}
						height={80}
					/>

					<Dropdown user={user} />
				</div>
			</div>
		</nav>
	)
}

function Dropdown({ user }: DropdownProps) {
	return (
		<div className="hidden group-hover:block hover:block absolute mt-10 pb-4 min-w-[12rem] w-fit h-fit right-0 top-0">
			<div className="bg-slate-200 dark:bg-sky-800 rounded-md overflow-hidden flex flex-col w-full h-full mt-4 p-4 drop-shadow-lg">
				<div className="flex flex-col gap-1">
					<h1 className="text-md font-bold">{user.name}</h1>
					<span className="text-sm dark:text-slate-300">{user.username}</span>
				</div>
 
				<ul className="flex flex-col gap-1 mt-4">
					<li className="w-full h-fit px-2 py-1 cursor-pointer text-md dark:hover:bg-sky-900">
						My profile
					</li>
					<li className="w-full h-fit px-2 py-1 cursor-pointer text-md dark:hover:bg-sky-900">
						Usage
					</li>
					<li className="w-full h-fit px-2 py-1 cursor-pointer text-md dark:hover:bg-sky-900">
						Logout
					</li>
				</ul>
			</div>
		</div>
	)
}