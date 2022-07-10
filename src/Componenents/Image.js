import React from 'react'
import styled from 'styled-components'

const Image = ({src, ml}) => {

  return (
	<div style={{margin: `0 auto 0 ${parseInt(ml) || 'auto'}px`}}>
		<img className="mx-3" src={src} style={{width: '273px', height: '545px', display:'inline-block'}}/>
	</div>
  )
}

export default Image