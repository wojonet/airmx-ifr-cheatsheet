import React from 'react'

const useScrollToLocation = () => {
  const scrolledRef = React.useRef(false)
  let hash = ''
  if (typeof window !== 'undefined') {
    hash = window.location.hash
  }
  const hashRef = React.useRef(hash)

  React.useEffect(() => {
    if (hash) {
      // We want to reset if the hash has changed
      if (hashRef.current !== hash) {
        hashRef.current = hash
        scrolledRef.current = false
      }

      // only attempt to scroll if we haven't yet (this could have just reset above if hash changed)
      if (!scrolledRef.current) {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          scrolledRef.current = true
        }
      }
    }
  })
}

export default useScrollToLocation
