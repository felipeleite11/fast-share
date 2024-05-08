'use client'

import { ReactNode, createContext } from "react"

import { User } from "@/types/User"

interface SessionContextProps {
	user: User
}

export const SessionContext = createContext({} as SessionContextProps)

export function SessionProviver({ children }: { children: ReactNode}) {
	return (
		<SessionContext.Provider 
			value={{
				user: {
					id: 1,
					name: 'Felipe Leite',
					username: 'felipeleite11',
					avatar: 'https://integrare-os-minio.nyr4mj.easypanel.host/integrare-os/93794f0c-8a5d-495a-88e6-a94bf0bebf5f..jpg'
				}
			}}
		>
			{children}
		</SessionContext.Provider>
	)
}