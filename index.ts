interface Route {
	url: RegExp;
	page: any;
	params?: string[];
}

export function router({
	routes = [],
	pathname = '',
	subdomain = ''
}: {
	routes: Route[];
	pathname: string;
	subdomain?: string;
}) {
	let matchedRouteParams;
	let page;
	pathname = `${subdomain ? `/${subdomain}` : ''}${pathname}`;

	for (const route of routes) {
		const match = pathname.match(route.url);

		if (match) {
			page = route.page;
			const params: any = {};
			route.params?.forEach((r, index) => {
				params[r] = match[index + 1];
			});
			matchedRouteParams = params;
			break;
		}
	}

	return [page, matchedRouteParams];
}

const routes: any = [];

export function urlPatterns(routes: any[] = []) {
	return routes.map((route: any, i) => {
		let segments: string[] = route.path.split('/').filter(Boolean);
		let params: string[] = [];
		let pattern = segments.reduce((prev: string, curr: string, index: number) => {
			if (curr.startsWith(':') && index !== 0) {
				params.push(curr?.split(':').filter(Boolean).join(''));
				curr = `([^/]+)`;
			}
			let str = prev + '\\/' + curr;
			return str + (index === segments.length - 1 ? '\\/?$' : '');
		}, '^');
		return { url: new RegExp(pattern), page: route.html, params };
	});
}
