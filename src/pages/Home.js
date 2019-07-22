import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => (
  <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram podemos encontrar fotos de animales demesticos muy bonitos'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)
