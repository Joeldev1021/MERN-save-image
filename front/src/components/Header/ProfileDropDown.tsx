import React, { useState, useRef, useEffect } from 'react'
import { INavigation } from '../../interface'

const ProfileDropDown = (props:any) => {
  const [state, setState] = useState<boolean>(false)
  /* const profileRef = useRef<HTMLButtonElement>() */
  const profileRef = useRef < HTMLButtonElement >({}as HTMLButtonElement)

  const navigation:INavigation[] = [
    { title: 'Dashboard', path: 'javascript:void(0)' },
    { title: 'Settings', path: 'javascript:void(0)' },
    { title: 'Log out', path: 'javascript:void(0)' }
  ]

  useEffect(() => {
    const handleDropDown = (e:any) => {
      if (!profileRef.current.contains(e.target)) setState(false)
    }
    document.addEventListener('click', handleDropDown)
  }, [])

  return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        className="w-full h-full rounded-full"
                    />
                </button>
                <div className="lg:hidden">
                    <span className="block">Micheal John</span>
                    <span className="block text-sm text-gray-500">john@gmail.com</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((navItem:INavigation, index:number) => (
                        <li key={navItem.title}>
                            <a key={index} className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" href={navItem.path}>
                                {navItem.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
  )
}
export default ProfileDropDown
