import * as React from 'react';
import { SVGProps } from 'react';
const CypressIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
		<linearGradient
			id="cypress_svgr_grad"
			x1={0.994}
			x2={0}
			y1={0.48}
			y2={0.452}
			gradientTransform="matrix(47.058 0 0 46.985 .495 .559)"
			gradientUnits="userSpaceOnUse"
		>
			<stop offset={0} stopColor="#11998e" />
			<stop offset={0.991} stopColor="#38ef7d" />
		</linearGradient>
		<path
			fill="url(#cypress_svgr_grad)"
			fillRule="evenodd"
			d="M25.631 43.272a2.145 2.145 0 0 0-1.953 2.312 2.137 2.137 0 0 0 2.312 1.952 23.534 23.534 0 0 0 15.429-7.594 23.567 23.567 0 0 0 6.133-16.067 23.575 23.575 0 0 0-7.038-16.578C36.057 2.93 30.046.504 23.811.56S11.61 3.152 7.233 7.598A23.57 23.57 0 0 0 .496 24.301a2.14 2.14 0 0 0 4.278-.039 19.288 19.288 0 0 1 5.513-13.665A19.291 19.291 0 0 1 23.85 4.838a19.292 19.292 0 0 1 13.665 5.513 19.293 19.293 0 0 1 5.759 13.563 19.258 19.258 0 0 1-5.015 13.147 19.268 19.268 0 0 1-12.628 6.211zM7.058 33.194a2.14 2.14 0 0 0-3.768 2.023 23.59 23.59 0 0 0 10.669 10.139 2.137 2.137 0 0 0 2.852-1.01 2.148 2.148 0 0 0-1.015-2.857 19.3 19.3 0 0 1-8.738-8.295zm15.879-12.615h-3.358q-.307-1.332-.884-1.87-.576-.538-1.627-.538-1.589 0-2.204 1.127-.666 1.307-.666 3.203 0 1.922.756 3.037t2.088 1.115q1.051 0 1.628-.551.576-.551.909-1.832h3.358q-.257 2.562-2.051 3.972-1.563 1.255-3.869 1.255-3.229 0-4.895-2.075-1.461-1.794-1.461-4.844 0-3.69 1.922-5.586 1.666-1.666 4.511-1.666 2.716 0 4.305 1.563 1.358 1.384 1.538 3.69zm7.995 4.921 2.793-9.892h3.614L31.752 31.65q-.589 1.717-1.563 2.371-.974.653-2.896.653-1.768 0-2.46-.461l.538-2.384q.923.231 1.538.231.897 0 1.537-.602.641-.602.641-1.422v-.282l-5.049-14.146h3.87z"
		/>
	</svg>
);
export default CypressIcon;
