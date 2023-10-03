import { useContext } from 'react'

import useFetchContent from "../hooks/useFetchContent"
import AppContext from '../context/appContext'

export default function Content() {
  	const { routeToSub, searchValue } = useContext(AppContext)
  const fetchedContent = useFetchContent()
  
  return (
    <></>
  )
}