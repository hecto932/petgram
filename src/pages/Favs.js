import React from 'react'
import { Layout } from '../components/Layout'
import { Helmet } from 'react-helmet'
import { FavsWithQuery } from '../container/GetFavorites'

export const Favs = () => (
  <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
