import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => (
  <Fragment>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Fragment>
)
