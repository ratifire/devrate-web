import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { styles } from './SliderSubtitle.styles'

const SliderSubtitle = ({ title, variant = 'subtitle2' }) => {
  return (
    <Typography sx={styles.title} variant={variant}>{ title }</Typography>
  )
}

SliderSubtitle.propTypes = {
  title:PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}
export default SliderSubtitle;
