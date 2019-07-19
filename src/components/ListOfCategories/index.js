import React, { useState, useEffect, Fragment } from 'react'

import { List, Item } from './styles'
import { Category } from '../Category'

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const [categories, setCategories] = useState([])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  // componentDidMount
  useEffect(function () {
    window.fetch('https://petgram-server-hecto932.hflores.now.sh/categories')
      .then(response => response.json())
      .then(response => { setCategories(response) })
  }, [])

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
