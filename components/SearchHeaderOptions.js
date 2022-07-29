import User from './User'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { SearchIcon, PhotographIcon } from '@heroicons/react/outline'

import SearchHeaderOption from './SearchHeaderOption'

export default function SearchHeaderOptions() {
	const router = useRouter()
	const searchInputRef = useRef(null)

	function search(event) {
		event.preventDefault()
		const term = searchInputRef.current.value
		if (!term.trim()) return

		router.push(`/search?term=${term.trim()}`)

	}

	return (
		<div className='flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b-2'>
			<SearchHeaderOption title="All" Icon={SearchIcon} selected={router.query.searchType === '' || !router.query.searchType} />
			<SearchHeaderOption title="Images" Icon={PhotographIcon} selected={router.query.searchType === 'image'} />
		</div>
	)
}
