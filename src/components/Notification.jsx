import { connect } from 'react-redux'

const Notification = (props) => {
	const notifications = props.notification

	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1,
	}

	if (!notifications) {
		return null
	}

	return <div style={style}>{notifications}</div>
}

const mapStateToProps = (state) => {
	return {
		notification: state.notification,
	}
}

export default connect(mapStateToProps)(Notification)
