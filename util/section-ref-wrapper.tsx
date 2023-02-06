import React from 'react'
import { useCurrentSection } from '@/providers/CurrentSection'
import { useEffect, useRef } from 'react'

export interface SectionRefWrapperProps {
  children: React.ReactElement
  props?: React.HTMLAttributes<HTMLDivElement>
}

const SectionRefWrapper = ({ children, ...props }: SectionRefWrapperProps) => {
  const { addViewableSection } = useCurrentSection()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      addViewableSection(ref)
    }
  }, [ref, addViewableSection])

  return React.cloneElement(children, { ref, ...props })
}

export default SectionRefWrapper
