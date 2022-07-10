import React from 'react'
import styled from 'styled-components'

const TitleFrame = ({title}) => {
	const Frame = styled.span`
		border: 2px solid lightgrey;
		padding: 10px;
		flex-basis: 1;
	`
	const Line = styled.span`
		display: inline-block;
		width: auto;
		height: 2px;
		background: lightgrey;
		flex-grow: 1;
		align-self: center;
	`
  return (
	<div className="my-5 d-flex">
		<Line></Line><Frame><h4>{title.toUpperCase()}</h4></Frame><Line></Line>
	</div>
  )
}

export default TitleFrame