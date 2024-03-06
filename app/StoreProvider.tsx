'use client'

import { AppStore, makeStore } from "@/lib/store"
import { useRef } from "react"
import { Provider } from "react-redux"

interface IStoreProvider {
  children: React.ReactNode
}

const StoreProvider: React.FC<IStoreProvider> = ({ children }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider