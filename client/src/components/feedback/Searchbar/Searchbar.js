import { oneOf } from 'prop-types';
import { useEffect } from 'react';
// @TODO Icon, Input, Button
import { Icon, Input } from '../../core';
// @TODO Spinner
import { Spinner } from '../Spinner';
import { client } from '../../../utils/api-client';

/**
 * @param {string} searchOption 
 * @returns {JSX} of search bar and result items from query
 */
export default function SearchBar(searchOption = 'players') {
	const [status, setStatus] = useState('IDLE');
	const [data, setData] = useState(undefined);
	const [query, setQuery] = useState('');
	const [queried, setQueried] = useState(false);
    const [displayListItems, setListItems] = useState(undefined);

	const isLoading = status === 'LOADING';
	const isSuccess = status === 'SUCCESS';

	useEffect(() => {
		if (!queried) return;
		setStatus('LOADING');
		client(`${searchOption}`).then(resData => {
			setData(
				resData.filter(d =>
					d.name
						? d.name.includes(query)
						: d.filename && d.filename.includes(query)
				)
			);
			setStatus('SUCCESS');
		});
	}, [query, queried]);

	function handleSearchSubmission(e) {
		e.preventDefault();
		setQueried(true);
		setQuery(e.target.elements.search.value);
	}

	if (isSuccess && data) {
		if (data.players && data.players.length) {
			setListItems(
				<PlayersList>
					{data.players.map(player => (
						<PlayerItem key={player.id} aria-label={player.name}>
							<Avatar source={player.picture} />
							<DisplayText>{player.name}</DisplayText>
						</PlayerItem>
					))}
				</PlayersList>
			);
		} else if (data.docs && data.docs.length) {
			setListItems(
				<DocsList>
					{data.docs.map(doc => (
						<DocItem key={doc.id} aria-label={doc.filename} onClick={() => {}}>
							<DisplayText>
								{doc.author} - {doc.filename}
							</DisplayText>
						</DocItem>
					))}
				</DocsList>
			);
		} else {
			setListItems(<DisplayText>No results found for "${query}"</DisplayText>);
		}
	}

	return (
		<Block>
			<form onSubmit={handleSearchSubmission}>
				<Input
					placeholder={`Search ${searchOption.toLowerCase()}...`}
					id='search'
				/>
				<Label htmlFor='search'>
					<Button
						icon='search'
						type='submit'
						style={{
							border: 0,
							position: 'relative',
							marginLeft: '-32px',
							background: 'transparent',
						}}
					>
						{isLoading ? (
							<Spinner size='tiny' />
						) : (
							<Icon icon='search' aria-label='search' />
						)}
					</Button>
				</Label>
			</form>
            {displayListItems && displayListItems};
		</Block>
	);
}

SearchBar.propTypes = {
    searchOption: oneOf(['players', 'docs'])
}