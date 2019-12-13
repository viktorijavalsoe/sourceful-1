/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const AnchorLink = ({ children, href, handleClick }) => (
	<Styled.a
		as={Link}
		to={`#${href}`}
		aria-label={`Scroll to ${href}`}
		onClick={handleClick}
		sx={{
			marginX: 3,
			marginBottom: [ 4 ],
			position: 'relative',
			'&::before': {
				content: '""',
				display: 'inline-block',
				backgroundColor: 'secondary',
				position: 'absolute',
				top: '30px',
				left: '-5px',
				width: 'calc(100% + 10px)',
				height: 'calc(100% - 20px)',
				transform: 'scaleX(0)',
				transformOrigin: '0% 50%',
				transition: 'ease-in-out 0.35s',
				borderRadius: 2
			},
			'&:hover': {
				'&::before': { transform: 'scaleX(1)' }
			},
			'&:focus': {
				'&::before': { transform: 'scaleX(1)' }
			},
			'&.active': {
				'&::before': { transform: 'scaleX(1)' }
			}
		}}
	>
		{children}
	</Styled.a>
);
export default AnchorLink;

AnchorLink.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func.isRequired
};