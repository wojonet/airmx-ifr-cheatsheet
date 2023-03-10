import React from 'react'
import { useCurrentSection } from '@/providers/CurrentSection'
import { useEffect, useRef } from 'react'

export interface SectionRefWrapperProps {
  children: React.ReactElement
  sectionId: string
  props?: React.HTMLAttributes<HTMLDivElement>
}

const SectionRefWrapper = ({ children, sectionId, ...props }: SectionRefWrapperProps) => {
  const { addViewableSection } = useCurrentSection()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      addViewableSection(ref)
    }
  }, [ref, addViewableSection])

  return (
    <section ref={ref} id={sectionId} {...props}>
      {children}
    </section>
  )
}

export default SectionRefWrapper
