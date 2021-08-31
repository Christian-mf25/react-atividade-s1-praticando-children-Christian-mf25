import "./style.css"


function CenteredCard ( {children} ){

	return(
		<div className="box">
			<span className="child">
				{children}
			</span>
		</div>

	)
}


export default CenteredCard