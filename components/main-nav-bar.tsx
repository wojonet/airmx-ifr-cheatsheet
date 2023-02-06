import React, { useState } from 'react'
import { IconChevronDown, IconChevronRight, IconPoint } from '@tabler/icons-react'
import { useMantineTheme } from '@mantine/core'
import { useCurrentSection } from '@/providers/CurrentSection'

const menuItems = [
  {
    title: 'Preflight Preperation',
    key: 'preflight-preperation',
    children: [
      {
        title: 'Certification Experience Requirements',
        key: 'certification-experience-requirements',
      },
    ],
  },
  {
    title: 'Other stuff',
    key: 'other-stuff',
  },
]

const NavItem = ({
  children,
  isChildNode = false,
  isActive,
  ...props
}: { children: React.ReactNode; isChildNode?: boolean; isActive?: boolean } & React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>) => {
  return (
    <li className="flex cursor-pointer" {...props}>
      <span className="mr-2">
        {isChildNode ? (
          <IconPoint width={16} />
        ) : isActive ? (
          <IconChevronDown width={16} />
        ) : (
          <IconChevronRight width={16} />
        )}
      </span>
      <span>{children}</span>
    </li>
  )
}

const MainNavBar = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>('preflight-preperation')
  const { currentSection, setCurrentSection } = useCurrentSection()
  const activeItem = currentSection

  return (
    <ul className="main-nav-bar">
      {menuItems.map(item => (
        <NavItem
          key={item.key}
          onClick={() => {
            if (expandedItem === item.key) {
              setExpandedItem(null)
            } else {
              setExpandedItem(item.key)
            }
          }}
          isActive={expandedItem === item.key}
        >
          {item.title}
          {item.children && expandedItem == item.key && (
            <ul>
              {item.children.map(child => (
                <NavItem key={child.key} isChildNode={true}>
                  <a
                    href={`#${child.key}`}
                    className={`block pl-4 rounded-sm ${activeItem === child.key ? `active` : ''}`}
                    onClick={e => {
                      e.stopPropagation()
                      setCurrentSection(child.key)
                      //setActiveItem(child.key)
                    }}
                  >
                    {child.title}
                  </a>
                </NavItem>
              ))}
            </ul>
          )}
        </NavItem>
      ))}
    </ul>
  )
}

export default MainNavBar
